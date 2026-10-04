# Station demo day kit

A prototype of one automation for a cattle station demo day. A grazier books a demo on the website form. An agent plans the whole trip with no person in the loop: the date, the flights, the car, the rooms, the freight, the calendar holds and the messages. A person gives one approval for the bookings. My list of the same work by hand has 14 steps. Arjun Kulshrestha built it for his Operations Associate application to Brumby.

The request on the page is a sample. The flight, car and room options are real search results, recorded on 5 October 2026. A person approves one line, or all lines with one press. Each "Book" button opens the booking page with the trip filled in. The page does not pay and does not book.

This is unofficial work. It is not a Brumby product and it uses public information only.

Live page: https://arjunadelaide.github.io/station-demo-day-kit/

## What it does

1. You enter a demo request: the town, the date, the crew size and the drive time. Four more fields are the same as the Brumby demo form. The plan updates when you change a field.
2. The planner sets the trip: the flight out with a "land by" time, the flight back with a "depart after" time, the cars, the rooms and the freight date. Each line has a search link with the dates and the travellers filled in.
3. For a town that is not in the fact file, the planner finds the nearest airport with scheduled flights, the drive from the airport and the road distance from Sydney.
4. The planner lists the deadlines and puts them in one calendar file.
5. "Copy itinerary" gives the day-by-day plan for the crew. "Copy freight request" gives the freight details for a carrier or a freight contact.
6. "Run the agent in Claude" opens Claude with the brief for this request. "Copy agent brief" and "Copy Slack request" give the hand-off and the approval message.
7. The run sheet, the kit list, the pilot questions and the guest messages are in the lower sections.

## The intake agent

`skill/demo-intake/SKILL.md` has the instructions. The agent reads a demo request from the inbox, fills the demo record with a source and a status for each fact, drafts one question to the grazier for the missing facts, and returns the trip plan link. It sends nothing. A person sends the draft.

`test/demo-request.txt` is a test message. I sent it to my own inbox. The agent found it with one search, read it, built the record on the page and wrote the reply as a draft in the same thread. It sent nothing. The agent also read my Google Calendar for the proposed dates and made 9 holds with no guests.

`intake/hubspot_to_record.py` turns a HubSpot form submission into the same record. The Brumby demo form sends its answers to HubSpot, so in a company setup a HubSpot workflow calls the agent with the fields. `test/hubspot-submission.json` and `test/hubspot-webhook.json` are sample inputs with the field names of the form.

```bash
python3 intake/hubspot_to_record.py test/hubspot-submission.json --received 2026-10-05
```

## The booking agent

`skill/demo-trip-agent/SKILL.md` has the agent instructions. The agent takes the brief, searches flights, cars and rooms, and returns a shortlist. It does not pay. A person approves and books.

The page shows one real run for Bowen: flights from Google Flights, cars from Kayak and rooms from Booking.com, recorded on 5 October 2026. The data is in `regions.js` under `sampleRun`. In the planner, the page shows it as the result only when the request is the same. For each other request it shows the limits and the live search links.

The page does not get live prices. That needs an account with a flight data provider and a small server.

## The rules

The planner rules are in one object, `RULES`, in `index.html`:

- Fly out the day before. With no direct flight, fly out two days before.
- Land early enough to reach the property with 2.5 hours of daylight.
- Allow 45 minutes at the airport for bags and the car.
- Fly back after pack down, plus the drive, plus 75 minutes. After 16:30, fly the next morning.
- Date: the first Wednesday with 21 days of notice.
- Flights: the non-stop flight if it costs no more than $100 more for each person than the cheapest flight that fits. If not, the cheapest flight that fits and lands before 23:00.
- Car: the cheapest SUV at the airport terminal. Rooms: free cancellation, a review score of 8 or more, then the lowest price.
- One vehicle for each 4 people. One room for each person.
- Road freight covers 700 km a day, plus 2 days for handling. Freight does not leave on a weekend.
- Book 21 days before. Confirm numbers 7 days before.

Each rule is a guess until Brumby sets it. The schedule is a template: select "Edit schedule" in the run sheet. The page keeps the template in the browser, and the trip plan follows it.

## Files

- `index.html`: the page. It has no build step and no server.
- `regions.js`: the fact file. Each value has a source. A value with `guess: true` is an assumption.
- `skill/demo-intake/SKILL.md`: the intake agent instructions.
- `skill/demo-trip-agent/SKILL.md`: the booking agent instructions.
- `test/demo-request.txt`: a test request message.
- `intake/hubspot_to_record.py`: the HubSpot form handler.
- `test/hubspot-submission.json`, `test/hubspot-webhook.json`: sample HubSpot inputs.

## Run it

```bash
python3 -m http.server 8651
```

Then open http://localhost:8651.

## Data

- Weather and town search: Open-Meteo (open-meteo.com).
- Sunrise and sunset: calculated from the date and the location.
- Flight links: the Virgin Australia booking page for a Virgin flight, and Kayak for the other flights. Each link has the route, the date and the travellers in it. Car links: Kayak. Room links: Booking.com. The freight request and the guest invite open in Gmail with the subject and the text filled in.
- Airports: OurAirports open data. Drive and freight distances: the OpenStreetMap road router (OSRM).
- Region and operating facts: see the source links in `regions.js`. Checked 4 October 2026.

A plan link holds the request only. It does not hold the property name or the host name.
