import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Target, Users, TrendingUp, Eye, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const BrandDevelopmentPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Brand development workspace"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Palette className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Brand Development</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Build Brands That
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Customers Love
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create powerful brand identities that resonate with your audience and drive customer loyalty. 
                From logo design to brand strategy, we build brands that stand out and sell.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Build My Brand
                </button>
                <Link 
                  to="/"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View Brand Portfolio
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Brand Impact Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Brand Recognition</span>
                    <span className="text-3xl font-bold text-purple-400">92%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Customer Loyalty</span>
                    <span className="text-3xl font-bold text-pink-400">87%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Premium Pricing Power</span>
                    <span className="text-3xl font-bold text-purple-400">+34%</span>
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
              Why Most Brands Fail to Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In today's crowded marketplace, generic branding is the kiss of death
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Eye className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Invisible Identity</h3>
              <p className="text-gray-300">Generic logos and messaging that blend into the background noise</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">No Emotional Connection</h3>
              <p className="text-gray-300">Brands that fail to create meaningful relationships with customers</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Confused Positioning</h3>
              <p className="text-gray-300">Unclear value propositions that leave customers wondering what you do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Brand Magnetism Method
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic approach to building brands that attract, engage, and convert customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Brand development process"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Brand Discovery</h3>
                  <p className="text-gray-300">Deep dive into your business, values, and target audience to uncover your unique story</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategic Positioning</h3>
                  <p className="text-gray-300">Define your unique value proposition and competitive advantage in the market</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visual Identity Design</h3>
                  <p className="text-gray-300">Create stunning logos, colors, and visual elements that capture your brand essence</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Brand Voice & Messaging</h3>
                  <p className="text-gray-300">Develop compelling messaging that speaks directly to your ideal customers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Brand Guidelines</h3>
                  <p className="text-gray-300">Complete brand standards to ensure consistency across all touchpoints</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Brand Development
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build a powerful brand that drives business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Palette className="w-8 h-8" />, title: "Logo & Visual Identity", desc: "Memorable logos and visual systems" },
              { icon: <Target className="w-8 h-8" />, title: "Brand Strategy", desc: "Clear positioning and messaging" },
              { icon: <Users className="w-8 h-8" />, title: "Audience Research", desc: "Deep customer insights and personas" },
              { icon: <Heart className="w-8 h-8" />, title: "Brand Personality", desc: "Authentic voice and character" },
              { icon: <Eye className="w-8 h-8" />, title: "Brand Guidelines", desc: "Comprehensive usage standards" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Brand Activation", desc: "Launch strategies and campaigns" }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
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
              Brand Transformation Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real brands that went from unknown to unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-purple-400">The Recognition</div>
              <div className="text-gray-300 mb-4">92% Brand Recall</div>
              <p className="text-sm text-gray-400">"Customers now recognize us instantly"</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 border border-pink-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-pink-400">The Premium</div>
              <div className="text-gray-300 mb-4">34% Price Increase</div>
              <p className="text-sm text-gray-400">"Strong brand allows premium pricing"</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-red-400">The Loyalty</div>
              <div className="text-gray-300 mb-4">87% Retention Rate</div>
              <p className="text-sm text-gray-400">"Customers become brand advocates"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build a Magnetic Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free brand audit and discover how to create a brand that customers love and competitors fear
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Brand Audit
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Brand Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandDevelopmentPage;