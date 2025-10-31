import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  mobileNumber: string;
  courseName: string;
  comments?: string;
}

const schema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  mobileNumber: yup
    .string()
    .required('Mobile number is required')
    .matches(/^[6-9]\d{9}$/, 'Please enter a valid Indian mobile number'),
  courseName: yup
    .string()
    .required('Please select a course'),
  comments: yup
    .string()
    .max(500, 'Comments should not exceed 500 characters'),
});

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const courseOptions = [
    { value: '', label: 'Select Course' },
    { value: 'analog-circuit-design', label: 'Analog Circuit Design' },
    { value: 'analog-layout-design', label: 'Analog/Custom Layout Design' },
    { value: 'physical-design', label: 'Physical Design' },
    { value: 'digital-rtl-verification', label: 'Digital/RTL Design & Verification' },
    { value: 'dft', label: 'Design for Testability' },
    { value: 'fpga', label: 'Design with FPGA' },
    { value: 'embedded-iot', label: 'Embedded Systems / IOT' },
    { value: 'post-silicon', label: 'Post Silicon Validation' },
  ];

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
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={`input-field ${errors.name ? 'input-error' : ''}`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Id *
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

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number *
          </label>
          <input
            type="tel"
            id="mobileNumber"
            {...register('mobileNumber')}
            className={`input-field ${errors.mobileNumber ? 'input-error' : ''}`}
            placeholder="Enter your mobile number"
          />
          {errors.mobileNumber && (
            <p className="error-message">{errors.mobileNumber.message}</p>
          )}
        </div>

        {/* Course Name */}
        <div>
          <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 mb-2">
            Course Name *
          </label>
          <select
            id="courseName"
            {...register('courseName')}
            className={`input-field ${errors.courseName ? 'input-error' : ''}`}
          >
            {courseOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.courseName && (
            <p className="error-message">{errors.courseName.message}</p>
          )}
        </div>

        {/* Comments */}
        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
            Comments
          </label>
          <textarea
            id="comments"
            rows={5}
            {...register('comments')}
            className={`input-field resize-none ${errors.comments ? 'input-error' : ''}`}
            placeholder="Any additional comments or requirements..."
          />
          {errors.comments && (
            <p className="error-message">{errors.comments.message}</p>
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
            +91-8147018156
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