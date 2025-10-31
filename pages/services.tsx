import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';
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
  CheckCircle,
  Target,
  TrendingUp,
  Zap,
  UserCheck,
  FileText,
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'industrial' | 'academic'>('students');
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const router = useRouter();

  useEffect(() => {
    // Check for hash in URL and set active tab accordingly
    const hash = router.asPath.split('#')[1];
    if (hash === 'industrial') {
      setActiveTab('industrial');
    } else if (hash === 'academics') {
      setActiveTab('academic');
    } else if (hash === 'students') {
      setActiveTab('students');
    }
  }, [router.asPath]);

  const studentServices = [
    {
      icon: GraduationCap,
      title: 'Industry-Oriented Training Programs',
      description: 'Specialized courses in VLSI Design, Verification, DFT, Physical Design, and FPGA with hands-on experience using industry-standard tools like Cadence, Synopsys, and Mentor Graphics.',
      features: [
        'Real-time chip-level project training from concept to GDSII',
        'Flexible training modes: Offline, Online, and Hybrid',
        'Industry-standard tool exposure',
      ],
    },
    {
      icon: Award,
      title: 'Skill Development & Certification',
      description: 'Module-based certifications recognized by industry partners with tool mastery sessions and real-time lab exercises.',
      features: [
        'Skill assessments and grading reports for student portfolios',
        'Global certification mapping (NSDC / NASSCOM aligned)',
        'Tool mastery sessions with real-time lab exercises',
      ],
    },
    {
      icon: Briefcase,
      title: 'Internship & Project Support',
      description: 'Internships with industry collaboration and comprehensive project guidance for B.Tech, M.Tech, and PhD students.',
      features: [
        'Access to project topics in cutting-edge areas — AI Chips, RISC-V, Low Power Design',
        'Mentoring for research papers and publications',
        'Mini and major project guidance',
      ],
    },
    {
      icon: Users,
      title: 'Placement Assistance',
      description: 'Comprehensive placement support with drives conducted with semiconductor and electronics companies.',
      features: [
        'Mock interviews and technical test preparation',
        'Resume building, LinkedIn profile enhancement, and interview coaching',
        'Referral opportunities through institute–industry MoUs',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Mentoring & Career Guidance',
      description: 'One-on-one technical and career mentoring to help students navigate their career paths in the semiconductor industry.',
      features: [
        'Guidance on higher studies and global semiconductor careers',
        'Pathways for transitioning from software to hardware fields',
        'Alumni mentoring and success stories sessions',
      ],
    },
    {
      icon: BookOpen,
      title: 'Soft Skill & Professional Development',
      description: 'Communication and presentation skill training along with professional development programs.',
      features: [
        'Team collaboration, leadership, and project management workshops',
        'Resume and portfolio creation sessions',
        'Personality development programs',
      ],
    },
  ];

  const industrialServices = [
    {
      icon: Building2,
      title: 'Skilled Workforce Pipeline',
      description: 'We train students on industry-grade EDA tools, providing companies with "industry-ready" engineers who can contribute from day one.',
      benefits: [
        'Companies get industry-ready engineers',
        'Reduces training cost and hiring risk',
        'Pre-trained on industry-standard tools',
        'Immediate productivity',
      ],
    },
    {
      icon: UserCheck,
      title: 'Co-Hiring',
      description: 'Ready-to-deploy talent with customized skill development aligned exactly with company requirements.',
      benefits: [
        'No need for long induction or training',
        'Reduced hiring cost and risk',
        'Early visibility on potential hires through internship stages',
        'Higher retention rates with company involvement',
      ],
    },
    {
      icon: Users,
      title: 'Internship & Apprenticeship Support',
      description: 'Industries get a continuous talent pipeline through internships where students work on real projects.',
      benefits: [
        'Continuous talent pipeline',
        'Students work on real projects, reducing R&D workload',
        'Top-performing interns can be directly absorbed',
        'Pre-assessment of talent',
      ],
    },
    {
      icon: Target,
      title: 'Talent & Recruitment Support',
      description: 'Industry-ready graduates trained on industry standard projects with comprehensive recruitment programs.',
      benefits: [
        'Lower hiring cost',
        'Best in class candidates',
        'Less hiring/processing time',
        'Well-tested process',
      ],
    },
  ];

  const academicServices = [
    {
      icon: GraduationCap,
      title: 'Skill Development & Training Programs',
      features: [
        'Industry-aligned VLSI design and verification courses.',
        'Hands-on workshops on EDA tools (Cadence, Synopsys, Mentor Graphics).',
        'Short-term certification programs',
      ],
    },
    {
      icon: BookOpen,
      title: 'Curriculum Development Support',
      features: [
        'Assist engineering colleges in updating their VLSI curriculum.',
        'Design industry-oriented course modules.',
        'Align curriculum with latest industry standards and emerging technologies.',
      ],
    },
    {
      icon: Code,
      title: 'Academic Research & Projects',
      features: [
        'Guide B.Tech, M.Tech, and PhD projects in core semiconductor domains.',
        'Encourage joint publications and patents with faculty and students.',
        'Support funded research proposals (AICTE, DST, DRDO, etc.).',
      ],
    },
    {
      icon: Users,
      title: 'Faculty Development Programs (FDPs)',
      features: [
        'Training for faculty on latest VLSI tools, flows, and teaching pedagogy.',
        'Annual Faculty Upskilling Summits with industry speakers.',
        'FDPs on Emerging Technologies: AI Chips, RISC-V, 3D ICs, Low Power Design.',
      ],
    },
    {
      icon: Briefcase,
      title: 'Internships and Industry Linkage',
      features: [
        'Co-branded internship certificates with industry partners.',
        'Capstone projects based on real industrial challenges.',
        'Bridge programs to connect academia with industry needs.',
      ],
    },
    {
      icon: Award,
      title: 'Student Development & Placement Support',
      features: [
        'Soft skill and interview preparation for semiconductor jobs.',
        'Aptitude, design, and verification test series for placement.',
        'Resume-building and mock interviews with industry engineers.',
        'Campus placement drives in collaboration with VLSI companies',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Academic Consulting & Accreditation Support',
      features: [
        'Help institutions align with NBA, NAAC, and AICTE standards.',
      ],
    },
  ];

  return (
    <Layout
      title="Services"
      description="Comprehensive VLSI services including student training, industrial hiring solutions, and academic program development."
      canonical="/services"
    >
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="relative py-24 md:py-32 overflow-hidden"
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
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-shadow-lg">
              Our <span className="text-accent-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive solutions for students, industry, and academia in VLSI design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories - Tabbed Interface */}
      <section id="students" className="section-padding">
        <div className="container-max">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-xl p-2 inline-flex">
              <button
                onClick={() => setActiveTab('students')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'students'
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Students
              </button>
              <button
                id="industrial"
                onClick={() => setActiveTab('industrial')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'industrial'
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Industrial
              </button>
              <button
                id="academics"
                onClick={() => setActiveTab('academic')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'academic'
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Academics
              </button>
            </div>
          </div>

          {/* Students Services Tab */}
          {activeTab === 'students' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                  Services for Students
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive training, mentorship, and placement support for aspiring VLSI professionals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studentServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-8 group hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-primary-900 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-success-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a href="/contact" className="btn-primary inline-flex items-center">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          )}

          {/* Industrial Services Tab */}
          {activeTab === 'industrial' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                  Industrial Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Talent solutions and workforce development for semiconductor companies
                </p>
              </div>

              <div className="space-y-8">
                {industrialServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-8 md:p-12"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-6">
                            <service.icon className="w-8 h-8 text-primary-900" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                          Key Benefits
                        </h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-primary-50 rounded-xl">
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Ready to Build Your Team?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Contact us to discuss your hiring needs and workforce development requirements
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="btn-primary">
                      Request Service
                    </a>
                    <a href="tel:+918147018156" className="btn-secondary">
                      Call +91-8147018156
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Academic Services Tab */}
          {activeTab === 'academic' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                  Academic Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Curriculum development, faculty training, and institutional support services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {academicServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-8 group hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-primary-900 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
                      {service.title}
                    </h3>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-success-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="/contact" className="w-full btn-secondary group-hover:btn-primary transition-all duration-300 flex items-center justify-center">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a href="/contact" className="btn-primary inline-flex items-center">
                  Partner with Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
