import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { FileText, Shield } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | MP4 to GIF - Free Video to GIF Converter',
  description: 'Terms of Service for MP4 to GIF - Read our terms and conditions for using our free online video to GIF conversion service.',
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
      <section className="py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Service</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our MP4 to GIF conversion service.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  <strong>Last Updated:</strong> July 22, 2025
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      By accessing and using MP4 to GIF (the &quot;Service&quot;), you accept and agree to be bound by these 
                      Terms of Service. These terms apply to all visitors, users, and others who access or use our 
                      free video to GIF conversion service.
                    </p>
                    <p>
                      If you disagree with any part of the terms, you may not access the Service. By using MP4 to GIF, 
                      you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      MP4 to GIF provides a free online tool for converting video files into animated GIF format. 
                      Our service allows users to upload video files and convert them to GIF format without requiring 
                      registration or payment.
                    </p>
                    <p>
                      The service is provided &quot;as-is&quot; and we make no guarantees regarding uptime, conversion quality, 
                      or availability. We reserve the right to modify or discontinue the service at any time without notice.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>By using MP4 to GIF, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Use the service only for lawful purposes</li>
                      <li>Not upload any content that violates copyright or intellectual property rights</li>
                      <li>Not use the service to create or distribute harmful, offensive, or illegal content</li>
                      <li>Not attempt to interfere with or disrupt the service</li>
                      <li>Not attempt to reverse engineer or access the service&apos;s underlying systems</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Users retain all rights to their uploaded content. We do not claim ownership of any files 
                      you upload to our service for conversion.
                    </p>
                    <p>
                      The MP4 to GIF service, including all software, algorithms, and website content, is owned by 
                      us and is protected by applicable intellectual property laws. You may not reproduce, distribute, 
                      or create derivative works from any part of our service without explicit permission.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">5. User Content Guidelines</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>You are responsible for all content you upload to our service. By uploading content, you represent and warrant that:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You have the legal right to use and convert the content</li>
                      <li>The content does not infringe any third-party rights</li>
                      <li>The content is not defamatory, obscene, or otherwise unlawful</li>
                      <li>The content does not contain viruses or malicious code</li>
                    </ul>
                    <p>We reserve the right to refuse conversion of any content that violates these guidelines.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">6. Service Limitations</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Our service has the following limitations:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Maximum file size: 100MB per upload</li>
                      <li>Supported formats: MP4, MOV, AVI, WebM, and other common video formats</li>
                      <li>Maximum duration: 60 seconds (longer videos may be truncated)</li>
                      <li>Output resolution: Up to 1080p depending on source quality</li>
                    </ul>
                    <p>We reserve the right to modify these limitations at any time without notice.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      The MP4 to GIF service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no 
                      warranties, express or implied, including but not limited to warranties of merchantability, 
                      fitness for a particular purpose, and non-infringement.
                    </p>
                    <p>
                      We do not warrant that the service will be uninterrupted, timely, secure, or error-free, 
                      nor do we make any warranty as to the results that may be obtained from use of the service.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      To the fullest extent permitted by law, MP4 to GIF shall not be liable for any indirect, 
                      incidental, special, consequential, or punitive damages, including without limitation, 
                      loss of profits, data, use, or goodwill.
                    </p>
                    <p>
                      Our total liability for any claim arising from or related to the service shall not exceed 
                      $100 USD or the amount you paid us in the past 12 months, whichever is greater.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">9. Privacy Policy</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Your privacy is important to us. Please review our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> 
                      to understand how we collect, use, and protect your information. By using our service, 
                      you consent to our privacy practices.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">10. Modifications to Service</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We reserve the right to modify, suspend, or discontinue the service at any time without 
                      notice. We are not liable to you or any third party for any modification, suspension, 
                      or discontinuation of the service.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">11. Modifications to Terms</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We reserve the right to modify these Terms of Service at any time. Changes will be 
                      effective immediately upon posting on this page. Your continued use of the service 
                      after any such changes constitutes your acceptance of the new terms.
                    </p>
                    <p>
                      It is your responsibility to review these terms periodically for any changes.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">12. Termination</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We may terminate or suspend your access to the service immediately, without prior 
                      notice or liability, for any reason whatsoever, including without limitation if you 
                      breach these Terms of Service.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      These Terms of Service shall be governed by and construed in accordance with the laws 
                      of the United States, without regard to its conflict of law provisions.
                    </p>
                    <p>
                      Any disputes arising from these terms shall be subject to the exclusive jurisdiction 
                      of the courts located in the United States.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      If you have any questions about these Terms of Service, please contact us through our website.
                    </p>
                    <p>
                      By using MP4 to GIF, you acknowledge that you have read, understood, and agree to be bound 
                      by these Terms of Service.
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