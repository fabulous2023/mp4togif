'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gameConfig } from '@/config/game.config';
import { MobileNav } from '@/components/MobileNav';

interface HeaderProps {
  showFullNavigation?: boolean;
}

export function Header({ showFullNavigation = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-apple-gray-200">
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-apple-blue to-apple-indigo flex items-center justify-center shadow-lg overflow-hidden">
              <Image
                src="/favicon-96x96.png"
                alt="Unmatched Ego Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div className="text-xl font-bold apple-text-gradient">
              {gameConfig.site.name}
            </div>
          </Link>
          
          {showFullNavigation ? (
            // 首页完整导航
            <div className="hidden md:flex items-center gap-6">
              <a href="/#game" className="text-sm font-medium text-apple-gray-700 hover:text-apple-blue transition-colors">
                Play Now
              </a>
              <a href="/#guide" className="text-sm font-medium text-apple-gray-700 hover:text-apple-blue transition-colors">
                Guide
              </a>
              <a href="/#videos" className="text-sm font-medium text-apple-gray-700 hover:text-apple-blue transition-colors">
                Videos
              </a>
              <a href="/#tips" className="text-sm font-medium text-apple-gray-700 hover:text-apple-blue transition-colors">
                Tips
              </a>
              <Link href="/about" className="text-sm font-medium text-apple-gray-700 hover:text-apple-blue transition-colors">
                About
              </Link>
            </div>
          ) : (
            // 其他页面简化导航
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-apple-gray-600 hover:text-apple-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-apple-gray-600 hover:text-apple-gray-900 transition-colors">
                About
              </Link>
              <Link href="/privacy" className="text-apple-gray-600 hover:text-apple-gray-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-apple-gray-600 hover:text-apple-gray-900 transition-colors">
                Terms
              </Link>
            </div>
          )}
          
          {/* 移动端菜单 */}
          <MobileNav siteName={gameConfig.site.name} />
        </nav>
      </div>
    </header>
  );
}
