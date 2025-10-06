import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FeedbackFormData {
  fullName: string;
  email: string;
  serviceUsed: string;
  overallRating: string;
  whatDidNotLike: string;
  whatWeCanImprove: string;
  easeOfUse: string;
  contentQuality: string;
  supportExperience: string;
  valueForMoney: string;
  wouldRecommend: string;
  favoriteFeature: string;
  additionalComments: string;
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
  const maxRequests = 3; // max 3 feedback submissions per minute

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

// Input validation
const validateInput = (data: FeedbackFormData): string[] => {
  const errors: string[] = [];

  // Full name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Please enter a valid email address');
  }

  // Service used validation
  if (!data.serviceUsed || data.serviceUsed.trim().length === 0) {
    errors.push('Please select a service');
  }

  // Rating validation
  const validRatings = ['1', '2', '3', '4', '5'];
  if (!data.overallRating || !validRatings.includes(data.overallRating)) {
    errors.push('Please provide a valid overall rating');
  }
  if (!data.easeOfUse || !validRatings.includes(data.easeOfUse)) {
    errors.push('Please provide a valid ease of use rating');
  }
  if (!data.contentQuality || !validRatings.includes(data.contentQuality)) {
    errors.push('Please provide a valid content quality rating');
  }
  if (!data.supportExperience || !validRatings.includes(data.supportExperience)) {
    errors.push('Please provide a valid support experience rating');
  }
  if (!data.valueForMoney || !validRatings.includes(data.valueForMoney)) {
    errors.push('Please provide a valid value for money rating');
  }

  // Required text fields validation
  if (!data.whatDidNotLike || data.whatDidNotLike.trim().length < 10) {
    errors.push('Please provide at least 10 characters for what you did not like');
  }
  if (!data.whatWeCanImprove || data.whatWeCanImprove.trim().length < 10) {
    errors.push('Please provide at least 10 characters for what we can improve');
  }
  if (!data.favoriteFeature || data.favoriteFeature.trim().length < 5) {
    errors.push('Please provide at least 5 characters for your favorite feature');
  }

  // Would recommend validation
  const validRecommendations = ['definitely', 'probably', 'maybe', 'probably-not', 'definitely-not'];
  if (!data.wouldRecommend || !validRecommendations.includes(data.wouldRecommend)) {
    errors.push('Please select whether you would recommend us');
  }

  // Additional comments validation (optional but limited)
  if (data.additionalComments && data.additionalComments.length > 1000) {
    errors.push('Additional comments should not exceed 1000 characters');
  }

  return errors;
};

// Sanitize input data
const sanitizeInput = (data: FeedbackFormData): FeedbackFormData => {
  const removeScripts = (str: string) =>
    str.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  return {
    fullName: removeScripts(data.fullName),
    email: data.email.trim().toLowerCase(),
    serviceUsed: removeScripts(data.serviceUsed),
    overallRating: data.overallRating,
    whatDidNotLike: removeScripts(data.whatDidNotLike),
    whatWeCanImprove: removeScripts(data.whatWeCanImprove),
    easeOfUse: data.easeOfUse,
    contentQuality: data.contentQuality,
    supportExperience: data.supportExperience,
    valueForMoney: data.valueForMoney,
    wouldRecommend: data.wouldRecommend,
    favoriteFeature: removeScripts(data.favoriteFeature),
    additionalComments: removeScripts(data.additionalComments || ''),
  };
};

// Get rating label
const getRatingLabel = (rating: string): string => {
  const labels: { [key: string]: string } = {
    '5': '5 - Excellent',
    '4': '4 - Good',
    '3': '3 - Average',
    '2': '2 - Below Average',
    '1': '1 - Poor',
  };
  return labels[rating] || rating;
};

// Get recommendation label
const getRecommendationLabel = (recommendation: string): string => {
  const labels: { [key: string]: string } = {
    'definitely': 'Definitely Yes',
    'probably': 'Probably Yes',
    'maybe': 'Maybe',
    'probably-not': 'Probably Not',
    'definitely-not': 'Definitely Not',
  };
  return labels[recommendation] || recommendation;
};

// Get service label
const getServiceLabel = (service: string): string => {
  const labels: { [key: string]: string } = {
    'consultancy': 'Consultancy',
    'fulltime-hiring': 'Full Time Hiring',
    'co-hiring': 'Co-Hiring',
    'fdp': 'Faculty Development Program',
    'skill-development': 'Skill Development Program',
    'internships': 'Internships',
    'academic-projects': 'Academic Projects',
    'guidance': 'Guidance & Mentorship',
    'integrated-courses': 'Integrated Courses',
    'analog-design': 'Analog Circuit Design',
    'physical-design': 'Physical Circuit Design',
    'digital-verification': 'Digital Design & Verification',
    'fpga-programming': 'FPGA Programming',
    'asic-design': 'ASIC Design',
    'system-verilog': 'System Verilog',
  };
  return labels[service] || service;
};

// Calculate average rating
const calculateAverageRating = (data: FeedbackFormData): number => {
  const ratings = [
    parseInt(data.overallRating),
    parseInt(data.easeOfUse),
    parseInt(data.contentQuality),
    parseInt(data.supportExperience),
    parseInt(data.valueForMoney),
  ];
  const sum = ratings.reduce((a, b) => a + b, 0);
  return sum / ratings.length;
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
    const rawData: FeedbackFormData = req.body;
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
    const serviceLabel = getServiceLabel(sanitizedData.serviceUsed);
    const averageRating = calculateAverageRating(sanitizedData).toFixed(2);

    // Admin notification email
    const adminEmailContent = `
      <h2>New Feedback from Impulse-VLSI Website</h2>

      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="margin-top: 0;">Feedback Summary</h3>
        <p><strong>Average Rating:</strong> ${averageRating}/5.0 ⭐</p>
        <p><strong>Service Used:</strong> ${serviceLabel}</p>
        <p><strong>Would Recommend:</strong> ${getRecommendationLabel(sanitizedData.wouldRecommend)}</p>
      </div>

      <h3>Contact Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${sanitizedData.fullName}</li>
        <li><strong>Email:</strong> ${sanitizedData.email}</li>
      </ul>

      <h3>Detailed Ratings:</h3>
      <ul>
        <li><strong>Overall Experience:</strong> ${getRatingLabel(sanitizedData.overallRating)}</li>
        <li><strong>Ease of Use:</strong> ${getRatingLabel(sanitizedData.easeOfUse)}</li>
        <li><strong>Content Quality:</strong> ${getRatingLabel(sanitizedData.contentQuality)}</li>
        <li><strong>Support Experience:</strong> ${getRatingLabel(sanitizedData.supportExperience)}</li>
        <li><strong>Value for Money:</strong> ${getRatingLabel(sanitizedData.valueForMoney)}</li>
      </ul>

      <div style="background-color: #fef2f2; padding: 15px; border-left: 4px solid #ef4444; margin: 20px 0;">
        <h3 style="color: #dc2626; margin-top: 0;">⚠️ What User Did Not Like:</h3>
        <p>${sanitizedData.whatDidNotLike}</p>
      </div>

      <div style="background-color: #fffbeb; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0;">
        <h3 style="color: #d97706; margin-top: 0;">💡 What We Can Improve:</h3>
        <p>${sanitizedData.whatWeCanImprove}</p>
      </div>

      <div style="background-color: #f0fdf4; padding: 15px; border-left: 4px solid #22c55e; margin: 20px 0;">
        <h3 style="color: #16a34a; margin-top: 0;">❤️ Favorite Feature:</h3>
        <p>${sanitizedData.favoriteFeature}</p>
      </div>

      ${sanitizedData.additionalComments ? `
      <div style="background-color: #eff6ff; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0;">
        <h3 style="color: #2563eb; margin-top: 0;">💬 Additional Comments:</h3>
        <p>${sanitizedData.additionalComments}</p>
      </div>
      ` : ''}

      <hr>
      <p><em>This feedback was submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</em></p>
    `;

    // User confirmation email
    const userEmailContent = `
      <h2>Thank you for your valuable feedback!</h2>
      <p>Dear ${sanitizedData.fullName},</p>

      <p>We sincerely appreciate you taking the time to share your experience with us regarding <strong>${serviceLabel}</strong>.</p>

      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Your Feedback Summary:</h3>
        <p><strong>Overall Rating:</strong> ${getRatingLabel(sanitizedData.overallRating)}</p>
        <p><strong>Service Used:</strong> ${serviceLabel}</p>
      </div>

      <p>Your insights are incredibly valuable to us and help us continuously improve our services to better serve you and all our students.</p>

      <p>We carefully review all feedback and will take your suggestions into consideration as we work to enhance our offerings.</p>

      <p>If you have any further questions or concerns, please don't hesitate to reach out to us:</p>
      <ul>
        <li><strong>Phone:</strong> +91 8147018156</li>
        <li><strong>Email:</strong> admin@impulse-vlsi.com</li>
      </ul>

      <p>Thank you again for helping us improve!</p>

      <p>Best regards,<br>
      Impulse-VLSI Team<br>
      Email: admin@impulse-vlsi.com<br>
      Phone: +91 8147018156</p>
    `;

    // Send admin notification email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'noreply@impulse-vlsi.com',
      to: 'admin@impulse-vlsi.com',
      subject: `New Feedback: ${serviceLabel} - ${averageRating}/5.0 ⭐ - ${sanitizedData.fullName}`,
      html: adminEmailContent,
    });

    // Send user confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'noreply@impulse-vlsi.com',
      to: sanitizedData.email,
      subject: 'Thank you for your feedback - Impulse-VLSI',
      html: userEmailContent,
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Thank you for your valuable feedback! We truly appreciate you taking the time to help us improve.',
    });

  } catch (error) {
    console.error('Feedback form error:', error);

    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your feedback. Please try again later.',
    });
  }
}
