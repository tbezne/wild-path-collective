import { Link, useParams, Navigate } from "react-router-dom";
import { adventures, type AdventureCategory } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CategoryInfo = {
  category: AdventureCategory;
  eyebrow: string;
  title: string;
  intro: string;
  body: string;
  heroImage: string;
};

const climbingHero = adventures.find((a) => a.id === "climbing-triglav")?.image
  ?? adventures.find((a) => a.category === "Climbing")?.image!;
const bikepackingHero = adventures.find((a) => a.category === "Bikepacking")?.image!;
const skiHero = adventures.find((a) => a.category === "Ski Touring")?.image!;
const hikingHero = adventures.find((a) => a.category === "Hiking")?.image!;

const categoryInfo: Record<string, CategoryInfo> = {
  climbing: {
    category: "Climbing",
    eyebrow: "All seasons",
    title: "Climbing in the Julian Alps.",
    intro:
      "Two-day ascents of Slovenia's most iconic summits. Mixed terrain — steel cables, exposed ridges, alpine huts — guided by people who know every move on the route.",
    body:
      "Whether it's standing on top of Triglav at sunrise or catching first light from Mangart, our climbing trips are built around small groups, careful pacing, and a deep respect for the mountain. No previous via ferrata experience is required for most routes — just a head for heights and a willingness to start early.",
    heroImage: climbingHero,
  },
  bikepacking: {
    category: "Bikepacking",
    eyebrow: "Supported, all skill levels",
    title: "Bikepacking through Slovenia.",
    intro:
      "Three slow days on gravel roads, farm tracks and forest trails. Bikes, luggage transfer, food and beds — all handled. You just ride.",
    body:
      "Our bikepacking trips are an introduction to a beautiful way of travelling. We move at a relaxed pace through Slovenia's quieter corners — vineyards, oak forests, thermal springs — and finish each day with a shared dinner and a warm bed (or a tent in a vineyard meadow, if you prefer).",
    heroImage: bikepackingHero,
  },
  "ski-touring": {
    category: "Ski Touring",
    eyebrow: "December – April",
    title: "Ski touring the backcountry.",
    intro:
      "Earn your turns in the Julian Alps. Hut-to-hut tours, untouched powder, and quiet bowls far above the treeline.",
    body:
      "These trips are for skiers comfortable on off-piste terrain who want to discover the silence of the backcountry. We carry avalanche safety gear, plan routes around conditions, and let the snow guide our days. Mountain huts, hot meals, and big descents included.",
    heroImage: skiHero,
  },
  hiking: {
    category: "Hiking",
    eyebrow: "Multi-day · Jun – Oct",
    title: "Multi-day hiking traverses.",
    intro:
      "Hut-to-hut journeys across alpine lakes, high passes, and quiet valleys. Move at the pace of the landscape.",
    body:
      "Our hiking trips connect the most beautiful corners of the Julian Alps and beyond. Sleep in mountain huts, eat hearty local food, and walk through scenery that changes with every ridge. Routes are chosen for beauty and solitude — never just distance.",
    heroImage: hikingHero,
  },
};

const CategoryPage = () => {
  const { slug } = useParams();
  const info = slug ? categoryInfo[slug] : undefined;

  if (!info) return <Navigate to="/adventures" replace />;

  const trips = adventures.filter((a) => a.category === info.category);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
          <img
            src={info.heroImage}
            alt={info.title}
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-charcoal/40" />
          <div className="relative z-10 section-padding pb-16 md:pb-24 max-w-3xl">
            <p className="body-sm text-primary-foreground/80 uppercase tracking-widest mb-4">
              {info.eyebrow}
            </p>
            <h1 className="heading-xl text-primary-foreground">{info.title}</h1>
          </div>
        </section>

        {/* Intro */}
        <section className="section-padding section-spacing">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl leading-relaxed mb-8">{info.intro}</p>
            <p className="body-lg text-muted-foreground">{info.body}</p>
          </div>
        </section>

        {/* Adventures list */}
        <section className="section-padding pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <h2 className="heading-lg">The trips</h2>
              <p className="body-sm text-muted-foreground">
                {trips.length} adventure{trips.length !== 1 ? "s" : ""}
              </p>
            </div>

            {trips.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trips.map((a) => (
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
                        {a.difficulty}
                      </Badge>
                    </div>
                    <p className="body-sm text-muted-foreground uppercase tracking-widest mb-1">
                      {a.location}
                    </p>
                    <h3 className="heading-sm mb-2 group-hover:text-sky-dark transition-colors">
                      {a.title}
                    </h3>
                    <p className="body-sm text-muted-foreground">
                      {a.duration} · Group of {a.groupSize} · From €{a.price}
                      {a.season && (
                        <span className="ml-2 text-muted-foreground/60">· {a.season}</span>
                      )}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="body-md text-muted-foreground">
                New trips are being planned — check back soon or get in touch.
              </p>
            )}

            <div className="text-center mt-16">
              <Button variant="outline" size="lg" asChild>
                <Link to="/custom-experience">Want something custom?</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
