import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Camera, Users, TrendingUp, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const RealEstateMarketingPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Luxury real estate property"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Home className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Real Estate Marketing</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Sell Properties
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Faster & Higher
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Turn listings into sales with our proven real estate marketing system. 
                From virtual tours to targeted campaigns, we help properties sell faster at premium prices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Market My Property
                </button>
                <Link 
                  to="/"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Property Sales Accelerator</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Listing-to-Showing Rate</span>
                    <span className="text-3xl font-bold text-yellow-400">87%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Showing-to-Offer Rate</span>
                    <span className="text-3xl font-bold text-orange-400">64%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Average Sale Price vs List</span>
                    <span className="text-3xl font-bold text-yellow-400">103%</span>
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
              Why Properties Sit on the Market
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In today's competitive market, traditional real estate marketing just isn't enough
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Camera className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Poor Presentation</h3>
              <p className="text-gray-300">Low-quality photos and basic listings that fail to showcase the property's potential</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Limited Reach</h3>
              <p className="text-gray-300">Relying on MLS alone while missing out on digital marketing opportunities</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Slow Sales Process</h3>
              <p className="text-gray-300">Properties that linger on the market, forcing price reductions and lost profits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Property Sales Accelerator
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic marketing approach that positions properties for maximum visibility and faster sales
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Real estate marketing materials"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Market Analysis</h3>
                  <p className="text-gray-300">Comprehensive research to position your property competitively in the market</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Property Staging</h3>
                  <p className="text-gray-300">Professional staging advice to make your property irresistible to buyers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Photography</h3>
                  <p className="text-gray-300">Stunning visuals and virtual tours that showcase your property's best features</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-Channel Marketing</h3>
                  <p className="text-gray-300">Strategic campaigns across digital platforms to reach qualified buyers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Lead Nurturing</h3>
                  <p className="text-gray-300">Follow-up systems that convert interested prospects into serious buyers</p>
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
              Complete Real Estate Marketing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to market properties effectively and close deals faster
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Camera className="w-8 h-8" />, title: "Professional Photography", desc: "High-quality photos that sell properties" },
              { icon: <Home className="w-8 h-8" />, title: "Virtual Tours", desc: "Immersive 3D experiences for remote viewing" },
              { icon: <MapPin className="w-8 h-8" />, title: "Local SEO", desc: "Dominate local property searches" },
              { icon: <Users className="w-8 h-8" />, title: "Lead Generation", desc: "Attract qualified buyers and investors" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Market Analytics", desc: "Data-driven pricing and positioning" },
              { icon: <Clock className="w-8 h-8" />, title: "Fast-Track Sales", desc: "Proven systems to accelerate closings" }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-yellow-400 mb-4">{service.icon}</div>
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
              Property Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real transformations that turned stale listings into sold signs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-yellow-400">The Bidding War</div>
              <div className="text-gray-300 mb-4">12 Offers in 48 Hours</div>
              <p className="text-sm text-gray-400">"Sold 18% above asking after multiple offers"</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-orange-400">The Quick Flip</div>
              <div className="text-gray-300 mb-4">Listed Friday, Sold Monday</div>
              <p className="text-sm text-gray-400">"Fastest sale in neighborhood history"</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border border-red-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-red-400">The Comeback King</div>
              <div className="text-gray-300 mb-4">180 Days to 18 Days</div>
              <p className="text-sm text-gray-400">"Relisted and sold in under 3 weeks"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-900/50 to-orange-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Sell Faster & Higher?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free property marketing analysis and discover how to position your listings for maximum profit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Property Analysis
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateMarketingPage;