import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  mobileNumber: string;
  courseName: string;
  comments?: string;
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

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Please enter a valid email address');
  }

  // Phone number validation (Indian format)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!data.mobileNumber || !phoneRegex.test(data.mobileNumber)) {
    errors.push('Please enter a valid Indian mobile number');
  }

  // Course name validation
  if (!data.courseName || data.courseName.trim().length === 0) {
    errors.push('Please select a course');
  }

  // Comments validation (optional but limited)
  if (data.comments && data.comments.length > 500) {
    errors.push('Comments should not exceed 500 characters');
  }

  return errors;
};

// Sanitize input data
const sanitizeInput = (data: ContactFormData): ContactFormData => {
  const removeScripts = (str: string) =>
    str.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  return {
    name: removeScripts(data.name),
    email: data.email.trim().toLowerCase(),
    mobileNumber: data.mobileNumber.replace(/[^0-9]/g, ''),
    courseName: removeScripts(data.courseName),
    comments: data.comments ? removeScripts(data.comments) : '',
  };
};

// Get course label
const getCourseLabel = (courseValue: string): string => {
  const labels: { [key: string]: string } = {
    'analog-circuit-design': 'Analog Circuit Design',
    'analog-layout-design': 'Analog/Custom Layout Design',
    'physical-design': 'Physical Design',
    'digital-rtl-verification': 'Digital/RTL Design & Verification',
    'dft': 'Design for Testability',
    'fpga': 'Design with FPGA',
    'embedded-iot': 'Embedded Systems / IOT',
    'post-silicon': 'Post Silicon Validation',
  };
  return labels[courseValue] || courseValue;
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

    // Debug: Check if environment variables are loaded
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
    console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL);

    // Create email transporter with explicit SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Prepare email content
    const courseLabel = getCourseLabel(sanitizedData.courseName);

    // Admin notification email with professional styling
    const adminEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #667eea; }
          .label { font-weight: bold; color: #667eea; }
          .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">🎓 New Course Inquiry</h1>
            <p style="margin: 10px 0 0 0;">Impulse VLSI Website</p>
          </div>
          <div class="content">
            <div class="info-box">
              <h3 style="margin-top: 0; color: #667eea;">👤 Student Information</h3>
              <p><span class="label">Name:</span> ${sanitizedData.name}</p>
              <p><span class="label">Email:</span> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
              <p><span class="label">Mobile:</span> <a href="tel:+91${sanitizedData.mobileNumber}">+91-${sanitizedData.mobileNumber}</a></p>
            </div>

            <div class="info-box">
              <h3 style="margin-top: 0; color: #667eea;">📚 Course Details</h3>
              <p><span class="label">Course Interested:</span> ${courseLabel}</p>
            </div>

            ${sanitizedData.comments ? `
            <div class="info-box">
              <h3 style="margin-top: 0; color: #667eea;">💬 Additional Comments</h3>
              <p style="background: #f1f3f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${sanitizedData.comments}</p>
            </div>
            ` : ''}

            <div style="background: #e7f5ff; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #1c7ed6;">
              <p style="margin: 0;"><strong>⏰ Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })} IST</p>
            </div>
          </div>
          <div class="footer">
            <p>This inquiry was automatically forwarded from your website contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // User confirmation email with professional styling
    const userEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; }
          .cta-button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .contact-info { background: #e7f5ff; padding: 20px; border-radius: 8px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">✨ Thank You for Your Interest!</h1>
            <p style="margin: 10px 0 0 0;">Impulse VLSI</p>
          </div>
          <div class="content">
            <p>Dear <strong>${sanitizedData.name}</strong>,</p>

            <p>Thank you for reaching out to us! We have successfully received your inquiry regarding <strong>${courseLabel}</strong>.</p>

            <div class="info-box">
              <h3 style="margin-top: 0; color: #667eea;">📋 Your Inquiry Summary</h3>
              <p><strong>Course:</strong> ${courseLabel}</p>
              <p><strong>Contact Email:</strong> ${sanitizedData.email}</p>
              <p><strong>Contact Phone:</strong> +91-${sanitizedData.mobileNumber}</p>
            </div>

            <div style="background: #d3f9d8; padding: 20px; border-radius: 8px; border-left: 4px solid #37b24d; margin: 20px 0;">
              <p style="margin: 0;"><strong>⏰ What's Next?</strong></p>
              <p style="margin: 10px 0 0 0;">Our team will review your inquiry and contact you within <strong>24 hours</strong> to discuss the course details, schedule, and next steps.</p>
            </div>

            <div class="contact-info">
              <h3 style="margin-top: 0; color: #1c7ed6;">📞 Need Immediate Assistance?</h3>
              <p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:+918147018156" style="color: #1c7ed6; text-decoration: none;">+91-8147018156</a></p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:admin@impulse-vlsi.com" style="color: #1c7ed6; text-decoration: none;">admin@impulse-vlsi.com</a></p>
              <p style="margin: 5px 0;"><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
            </div>

            <p style="margin-top: 30px;">We look forward to helping you advance your career in VLSI design!</p>

            <p style="margin-top: 30px;">Best regards,<br>
            <strong>The Impulse VLSI Team</strong><br>
            <em>Empowering VLSI Engineers</em></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send admin notification email
    await transporter.sendMail({
      from: `"Impulse VLSI" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'admin@impulse-vlsi.com',
      subject: `🎓 New Course Inquiry: ${courseLabel} - ${sanitizedData.name}`,
      html: adminEmailContent,
      replyTo: sanitizedData.email,
    });

    // Send user confirmation email
    await transporter.sendMail({
      from: `"Impulse VLSI" <${process.env.EMAIL_USER}>`,
      to: sanitizedData.email,
      subject: '✨ Thank you for your inquiry - Impulse VLSI',
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