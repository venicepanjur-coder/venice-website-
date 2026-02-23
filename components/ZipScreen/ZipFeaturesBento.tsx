import React from 'react';
import { ArrowRight } from 'lucide-react';

const ZipFeaturesBento: React.FC = () => {
  const categories = [
    {
      id: "durability",
      title: "Rüzgar Dayanımı",
      subtitle: "Z-Lock Teknolojisi",
      link: "Teknik Detaylar",
      // Large Horizontal Card (Like 'Sofas' in reference)
      className: "md:col-span-2 bg-[#F3F3F1] aspect-[16/9] md:aspect-[2/1]", 
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2664&auto=format&fit=crop",
      imageClass: "w-[70%] -bottom-10 -right-10 group-hover:scale-105"
    },
    {
      id: "comfort",
      title: "Isı Kontrolü",
      subtitle: "%90 Enerji Tasarrufu",
      link: "Kumaş Özellikleri",
      // Square Card (Like 'Tables')
      className: "md:col-span-1 bg-[#F3F3F1] aspect-square", 
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
      imageClass: "w-[80%] bottom-0 right-0 group-hover:scale-105"
    },
    {
      id: "privacy",
      title: "Mahremiyet",
      subtitle: "Görsel Konfor",
      link: "Görünürlük",
      // Tall Card (Like 'Lighting')
      className: "md:col-span-1 md:row-span-2 bg-[#F3F3F1] aspect-[3/4] md:aspect-auto", 
      image: "https://images.unsplash.com/photo-1631528621458-45e3bd1950d3?q=80&w=2574&auto=format&fit=crop",
      imageClass: "w-full h-[60%] bottom-0 left-0 object-top group-hover:scale-105"
    },
    {
      id: "automation",
      title: "Otomasyon",
      subtitle: "Somfy & Mobil Kontrol",
      link: "Motor Seçenekleri",
      // Standard Card (Like 'Chairs')
      className: "md:col-span-2 bg-[#F3F3F1] aspect-[16/9] md:aspect-[2/1]", 
      image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2670&auto=format&fit=crop",
      imageClass: "w-[60%] bottom-0 right-10 group-hover:scale-105 rounded-t-3xl shadow-xl"
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Simple Minimal Header */}
        <h2 className="text-4xl md:text-5xl font-medium text-black mb-16 tracking-tight">
          Öne Çıkan Özellikler
        </h2>

        {/* Minimal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {categories.map((item) => (
            <div 
              key={item.id} 
              className={`group relative rounded-[2rem] overflow-hidden p-8 md:p-10 transition-all duration-500 hover:shadow-lg ${item.className}`}
            >
              
              {/* Text Content Top-Left */}
              <div className="relative z-20 flex flex-col items-start h-full">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500 mb-4 font-medium tracking-wide uppercase">
                  {item.subtitle}
                </span>
                
                <div className="flex items-center gap-2 text-[#d4a373] font-medium text-sm group-hover:text-[#b08968] transition-colors cursor-pointer mt-1">
                   <span>{item.link}</span>
                   <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Product Image */}
              <div className={`absolute shadow-sm transition-transform duration-700 ease-out ${item.imageClass}`}>
                 <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover mix-blend-multiply" // Blend mode helps integrate with gray bg
                 />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ZipFeaturesBento;