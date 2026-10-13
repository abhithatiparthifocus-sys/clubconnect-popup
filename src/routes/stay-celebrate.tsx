import { createFileRoute } from '@tanstack/react-router'
import { StayPage } from '@/components/club-pages'
import { pageHead,photos } from '@/lib/club'
export const Route = createFileRoute('/stay-celebrate')({head:()=>pageHead('Stay & Celebrate','Discover welcoming guest rooms, elegant function halls, conferences and celebration spaces at Guntur Club.',photos.hall),component:StayPage})