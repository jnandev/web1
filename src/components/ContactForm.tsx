import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';
import { ContactFormData } from '../api/contact';

const ContactForm = () => {
  const { status, message, submit, reset } = useContactForm();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    businessType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.businessType || !formData.message.trim()) {
      return;
    }
    
    await submit(formData);
    
    if (status === 'success') {
      setFormData({
        name: '',
        email: '',
        company: '',
        businessType: '',
        message: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Reset status when user starts typing again
    if (status !== 'idle') {
      reset();
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Get Started Today</h3>
        <p className="text-gray-300">Tell us about your business and marketing goals</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company/Business Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300"
            placeholder="Your business name"
          />
        </div>

        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-2">
            Business Type *
          </label>
          <select
            id="businessType"
            name="businessType"
            required
            value={formData.businessType}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gray-400 transition-colors duration-300"
          >
            <option value="">Select your business type</option>
            <option value="retail-store">Retail Store/Physical Location</option>
            <option value="ecommerce">E-commerce/Online Store</option>
            <option value="real-estate">Real Estate/Property</option>
            <option value="restaurant">Restaurant/Food Service</option>
            <option value="service-business">Service Business</option>
            <option value="fitness">Fitness/Health</option>
            <option value="beauty">Beauty/Wellness</option>
            <option value="technology">Technology/Software</option>
            <option value="education">Education/Training</option>
            <option value="healthcare">Healthcare</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Tell us about your marketing goals *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300 resize-none"
            placeholder="Describe your business, current challenges, and what you'd like to achieve..."
          ></textarea>
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="flex items-center text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="text-sm">{message}</span>
          </div>
        )}
        
        {status === 'error' && (
          <div className="flex items-center text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="text-sm">{message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="group w-full bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <span className="group-hover:tracking-wider transition-all duration-300">
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </span>
          {status !== 'loading' && (
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          )}
        </button>
        
        <p className="text-gray-400 text-sm text-center">
          We'll respond within 24 hours with a custom strategy for your business.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;