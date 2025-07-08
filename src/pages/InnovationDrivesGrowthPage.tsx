import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, CheckCircle, Rocket, TrendingUp, Brain, ArrowRight } from 'lucide-react';

const InnovationDrivesGrowthPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Innovation and technology"
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
                <Zap className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Our Approach</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Innovation
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Drives Growth
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The marketing landscape changes daily. We embrace innovation and adapt quickly to ensure 
                our clients always stay ahead of the curve and dominate their markets.
              </p>
              
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Innovate Your Marketing
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Innovation Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Early Trend Adoption</span>
                    <span className="text-3xl font-bold text-yellow-400">6 months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Competitive Advantage</span>
                    <span className="text-3xl font-bold text-orange-400">2.5x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Innovation Success Rate</span>
                    <span className="text-3xl font-bold text-yellow-400">87%</span>
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
              Why Innovation is Essential
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In a rapidly evolving digital landscape, standing still means falling behind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Rocket className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">First-Mover Advantage</h3>
              <p className="text-gray-300">Being early to new platforms and strategies gives you a significant competitive edge before markets become saturated.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Brain className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-gray-300">We constantly research, test, and implement new marketing technologies and methodologies to stay ahead.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Future-Proof Strategies</h3>
              <p className="text-gray-300">Our innovative approaches ensure your marketing remains effective as consumer behaviors and technologies evolve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Innovate */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Innovation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we stay at the forefront of marketing innovation and bring cutting-edge strategies to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Innovation lab and research"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Trend Research & Analysis</h3>
                  <p className="text-gray-300">We monitor global marketing trends, emerging platforms, and consumer behavior shifts to identify opportunities early.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Rapid Prototyping</h3>
                  <p className="text-gray-300">We quickly test new strategies with small budgets to validate effectiveness before full implementation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Technology Integration</h3>
                  <p className="text-gray-300">We leverage the latest marketing technologies, AI tools, and automation to maximize efficiency and results.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                  <p className="text-gray-300">We constantly refine and improve our strategies based on real-time data and performance metrics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Examples */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Innovation Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real examples of how innovative thinking delivered breakthrough results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-yellow-400">The Early Bird</div>
              <div className="text-gray-300 mb-4">First on TikTok in Industry</div>
              <p className="text-sm text-gray-400">"Captured 80% market share before competitors arrived"</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-orange-400">The AI Pioneer</div>
              <div className="text-gray-300 mb-4">50% Cost Reduction</div>
              <p className="text-sm text-gray-400">"AI automation cut costs while improving results"</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border border-red-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-red-400">The Trendsetter</div>
              <div className="text-gray-300 mb-4">Viral Campaign Success</div>
              <p className="text-sm text-gray-400">"Spotted trend early, created viral moment"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Lead Your Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait for your competitors to discover the next big thing. Let's innovate together and give you the first-mover advantage.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            Start Innovating Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default InnovationDrivesGrowthPage;