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
  X,
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

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
  ];

  // Real Google Reviews
  const testimonials = [
    {
      name: 'Hima Bindu',
      designation: 'VLSI Trainee',
      company: 'Google Reviewer',
      rating: 5,
      text: 'I had a great learning experience at Impulse VLSI. The trainers were supportive, and the hands-on sessions with tools like Cadence really helped me build confidence. The concepts were explained clearly, and the projects made everything more practical. Overall, it was a solid step toward starting my VLSI career.',
      image: '/images/testimonials/hima.jpg',
      timeAgo: '5 months ago',
    },
    {
      name: 'Bhuvan G S',
      designation: 'VLSI Student',
      company: 'Google Reviewer',
      rating: 5,
      text: 'The classes were informative and engaging. Hands-on experience with Cadence tool was helpful. Overall, a great learning experience!',
      image: '/images/testimonials/bhuvan.jpg',
      timeAgo: '7 months ago',
    },
    {
      name: 'RUTHVIK R',
      designation: 'Local Guide',
      company: 'Google Reviewer',
      rating: 5,
      text: 'It was really great attending this session. Learnt many things in VLSI which would really help for future performance. I attend a workshop for 5 days which was really great where they included all topics from scratch to the top level. Really was were good.',
      image: '/images/testimonials/ruthvik.jpg',
      timeAgo: '2 months ago',
    },
    {
      name: 'Lasya Shashidhara',
      designation: 'VLSI Trainee',
      company: 'Google Reviewer',
      rating: 5,
      text: 'This session was very helpful for me. I learnt so many things beyond the syllabus. It was a very good session where they taught us how to clear tests and covered analog circuit and digital circuits. Thanks for conducting this training.',
      image: '/images/testimonials/lasya.jpg',
      timeAgo: '3 months ago',
    },
    {
      name: 'Bhumika K.R',
      designation: 'VLSI Student',
      company: 'Google Reviewer',
      rating: 5,
      text: 'The session was very informative and well-presented. Thank you to the presenters for explaining concepts clearly and answering all doubts. More hands-on practice sessions and real-time circuit design demonstrations could make it even more engaging and beneficial for participants.',
      image: '/images/testimonials/bhumika.jpg',
      timeAgo: '2 months ago',
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-6 text-shadow-lg px-4">
              {currentImage === 0 && 'Join us to follow your passion in semiconductor domain'}
              {currentImage === 1 && 'Factory of Talents'}
              {currentImage === 2 && 'Right Talent meet Right Industry'}
              {currentImage === 3 && 'Connecting Campus to Corporates through our services'}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto px-4">
              Industry-Leading Services & Comprehensive Training Programs
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 justify-center max-w-5xl mx-auto px-4">
              <motion.a
                href="/courses"
                className="btn-accent hover:scale-105 text-center flex items-center justify-center text-sm md:text-base py-3 md:py-3 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Courses
              </motion.a>
              <motion.a
                href="/services#industrial"
                className="btn-accent hover:scale-105 text-center flex items-center justify-center text-sm md:text-base py-3 md:py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Industrial Services
              </motion.a>
              <motion.a
                href="/services#academics"
                className="btn-accent hover:scale-105 text-center flex items-center justify-center text-sm md:text-base py-3 md:py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Academic Services
              </motion.a>
              <motion.a
                href="https://wa.me/918147018156"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent hover:scale-105 text-center flex items-center justify-center text-sm md:text-base py-3 md:py-3 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Vision and Mission Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-heading font-bold">Our Vision</h2>
              <p className="text-lg text-gray-100 leading-relaxed">
                "To pioneer great talents by amplifying and transferring the quality content in Electronics / Semiconductor Design Domains & Help Industries to get right talents across the Globe."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-heading font-bold">Our Mission</h2>
              <p className="text-lg text-gray-100 leading-relaxed">
                "To build highly skilled aspirants & help them and Industries to shape and intensify their future in Electronics / Semiconductor domain".
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Impulse VLSI Section */}
      <section ref={overviewRef} className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Impulse VLSI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in VLSI education and industry solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                icon: Zap,
                title: 'Expertise in both Analog and Digital domains',
                description: 'Comprehensive training and services covering all aspects of VLSI design.',
              },
              {
                icon: GraduationCap,
                title: 'Experts with 10+ years of industry experience',
                description: 'Learn from professionals who have worked in leading semiconductor companies.',
              },
              {
                icon: TrendingUp,
                title: 'Deliver both Industrial and Academic services',
                description: 'Bridging the gap between academia and industry with tailored solutions.',
              },
              {
                icon: Users,
                title: 'Hands-On Learning',
                description: 'Practical, project-based approach to ensure real-world readiness.',
              },
              {
                icon: CheckCircle,
                title: 'Affordable fee structure',
                description: 'Quality education and services at competitive prices for everyone.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={overviewInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
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

      {/* Programs Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 px-4">
              Our Prospectus
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Explore our comprehensive training and development programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
            {[
              { image: '/prospectus/Screenshot 2025-10-30 173351.png', title: 'Internship Program' },
              { image: '/prospectus/Screenshot 2025-10-30 173406.png', title: 'Skill Development Program' },
              { image: '/prospectus/Screenshot 2025-10-30 173421.png', title: 'Pre-Placement Training' },
              { image: '/prospectus/Screenshot 2025-10-30 180528.png', title: 'Online/Offline Courses' },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProgram(program.image)}
              >
                <div className="aspect-[3/4.2] overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{program.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section ref={videosRef} className="section-padding bg-gray-50">
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

      {/* Google Reviews Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Google Reviews
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
              See what our students and clients say about us
            </p>
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Impulse+VLSI+Banashankari+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 fill-current" />
              View All Google Reviews
            </motion.a>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <div className="card p-4 sm:p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">4.8 Rating</p>
              <p className="text-sm sm:text-base text-gray-600">Based on Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Real Google Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Authentic feedback from our students and trainees
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 md:px-0">
            <div className="card p-6 sm:p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                <div className="flex items-center">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google Review
                </div>
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mr-3 sm:mr-4 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm">
                      {testimonials[currentTestimonial].designation}
                    </div>
                  </div>
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">
                  {testimonials[currentTestimonial].timeAgo}
                </div>
              </div>
            </div>

            {/* Navigation Buttons - Hidden on mobile, visible on md+ */}
            <button
              onClick={prevTestimonial}
              className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-shadow duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-shadow duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

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

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Get answers to common questions about our services and courses
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 px-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-6 text-left flex items-start sm:items-center justify-between hover:bg-gray-50 transition-colors duration-300 gap-3"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-2">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 mt-1 sm:mt-0" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 mt-1 sm:mt-0" />
                  )}
                </button>

                <div
                  className={`accordion-content ${
                    openFaq === index ? 'open' : ''
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <button
            onClick={() => setSelectedProgram(null)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
          </button>
          <div className="max-w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-auto">
            <img
              src={selectedProgram}
              alt="Program Details"
              className="w-full h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;