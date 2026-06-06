import type { Metadata } from 'next';
import './globals.css';
import NeuralBackground from './components/NeuralBackground';
import HudOverlay from './components/HudOverlay';

export const metadata: Metadata = {
  title: 'NovaEdge Solutions — Portfolio',
  description: 'Building Intelligent Software & AI Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <NeuralBackground />
        <HudOverlay />
        {children}
      </body>
    </html>
  );
}
