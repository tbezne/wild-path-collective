import adventure1 from "@/assets/adventure-1.jpg";
import adventure2 from "@/assets/adventure-2.jpg";
import adventure3 from "@/assets/adventure-3.jpg";

export interface Adventure {
  id: string;
  title: string;
  location: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  price: number;
  groupSize: number;
  image: string;
  description: string;
  itinerary: { day: string; title: string; description: string }[];
  reviews: { name: string; text: string; rating: number }[];
}

export const adventures: Adventure[] = [
  {
    id: "alpine-traverse",
    title: "The Alpine Traverse",
    location: "Swiss Alps",
    duration: "5 days",
    difficulty: "Challenging",
    price: 2400,
    groupSize: 8,
    image: adventure1,
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
];

export const upcomingTrips = [
  { date: "Apr 12 – 16", name: "The Alpine Traverse", location: "Swiss Alps", spotsLeft: 3, id: "alpine-traverse" },
  { date: "Apr 25 – 28", name: "Fjord & Forest Paddle", location: "Norwegian Fjords", spotsLeft: 2, id: "fjord-paddle" },
  { date: "May 3 – 5", name: "Ancient Forest Immersion", location: "Pacific Northwest", spotsLeft: 6, id: "ancient-forest" },
  { date: "May 18 – 22", name: "The Alpine Traverse", location: "Swiss Alps", spotsLeft: 5, id: "alpine-traverse" },
  { date: "Jun 1 – 4", name: "Fjord & Forest Paddle", location: "Norwegian Fjords", spotsLeft: 1, id: "fjord-paddle" },
  { date: "Jun 14 – 16", name: "Ancient Forest Immersion", location: "Pacific Northwest", spotsLeft: 8, id: "ancient-forest" },
];

export const teamMembers = [
  { name: "Lars Eriksen", role: "Founder & Lead Guide", bio: "15 years guiding in the Alps and Scandinavia. Lars believes the best adventures happen when you slow down." },
  { name: "Maya Chen", role: "Wilderness Guide", bio: "Forest ecologist turned guide. Maya brings deep knowledge of Pacific Northwest ecosystems to every trip." },
  { name: "Tom Hartley", role: "Expedition Coordinator", bio: "Former mountain rescue. Tom ensures every detail is covered so you can focus on the experience." },
];
