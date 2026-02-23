import React, { useEffect } from 'react';
import PageHeader from '../components/UI/PageHeader';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Ruler, 
  Wind, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink,
  Instagram
} from 'lucide-react';

const Contact: React.FC = () => {
  
  // JSON Data Implementation
  const data = {
    meta: {
      title: "İletişim & Ücretsiz Keşif | Venice Panjur - İzmir",
    },
    hero: {
      title: "Projeleriniz İçin Bizimle İletişime Geçin",
      subtitle: "Zip Perde ve Panjur Sistemlerinde Milimetrik Hassasiyet",
      intro: "Konforlu yaşam alanları oluşturmak için bir mesaj uzağınızdayız. Ücretsiz ölçü, keşif ve fiyat teklifi hizmetimizden yararlanın.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
    },
    cards: [
      {
        id: "address",
        title: "Ziyaret Edin (Showroom & Ofis)",
        icon: <MapPin size={24} />,
        lines: [
          "Folkart Towers A Kule",
          "Adalet Mah. Manas Bulv. No: 47/B Kat: 26 D: 2601 Bayraklı – İZMİR"
        ],
        action: { label: "Yol Tarifi Al", link: "https://www.google.com/maps/search/?api=1&query=Venice+Panjur+Folkart+Towers" }
      },
      {
        id: "phone",
        title: "Bizi Arayın",
        icon: <Phone size={24} />,
        lines: [
          "Sabit: 0232 218 21 52",
          "Mobil / WhatsApp: 0534 523 14 91"
        ],
        sub: "Pzt-Cmt: 09:00 - 19:00",
        action: { label: "Hemen Ara", link: "tel:+902322182152" }
      },
      {
        id: "email",
        title: "E-Posta Gönderin",
        icon: <Mail size={24} />,
        lines: ["info@venicepanjur.com"],
        sub: "Teknik şartname ve proje dosyalarınız için.",
        action: { label: "Mail Gönder", link: "mailto:info@venicepanjur.com" }
      }
    ],
    values: [
      {
        title: "Hassas Montaj (Perfect Alignment)",
        desc: "Zip perde raylarında sürtünmeyi önlemek için Z-Serisi sistemlerde milimetrik gönye ve düşük toleranslı montaj sağlıyoruz.",
        icon: <Ruler size={20} />
      },
      {
        title: "Rüzgar Dayanım Analizi",
        desc: "Cephenizin rüzgar sınıfını belirleyerek, fırtınada perdenizi koruyacak doğru sabitleme elemanlarını ve rüzgar sensörlerini kullanıyoruz.",
        icon: <Wind size={20} />
      },
      {
        title: "Garantili Hizmet",
        desc: "Tüm Zip Perde ve Panjur uygulamalarımızda 2 yıl tam montaj ve ürün garantisi sunuyoruz.",
        icon: <ShieldCheck size={20} />
      }
    ],
    form: {
      products: [
        "Zip Perde Sistemleri (Dış Cephe)",
        "Otomatik Panjur (Konut Tipi)",
        "Garaj Kapısı ve Kepenk Sistemleri",
        "Yedek Parça ve Teknik Servis"
      ],
      services: ["Yeni Proje / Montaj", "Mevcut Sistem Tamiri", "Ücretsiz Keşif Talebi"]
    }
  };

  useEffect(() => {
    document.title = data.meta.title;
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        subtitle="Bize Ulaşın"
        title={
          <>
             <span className="block font-bold">Projeleriniz İçin</span>
             <span className="block font-serif italic font-light text-gray-300">İletişime Geçin.</span>
          </>
        }
        description={data.hero.intro}
        bgText="CONTACT"
        image={data.hero.image}
      />

      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        
        {/* Intro Text (Removed duplicate header since PageHeader now covers it) */}

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {data.cards.map((card) => (
             <div key={card.id} className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black shadow-sm mb-6 border border-gray-100">
                   {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <div className="space-y-1 mb-6 text-gray-600 flex-grow">
                   {card.lines.map((line, idx) => (
                     <p key={idx}>{line}</p>
                   ))}
                   {card.sub && <p className="text-sm text-gray-400 mt-2 pt-2 border-t border-gray-200">{card.sub}</p>}
                </div>
                <a 
                  href={card.action.link} 
                  target={card.id === 'address' ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black hover:text-gray-600 transition-colors mt-auto"
                >
                   {card.action.label} <ExternalLink size={14} />
                </a>
             </div>
           ))}
        </div>

        {/* Form & Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           
           {/* Left: Form (Span 7) */}
           <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-xl shadow-gray-100/50">
                 <h3 className="text-2xl font-bold mb-2">Hızlı Teklif & Keşif Formu</h3>
                 <p className="text-gray-500 mb-8 text-sm">Aşağıdaki formu doldurun, uzman ekibimiz en geç 24 saat içinde size dönüş yapsın.</p>
                 
                 <form className="space-y-6">
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Adınız Soyadınız</label>
                          <input type="text" className="bg-gray-50 border border-gray-200 rounded-lg p-4 outline-none focus:border-black focus:bg-white transition-all" placeholder="Adınız ve Soyadınız" required />
                       </div>
                       <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Telefon</label>
                          <input type="tel" className="bg-gray-50 border border-gray-200 rounded-lg p-4 outline-none focus:border-black focus:bg-white transition-all" placeholder="05XX XXX XX XX" required />
                       </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">E-Posta</label>
                       <input type="email" className="bg-gray-50 border border-gray-200 rounded-lg p-4 outline-none focus:border-black focus:bg-white transition-all" placeholder="ornek@mail.com" required />
                    </div>

                    {/* Product Dropdown */}
                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">İlgilendiğiniz Ürün</label>
                       <div className="relative">
                         <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 outline-none focus:border-black focus:bg-white transition-all appearance-none cursor-pointer">
                            {data.form.products.map((p, i) => <option key={i}>{p}</option>)}
                         </select>
                         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                       </div>
                    </div>

                    {/* Service Type Radio */}
                    <div className="flex flex-col gap-3">
                       <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Hizmet Türü</label>
                       <div className="flex flex-wrap gap-4">
                          {data.form.services.map((service, idx) => (
                             <label key={idx} className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-colors">
                                <input type="radio" name="service_type" className="accent-black w-4 h-4" defaultChecked={idx===0} />
                                <span className="text-sm font-medium">{service}</span>
                             </label>
                          ))}
                       </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Mesajınız / Proje Detayları</label>
                       <textarea rows={4} className="bg-gray-50 border border-gray-200 rounded-lg p-4 outline-none focus:border-black focus:bg-white transition-all resize-none" placeholder="Ölçüler veya talebiniz hakkında kısa bilgi..." required></textarea>
                    </div>

                    {/* KVKK Checkbox */}
                    <div className="flex items-start gap-3 pt-2">
                       <input type="checkbox" id="kvkk" className="mt-1 accent-black w-5 h-5" required />
                       <label htmlFor="kvkk" className="text-sm text-gray-500 leading-snug cursor-pointer select-none">
                          KVKK ve Aydınlatma Metnini okudum, onaylıyorum.
                       </label>
                    </div>

                    <button type="button" className="w-full bg-black text-white font-bold py-5 rounded-xl hover:bg-gray-800 transition-colors text-lg shadow-lg shadow-black/20">
                       Teklif İste
                    </button>
                    <p className="text-xs text-gray-400 text-center mt-2">Bu site reCAPTCHA ile korunmaktadır.</p>
                 </form>
              </div>
           </div>

           {/* Right: Values & Map (Span 5) */}
           <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Value Props */}
              <div className="bg-[#1a1a1a] text-white rounded-3xl p-8 md:p-10">
                 <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                    Neden Venice Panjur?
                 </h3>
                 <div className="space-y-8">
                    {data.values.map((item, idx) => (
                       <div key={idx} className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                             {item.icon}
                          </div>
                          <div>
                             <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                             <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Static Map Image / Link */}
              <div className="relative h-[300px] rounded-3xl overflow-hidden group shadow-lg border border-gray-100">
                 <img 
                   src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                   alt="Folkart Towers Location" 
                   className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Venice+Panjur+Folkart+Towers" 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                       <MapPin size={18} /> Haritada Görüntüle
                    </a>
                 </div>
              </div>

              {/* Maintenance Note */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex gap-4">
                 <div className="mt-1 text-orange-600 flex-shrink-0">
                    <AlertTriangle size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-orange-800 text-sm mb-1">Bakım ve Teknik Servis Uyarısı</h4>
                    <p className="text-orange-700/80 text-xs leading-relaxed">
                      Sistemlerinizin uzun ömürlü olması için düzenli temizlik (polen ve tuz arındırma) önemlidir. Kumaş temizliğinde asla klor kullanmayınız. Motor limit ayarları için profesyonel servis talep edebilirsiniz.
                    </p>
                 </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                     <Instagram size={20} />
                  </div>
                  <div>
                     <span className="block text-xs font-bold uppercase text-gray-500">Bizi Takip Edin</span>
                     <span className="font-bold text-black">@venicepanjur</span>
                  </div>
              </div>

           </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;