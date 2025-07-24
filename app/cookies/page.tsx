import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/MobileNav';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy | MP4 to GIF Converter',
  description: 'Cookie Policy for MP4 to GIF - Learn about our minimal cookie usage for essential website functionality.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Header showFullNavigation={true} />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-apple-orange/10 flex items-center justify-center">
                <Cookie className="h-6 w-6 text-apple-orange" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-apple-gray-900">Cookie Policy</h1>
            </div>
            <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
              Learn about our minimal cookie usage and commitment to your privacy while enjoying Unmatched Ego.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-12 bg-gradient-to-br from-apple-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-apple-gray-200">
              <div className="mb-8">
                <p className="text-apple-gray-600 mb-4">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-apple-gray-700 leading-relaxed">
                  This Cookie Policy explains how MP4 to GIF uses cookies and similar 
                  technologies. We believe in transparency and minimal data collection to protect your privacy.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Cookie className="h-6 w-6 text-apple-orange" />
                    <h2 className="text-xl font-bold text-apple-gray-900">What Are Cookies</h2>
                  </div>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>
                      Cookies are small text files stored on your device when you visit a website. 
                      They help websites remember your preferences and improve your browsing experience.
                    </p>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="h-6 w-6 text-apple-blue" />
                    <h2 className="text-xl font-bold text-apple-gray-900">Cookies We Use</h2>
                  </div>
                  <div className="space-y-4 text-apple-gray-700">
                    <p className="font-semibold text-apple-green-600">
                      We use only essential cookies for basic website functionality.
                    </p>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-apple-gray-50 border border-apple-gray-200">
                        <h3 className="font-semibold text-apple-gray-900 mb-2">Essential Cookies</h3>
                        <p>These cookies are necessary for the website to function properly:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                          <li>Session management for website functionality</li>
                          <li>Security features to prevent abuse</li>
                          <li>Basic website preferences</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart className="h-6 w-6 text-apple-red" />
                    <h2 className="text-xl font-bold text-apple-gray-900">Cookies We DON&apos;T Use</h2>
                  </div>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>We do NOT use the following types of cookies:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Advertising Cookies:</strong> No ad tracking or behavioral targeting</li>
                      <li><strong>Third-Party Tracking:</strong> No external tracking scripts or pixels</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-apple-green" />
                    <h2 className="text-xl font-bold text-apple-gray-900">Managing Cookies</h2>
                  </div>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>You can control cookies through your browser settings:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Block all cookies (may affect website functionality)</li>
                      <li>Delete existing cookies</li>
                      <li>Set preferences for future cookies</li>
                      <li>Receive notifications when cookies are set</li>
                    </ul>
                    <p>
                      Since we only use essential cookies, disabling them may affect basic website functionality 
                      but will not impact your privacy as we don&apos;t track or analyze your behavior.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">Contact Us</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>
                      If you have any questions about our cookie usage, please contact us at: 
                      <strong> cookies@unmatchedego.org</strong>
                    </p>
                    <p>
                      We are committed to transparency and will respond to any inquiries about our cookie practices.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
