import React from 'react';
import { Pause, UserPlus, Lock } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">
            
          {/* News Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-[#B92025] font-bold text-xl md:text-2xl mb-4 border-b border-gray-100 pb-3 uppercase tracking-wider">
              Latest News
            </h3>
            <div className="flex-grow pt-4 min-h-[150px]">
              <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center border border-dashed border-gray-200">
                <p className="text-sm text-gray-400 italic">No news records found at the moment.</p>
              </div>
            </div>
            <div className="flex justify-end items-center gap-4 border-t border-gray-100 pt-6 mt-6">
              <button className="flex items-center text-sm text-gray-500 hover:text-gray-800 transition gap-1.5 group">
                Pause <Pause className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </button>
              <button className="text-blue-900 text-sm font-bold border-2 border-blue-900 px-6 py-1.5 hover:bg-blue-900 hover:text-white transition-all rounded-lg">
                View All
              </button>
            </div>
          </div>

          {/* Tenders Column */}
          <div className="flex flex-col h-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-100 pb-3 mb-4 gap-4">
              <h3 className="text-[#B92025] font-bold text-xl md:text-2xl uppercase tracking-wider">
                Tenders
              </h3>
              <div className="flex gap-4 text-xs font-bold">
                <button className="flex items-center gap-1.5 text-blue-900 hover:text-blue-700 transition">
                  <UserPlus className="w-4 h-4" /> Registration
                </button>
                <span className="text-gray-200">|</span>
                <button className="flex items-center gap-1.5 text-[#B92025] hover:text-[#9e1a1e] transition">
                  <Lock className="w-4 h-4" /> Vendor Login
                </button>
              </div>
            </div>
            
            <div className="flex-grow pt-4">
              <div className="bg-blue-50/30 rounded-xl p-8 border border-blue-100 mb-6">
                <p className="text-sm text-gray-600 font-medium">
                  There are no active tenders available for bidding at this time.
                </p>
              </div>
              
              <ul className="text-xs space-y-4 leading-relaxed">
                <li className="flex items-start gap-3 text-red-700 bg-red-50/50 p-3 rounded-lg border border-red-100">
                  <div className="w-1.5 h-1.5 bg-red-700 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Proprietary tenders are exclusively accessible to vendors approved and registered in the Three Eye network.</span>
                </li>
                <li className="flex items-start gap-3 text-blue-700 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                  <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Open tenders are visible to all users; however, submission requires a verified vendor account.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-end items-center gap-4 border-t border-gray-100 pt-6 mt-6">
              <button className="flex items-center text-sm text-gray-500 hover:text-gray-800 transition gap-1.5 group">
                Pause <Pause className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </button>
              <button className="text-blue-900 text-sm font-bold border-2 border-blue-900 px-6 py-1.5 hover:bg-blue-900 hover:text-white transition-all rounded-lg">
                View All
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;
