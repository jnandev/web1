import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, CheckCircle, BarChart, Target, DollarSign, ArrowRight } from 'lucide-react';

const ResultsSpeakLouderPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Data analytics and results"
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
                <TrendingUp className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Our Promise</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Results Speak
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Louder Than Words
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We don't just create pretty campaigns. Every dollar spent, every hour invested must contribute 
                to your bottom line and measurable business growth.
              </p>
              
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                See Our Results
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Results Dashboard</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Average ROI</span>
                    <span className="text-3xl font-bold text-green-400">8.4x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Client Growth Rate</span>
                    <span className="text-3xl font-bold text-blue-400">340%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Goal Achievement</span>
                    <span className="text-3xl font-bold text-green-400">96%</span>
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
              Why Results Matter Most
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beautiful campaigns mean nothing if they don't drive real business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">ROI-Focused</h3>
              <p className="text-gray-300">Every strategy is designed to generate measurable returns on your marketing investment.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <BarChart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Data-Driven</h3>
              <p className="text-gray-300">We make decisions based on hard data, not assumptions or creative preferences.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Goal-Oriented</h3>
              <p className="text-gray-300">Every campaign has clear, measurable objectives tied to your business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Measure Success */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Measure Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive approach to tracking and optimizing every aspect of your marketing performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Analytics dashboard"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Revenue Attribution</h3>
                  <p className="text-gray-300">We track every dollar of revenue back to specific marketing activities and campaigns.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Customer Lifetime Value</h3>
                  <p className="text-gray-300">We optimize for long-term customer value, not just immediate conversions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Cost Per Acquisition</h3>
                  <p className="text-gray-300">We continuously optimize to reduce the cost of acquiring new customers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-Time Reporting</h3>
                  <p className="text-gray-300">You get transparent, real-time access to all performance metrics and insights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Results That Speak Volumes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real numbers from real clients who achieved extraordinary growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-green-400">The ROI Champion</div>
              <div className="text-gray-300 mb-4">12.8x Return</div>
              <p className="text-sm text-gray-400">"Every ₹100 invested returned ₹1,280 in revenue"</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-blue-400">The Growth Machine</div>
              <div className="text-gray-300 mb-4">500% Revenue Increase</div>
              <p className="text-sm text-gray-400">"From ₹10L to ₹50L annual revenue in 18 months"</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-indigo-400">The Efficiency Expert</div>
              <div className="text-gray-300 mb-4">75% Cost Reduction</div>
              <p className="text-sm text-gray-400">"Same results at 25% of previous marketing spend"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Guarantee */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Results Guarantee
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're so confident in our ability to deliver results that we guarantee measurable improvement 
              in your key metrics within the first 90 days, or we'll work for free until you see results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">90-Day Guarantee</h3>
                <p className="text-gray-300 text-sm">Measurable results within 90 days or we work for free</p>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">Transparent Reporting</h3>
                <p className="text-gray-300 text-sm">Real-time access to all performance data and metrics</p>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">ROI Commitment</h3>
                <p className="text-gray-300 text-sm">Minimum 3x return on your marketing investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Results That Matter?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stop wasting money on marketing that doesn't work. Let's create campaigns that deliver measurable, profitable results for your business.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Guaranteed Results
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResultsSpeakLouderPage;