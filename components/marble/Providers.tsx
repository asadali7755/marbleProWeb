'use client';
import { ReactNode } from 'react';
import { RequestCallProvider } from './RequestCallModal';
import ContactClickTracker from './ContactClickTracker';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <RequestCallProvider>
      <ContactClickTracker />
      {children}
    </RequestCallProvider>
  );
}
