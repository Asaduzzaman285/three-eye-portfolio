import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Lock, Inbox, User, Phone, Mail, Clock, ShieldCheck, Trash2, CheckCircle, CircleDashed } from 'lucide-react';

const EmployeesCorner = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [inquiries, setInquiries] = useState<any[]>([]);

  // The secret PIN for the demo
  const SECRET_PIN = "1234";

  useEffect(() => {
    window.scrollTo(0, 0);
    // Load inquiries if authenticated
    if (isAuthenticated) {
      const data = localStorage.getItem('site_inquiries');
      if (data) {
        // Reverse array to show newest inquiries at the top
        setInquiries(JSON.parse(data).reverse());
      }
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === SECRET_PIN) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPin('');
    }
  };

  const toggleStatus = (id: number) => {
    const updated = inquiries.map(inq =>
      inq.id === id ? { ...inq, status: inq.status === 'Served' ? 'Pending' : 'Served' } : inq
    );
    setInquiries(updated);
    localStorage.setItem('site_inquiries', JSON.stringify([...updated].reverse()));
  };

  const handleClearInquiries = () => {
    if (window.confirm("Are you sure you want to delete all messages? This action cannot be undone.")) {
      localStorage.removeItem('site_inquiries');
      setInquiries([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col pt-24 pb-16">

        {!isAuthenticated ? (
          // ==============================
          // LOGIN PROMPT UI
          // ==============================
          <div className="flex-grow flex items-center justify-center px-4">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md text-center">
              <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-[#1d3278]" />
              </div>
              <h1 className="text-3xl font-extrabold text-[#1d3278] mb-2">Employees Corner</h1>
              <p className="text-gray-500 mb-8">Access restricted. Please enter your employee PIN to securely view customer inquiries.</p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter PIN (Demo: 1234)"
                    className={`w-full px-4 py-4 rounded-xl border ${error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'} focus:ring-2 focus:ring-[#1d3278] outline-none text-center text-xl tracking-[0.5em] font-mono`}
                    autoFocus
                  />
                  {error && <p className="text-red-500 text-sm mt-2 font-medium">Incorrect PIN. Please try again.</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1d3278] text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition shadow-lg flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" /> Unlock Dashboard
                </button>
              </form>
            </div>
          </div>
        ) : (
          // ==============================
          // DASHBOARD UI
          // ==============================
          <div className="container mx-auto px-6 max-w-6xl mt-8">

            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Inquiry Dashboard</h1>
                  <p className="text-gray-500 text-sm">Secure employee portal</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 text-[#1d3278] px-4 py-2 rounded-full font-bold text-sm">
                  {inquiries.length} {inquiries.length === 1 ? 'Message' : 'Messages'}
                </div>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="text-gray-500 hover:text-gray-800 font-medium text-sm transition"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Messages Feed */}
            {inquiries.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200 p-16 flex flex-col items-center justify-center text-center shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Inbox className="w-10 h-10 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Inbox is Empty</h2>
                <p className="text-gray-500 max-w-md">No customer inquiries have been submitted yet. When a user submits the Contact Us form, their message will seamlessly appear here.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-end mb-2">
                  <button onClick={handleClearInquiries} className="flex items-center text-red-500 hover:text-red-700 font-medium text-sm transition bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg">
                    <Trash2 className="w-4 h-4 mr-2" /> Clear All Messages
                  </button>
                </div>

                {inquiries.map((inquiry, index) => (
                  <div key={inquiry.id || index} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden group hover:border-[#39BBEF] transition-colors">
                    <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#1d3278] text-white rounded-full flex items-center justify-center font-bold">
                          {inquiry.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{inquiry.name}</h3>
                          <p className="text-xs text-gray-500 flex items-center mt-1">
                            <Clock className="w-3 h-3 mr-1" /> Submitted on {inquiry.date || 'Unknown'}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm space-y-1 bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                        <a href={`mailto:${inquiry.email}`} className="text-blue-600 hover:underline flex items-center">
                          <Mail className="w-3 h-3 mr-2" /> {inquiry.email}
                        </a>
                        <a href={`tel:${inquiry.phone}`} className="text-gray-600 hover:text-gray-900 flex items-center">
                          <Phone className="w-3 h-3 mr-2" /> {inquiry.phone}
                        </a>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{inquiry.message}</p>
                    </div>
                    {/* Status Badge & Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/50 gap-4">

                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-gray-500">Status:</span>
                        {inquiry.status === 'Served' ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 shadow-sm border border-green-200">
                            <CheckCircle className="w-3 h-3 mr-1" /> Served
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 shadow-sm border border-amber-200">
                            <CircleDashed className="w-3 h-3 mr-1" /> Pending
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {/* Draft Email via Gmail Web */}
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${inquiry.email}&cc=management@threeeyebd.com&su=${encodeURIComponent(`${inquiry.productEnquiry || 'Product Inquiry'} - ${inquiry.name} - ${inquiry.phone}`)}`}
                          target="_blank"
                          onClick={(e) => e.preventDefault()}
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-sm bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                        >
                          <Mail className="w-4 h-4 mr-2 text-[#39BBEF]" />
                          Reply via Email
                        </a>

                        {/* Toggle Status Button */}
                        <button
                          onClick={() => toggleStatus(inquiry.id)}
                          className={`text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-sm ${inquiry.status === 'Served' ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-[#1d3278] text-white hover:bg-blue-900 border border-[#1d3278]'}`}
                        >
                          {inquiry.status === 'Served' ? 'Mark as Pending' : 'Mark as Served'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default EmployeesCorner;
