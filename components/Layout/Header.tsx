import React from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Zip Perde', href: '/zip-perde' },
    { label: 'Otomatik Panjur', href: '/otomatik-panjur' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 pt-6 md:pt-8 pointer-events-none">
      {/* Brand Logo - Pointer events auto to make clickable */}
      <div className="z-50 pointer-events-auto">
        <Link to="/" className="group flex flex-col">
            <span className="text-3xl font-bold tracking-tighter text-white leading-none">VENICE</span>
            <div className="h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>
        </Link>
      </div>

      {/* Center Navigation - Floating Pill Style (Cleaner than the SVG shape for this modern look) */}
      <nav className="hidden md:flex pointer-events-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 gap-8 shadow-lg">
           {navItems.map((item) => {
             const isActive = location.pathname === item.href;
             return (
               <Link 
                 key={item.label}
                 to={item.href} 
                 className={`text-sm transition-colors relative group ${isActive ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
               >
                 {item.label}
                 {/* Hover Dot */}
                 <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 transition-opacity ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}`}></span>
               </Link>
             );
           })}
      </nav>

      {/* Mobile Menu Icon (Visible only on small screens) */}
      <div className="md:hidden z-50 bg-white/10 backdrop-blur-md text-white p-3 rounded-full pointer-events-auto border border-white/20">
          <Menu size={24} />
      </div>

      {/* Right CTA Button - Matching Hero Style */}
      <div className="z-50 hidden md:block pointer-events-auto">
        <Link to="/iletisim">
          <button className="flex items-center gap-3 bg-white rounded-full pl-5 pr-1.5 py-1.5 hover:bg-gray-100 transition-all group shadow-lg shadow-black/10">
            <span className="text-sm font-bold text-black">Teklif Alın</span>
            <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;