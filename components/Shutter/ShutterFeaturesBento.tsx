import React from 'react';
import { 
  ShieldCheck, 
  ThermometerSun, 
  VolumeX, 
  Umbrella, 
  Moon, 
  Smartphone, 
  Wind, 
  Palette,
  ArrowUpRight 
} from 'lucide-react';

const ShutterFeaturesBento: React.FC = () => {
  // JSON Verilerine dayalı özellik seti
  // Grid Yapısı (3 Kolon):
  // Satır 1: [ Güvenlik (2x2) ] [ Isı Yalıtımı (1x1) ]
  // Satır 2: [ Güvenlik (Devam) ] [ Ses Yalıtımı (1x1) ]
  // Satır 3: [ Dayanıklılık (1x1) ] [ Otomasyon (2x1) ]
  // Satır 4: [ Karartma (1x1) ] [ Sensörler (1x1) ] [ Tasarım (1x1) ]

  const features = [
    {
      id: "security",
      title: "Yüksek Güvenlik ve Caydırıcılık",
      desc: "Ekstrüzyon profiller ve motor frenleme sistemleri, zorla kaldırmayı engeller. RC 3 (Direnç Sınıfı) seviyesine kadar güvenlik sağlar.",
      benefit: "Hırsızlığa karşı tam koruma.",
      icon: <ShieldCheck size={32} />,
      // Spans 2 cols, 2 rows - Ana Vurgu (Highlight)
      className: "lg:col-span-2 lg:row-span-2 bg-[#1a1a1a] text-white overflow-hidden relative group min-h-[400px]", 
      hasImage: true,
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=2532&auto=format&fit=crop"
    },
    {
      id: "thermal",
      title: "Isı Yalıtımı & Enerji Tasarrufu",
      desc: "Poliüretan dolgulu lameller, kışın %44 ısı kaybını önlerken yazın klima maliyetlerini düşürür.",
      benefit: "U-değeri iyileştirmesi.",
      icon: <ThermometerSun size={28} />,
      className: "lg:col-span-1 lg:row-span-1 bg-orange-50 border border-orange-100 text-orange-900", // Hafif Turuncu Tema
    },
    {
      id: "sound",
      title: "Ses ve Gürültü İzolasyonu",
      desc: "Kapalı konumdayken trafik ve çevre gürültüsünü 10 dB'e kadar azaltarak sessiz bir ortam sunar.",
      benefit: "Gürültüsüz, huzurlu yaşam.",
      icon: <VolumeX size={28} />,
      className: "lg:col-span-1 lg:row-span-1 bg-white border border-gray-200", // Beyaz
    },
    {
      id: "durability",
      title: "Hava Koşullarına Tam Dayanım",
      desc: "Yüksek rüzgar yüklerine, fırtınaya ve doluya karşı dirençli fırın boyalı yüzey.",
      benefit: "Korozyonsuz uzun ömür.",
      icon: <Umbrella size={28} />,
      className: "lg:col-span-1 lg:row-span-1 bg-blue-50 border border-blue-100 text-blue-900", // Hafif Mavi Tema
    },
    {
      id: "automation",
      title: "Akıllı Ev Otomasyonu",
      desc: "Somfy IO ve Mosel alıcılar ile mobil uygulama üzerinden kontrol. Güneş doğunca açılan, siz evden çıkınca kapanan senaryolar.",
      benefit: "Varlık simülasyonu ile güvenlik.",
      icon: <Smartphone size={28} />,
      // Spans 2 cols, 1 row - Yatay Vurgu
      className: "lg:col-span-2 lg:row-span-1 bg-gray-800 text-white overflow-hidden relative group", 
      hasImage: true,
      image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: "blackout",
      title: "Tam Karartma",
      desc: "Işık sızdırmaz yapısı ile gündüzü geceye çevirin. %100 Blackout etkisi.",
      benefit: "Kaliteli uyku deneyimi.",
      icon: <Moon size={28} />,
      className: "lg:col-span-1 lg:row-span-1 bg-[#222] text-white", // Koyu Kart
    },
    {
      id: "sensors",
      title: "Akıllı Sensörler",
      desc: "Rüzgar sensörü fırtınada panjuru korur, güneş sensörü aşırı ısınmayı önler.",
      benefit: "Otomatik koruma.",
      icon: <Wind size={28} />,
      className: "lg:col-span-1 lg:row-span-1 bg-gray-100 border border-gray-200", // Gri
    },
    {
      id: "design",
      title: "Estetik Tasarım",
      desc: "Monoblok veya dıştan takma kutu seçenekleri, ahşap desenli ve RAL renk alternatifleri.",
      benefit: "Mimari ile bütünleşik.",
      icon: <Palette size={28} />,
      className: "lg:col-span-1 lg:row-span-1 bg-white border border-gray-200", // Beyaz
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
           <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-[1px] bg-black"></div>
             <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
               Teknik Üstünlük
             </span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4 leading-tight">
             Panjur Nedir? <br/>
             <span className="font-serif italic font-light text-gray-400">Neden Tercih Edilmelidir?</span>
           </h2>
           <p className="text-gray-500 text-lg font-light leading-relaxed max-w-xl">
             Yapıların pencere ve kapı boşluklarında kullanılan, yalıtım, güvenlik ve konfor sağlayan; lamellerden oluşan mekanik bir zırh sistemidir.
           </p>
        </div>

        {/* Bento Grid Layout - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${feature.className}`}
            >
              {/* Background Image Logic for 'HasImage' cards */}
              {feature.hasImage && (
                <>
                   <img 
                     src={feature.image} 
                     alt={feature.title} 
                     className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 z-0"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0"></div>
                </>
              )}

              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                 {/* Top: Icon & Arrow */}
                 <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md transition-transform duration-300 group-hover:scale-110 
                      ${feature.hasImage || feature.id === 'blackout' 
                        ? 'bg-white/20 text-white border border-white/10' 
                        : feature.id === 'thermal'
                          ? 'bg-orange-100 text-orange-700'
                          : feature.id === 'durability'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-black'
                      }`}>
                       {feature.icon}
                    </div>
                    {feature.hasImage && (
                       <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors">
                          <ArrowUpRight size={20} />
                       </span>
                    )}
                 </div>

                 {/* Bottom: Text */}
                 <div>
                    <h3 className={`text-2xl font-bold mb-3 leading-tight ${feature.hasImage ? 'text-white' : ''}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-5 ${feature.hasImage || feature.id === 'blackout' ? 'text-gray-300' : 'text-gray-500'}`}>
                      {feature.desc}
                    </p>
                    
                    {/* Benefit Pill */}
                    <div className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide
                      ${feature.hasImage || feature.id === 'blackout' 
                        ? 'bg-white/10 text-gray-200 border border-white/10' 
                        : feature.id === 'thermal'
                          ? 'bg-orange-100 text-orange-800'
                          : feature.id === 'durability'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-600'
                      }`}>
                       {feature.benefit}
                    </div>
                 </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ShutterFeaturesBento;