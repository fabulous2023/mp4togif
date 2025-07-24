import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import {
  Users,
  Zap,
  Shield,
  Globe,
  Heart,
  Star,
  Target,
  Settings,
  Play,
  Clock,
  Sparkles,
  FileVideo
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About MP4 to GIF - Free Online Video to GIF Converter',
  description: 'Learn about MP4 to GIF, the fastest and easiest way to convert videos to animated GIFs. Discover our mission, features, and commitment to providing free, high-quality GIF conversion tools.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header showFullNavigation={true} />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About MP4 to GIF</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Making GIF creation simple, fast, and accessible for everyone
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-12 bg-white">
        <div className="container-custom max-w-6xl">
          
          {/* What is MP4 to GIF */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">What is MP4 to GIF?</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  MP4 to GIF is the fastest, most reliable way to convert your video files into high-quality animated GIFs. 
                  Whether you&apos;re creating memes, tutorials, product demos, or social media content, our tool delivers 
                  professional results without the complexity of traditional video editing software.
                </p>
                <p>
                  Founded with a simple mission - to make GIF creation accessible to everyone - we&apos;ve built a platform 
                  that combines speed, quality, and simplicity. No downloads, no sign-ups, no watermarks. Just pure, 
                  hassle-free GIF conversion that works in seconds.
                </p>
                <p>
                  Our advanced processing engine optimizes every GIF for web sharing while maintaining crisp visual quality. 
                  From quick social media clips to detailed product demonstrations, MP4 to GIF handles it all with ease.
                </p>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  We believe creating animated GIFs shouldn&apos;t require expensive software or technical expertise. 
                  Our mission is to democratize GIF creation by providing a free, fast, and user-friendly tool 
                  that anyone can use - from casual social media users to professional marketers.
                </p>
                <p>
                  Every feature we build is designed with one goal in mind: making your content creation workflow 
                  faster and more efficient. We&apos;re constantly improving our technology to ensure you get the 
                  best possible GIF quality while maintaining the simplicity you expect.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Core Values</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    User-First Design
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <span><strong>Simplicity:</strong> Clean, intuitive interface that anyone can use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <span><strong>Accessibility:</strong> No account creation or personal information required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <span><strong>Inclusivity:</strong> Works on all devices and browsers</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-600" />
                    Quality & Performance
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                      <span><strong>Speed:</strong> Lightning-fast processing without compromising quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                      <span><strong>Optimization:</strong> Perfect balance between file size and visual quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                      <span><strong>Reliability:</strong> Consistent results across all file types and sizes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technology & Innovation */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Technology & Innovation</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Advanced Processing</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Our proprietary processing engine uses advanced algorithms to optimize GIF quality 
                      while minimizing file size. Every conversion is optimized for web sharing across 
                      different platforms and devices.
                    </p>
                    <p>
                      We support all major video formats and automatically handle format conversion, 
                      ensuring compatibility regardless of your source file type.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Browser-Based Processing</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Unlike traditional tools, our converter runs entirely in your browser using 
                      modern web technologies. This means faster processing, better privacy, and 
                      no need to upload large files to external servers.
                    </p>
                    <p>
                      The result is a seamless experience that works instantly across all devices - 
                      desktop, tablet, and mobile - with the same high-quality output.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Help */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Who We Help</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-2 text-gray-900">Content Creators</h3>
                  <p className="text-sm text-gray-600">
                    YouTubers, streamers, and social media influencers who need quick GIF creation 
                    for thumbnails, highlights, and promotional content.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-2 text-gray-900">Marketing Teams</h3>
                  <p className="text-sm text-gray-600">
                    Professional marketers creating engaging visual content for campaigns, 
                    email marketing, and social media strategies.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-2 text-gray-900">Educators & Trainers</h3>
                  <p className="text-sm text-gray-600">
                    Teachers and corporate trainers who need instructional GIFs for tutorials, 
                    documentation, and online learning materials.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Promise */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Our Promise to You</h2>
                <p className="text-lg mb-6 opacity-90">
                  We&apos;re committed to keeping MP4 to GIF free forever. No paywalls, no premium features, 
                  no hidden costs. Just reliable, high-quality GIF conversion whenever you need it.
                </p>
                <div className="flex justify-center gap-8 text-sm opacity-80">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div>Free Forever</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div>Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">∞</div>
                    <div>Unlimited Use</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Support */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Join Our Community</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  MP4 to GIF is more than just a tool - it&apos;s a community of creators sharing knowledge 
                  and helping each other create amazing content. We regularly update our platform 
                  based on user feedback and emerging needs.
                </p>
                <p>
                  Have suggestions or questions? We&apos;re here to help make your GIF creation experience 
                  even better. Your feedback drives our innovation and improvements.
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <Link href="/">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Play className="h-5 w-5 mr-2" />
                    Start Converting Now
                  </Button>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}