import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { X, Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

const newsData = [
  {
    id: 1,
    type: 'news',
    title: 'Wintel announces six members of 2024 External Advisory Group',
    excerpt: 'The External Advisory Group works with fundamentals to identify for the past upcoming five years, providing guidance on our Telehealth Device, Chief Investment.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop',
    date: '2024-03-14',
    category: 'ADVISORY',
    readTime: '5 min read',
    content: `
      <p>We are excited to announce the formation of our 2024 External Advisory Group, comprising six distinguished industry leaders who will provide strategic guidance for Wintel Limited's continued growth and innovation.</p>
      
      <h3>Advisory Group Members</h3>
      <ul>
        <li><strong>Dr. Sarah Johnson</strong> - Former CTO of TechGlobal, specializing in telecommunications infrastructure</li>
        <li><strong>Mark Chen</strong> - Senior Partner at Innovation Ventures, with 20+ years in telecom investments</li>
        <li><strong>Prof. Ahmed Hassan</strong> - Director of Digital Communications Research at MIT</li>
        <li><strong>Lisa Rodriguez</strong> - Former VP of Strategic Partnerships at ConnectCorp</li>
        <li><strong>David Kim</strong> - Cybersecurity expert and founder of SecureNet Solutions</li>
        <li><strong>Maria Santos</strong> - International business development specialist</li>
      </ul>
      
      <p>This advisory group will work closely with our executive team to identify emerging opportunities in the telecommunications sector, particularly focusing on 5G infrastructure, IoT solutions, and digital transformation services.</p>
      
      <p>"We're honored to have such accomplished professionals joining our advisory group," said CEO Rahman Ahmed. "Their collective expertise will be invaluable as we navigate the rapidly evolving telecommunications landscape."</p>
    `
  },
  {
    id: 2,
    type: 'news',
    title: 'Major Partnership Announcement with Regional Telecom Leaders',
    excerpt: 'Wintel Limited signs strategic partnership agreements with three major telecommunications providers across South Asia.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=300&fit=crop',
    date: '2024-03-10',
    category: 'PARTNERSHIP',
    readTime: '3 min read',
    content: `
      <p>Wintel Limited has successfully concluded negotiations for strategic partnerships with three leading telecommunications providers across South Asia, marking a significant milestone in our regional expansion strategy.</p>
      
      <h3>Partnership Details</h3>
      <p>The partnerships will focus on:</p>
      <ul>
        <li>Joint development of next-generation mobile value-added services</li>
        <li>Shared infrastructure development and optimization</li>
        <li>Cross-border roaming solutions and services</li>
        <li>Technology transfer and knowledge sharing initiatives</li>
      </ul>
      
      <p>These strategic alliances are expected to enhance service quality for millions of customers across the region while reducing operational costs through shared resources and expertise.</p>
      
      <p>"This partnership represents our commitment to providing world-class telecommunications services throughout South Asia," commented our Head of International Relations.</p>
    `
  },
  {
    id: 3,
    type: 'news',
    title: 'Q1 2024 Financial Results Show Strong Growth',
    excerpt: 'Company reports 25% year-over-year revenue growth with expanding market share in mobile value-added services.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    date: '2024-03-05',
    category: 'FINANCIAL',
    readTime: '4 min read',
    content: `
      <p>Wintel Limited is pleased to announce strong financial performance for Q1 2024, demonstrating continued growth and market expansion in the telecommunications sector.</p>
      
      <h3>Key Financial Highlights</h3>
      <ul>
        <li><strong>Revenue Growth:</strong> 25% increase year-over-year</li>
        <li><strong>Market Share:</strong> Expanded to 15% of the mobile VAS market</li>
        <li><strong>Customer Base:</strong> Reached 2.5 million active subscribers</li>
        <li><strong>EBITDA:</strong> Improved by 30% compared to Q1 2023</li>
      </ul>
      
      <p>The growth has been primarily driven by increased adoption of our mobile value-added services, successful expansion into new geographical markets, and strategic partnerships with major telecommunications operators.</p>
      
      <p>Looking ahead, we remain optimistic about continued growth opportunities in the digital services sector and our ability to deliver value to both customers and shareholders.</p>
    `
  }
]

const eventsData = [
  {
    id: 1,
    type: 'event',
    title: 'Telecommunications company builds value by consolidating networks',
    description: 'Comprehensive network consolidation project that enhanced operational efficiency and reduced infrastructure costs by 40%.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
    date: '2024-02-15',
    location: 'Dhaka, Bangladesh',
    participants: '50+ Industry Leaders',
    duration: '3 days',
    category: 'INFRASTRUCTURE',
    content: `
      <p>Our recent network consolidation project represents a significant milestone in telecommunications infrastructure optimization. Over the course of three intensive days, we brought together industry leaders, technical experts, and strategic partners to implement a comprehensive network modernization strategy.</p>
      
      <h3>Project Achievements</h3>
      <ul>
        <li><strong>Cost Reduction:</strong> Achieved 40% reduction in infrastructure maintenance costs</li>
        <li><strong>Performance Improvement:</strong> Network reliability increased by 35%</li>
        <li><strong>Coverage Expansion:</strong> Extended service coverage to 15 new rural areas</li>
        <li><strong>Technology Upgrade:</strong> Migrated 80% of legacy systems to modern platforms</li>
      </ul>
      
      <h3>Implementation Highlights</h3>
      <p>The project involved consolidating multiple network nodes, upgrading core infrastructure components, and implementing advanced monitoring systems. Our team worked around the clock to ensure minimal service disruption during the transition period.</p>
      
      <p>The success of this project has positioned Wintel Limited as a leader in network optimization and has attracted interest from other regional telecommunications providers seeking similar improvements.</p>
    `
  },
  {
    id: 2,
    type: 'event',
    title: 'Digital Innovation Summit: Unlocking the full potential in technology for business growth',
    description: 'Annual summit showcasing latest technological innovations and their applications in telecommunications and business development.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop',
    date: '2024-01-28',
    location: 'Chittagong, Bangladesh',
    participants: '200+ Attendees',
    duration: '2 days',
    category: 'INNOVATION',
    content: `
      <p>The Digital Innovation Summit brought together thought leaders, technology innovators, and business executives to explore the transformative potential of emerging technologies in the telecommunications sector.</p>
      
      <h3>Summit Highlights</h3>
      <ul>
        <li><strong>Keynote Speakers:</strong> 12 industry experts from across Asia-Pacific</li>
        <li><strong>Innovation Showcase:</strong> 25+ cutting-edge technology demonstrations</li>
        <li><strong>Networking Sessions:</strong> Facilitated connections between 200+ professionals</li>
        <li><strong>Workshop Sessions:</strong> 8 hands-on training sessions on emerging technologies</li>
      </ul>
      
      <h3>Key Topics Covered</h3>
      <p>The summit featured comprehensive discussions on:</p>
      <ul>
        <li>5G network implementation strategies</li>
        <li>IoT applications in telecommunications</li>
        <li>Artificial Intelligence in customer service</li>
        <li>Blockchain technology for secure communications</li>
        <li>Edge computing solutions</li>
      </ul>
      
      <p>Participants left with actionable insights and strategic frameworks for implementing digital transformation initiatives within their organizations.</p>
    `
  },
  {
    id: 3,
    type: 'event',
    title: 'Regional Telecom Conference: Building Sustainable Communications',
    description: 'Major industry conference focused on sustainable practices and environmental responsibility in telecommunications infrastructure.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop',
    date: '2024-01-15',
    location: 'Sylhet, Bangladesh',
    participants: '150+ Professionals',
    duration: '1 day',
    category: 'SUSTAINABILITY',
    content: `
      <p>The Regional Telecom Conference on Sustainable Communications brought together environmental experts, telecommunications professionals, and policy makers to address the critical intersection of technology advancement and environmental stewardship.</p>
      
      <h3>Conference Outcomes</h3>
      <ul>
        <li><strong>Sustainability Charter:</strong> Signed by 15 regional telecommunications companies</li>
        <li><strong>Green Technology Initiatives:</strong> Launched 5 collaborative projects</li>
        <li><strong>Carbon Reduction Goals:</strong> Committed to 30% reduction by 2025</li>
        <li><strong>Innovation Fund:</strong> Established $2M fund for green technology research</li>
      </ul>
      
      <h3>Key Initiatives Discussed</h3>
      <p>The conference addressed several critical areas:</p>
      <ul>
        <li>Energy-efficient network infrastructure</li>
        <li>Renewable energy adoption in telecommunications</li>
        <li>Waste reduction in electronic equipment lifecycle</li>
        <li>Sustainable supply chain management</li>
        <li>Community impact of telecommunications infrastructure</li>
      </ul>
      
      <p>The event concluded with the formation of a Regional Sustainability Task Force, which will meet quarterly to monitor progress and share best practices across participating organizations.</p>
    `
  },
  {
    id: 4,
    type: 'event',
    title: 'International Partnership Forum: Beyond borders, Better connections',
    description: 'Strategic forum focused on building international partnerships and expanding global telecommunications networks.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop',
    date: '2023-12-10',
    location: 'Dubai, UAE',
    participants: '300+ Global Leaders',
    duration: '3 days',
    category: 'INTERNATIONAL',
    content: `
      <p>The International Partnership Forum served as a premier platform for telecommunications leaders from across the globe to explore collaboration opportunities and discuss the future of international connectivity.</p>
      
      <h3>Forum Achievements</h3>
      <ul>
        <li><strong>Partnership Agreements:</strong> 12 new international partnerships established</li>
        <li><strong>Investment Commitments:</strong> $50M in cross-border infrastructure projects</li>
        <li><strong>Technology Transfers:</strong> 8 knowledge sharing agreements signed</li>
        <li><strong>Market Access:</strong> New opportunities in 6 emerging markets identified</li>
      </ul>
      
      <h3>Strategic Sessions</h3>
      <p>The three-day forum included intensive sessions on:</p>
      <ul>
        <li>Cross-border regulatory harmonization</li>
        <li>International roaming optimization</li>
        <li>Global standards for 5G implementation</li>
        <li>Cybersecurity in international networks</li>
        <li>Emerging market penetration strategies</li>
      </ul>
      
      <p>The forum established Wintel Limited as a key player in international telecommunications cooperation and opened doors for significant expansion opportunities in new markets.</p>
    `
  }
]

const NewsEvents = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (item) => {
    setSelectedItem(item)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
    document.body.style.overflow = 'unset'
  }

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsData.length)
  }

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsData.length) % newsData.length)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const currentNews = newsData[currentNewsIndex]

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Latest News Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="text-sm font-medium text-green-600 mb-2 block">NEWS</span>
              <h2 className="text-5xl font-bold text-gray-900">
                Latest <span className="text-green-500">News</span>
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevNews}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextNews}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main News Item */}
            <div className="relative group cursor-pointer" onClick={() => openModal(currentNews)}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={currentNews.image}
                  alt={currentNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm opacity-80 mb-2">{formatDate(currentNews.date)}</div>
                  <div className="text-4xl font-bold mb-2">{String(currentNewsIndex + 1).padStart(2, '0')}</div>
                </div>
              </div>
            </div>

            {/* News Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                  {currentNews.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {currentNews.readTime}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors" 
                  onClick={() => openModal(currentNews)}>
                {currentNews.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {currentNews.excerpt}
              </p>

              <button
                onClick={() => openModal(currentNews)}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Read Full Article
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* News Indicators */}
              <div className="flex gap-2">
                {newsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentNewsIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentNewsIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Events Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="text-sm font-medium text-blue-600 mb-2 block">CASE STUDIES</span>
              <h2 className="text-5xl font-bold text-gray-900">
                Impact <span className="text-blue-600">Events</span>
              </h2>
            </div>
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
              More Events
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventsData.map((event, index) => (
              <div
                key={event.id}
                className={`group cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                onClick={() => openModal(event)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[3/2] relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 text-xs text-white mb-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(event.date)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                        {event.category}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-base mb-2 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        <span>{event.participants}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header Image */}
              <div className="aspect-[21/9] relative overflow-hidden rounded-t-2xl">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Category Badge */}
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                    {selectedItem.category || selectedItem.type.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(selectedItem.date)}
                  </div>
                  {selectedItem.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedItem.readTime}
                    </div>
                  )}
                  {selectedItem.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedItem.location}
                    </div>
                  )}
                  {selectedItem.participants && (
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {selectedItem.participants}
                    </div>
                  )}
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  {selectedItem.title}
                </h1>

                <div 
                  className="prose prose-lg max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: selectedItem.content }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default NewsEvents