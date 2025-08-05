'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

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
            <Image
              src="/favicon.svg"
              alt="MP4 to GIF Logo"
              width={28}
              height={28}
              style={{ 
                flexShrink: 0
              }}
              priority
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
          {showFullNavigation ? (
            // 首页完整导航 - 与web端Header保持一致
            <>
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
                  href="/#converter" 
                  style={{
                    color: '#1f2937',
                    fontSize: '18px',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  Convert Now
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
                  href="/#features" 
                  style={{
                    color: '#1f2937',
                    fontSize: '18px',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  Features
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
                  href="/#why-choose" 
                  style={{
                    color: '#1f2937',
                    fontSize: '18px',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  Why Choose Us
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
                  href="/#who-needs" 
                  style={{
                    color: '#1f2937',
                    fontSize: '18px',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  Who Needs It
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
                  href="/#faq" 
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

              <a 
                href="/about" 
                onClick={closeMenu}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  minHeight: '60px',
                  color: '#1f2937',
                  fontSize: '18px',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                <span>About</span>
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
              </a>
            </>
          ) : (
            // 其他页面简化导航 - 与web端Header保持一致
            <>
              <a 
                href="/" 
                onClick={closeMenu}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  minHeight: '60px',
                  color: '#1f2937',
                  fontSize: '18px',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                <span>Home</span>
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
              </a>

              <a 
                href="/video-to-gif" 
                onClick={closeMenu}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  minHeight: '60px',
                  color: '#1f2937',
                  fontSize: '18px',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                <span>Video to GIF</span>
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
              </a>

              <a 
                href="/about" 
                onClick={closeMenu}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  minHeight: '60px',
                  color: '#1f2937',
                  fontSize: '18px',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                <span>About</span>
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
              </a>

              <a 
                href="/privacy" 
                onClick={closeMenu}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  minHeight: '60px',
                  color: '#1f2937',
                  fontSize: '18px',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                <span>Privacy</span>
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
              </a>

              <a 
                href="/terms" 
                onClick={closeMenu}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  borderBottom: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  minHeight: '60px',
                  color: '#1f2937',
                  fontSize: '18px',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                <span>Terms</span>
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
              </a>
            </>
          )}
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
            height: showFullNavigation ? '140px' : '80px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {showFullNavigation ? (
            // 首页显示转换相关按钮
            <>
              <a 
                href="/#converter"
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
                href="/#how-to-use"
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
            </>
          ) : (
            // 其他页面显示Try for free按钮
            <a 
              href="/#converter"
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
          )}
        </div>
      </div>
    </>
  );
}