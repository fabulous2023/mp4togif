import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { gameConfig } from '@/config/game.config';
import { generateStructuredData } from '@/lib/utils';
import { AnalyticsScripts } from '@/components/AnalyticsScripts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Play ${gameConfig.game.name} Online Free | ${gameConfig.game.tagline}`,
  description: gameConfig.site.description,
  keywords: gameConfig.site.keywords.join(', '),
  authors: [{ name: 'Unmatched Ego Team' }],
  creator: 'Unmatched Ego',
  publisher: 'Unmatched Ego',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(gameConfig.site.canonicalUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `Play ${gameConfig.game.name} Online Free | ${gameConfig.game.tagline}`,
    description: gameConfig.site.description,
    url: gameConfig.site.canonicalUrl,
    siteName: gameConfig.site.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${gameConfig.game.name} - ${gameConfig.game.tagline}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Play ${gameConfig.game.name} Online Free | ${gameConfig.game.tagline}`,
    description: gameConfig.site.description,
    images: ['/og-image.jpg'],
    creator: '@unmatchedego',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData(gameConfig);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#007AFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={gameConfig.site.name} />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-apple-gray-50 to-white">
          {children}
        </div>
        <AnalyticsScripts
          gaId={process.env.NEXT_PUBLIC_GA_ID}
          clarityId={process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}
          adsenseId={process.env.NEXT_PUBLIC_ADSENSE_ID}
        />
      </body>
    </html>
  );
}
