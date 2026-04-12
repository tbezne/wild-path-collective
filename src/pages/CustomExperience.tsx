import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/custom-experience.jpg";
import { Users, MapPin, Calendar, Compass } from "lucide-react";

const CustomExperience = () => (
  <>
    <Navbar />
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px]">
      <img
        src={heroImage}
        alt="Group of friends around a campfire planning their next adventure"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="relative z-10 h-full flex items-end section-padding pb-12">
        <h1 className="heading-xl text-primary-foreground">Custom Experience</h1>
      </div>
    </section>

    <main className="section-padding py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <section className="mb-20">
          <p className="body-lg text-foreground leading-relaxed max-w-2xl mb-6">
            Want something designed just for your group? We create bespoke outdoor experiences tailored to your interests, fitness level, and timeline. Whether it's a team retreat, a birthday adventure, or a private trip with friends — we'll build it from scratch.
          </p>
          <p className="body-lg text-muted-foreground leading-relaxed max-w-2xl">
            Tell us where you want to go, what you want to feel, and we'll handle the rest.
          </p>
        </section>

        {/* How it works */}
        <section className="mb-20">
          <h2 className="heading-md mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { icon: Compass, title: "Tell us your vision", text: "Share your interests — hiking, cycling, kayaking, or a mix. We'll suggest options." },
              { icon: MapPin, title: "We design the route", text: "Our guides build a custom itinerary around your group's pace and preferences." },
              { icon: Calendar, title: "Pick your dates", text: "We're flexible. Choose dates that work for your group and we'll make it happen." },
              { icon: Users, title: "Show up and enjoy", text: "We handle logistics, accommodation, food, and guiding. You just be present." },
            ].map((step) => (
              <div key={step.title} className="flex gap-4">
                <step.icon size={24} className="text-sky-dark shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="heading-sm mb-2">{step.title}</h3>
                  <p className="body-md text-muted-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section className="mb-20 bg-sand-light p-8 md:p-12">
          <h2 className="heading-md mb-8">Past custom trips</h2>
          <div className="space-y-8">
            {[
              { title: "Corporate retreat — Julian Alps", group: "12 people, 3 days", desc: "Hiking and team-building in Triglav National Park with local food experiences." },
              { title: "Birthday bikepacking — Istria", group: "6 friends, 2 days", desc: "A coastal gravel ride through olive groves and hilltop villages, ending with a seaside dinner." },
              { title: "Family adventure — Soča Valley", group: "2 families, 4 days", desc: "Kayaking, via ferrata, and easy hikes in one of Slovenia's most stunning valleys." },
            ].map((trip) => (
              <div key={trip.title} className="border-b border-border pb-6 last:border-0 last:pb-0">
                <h3 className="body-md font-semibold mb-1">{trip.title}</h3>
                <p className="body-sm text-muted-foreground mb-2">{trip.group}</p>
                <p className="body-md text-muted-foreground">{trip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-border">
          <h2 className="heading-md mb-4">Let's build your adventure</h2>
          <p className="body-md text-muted-foreground mb-8">
            Reach out and tell us what you have in mind. No commitment, just a conversation.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default CustomExperience;
