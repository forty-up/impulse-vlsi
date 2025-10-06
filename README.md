# Impulse-VLSI Website

A professional, static website for Impulse-VLSI, offering VLSI services to industry and courses to students. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional, and corporate-looking interface
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Complete meta tags, structured data, and performance optimization
- **Contact Forms**: Validated forms with email notifications
- **Interactive Elements**: Smooth animations and user-friendly interface
- **Fast Performance**: Optimized for speed and user experience

## 📁 Project Structure

```
impulse-vlsi/
├── public/
│   ├── images/                 # Static images
│   └── favicon.ico            # Favicon
├── src/
│   ├── components/            # Reusable React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Layout.tsx         # Main layout wrapper
│   │   └── ContactForm.tsx    # Contact form component
│   ├── styles/
│   │   └── globals.css        # Global styles and Tailwind
│   └── utils/                 # Utility functions
├── pages/
│   ├── api/
│   │   └── contact.ts         # Contact form API endpoint
│   ├── index.tsx              # Home page
│   ├── about.tsx              # About Us page
│   ├── services.tsx           # Services page
│   ├── courses.tsx            # Courses page
│   ├── placements.tsx         # Placements page
│   ├── contact.tsx            # Contact page
│   ├── _app.tsx               # App wrapper
│   └── _document.tsx          # Document head
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Forms**: React Hook Form with Yup validation
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action buttons
- Company overview with key features
- Video testimonials section
- Customer reviews carousel
- Enrollment form
- FAQ section

### About Us (`/about`)
- Company philosophy and mission
- Who we are section with statistics
- What we do process flow
- Contact information bar

### Services (`/services`)
- Tabbed interface for Industrial vs Academic services
- Detailed service descriptions
- Benefits and features for each service
- Call-to-action sections

### Courses (`/courses`)
- Course catalog with filtering
- Detailed course cards with features
- Tools and prerequisites information
- Enrollment buttons

### Placements (`/placements`)
- Yearly placement statistics
- Interactive year selector
- Company partner logos
- Success stories from alumni
- Placement report gallery

### Contact (`/contact`)
- Contact form with validation
- Multiple contact methods
- Office hours and information
- FAQ section
- Interactive map placeholder

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd impulse-vlsi
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Setup**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your email configuration:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

4. **Start development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an app password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the app password in `.env.local`

### Alternative SMTP
You can use any SMTP service by updating the nodemailer configuration in `/pages/api/contact.ts`

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.js`:
- Primary Blue: `#1e3a8a`
- Secondary Blue: `#3b82f6`
- Accent Orange: `#f97316`

### Fonts
- Headings: Montserrat
- Body: Inter

### Content Updates
- Update company information in respective page files
- Modify service offerings in `/pages/services.tsx`
- Update course catalog in `/pages/courses.tsx`
- Change placement statistics in `/pages/placements.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1440px
- Large Desktop: 1440px+

## 🔧 Build & Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload `out/` folder to Netlify
3. Set environment variables
4. Configure form handling

## 📊 Performance

The website is optimized for:
- **Core Web Vitals**: Lighthouse score 90+
- **SEO**: Complete meta tags and structured data
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Lazy loading and code splitting

## 🔒 Security Features

- Input validation and sanitization
- Rate limiting on contact form
- XSS protection
- CSRF protection

## 📞 Contact Information

- **Phone**: +91 8147018156
- **Email**: admin@impulse-vlsi.com
- **Website**: [Impulse-VLSI](#)

## 📝 License

This project is proprietary and confidential. All rights reserved by Impulse-VLSI.

## 🤝 Support

For technical support or questions about the website, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for Impulse-VLSI**