import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const Products: React.FC = () => {
    const navigate = useNavigate();
    const [collectiveProducts, setCollectiveProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: false,
        skipSnaps: false,
        dragFree: true
    });

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    const API_BASE = import.meta.env.VITE_APP_API_BASE_URL || 'http://127.0.0.1:8000';

    useEffect(() => {
        const fetchCollectiveProducts = async () => {
            try {
                const res = await axios.get(`${API_BASE}/api/v1/public/portfolio/product-categories`);
                if (res.data?.success && res.data.data) {
                    setCollectiveProducts(res.data.data);
                }
            } catch (error) {
                console.error("Failed to load collective products for home:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCollectiveProducts();
    }, []);

    const handleCardClick = (id: number) => {
        navigate(`/products#category-${id}`);
    };

    if (loading) return null;
    if (collectiveProducts.length === 0) return null;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[#B92025] text-2xl md:text-3xl font-bold mb-3 uppercase tracking-wider">
                        Our Products
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <p className="text-lg font-semibold text-gray-800 mb-2">Quality Materials, Trusted Delivery.</p>
                        <p className="text-sm md:text-base text-gray-600">Explore our comprehensive range of high-quality industrial materials and chemicals.</p>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative group/carousel">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-6">
                            {collectiveProducts.map((product) => (
                                <div 
                                    key={product.id}
                                    className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] min-w-0 pl-6"
                                >
                                    <div 
                                        onClick={() => handleCardClick(product.id)}
                                        className="relative group rounded-3xl shadow-2xl bg-[#1d3278] cursor-pointer overflow-hidden transition-all duration-700 hover:shadow-blue-900/30 aspect-square flex flex-col"
                                    >
                                        {/* Full Image Background */}
                                        <div className="absolute inset-0 w-full h-full">
                                            {product.image_path ? (
                                                <img 
                                                    src={`${API_BASE}${product.image_path}`} 
                                                    alt={product.name} 
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                                                    <Package className="w-12 h-12 text-blue-200" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Glassmorphism Bar */}
                                        <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                                            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 transform transition-all duration-500 group-hover:bg-[#1d3278]/60 group-hover:border-[#39BBEF]/30">
                                                <h3 className="text-white font-bold text-sm md:text-base tracking-tight leading-tight mb-1">
                                                    {product.name}
                                                </h3>
                                                <div className="flex items-center justify-between overflow-hidden h-0 group-hover:h-5 transition-all duration-500">
                                                    <span className="text-[10px] text-[#39BBEF] font-black uppercase tracking-widest">
                                                        Explore More
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 text-[#39BBEF]" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Overlay Shade */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    {collectiveProducts.length > 5 && (
                        <>
                            <button 
                                onClick={scrollPrev}
                                className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-800 z-40 hover:bg-gray-50 transition-all opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button 
                                onClick={scrollNext}
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-800 z-40 hover:bg-gray-50 transition-all opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                .shine-figure {
                    position: relative;
                    overflow: hidden;
                }
                .shine-figure::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -75%;
                    z-index: 15;
                    display: block;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(
                        to right,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0.4) 50%,
                        rgba(255, 255, 255, 0) 100%
                    );
                    transform: skewX(-25deg);
                    pointer-events: none;
                }
                .shine-figure:hover::before {
                    animation: shine-sweep 0.75s ease-in-out;
                }
                @keyframes shine-sweep {
                    0%   { left: -75%; }
                    100% { left: 125%; }
                }
            `}} />
        </section>
    );
};

export default Products;
