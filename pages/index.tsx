import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import {
  Zap,
  GraduationCap,
  TrendingUp,
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Play,
  Users,
  CheckCircle,
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Animation refs
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [videosRef, videosInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Hero background images
  const heroImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
  ];

  // Sample data
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      designation: 'Senior Design Engineer',
      company: 'Intel Corporation',
      rating: 5,
      text: 'Impulse-VLSI provided excellent training that directly contributed to my career growth. The practical approach and industry-relevant curriculum made all the difference.',
      image: '/images/testimonials/rajesh.jpg',
    },
    {
      name: 'Priya Sharma',
      designation: 'VLSI Engineer',
      company: 'Qualcomm',
      rating: 5,
      text: 'The hands-on experience and expert guidance I received helped me secure my dream job. Highly recommend their courses to anyone serious about VLSI.',
      image: '/images/testimonials/priya.jpg',
    },
    {
      name: 'Dr. Anil Verma',
      designation: 'Professor',
      company: 'IIT Delhi',
      rating: 5,
      text: 'Their faculty development program significantly enhanced our department\'s capabilities. The trainers are industry experts with deep knowledge.',
      image: '/images/testimonials/anil.jpg',
    },
  ];

  const featuredVideos = [
    {
      id: 'oKvTBxz4nQ8',
      title: 'Review by International student',
      // description: 'Discover our comprehensive VLSI training programs and success stories',
    },
    {
      id: 'RQ8BqxDry70',
      title: 'Review by International student',
      // description: 'Learn about our advanced VLSI design methodologies and industry partnerships',
    },
  ];

  const faqs = [
    {
      question: 'What makes Impulse-VLSI different from other training institutes?',
      answer: 'We offer industry-relevant curriculum designed by professionals, hands-on practical experience, and strong placement support. Our trainers are active industry experts with years of experience in leading semiconductor companies.',
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we have a dedicated placement cell that works closely with leading semiconductor companies. We provide resume building, interview preparation, and direct placement opportunities.',
    },
    {
      question: 'What are the prerequisites for VLSI courses?',
      answer: 'Basic knowledge of electronics and digital systems is recommended. We offer foundation courses for beginners and advanced courses for experienced professionals.',
    },
    {
      question: 'Are the courses suitable for working professionals?',
      answer: 'Absolutely! We offer flexible schedules including weekend batches and online sessions to accommodate working professionals.',
    },
    {
      question: 'What industrial services do you provide?',
      answer: 'We offer consultancy services, full-time hiring solutions, co-hiring arrangements, and technical support for semiconductor projects across various domains.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-change hero background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout
      title="Home"
      description="Empowering innovation in VLSI design through industry-leading services and comprehensive training programs. Professional consultancy, courses, and placement assistance."
      canonical="/"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: currentImage === index ? 1 : 0,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container-max section-padding text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-shadow-lg">
              Empowering Innovation in{' '}
              <span className="text-accent-500">VLSI Design</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Industry-Leading Services & Comprehensive Training Programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/services"
                className="btn-secondary hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
              <motion.a
                href="/courses"
                className="btn-accent hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Courses
              </motion.a>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Company Overview Section */}
      <section ref={overviewRef} className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Impulse-VLSI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in VLSI education and industry solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Industry Excellence',
                description: 'Cutting-edge solutions and consultancy services for semiconductor industry leaders.',
              },
              {
                icon: GraduationCap,
                title: 'Expert Training',
                description: 'Comprehensive courses designed by industry experts with hands-on practical experience.',
              },
              {
                icon: TrendingUp,
                title: 'Career Growth',
                description: 'Proven track record of student placements in top semiconductor companies worldwide.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={overviewInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section ref={videosRef} className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Watch Our Student's Reviews
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive VLSI training programs and see our expertise in action
            </p> */}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={videosInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="card overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&showinfo=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6 text-center">
                    {/* <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {video.title}
                    </h3> */}
                    {/* <p className="text-gray-600">
                      {video.description}
                    </p> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our community
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].designation}, {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`carousel-dot ${
                    index === currentTestimonial ? 'active' : ''
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Ready to Start Your VLSI Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of professionals who have advanced their careers with our expert training and industry connections.
              </p>

              <div className="space-y-4">
                {[
                  'Industry-relevant curriculum',
                  'Hands-on practical experience',
                  'Expert mentorship',
                  'Placement assistance',
                  'Lifetime support',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services and courses
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                <div
                  className={`accordion-content ${
                    openFaq === index ? 'open' : ''
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;