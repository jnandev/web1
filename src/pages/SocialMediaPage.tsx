import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, Users, Heart, TrendingUp, MessageCircle, Share2, ArrowRight, CheckCircle } from 'lucide-react';

const SocialMediaPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Social media content creation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Smartphone className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Social Media Management</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Build Communities That
                <span className="block bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                  Drive Sales
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Engage your audience and build loyal communities with strategic social media content, 
                influencer partnerships, and community management that converts followers into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Grow My Following
                </button>
                <Link 
                  to="/"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View Social Success
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 backdrop-blur-sm border border-pink-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Social Media Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Engagement Rate</span>
                    <span className="text-3xl font-bold text-pink-400">14.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Follower Growth</span>
                    <span className="text-3xl font-bold text-red-400">+287%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Social-to-Sale Rate</span>
                    <span className="text-3xl font-bold text-pink-400">23%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Social Media Fails for Most Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Posting without strategy is like shouting into the void
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <MessageCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">No Engagement</h3>
              <p className="text-gray-300">Posts that get ignored, with followers who never interact or buy</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Wrong Audience</h3>
              <p className="text-gray-300">Attracting followers who aren't potential customers</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Share2 className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Inconsistent Content</h3>
              <p className="text-gray-300">Sporadic posting that fails to build momentum or community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Community Builder Framework
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven system for building engaged communities that drive real business results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Social media strategy session"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Audience Analysis</h3>
                  <p className="text-gray-300">Deep research to understand your ideal customers and where they spend time online</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
                  <p className="text-gray-300">Strategic content planning that educates, entertains, and converts</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Content Creation</h3>
                  <p className="text-gray-300">Professional content that stops the scroll and drives engagement</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Management</h3>
                  <p className="text-gray-300">Active engagement and relationship building with your audience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                  <p className="text-gray-300">Data-driven improvements to maximize reach, engagement, and conversions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Manage */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platforms We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic management across all major social media platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Smartphone className="w-8 h-8" />, title: "Instagram", desc: "Visual storytelling and influencer partnerships" },
              { icon: <Users className="w-8 h-8" />, title: "Facebook", desc: "Community building and targeted advertising" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "TikTok", desc: "Viral content and trend-based marketing" },
              { icon: <MessageCircle className="w-8 h-8" />, title: "LinkedIn", desc: "B2B networking and thought leadership" },
              { icon: <Share2 className="w-8 h-8" />, title: "Twitter", desc: "Real-time engagement and customer service" },
              { icon: <Heart className="w-8 h-8" />, title: "YouTube", desc: "Video content and educational marketing" }
            ].map((platform, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-pink-400 mb-4">{platform.icon}</div>
                <h3 className="text-lg font-bold mb-2">{platform.title}</h3>
                <p className="text-gray-300 text-sm">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Social Media Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real communities that became powerful sales engines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 border border-pink-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-pink-400">The Viral Hit</div>
              <div className="text-gray-300 mb-4">2.3M Views</div>
              <p className="text-sm text-gray-400">"Single post generated 1,200 orders"</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-red-400">The Community</div>
              <div className="text-gray-300 mb-4">50K Engaged Followers</div>
              <p className="text-sm text-gray-400">"Built from 500 to 50K in 8 months"</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 border border-orange-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-orange-400">The Converter</div>
              <div className="text-gray-300 mb-4">23% Social Sales</div>
              <p className="text-sm text-gray-400">"23% of all sales come from social media"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-900/50 to-red-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free social media audit and discover how to turn your followers into loyal customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Social Audit
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Social Success
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;