'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gameConfig } from '@/config/game.config';

export function Footer() {
  return (
    <footer className="py-12 bg-apple-gray-900 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-apple-blue to-apple-indigo flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src="/favicon-96x96.png"
                  alt="Unmatched Ego Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-bold">{gameConfig.site.name}</h3>
            </Link>
            <p className="text-apple-gray-300 mb-4 max-w-md">
              The ultimate destination for free online soccer gaming. Experience competitive gameplay,
              master your skills, and join a community of passionate players.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Game</h4>
            <ul className="space-y-2 text-apple-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Play Now
                </Link>
              </li>
              <li>
                <Link href="/about#how-to-play" className="hover:text-white transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/about#tips" className="hover:text-white transition-colors">
                  Tips & Strategies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">About</h4>
            <ul className="space-y-2 text-apple-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-apple-gray-700 mt-8 pt-8 text-center text-apple-gray-400">
          <p>&copy; 2025 {gameConfig.site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
