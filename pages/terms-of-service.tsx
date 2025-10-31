import React from 'react';
import Layout from '@/components/Layout';
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, UserX } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <Layout
      title="Terms of Service - Impulse VLSI"
      description="Terms of Service for Impulse VLSI - Read our terms and conditions for using our services and courses."
    >
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Terms of Service
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
                    Welcome to Impulse VLSI. These Terms of Service ("Terms") govern your access to and use of our website, services, and courses. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      Acceptance of Terms
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    By registering for our courses, accessing our website, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all users, including students, visitors, and other individuals who access or use our services.
                  </p>
                </div>

                {/* Services Description */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Description of Services
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Impulse VLSI provides VLSI design training, courses, and related educational services, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Online and offline VLSI training courses</li>
                    <li>Industrial training and consulting services</li>
                    <li>Academic and student support services</li>
                    <li>Placement assistance and career guidance</li>
                    <li>Technical resources and learning materials</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                  </p>
                </div>

                {/* Registration and Accounts */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Registration and User Accounts
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      To access certain features of our services, you may need to register and create an account. You agree to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Provide accurate, current, and complete information during registration</li>
                      <li>Maintain and update your information to keep it accurate and current</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Notify us immediately of any unauthorized access to your account</li>
                      <li>Accept responsibility for all activities under your account</li>
                    </ul>
                  </div>
                </div>

                {/* Course Enrollment and Payment */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Course Enrollment and Payment
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Enrollment</h3>
                      <p className="text-gray-700">
                        Course enrollment is subject to availability. We reserve the right to cancel or reschedule courses, in which case enrolled students will be notified and offered alternative options or a full refund.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Terms</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>All course fees must be paid in full before the course start date unless otherwise agreed</li>
                        <li>Payment can be made through approved payment methods</li>
                        <li>All fees are in Indian Rupees (INR) unless stated otherwise</li>
                        <li>Late payment may result in suspension of access to course materials</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Policy</h3>
                      <p className="text-gray-700 mb-3">
                        Refund requests must be submitted in writing and are subject to the following conditions:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Requests made 7+ days before course start: 100% refund (minus processing fee)</li>
                        <li>Requests made 3-6 days before course start: 50% refund</li>
                        <li>Requests made less than 3 days before or after course start: No refund</li>
                        <li>Course cancellation by Impulse VLSI: Full refund or course transfer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <Scale className="w-8 h-8 text-primary-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      Intellectual Property Rights
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    All content, materials, and resources provided through our services, including but not limited to course materials, videos, documents, code, designs, logos, and trademarks, are the intellectual property of Impulse VLSI or its licensors.
                  </p>
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                    <p className="text-gray-900 font-semibold mb-2">You may NOT:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Copy, reproduce, or distribute course materials without permission</li>
                      <li>Share your account credentials or course access with others</li>
                      <li>Record, screenshot, or capture course content for redistribution</li>
                      <li>Use our materials for commercial purposes without authorization</li>
                      <li>Remove or modify any copyright or proprietary notices</li>
                    </ul>
                  </div>
                </div>

                {/* User Conduct */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <UserX className="w-8 h-8 text-primary-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      User Conduct and Prohibited Activities
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    You agree not to engage in any of the following prohibited activities:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Violating any applicable laws or regulations</li>
                    <li>Infringing on intellectual property rights</li>
                    <li>Transmitting harmful or malicious code</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Harassing, threatening, or intimidating other users or staff</li>
                    <li>Posting false, misleading, or defamatory content</li>
                    <li>Interfering with the proper functioning of our services</li>
                    <li>Using our services for any fraudulent or unlawful purpose</li>
                  </ul>
                </div>

                {/* Disclaimers */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-amber-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      Disclaimers and Limitation of Liability
                    </h2>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      <strong>Disclaimer of Warranties:</strong> Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or secure.
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>No Guarantee of Employment:</strong> While we provide placement assistance, we do not guarantee employment or job placement outcomes.
                    </p>
                    <p className="text-gray-700">
                      <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, Impulse VLSI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
                    </p>
                  </div>
                </div>

                {/* Termination */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <XCircle className="w-8 h-8 text-red-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      Termination
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    We reserve the right to suspend or terminate your access to our services at any time, with or without notice, for any reason, including violation of these Terms. Upon termination, your right to use our services will immediately cease, and we may delete your account and data.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Governing Law and Dispute Resolution
                  </h2>
                  <p className="text-gray-700">
                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
                  </p>
                </div>

                {/* Changes to Terms */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Changes to These Terms
                  </h2>
                  <p className="text-gray-700">
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
                  </p>
                </div>

                {/* Contact */}
                <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
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
        </section>
      </div>
    </Layout>
  );
};

export default TermsOfService;
