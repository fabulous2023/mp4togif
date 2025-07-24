'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileNav } from '@/components/MobileNav';

interface HeaderProps {
  showFullNavigation?: boolean;
}

export function Header({ showFullNavigation = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icon0.svg"
              alt="MP4 to GIF Logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MP4 to GIF
            </div>
          </Link>
          
          {showFullNavigation ? (
            // 首页完整导航
            <div className="hidden md:flex items-center gap-6">
              <a href="/#converter" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Convert Now
              </a>
              <a href="/#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="/#why-choose" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Why Choose Us
              </a>
              <a href="/#who-needs" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Who Needs It
              </a>
              <a href="/#faq" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                FAQ
              </a>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
            </div>
          ) : (
            // 其他页面简化导航
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                Terms
              </Link>
            </div>
          )}
          
          {/* 移动端菜单 */}
          <MobileNav siteName="MP4 to GIF" />
        </nav>
      </div>
    </header>
  );
}
