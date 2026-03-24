import { useParams, Link } from "react-router-dom";
import { adventures } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Mountain, Users, DollarSign } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AdventureDetail = () => {
  const { id } = useParams();
  const adventure = adventures.find((a) => a.id === id);

  if (!adventure) {
    return (
      <>
        <Navbar />
        <main className="pt-32 section-padding text-center min-h-screen">
          <h1 className="heading-lg mb-4">Adventure not found</h1>
          <Button variant="outline" asChild>
            <Link to="/adventures">Back to Adventures</Link>
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img
          src={adventure.image}
          alt={adventure.title}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 h-full flex items-end section-padding pb-12">
          <div>
            <p className="body-sm text-primary-foreground/70 uppercase tracking-widest mb-2">
              {adventure.location}
            </p>
            <h1 className="heading-xl text-primary-foreground">{adventure.title}</h1>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="section-padding py-8 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-8 md:gap-16">
          {[
            { icon: Clock, label: "Duration", value: adventure.duration },
            { icon: Mountain, label: "Difficulty", value: adventure.difficulty },
            { icon: Users, label: "Group Size", value: `Up to ${adventure.groupSize}` },
            { icon: DollarSign, label: "Price", value: `€${adventure.price}` },
          ].map((info) => (
            <div key={info.label} className="flex items-center gap-3">
              <info.icon size={20} className="text-forest" strokeWidth={1.5} />
              <div>
                <p className="body-sm text-muted-foreground">{info.label}</p>
                <p className="body-md font-medium">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <section className="mb-20">
            <p className="body-lg text-foreground leading-relaxed max-w-2xl">
              {adventure.description}
            </p>
          </section>

          {/* Itinerary */}
          <section className="mb-20">
            <h2 className="heading-md mb-8">Itinerary</h2>
            <Accordion type="single" collapsible className="w-full">
              {adventure.itinerary.map((item, i) => (
                <AccordionItem key={i} value={`day-${i}`}>
                  <AccordionTrigger className="text-left">
                    <span className="flex gap-4 items-baseline">
                      <span className="body-sm text-muted-foreground uppercase tracking-widest w-16">
                        {item.day}
                      </span>
                      <span className="body-md font-medium">{item.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="body-md text-muted-foreground pl-20">
                      {item.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Reviews */}
          {adventure.reviews.length > 0 && (
            <section className="mb-20">
              <h2 className="heading-md mb-8">What past travelers say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {adventure.reviews.map((r, i) => (
                  <div key={i}>
                    <p className="font-serif text-lg italic leading-relaxed mb-4">"{r.text}"</p>
                    <p className="body-sm text-muted-foreground uppercase tracking-widest">{r.name}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Booking CTA */}
          <section className="text-center py-12 border-t border-border">
            <h2 className="heading-md mb-4">Join this adventure</h2>
            <p className="body-md text-muted-foreground mb-8">
              Check the calendar for upcoming dates and available spots.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/calendar">View Dates & Book</Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdventureDetail;
