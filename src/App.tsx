import configData from './data/site-config.json';

// --- AUTO_IMPORT_MARKER ---
import Hero03 from './components/Hero/hero_03';
import Feature05 from './components/Features/feature_05';
import Gallery04 from './components/Gallery/gallery_04';
import Cta02 from './components/CTA/cta_02';
import Footer02 from './components/Footer/footer_02';

export default function App() {
  return (
    <div className="w-full max-w-[1300px] mx-auto">
      {/* --- SLOT_HERO --- */}
      <Hero03 config={configData} />
      
      {/* --- SLOT_FEATURE --- */}
      <Feature05 config={configData} />
      
      {/* --- SLOT_GALLERY --- */}
      <Gallery04 config={configData} />
      
      {/* --- SLOT_CTA --- */}
      <Cta02 config={configData} />
      
      {/* --- SLOT_FOOTER --- */}
      <Footer02 config={configData} />
    </div>
  );
}