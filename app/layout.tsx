import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Noto_Sans, DM_Sans, Corinthia, Advent_Pro, Birthstone_Bounce } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const corinthia = Corinthia({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-corinthia',
  display: 'swap',
});

const adventPro = Advent_Pro({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-advent-pro',
  display: 'swap',
});

const birthstoneBounce = Birthstone_Bounce({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-birthstone-bounce',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AgriSense AI - Smart Farm Management',
  description: 'Predictive & Prescriptive Agri-Management Platform using IoT, Big Data, and AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${notoSans.variable} ${dmSans.variable} ${corinthia.variable} ${adventPro.variable} ${birthstoneBounce.variable}`} suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
