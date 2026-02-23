import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-8 pb-8 px-4 md:px-8 font-sans">
      
      {/* 1. LARGE CTA BANNER (Matching the Reference Image) */}
      <div className="relative w-full max-w-[1800px] mx-auto h-[450px] md:h-[500px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden mb-20 group">
        
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=2676&auto=format&fit=crop" 
          alt="Abstract Architecture" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between px-8 md:px-24 gap-10">
          
          {/* Left: Text */}
          <div className="max-w-xl text-center md:text-left text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
              Sınırları <br/>
              Kaldırın.
            </h2>
            <p className="text-lg text-gray-200 font-light max-w-sm mx-auto md:mx-0">
              Eviniz için en doğru gölgelendirme çözümünü bulun, dakikalar içinde teklif alın.
            </p>
          </div>

          {/* Right: Glass Card (Input & Button) */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-[2rem] flex flex-col md:flex-row items-center gap-3 w-full max-w-lg shadow-2xl">
            
            {/* Input Field Area */}
            <div className="bg-white/90 rounded-2xl flex-grow w-full h-14 md:h-16 px-6 flex items-center">
               <span className="text-gray-400 mr-3">
                 <Globe size={20} />
               </span>
               <input 
                 type="email" 
                 placeholder="E-posta adresiniz..." 
                 className="bg-transparent border-none outline-none text-black placeholder-gray-500 w-full font-medium"
               />
            </div>

            {/* Action Button */}
            <button className="bg-[#111] text-white h-14 md:h-16 px-8 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors w-full md:w-auto shadow-lg">
              <span>Gönder</span>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                 <ArrowRight size={16} />
              </div>
            </button>

          </div>

        </div>
      </div>

      {/* 2. LINKS SECTION (Clean White Background) */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-serif font-bold italic text-xl">
                 V
               </div>
               <span className="text-2xl font-bold tracking-tight text-black">Venice.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Venice Panjur, modern mimari için dünyanın önde gelen dış cephe otomasyon sistemleri üreticisidir.
            </p>
          </div>

          {/* Spacer */}
          <div className="md:col-span-1"></div>

          {/* Links Columns */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Column 1: Products */}
            <div className="flex flex-col gap-4">
               <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ürünler</h4>
               <FooterLink to="/zip-perde">Zip Perde</FooterLink>
               <FooterLink to="/otomatik-panjur">Otomatik Panjur</FooterLink>
               <FooterLink to="#">Pergola</FooterLink>
               <FooterLink to="#">Tavan Sistemleri</FooterLink>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col gap-4">
               <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Kurumsal</h4>
               <FooterLink to="/hakkimizda">Hakkımızda</FooterLink>
               <FooterLink to="#">Kariyer</FooterLink>
               <FooterLink to="#">Basın</FooterLink>
               <FooterLink to="/iletisim">İletişim</FooterLink>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col gap-4">
               <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Kaynaklar</h4>
               <FooterLink to="#">Destek</FooterLink>
               <FooterLink to="#">Yardım Merkezi</FooterLink>
               <FooterLink to="#">Yasal</FooterLink>
               <FooterLink to="#">Politikalar</FooterLink>
            </div>

             {/* Column 4: Partners (Optional) */}
             <div className="flex flex-col gap-4">
               <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Partner</h4>
               <FooterLink to="#">Mimarlar</FooterLink>
               <FooterLink to="#">Bayiler</FooterLink>
               <FooterLink to="#">Kurumsal</FooterLink>
            </div>

          </div>

          {/* Social Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
             <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bizi Takip Edin</h4>
             <div className="flex gap-4">
                <SocialIcon icon={<Instagram size={18}/>} />
                <SocialIcon icon={<Linkedin size={18}/>} />
                <SocialIcon icon={<Facebook size={18}/>} />
                <SocialIcon icon={<Twitter size={18}/>} />
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2025 Venice Panjur Inc. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-black transition-colors">Gizlilik Politikası</Link>
            <span>&</span>
            <Link to="#" className="hover:text-black transition-colors">Kullanım Şartları</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-sm text-gray-600 hover:text-black font-medium transition-colors">
    {children}
  </Link>
);

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
    {icon}
  </a>
);

export default Footer;