import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const teamMembers = [
  {
    name: 'FAISAL ALIM',
    title: 'Managing Director',
    image: '/assets/img/md-sir.jpg',
    bio: `Mr. Alim is a dynamic leader with over 40 years of experience in the technology and business sectors. Under his guidance, the company continues to expand its presence in the Bangladeshi IT industry, fostering innovation, excellence, and sustainable growth.`
  },
  {
    name: 'ATM Mahbubul Alam',
    title: 'Chairman',
    image: 'https://wintelbd.com/assets/img/team/cm.jpg',
    bio: `Mr. Alam is a visionary leader with over 20 years of experience in the technology sector. Under his leadership, the company has grown into a trusted name in the Bangladeshi IT industry, driving innovation and sustainable growth.`
  }
]


const OurManagement = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handlePrev = () => {
    setIsAutoPlay(false)
    setSelectedIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setSelectedIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const handleThumbnailClick = (index) => {
    setIsAutoPlay(false)
    setSelectedIndex(index)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const selectedMember = teamMembers[selectedIndex]

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />

      {/* Main Profile Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="flex items-center">
          {/* Left Arrow - Outside the slider */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 mr-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-all duration-200 shadow-md flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Content */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Section */}
              <div>
                <h1 className="text-4xl font-bold mb-2 transition-all duration-500">
                  {selectedMember.name}
                </h1>
                <h2 className="text-lg text-gray-500 mb-6">
                  {selectedMember.title}
                </h2>
                <p className="text-gray-700 leading-relaxed transition-all duration-500">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="rounded-lg shadow-lg w-full max-w-sm object-cover transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>

          {/* Right Arrow - Outside the slider */}
          <button
            onClick={handleNext}
            className="w-12 h-12 ml-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-all duration-200 shadow-md flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <section className="bg-white py-8 border-t">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
            selectedIndex === index
              ? 'opacity-100 transform scale-110'
              : 'opacity-60 hover:opacity-100'
          }`}
          onClick={() => handleThumbnailClick(index)}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
          />
          <p className="text-sm font-medium mt-2">{member.name}</p>
          <p className="text-xs text-gray-500">{member.title}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Auto-play indicator */}
  <div className="flex justify-center mt-6">
    <div className="flex space-x-1">
      {teamMembers.map((_, index) => (
        <div
          key={index}
          className={`h-1 rounded-full transition-all duration-300 ${
            selectedIndex === index
              ? 'bg-blue-500 w-8'
              : 'bg-gray-300 w-2'
          }`}
        />
      ))}
    </div>
  </div>
</section>



      <Footer />
    </div>
  )
}

export default OurManagement