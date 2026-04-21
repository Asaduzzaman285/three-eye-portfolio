import React, { useState } from 'react';
import { ZoomIn, ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  filter: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'App 1',
      description: 'Lorem ipsum, dolor sit',
      image: 'assets/img/masonry-portfolio/masonry-portfolio-1.jpg',
      category: 'App',
      filter: 'filter-app'
    },
    {
      id: 2,
      title: 'Product 1',
      description: 'Lorem ipsum, dolor sit',
      image: 'assets/img/masonry-portfolio/masonry-portfolio-2.jpg',
      category: 'Card',
      filter: 'filter-product'
    },
    {
      id: 3,
      title: 'Branding 1',
      description: 'Lorem ipsum, dolor sit',
      image: 'assets/img/masonry-portfolio/masonry-portfolio-3.jpg',
      category: 'Web',
      filter: 'filter-branding'
    },
    {
      id: 4,
      title: 'App 2',
      description: 'Lorem ipsum, dolor sit',
      image: 'assets/img/masonry-portfolio/masonry-portfolio-4.jpg',
      category: 'App',
      filter: 'filter-app'
    },
    {
      id: 5,
      title: 'Product 2',
      description: 'Lorem ipsum, dolor sit',
      image: 'assets/img/masonry-portfolio/masonry-portfolio-5.jpg',
      category: 'Card',
      filter: 'filter-product'
    },
    {
      id: 6,
      title: 'Branding 2',
      description: 'Lorem ipsum, dolor sit',
      image: 'assets/img/masonry-portfolio/masonry-portfolio-6.jpg',
      category: 'Web',
      filter: 'filter-branding'
    },
    {
      id: 7,
      title: 'App 3',
      description: 'Lorem ipsum, dolor sit',
      image: 'assets/img/masonry-portfolio/masonry-portfolio-7.jpg',
      category: 'App',
      filter: 'filter-app'
    },
    {
      id: 8,
      title: 'Product 3',
      description: 'Lorem ipsum, dolor sit',
      image: 'assets/img/masonry-portfolio/masonry-portfolio-8.jpg',
      category: 'Card',
      filter: 'filter-product'
    },
    {
      id: 9,
      title: 'Branding 3',
      description: 'Lorem ipsum, dolor sit',
      image: 'assets/img/masonry-portfolio/masonry-portfolio-9.jpg',
      category: 'Web',
      filter: 'filter-branding'
    }
  ];

  const filters = [
    { label: 'All', value: '*' },
    { label: 'App', value: 'filter-app' },
    { label: 'Card', value: 'filter-product' },
    { label: 'Web', value: 'filter-branding' }
  ];

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.filter === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-gray-600 text-lg">Necessitatibus eius consequatur</p>
        </div>

        {/* Portfolio Filters */}
        <div className="flex justify-center mb-12">
          <ul className="flex flex-wrap gap-2 bg-white rounded-lg p-2 shadow-md">
            {filters.map((filter) => (
              <li key={filter.value}>
                <button
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                    activeFilter === filter.value
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
         <div
         key={item.id}
         className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
       >
         {/* Portfolio Image */}
         <div className="relative overflow-hidden">
           <img
             src={item.image}
             alt={item.title}
             className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
           />
       
           {/* Gradient + Slide-Up Overlay */}
           <div
             className="absolute inset-0 flex flex-col justify-end"
             style={{
               background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
               opacity: "0",
               transition: "opacity 0.5s ease-in-out",
             }}
           >
             <div
               className="p-4"
               style={{
                 transform: "translateY(100%)",
                 transition: "transform 0.5s ease-in-out",
               }}
             >
               <h4
                 style={{
                   color: "#fff",
                   fontSize: "1.125rem",
                   fontWeight: 600,
                   marginBottom: "0.25rem",
                 }}
               >
                 {item.title}
               </h4>
               <p
                 style={{
                   color: "#fff",
                   fontSize: "0.875rem",
                   margin: 0,
                 }}
               >
                 {item.description}
               </p>
             </div>
           </div>
       
           {/* Hover-triggered overlay effect using script */}
           <script
             dangerouslySetInnerHTML={{
               __html: `
               document.addEventListener('DOMContentLoaded', function () {
                 document.querySelectorAll('.group').forEach(card => {
                   card.addEventListener('mouseenter', () => {
                     const overlay = card.querySelector('.absolute.inset-0');
                     const content = overlay?.querySelector('.p-4');
                     if (overlay) overlay.style.opacity = '1';
                     if (content) content.style.transform = 'translateY(0)';
                   });
                   card.addEventListener('mouseleave', () => {
                     const overlay = card.querySelector('.absolute.inset-0');
                     const content = overlay?.querySelector('.p-4');
                     if (overlay) overlay.style.opacity = '0';
                     if (content) content.style.transform = 'translateY(100%)';
                   });
                 });
               });
             `,
             }}
           />
       
           {/* Action Buttons */}
           <div
             className="absolute inset-0 flex items-center justify-center"
             style={{
               backgroundColor: "rgba(0, 0, 0, 0)",
               transition: "background-color 0.3s ease-in-out",
             }}
           >
             <div
               className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4"
               style={{
                 opacity: 0,
               }}
             >
               <a
                 href={item.image}
                 style={{
                   backgroundColor: "#fff",
                   color: "#333",
                   padding: "12px",
                   borderRadius: "9999px",
                   transition: "all 0.3s ease-in-out",
                 }}
               >
                 <ZoomIn className="w-5 h-5" />
               </a>
               <a
                 href="#"
                 style={{
                   backgroundColor: "#fff",
                   color: "#333",
                   padding: "12px",
                   borderRadius: "9999px",
                   transition: "all 0.3s ease-in-out",
                 }}
               >
                 <ExternalLink className="w-5 h-5" />
               </a>
             </div>
           </div>
         </div>
       
         {/* Category Badge */}
         <div className="p-4">
           <span
             style={{
               display: "inline-block",
               backgroundColor: "#DBEAFE", // bg-blue-100
               color: "#1E40AF", // text-blue-800
               fontSize: "0.75rem",
               padding: "2px 8px",
               borderRadius: "9999px",
             }}
           >
             {item.category}
           </span>
         </div>
       </div>
       
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No portfolio items found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;