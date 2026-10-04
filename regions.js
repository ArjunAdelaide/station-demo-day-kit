// Facts for the station demo day kit. Checked 4 Oct 2026.
// Each value has a source. A value with guess: true is Arjun's assumption, not a Brumby fact.

window.KIT_DATA = {
  checked: "5 October 2026",

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
      airport: { code: "PPP", name: "Whitsunday Coast Airport" },
      direct: true,
      driveMin: 66,
      roadKm: 1930,
      why: {
        text: "Sam Rogers grew up on a cattle farm at Bowen.",
        source: "Forbes Australia, 14 Jan 2026",
        url: "https://www.forbes.com.au/news/innovation/grazemate-raises-1-2-million-19-year-old-ceo-cattle-mustering/"
      },
      flight: {
        headline: "Direct, about 2.5 h",
        text: "Sydney to Whitsunday Coast Airport (PPP), direct with Jetstar, about 2 h 30 min.",
        source: "Whitsunday Coast Airport (route); Google Flights schedules for 13 and 27 Oct 2026 (time)",
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
      airport: { code: "ARM", name: "Armidale Regional Airport" },
      direct: true,
      driveMin: 30,
      roadKm: 479,
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
      airport: { code: "ISA", name: "Mount Isa Airport" },
      direct: false,
      driveMin: 90,
      roadKm: 2250,
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

  // One real run of the booking agent for a sample request. Recorded on 5 Oct 2026.
  // The request is a sample. The flight, car and room options are real search results.
  // Flight prices are one way for 2 adults with taxes, in AUD. Times are local to the airport.
  sampleRun: {
    recorded: "5 October 2026",
    region: "bowen",
    demoDate: "2026-10-28",
    travellers: 2,
    request: {
      received: "Mon 5 Oct 2026", channel: "Test message, read from my inbox by the agent",
      name: "Pat Example", prop: "", head: 1800, guests: 20,
      reason: "Less manual labour", freq: "Every 1 to 2 weeks", timing: "In the next few weeks"
    },
    // The demo record that the intake agent made from the test message. It read the message from a Gmail inbox on 5 Oct 2026.
    record: [
      { k: "Who", v: "Pat Example, pat@example.com", note: "", status: "confirmed" },
      { k: "Town", v: "Bowen, QLD", note: "It says: near Bowen, North Queensland.", status: "confirmed" },
      { k: "Property address", v: "Not known", note: "", status: "missing" },
      { k: "Phone", v: "Not known", note: "", status: "missing" },
      { k: "Guests", v: "Not known", note: "", status: "missing" },
      { k: "Herd", v: "1,800 head", note: "It says: about 1,800.", status: "confirmed" },
      { k: "Demo", v: "Live muster, then monitor flight", note: "The main reason is less manual labour.", status: "rule" },
      { k: "Date", v: "Wed 28 Oct or Wed 4 Nov", note: "The rule is 21 days of notice. The agent read my calendar: it has no events on the days around both dates.", status: "rule" },
      { k: "Crew", v: "2 people", note: "One calendar is connected in this test. A real crew needs each person's calendar.", status: "guess" },
      { k: "Travel", v: "Whitsunday Coast Airport, 66 minutes by road", note: "From the fact file and the road router.", status: "rule" }
    ],
    question: "Hi Pat,\n\nThanks for asking us out. We'd like to bring the drone to your place.\n\nTwo things so we can lock it in:\n1. Where is the property? An address or a map pin is fine.\n2. Which day suits you: Wednesday 28 October or Wednesday 4 November? We start about an hour after sunrise and finish by about 9 am.\n\nA phone number for the day would help too. And roughly how many neighbours would you like to invite?\n\nThanks,\n[your name]\nBrumby",
    flights: {
      source: "Google Flights",
      url: "https://www.google.com/travel/flights?hl=en-AU&gl=au&curr=AUD&q=Flights%20from%20SYD%20to%20PPP%20on%202026-10-27%20through%202026-10-28%20for%202%20adults",
      out: [
        { airline: "Jetstar", stops: "non-stop", dep: "11:45", arr: "13:15", price: 459 },
        { airline: "Virgin Australia", stops: "1 stop", dep: "11:00", arr: "14:55", price: 436 },
        { airline: "Jetstar", stops: "1 stop", dep: "06:20", arr: "12:25", price: 508 }
      ],
      back: [
        { airline: "Virgin Australia", stops: "1 stop", dep: "15:35", arr: "20:40", price: 377 },
        { airline: "Jetstar", stops: "1 stop", dep: "13:05", arr: "21:15", price: 686 },
        { airline: "Jetstar", stops: "non-stop", dep: "13:55", arr: "17:25", price: 753 },
        { airline: "Jetstar", stops: "1 stop", dep: "09:10", arr: "16:20", price: 823 }
      ]
    },
    cars: {
      source: "Kayak",
      url: "https://www.kayak.com.au/cars/PPP/2026-10-27-13h/2026-10-28-12h",
      note: "Listed price for Tue 27 Oct 13:00 to Wed 28 Oct 12:00 at the airport terminal.",
      options: [
        { name: "Mazda CX-3 or similar", cls: "SUV", suv: true, price: 102 },
        { name: "Mazda CX-3 or similar", cls: "compact SUV", suv: true, price: 105 },
        { name: "Hyundai Kona or similar", cls: "intermediate SUV", suv: true, price: 108 },
        { name: "Toyota Corolla or similar", cls: "compact car", suv: false, price: 71 }
      ]
    },
    rooms: {
      source: "Booking.com",
      url: "https://www.booking.com/searchresults.html?ss=Bowen%2C+Queensland%2C+Australia&checkin=2026-10-27&checkout=2026-10-28&group_adults=1&no_rooms=1",
      note: "Price for 1 room, 1 night, 1 adult, with taxes and charges.",
      options: [
        { name: "Harbour Lights Tourist Park", room: "queen room", price: 111, score: 8.0, km: 0.7, freeCancel: true, url: "https://www.booking.com/hotel/au/harbour-lights-tourist-park-bowen14.en-gb.html" },
        { name: "Original North Australian", room: "queen room", price: 135, score: 7.9, km: 0.25, freeCancel: true, url: "https://www.booking.com/hotel/au/sails-on-main.en-gb.html" },
        { name: "Bowen Holiday Park", room: "studio", price: 142, score: 8.2, km: 4.0, freeCancel: true, url: "https://www.booking.com/hotel/au/bowen-holiday-park-bowen.en-gb.html" },
        { name: "Port Denison Motor Inn", room: "queen room", price: 154, score: 8.8, km: 0.7, freeCancel: true, url: "https://www.booking.com/hotel/au/port-denison-motor-inn-bowen.en-gb.html" }
      ]
    }
  },

  battery: {
    text: "A passenger can carry no more than two spare lithium batteries between 100 Wh and 160 Wh, in carry-on only, with airline approval. Larger batteries are outside this allowance.",
    source: "CASA, spare lithium ion batteries above 100 Wh but not exceeding 160 Wh",
    url: "https://www.casa.gov.au/packright/dangerous-good/batteries-spare-lithium-ion-rechargeable-above-100-wh-not-exceeding-160-wh"
  },

  // Australian airports that the open data marks as "scheduled service": code, name, latitude, longitude.
  // Source: OurAirports open data (ourairports.com), downloaded 4 Oct 2026. Six mine airstrips and one army base were removed.
  airportsSource: { source: "OurAirports open data, airports marked as scheduled service", url: "https://ourairports.com/countries/AU/" },
  airports: [
    ["ABM", "Northern Peninsula", -10.946, 142.455],
    ["ABX", "Albury", -36.067, 146.959],
    ["ADL", "Adelaide International", -34.948, 138.533],
    ["ALH", "Albany", -34.943, 117.809],
    ["ARM", "Armidale", -30.528, 151.617],
    ["ASP", "Alice Springs", -23.807, 133.903],
    ["AUU", "Aurukun", -13.354, 141.72],
    ["AVV", "Melbourne Avalon International", -38.04, 144.467],
    ["AYQ", "Ayers Rock Connellan", -25.186, 130.977],
    ["BCI", "Barcaldine", -23.566, 145.302],
    ["BDB", "Bundaberg", -24.905, 152.323],
    ["BDD", "Badu Island", -10.15, 142.174],
    ["BEU", "Bedourie", -24.346, 139.46],
    ["BHQ", "Broken Hill", -32.001, 141.472],
    ["BHS", "Bathurst", -33.407, 149.651],
    ["BKQ", "Blackall", -24.432, 145.43],
    ["BME", "Broome International", -17.949, 122.228],
    ["BNE", "Brisbane International", -27.384, 153.117],
    ["BNK", "Ballina Byron Gateway", -28.833, 153.561],
    ["BQB", "Busselton Margaret River Regional", -33.687, 115.4],
    ["BQL", "Boulia", -22.913, 139.9],
    ["BRK", "Bourke", -30.039, 145.952],
    ["BUC", "Burketown", -17.749, 139.534],
    ["BVI", "Birdsville", -25.897, 139.348],
    ["BWT", "Wynyard", -40.997, 145.726],
    ["BXG", "Bendigo", -36.739, 144.33],
    ["CAZ", "Cobar", -31.538, 145.794],
    ["CBR", "Canberra", -35.307, 149.195],
    ["CED", "Ceduna", -32.131, 133.71],
    ["CFS", "Coffs Harbour", -30.321, 153.116],
    ["CMA", "Cunnamulla", -28.03, 145.622],
    ["CNB", "Coonamble", -30.981, 148.378],
    ["CNC", "Coconut Island", -10.05, 143.07],
    ["CNJ", "Cloncurry", -20.669, 140.504],
    ["CNS", "Cairns International", -16.879, 145.749],
    ["CPD", "Coober Pedy", -29.038, 134.722],
    ["CTL", "Charleville", -26.413, 146.262],
    ["CTN", "Cooktown", -15.444, 145.183],
    ["CUQ", "Coen", -13.761, 143.113],
    ["CVQ", "Carnarvon", -24.884, 113.666],
    ["DBO", "Dubbo City Regional", -32.217, 148.575],
    ["DMD", "Doomadgee", -17.94, 138.822],
    ["DPO", "Devonport", -41.17, 146.43],
    ["DRW", "Darwin International / RAAF Darwin", -12.415, 130.882],
    ["EDR", "Pormpuraaw", -14.896, 141.609],
    ["ELC", "Elcho Island", -12.019, 135.571],
    ["EMD", "Emerald", -23.567, 148.179],
    ["EPR", "Esperance", -33.684, 121.823],
    ["FIZ", "Fitzroy Crossing", -18.184, 125.56],
    ["FLS", "Flinders Island", -40.092, 147.993],
    ["GET", "Geraldton", -28.796, 114.707],
    ["GFF", "Griffith", -34.251, 146.067],
    ["GIC", "Boigu Island", -9.233, 142.218],
    ["GLT", "Gladstone", -23.87, 151.225],
    ["GOV", "Gove", -12.269, 136.818],
    ["GTE", "Groote Eylandt", -13.972, 136.459],
    ["HBA", "Hobart International", -42.837, 147.513],
    ["HGD", "Hughenden", -20.815, 144.225],
    ["HID", "Horn Island", -10.586, 142.293],
    ["HOK", "Hooker Creek", -18.337, 130.638],
    ["HTI", "Hamilton Island", -20.358, 148.952],
    ["HVB", "Hervey Bay", -25.32, 152.881],
    ["IRG", "Lockhart River", -12.787, 143.305],
    ["ISA", "Mount Isa", -20.666, 139.488],
    ["JCK", "Julia Creek", -20.668, 141.723],
    ["KAX", "Kalbarri", -27.693, 114.259],
    ["KFG", "Kalkgurung", -17.432, 130.808],
    ["KGC", "Kingscote", -35.714, 137.521],
    ["KGI", "Kalgoorlie Boulder", -30.792, 121.465],
    ["KNS", "King Island", -39.877, 143.878],
    ["KNX", "East Kimberley Regional (Kununurra)", -15.778, 128.708],
    ["KRB", "Karumba", -17.457, 140.83],
    ["KTA", "Karratha", -20.712, 116.773],
    ["KUG", "Kubin Island", -10.226, 142.22],
    ["KWM", "Kowanyama", -15.485, 141.753],
    ["LDH", "Lord Howe Island", -31.538, 159.075],
    ["LEA", "Learmonth", -22.235, 114.09],
    ["LEL", "Lake Evella", -12.499, 135.806],
    ["LER", "Leinster", -27.843, 120.703],
    ["LHG", "Lightning Ridge", -29.453, 147.977],
    ["LNO", "Leonora", -28.878, 121.315],
    ["LRE", "Longreach", -23.432, 144.277],
    ["LST", "Launceston", -41.545, 147.211],
    ["LSY", "Lismore", -28.831, 153.258],
    ["LVO", "Laverton", -28.614, 122.429],
    ["MBW", "Melbourne Moorabbin", -37.978, 145.1],
    ["MCY", "Sunshine Coast", -26.593, 153.083],
    ["MEB", "Melbourne Essendon", -37.728, 144.902],
    ["MEL", "Melbourne", -37.671, 144.838],
    ["MGB", "Mount Gambier", -37.744, 140.781],
    ["MGT", "Milingimbi", -12.094, 134.894],
    ["MHU", "Mount Hotham", -37.048, 147.334],
    ["MIM", "Merimbula", -36.909, 149.901],
    ["MJK", "Shark Bay", -25.897, 113.576],
    ["MKR", "Meekatharra", -26.612, 118.548],
    ["MKY", "Mackay", -21.171, 149.183],
    ["MMG", "Mount Magnet", -28.116, 117.842],
    ["MNG", "Maningrida", -12.056, 134.234],
    ["MOV", "Moranbah", -22.058, 148.077],
    ["MQL", "Mildura", -34.229, 142.086],
    ["MRZ", "Moree", -29.499, 149.845],
    ["MYA", "Moruya", -35.898, 150.144],
    ["MYI", "Murray Island", -9.915, 144.055],
    ["NAA", "Narrabri", -30.319, 149.827],
    ["NLF", "Darnley Island", -9.579, 143.78],
    ["NRA", "Narrandera", -34.702, 146.512],
    ["NTL", "Newcastle", -32.796, 151.835],
    ["NTN", "Normanton", -17.684, 141.07],
    ["OKR", "Yorke Island", -9.753, 143.406],
    ["ONG", "Mornington Island", -16.663, 139.178],
    ["OOL", "Gold Coast", -28.166, 153.507],
    ["OOM", "Cooma Snowy Mountains", -36.3, 148.972],
    ["PBO", "Paraburdoo", -23.171, 117.745],
    ["PER", "Perth International", -31.94, 115.967],
    ["PHE", "Port Hedland International", -20.383, 118.63],
    ["PKE", "Parkes", -33.131, 148.239],
    ["PLO", "Port Lincoln", -34.605, 135.88],
    ["PMK", "Palm Island", -18.755, 146.581],
    ["PPP", "Proserpine Whitsunday Coast", -20.494, 148.554],
    ["PQQ", "Port Macquarie", -31.436, 152.863],
    ["PTJ", "Portland", -38.318, 141.471],
    ["PUG", "Port Augusta", -32.507, 137.717],
    ["RAM", "Ramingining", -12.356, 134.898],
    ["RCM", "Richmond", -20.702, 143.115],
    ["RMA", "Roma", -26.545, 148.775],
    ["ROK", "Rockhampton", -23.38, 150.475],
    ["SBR", "Saibai Island", -9.378, 142.625],
    ["SGO", "St George", -28.05, 148.595],
    ["SNB", "Snake Bay", -11.418, 130.648],
    ["SYU", "Warraber Island", -10.208, 142.825],
    ["TCA", "Tennant Creek", -19.634, 134.183],
    ["THG", "Thangool", -24.495, 150.578],
    ["TMW", "Tamworth", -31.078, 150.845],
    ["TSV", "Townsville / RAAF Base Townsville", -19.253, 146.767],
    ["UBB", "Mabuiag Island", -9.95, 142.195],
    ["ULP", "Quilpie", -26.609, 144.254],
    ["WEI", "Weipa", -12.677, 141.923],
    ["WGA", "Wagga Wagga", -35.163, 147.468],
    ["WGE", "Walgett", -30.033, 148.126],
    ["WIN", "Winton", -22.364, 143.086],
    ["WNR", "Windorah", -25.411, 142.668],
    ["WTB", "Toowoomba Wellcamp", -27.558, 151.793],
    ["WUN", "Wiluna", -26.633, 120.222],
    ["WYA", "Whyalla", -33.059, 137.514],
    ["XMY", "Yam Island", -9.899, 142.774],
    ["XTG", "Thargomindah", -27.986, 143.812],
    ["ZNE", "Newman", -23.418, 119.803]
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
