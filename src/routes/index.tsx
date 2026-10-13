import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from '@/components/club-pages';
import { pageHead } from '@/lib/club';
export const Route = createFileRoute("/")({
  head: () => pageHead('A legacy of prestige since 1929', 'Experience Guntur Club: 97 years of heritage, distinguished fellowship, exceptional sports, dining and hospitality.'),
  component: HomePage,
});
