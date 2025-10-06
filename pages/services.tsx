import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/Layout';
import {
  Building2,
  Users,
  GraduationCap,
  BookOpen,
  Code,
  Lightbulb,
  Award,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  Briefcase,
  Search,
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'industrial' | 'academic'>('industrial');
  const [searchQuery, setSearchQuery] = useState('');
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const industrialServices = [
    {
      icon: Building2,
      title: 'Consultancy',
      description: 'Expert technical consultancy for semiconductor design projects, process optimization, and technology implementation.',
      features: [
        'Design methodology consulting',
        'Process optimization',
        'Technology roadmap planning',
        'Quality assurance',
        'Project management',
      ],
      benefits: [
        'Reduce development time',
        'Improve design efficiency',
        'Access to expert knowledge',
        'Cost-effective solutions',
      ],
    },
    {
      icon: Users,
      title: 'Full Time Hiring',
      description: 'Comprehensive recruitment solutions for semiconductor companies looking for skilled VLSI professionals.',
      features: [
        'Talent sourcing',
        'Technical screening',
        'Interview coordination',
        'Background verification',
        'Onboarding support',
      ],
      benefits: [
        'Access to qualified candidates',
        'Reduced hiring time',
        'Technical expertise validation',
        'Streamlined process',
      ],
    },
    {
      icon: Users,
      title: 'Co-Hiring',
      description: 'Collaborative hiring solutions where we provide trained professionals to work on your projects.',
      features: [
        'Skilled resource allocation',
        'Project-based engagement',
        'Flexible team scaling',
        'Quality assurance',
        'Ongoing support',
      ],
      benefits: [
        'Flexible workforce',
        'Reduced overhead costs',
        'Immediate availability',
        'Proven expertise',
      ],
    },
  ];

  const academicServices = [
    {
      icon: GraduationCap,
      title: 'Faculty Development Program',
      description: 'Comprehensive training programs for academic faculty to enhance their VLSI teaching capabilities.',
      duration: '2-4 weeks',
      format: 'Hybrid (Online + Hands-on)',
    },
    {
      icon: BookOpen,
      title: 'Skill Development Program',
      description: 'Targeted skill enhancement programs for students and professionals in specific VLSI domains.',
      duration: '1-3 months',
      format: 'Flexible scheduling',
    },
    {
      icon: Briefcase,
      title: 'Internships',
      description: 'Industry-aligned internship programs providing real-world experience in VLSI design projects.',
      duration: '3-6 months',
      format: 'On-site/Remote',
    },
    {
      icon: Code,
      title: 'Academic Projects',
      description: 'Guided project development for students working on VLSI-related academic assignments.',
      duration: 'Project-based',
      format: 'Mentorship model',
    },
    {
      icon: Lightbulb,
      title: 'Guidance & Mentorship',
      description: 'One-on-one mentoring for career development and technical skill enhancement.',
      duration: 'Ongoing',
      format: 'Personalized sessions',
    },
    {
      icon: Award,
      title: 'Integrated Courses',
      description: 'Comprehensive course packages combining multiple VLSI disciplines for complete learning.',
      duration: '6-12 months',
      format: 'Structured curriculum',
    },
  ];

  return (
    <Layout
      title="Services"
      description="Comprehensive VLSI services including industrial consultancy, academic programs, and professional development solutions."
      canonical="/services"
    >
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
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
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-shadow-lg">
              Our <span className="text-accent-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive solutions for industry and academia in VLSI design and development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories - Tabbed Interface */}
      <section className="section-padding">
        <div className="container-max">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-xl p-2">
              <button
                onClick={() => setActiveTab('industrial')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'industrial'
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Industrial Services
              </button>
              <button
                onClick={() => setActiveTab('academic')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'academic'
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Academic Services
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Industrial Services Tab */}
          {activeTab === 'industrial' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {industrialServices
                .filter((service) =>
                  service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()))
                )
                .map((service, index) => (
                <div key={index} className="card p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-6">
                          <service.icon className="w-8 h-8 text-primary-900" />
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <ChevronRight className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a href="/contact" className="btn-primary group flex items-center justify-center">
                        <span>Request Service</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Benefits
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600 mb-3">
                          Need more information about this service?
                        </p>
                        <div className="flex flex-col space-y-2">
                          <a
                            href="tel:+918147018156"
                            className="flex items-center text-primary-900 hover:text-primary-700 transition-colors"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            <span className="text-sm">+91 8147018156</span>
                          </a>
                          <a
                            href="mailto:admin@impulse-vlsi.com"
                            className="flex items-center text-primary-900 hover:text-primary-700 transition-colors"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            <span className="text-sm">admin@impulse-vlsi.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Academic Services Tab */}
          {activeTab === 'academic' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {academicServices
                .filter((service) =>
                  service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  service.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((service, index) => (
                <div key={index} className="card p-8 group">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary-900 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Duration:</span>
                      <span className="text-sm text-gray-900">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">Format:</span>
                      <span className="text-sm text-gray-900">{service.format}</span>
                    </div>
                  </div>

                  <a href="/contact" className="w-full btn-secondary group-hover:btn-primary transition-all duration-300 flex items-center justify-center">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900">
        <div className="container-max text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and discover how our services
            can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-accent">
              Contact Us Today
            </a>
            <a href="tel:+918147018156" className="btn-secondary">
              Call +91 8147018156
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;