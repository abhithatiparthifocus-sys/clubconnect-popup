import { createFileRoute } from '@tanstack/react-router'
import { ContactPage } from '@/components/club-pages'
import { pageHead } from '@/lib/club'
export const Route = createFileRoute('/contact')({head:()=>pageHead('Contact the Club','Contact Guntur Club on Palakaluru Road for membership, sports, dining, accommodation and celebration enquiries.'),component:ContactPage})