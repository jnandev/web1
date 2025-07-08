import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Users, TrendingUp, MapPin, Eye, ShoppingBag, ArrowRight, CheckCircle } from 'lucide-react';

const RetailMarketingPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Modern retail store interior"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Store className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Retail Store Marketing</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Transform Your Store Into a 
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Customer Magnet
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Turn foot traffic into loyal customers with our proven retail marketing strategies. 
                From visual merchandising to local SEO, we make your physical store irresistible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Store Audit
                </button>
                <Link 
                  to="/"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Retail Transformation Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Store Magnetism Score</span>
                    <span className="text-3xl font-bold">9.8/10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Browse-to-Buy Rate</span>
                    <span className="text-3xl font-bold">73%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Customer Dwell Time</span>
                    <span className="text-3xl font-bold">+18min</span>
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
              Is Your Store Invisible to Customers?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most retail stores struggle with the same challenges that keep customers away
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Eye className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Poor Visibility</h3>
              <p className="text-gray-300">Your store blends into the background, making it hard for potential customers to notice you</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Low Foot Traffic</h3>
              <p className="text-gray-300">Empty aisles and quiet cash registers despite being in a good location</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <ShoppingBag className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Poor Conversion</h3>
              <p className="text-gray-300">Browsers who don't buy, leaving without making a purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Retail Revolution Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven 5-step methodology transforms struggling stores into customer magnets
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Retail store transformation"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Store Audit & Analysis</h3>
                  <p className="text-gray-300">Complete assessment of your current setup, customer flow, and missed opportunities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Customer Journey Mapping</h3>
                  <p className="text-gray-300">Design the perfect path from sidewalk to checkout that maximizes engagement</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visual Merchandising</h3>
                  <p className="text-gray-300">Eye-catching displays and layouts that draw customers in and encourage purchases</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Local Marketing Campaigns</h3>
                  <p className="text-gray-300">Targeted advertising to bring your ideal customers through the door</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance Tracking</h3>
                  <p className="text-gray-300">Real-time analytics to measure success and optimize for even better results</p>
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
              Everything Your Store Needs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive retail marketing services designed to maximize your store's potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Store className="w-8 h-8" />, title: "Storefront Design", desc: "Eye-catching exterior that stops traffic" },
              { icon: <Eye className="w-8 h-8" />, title: "Window Displays", desc: "Compelling visuals that draw customers inside" },
              { icon: <MapPin className="w-8 h-8" />, title: "Local SEO", desc: "Dominate local search results" },
              { icon: <Users className="w-8 h-8" />, title: "Customer Experience", desc: "Seamless journey from entry to purchase" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Sales Training", desc: "Empower your team to close more sales" },
              { icon: <ShoppingBag className="w-8 h-8" />, title: "Loyalty Programs", desc: "Keep customers coming back for more" }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-white mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Empty to Extraordinary
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real transformations that turned ordinary stores into neighborhood destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2">The Queue Effect</div>
              <div className="text-gray-300 mb-4">Lines Out the Door</div>
              <p className="text-sm text-gray-400">"Went from 12 daily customers to having weekend queues"</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2">The Magnet Store</div>
              <div className="text-gray-300 mb-4">Neighborhood Destination</div>
              <p className="text-sm text-gray-400">"People now plan their day around visiting our store"</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2">The Buzz Factor</div>
              <div className="text-gray-300 mb-4">Social Media Famous</div>
              <p className="text-sm text-gray-400">"Customers take photos and tag us daily"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Store?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free store audit and discover exactly how to turn your retail space into a customer magnet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Store Audit
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

export default RetailMarketingPage;