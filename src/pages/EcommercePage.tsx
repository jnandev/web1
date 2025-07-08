import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, TrendingUp, Smartphone, Search, CreditCard, ArrowRight, CheckCircle } from 'lucide-react';

const EcommercePage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="E-commerce workspace"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">E-Commerce & Online Stores</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Build Your
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Empire
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From zero to millions in online sales. We create e-commerce experiences that convert visitors 
                into customers and customers into brand advocates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Launch Your Store
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
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Digital Empire Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cart Abandonment Recovery</span>
                    <span className="text-3xl font-bold text-blue-400">89%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Checkout Completion Rate</span>
                    <span className="text-3xl font-bold text-purple-400">94%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Revenue Per Visitor</span>
                    <span className="text-3xl font-bold text-blue-400">₹3,900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Most Online Stores Fail
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building an online store is easy. Building one that actually sells is the real challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <ShoppingCart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Poor User Experience</h3>
              <p className="text-gray-300">Confusing navigation and checkout processes that drive customers away</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Search className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">No Traffic</h3>
              <p className="text-gray-300">Beautiful stores that nobody can find in the vast ocean of the internet</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <CreditCard className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Low Conversions</h3>
              <p className="text-gray-300">Visitors who browse but never buy, leaving money on the table</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Digital Domination Framework
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven system that transforms online visitors into loyal customers and brand advocates
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="E-commerce dashboard"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Website Optimization</h3>
                  <p className="text-gray-300">Lightning-fast, mobile-optimized stores that provide seamless shopping experiences</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">SEO & Content Strategy</h3>
                  <p className="text-gray-300">Dominate search results and attract your ideal customers organically</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Paid Advertising</h3>
                  <p className="text-gray-300">Targeted campaigns that bring qualified buyers to your store</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Conversion Funnels</h3>
                  <p className="text-gray-300">Optimized paths that guide visitors from interest to purchase</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Customer Retention</h3>
                  <p className="text-gray-300">Email marketing and loyalty programs that turn one-time buyers into lifelong customers</p>
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
              Complete E-Commerce Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, launch, and scale a profitable online business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, title: "Custom Website Design", desc: "Beautiful, conversion-optimized stores" },
              { icon: <Smartphone className="w-8 h-8" />, title: "Mobile Optimization", desc: "Perfect experience on every device" },
              { icon: <Search className="w-8 h-8" />, title: "SEO & Content", desc: "Rank higher and attract more customers" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Performance Analytics", desc: "Data-driven insights for growth" },
              { icon: <CreditCard className="w-8 h-8" />, title: "Payment Integration", desc: "Secure, seamless checkout process" },
              { icon: <ShoppingCart className="w-8 h-8" />, title: "Inventory Management", desc: "Streamlined product and order management" }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-blue-400 mb-4">{service.icon}</div>
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
              Digital Empire Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real transformations from bedroom startups to digital empires
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-blue-400">The Order Surge</div>
              <div className="text-gray-300 mb-4">0 to 5K Orders in 30 Days</div>
              <p className="text-sm text-gray-400">"Sold out entire inventory in first month"</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-purple-400">The Conversion King</div>
              <div className="text-gray-300 mb-4">94% Checkout Rate</div>
              <p className="text-sm text-gray-400">"Highest conversion rate in our industry"</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 border border-pink-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-pink-400">The Scale Master</div>
              <div className="text-gray-300 mb-4">15K Orders/Month</div>
              <p className="text-sm text-gray-400">"Built a thriving business from scratch"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Digital Empire?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free e-commerce strategy session and discover how to turn your online store into a profit machine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Strategy Session
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;