import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/Layout';
import {
  TrendingUp,
  Users,
  Building2,
  Award,
  ChevronRight,
  Download,
  Calendar,
  MapPin,
  DollarSign,
  ChevronLeft,
} from 'lucide-react';

interface SuccessStory {
  name: string;
  course: string;
  company: string;
  image: string;
  quote: string;
  designation?: string;
  location?: string;
  package?: string;
  college?: string;
  branch?: string;
  yop?: string;
}

const PlacementsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [reportsRef, reportsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const years = ['2024', '2023', '2022', '2021'];

  const placementStats = {
    '2024': {
      totalPlaced: 125,
      averagePackage: '8.5 LPA',
      highestPackage: '25 LPA',
      partnerCompanies: 45,
      placementRate: 95,
    },
    '2023': {
      totalPlaced: 110,
      averagePackage: '7.8 LPA',
      highestPackage: '22 LPA',
      partnerCompanies: 40,
      placementRate: 92,
    },
    '2022': {
      totalPlaced: 95,
      averagePackage: '7.2 LPA',
      highestPackage: '20 LPA',
      partnerCompanies: 35,
      placementRate: 89,
    },
    '2021': {
      totalPlaced: 80,
      averagePackage: '6.8 LPA',
      highestPackage: '18 LPA',
      partnerCompanies: 30,
      placementRate: 87,
    },
  };

  const companyLogos = [
    { name: 'Intel', logo: '/images/companies/intel.jpg' },
    { name: 'Samsung', logo: '/images/companies/samsung.png' },
    { name: 'Synopsys', logo: '/images/companies/synopsys.jpg' },
    { name: 'Cadence', logo: '/images/companies/cadence.jpg' },
    { name: 'AMD', logo: '/images/companies/AMD.jpg' },
  ];

  const placementImages = [
    {
      year: '2024',
      title: 'Mistral Placement Success - Yuvaraj K E & Sowmya M',
      image: '/images/placements/mistral-placement-2024.webp',
    },
    {
      year: '2024',
      title: 'Placement Report 2024 - Indian & International Trainees',
      image: '/images/placements/placement-report-2024.webp',
    },
  ];

  const successStories: SuccessStory[] = [
    {
      name: 'Yuvaraj K E',
      course: 'Hardware Design',
      company: 'Mistral',
      college: 'Jawaharlal Nehru National College of Engineering, Shivmogga',
      branch: 'ECE',
      yop: '2026 (7th sem)',
      image: '/images/students/yuvaraj.jpg',
      quote: 'Impulse-VLSI provided excellent training that helped me secure a position in Hardware Design at Mistral.',
    },
    {
      name: 'Sowmya M',
      course: 'Hardware Design',
      company: 'Mistral',
      college: 'Jawaharlal Nehru National College of Engineering, Shivmogga',
      branch: 'ECE',
      yop: '2026 (7th sem)',
      image: '/images/students/sowmya.jpg',
      quote: 'The comprehensive curriculum and practical approach at Impulse-VLSI prepared me well for the industry.',
    },
    {
      name: 'Chakraram',
      course: 'Design Verification',
      company: 'BigEndian Semiconductors',
      designation: 'Design Verification Engineer',
      location: 'India',
      image: '/images/students/chakraram.jpg',
      quote: 'The expert guidance and industry-relevant training helped me excel in design verification.',
    },
    {
      name: 'Meghana R',
      course: 'Analog Layout Design',
      company: 'Synopsys',
      designation: 'Analog Layout Engineer',
      location: 'India',
      image: '/images/students/meghana.jpg',
      quote: 'Impulse-VLSI\'s analog layout training was comprehensive and industry-focused.',
    },
    {
      name: 'Harshitha',
      course: 'Analog Layout Design',
      company: 'Synopsys',
      designation: 'Analog Layout Engineer',
      location: 'India',
      image: '/images/students/harshitha.jpg',
      quote: 'The hands-on training approach helped me master analog layout design techniques.',
    },
    {
      name: 'Abhay',
      course: 'Analog Layout Design',
      company: 'Samsung',
      designation: 'Analog Layout Engineer',
      location: 'India',
      image: '/images/students/abhay.jpg',
      quote: 'Excellent training program that prepared me for working at Samsung.',
    },
    {
      name: 'Sakshi G',
      course: 'SOC Design',
      company: 'Intel',
      designation: 'SOC Design Engineer',
      location: 'India',
      image: '/images/students/sakshi.jpg',
      quote: 'The SOC design course was perfectly aligned with industry requirements.',
    },
    {
      name: 'Kammana Shiva',
      course: 'Analog/RF Signal Design',
      company: 'Marvell Semiconductors',
      designation: 'Analog/RF Signal Engineer',
      location: 'Germany',
      image: '/images/students/shiva.jpg',
      quote: 'Impulse-VLSI\'s training helped me secure an international position in the US.',
    },
    {
      name: 'Vishnu K',
      course: 'Analog Design',
      company: 'Skyworks Solutions',
      designation: 'Analog Design Engineer',
      location: 'US',
      image: '/images/students/vishnu.jpg',
      quote: 'The comprehensive analog design training opened doors to international opportunities.',
    },
  ];

  const currentStats = placementStats[selectedYear as keyof typeof placementStats];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % placementImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + placementImages.length) % placementImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout
      title="Placements"
      description="Explore our outstanding placement records, success stories, and career opportunities in VLSI industry with top semiconductor companies."
      canonical="/placements"
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
              Career <span className="text-accent-500">Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Outstanding placement records and career opportunities in leading semiconductor companies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placement Reports/Images */}
      <section ref={reportsRef} className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={reportsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Placement Reports
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual representation of our placement achievements
            </p>
          </motion.div>

          {/* Image Gallery */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="card overflow-hidden">
              <div className="relative">
                <img
                  src={placementImages[currentImageIndex]?.image}
                  alt={placementImages[currentImageIndex]?.title}
                  className="w-full h-auto object-contain max-h-96"
                />

                {/* Navigation Buttons */}
                {placementImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-300"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-300"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                  </>
                )}
              </div>

              {/* Image Title and Indicators */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {placementImages[currentImageIndex]?.title}
                </h3>

                {placementImages.length > 1 && (
                  <div className="flex justify-center space-x-2">
                    {placementImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          index === currentImageIndex ? 'bg-primary-900' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Download Brochure */}
          {/* <div className="text-center">
            <button className="btn-primary group">
              <Download className="w-5 h-5 mr-2" />
              Download Placement Brochure
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div> */}
        </div>
      </section>

      {/* Company Logos */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Recruiting Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading semiconductor companies that regularly hire our graduates
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-4 md:p-8 flex items-center justify-center border border-gray-200 hover:border-primary-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                  title={company.name}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni who are now working in top companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mr-4 flex items-center justify-center text-white font-bold text-2xl">
                    {story.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.course}</p>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic mb-6">
                  "{story.quote}"
                </blockquote>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{story.company}</span>
                  </div>
                  {story.designation && (
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">{story.designation}</span>
                    </div>
                  )}
                  {story.package && (
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">{story.package}</span>
                    </div>
                  )}
                  {story.location && (
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">{story.location}</span>
                    </div>
                  )}
                  {story.college && (
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-600 text-xs">{story.college}</span>
                    </div>
                  )}
                  {story.branch && story.yop && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-600 text-xs">{story.branch} - {story.yop}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlacementsPage;