import React from 'react';
import { ArrowRight, Home, CarFront, Store, Shield, Warehouse, CheckCircle2 } from 'lucide-react';

const ShutterUsageAreas: React.FC = () => {
  const areas = [
    {
      id: "residential",
      title: "Konut Pencereleri",
      description: "Müstakil evler ve apartman daireleri için standart panjur çözümleri. Isı yalıtımı ve mahremiyetin yanı sıra, modern cephe estetiğine uyum sağlar.",
      details: ["39mm / 55mm Lamel", "Gizli Kutu Seçeneği"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
      icon: <Home size={24} />
    },
    {
      id: "garage",
      title: "Garaj Kapıları",
      description: "Geniş açıklıklar için güçlendirilmiş 77mm lameller. Aracınızı hırsızlığa ve hava koşullarına karşı korurken, uzaktan kumanda ile konforlu giriş çıkış sunar.",
      details: ["77mm Çelik/Alüminyum", "Engel Tanıma Sensörü"],
      image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=2603&auto=format&fit=crop",
      icon: <CarFront size={24} />
    },
    {
      id: "commercial",
      title: "Mağaza ve Vitrin",
      description: "İş yeriniz kapalıyken bile ürünlerinizi sergileyebileceğiniz mikro delikli veya pencereli profiller. Yüksek güvenlikli kilit mekanizmaları içerir.",
      details: ["Ekstrüzyon Profil", "Görsel Temas İmkanı"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
      icon: <Store size={24} />
    },
    {
      id: "security",
      title: "Yüksek Güvenlik (Villa)",
      description: "Zemin katlar ve müstakil villalar için özel olarak tasarlanmış, kaldırmaya karşı dirençli 'Safe-Lock' sistemli panjurlar.",
      details: ["RC3 Güvenlik Sınıfı", "Otomatik Zamanlayıcı"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      icon: <Shield size={24} />
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-3xl">
             <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-[1px] bg-black"></div>
               <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                 Uygulama Alanları
               </span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
               Fonksiyonel Çözümler, <br/>
               <span className="font-serif italic font-light text-gray-500">Sınırsız Entegrasyon.</span>
             </h2>
          </div>
          <p className="max-w-md text-gray-600 text-lg font-light leading-relaxed text-right md:text-left">
            İster güvenli bir garaj kapısı, ister enerji tasarruflu bir pencere panjuru. İhtiyacınıza uygun sistemi tasarlıyoruz.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <div key={area.id} className="group relative bg-[#f9f9f9] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100">
              
              {/* Image Container */}
              <div className="relative h-[280px] md:h-[350px] overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-12">
                  {area.icon}
                </div>

                {/* Title Overlay (Bottom Left on Image) */}
                <div className="absolute bottom-6 left-8 md:bottom-8">
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                     {area.title}
                   </h3>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {area.description}
                </p>

                {/* Details List */}
                <div className="flex flex-wrap gap-3 mb-6">
                   {area.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wide">
                         <CheckCircle2 size={14} className="text-black" />
                         {detail}
                      </div>
                   ))}
                </div>

                {/* Action Arrow */}
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black group-hover:text-gray-600 transition-colors cursor-pointer">
                   <span>İncele</span>
                   <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShutterUsageAreas;