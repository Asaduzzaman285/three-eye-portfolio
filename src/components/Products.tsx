// import React, { useState } from 'react';
// import { ArrowRight } from 'lucide-react';

// const Products: React.FC = () => {
//   const [currentProduct, setCurrentProduct] = useState('mobile-masala');

//   const products = [
//     {
//       id: 'mobile-masala',
//       title: 'Mobile Masala',
//       description:
//         'Mobile Masala WAP Portal. On Mobile Masala you can find WAP portals where you can downloads wallpaper, games, music, video, etc. Also there is a robust App on the same name and using this app you can easily find your favorite songs by title and set as your ring back tone.',
//       image: 'https://wintelbd.com/assets/img/products/mobile_masala.jpg',
//       link: 'https://wintelbd.com/digital-service/mobile-masala'
//     },
//     {
//       id: 'selfie-star',
//       title: 'Selfie Star',
//       description:
//         'Selfie star is a unique upbeat mobile application that aims to bring a new approach to #Selfie trend popular on social networking sites such as Facebook, Instagram, Twitter and more.',
//       image: 'https://wintelbd.com/assets/img/products/selfie_star.jpg',
//       link: 'https://wintelbd.com/digital-service/selfie-star'
//     },
//     {
//       id: 'yoga-club',
//       title: 'Yoga Club',
//       description:
//         'Yoga Club is an online web portal which enables users to subscribe to exclusive yoga and meditation instructions from certified Yogis, from the comfort of their home.',
//       image: 'https://wintelbd.com/assets/img/products/yoga_club.jpg',
//       link: 'https://wintelbd.com/digital-service/yoga-club'
//     }
//   ];

//   const current = products.find((p) => p.id === currentProduct);

//   return (
//     <section
//       id="products"
//       className="py-20 bg-white"
//       style={{
//         backgroundImage: `url('https://wintelbd.com/assets/img/company-bg.png')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}
//     >
//       <div className="container mx-auto px-4">
//       <div className="mb-8 md:mb-12 font-poppins">
//     <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#333333] mb-4 md:mb-6">
//         Our Products
//     </h2>
//     <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#333333] leading-relaxed">
//         <span className="text-[#2eb7f3] font-bold">We Are Leading</span>{' '}
//         VAS Company With Various{' '}
//         <span className="text-[#2eb7f3] font-bold">Kinds Of Products</span>
//     </h2>
// </div>



//         {/* Tabs */}
//         <div className="flex justify-center md:justify-start mb-4 border-b border-gray-300">
//           {products.map((product) => (
//             <button
//               key={product.id}
//               onClick={() => setCurrentProduct(product.id)}
//               className={`text-sm font-semibold uppercase px-6 py-3 transition-all duration-300 focus:outline-none ${
//                 currentProduct === product.id
//                   ? 'text-white bg-blue-600'
//                   : 'text-gray-800 hover:text-blue-600'
//               }`}
//               style={{
//                 borderBottom:
//                   currentProduct === product.id ? '3px solid #0d6efd' : '3px solid transparent'
//               }}
//             >
//               {product.title.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         {current && (
//           <div
//             key={current.id}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fadeInUp"
//             style={{ animation: 'fadeInUp 0.6s ease forwards' }}
//           >
//             {/* Text */}
//             <div className="text-left">
//               <h3 className="text-2xl font-bold mb-4" style={{ color: '#414141' }}>
//                 {current.title}
//               </h3>
//               <p
//                 style={{
//                   fontSize: '15px',
//                   color: '#777777',
//                   marginBottom: '30px',
//                   lineHeight: '1.7'
//                 }}
//               >
//                 {current.description}
//               </p>
//               <a
//                 href={current.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-5 py-2 bg-blue-500 text-white  hover:bg-blue-600 transition text-sm"
//                 style={{ minHeight: '36px' }}
//               >
//                 Read More <ArrowRight className="ml-2 w-4 h-4" />
//               </a>
//             </div>

//             {/* Image */}
//             <div className="text-center">
//               <img
//                 src={current.image}
//                 alt={current.title}
//                 className="w-full max-w-md mx-auto"
//               />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Animation */}
//       <style>
//         {`
//           @keyframes fadeInUp {
//             0% {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           .animate-fadeInUp {
//             animation: fadeInUp 0.6s ease forwards !important;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Products;
