import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';

const Career = () => {
  const [showForm, setShowForm] = useState(false);

  const handleJoinUsClick = () => {
    setShowForm(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <section className="py-16 px-6 bg-[#E6F5F4]">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#2D499A]">Let's Join Our Team!</h1>
          <p className="text-center text-lg text-[#444444] mb-12">
            Submit your resume and portfolio to explore exciting career opportunities. We’re looking for talented individuals to join our team.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleJoinUsClick}
              className="bg-[#2D499A] text-white font-bold py-3 px-6 rounded-md hover:bg-[#1E377A] transition"
            >
              Join Us
            </button>
          </div>
        </div>
      </section>

      {showForm && (
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-[#2D499A]">Submit Your Information</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="resume" className="block text-sm font-bold text-[#2D499A]">Upload Resume</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-bold text-[#2D499A]">Portfolio Link</label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    placeholder="https://yourportfolio.com"
                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-bold text-[#2D499A]">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={4}
                    placeholder="Write your cover letter here..."
                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2D499A] text-white font-bold py-2 rounded-md hover:bg-[#1E377A] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-6 bg-[#E6F5F4]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2D499A]">Employee Perks & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Comprehensive Health Benefits', description: 'Custom healthcare plans for employees.' },
              { title: 'Flexible Work Hours', description: 'Work-life balance tailored to your needs.' },
              { title: 'Career Growth Opportunities', description: 'Professional development and training.' },
              { title: 'Paid Time Off', description: 'Generous vacation and sick leave policies.' },
              { title: 'Team Building Activities', description: 'Fun and engaging team events.' },
              { title: 'Competitive Salaries', description: 'Industry-leading compensation packages.' },
            ].map((perk, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2D499A]">{perk.title}</h3>
                <p className="text-sm text-[#444444] mt-2">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2D499A]">Open Positions</h2>
          <div className="space-y-6">
            {[
              { title: 'Human Resource Executive / Lead', location: 'Dhaka, Bangladesh', salary: 'Negotiable' },
            ].map((job, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2D499A]">{job.title}</h3>
                <p className="text-sm text-[#444444]">Location: {job.location}</p>
                <p className="text-sm text-[#444444]">Salary: {job.salary}</p>
                <button
                  className="mt-4 bg-[#2D499A] text-white font-bold py-2 px-4 rounded-md hover:bg-[#1E377A] transition"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Career;