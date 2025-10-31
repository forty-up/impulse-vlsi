import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '@/components/Layout';
import {
  Zap,
  Cpu,
  Code,
  Settings,
  ChevronRight,
  Sliders,
  Clock,
  Users,
  Star,
  ArrowRight,
  BookOpen,
  Award,
  CheckCircle,
  Layers,
} from 'lucide-react';

const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [coursesRef, coursesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'analog', label: 'Analog Design' },
    { value: 'digital', label: 'Digital Design' },
    { value: 'physical', label: 'Physical Design' },
    // { value: 'verification', label: 'Verification' },
    // { value: 'fpga', label: 'FPGA' },
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'pro', label: 'Pro (12 weeks)' },
    { value: 'excel', label: 'Excel (14 weeks)' },
  ];

  const courses = [
  {
    id: 1,
    title: 'Analog Circuit Design',
    category: 'analog',
    level: 'pro',
    duration: '12 weeks',
    mode: 'Online/Offline',
    certification: 'MSME Certification',
    students: 450,
    rating: 4.8,
    price: 'Contact for pricing',
    icon: Zap,
    description: 'Comprehensive course covering analog circuit design fundamentals, operational amplifiers, and advanced analog techniques.',
    features: [
      'Op-Amp design and analysis',
      'Current mirrors and references',
      'Bandgap voltage references',
      'Phase-locked loops (PLLs)',
      'Low-noise amplifier design',
      'Power management circuits',
    ],
    tools: ['Cadence Virtuoso', 'SPICE', 'Spectre'],
    prerequisites: 'Basic electronics knowledge',
  },
  {
    id: 2,
    title: 'Analog/Custom Layout Design',
    category: 'analog',
    level: 'excel',
    duration: '14 weeks',
    mode: 'Online/Offline',
    certification: 'MSME Certification',
    students: 210,
    rating: 4.7,
    price: 'Contact for pricing',
    icon: Layers,
    description: 'Hands-on course focused on analog IC layout design techniques, parasitic management, and physical verification.',
    features: [
      'Layout techniques for analog circuits',
      'Matching and symmetry principles',
      'Parasitic extraction and analysis',
      'Layout vs. schematic (LVS)',
      'Design rule checks (DRC)',
      'Electromigration and reliability considerations',
    ],
    tools: ['Cadence Virtuoso Layout Suite', 'Mentor Calibre', 'Assura'],
    prerequisites: 'Analog circuit design knowledge',
  },
  {
    id: 3,
    title: 'Physical Design',
    category: 'physical',
    level: 'excel',
    duration: '14 weeks',
    mode: 'Online/Offline',
    certification: 'MSME Certification',
    students: 320,
    rating: 4.9,
    price: 'Contact for pricing',
    icon: Cpu,
    description: 'Advanced physical design course covering placement, routing, timing closure, and signoff methodologies.',
    features: [
      'Floorplanning strategies',
      'Power planning and analysis',
      'Clock tree synthesis',
      'Static timing analysis',
      'Physical verification (DRC/LVS)',
      'Signoff methodologies',
    ],
    tools: ['Cadence Innovus', 'Synopsys ICC', 'Mentor Calibre'],
    prerequisites: 'Digital design fundamentals',
  },
  {
    id: 4,
    title: 'Digital/RTL Design & Verification',
    category: 'digital',
    level: 'pro',
    duration: '12 weeks',
    mode: 'Online/Offline',
    certification: 'MSME Certification',
    students: 680,
    rating: 4.7,
    price: 'Contact for pricing',
    icon: Code,
    description: 'Complete digital design and verification course using industry-standard methodologies and tools.',
    features: [
      'RTL design with Verilog/VHDL',
      'Testbench development',
      'UVM methodology',
      'Functional verification',
      'Coverage analysis',
      'Assertion-based verification',
    ],
    tools: ['ModelSim', 'QuestaSim', 'VCS'],
    prerequisites: 'Basic programming knowledge',
  },
  {
    id: 5,
    title: 'Design for Testability',
    category: 'dft',
    level: 'excel',
    duration: '14 weeks',
    mode: 'Online/Offline',
    certification: 'MSME Certification',
    students: 180,
    rating: 4.8,
    price: 'Contact for pricing',
    icon: CheckCircle,
    description: 'Specialized course on DFT methodologies including scan, BIST, and fault coverage techniques.',
    features: [
      'Scan design and insertion',
      'Built-in self-test (BIST)',
      'JTAG and boundary scan',
      'Fault models and coverage analysis',
      'Memory test and repair',
      'Low-power DFT strategies',
    ],
    tools: ['Mentor Tessent', 'Synopsys DFT Compiler', 'Cadence Modus'],
    prerequisites: 'ASIC/Digital design fundamentals',
  },
  {
    id: 6,
    title: 'Design with FPGA',
    category: 'fpga',
    level: 'pro',
    duration: '12 weeks',
    mode: 'Online/Offline',
    certification: 'MSME Certification',
    students: 420,
    rating: 4.6,
    price: 'Contact for pricing',
    icon: Settings,
    description: 'Comprehensive FPGA design course covering HDL programming, synthesis, and implementation.',
    features: [
      'FPGA architecture and design flow',
      'Verilog/VHDL for FPGA',
      'Synthesis and optimization',
      'Timing analysis and constraints',
      'IP core integration',
      'FPGA prototyping',
    ],
    tools: ['Xilinx Vivado', 'Intel Quartus', 'ModelSim'],
    prerequisites: 'Digital electronics basics',
  },
  {
    id: 7,
    title: 'Embedded Systems / IOT',
    category: 'embedded',
    level: 'pro',
    duration: '12 weeks',
    mode: 'Online/Offline',
    certification: 'MSME Certification',
    students: 550,
    rating: 4.7,
    price: 'Contact for pricing',
    icon: Sliders,
    description: 'Practical embedded systems and IoT course covering microcontrollers, sensors, and IoT protocols.',
    features: [
      'Microcontroller programming',
      'Sensor interfacing',
      'IoT protocols (MQTT, HTTP)',
      'Real-time operating systems',
      'Wireless communication',
      'Cloud integration',
    ],
    tools: ['Arduino', 'ESP32', 'Raspberry Pi', 'AWS IoT'],
    prerequisites: 'Basic programming knowledge',
  },
  {
    id: 8,
    title: 'Post Silicon Validation',
    category: 'validation',
    level: 'excel',
    duration: '14 weeks',
    mode: 'Online/Offline',
    certification: 'MSME Certification',
    students: 280,
    rating: 4.8,
    price: 'Contact for pricing',
    icon: Award,
    description: 'Advanced course on post-silicon validation, debugging, and characterization techniques.',
    features: [
      'Silicon bring-up procedures',
      'Functional validation',
      'Performance characterization',
      'Debug methodologies',
      'Test automation',
      'Failure analysis',
    ],
    tools: ['Oscilloscope', 'Logic Analyzer', 'Python scripting'],
    prerequisites: 'Digital design and verification knowledge',
  },
];


  useEffect(() => {
    const filtered = courses.filter((course) => {
      const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
      const levelMatch = selectedLevel === 'all' || course.level === selectedLevel;
      return categoryMatch && levelMatch;
    });
    setFilteredCourses(filtered);
  }, [selectedCategory, selectedLevel]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout
      title="Courses"
      description="Comprehensive VLSI courses covering analog design, digital design, physical design, verification, and FPGA programming."
      canonical="/courses"
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
              VLSI <span className="text-accent-500">Courses</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto">
              Master VLSI design with our comprehensive, industry-focused training programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4">
          <div className="card p-4 sm:p-6">
            <div className="flex items-center mb-3 sm:mb-4">
              <Sliders className="w-4 h-4 sm:w-5 sm:h-5 text-primary-900 mr-2" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Filter Courses</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-field text-sm sm:text-base"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Skill Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="input-field text-sm sm:text-base"
                >
                  {levels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section ref={coursesRef} className="section-padding">
        <div className="container-max px-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={coursesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-5 sm:p-6 min-h-[800px] sm:min-h-[850px] flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                {/* Course Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <course.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-900" />
                  </div>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-2 sm:mb-3">
                  {course.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs sm:text-sm">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mx-auto mb-1" />
                    <div className="text-gray-600 font-medium text-xs sm:text-sm">{course.duration}</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mx-auto mb-1" />
                    <div className="text-gray-600 font-medium text-xs sm:text-sm">{course.rating}/5</div>
                  </div>
                  <div className="col-span-2 text-center p-2 bg-primary-50 rounded">
                    <div className="text-primary-900 font-medium text-xs sm:text-sm">{course.mode}</div>
                  </div>
                  <div className="col-span-2 text-center p-2 bg-green-50 rounded">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mx-auto mb-1" />
                    <div className="text-green-700 font-medium text-xs">{course.certification}</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Topics:</h4>
                  <ul className="space-y-1">
                    {course.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {course.features.length > 3 && (
                      <li className="text-xs sm:text-sm text-gray-500 ml-5">
                        +{course.features.length - 3} more topics
                      </li>
                    )}
                  </ul>
                </div>

                {/* Tools */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Tools:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {course.tools.map((tool: string, toolIndex: number) => (
                      <span
                        key={toolIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/contact" className="btn-primary w-full group mt-auto flex items-center justify-center text-sm sm:text-base py-2.5 sm:py-3">
                  <span>Enroll Now</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12 px-4">
              <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                No courses found
              </h3>
              <p className="text-sm sm:text-base text-gray-500">
                Try adjusting your filters to see more courses.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-focused curriculum designed by experts for real-world success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Industry-Relevant',
                description: 'Curriculum designed with current industry requirements and trends.',
              },
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Learn from professionals with years of industry experience.',
              },
              {
                icon: Award,
                title: 'Certification',
                description: 'Receive industry-recognized certificates upon completion.',
              },
              {
                icon: Zap,
                title: 'Hands-on Learning',
                description: 'Practical projects and real-world problem-solving approach.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-900" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-heading font-semibold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoursesPage;