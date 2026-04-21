import React from "react";
import { Send, Shield, Users, PhoneCall, Mic, Lock, ArrowRight, CheckCircle, MessageSquare, Zap, Globe, TrendingUp, Target, Megaphone, BarChart3, Calendar, Clock, Trophy } from "lucide-react";

import Header from "@/components/Header";
import Footer from '@/components/Footer';

const marketingServices = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Targeted Campaigns",
    description: "Precision marketing campaigns that reach the right audience at the perfect moment for maximum conversion.",
    gradient: "from-purple-500 to-pink-500",
    features: ["Audience Segmentation", "Behavioral Targeting", "Geo-location Based"]
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Promotional Broadcasting",
    description: "Mass promotional campaigns to announce sales, offers, and new products to your entire customer base.",
    gradient: "from-orange-500 to-red-500",
    features: ["Flash Sales Alerts", "Product Launches", "Seasonal Campaigns"]
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Event Marketing",
    description: "Drive attendance and engagement for your events, webinars, and special occasions with timely SMS reminders.",
    gradient: "from-green-500 to-teal-500",
    features: ["Event Reminders", "RSVP Management", "Follow-up Campaigns"]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Performance Analytics",
    description: "Comprehensive campaign analytics to measure ROI, engagement rates, and optimize your marketing strategy.",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Real-time Metrics", "ROI Tracking", "A/B Test Results"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Drip Marketing",
    description: "Automated sequential campaigns that nurture leads and guide customers through your sales funnel.",
    gradient: "from-indigo-500 to-purple-500",
    features: ["Lead Nurturing", "Customer Journey", "Automated Sequences"]
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Loyalty Programs",
    description: "Reward-based SMS campaigns to retain customers and encourage repeat purchases with exclusive offers.",
    gradient: "from-yellow-500 to-orange-500",
    features: ["Point Notifications", "VIP Offers", "Birthday Campaigns"]
  },
];

const campaignTypes = [
  {
    type: "Flash Sales",
    description: "Time-sensitive offers that create urgency",
    example: "🔥 24-Hour FLASH SALE! Get 50% OFF on all electronics. Use code FLASH50. Shop now: link.com",
    deliveryRate: "99.2%"
  },
  {
    type: "Product Launch",
    description: "Announce new products to your audience",
    example: "🚀 Introducing the NEW iPhone 15! Pre-order now and get FREE shipping. Limited stock available.",
    deliveryRate: "98.8%"
  },
  {
    type: "Customer Retention",
    description: "Win back inactive customers",
    example: "We miss you! Come back with 30% OFF your next purchase. Exclusive for you: COMEBACK30",
    deliveryRate: "97.5%"
  }
];

const operatorStats = [
  { operator: "Grameenphone", coverage: "55M+", reliability: "99.9%" },
  { operator: "Robi", coverage: "35M+", reliability: "99.7%" },
  { operator: "Banglalink", coverage: "25M+", reliability: "99.5%" },
  { operator: "Teletalk", coverage: "5M+", reliability: "99.8%" }
];

const MarketingPromotion = () => {
  return (
    <div className="min-h-screen bg-slate-900">
       <Header/>
      {/* Hero Section - Marketing Focus */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <Megaphone className="w-4 h-4 mr-2" />
              Powering 10,000+ Marketing Campaigns Monthly
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                Marketing &
              </span>
              <br />
              <span className="text-5xl md:text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Promotion
              </span>
              <br />
              <span className="text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                via Corporate SMS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your marketing strategy with our premium SMS broadcasting platform. 
              Partnered with all major MNO operators locally and internationally, we help corporates 
              <span className="text-purple-400 font-semibold"> promote their offers directly</span> to millions of customers.
            </p>

            {/* Campaign Success Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md p-4 rounded-2xl border border-purple-400/30 mb-3 inline-block">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">15%</div>
                <div className="text-gray-400 text-sm">Avg. Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md p-4 rounded-2xl border border-green-400/30 mb-3 inline-block">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">250%</div>
                <div className="text-gray-400 text-sm">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-md p-4 rounded-2xl border border-orange-400/30 mb-3 inline-block">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">5 Min</div>
                <div className="text-gray-400 text-sm">Campaign Launch Time</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md p-4 rounded-2xl border border-blue-400/30 mb-3 inline-block">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">50M+</div>
                <div className="text-gray-400 text-sm">Monthly Reach</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl text-lg hover:scale-105 shadow-2xl transition-all duration-300 flex items-center justify-center">
                Launch Your Campaign
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl text-lg hover:bg-white/20 transition-all duration-300">
                See Campaign Examples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Operator Network Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Powered by Premium
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Operator Network
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Direct partnerships with leading telecom operators ensure your marketing campaigns reach every customer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operatorStats.map((op, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 text-center hover:border-blue-400/50 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-2">{op.operator}</div>
                <div className="text-blue-400 text-lg font-semibold mb-1">{op.coverage}</div>
                <div className="text-gray-400 text-sm mb-3">Active Subscribers</div>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  {op.reliability} Delivery Rate
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types Showcase */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Campaign Examples That
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Convert</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {campaignTypes.map((campaign, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-purple-300">{campaign.type}</h3>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {campaign.deliveryRate}
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{campaign.description}</p>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-600/50">
                  <div className="text-sm text-gray-500 mb-2">Sample Message:</div>
                  <div className="text-white text-sm leading-relaxed">{campaign.example}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Complete Marketing
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From campaign strategy to performance analytics - everything you need to run successful SMS marketing campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl inline-block mb-6 shadow-lg`}>
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-purple-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-purple-200 text-sm font-medium mb-8">
            <Megaphone className="w-4 h-4 mr-2" />
            Ready to Transform Your Marketing?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Start Your First
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Marketing Campaign Today
            </span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of businesses already driving sales through our SMS marketing platform. 
            Launch your first campaign in minutes with our easy-to-use dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl text-lg hover:scale-105 shadow-2xl transition-all duration-300 flex items-center justify-center">
              Start Free Campaign
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              View Pricing Plans
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-8 text-purple-200 text-sm flex-wrap">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              99.9% Delivery Rate
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              24/7 Campaign Support
            </div>
          </div>
        </div>
      </section>
     <Footer/>

    </div>
  );
};

export default MarketingPromotion;