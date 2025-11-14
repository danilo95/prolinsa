
import './globals.css';
import type { Metadata } from 'next';
import { useRouter } from 'next/router';
import Navbar from './componets/Navbar';   // 👈 asegúrate que la ruta sea correcta
import Footer from './componets/Footer';   // 👈 igual aquí

// export const metadata: Metadata = {
//   title: 'Catalog',
//   description: 'Sanity -> Firestore -> Next.js Catalog',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />        {/* Header reutilizable */}
        <main className="pt-24">{children}</main> {/* Espaciado para que no tape el header fijo */}
        <Footer />        {/* Footer reutilizable */}
      </body>
    </html>
  );
}
