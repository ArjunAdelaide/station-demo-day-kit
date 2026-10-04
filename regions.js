// Facts for the station demo day kit. Checked 4 Oct 2026.
// Each value has a source. A value with guess: true is Arjun's assumption, not a Brumby fact.

window.KIT_DATA = {
  checked: "4 October 2026",

  regions: [
    {
      id: "bowen",
      town: "Bowen",
      state: "QLD",
      label: "Bowen, North Queensland",
      lat: -20.014,
      lon: 148.248,
      tz: "Australia/Brisbane",
      tropical: true,
      why: {
        text: "Sam Rogers grew up on a cattle farm at Bowen.",
        source: "Forbes Australia, 14 Jan 2026",
        url: "https://www.forbes.com.au/news/innovation/grazemate-raises-1-2-million-19-year-old-ceo-cattle-mustering/"
      },
      flight: {
        headline: "Direct, about 2.5 h",
        text: "Sydney to Whitsunday Coast Airport (PPP), direct with Jetstar. Flight sites give 2 h 18 min to 2 h 30 min.",
        source: "Whitsunday Coast Airport (route); Skyscanner (time)",
        url: "https://www.whitsundaycoastairport.com.au/Business/About-Us"
      },
      drive: {
        headline: "81 km",
        text: "Airport to Bowen, about 1 hour by road.",
        source: "Kayak Bowen travel guide; OpenStreetMap route check (80.7 km)",
        url: "https://www.kayak.com.au/Bowen.25622.guide"
      },
      climate: {
        text: "Tropical. Wet season is October to April. Dry season is May to September.",
        source: "Bureau of Meteorology, 24 Dec 2018",
        url: "https://media.bom.gov.au/social/blog/1989/the-wet-and-the-dry-seasons-in-the-tropics/"
      }
    },
    {
      id: "armidale",
      town: "Armidale",
      state: "NSW",
      label: "Armidale, Northern Tablelands NSW",
      lat: -30.501,
      lon: 151.666,
      tz: "Australia/Sydney",
      tropical: false,
      why: {
        text: "In January 2026 Brumby had commitments in New South Wales. The Northern Tablelands mainly produces beef, sheep and wool. The choice of Armidale is my guess.",
        guess: true,
        source: "Forbes Australia; NSW Local Land Services",
        url: "https://www.nsw.gov.au/departments-and-agencies/local-land-services/lls-regions/northern-tablelands/regional-profile"
      },
      flight: {
        headline: "Direct, about 1 h 15 min",
        text: "Sydney to Armidale Regional Airport (ARM), direct with QantasLink.",
        source: "Armidale Regional Council (route); flight search sites (time)",
        url: "https://www.armidale.nsw.gov.au/Our-region/Getting-around/Public-transport/Armidale-Regional-Airport"
      },
      drive: {
        headline: "6 km",
        text: "Airport to the city centre. Add the drive from Armidale to the property.",
        source: "Armidale Regional Council",
        url: "https://www.armidale.nsw.gov.au/Our-region/Getting-around/Public-transport/Armidale-Regional-Airport"
      },
      climate: {
        text: "Temperate. Average elevation is above 1,000 m. Winters are cold with frosty mornings and occasional snow.",
        source: "NSW Local Land Services",
        url: "https://www.nsw.gov.au/departments-and-agencies/local-land-services/lls-regions/northern-tablelands/regional-profile"
      }
    },
    {
      id: "cloncurry",
      town: "Cloncurry",
      state: "QLD",
      label: "Cloncurry, North West Queensland",
      lat: -20.707,
      lon: 140.513,
      tz: "Australia/Brisbane",
      tropical: true,
      why: {
        text: "Brumby job ads say the aircraft fly over stations thousands of kilometres from Sydney. North West Queensland is my example of that country.",
        guess: true,
        source: "Brumby Remote Pilot job ad",
        url: "https://brumby.com/careers/"
      },
      flight: {
        headline: "No direct flight",
        text: "Fly Sydney to Brisbane, then Brisbane to Mount Isa (ISA) with Qantas or Virgin Australia. Allow a full travel day. QantasLink also flies to the small Cloncurry airport from Townsville and Mount Isa.",
        source: "Mount Isa Airport; Wikipedia airline tables, edited July 2026",
        url: "https://www.mountisaairport.com.au/fly/discover/airline-info"
      },
      drive: {
        headline: "About 130 km",
        text: "Mount Isa Airport to Cloncurry, about 1.5 hours by road. Town to town is 121 km.",
        source: "OpenStreetMap route check (129 km); Australia Travel Questions",
        url: "https://australiatravelquestions.com/?p=23094"
      },
      climate: {
        text: "Tropical. Wet season is October to April. Dry season is May to September.",
        source: "Bureau of Meteorology, 24 Dec 2018",
        url: "https://media.bom.gov.au/social/blog/1989/the-wet-and-the-dry-seasons-in-the-tropics/"
      }
    }
  ],

  // How Brumby operates, from public pages only.
  operating: [
    {
      text: "The aircraft launches from a dock on the property, does the work and comes home.",
      source: "Brumby job ads",
      url: "https://brumby.com/careers/"
    },
    {
      text: "Remote pilots supervise flights over stations from the Remote Operations Centre in Alexandria, Sydney.",
      source: "Remote Pilot job ad",
      url: "https://brumby.com/careers/"
    },
    {
      text: "Flights often start from 4 AM.",
      source: "Remote Pilot job ad",
      url: "https://brumby.com/careers/"
    },
    {
      text: "The connection on a station can be patchy 4G, Starlink or nothing.",
      source: "Software Engineer job ad",
      url: "https://brumby.com/careers/"
    },
    {
      text: "The app changes to a local mode within 20 m of the base station.",
      source: "Brumby FAQ",
      url: "https://brumby.com/#faq"
    },
    {
      text: "One drone typically gives strong control of a herd of up to 2,000 head.",
      source: "Brumby FAQ",
      url: "https://brumby.com/#faq"
    },
    {
      text: "The demo form asks for location, head count, main reason, how often the mob moves, and timing.",
      source: "Brumby book a demo page",
      url: "https://brumby.com/book-a-demo.html"
    },
    {
      text: "Operators that hold a ReOC must follow their approved ReOC procedures. Some flights need a CASA approval.",
      source: "CASA drone safety rules",
      url: "https://www.casa.gov.au/drones/drone-rules/drone-safety-rules"
    }
  ],

  // The same options as the Brumby demo form.
  reasons: [
    "Increased monitoring and control",
    "Time savings",
    "Better pasture utilisation",
    "Higher stocking rates",
    "Less manual labour",
    "Something else"
  ],
  frequencies: [
    "More than twice per week",
    "1 to 2 times per week",
    "Every 1 to 2 weeks",
    "Less than monthly or set-stocked"
  ],

  herdLimit: 2000
};
