import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import FeedbackForm from '@/components/FeedbackForm';
import { MessageCircle, Star, TrendingUp, Users } from 'lucide-react';

const FeedbackPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Share Your Feedback | Impulse-VLSI</title>
        <meta
          name="description"
          content="Share your feedback and help us improve our VLSI training programs, courses, and services. Your insights are valuable to us."
        />
        <meta
          name="keywords"
          content="feedback, VLSI training feedback, course review, student feedback, Impulse-VLSI reviews"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              We Value Your Feedback
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Your experience matters to us. Help us improve our services by sharing your honest feedback
              about our courses, training programs, and support.
            </p>
          </div>
        </div>
      </section>

      {/* Why Feedback Matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Why Your Feedback Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every piece of feedback helps us create better learning experiences for you and future students.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Continuous Improvement
                </h3>
                <p className="text-gray-600">
                  Your insights help us identify areas for enhancement and innovate our teaching methods to better serve you.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  We maintain high standards by regularly reviewing feedback and implementing changes to improve course quality.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Community Growth
                </h3>
                <p className="text-gray-600">
                  Your feedback shapes the future of our programs and helps us build a stronger learning community for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FeedbackForm />
          </div>
        </div>
      </section>

      {/* What We Do With Feedback Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
              How We Use Your Feedback
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Review & Analysis</h3>
                  <p className="text-gray-600">
                    Our team carefully reviews every piece of feedback to identify patterns, trends, and actionable insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Action Planning</h3>
                  <p className="text-gray-600">
                    We prioritize improvements based on feedback impact and feasibility, creating detailed action plans for implementation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-gray-600">
                    Changes are implemented in our courses, materials, and processes to address your concerns and suggestions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Follow-Up</h3>
                  <p className="text-gray-600">
                    We monitor the impact of changes and may reach out to gather additional feedback on implemented improvements.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-900 text-white rounded-xl text-center">
              <p className="text-lg">
                <strong>Your privacy is important to us.</strong> All feedback is kept confidential and used solely for
                improving our services. We never share individual feedback publicly without explicit permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Prefer a more direct conversation? We're always here to listen.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="text-primary-900 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+918147018156" className="text-primary-900 font-semibold text-lg hover:underline">
                  +91 8147018156
                </a>
                <p className="text-gray-600 mt-2">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="text-primary-900 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:admin@impulse-vlsi.com" className="text-primary-900 font-semibold text-lg hover:underline">
                  admin@impulse-vlsi.com
                </a>
                <p className="text-gray-600 mt-2">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeedbackPage;
