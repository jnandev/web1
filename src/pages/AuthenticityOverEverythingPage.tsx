import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, CheckCircle, Shield, Users, Star, ArrowRight } from 'lucide-react';

const AuthenticityOverEverythingPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Authentic business relationships"
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
                <Heart className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Our Philosophy</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Authenticity
                <span className="block bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                  Over Everything
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                In a world of fake promises and overnight success stories, we believe in building genuine 
                relationships and delivering real results through honest, transparent partnerships.
              </p>
              
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Experience Authentic Marketing
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 backdrop-blur-sm border border-pink-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Authenticity Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Client Trust Score</span>
                    <span className="text-3xl font-bold text-pink-400">9.8/10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Promise Delivery Rate</span>
                    <span className="text-3xl font-bold text-red-400">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Long-term Partnerships</span>
                    <span className="text-3xl font-bold text-pink-400">89%</span>
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
              Why Authenticity Matters
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real brands connect with real people through genuine stories and authentic experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Shield className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Trust Building</h3>
              <p className="text-gray-300">Authentic brands create lasting trust that translates into customer loyalty and word-of-mouth marketing.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Real Connections</h3>
              <p className="text-gray-300">Genuine relationships with customers lead to deeper engagement and higher lifetime value.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Star className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Sustainable Growth</h3>
              <p className="text-gray-300">Authentic brands build sustainable businesses that thrive long-term, not just quick wins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Live This */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Authenticity Promise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here's how we ensure every interaction, every strategy, and every result is genuine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Authentic business meeting"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-pink-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Communication</h3>
                  <p className="text-gray-300">No marketing jargon, no hidden fees, no false promises. We speak plainly about what we can achieve and how.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-pink-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Honest Expectations</h3>
                  <p className="text-gray-300">We set realistic timelines and goals based on data, not wishful thinking or sales pressure.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-pink-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Real Brand Stories</h3>
                  <p className="text-gray-300">We help you tell your authentic story, not create a fake persona that doesn't match your reality.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-pink-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Genuine Results</h3>
                  <p className="text-gray-300">Our success metrics are real, measurable, and sustainable - not vanity numbers that look good but don't drive business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authenticity in Action */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Authenticity in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real examples of how authentic marketing creates lasting impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 border border-pink-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-pink-400">The Truth Teller</div>
              <div className="text-gray-300 mb-4">95% Customer Retention</div>
              <p className="text-sm text-gray-400">"Honest about limitations, exceeded expectations anyway"</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-red-400">The Real Deal</div>
              <div className="text-gray-300 mb-4">Zero Refund Requests</div>
              <p className="text-sm text-gray-400">"What we promised is exactly what they got"</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 border border-orange-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-orange-400">The Relationship Builder</div>
              <div className="text-gray-300 mb-4">3-Year Average Partnership</div>
              <p className="text-sm text-gray-400">"Clients become friends, partnerships become family"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Authentic Marketing
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No fake promises. No hidden agendas. Just honest, effective marketing that builds real relationships and drives genuine results.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
          >
            Start an Authentic Partnership
          </button>
        </div>
      </section>
    </div>
  );
};

export default AuthenticityOverEverythingPage;