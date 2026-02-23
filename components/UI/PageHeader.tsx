import React, { useState, useEffect } from 'react';

interface PageHeaderProps {
  title: React.ReactNode; // Changed to Node to allow spans for font mixing
  subtitle?: string;
  description?: string;
  image: string;
  bgText?: string; // The giant background text (e.g., "ABOUT")
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description, image, bgText }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-gray-900 font-sans selection:bg-white selection:text-black">
      
      {/* 1. BACKGROUND IMAGE with Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="Header Background" 
          className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${loaded ? 'scale-100' : 'scale-110'}`}
        />
        {/* Gradients matching Home Hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* 2. GIANT BACKGROUND TYPOGRAPHY */}
      {bgText && (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 overflow-hidden">
          <h1 className="text-[18vw] font-bold text-white leading-none tracking-widest opacity-5 mix-blend-overlay select-none blur-sm transform -translate-y-10">
            {bgText}
          </h1>
        </div>
      )}

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32">
        
        <div className="max-w-4xl">
           
           {/* Subtitle / Top Label */}
           {subtitle && (
             <div className="mb-6 flex items-center gap-3 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
               <div className="h-[1px] w-12 bg-white/60"></div>
               <span className="text-sm md:text-base font-medium tracking-widest uppercase text-gray-300">
                 {subtitle}
               </span>
             </div>
           )}

           {/* Main Headline */}
           <div className="text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight mb-8 opacity-0 animate-[slideUp_1s_ease-out_0.2s_forwards]">
             {title}
           </div>

           {/* Description */}
           {description && (
             <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-0 opacity-0 animate-[slideUp_1s_ease-out_0.4s_forwards]">
               {description}
             </p>
           )}
        </div>

      </div>

      {/* 4. BOTTOM CURVE DIVIDER (Matching ZipScreen style for smooth transition) */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 pointer-events-none z-20">
         <svg className="w-full h-full fill-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,100 L1440,100 L1440,0 C1100,60 340,60 0,0 Z" />
         </svg>
      </div>

      {/* Styles for Animations (Scoped to this component) */}
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PageHeader;