import React from 'react';
import ZipFeaturesBento from '../components/ZipScreen/ZipFeaturesBento';
import ZipUsageAreas from '../components/ZipScreen/ZipUsageAreas';
import ZipFabrics from '../components/ZipScreen/ZipFabrics';
import PageHeader from '../components/UI/PageHeader';

const ZipScreen: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Replaced Inline Hero with PageHeader */}
      <PageHeader 
        subtitle="Dış Cephe Otomasyonu"
        title={
          <>
            <span className="block font-bold">Evinizin Yeni</span>
            <span className="block font-serif italic font-light text-gray-200">Koruma Kalkanı.</span>
          </>
        }
        description="Fermuarlı yapısıyla rüzgara karşı direnç gösteren, sineklik ihtiyacını ortadan kaldıran ve enerji giderlerinizi düşüren akıllı gölgelendirme çözümü."
        bgText="ZIP SCREEN"
        image="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop"
      />

      {/* --- BENTO BOX FEATURES SECTION --- */}
      <ZipFeaturesBento />

      {/* --- USAGE AREAS SECTION --- */}
      <ZipUsageAreas />

      {/* --- FABRICS & COLORS SECTION --- */}
      <ZipFabrics />

    </div>
  );
};

export default ZipScreen;