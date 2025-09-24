import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // Disallow crawling of these specific files
        disallow: [
          '/favicon.ico',
          '/manifest.json',
        ],
      },
    ],
    // Point to your sitemap
    sitemap: 'https://mp4togif.pro/sitemap.xml',
  };
}