'use client';

import React from 'react';
import { useAnalytics } from '@/components/AnalyticsScripts';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import GifConverter from '@/components/GifConverter';
import Link from 'next/link';
import {
  Upload,
  Download,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Sparkles,
  Zap,
  FileVideo,
  Image as ImageIcon,
  ChevronRight,
  Star,
  Globe,
  Lock
} from 'lucide-react';

export default function HomePage() {
  const { trackConversionStart, trackConversionComplete } = useAnalytics();

  const handleConversionComplete = (gifUrl: string) => {
    trackConversionComplete(0, 0); // We'll update this with actual file size and duration later
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              MP4 to GIF Free Tool
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Convert your MP4 videos to high-quality GIFs instantly. No software download required - 
              just upload, convert, and download your animated GIF in seconds.
            </p>
            
            {/* Conversion Interface */}
            <div id="converter">
              <GifConverter onConversionComplete={handleConversionComplete} />
            </div>
          </div>
        </div>
      </section>

      {/* How to Convert MP4 to GIF Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How Convert MP4 to GIF
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 3-step process to transform your MP4 videos into shareable GIFs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload MP4</h3>
              <p className="text-gray-600">Drag and drop your MP4 file or click to browse. Supports all common video formats up to 100MB.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Convert to GIF</h3>
              <p className="text-gray-600">Our free tool processes your video instantly with high-quality GIF output optimized for sharing.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Download GIF</h3>
              <p className="text-gray-600">Get your animated GIF ready to share on social media, websites, or messaging apps instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Feature
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for perfect MP4 to GIF conversion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-600">Convert MP4 to GIF in seconds with our optimized processing engine</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">100% Secure</h3>
              <p className="text-sm text-gray-600">Your files are processed securely and automatically deleted after conversion</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">High Quality</h3>
              <p className="text-sm text-gray-600">Get crisp, clear GIFs optimized for web and social media sharing</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">No Software</h3>
              <p className="text-sm text-gray-600">Convert directly in your browser - no downloads or installations needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MP4 to GIF Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose MP4 to GIF
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The fastest, easiest way to create animated GIFs from your videos
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Professional GIF Creation Made Simple</h3>
              <p className="text-gray-600 mb-6">
                Our MP4 to GIF converter combines speed, quality, and simplicity. Whether you&apos;re creating 
                memes, tutorials, or showcasing products, get professional results without technical expertise.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Perfect for Social Media</h4>
                    <p className="text-sm text-gray-600">Optimized GIFs for Twitter, Instagram, Facebook, and Discord</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Custom Quality Settings</h4>
                    <p className="text-sm text-gray-600">Balance file size and quality for your specific needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Batch Processing</h4>
                    <p className="text-sm text-gray-600">Convert multiple MP4 files to GIFs simultaneously</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="font-semibold mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Conversion Time</span>
                  <span className="font-semibold">2-5 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Maximum File Size</span>
                  <span className="font-semibold">100MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Supported Formats</span>
                  <span className="font-semibold">All MP4 variants</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Output Quality</span>
                  <span className="font-semibold">Up to 1080p</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs MP4 to GIF Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Who Need MP4 to GIF
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect for creators, marketers, educators, and anyone who needs animated content
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Social Media Managers</h3>
              <p className="text-sm text-gray-600">Create engaging GIF content for brand campaigns, announcements, and viral marketing across all social platforms.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Content Creators</h3>
              <p className="text-sm text-gray-600">Transform video highlights into shareable GIFs for YouTube thumbnails, TikTok teasers, and Instagram stories.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <ImageIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Educators & Trainers</h3>
              <p className="text-sm text-gray-600">Create instructional GIFs for tutorials, step-by-step guides, and educational content that loads quickly.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Meme Creators</h3>
              <p className="text-sm text-gray-600">Turn funny video moments into viral GIF memes that spread across Reddit, Discord, and Twitter.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <FileVideo className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Web Developers</h3>
              <p className="text-sm text-gray-600">Generate lightweight GIF assets for websites, email campaigns, and digital presentations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Marketing Teams</h3>
              <p className="text-sm text-gray-600">Create product demos, testimonials, and promotional GIFs for email marketing and landing pages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              FAQ for MP4 to GIF
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about converting MP4 videos to GIF format
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                Is MP4 to GIF really free?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                Yes! Our MP4 to GIF converter is completely free to use with no hidden costs, watermarks, 
                or sign-up required. Convert unlimited videos to GIFs without any restrictions.
              </p>
            </details>
            
            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                What&apos;s the maximum file size for MP4 to GIF conversion?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                You can upload MP4 files up to 100MB. For larger files, we recommend compressing 
                your video first or splitting it into smaller segments before conversion.
              </p>
            </details>
            
            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                How long does MP4 to GIF conversion take?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                Most MP4 to GIF conversions complete within 2-5 seconds. The exact time depends 
                on your file size and internet connection speed.
              </p>
            </details>
            
            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                Will my GIFs have watermarks?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                No, converted GIFs are completely watermark-free. You get clean, professional 
                animated GIFs ready for any use.
              </p>
            </details>
            
            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                What video formats are supported besides MP4?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                While optimized for MP4, we also support MOV, AVI, WebM, and most common video 
                formats. The tool automatically handles format conversion during processing.
              </p>
            </details>
            
            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                Are my files secure during conversion?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                Absolutely! All files are processed securely and automatically deleted from our 
                servers after conversion. Your privacy and data security are our top priorities.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}