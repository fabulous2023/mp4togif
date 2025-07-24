'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, FileVideo } from 'lucide-react';

interface MobileNavProps {
  siteName: string;
  showFullNavigation?: boolean;
}

export function MobileNav({ siteName, showFullNavigation = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={toggleMenu}>
          <div
            className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <FileVideo className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">{siteName}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={toggleMenu}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <nav className="p-4">
              <div className="space-y-2">
                {showFullNavigation ? (
                  <>
                    <button
                      onClick={() => handleLinkClick('#converter')}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Convert Now
                    </button>
                    <button
                      onClick={() => handleLinkClick('#features')}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Features
                    </button>
                    <button
                      onClick={() => handleLinkClick('#why-choose')}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Why Choose Us
                    </button>
                    <button
                      onClick={() => handleLinkClick('#faq')}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      FAQ
                    </button>
                    <Link
                      href="/about"
                      onClick={toggleMenu}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      About
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/"
                      onClick={toggleMenu}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      onClick={toggleMenu}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="/privacy"
                      onClick={toggleMenu}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Privacy
                    </Link>
                    <Link
                      href="/terms"
                      onClick={toggleMenu}
                      className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      Terms
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
