import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Courses', href: '/courses' },
    { name: 'Placements', href: '/placements' },
    { name: 'Feedback', href: '/feedback' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.webp"
              alt="Impulse-VLSI"
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 text-primary-900 hover:text-primary-700 group`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-900 transition-all duration-300 group-hover:w-full ${
                    isActive(item.href) ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md transition-colors duration-300 text-primary-900 hover:bg-primary-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 pb-2 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-4 shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-primary-900 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Link
                href="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;