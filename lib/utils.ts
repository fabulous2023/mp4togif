import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function generateStructuredData(config: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: config.game.name,
    alternateName: 'Unmatched Ego Soccer Game',
    description: config.site.description,
    url: config.site.canonicalUrl,
    genre: ['Sports', 'Soccer', 'Football', 'Action', 'Multiplayer'],
    gamePlatform: 'Web Browser',
    operatingSystem: 'Any',
    applicationCategory: 'Game',
    keywords: config.site.keywords.join(', '),
    playMode: ['MultiPlayer', 'SinglePlayer'],
    numberOfPlayers: '1-6',
    gameItem: {
      '@type': 'Thing',
      name: '3v3 Soccer Match',
      description: 'Fast-paced 3v3 soccer matches with skill moves and customization'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      category: 'Free to Play'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '4800',
      bestRating: '5',
      worstRating: '1',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Unmatched Ego',
      url: config.site.canonicalUrl,
    },
    creator: {
      '@type': 'Organization',
      name: 'Unmatched Ego Team'
    },
    datePublished: '2024-01-01',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    requiresSubscription: false
  };
}

export function getVideoEmbedUrl(type: string, id: string): string {
  switch (type) {
    case 'unmatched-ego-youtube':
    case 'unmatched-ego-shorts':
      return `https://www.youtube.com/embed/${id}`;
    case 'unmatched-ego-tiktok':
      return `https://www.tiktok.com/${id}`;
    default:
      return '';
  }
}

export function extractVideoId(url: string, type: string): string {
  switch (type) {
    case 'unmatched-ego-youtube':
    case 'unmatched-ego-shorts':
      const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&\n?#]+)/);
      return youtubeMatch ? youtubeMatch[1] : url;
    case 'unmatched-ego-tiktok':
      const tiktokMatch = url.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);
      return tiktokMatch ? tiktokMatch[1] : url;
    default:
      return url;
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
