import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import SkeletonLoader from '../components/SkeletonLoader';

const API_BASE = import.meta.env.VITE_APP_API_BASE_URL || 'http://127.0.0.1:8000';

const Products = () => {
    const location = useLocation();
    
    // Data States
    const [categories, setCategories] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Selected Product Modal
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
        // Handle hash scrolling if present
        if (location.hash) {
            setTimeout(() => {
                const id = location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const y = element.getBoundingClientRect().top + window.scrollY - 120;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 500); // slight delay to allow rendering
        }
    }, [location]);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Fetch categories and products simultaneously
            const [catRes, prodRes] = await Promise.all([
                axios.get(`${API_BASE}/api/v1/public/portfolio/product-categories`),
                axios.get(`${API_BASE}/api/v1/public/portfolio/products`)
            ]);

            const loadedCollectiveProducts = catRes.data?.data || [];
            const loadedSubproducts = prodRes.data?.data || [];

            // We need to attach subproducts to their collective products for the layout
            const formattedCollectiveProducts = loadedCollectiveProducts.map((cat: any) => ({
                id: cat.id.toString(), // or sanitize name
                name: cat.name,
                email: cat.email,
                intro: cat.intro_text || '',
                image_path: cat.image_path,
                items: loadedSubproducts.filter((p: any) => p.product_category_id === cat.id)
            }));

            setCategories(formattedCollectiveProducts);
            setProducts(loadedSubproducts);

            // Handle hash scroll after data is loaded
            setTimeout(() => {
                const hash = window.location.hash;
                if (hash) {
                    const id = hash.replace('#', '');
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 500);
        } catch (error) {
            console.error('Failed to load product data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow pt-28 pb-12">

                <div className="text-center mb-10 pt-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1d3278] uppercase tracking-tight">
                        Our Products
                    </h1>
                </div>

                {/* Product Categories Grid */}
                <section className="container mx-auto px-6 max-w-6xl space-y-24 mb-16">
                    {loading ? (
                        <div className="text-center py-20">
                            <i className="fas fa-spinner fa-spin fa-3x text-gray-300"></i>
                            <p className="mt-4 text-gray-500 font-medium">Loading Portfolio...</p>
                        </div>
                    ) : categories.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl text-gray-500">Products are currently being updated. Check back soon!</h3>
                        </div>
                    ) : (
                        categories.map((cat, index) => {
                            const isEven = index % 2 === 0;
                            // Prefer category image. If not, fallback to first product image.
                            const defaultImage = cat.image_path 
                                ? `${API_BASE}${cat.image_path}` 
                                : cat.items[0]?.image_path ? `${API_BASE}${cat.items[0].image_path}` : '/assets/img/basic-chemical.jpeg';

                            return (
                                <div key={cat.id} id={`category-${cat.id}`} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

                                    {/* Single Image Section */}
                                    <div className={`h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                                        <img src={defaultImage} alt={`${cat.name} Category`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>

                                    {/* Text & Product Selection Buttons */}
                                    <div className={`space-y-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                                        <h2 className="text-3xl font-bold text-[#1d3278] pb-1 border-b-2 border-gray-100 inline-block">{cat.name}</h2>
                                        <p className="text-gray-600 text-lg leading-relaxed font-medium">{cat.intro}</p>

                                        {cat.items.length === 0 ? (
                                            <p className="text-sm text-gray-400 fst-italic">No specific subproducts listed yet under this product.</p>
                                        ) : (
                                            <div className="flex flex-wrap gap-3 pt-2">
                                                {cat.items.map((prod: any) => (
                                                    <button
                                                        key={prod.id}
                                                        onClick={() => setSelectedProduct({ ...prod, categoryName: cat.name, categoryEmail: cat.email })}
                                                        className="flex items-center text-gray-800 bg-white hover:bg-blue-50 hover:text-[#1d3278] px-4 py-2.5 rounded-xl shadow-sm border border-gray-200 hover:border-[#39BBEF] transition-all font-semibold text-sm group"
                                                    >
                                                        <span className="w-2 h-2 rounded-full bg-[#39BBEF] mr-2.5 group-hover:scale-150 transition-transform"></span>
                                                        {prod.title}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </section>

                {/* Clean Portfolio Slogan relocated below products */}
                <section className="py-20 bg-white border-t border-gray-200">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <div className="inline-block mb-4">
                            <span className="bg-[#e8f4fc] text-[#1d3278] text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                                Quality Materials. Trusted Supply.
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            A Diverse Portfolio of Industrial Materials
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light mb-8">
                            Three Eye delivers a strategically sourced range of raw materials, stone products, and chemicals—ensuring consistency, reliability, and performance across global supply chains.
                        </p>
                        <div className="w-24 h-1 bg-[#39BBEF] mx-auto rounded-full"></div>
                    </div>
                </section>

            </main>

            <Footer />

            {/* Product Details Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
                    <div className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative shadow-blue-900/20">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 bg-white hover:bg-red-50 text-gray-800 hover:text-red-500 p-2 rounded-full transition-colors z-10 shadow"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="grid md:grid-cols-2">
                            <div className="h-64 md:h-[450px] relative">
                                <img 
                                    src={selectedProduct.image_path ? `${API_BASE}${selectedProduct.image_path}` : '/assets/img/basic-chemical.jpeg'} 
                                    alt={selectedProduct.title} 
                                    className="w-full h-full object-cover" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center max-h-[60vh] overflow-y-auto">
                                <p className="text-[#39BBEF] font-bold text-sm tracking-widest uppercase mb-3">{selectedProduct.categoryName}</p>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-[#1d3278] mb-6">{selectedProduct.title}</h3>
                                
                                <div className="text-gray-600 leading-relaxed mb-8 text-sm whitespace-pre-wrap">
                                    {selectedProduct.description || 'Learn more about the technical specifications, industrial applications, and bulk supply details for this product. We ensure high-quality fulfillment globally tailored to your operational needs.'}
                                </div>
                                
                                <Link 
                                    to="/contact" 
                                    state={{ product: selectedProduct.title, categoryEmail: selectedProduct.categoryEmail }} 
                                    className="inline-flex items-center gap-2 bg-[#1d3278] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition-colors shadow self-start group mt-auto"
                                >
                                    Enquire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
