import { useState } from "react";
import { Link } from "react-router-dom";
import { adventures, categories, type AdventureCategory } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const Adventures = () => {
  const [activeCategory, setActiveCategory] = useState<AdventureCategory | "All">("All");
  const [difficulty, setDifficulty] = useState("All");

  const filtered = adventures.filter(
    (a) =>
      (activeCategory === "All" || a.category === activeCategory) &&
      (difficulty === "All" || a.difficulty === difficulty)
  );

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="section-padding py-12 md:py-16">
          <h1 className="heading-lg mb-4">Adventures</h1>
          <p className="body-lg text-muted-foreground max-w-lg mb-12">
            Climbing, bikepacking, ski touring, and multi-day hiking — every journey designed around depth, connection, and beautiful places.
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setActiveCategory("All")}
              className={`body-sm px-5 py-2.5 border transition-colors ${
                activeCategory === "All"
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/30"
              }`}
            >
              All
            </button>
            {categories.map((cat) => {
              const count = adventures.filter((a) => a.category === cat.value).length;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`body-sm px-5 py-2.5 border transition-colors flex items-center gap-2 ${
                    activeCategory === cat.value
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:border-foreground/30"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                  <span className="opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Difficulty filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {["All", "Easy", "Moderate", "Challenging"].map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`text-xs px-3 py-1.5 border transition-colors ${
                  difficulty === d
                    ? "bg-sky text-primary-foreground border-sky"
                    : "border-border text-muted-foreground hover:border-foreground/30"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a) => (
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
                <p className="body-sm text-muted-foreground uppercase tracking-widest mb-1">
                  {a.location} · {a.difficulty}
                </p>
                <h3 className="heading-sm mb-2 group-hover:text-sky-dark transition-colors">{a.title}</h3>
                <p className="body-sm text-muted-foreground">
                  {a.duration} · Group of {a.groupSize} · From €{a.price}
                  {a.season && <span className="ml-2 text-muted-foreground/60">· {a.season}</span>}
                </p>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="body-md text-muted-foreground text-center py-16">
              No adventures match your filters. Try adjusting your selection.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Adventures;
