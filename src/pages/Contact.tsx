import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Instagram } from "lucide-react";

const Contact = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left – info */}
          <div>
            <h1 className="heading-lg mb-6">Get in touch</h1>
            <p className="body-lg text-muted-foreground mb-12">
              Whether you have a question about a trip, want to plan a custom experience, or just want to say hi — we'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <Mail size={20} className="text-sky-dark mt-1" strokeWidth={1.5} />
                <div>
                  <p className="body-md font-medium">Email</p>
                  <a href="mailto:hello@foundoutdoors.com" className="body-md text-muted-foreground hover:text-foreground transition-colors">
                    hello@foundoutdoors.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Instagram size={20} className="text-sky-dark mt-1" strokeWidth={1.5} />
                <div>
                  <p className="body-md font-medium">Instagram</p>
                  <a href="https://instagram.com/foundoutdoors" target="_blank" rel="noopener noreferrer" className="body-md text-muted-foreground hover:text-foreground transition-colors">
                    @FoundOutdoors
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin size={20} className="text-sky-dark mt-1" strokeWidth={1.5} />
                <div>
                  <p className="body-md font-medium">Based in</p>
                  <p className="body-md text-muted-foreground">Slovenia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for reaching out! We'll get back to you soon.");
              }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="body-sm text-muted-foreground uppercase tracking-widest mb-2 block">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full border border-border bg-background px-4 py-3 body-md focus:outline-none focus:ring-2 focus:ring-sky"
                />
              </div>
              <div>
                <label htmlFor="email" className="body-sm text-muted-foreground uppercase tracking-widest mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full border border-border bg-background px-4 py-3 body-md focus:outline-none focus:ring-2 focus:ring-sky"
                />
              </div>
              <div>
                <label htmlFor="subject" className="body-sm text-muted-foreground uppercase tracking-widest mb-2 block">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full border border-border bg-background px-4 py-3 body-md focus:outline-none focus:ring-2 focus:ring-sky"
                >
                  <option>General enquiry</option>
                  <option>Bikepacking trip</option>
                  <option>Custom experience</option>
                  <option>Adventure booking</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="body-sm text-muted-foreground uppercase tracking-widest mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full border border-border bg-background px-4 py-3 body-md focus:outline-none focus:ring-2 focus:ring-sky resize-none"
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
