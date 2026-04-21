import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Database, 
  Network,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Globe,
  TrendingUp,
  Server,
  Key,
  Fingerprint,
  Bug,
  Wifi,
  Monitor,
  FileCheck,
  Search,
  ShieldCheck,
  AlertCircle,
  Target,
  Activity,
  Layers,
  Settings,
  Clock,
  Award,
  Building2,
  UserCheck,
  PhoneCall,
  Mail
} from 'lucide-react';

const ITSecurity = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeThreat, setActiveThreat] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThreat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const securitySolutions = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Cybersecurity Framework",
      description: "Comprehensive security architecture protecting your digital assets from evolving cyber threats",
      features: ["24/7 Monitoring", "Threat Intelligence", "Incident Response", "Security Analytics"],
      color: "from-red-500 to-pink-500",
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Security",
      description: "Advanced firewall systems, intrusion detection, and network monitoring solutions",
      features: ["Firewall Management", "VPN Solutions", "Network Segmentation", "Traffic Analysis"],
      color: "from-blue-500 to-cyan-500",
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Protection",
      description: "End-to-end data encryption, backup solutions, and compliance management systems",
      features: ["Data Encryption", "Backup & Recovery", "Access Control", "Compliance Auditing"],
      color: "from-green-500 to-emerald-500",
      bgImage: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Security Monitoring",
      description: "Real-time threat detection with AI-powered security operations center (SOC) services",
      features: ["SIEM Solutions", "Real-time Alerts", "Threat Hunting", "Forensic Analysis"],
      color: "from-purple-500 to-indigo-500",
      bgImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Identity Management",
      description: "Multi-factor authentication, single sign-on, and privileged access management",
      features: ["MFA Implementation", "SSO Solutions", "Identity Governance", "Privileged Access"],
      color: "from-orange-500 to-yellow-500",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Compliance & Audit",
      description: "Regulatory compliance management and comprehensive security auditing services",
      features: ["Compliance Frameworks", "Security Audits", "Risk Assessment", "Policy Management"],
      color: "from-teal-500 to-cyan-500",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    }
  ];

  const threatTypes = [
    {
      name: "Malware & Ransomware",
      description: "Advanced threat protection against malicious software and encryption attacks",
      icon: <Bug className="w-6 h-6" />,
      severity: "Critical",
      color: "bg-red-500"
    },
    {
      name: "Phishing & Social Engineering",
      description: "Email security and user awareness training to prevent social attacks",
      icon: <Mail className="w-6 h-6" />,
      severity: "High",
      color: "bg-orange-500"
    },
    {
      name: "Data Breaches",
      description: "Data loss prevention and breach response protocols",
      icon: <Database className="w-6 h-6" />,
      severity: "Critical",
      color: "bg-red-600"
    },
    {
      name: "Network Intrusions",
      description: "Perimeter defense and network access control systems",
      icon: <Wifi className="w-6 h-6" />,
      severity: "High",
      color: "bg-yellow-500"
    }
  ];

  const complianceFrameworks = [
    { name: "ISO 27001", description: "Information Security Management", icon: "🛡️" },
    { name: "GDPR", description: "Data Protection Regulation", icon: "🔒" },
    { name: "SOX", description: "Financial Data Protection", icon: "📊" },
    { name: "HIPAA", description: "Healthcare Data Security", icon: "🏥" },
    { name: "PCI DSS", description: "Payment Card Security", icon: "💳" },
    { name: "NIST", description: "Cybersecurity Framework", icon: "🔐" }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "< 5min", label: "Incident Response", icon: <Zap className="w-6 h-6" /> },
    { number: "500+", label: "Protected Clients", icon: <Building2 className="w-6 h-6" /> }
  ];

  const securityLayers = [
    { layer: "Perimeter Security", description: "Firewalls, IPS, and network access control" },
    { layer: "Endpoint Protection", description: "Antivirus, EDR, and device management" },
    { layer: "Application Security", description: "Code analysis, WAF, and API protection" },
    { layer: "Data Security", description: "Encryption, DLP, and backup systems" },
    { layer: "Identity Security", description: "MFA, SSO, and access governance" },
    { layer: "Cloud Security", description: "CASB, CWPP, and cloud monitoring" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-600 via-blue-300 to-blue-100 text-white">
      <Header />
      
      {/* Hero Section with Dynamic Security Animation */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20" />
        
        {/* Animated Security Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + i * 0.1}s`
              }}
            >
              <div className={`w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-red-400/30' : i % 3 === 1 ? 'bg-blue-400/30' : 'bg-green-400/30'}`} />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-10 h-10 text-blue-400 mr-3 animate-pulse" />
              <span className="text-blue-400 font-semibold uppercase tracking-wider">Cyber Defense</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              IT Security
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-white-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Comprehensive cybersecurity solutions protecting your digital infrastructure from sophisticated threats. 
              Our multi-layered security approach ensures your business stays protected, compliant, and resilient.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <Shield className="w-5 h-5" />
                Get Security Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
             
            </div>
          </div>

          {/* Real-time Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-red-400 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-white-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Current <span className="text-blue-400">Threat Landscape</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding and defending against today's most dangerous cyber threats with proactive security measures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatTypes.map((threat, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeThreat === index 
                    ? 'bg-gray-700/70 border-red-500 scale-105' 
                    : 'bg-gray-800/50 border-gray-600 hover:border-red-400'
                }`}
                onClick={() => setActiveThreat(index)}
              >
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold text-white ${threat.color}`}>
                  {threat.severity}
                </div>

                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white mb-4 shadow-lg">
                    {threat.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{threat.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{threat.description}</p>
                </div>

                <div className={`w-full h-2 bg-gray-700 rounded-full overflow-hidden ${activeThreat === index ? 'animate-pulse' : ''}`}>
                  <div className={`h-full ${threat.color} transition-all duration-1000 ${activeThreat === index ? 'w-full' : 'w-0'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-blue-400">Security Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multi-layered security architecture designed to protect, detect, and respond 
              to threats across your entire digital ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securitySolutions.map((solution, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0">
                  <img 
                    src={solution.bgImage} 
                    alt={solution.title}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                <div className="relative z-10 p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${solution.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${solution.color} text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers Visualization */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Layers className="w-16 h-16 text-white-400 mx-auto mb-6" />
            <h2 className="text-4xl text-white-400 md:text-5xl font-bold mb-6">
              Defense in Depth Architecture
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Multiple layers of security controls working together to create an impenetrable defense system.
            </p>
          </div>

          <div className="relative">
            <div className="grid gap-4">
              {securityLayers.map((layer, index) => (
                <div
                  key={index}
                  className="group relative flex items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105"
                  style={{ marginLeft: `${index * 2}rem` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl text-black font-bold mb-2 group-hover:text-black transition-colors">
                      {layer.layer}
                    </h3>
                    <p className="text-gray-400">{layer.description}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Award className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance & <span className="text-green-400">Standards</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meeting and exceeding industry standards and regulatory requirements 
              to ensure your business stays compliant and secure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{framework.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors">
                  {framework.name}
                </h3>
                <p className="text-xs text-gray-400">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Lock className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Secure Your Digital Future
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Don't wait for a security breach. Protect your business with enterprise-grade 
            cybersecurity solutions designed for today's threat landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-red-600 font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <Shield className="w-5 h-5" />
              Start Security Audit
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-3">
              <PhoneCall className="w-5 h-5" />
              Contact Security Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITSecurity;
