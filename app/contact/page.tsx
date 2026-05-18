import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import ContactClient from '@/components/sections/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact MarblePro — Free Quote for Marble Polishing Dubai & UAE',
  description: 'Get a free on-site quote for marble polishing, terrazzo polishing, granite polishing and floor restoration services. Call, WhatsApp or email MarblePro — available 7 days a week across all UAE emirates.',
};

export default function ContactPage() {
  return (
    <>
      <Nav active="contact" />
      <ContactClient />
      <Footer />
      <Fab />
    </>
  );
}
