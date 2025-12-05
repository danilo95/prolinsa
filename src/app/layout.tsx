// app/layout.tsx
import type { ReactNode } from 'react';
import SiteLayout from './SiteLayout'; // o desde components/SiteLayout

export default function RootLayout({ children }: { children: ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
