import React from 'react';
import { ArrowRight, Ruler, Warehouse, Blinds, Coffee, Sun } from 'lucide-react';

const ZipUsageAreas: React.FC = () => {
  const areas = [
    {
      id: "windows",
      title: "Pencere Önü Uygulamaları",
      description: "Güneş ısısını camdan içeri girmeden durdurarak evinizi serin tutar. Standart panjurlara göre daha modern ve minimal bir görünüm sunar.",
      technical: "Kasa 105mm/125mm seçenekleri ile pencere nişlerine gömülebilir.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      icon: <Blinds size={24} />
    },
    {
      id: "pergolas",
      title: "Pergola ve Kış Bahçesi",
      description: "Açık alanlarınızı rüzgar ve yağmurdan koruyarak 4 mevsim kullanılabilir bir yaşam alanına dönüştürür. Yanlardan tam kapanarak 'böceksiz' bir konfor alanı yaratır.",
      technical: "Biyoklimatik pergolalara entegre, 6 metreye kadar tek parça uygulama.",
      image: "https://images.unsplash.com/photo-1631528621458-45e3bd1950d3?q=80&w=2574&auto=format&fit=crop",
      icon: <Warehouse size={24} />
    },
    {
      id: "balconies",
      title: "Balkon Gölgelendirme",
      description: "Cam balkona kıyasla hava sirkülasyonu sağlar, sera etkisi yaratmaz. Mahremiyet sağlarken manzarayı kapatmaz.",
      technical: "Yüksek rüzgar direncine sahip balkon çözümleri.",
      image: "https://images.unsplash.com/photo-1599695627622-4467c6999b24?q=80&w=2670&auto=format&fit=crop",
      icon: <Sun size={24} />
    },
    {
      id: "commercial",
      title: "Kafe ve Restoranlar",
      description: "Müşterilerinizi rüzgardan ve güneşten korurken, işletmenizin açık alan kapasitesini artırır. Şeffaf PVC pencereli modeller ile manzara kaybı yaşatmaz.",
      technical: "Ticari alanlar için geniş açıklıklar (Extreme seri) ve şeffaf pencere.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2647&auto=format&fit=crop",
      icon: <Coffee size={24} />
    }
  ];

  return (
    <section className="bg-[#f5f5f7] py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-3xl">
             <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-[1px] bg-black"></div>
               <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                 Kullanım Alanları
               </span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
               Her Mekan İçin <br/>
               <span className="font-serif italic font-light text-gray-500">Estetik Çözümler.</span>
             </h2>
          </div>
          <p className="max-w-md text-gray-600 text-lg font-light leading-relaxed text-right md:text-left">
            Zip Perdeler, pencerelerden teraslara kadar her alana mükemmel uyum sağlar.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <div key={area.id} className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
              
              {/* Image Container */}
              <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white">
                  {area.icon}
                </div>

                {/* Mobile Title Overlay (Visible only on small screens for better UX) */}
                <div className="absolute bottom-6 left-6 md:hidden">
                   <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col justify-between flex-grow relative">
                
                <div>
                   <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 hidden md:block group-hover:translate-x-2 transition-transform duration-300">
                     {area.title}
                   </h3>
                   <p className="text-gray-600 leading-relaxed mb-8">
                     {area.description}
                   </p>
                </div>

                {/* Technical Footnote */}
                <div className="pt-6 border-t border-gray-100 flex items-start gap-3 mt-auto">
                   <Ruler size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                   <span className="text-sm text-gray-500 font-medium">
                     {area.technical}
                   </span>
                </div>

                {/* Hover Arrow Action */}
                <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:flex w-12 h-12 bg-black text-white rounded-full items-center justify-center">
                  <ArrowRight size={20} />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ZipUsageAreas;