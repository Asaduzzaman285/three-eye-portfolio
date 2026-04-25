import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Briefcase, MapPin, DollarSign, Clock, ChevronRight, CheckCircle2, Users, Globe, Plus } from 'lucide-react';

const Career = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    parents_name: '',
    present_address: '',
    permanent_address: '',
    experience: '',
    position: '',
    current_salary: '',
    expected_salary: '',
    resume_path: '',
    image_path: '',
    education: [{ degree: '', institute: '', year: '', result: '' }],
    social_links: [{ platform: '', url: '' }]
  });

  const API_BASE = import.meta.env.VITE_APP_API_BASE_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/v1/public/portfolio/jobs`);
      if (res.data?.success && res.data.data) {
        setJobs(res.data.data.filter(j => j.is_active));
      }
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const upData = new FormData();
      upData.append('file', file);
      const path = type === 'resume' ? 'portfolio/careers/resumes/' : 'portfolio/careers/images/';
      upData.append('file_path', path);
      upData.append('file_name', `${type}_${Date.now()}`);

      const res = await axios.post(`${API_BASE}/api/v1/general/file/file-upload`, upData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (res.data?.status === 'success' || res.data?.code === 200) {
        const field = type === 'resume' ? 'resume_path' : 'image_path';
        let filePath = res.data.data.file_path;
        
        // Ensure the path starts with exactly one slash
        if (!filePath.startsWith('/')) {
          filePath = '/' + filePath;
        }
        
        setFormData(prev => ({ ...prev, [field]: filePath }));
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { degree: '', institute: '', year: '', result: '' }]
    });
  };

  const removeEducation = (index) => {
    const newEdu = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEdu });
  };

  const updateEducation = (index, field, value) => {
    const newEdu = [...formData.education];
    newEdu[index][field] = value;
    setFormData({ ...formData, education: newEdu });
  };

  const addSocial = () => {
    setFormData({
      ...formData,
      social_links: [...formData.social_links, { platform: '', url: '' }]
    });
  };

  const removeSocial = (index) => {
    const newSocial = formData.social_links.filter((_, i) => i !== index);
    setFormData({ ...formData, social_links: newSocial });
  };

  const updateSocial = (index, field, value) => {
    const newSocial = [...formData.social_links];
    newSocial[index][field] = value;
    setFormData({ ...formData, social_links: newSocial });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        job_id: selectedJob?.id,
        position: formData.position || selectedJob?.title
      };

      const res = await axios.post(`${API_BASE}/api/v1/public/portfolio/apply`, payload);

      if (res.data?.status === 'success') {
        setIsSuccess(true);
        setShowForm(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setIsSuccess(false), 10000);
      }
    } catch (error) {
      console.error("Application failed:", error);
      alert("Failed to submit application. Please check all fields.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
    setIsSuccess(false);
    setFormData({
      full_name: '',
      email: '',
      parents_name: '',
      present_address: '',
      permanent_address: '',
      experience: '',
      position: job.title,
      current_salary: '',
      expected_salary: '',
      resume_path: '',
      image_path: '',
      education: [{ degree: '', institute: '', year: '', result: '' }],
      social_links: [{ platform: '', url: '' }]
    });
    setTimeout(() => {
        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-white min-h-screen font-poppins">
      <Header />

      {/* Success Notification */}
      {isSuccess && (
        <div className="fixed top-24 right-6 z-50 animate-in fade-in slide-in-from-right-10">
          <div className="bg-green-600 text-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-md">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold">Application Received!</h4>
              <p className="text-sm text-green-50">Thank you, {formData.full_name}. We have received your application for {selectedJob?.title}.</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#1d3278] to-[#2D499A] text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-400/20 rounded-full border border-blue-400/30">
            Careers at Three Eye
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Build the Future <br/><span className="text-blue-400">With Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100/80 mb-12 leading-relaxed">
            We are looking for passionate, driven individuals to help us redefine excellence. Join our mission today.
          </p>
          <button
            onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#1d3278] font-bold py-4 px-10 rounded-full shadow-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            View Openings
          </button>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d3278] mb-4">Open Positions</h2>
              <p className="text-gray-600">Find your next challenge and grow your career with us.</p>
            </div>
            <div className="text-sm font-medium text-gray-500">
                Showing <span className="text-blue-600 font-bold">{jobs.length}</span> active openings
            </div>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="h-40 bg-white rounded-2xl animate-pulse"></div>
              ))}
            </div>
          ) : jobs.length === 0 ? (
            <div className="bg-white rounded-3xl p-20 text-center border border-dashed border-gray-300">
              <Briefcase className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No active openings right now</h3>
              <p className="text-gray-500">Follow us for future updates or send your CV to careers@threeeyebd.com</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {jobs.map((job) => (
                <div 
                  key={job.id} 
                  className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-8"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-md">
                            Full-Time
                        </span>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center text-gray-500 text-xs font-medium gap-1">
                            <MapPin className="w-3.5 h-3.5" /> Dhaka, BD
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1d3278] group-hover:text-blue-600 transition-colors mb-4">
                        {job.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed max-w-2xl">
                        {job.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="w-full sm:w-auto bg-[#1d3278] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Form Section */}
      {showForm && (
        <section id="application-form" className="py-24 px-6 bg-white animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gray-50 border border-gray-100 shadow-3xl rounded-[40px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
              
              <div className="text-center mb-12 relative z-10">
                <h2 className="text-3xl font-bold text-[#1d3278] mb-4">Complete Application</h2>
                <p className="text-gray-600">
                    Applying for: <span className="text-blue-600 font-bold">{selectedJob?.title}</span>
                </p>
              </div>

              <form className="space-y-12 relative z-10" onSubmit={handleSubmit}>
                
                {/* 1. Personal Information */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#1d3278] mb-8 border-b pb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" /> Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2 flex flex-col items-center mb-6">
                        <label className="block text-sm font-bold text-[#1d3278] mb-3 text-center w-full">Applicant Photo</label>
                        <div className={`relative w-32 h-32 rounded-2xl border-2 border-dashed ${formData.image_path ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-gray-50'} flex items-center justify-center overflow-hidden transition-all group`}>
                          {uploading ? (
                            <div className="flex flex-col items-center">
                              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                              <span className="text-[10px] text-blue-500 font-bold uppercase">Uploading...</span>
                            </div>
                          ) : formData.image_path ? (
                            <img src={`${API_BASE}${formData.image_path}`} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <Users className="w-10 h-10 text-gray-300" />
                          )}
                          <input 
                            type="file" 
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                            onChange={(e) => handleFileChange(e, 'image')}
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <span className="text-[10px] text-white font-bold uppercase tracking-wider">Change Photo</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                          <label className="block text-sm font-bold text-[#1d3278] mb-2">Full Name</label>
                          <input 
                              type="text" required 
                              className="w-full bg-gray-50 border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl p-3.5 transition-all outline-none" 
                              value={formData.full_name}
                              onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-[#1d3278] mb-2">Email Address</label>
                          <input 
                              type="email" required 
                              className="w-full bg-gray-50 border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl p-3.5 transition-all outline-none" 
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-[#1d3278] mb-2">Parents' Name</label>
                          <input 
                              type="text" required 
                              className="w-full bg-gray-50 border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl p-3.5 transition-all outline-none" 
                              value={formData.parents_name}
                              onChange={(e) => setFormData({...formData, parents_name: e.target.value})}
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-[#1d3278] mb-2">Applying Position</label>
                          <input 
                              type="text" required 
                              className="w-full bg-gray-50 border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl p-3.5 transition-all outline-none" 
                              value={formData.position}
                              onChange={(e) => setFormData({...formData, position: e.target.value})}
                          />
                      </div>
                  </div>
                </div>

                {/* 2. Addresses */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#1d3278] mb-8 border-b pb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" /> Address Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm font-bold text-[#1d3278] mb-2">Present Address</label>
                        <textarea 
                            rows={3} required
                            className="w-full bg-gray-50 border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl p-3.5 transition-all outline-none" 
                            value={formData.present_address}
                            onChange={(e) => setFormData({...formData, present_address: e.target.value})}
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#1d3278] mb-2">Permanent Address</label>
                        <textarea 
                            rows={3} required
                            className="w-full bg-gray-50 border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl p-3.5 transition-all outline-none" 
                            value={formData.permanent_address}
                            onChange={(e) => setFormData({...formData, permanent_address: e.target.value})}
                        ></textarea>
                    </div>
                  </div>
                </div>

                {/* 3. Education */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-8 border-b pb-4">
                    <h3 className="text-lg font-bold text-[#1d3278] flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" /> Education History
                    </h3>
                    <button 
                      type="button" onClick={addEducation}
                      className="bg-blue-50 text-blue-600 font-bold py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-100 transition-all text-sm"
                    >
                      <Plus className="w-4 h-4" /> Add Education
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {formData.education.map((edu, idx) => (
                      <div key={idx} className="p-6 bg-gray-50 rounded-2xl relative">
                        {formData.education.length > 1 && (
                          <button 
                            type="button" onClick={() => removeEducation(idx)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                          >
                            ×
                          </button>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Degree (e.g. SSC/BSc)</label>
                            <input 
                              type="text" className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg p-2 text-sm" 
                              value={edu.degree} onChange={(e) => updateEducation(idx, 'degree', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Institute</label>
                            <input 
                              type="text" className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg p-2 text-sm" 
                              value={edu.institute} onChange={(e) => updateEducation(idx, 'institute', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Year</label>
                            <input 
                              type="text" className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg p-2 text-sm" 
                              value={edu.year} onChange={(e) => updateEducation(idx, 'year', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Result/GPA</label>
                            <input 
                              type="text" className="w-full bg-white border-0 ring-1 ring-gray-200 rounded-lg p-2 text-sm" 
                              value={edu.result} onChange={(e) => updateEducation(idx, 'result', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Experience & Salary */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#1d3278] mb-8 border-b pb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-500" /> Experience & Salary
                  </h3>
                  <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-[#1d3278] mb-2">Professional Experience</label>
                        <textarea 
                            rows={4}
                            className="w-full bg-gray-50 border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl p-3.5 transition-all outline-none" 
                            placeholder="Describe your work history..."
                            value={formData.experience}
                            onChange={(e) => setFormData({...formData, experience: e.target.value})}
                        ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-sm font-bold text-[#1d3278] mb-2">Current Salary (Monthly)</label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">৳</span>
                            <input 
                                type="number" 
                                className="w-full bg-gray-50 border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl p-3.5 pl-8 transition-all outline-none" 
                                value={formData.current_salary}
                                onChange={(e) => setFormData({...formData, current_salary: e.target.value})}
                            />
                          </div>
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-[#1d3278] mb-2">Expected Salary (Monthly)</label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">৳</span>
                            <input 
                                type="number" 
                                className="w-full bg-gray-50 border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl p-3.5 pl-8 transition-all outline-none" 
                                value={formData.expected_salary}
                                onChange={(e) => setFormData({...formData, expected_salary: e.target.value})}
                            />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Social Links */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                   <div className="flex justify-between items-center mb-8 border-b pb-4">
                    <h3 className="text-lg font-bold text-[#1d3278] flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-500" /> Social Presence
                    </h3>
                    <button 
                      type="button" onClick={addSocial}
                      className="bg-blue-50 text-blue-600 font-bold py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-100 transition-all text-sm"
                    >
                      <Plus className="w-4 h-4" /> Add Link
                    </button>
                  </div>
                  <div className="space-y-4">
                    {formData.social_links.map((social, idx) => (
                      <div key={idx} className="flex gap-4">
                        <input 
                          type="text" placeholder="Platform (e.g. LinkedIn)"
                          className="flex-1 bg-gray-50 border-0 ring-1 ring-gray-200 rounded-lg p-2.5 text-sm" 
                          value={social.platform} onChange={(e) => updateSocial(idx, 'platform', e.target.value)}
                        />
                        <input 
                          type="url" placeholder="Profile URL"
                          className="flex-[2] bg-gray-50 border-0 ring-1 ring-gray-200 rounded-lg p-2.5 text-sm" 
                          value={social.url} onChange={(e) => updateSocial(idx, 'url', e.target.value)}
                        />
                        {formData.social_links.length > 1 && (
                          <button 
                            type="button" onClick={() => removeSocial(idx)}
                            className="bg-red-50 text-red-500 px-3 rounded-lg hover:bg-red-100"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Resume Upload */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                  <label className="block text-sm font-bold text-[#1d3278] mb-6">Final Step: Upload Your Resume</label>
                  <div className={`group relative w-full h-40 border-2 border-dashed ${formData.resume_path ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-white'} hover:border-blue-400 rounded-[30px] transition-all flex flex-col items-center justify-center cursor-pointer overflow-hidden`}>
                    <input
                        type="file" required
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={(e) => handleFileChange(e, 'resume')}
                    />
                    {uploading ? (
                        <span className="text-sm font-bold text-blue-500 animate-pulse">Processing File...</span>
                    ) : formData.resume_path ? (
                        <div className="flex flex-col items-center text-green-600">
                             <CheckCircle2 className="w-12 h-12 mb-2" />
                             <span className="text-xs font-bold uppercase tracking-widest">Resume Attached Successfully</span>
                        </div>
                    ) : (
                        <>
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                              <Briefcase className="w-8 h-8 text-blue-600 group-hover:text-white" />
                            </div>
                            <span className="text-xs font-bold text-gray-400 group-hover:text-blue-400 transition-colors uppercase tracking-widest">Drop your PDF here or click to browse</span>
                        </>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-8 flex flex-col sm:flex-row gap-6">
                    <button
                        type="submit"
                        disabled={isSubmitting || uploading || !formData.resume_path}
                        className={`flex-[2] text-white font-bold py-5 rounded-[20px] transition-all shadow-xl active:scale-95 ${isSubmitting || uploading || !formData.resume_path ? 'bg-gray-400 shadow-none cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'}`}
                    >
                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="flex-1 bg-white text-gray-500 font-bold py-5 rounded-[20px] border border-gray-200 hover:bg-gray-50 transition-all"
                    >
                        Cancel
                    </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Perks Section */}
      <section className="py-24 px-6 bg-[#f8fbff]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3278] mb-4">Why Work With Us?</h2>
            <p className="text-gray-600">We care about our team as much as we care about our business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Health Benefits', description: 'Comprehensive medical coverage for you and your family.', icon: CheckCircle2 },
              { title: 'Flexible Hours', description: 'A culture that respects your time and life outside work.', icon: CheckCircle2 },
              { title: 'Rapid Growth', description: 'Opportunities for fast-track career advancement.', icon: CheckCircle2 },
              { title: 'Global Exposure', description: 'Work with international partners and stakeholders.', icon: CheckCircle2 },
              { title: 'Modern Workspace', description: 'Collaborative environments equipped with the latest tools.', icon: CheckCircle2 },
              { title: 'Competitive Pay', description: 'Rewarding your talent with top-tier compensation.', icon: CheckCircle2 },
            ].map((perk, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <perk.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3278] mb-3">{perk.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{perk.description}</p>
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