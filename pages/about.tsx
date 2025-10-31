import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/Layout';
import {
  Lightbulb,
  Target,
  Users,
  Award,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [philosophyRef, philosophyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whoWeAreRef, whoWeAreInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whatWeDoRef, whatWeDoInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Counter states
  const [studentCount, setStudentCount] = useState(0);
  const [partnerCount, setPartnerCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  const [successCount, setSuccessCount] = useState(0);

  // Animate counters when stats section is in view
  useEffect(() => {
    if (statsInView) {
      // Students counter (0 to 500)
      const studentInterval = setInterval(() => {
        setStudentCount((prev) => {
          if (prev >= 500) {
            clearInterval(studentInterval);
            return 500;
          }
          return prev + 10;
        });
      }, 20);

      // Partners counter (0 to 50)
      const partnerInterval = setInterval(() => {
        setPartnerCount((prev) => {
          if (prev >= 50) {
            clearInterval(partnerInterval);
            return 50;
          }
          return prev + 1;
        });
      }, 40);

      // Years counter (0 to 10)
      const yearInterval = setInterval(() => {
        setYearCount((prev) => {
          if (prev >= 10) {
            clearInterval(yearInterval);
            return 10;
          }
          return prev + 1;
        });
      }, 100);

      // Success rate counter (0 to 95)
      const successInterval = setInterval(() => {
        setSuccessCount((prev) => {
          if (prev >= 95) {
            clearInterval(successInterval);
            return 95;
          }
          return prev + 1;
        });
      }, 20);

      return () => {
        clearInterval(studentInterval);
        clearInterval(partnerInterval);
        clearInterval(yearInterval);
        clearInterval(successInterval);
      };
    }
  }, [statsInView]);

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Understanding your specific requirements and goals through detailed discussion.',
      icon: Users,
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Developing customized solutions tailored to your industry needs.',
      icon: Target,
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Executing projects with expert guidance and hands-on support.',
      icon: Award,
    },
    {
      step: '04',
      title: 'Support',
      description: 'Providing ongoing assistance and continuous improvement.',
      icon: Clock,
    },
  ];

  return (
    <Layout
      title="About Us"
      description="Learn about Impulse-VLSI's mission, philosophy, and commitment to excellence in VLSI design services and training programs."
      canonical="/about"
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
              About <span className="text-accent-500">Impulse-VLSI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Pioneering excellence in VLSI design through innovation, education, and industry collaboration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section ref={philosophyRef} className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="card p-8 md:p-12"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-6">
                <Lightbulb className="w-8 h-8 text-primary-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                Our Philosophy
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Impulse VLSI is founded on the principle of bridging the gap between academic knowledge
                and industry requirements in the field of Very Large Scale Integration (VLSI) design.
                We believe that practical, hands-on experience combined with theoretical understanding
                creates the foundation for innovation in semiconductor technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our philosophy centers on empowering individuals and organizations with cutting-edge
                knowledge, fostering creativity, and building sustainable partnerships that drive
                technological advancement in the semiconductor industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section ref={whoWeAreRef} className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Users className="w-24 h-24 mx-auto mb-4 opacity-20" />
                  <p className="text-2xl font-bold">Innovation</p>
                  <p className="text-lg">Through Education</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Who We Are
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Impulse-VLSI is a premier training and consultancy organization dedicated to
                  advancing VLSI design capabilities across India and beyond. Founded by industry
                  veterans with decades of combined experience in semiconductor design and
                  manufacturing, we bring real-world expertise to every training program and
                  consultancy project.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Our team comprises seasoned professionals from leading semiconductor companies,
                  distinguished academics, and industry thought leaders who share a common vision
                  of excellence in VLSI education and innovation.
                </p>

                <div ref={statsRef} className="grid grid-cols-2 gap-4 md:gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">{studentCount}+</div>
                    <div className="text-sm md:text-base text-gray-600">Students Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">{partnerCount}+</div>
                    <div className="text-sm md:text-base text-gray-600">Industry Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">{yearCount}+</div>
                    <div className="text-sm md:text-base text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">{successCount}%</div>
                    <div className="text-sm md:text-base text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={whatWeDoRef} className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to VLSI education and industry solutions
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex items-center space-x-6">
                    <div className="text-5xl font-bold text-primary-100">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary-900" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Work Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collaborative environment where innovation meets teamwork
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
                alt: 'Team collaboration',
              },
              {
                url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
                alt: 'Business meeting',
              },
              {
                url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
                alt: 'Team discussion',
              },
              {
                url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
                alt: 'Professional gathering',
              },
              {
                url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
                alt: 'Corporate team',
              },
              {
                url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
                alt: 'Team celebration',
              },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;