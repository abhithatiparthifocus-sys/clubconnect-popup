import { createFileRoute } from '@tanstack/react-router'
import { AmenitiesPage } from '@/components/club-pages'
import { pageHead,photos } from '@/lib/club'
export const Route = createFileRoute('/amenities')({head:()=>pageHead('Sports, Dining & Amenities','Explore Guntur Club swimming, badminton, fitness, dining, GC Pavilion and family recreation.',photos.pool),component:AmenitiesPage})