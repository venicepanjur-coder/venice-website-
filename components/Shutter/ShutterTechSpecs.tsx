import React, { useState } from 'react';
import { Ruler, Weight, Wind, Maximize, ShieldCheck, ThermometerSun, Check, Info } from 'lucide-react';

const ShutterTechSpecs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standard' | 'wood'>('standard');

  // JSON Data: Renkler
  const ralColors = [
    { code: "RAL 9016", name: "Beyaz", hex: "#fdfdfd", dark: false, desc: "Ferah ve temiz bir görünüm için en sık tercih edilen standart beyaz." },
    { code: "RAL 9006", name: "Metalik Gri", hex: "#a5a5a5", dark: false, desc: "Modern mimari ile uyumlu, endüstriyel ve şık gümüş tonu." },
    { code: "RAL 7016", name: "Antrasit Gri", hex: "#383e42", dark: true, desc: "Minimalist yapıların vazgeçilmezi, koyu ve asil gri." },
    { code: "RAL 8014", name: "Kahverengi", hex: "#4a3c31", dark: true, desc: "Toprak tonları ve klasik cepheler için ideal sepya kahve." },
    { code: "RAL 1015", name: "Açık Bej", hex: "#e6d6b8", dark: false, desc: "Sıcak ve doğal bir atmosfer yaratan yumuşak bej tonu." },
    { code: "RAL 1013", name: "Krem", hex: "#e8e6d9", dark: false, desc: "Beyazın keskinliğini kıran, inci beyazı yumuşaklığında krem." },
    { code: "RAL 9005", name: "Siyah", hex: "#0a0a0a", dark: true, desc: "Güçlü kontrast ve modern detaylar için derin siyah." },
  ];

  const woodColors = [
    { name: "Altın Meşe", hex: "#a0764b", gradient: "linear-gradient(45deg, #a0764b, #6f4e37)", desc: "Doğal meşe dokusu ile cephenize sıcaklık katar." },
    { name: "Ceviz", hex: "#5d4037", gradient: "linear-gradient(45deg, #5d4037, #3e2723)", desc: "Koyu ve ağırbaşlı, klasik ceviz ağacı görünümü." },
    { name: "Maun", hex: "#4a1b15", gradient: "linear-gradient(45deg, #4a1b15, #88332a)", desc: "Kızıl kahve tonlarıyla lüks ve estetik bir dokunuş." },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100" id="tech-specs">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[1px] bg-black"></div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                  Teknik Detaylar
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                55mm Alüminyum Lamel <br/>
                <span className="font-serif italic font-light text-gray-500">Performans Verileri.</span>
              </h2>
           </div>
           
           <div className="flex flex-col items-end gap-2 text-right">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Ürün Kodları</span>
              <div className="flex gap-2">
                 <Badge text="55 Standard" />
                 <Badge text="Rhino 55mm" />
                 <Badge text="T55 Eco" />
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
           
           {/* LEFT COLUMN: Technical Stats Grid */}
           <div className="lg:col-span-7">
              
              {/* Main Technical Table */}
              <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100">
                 <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <Ruler className="text-gray-400" />
                    Boyutlar ve Limitler
                 </h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                    
                    {/* Profil Yüksekliği */}
                    <SpecItem 
                       label="Profil Yüzey Yüksekliği" 
                       value="55 mm" 
                       sub="(Kilit payı ile 56mm)"
                    />

                    {/* Profil Kalınlığı */}
                    <SpecItem 
                       label="Profil Kalınlığı" 
                       value="8.2 - 14 mm" 
                       sub="Standart vs Ekstrüzyon"
                    />

                    {/* Maksimum Genişlik */}
                    <SpecItem 
                       label="Maksimum Genişlik" 
                       value="3600 mm" 
                       sub="Güçlendirilmiş: 4000mm"
                       highlight
                    />

                    {/* Maksimum Alan */}
                    <SpecItem 
                       label="Maksimum Alan" 
                       value="10 m²" 
                       sub="Tek parça uygulama"
                    />

                    {/* Ağırlık */}
                    <SpecItem 
                       label="Ağırlık (m²)" 
                       value="3.5 - 8.5 kg" 
                       sub="Dolgu tipine göre değişir"
                    />

                    {/* Isı Yalıtımı */}
                    <SpecItem 
                       label="Isı Yalıtımı (U-Değeri)" 
                       value="2.9 W/m²K" 
                       sub="Poliüretan dolgulu model"
                       icon={<ThermometerSun size={16} className="text-orange-500"/>}
                    />

                 </div>

                 {/* Information Note */}
                 <div className="mt-10 pt-6 border-t border-gray-200 flex items-start gap-3">
                    <Info size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-500 leading-relaxed">
                       <strong>İstifleme Bilgisi:</strong> 39'luk lamele göre daha geniş sarım çapına sahiptir. 1 metre yükseklik için yaklaşık 18-19 adet lamel kullanılır.
                    </p>
                 </div>
              </div>

              {/* Advantages Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                 <AdvantageCard 
                    title="Ekonomik" 
                    desc="77mm garaj profillerine göre daha uygun maliyetli çözüm."
                 />
                 <AdvantageCard 
                    title="Kompakt" 
                    desc="Garaj uygulamalarında tavanda daha az yer kaplayan sarım çapı."
                 />
                 <AdvantageCard 
                    title="Yalıtımlı" 
                    desc="Yüksek yoğunluklu PU dolgu ile %44 ısı tasarrufu potansiyeli."
                 />
              </div>

           </div>

           {/* RIGHT COLUMN: Colors & Visuals */}
           <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Visual Representation (Abstract/Technical) */}
              <div className="bg-[#111] rounded-3xl p-8 text-white relative overflow-hidden group min-h-[300px] flex flex-col justify-between">
                 {/* Abstract Shapes resembling slats */}
                 <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
                    {[1,2,3,4,5].map(i => (
                       <div key={i} className="h-14 w-full border-b border-white/30 transform -skew-y-6 origin-top-right mb-1"></div>
                    ))}
                 </div>

                 <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                       <ShieldCheck size={14} />
                       <span>Dayanıklılık</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Rhino 55mm</h3>
                    <p className="text-gray-400 text-sm max-w-xs">
                       Ekstrüzyon (içi dolu alüminyum) seçeneği ile fırtınalara ve zorlamalara karşı üstün direnç.
                    </p>
                 </div>

                 <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <Wind size={20} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-xs text-gray-400">Rüzgar</span>
                          <span className="font-bold">Yüksek</span>
                       </div>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <Maximize size={20} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-xs text-gray-400">Genişlik</span>
                          <span className="font-bold">360cm+</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Color Palette */}
              <div className="border border-gray-100 rounded-3xl p-8">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Renk Seçenekleri</h3>
                    
                    {/* Toggle Tabs */}
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                       <button 
                         onClick={() => setActiveTab('standard')}
                         className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'standard' ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}
                       >
                          Standart RAL
                       </button>
                       <button 
                         onClick={() => setActiveTab('wood')}
                         className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'wood' ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}
                       >
                          Ahşap Desen
                       </button>
                    </div>
                 </div>

                 {/* Colors Grid */}
                 <div className="grid grid-cols-4 gap-4">
                    {activeTab === 'standard' ? (
                       ralColors.map((color, idx) => (
                          <div key={idx} className="group flex flex-col items-center gap-2 cursor-default relative">
                             <div 
                                className="w-12 h-12 rounded-full shadow-sm border border-gray-100 relative transition-transform group-hover:scale-110 z-10"
                                style={{ backgroundColor: color.hex }}
                             >
                             </div>
                             
                             {/* Enhanced Tooltip */}
                             <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-gray-900 text-white text-xs rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 shadow-xl flex flex-col gap-1 translate-y-2 group-hover:translate-y-0">
                                <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-1">
                                   <span className="font-bold">{color.name}</span>
                                   <span className="text-gray-400 text-[10px] font-mono">{color.code}</span>
                                </div>
                                <p className="text-gray-300 text-[10px] leading-relaxed text-left">{color.desc}</p>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                             </div>

                             <span className="text-[10px] text-gray-500 font-medium text-center leading-tight">{color.name}</span>
                          </div>
                       ))
                    ) : (
                       woodColors.map((wood, idx) => (
                          <div key={idx} className="group flex flex-col items-center gap-2 cursor-default col-span-1 relative">
                             <div 
                                className="w-12 h-12 rounded-full shadow-sm border border-gray-100 relative transition-transform group-hover:scale-110 z-10"
                                style={{ background: wood.gradient }}
                             >
                             </div>

                             {/* Enhanced Tooltip for Wood */}
                             <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-gray-900 text-white text-xs rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 shadow-xl flex flex-col gap-1 translate-y-2 group-hover:translate-y-0">
                                <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-1">
                                   <span className="font-bold">{wood.name}</span>
                                   <span className="text-gray-400 text-[10px]">Ahşap</span>
                                </div>
                                <p className="text-gray-300 text-[10px] leading-relaxed text-left">{wood.desc}</p>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                             </div>

                             <span className="text-[10px] text-gray-500 font-medium text-center leading-tight">{wood.name}</span>
                          </div>
                       ))
                    )}
                 </div>
                 
                 <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400">
                       * Özel efektler (Eloksal, Kumlu boya) sadece ekstrüzyon modellerde mevcuttur.
                    </p>
                 </div>
              </div>

           </div>

        </div>
      </div>
    </section>
  );
};

// Helper Components
const Badge: React.FC<{ text: string }> = ({ text }) => (
  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium border border-gray-200">
    {text}
  </span>
);

const SpecItem: React.FC<{ label: string, value: string, sub?: string, highlight?: boolean, icon?: React.ReactNode }> = ({ label, value, sub, highlight, icon }) => (
  <div className={`flex flex-col pb-4 border-b border-gray-200 last:border-0 last:pb-0 ${highlight ? 'relative' : ''}`}>
     {highlight && <div className="absolute -left-4 top-1 w-1 h-8 bg-black rounded-r-full"></div>}
     <span className="text-xs text-gray-500 mb-1 flex items-center gap-1">
       {label} {icon}
     </span>
     <span className="text-xl font-bold text-black">{value}</span>
     {sub && <span className="text-xs text-gray-400 mt-0.5">{sub}</span>}
  </div>
);

const AdvantageCard: React.FC<{ title: string, desc: string }> = ({ title, desc }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
     <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-3">
        <Check size={16} />
     </div>
     <h4 className="font-bold text-sm mb-1">{title}</h4>
     <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default ShutterTechSpecs;