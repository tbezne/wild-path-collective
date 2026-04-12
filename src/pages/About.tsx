import aboutTeamImage from "@/assets/about-team.jpg";
import { teamMembers } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <>
    <Navbar />
    <main className="pt-20 md:pt-24">
      {/* Philosophy */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="heading-xl mb-8">We believe the best adventures happen together.</h1>
          <p className="body-lg text-muted-foreground leading-relaxed">
            Found Outdoors was born from a simple idea: that nature is best experienced as a community. We design every trip around connection — to the land, to the group, and to the parts of yourself that only emerge when you move through the world with others.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding pb-16 md:pb-24 bg-sand-light">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center py-16 md:py-24">
          <img
            src={aboutTeamImage}
            alt="Found Outdoors guide in the mountains"
            className="w-full aspect-square object-cover"
            loading="lazy"
            width={800}
            height={800}
          />
          <div>
            <h2 className="heading-md mb-6">Our story</h2>
            <p className="body-md text-muted-foreground mb-4">
              Found Outdoors started when a group of friends realised the best moments outdoors weren't about conquering peaks — they were about the people beside you on the trail.
            </p>
            <p className="body-md text-muted-foreground">
              Today we organise adventures across Slovenia and beyond, keeping groups small and experiences genuine. No luxury lodges. No tourist trails. Just beautiful, wild places and good company.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding section-spacing">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-16">The team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((m) => (
              <div key={m.name} className="text-center">
                <div className="w-32 h-32 rounded-full bg-sky-light mx-auto mb-6 flex items-center justify-center">
                  <span className="font-sans font-bold text-3xl text-sky-dark">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="heading-sm mb-1">{m.name}</h3>
                <p className="body-sm text-muted-foreground uppercase tracking-widest mb-3">{m.role}</p>
                <p className="body-sm text-muted-foreground">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-spacing bg-sky text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-12">What we stand for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Community", text: "Moving together, discovering together." },
              { title: "Connection", text: "To the land. To each other. To yourself." },
              { title: "Respect", text: "We leave every place better than we found it." },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="body-sm opacity-70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
