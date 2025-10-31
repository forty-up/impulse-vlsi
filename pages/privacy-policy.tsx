import React from 'react';
import Layout from '@/components/Layout';
import { Shield, Eye, Lock, Database, UserCheck, AlertCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <Layout
      title="Privacy Policy - Impulse VLSI"
      description="Privacy Policy for Impulse VLSI - Learn how we collect, use, and protect your personal information."
    >
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-primary-100">
                Last updated: {currentDate}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">

                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-gray-700 leading-relaxed">
                    At Impulse VLSI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <Database className="w-8 h-8 text-primary-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      Information We Collect
                    </h2>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-700 mb-4">
                      We may collect personal information that you provide to us, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Name and contact information (email address, phone number, mailing address)</li>
                      <li>Educational background and professional information</li>
                      <li>Resume/CV and portfolio materials</li>
                      <li>Course enrollment and payment information</li>
                      <li>Communication preferences and feedback</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-700 mb-4">
                      When you visit our website, we may automatically collect:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Operating system and platform information</li>
                    </ul>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <UserCheck className="w-8 h-8 text-primary-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      How We Use Your Information
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>To provide and maintain our services and courses</li>
                    <li>To process enrollments and payments</li>
                    <li>To communicate with you about courses, services, and updates</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To improve our website, services, and user experience</li>
                    <li>To send promotional materials and newsletters (with your consent)</li>
                    <li>To comply with legal obligations and protect our rights</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <Eye className="w-8 h-8 text-primary-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      Information Sharing and Disclosure
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website and providing services</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>With Your Consent:</strong> When you have given explicit consent to share your information</li>
                  </ul>
                </div>

                {/* Data Security */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <Lock className="w-8 h-8 text-primary-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      Data Security
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Your Rights and Choices
                  </h2>
                  <p className="text-gray-700 mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
                  </ul>
                </div>

                {/* Cookies */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="text-gray-700">
                    We use cookies and similar tracking technologies to enhance your experience on our website. For more information about our use of cookies, please see our <a href="/cookie-policy" className="text-primary-600 hover:text-primary-700 underline">Cookie Policy</a>.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Children's Privacy
                  </h2>
                  <p className="text-gray-700">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>

                {/* Contact */}
                <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                        Contact Us
                      </h2>
                      <p className="text-gray-700 mb-4">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Email:</strong> <a href="mailto:admin@impulse-vlsi.com" className="text-primary-600 hover:text-primary-700">admin@impulse-vlsi.com</a></li>
                        <li><strong>Phone:</strong> <a href="tel:+918147018156" className="text-primary-600 hover:text-primary-700">+91-8147018156</a></li>
                        <li><strong>Address:</strong> Nirmala store, Bus stop, 50 Feet Main Rd, 2nd Block, Hanumanthnagar, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560050, India</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
