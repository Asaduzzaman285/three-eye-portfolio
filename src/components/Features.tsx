
import React from 'react';
import { Shield, Zap, Globe, Smartphone, Code, Users, BarChart, Layers } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Social media strategy',
      description: 'Complete social media management and strategy development for maximum engagement.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: 'Real-time data analytics',
      description: 'Advanced analytics dashboard with real-time insights and performance tracking.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Secure data protection',
      description: 'Enterprise-grade security measures to protect your valuable business data.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Global reach',
      description: 'Expand your business globally with our international technology solutions.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile optimization',
      description: 'Perfect mobile experience across all devices and platforms.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Clean development',
      description: 'Well-structured, maintainable code following industry best practices.',
      color: 'from-indigo-500 to-indigo-600'
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Fresh, new ideas
            <span className="block text-red-500">& bold moves</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional digital solutions with innovative approaches that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
