import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Partners from '@/components/Partners'
import Clients from '@/components/Clients'


const OurStory = () => {
  return (
    <div className="bg-transparent text-gray-800">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl text-white font-bold mb-4">
            Our Journey, Our Story
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            From humble beginnings to a trusted name — discover how we built our
            legacy.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <img
            src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg"
            alt="Our Team"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:pl-8">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed text-justify">
            We are <span className="font-bold">Wintel Limited</span> —
            Bangladesh’s first and leading <span className="font-bold">Mobile Value-Added Service (VAS)</span> 
            provider, pioneering the digital transformation journey in the
            telecom industry. In addition to our leadership in VAS, we also
            specialize in <span className="font-bold">Information Technology Enabled Services (ITES)</span>,
            offering innovative, secure, and cost-effective digital solutions
            tailored to meet the evolving needs of enterprises worldwide.
          </p>
          <p className="text-lg leading-relaxed text-justify mt-4">
            With over two decades of proven expertise, we proudly hold the
            <span className="font-bold">largest market share</span> in the industry and maintain strong
            partnerships with <span className="font-bold">all major telecom operators in Bangladesh.</span> Our
            global footprint extends across the <span className="font-bold">Middle East, Southeast Asia,
            Europe, and Canada,</span> enabling us to deliver scalable solutions to
            both regional and international clients.
          </p>
          <p className="text-lg leading-relaxed text-justify mt-4">
            At Wintel, our mission is to empower businesses through <span className="font-bold">cutting-edge
            technologies, robust platforms, and customer-centric innovation</span> —
            driving measurable growth, seamless connectivity, and sustainable
            value creation.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Journey Through the Years
          </h2>
          <div className="space-y-8 relative">
            {/* Timeline Item */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">
                2002
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold">Founded</h3>
                <p className="text-gray-600">
                  Our story began with a small but passionate team determined to
                  change the industry.
                </p>
              </div>
            </div>
            {/* <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">
                2010
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold">Major Partnership</h3>
                <p className="text-gray-600">
                  We partnered with leading companies, expanding our reach and
                  capabilities.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">
                2023
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold">Global Recognition</h3>
                <p className="text-gray-600">
                  Recognized as one of the top innovators in our field, serving
                  clients worldwide.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">
                Software Development
              </h3>
              <p className="text-gray-600">
                High-performance, modern, and scalable websites tailored to your
                needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Brand Strategy</h3>
              <p className="text-gray-600">
                Helping you create a unique and lasting impression in your
                industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Bulk Sms</h3>
              <p className="text-gray-600">
                Expert guidance to transform challenges into opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">
                Value Added Services
              </h3>
              <p className="text-gray-600">
                Expert guidance to transform challenges into opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">
                Top Up & Financial Activities
              </h3>
              <p className="text-gray-600">
                Expert guidance to transform challenges into opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Business Growing</h3>
              <p className="text-gray-600">
                Expert guidance to transform challenges into opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

 

      {/* Motto */}
      <section className="bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] text-white py-16 text-center">
  <h2 className="text-4xl font-bold mb-4">
    "Innovation. Excellence. Trust."
  </h2>
  <p className="max-w-2xl mx-auto text-lg">
    We believe in building solutions that last, relationships that matter,
    and a future worth creating.
  </p>
</section>


      <Footer />
    </div>
  )
}

export default OurStory
