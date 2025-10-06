import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceType: string;
  specificSelection: string;
  requirements: string;
}

const schema = yup.object({
  fullName: yup
    .string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^[6-9]\d{9}$/, 'Please enter a valid Indian phone number'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  serviceType: yup
    .string()
    .required('Please select a service type'),
  specificSelection: yup
    .string()
    .required('Please select a specific service'),
  requirements: yup
    .string()
    .max(500, 'Requirements should not exceed 500 characters'),
});

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const serviceType = watch('serviceType');

  const serviceOptions = [
    { value: '', label: 'Select Service Type' },
    { value: 'industrial', label: 'Industrial Services' },
    { value: 'academic', label: 'Academic Services' },
    { value: 'courses', label: 'VLSI Courses' },
  ];

  const getSpecificOptions = () => {
    switch (serviceType) {
      case 'industrial':
        return [
          { value: '', label: 'Select Industrial Service' },
          { value: 'consultancy', label: 'Consultancy' },
          { value: 'fulltime-hiring', label: 'Full Time Hiring' },
          { value: 'co-hiring', label: 'Co-Hiring' },
        ];
      case 'academic':
        return [
          { value: '', label: 'Select Academic Service' },
          { value: 'fdp', label: 'Faculty Development Program' },
          { value: 'skill-development', label: 'Skill Development Program' },
          { value: 'internships', label: 'Internships' },
          { value: 'academic-projects', label: 'Academic Projects' },
          { value: 'guidance', label: 'Guidance & Mentorship' },
          { value: 'integrated-courses', label: 'Integrated Courses' },
        ];
      case 'courses':
        return [
          { value: '', label: 'Select Course' },
          { value: 'analog-design', label: 'Analog Circuit Design' },
          { value: 'physical-design', label: 'Physical Circuit Design' },
          { value: 'digital-verification', label: 'Digital Design & Verification' },
          { value: 'fpga-programming', label: 'FPGA Programming' },
          { value: 'asic-design', label: 'ASIC Design' },
          { value: 'system-verilog', label: 'System Verilog' },
        ];
      default:
        return [{ value: '', label: 'Select Service Type First' }];
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your inquiry has been submitted successfully. We will contact you within 24 hours.');
        reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error submitting your inquiry. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
          Get Started Today
        </h3>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
          <p className="text-green-700 text-sm">{submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-red-700 text-sm">{submitMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            {...register('fullName')}
            className={`input-field ${errors.fullName ? 'input-error' : ''}`}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="error-message">{errors.fullName.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register('phoneNumber')}
            className={`input-field ${errors.phoneNumber ? 'input-error' : ''}`}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && (
            <p className="error-message">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`input-field ${errors.email ? 'input-error' : ''}`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
            Service/Course Type *
          </label>
          <select
            id="serviceType"
            {...register('serviceType')}
            className={`input-field ${errors.serviceType ? 'input-error' : ''}`}
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="error-message">{errors.serviceType.message}</p>
          )}
        </div>

        {/* Specific Selection */}
        <div>
          <label htmlFor="specificSelection" className="block text-sm font-medium text-gray-700 mb-2">
            Specific Selection *
          </label>
          <select
            id="specificSelection"
            {...register('specificSelection')}
            className={`input-field ${errors.specificSelection ? 'input-error' : ''}`}
            disabled={!serviceType}
          >
            {getSpecificOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.specificSelection && (
            <p className="error-message">{errors.specificSelection.message}</p>
          )}
        </div>

        {/* Requirements */}
        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
            Describe Your Requirements
          </label>
          <textarea
            id="requirements"
            rows={5}
            {...register('requirements')}
            className={`input-field resize-none ${errors.requirements ? 'input-error' : ''}`}
            placeholder="Tell us more about your specific needs and requirements..."
          />
          {errors.requirements && (
            <p className="error-message">{errors.requirements.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className={`w-full btn-primary flex items-center justify-center space-x-2 ${
            isSubmitting || !isValid ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Inquiry</span>
            </>
          )}
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Or contact us directly at{' '}
          <a href="tel:+918147018156" className="text-primary-900 font-medium hover:underline">
            +91 8147018156
          </a>{' '}
          or{' '}
          <a href="mailto:admin@impulse-vlsi.com" className="text-primary-900 font-medium hover:underline">
            admin@impulse-vlsi.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;