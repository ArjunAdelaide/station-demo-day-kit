---
name: demo-day
description: Build a station demo day plan (checks, two-column run sheet, kit list, guest messages) from one sentence, such as "demo near Bowen on 18 May for 25 guests, 1,800 head". Use for demo days, field demos and customer events on a cattle property.
---

Build a demo day plan for: $ARGUMENTS

## Inputs

Read these from the request. Ask one question only if the town or the date is missing.

- Town or region
- Date
- Number of guests (default 20)
- Head count (default: not given)
- Main reason and how often the mob moves, if given

## Facts

1. Read `regions.js` in this folder. Use its values for the flight, the drive and the climate. Keep the source name with each value.
2. If the town is not in `regions.js`, find the nearest airport with a Sydney service and the drive time. Give a source link for each. If you cannot find a source, write "not found". Do not estimate.
3. Get the forecast for the date from Open-Meteo if the date is 15 days away or less. Report wind, gusts, rain chance and temperature for the demo hours.
4. Use the `operating` list in `regions.js` for how Brumby flies: a dock on the property, a remote pilot in Sydney, early flights.

## Output

Write the plan in this order. Use short sentences and plain words.

1. **Checks**: flight, drive, season, first light, weather, mob size. If the herd is above 2,000 head, tell the crew to use one mob of 2,000 or less.
2. **Run sheet**: a table with three columns: time, station crew, Sydney operations centre. Start the crew 90 minutes before the guests arrive. Guests arrive about one hour after sunrise.
3. **Kit list**: scale chairs, water and screens to the guest count.
4. **Questions for the Chief Remote Pilot**: operating area, guest distance, weather limits, other aircraft, lost link, stop call. Ask them. Do not answer them.
5. **Messages**: invite, reminder, follow-up. Warm and short. Use the words a grazier uses: mob, paddock, smoko.

## Rules

- Mark each assumption with "(guess)". The demo format and the times are guesses unless the user gives them.
- Do not state a flight rule. Flight rules come from the operator's approved procedures and from CASA.
- Do not invent a number. Each number has a source or a "(guess)" mark.
