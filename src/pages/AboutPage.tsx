import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Award, Globe, TrendingUp, Store, Home, Target, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const stats = [
    { icon: <Store className="w-8 h-8" />, number: "500+", label: "Businesses Transformed" },
    { icon: <Globe className="w-8 h-8" />, number: "2M+", label: "Customers Reached" },
    { icon: <Users className="w-8 h-8" />, number: "98%", label: "Client Satisfaction" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "450%", label: "Average Growth" }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Results-Driven",
      description: "Every strategy we implement is designed to deliver measurable, tangible results that impact your bottom line."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Client-Obsessed",
      description: "Your success is our success. We're not satisfied until you're thriving and exceeding your goals."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation First",
      description: "We stay ahead of trends and constantly evolve our strategies to keep you competitive in any market."
    }
  ];

  const team = [
    {
      name: "Ananya Sharma",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former Fortune 500 marketing executive with 15+ years of experience. Ananya founded Underdog to help small businesses compete with enterprise-level marketing strategies.",
      expertise: ["Strategic Planning", "Retail Marketing", "Team Leadership"]
    },
    {
      name: "Vikram Singh",
      role: "Head of Digital Strategy",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "E-commerce specialist who has launched 200+ successful online stores. Vikram brings deep technical expertise and conversion optimization mastery.",
      expertise: ["E-commerce", "Conversion Optimization", "Technical SEO"]
    },
    {
      name: "Meera Kapoor",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning designer and brand strategist. Meera creates visual identities that not only look stunning but drive customer action and loyalty.",
      expertise: ["Brand Design", "Visual Strategy", "Creative Direction"]
    },
    {
      name: "Karan Mehta",
      role: "Performance Marketing Lead",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Data-driven marketer who has managed campaigns reaching 10M+ customers. Karan specializes in scaling profitable advertising campaigns across all platforms.",
      expertise: ["Paid Advertising", "Analytics", "Performance Marketing"]
    },
    {
      name: "Riya Agarwal",
      role: "Content & Social Media Director",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Content strategist and social media expert who has built communities of millions. Riya creates content that engages, educates, and converts.",
      expertise: ["Content Strategy", "Social Media", "Community Building"]
    },
    {
      name: "Aryan Kumar",
      role: "Client Success Manager",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Customer success specialist dedicated to ensuring every client achieves their goals. Aryan provides ongoing support and strategic guidance.",
      expertise: ["Client Relations", "Project Management", "Strategic Consulting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              ABOUT UNDERDOG
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We believe every business deserves marketing that drives real results. 
              From retail stores to online empires, we turn underdogs into market leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Underdog was born from a simple observation: small and medium businesses were being left behind 
                  in the digital marketing revolution. While enterprise companies had access to world-class marketing 
                  teams and unlimited budgets, smaller businesses were struggling with generic solutions that didn't work.
                </p>
                <p>
                  Our founder, Sarah Chen, spent over a decade at Fortune 500 companies, developing marketing strategies 
                  that generated hundreds of millions in revenue. She realized that these same strategies, when adapted 
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
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers don't lie. Here's the measurable impact we've had on businesses like yours.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-white mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class marketers, designers, and strategists dedicated to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 hover:border-gray-600 hover:shadow-lg transition-all duration-300">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-gray-300 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Our Mission
            </h2>
            <blockquote className="text-xl leading-relaxed text-gray-300 mb-8">
              "To democratize world-class marketing by making enterprise-level strategies accessible to businesses 
              of all sizes. We believe that with the right approach, any business can become a market leader, 
              regardless of budget or industry."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="/logo.png" 
                alt="Underdog Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-gray-400">— The Underdog Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business into a market leader.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Transformation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;