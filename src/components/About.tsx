import React from 'react';
import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ABOUT UNDERDOG
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We believe every business deserves marketing that drives real results. 
            From retail stores to online empires, we turn underdogs into market leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Underdog was born from a simple observation: small and medium businesses were being left behind 
                in the digital marketing revolution. While enterprise companies had access to world-class marketing 
                teams and unlimited budgets, smaller businesses were struggling with generic solutions that didn't work.
              </p>
              <p>
                Our founder spent over a decade at Fortune 500 companies, developing marketing strategies 
                that generated hundreds of millions in revenue. We realized that these same strategies, when adapted 
                properly, could transform any business regardless of size.
              </p>
              <p>
                Today, we're proud to have helped over 500 businesses across retail, e-commerce, real estate, and 
                service industries achieve extraordinary growth. Every client success story reinforces our belief 
                that with the right strategy and execution, any business can become a market leader.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Our team at work"
              className="w-full h-96 object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300">
            <Target className="w-12 h-12 text-white mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">Results-Driven</h4>
            <p className="text-gray-300 text-sm">Every strategy we implement is designed to deliver measurable, tangible results</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300">
            <Users className="w-12 h-12 text-white mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">Client-Obsessed</h4>
            <p className="text-gray-300 text-sm">Your success is our success. We're not satisfied until you're thriving</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300">
            <Zap className="w-12 h-12 text-white mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">Innovation First</h4>
            <p className="text-gray-300 text-sm">We stay ahead of trends and constantly evolve our strategies</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300">
            <Award className="w-12 h-12 text-white mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">Proven Excellence</h4>
            <p className="text-gray-300 text-sm">Track record of transforming businesses across every industry</p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Impact by the Numbers
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">500+</div>
              <div className="text-gray-300 font-medium">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">2M+</div>
              <div className="text-gray-300 font-medium">Customers Reached</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">450%</div>
              <div className="text-gray-300 font-medium">Average Growth</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">98%</div>
              <div className="text-gray-300 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;