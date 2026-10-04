# Station demo day kit

A run sheet builder for a cattle station demo day. Arjun Kulshrestha built it for his Operations Associate application to Brumby.

This is unofficial work. It is not a Brumby product and it uses public information only.

## What it does

1. You enter a demo request. The first four fields are the same as the Brumby demo form.
2. The page checks the travel, the season, first light, the live weather and the mob size.
3. The page returns a run sheet with two columns: the station crew and the Sydney operations centre.
4. The page writes a kit list, six questions for the Chief Remote Pilot and three guest messages.
5. You can copy the plan for Notion, save a calendar file, copy a link to the plan or print it.

## Change the schedule

The schedule is a template. Select "Edit schedule" to change the steps, the minutes and the guest arrival time. The page keeps your template in the browser. "Reset to default" restores the first version.

The link holds the request only (town, date, head count, guests, reason, frequency). It does not hold the property name or the host name.

## Files

- `index.html`: the page. It has no build step and no server.
- `regions.js`: the fact file. Each value has a source. A value with `guess: true` is an assumption.
- `skill/SKILL.md`: instructions for Claude to make the same plan from one sentence.

## Run it

```bash
python3 -m http.server 8651
```

Then open http://localhost:8651.

## Data

- Weather and town search: Open-Meteo (open-meteo.com).
- First light: calculated from the date and the location.
- Region and operating facts: see the source links in `regions.js`. Checked 4 October 2026.

## What is a guess

The demo format, the times and the kit list are guesses. For this reason you can edit the schedule.
