import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Retail Store Owner",
    company: "Bloom Boutique",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "Underdog transformed our struggling boutique into the most popular store in our district. Our foot traffic increased 400% and sales are through the roof!",
    rating: 5,
    results: "400% increase in foot traffic"
  },
  {
    name: "Arjun Patel",
    role: "E-commerce Founder",
    company: "TechGear Pro",
    image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "From zero to 15,000 orders per month in just 18 months. Their e-commerce strategy and execution is absolutely phenomenal. Best investment we ever made.",
    rating: 5,
    results: "15K monthly orders in 18 months"
  },
  {
    name: "Kavya Reddy",
    role: "Real Estate Agent",
    company: "Premium Properties",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "My listings now sell 75% faster than the market average. Their marketing strategies have made me the top agent in my area. Incredible results!",
    rating: 5,
    results: "75% faster sales"
  },
  {
    name: "Rohit Gupta",
    role: "Restaurant Owner",
    company: "Urban Eats",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "Our restaurant went from struggling to fully booked every night. Their local marketing and social media strategy brought our community together.",
    rating: 5,
    results: "Fully booked every night"
  },
  {
    name: "Sneha Joshi",
    role: "Fitness Studio Owner",
    company: "FitLife Studio",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400",
    content: "Membership grew from 50 to 500 in 8 months. Their brand development and digital marketing turned us into the premier fitness destination in town.",
    rating: 5,
    results: "10x membership growth"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            SUCCESS STORIES
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real businesses, real results. See how we've transformed companies across every industry.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-12 text-center">
            <Quote className="w-16 h-16 text-gray-400 mx-auto mb-8" />
            
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed max-w-4xl mx-auto">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-xl font-bold text-white">{testimonials[currentIndex].name}</div>
                <div className="text-gray-300">{testimonials[currentIndex].role}</div>
                <div className="text-gray-400 text-sm">{testimonials[currentIndex].company}</div>
              </div>
            </div>
            
            <div className="mt-6 inline-block bg-gray-700/50 px-6 py-2 rounded-full">
              <span className="text-white font-semibold">{testimonials[currentIndex].results}</span>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 border border-gray-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-white' : 'hover:bg-gray-700/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                "{testimonial.content.substring(0, 120)}..."
              </p>
              
              <div className="text-white font-semibold text-sm">
                {testimonial.results}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;