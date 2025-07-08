import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { subscribeToNewsletter } from '../api/contact';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }
    
    setStatus('loading');

    const result = await subscribeToNewsletter({ email });
    
    if (result.success) {
      setStatus('success');
      setMessage(result.message);
      setEmail('');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } else {
      setStatus('error');
      setMessage(result.message);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (status !== 'idle') {
      setStatus('idle');
      setMessage('');
    }
  };
  return (
    <section id="newsletter" className="py-16 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Ahead of the Game
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive marketing insights, case studies, and strategies delivered to your inbox weekly.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
                disabled={status === 'loading'}
                className="flex-1 px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            {status === 'success' && (
              <div className="mt-4 flex items-center justify-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">{message}</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-4 flex items-center justify-center text-red-400">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">{message}</span>
              </div>
            )}
          </form>
          
          <p className="text-gray-400 text-sm mt-4">
            Join 10,000+ marketers. No spam, unsubscribe at any time. We respect your privacy.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div>
              <div className="text-white font-semibold mb-1">Weekly Insights</div>
              <div>Latest marketing trends & strategies</div>
            </div>
            <div>
              <div className="text-white font-semibold mb-1">Case Studies</div>
              <div>Real business transformations</div>
            </div>
            <div>
              <div className="text-white font-semibold mb-1">Free Resources</div>
              <div>Templates, guides & tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;