'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface MobileNavProps {
  siteName: string;
  showFullNavigation?: boolean;
}

export function MobileNav({ siteName, showFullNavigation = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMenu}
          className="p-2"
          aria-label="打开菜单"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMenu}
          className="p-2"
          aria-label="关闭菜单"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* 真正的全屏遮罩 */}
      <div 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#ffffff',
          zIndex: 99999,
          overflow: 'hidden'
        }}
      >
        {/* 顶部栏 - 修复字体显示问题 */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            borderBottom: '1px solid #d1d5db',
            height: '60px',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flex: 1,
              minWidth: 0,
              maxWidth: 'calc(100% - 60px)'
            }}
          >
            <img 
              src="/favicon.svg" 
              alt="图标" 
              style={{ 
                width: '28px', 
                height: '28px',
                flexShrink: 0
              }}
            />
            <span 
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#111827',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '100%'
              }}
            >
              MP4 to GIF
            </span>
          </div>
          <button 
            onClick={closeMenu}
            style={{ 
              padding: '8px',
              flexShrink: 0,
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        {/* 菜单项列表 */}
        <div style={{ 
          height: 'calc(100vh - 60px - 140px)',
          overflowY: 'auto',
          paddingTop: '8px'
        }}>
          <div 
            onClick={closeMenu}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid #e5e7eb',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              minHeight: '60px'
            }}
          >
            <a 
              href="#converter" 
              style={{
                color: '#1f2937',
                fontSize: '18px',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              CONVERTER
            </a>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ color: '#9ca3af' }}
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>

          <div 
            onClick={closeMenu}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid #e5e7eb',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              minHeight: '60px'
            }}
          >
            <a 
              href="#features" 
              style={{
                color: '#1f2937',
                fontSize: '18px',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              FEATURES
            </a>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ color: '#9ca3af' }}
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>

          <div 
            onClick={closeMenu}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid #e5e7eb',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              minHeight: '60px'
            }}
          >
            <a 
              href="#how-to-use" 
              style={{
                color: '#1f2937',
                fontSize: '18px',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              HOW TO USE
            </a>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ color: '#9ca3af' }}
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>

          <div 
            onClick={closeMenu}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid #e5e7eb',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              minHeight: '60px'
            }}
          >
            <a 
              href="#faq" 
              style={{
                color: '#1f2937',
                fontSize: '18px',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              FAQ
            </a>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ color: '#9ca3af' }}
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>

          <div 
            onClick={closeMenu}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid #e5e7eb',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              minHeight: '60px'
            }}
          >
            <a 
              href="/about" 
              style={{
                color: '#1f2937',
                fontSize: '18px',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              ABOUT
            </a>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ color: '#9ca3af' }}
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>

        {/* 底部按钮 */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px',
            backgroundColor: '#ffffff',
            height: '140px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <a 
            href="#converter"
            onClick={closeMenu}
            style={{
              display: 'block',
              width: '100%',
              padding: '16px',
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: '600',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              boxSizing: 'border-box'
            }}
          >
            Try for free
          </a>
          <a 
            href="#how-to-use"
            onClick={closeMenu}
            style={{
              display: 'block',
              width: '100%',
              padding: '16px',
              backgroundColor: '#f3f4f6',
              color: '#374151',
              fontWeight: '600',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              border: '1px solid #e5e7eb',
              boxSizing: 'border-box'
            }}
          >
            How it works
          </a>
        </div>
      </div>
    </>
  );
}