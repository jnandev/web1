import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, CheckCircle, Handshake, Heart, Globe, ArrowRight } from 'lucide-react';

const CommunityOverCompetitionPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Community collaboration"
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
                <Users className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Our Culture</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Community
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Over Competition
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Success is sweeter when shared. We believe in lifting each other up and creating ecosystems 
                where everyone thrives, because together we all grow stronger.
              </p>
              
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Join Our Community
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Community Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Client Referrals</span>
                    <span className="text-3xl font-bold text-purple-400">67%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Partnership Success</span>
                    <span className="text-3xl font-bold text-blue-400">94%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Knowledge Sharing Events</span>
                    <span className="text-3xl font-bold text-purple-400">24/year</span>
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
              Why Community Wins
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In a world obsessed with competition, we choose collaboration and mutual growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Handshake className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Collaborative Growth</h3>
              <p className="text-gray-300">When businesses support each other, entire industries thrive and create more opportunities for everyone.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Heart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Shared Success</h3>
              <p className="text-gray-300">Success feels better when it's shared. We celebrate wins together and support each other through challenges.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Ecosystem Building</h3>
              <p className="text-gray-300">We create networks where businesses, partners, and clients all benefit from collective knowledge and resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Build Community */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Build Community
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Practical ways we foster collaboration and create value for everyone in our network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Community networking event"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Client Networking Events</h3>
                  <p className="text-gray-300">Regular meetups where our clients can connect, share experiences, and create business partnerships.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Knowledge Sharing</h3>
                  <p className="text-gray-300">We openly share insights, strategies, and learnings that benefit the entire business community.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Cross-Referrals</h3>
                  <p className="text-gray-300">We actively connect clients with complementary businesses, creating win-win partnerships.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Mentorship Programs</h3>
                  <p className="text-gray-300">Experienced entrepreneurs in our network mentor newcomers, sharing wisdom and guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Success Stories */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Community Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real examples of how our community-first approach creates value for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-purple-400">The Network Effect</div>
              <div className="text-gray-300 mb-4">₹2.5Cr in Cross-Referrals</div>
              <p className="text-sm text-gray-400">"Client connections generated millions in new business"</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-blue-400">The Collaboration</div>
              <div className="text-gray-300 mb-4">5 Joint Ventures Created</div>
              <p className="text-sm text-gray-400">"Clients partnered to create new business opportunities"</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-indigo-400">The Mentorship</div>
              <div className="text-gray-300 mb-4">15 Startups Launched</div>
              <p className="text-sm text-gray-400">"Experienced clients mentored new entrepreneurs to success"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join a Community That Lifts You Up
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            When you work with Underdog, you're not just getting marketing services - you're joining a community of ambitious entrepreneurs who support each other's success.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Become Part of Our Community
          </button>
        </div>
      </section>
    </div>
  );
};

export default CommunityOverCompetitionPage;