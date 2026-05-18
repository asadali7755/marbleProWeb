'use client';
import { ReactNode } from 'react';
import { RequestCallProvider } from './RequestCallModal';

export default function Providers({ children }: { children: ReactNode }) {
  return <RequestCallProvider>{children}</RequestCallProvider>;
}
