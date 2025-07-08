import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Video, Headphones, BookOpen, ArrowRight } from 'lucide-react';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Guides', 'Templates', 'Videos', 'Podcasts', 'Case Studies'];

  const resources = [
    {
      id: 1,
      title: "The Complete Retail Marketing Playbook",
      description: "A comprehensive 50-page guide covering everything from store layout to customer retention strategies.",
      type: "Guide",
      category: "Guides",
      icon: <BookOpen className="w-6 h-6" />,
      downloadUrl: "#",
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "E-commerce Conversion Optimization Checklist",
      description: "47-point checklist to optimize your online store for maximum conversions and sales.",
      type: "Template",
      category: "Templates",
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: "#",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Real Estate Marketing Masterclass",
      description: "60-minute video training on how to sell properties 75% faster using digital marketing.",
      type: "Video",
      category: "Videos",
      icon: <Video className="w-6 h-6" />,
      downloadUrl: "#",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "The Marketing Underdog Podcast",
      description: "Weekly insights from successful entrepreneurs and marketing experts sharing their growth strategies.",
      type: "Podcast",
      category: "Podcasts",
      icon: <Headphones className="w-6 h-6" />,
      downloadUrl: "#",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Social Media Content Calendar Template",
      description: "Pre-built content calendar with 90 days of post ideas for retail and e-commerce businesses.",
      type: "Template",
      category: "Templates",
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: "#",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "From $0 to $2.5M: E-commerce Success Story",
      description: "Detailed case study showing exactly how we helped TechGear Pro achieve massive growth.",
      type: "Case Study",
      category: "Case Studies",
      icon: <BookOpen className="w-6 h-6" />,
      downloadUrl: "#",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 7,
      title: "Brand Development Workshop Series",
      description: "5-part video series on building a brand that customers love and competitors fear.",
      type: "Video",
      category: "Videos",
      icon: <Video className="w-6 h-6" />,
      downloadUrl: "#",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 8,
      title: "Google Ads ROI Calculator",
      description: "Spreadsheet template to calculate and optimize your Google Ads return on investment.",
      type: "Template",
      category: "Templates",
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: "#",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

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
              FREE RESOURCES
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Download our proven templates, guides, and tools to accelerate your marketing success. 
              All resources are completely free and based on real client results.
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

      {/* Resources Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="group bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      {resource.icon}
                      <span className="ml-2">{resource.type}</span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <a
                    href={resource.downloadUrl}
                    className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want More Free Resources?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and get new templates, guides, and case studies delivered to your inbox weekly.
          </p>
          <Link
            to="/#newsletter"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Subscribe Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;