import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import LocationsClient from '@/components/sections/locations/LocationsClient';

export const metadata: Metadata = {
  title: 'Marble Polishing Services Across All 7 Emirates — MarblePro UAE',
  description: 'MarblePro provides marble polishing, terrazzo polishing, granite polishing and floor restoration services across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah.',
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
