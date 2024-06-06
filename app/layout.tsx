import './globals.css';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Loading from './loading';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doticons',
  description:
    'A collection of versatile and visually appealing dot icons crafted in SVG format.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
