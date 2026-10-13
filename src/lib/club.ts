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
export const photos = { club: club.url, aerial: aerial.url, dining: dining.url, badminton: badminton.url, pool: pool.url, gym: gym.url, rooms: rooms.url, hall: hall.url, play: play.url, pavilion: pavilion.url, gardens: gardens.url, lounge: lounge.url }
export const brochureUrl = brochure.url
export const address = 'Ratnagirinagar, Palakaluru Road, Opp. Vignan College, Guntur – 522 005'
export function pageHead(title: string, description: string, image = photos.club) {
  return { meta: [{title: `${title} | Guntur Club`}, {name:'description',content:description}, {property:'og:title',content:`${title} | Guntur Club`}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}, {property:'og:image',content:image}, {name:'twitter:image',content:image}] }
}
export const amenities = [
  {name:'Bar & Restaurant', category:'DINING & SOCIAL', image:photos.dining, copy:'Family meals, friendly gatherings and special occasions, served with exceptional hospitality.'},
  {name:'Swimming Pool', category:'WELLNESS & LEISURE', image:photos.pool, copy:'A beautifully maintained pool for relaxation, fitness and recreation.'},
  {name:'Shuttle Badminton', category:'SPORTS & RECREATION', image:photos.badminton, copy:'Premium courts for all ages and skill levels, from casual games to professional coaching.'},
  {name:'Gym & Fitness Centre', category:'WELLNESS & LEISURE', image:photos.gym, copy:'An ultra-modern, air-conditioned workout space for your everyday fitness.'},
  {name:'GC Pavilion', category:'SPORTS & RECREATION', image:photos.pavilion, copy:'Professional pickleball courts, billiards, international-standard snooker and an air pistol shooting range.'},
  {name:'Kids Play Area', category:'FAMILY & COMMUNITY', image:photos.play, copy:'A dedicated play zone where children can explore, socialise and stay active.'},
]