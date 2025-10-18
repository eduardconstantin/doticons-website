import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doticons',
  authors: [
    {
      name: 'Eduard-Constantin Ibinceanu',
      url: 'https://eduardconstantin.github.io',
    },
  ],
  description:
    'A collection of versatile and visually appealing dot icons crafted in SVG format.',
  keywords: [
    'doticons',
    'dot',
    'icons',
    'svg icons',
    'svg',
    'collection',
    'library',
  ],
  generator: 'Next.js',
  publisher: 'Vercel',
  robots: 'index, follow',
  other: {
    'google-site-verification': '3tFw46pr7oE7G89QW1lziwTvZ6FU95x3jMrZjJoCiDg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID!} />
    </html>
  );
}
