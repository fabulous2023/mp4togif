import type { Metadata } from 'next';
import { gameConfig } from '@/config/game.config';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/MobileNav';
import { Shield, Eye, Lock, UserCheck, GamepadIcon } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: `Privacy Policy | ${gameConfig.site.name}`,
  description: `Privacy Policy for ${gameConfig.site.name} - Learn how we protect your data and privacy while you enjoy our free online soccer game.`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header showFullNavigation={true} />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-apple-blue/5 to-apple-purple/5">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-apple-blue/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-apple-blue" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-apple-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
              Your privacy matters to us. Learn about our commitment to protecting your data while you enjoy Unmatched Ego.
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
                  <strong>Updated on:</strong> 2025-07-22
                </p>
                <p className="text-apple-gray-700 leading-relaxed">
                  This Privacy Policy describes how we collect and use your information.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">Information We Collect</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>We collect information that you provide directly to us:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Account information</li>
                      <li>Usage data</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">How We Use Your Information</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide our services</li>
                      <li>Improve user experience</li>
                      <li>Send important updates</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">Data Security</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>We implement appropriate security measures to protect your data.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">Contact Information</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>For privacy-related questions, please reach out to our team.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">Updates to This Policy</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>We may update this policy from time to time. Please review it periodically.</p>
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
