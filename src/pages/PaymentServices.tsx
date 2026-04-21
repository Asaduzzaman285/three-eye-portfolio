import React, { useState } from 'react';
import { CreditCard, Smartphone, Shield, Zap, Users, Globe, ArrowRight, Check, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



// Main Payment Services Component
const PaymentServices = () => {
  const [activeService, setActiveService] = useState('EPS');

  const services = {
    EPS: {
      name: 'EPS',
      tagline: 'Easy Payment Solutions',
      description: 'Complete digital financial ecosystem with mobile banking, payments, and money transfers.',
      color: 'from-green-500 to-emerald-600',
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        'Mobile Banking',
        'Instant Transfers',
        'Bill Payments',
        'QR Code Payments',
        'Merchant Solutions',
        'Investment Options'
      ],
      stats: [
        { label: 'Active Users', value: '2M+' },
        { label: 'Daily Transactions', value: '50K+' },
        { label: 'Success Rate', value: '99.9%' }
      ]
     }
    // winfin: {
    //   name: 'Winfin',
    //   tagline: 'Financial Intelligence Platform',
    //   description: 'Advanced financial management and analytics platform for businesses and individuals.',
    //   color: 'from-blue-500 to-indigo-600',
    //   icon: <Shield className="w-8 h-8" />,
    //   features: [
    //     'Financial Analytics',
    //     'Risk Management',
    //     'Investment Tracking',
    //     'Portfolio Management',
    //     'Credit Scoring',
    //     'Financial Planning'
    //   ],
    //   stats: [
    //     { label: 'Businesses Served', value: '10K+' },
    //     { label: 'Assets Managed', value: '$2B+' },
    //     { label: 'Accuracy Rate', value: '99.8%' }
    //   ]
    // },
    // winpay: {
    //   name: 'Winpay',
    //   tagline: 'Lightning-Fast Payments',
    //   description: 'Ultra-fast payment processing system with global reach and enterprise-grade security.',
    //   color: 'from-purple-500 to-pink-600',
    //   icon: <Zap className="w-8 h-8" />,
    //   features: [
    //     'Instant Payments',
    //     'Global Transfers',
    //     'Multi-Currency Support',
    //     'API Integration',
    //     'Fraud Detection',
    //     'Real-time Settlement'
    //   ],
    //   stats: [
    //     { label: 'Transaction Speed', value: '<3s' },
    //     { label: 'Global Coverage', value: '180+' },
    //     { label: 'Uptime', value: '99.99%' }
    //   ]
    // }
  };

  const currentService = services[activeService];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Payment Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Revolutionizing digital finance with cutting-edge payment solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">3</span>
                <span className="text-sm block text-gray-300">Platforms</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">2M+</span>
                <span className="text-sm block text-gray-300">Users</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">99.9%</span>
                <span className="text-sm block text-gray-300">Uptime</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* Service Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeService === key
                    ? `bg-gradient-to-r ${service.color} text-white shadow-2xl`
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {service.icon}
                  <span>{service.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className={`bg-gradient-to-r ${currentService.color} rounded-3xl p-1 shadow-2xl`}>
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${currentService.color} text-white`}>
                      {currentService.icon}
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-800">{currentService.name}</h2>
                      <p className="text-xl text-gray-600">{currentService.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8">{currentService.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {currentService.stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`bg-gradient-to-r ${currentService.color} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}>
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                    <div className="space-y-4">
                      {currentService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${currentService.color} text-white`}>
                            <Check className="w-4 h-4" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-600">Industry-leading features across all platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bank-Grade Security</h3>
              <p className="text-gray-600">End-to-end encryption, multi-factor authentication, and fraud detection</p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Process transactions in seconds with 99.99% uptime guarantee</p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Reach</h3>
              <p className="text-gray-600">Available in 180+ countries with multi-currency support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Meena Bazar', company: '', service: 'EPS', rating: 5, review: 'EPS transformed our payment infrastructure. The integration was seamless and our customers love it.' },
              { name: 'South East', company: '', service: 'Winpay', rating: 5, review: 'Winpay processes our high-volume transactions flawlessly. The speed is incredible.' },
              { name: 'Unicef', company: '', service: 'Winfin', rating: 5, review: 'Winfin\'s analytics helped us optimize our financial strategy significantly.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default PaymentServices;