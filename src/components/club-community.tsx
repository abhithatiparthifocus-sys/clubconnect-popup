import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { committeeMembers, memberTestimonials } from '@/lib/club'

export function CommitteeSection() {
  return <section className="committee-section" aria-labelledby="committee-heading"><div className="page-width">
    <div className="section-heading"><div><p className="eyebrow">GUIDING OUR LEGACY</p><h2 id="committee-heading">Committee Members</h2><p className="section-description">The people entrusted with our club’s traditions and its next chapter.</p></div></div>
    <div className="committee-grid">{committeeMembers.map(member=><article className="committee-member" key={member.name}><img src={member.image} alt={member.name} loading="lazy"/><h3>{member.name}</h3><p>{member.role}</p></article>)}</div>
  </div></section>
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const testimonial = memberTestimonials[index]
  if (!testimonial) return null
  return <section className="testimonials-section" aria-labelledby="testimonials-heading"><div className="page-width testimonial-layout">
    <div><p className="eyebrow">IN THEIR OWN WORDS</p><h2 id="testimonials-heading">Testimonials</h2><div className="testimonial-controls"><Button variant="outline" size="icon" aria-label="Previous testimonial" title="Previous testimonial" onClick={()=>setIndex((index+memberTestimonials.length-1)%memberTestimonials.length)}><ArrowLeft/></Button><span className="testimonial-counter">{index+1} / {memberTestimonials.length}</span><Button variant="outline" size="icon" aria-label="Next testimonial" title="Next testimonial" onClick={()=>setIndex((index+1)%memberTestimonials.length)}><ArrowRight/></Button></div></div>
    <div aria-live="polite" aria-atomic="true"><Quote className="testimonial-mark" size={32}/><blockquote className="testimonial-quote">“{testimonial.quote}”</blockquote><p className="testimonial-author">{testimonial.name}</p></div>
  </div></section>
}