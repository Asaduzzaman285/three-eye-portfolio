import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const [isEmployee, setIsEmployee] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    // Check local storage for pending inquiries
    const checkPending = () => {
      const data = localStorage.getItem('site_inquiries');
      if (data) {
        const inquiries = JSON.parse(data);
        const pending = inquiries.filter((inq: any) => inq.status !== 'Served').length;
        setPendingCount(pending);
      } else {
        setPendingCount(0);
      }
      setIsEmployee(localStorage.getItem('is_employee_authenticated') === 'true');
    };
    
    checkPending();
    // Re-check periodically to fake real-time updates across tabs/routes
    const interval = setInterval(checkPending, 2000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { title: 'Home', route: '/' },
    { title: 'About Us', route: '/about-us' },
    { title: 'Our Services', route: '/our-services' },
    { title: 'Our Products', route: '/products' },
    // { title: 'Gallery', route: '/gallery' },
    { title: 'Career', route: '/career' },
    // { title: 'Investors', route: '/investors' },
    // { title: 'Tender', route: '/tender' },
    { title: 'Contact Us', route: '/contact' },
    // { title: 'Sustainability', route: '/sustainability' },
    { title: 'Employees Corner', route: '/employees' },
  ];

  return (
    <header className="w-full shadow-md z-50 sticky top-0">
      {/* Top Bar */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Title */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <img className="h-16 w-auto object-contain" src="/assets/img/three-eye-up-logo.jpg" alt="Logo" />
            </Link>
            {/* <Link to="/">
              <span className="text-[#20368c] font-bold text-xl md:text-2xl tracking-tight hidden sm:block">
                Three-Eye Pvt. Ltd.
              </span>
            </Link> */}
          </div>

          {/* Right Utilities */}
          <div className="flex flex-col items-end space-y-3">
            <div className="text-[11px] text-gray-700 flex items-center space-x-2">
              <Link to="/products" className="hover:underline">Skip to Main Content</Link>
              <span>|</span>
              {/* <a href="#screen-reader" className="hover:underline">Screen Reader Access</a> */}
              {/* <div className="flex items-center ml-3 space-x-1">
                <button className="text-xs hover:text-[#20368c] font-semibold">A</button>
                <button className="text-sm font-bold hover:text-[#20368c]">A+</button>
                <button className="border border-gray-400 px-1 ml-1 bg-white text-xs">A</button>
                <button className="bg-black text-white px-1 text-xs">A</button>
              </div> */}
            </div>

            <div className="flex w-full md:w-auto">
              <input
                type="text"
                placeholder="Enter Keyword..."
                className="border border-gray-300 px-2 py-1 text-sm outline-none w-full md:w-48 placeholder-gray-500"
              />
              <button className="bg-[#20368c] text-white px-4 py-1 font-semibold text-sm hover:bg-blue-900 transition">
                GO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#939598] w-full border-b-[4px] border-[#1d3278]">
        <div className="container mx-auto">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.route}
                className={`relative py-3 px-6 text-white text-[13px] font-semibold hover:bg-[#1d3278] transition-colors border-r border-[#455eb3] ${idx === 0 ? 'border-l' : ''} whitespace-nowrap`}
              >
                {link.title}
                {link.title === 'Employees Corner' && isEmployee && pendingCount > 0 && (
                  <span className="absolute top-1 right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center min-w-[18px]">
                    {pendingCount}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden flex justify-between items-center p-3 text-white">
            <span className="font-semibold text-sm uppercase">Menu</span>
            <button onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#939598] text-white absolute w-full z-40 max-h-[70vh] overflow-y-auto shadow-xl">
          <nav className="flex flex-col border-t border-[#7a7c7f]">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.route}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-6 border-b border-[#455eb3] hover:bg-[#1d3278] transition-colors font-medium flex justify-between items-center"
              >
                {link.title}
                {link.title === 'Employees Corner' && isEmployee && pendingCount > 0 && (
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {pendingCount}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;