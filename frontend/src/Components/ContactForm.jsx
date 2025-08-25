import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Contact Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Side - Heading */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight font-poppins">
              <span className="block">LET'S WORK</span>
              <span className="block">TOGETHER</span>
            </h1>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col items-start lg:items-end justify-start">
            <div className="text-right">
              <p className="text-gray-700 text-lg mb-2 font-poppins">Dubai PO Box 111727</p>
              <a
                href="tel:+9714238100"
                className="text-gray-700 hover:text-[#2E463C] text-lg block mb-2 transition-colors duration-200 font-poppins"
              >
                +971 423 8100
              </a>
              <a
                href="mailto:info@kingshaus.co"
                className="text-gray-700 hover:text-[#2E463C] text-lg block transition-colors duration-200 font-poppins"
              >
                info@kingshaus.co
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form - Full width */}
        <div className="w-full">
          {/* Form Container - Full width */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="w-full">
          {/* Two inputs per line - First Name + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* First Name */}
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                required
                className="w-full px-4 py-2 pb-2 text-base text-gray-900 border-b border-gray-300 focus:border-[#2E463C] focus:outline-none transition-colors duration-200 placeholder-gray-500 font-poppins"
              />
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name*"
                required
                className="w-full px-4 py-2 pb-2 text-base text-gray-900 border-b border-gray-300 focus:border-[#2E463C] focus:outline-none transition-colors duration-200 placeholder-gray-500 font-poppins"
              />
            </div>
          </div>

          {/* Two inputs per line - Business Email + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Business Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Business Email*"
                required
                className="w-full px-4 py-2 pb-2 text-base text-gray-900 border-b border-gray-300 focus:border-[#2E463C] focus:outline-none transition-colors duration-200 placeholder-gray-500 font-poppins"
              />
            </div>

            {/* Company */}
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company*"
                required
                className="w-full px-4 py-2 pb-2 text-base text-gray-900 border-b border-gray-300 focus:border-[#2E463C] focus:outline-none transition-colors duration-200 placeholder-gray-500 font-poppins"
              />
            </div>
          </div>

          {/* Message/Enquiry - Full width */}
          <div className="mb-8">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message/Enquiry"
              rows="4"
              className="w-full px-4 py-2 pb-2 text-base text-gray-900 border-b border-gray-300 focus:border-[#2E463C] focus:outline-none transition-colors duration-200 placeholder-gray-500 resize-none font-poppins"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="bg-[#2E463C] text-white px-5 py-2.5 rounded text-base font-medium hover:bg-[#1a2a22] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2E463C] focus:ring-offset-2 font-poppins"
            >
              Send
            </button>
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-600 font-poppins">
            By submitting this form, you agree to our{' '}
            <a
              href="#privacy-policy"
              className="text-[#333] underline hover:text-[#2E463C] transition-colors duration-200 font-poppins"
            >
              Cookies & Privacy Policy
            </a>
          </p>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
