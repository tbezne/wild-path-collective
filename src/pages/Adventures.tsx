import { useState } from "react";
import { Link } from "react-router-dom";
import { adventures } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const filters = {
  location: ["All", "Swiss Alps", "Norwegian Fjords", "Pacific Northwest"],
  difficulty: ["All", "Easy", "Moderate", "Challenging"],
};

const Adventures = () => {
  const [location, setLocation] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const filtered = adventures.filter(
    (a) =>
      (location === "All" || a.location === location) &&
      (difficulty === "All" || a.difficulty === difficulty)
  );

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="section-padding py-12 md:py-16">
          <h1 className="heading-lg mb-4">Adventures</h1>
          <p className="body-lg text-muted-foreground max-w-lg mb-12">
            Every journey is designed around depth, connection, and beautiful places.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.location.map((l) => (
              <button
                key={l}
                onClick={() => setLocation(l)}
                className={`body-sm px-4 py-2 border transition-colors ${
                  location === l
                    ? "bg-sky text-primary-foreground border-sky"
                    : "border-border text-muted-foreground hover:border-foreground/30"
                }`}
              >
                {l}
              </button>
            ))}
            <span className="w-px bg-border mx-2" />
            {filters.difficulty.map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`body-sm px-4 py-2 border transition-colors ${
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
                <p className="body-sm text-muted-foreground uppercase tracking-widest mb-1">
                  {a.location} · {a.difficulty}
                </p>
                <h3 className="heading-sm mb-2 group-hover:text-sky-dark transition-colors">{a.title}</h3>
                <p className="body-sm text-muted-foreground">
                  {a.duration} · Group of {a.groupSize} · From €{a.price}
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
