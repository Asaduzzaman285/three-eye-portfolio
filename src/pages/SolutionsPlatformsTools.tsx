import React, { useState } from 'react';
import { 
  Building2, 
  Laptop, 
  Wrench, 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Code, 
  BarChart3, 
  Settings, 
  Smartphone, 
  CreditCard, 
  Lock, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Target,
  Layers,
  Cpu
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SolutionsPlatformsTools = () => {
  const [activeTab, setActiveTab] = useState('solutions');

  const solutions = {
    corporate: [
      {
        title: 'Enterprise Business Solution',
        description: 'Comprehensive business solution suite for large enterprises with integrated financial services',
        icon: <Building2 className="w-8 h-8" />,
        features: ['Multi-branch Operations', 'Corporate Banking', 'Business Intelligence', 'Enterprise Integration'],
        color: 'from-blue-600 to-indigo-700',
        clients: '500+ Enterprises'
      },
      {
        title: 'Mobile Value Added Service (VAS)',
        description: 'Complete mobile VAS platform offering premium services and content delivery',
        icon: <Smartphone className="w-8 h-8" />,
        features: ['Premium Content', 'Subscription Management', 'Mobile Billing', 'Content Distribution'],
        color: 'from-green-600 to-emerald-700',
        clients: '1M+ Mobile Users'
      },
      {
        title: 'Financial Management Through Winfin, Winpay, EPS',
        description: 'Integrated financial ecosystem combining three powerful platforms for complete money management',
        icon: <BarChart3 className="w-8 h-8" />,
        features: ['Multi-platform Integration', 'Real-time Analytics', 'Cross-platform Transfers', 'Unified Reporting'],
        color: 'from-purple-600 to-violet-700',
        clients: '2M+ Users'
      },
      {
        title: 'SMS Broadcasting Solution',
        description: 'Enterprise-grade SMS broadcasting platform for corporate marketing and promotional campaigns',
        icon: <Globe className="w-8 h-8" />,
        features: ['Bulk SMS Campaigns', 'Targeted Marketing', 'Analytics & Reports', 'API Integration'],
        color: 'from-orange-600 to-red-700',
        clients: '1000+ Businesses'
      }
    ]
  };

  const platforms = [
    {
      title: 'WINtext Platform',
      description: 'Advanced SMS broadcasting and messaging platform for enterprise communications',
      icon: <Globe className="w-10 h-10" />,
      features: ['Bulk SMS Broadcasting', 'Campaign Management', 'Delivery Analytics', 'API Integration'],
      stats: { messages: '10M+', delivery: '99.5%', clients: '1000+' },
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Winfin Platform',
      description: 'Comprehensive financial intelligence and management platform for businesses',
      icon: <BarChart3 className="w-10 h-10" />,
      features: ['Financial Analytics', 'Investment Tracking', 'Risk Management', 'Portfolio Analysis'],
      stats: { users: '500K+', assets: '$2B+', accuracy: '99.8%' },
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Winpay Platform',
      description: 'Lightning-fast payment processing platform with global reach and security',
      icon: <Zap className="w-10 h-10" />,
      features: ['Instant Payments', 'Global Transfers', 'Multi-Currency', 'Real-time Settlement'],
      stats: { speed: '<3s', countries: '180+', uptime: '99.99%' },
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'EPS Platform',
      description: 'Complete digital wallet and mobile banking platform for everyday transactions',
      icon: <Smartphone className="w-10 h-10" />,
      features: ['Mobile Banking', 'Digital Wallet', 'QR Payments', 'Merchant Solutions'],
      stats: { users: '2M+', transactions: '50K+', success: '99.9%' },
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Payment Gateway',
      description: 'Secure and reliable payment gateway supporting multiple payment methods',
      icon: <CreditCard className="w-10 h-10" />,
      features: ['Multi-Gateway Support', 'Fraud Protection', 'PCI Compliance', 'Real-time Processing'],
      stats: { merchants: '5K+', volume: '$500M+', security: 'PCI DSS' },
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Enterprise Hub',
      description: 'Centralized enterprise platform integrating all business solutions and services',
      icon: <Database className="w-10 h-10" />,
      features: ['Unified Dashboard', 'Cross-platform Integration', 'Business Intelligence', 'Custom Workflows'],
      stats: { enterprises: '500+', integrations: '20+', efficiency: '40%' },
      color: 'from-orange-500 to-red-600'
    }
  ];

  const tools = {
    developer: [
      {
        title: 'FinAPI Developer Kit',
        description: 'Complete API suite for financial application development',
        icon: <Code className="w-6 h-6" />,
        features: ['RESTful APIs', 'SDK Libraries', 'Testing Sandbox', 'Documentation'],
        type: 'API Tools'
      },
      {
        title: 'Payment SDK',
        description: 'Mobile and web SDK for seamless payment integration',
        icon: <Smartphone className="w-6 h-6" />,
        features: ['Cross-platform', 'UI Components', 'Security Built-in', 'Easy Integration'],
        type: 'Mobile Tools'
      },
      {
        title: 'Testing Simulator',
        description: 'Comprehensive testing environment for financial applications',
        icon: <Settings className="w-6 h-6" />,
        features: ['Transaction Simulation', 'Load Testing', 'Security Testing', 'Performance Metrics'],
        type: 'Testing Tools'
      }
    ],
    business: [
      {
        title: 'Business Dashboard',
        description: 'Comprehensive business intelligence and management dashboard',
        icon: <BarChart3 className="w-6 h-6" />,
        features: ['Real-time Metrics', 'Custom Reports', 'KPI Tracking', 'Export Options'],
        type: 'Analytics'
      },
      {
        title: 'Customer Portal',
        description: 'Self-service portal for customer account management',
        icon: <Users className="w-6 h-6" />,
        features: ['Account Management', 'Transaction History', 'Support Integration', 'Mobile Responsive'],
        type: 'Customer Tools'
      },
      {
        title: 'Compliance Manager',
        description: 'Automated compliance monitoring and reporting tools',
        icon: <Shield className="w-6 h-6" />,
        features: ['Regulatory Compliance', 'Automated Reports', 'Risk Assessment', 'Audit Trails'],
        type: 'Compliance'
      }
    ],
    admin: [
      {
        title: 'System Monitor',
        description: 'Real-time system monitoring and alerting platform',
        icon: <Cpu className="w-6 h-6" />,
        features: ['Performance Monitoring', 'Alert System', 'Log Analysis', 'Health Checks'],
        type: 'Monitoring'
      },
      {
        title: 'User Management',
        description: 'Comprehensive user and role management system',
        icon: <Users className="w-6 h-6" />,
        features: ['Role-based Access', 'User Provisioning', 'Activity Logs', 'Security Policies'],
        type: 'Administration'
      },
      {
        title: 'Configuration Center',
        description: 'Centralized configuration management for all services',
        icon: <Settings className="w-6 h-6" />,
        features: ['Service Config', 'Environment Management', 'Version Control', 'Deployment Tools'],
        type: 'Configuration'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Solutions, Platforms & Tools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Comprehensive suite of corporate solutions, cutting-edge platforms, and powerful tools
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-300">Enterprise Clients</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Layers className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-sm text-gray-300">Core Platforms</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <Wrench className="w-8 h-8 text-teal-400" />
                  <div>
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm text-gray-300">Professional Tools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'solutions', label: 'Corporate Solutions', icon: <Building2 className="w-5 h-5" /> },
              { id: 'platforms', label: 'Core Platforms', icon: <Layers className="w-5 h-5" /> },
              { id: 'tools', label: 'Professional Tools', icon: <Wrench className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Solutions */}
      {activeTab === 'solutions' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Corporate Solutions</h2>
              <p className="text-xl text-gray-600">Enterprise-grade financial solutions for modern businesses</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.corporate.map((solution, index) => (
                <div key={index} className="group">
                  <div className={`bg-gradient-to-r ${solution.color} p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                    <div className="bg-white rounded-xl p-8 h-full">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} text-white`}>
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{solution.title}</h3>
                          <p className="text-blue-600 font-medium">{solution.clients}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 text-lg">{solution.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className={`w-full bg-gradient-to-r ${solution.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Core Platforms */}
      {activeTab === 'platforms' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Platforms</h2>
              <p className="text-xl text-gray-600">Robust, scalable platforms powering the future of finance</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="group">
                  <div className={`bg-gradient-to-br ${platform.color} p-1 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}>
                    <div className="bg-white rounded-2xl p-8 h-full">
                      <div className="text-center mb-8">
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${platform.color} text-white mb-4`}>
                          {platform.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{platform.title}</h3>
                        <p className="text-gray-600">{platform.description}</p>
                      </div>

                      <div className="grid grid-cols-1 gap-3 mb-8">
                        {Object.entries(platform.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm text-gray-600 capitalize">{key}:</span>
                            <span className="font-bold text-gray-800">{value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 mb-8">
                        {platform.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className={`p-1 rounded-full bg-gradient-to-r ${platform.color}`}>
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className={`w-full bg-gradient-to-r ${platform.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                        Explore Platform
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Professional Tools */}
      {activeTab === 'tools' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Tools</h2>
              <p className="text-xl text-gray-600">Comprehensive toolset for developers, businesses, and administrators</p>
            </div>

            <div className="space-y-12">
              {/* Developer Tools */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <Code className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Developer Tools</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tools.developer.map((tool, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                          {tool.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{tool.title}</h4>
                          <span className="text-sm text-purple-600 font-medium">{tool.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      <div className="space-y-2">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Tools */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Business Tools</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tools.business.map((tool, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                          {tool.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{tool.title}</h4>
                          <span className="text-sm text-green-600 font-medium">{tool.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      <div className="space-y-2">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admin Tools */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white">
                    <Settings className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Administration Tools</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tools.admin.map((tool, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-red-100 rounded-lg text-red-600">
                          {tool.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{tool.title}</h4>
                          <span className="text-sm text-red-600 font-medium">{tool.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      <div className="space-y-2">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how our comprehensive suite of solutions, platforms, and tools can revolutionize your financial operations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Pricing
            </button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPlatformsTools;