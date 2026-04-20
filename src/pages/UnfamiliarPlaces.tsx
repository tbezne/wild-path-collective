import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Compass, Mountain, Snowflake, Bike } from "lucide-react";
import heroImage from "@/assets/unfamiliar-places.jpg";

const seasons = [
  { icon: Mountain, season: "Spring", discipline: "Climbing", text: "A wall no one talks about. A village at its base." },
  { icon: Bike, season: "Summer", discipline: "Bikepacking", text: "Gravel roads that don't appear on most maps." },
  { icon: Compass, season: "Autumn", discipline: "Hiking", text: "Ridgelines off the marked trails. Quiet huts." },
  { icon: Snowflake, season: "Winter", discipline: "Ski Touring", text: "Untracked basins, far from the lifts." },
];

const UnfamiliarPlaces = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're on the list. We'll be in touch before the next trip.");
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[85vh] min-h-[560px] flex items-end overflow-hidden">
          <img
            src={heroImage}
            alt="Lone explorer on a misty ridgeline at dawn in an unknown corner of Slovenia"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="relative z-10 section-padding pb-20 md:pb-28 max-w-3xl">
            <p className="body-sm text-primary-foreground/70 uppercase tracking-widest mb-4">A series · Four times a year</p>
            <h1 className="heading-xl text-primary-foreground mb-6">Unfamiliar Places.</h1>
            <p className="body-lg text-primary-foreground/80 max-w-xl">
              Once a season, we go somewhere new. A corner of the outdoors most people miss — climbed, ridden, skied, or walked, depending on the time of year.
            </p>
          </div>
        </section>

        {/* Idea */}
        <section className="section-padding section-spacing">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg mb-8">The idea is simple.</h2>
            <p className="body-lg text-muted-foreground mb-6">
              Four trips a year. Each one a small group, a different discipline, and a place we haven't been before.
            </p>
            <p className="body-md text-muted-foreground">
              We scout it. We share what we find. You come along.
            </p>
          </div>
        </section>

        {/* Seasons */}
        <section className="section-padding section-spacing bg-sand-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-lg text-center mb-16">A different season. A different way to move.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {seasons.map((s) => (
                <div key={s.season} className="flex gap-6">
                  <s.icon className="text-sky-dark shrink-0 mt-1" size={28} strokeWidth={1.5} />
                  <div>
                    <p className="body-sm text-muted-foreground uppercase tracking-widest mb-1">{s.season}</p>
                    <h3 className="heading-sm mb-2">{s.discipline}</h3>
                    <p className="body-md text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-padding section-spacing">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Hear about the next one.</h2>
            <p className="body-md text-muted-foreground mb-10">
              We send a quiet note a few weeks before each Unfamiliar Places trip — where we're going, who it's for, and how to join. Nothing else.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                maxLength={255}
                required
                className="h-12 rounded-none border-foreground/20 bg-transparent text-center sm:text-left"
                aria-label="Email address"
              />
              <Button type="submit" size="lg" variant="default">
                Join
              </Button>
            </form>
            <p className="body-sm text-muted-foreground mt-6">
              Four emails a year. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="section-padding section-spacing bg-sky text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg text-primary-foreground mb-6">Looking for something now?</h2>
            <p className="body-lg text-primary-foreground/70 mb-10">
              Browse our regular departures across climbing, bikepacking, ski touring, and hiking.
            </p>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/adventures">View Adventures</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default UnfamiliarPlaces;
