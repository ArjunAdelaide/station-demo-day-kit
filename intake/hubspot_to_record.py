#!/usr/bin/env python3
"""Turn a HubSpot demo form submission into a demo record.

Input: a JSON file in one of two shapes.
  1. A form submission: {"fields": [{"name": "email", "value": "..."}, ...]}
  2. A workflow webhook: {"properties": {"email": "...", ...}}
The field names are the names that the Brumby demo form sends to HubSpot.

Usage:
  python3 intake/hubspot_to_record.py test/hubspot-submission.json --received 2026-10-05
"""
import argparse
import datetime
import json
import os
import re

SITE = "https://arjunadelaide.github.io/station-demo-day-kit/"
NOTICE_DAYS = 21

# The same lists as regions.js. The position in each list is the index in the plan link.
REASONS = [
    "Increased monitoring and control", "Time savings", "Better pasture utilisation",
    "Higher stocking rates", "Less manual labour", "Something else",
]
FREQUENCIES = [
    "More than twice per week", "1 to 2 times per week", "Every 1 to 2 weeks",
    "Less than monthly or set-stocked",
]
REGIONS = {"bowen": "Bowen, QLD", "armidale": "Armidale, NSW", "cloncurry": "Cloncurry, QLD"}


def properties(payload):
    """Return a flat dict of field name to value."""
    if "fields" in payload:
        return {f["name"]: f.get("value") for f in payload["fields"]}
    props = payload.get("properties", payload)
    return {k: (v.get("value") if isinstance(v, dict) else v) for k, v in props.items()}


def norm(text):
    return re.sub(r"[^a-z0-9]+", " ", (text or "").lower().replace("–", " to ").replace("-", " to ")).strip()


def match(value, options):
    """Return the index of the option that the value names, or None."""
    want = norm(value)
    for i, option in enumerate(options):
        if norm(option) == want or norm(option.replace(" or ", " ")) == norm(want.replace(" or ", " ")):
            return i
    for i, option in enumerate(options):
        if want and (want in norm(option) or norm(option) in want):
            return i
    return None


def fact(field, value, source, status):
    return {"field": field, "value": value, "source": source, "status": status}


def build(payload, received):
    p = properties(payload)
    facts, missing = [], []

    name = " ".join(x for x in [p.get("firstname"), p.get("lastname")] if x)
    facts.append(fact("name", name or None, "form: firstname, lastname", "confirmed" if name else "missing"))
    facts.append(fact("email", p.get("email"), "form: email", "confirmed" if p.get("email") else "missing"))
    facts.append(fact("phone", p.get("phone") or None, "form: phone", "confirmed" if p.get("phone") else "missing"))

    where = p.get("where_based") or ""
    region = next((rid for rid in REGIONS if rid in where.lower()), None)
    facts.append(fact("town", REGIONS.get(region, where) or None, "form: where_based (%s)" % where, "confirmed" if where else "missing"))
    facts.append(fact("property address", None, "the form does not ask for it", "missing"))

    digits = re.sub(r"[^0-9]", "", p.get("herd_size") or "")
    facts.append(fact("head", int(digits) if digits else None, "form: herd_size (%s)" % p.get("herd_size"), "confirmed" if digits else "missing"))

    ri = match(p.get("interested_benefit"), REASONS)
    fi = match(p.get("mob_move_frequency"), FREQUENCIES)
    facts.append(fact("main reason", REASONS[ri] if ri is not None else p.get("interested_benefit"), "form: interested_benefit", "confirmed" if ri is not None else "guess"))
    facts.append(fact("mob moves", FREQUENCIES[fi] if fi is not None else p.get("mob_move_frequency"), "form: mob_move_frequency", "confirmed" if fi is not None else "guess"))
    facts.append(fact("timing", p.get("demo_timeframe"), "form: demo_timeframe", "confirmed" if p.get("demo_timeframe") else "missing"))
    facts.append(fact("guest count", None, "the form does not ask for it", "missing"))

    # The first two Wednesdays with enough notice. The calendar check comes after this step.
    day, dates = received + datetime.timedelta(days=NOTICE_DAYS), []
    while len(dates) < 2:
        if day.weekday() == 2:
            dates.append(day.isoformat())
        day += datetime.timedelta(days=1)
    facts.append(fact("date", dates, "rule: first two Wednesdays with %d days of notice" % NOTICE_DAYS, "rule"))

    for f in facts:
        if f["status"] == "missing":
            missing.append(f["field"])

    where_param = region or (where.strip() or "unknown")
    link = SITE + "?where=%s&date=%s&crew=2" % (where_param.replace(" ", "%20"), dates[0])
    if digits:
        link += "&head=" + digits
    if ri is not None:
        link += "&reason=%d" % ri
    if fi is not None:
        link += "&moves=%d" % fi

    town_slug = re.sub(r"[^a-z0-9]+", "-", (region or where).lower()).strip("-") or "unknown"
    return {
        "id": "%s-%s" % (received.isoformat(), town_slug),
        "received": received.isoformat(),
        "channel": "hubspot form",
        "status": "waiting for accept",
        "facts": facts,
        "missing": missing,
        "proposedDates": dates,
        "planLink": link,
    }


def report(record):
    f = {x["field"]: x["value"] for x in record["facts"]}
    return "\n".join([
        "NEW DEMO REQUEST: %s, %s" % (f.get("name"), f.get("town")),
        "Herd: %s. Reason: %s. Mob moves: %s. Timing: %s." % (f.get("head"), f.get("main reason"), f.get("mob moves"), f.get("timing")),
        "Proposed dates: %s or %s (calendar not checked yet)" % tuple(record["proposedDates"]),
        "Missing: %s" % ", ".join(record["missing"]),
        "Trip plan: %s" % record["planLink"],
        "Waiting for a person: one approval for the bookings.",
    ])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("payload")
    ap.add_argument("--received", default=datetime.date.today().isoformat())
    ap.add_argument("--out", default="records")
    a = ap.parse_args()
    record = build(json.load(open(a.payload, encoding="utf-8")), datetime.date.fromisoformat(a.received))
    os.makedirs(a.out, exist_ok=True)
    path = os.path.join(a.out, record["id"] + ".json")
    json.dump(record, open(path, "w", encoding="utf-8"), indent=2)
    print(report(record))
    print("Record: " + path)


if __name__ == "__main__":
    main()
