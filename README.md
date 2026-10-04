# Station demo day kit

A trip planner for a cattle station demo day. It turns a demo request into the flights, the car, the rooms, the freight date, the deadlines and a brief for a booking agent. Arjun Kulshrestha built it for his Operations Associate application to Brumby.

This is unofficial work. It is not a Brumby product and it uses public information only.

Live page: https://arjunadelaide.github.io/station-demo-day-kit/

## What it does

1. You enter a demo request: the town, the date, the crew size and the drive time. Four more fields are the same as the Brumby demo form.
2. The planner sets the trip: the flight out with a "land by" time, the flight back with a "depart after" time, the car, the rooms and the freight date. Each line has a search link with the dates and the travellers filled in.
3. The planner lists the deadlines and puts them in one calendar file.
4. "Copy agent brief" gives the hand-off for the booking agent. "Copy Slack request" gives the approval message.
5. The run sheet, the kit list, the pilot questions and the guest messages are in the lower sections.

## The booking agent

`skill/SKILL.md` has the agent instructions. The agent takes the brief, searches flights, cars and rooms, and returns a shortlist. It does not pay. A person approves and books.

The page shows one real run for Bowen, recorded from Google Flights on 4 October 2026. The data is in `regions.js` under `sampleRun`.

## The rules

The planner rules are in one object, `RULES`, in `index.html`:

- Fly out the day before. With no direct flight, fly out two days before.
- Land early enough to reach the property with 2.5 hours of daylight.
- Allow 45 minutes at the airport for bags and the car.
- Fly back after pack down, plus the drive, plus 75 minutes. After 16:30, fly the next morning.
- Freight leaves 7 days before the outbound flight.
- Book 21 days before. Confirm numbers 7 days before.

Each rule is a guess until Brumby sets it. The schedule is a template: select "Edit schedule" in the run sheet. The page keeps the template in the browser, and the trip plan follows it.

## Files

- `index.html`: the page. It has no build step and no server.
- `regions.js`: the fact file. Each value has a source. A value with `guess: true` is an assumption.
- `skill/SKILL.md`: the booking agent instructions.

## Run it

```bash
python3 -m http.server 8651
```

Then open http://localhost:8651.

## Data

- Weather and town search: Open-Meteo (open-meteo.com).
- Sunrise and sunset: calculated from the date and the location.
- Flight search links: Google Flights. Car links: Kayak. Room links: Booking.com.
- Region and operating facts: see the source links in `regions.js`. Checked 4 October 2026.

A plan link holds the request only. It does not hold the property name or the host name.
