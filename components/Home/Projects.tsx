import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      category: 'INTERIOR',
      author: 'MİMAR SİNAN EKİBİ',
      date: '12 OCAK 2025',
      title: 'Yalıkavak Villa: Modern Zip Perde Entegrasyonu',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
      aspect: 'aspect-[3/4]', // Tall
    },
    {
      id: 2,
      category: 'MODERN',
      author: 'TEKNİK OFİS',
      date: '28 ŞUBAT 2025',
      title: 'Vadistanbul Plaza: Cephe Otomasyon Çözümleri',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop',
      aspect: 'aspect-[4/3]', // Wider
    },
    {
      id: 3,
      category: 'EXTERIOR',
      author: 'PROJE YÖNETİMİ',
      date: '15 MART 2025',
      title: 'Acarkent Konut: Gizli Panjur Sistemleri',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      aspect: 'aspect-[3/5]', // Narrow/Tall
    }
  ];

  return (
    <section className="bg-white text-black py-24 md:py-32 px-6 relative z-10 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
            Son Tamamlanan <br/>
            <span className="text-gray-300 font-light">Projelerimiz</span>
          </h2>
          
          <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Tümünü İncele
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col gap-6">
              
              {/* Image Container */}
              <div className={`relative w-full overflow-hidden rounded-[2rem] ${project.aspect}`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Tag Badge */}
                <span className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                {/* Meta Data */}
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wide">
                  <span>{project.author}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{project.date}</span>
                </div>

                {/* Title & Action */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-2xl md:text-3xl font-medium leading-tight group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <button className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transform group-hover:rotate-[-45deg] transition-transform duration-300">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;