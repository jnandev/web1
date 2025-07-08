import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "10 Retail Marketing Strategies That Actually Work in 2025",
    excerpt: "Discover the latest retail marketing tactics that are driving foot traffic and sales for physical stores in today's competitive landscape.",
    content: "The retail landscape has evolved dramatically, but physical stores still have unique advantages...",
    author: "Sarah Chen",
    date: "2025-01-15",
    category: "Retail Marketing",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Retail", "Marketing Strategy", "Foot Traffic"]
  },
  {
    id: 2,
    title: "E-commerce Conversion Optimization: A Complete Guide",
    excerpt: "Learn how to optimize your online store for maximum conversions with proven strategies and real case studies.",
    content: "Conversion optimization is the key to e-commerce success. Here's how to do it right...",
    author: "Vikram Singh",
    date: "2025-01-12",
    category: "E-commerce",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["E-commerce", "Conversion", "Optimization"]
  },
  {
    id: 3,
    title: "Real Estate Marketing in the Digital Age",
    excerpt: "How modern real estate professionals are using digital marketing to sell properties faster and at higher prices.",
    content: "The real estate industry has been transformed by digital marketing...",
    author: "Meera Kapoor",
    date: "2025-01-10",
    category: "Real Estate",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Real Estate", "Digital Marketing", "Property Sales"]
  },
  {
    id: 4,
    title: "The Psychology of Brand Colors: What Your Brand Says About You",
    excerpt: "Understand how color psychology impacts customer perception and learn to choose the perfect colors for your brand.",
    content: "Colors have a profound psychological impact on how customers perceive your brand...",
    author: "Karan Mehta",
    date: "2025-01-08",
    category: "Brand Development",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Branding", "Psychology", "Design"]
  },
  {
    id: 5,
    title: "Social Media ROI: How to Measure What Matters",
    excerpt: "Stop guessing and start measuring. Learn the key metrics that actually indicate social media success.",
    content: "Measuring social media ROI is crucial for business success...",
    author: "Riya Agarwal",
    date: "2025-01-05",
    category: "Social Media",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Social Media", "ROI", "Analytics"]
  },
  {
    id: 6,
    title: "Google Ads vs Facebook Ads: Which Platform Wins in 2025?",
    excerpt: "A comprehensive comparison of the two advertising giants and when to use each platform for maximum ROI.",
    content: "The eternal debate between Google Ads and Facebook Ads continues...",
    author: "Ananya Sharma",
    date: "2025-01-03",
    category: "Digital Advertising",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Google Ads", "Facebook Ads", "PPC"]
  }
];

const categories = ["All", "Retail Marketing", "E-commerce", "Real Estate", "Brand Development", "Social Media", "Digital Advertising"];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
              MARKETING INSIGHTS
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Expert insights, proven strategies, and actionable tips to grow your business across all marketing channels.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-6 mb-16">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    
                    <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-gray-900 border border-gray-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {(() => {
                const post = blogPosts.find(p => p.id === selectedPost)!;
                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm">
                        {post.category}
                      </span>
                      <button
                        onClick={() => setSelectedPost(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                      <span className="mx-3">•</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-3">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-2xl mb-8"
                    />
                    
                    <div className="prose prose-invert max-w-none">
                      <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        {post.content}
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-8">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;