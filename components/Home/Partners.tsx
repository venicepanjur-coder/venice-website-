import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Logo Components (Inline SVG for reliability) ---

const CopacoLogo = () => (
  <svg viewBox="0 0 240 80" className="h-10 md:h-12 w-auto transition-all duration-300" xmlns="http://www.w3.org/2000/svg">
    {/* Dot Pattern */}
    <g fill="#2e3192">
      <circle cx="10" cy="15" r="4" opacity="0.4"/>
      <circle cx="25" cy="10" r="5" opacity="0.6"/>
      <circle cx="40" cy="15" r="4" opacity="0.8"/>
      <circle cx="10" cy="35" r="5" opacity="0.6"/>
      <circle cx="25" cy="30" r="6"/>
      <circle cx="40" cy="35" r="5" opacity="0.8"/>
      <circle cx="10" cy="55" r="4" opacity="0.4"/>
      <circle cx="25" cy="50" r="5" opacity="0.6"/>
      <circle cx="40" cy="55" r="4" opacity="0.8"/>
    </g>
    {/* Text */}
    <text x="60" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="42" fill="#2e3192">copaco</text>
    <text x="62" y="65" fontFamily="Arial, sans-serif" fontSize="14" fill="#9ca3af" letterSpacing="1.5">screenweavers</text>
  </svg>
);

const SergeFerrariLogo = () => (
  <svg viewBox="0 0 300 60" className="h-8 md:h-10 w-auto transition-all duration-300" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="45" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="38" fill="#111" letterSpacing="-1">Serge Ferrari</text>
    {/* Red Leaf Symbol */}
    <path d="M220 20 C 240 5, 270 5, 290 20 C 270 35, 240 35, 220 20 Z" fill="#da291c" />
    <rect x="292" y="25" width="8" height="8" fill="#da291c" />
  </svg>
);

const SomfyLogo = () => (
  <svg viewBox="0 0 160 60" className="h-8 md:h-10 w-auto transition-all duration-300" xmlns="http://www.w3.org/2000/svg">
    <text x="5" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#fbb03b" letterSpacing="-1">somfy.</text>
    {/* O underline decoration */}
    <path d="M40 52 Q 55 58, 70 52" stroke="#fbb03b" strokeWidth="3" fill="none" />
  </svg>
);

const MoselLogo = () => (
  <svg viewBox="0 0 180 60" className="h-8 md:h-10 w-auto transition-all duration-300" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#0054a6">MOSEL</text>
    {/* Registered trademark */}
    <text x="165" y="20" fontFamily="Arial, sans-serif" fontSize="10" fill="#0054a6">®</text>
    {/* Red Square accent */}
    <rect x="145" y="25" width="12" height="12" fill="#ef4444" />
  </svg>
);

// --- Main Component ---

const Partners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const logos = [
    { id: 1, component: <CopacoLogo />, name: 'Copaco' },
    { id: 2, component: <SergeFerrariLogo />, name: 'Serge Ferrari' },
    { id: 3, component: <SomfyLogo />, name: 'Somfy' },
    { id: 4, component: <MoselLogo />, name: 'Mosel' },
  ];

  return (
    <section className="bg-white py-10 md:py-16 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-10 gap-6">
          <div className="max-w-2xl">
             <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">
               En iyilerin tercihi.
             </h3>
             <p className="text-gray-500 text-base md:text-lg leading-relaxed">
               Projelerimizde kullandığımız motor ve kumaş teknolojileri, dünya standartlarında kabul görmüş lider markaların güvencesi altındadır.
             </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-gray-600"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-gray-600"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Logos/Brands Carousel */}
        <div 
          ref={scrollRef}
          className="flex items-center gap-12 md:gap-24 overflow-x-auto pb-2 scrollbar-hide w-full"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }}
        >
          {/* Rendering list multiple times for loop effect */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div 
              key={`${logo.name}-${idx}`} 
              className="flex-shrink-0 group cursor-pointer transition-all duration-500 flex items-center justify-center min-w-[120px] md:min-w-[140px]"
            >
              <div className="filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                {logo.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;