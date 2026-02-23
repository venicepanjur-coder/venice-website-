import React from 'react';
import { LayoutGrid, Home, Building2, Factory, ShoppingBag } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="bg-white text-black py-8 md:py-12 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        {/* Badge / Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm text-xs font-medium text-gray-600 mb-6 md:mb-8 hover:bg-black/10 transition-colors cursor-default">
          <LayoutGrid size={12} />
          <span>Hakkımızda</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-6 md:mb-8">
          <span className="text-black font-medium">Yıllardır,</span> <span className="text-gray-400">dış cephe çözümleri geçmişe sıkışıp kaldı. Geleceği yeniden tanımlama zamanı.</span>
        </h2>

        {/* Body Paragraphs */}
        <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-600 font-light">
          <p>
            ZipSistem olarak, sadece perde ve panjur sistemleri tasarlamıyoruz—<span className="text-black font-medium">yaşam deneyimleri kurguluyoruz.</span> Yenilikçi, insan odaklı yaklaşımımız estetik, sürdürülebilirlik ve işlevselliği harmanlayarak ilham veren ve kalıcı alanlar şekillendiriyor.
          </p>
          
          <p>
            Sınırsız tasarım. Tavizsiz konfor. <br />
            Mimarinin modern yüzüne hoş geldiniz.
          </p>
        </div>

        {/* Service/Sector Icons */}
        <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
          <IconCircle icon={<Home size={18} />} label="Konut" />
          <IconCircle icon={<Building2 size={18} />} label="Ticari" />
          <IconCircle icon={<Factory size={18} />} label="Endüstriyel" />
          <IconCircle icon={<ShoppingBag size={18} />} label="Mağaza" />
        </div>
      </div>
    </section>
  );
};

// Helper component for the round icons
const IconCircle: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="group relative">
    {/* Inverted colors: Black bg, white icon for contrast on white section */}
    <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer z-10 relative">
      {icon}
    </div>
    {/* Tooltip-ish label */}
    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {label}
    </span>
  </div>
);

export default About;