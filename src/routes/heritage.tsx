import { createFileRoute } from '@tanstack/react-router'
import { HeritagePage } from '@/components/club-pages'
import { pageHead } from '@/lib/club'
export const Route = createFileRoute('/heritage')({head:()=>pageHead('About Us','Meet Guntur Club: explore our three-acre campus, 97-year history since 1929, community of over 1,700 members and managing committee.'),component:HeritagePage})