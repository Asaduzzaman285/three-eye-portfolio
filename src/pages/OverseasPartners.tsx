import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const overseasPartners = [
  // Row 1
  { id: 1, name: 'Telenor', logo: '/assets/img/clients/telinor.png', region: 'Nordic & Asia'},
  { id: 2, name: 'Digi', logo: '/assets/img/clients/digi.png', region: 'Malaysia'},
  { id: 3, name: 'Etisalat', logo: '/assets/img/clients/etisalat.jpg', region: 'Middle East & Africa' },
  { id: 4, name: 'Zain', logo: '/assets/img/clients/zain.png', region: 'Middle East & Africa' },
  { id: 5, name: 'Mobilink', logo: '/assets/img/clients/mobilink.jpg', region: 'Pakistan'},
  
  // Row 2
  { id: 6, name: 'AT&T', logo: '/assets/img/clients/at&t.png', region: 'North America', description: 'Global communications leader' },
  { id: 7, name: 'TIM', logo: '/assets/img/clients/tim.jpg', region: 'Italy & Brazil', description: 'Telecom Italia Mobile' },
  { id: 8, name: 'OmanTel', logo: '/assets/img/clients/omantel.jpg', region: 'Middle East', description: 'Integrated telecom services' },
  { id: 9, name: 'Wind Tre', logo: '/assets/img/clients/windtre.png', region: 'Italy & Greece', description: 'Leading mobile operator' },

  // Row 3
  { id: 10, name: 'Batelco', logo: '/assets/img/clients/batelco.png', region: 'Bahrain', description: 'Regional telecom leader' },
  { id: 11, name: 'Wataniya', logo: '/assets/img/clients/wataniya.png', region: 'Kuwait', description: 'Mobile telecommunications' },
  { id: 12, name: 'Celcom', logo: '/assets/img/clients/celcom.png', region: 'Malaysia', description: 'Mobile network pioneer' },
  { id: 13, name: 'Maxis', logo: '/assets/img/clients/maxis.png', region: 'Malaysia', description: 'Converged communications' },
  { id: 14, name: 'Viva', logo: '/assets/img/clients/viva.png', region: 'Kuwait', description: 'Advanced mobile services' },
  
  // Row 4
  { id: 15, name: 'PTCL', logo: '/assets/img/clients/ptcl.jpeg', region: 'Pakistan', description: 'Telecommunications services' },
  { id: 16, name: 'Nawras', logo: '/assets/img/clients/nowras.png', region: 'Oman', description: 'Mobile & broadband services' },
 
]

const regions = [
  { 
    name: 'Middle East & Africa', 
    count: overseasPartners.filter(p => p.region.includes('Middle East') || p.region.includes('Africa') || p.region.includes('UAE') || p.region.includes('Bahrain') || p.region.includes('Kuwait') || p.region.includes('Oman') || p.region.includes('Saudi')).length, 
    color: 'from-amber-500 to-orange-500',
    filter: 'middle'
  },
  { 
    name: 'Asia Pacific', 
    count: overseasPartners.filter(p => p.region.includes('Malaysia') || p.region.includes('Pakistan') || p.region.includes('Asia')).length, 
    color: 'from-emerald-500 to-teal-500',
    filter: 'asia'
  },
  { 
    name: 'Europe', 
    count: overseasPartners.filter(p => p.region.includes('Europe') || p.region.includes('Italy') || p.region.includes('Nordic') || p.region.includes('Greece')).length, 
    color: 'from-blue-500 to-indigo-500',
    filter: 'europe'
  },
  { 
    name: 'America', 
    count: overseasPartners.filter(p => p.region.includes('America') || p.region.includes('Brazil')).length, 
    color: 'from-purple-500 to-pink-500',
    filter: 'americas'
  }
]

const OverseasPartners = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredPartner, setHoveredPartner] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const getFilteredPartners = () => {
    if (activeFilter === 'all') return overseasPartners
    
    switch(activeFilter) {
      case 'middle':
        return overseasPartners.filter(p => 
          p.region.includes('Middle East') || p.region.includes('Africa') || 
          p.region.includes('UAE') || p.region.includes('Bahrain') || 
          p.region.includes('Kuwait') || p.region.includes('Oman') || 
          p.region.includes('Saudi')
        )
      case 'asia':
        return overseasPartners.filter(p => 
          p.region.includes('Malaysia') || p.region.includes('Pakistan') || p.region.includes('Asia')
        )
      case 'europe':
        return overseasPartners.filter(p => 
          p.region.includes('Europe') || p.region.includes('Italy') || 
          p.region.includes('Nordic') || p.region.includes('Greece')
        )
      case 'americas':
        return overseasPartners.filter(p => 
          p.region.includes('America') || p.region.includes('Brazil')
        )
      default:
        return overseasPartners
    }
  }

  const filteredPartners = getFilteredPartners()

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] text-white py-20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 to-blue-400/40"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center ">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Global Network
              </h1>
            </div>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
              Connecting continents through strategic partnerships with leading telecommunications operators worldwide
            </p>
            <div className="flex justify-center gap-8 text-sm text-white-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span>20+ Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>4 Continents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span>Global Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Regional Presence</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {regions.map((region, index) => (
                <div
                  key={region.name}
                  className={`bg-gradient-to-br ${region.color} p-6 rounded-2xl text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                  onClick={() => setActiveFilter(region.filter)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold mb-2">{region.count}</div>
                  <div className="text-sm font-medium opacity-90">{region.name}</div>
                  <div className="text-xs opacity-75 mt-1">Partners</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-gray-800 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              All Partners
            </button>
            {regions.map((region) => (
              <button
                key={region.name}
                onClick={() => setActiveFilter(region.filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === region.filter
                    ? 'bg-gray-800 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      {/* Partners Grid */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {filteredPartners.map((partner, index) => (
        <div
          key={partner.id}
          className={`group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {/* Only Partner Logo */}
          <div className="flex items-center justify-center h-28 sm:h-32 md:h-36">
            <img
              src={partner.logo}
              alt={`Partner ${partner.id}`}
              className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `https://via.placeholder.com/120x80/4F46E5/white?text=Logo`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Global Reach Section */}
      <section className="py-20 bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-8">Expanding Horizons</h2>
            <p className="text-black text-gray-300 mb-12 max-w-3xl mx-auto">
              Our international partnerships enable seamless connectivity and innovation across global markets, 
              delivering world-class telecommunications solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h4 className="text-black font-semibold mb-2">Global Reach</h4>
                <p className="text-black">Spanning multiple continents and time zones</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h4 className="text-black font-semibold mb-2">Strategic Alliances</h4>
                <p className="text-black">Building lasting partnerships with industry leaders</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-black font-semibold mb-2">Innovation Focus</h4>
                <p className="text-black">Driving technological advancement together</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
              Explore Partnership Opportunities
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OverseasPartners