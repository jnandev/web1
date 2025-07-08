import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Underdog Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight">UNDERDOG</span>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md mb-6">
              Transforming ambitious brands into market leaders through fearless creativity 
              and strategic innovation. Every champion was once an underdog.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('beliefs')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Our Beliefs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <Link 
                  to="/case-studies"
                  className="hover:text-white transition-colors duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog"
                  className="hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources"
                  className="hover:text-white transition-colors duration-300"
                >
                  Free Resources
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing"
                  className="hover:text-white transition-colors duration-300"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-sm">hello@underdog.agency</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-sm">New York, Los Angeles, London</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Underdog Marketing Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;