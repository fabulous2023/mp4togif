import type { Metadata } from 'next';
import VideoToGifPage from './VideoToGifPage';

export const metadata: Metadata = {
  title: 'Video to GIF Converter - Create Animated GIFs from Any Video Online | mp4togif.pro',
  description: 'Easily convert any video format (MP4, 3GP, MKV, FLV, AVI, MOV, OGV, WEBM, WMV, etc.) to a high-quality animated GIF. Free, online, and no software required.',
  keywords: [
    'video to gif',
    'video to gif converter',
    'convert video to gif',
    'video to animated gif',
    'free video to gif',
    'online video to gif',
    'mp4 to gif',
    'mov to gif',
    'avi to gif',
    'webm to gif',
    'video gif maker',
    'animated gif creator',
    'gif from video',
    'video to gif online',
    'free gif converter',
    'video to gif tool',
    'create gif from video',
    'video to gif no watermark',
    'best video to gif converter',
    'fast video to gif'
  ],
  openGraph: {
    title: 'Video to GIF Converter - Create Animated GIFs from Any Video Online',
    description: 'Easily convert any video format (MP4, 3GP, MKV, FLV, AVI, MOV, OGV, WEBM, WMV, etc.) to a high-quality animated GIF. Free, online, and no software required.',
    url: 'https://mp4togif.pro/',
    siteName: 'MP4 to GIF Converter',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Video to GIF Converter - Create Animated GIFs from Any Video Online',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video to GIF Converter - Create Animated GIFs from Any Video Online',
    description: 'Easily convert any video format (MP4, 3GP, MKV, FLV, AVI, MOV, OGV, WEBM, WMV, etc.) to a high-quality animated GIF. Free, online, and no software required.',
    images: ['/web-app-manifest-512x512.png'],
  },
  alternates: {
    canonical: 'https://mp4togif.pro/',
  },
};

export default function Page() {
  return <VideoToGifPage />;
}