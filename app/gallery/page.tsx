import type { Metadata } from 'next';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import GalleryClient from '@/components/sections/gallery/GalleryClient';

export const metadata: Metadata = {
  title: 'Before & After Gallery — Marble Polishing Dubai Results | MarblePro UAE',
  description: 'See real before & after results of marble polishing Dubai, terrazzo polishing, granite polishing and floor restoration services across the UAE. 30 projects, 10 services.',
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
