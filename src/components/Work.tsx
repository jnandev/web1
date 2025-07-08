import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Target, Heart, Zap, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';

const coreBeliefs = [
  {
    id: 1,
    title: "Every Business Deserves to Win",
    category: "Our Foundation",
    description: "We believe that with the right strategy and execution, any business can become a market leader",
    icon: <Target className="w-12 h-12" />,
    principle: "No business is too small to achieve greatness. Every entrepreneur deserves access to world-class marketing strategies.",
    values: [
      "Equal opportunity for success",
      "Tailored strategies for every budget",
      "Proven methodologies for all industries"
    ]
  },
  {
    id: 2,
    title: "Authenticity Over Everything",
    category: "Our Philosophy",
    description: "Real brands connect with real people through genuine stories and authentic experiences",
    icon: <Heart className="w-12 h-12" />,
    principle: "In a world of fake promises and overnight success stories, we believe in building genuine relationships and delivering real results.",
    values: [
      "Transparent communication",
      "Honest expectations setting",
      "Authentic brand storytelling"
    ]
  },
  {
    id: 3,
    title: "Innovation Drives Growth",
    category: "Our Approach",
    description: "We stay ahead of trends and constantly evolve our strategies to keep you competitive",
    icon: <Zap className="w-12 h-12" />,
    principle: "The marketing landscape changes daily. We embrace innovation and adapt quickly to ensure our clients always stay ahead of the curve.",
    values: [
      "Cutting-edge strategies",
      "Early trend adoption",
      "Continuous learning and improvement"
    ]
  },
  {
    id: 4,
    title: "Community Over Competition",
    category: "Our Culture",
    description: "We build communities, not just customer bases. Together, we all grow stronger",
    icon: <Users className="w-12 h-12" />,
    principle: "Success is sweeter when shared. We believe in lifting each other up and creating ecosystems where everyone thrives.",
    values: [
      "Collaborative partnerships",
      "Knowledge sharing",
      "Mutual growth mindset"
    ]
  },
  {
    id: 5,
    title: "Results Speak Louder Than Words",
    category: "Our Promise",
    description: "Every strategy we implement is designed to deliver measurable, tangible results",
    icon: <TrendingUp className="w-12 h-12" />,
    principle: "We don't just create pretty campaigns. Every dollar spent, every hour invested must contribute to your bottom line and business growth.",
    values: [
      "Data-driven decisions",
      "Measurable outcomes",
      "ROI-focused strategies"
    ]
  }
];

const CoreBeliefs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % coreBeliefs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + coreBeliefs.length) % coreBeliefs.length);
  };

  const currentBelief = coreBeliefs[currentIndex];

  return (
    <section id="beliefs" className="py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            OUR CORE BELIEFS
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The fundamental principles that guide everything we do and every decision we make for our clients.
          </p>
        </div>

        {/* Featured Belief */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-white mb-6 flex justify-center">
                    {currentBelief.icon}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    {currentBelief.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {currentBelief.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-12 flex flex-col justify-center">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {currentBelief.description}
                </p>
                
                <div className="bg-gray-700/50 rounded-2xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-white mb-4">Our Principle</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {currentBelief.principle}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">How We Live This</h4>
                  <ul className="space-y-3">
                    {currentBelief.values.map((value, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Award className="w-5 h-5 text-white mr-3" />
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreBeliefs.map((belief, index) => (
            <Link
              to={`/beliefs/${belief.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={belief.id}
              className={`group cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 text-center h-full flex flex-col justify-between">
                <div className="text-white mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {belief.icon}
                </div>
                
                <div className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                  {belief.category}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {belief.title}
                </h4>
                
                <p className="text-gray-400 text-xs leading-relaxed">
                  {belief.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience These Values?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These aren't just words on a page. They're the foundation of how we work with every client, 
              every day. Experience the Underdog difference.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBeliefs;