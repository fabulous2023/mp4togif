'use client';

import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { VideoType } from '@/config/game.config';
import { Play, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface VideoEmbedProps {
  video: VideoType;
  className?: string;
}

export function VideoEmbed({ video, className }: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleThumbnailError = useCallback(() => {
    const fallbacks = getFallbackThumbnail(video.id);
    if (currentThumbnailIndex < fallbacks.length - 1) {
      setCurrentThumbnailIndex(prev => prev + 1);
    } else {
      setThumbnailError(true);
    }
  }, [currentThumbnailIndex, video.id]);

  const getThumbnailUrl = (type: string, id: string) => {
    switch (type) {
      case 'unmatched-ego-youtube':
      case 'unmatched-ego-shorts':
        // Try multiple YouTube thumbnail URLs as fallback
        return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
      case 'unmatched-ego-tiktok':
        return '/favicon.svg';
      default:
        return '/favicon.svg';
    }
  };

  const getFallbackThumbnail = (id: string) => {
    // Multiple fallback options for YouTube thumbnails, with favicon as final fallback
    return [
      `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
      `https://img.youtube.com/vi/${id}/sddefault.jpg`,
      '/favicon.svg'
    ];
  };

  const renderVideo = () => {
    switch (video.type) {
      case 'unmatched-ego-youtube':
      case 'unmatched-ego-shorts':
        return (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-apple-gray-100">
            {!isLoaded && (
              <div className="absolute inset-0">
                {/* Use placeholder background for now due to network issues */}
                <div className="w-full h-full bg-gradient-to-br from-red-500 via-red-600 to-red-800 flex items-center justify-center relative">
                  {/* YouTube-style thumbnail mockup */}
                  <div className="absolute top-4 left-4 bg-black/50 px-2 py-1 rounded text-white text-xs font-medium">
                    {video.type === 'unmatched-ego-shorts' ? 'Shorts' : 'YouTube'}
                  </div>

                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <Image
                        src="/favicon.svg"
                        alt="Unmatched Ego"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="text-lg font-bold mb-2">Unmatched Ego</div>
                    <div className="text-sm opacity-75 mb-4">Soccer Action</div>
                    <div className="text-xs opacity-60 max-w-48 line-clamp-2">{video.title}</div>
                  </div>

                  {/* Mock video duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-white text-xs">
                    {video.type === 'unmatched-ego-shorts' ? '0:45' : '3:24'}
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button
                    onClick={handleLoad}
                    className="group flex flex-col items-center gap-2 p-4 text-white transition-all hover:scale-105"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 transition-all group-hover:bg-red-700 shadow-lg">
                      <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
                    </div>
                    <span className="text-sm font-medium bg-black/50 px-3 py-1 rounded-full">Play Video</span>
                  </button>
                </div>
              </div>
            )}
            {isLoaded && (
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            )}
          </div>
        );

      case 'unmatched-ego-tiktok':
        return (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-apple-gray-100">
            <div className="absolute inset-0">
              {/* TikTok-style background with mock video preview */}
              <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-600 to-black relative">
                {/* Mock TikTok interface elements */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Image
                      src="/favicon.svg"
                      alt="Unmatched Ego"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                  <div className="text-white text-xs">Unmatched Ego</div>
                </div>

                {/* Mock video content area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <Image
                        src="/favicon.svg"
                        alt="Unmatched Ego"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="text-lg font-bold mb-2">Unmatched Ego</div>
                    <div className="text-sm opacity-75 mb-4">Soccer Skills</div>
                  </div>
                </div>

                {/* Mock TikTok UI elements */}
                <div className="absolute bottom-4 left-4 right-16">
                  <div className="text-white text-sm font-medium mb-1">@{video.id.split('/')[0].replace('@', '')}</div>
                  <div className="text-white text-xs opacity-75 line-clamp-2">{video.alt}</div>
                </div>

                {/* Mock side buttons */}
                <div className="absolute right-4 bottom-20 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xl">❤️</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xl">📤</span>
                  </div>
                </div>

                {/* Click overlay */}
                <a
                  href={`https://www.tiktok.com/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-all group"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/70 backdrop-blur-sm">
                      <ExternalLink className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={cn('group', className)}>
      {renderVideo()}
      <div className="mt-3 space-y-1">
        <div className="text-sm font-medium text-apple-gray-900 group-hover:text-apple-blue transition-colors">
          {video.title}
        </div>
        <p className="text-xs text-apple-gray-600 line-clamp-2">
          {video.alt}
        </p>
      </div>
    </div>
  );
}

interface VideoGridProps {
  videos: VideoType[];
  className?: string;
}

export function VideoGrid({ videos, className }: VideoGridProps) {
  return (
    <div className={cn('video-grid', className)}>
      {videos.map((video, index) => (
        <VideoEmbed key={`${video.type}-${video.id}-${index}`} video={video} />
      ))}
    </div>
  );
}
