import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, CheckCircle, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

const EveryBusinessDeservesToWinPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Small business success"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Our Foundation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Every Business
                <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Deserves to Win
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                No business is too small to achieve greatness. Every entrepreneur deserves access to world-class 
                marketing strategies that can transform their vision into reality.
              </p>
              
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Winning Journey
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/30 to-green-900/30 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Success Equality Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Small Business Success Rate</span>
                    <span className="text-3xl font-bold text-blue-400">94%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Average Growth Achieved</span>
                    <span className="text-3xl font-bold text-green-400">340%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Client Satisfaction</span>
                    <span className="text-3xl font-bold text-blue-400">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Belief Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why We Believe This
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every great company started as someone's dream. We're here to make those dreams reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Equal Opportunity</h3>
              <p className="text-gray-300">Size doesn't determine potential. With the right strategy, any business can compete with industry giants.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Tailored Solutions</h3>
              <p className="text-gray-300">Every business is unique. We create custom strategies that fit your budget, goals, and industry.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Proven Methods</h3>
              <p className="text-gray-300">Our strategies are battle-tested across hundreds of businesses in every industry imaginable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Live This */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Live This Belief
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These aren't just words. Here's how we put this belief into action every single day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Small business team celebrating success"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Flexible Pricing Models</h3>
                  <p className="text-gray-300">We offer payment plans and packages that work for businesses of all sizes, from startups to enterprises.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Industry-Agnostic Expertise</h3>
                  <p className="text-gray-300">Whether you're in retail, tech, healthcare, or any other industry, we have proven strategies that work.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
                  <p className="text-gray-300">Our strategies grow with you. Start small and scale up as your business expands and succeeds.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Success Guarantee</h3>
                  <p className="text-gray-300">We're so confident in our approach that we guarantee measurable results within the first 90 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Underdogs Who Won
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories of small businesses that achieved extraordinary success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-green-900/30 border border-blue-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-blue-400">The Local Hero</div>
              <div className="text-gray-300 mb-4">From 5 to 500 Customers</div>
              <p className="text-sm text-gray-400">"Started with 5 regular customers, now we serve 500+ monthly"</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-green-400">The Bootstrap Winner</div>
              <div className="text-gray-300 mb-4">₹50K to ₹50L Revenue</div>
              <p className="text-sm text-gray-400">"Bootstrapped startup that achieved 1000x growth in 2 years"</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-blue-400">The Comeback Kid</div>
              <div className="text-gray-300 mb-4">Near Bankruptcy to Market Leader</div>
              <p className="text-sm text-gray-400">"Saved from closure, now the #1 choice in their city"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Turn to Win
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every champion was once an underdog. Let's write your success story together.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Winning Strategy
          </button>
        </div>
      </section>
    </div>
  );
};

export default EveryBusinessDeservesToWinPage;