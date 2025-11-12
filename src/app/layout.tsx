import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Sanity -> Firestore -> Next.js Catalog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
}
