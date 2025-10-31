import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Headphones,
  Send,
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our advisors',
      value: '+91-8147018156',
      action: 'tel:+918147018156',
      availability: 'Mon-Fri, 9 AM - 6 PM',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your queries anytime',
      value: 'admin@impulse-vlsi.com',
      action: 'mailto:admin@impulse-vlsi.com',
      availability: '24/7 Response',
    },
    // {
    //   icon: MessageCircle,
    //   title: 'Chat Support',
    //   description: 'Get instant assistance',
    //   value: 'Live Chat',
    //   action: '#',
    //   availability: 'Mon-Fri, 9 AM - 6 PM',
    // },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const faqs = [
    {
      question: 'How can I enroll in a course?',
      answer: 'You can enroll by filling out the contact form, calling us, or visiting our center. Our advisors will guide you through the process.',
    },
    {
      question: 'Do you offer flexible schedules?',
      answer: 'Yes, we offer weekday, weekend, and online batches to accommodate different schedules.',
    },
    {
      question: 'What are the payment options?',
      answer: 'We accept cash, bank transfers, UPI, and installment payments. Contact us for detailed payment plans.',
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we have a dedicated placement cell that provides job assistance, interview preparation, and career guidance.',
    },
  ];

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Impulse-VLSI for courses, services, and career guidance. Call +91-8147018156 or email admin@impulse-vlsi.com"
      canonical="/contact"
    >
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="relative py-20 md:py-24 lg:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #7c2d12 0%, #f97316 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-circuit-pattern bg-repeat"></div>
        </div>

        <div className="relative z-10 container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 text-shadow-lg">
              Get In <span className="text-accent-500">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto">
              Ready to start your VLSI journey? We're here to help you every step of the way
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 sm:p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <a
                  href={method.action}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary-500 transition-colors duration-300 cursor-pointer"
                >
                  <method.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-900 group-hover:text-white transition-colors duration-300" />
                </a>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-2 sm:mb-3">
                  {method.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{method.description}</p>

                <a
                  href={method.action}
                  className="text-base sm:text-lg font-semibold text-primary-900 hover:text-primary-700 transition-colors duration-300 block mb-2 break-all"
                >
                  {method.value}
                </a>

                <p className="text-xs sm:text-sm text-gray-500">{method.availability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section ref={contactRef} className="section-padding bg-gray-50">
        <div className="container-max px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Office Information */}
              <div className="card p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">
                  Office Information
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Address</h4>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                        Nirmala store, Bus stop,<br />
                        50 Feet Main Rd, 2nd Block,<br />
                        Hanumanthnagar, Banashankari 1st Stage,<br />
                        Banashankari, Bengaluru,<br />
                        Karnataka 560050, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Phone</h4>
                      <a
                        href="tel:+918147018156"
                        className="text-gray-600 hover:text-primary-900 transition-colors text-sm sm:text-base"
                      >
                        +91-8147018156
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                      <a
                        href="mailto:admin@impulse-vlsi.com"
                        className="text-gray-600 hover:text-primary-900 transition-colors text-sm sm:text-base break-all"
                      >
                        admin@impulse-vlsi.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="card p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">
                  Office Hours
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{schedule.day}</span>
                      <span className="text-gray-600 text-sm sm:text-base">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary-50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mr-2" />
                    <span className="text-primary-900 font-medium text-sm sm:text-base">Quick Response</span>
                  </div>
                  <p className="text-primary-700 text-xs sm:text-sm mt-1">
                    We respond to all inquiries within 2 hours during business hours.
                  </p>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="card p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">
                  Quick FAQs
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 sm:pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{faq.question}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6">
                  <a
                    href="/"
                    className="text-primary-900 hover:text-primary-700 font-medium text-xs sm:text-sm flex items-center group"
                  >
                    View all FAQs
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;