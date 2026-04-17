import React from 'react';

interface FeaturesProps {
  config: {
    theme: { primaryColor: string; borderRadius: string; secondaryColor?: string; };
    siteConfig: {
      features: {
        tag?: string;
        topTitle: string;
        mainTitle: string;
        highlightWord?: string;
        items: Array<{
          title: string;
          desc: string;
          image?: string; // Standardized (replaces 'img' or 'imageUrl')
          icon?: string;
          tag?: string;
          highlight?: string; // Standardized from row.highlight
          list?: string[];    // Standardized from row.list
          cta?: string;
          imageUrl?: string;
          dark?: boolean; // Specific to Features04
          step?: string; // Specific to Features04
        }>;
      };
    };
  };
}

const features_05: React.FC<FeaturesProps> = ({ config }) => {
  const { theme, siteConfig } = config;
  const { features } = siteConfig;
  const { items } = features;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-20">
          <h2 
            style={{ color: theme.primaryColor }}
            className="font-bold uppercase tracking-widest text-xs mb-4"
          >
            {/* 'tag' is now part of the 'features' object */}
            {features.tag || "Features"} 
          </h2>
          <p className="text-4xl md:text-5xl font-black tracking-tight text-gray-950 leading-tight">
            {/* Standardized 'mainTitle' and 'highlightWord' */}
            {features.mainTitle.split(features.highlightWord || "")[0]}
            <br className="hidden md:block" />
            <span className="text-gray-400">{features.highlightWord}</span>
            {features.mainTitle.split(features.highlightWord || "")[1]}
          </p>
        </div>

        {/* Features Grid - Standardized to use 'items' */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {items.map((item, idx) => (
            <div key={idx} className="group flex flex-col">
              
              {/* Image Container */}
              <div 
                style={{ borderRadius: theme.borderRadius }}
                className="relative w-full aspect-[4/5] overflow-hidden bg-gray-200 mb-8 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              >
                <img 
                  src={item.image} // Standardized from item.img
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              
              {/* Content Area */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl md:text-3xl font-black text-gray-950 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                  {item.desc}
                </p>
                
                {/* Standardized Link Text from item.cta */}
                <a 
                  href="#" 
                  style={{ color: theme.primaryColor }}
                  className="mt-auto inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-opacity hover:opacity-80 group/link"
                >
                  {item.cta || "Learn More"} 
                  <span className="transform transition-transform group-hover/link:translate-x-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .group:hover .relative {
          box-shadow: 0 25px 50px -12px ${theme.primaryColor}25 !important;
        }
      `}</style>
    </section>
  );
};

export default features_05;