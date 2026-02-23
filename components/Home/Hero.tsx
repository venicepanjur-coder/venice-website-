import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 font-sans selection:bg-white selection:text-black">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Venice Architectural Design" 
          className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${loaded ? 'scale-100' : 'scale-110'}`}
        />
        {/* Soft overlay to ensure text readability but keep image bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
      </div>

      {/* 2. GIANT BACKGROUND TYPOGRAPHY (The "AXIOMA" effect) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 overflow-hidden">
        <h1 className="text-[18vw] font-bold text-white leading-none tracking-widest opacity-10 mix-blend-overlay select-none blur-sm transform -translate-y-10">
          VENICE
        </h1>
      </div>

      {/* 3. SOCIAL ICONS (Top Right - Matching Reference) */}
      <div className="absolute top-32 md:top-10 right-6 md:right-32 z-40 flex gap-4 animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0">
        <SocialButton icon={<Facebook size={18} />} />
        <SocialButton icon={<Instagram size={18} />} />
        <SocialButton icon={<Twitter size={18} />} />
      </div>

      {/* 4. MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-12 md:pb-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          
          {/* LEFT SIDE: Headline & CTA */}
          <div className="md:col-span-7 lg:col-span-6 relative">
             
             {/* Small Top Text */}
             <div className="mb-6 max-w-xs text-sm text-gray-200 font-light tracking-wide opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
               Estetik ve fonksiyonelliği birleştiren tasarımlar. <br/>
               Geleceğin yaşam alanlarını kurguluyoruz.
             </div>

             {/* Main Headline */}
             <h2 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-10 opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
               <span className="font-serif italic font-light block mb-2 text-gray-300">Tasarıma</span>
               <span className="font-bold tracking-tight">Daha Yakın.</span>
             </h2>

             {/* Pill Button CTA (Matching Reference) */}
             <div className="opacity-0 animate-[slideUp_0.8s_ease-out_0.6s_forwards]">
               <Link to="/iletisim">
                 <button className="group relative flex items-center bg-white rounded-full py-3 pl-8 pr-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105">
                    <span className="text-black font-bold text-lg mr-6">Teklif Alın</span>
                    <span className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white transform group-hover:rotate-45 transition-transform duration-300">
                       <ArrowUpRight size={20} />
                    </span>
                 </button>
               </Link>
             </div>
          </div>

          {/* RIGHT SIDE: Floating Glass Cards (Matching Reference) */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col items-end gap-6 pb-4">
             
             {/* Card 1: Years */}
             <div className="w-full max-w-[280px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl opacity-0 animate-[slideLeft_0.8s_ease-out_0.8s_forwards] hover:bg-white/20 transition-colors cursor-default">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">16+</div>
                <div className="text-sm text-gray-300 font-light leading-snug">
                   Sektörde geçen<br/>
                   mükemmellik ve inovasyon yılı.
                </div>
             </div>

             {/* Card 2: Projects */}
             <div className="w-full max-w-[280px] bg-gradient-to-br from-white/10 to-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl opacity-0 animate-[slideLeft_0.8s_ease-out_1s_forwards] hover:border-white/30 transition-colors cursor-default">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">2000+</div>
                <div className="text-sm text-gray-300 font-light leading-snug">
                   Dünya standartlarında<br/>
                   tamamlanan başarılı proje.
                </div>
             </div>

          </div>

        </div>

      </div>

      {/* Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

// Helper for Social Icons (Glassy Circle)
const SocialButton: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300">
    {icon}
  </button>
);

export default Hero;