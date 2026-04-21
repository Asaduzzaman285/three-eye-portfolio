import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { 
  Building2, 
  Shield, 
  Database, 
  Cloud, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Lock,
  Globe,
  Cpu,
  Network,
  Settings,
  TrendingUp,
  Award,
  Clock,
  Target,
  Layers,
  GitBranch,
  Server
} from 'lucide-react';

const EnterpriseSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredSolution, setHoveredSolution] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const enterpriseSolutions = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with 99.9% uptime, automated scaling, and enterprise-grade security",
      features: ["Auto-scaling", "Load Balancing", "Disaster Recovery", "Multi-region Deployment"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Advanced data warehousing, analytics, and AI-powered insights for informed decision making",
      features: ["Big Data Analytics", "Real-time Processing", "Data Governance", "Machine Learning"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Suite",
      description: "Comprehensive security framework protecting your enterprise from modern cyber threats",
      features: ["Threat Detection", "Zero Trust Architecture", "Compliance Management", "Security Analytics"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "System Integration",
      description: "Seamless integration of legacy systems with modern applications and third-party services",
      features: ["API Management", "Legacy Modernization", "Microservices", "Event-driven Architecture"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools",
      features: ["Custom Dashboards", "Predictive Analytics", "Performance Metrics", "Automated Reporting"],
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Workforce Management",
      description: "Optimize human resources with digital transformation and collaboration platforms",
      features: ["Employee Portal", "Digital Workflows", "Performance Tracking", "Remote Collaboration"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50"
    }
  ];

  const tabs = [
    { name: "Solutions Overview", icon: <Layers className="w-5 h-5" /> },
    { name: "Technology Stack", icon: <Cpu className="w-5 h-5" /> },
    { name: "Implementation", icon: <Settings className="w-5 h-5" /> }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: <Building2 className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> },
    { number: "150+", label: "Integrations", icon: <GitBranch className="w-6 h-6" /> }
  ];

  const techStack = [
    { category: "Cloud Platforms", technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes"] },
    { category: "Databases", technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
    { category: "Development", technologies: ["React", "Node.js", "Python", "Java"] },
    { category: "Security", technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "WAF"] }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/10" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + i * 0.2}s`
              }}
            >
              <div className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-blue-400/30' : i % 3 === 1 ? 'bg-purple-400/30' : 'bg-green-400/30'}`} />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-blue-600 font-semibold uppercase tracking-wider">Enterprise Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              Enterprise
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Empowering large-scale organizations with cutting-edge technology solutions. 
              From cloud infrastructure to AI-powered analytics, we deliver enterprise-grade 
              systems that scale, secure, and accelerate your business transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-full text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50"
              >
                <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-500">
            {activeTab === 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center mb-8 lg:col-span-3">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Complete Enterprise Solution Suite</h3>
                  <p className="text-lg text-gray-600">Comprehensive solutions designed to address every aspect of your digital transformation</p>
                </div>
                {enterpriseSolutions.map((solution, index) => (
                  <div key={index} className={`p-6 rounded-2xl ${solution.bgColor} border border-gray-100 hover:shadow-lg transition-all duration-300 group`}>
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${solution.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className={`mt-4 w-full py-2 rounded-lg bg-gradient-to-r ${solution.color} text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      Explore Solution
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center mb-8 lg:col-span-4">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Modern Technology Stack</h3>
                  <p className="text-lg text-gray-600">Built on industry-leading technologies and frameworks</p>
                </div>
                {techStack.map((stack, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{stack.category}</h3>
                    <div className="space-y-3">
                      {stack.technologies.map((tech, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-gray-700">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Implementation Process</h3>
                  <p className="text-lg text-gray-600">Our proven methodology ensures successful enterprise transformation</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning Phase</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Requirements gathering and analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Architecture design and planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Risk assessment and mitigation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Timeline and resource allocation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Phase</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Agile development methodology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Continuous integration and testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Security implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Performance optimization</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Deployment Phase</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Staged rollout strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>User training and documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Data migration and validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Go-live support and monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Implementation Timeline</h3>
                  <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">1-2</div>
                      <p className="text-sm font-semibold text-gray-700">Weeks</p>
                      <p className="text-xs text-gray-500">Discovery</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">2-4</div>
                      <p className="text-sm font-semibold text-gray-700">Weeks</p>
                      <p className="text-xs text-gray-500">Planning</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">8-16</div>
                      <p className="text-sm font-semibold text-gray-700">Weeks</p>
                      <p className="text-xs text-gray-500">Development</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">1-2</div>
                      <p className="text-sm font-semibold text-gray-700">Weeks</p>
                      <p className="text-xs text-gray-500">Deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-blue-600">Enterprise Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our suite of enterprise solutions is designed to address every aspect of your 
              digital transformation journey, from infrastructure to intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-100 ${solution.bgColor} hover:shadow-2xl`}
                onMouseEnter={() => setHoveredSolution(index)}
                onMouseLeave={() => setHoveredSolution(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${solution.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${solution.color} text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>

                {hoveredSolution === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-400 to-purple-200 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Implementation Process
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A proven methodology that ensures successful enterprise transformation 
              with minimal disruption to your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Comprehensive analysis of your current systems and requirements" },
              { step: "02", title: "Strategy", desc: "Custom roadmap development aligned with your business goals" },
              { step: "03", title: "Implementation", desc: "Agile deployment with continuous monitoring and optimization" },
              { step: "04", title: "Support", desc: "Ongoing maintenance, updates, and 24/7 technical support" }
            ].map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-white/30 -translate-x-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-white/80">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <Server className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Scale Your Enterprise?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Transform your organization with enterprise solutions built for the future. 
              Let's discuss how we can accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <Target className="w-5 h-5" />
                Start Your Transformation
              </button>
              <button className="px-10 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-full text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseSolutions;