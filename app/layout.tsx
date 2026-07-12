import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';
import NeuralBackground from './components/NeuralBackground';
import HudOverlay from './components/HudOverlay';
import ScrollReveal from './components/ScrollReveal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'NovaEdge Solutions — Software & AI Studio',
    template: '%s — NovaEdge Solutions',
  },
  description:
    'Senior-led software studio building AI systems, web and mobile platforms, and hardware-integrated products. 5.0★ verified rating, replies within 24 hours.',
  keywords: [
    'software studio',
    'AI development',
    'web development',
    'mobile app development',
    'Next.js agency',
    'hardware integration',
    'NovaEdge Solutions',
  ],
  openGraph: {
    title: 'NovaEdge Solutions — Software & AI Studio',
    description:
      'Senior-led software studio building AI systems, web and mobile platforms, and hardware-integrated products for clients worldwide.',
    type: 'website',
    siteName: 'NovaEdge Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaEdge Solutions — Software & AI Studio',
    description:
      'Senior-led software studio building AI systems, web and mobile platforms, and hardware-integrated products for clients worldwide.',
  },
};

export const viewport: Viewport = {
  themeColor: '#06060b',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <NeuralBackground />
        <HudOverlay />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
