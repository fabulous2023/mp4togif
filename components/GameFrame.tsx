'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Play, ExternalLink, Gamepad2, Users, Trophy, Star } from 'lucide-react';

interface GameFrameProps {
  src: string;
  title: string;
  className?: string;
}

export function GameFrame({ src, title, className }: GameFrameProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGameStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 创建优化的加载页面
    const gameWindow = window.open('', '_blank');
    if (gameWindow) {
      gameWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Loading Unmatched Ego...</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body {
              margin: 0;
              padding: 0;
              background: linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8);
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              color: white;
            }
            .loader {
              text-align: center;
              animation: fadeIn 0.5s ease-in;
            }
            .spinner {
              width: 60px;
              height: 60px;
              border: 4px solid rgba(255,255,255,0.3);
              border-top: 4px solid white;
              border-radius: 50%;
              animation: spin 1s linear infinite;
              margin: 0 auto 20px;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .game-title {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .loading-text {
              font-size: 16px;
              opacity: 0.9;
            }
          </style>
        </head>
        <body>
          <div class="loader">
            <div class="spinner"></div>
            <div class="game-title">Unmatched Ego</div>
            <div class="loading-text">Loading your soccer adventure...</div>
          </div>
          <script>
            setTimeout(() => {
              window.location.href = '${src}';
            }, 1000);
          </script>
        </body>
        </html>
      `);
      gameWindow.document.close();
    }

    // 重置加载状态
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className={cn('relative w-full', className)}>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-white/5"></div>
        </div>
        <div className="relative p-8 min-h-[400px] flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Unmatched Ego</h2>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="bg-purple-500/30 px-2 py-1 rounded-full">3v3</span>
                  <span className="bg-blue-500/30 px-2 py-1 rounded-full">Soccer</span>
                  <span className="bg-orange-500/30 px-2 py-1 rounded-full">Action</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
              Unity WebGL
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center text-center mb-8">
            <p className="text-white/90 text-lg leading-relaxed mb-6 max-w-md mx-auto">
              Experience lightning-fast soccer action where skill and style rule the pitch
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 text-white/80">
                  <Users className="w-full h-full" />
                </div>
                <div className="text-white font-semibold">1M+</div>
                <div className="text-white/70 text-xs">Players</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 text-white/80">
                  <Trophy className="w-full h-full" />
                </div>
                <div className="text-white font-semibold">Free</div>
                <div className="text-white/70 text-xs">To Play</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 text-white/80">
                  <Star className="w-full h-full" />
                </div>
                <div className="text-white font-semibold">3v3</div>
                <div className="text-white/70 text-xs">Action</div>
              </div>
            </div>

            <button
              onClick={handleGameStart}
              disabled={isLoading}
              className={`group relative inline-flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl mx-auto ${
                isLoading ? 'opacity-75 cursor-not-allowed transform-none' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="text-lg">Loading Game...</span>
                </>
              ) : (
                <>
                  <Play className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" />
                  <span className="text-lg">Play Now - Free!</span>
                  <ExternalLink className="w-5 h-5 opacity-70 transition-opacity group-hover:opacity-100" />
                </>
              )}

              <div className="absolute inset-0 rounded-2xl bg-purple-400/20 blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
            </button>
          </div>

          <div className="flex items-center justify-between text-white/70 text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Online
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Multiplayer
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                No Download
              </span>
            </div>

            <div className="text-right">
              <div className="text-white/90 font-medium">Click to start playing instantly</div>
              <div className="text-white/60 text-xs">No registration required</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-yellow-900 font-bold text-sm">9.3</span>
              </div>
              <span className="text-gray-700 font-medium">4.6K votes</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Live</span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-600">
              Powered by{' '}
              <a
                href="https://www.crazygames.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
              >
                CrazyGames
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
