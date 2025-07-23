'use client';

import React from 'react';
import { gameConfig } from '@/config/game.config';
import { GameFrame } from '@/components/GameFrame';
import { VideoGrid } from '@/components/VideoEmbed';
import { Button } from '@/components/ui/button';
import { useAnalytics } from '@/components/AnalyticsScripts';
import { MobileNav } from '@/components/MobileNav';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import {
  Trophy,
  Target,
  Zap,
  Users,
  Star,
  ArrowRight,
  Play,
  GamepadIcon,
  TrendingUp
} from 'lucide-react';

export default function HomePage() {
  const { trackGameStart, trackPageView } = useAnalytics();
  const [isGameLoading, setIsGameLoading] = React.useState(false);

  React.useEffect(() => {
    trackPageView('Homepage');
  }, [trackPageView]);

  const handleGameStart = () => {
    setIsGameLoading(true);
    trackGameStart();

    // 预加载游戏页面，减少空白时间
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
              window.location.href = 'https://www.crazygames.com/game/unmatched-ego---soccer-action';
            }, 1000);
          </script>
        </body>
        </html>
      `);
      gameWindow.document.close();
    }

    // 重置加载状态
    setTimeout(() => {
      setIsGameLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Header showFullNavigation={true} />

      {/* Page Title Section */}
      <section className="py-6 bg-gradient-to-br from-apple-blue/5 to-apple-purple/5">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 apple-text-gradient">
              Play Unmatched Ego Online Free - Ultimate 3v3 Soccer Challenge
            </h1>
            <p className="text-lg md:text-xl text-apple-gray-600 max-w-3xl mx-auto leading-relaxed">
              Step into the arena and prove your skills in this high-intensity 3v3 third-person soccer showdown!
              Experience fast-paced Unmatched Ego gameplay where sharp dribbling, smart positioning, and perfectly timed shots take center stage.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Game Section */}
      <section id="game" className="py-8 md:py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Game Area */}
            <div className="order-2 lg:order-1">
              <div className="relative game-float">
                {/* 改进的游戏展示区域 */}
                <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group soccer-field-glow">
                  {/* 足球场背景 - 改为蓝色系 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
                    {/* 草地纹理效果 */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45"></div>
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform -rotate-45"></div>
                    </div>

                    {/* 足球场地标记 */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-4 border-2 border-white/80 rounded-lg"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/80 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/80 rounded-full"></div>
                      <div className="absolute top-4 bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 bg-white/80"></div>
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-20 border-2 border-white/80 border-l-0 rounded-r-lg"></div>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-20 border-2 border-white/80 border-r-0 rounded-l-lg"></div>

                      {/* 角球弧 */}
                      <div className="absolute top-4 left-4 w-4 h-4 border-2 border-white/60 border-t-0 border-l-0 rounded-br-full"></div>
                      <div className="absolute top-4 right-4 w-4 h-4 border-2 border-white/60 border-t-0 border-r-0 rounded-bl-full"></div>
                      <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-white/60 border-b-0 border-l-0 rounded-tr-full"></div>
                      <div className="absolute bottom-4 right-4 w-4 h-4 border-2 border-white/60 border-b-0 border-r-0 rounded-tl-full"></div>
                    </div>

                    {/* 球员和足球动画 - 更真实的效果 */}
                    <div className="absolute bottom-20 left-1/4 w-3 h-8 bg-blue-600 rounded-full shadow-lg player-move"></div>
                    <div className="absolute bottom-24 right-1/3 w-3 h-8 bg-red-600 rounded-full shadow-lg player-move" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-32 left-2/3 w-3 h-8 bg-yellow-500 rounded-full shadow-lg player-move" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-28 left-1/2 w-4 h-4 bg-white rounded-full shadow-lg ball-roll">
                      {/* 足球花纹 */}
                      <div className="absolute inset-0.5 border border-black/30 rounded-full"></div>
                      <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/80 rounded-full blur-sm"></div>
                    </div>
                  </div>

                  {/* 游戏信息覆盖层 */}
                  <div id="game-overlay" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex items-center justify-center transition-all duration-500 group-hover:from-black/80">
                    <div className="text-center text-white p-8 relative z-10">
                      {/* 游戏标题 */}
                      <div className="mb-6">
                        <div className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                          {gameConfig.game.name}
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">3v3</span>
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">Soccer</span>
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">Action</span>
                        </div>
                      </div>

                      <p className="text-lg md:text-xl mb-8 opacity-90 max-w-md mx-auto leading-relaxed">
                        Experience lightning-fast soccer action where skill and style rule the pitch
                      </p>

                      {/* 主要CTA按钮 */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log('Play Now button clicked');
                          handleGameStart();
                        }}
                        disabled={isGameLoading}
                        className={`inline-flex items-center gap-3 bg-gradient-to-r from-apple-indigo to-apple-purple text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl hover:from-apple-purple hover:to-apple-indigo group/btn cursor-pointer ${
                          isGameLoading ? 'opacity-75 cursor-not-allowed transform-none' : ''
                        }`}
                      >
                        {isGameLoading ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Loading Game...
                          </>
                        ) : (
                          <>
                            <Play className="h-6 w-6 group-hover/btn:animate-pulse" />
                            Play Now - Free!
                          </>
                        )}
                      </button>

                      {/* 游戏特色 */}
                      <div className="flex items-center justify-center gap-6 mt-6 text-sm opacity-80">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span>Online</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                          <span>Multiplayer</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
                          <span>No Download</span>
                        </div>
                      </div>

                      <p className="text-xs mt-4 opacity-60">
                        Click to start playing instantly • No registration required
                      </p>
                    </div>
                  </div>



                  {/* 装饰性元素 - 浏览器风格 */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-sm"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-300 shadow-sm"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-700 shadow-sm"></div>
                  </div>

                  {/* 游戏信息标签 */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className="bg-gradient-to-r from-apple-indigo/90 to-apple-purple/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-white/20">
                      Unity WebGL
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                      Desktop Only
                    </div>
                  </div>

                  {/* 评分和统计 */}
                  <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                    <div className="bg-gradient-to-r from-yellow-500/90 to-orange-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1 border border-white/20">
                      <span>⭐</span>
                      <span>9.3/10</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                      4.8K+ votes
                    </div>
                  </div>

                  {/* 实时状态指示器 */}
                  <div className="absolute bottom-4 right-4 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-2 border border-white/20">
                    <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                    <span>Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 apple-text-gradient">
                Unmatched Ego - Fast-Paced 3v3 Soccer Action Game
              </h2>
              <p className="text-lg md:text-xl text-apple-gray-600 mb-8 leading-relaxed">
                This isn't your average soccer game — this is ego vs ego. Master sharp dribbling, smart positioning,
                and perfectly timed shots in high-energy matches that demand precision and flair.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  variant="apple"
                  size="lg"
                  className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Watch Gameplay Videos button clicked');
                    document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Gameplay Videos
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg px-8 py-4 bg-slate-800 text-white hover:bg-slate-700 border-slate-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Learn How to Play button clicked');
                    document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Target className="mr-2 h-5 w-5" />
                  Learn How to Play
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold apple-text-gradient">4.8K+</div>
                  <div className="text-sm text-apple-gray-600">Players</div>
                </div>
                <div>
                  <div className="text-2xl font-bold apple-text-gradient">Free</div>
                  <div className="text-sm text-apple-gray-600">To Play</div>
                </div>
                <div>
                  <div className="text-2xl font-bold apple-text-gradient">3v3</div>
                  <div className="text-sm text-apple-gray-600">Action</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Videos Section */}
      <section id="videos" className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-apple-gray-900">
              Unmatched Ego Community Videos & Gameplay Highlights
            </h2>
            <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
              Watch amazing Unmatched Ego gameplay, learn pro techniques for 3v3 soccer action, and get inspired by the best moments
              from the {gameConfig.game.name} community featuring Blue Lock-inspired skills.
            </p>
          </div>
          <VideoGrid videos={gameConfig.videos} />
        </div>
      </section>

      {/* Game Guide Section */}
      <section id="guide" className="py-12 md:py-16 bg-gradient-to-br from-apple-blue/5 to-apple-purple/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-apple-gray-900">
              How to Play Unmatched Ego - Complete Beginner's Guide
            </h2>
            <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
              Master the fundamentals of Unmatched Ego and start your journey to becoming a 3v3 soccer legend!
              Learn the essential skills to dominate in this fast-paced third-person soccer showdown.
            </p>
          </div>

          {/* Quick Start Guide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-apple-blue to-apple-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-4">Basic Controls</div>
              <p className="text-gray-600 mb-4">
                Master Unmatched Ego controls: Use WASD to move, Mouse to aim, V to sprint, and perfect your dribbling techniques!
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-apple-purple to-apple-indigo rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-4">Team Strategy</div>
              <p className="text-gray-600 mb-4">
                Excel in Unmatched Ego's 3v3 format: coordinate with teammates using chat commands (1-3 keys), use smart positioning, and execute tactical plays!
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-apple-indigo to-apple-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-4">Win Matches</div>
              <p className="text-gray-600 mb-4">
                Prove your dominance in Unmatched Ego! Master skill moves (R/F keys), score with perfectly timed shots, and outplay opponents to climb the ranks!
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button
              variant="apple"
              size="lg"
              className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('game')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5" />
              Start Playing Now!
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Controls */}
            <div className="space-y-8">
              {/* Basic Controls */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-apple-indigo/10 flex items-center justify-center">
                    <GamepadIcon className="h-6 w-6 text-apple-indigo" />
                  </div>
                  <h3 className="text-2xl font-bold text-apple-gray-900">Unmatched Ego Basic Controls & Movement</h3>
                </div>
                <div className="space-y-3">
                  {gameConfig.guide.basicControls.map((control, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-apple-gray-50">
                      <div className="h-6 w-6 rounded-full bg-apple-indigo flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                      <p className="text-apple-gray-700">{control}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Controls */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-apple-purple/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-apple-purple" />
                  </div>
                  <h4 className="text-lg font-bold text-apple-gray-900">Essential Movement Controls</h4>
                </div>
                <div className="space-y-2">
                  {gameConfig.guide.chatControls.map((control, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-apple-purple/5">
                      <div className="h-5 w-5 rounded-full bg-apple-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                      <p className="text-sm text-apple-gray-700">{control}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Advanced & Objectives */}
            <div className="space-y-8">
              {/* Team Communication */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-apple-purple/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-apple-purple" />
                  </div>
                  <h4 className="text-lg font-bold text-apple-gray-900">Team Communication Commands</h4>
                </div>
                <div className="space-y-2">
                  {gameConfig.guide.chatControls.map((control, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-apple-purple/5">
                      <div className="h-5 w-5 rounded-full bg-apple-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                      <p className="text-sm text-apple-gray-700">{control}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Moves */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-apple-orange/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-apple-orange" />
                  </div>
                  <h4 className="text-lg font-bold text-apple-gray-900">Skill Moves & Advanced Techniques</h4>
                </div>
                <div className="space-y-2 mb-4">
                  {gameConfig.guide.skillMoves.map((move, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-apple-orange/5">
                      <div className="h-5 w-5 rounded-full bg-apple-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                      <p className="text-sm text-apple-gray-700">{move}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {gameConfig.guide.advancedMoves.map((move, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-apple-blue/5">
                      <div className="h-5 w-5 rounded-full bg-apple-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">{index + gameConfig.guide.skillMoves.length + 1}</span>
                      </div>
                      <p className="text-sm text-apple-gray-700">{move}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Objective */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-apple-indigo/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-apple-indigo" />
                  </div>
                  <h4 className="text-lg font-bold text-apple-gray-900">Game Objectives & Goals</h4>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-apple-indigo/5 to-apple-blue/5 border border-apple-gray-200">
                  <p className="text-apple-gray-700 leading-relaxed text-sm">
                    {gameConfig.guide.coreObjective}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and Strategies Section */}
      <section id="tips" className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-apple-gray-900">
              Unmatched Ego Pro Tips & Winning Strategies
            </h2>
            <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
              Elevate your Unmatched Ego gameplay with these expert tips and advanced strategies for 3v3 soccer dominance.
            </p>
          </div>

          {/* Top 5 Tips */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 rounded-xl bg-apple-orange/10 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-apple-orange" />
              </div>
              <h3 className="text-2xl font-bold text-apple-gray-900">Top Unmatched Ego Pro Tips for Success</h3>
            </div>
            <div className="grid gap-6">
              {gameConfig.tips.map((tip, index) => (
                <div key={index} className="group p-6 rounded-xl bg-apple-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-apple-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-apple-indigo to-apple-purple flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-apple-gray-700 leading-relaxed group-hover:text-apple-gray-900 transition-colors">
                        {tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🔥 ULTIMATE CTA - 世界级设计 */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-1 shadow-2xl">
            {/* 霓虹边框效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-sm animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>

            {/* 主要内容区域 */}
            <div className="relative bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 rounded-3xl p-8 backdrop-blur-sm">
              {/* 动态背景粒子效果 */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-20 right-16 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute bottom-10 right-10 w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-30" style={{animationDelay: '2s'}}></div>
              </div>

              {/* 标题区域 */}
              <div className="relative z-10 text-center mb-8">
                {/* 顶部装饰线 */}
                <div className="flex items-center justify-center mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-24"></div>
                  <div className="mx-4 text-2xl">⚡</div>
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-24"></div>
                </div>

                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/40 animate-pulse cyber-glow">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-2xl shadow-pink-500/40 animate-pulse cyber-glow" style={{animationDelay: '0.5s'}}>
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-cyan-500/40 animate-pulse cyber-glow" style={{animationDelay: '1s'}}>
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-5xl md:text-7xl font-black mb-4 holographic-text leading-tight tracking-tight">
                  Master Unmatched Ego - Dominate the Soccer Pitch
                </h3>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-2">
                  Join the Elite Soccer Revolution
                </div>

                {/* 动态统计数字 */}
                <div className="flex items-center justify-center gap-8 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-cyan-400">4.8K+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Players</div>
                  </div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-400">24/7</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Online</div>
                  </div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-pink-400">∞</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Fun</div>
                  </div>
                </div>
              </div>

              {/* 描述文字 */}
              <p className="text-lg text-white/80 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                🚀 <span className="text-cyan-400 font-semibold">4,800+ players</span> are already mastering their skills.
                <span className="text-purple-400 font-semibold"> Unleash your potential</span> in the most addictive 3v3 soccer experience ever created.
              </p>

              {/* 特色亮点 */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20">
                  <div className="text-2xl font-bold text-cyan-400">⚡</div>
                  <div className="text-sm text-white/80 font-medium">Lightning Fast</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400">🏆</div>
                  <div className="text-sm text-white/80 font-medium">Competitive</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-400">🔥</div>
                  <div className="text-sm text-white/80 font-medium">Addictive</div>
                </div>
              </div>

              {/* 🚀 终极CTA按钮 */}
              <div className="text-center">
                {/* 主按钮 */}
                <div className="relative inline-block mb-6">
                  {/* 外层霓虹光环 */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-lg animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>

                  <button
                    onClick={() => document.getElementById('game')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-black text-2xl px-16 py-8 rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-95"
                  >
                    {/* 按钮内部动态背景 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-cyan-500 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-700" style={{animationDelay: '0.2s'}}></div>

                    {/* 按钮内容 */}
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="relative">
                        <Play className="h-8 w-8 group-hover:animate-spin transition-transform duration-500" />
                        <div className="absolute inset-0 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                      </div>

                      <span className="tracking-wider">START DOMINATING</span>

                      <div className="relative">
                        <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.1s'}}></div>
                      </div>
                    </div>

                    {/* 按钮边缘粒子效果 */}
                    <div className="absolute top-2 left-8 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute bottom-3 right-12 w-1 h-1 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.3s'}}></div>
                    <div className="absolute top-1/2 right-4 w-0.5 h-0.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.6s'}}></div>
                  </button>
                </div>

                {/* 副标题 */}
                <div className="text-lg font-semibold text-white/90 mb-4">
                  🎮 <span className="text-cyan-400">Zero cost</span> • <span className="text-purple-400">Maximum thrill</span> • <span className="text-pink-400">Instant access</span>
                </div>

                {/* 特色指示器 */}
                <div className="flex items-center justify-center gap-8 text-sm">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 font-medium">100% Free Forever</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                    <span className="text-cyan-300 font-medium">No Download Required</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                    <span className="text-purple-300 font-medium">Play Instantly</span>
                  </div>
                </div>

                {/* 底部装饰 */}
                <div className="flex items-center justify-center mt-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"></div>
                  <div className="mx-4 text-xl">🔥</div>
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
