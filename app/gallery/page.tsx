import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import GalleryClient from '@/components/sections/gallery/GalleryClient';

export const metadata: Metadata = {
  title: 'Yellow Stain Removing & Deep Scratch Repair Gallery — Marble Polishing Dubai | MarblePro UAE',
  description: 'Real before & after results: professional yellow stain removing for natural stone UAE, deep scratch removal and marble crack filling Dubai. Italian marble polishing and crystallization, Travertine, Onyx, Calacatta & Emperador. 45 UAE projects — drag to compare.',
  keywords: 'how to remove yellow stains from marble floor Dubai, professional yellow stain removing for natural stone UAE, deep scratch removal and marble crack filling Dubai, marble polishing before after Dubai, Italian marble polishing and crystallization Dubai, marble floor restoration gallery UAE',
  alternates: {
    canonical: 'https://www.marblepro.ae/gallery',
  },
  openGraph: {
    title: 'Before & After Gallery — Marble Polishing, Stain Removing & Scratch Repair Dubai | MarblePro',
    description: 'Real before & after results: professional yellow stain removing for natural stone UAE, deep scratch removal and marble crack filling Dubai. Italian marble polishing and crystallization — 45 UAE projects.',
    url: 'https://www.marblepro.ae/gallery',
    images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: 'MarblePro Before & After Gallery — Marble Polishing Dubai' }],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Nav active="gallery" />
      <GalleryClient />
      <Footer />
      <Fab />
    </>
  );
}
