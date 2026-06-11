import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import LocationsClient from '@/components/sections/locations/LocationsClient';

export const metadata: Metadata = {
  title: 'Marble Floor Polishing Services Dubai, Abu Dhabi & All UAE — Multi-Type Floor Polishing Company',
  description: 'MarblePro — multi-type floor polishing company UAE covering all 7 emirates. Affordable marble floor polishing services, commercial granite polishing services Dubai, terrazzo polishing and restoration contractors UAE. Same-week service in Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah & Umm Al Quwain.',
  keywords: 'multi type floor polishing company UAE, affordable marble floor polishing services UAE, commercial granite polishing services Dubai, terrazzo polishing and restoration contractors UAE, marble polishing dubai, marble polishing abu dhabi, marble polishing sharjah, marble polishing ajman, floor restoration services UAE, best marble polishing company in Dubai',
  alternates: {
    canonical: 'https://www.marblepro.ae/locations',
  },
  openGraph: {
    title: 'Marble Floor Polishing Services Dubai, Abu Dhabi & All UAE — MarblePro',
    description: 'MarblePro — multi-type floor polishing company UAE covering all 7 emirates. Affordable marble floor polishing services, commercial granite polishing services Dubai, terrazzo polishing and restoration contractors UAE.',
    url: 'https://www.marblepro.ae/locations',
    images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: 'MarblePro — Marble Polishing Across All UAE Emirates' }],
  },
};

export default function LocationsPage() {
  return (
    <>
      <Nav active="locations" />
      <LocationsClient />
      <Footer />
      <Fab />
    </>
  );
}
