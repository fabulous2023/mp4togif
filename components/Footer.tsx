'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/icon1.png"
                alt="MP4 to GIF Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <h3 className="text-xl font-bold">MP4 to GIF Converter</h3>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              The fastest and easiest MP4 to GIF converter to transform your MP4 videos to high-quality GIFs. 
              Free MP4 to GIF conversion with no downloads, no sign-ups required.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Converter</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Convert Now
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">About</h4>
            <ul className="space-y-2 text-gray-300">
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
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MP4 to GIF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
