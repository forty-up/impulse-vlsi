import React from 'react';
import Layout from '@/components/Layout';
import { Cookie, Settings, BarChart, Shield, Info, Trash2 } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <Layout
      title="Cookie Policy - Impulse VLSI"
      description="Cookie Policy for Impulse VLSI - Learn about how we use cookies and similar technologies on our website."
    >
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <Cookie className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Cookie Policy
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
                    This Cookie Policy explains how Impulse VLSI uses cookies and similar technologies when you visit our website. It explains what these technologies are, why we use them, and your rights to control their use.
                  </p>
                </div>

                {/* What Are Cookies */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <Info className="w-8 h-8 text-primary-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      What Are Cookies?
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700">
                      Cookies can be "session cookies" (temporary cookies that expire when you close your browser) or "persistent cookies" (cookies that remain on your device for a longer period or until you delete them).
                    </p>
                  </div>
                </div>

                {/* Types of Cookies */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    Types of Cookies We Use
                  </h2>

                  {/* Essential Cookies */}
                  <div className="mb-6 bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                    <div className="flex items-center mb-3">
                      <Shield className="w-6 h-6 text-green-700 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900 m-0">Essential Cookies</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submission.
                    </p>
                    <p className="text-gray-700 font-semibold">Examples:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                      <li>Authentication cookies to keep you logged in</li>
                      <li>Security cookies to protect against fraud</li>
                      <li>Session management cookies</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-3 italic">
                      These cookies cannot be disabled as they are essential for the website to function.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="mb-6 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <div className="flex items-center mb-3">
                      <BarChart className="w-6 h-6 text-blue-700 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900 m-0">Analytics and Performance Cookies</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website and user experience.
                    </p>
                    <p className="text-gray-700 font-semibold">Examples:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                      <li>Google Analytics cookies to analyze website traffic</li>
                      <li>Page view tracking</li>
                      <li>User behavior analytics</li>
                      <li>Error tracking and reporting</li>
                    </ul>
                  </div>

                  {/* Functional Cookies */}
                  <div className="mb-6 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                    <div className="flex items-center mb-3">
                      <Settings className="w-6 h-6 text-purple-700 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900 m-0">Functional Cookies</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we use on our website.
                    </p>
                    <p className="text-gray-700 font-semibold">Examples:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                      <li>Language and region preferences</li>
                      <li>User interface customization</li>
                      <li>Video player settings</li>
                      <li>Chat service preferences</li>
                    </ul>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="mb-6 bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                    <div className="flex items-center mb-3">
                      <Cookie className="w-6 h-6 text-amber-700 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900 m-0">Marketing and Advertising Cookies</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                      These cookies are used to track visitors across websites to display relevant advertisements. They may be set by our advertising partners and social media platforms.
                    </p>
                    <p className="text-gray-700 font-semibold">Examples:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                      <li>Targeted advertising cookies</li>
                      <li>Social media integration cookies</li>
                      <li>Conversion tracking pixels</li>
                      <li>Retargeting cookies</li>
                    </ul>
                  </div>
                </div>

                {/* Third-Party Cookies */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Third-Party Cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    In addition to our own cookies, we may use various third-party services that set cookies on our website:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                    <li><strong>Social Media Platforms:</strong> For social sharing features (Facebook, LinkedIn, Instagram, YouTube)</li>
                    <li><strong>Payment Processors:</strong> For secure payment processing</li>
                    <li><strong>Communication Tools:</strong> For contact forms and chat services</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    These third parties have their own privacy and cookie policies, and we have no control over how they use their cookies.
                  </p>
                </div>

                {/* Managing Cookies */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <Settings className="w-8 h-8 text-primary-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      How to Manage Cookies
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
                      <p className="text-gray-700 mb-3">
                        Most web browsers allow you to control cookies through their settings. You can set your browser to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Block all cookies</li>
                        <li>Block third-party cookies only</li>
                        <li>Delete cookies when you close your browser</li>
                        <li>Receive a notification before a cookie is stored</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser-Specific Instructions</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                        <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600 mt-6">
                    <p className="text-gray-900 font-semibold mb-2">Important Note:</p>
                    <p className="text-gray-700">
                      If you disable or delete cookies, some features of our website may not function properly, and you may not be able to access certain areas or features.
                    </p>
                  </div>
                </div>

                {/* Deleting Cookies */}
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <Trash2 className="w-8 h-8 text-red-600 mr-3" />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 m-0">
                      How to Delete Cookies
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    You can delete cookies already stored on your device at any time through your browser settings. However, deleting cookies may affect your ability to use certain features of our website.
                  </p>
                  <p className="text-gray-700">
                    For more detailed information about managing cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">www.allaboutcookies.org</a>
                  </p>
                </div>

                {/* Do Not Track */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Do Not Track Signals
                  </h2>
                  <p className="text-gray-700">
                    Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted, and our website does not respond to DNT signals at this time.
                  </p>
                </div>

                {/* Other Tracking Technologies */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Other Tracking Technologies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    In addition to cookies, we may use other tracking technologies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Web Beacons:</strong> Small graphic images embedded in web pages or emails to track page views and email opens</li>
                    <li><strong>Pixel Tags:</strong> Invisible tags used to track user actions and conversions</li>
                    <li><strong>Local Storage:</strong> Browser storage technologies that allow data to be stored locally on your device</li>
                    <li><strong>Session Storage:</strong> Temporary storage that is cleared when you close your browser</li>
                  </ul>
                </div>

                {/* Updates to Policy */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Updates to This Cookie Policy
                  </h2>
                  <p className="text-gray-700">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about how we use cookies.
                  </p>
                </div>

                {/* More Information */}
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    More Information
                  </h2>
                  <p className="text-gray-700">
                    For more information about how we handle your personal data, please see our <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</a>.
                  </p>
                </div>

                {/* Contact */}
                <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Contact Us
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy;
