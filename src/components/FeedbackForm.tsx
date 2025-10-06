import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, CheckCircle, AlertCircle, Loader2, MessageSquare } from 'lucide-react';

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
  additionalComments?: string;
}

const schema = yup.object({
  fullName: yup
    .string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  serviceUsed: yup
    .string()
    .required('Please select a service'),
  overallRating: yup
    .string()
    .required('Please rate your overall experience'),
  whatDidNotLike: yup
    .string()
    .required('Please tell us what you did not like')
    .min(10, 'Please provide at least 10 characters'),
  whatWeCanImprove: yup
    .string()
    .required('Please tell us what we can improve')
    .min(10, 'Please provide at least 10 characters'),
  easeOfUse: yup
    .string()
    .required('Please rate ease of use'),
  contentQuality: yup
    .string()
    .required('Please rate content quality'),
  supportExperience: yup
    .string()
    .required('Please rate support experience'),
  valueForMoney: yup
    .string()
    .required('Please rate value for money'),
  wouldRecommend: yup
    .string()
    .required('Please let us know if you would recommend us'),
  favoriteFeature: yup
    .string()
    .required('Please tell us your favorite feature')
    .min(5, 'Please provide at least 5 characters'),
  additionalComments: yup
    .string()
    .max(1000, 'Additional comments should not exceed 1000 characters'),
});

const FeedbackForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FeedbackFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const serviceOptions = [
    { value: '', label: 'Select Service/Course' },
    { value: 'consultancy', label: 'Consultancy' },
    { value: 'fulltime-hiring', label: 'Full Time Hiring' },
    { value: 'co-hiring', label: 'Co-Hiring' },
    { value: 'fdp', label: 'Faculty Development Program' },
    { value: 'skill-development', label: 'Skill Development Program' },
    { value: 'internships', label: 'Internships' },
    { value: 'academic-projects', label: 'Academic Projects' },
    { value: 'guidance', label: 'Guidance & Mentorship' },
    { value: 'integrated-courses', label: 'Integrated Courses' },
    { value: 'analog-design', label: 'Analog Circuit Design' },
    { value: 'physical-design', label: 'Physical Circuit Design' },
    { value: 'digital-verification', label: 'Digital Design & Verification' },
    { value: 'fpga-programming', label: 'FPGA Programming' },
    { value: 'asic-design', label: 'ASIC Design' },
    { value: 'system-verilog', label: 'System Verilog' },
  ];

  const ratingOptions = [
    { value: '', label: 'Select Rating' },
    { value: '5', label: '5 - Excellent' },
    { value: '4', label: '4 - Good' },
    { value: '3', label: '3 - Average' },
    { value: '2', label: '2 - Below Average' },
    { value: '1', label: '1 - Poor' },
  ];

  const recommendOptions = [
    { value: '', label: 'Select Option' },
    { value: 'definitely', label: 'Definitely Yes' },
    { value: 'probably', label: 'Probably Yes' },
    { value: 'maybe', label: 'Maybe' },
    { value: 'probably-not', label: 'Probably Not' },
    { value: 'definitely-not', label: 'Definitely Not' },
  ];

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your valuable feedback! We truly appreciate you taking the time to help us improve.');
        reset();
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error submitting your feedback. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
          <MessageSquare className="w-8 h-8 text-primary-900" />
        </div>
        <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">
          Share Your Feedback
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your feedback helps us improve our services and better serve you. Please take a few moments to share your experience with us.
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

        {/* Service Used */}
        <div>
          <label htmlFor="serviceUsed" className="block text-sm font-medium text-gray-700 mb-2">
            Which service/course did you use? *
          </label>
          <select
            id="serviceUsed"
            {...register('serviceUsed')}
            className={`input-field ${errors.serviceUsed ? 'input-error' : ''}`}
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.serviceUsed && (
            <p className="error-message">{errors.serviceUsed.message}</p>
          )}
        </div>

        {/* Overall Rating */}
        <div>
          <label htmlFor="overallRating" className="block text-sm font-medium text-gray-700 mb-2">
            Overall Experience Rating *
          </label>
          <select
            id="overallRating"
            {...register('overallRating')}
            className={`input-field ${errors.overallRating ? 'input-error' : ''}`}
          >
            {ratingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.overallRating && (
            <p className="error-message">{errors.overallRating.message}</p>
          )}
        </div>

        {/* REQUIRED: What did you not like? */}
        <div>
          <label htmlFor="whatDidNotLike" className="block text-sm font-medium text-gray-700 mb-2">
            What did you not like about our service? *
          </label>
          <textarea
            id="whatDidNotLike"
            rows={4}
            {...register('whatDidNotLike')}
            className={`input-field resize-none ${errors.whatDidNotLike ? 'input-error' : ''}`}
            placeholder="Please tell us what aspects of our service you were not satisfied with..."
          />
          {errors.whatDidNotLike && (
            <p className="error-message">{errors.whatDidNotLike.message}</p>
          )}
        </div>

        {/* REQUIRED: What can we improve? */}
        <div>
          <label htmlFor="whatWeCanImprove" className="block text-sm font-medium text-gray-700 mb-2">
            What can we improve? *
          </label>
          <textarea
            id="whatWeCanImprove"
            rows={4}
            {...register('whatWeCanImprove')}
            className={`input-field resize-none ${errors.whatWeCanImprove ? 'input-error' : ''}`}
            placeholder="Please share specific suggestions on how we can improve our services..."
          />
          {errors.whatWeCanImprove && (
            <p className="error-message">{errors.whatWeCanImprove.message}</p>
          )}
        </div>

        {/* Ease of Use Rating */}
        <div>
          <label htmlFor="easeOfUse" className="block text-sm font-medium text-gray-700 mb-2">
            How would you rate the ease of use/learning experience? *
          </label>
          <select
            id="easeOfUse"
            {...register('easeOfUse')}
            className={`input-field ${errors.easeOfUse ? 'input-error' : ''}`}
          >
            {ratingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.easeOfUse && (
            <p className="error-message">{errors.easeOfUse.message}</p>
          )}
        </div>

        {/* Content Quality Rating */}
        <div>
          <label htmlFor="contentQuality" className="block text-sm font-medium text-gray-700 mb-2">
            How would you rate the quality of content/material provided? *
          </label>
          <select
            id="contentQuality"
            {...register('contentQuality')}
            className={`input-field ${errors.contentQuality ? 'input-error' : ''}`}
          >
            {ratingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.contentQuality && (
            <p className="error-message">{errors.contentQuality.message}</p>
          )}
        </div>

        {/* Support Experience Rating */}
        <div>
          <label htmlFor="supportExperience" className="block text-sm font-medium text-gray-700 mb-2">
            How would you rate your support/mentorship experience? *
          </label>
          <select
            id="supportExperience"
            {...register('supportExperience')}
            className={`input-field ${errors.supportExperience ? 'input-error' : ''}`}
          >
            {ratingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.supportExperience && (
            <p className="error-message">{errors.supportExperience.message}</p>
          )}
        </div>

        {/* Value for Money Rating */}
        <div>
          <label htmlFor="valueForMoney" className="block text-sm font-medium text-gray-700 mb-2">
            How would you rate the value for money? *
          </label>
          <select
            id="valueForMoney"
            {...register('valueForMoney')}
            className={`input-field ${errors.valueForMoney ? 'input-error' : ''}`}
          >
            {ratingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.valueForMoney && (
            <p className="error-message">{errors.valueForMoney.message}</p>
          )}
        </div>

        {/* Would Recommend */}
        <div>
          <label htmlFor="wouldRecommend" className="block text-sm font-medium text-gray-700 mb-2">
            Would you recommend us to others? *
          </label>
          <select
            id="wouldRecommend"
            {...register('wouldRecommend')}
            className={`input-field ${errors.wouldRecommend ? 'input-error' : ''}`}
          >
            {recommendOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.wouldRecommend && (
            <p className="error-message">{errors.wouldRecommend.message}</p>
          )}
        </div>

        {/* Favorite Feature */}
        <div>
          <label htmlFor="favoriteFeature" className="block text-sm font-medium text-gray-700 mb-2">
            What was your favorite feature or aspect of our service? *
          </label>
          <textarea
            id="favoriteFeature"
            rows={3}
            {...register('favoriteFeature')}
            className={`input-field resize-none ${errors.favoriteFeature ? 'input-error' : ''}`}
            placeholder="Tell us what you liked the most..."
          />
          {errors.favoriteFeature && (
            <p className="error-message">{errors.favoriteFeature.message}</p>
          )}
        </div>

        {/* Additional Comments */}
        <div>
          <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700 mb-2">
            Any additional comments or suggestions?
          </label>
          <textarea
            id="additionalComments"
            rows={4}
            {...register('additionalComments')}
            className={`input-field resize-none ${errors.additionalComments ? 'input-error' : ''}`}
            placeholder="Feel free to share any other thoughts or feedback..."
          />
          {errors.additionalComments && (
            <p className="error-message">{errors.additionalComments.message}</p>
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
              <span>Submit Feedback</span>
            </>
          )}
        </button>
      </form>

      {/* Thank You Note */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Thank you for taking the time to provide your feedback. Your insights help us continuously improve our services.
        </p>
      </div>
    </div>
  );
};

export default FeedbackForm;
