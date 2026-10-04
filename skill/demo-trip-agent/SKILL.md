---
name: demo-trip-agent
description: Take a trip brief from the station demo day kit, search flights, cars and rooms, and return a shortlist for a person to approve. Use it for demo days, field days and customer visits to a cattle property. The agent does not pay.
---

Book the trip in this brief: $ARGUMENTS

The brief comes from the "Copy agent brief" button on the planner page. It has the route, the dates, the time limits, the number of travellers and the search links.

## Steps

1. Read the brief. Write down the two time limits: "land by" for the flight out and "depart after" for the flight back.
2. Open the "Out" search link. Read the results. Record 3 options: airline, stops, departure time, arrival time and the price for all travellers.
3. Open the "Back" search link. Record 3 options in the same way.
4. Mark each option that does not fit its time limit. All times are local to the airport.
5. If no flight back fits, search the next day and add one night to the rooms.
6. Open the "Car" link and the "Rooms" link. Record 2 options for each, with the total price.
7. Name the fastest pair of flights and the cheapest pair that fit. Give the price difference and the arrival time difference.
8. Post the shortlist. Stop.

## Output

```
TRIP SHORTLIST: <town>, demo on <date>
Out, <day>:  <airline>, <stops>, <dep> to <arr>, $<price>  [fits / does not fit]
Back, <day>: <airline>, <stops>, <dep> to <arr>, $<price>  [fits / does not fit]
Fastest pair: $<total>. Cheapest pair that fits: $<total>.
Car: <supplier>, <vehicle>, $<total>
Rooms: <place>, <rooms> x <nights>, $<total>
Checked: <date and time>, <source>
Decision needed: <the one choice a person must make>
```

## Rules

- Do not pay. Do not enter card details. Do not accept terms. Stop before the payment page.
- Do not sign in to an account and do not create one.
- Quote each price and time as the page shows it. If a page does not load, write "not found". Do not estimate.
- Give the date and the source of each search. Prices change.
- If the brief has no airport code, find the nearest airport with a Sydney connection and give a source link for it.
- Leave out a flight that has an overnight connection. Say that you left it out, and give its price.
- Say what the price includes. Bag fees are often extra.
- Lithium batteries: a passenger can carry no more than two spare batteries between 100 Wh and 160 Wh, in carry-on, with airline approval (CASA). Larger batteries are outside this allowance. Do not plan to fly the dock or the aircraft batteries as baggage.
