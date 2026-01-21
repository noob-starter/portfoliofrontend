import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../theme/colors';
import Button from '../components/Button';
import {
  sanitizeInput,
  isValidEmail,
  checkRateLimit,
  validateFormData
} from '../utils/security';
import logger from '../utils/logger';
import { submitInquiry } from '../posts/submitInquiry.js';
import managementIcon from '../assets/icons/management.png';
import collaborationIcon from '../assets/icons/collaboration.png';
import interviewIcon from '../assets/icons/interview.png';
import teaIcon from '../assets/icons/tea.png';
import sendIcon from '../assets/icons/send.png';
import padlockIcon from '../assets/icons/padlock.png';

const Inquire = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setErrors({});
    setSuccessMessage('');

    // 1. Check rate limit (3 submissions per 5 minutes)
    const rateCheck = checkRateLimit('inquire-form', 3, 300000);
    if (!rateCheck.allowed) {
      const waitTime = Math.ceil((rateCheck.resetTime - Date.now()) / 1000);
      setErrors({
        general: `Too many submissions. Please wait ${Math.ceil(waitTime / 60)} minute(s) before trying again.`
      });
      return;
    }

    // 2. Validate all fields are filled
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    // 3. Validate email format
    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // 4. Sanitize and validate form data
    const sanitizedData = {
      firstName: sanitizeInput(formData.firstName),
      lastName: sanitizeInput(formData.lastName),
      email: formData.email.trim().toLowerCase(),
      message: sanitizeInput(formData.message),
    };

    const validation = validateFormData(sanitizedData);
    if (!validation.valid) {
      newErrors.general = validation.errors.join('. ');
    }

    // 5. Check for errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 6. Submit form
    setIsSubmitting(true);

    try {
      // Submit inquiry using the fetch function
      const response = await submitInquiry(sanitizedData);

      logger.log('Form submitted successfully:', response);

      setSuccessMessage('Thank you for giving us your valuable time! Your message has been sent successfully. I\'ll get back to you within 24 hours.');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });

    } catch (error) {
      logger.error('Form submission error:', error);
      setErrors({
        general: error.response?.data?.message || 'An error occurred while sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whyReachOutData = [
    {
      icon: managementIcon,
      alt: "Professional Projects",
      title: "Professional Projects",
      description: "Looking for a skilled developer to bring your vision to life",
      gradient: "from-purple-400 to-pink-400",
      delay: 0.4,
      direction: -30
    },
    {
      icon: collaborationIcon,
      alt: "Collaboration",
      title: "Collaboration",
      description: "Want to collaborate on open-source or innovative projects",
      gradient: "from-blue-400 to-purple-400",
      delay: 0.5,
      direction: 30
    },
    {
      icon: interviewIcon,
      alt: "Technical Consultation",
      title: "Technical Consultation",
      description: "Need expert advice on architecture, technologies, or best practices",
      gradient: "from-pink-400 to-yellow-400",
      delay: 0.6,
      direction: -30
    },
    {
      icon: teaIcon,
      alt: "Just Chat",
      title: "Just Chat",
      description: "Interested in discussing tech, AI, or grabbing a virtual coffee",
      gradient: "from-yellow-400 to-blue-400",
      delay: 0.7,
      direction: 30
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.tertiary }}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-pearl-50 to-green-50"></div>

        {/* Decorative circles */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.4 }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-8 left-50 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.6 }}
        ></motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-7xl md:text-8xl font-bold text-gray-800 mb-6 tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            LET'S CONNECT
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Ready to discuss your next project or collaboration opportunity?
          </motion.p>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24"></div>

      <div className="flex flex-col items-center justify-center w-full gap-24 py-16">
        <div className="w-[75%] mx-auto flex flex-col gap-24">

          {/* Introduction Section */}
          <motion.section
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center mb-16 px-6">
              <motion.h2
                className="text-5xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Whether you have a project idea, need technical consultation, or want to
                  collaborate on something amazing, I'd love to hear from you. Fill out
                  the form below and I'll get back to you within 24 hours.
              </motion.p>
            </div>
          </motion.section>

          {/* Send an Inquiry Form Section */}
          <motion.section
            className="w-full flex justify-center"
            style={{ padding: '2rem 0' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-4xl px-6">
              <motion.div
                className="glass rounded-md p-12"
                style={{ padding: '3rem' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <motion.h3
                  className="text-3xl font-bold text-gray-800 mb-8"
                  style={{ marginBottom: '2rem', textAlign: 'center' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Send an Inquiry
                </motion.h3>

                {/* Success Message */}
                {successMessage && (
                  <motion.div
                    className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="font-medium">{successMessage}</p>
                  </motion.div>
                )}

                {/* General Error Message */}
                {errors.general && (
                  <motion.div
                    className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="font-medium">{errors.general}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" style={{ padding: '0.5rem' }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gap: '1.5rem',
                      marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem 0' }}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2"
                             style={{ marginBottom: '0.75rem', paddingLeft: '0.25rem' }}>
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white/50 border
                        ${errors.firstName ? 'border-red-500' : 'border-gray-200'}
                        focus:outline-none focus:ring-2
                        ${errors.firstName ? 'focus:ring-red-300' : 'focus:ring-purple-300'}
                        transition-all`}
                        placeholder="Pratik"
                        style={{ padding: '0.875rem 1rem' }}
                        maxLength="50"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>

                    <div style={{ padding: '0.5rem 0' }}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2"
                             style={{ marginBottom: '0.75rem', paddingLeft: '0.25rem' }}>
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white/50 border
                        ${errors.lastName ? 'border-red-500' : 'border-gray-200'}
                        focus:outline-none focus:ring-2
                        ${errors.lastName ? 'focus:ring-red-300' : 'focus:ring-purple-300'}
                        transition-all`}
                        placeholder="Yawalkar"
                        style={{ padding: '0.875rem 1rem' }}
                        maxLength="50"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div style={{ padding: '0.5rem 0', marginBottom: '1rem' }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2"
                           style={{ marginBottom: '0.75rem', paddingLeft: '0.25rem' }}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/50 border
                      ${errors.email ? 'border-red-500' : 'border-gray-200'}
                      focus:outline-none focus:ring-2
                      ${errors.email ? 'focus:ring-red-300' : 'focus:ring-purple-300'}
                      transition-all`}
                      placeholder="pratik.yawalkar@gmail.com"
                      style={{ padding: '0.875rem 1rem' }}
                      maxLength="100"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div style={{ padding: '0.5rem 0', marginBottom: '1rem' }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2"
                           style={{ marginBottom: '0.75rem', paddingLeft: '0.25rem' }}>
                      Tell me about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-xl bg-white/50 border
                      ${errors.message ? 'border-red-500' : 'border-gray-200'}
                      focus:outline-none focus:ring-2
                      ${errors.message ? 'focus:ring-red-300' : 'focus:ring-purple-300'}
                      transition-all resize-none`}
                      placeholder="Share your ideas, goals, and what you're looking to achieve with me..."
                      style={{ padding: '1rem' }}
                      maxLength="1000"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                    <Button
                      onClick={handleSubmit}
                      content={isSubmitting ? "Sending..." : "Send Message"}
                      icon={
                        isSubmitting ? (
                          <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        ) : (
                          <img src={sendIcon} alt="Send" className="w-5 h-5" />
                        )
                      }
                      className="text-lg"
                      disabled={isSubmitting}
                    />
                  </div>

                  <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2" style={{ marginTop: '1.5rem' }}>
                    <img src={padlockIcon} alt="Secure" className="w-4 h-4" />
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </motion.div>
            </div>
          </motion.section>

          {/* Why Reach Out Section */}
          <motion.section
            className="w-full flex justify-center"
            style={{ padding: '2rem 0' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-4xl px-6">
              <motion.div
                className="glass rounded-md p-12"
                style={{ padding: '3rem' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h3
                  className="text-3xl font-bold text-gray-800 mb-8 text-center"
                  style={{ marginBottom: '2.5rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Why Reach Out?
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ gap: '2rem', padding: '1rem' }}>
                  {whyReachOutData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      style={{ padding: '1.25rem', gap: '1.25rem' }}
                      initial={{ opacity: 0, x: item.direction }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: item.delay }}
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                        <img src={item.icon} alt={item.alt} className="image w-9 h-9" />
                      </div>
                      <div style={{ paddingTop: '0.25rem' }}>
                        <h4 className="h4-text font-bold text-gray-800 mb-1" style={{ marginBottom: '0.5rem' }}>
                          {item.title}
                        </h4>
                        <p className="p-text text-gray-700 text-sm" style={{ padding: '0.25rem 0' }}>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Spacer */}
          <div className="h-24"></div>
        </div>
      </div>
    </div>
  );
};

export default Inquire;

