import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const mnoPartners = [
  { id: 1, logo: '/assets/img/clients/Grameenphone.png' },
  { id: 2, logo: '/assets/img/clients/robi.png' },
  { id: 3, logo: '/assets/img/clients/Banglalink.png' },
  { id: 4, logo: '/assets/img/clients/Airtel.png' },
  { id: 5, logo: '/assets/img/clients/TeleTalk.jpg' }
]

const MnoPartners = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] bg-clip-text text-transparent mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Powering connectivity across Bangladesh through trusted collaborations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* MNO Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mobile Network Operators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building the future of telecommunications through strategic alliances with industry leaders
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {mnoPartners.map((partner, index) => (
              <div
                key={partner.id}
                className={`group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="flex items-center justify-center h-28 sm:h-32 md:h-36">
                  <img
                    src={partner.logo}
                    alt={`MNO ${partner.id}`}
                    className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          

        </div>
         {/* Partnership Benefits */}
          <div className={`bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Enhanced Coverage</h4>
                <p className="text-gray-600">Expanding network reach through collaborative infrastructure development</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Reliable Service</h4>
                <p className="text-gray-600">Ensuring consistent quality and performance across all network operations</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h4>
                <p className="text-gray-600">Delivering exceptional user experiences through integrated solutions</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-gray-600 mb-8">
              Ready to explore partnership opportunities?
            </p>
            <button  className="px-8 py-4 bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] text-black font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105 transform">
              <a href="mailto:info@wintelbd.com">Get in Touch</a>
            </button>
          </div>
      </section>

      <Footer />
    </div>
  )
}

export default MnoPartners
