import configData from './data/site-config.json';

// --- AUTO_IMPORT_MARKER ---
// @REPLACE_IMPORT_HERO
// @REPLACE_IMPORT_FEATURE
// @REPLACE_IMPORT_GALLERY
// @REPLACE_IMPORT_CTA
// @REPLACE_IMPORT_FOOTER

export default function App() {
  console.log(configData);
  
  return (
    <div className="w-full max-w-[1300px] mx-auto">
      {/* @REPLACE_COMPONENT_HERO */}
      
      {/* @REPLACE_COMPONENT_FEATURE */}
      
      {/* @REPLACE_COMPONENT_GALLERY */}
      
      {/* @REPLACE_COMPONENT_CTA */}
      
      {/* @REPLACE_COMPONENT_FOOTER */}
      
    </div>
  );
}