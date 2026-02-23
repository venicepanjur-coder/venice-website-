import React from 'react';
import { Shield, Thermometer, Smartphone, Moon, CheckCircle2 } from 'lucide-react';

const ShutterFeatures: React.FC = () => {
  return (
    <section className="bg-[#f5f5f7] text-black py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Visual Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
                alt="Modern Otomatik Panjur" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 max-w-[200px] shadow-lg border border-white/20 hidden md:block">
                 <div className="text-4xl font-bold mb-2">35%</div>
                 <div className="text-xs text-gray-500 uppercase tracking-wide">Enerji Tasarrufu Sağlar</div>
              </div>
            </div>
            
            {/* Decorative Background Box behind image */}
            <div className="absolute -top-12 -left-12 w-full h-full border-2 border-gray-200 z-0 hidden lg:block"></div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="mb-8">
               <div className="flex items-center gap-3 mb-4">
                 <span className="w-12 h-[1px] bg-black"></span>
                 <span className="text-sm font-medium tracking-widest uppercase text-gray-500">Güvenlik ve Konfor</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                 Otomatik Panjur <br />
                 <span className="font-serif italic font-light text-gray-400">Sistemleri.</span>
               </h2>
               <p className="text-lg text-gray-600 leading-relaxed mb-8">
                 Evinizin güvenliğini artırırken enerji maliyetlerinizi düşüren akıllı panjur çözümleri. Poliüretan dolgulu lameller sayesinde maksimum ısı ve ses yalıtımı sağlarken, hırsızlığa karşı caydırıcı bir güç oluşturur.
               </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              
              {/* Feature 1 */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-2">
                  <Shield size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-bold">Üstün Güvenlik</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Motorlu kilitleme mekanizması ve dayanıklı alüminyum yapısı ile dışarıdan müdahalelere karşı tam koruma sağlar.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-2">
                  <Thermometer size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-bold">Isı Yalıtımı</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Poliüretan dolgulu lameller, kışın ısı kaybını önler, yazın ise iç mekanın serin kalmasına yardımcı olur.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-2">
                  <Smartphone size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-bold">Akıllı Kontrol</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Uzaktan kumanda, buton veya mobil uygulama ile panjurlarınızı dünyanın her yerinden kontrol edebilirsiniz.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-2">
                  <Moon size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-bold">Tam Karartma</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  İstediğiniz an gün ışığını tamamen keserek uyku kalitenizi artırır veya ev sinema ortamı yaratır.
                </p>
              </div>

            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
               <ul className="flex flex-wrap gap-6 text-sm font-medium text-gray-500">
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-black"/> Uzun Ömürlü Boya</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-black"/> Sessiz Çalışma</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-black"/> 5 Yıl Garanti</li>
               </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShutterFeatures;