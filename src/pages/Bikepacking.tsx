import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/bikepacking-hero.jpg";

/* ──────────────────────────────────────────────────────────────────
   ROADBOOK 003 — a bikepacking page built like a printed cycling
   roadbook: a continuous SVG route line snakes down the page,
   passing through hand-stamped day cards, an elevation profile,
   a perforated ticket stub, and a typewriter-y technical column.
   ────────────────────────────────────────────────────────────────── */

const days = [
  {
    n: "01",
    from: "Maribor",
    to: "Jeruzalem",
    km: 62,
    climb: 780,
    surface: "70% gravel",
    title: "Into the wine hills",
    body:
      "Briefing & bike fit in Maribor. We roll east through the Drava valley, then climb gently into the Ljutomer-Ormož vineyards. Finish in Jeruzalem (real name) with sunset over endless green ridges.",
    note: "Bring a windbreaker for the descent into town.",
    coord: "46.4769° N",
  },
  {
    n: "02",
    from: "Jeruzalem",
    to: "Goričko",
    km: 84,
    climb: 1120,
    surface: "55% gravel",
    title: "The long, slow north",
    body:
      "The longest day. Forest trails, farm tracks, stream-side picnic. Goričko Nature Park unfolds slowly — fatigue arrives quietly. Renovated farmhouse, home-cooked food, local wine.",
    note: "Refill bottles at the Bukovnica spring.",
    coord: "46.8214° N",
  },
  {
    n: "03",
    from: "Goričko",
    to: "Goričko loop",
    km: 38,
    climb: 420,
    surface: "60% gravel",
    title: "Meadows & goodbyes",
    body:
      "A shorter morning through meadows and oak woods. Visit to a traditional potter, a stop at a thermal spring, and a final shared meal. Transfer back to Maribor by early afternoon.",
    note: "Pack swim kit for the thermal pool stop.",
    coord: "46.8430° N",
  },
];

/* ── ROUTE LINE ───────────────────────────────────────────────── */
const RouteLine = () => (
  <svg
    aria-hidden
    viewBox="0 0 200 1600"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full"
  >
    <defs>
      <pattern id="dashes" width="2" height="14" patternUnits="userSpaceOnUse">
        <rect width="2" height="7" fill="hsl(var(--primary))" />
      </pattern>
    </defs>
    <path
      d="M100,0
         C 60,180 160,320 100,460
         C 40,600 170,740 100,880
         C 30,1020 170,1160 100,1300
         L 100,1600"
      fill="none"
      stroke="url(#dashes)"
      strokeWidth="2.5"
    />
    {[140, 600, 1060].map((y, i) => (
      <g key={i}>
        <circle cx="100" cy={y} r="14" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
        <circle cx="100" cy={y} r="5" fill="hsl(var(--primary))" />
      </g>
    ))}
  </svg>
);

/* ── ELEVATION PROFILE ────────────────────────────────────────── */
const Elevation = () => (
  <svg viewBox="0 0 600 120" className="w-full h-24 md:h-28">
    <defs>
      <linearGradient id="elev" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M0,90 L40,72 L80,80 L120,55 L160,68 L200,40 L240,52 L280,22 L320,38 L360,30 L400,58 L440,48 L480,70 L520,60 L560,82 L600,78 L600,120 L0,120 Z"
      fill="url(#elev)"
    />
    <path
      d="M0,90 L40,72 L80,80 L120,55 L160,68 L200,40 L240,52 L280,22 L320,38 L360,30 L400,58 L440,48 L480,70 L520,60 L560,82 L600,78"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="1.6"
    />
    {[0, 150, 300, 450, 600].map((x) => (
      <line key={x} x1={x} y1="115" x2={x} y2="120" stroke="hsl(var(--foreground))" strokeOpacity="0.4" />
    ))}
  </svg>
);

const Bikepacking = () => (
  <>
    <Navbar />

    {/* ── MASTHEAD ────────────────────────────────────────────────── */}
    <header className="pt-28 pb-10 border-b border-foreground/20 bg-background">
      <div className="section-padding">
        <div className="flex items-center justify-between flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 mb-10">
          <span>Roadbook № 003 / rev. 2026.06</span>
          <span className="hidden md:inline">Filed by — Found Outdoors, Maribor branch</span>
          <span>Distance 184 km · Climb 2,320 m</span>
        </div>

        <h1
          className="font-display font-extrabold uppercase leading-[0.78] tracking-tight text-foreground"
          style={{ fontSize: "clamp(2.8rem, 11vw, 11rem)" }}
        >
          Eastern
          <span className="block text-primary -mt-2 md:-mt-4">Slovenia,</span>
          <span
            className="block italic font-normal text-accent -mt-1 md:-mt-3"
            style={{ fontSize: "clamp(1.8rem, 5vw, 4.5rem)" }}
          >
            by gravel & by gut.
          </span>
        </h1>

        <div className="mt-10 grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-7 body-lg text-foreground/85 max-w-2xl">
            A three-day bikepacking dossier through the part of Slovenia the
            guidebooks forgot. Vineyards, oak woods, thermal springs, a village
            called Jeruzalem. No racing. No suffering. Just turning cranks and
            paying attention.
          </p>
          <div className="col-span-12 md:col-span-4 md:col-start-9 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70 space-y-1 self-end">
            <p>Season — Apr · May · Jun · Sep · Oct</p>
            <p>Group — 4 to 8 riders</p>
            <p>Bike — Bombtrack Beyond (provided)</p>
            <p>Fitness — comfortable on bike, 4h days</p>
          </div>
        </div>
      </div>
    </header>

    {/* ── ELEVATION STRIP ─────────────────────────────────────────── */}
    <section className="bg-muted/40 border-b border-foreground/10">
      <div className="section-padding py-8">
        <div className="flex items-end justify-between mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60">
          <span>Elevation — Maribor → Goričko → loop</span>
          <span className="hidden md:inline">+2,320 m · −2,180 m</span>
        </div>
        <Elevation />
        <div className="flex justify-between mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
          <span>km 0</span>
          <span>km 46</span>
          <span>km 92</span>
          <span>km 138</span>
          <span>km 184</span>
        </div>
      </div>
    </section>

    {/* ── HERO PLATE + LEGEND ─────────────────────────────────────── */}
    <section className="section-padding py-16">
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 items-start">
        <figure className="col-span-12 md:col-span-7 relative">
          <div className="absolute -inset-2 bg-secondary -z-10 translate-x-2 translate-y-2" />
          <img
            src={heroImage}
            alt="Bikepacker rolling through Slovenian vineyard hills at sunset"
            className="w-full aspect-[16/10] object-cover"
            width={1600}
            height={1000}
          />
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60 flex justify-between">
            <span>Plate 01 — between Ormož & Jeruzalem</span>
            <span>F8 · 1/500 · golden hr</span>
          </figcaption>
        </figure>

        <aside className="col-span-12 md:col-span-5 md:pl-4 border-l-2 border-dotted border-foreground/30 font-mono text-xs">
          <p className="uppercase tracking-[0.25em] text-foreground/60 mb-4">Legend</p>
          <ul className="space-y-3 text-foreground/85">
            <li className="flex items-baseline gap-3"><span className="text-primary text-base leading-none">━━</span> primary route, gravel</li>
            <li className="flex items-baseline gap-3"><span className="text-primary text-base leading-none">┄┄</span> connector, quiet asphalt</li>
            <li className="flex items-baseline gap-3"><span className="text-accent text-base leading-none">◉</span> overnight stop</li>
            <li className="flex items-baseline gap-3"><span className="text-foreground text-base leading-none">◆</span> point of interest</li>
            <li className="flex items-baseline gap-3"><span className="text-foreground/60 text-base leading-none">≈</span> river / thermal spring</li>
          </ul>
          <p className="uppercase tracking-[0.25em] text-foreground/60 mt-8 mb-3">Scale</p>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-24 bg-foreground/80" />
            <span className="text-foreground/70">10 km</span>
          </div>
        </aside>
      </div>
    </section>

    {/* ── THE ROUTE: snake line + day stamps ──────────────────────── */}
    <section className="relative bg-background py-16 md:py-24 overflow-hidden">
      {/* the route line, vertical, behind content */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[200px] pointer-events-none opacity-90 hidden md:block">
        <RouteLine />
      </div>

      <div className="section-padding relative">
        <div className="text-center mb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/60 mb-4">
            Section II — the line you'll follow
          </p>
          <h2
            className="font-display font-extrabold uppercase leading-[0.85]"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
          >
            Three days,
            <span className="block text-primary italic font-normal">one line.</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-40">
          {days.map((d, i) => {
            const left = i % 2 === 0;
            return (
              <article
                key={d.n}
                className={`grid grid-cols-12 gap-y-6 md:gap-x-8 items-start relative`}
              >
                {/* Stamp card */}
                <div
                  className={`col-span-12 md:col-span-5 ${left ? "" : "md:col-start-8"} relative`}
                >
                  <div
                    className={`bg-background border-2 border-foreground p-6 relative shadow-[8px_8px_0_0_hsl(var(--accent))] ${
                      left ? "-rotate-1" : "rotate-1"
                    }`}
                  >
                    {/* corner perforations */}
                    {[
                      "top-1 left-1",
                      "top-1 right-1",
                      "bottom-1 left-1",
                      "bottom-1 right-1",
                    ].map((c) => (
                      <span key={c} className={`absolute ${c} w-1.5 h-1.5 rounded-full bg-foreground`} />
                    ))}

                    {/* faux stamp */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-primary text-primary flex flex-col items-center justify-center font-display font-bold uppercase text-[10px] tracking-[0.2em] rotate-12 bg-background">
                      <span>Day</span>
                      <span className="text-2xl leading-none">{d.n}</span>
                    </div>

                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60 mb-3">
                      {d.from} → {d.to} · {d.coord}
                    </p>
                    <h3 className="font-display font-extrabold uppercase text-foreground leading-[0.9] text-3xl md:text-4xl mb-5">
                      {d.title}
                    </h3>

                    <div className="grid grid-cols-3 gap-3 border-t border-b border-foreground/20 py-3 mb-4 font-mono text-[11px] uppercase tracking-[0.15em]">
                      <div>
                        <p className="text-foreground/50">km</p>
                        <p className="font-display text-xl font-bold tracking-normal">{d.km}</p>
                      </div>
                      <div>
                        <p className="text-foreground/50">climb</p>
                        <p className="font-display text-xl font-bold tracking-normal">{d.climb}m</p>
                      </div>
                      <div>
                        <p className="text-foreground/50">gravel</p>
                        <p className="font-display text-xl font-bold tracking-normal">
                          {d.surface.split("%")[0]}<span className="text-sm">%</span>
                        </p>
                      </div>
                    </div>

                    <p className="body-md text-foreground/85">{d.body}</p>

                    <p className="mt-5 pt-4 border-t border-dotted border-foreground/30 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                      ✎ note — {d.note}
                    </p>
                  </div>
                </div>

                {/* Mile marker on the line */}
                <div
                  className={`hidden md:flex col-span-2 ${left ? "md:col-start-6" : "md:col-start-6"} justify-center pt-10`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70 bg-background px-2 py-1 border border-foreground/30">
                    km {[0, 62, 146][i]}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── TICKET STUB ──────────────────────────────────────────────── */}
    <section className="section-padding py-20">
      <div className="relative bg-foreground text-background max-w-5xl mx-auto">
        {/* perforation row */}
        <div className="hidden md:flex absolute top-0 bottom-0 left-2/3 flex-col justify-between py-3 -translate-x-1/2">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-background" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 p-8 md:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] opacity-70 mb-6">
              Boarding pass · Found Outdoors · 003
            </p>
            <h2
              className="font-display font-extrabold uppercase leading-[0.85] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Bring the legs.
              <br />
              <span className="text-secondary italic font-normal">We'll bring the rest.</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-[11px] uppercase tracking-[0.2em] opacity-85">
              {[
                ["Passenger", "you (×1)"],
                ["Gate", "Maribor"],
                ["Duration", "3 days"],
                ["Class", "small group"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="opacity-60 mb-1">{k}</p>
                  <p className="text-background">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12 md:border-l border-dashed border-background/30 flex flex-col justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] opacity-70 mb-3">Seat</p>
              <p className="font-display text-6xl font-extrabold leading-none">03A</p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-secondary text-foreground hover:bg-secondary/90 self-start"
            >
              <Link to="/contact">Reserve →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ── PACKING LIST / KIT ──────────────────────────────────────── */}
    <section className="section-padding pb-28">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/60 mb-4">
            Appendix A
          </p>
          <h2
            className="font-display font-extrabold uppercase leading-[0.85]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            What rides
            <br />
            <span className="text-primary">with you.</span>
          </h2>
          <p className="mt-6 body-md text-foreground/70 max-w-xs">
            Everything below is covered. You arrive with cycling kit and curiosity.
          </p>
        </div>
        <ul className="col-span-12 md:col-span-8 font-mono text-sm">
          {[
            ["01", "Gravel bike — Bombtrack Beyond, set up for you"],
            ["02", "Accommodation — 2 nights, family-run"],
            ["03", "Meals & wine — all of them, yes all"],
            ["04", "Navigation — GPS files + printed maps"],
            ["05", "Luggage — carried between stops"],
            ["06", "Ride leader — local, slow-talking, fast-pedaling"],
            ["07", "Support vehicle — for mechanicals & tired legs"],
            ["08", "Return transfer — back to Maribor on Day 3"],
          ].map(([n, t]) => (
            <li
              key={n}
              className="grid grid-cols-[40px_1fr] items-baseline gap-4 border-b border-dotted border-foreground/30 py-3"
            >
              <span className="text-primary uppercase tracking-[0.2em]">{n}</span>
              <span className="text-foreground/90">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <Footer />
  </>
);

export default Bikepacking;
