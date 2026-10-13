import { createFileRoute } from '@tanstack/react-router'
import { AffiliationsPage } from '@/components/club-pages'
import { pageHead,photos } from '@/lib/club'
export const Route = createFileRoute('/affiliations')({head:()=>pageHead('Affiliated Clubs','Explore Guntur Club’s distinguished network of affiliated clubs across Andhra Pradesh, Telangana and India.',photos.gardens),component:AffiliationsPage})