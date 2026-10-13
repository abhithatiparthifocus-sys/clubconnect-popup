import { createFileRoute } from '@tanstack/react-router'
import { HeritagePage } from '@/components/club-pages'
import { pageHead } from '@/lib/club'
export const Route = createFileRoute('/heritage')({head:()=>pageHead('Our Heritage','Discover the history of Guntur Club, founded in 1929 as the English Club, and its 97-year legacy of prestige and fellowship.'),component:HeritagePage})