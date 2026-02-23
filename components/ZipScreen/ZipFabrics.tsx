import React, { useState, useEffect } from 'react';
import { Palette, Sun, Eye, ShieldCheck, Layers, Wind, CheckCircle2, Info, ExternalLink } from 'lucide-react';

const ZipFabrics: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<'ferrari' | 'copaco'>('ferrari');
  
  // Base Textures for Realistic Simulation
  const textures = {
    ferrari: "https://images.unsplash.com/photo-1521199326497-29b139369974?q=80&w=2600&auto=format&fit=crop", // Open Mesh (Soltis)
    copaco: "https://images.unsplash.com/photo-1617103859769-1502479c9489?q=80&w=2670&auto=format&fit=crop" // Tight Weave (Serge)
  };

  // Renk Paletleri Tanımları
  const palettes = {
    ferrari: [
      { name: "Antrasit", code: "Ref. 86-2047", hex: "#374151", type: "dark", desc: "Modern mimari projelerin en popüler tercihi. Keskin ve net duruş." },
      { name: "Beton Gri", code: "Ref. 86-2167", hex: "#8c8f91", type: "medium", desc: "Endüstriyel ve minimal tasarımlar için ideal nötr gri." },
      { name: "Taş Gri", code: "Ref. 86-2171", hex: "#959489", type: "medium", desc: "Doğal taş cephelerle uyumlu, sıcak alt tonlu gri." },
      { name: "Şampanya", code: "Ref. 86-2175", hex: "#b7a99a", type: "light", desc: "Yumuşak, sıcak ve zarif bir gölgelendirme tonu." },
      { name: "Beyaz", code: "Ref. 86-2044", hex: "#f3f4f6", type: "light", desc: "Maksimum ısı yansıtma ve ferahlık." },
      { name: "Siyah", code: "Ref. 86-2053", hex: "#18181b", type: "dark", desc: "Tam vizyon ve kontrast sağlayan derin siyah." },
      { name: "Bronz", code: "Ref. 86-2043", hex: "#483C32", type: "dark", desc: "Metalik ve zengin bir cephe görünümü." },
      { name: "Gümüş", code: "Ref. 86-2048", hex: "#a1a1aa", type: "light", desc: "Teknolojik ve parlak metalik yüzey." },
    ],
    // Copaco Serge 600 Colors - Official
    copaco: [
      { name: "Charcoal", code: "002002", hex: "#2d2d2f", type: "dark", desc: "Serge 600 serisinin en popüler rengi. Parlama yapmadan dışarıyı net görmenizi sağlar." },
      { name: "Grey-Char", code: "001002", hex: "#58585a", type: "dark", desc: "Gri ve siyah ipliklerin karışımı. Kir göstermeyen, modern bir doku." },
      { name: "Grey-Grey", code: "001001", hex: "#909090", type: "medium", desc: "Tamamen gri dokuma. Alüminyum doğramalarla mükemmel uyum." },
      { name: "White", code: "008008", hex: "#fcfcfc", type: "light", desc: "Güneş enerjisini en yüksek oranda yansıtan saf beyaz." },
      { name: "White-Grey", code: "008001", hex: "#dcdcdc", type: "light", desc: "Beyazın ferahlığı ve grinin modernliğini birleştiren ara ton." },
      { name: "Pearl", code: "007007", hex: "#e8e3d8", type: "light", desc: "Sıcak, doğal ve zarif inci tonu. İç mekanda yumuşak bir ışık sağlar." },
      { name: "Bronze", code: "002033", hex: "#4e4844", type: "dark", desc: "Kahve ve siyah tonlarının karışımıyla elde edilen lüks görünüm." },
      { name: "Sand", code: "009009", hex: "#bfb3a0", type: "light", desc: "Doğal peyzaj ve ahşap detaylarla uyumlu bej tonu." },
    ]
  };

  const currentColors = palettes[activeBrand];
  const [activeColor, setActiveColor] = useState<string>(currentColors[0].hex);

  // Marka değiştiğinde, o markanın ilk rengini seç
  useEffect(() => {
    setActiveColor(palettes[activeBrand][0].hex);
  }, [activeBrand]);

  const brandInfo = {
    ferrari: {
      name: "Serge Ferrari®",
      series: "Soltis Horizon 86",
      desc: "Doğal ışık ile ısı koruması arasındaki mükemmel denge. %93'e varan UV blokajı sağlarken dışarıyı net görmenize olanak tanır. Precontraint® teknolojisi sayesinde sarkma yapmaz ve uzun yıllar formunu korur.",
      link: "https://www.sergeferrari.com/products/soltis-range/soltis-horizon-86",
      features: [
        { text: "%14 Açıklık Faktörü (Görünürlük)", highlight: false },
        { text: "Precontraint® Teknolojisi", highlight: true },
        { text: "Yüksek Boyutsal Kararlılık", highlight: true },
        { text: "Kolay Temizlenebilir Yüzey", highlight: false }
      ]
    },
    copaco: {
      name: "Copaco",
      series: "Serge 600",
      desc: "Fiberglas çekirdek üzerine PVC kaplama teknolojisi. Yüksek dayanıklılık ve estetik dokuma yapısı ile mimari projelerin vazgeçilmezi. Mat ve doğal dokusuyla cepheye modern bir hava katar.",
      link: "https://www.copaco.be/en/screens/out/serge-600",
      features: [
        { text: "%5 Açıklık Faktörü (Gizlilik)", highlight: false },
        { text: "Fiberglas Çekirdek Dayanımı", highlight: true },
        { text: "Alev Yürütmez (M1/B1)", highlight: true },
        { text: "Mat Yüzey Dokusu", highlight: false }
      ]
    }
  };

  const selectedColorObj = currentColors.find(c => c.hex === activeColor) || currentColors[0];

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100 scroll-mt-20" id="fabrics">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
           
           {/* --- LEFT COLUMN: Visual Configurator (Col Span 5) --- */}
           <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* 1. Interactive Texture Preview */}
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 group bg-gray-100">
                 {/* Base Texture Image (Grayscale/White) - Changes based on brand */}
                 <img 
                   key={activeBrand} // Force re-render on change
                   src={textures[activeBrand]}
                   alt={`${activeBrand} Fabric Texture`} 
                   className="absolute inset-0 w-full h-full object-cover z-0 grayscale contrast-125 brightness-110 transition-opacity duration-500"
                 />
                 
                 {/* Color Overlay (Mix Blend Mode) */}
                 <div 
                    className="absolute inset-0 z-10 transition-colors duration-500 mix-blend-multiply"
                    style={{ backgroundColor: activeColor }}
                 ></div>

                 {/* Shine/Reflection Overlay for realism */}
                 <div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-60 pointer-events-none"></div>

                 {/* Active Brand Badge (Top Left) */}
                 <div className="absolute top-6 left-6 z-30 bg-black/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    {brandInfo[activeBrand].name}
                 </div>

                 {/* Active Color Info Card (Bottom Right) */}
                 <div className="absolute bottom-6 right-6 z-30 bg-white/95 backdrop-blur-md text-black p-4 rounded-xl shadow-xl border border-white/40 max-w-[200px] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                        <div 
                          className="w-3 h-3 rounded-full border border-gray-300 shadow-sm"
                          style={{ backgroundColor: selectedColorObj.hex }}
                        ></div>
                        <span className="font-bold text-sm leading-none">{selectedColorObj.name}</span>
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono mb-2">{selectedColorObj.code}</div>
                    <p className="text-[10px] text-gray-600 leading-tight">
                      {selectedColorObj.desc}
                    </p>
                 </div>
              </div>

              {/* 2. Brand Selector Tabs */}
              <div className="flex p-1 bg-gray-100 rounded-xl">
                 <button 
                   onClick={() => setActiveBrand('ferrari')}
                   className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeBrand === 'ferrari' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                 >
                    Serge Ferrari®
                 </button>
                 <button 
                   onClick={() => setActiveBrand('copaco')}
                   className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeBrand === 'copaco' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                 >
                    Copaco
                 </button>
              </div>

              {/* 3. Color Grid (Refined Layout) */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
                     <Palette size={14} />
                     <span>Renk Seçenekleri</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                     <Info size={10} />
                     <span>Detay için üzerine gelin</span>
                  </div>
                </div>
                
                {/* Updated Grid Layout: Increased spacing and swatch size */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-6">
                   {currentColors.map((color, idx) => (
                     <button 
                        key={idx} 
                        onClick={() => setActiveColor(color.hex)}
                        className={`group relative flex flex-col items-center gap-3 p-2 rounded-2xl border transition-all duration-300 hover:bg-gray-50 ${activeColor === color.hex ? 'bg-gray-50 border-gray-200 ring-1 ring-black/5' : 'border-transparent'}`}
                     >
                        {/* Swatch Circle */}
                        <div 
                          className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-sm border border-black/5 relative overflow-hidden transition-transform duration-300 group-hover:scale-105 ${activeColor === color.hex ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                          style={{ backgroundColor: color.hex }}
                        >
                           {/* Active Checkmark Overlay */}
                           {activeColor === color.hex && (
                             <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white backdrop-blur-[1px]">
                               <CheckCircle2 size={20} />
                             </div>
                           )}
                        </div>
                        
                        {/* Label */}
                        <span className={`text-xs font-medium text-center leading-tight transition-colors ${activeColor === color.hex ? 'text-black' : 'text-gray-500 group-hover:text-gray-800'}`}>
                           {color.name}
                        </span>

                        {/* HOVER TOOLTIP */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-48 p-3 bg-gray-900 text-white text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-[60] shadow-xl flex flex-col gap-1 translate-y-2 group-hover:translate-y-0">
                           <div className="flex justify-between items-center font-bold border-b border-gray-700 pb-1 mb-1">
                               <span>{color.name}</span>
                               <span className="text-gray-400 font-mono text-[10px]">{color.code}</span>
                           </div>
                           <p className="text-gray-300 leading-snug text-left">{color.desc}</p>
                           {/* Arrow */}
                           <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                     </button>
                   ))}
                </div>
                <p className="text-[10px] text-gray-400 mt-8 text-center border-t border-gray-100 pt-4">
                  * Renkler ekran ayarlarına göre farklılık gösterebilir. Kartela talep ediniz.
                </p>
              </div>

           </div>

           {/* --- RIGHT COLUMN: Technical & Editorial (Col Span 7) --- */}
           <div className="lg:col-span-7 flex flex-col justify-center h-full pt-4 lg:pl-12">
              
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-black"></span>
                <span className="text-sm font-medium tracking-widest uppercase text-gray-500">
                  Teknik Kumaşlar
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Dokuyu Hisset, <br/>
                <span className="font-serif italic font-light text-gray-400">Teknolojiyi Yaşa.</span>
              </h2>

              <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                Zip Perde sistemlerimizde, dünyanın en prestijli kumaş üreticileri ile çalışıyoruz. Seçtiğiniz <strong className="text-black font-medium">{brandInfo[activeBrand].series}</strong> serisi, mikro delikli yapısı sayesinde iç mekanın hava almasını sağlarken, zararlı UV ışınlarını bloke eder.
              </p>

              {/* Dynamic Brand Info Box - ENHANCED */}
              <div className="bg-gray-50 rounded-3xl p-8 mb-10 border border-gray-200 relative overflow-hidden transition-all duration-300 hover:shadow-md">
                 {/* Decorative background icon */}
                 <div className="absolute -top-6 -right-6 text-gray-200 opacity-50 rotate-12 pointer-events-none">
                    <Layers size={140} />
                 </div>

                 <div className="relative z-10">
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-200 pb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                                {brandInfo[activeBrand].name}
                                {activeBrand === 'ferrari' && <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full tracking-wide">PREMIUM</span>}
                            </h3>
                            <span className="text-sm text-gray-500 font-medium mt-1 block">
                                Seri: <span className="text-gray-800">{brandInfo[activeBrand].series}</span>
                            </span>
                        </div>
                        {/* Link to official site */}
                        <a 
                          href={brandInfo[activeBrand].link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-600 hover:text-blue-800 transition-colors"
                        >
                           Resmi Katalog
                           <ExternalLink size={14} />
                        </a>
                     </div>
                     
                     <div className="mb-8">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Kumaş Teknolojisi</h4>
                        <p className="text-gray-700 text-base leading-relaxed">
                            {brandInfo[activeBrand].desc}
                        </p>
                     </div>

                     <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Teknik Özellikler</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {brandInfo[activeBrand].features.map((feature, i) => (
                            <div 
                                key={i} 
                                className={`flex items-center gap-3 p-3 rounded-xl border shadow-sm transition-all duration-300 
                                ${feature.highlight 
                                    ? activeBrand === 'ferrari' 
                                        ? 'bg-red-50/60 border-red-200 ring-1 ring-red-100' 
                                        : 'bg-blue-50/60 border-blue-200 ring-1 ring-blue-100'
                                    : 'bg-white border-gray-100'
                                }`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 
                                    ${feature.highlight 
                                        ? activeBrand === 'ferrari' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                                        : 'bg-gray-50 text-gray-400'
                                    }`}>
                                    <CheckCircle2 size={16} />
                                </div>
                                <span className={`text-sm ${feature.highlight ? 'text-black font-bold' : 'text-gray-700 font-medium'}`}>
                                    {feature.text}
                                </span>
                            </div>
                            ))}
                        </div>
                     </div>
                 </div>
              </div>

              {/* General Tech Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 border-t border-gray-100 pt-10">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                      <Sun size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">Isı Kontrolü</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Güneş ısısını cam yüzeye ulaşmadan %90+ oranında keserek enerji tasarrufu sağlar.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Wind size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">Mikro Havalandırma</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Özel dokuma tekniği sayesinde hava sirkülasyonu kesilmez, sera etkisi oluşmaz.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Eye size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">Görsel Konfor</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Gündüz içeriden dışarıyı net görürsünüz, ancak dışarıdan içerisi görünmez.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">Alev Yürütmez</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Uluslararası B1/M1 yanmazlık sertifikalarına sahip güvenli kompozit yapı.</p>
                    </div>
                 </div>
              </div>

           </div>

        </div>

      </div>
    </section>
  );
};

export default ZipFabrics;