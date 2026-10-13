import club from '@/assets/club.asset.json'
import aerial from '@/assets/aerial.asset.json'
import dining from '@/assets/dining.asset.json'
import badminton from '@/assets/badminton.asset.json'
import pool from '@/assets/pool.asset.json'
import gym from '@/assets/gym.asset.json'
import rooms from '@/assets/rooms.asset.json'
import hall from '@/assets/hall.asset.json'
import play from '@/assets/play.asset.json'
import pavilion from '@/assets/pavilion.asset.json'
import gardens from '@/assets/gardens.asset.json'
import lounge from '@/assets/lounge.asset.json'
import brochure from '@/assets/brochure.asset.json'
import logo from '@/assets/logo.asset.json'
import president from '@/assets/committee-vpr.asset.json'
import secretary from '@/assets/committee-cr.asset.json'
import treasurer from '@/assets/committee-m33.asset.json'
import vicePresident from '@/assets/committee-pkc.asset.json'
import tirumal from '@/assets/committee-std_o.asset.json'
import narendra from '@/assets/committee-mnb.asset.json'
import venkateswara from '@/assets/committee-mvr.asset.json'
import brahma from '@/assets/committee-vbr.asset.json'
import rajendra from '@/assets/committee-drb.asset.json'
import omkar from '@/assets/committee-co1.asset.json'
import rama from '@/assets/committee-srco.asset.json'
export const clubLogo = logo.url
export const photos = { club: club.url, aerial: aerial.url, dining: dining.url, badminton: badminton.url, pool: pool.url, gym: gym.url, rooms: rooms.url, hall: hall.url, play: play.url, pavilion: pavilion.url, gardens: gardens.url, lounge: lounge.url }
export const brochureUrl = brochure.url
export const address = 'Ratnagirinagar, Palakaluru Road, Opp. Vignan College, Guntur – 522 005'
// Names, roles and testimonials as published on gunturclub.in and gb.php.
export const committeeMembers = [
  { name: 'Sri. Vadlamudi Purnachandra Rao', role: 'President', image: president.url },
  { name: 'Sri. Chukkapalli Ramesh', role: 'Secretary', image: secretary.url },
  { name: 'Sri. Bhupen Momaya', role: 'Treasurer', image: treasurer.url },
  { name: 'Dr. Paturi Kiran Chowdary', role: 'Vice-President', image: vicePresident.url },
  { name: 'Sri. Suryadevara Tirumal Dev', role: 'Committee Member', image: tirumal.url },
  { name: 'Sri. Moparthy Narendra Babu', role: 'Committee Member', image: narendra.url },
  { name: 'Sri. Myneni Venkateswara Rao', role: 'Committee Member', image: venkateswara.url },
  { name: 'Sri. Vattijonnala Brahma Reddy', role: 'Committee Member', image: brahma.url },
  { name: 'Sri. Devineni Rajendra Babu', role: 'Committee Member', image: rajendra.url },
  { name: 'Sri. Chalasani Omkar', role: 'Co-Opt Member', image: omkar.url },
  { name: 'Sri. Sakam Rama Koteswara Rao', role: 'Co-Opt Member', image: rama.url },
]
export const memberTestimonials = [
  { name: 'M. Anil Kumar', quote: "I love this club! The facilities are top-notch, the staff is friendly and helpful, and the atmosphere is fantastic. It's a great place to relax, work out, or socialize with friends." },
  { name: 'K. Venkateswara Rao', quote: "I've met some wonderful people here, and it's become my go-to place for recreational activities." },
]
export function pageHead(title: string, description: string, image = photos.club) {
  return { meta: [{title: `${title} | Guntur Club`}, {name:'description',content:description}, {property:'og:title',content:`${title} | Guntur Club`}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}, ...(image.startsWith('https://') ? [{property:'og:image',content:image}, {name:'twitter:image',content:image}] : [])] }
}
export const amenities = [
  {name:'Bar & Restaurant', category:'DINING & SOCIAL', image:photos.dining, copy:'Family meals, friendly gatherings and special occasions, served with exceptional hospitality.'},
  {name:'Swimming Pool', category:'WELLNESS & LEISURE', image:photos.pool, copy:'A beautifully maintained pool for relaxation, fitness and recreation.'},
  {name:'Shuttle Badminton', category:'SPORTS & RECREATION', image:photos.badminton, copy:'Premium courts for all ages and skill levels, from casual games to professional coaching.'},
  {name:'Gym & Fitness Centre', category:'WELLNESS & LEISURE', image:photos.gym, copy:'An ultra-modern, air-conditioned workout space for your everyday fitness.'},
  {name:'GC Pavilion', category:'SPORTS & RECREATION', image:photos.pavilion, copy:'Professional pickleball courts, billiards, international-standard snooker and an air pistol shooting range.'},
  {name:'Kids Play Area', category:'FAMILY & COMMUNITY', image:photos.play, copy:'A dedicated play zone where children can explore, socialise and stay active.'},
]