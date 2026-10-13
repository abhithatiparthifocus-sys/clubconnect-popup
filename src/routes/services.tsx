import { createFileRoute } from '@tanstack/react-router'
import { ServicesPage } from '@/components/club-services'
import { pageHead, photos } from '@/lib/club'

export const Route = createFileRoute('/services')({
  head: () => pageHead('Services', 'Discover Guntur Club dining, guest accommodation, event spaces, sports, wellness and family services.', photos.hall),
  component: ServicesPage,
})