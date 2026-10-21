import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Trophy,
  Utensils,
  BedDouble,
  Check,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useContact } from "./club-shell";
import { ContactForm } from "./contact-form";
import { photos, amenities, address } from "@/lib/club";
import { ServicesSection } from "./club-services";
import { CommitteeSection, TestimonialsSection } from "./club-community";

export function HomePage() {
  const contact = useContact();
  return (
    <>
      <section className="home-hero">
        <img
          className="hero-image"
          src={photos.gardensHero}
          alt="Guntur Club's handcrafted metal bull sculpture in the gardens"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">97 YEARS OF PRESTIGE. ONE EXTRAORDINARY LEGACY.</p>
          <h1>Guntur Club</h1>
          <p className="hero-tagline">
            A legacy of prestige.
            <br />
            <em>A life of distinction.</em>
          </p>
          <p className="hero-description">
            Where heritage meets hospitality, and every
            <br className="desktop-break" /> generation finds a place to belong.
          </p>
          <div className="hero-actions">
            <Button asChild variant="hero" size="lg">
              <Link to="/amenities">
                Discover the club
                <ArrowUpRight />
              </Link>
            </Button>
            <Button onClick={contact} variant="heroOutline" size="lg">
              Membership enquiry
              <ArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="hero-bottom">
          <span>HERITAGE · LEISURE · FELLOWSHIP</span>
          <a href="#welcome" aria-label="Scroll to welcome">
            <ArrowDown size={18} />
          </a>
          <span>GUNTUR, ANDHRA PRADESH</span>
        </div>
      </section>
      <ClubStats variant="home" />
      <section className="welcome-section page-width" id="welcome">
        <div className="welcome-heading">
          <p className="eyebrow">THE HEART OF GUNTUR'S SOCIAL COMMUNITY</p>
          <h2>
            More than a club.
            <br />
            <em>A place to belong.</em>
          </h2>
        </div>
        <div className="welcome-copy">
          <p>
            For nearly a century, Guntur Club has brought people together through a shared
            appreciation for tradition, recreation and the finer things in life.
          </p>
          <p>
            From our beginnings as the famed English Club to a vibrant community of over 1,700
            members, our legacy lives on in every connection.
          </p>
          <Link to="/heritage" className="text-link">
            Explore our heritage
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="experiences-section">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXCEPTIONAL, EVERY DAY</p>
              <h2>The art of club living.</h2>
            </div>
            <Link to="/amenities" className="text-link">
              All amenities
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="experience-grid">
            {[
              {
                name: "Sports & leisure",
                copy: "Play with passion. Unwind in style.",
                photo: photos.pool,
                to: "/amenities",
                icon: Trophy,
              },
              {
                name: "Dining & togetherness",
                copy: "Good food. Even better company.",
                photo: photos.dining,
                to: "/amenities",
                icon: Utensils,
              },
              {
                name: "Stay & celebrate",
                copy: "Make every occasion extraordinary.",
                photo: photos.hall,
                to: "/stay-celebrate",
                icon: BedDouble,
              },
            ].map((x) => (
              <Link
                key={x.name}
                to={x.to as "/amenities" | "/stay-celebrate"}
                className="experience-item"
              >
                <div className="experience-photo">
                  <img src={x.photo} alt={x.name} loading="lazy" />
                  <span className="photo-arrow">
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="experience-label">
                  <x.icon size={19} />
                  <h3>{x.name}</h3>
                </div>
                <p>{x.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ServicesSection />
      <section className="pavilion-feature">
        <img src={photos.pavilion} alt="GC Pavilion sports complex" loading="lazy" />
        <div className="pavilion-copy">
          <p className="eyebrow">A NEW CHAPTER IN OUR LEGACY</p>
          <h2>
            Introducing
            <br />
            <em>GC Pavilion.</em>
          </h2>
          <p>
            A contemporary home for world-class sports and recreation. Discover professional
            pickleball, billiards, snooker and precision shooting.
          </p>
          <Button asChild size="lg">
            <Link to="/amenities">
              Explore the facilities
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
      <CommitteeSection variant="featured" />
      <TestimonialsSection />
    </>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="inner-hero">
      <img src={image} alt={title} />
      <div className="hero-shade" />
      <div className="page-width">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

function ClubStats({
  variant = "home",
}: {
  variant?: "home" | "about";
}) {
  const isAbout = variant === "about";

  return (
    <div
      className="legacy-stats"
      aria-label="Guntur Club at a glance"
    >
      {isAbout ? (
        <>
          {/* ABOUT PAGE STATISTICS */}

          <div>
            <strong>1700+</strong>
            <span>Members</span>
          </div>

          <div>
            <strong>16+</strong>
            <span>Affiliations</span>
          </div>

          <div>
            <strong>20+</strong>
            <span>Rooms</span>
          </div>

          <div>
            <strong>11+</strong>
            <span>Facilities</span>
          </div>
        </>
      ) : (
        <>
          {/* HOMEPAGE STATISTICS - ORIGINAL */}

          <div>
            <strong>1929</strong>
            <span>A distinguished beginning</span>
          </div>

          <div>
            <strong>97<span> years</span></strong>
            <span>Of heritage & fellowship</span>
          </div>

          <div>
            <strong>1,700<span>+</span></strong>
            <span>Distinguished members</span>
          </div>

          <div>
            <strong>3<span> acres</span></strong>
            <span>Of exceptional experiences</span>
          </div>
        </>
      )}
    </div>
  );
}


export function HeritagePage() {
  const contact = useContact();
  return (
    <>
      <PageIntro
        eyebrow="ESTABLISHED 1929"
        title="About Guntur Club"
        description="97 years of prestige. One enduring legacy."
        image={photos.club}
      />
      <ClubStats variant="about" />
      <section className="welcome-section page-width" aria-labelledby="about-heading">
        <div className="welcome-heading">
          <p className="eyebrow">ABOUT US</p>
          <h2 id="about-heading">
            More than a club.
            <br />
            <em>A place to belong.</em>
          </h2>
        </div>
        <div className="welcome-copy">
          <p>
            Guntur Club is a community built around fellowship, recreation and warm hospitality. Set
            across a three-acre campus, the club brings together over 1,700 distinguished members.
          </p>
          <p>
            From sports and fitness to dining, family gatherings and celebrations, our spaces bring
            generations together through shared interests and lasting connections.
          </p>
        </div>
      </section>
      <section className="heritage-history" aria-labelledby="history-heading">
        <div className="page-width">
          <p className="eyebrow">MILESTONES IN OUR JOURNEY</p>
          <h2 id="history-heading">
            Time moves on. <em>Our spirit endures.</em>
          </h2>
          <div className="history-milestones">
            <article className="history-milestone">
              <p className="history-year">1929</p>
              <h3>A formal beginning</h3>
              <p>Registered under the Companies Act, establishing the foundations of a lasting institution.</p>
            </article>
            <article className="history-milestone">
              <p className="history-year">1977</p>
              <h3>A community comes together</h3>
              <p>After a devastating cyclone, members’ donations and contributions helped restore the club.</p>
            </article>
            <article className="history-milestone">
              <p className="history-year">1998</p>
              <h3>A new home, the same heart</h3>
              <p>The club moved to its present 2.75-acre property, opening a new chapter in its story.</p>
            </article>
          </div>
          <div className="history-cta">
            <div>
              <p className="eyebrow">YOUR NEXT CHAPTER</p>
              <h3>There’s a place for you here.</h3>
            </div>
            <Button onClick={contact} size="lg">
              Enquire about membership
              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </section>
      <CommitteeSection title="Managing Committee" />
    </>
  );
}
export function AmenitiesPage() {
  const [filter, setFilter] = useState("All");
  const contact = useContact();
  return (
    <>
      <PageIntro
        eyebrow="EVERYTHING YOU NEED, ALL IN ONE PLACE"
        title="An exceptional everyday."
        description="Sports, wellness, dining and spaces for the whole family."
        image={photos.pool}
      />
      <section className="page-width amenities-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CLUB AMENITIES</p>
            <h2>Find your favourite pursuit.</h2>
          </div>
        </div>
        <div className="filter-row">
          {["All", "Sports", "Wellness", "Dining", "Family"].map((x) => (
            <Button
              key={x}
              variant={filter === x ? "default" : "outline"}
              onClick={() => setFilter(x)}
              aria-pressed={filter === x}
            >
              {x}
            </Button>
          ))}
        </div>
        <div className="amenities-grid">
          {amenities
            .filter(
              (x) => filter === "All" || x.category.toLowerCase().includes(filter.toLowerCase()),
            )
            .map((x) => (
              <article className="amenity-item" key={x.name}>
                <img src={x.image} alt={x.name} loading="lazy" />
                <p className="eyebrow">{x.category}</p>
                <h3>{x.name}</h3>
                <p>{x.copy}</p>
                <Button variant="link" onClick={contact}>
                  Enquire about this facility
                  <ArrowUpRight />
                </Button>
              </article>
            ))}
        </div>
        <div className="wifi-note">
          <Sparkles size={20} />
          <p>Complimentary high-speed Wi-Fi throughout the club.</p>
        </div>
      </section>
    </>
  );
}
export function StayPage() {
  const contact = useContact();
  return (
    <>
      <PageIntro
        eyebrow="STAY IN COMFORT. CELEBRATE IN STYLE."
        title="Stay & Celebrate"
        description="Welcoming spaces for quiet escapes and unforgettable occasions."
        image={photos.hall}
      />
      <section className="page-width stay-section">
        {[
          {
            title: "A stay that feels like home.",
            eyebrow: "GUEST ROOMS",
            image: photos.rooms,
            copy: "Our well-appointed guest rooms offer modern amenities, complimentary Wi-Fi and a peaceful atmosphere, designed for comfort and convenience.",
            features: ["Well-appointed accommodations", "Modern amenities", "Complimentary Wi-Fi"],
          },
          {
            title: "For life’s memorable moments.",
            eyebrow: "FUNCTION HALLS & CONFERENCES",
            image: photos.hall,
            copy: "From weddings and receptions to conferences, seminars and family gatherings, our spacious halls provide an elegant setting to meet, connect and celebrate.",
            features: [
              "Air-conditioned venues",
              "Modern presentation facilities",
              "Flexible seating arrangements",
            ],
          },
          {
            title: "Come together. Unwind.",
            eyebrow: "LOUNGE & LANDSCAPED GARDENS",
            image: photos.gardens,
            copy: "Enjoy elegant corridors, scenic landscaped gardens and welcoming social spaces for conversations and community.",
            features: [
              "Scenic landscaped gardens",
              "Elegant social spaces",
              "Grand open-air amphitheatre",
            ],
          },
        ].map((x) => (
          <article className="stay-row" key={x.eyebrow}>
            <img src={x.image} alt={x.eyebrow} loading="lazy" />
            <div>
              <p className="eyebrow">{x.eyebrow}</p>
              <h2>{x.title}</h2>
              <p>{x.copy}</p>
              <ul>
                {x.features.map((f) => (
                  <li key={f}>
                    <Check size={15} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button onClick={contact} size="lg">
                Enquire with the club
                <ArrowUpRight />
              </Button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
const affiliates = {
  "Andhra Pradesh": ["Vijayawada Club, Vijayawada", "IBP Century Club, Visakhapatnam"],
  Telangana: ["The Hyderabad Gymkhana Club, Hyderabad", "Filmnagar Cultural Center, Hyderabad"],
  "Tamil Nadu": [
    "Chennai Corporate Club, Chennai",
    "Andhra Social & Cultural Association, Chennai",
    "The Kerala Club, Coimbatore",
  ],
  Karnataka: [
    "Cosmopolitan Club, Bengaluru",
    "Domlur Club, Bengaluru",
    "Indiranagar Club, Bengaluru",
  ],
  "Across India": [
    "Golden Swan Country Club, Thane, Maharashtra",
    "Nashik Club, Nashik, Maharashtra",
    "Bhubaneshwar Club, Bhubaneswar, Odisha",
    "Jaisal Club, Jaisalmer, Rajasthan",
    "Umed Club, Jodhpur, Rajasthan",
    "Shree Madhav Club, Ujjain, Madhya Pradesh",
  ],
};
export function AffiliationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="CONNECTIONS BEYOND OUR CAMPUS"
        title="A wider world of privileges."
        description="A distinguished network of affiliated clubs across India."
        image={photos.gardens}
      />
      <section className="page-width affiliations-section">
        <p className="eyebrow">A NETWORK OF PRIVILEGED AFFILIATIONS</p>
        <h2>Fellowship without boundaries.</h2>
        <p className="section-description">
          Enjoy privileged access to our affiliated clubs. Contact our team for current access
          arrangements before your visit.
        </p>
        <div className="affiliations-grid">
          {Object.entries(affiliates).map(([state, clubs]) => (
            <article key={state}>
              <h3>{state}</h3>
              <ul>
                {clubs.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="OUR TEAM IS READY TO SUPPORT YOU"
        title="Get in touch."
        description="A question, a visit or a new connection. It starts here."
        image={photos.club}
      />
      <section className="page-width contact-page">
        <div>
          <p className="eyebrow">GUNTUR CLUB</p>
          <h2>A warm welcome awaits.</h2>
          <p>
            Whether you need information, assistance or wish to share feedback, we'd be happy to
            hear from you.
          </p>
          <div className="contact-details">
            <h4>Visit the club</h4>
            <p>{address}</p>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Guntur+Club+Palakaluru+Road"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
              <ArrowUpRight size={16} />
            </a>
            <h4>Call us</h4>
            <a href="tel:08632233703">0863 2233 703</a>
            <a href="tel:08632355241">0863 2355 241</a>
            <h4>Email us</h4>
            <a href="mailto:info@gunturclub.com">info@gunturclub.com</a>
          </div>
        </div>
        <div>
          <h3>Send an enquiry</h3>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
