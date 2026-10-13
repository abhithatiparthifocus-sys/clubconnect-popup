import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { committeeMembers, memberTestimonials } from "@/lib/club";
import { Link } from "@tanstack/react-router";

// export function CommitteeSection({ title = 'Committee Members' }: { title?: string }) {
//   return <section className="committee-section" aria-labelledby="committee-heading"><div className="page-width">
//     <div className="section-heading"><div><p className="eyebrow">GUIDING OUR LEGACY</p><h2 id="committee-heading">{title}</h2><p className="section-description">The people entrusted with our club’s traditions and its next chapter.</p></div></div>
//     <div className="committee-grid">{committeeMembers.map(member=><article className="committee-member" key={member.name}><img src={member.image} alt={member.name} loading="lazy"/><h3>{member.name}</h3><p>{member.role}</p></article>)}</div>
//   </div></section>
// }

export function CommitteeSection({
  title = "Committee Members",
  variant = "default",
}: {
  title?: string;
  variant?: "default" | "featured";
}) {
  const isFeatured = variant === "featured";

  const members = isFeatured ? committeeMembers.slice(0, 3) : committeeMembers;

  return (
    <section
      id="committee"
      className={`committee-section ${isFeatured ? "committee-featured" : "committee-default"}`}
      aria-labelledby="committee-heading"
    >
      <div className="page-width">
        {isFeatured ? (
          <div className="committee-header">
            <p className="eyebrow">LEADERSHIP</p>
            <h2 id="committee-heading">
              Meet the <em>committee.</em>
            </h2>
          </div>
        ) : (
          <div className="section-heading">
            <div>
              <p className="eyebrow">GUIDING OUR LEGACY</p>
              <h2 id="committee-heading">{title}</h2>
              <p className="section-description">
                The people entrusted with our club's traditions and its next chapter.
              </p>
            </div>
          </div>
        )}

        <div className="committee-grid">
          {members.map((member) => (
            <article className="committee-member" key={member.name}>
              <div className="committee-image">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>

              <div className="committee-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>

        {isFeatured && (
          <div className="committee-footer">
            <a href="/heritage#committee" className="committee-view-all">
              View All Committee Members
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const total = memberTestimonials.length;

  if (total === 0) return null;

  // Show 3 testimonials at a time
  
const visibleTestimonials = Array.from(
  { length: Math.min(3, total) },
  (_, i) => memberTestimonials[(index + i) % total]
).filter(
  (testimonial): testimonial is (typeof memberTestimonials)[number] =>
    testimonial !== undefined
);


  const next = () => {
    setIndex((current) => (current + 1) % total);
  };

  const previous = () => {
    setIndex((current) => (current - 1 + total) % total);
  };

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="page-width">
        {/* Section Heading */}
        <div className="testimonials-header">
          <div>
            <p className="eyebrow">MEMBER VOICES</p>

            <h2 id="testimonials-heading">
              Our <em>members.</em>
            </h2>
          </div>

          {/* Contact Page Navigation */}
          <Link to="/contact" className="testimonials-cta">
            BECOME PART OF IT
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* Testimonial Cards */}
        <div className="testimonials-grid">
          {visibleTestimonials.map((testimonial, i) => (
            <article className="testimonial-card" key={`${testimonial.name}-${i}`}>
              <div className="testimonial-member">
                <div className="testimonial-avatar">
                  <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                </div>

                <div className="testimonial-member-info">
                  <h3>{testimonial.name}</h3>
                  <span className="testimonial-member-label">CLUB MEMBER</span>
                </div>
              </div>

              <blockquote className="testimonial-card-quote">“{testimonial.quote}”</blockquote>
            </article>
          ))}
        </div>

        {/* Navigation */}
        {total > 3 && (
          <div className="testimonials-bottom">
            <div className="testimonial-pagination">
              {String(index + 1).padStart(2, "0")}
              <span> / </span>
              {String(total).padStart(2, "0")}
            </div>

            <div className="testimonial-nav">
              <button type="button" onClick={previous} aria-label="Previous testimonials">
                <ArrowLeft size={19} />
              </button>

              <button type="button" onClick={next} aria-label="Next testimonials">
                <ArrowRight size={19} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
