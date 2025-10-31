import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Courses', href: '/courses' },
    { name: 'Placements', href: '/placements' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    { name: 'Industrial Services', href: '/services#industrial' },
    { name: 'Academic Services', href: '/services#academics' },
    { name: 'Student Services', href: '/services#students' },
  ];

  const courses = [
    { name: 'Analog Circuit Design', href: '/courses#analog' },
    { name: 'Physical Circuit Design', href: '/courses#physical' },
    { name: 'Digital Design & Verification', href: '/courses#digital' },
    { name: 'FPGA Programming', href: '/courses#fpga' },
    { name: 'ASIC Design', href: '/courses#asic' },
    { name: 'System Verilog', href: '/courses#systemverilog' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/impulse-vlsi/', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/impulsevlsi?igsh=dmtyNXB6c3A4bTh1', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@impulsevlsi9?si=uFKj7ajqY5GtwPCF', icon: Youtube },
    { name: 'Facebook', href: 'https://www.facebook.com/share/1BfS2SZRaT/', icon: Facebook },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block flex items-center space-x-2">
              <img
                src="/images/log impulse.png"
                alt="Impulse VLSI"
                className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="text-xl font-bold text-white">
                Impulse VLSI<sup className="text-xs">®</sup>
              </span>
            </Link>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    <a
                      href="tel:+918147018156"
                      className="hover:text-white transition-colors duration-300"
                    >
                      +91-8147018156
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    <a
                      href="mailto:admin@impulse-vlsi.com"
                      className="hover:text-white transition-colors duration-300"
                    >
                      admin@impulse-vlsi.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Nirmala store, Bus stop,<br />
                    50 Feet Main Rd, 2nd Block,<br />
                    Hanumanthnagar, Banashankari 1st Stage,<br />
                    Banashankari, Bengaluru,<br />
                    Karnataka 560050, India
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Impulse VLSI®. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;