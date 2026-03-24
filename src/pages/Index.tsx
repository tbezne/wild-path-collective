import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountains.jpg";
import communityImage from "@/assets/community.jpg";
import aboutTeamImage from "@/assets/about-team.jpg";
import { adventures, upcomingTrips } from "@/lib/data";
import { Compass, Users, Mountain } from "lucide-react";

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImage}
      alt="Hikers walking through a misty mountain valley at golden hour"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-charcoal/40" />
    <div className="relative z-10 text-center section-padding max-w-3xl mx-auto">
      <h1 className="heading-xl text-primary-foreground mb-6 animate-fade-in">
        Go further. Together.
      </h1>
      <p className="body-lg text-primary-foreground/80 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        Small-group adventures in the world's most untouched landscapes.
      </p>
      <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <Button variant="hero" size="lg" asChild>
          <Link to="/adventures">View Adventures</Link>
        </Button>
      </div>
    </div>
  </section>
);

const Values = () => (
  <section className="section-padding section-spacing">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
      {[
        { icon: Users, title: "Small Groups", text: "6–10 people. Real connections, not crowds." },
        { icon: Compass, title: "Curated Routes", text: "Every trail chosen for beauty, challenge, and solitude." },
        { icon: Mountain, title: "Expert Guides", text: "People who know the land and love sharing it." },
      ].map((v) => (
        <div key={v.title} className="flex flex-col items-center gap-4">
          <v.icon className="text-forest" size={28} strokeWidth={1.5} />
          <h3 className="heading-sm">{v.title}</h3>
          <p className="body-md text-muted-foreground max-w-xs">{v.text}</p>
        </div>
      ))}
    </div>
  </section>
);

const FeaturedAdventures = () => (
  <section className="section-padding section-spacing bg-sand-light">
    <div className="max-w-6xl mx-auto">
      <h2 className="heading-lg text-center mb-4">Featured Adventures</h2>
      <p className="body-md text-muted-foreground text-center mb-16 max-w-lg mx-auto">
        Journeys designed around depth, not distance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {adventures.map((a) => (
          <Link key={a.id} to={`/adventures/${a.id}`} className="group">
            <div className="overflow-hidden mb-5">
              <img
                src={a.image}
                alt={a.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
            <p className="body-sm text-muted-foreground uppercase tracking-widest mb-1">{a.location}</p>
            <h3 className="heading-sm mb-2 group-hover:text-forest transition-colors">{a.title}</h3>
            <p className="body-sm text-muted-foreground">
              {a.duration} · From €{a.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const Community = () => (
  <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
    <img
      src={communityImage}
      alt="Friends gathered around a campfire in the forest at dusk"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      width={1920}
      height={900}
    />
    <div className="absolute inset-0 bg-charcoal/50" />
    <div className="relative z-10 section-padding max-w-2xl">
      <h2 className="heading-lg text-primary-foreground mb-6">
        The people make the place.
      </h2>
      <p className="body-lg text-primary-foreground/80">
        Every trip starts as a group of strangers. Every trip ends with stories you'll carry for years.
      </p>
    </div>
  </section>
);

const UpcomingTrips = () => (
  <section className="section-padding section-spacing">
    <div className="max-w-4xl mx-auto">
      <h2 className="heading-lg text-center mb-16">Upcoming Departures</h2>
      <div className="divide-y divide-border">
        {upcomingTrips.slice(0, 5).map((trip, i) => (
          <Link
            key={i}
            to={`/adventures/${trip.id}`}
            className="flex flex-col md:flex-row md:items-center justify-between py-5 gap-2 md:gap-0 group"
          >
            <span className="body-sm text-muted-foreground w-36">{trip.date}</span>
            <span className="body-md font-medium flex-1 group-hover:text-forest transition-colors">{trip.name}</span>
            <span className="body-sm text-muted-foreground w-40">{trip.location}</span>
            <span className="body-sm text-muted-foreground w-28 text-right">
              {trip.spotsLeft} spot{trip.spotsLeft !== 1 ? "s" : ""} left
            </span>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" asChild>
          <Link to="/calendar">View Full Calendar</Link>
        </Button>
      </div>
    </div>
  </section>
);

const AboutTeaser = () => (
  <section className="section-padding section-spacing bg-sand-light">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <img
        src={aboutTeamImage}
        alt="Outdoor guide portrait"
        className="w-full aspect-square object-cover"
        loading="lazy"
        width={800}
        height={800}
      />
      <div>
        <h2 className="heading-lg mb-6">Built by people who live outdoors.</h2>
        <p className="body-lg text-muted-foreground mb-8">
          We started Terra because we believe the best way to experience nature is slowly, intentionally, and with people you trust.
        </p>
        <Button variant="outline" asChild>
          <Link to="/about">Our Story</Link>
        </Button>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section-padding section-spacing">
    <div className="max-w-4xl mx-auto">
      <h2 className="heading-lg text-center mb-16">What people say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { text: "I've traveled widely, but nothing has come close to the depth of a Terra trip. You return a different person.", name: "Claire S." },
          { text: "No frills, no gimmicks. Just incredible landscapes, thoughtful guides, and a pace that lets you actually be present.", name: "Marcus W." },
        ].map((t) => (
          <div key={t.name}>
            <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-6">"{t.text}"</p>
            <p className="body-sm text-muted-foreground uppercase tracking-widest">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="section-padding section-spacing bg-primary text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="heading-lg text-primary-foreground mb-6">Ready to go?</h2>
      <p className="body-lg text-primary-foreground/70 mb-10">
        Find your next adventure and join a group of like-minded people.
      </p>
      <Button variant="hero-outline" size="lg" asChild>
        <Link to="/adventures">Explore Adventures</Link>
      </Button>
    </div>
  </section>
);

const Index = () => (
  <>
    <Hero />
    <Values />
    <FeaturedAdventures />
    <Community />
    <UpcomingTrips />
    <AboutTeaser />
    <Testimonials />
    <FinalCTA />
  </>
);

export default Index;
