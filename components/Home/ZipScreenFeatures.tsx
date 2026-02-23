import React from 'react';
import { Wind, Sun, ShieldCheck, Eye, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZipScreenFeatures: React.FC = () => {
  return (
    <section className="bg-[#f9f9f9] text-black py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Visual Composition (Same style as ShutterFeatures) */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2664&auto=format&fit=crop" 
                alt="Modern Zip Perde Sistemi" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 max-w-[200px] shadow-lg border border-white/20 hidden md:block">
                 <div className="text-4xl font-bold mb-2">140<span className="text-lg text-gray-600 font-medium ml-1">km/s</span></div>
                 <div className="text-xs text-gray-500 uppercase tracking-wide">Rüzgar Dayanımı</div>
              </div>
            </div>
            
            {/* Decorative Background Box behind image (Matching ShutterFeatures style) */}
            <div className="absolute -top-12 -left-12 w-full h-full border-2 border-gray-200 z-0 hidden lg:block"></div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="mb-8">
               <div className="flex items-center gap-3 mb-4">
                 <span className="w-12 h-[1px] bg-black"></span>
                 <span className="text-sm font-medium tracking-widest uppercase text-gray-500">Dış Cephe Çözümleri</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                 Zip Perde <br />
                 <span className="font-serif italic font-light text-gray-400">Teknolojisi.</span>
               </h2>
               <p className="text-lg text-gray-600 leading-relaxed mb-8">
                 Fermuarlı özel yan kanal teknolojisi sayesinde rüzgara meydan okuyan, sineklik işlevi gören ve güneş ısısını %90'a kadar kıran estetik bir zırh. Modern mimarinin vazgeçilmez dış cephe elemanı.
               </p>
            </div>

            {/* Feature List Grid (Matching ShutterFeatures Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              
              {/* Feature 1 */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-2">
                  <Wind size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-bold">Rüzgar Kilidi</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Patentli fermuar sistemi (Z-Lock) sayesinde kumaş kanaldan çıkmaz, fırtınada bile deforme olmaz.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-2">
                  <Sun size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-bold">Isı Kontrolü</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Güneş ışınlarını cam yüzeye temas etmeden durdurarak iç mekanın ısınmasını engeller, klima tasarrufu sağlar.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-2">
                  <ShieldCheck size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-bold">Tam Koruma</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Kenar boşluksuz yapısı sayesinde sinek ve haşerelere karşı %100 bariyer oluşturur.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-2">
                  <Eye size={24} className="text-black" />
                </div>
                <h4 className="text-lg font-bold">Görsel Konfor</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  İçeriden dışarıyı net bir şekilde görebilirken, gündüz dışarıdan içerinin görünmesini engeller (Mahremiyet).
                </p>
              </div>

            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
               <ul className="flex flex-wrap gap-6 text-sm font-medium text-gray-500">
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-black"/> Serge Ferrari Kumaş</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-black"/> Somfy Motor</li>
                 <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-black"/> 5 Yıl Garanti</li>
               </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ZipScreenFeatures;