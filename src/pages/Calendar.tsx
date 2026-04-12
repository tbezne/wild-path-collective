import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { upcomingTrips } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Calendar = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      <section className="section-padding py-12 md:py-16">
        <h1 className="heading-lg mb-4">Calendar</h1>
        <p className="body-lg text-muted-foreground max-w-lg mb-16">
          Upcoming departures. Small groups, limited spots.
        </p>

        <div className="max-w-4xl divide-y divide-border">
          {upcomingTrips.map((trip, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-3 md:gap-0"
            >
              <span className="body-sm text-muted-foreground w-36">{trip.date}</span>
              <Link
                to={`/adventures/${trip.id}`}
                className="body-md font-medium flex-1 hover:text-sky-dark transition-colors"
              >
                {trip.name}
              </Link>
              <span className="body-sm text-muted-foreground w-40">{trip.location}</span>
              <span className="body-sm text-muted-foreground w-28">
                {trip.spotsLeft} spot{trip.spotsLeft !== 1 ? "s" : ""} left
              </span>
              <Button variant="outline" size="sm" className="w-fit">
                Reserve
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Calendar;
