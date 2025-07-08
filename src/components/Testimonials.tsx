import React from 'react';
import { Target, Users, Zap, Award, TrendingUp, Heart, CheckCircle, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Brand Storytelling Masters",
      description: "We craft compelling narratives that connect your brand with the world",
      highlight: "Stories that resonate globally",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Industry Expertise",
      description: "Specialized knowledge across retail, e-commerce, and real estate",
      highlight: "Deep industry insights",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation First",
      description: "Cutting-edge strategies that keep you ahead of competitors",
      highlight: "Early adopters of new trends",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Results Guaranteed",
      description: "We don't just promise results, we guarantee them",
      highlight: "90-day success guarantee",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Scalable Solutions",
      description: "Strategies that grow with your business from startup to enterprise",
      highlight: "Average 340% growth achieved",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Personal Touch",
      description: "Dedicated support and genuine care for your success",
      highlight: "24/7 priority support",
      color: "from-pink-500 to-red-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            WHY CHOOSE UNDERDOG?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're not just another marketing agency. We're your partners in transformation, 
            committed to turning your business into a market leader.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {reason.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-gray-300 group-hover:text-gray-200 mb-4 leading-relaxed transition-colors duration-300">
                {reason.description}
              </p>
              
              <div className={`inline-block bg-gradient-to-r ${reason.color} bg-clip-text text-transparent font-bold text-sm`}>
                {reason.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Unique Value Propositions */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-12 mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            The Underdog Difference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">No Cookie-Cutter Solutions</h4>
                  <p className="text-gray-300">Every strategy is custom-built for your specific business, industry, and goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Transparent Reporting</h4>
                  <p className="text-gray-300">Real-time access to all metrics and performance data. No black boxes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Rapid Implementation</h4>
                  <p className="text-gray-300">See results within 30 days, not months. We move fast and execute flawlessly.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Multi-Channel Mastery</h4>
                  <p className="text-gray-300">Expertise across all marketing channels, from traditional to cutting-edge digital.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Continuous Optimization</h4>
                  <p className="text-gray-300">We never stop improving. Your campaigns get better every month.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Success Partnership</h4>
                  <p className="text-gray-300">Your success is our success. We're invested in your long-term growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-700 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that chose Underdog and never looked back. 
              Let's write your success story together.
            </p>
            <button
              onClick={scrollToContact}
              className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">Start Your Transformation</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;