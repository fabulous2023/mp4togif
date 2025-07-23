'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, GamepadIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  siteName: string;
}

export function MobileNav({ siteName }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
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
            <div className="flex items-center justify-between p-4 border-b border-apple-gray-200">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-apple-blue to-apple-indigo flex items-center justify-center">
                  <GamepadIcon className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-apple-gray-900">{siteName}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={toggleMenu}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <nav className="p-4">
              <div className="space-y-2">
                <button
                  onClick={() => handleLinkClick('#game')}
                  className="block w-full text-left px-3 py-2 rounded-lg text-apple-gray-700 hover:bg-apple-gray-100 hover:text-apple-blue transition-colors"
                >
                  Play Now
                </button>
                <button
                  onClick={() => handleLinkClick('#guide')}
                  className="block w-full text-left px-3 py-2 rounded-lg text-apple-gray-700 hover:bg-apple-gray-100 hover:text-apple-blue transition-colors"
                >
                  Guide
                </button>
                <button
                  onClick={() => handleLinkClick('#videos')}
                  className="block w-full text-left px-3 py-2 rounded-lg text-apple-gray-700 hover:bg-apple-gray-100 hover:text-apple-blue transition-colors"
                >
                  Videos
                </button>
                <button
                  onClick={() => handleLinkClick('#tips')}
                  className="block w-full text-left px-3 py-2 rounded-lg text-apple-gray-700 hover:bg-apple-gray-100 hover:text-apple-blue transition-colors"
                >
                  Tips
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
