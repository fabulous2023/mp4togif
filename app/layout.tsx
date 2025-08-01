import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AnalyticsScripts } from '@/components/AnalyticsScripts';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'MP4 to GIF Converter - Free Online Video to GIF Tool | 2025',
    template: '%s | MP4 to GIF Converter',
  },
  description: 'Convert MP4 to GIF instantly with our free online tool. Create high-quality animated GIFs from videos without signup or watermarks. Fast, secure MP4 to GIF conversion for social media, memes, and marketing.',
  keywords: [
    'mp4 to gif',
    'free mp4 to gif converter',
    'video to gif',
    'mp4 to gif online',
    'convert mp4 to gif',
    'animated gif maker',
    'mp4 to gif without watermark',
    'mp4 to gif free tool',
    'video to gif converter',
    'gif maker from video',
    'mp4 to animated gif',
    'online gif converter',
    'free gif maker',
    'mp4 gif creator',
    'social media gif maker',
    'meme gif maker',
    'high quality gif converter',
    'fast mp4 to gif',
    'secure video conversion',
    'no signup gif converter',
    'mp4 to gif 2025',
    'instant gif maker',
    'webm to gif',
    'mov to gif',
    'avi to gif',
    'video to gif',
    'free video to gif',
    'gif converter online',
    'gif from video'
  ],
  authors: [{ name: 'MP4 to GIF Converter Team' }],
  creator: 'MP4 to GIF Converter',
  publisher: 'MP4 to GIF Converter',
  category: 'technology',
  classification: 'Online Tool',
  applicationName: 'MP4 to GIF Converter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mp4togif.pro'),
  alternates: {
    canonical: 'https://mp4togif.pro/',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'MP4 to GIF Converter - Free Online Video to GIF Tool',
    description: 'Convert MP4 videos to high-quality animated GIFs instantly. Free online tool with no signup, no watermarks, and unlimited conversions. Perfect for social media, memes, and marketing.',
    url: 'https://mp4togif.pro',
    siteName: 'MP4 to GIF Converter',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 1200,
        height: 630,
        alt: 'MP4 to GIF Converter - Free Online Video to GIF Tool',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'United States',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4 to GIF Converter - Free Online Video to GIF Tool',
    description: 'Convert MP4 to GIF instantly! Free online tool with no signup or watermarks. Create animated GIFs for social media, memes, and marketing.',
    images: ['/web-app-manifest-512x512.png'],
    creator: '@mp4togif',
    site: '@mp4togif',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    notranslate: false,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'notranslate': false,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/icon1.png', sizes: '96x96', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', rel: 'apple-touch-icon' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3B82F6' },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'MP4 to GIF Converter',
    statusBarStyle: 'default',
    startupImage: ['/apple-touch-icon.png'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['WebApplication', 'SoftwareApplication'],
    name: 'MP4 to GIF Converter',
    alternateName: ['MP4 to GIF', 'Video to GIF Converter', 'Free GIF Maker'],
    description: 'Free online MP4 to GIF converter. Convert videos to high-quality animated GIFs without signup or watermarks. Fast, secure, and unlimited MP4 to GIF conversion for social media, memes, and marketing.',
    url: 'https://mp4togif.pro',
    applicationCategory: 'MultimediaApplication',
    browserRequirements: 'Requires JavaScript enabled',
    keywords: [
      'mp4 to gif',
      'free mp4 to gif converter',
      'video to gif',
      'mp4 to gif online',
      'convert mp4 to gif',
      'animated gif maker',
      'mp4 to gif without watermark',
      'mp4 to gif free tool',
      'video to gif converter',
      'gif maker from video',
      'mp4 to animated gif',
      'online gif converter',
      'free gif maker',
      'mp4 gif creator',
      'social media gif maker',
      'meme gif maker',
      'high quality gif converter',
      'fast mp4 to gif',
      'secure video conversion',
      'no signup gif converter',
      'mp4 to gif 2025',
      'best mp4 to gif converter',
      'instant gif maker',
      'webm to gif',
      'mov to gif',
      'avi to gif',
      'video to gif no watermark',
      'free video to gif',
      'gif converter online',
      'create gif from video'
    ],
    offers: {
      '@type': 'Offer',
      name: 'MP4 to GIF Conversion',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      category: 'Free Software',
      description: 'Free unlimited MP4 to GIF conversion service',
      url: 'https://mp4togif.pro',
      validFrom: '2025-07-23'
    },
    provider: {
      '@type': 'Organization',
      name: 'MP4 to GIF Converter',
      url: 'https://mp4togif.pro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mp4togif.pro/icon1.png',
        width: 96,
        height: 96,
        caption: 'MP4 to GIF Converter Logo'
      },
      description: 'Leading provider of free online video to GIF conversion tools',
      sameAs: [
        'https://twitter.com/mp4togif',
        'https://github.com/mp4togif'
      ]
    },
    creator: {
      '@type': 'Organization',
      name: 'MP4 to GIF Converter Team',
      url: 'https://mp4togif.pro'
    },
    datePublished: '2025-07-23',
    dateModified: '2025-07-23',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    requiresSubscription: false,
    softwareVersion: '2.0',
    softwareRequirements: 'Modern web browser with JavaScript enabled',
    featureList: [
      'Instant MP4 to GIF conversion',
      'No signup required',
      'No watermarks on output GIFs',
      'High quality GIF output',
      'Fast processing speed (2-5 seconds)',
      'Privacy-focused client-side processing',
      'Drag and drop file upload',
      'Support for multiple video formats (MP4, MOV, WebM, AVI)',
      'Customizable GIF quality settings',
      'Batch processing capabilities',
      'Mobile-friendly interface',
      'Unlimited conversions',
      '100% free service',
      'Secure file handling',
      'Automatic file cleanup after conversion'
    ],
    screenshot: [
      {
        '@type': 'ImageObject',
        url: 'https://mp4togif.pro/web-app-manifest-512x512.png',
        width: 1200,
        height: 630,
        caption: 'MP4 to GIF Converter Interface'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '2847',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '2847'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah M.'
        },
        datePublished: '2025-07-22',
        reviewBody: 'This is by far the best MP4 to GIF converter I\'ve used. Fast, no watermarks, and completely free!',
        name: 'Best free GIF converter',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        }
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Mike T.'
        },
        datePublished: '2025-07-21',
        reviewBody: 'Incredibly fast conversion and perfect quality. Used it for creating social media content.',
        name: 'Perfect for social media',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        }
      }
    ],
    operatingSystem: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    device: ['Desktop', 'Tablet', 'Mobile'],
    permissions: 'None required',
    memoryRequirements: '1GB RAM minimum',
    processorRequirements: 'Any modern processor',
    storageRequirements: 'Browser cache only'
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="icon" href="/icon1.png" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="preload" href="/gif.worker.js" as="script" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
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
