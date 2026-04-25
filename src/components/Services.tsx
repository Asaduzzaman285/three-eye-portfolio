import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';

const Services: React.FC = () => {
    const navigate = useNavigate();
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const API_BASE = import.meta.env.VITE_APP_API_BASE_URL || 'http://127.0.0.1:8000';

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axios.get(`${API_BASE}/api/v1/public/portfolio/services`);
                if (res.data?.success && res.data.data) {
                    setServices(res.data.data);
                }
            } catch (error) {
                console.error("Failed to load services for home:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    if (loading) {
        return (
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center text-gray-400">Loading Services...</div>
            </section>
        );
    }

    if (services.length === 0) return null;

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="bg-[#e8f4fc] text-[#1d3278] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 inline-block">
                        What We Do
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                        Our Strategic <span className="text-blue-600">Services</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => navigate('/services')}
                            className="group relative border border-gray-100 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white flex flex-col h-full overflow-hidden"
                        >
                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-blue-50 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                                    <Globe className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                                    {service.title}
                                </h3>
                                
                                <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-6 transition-colors duration-500 line-clamp-4">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-auto relative z-10 flex items-center text-blue-600 group-hover:text-white font-bold text-xs uppercase tracking-wider">
                                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
