import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ContactUs = () => {
  const location = useLocation();
  const productEnquiry = location.state?.product;
  const categoryEmail = location.state?.categoryEmail;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: productEnquiry ? `Hello, I would like to inquire about ${productEnquiry}. Please provide more information about availability and bulk pricing.` : ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and save to LocalStorage for Employees Corner
    setTimeout(() => {
      // 1. Get existing inquiries or empty array
      const existingRaw = localStorage.getItem('site_inquiries');
      const inquiries = existingRaw ? JSON.parse(existingRaw) : [];
      
      // 2. Add new inquiry with timestamp
      inquiries.push({
        id: Date.now(),
        date: new Date().toLocaleString(),
        productEnquiry: productEnquiry || 'General Inquiry',
        categoryEmail: categoryEmail || '',
        ...formData
      });
      
      // 3. Save back to LocalStorage
      localStorage.setItem('site_inquiries', JSON.stringify(inquiries));


      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Hero Banner section */}
      <div className="relative pt-32 pb-24 bg-gradient-to-r from-gray-900 to-[#1d3278] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-[#39BBEF] font-bold tracking-widest uppercase mb-4 text-sm drop-shadow">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
            Contact Us
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Whether you are looking for specific materials, bulk supply solutions, or consultation, our team is here to support your global trade operations.
          </p>
        </div>
      </div>

      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-[#1d3278] border-b border-gray-200 pb-4 mb-8">Head Office</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <MapPin className="text-[#B92025] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Kalshi Kunjo, House#102/9-102/10 (2nd Floor),<br />
                        Kalshi Road, Road #06, Block #B,<br />
                        Mirpur #12, Dhaka-1216
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone className="text-[#B92025] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600 leading-relaxed">+8801788880000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <Mail className="text-[#B92025] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 leading-relaxed">info@threeeyebd.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1d3278] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <p className="text-blue-100 mb-2">Saturday - Thursday: 9:00 AM to 6:00 PM</p>
                <p className="text-blue-100">Friday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1d3278] mb-6">Send Us a Message</h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl flex items-center space-x-3 mb-6 transition-all">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                  </div>
                  <p className="font-medium">Thank you for contacting us! Your message has been received and our team will get back to you shortly.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1d3278] focus:border-transparent outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1d3278] focus:border-transparent outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1d3278] focus:border-transparent outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white"
                      placeholder="+8801XXXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1d3278] focus:border-transparent outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1d3278] hover:bg-blue-900 text-white shadow-lg shadow-blue-900/30'}`}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
