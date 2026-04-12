import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/bikepacking-hero.jpg";
import { Clock, Mountain, Users, DollarSign, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const itinerary = [
  {
    day: "Day 1",
    title: "Maribor to Jeruzalem",
    description:
      "We meet in Maribor for a morning briefing, bike fitting, and coffee. Then we ride east through the Drava valley, climbing gently into the Ljutomer-Ormož wine hills. The route follows quiet gravel roads past vineyards and small farms. We finish in the hilltop village of Jeruzalem — yes, that's its real name — with sunset views over endless green hills. Evening meal at a local gostilna.",
  },
  {
    day: "Day 2",
    title: "Jeruzalem to Goričko",
    description:
      "The longest day takes us north through Prlekija into the rolling landscape of Goričko Nature Park. We ride a mix of forest trails, farm tracks, and quiet backroads. Lunch is a picnic by a stream. The terrain is gentle but constant — expect beautiful fatigue by evening. We stay in a renovated farmhouse with home-cooked food and local wine.",
  },
  {
    day: "Day 3",
    title: "Goričko loop & departure",
    description:
      "A shorter morning ride through Goričko's meadows and oak forests. We visit a traditional potter, stop at a thermal spring, and share a final meal together. Transfer back to Maribor by early afternoon for those catching onward connections.",
  },
];

const Bikepacking = () => (
  <>
    <Navbar />
    {/* Hero */}
    <section className="relative h-[60vh] min-h-[400px]">
      <img
        src={heroImage}
        alt="Bikepacker riding through vineyard hills in eastern Slovenia"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-charcoal/40" />
      <div className="relative z-10 h-full flex items-end section-padding pb-12">
        <div>
          <p className="body-sm text-primary-foreground/70 uppercase tracking-widest mb-2">
            Eastern Slovenia
          </p>
          <h1 className="heading-xl text-primary-foreground">Bikepacking Slovenia</h1>
        </div>
      </div>
    </section>

    {/* Info bar */}
    <section className="section-padding py-8 border-b border-border">
      <div className="max-w-4xl mx-auto flex flex-wrap gap-8 md:gap-16">
        {[
          { icon: Clock, label: "Duration", value: "3 days" },
          { icon: Mountain, label: "Difficulty", value: "Moderate" },
          { icon: Users, label: "Group Size", value: "Up to 8" },
          { icon: MapPin, label: "Start / End", value: "Maribor" },
        ].map((info) => (
          <div key={info.label} className="flex items-center gap-3">
            <info.icon size={20} className="text-sky-dark" strokeWidth={1.5} />
            <div>
              <p className="body-sm text-muted-foreground">{info.label}</p>
              <p className="body-md font-medium">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <main className="section-padding py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Description */}
        <section className="mb-20">
          <p className="body-lg text-foreground leading-relaxed max-w-2xl">
            Three days on gravel roads and forest trails through one of Europe's most underrated landscapes. Eastern Slovenia is a world of rolling vine-covered hills, thermal springs, and villages where time moves differently. This is bikepacking at its most peaceful — no racing, no suffering, just riding and connecting.
          </p>
          <p className="body-lg text-foreground leading-relaxed max-w-2xl mt-6">
            We provide fully equipped bikes (or you can bring your own), route guidance, luggage support between stops, and all accommodation and meals. You just ride.
          </p>
        </section>

        {/* What's included */}
        <section className="mb-20">
          <h2 className="heading-md mb-8">What's included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Gravel bike rental (Bombtrack Beyond)",
              "All accommodation (2 nights)",
              "All meals & local wine tastings",
              "Route GPS files & printed maps",
              "Luggage transfer between stops",
              "Experienced ride leader",
              "Mechanical support vehicle",
              "Transfer back to Maribor on Day 3",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-wild-pink mt-1">●</span>
                <p className="body-md">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Itinerary */}
        <section className="mb-20">
          <h2 className="heading-md mb-8">Itinerary</h2>
          <Accordion type="single" collapsible className="w-full">
            {itinerary.map((item, i) => (
              <AccordionItem key={i} value={`day-${i}`}>
                <AccordionTrigger className="text-left">
                  <span className="flex gap-4 items-baseline">
                    <span className="body-sm text-muted-foreground uppercase tracking-widest w-16">
                      {item.day}
                    </span>
                    <span className="body-md font-medium">{item.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="body-md text-muted-foreground pl-20">
                    {item.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-border">
          <h2 className="heading-md mb-4">Join this ride</h2>
          <p className="body-md text-muted-foreground mb-8">
            Interested? Get in touch and we'll share dates and details.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Bikepacking;
