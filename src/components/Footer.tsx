import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="footer" className="bg-gray-700 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Full-width Company Details */}
        <div className="mb-10 pb-8 border-b border-gray-600">
          <a href="/" className="inline-flex items-center justify-center mb-6 bg-white py-2 px-4 rounded-lg shadow-md transition-transform hover:scale-105">
            <img className="h-14 w-auto object-contain" src="/assets/img/three-eye-up-logo.jpg" alt="Three Eye Logo" />
          </a>
          <div className="mt-4 max-w-4xl">
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              Three Eye is a globally oriented trading company specializing in the import and distribution of industrial raw materials, stone products, and chemicals. With operations in Dhaka and the UAE, we ensure seamless supply solutions across markets.
            </p>
            <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-16 text-sm text-gray-300">
              <div>
                <strong className="text-white">Head Office:</strong>


                <p> Kalshi Kunjo, House#102/9-102/10
                  (2nd Floor), Kalshi Road, Road #06,</p>
                <p>Block #B, Mirpur #12, Dhaka-1216</p>
              </div>
              <div className="flex flex-col justify-center">
                <p><strong>Phone:</strong> <span className="ml-1">+8801788880000</span></p>
                <p><strong>Email:</strong> <span className="ml-1">info@threeeyebd.com</span></p>
              </div>
            </div>
          </div>
          <div className="flex space-x-6 mt-6">
            <a href="https://x.com/ThreeEye2019" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><i className="bi bi-twitter-x text-lg"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="bi bi-facebook text-lg"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><i className="bi bi-instagram text-lg"></i></a>
            <a href="https://www.linkedin.com/company/three-eye/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><i className="bi bi-linkedin text-lg"></i></a>
          </div>
        </div>

        {/* Bottom Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg text-[#3ABBF0] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/about-us" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition">Our Products</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-[#3ABBF0] font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="/our-services" className="text-gray-400 hover:text-white transition">Product Sourcing</a></li>
              <li><a href="/our-services" className="text-gray-400 hover:text-white transition">Product Development</a></li>
              <li><a href="/our-services" className="text-gray-400 hover:text-white transition">CNF Operations</a></li>
              <li><a href="/our-services" className="text-gray-400 hover:text-white transition">Logistics Management</a></li>
              <li><a href="/our-services" className="text-gray-400 hover:text-white transition">Banking Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-[#3ABBF0] font-semibold mb-4">Our Newsletter</h4>
            <p className="mb-4 text-sm text-gray-300">Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full text-gray-800 rounded-l outline-none focus:ring-2 focus:ring-[#3ABBF0]"
              />
              <button className="bg-[#1d3278] text-white px-4 py-2 rounded-r hover:bg-blue-900 transition-colors font-medium">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-600 pt-8">
        <p>© <span>Copyright</span> <strong className="px-1">Three Eye Pvt. Ltd.</strong> <span>All Rights Reserved</span></p>
        {/* <div className="mt-2">
          Made by <a href="https://bootstrapmade.com/" className="text-blue-400 hover:underline">BootstrapMade</a> Distributed by <a href="https://themewagon.com" className="text-blue-400 hover:underline">ThemeWagon</a>
        </div> */}
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <a
          href="#"
          id="scroll-top"
          className="fixed bottom-8 right-8 w-10 h-10 bg-[#0ab2dcff] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      )}
    </footer>
  );
};

export default Footer;