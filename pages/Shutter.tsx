import React from 'react';
import ShutterFeaturesBento from '../components/Shutter/ShutterFeaturesBento';
import ShutterUsageAreas from '../components/Shutter/ShutterUsageAreas';
import ShutterTechSpecs from '../components/Shutter/ShutterTechSpecs';
import PageHeader from '../components/UI/PageHeader';

const Shutter: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-black selection:text-white">
      
      {/* Replaced Inline Hero with PageHeader */}
      <PageHeader 
        subtitle="Otomasyon Sistemleri"
        title={
          <>
            <span className="block font-bold">Konforunuzu</span>
            <span className="block font-serif italic font-light text-gray-200">Otomatize Edin.</span>
          </>
        }
        description="Isı yalıtımlı alüminyum lameller ve akıllı motor sistemleriyle kışın sıcak, yazın serin ve her zaman güvende kalın."
        bgText="SHUTTER"
        image="https://images.unsplash.com/photo-1600596542815-6007b049d544?q=80&w=2670&auto=format&fit=crop"
      />

      {/* --- INTRO / PHILOSOPHY SECTION --- */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-[1px] bg-black"></div>
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Mühendislik & Tasarım</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-8 text-black">
                    Sadece Panjur Değil, <br />
                    <span className="text-gray-400 font-serif italic font-light">Evinizin Zırhı.</span>
                 </h2>
                 <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                    Otomatik panjur sistemlerimiz, sıradan bir örtücülükten çok daha fazlasını sunar. Poliüretan dolgulu alüminyum lamellerimiz, dış dünyayla aranızda aşılamaz bir bariyer oluşturur. Kışın soğuğu, yazın sıcağı, gece gürültüyü ve istenmeyen bakışları dışarıda bırakın.
                 </p>
                 <div className="flex items-center gap-8">
                    <div className="flex flex-col">
                       <span className="text-3xl font-bold text-black">35%</span>
                       <span className="text-xs text-gray-500 uppercase tracking-wide">Enerji Tasarrufu</span>
                    </div>
                    <div className="w-[1px] h-10 bg-gray-200"></div>
                    <div className="flex flex-col">
                       <span className="text-3xl font-bold text-black">-10dB</span>
                       <span className="text-xs text-gray-500 uppercase tracking-wide">Ses İzolasyonu</span>
                    </div>
                 </div>
              </div>
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden group">
                 <img 
                   src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
                   alt="Panjur Detay" 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
           </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES SECTION --- */}
      <div className="bg-[#f8f8f8]">
         <ShutterFeaturesBento />
      </div>

      {/* --- USAGE AREAS SECTION --- */}
      <ShutterUsageAreas />

      {/* --- TECH SPECS & COLORS --- */}
      <ShutterTechSpecs />
    </div>
  );
};

export default Shutter;