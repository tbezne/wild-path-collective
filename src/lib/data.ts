import adventure1 from "@/assets/adventure-1.jpg";
import adventure2 from "@/assets/adventure-2.jpg";
import adventure3 from "@/assets/adventure-3.jpg";
import bikepackingImg from "@/assets/bikepacking-hero.jpg";
import bikepackingDinner from "@/assets/bikepacking-dinner.jpg";
import bikepackingTent from "@/assets/bikepacking-tent.jpg";
import climbingTriglav from "@/assets/climbing-triglav.jpg";
import mangartSunrise from "@/assets/mangart-sunrise.jpg";
import skiTouring from "@/assets/ski-touring.jpg";
import hikingMultiday from "@/assets/hiking-multiday.jpg";

export type AdventureCategory = "Climbing" | "Bikepacking" | "Ski Touring" | "Hiking";

export interface Adventure {
  id: string;
  title: string;
  location: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  price: number;
  groupSize: number;
  image: string;
  category: AdventureCategory;
  season?: string;
  tagline?: string;
  forWhom?: string;
  description: string;
  included?: string[];
  accommodation?: { title: string; description: string; image?: string }[];
  gallery?: { src: string; alt: string }[];
  departures?: string[];
  itinerary: { day: string; title: string; description: string }[];
  reviews: { name: string; text: string; rating: number }[];
}

export const adventures: Adventure[] = [
  {
    id: "triglav-climb",
    title: "Climb Triglav",
    location: "Julian Alps, Slovenia",
    duration: "2 days",
    difficulty: "Challenging",
    price: 320,
    groupSize: 6,
    image: climbingTriglav,
    category: "Climbing",
    season: "Jun – Oct",
    description:
      "Stand on the roof of Slovenia. We ascend Triglav (2,864 m) via the classic route from the Vrata valley, sleeping at the Triglavski dom mountain hut. A demanding but deeply rewarding climb with stunning exposure and the chance to touch the Aljažev stolp at the summit.",
    itinerary: [
      { day: "Day 1", title: "Vrata Valley to Triglavski dom", description: "Meet in Mojstrana. We hike through the Vrata valley with views of Triglav's legendary north face, then climb steeply to the hut at 2,515 m. Evening meal and rest." },
      { day: "Day 2", title: "Summit & Descent", description: "Early start for the summit push via steel cables and exposed ridges. Sunrise from the top. Descend the same route back to the valley by afternoon." },
    ],
    reviews: [
      { name: "Andrej M.", text: "A bucket-list experience. The guides were calm and confident on the exposed sections. Unforgettable sunrise.", rating: 5 },
    ],
  },
  {
    id: "mangart-sunrise",
    title: "Mangart Sunrise Climb",
    location: "Julian Alps, Slovenia",
    duration: "2 days",
    difficulty: "Moderate",
    price: 260,
    groupSize: 8,
    image: mangartSunrise,
    category: "Climbing",
    season: "Jun – Oct",
    description:
      "A two-day journey to catch sunrise from Mangart (2,679 m), Slovenia's third-highest peak. We drive the spectacular Mangart road — the highest in the country — camp near the saddle, and climb to the summit before dawn. The reward: a sea of clouds lit gold from above.",
    itinerary: [
      { day: "Day 1", title: "Approach & Camp", description: "Drive the Mangart road to the saddle. Short acclimatisation hike, set up camp, dinner under the stars with views into Italy." },
      { day: "Day 2", title: "Sunrise Summit & Return", description: "3 AM start. Headlamp ascent via the Slovenian route (via ferrata sections). Summit for sunrise. Descend, breakfast at camp, drive back." },
    ],
    reviews: [
      { name: "Katja P.", text: "Watching the sun rise from Mangart was one of the most beautiful moments of my life. Worth every early alarm.", rating: 5 },
    ],
  },
  {
    id: "bikepacking-slovenia",
    title: "Bikepacking Eastern Slovenia",
    location: "Eastern Slovenia",
    duration: "3 days",
    difficulty: "Moderate",
    price: 480,
    groupSize: 8,
    image: bikepackingImg,
    category: "Bikepacking",
    season: "Apr – Oct",
    tagline: "An introduction to bikepacking",
    forWhom:
      "Made for anyone curious about bikepacking but unsure where to start. No experience needed — just a basic comfort on a bike and a willingness to spend three slow days outside. We handle the route, the gear, the logistics. You learn by riding.",
    description:
      "Three days on gravel roads and forest trails through one of Europe's most underrated landscapes. Eastern Slovenia is a world of rolling vine-covered hills, thermal springs, and villages where time moves differently. This is bikepacking at its most peaceful — no racing, no suffering, just riding and connecting.",
    departures: ["28 – 30 August 2026"],
    accommodation: [
      {
        title: "Farmhouse rooms",
        description:
          "Comfortable beds in renovated farmhouses and small family-run gostilnas. Hot showers, home-cooked breakfast, and a glass of local wine waiting at the end of each day.",
        image: bikepackingDinner,
      },
      {
        title: "Sleep under the stars",
        description:
          "Prefer canvas to comforters? Choose the tent option and we'll pitch camp in a vineyard meadow. Same shared dinners, same warm welcome — just a quieter morning with mist on the hills.",
        image: bikepackingTent,
      },
    ],
    gallery: [
      { src: bikepackingDinner, alt: "Shared dinner at a long table in a Slovenian vineyard at golden hour" },
      { src: bikepackingTent, alt: "Canvas tent pitched beside a vineyard at dawn" },
      { src: bikepackingImg, alt: "Gravel cyclist riding through vine-covered hills" },
    ],
    included: [
      "Gravel bike rental (Bombtrack Beyond)",
      "All accommodation (2 nights)",
      "All meals & local wine tastings",
      "Route GPS files & printed maps",
      "Luggage transfer between stops",
      "Experienced ride leader",
      "Mechanical support vehicle",
      "Transfer back to Maribor on Day 3",
    ],
    itinerary: [
      { day: "Day 1", title: "Maribor to Jeruzalem", description: "We meet in Maribor for a morning briefing, bike fitting, and coffee. Then we ride east through the Drava valley, climbing gently into the Ljutomer-Ormož wine hills. The route follows quiet gravel roads past vineyards and small farms. We finish in the hilltop village of Jeruzalem with sunset views over endless green hills." },
      { day: "Day 2", title: "Jeruzalem to Goričko", description: "The longest day takes us north through Prlekija into the rolling landscape of Goričko Nature Park. We ride a mix of forest trails, farm tracks, and quiet backroads. Lunch is a picnic by a stream. We stay in a renovated farmhouse with home-cooked food and local wine." },
      { day: "Day 3", title: "Goričko loop & departure", description: "A shorter morning ride through Goričko's meadows and oak forests. We visit a traditional potter, stop at a thermal spring, and share a final meal together. Transfer back to Maribor by early afternoon." },
    ],
    reviews: [
      { name: "Sofia R.", text: "I've never felt so far from the noise of everyday life. The wine hills are absolutely magical on two wheels.", rating: 5 },
    ],
  },
  {
    id: "ski-touring-julian-alps",
    title: "Ski Touring the Julian Alps",
    location: "Julian Alps, Slovenia",
    duration: "3 days",
    difficulty: "Challenging",
    price: 520,
    groupSize: 6,
    image: skiTouring,
    category: "Ski Touring",
    season: "Dec – Apr",
    description:
      "Earn your turns in the Julian Alps. Three days of backcountry ski touring through pristine powder, remote valleys, and above-treeline bowls. We stay in mountain huts, travel light, and let the snow and terrain guide our route. Previous ski touring experience required.",
    itinerary: [
      { day: "Day 1", title: "Approach & First Tour", description: "Meet in Kranjska Gora. Avalanche safety briefing and gear check. First tour to a moderate summit with 800m of vertical gain. Overnight at a mountain hut." },
      { day: "Day 2", title: "Deep Backcountry", description: "Full day touring through the heart of the Julian Alps. We target the best snow conditions, with options for 1,000m+ of vertical. Hut dinner and route planning for day three." },
      { day: "Day 3", title: "Final Descent & Farewell", description: "Morning tour to a scenic summit, then a long descent back to the valley. Farewell lunch in Kranjska Gora." },
    ],
    reviews: [
      { name: "Peter H.", text: "The best powder I've skied in Europe. The guides read the terrain perfectly.", rating: 5 },
    ],
  },
  {
    id: "alpine-traverse",
    title: "The Alpine Traverse",
    location: "Swiss Alps",
    duration: "5 days",
    difficulty: "Challenging",
    price: 2400,
    groupSize: 8,
    image: adventure1,
    category: "Hiking",
    season: "Jun – Sep",
    description:
      "A high-altitude journey across some of the most dramatic ridge lines in Europe. We move through alpine meadows, cross glacial passes, and sleep in remote mountain huts. This is for those who want to feel the silence of real altitude.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Briefing", description: "Meet at base camp in Grindelwald. Gear check, dinner together, and an evening walk." },
      { day: "Day 2", title: "Ascent to First Ridge", description: "Begin the climb through larch forests to the first high camp at 2,400m." },
      { day: "Day 3", title: "Ridge Crossing", description: "The signature day — a full ridge traverse with panoramic views of the Eiger." },
      { day: "Day 4", title: "Glacier Approach", description: "Descend to the glacier valley. Ice skills session for those interested." },
      { day: "Day 5", title: "Summit & Return", description: "Optional summit push at dawn, then descent to the valley and farewell lunch." },
    ],
    reviews: [
      { name: "Emma L.", text: "The most profound outdoor experience I've had. The guides made every moment feel intentional.", rating: 5 },
      { name: "James K.", text: "Challenging but deeply rewarding. I felt truly alive out there.", rating: 5 },
    ],
  },
  {
    id: "fjord-paddle",
    title: "Fjord & Forest Paddle",
    location: "Norwegian Fjords",
    duration: "4 days",
    difficulty: "Moderate",
    price: 1800,
    groupSize: 6,
    image: adventure2,
    category: "Hiking",
    season: "May – Sep",
    description:
      "Paddle through some of the world's most dramatic waterways. We camp on remote shores, cook over open fires, and let the rhythm of the water guide our days. No experience needed — just a willingness to be present.",
    itinerary: [
      { day: "Day 1", title: "Orientation & First Paddle", description: "Kayak basics, then a gentle 3-hour paddle into the inner fjord." },
      { day: "Day 2", title: "Deep Fjord Exploration", description: "Full day on the water. Lunch on a pebble beach beneath waterfalls." },
      { day: "Day 3", title: "Forest & Waterfall Hike", description: "Leave the kayaks. A day on foot through old-growth forest to a hidden waterfall." },
      { day: "Day 4", title: "Final Paddle & Farewell", description: "Dawn paddle, breakfast on the shore, return to basecamp." },
    ],
    reviews: [
      { name: "Sofia R.", text: "I've never felt so far from the noise of everyday life. Absolute magic.", rating: 5 },
    ],
  },
  {
    id: "ancient-forest",
    title: "Ancient Forest Immersion",
    location: "Pacific Northwest",
    duration: "3 days",
    difficulty: "Easy",
    price: 1200,
    groupSize: 10,
    image: adventure3,
    category: "Hiking",
    season: "Apr – Nov",
    description:
      "Walk slowly through some of the oldest forests on the continent. This isn't about distance — it's about attention. We forage, observe, and sit in stillness among trees that have stood for centuries.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Forest Entry", description: "Gather at the trailhead. A slow 2-hour walk into the heart of the old-growth." },
      { day: "Day 2", title: "Deep Forest Day", description: "Guided nature observation, foraging walk, and afternoon of stillness." },
      { day: "Day 3", title: "Dawn Walk & Departure", description: "Early morning solo walk, group breakfast, sharing circle, and departure." },
    ],
    reviews: [
      { name: "David M.", text: "I came for the trees and left with a completely new perspective. Simple and transformative.", rating: 5 },
      { name: "Anna P.", text: "The guides have such deep knowledge. Every moment felt considered.", rating: 5 },
    ],
  },
  {
    id: "hiking-julian-alps",
    title: "Julian Alps Multi-Day Trek",
    location: "Julian Alps, Slovenia",
    duration: "4 days",
    difficulty: "Moderate",
    price: 580,
    groupSize: 8,
    image: hikingMultiday,
    category: "Hiking",
    season: "Jun – Oct",
    description:
      "A hut-to-hut traverse through the heart of the Julian Alps. Four days of stunning trails connecting alpine lakes, flower-filled meadows, and dramatic passes. We sleep in mountain huts, eat hearty local food, and walk at a pace that lets you take it all in.",
    itinerary: [
      { day: "Day 1", title: "Bohinj to Vodnikov dom", description: "Start at Lake Bohinj. Ascend through forest to the high plateau and our first hut at 1,817 m." },
      { day: "Day 2", title: "Plateau Crossing", description: "Traverse the Triglav Lakes Valley — seven glacial lakes in a stunning alpine setting." },
      { day: "Day 3", title: "High Pass Day", description: "Cross Hribarice pass with views of Triglav. Descend to Dolič hut." },
      { day: "Day 4", title: "Descent to Trenta", description: "Long descent through the Zadnjica valley to the Soča river. Farewell lunch in Trenta." },
    ],
    reviews: [
      { name: "Maja K.", text: "The Triglav Lakes Valley is otherworldly. Every day brought a new kind of beauty.", rating: 5 },
    ],
  },
];

export const categories: { label: string; value: AdventureCategory; icon: string }[] = [
  { label: "Climbing", value: "Climbing", icon: "🧗" },
  { label: "Bikepacking", value: "Bikepacking", icon: "🚲" },
  { label: "Ski Touring", value: "Ski Touring", icon: "⛷️" },
  { label: "Hiking", value: "Hiking", icon: "🥾" },
];

export const upcomingTrips = [
  { date: "May 3 – 4", name: "Mangart Sunrise Climb", location: "Julian Alps, Slovenia", spotsLeft: 4, id: "mangart-sunrise", category: "Climbing" as AdventureCategory },
  { date: "May 10 – 11", name: "Climb Triglav", location: "Julian Alps, Slovenia", spotsLeft: 3, id: "triglav-climb", category: "Climbing" as AdventureCategory },
  { date: "May 16 – 18", name: "Bikepacking Eastern Slovenia", location: "Eastern Slovenia", spotsLeft: 5, id: "bikepacking-slovenia", category: "Bikepacking" as AdventureCategory },
  { date: "Jun 1 – 4", name: "Julian Alps Multi-Day Trek", location: "Julian Alps, Slovenia", spotsLeft: 6, id: "hiking-julian-alps", category: "Hiking" as AdventureCategory },
  { date: "Jun 14 – 18", name: "The Alpine Traverse", location: "Swiss Alps", spotsLeft: 3, id: "alpine-traverse", category: "Hiking" as AdventureCategory },
  { date: "Jun 28 – 29", name: "Mangart Sunrise Climb", location: "Julian Alps, Slovenia", spotsLeft: 6, id: "mangart-sunrise", category: "Climbing" as AdventureCategory },
  { date: "Jul 5 – 7", name: "Bikepacking Eastern Slovenia", location: "Eastern Slovenia", spotsLeft: 2, id: "bikepacking-slovenia", category: "Bikepacking" as AdventureCategory },
];

export const teamMembers = [
  { name: "Lars Eriksen", role: "Founder & Lead Guide", bio: "15 years guiding in the Alps and Scandinavia. Lars believes the best adventures happen when you slow down." },
  { name: "Maya Chen", role: "Wilderness Guide", bio: "Forest ecologist turned guide. Maya brings deep knowledge of Pacific Northwest ecosystems to every trip." },
  { name: "Tom Hartley", role: "Expedition Coordinator", bio: "Former mountain rescue. Tom ensures every detail is covered so you can focus on the experience." },
];
