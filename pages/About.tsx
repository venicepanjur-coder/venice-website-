import React, { useEffect } from 'react';
import PageHeader from '../components/UI/PageHeader';
import Partners from '../components/Home/Partners';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Zap, 
  Award, 
  Wrench, 
  Wind, 
  ThermometerSun, 
  Smartphone, 
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const About: React.FC = () => {
  
  // JSON DATA
  const pageData = {
    "about_us_page": {
      "meta_data": {
        "title": "Hakkımızda | Venice Panjur",
        "description": "16 yıllık tecrübesiyle Venice Panjur; Somfy ve Serge Ferrari gibi dünya devlerinin çözüm ortaklığıyla, İzmir'de 4 mevsim konfor sunan akıllı gölgelendirme sistemleri üretir."
      },
      "hero_section": {
        "main_title": "Modern Yapılara Teknoloji ve Estetik Katıyoruz",
        "slogan": "Konforu, Estetiği ve Teknolojiyi Yaşam Alanlarınıza Taşıyoruz",
        "company_history": "Venice Panjur olarak, 16 yıllık sektör tecrübemiz ve uzman uygulama kadromuzla modern yapıların dış cephe ihtiyaçlarına yenilikçi çözümler sunuyoruz.",
        "mission_statement": "Amacımız sadece bir ürün sunmak değil; '4 Mevsim Konfor' mottosuyla enerji verimliliğini artıran, rüzgara meydan okuyan ve estetikten ödün vermeyen kalıcı yaşam alanları inşa etmektir."
      },
      "statistics": [
        { "id": "stat_1", "label": "Sektör Tecrübesi", "value": "16", "suffix": "Yıl" },
        { "id": "stat_2", "label": "Tamamlanan Proje", "value": "2000", "suffix": "+" },
        { "id": "stat_3", "label": "Mutlu Müşteri", "value": "500", "suffix": "+" },
        { "id": "stat_4", "label": "Ürün Çeşitliliği", "value": "50", "suffix": "+" }
      ],
      "technical_expertise": {
        "title": "Üstün Teknoloji ve Mühendislik",
        "features": [
          {
            "name": "Z-Lock (Fermuar) Teknolojisi",
            "description": "Zip Perde sistemlerimizde kumaşın kanallarda kilitli kalmasını sağlayarak 130 km/s rüzgar hızına kadar dayanıklılık sunuyoruz.",
            "icon": <Wind size={32} className="text-blue-600" />
          },
          {
            "name": "Isı ve Enerji Yönetimi",
            "description": "Serge Ferrari ve Copaco kumaş teknolojileriyle güneş ısısını %90'a kadar bloke ederek enerji tasarrufu sağlıyoruz.",
            "icon": <ThermometerSun size={32} className="text-orange-500" />
          },
          {
            "name": "Akıllı Ev Entegrasyonu",
            "description": "Somfy motor sistemleri ile Google Home ve Alexa uyumlu, sessiz ve engel tanıma özellikli otomasyon çözümleri sunuyoruz.",
            "icon": <Smartphone size={32} className="text-purple-600" />
          }
        ]
      },
      "core_values": [
        {
          "title": "Butik ve Elit Projeler",
          "description": "Her yapının mimarisine özel, RAL renk seçenekleri ve farklı kumaş geçirgenlikleri ile kişiselleştirilmiş çözümler.",
          "icon": <Award size={24} />
        },
        {
          "title": "Dünya Standartlarında Kalite",
          "description": "EN 13561 Rüzgar Sınıfı ve B1 Yangın Dayanımı standartlarına uygun sertifikalı ürün kullanımı.",
          "icon": <ShieldCheck size={24} />
        },
        {
          "title": "Satış Sonrası Teknik Güvence",
          "description": "Hızlı uygulama sürecimizi, montaj sonrası kesintisiz teknik destek ve servis garantisi ile taçlandırıyoruz.",
          "icon": <Wrench size={24} />
        }
      ],
      "services_summary": [
        {
          "service_name": "Zip Perde (Fermuarlı Perde)",
          "summary": "130 km/s rüzgara dayanıklı, haşere korumalı ve yüksek ısı yalıtımlı modern gölgelendirme.",
          "link": "/zip-perde"
        },
        {
          "service_name": "Otomatik Panjur Sistemleri",
          "summary": "Güvenlik ve ısı yalıtımını bir arada sunan, poliüretan dolgulu sessiz motorlu çözümler.",
          "link": "/otomatik-panjur"
        },
        {
          "service_name": "Otomatik Kepenk Sistemleri",
          "summary": "Ticari alanlar ve garajlar için üst düzey güvenlik sunan estetik ve dayanıklı sistemler.",
          "link": "/otomatik-panjur"
        }
      ],
      "contact_details": {
        "address": "Adalet Mah. Manas Bulv. No: 47/B Folkart Towers A Kule Kat: 26 D: 2601 Bayraklı – İZMİR",
        "phone_main": "0232 218 21 52",
        "phone_mobile": "0 534 523 14 91",
        "email": "info@venicepanjur.com"
      }
    }
  };

  useEffect(() => {
    document.title = pageData.about_us_page.meta_data.title;
  }, []);

  const { 
    hero_section, 
    statistics, 
    technical_expertise, 
    core_values, 
    services_summary, 
    contact_details 
  } = pageData.about_us_page;

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader 
        subtitle="Kurumsal"
        title={
          <>
            <span className="block font-bold">Teknoloji ve</span>
            <span className="block font-serif italic font-light text-gray-300">Estetik Katıyoruz.</span>
          </>
        }
        description={hero_section.slogan}
        bgText="HISTORY"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
      />

      {/* 1. HERO & HISTORY SECTION */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div>
               <h2 className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-3">Biz Kimiz?</h2>
               <h3 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
                 {hero_section.main_title}
               </h3>
               <p className="text-xl text-gray-500 font-light italic mb-8 border-l-4 border-black pl-6">
                 "{hero_section.slogan}"
               </p>
            </div>
            
            <div className="text-lg text-gray-700 font-light leading-relaxed space-y-6">
              <p>{hero_section.company_history}</p>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <span className="block text-xs font-bold uppercase text-gray-400 mb-2">Misyonumuz</span>
                <p className="font-medium text-black">
                  {hero_section.mission_statement}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="bg-[#1a1a1a] rounded-[2rem] p-10 text-white relative overflow-hidden h-full flex items-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
             
             <div className="grid grid-cols-2 gap-x-8 gap-y-16 relative z-10 w-full">
                {statistics.map((stat) => (
                  <div key={stat.id} className="flex flex-col border-l border-white/10 pl-6">
                     <span className="text-5xl md:text-6xl font-bold tracking-tight mb-2 flex items-baseline">
                        {stat.value}
                        <span className="text-2xl text-blue-400 ml-1">{stat.suffix}</span>
                     </span>
                     <span className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                        {stat.label}
                     </span>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* 2. TECHNICAL EXPERTISE SECTION */}
      <section className="bg-gray-50 py-24 px-6 md:px-16 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                 <Zap size={14} /> Uzmanlık
              </span>
              <h2 className="text-4xl font-bold text-black">{technical_expertise.title}</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technical_expertise.features.map((item, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-black">{item.name}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                       {item.description}
                    </p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. CORE VALUES & SERVICES */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Values List */}
            <div className="lg:col-span-7">
               <h3 className="text-3xl font-bold mb-10">Değerlerimiz</h3>
               <div className="space-y-10">
                  {core_values.map((val, idx) => (
                     <div key={idx} className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                           {val.icon}
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                           <p className="text-gray-600 leading-relaxed">{val.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Right: Services Summary Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
               <h3 className="text-3xl font-bold mb-6">Hizmetlerimiz</h3>
               {services_summary.map((service, idx) => (
                  <Link key={idx} to={service.link} className="block group">
                     <div className="bg-gray-50 group-hover:bg-[#1a1a1a] group-hover:text-white p-8 rounded-3xl transition-all duration-300 border border-gray-100 cursor-pointer relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="flex justify-between items-center mb-3">
                             <h4 className="font-bold text-lg">{service.service_name}</h4>
                             <ArrowRight size={20} className="text-gray-300 group-hover:text-white transform group-hover:translate-x-2 transition-all" />
                          </div>
                          <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed pr-8">
                             {service.summary}
                          </p>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>

         </div>
      </section>

      {/* 4. CONTACT STRIP */}
      <section className="bg-[#111] text-white py-20 px-6 border-t border-white/10">
         <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold">İletişim Bilgileri</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
               <div className="flex items-start gap-4 bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                     <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Adres</span>
                     <p className="text-base leading-relaxed text-gray-200">{contact_details.address}</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Phone className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                     <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Telefonlar</span>
                     <div className="flex flex-col gap-1">
                        <a href={`tel:${contact_details.phone_main}`} className="text-lg font-bold hover:text-white text-gray-100">
                          {contact_details.phone_main}
                        </a>
                        <a href={`tel:${contact_details.phone_mobile}`} className="text-base text-gray-400 hover:text-white">
                          {contact_details.phone_mobile}
                        </a>
                     </div>
                  </div>
               </div>
               <div className="flex items-start gap-4 bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Mail className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                     <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">E-Posta</span>
                     <a href={`mailto:${contact_details.email}`} className="text-lg font-medium text-gray-100 hover:text-blue-400 transition-colors">
                       {contact_details.email}
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Partners />
    </div>
  );
};

export default About;