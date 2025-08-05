'use client';

import React from 'react';
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
  Lock,
  Play,
  Settings,
  Smartphone,
  Monitor
} from 'lucide-react';

export default function VideoToGifPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              The Easiest Way to Convert Video to GIF
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform any video format (MP4, MOV, AVI, WEBM) into high-quality animated GIFs instantly. 
              Free online video to GIF converter with no software downloads required.
            </p>
            
            {/* CTA Button */}
            <div className="mb-12">
              <Link 
                href="/#converter"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Start Converting Now
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* What is Video to GIF Tool Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
              What is Video to GIF Tool?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                A video to GIF tool is an online converter that transforms video files into animated GIF images. 
                Our video to GIF converter supports multiple video formats including MP4, MOV, AVI, WEBM, and more, 
                allowing you to create engaging animated GIFs for social media, websites, and digital communication.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Unlike traditional video files, GIFs are lightweight, loop automatically, and play without sound, 
                making them perfect for quick visual communication. Our tool maintains high quality while optimizing 
                file size for web use, ensuring your animated GIFs load quickly across all platforms.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Key Benefits</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Universal compatibility across all devices
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Automatic looping for continuous playback
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Smaller file sizes than video formats
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      No audio track for silent communication
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">Perfect For</h3>
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Social media content creation
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Website animations and demos
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Email marketing campaigns
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Memes and viral content
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Convert Video to GIF Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How to Convert Video to GIF
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to convert any video format to an animated GIF using our free online tool
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Upload Your Video</h3>
              <p className="text-gray-600">
                Drag and drop your video file or click to browse. Supports MP4, MOV, AVI, WEBM, and more formats up to 100MB.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Customize Settings</h3>
              <p className="text-gray-600">
                Adjust quality, frame rate, and dimensions to optimize your GIF for its intended use and platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Download Your GIF</h3>
              <p className="text-gray-600">
                Get your high-quality animated GIF ready to share on social media, websites, or messaging platforms.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Pro Tips for Better GIFs</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-blue-600">Optimize for Web</h4>
                <p className="text-sm text-gray-600">Keep GIFs under 2MB for fast loading on websites and social media platforms.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-600">Choose the Right Length</h4>
                <p className="text-sm text-gray-600">2-6 second clips work best for most social media platforms and maintain viewer attention.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Consider Your Audience</h4>
                <p className="text-sm text-gray-600">Higher quality for professional use, optimized compression for casual sharing.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-orange-600">Test Different Settings</h4>
                <p className="text-sm text-gray-600">Experiment with frame rates and quality to find the perfect balance for your content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Features of Video to GIF Converter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for professional video to GIF conversion with advanced features and customization options
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-600">Convert videos to GIFs in seconds with our optimized processing engine</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileVideo className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multiple Formats</h3>
              <p className="text-sm text-gray-600">Support for MP4, MOV, AVI, WEBM, and all popular video formats</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">High Quality Output</h3>
              <p className="text-sm text-gray-600">Maintain video quality while optimizing for web and social media use</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Secure</h3>
              <p className="text-sm text-gray-600">Your files are processed securely and deleted automatically after conversion</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Software Needed</h3>
              <p className="text-sm text-gray-600">Convert directly in your browser without downloading any software</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Settings</h3>
              <p className="text-sm text-gray-600">Adjust quality, frame rate, and dimensions for perfect results</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-sm text-gray-600">Works perfectly on all devices - desktop, tablet, and mobile</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Available</h3>
              <p className="text-sm text-gray-600">Convert videos to GIFs anytime, anywhere with our always-online tool</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Video to GIF Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our Video to GIF Converter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The most reliable and feature-rich video to GIF converter for all your animated content needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Professional Results, Simple Process</h3>
              <p className="text-gray-600 mb-6">
                Our video to GIF converter combines advanced technology with user-friendly design. Whether you&apos;re 
                creating content for social media, websites, or presentations, get professional-quality GIFs 
                without technical complexity.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Advanced Compression</h4>
                    <p className="text-sm text-gray-600">Smart algorithms reduce file size while maintaining visual quality</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Cross-Platform Compatibility</h4>
                    <p className="text-sm text-gray-600">GIFs work everywhere - social media, email, websites, and apps</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">No Watermarks</h4>
                    <p className="text-sm text-gray-600">Clean, professional output without any branding or watermarks</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Unlimited Conversions</h4>
                    <p className="text-sm text-gray-600">Convert as many videos as you need without any restrictions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-4">Conversion Statistics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Processing Time</span>
                  <span className="font-semibold text-blue-600">2-5 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Maximum File Size</span>
                  <span className="font-semibold text-purple-600">100MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Supported Formats</span>
                  <span className="font-semibold text-green-600">15+ formats</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Output Quality</span>
                  <span className="font-semibold text-orange-600">Up to 1080p</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-semibold text-red-600">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">User Satisfaction</span>
                  <span className="font-semibold text-indigo-600">4.9/5 ⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Video to GIF Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Who Needs Video to GIF Converter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our video to GIF converter serves diverse users across industries and creative fields
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Social Media Managers</h3>
              <p className="text-sm text-gray-600">
                Create engaging GIF content for Instagram stories, Twitter posts, Facebook campaigns, and TikTok teasers 
                that capture attention and drive engagement.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Content Creators</h3>
              <p className="text-sm text-gray-600">
                Transform video highlights into shareable GIFs for YouTube thumbnails, blog posts, newsletters, 
                and promotional content across all platforms.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Digital Marketers</h3>
              <p className="text-sm text-gray-600">
                Create product demos, testimonials, and promotional GIFs for email campaigns, landing pages, 
                and advertising that convert better than static images.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Web Developers</h3>
              <p className="text-sm text-gray-600">
                Generate lightweight GIF assets for websites, user interfaces, loading animations, 
                and interactive elements that enhance user experience.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileVideo className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Educators & Trainers</h3>
              <p className="text-sm text-gray-600">
                Create instructional GIFs for online courses, tutorials, step-by-step guides, 
                and educational content that explains concepts visually.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Meme Creators</h3>
              <p className="text-sm text-gray-600">
                Turn funny video moments into viral GIF memes for Reddit, Discord, Twitter, 
                and other platforms where animated content thrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              FAQ for Video to GIF Converter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about video to GIF conversion and our online converter tool
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white p-6 rounded-xl group shadow-sm">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                What video formats can I convert to GIF?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                Our video to GIF converter supports all popular video formats including MP4, MOV, AVI, WEBM, MKV, FLV, 
                3GP, and more. The tool automatically detects and processes your video format for optimal GIF conversion.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-xl group shadow-sm">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                Is there a limit on video length for GIF conversion?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                While there&apos;s no strict time limit, we recommend keeping videos under 30 seconds for optimal GIF quality 
                and file size. Longer videos will result in larger GIF files that may load slowly on websites and social media.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-xl group shadow-sm">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                How can I reduce the GIF file size?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                To reduce GIF file size, try: lowering the quality setting, reducing dimensions (width/height), 
                decreasing frame rate, or shortening the video clip. Our tool provides quality presets optimized 
                for different use cases like social media or web.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-xl group shadow-sm">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                Can I convert videos with sound to GIF?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                Yes, you can convert videos with sound to GIF, but the resulting GIF will not contain audio. 
                GIF format doesn&apos;t support sound - it&apos;s a visual-only format. The conversion process automatically 
                removes audio and creates a silent animated image.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-xl group shadow-sm">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                What&apos;s the best GIF quality for social media?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                For social media, we recommend medium quality settings with dimensions around 480-720px width. 
                This provides good visual quality while keeping file sizes under 2MB for fast loading and sharing 
                across platforms like Twitter, Instagram, and Facebook.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl group shadow-sm">
              <summary className="font-semibold cursor-pointer flex justify-between items-center">
                Is the video to GIF converter free to use?
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-gray-600">
                Yes, our video to GIF converter is completely free with no hidden costs, watermarks, or sign-up required. 
                You can convert unlimited videos to GIFs without any restrictions or premium features.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}