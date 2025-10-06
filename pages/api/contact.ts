import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceType: string;
  specificSelection: string;
  requirements: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

// Rate limiting store (in production, use Redis or database)
const rateLimit = new Map<string, { count: number; lastReset: number }>();

// Rate limiting function
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 5; // max 5 requests per minute

  const userLimit = rateLimit.get(ip) || { count: 0, lastReset: now };

  // Reset count if window has passed
  if (now - userLimit.lastReset > windowMs) {
    userLimit.count = 0;
    userLimit.lastReset = now;
  }

  userLimit.count++;
  rateLimit.set(ip, userLimit);

  return userLimit.count <= maxRequests;
};

// Input validation and sanitization
const validateInput = (data: ContactFormData): string[] => {
  const errors: string[] = [];

  // Full name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long');
  }

  // Phone number validation (Indian format)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!data.phoneNumber || !phoneRegex.test(data.phoneNumber)) {
    errors.push('Please enter a valid Indian phone number');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Please enter a valid email address');
  }

  // Service type validation
  const validServiceTypes = ['industrial', 'academic', 'courses'];
  if (!data.serviceType || !validServiceTypes.includes(data.serviceType)) {
    errors.push('Please select a valid service type');
  }

  // Specific selection validation
  if (!data.specificSelection || data.specificSelection.trim().length === 0) {
    errors.push('Please select a specific service');
  }

  // Requirements validation (optional but limited)
  if (data.requirements && data.requirements.length > 500) {
    errors.push('Requirements should not exceed 500 characters');
  }

  return errors;
};

// Sanitize input data
const sanitizeInput = (data: ContactFormData): ContactFormData => {
  return {
    fullName: data.fullName.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ''),
    phoneNumber: data.phoneNumber.replace(/[^0-9]/g, ''),
    email: data.email.trim().toLowerCase(),
    serviceType: data.serviceType.trim(),
    specificSelection: data.specificSelection.trim(),
    requirements: data.requirements.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ''),
  };
};

// Get service type labels
const getServiceTypeLabel = (serviceType: string): string => {
  const labels: { [key: string]: string } = {
    industrial: 'Industrial Services',
    academic: 'Academic Services',
    courses: 'VLSI Courses',
  };
  return labels[serviceType] || serviceType;
};

// Get specific selection labels
const getSpecificSelectionLabel = (serviceType: string, specificSelection: string): string => {
  const labels: { [key: string]: { [key: string]: string } } = {
    industrial: {
      consultancy: 'Consultancy',
      'fulltime-hiring': 'Full Time Hiring',
      'co-hiring': 'Co-Hiring',
    },
    academic: {
      fdp: 'Faculty Development Program',
      'skill-development': 'Skill Development Program',
      internships: 'Internships',
      'academic-projects': 'Academic Projects',
      guidance: 'Guidance & Mentorship',
      'integrated-courses': 'Integrated Courses',
    },
    courses: {
      'analog-design': 'Analog Circuit Design',
      'physical-design': 'Physical Circuit Design',
      'digital-verification': 'Digital Design & Verification',
      'fpga-programming': 'FPGA Programming',
      'asic-design': 'ASIC Design',
      'system-verilog': 'System Verilog',
    },
  };
  return labels[serviceType]?.[specificSelection] || specificSelection;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const ip = Array.isArray(clientIp) ? clientIp[0] : clientIp;

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.',
      });
    }

    // Parse and sanitize input data
    const rawData: ContactFormData = req.body;
    const sanitizedData = sanitizeInput(rawData);

    // Validate input data
    const validationErrors = validateInput(sanitizedData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: validationErrors.join(', '),
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or use SMTP settings
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
    });

    // Prepare email content
    const serviceTypeLabel = getServiceTypeLabel(sanitizedData.serviceType);
    const specificSelectionLabel = getSpecificSelectionLabel(
      sanitizedData.serviceType,
      sanitizedData.specificSelection
    );

    // Admin notification email
    const adminEmailContent = `
      <h2>New Inquiry from Impulse-VLSI Website</h2>
      <h3>Contact Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${sanitizedData.fullName}</li>
        <li><strong>Phone:</strong> ${sanitizedData.phoneNumber}</li>
        <li><strong>Email:</strong> ${sanitizedData.email}</li>
      </ul>

      <h3>Inquiry Details:</h3>
      <ul>
        <li><strong>Service Type:</strong> ${serviceTypeLabel}</li>
        <li><strong>Specific Selection:</strong> ${specificSelectionLabel}</li>
      </ul>

      ${sanitizedData.requirements ? `
      <h3>Requirements:</h3>
      <p>${sanitizedData.requirements}</p>
      ` : ''}

      <hr>
      <p><em>This inquiry was submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</em></p>
    `;

    // User confirmation email
    const userEmailContent = `
      <h2>Thank you for your inquiry!</h2>
      <p>Dear ${sanitizedData.fullName},</p>

      <p>We have received your inquiry regarding <strong>${specificSelectionLabel}</strong> and will get back to you within 24 hours.</p>

      <h3>Your Inquiry Summary:</h3>
      <ul>
        <li><strong>Service Type:</strong> ${serviceTypeLabel}</li>
        <li><strong>Specific Selection:</strong> ${specificSelectionLabel}</li>
        <li><strong>Contact Phone:</strong> ${sanitizedData.phoneNumber}</li>
      </ul>

      <p>If you have any urgent questions, please feel free to call us at <strong>+91 8147018156</strong>.</p>

      <p>Best regards,<br>
      Impulse-VLSI Team<br>
      Email: admin@impulse-vlsi.com<br>
      Phone: +91 8147018156</p>
    `;

    // Send admin notification email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'noreply@impulse-vlsi.com',
      to: 'admin@impulse-vlsi.com',
      subject: `New Inquiry: ${serviceTypeLabel} - ${sanitizedData.fullName}`,
      html: adminEmailContent,
    });

    // Send user confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'noreply@impulse-vlsi.com',
      to: sanitizedData.email,
      subject: 'Thank you for your inquiry - Impulse-VLSI',
      html: userEmailContent,
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been submitted successfully. We will contact you within 24 hours.',
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.',
    });
  }
}