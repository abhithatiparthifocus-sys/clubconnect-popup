import { Link } from '@tanstack/react-router'
import { ArrowUpRight, BedDouble, CalendarDays, Utensils, Trophy, HeartPulse, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { photos } from '@/lib/club'
import { useContact } from './club-shell'

export const clubServices = [
  { name: 'Dining & Hospitality', icon: Utensils, image: photos.dining, description: 'Gather for family meals, relaxed evenings and special occasions at the club’s bar and restaurant.', features: ['Restaurant & bar', 'Family dining', 'Social gatherings'] },
  { name: 'Guest Accommodation', icon: BedDouble, image: photos.rooms, description: 'Enjoy well-appointed guest rooms with modern amenities and a welcoming atmosphere on the club campus.', features: ['Comfortable guest rooms', 'Modern amenities', 'Complimentary Wi-Fi'] },
  { name: 'Events & Celebrations', icon: CalendarDays, image: photos.hall, description: 'Bring people together for weddings, receptions, conferences and family celebrations in elegant function spaces.', features: ['Function halls', 'Conferences & meetings', 'Family celebrations'] },
  { name: 'Sports & Recreation', icon: Trophy, image: photos.badminton, description: 'Find your favourite pursuit, from shuttle badminton and pickleball to billiards, snooker and precision shooting.', features: ['Shuttle badminton', 'GC Pavilion sports', 'Billiards & snooker'] },
  { name: 'Fitness & Wellness', icon: HeartPulse, image: photos.pool, description: 'Make time for yourself with the club’s swimming pool and air-conditioned gym and fitness centre.', features: ['Swimming pool', 'Gym & fitness centre', 'Everyday recreation'] },
  { name: 'Family & Fellowship', icon: Users, image: photos.gardens, description: 'Spend time together in landscaped gardens, social spaces and the dedicated children’s play area.', features: ['Landscaped gardens', 'Children’s play area', 'Community spaces'] },
]

export function ServicesSection() {
  return <section className="home-services" aria-labelledby="services-heading"><div className="page-width">
    <div className="section-heading"><div><p className="eyebrow">THOUGHTFUL HOSPITALITY</p><h2 id="services-heading">Services</h2></div><Button asChild variant="outline"><Link to="/services">Explore all services<ArrowUpRight/></Link></Button></div>
    <div className="service-preview-grid">{clubServices.slice(0,3).map(service=><Link to="/services" key={service.name} className="service-preview"><service.icon size={26}/><h3>{service.name}</h3><p>{service.description}</p><span className="text-link">Discover more<ArrowUpRight size={16}/></span></Link>)}</div>
  </div></section>
}

export function ServicesPage() {
  const contact = useContact()
  return <><section className="inner-hero"><img src={photos.hall} alt="Guntur Club function hall"/><div className="hero-shade"/><div className="page-width"><p className="eyebrow">HOSPITALITY · RECREATION · FELLOWSHIP</p><h1>Services</h1><p>From everyday pleasures to life’s special occasions.</p></div></section>
    <section className="services-page page-width"><div className="section-heading"><div><p className="eyebrow">AT YOUR SERVICE</p><h2>Every visit, thoughtfully considered.</h2><p className="section-description">Explore the experiences and hospitality that bring our club community together.</p></div></div>
      <div className="service-detail-grid">{clubServices.map(service=><article className="service-detail" key={service.name}><img src={service.image} alt={service.name} loading="lazy"/><div className="service-detail-body"><service.icon size={24}/><h3>{service.name}</h3><p>{service.description}</p><ul>{service.features.map(feature=><li key={feature}>{feature}</li>)}</ul><Button variant="link" onClick={contact}>Enquire about this service<ArrowUpRight/></Button></div></article>)}</div>
    </section></>
}