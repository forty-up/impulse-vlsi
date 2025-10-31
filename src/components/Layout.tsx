import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Impulse-VLSI - Industry-Leading VLSI Services & Training',
  description = 'Empowering innovation in VLSI design through industry-leading services and comprehensive training programs. Professional consultancy, courses, and placement assistance.',
  keywords = 'VLSI, semiconductor, circuit design, analog design, digital design, FPGA, ASIC, training, courses, consultancy, placement',
  ogImage = '/images/og-image.jpg',
  canonical,
}) => {
  const baseUrl = 'https://impulse-vlsi.com';
  const fullTitle = title.includes('Impulse-VLSI') ? title : `${title} | Impulse-VLSI`;

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}${canonical || ''}`} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseUrl}${ogImage}`} />
        <meta property="og:site_name" content="Impulse-VLSI" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${baseUrl}${canonical || ''}`} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${baseUrl}${ogImage}`} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Impulse-VLSI" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Theme Color */}
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Impulse-VLSI',
              url: baseUrl,
              logo: `${baseUrl}/images/logo.webp`,
              description: description,
              telephone: '+91-8147018156',
              email: 'admin@impulse-vlsi.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'India',
              },
              sameAs: [
                'https://www.linkedin.com/company/impulse-vlsi/',
                'https://www.instagram.com/impulsevlsi?igsh=dmtyNXB6c3A4bTh1',
                'https://youtube.com/@impulsevlsi9?si=uFKj7ajqY5GtwPCF',
                'https://www.facebook.com/share/1BfS2SZRaT/',
              ],
              areaServed: 'Worldwide',
              serviceType: ['VLSI Design', 'Semiconductor Training', 'Technical Consultancy'],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default Layout;