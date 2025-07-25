import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Lock, UserCheck, Globe, Clock } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | MP4 to GIF - Free Video to GIF Converter',
  description: 'Privacy Policy for MP4 to GIF - Learn how we protect your data and privacy while using our free online video to GIF conversion service.',
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
      <section className="py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is our priority. Learn how we protect your data while using our free MP4 to GIF conversion service.
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
                <p className="text-gray-700 leading-relaxed">
                  At MP4 to GIF, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our free video to GIF conversion service.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    1. Information We Do NOT Collect
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Personal Information:</strong> We do not collect any personally identifiable information such as names, email addresses, phone numbers, or physical addresses.</p>
                    <p><strong>Account Creation:</strong> No registration or account creation is required to use our service.</p>
                    <p><strong>Payment Information:</strong> We do not collect any payment information as our service is completely free.</p>
                    <p><strong>Persistent Identifiers:</strong> We do not use cookies, local storage, or other tracking technologies to identify users across sessions.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-purple-600" />
                    2. How We Handle Your Files
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Temporary Processing:</strong> Your video files are processed temporarily in your browser&apos;s memory for conversion purposes only.</p>
                    <p><strong>No Upload Storage:</strong> We do not upload, store, or retain your files on our servers. All processing happens locally in your browser.</p>
                    <p><strong>Automatic Deletion:</strong> Files are automatically deleted from browser memory immediately after conversion is complete.</p>
                    <p><strong>No Third-Party Sharing:</strong> We never share your files with any third parties, advertisers, or analytics services.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    3. Technical Information
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Browser Processing:</strong> All video processing occurs entirely within your web browser using client-side JavaScript and Web APIs.</p>
                    <p><strong>No Server Uploads:</strong> Your files never leave your device or browser environment during the conversion process.</p>
                    <p><strong>Local Storage:</strong> We do not use browser local storage, session storage, or cookies to retain any information about your usage.</p>
                    <p><strong>Analytics:</strong> We do not use third-party analytics services or tracking scripts.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-orange-600" />
                    4. Your Rights
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Data Ownership:</strong> You retain full ownership of all files you process using our service.</p>
                    <p><strong>No Data Retention:</strong> Since we don&apos;t collect or store any information about you, there&apos;s nothing for us to delete or provide access to.</p>
                    <p><strong>Control:</strong> You have complete control over your files and can cancel any conversion at any time by simply closing your browser or navigating away.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-red-600" />
                    5. Data Retention Policy
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Immediate Deletion:</strong> All files and processing data are deleted from browser memory immediately upon completion of conversion or when you close the browser tab.</p>
                    <p><strong>No Logs:</strong> We do not maintain logs of file processing activities, user interactions, or conversion history.</p>
                    <p><strong>No Backups:</strong> We do not create or maintain backups of any files processed through our service.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-indigo-600" />
                    6. Security Measures
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Browser Security:</strong> We use HTTPS encryption to ensure secure communication between your browser and our website.</p>
                    <p><strong>Client-Side Processing:</strong> By keeping all processing client-side, we eliminate the risk of server-side data breaches.</p>
                    <p><strong>No External Dependencies:</strong> We minimize external script dependencies to reduce potential security vulnerabilities.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">7. Third-Party Services
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>No Third-Party Integration:</strong> We do not integrate with any third-party services, social media platforms, or external APIs that could access your data.</p>
                    <p><strong>No Advertising Networks:</strong> We do not use advertising networks or behavioral tracking services.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Our service is designed to be used by individuals of all ages. Since we don&apos;t collect any personal information, 
                    our service is safe for children to use under parental supervision.</p>
                    <p>We encourage parents and guardians to monitor their children&apos;s online activities and to contact us if they have 
                    any questions about our privacy practices.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
                    legal, or regulatory reasons. Any changes will be posted on this page with an updated effective date.</p>
                    <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your privacy.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contact Information
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us through our website.</p>
                    <p>By using MP4 to GIF, you acknowledge that you have read and understood this Privacy Policy.</p>
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