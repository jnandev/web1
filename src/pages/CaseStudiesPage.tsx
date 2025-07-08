import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, DollarSign, Clock, Target, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "From Empty Store to Neighborhood Destination",
    category: "Retail Marketing",
    client: "Bloom Boutique",
    industry: "Fashion Retail",
    challenge: "Struggling boutique with low foot traffic and declining sales",
    solution: "Complete store transformation with visual merchandising, local SEO, and community engagement",
    results: {
      footTraffic: "400%",
      sales: "350%",
      timeframe: "6 months",
      roi: "8.5x growth"
    },
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "Underdog didn't just market our store - they transformed our entire business. We went from struggling to thriving.",
    clientName: "Priya Sharma, Owner"
  },
  {
    id: 2,
    title: "Zero to 15K Orders: E-commerce Success Story",
    category: "E-commerce",
    client: "TechGear Pro",
    industry: "Electronics",
    challenge: "New e-commerce startup with no brand recognition or sales",
    solution: "Complete digital strategy including website optimization, SEO, paid advertising, and conversion funnels",
    results: {
      orders: "15K/month",
      customers: "15,000",
      timeframe: "18 months",
      roi: "12x growth"
    },
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "From idea to 15K monthly orders in 18 months. Their strategy and execution is phenomenal.",
    clientName: "Arjun Patel, Founder"
  },
  {
    id: 3,
    title: "Luxury Properties: Selling 75% Faster",
    category: "Real Estate",
    client: "Premium Properties",
    industry: "Real Estate",
    challenge: "High-end properties sitting on market for extended periods",
    solution: "Premium marketing strategy with professional photography, virtual tours, and targeted advertising",
    results: {
      salesSpeed: "75% faster",
      priceIncrease: "15%",
      timeframe: "12 months",
      roi: "6x growth"
    },
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "My listings now sell faster and for higher prices than any other agent in the area.",
    clientName: "Kavya Reddy, Agent"
  },
  {
    id: 4,
    title: "Restaurant Revival: From Struggling to Fully Booked",
    category: "Restaurant Marketing",
    client: "Urban Eats",
    industry: "Food & Beverage",
    challenge: "Restaurant with poor visibility and inconsistent customer flow",
    solution: "Local marketing strategy, social media management, and community engagement programs",
    results: {
      bookings: "100% capacity",
      socialFollowing: "500%",
      timeframe: "8 months",
      roi: "4.5x growth"
    },
    image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "We went from empty tables to fully booked every night. The transformation has been incredible.",
    clientName: "Rohit Gupta, Owner"
  },
  {
    id: 5,
    title: "Fitness Studio: 10x Membership Growth",
    category: "Fitness Marketing",
    client: "FitLife Studio",
    industry: "Health & Fitness",
    challenge: "Small fitness studio struggling to compete with large gym chains",
    solution: "Brand positioning, digital marketing, and community-focused campaigns",
    results: {
      members: "1,000%",
      retention: "95%",
      timeframe: "10 months",
      roi: "7.5x growth"
    },
    image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "From 50 to 500 members in less than a year. We're now the premier fitness destination in town.",
    clientName: "Sneha Joshi, Owner"
  },
  {
    id: 6,
    title: "SaaS Startup: 2,500 Customers in 2 Years",
    category: "B2B Marketing",
    client: "CloudSync Solutions",
    industry: "Software",
    challenge: "B2B SaaS startup needing to establish market presence and generate leads",
    solution: "Content marketing, LinkedIn strategy, and lead generation funnels",
    results: {
      valuation: "Series A Funded",
      customers: "2,500",
      timeframe: "24 months",
      roi: "20x growth"
    },
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    testimonial: "Their B2B marketing strategy helped us secure Series A funding and reach 2,500 customers.",
    clientName: "Rahul Verma, CEO"
  }
];

const CaseStudiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const categories = ['All', 'Retail Marketing', 'E-commerce', 'Real Estate', 'Restaurant Marketing', 'Fitness Marketing', 'B2B Marketing'];

  const filteredCases = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

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
              CASE STUDIES
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real businesses, real transformations, real results. See how we've helped companies across industries achieve extraordinary growth.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((study) => (
              <div
                key={study.id}
                className="group bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCase(study.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {study.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {study.client} • {study.industry}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {Object.values(study.results)[0]}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {Object.keys(study.results)[0].replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {study.results.timeframe}
                      </div>
                      <div className="text-gray-400 text-xs">Timeframe</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-gray-900 border border-gray-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {(() => {
                const study = caseStudies.find(s => s.id === selectedCase)!;
                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm">
                        {study.category}
                      </span>
                      <button
                        onClick={() => setSelectedCase(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h2>
                    <p className="text-gray-300 text-lg mb-8">{study.client} • {study.industry}</p>
                    
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover rounded-2xl mb-8"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-red-400">The Challenge</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-blue-400">Our Solution</h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-green-400">The Results</h3>
                        <div className="space-y-3">
                          {Object.entries(study.results).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-400 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              <span className="text-white font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 mb-8">
                      <blockquote className="text-lg italic text-gray-300 mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-white font-semibold">— {study.clientName}</cite>
                    </div>
                    
                    <div className="text-center">
                      <button
                        onClick={scrollToContact}
                        className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Similar Results for Your Business
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses that have transformed their marketing and achieved extraordinary results
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

export default CaseStudiesPage;