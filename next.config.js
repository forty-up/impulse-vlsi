/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'impulse-vlsi.com'],
  },
  experimental: {
    appDir: false,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
};

module.exports = nextConfig;