import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountains.jpg";
import communityImage from "@/assets/community.jpg";
import aboutTeamImage from "@/assets/about-team.jpg";
import { adventures, categories, upcomingTrips } from "@/lib/data";
import { Compass, Users, Mountain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
        Move together. Discover together.
      </h1>
      <p className="body-lg text-primary-foreground/80 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        Climbing, bikepacking, ski touring & hiking — small-group adventures in the world's most beautiful landscapes.
      </p>
      <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <Button variant="hero" size="lg" asChild>
          <Link to="/adventures">View Adventures</Link>
        </Button>
      </div>
    </div>
  </section>
);

const CategoryGrid = () => (
  <section className="section-padding section-spacing">
    <div className="max-w-5xl mx-auto">
      <h2 className="heading-lg text-center mb-4">Fully supported across Slovenia.</h2>
      <p className="body-md text-muted-foreground text-center mb-12 max-w-xl mx-auto">
        Climbing, bikepacking, ski touring, and multi-day hiking — guided end-to-end. Bikes, gear, huts, transfers, and a leader who knows the ground.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const catAdventures = adventures.filter((a) => a.category === cat.value);
          const firstImage = catAdventures[0]?.image;
          return (
            <Link
              key={cat.value}
              to={`/adventures?category=${cat.value}`}
              className="group relative overflow-hidden aspect-[3/4]"
            >
              {firstImage && (
                <img
                  src={firstImage}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={800}
                />
              )}
              <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-colors" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                <span className="text-3xl mb-3">{cat.icon}</span>
                <h3 className="heading-sm text-primary-foreground">{cat.label}</h3>
                <p className="body-sm text-primary-foreground/60 mt-1">
                  {catAdventures.length} trip{catAdventures.length !== 1 ? "s" : ""}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

const Values = () => (
  <section className="section-padding py-16 bg-sand-light">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
      {[
        { icon: Users, title: "Small Groups", text: "6–10 people. Real connections, not crowds." },
        { icon: Compass, title: "Curated Routes", text: "Every trail chosen for beauty, challenge, and solitude." },
        { icon: Mountain, title: "Expert Guides", text: "People who know the land and love sharing it." },
      ].map((v) => (
        <div key={v.title} className="flex flex-col items-center gap-4">
          <v.icon className="text-sky-dark" size={28} strokeWidth={1.5} />
          <h3 className="heading-sm">{v.title}</h3>
          <p className="body-md text-muted-foreground max-w-xs">{v.text}</p>
        </div>
      ))}
    </div>
  </section>
);

const FeaturedAdventures = () => {
  const featured = adventures.slice(0, 6);
  return (
    <section className="section-padding section-spacing">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-center mb-4">Featured Adventures</h2>
        <p className="body-md text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Journeys designed around depth, not distance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((a) => (
            <Link key={a.id} to={`/adventures/${a.id}`} className="group">
              <div className="overflow-hidden mb-5 relative">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
                <Badge className="absolute top-3 left-3 bg-background/90 text-foreground border-0 text-xs font-normal backdrop-blur-sm">
                  {a.category}
                </Badge>
              </div>
              <p className="body-sm text-muted-foreground uppercase tracking-widest mb-1">{a.location}</p>
              <h3 className="heading-sm mb-2 group-hover:text-sky-dark transition-colors">{a.title}</h3>
              <p className="body-sm text-muted-foreground">
                {a.duration} · From €{a.price}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/adventures">View All Adventures</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

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
            <span className="body-md font-medium flex-1 group-hover:text-sky-dark transition-colors">{trip.name}</span>
            <span className="body-sm text-muted-foreground w-48">{trip.location}</span>
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
          We started Found Outdoors because we believe the best way to experience nature is together, intentionally, and with people you trust.
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
          { text: "I've traveled widely, but nothing has come close to the depth of a Found Outdoors trip. You return a different person.", name: "Claire S." },
          { text: "No frills, no gimmicks. Just incredible landscapes, thoughtful guides, and a pace that lets you actually be present.", name: "Marcus W." },
        ].map((t) => (
          <div key={t.name}>
            <p className="text-xl md:text-2xl italic leading-relaxed mb-6">"{t.text}"</p>
            <p className="body-sm text-muted-foreground uppercase tracking-widest">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const UnfamiliarTeaser = () => (
  <section className="section-padding section-spacing bg-sand-light text-center">
    <div className="max-w-2xl mx-auto">
      <p className="body-sm text-muted-foreground uppercase tracking-widest mb-4">A series · Four times a year</p>
      <h2 className="heading-lg mb-6">Unfamiliar Places.</h2>
      <p className="body-lg text-muted-foreground mb-10">
        Once a season we go somewhere new — climbing, bikepacking, ski touring, or hiking. Join the list to hear about the next one.
      </p>
      <Button variant="outline" size="lg" asChild>
        <Link to="/unfamiliar-places">Learn More</Link>
      </Button>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="section-padding section-spacing bg-sky text-center">
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
    <CategoryGrid />
    <Values />
    <FeaturedAdventures />
    <Community />
    <UpcomingTrips />
    <AboutTeaser />
    <Testimonials />
    <UnfamiliarTeaser />
    <FinalCTA />
  </>
);

export default Index;
