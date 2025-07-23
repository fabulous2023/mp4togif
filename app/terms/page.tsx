import type { Metadata } from 'next';
import { gameConfig } from '@/config/game.config';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/MobileNav';
import { FileText, GamepadIcon } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: `Terms of Service | ${gameConfig.site.name}`,
  description: `Terms of Service for ${gameConfig.site.name} - Learn about the terms and conditions for using our free online soccer game.`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header showFullNavigation={true} />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-apple-blue/5 to-apple-purple/5">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-apple-blue/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-apple-blue" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-apple-gray-900">Terms of Service</h1>
            </div>
            <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our service.
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
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">2. User Responsibilities</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>Users are responsible for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Using the service in accordance with applicable laws</li>
                      <li>Respecting other users and maintaining appropriate conduct</li>
                      <li>Not attempting to disrupt or damage the service</li>
                      <li>Providing accurate information when required</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">3. Service Availability</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>We strive to maintain service availability but cannot guarantee uninterrupted access. The service may be temporarily unavailable due to maintenance, updates, or technical issues.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">4. Intellectual Property</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>All content, trademarks, and intellectual property on this website are owned by {gameConfig.site.name} or our licensors and are protected by applicable laws.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">5. Limitation of Liability</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>We provide this service "as is" and disclaim all warranties. We shall not be liable for any damages arising from the use of this service.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">6. Privacy</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>Your privacy is important to us. Please review our <Link href="/privacy" className="text-apple-blue hover:underline">Privacy Policy</Link> to understand how we collect and use information.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">7. Modifications</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">8. Termination</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>We may terminate or suspend access to our service immediately, without prior notice, for any reason whatsoever.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">9. Governing Law</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-apple-gray-900 mb-4">10. Contact Information</h2>
                  <div className="space-y-4 text-apple-gray-700">
                    <p>If you have any questions about these Terms of Service, please contact us through our website.</p>
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
