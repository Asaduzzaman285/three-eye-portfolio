import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

const productCategories = [
  {
    id: 'basic-chemicals',
    name: 'Basic Chemicals',
    intro: 'Core industrial chemicals ensuring efficiency and operational stability:',
    items: [
      'Caustic Soda (Lye & Flakes)',
      'Soda Ash (Dense & Light)',
      'Hydrochloric Acid (HCL)',
      'Sulphuric Acid',
      'Sodium Hypochlorite'
    ],
    images: [
      '/assets/img/basic-chemical.jpeg'
    ]
  },
  {
    id: 'solvents-specialty',
    name: 'Solvents & Specialty Chemicals',
    intro: 'High-performance solutions for specialized applications:',
    items: [
      'Methylene Chloride',
      'Chloroform',
      'Ethanol',
      'Hexane',
      'Phenol (95% & 99%)',
      'Nonyl Phenol',
      'Acrylonitrile (ACN)',
      'Acrylic Acid (AA)',
      'Glycerine'
    ],
    images: [
      '/assets/img/solvent.jpeg'
    ]
  },
  {
    id: 'water-treatment',
    name: 'Water Treatment Chemicals',
    intro: 'Reliable solutions for maintaining and improving water quality:',
    items: [
      'Hydrogen Peroxide',
      'Poly Aluminium Chloride (PAC)',
      'Ferric Chloride',
      'Bleaching Powder'
    ],
    images: [
      '/assets/img/water-treatment.jpeg'
    ]
  },
  {
    id: 'hydrocarbon-derivatives',
    name: 'Hydrocarbon Derivatives',
    intro: 'Specialized hydrocarbon compounds for industrial use:',
    items: [
      '2-Methylpentane',
      '3-Methylpentane',
      '2,3-Dimethylbutane',
      '2,2-Dimethylbutane'
    ],
    images: [
      '/assets/img/hydrocarbon.jpeg'
    ]
  },
  {
    id: 'salts-compounds',
    name: 'Salts & Compounds',
    intro: 'Essential compounds supporting diverse industrial processes:',
    items: [
      'Calcium Chloride',
      'Sodium Sulfate (Anhydrous)',
      'Magnesium Anhydrite',
      'Potassium Chloride'
    ],
    images: [
      '/assets/img/salt-compound.jpeg'
    ]
  },
  {
    id: 'minerals-raw-materials',
    name: 'Minerals & Raw Materials',
    intro: 'High-volume materials supporting industrial production:',
    items: [
      'Limestone', 'Clinker', 'Gabbro', 'Gypsum', 'Slag', 'Barite',
      'Zirconium', 'Soda Feldspar', 'Fly Ash', 'Pond Ash', 'Ball Clay', 'Kaolin'
    ],
    images: [
      '/assets/img/mineral.jpeg'
    ]
  },
  {
    id: 'pigments-carbon',
    name: 'Pigments & Carbon Products',
    intro: 'Materials for coloring and performance enhancement:',
    items: [
      'Pigment Green',
      'Pigment Red',
      'Carbon Black'
    ],
    images: [
      '/assets/img/pigment-carbon.jpeg'
    ]
  },
  {
    id: 'petroleum-products',
    name: 'Petroleum Products',
    intro: 'Reliable supply of petroleum-based materials:',
    items: [
      'Bitumen (All Grades)'
    ],
    images: [
      '/assets/img/petrolium.jpeg'
    ]
  },
  {
    id: 'food-grains',
    name: 'Food & Grains',
    intro: 'Bulk supply of essential agricultural commodities:',
    items: [
      'Wheat',
      'Maize (Corn)',
      'Rice',
      'Soybeans',
      'Lentils & others'
    ],
    images: [
      '/assets/img/grain.jpeg'
    ]
  }
];

const Products = () => {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<{name: string, category: string, image: string} | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

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
          
          {productCategories.map((cat, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={cat.id} id={cat.id} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                
                {/* Single Image Section */}
                <div className={`h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <img src={cat.images[0]} alt={`${cat.name} Category`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Text & Product Selection Buttons */}
                <div className={`space-y-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className="text-3xl font-bold text-[#1d3278] pb-1 border-b-2 border-gray-100 inline-block">{cat.name}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">{cat.intro}</p>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    {cat.items.map((item, itemIdx) => (
                      <button 
                        key={itemIdx}
                        onClick={() => setSelectedProduct({name: item, category: cat.name, image: cat.images[itemIdx % cat.images.length]})}
                        className="flex items-center text-gray-800 bg-white hover:bg-blue-50 hover:text-[#1d3278] px-4 py-2.5 rounded-xl shadow-sm border border-gray-200 hover:border-[#39BBEF] transition-all font-semibold text-sm group"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#39BBEF] mr-2.5 group-hover:scale-150 transition-transform"></span>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

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
              <div className="h-64 md:h-auto relative">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-[#39BBEF] font-bold text-sm tracking-widest uppercase mb-3">{selectedProduct.category}</p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#1d3278] mb-6">{selectedProduct.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Learn more about the technical specifications, industrial applications, and bulk supply details for {selectedProduct.name}. We ensure high-quality fulfillment globally tailored to your operational needs.
                </p>
                <Link to="/contact" state={{ product: selectedProduct.name }} className="inline-flex items-center gap-2 bg-[#1d3278] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition-colors shadow self-start group">
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
