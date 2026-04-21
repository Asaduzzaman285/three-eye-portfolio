import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Smartphone, Code, Layers, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Scalable E-commerce",
    description: "We build robust and scalable e-commerce platforms that ensure smooth shopping experiences, secure transactions, and seamless integrations.",
    icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Web Design", "Workflow Dev"],
    color: "from-blue-500 to-cyan-500",
    bgPattern: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Mobile App Development",
    description: "From concept to launch, we design and develop mobile applications that provide a seamless user experience across Android and iOS platforms.",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tags: ["App Design", "UI/UX"],
    color: "from-purple-500 to-pink-500",
    bgPattern: "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Custom Client Solutions",
    description: "We understand every business is unique. Our custom app development tailors solutions to meet specific client needs and requirements.",
    icon: <Code className="w-8 h-8 text-emerald-400" />,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    tags: ["Custom Dev", "Consulting"],
    color: "from-emerald-500 to-teal-500",
    bgPattern: "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Complex Business Logic",
    description: "We specialize in building applications that handle complex workflows, multi-level integrations, and data-driven decision-making.",
    icon: <Layers className="w-8 h-8 text-orange-400" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Enterprise", "System Design"],
    color: "from-orange-500 to-red-500",
    bgPattern: "radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)"
  },
];

const ApplicationDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Progress bar calculation
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);

      // Active section detection
      const sections = document.querySelectorAll('.service-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4) {
          setActiveIndex(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Progress Bar - Fixed at top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Dynamic Background Effects */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
        }}
      />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <Header />

      {/* Enhanced Hero Section */}
      <section className="text-center py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Premium Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Application Development
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Transform your ideas into reality with our end-to-end application
            development services. Whether it's e-commerce, mobile apps, or
            enterprise-grade solutions, we bring innovation, scalability, and
            reliability to every project.
          </p>
        </div>
      </section>

      {/* Enhanced Zigzag Layout */}
      <section className="max-w-7xl mx-auto space-y-24 px-6 pb-20 relative">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-section grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
            style={{ background: service.bgPattern }}
          >
            {/* Text Content */}
            <div className="space-y-6 relative">
              <div 
                className={`absolute -inset-4 bg-gradient-to-r ${service.color} opacity-5 rounded-2xl blur-xl transition-opacity duration-500 ${
                  activeIndex === index ? 'opacity-10' : 'opacity-5'
                }`}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}>
                    {service.icon}
                  </div>
                  <div>
                    <span className="hidden text-xs text-gray-500 uppercase tracking-wider">Service {index + 1}</span>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex gap-3 flex-wrap mb-6">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className={`group flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm`}>
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Enhanced Image Mockup */}
            <div className="relative group">
              <div className={`absolute -inset-3 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-lg group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg w-full h-auto transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
                
                {/* Floating UI Elements */}
                <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
                </div>
                
                <div className="absolute -bottom-3 -left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-gray-700 text-sm font-medium shadow-lg">
                  {service.tags[0]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationDevelopment;