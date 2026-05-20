import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountains.jpg";
import communityImage from "@/assets/community.jpg";
import aboutTeamImage from "@/assets/about-team.jpg";
import { adventures, categories, upcomingTrips } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

/* ---------- Hero — asymmetric, editorial ---------- */
const Hero = () => (
  <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
    <div className="section-padding max-w-7xl mx-auto">
      <div className="relative grid grid-cols-12 gap-6 lg:gap-8">
        <div className="col-span-12 lg:col-span-9 z-10">
          <p className="eyebrow mb-6 md:mb-10">Found Outdoors — Est. Slovenia</p>
          <h1 className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.85] tracking-tight uppercase text-primary font-extrabold">
            Move
            <br />
            <span className="block ml-[8%] lg:ml-[14%] text-foreground">together.</span>
          </h1>
          <div className="mt-10 lg:mt-14 ml-[10%] lg:ml-[25%] max-w-md">
            <p className="body-lg text-foreground/80 mb-8">
              Small-group boutique adventures in the world's most beautiful landscapes.
              Expert-led climbing, bikepacking, ski touring &amp; multi-day hiking through Slovenia.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <Button variant="default" size="lg" asChild>
                <Link to="/adventures">View Adventures</Link>
              </Button>
              <span className="eyebrow text-accent">Four seasons · one country</span>
            </div>
          </div>
        </div>

        {/* Asymmetric image with peach offset block */}
        <div className="col-span-12 lg:col-span-4 lg:absolute lg:top-0 lg:right-0 lg:w-[32%] mt-10 lg:mt-4">
          <div className="relative">
            <img
              src={heroImage}
              alt="Hikers walking through a misty Slovenian mountain valley at golden hour"
              className="w-full aspect-[4/5] object-cover shadow-2xl relative z-0"
              width={800}
              height={1000}
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary -z-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent -z-10" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Categories — asymmetric staggered grid ---------- */
const CategoryGrid = () => {
  const counts: Record<string, number> = {};
  for (const a of adventures) counts[a.category] = (counts[a.category] || 0) + 1;
  // staggered offsets, mirroring the prototype
  const offsets = ["", "mt-0 md:mt-12", "mt-4", "mt-0 md:mt-20"];
  const swatches = ["bg-secondary", "bg-accent", "bg-primary", "bg-[hsl(var(--sky))]"];

  return (
    <section className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-6">The disciplines</p>
          <h2 className="heading-lg text-primary mb-6">
            Fully supported<br />across Slovenia.
          </h2>
          <p className="body-md text-foreground/70 max-w-sm">
            From gear to mountain huts, we handle the logistics so you can focus on the
            climb, the ride, the line. Every trail is chosen for its character and solitude.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {categories.map((cat, i) => {
              const slug = cat.value.toLowerCase().replace(" ", "-");
              const firstImage = adventures.find((a) => a.category === cat.value)?.image;
              const n = counts[cat.value] || 0;
              return (
                <Link
                  key={cat.value}
                  to={`/adventures/category/${slug}`}
                  className={`group block ${offsets[i % offsets.length]}`}
                >
                  <div className={`aspect-[3/4] overflow-hidden mb-4 ${swatches[i % swatches.length]}`}>
                    {firstImage && (
                      <img
                        src={firstImage}
                        alt={cat.label}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        width={300}
                        height={400}
                      />
                    )}
                  </div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-display text-lg md:text-xl font-bold">{cat.label}</h3>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary">
                      {String(n).padStart(2, "0")}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Featured Adventures — editorial cards ---------- */
const FeaturedAdventures = () => {
  const featured = adventures.slice(0, 6);
  return (
    <section className="section-padding pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="eyebrow mb-4">Featured Journeys</p>
            <h2 className="heading-lg max-w-xl">Designed around depth, not distance.</h2>
          </div>
          <Link
            to="/adventures"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all"
          >
            View all <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {featured.map((a, i) => (
            <Link
              key={a.id}
              to={`/adventures/${a.id}`}
              className={`group block ${i % 2 === 1 ? "md:mt-12" : ""}`}
            >
              <div className="overflow-hidden mb-5 aspect-[4/5]">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={800}
                  height={1000}
                />
              </div>
              <p className="eyebrow text-foreground/50 mb-2">
                {a.category} · {a.location}
              </p>
              <h3 className="heading-sm mb-2 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="body-sm text-foreground/60">
                {a.duration} · From €{a.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Ethos quote — forest block, overlap rule ---------- */
const Ethos = () => (
  <section className="section-padding py-24 md:py-32 relative">
    <div className="max-w-7xl mx-auto relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-primary/20 -z-10" />
      <div
        className="ml-auto max-w-4xl p-10 md:p-16 lg:p-24 text-primary-foreground"
        style={{ background: "hsl(var(--sky))" }}
      >
        <span className="font-display text-xs uppercase tracking-[0.4em] text-secondary block mb-8">
          The ethos
        </span>
        <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-10 font-bold">
          "The people make the place. Every trip starts as a group of strangers and ends
          with stories you'll carry for years."
        </blockquote>
        <div className="h-12 w-px bg-secondary mb-4" />
        <p className="font-bold uppercase tracking-widest text-xs">Slovenian Alps · Since 2018</p>
      </div>
    </div>
  </section>
);

/* ---------- Upcoming departures ---------- */
const UpcomingTrips = () => (
  <section className="section-padding section-spacing">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-baseline gap-6 mb-12">
        <h2 className="heading-md">Upcoming departures</h2>
        <div className="flex-grow h-px bg-border" />
        <Link to="/calendar" className="eyebrow text-primary hover:text-foreground">
          Full calendar →
        </Link>
      </div>
      <div className="divide-y divide-border">
        {upcomingTrips.slice(0, 5).map((trip, i) => (
          <Link
            key={i}
            to={`/adventures/${trip.id}`}
            className="grid grid-cols-12 items-baseline py-6 gap-4 group"
          >
            <span className="col-span-12 md:col-span-2 body-sm text-foreground/50 uppercase tracking-widest">
              {trip.date}
            </span>
            <span className="col-span-12 md:col-span-5 font-display text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
              {trip.name}
            </span>
            <span className="col-span-6 md:col-span-3 body-sm text-foreground/60">
              {trip.location}
            </span>
            <span className="col-span-6 md:col-span-2 body-sm text-primary text-right">
              {trip.spotsLeft} spot{trip.spotsLeft !== 1 ? "s" : ""} left
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- About teaser — asymmetric ---------- */
const AboutTeaser = () => (
  <section className="section-padding section-spacing">
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
      <div className="col-span-12 md:col-span-5 relative">
        <img
          src={aboutTeamImage}
          alt="Outdoor guide portrait"
          loading="lazy"
          className="w-full aspect-[4/5] object-cover"
          width={800}
          height={1000}
        />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent -z-10 hidden md:block" />
      </div>
      <div className="col-span-12 md:col-span-6 md:col-start-7">
        <p className="eyebrow mb-4">Our story</p>
        <h2 className="heading-lg mb-6">
          Built by people who<br />
          <span className="text-primary italic">live outdoors.</span>
        </h2>
        <p className="body-lg text-foreground/70 mb-8 max-w-md">
          We started Found Outdoors because we believe the best way to experience nature is
          together — intentionally, and with people you trust.
        </p>
        <Button variant="outline" asChild>
          <Link to="/about">Read our story</Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ---------- Testimonials ---------- */
const Testimonials = () => (
  <section className="section-padding py-24 md:py-32 bg-[hsl(var(--cream))]">
    <div className="max-w-6xl mx-auto">
      <p className="eyebrow mb-12 text-center">Guest reflections</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {[
          {
            text: "I've traveled widely, but nothing has come close to the depth of a Found Outdoors trip. You return a different person.",
            name: "Claire S.",
          },
          {
            text: "No frills, no gimmicks. Just incredible landscapes, thoughtful guides, and a pace that lets you actually be present.",
            name: "Marcus W.",
          },
        ].map((t, i) => (
          <div key={t.name} className={i === 1 ? "md:mt-16" : ""}>
            <p className="font-display text-2xl md:text-3xl leading-snug mb-6 text-foreground">
              "{t.text}"
            </p>
            <p className="eyebrow text-foreground/60">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Unfamiliar Places teaser ---------- */
const UnfamiliarTeaser = () => (
  <section className="section-padding section-spacing">
    <div className="max-w-5xl mx-auto grid grid-cols-12 gap-8 items-center">
      <div className="col-span-12 md:col-span-7">
        <p className="eyebrow mb-4">A series · four times a year</p>
        <h2 className="heading-lg mb-6">
          Unfamiliar<br />
          <span className="italic text-accent">Places.</span>
        </h2>
        <p className="body-lg text-foreground/70 mb-8 max-w-lg">
          Once a season we go somewhere new — climbing, bikepacking, ski touring, or
          hiking. Join the list to hear about the next one.
        </p>
        <Button variant="outline" size="lg" asChild>
          <Link to="/unfamiliar-places">Learn more</Link>
        </Button>
      </div>
      <div className="col-span-12 md:col-span-5">
        <img
          src={communityImage}
          alt="Friends gathered around a campfire in the forest at dusk"
          loading="lazy"
          className="w-full aspect-square object-cover"
          width={800}
          height={800}
        />
      </div>
    </div>
  </section>
);

/* ---------- Final CTA ---------- */
const FinalCTA = () => (
  <section className="section-padding py-32 md:py-40 text-primary-foreground" style={{ background: "hsl(var(--primary))" }}>
    <div className="max-w-5xl mx-auto text-center">
      <p className="eyebrow text-primary-foreground/70 mb-8">Next chapter</p>
      <h2 className="heading-xl mb-10">
        Ready<br />to go?
      </h2>
      <p className="body-lg text-primary-foreground/80 mb-12 max-w-xl mx-auto">
        Find your next adventure and join a small group of like-minded people.
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
    <FeaturedAdventures />
    <Ethos />
    <UpcomingTrips />
    <AboutTeaser />
    <Testimonials />
    <UnfamiliarTeaser />
    <FinalCTA />
  </>
);

export default Index;
