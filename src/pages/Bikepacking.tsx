import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/bikepacking-hero.jpg";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const itinerary = [
  {
    day: "01",
    route: "Maribor → Jeruzalem",
    km: "62",
    climb: "780m",
    surface: "70% gravel",
    title: "Into the wine hills",
    description:
      "Morning briefing and bike fit in Maribor. We roll east through the Drava valley, then climb gently into the Ljutomer-Ormož vineyards on quiet gravel. Finish in Jeruzalem — yes, that's its real name — with sunset over endless green ridges. Dinner at a family gostilna.",
    stops: ["Drava ferry", "Vineyard espresso", "Sunset ridge"],
  },
  {
    day: "02",
    route: "Jeruzalem → Goričko",
    km: "84",
    climb: "1,120m",
    surface: "55% gravel",
    title: "The long, slow north",
    description:
      "The longest day. Forest trails, farm tracks, and stream-side picnic lunch through Goričko Nature Park. Gentle but constant — the kind of fatigue you fall asleep grateful for. A renovated farmhouse, home-cooked food, and local wine wait at the end.",
    stops: ["Stream picnic", "Oak forest singletrack", "Farmhouse welcome"],
  },
  {
    day: "03",
    route: "Goričko loop → home",
    km: "38",
    climb: "420m",
    surface: "60% gravel",
    title: "Meadows & goodbyes",
    description:
      "A shorter morning through Goričko's meadows and oak woods. Visit to a traditional potter, a stop at a thermal spring, and a final shared meal. Transfer back to Maribor by early afternoon for onward connections.",
    stops: ["Potter's studio", "Thermal soak", "Last bread, last wine"],
  },
];

const StatBlock = ({ k, v }: { k: string; v: string }) => (
  <div className="border-t border-foreground/20 pt-3">
    <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/60 mb-1">{k}</p>
    <p className="font-display text-2xl font-bold leading-none">{v}</p>
  </div>
);

const Bikepacking = () => (
  <>
    <Navbar />

    {/* ── HERO ─────────────────────────────────────────────────────── */}
    <section className="relative pt-28 pb-12 overflow-hidden bg-background">
      {/* huge ghost numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 -right-8 md:-right-16 font-display font-extrabold text-primary/10 leading-none select-none"
        style={{ fontSize: "clamp(14rem, 30vw, 32rem)" }}
      >
        03
      </span>

      <div className="section-padding relative">
        {/* metadata strip */}
        <div className="flex items-center gap-4 mb-10 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
          <span className="h-px w-12 bg-foreground/40" />
          <span>Dossier № 03 — Bikepacking</span>
          <span className="hidden md:inline">/ Eastern Slovenia</span>
          <span className="hidden md:inline">/ 3 days · self-supported feel</span>
        </div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 items-end">
          {/* Headline */}
          <div className="col-span-12 lg:col-span-8 relative z-10">
            <h1 className="font-display font-extrabold uppercase leading-[0.82] tracking-tight">
              <span className="block text-foreground" style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)" }}>
                Slow gravel
              </span>
              <span
                className="block italic font-normal text-accent -mt-1 md:-mt-3"
                style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)", fontFamily: "var(--font-display)" }}
              >
                through the
              </span>
              <span
                className="block text-primary lg:-ml-1"
                style={{ fontSize: "clamp(3.2rem, 10vw, 9.5rem)" }}
              >
                vineyard east.
              </span>
            </h1>

            <div className="mt-10 max-w-md">
              <p className="body-lg text-foreground/80">
                Three days on gravel and forest roads across the most underrated
                corner of Slovenia. No racing. No suffering. Just riding, and the
                kind of quiet you'd forgotten existed.
              </p>
            </div>
          </div>

          {/* Hero image — tall, offset right */}
          <div className="col-span-12 lg:col-span-4 lg:-mt-24 relative">
            <div className="relative">
              <div className="absolute -inset-3 bg-secondary -z-10 translate-x-3 translate-y-3" />
              <img
                src={heroImage}
                alt="Bikepacker riding gravel through vineyard hills in eastern Slovenia"
                className="w-full aspect-[3/4] object-cover grayscale-[15%]"
                width={900}
                height={1200}
              />
              <div className="absolute bottom-3 left-3 right-3 bg-background/95 backdrop-blur px-4 py-3 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/70">
                  46.5°N · 16.2°E
                </span>
                <ArrowUpRight size={16} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* stats rail */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-6">
          <StatBlock k="Distance" v="184 km" />
          <StatBlock k="Climb" v="2,320 m" />
          <StatBlock k="Days" v="03" />
          <StatBlock k="Group" v="Max 8" />
          <StatBlock k="Start / End" v="Maribor" />
        </div>
      </div>
    </section>

    {/* ── MARQUEE ──────────────────────────────────────────────────── */}
    <section className="bg-foreground text-background py-5 overflow-hidden border-y border-foreground">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_38s_linear_infinite]">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex gap-12 items-center shrink-0">
            {[
              "gravel only",
              "★",
              "no peloton",
              "★",
              "vineyards · oak woods · meadows",
              "★",
              "luggage carried",
              "★",
              "home-cooked everything",
              "★",
              "Goričko Nature Park",
              "★",
            ].map((t, j) => (
              <span
                key={j}
                className="font-display uppercase tracking-[0.2em] text-sm md:text-base"
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </section>

    {/* ── INTRO / MANIFESTO ────────────────────────────────────────── */}
    <section className="section-padding py-24 md:py-32">
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-12">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow mb-6">A field note</p>
          <p
            className="font-display font-bold leading-[0.95] text-foreground"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
          >
            Eastern Slovenia is the part of the country that the guidebooks forgot — which is precisely the point.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-5 text-foreground/85 body-lg">
          <p>
            No Alpine theatre, no Insta-famous lakes. Just rolling vineyard
            ridges, thermal springs steaming at dawn, and villages where the
            baker still knows everyone by name.
          </p>
          <p>
            We hand you a fully kitted gravel bike, carry your luggage between
            stops, feed you absurdly well, and otherwise stay out of your
            handlebars. Your only job: turn the cranks and pay attention.
          </p>
        </div>
      </div>
    </section>

    {/* ── ITINERARY (postcards) ────────────────────────────────────── */}
    <section className="bg-muted/50 py-24 md:py-32">
      <div className="section-padding">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <h2
            className="font-display font-extrabold uppercase leading-[0.85]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            The route,
            <br />
            <span className="text-primary italic font-normal">day by day.</span>
          </h2>
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 max-w-xs">
            Distances are approximate. Weather, mood, and the occasional cherry tree may rearrange them.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {itinerary.map((d, i) => (
            <article
              key={d.day}
              className={`grid grid-cols-12 gap-y-6 md:gap-x-10 items-start ${
                i % 2 === 1 ? "md:[&>*:first-child]:col-start-7" : ""
              }`}
            >
              {/* Day stamp card */}
              <div className="col-span-12 md:col-span-5 lg:col-span-4">
                <div className="bg-background border border-foreground/15 p-6 relative">
                  <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] px-2 py-1">
                    Day {d.day}
                  </span>
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-foreground/60 mb-3 mt-1">
                    {d.route}
                  </p>
                  <p
                    className="font-display font-extrabold uppercase text-foreground leading-[0.9] mb-6"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                  >
                    {d.km}
                    <span className="text-base ml-1 align-top tracking-normal normal-case font-normal text-foreground/60">
                      km
                    </span>
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="uppercase tracking-[0.2em] text-foreground/50 mb-1">Climb</p>
                      <p className="font-medium">{d.climb}</p>
                    </div>
                    <div>
                      <p className="uppercase tracking-[0.2em] text-foreground/50 mb-1">Surface</p>
                      <p className="font-medium">{d.surface}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-7 lg:col-span-7 md:pl-2">
                <h3 className="heading-md text-foreground mb-4">{d.title}</h3>
                <p className="body-lg text-foreground/80 max-w-xl mb-6">
                  {d.description}
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {d.stops.map((s) => (
                    <li
                      key={s}
                      className="text-xs uppercase tracking-[0.2em] text-foreground/70 flex items-center gap-2"
                    >
                      <span className="text-accent">◆</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ── INCLUDED / KIT TABLE ─────────────────────────────────────── */}
    <section className="section-padding py-24 md:py-32">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-4">In the kit</p>
          <h2
            className="font-display font-extrabold uppercase leading-[0.85]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            What rides
            <br />
            <span className="text-primary">with you.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <ul className="divide-y divide-foreground/15 border-t border-foreground/15">
            {[
              ["Gravel bike", "Bombtrack Beyond, set up for you"],
              ["Accommodation", "2 nights, family-run"],
              ["Meals & wine", "All of them — yes, all"],
              ["Navigation", "GPS files + printed maps"],
              ["Luggage", "Carried between stops"],
              ["Ride leader", "Local, slow-talking, fast-pedaling"],
              ["Support vehicle", "For mechanicals & tired legs"],
              ["Return transfer", "Back to Maribor, Day 3"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-baseline justify-between gap-6 py-4">
                <span className="font-display uppercase tracking-[0.15em] text-sm md:text-base text-foreground">
                  {k}
                </span>
                <span className="text-foreground/70 body-md text-right">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* ── CTA ──────────────────────────────────────────────────────── */}
    <section className="bg-primary text-primary-foreground py-24 md:py-32 relative overflow-hidden">
      <span
        aria-hidden
        className="absolute -bottom-12 -left-6 font-display font-extrabold opacity-10 leading-none select-none"
        style={{ fontSize: "clamp(10rem, 24vw, 22rem)" }}
      >
        ride.
      </span>
      <div className="section-padding relative">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-6">
              Small groups · pick your dates
            </p>
            <h2
              className="font-display font-extrabold uppercase leading-[0.85]"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              Bring the legs.
              <br />
              <span className="italic font-normal opacity-90">We'll bring the rest.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="group bg-background text-foreground hover:bg-background/90"
            >
              <Link to="/contact" className="inline-flex items-center gap-3">
                Reserve a spot
                <ArrowDownRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default Bikepacking;
