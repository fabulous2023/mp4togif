import { NextResponse } from 'next/server';
import { gameConfig } from '@/config/game.config';

export async function GET() {
  const baseUrl = gameConfig.site.canonicalUrl;

  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and API routes
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow important pages
Allow: /
Allow: /privacy
Allow: /cookies
Allow: /terms

# Block common bot traps
Disallow: /wp-admin/
Disallow: /wp-content/
Disallow: /cgi-bin/
Disallow: /*.php$
Disallow: /*.asp$
Disallow: /*.aspx$

# SEO optimizations
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: Applebot
Allow: /`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
