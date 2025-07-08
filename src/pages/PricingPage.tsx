import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, ArrowRight } from 'lucide-react';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 25000,
      annualPrice: 250000,
      features: [
        "Brand audit & strategy",
        "Basic website optimization",
        "Social media setup (2 platforms)",
        "Monthly performance reports",
        "Email support",
        "1 marketing campaign per month"
      ],
      popular: false,
      cta: "Start Growing"
    },
    {
      name: "Growth",
      description: "Ideal for businesses ready to scale",
      monthlyPrice: 50000,
      annualPrice: 500000,
      features: [
        "Everything in Starter",
        "Multi-channel marketing strategy",
        "Advanced analytics & reporting",
        "Social media management (4 platforms)",
        "SEO optimization",
        "Paid advertising management",
        "2 marketing campaigns per month",
        "Priority support"
      ],
      popular: true,
      cta: "Scale Your Business"
    },
    {
      name: "Enterprise",
      description: "For established businesses seeking market dominance",
      monthlyPrice: 100000,
      annualPrice: 1000000,
      features: [
        "Everything in Growth",
        "Custom marketing strategy",
        "Dedicated account manager",
        "Advanced conversion optimization",
        "Complete brand development",
        "Unlimited marketing campaigns",
        "24/7 priority support",
        "Quarterly strategy reviews",
        "Custom integrations"
      ],
      popular: false,
      cta: "Dominate Your Market"
    }
  ];

  const addOns = [
    {
      name: "Professional Photography",
      description: "High-quality product and lifestyle photography",
      price: 15000
    },
    {
      name: "Video Production",
      description: "Professional video content for marketing campaigns",
      price: 30000
    },
    {
      name: "Influencer Marketing",
      description: "Managed influencer partnerships and campaigns",
      price: 25000
    },
    {
      name: "Advanced Analytics",
      description: "Custom dashboards and detailed performance tracking",
      price: 8000
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
              PRICING PLANS
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan to transform your business. All plans include our proven strategies and dedicated support.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-800/50 border border-gray-700 rounded-full p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'annual'
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Annual (Save 17%)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 border rounded-3xl p-8 transition-all duration-300 hover:bg-gray-700/50 ${
                  plan.popular 
                    ? 'border-white scale-105' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-black">
                      ₹{billingCycle === 'monthly' 
                        ? (plan.monthlyPrice).toLocaleString() 
                        : (plan.annualPrice / 12).toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-gray-400 mt-1">
                        Billed annually (₹{(plan.annualPrice).toLocaleString()})
                      </div>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Add-On Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-gray-900/50 border border-gray-700 rounded-2xl">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{addon.name}</h3>
                    <p className="text-gray-400 text-sm">{addon.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹{addon.price.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">one-time</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                question: "What's included in the setup process?",
                answer: "Every plan includes a comprehensive onboarding process where we audit your current marketing, develop a custom strategy, and set up all necessary tools and campaigns."
              },
              {
                question: "Can I change plans at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
              },
              {
                question: "Do you work with businesses in all industries?",
                answer: "We specialize in retail, e-commerce, real estate, restaurants, and service businesses. Contact us to discuss your specific industry needs."
              },
              {
                question: "What kind of results can I expect?",
                answer: "While results vary by business, our clients typically see 200-500% growth in their key metrics within 6-12 months."
              },
              {
                question: "Is there a contract commitment?",
                answer: "We offer both month-to-month and annual contracts. Annual plans come with significant savings and priority support."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses that have achieved extraordinary growth with our proven marketing strategies.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;