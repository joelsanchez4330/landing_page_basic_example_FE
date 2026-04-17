import React, { useState, useEffect } from 'react';

interface HeroProps {
  config: {
    theme: { primaryColor: string; secondaryColor: string; fontFamily: string; borderRadius: string; };
    company: { name: string; logoUrl: string; };
    siteConfig: {
      hero: {
        title: string;
        highlightWord?: string;
        subtitle?: string;
        cta01Text?: string;
        cta02Text?: string;
        imageUrl?: string;
        gallery: string[]; // This is the optional part causing the error
        sizes?: { titleFont?: string; subtitleFont?: string; buttonPadding?: string; buttonFontSize?: string; imageHeight?: string; imageMaxWidth?: string; };
      };
    };
  };
}

const hero_03: React.FC<HeroProps> = ({ config }) => {
  const { theme, siteConfig } = config;
  const hero = siteConfig?.hero;
  
  // FIX 1: We extract sizes and gallery, but gallery might be undefined
  const sizes = hero?.sizes;
  const gallery = hero?.gallery ?? []; // If gallery is missing, use empty array []

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // FIX 2: Added safety checks for gallery.length
  const nextSlide = () => {
    if (gallery.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    if (gallery.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  // Auto-play Effect
  useEffect(() => {
    if (gallery.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gallery.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, gallery.length]);

  if (!hero) return null;

  return (
    <main className="w-full flex flex-col min-h-screen">
      <style>{`
        .react-fade-anim {
          animation: fadeIn 0.4s ease-in-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0.8; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      
      <header className="w-full bg-white shadow-sm flex items-center justify-center p-6 border-b border-gray-100 relative z-50">
        <div style={{ backgroundColor: theme.primaryColor }} className="flex items-center justify-center w-14 h-14 rounded-full text-white font-bold text-xl shadow-md">
          {config.company?.name?.substring(0,2).toUpperCase() || "GH"}
        </div>
      </header>

      <section className="flex-grow flex items-center justify-center py-16 px-4 md:px-12 lg:px-24">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div style={{ height: sizes.imageHeight }} className="relative w-full lg:col-span-7 lg:order-1 order-2 overflow-hidden px-8 md:px-12 flex items-center justify-center group">
            <div className="relative w-full h-full flex items-center gap-4 justify-center">
              
              <div 
                style={{ borderRadius: theme.borderRadius, maxWidth: sizes.imageMaxWidth }}
                className="relative w-[85%] h-full overflow-hidden shadow-2xl border-4 border-white z-10 bg-gray-200"
              >
                <img 
                  key={gallery[currentIndex]} 
                  src={gallery[currentIndex]} 
                  alt="Active Slide" 
                  className="absolute inset-0 w-full h-full object-cover react-fade-anim" 
                />
              </div>

              <div className="absolute left-[-20%] w-[45%] h-[85%] opacity-25 rounded-xl overflow-hidden transform scale-95 z-0 cursor-pointer hidden lg:block" onClick={prevSlide}>
                <img src={gallery[(currentIndex - 1 + gallery.length) % gallery.length]} className="w-full h-full object-cover" alt="prev" />
              </div>
              <div className="absolute right-[-20%] w-[45%] h-[85%] opacity-25 rounded-xl overflow-hidden transform scale-95 z-0 cursor-pointer hidden lg:block" onClick={nextSlide}>
                <img src={gallery[(currentIndex + 1) % gallery.length]} className="w-full h-full object-cover" alt="next" />
              </div>
            </div>

            <button onClick={prevSlide} className="absolute left-4 z-30 w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="absolute right-4 z-30 w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/20 p-2 rounded-full backdrop-blur-md">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full focus:outline-none ${idx === currentIndex ? 'w-8 h-3' : 'w-3 h-3 bg-gray-400 hover:bg-gray-300'}`}
                  style={{ backgroundColor: idx === currentIndex ? theme.primaryColor : undefined }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left lg:col-span-5 lg:order-2 order-1">
            <h1 style={{ fontSize: sizes.titleFont }} className="font-extrabold text-gray-950 mb-6 leading-tight tracking-tight">
              {hero.title.split(hero.highlightWord)[0]}
              <span style={{ color: theme.primaryColor }}>{hero.highlightWord}</span>
              {hero.title.split(hero.highlightWord)[1]}
            </h1>
            <p style={{ fontSize: sizes.subtitleFont }} className="text-gray-600 font-normal mb-10 max-w-xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ 
                  backgroundColor: isHovered ? theme.primaryColor : theme.secondaryColor,
                  fontSize: sizes.buttonFontSize,
                  padding: sizes.buttonPadding,
                  borderRadius: theme.borderRadius,
                  transition: 'background-color 0.3s ease'
                }}
                className="text-white font-semibold flex items-center justify-center shadow-lg"
              >
                {hero.cta01Text}
              </a>
              <a 
                href="#"
                style={{ fontSize: sizes.buttonFontSize, padding: sizes.buttonPadding, borderRadius: theme.borderRadius }}
                className="bg-gray-100 text-gray-900 border border-gray-200 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                {hero.cta02Text}
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default hero_03;