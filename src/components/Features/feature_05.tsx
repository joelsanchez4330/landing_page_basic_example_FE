import React from 'react';

interface FeatureCard {
  title: string;
  desc: string;
  img: string;
  linkText: string;
}

interface Features05Props {
  config: {
    theme: {
      primaryColor: string;
      borderRadius: string;
    };
    featureCards: {
      tag: string;
      title: string;
      highlight: string;
      items: FeatureCard[];
    };
  };
}

const Features05: React.FC<Features05Props> = ({ config }) => {
  const { theme, featureCards } = config;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-20">
          <h2 
            style={{ color: theme.primaryColor }}
            className="font-bold uppercase tracking-widest text-xs mb-4"
          >
            {featureCards.tag}
          </h2>
          <p className="text-4xl md:text-5xl font-black tracking-tight text-gray-950 leading-tight">
            {featureCards.title.split(featureCards.highlight)[0]}
            <br className="hidden md:block" />
            <span className="text-gray-400">{featureCards.highlight}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {featureCards.items.map((item, idx) => (
            <div key={idx} className="group flex flex-col">
              
              {/* Image Container with Hover Scale and Shadow */}
              <div 
                style={{ borderRadius: theme.borderRadius }}
                className="relative w-full aspect-[4/5] overflow-hidden bg-gray-200 mb-8 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Subtle Overlay on hover to make it feel premium */}
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
                
                {/* Text Link with Animated Arrow */}
                <a 
                  href="#" 
                  style={{ color: theme.primaryColor }}
                  className="mt-auto inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-opacity hover:opacity-80 group/link"
                >
                  {item.linkText} 
                  <span className="transform transition-transform group-hover/link:translate-x-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Adding a dynamic hover shadow color based on theme */}
      <style>{`
        .group:hover .relative {
          box-shadow: 0 25px 50px -12px ${theme.primaryColor}25 !important;
        }
      `}</style>
    </section>
  );
};

export default Features05;