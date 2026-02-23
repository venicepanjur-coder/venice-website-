import React from 'react';
import { Layers, Zap, PenTool } from 'lucide-react';

const Values: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 md:py-24 px-6 border-t border-gray-50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 mb-6 tracking-wide uppercase">
          <Layers size={12} className="mr-2" />
          Değerlerimiz
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black mb-6">
          Değerlerimiz, Temelimiz
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-gray-500 text-base md:text-lg leading-relaxed font-light mb-12 md:mb-16">
          Değerlerimiz her tasarımı şekillendirir—dürüstlük, yenilik, mükemmellik ve sürdürülebilirlik—ilham veren, kalıcı ve yaşamı zenginleştiren alanlar yaratır.
        </p>

        {/* Central Architectural Visual */}
        {/* Using a high-contrast architectural image with filters to simulate a 'sketch/wireframe' look similar to the reference */}
        <div className="w-full relative mb-12 md:mb-16">
          <div className="aspect-[16/9] w-full max-w-5xl mx-auto overflow-hidden opacity-90">
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
               alt="Architectural Sketch Foundation" 
               className="w-full h-full object-cover grayscale contrast-125 brightness-110 hover:scale-105 transition-transform duration-[2s]"
             />
             {/* Overlay to fade bottom into white for seamless integration */}
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          </div>
        </div>

        {/* Bottom Feature Cards (Pill Shape) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
          
          {/* Card 1: Innovative */}
          <div className="group relative h-20 md:h-24 rounded-full border border-gray-100 flex items-center px-4 md:px-8 hover:border-gray-300 transition-all cursor-default">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-50 flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform">
               <Zap size={20} className="text-gray-400 group-hover:text-black transition-colors" />
            </div>
            <span className="text-lg md:text-xl font-light text-gray-500 group-hover:text-black transition-colors">Yenilikçi</span>
          </div>

          {/* Card 2: Functionality (Active Style) */}
          <div className="group relative h-20 md:h-24 rounded-full border border-black bg-white flex items-center px-4 md:px-8 shadow-xl transform md:-translate-y-2 cursor-default z-10">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-black flex items-center justify-center mr-4 md:mr-6">
               <Layers size={20} className="text-black" />
            </div>
            <span className="text-lg md:text-xl font-medium text-black">İşlevsellik</span>
          </div>

          {/* Card 3: Modern */}
          <div className="group relative h-20 md:h-24 rounded-full border border-gray-100 flex items-center px-4 md:px-8 hover:border-gray-300 transition-all cursor-default">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-50 flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform">
               <PenTool size={20} className="text-gray-400 group-hover:text-black transition-colors" />
            </div>
            <span className="text-lg md:text-xl font-light text-gray-500 group-hover:text-black transition-colors">Modern</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Values;