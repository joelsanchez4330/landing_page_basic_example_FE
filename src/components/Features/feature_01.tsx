import React from 'react';
import * as LucideIcons from 'lucide-react';

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

const Features01: React.FC<FeaturesProps> = ({ config }) => {
  const { theme, siteConfig } = config;
  const features = siteConfig?.features;

  // Helper to render the correct SVG based on the icon name in JSON
  const renderIcon = (iconName: string) => {
    // 1. Look up the icon in the library
    const IconComponent = (LucideIcons as any)[iconName];
  
    // 2. If it exists, return the component. If not, return a default.
    if (IconComponent) {
      return <IconComponent size={24} color={theme.primaryColor} />;
    }
    
    // Optional: Fallback icon so the box isn't empty
    return <LucideIcons.HelpCircle size={24} />;
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 
            style={{ color: theme.primaryColor }}
            className="font-bold tracking-widest uppercase text-sm mb-4"
          >
            {features.topTitle}
          </h2>
          <p className="text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight">
            {features.mainTitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.items.map((item, idx) => (
            <div 
              key={idx}
              style={{ borderRadius: theme.borderRadius }}
              className="group p-8 border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              {/* Icon Container with dynamic hover background */}
              <div 
                style={{ 
                   /* We use CSS variables or inline logic for the hover color 
                      But a clean way is just using the group-hover utility 
                      If the primaryColor changes, we can use an inline style for the 'normal' state 
                   */
                   borderRadius: '12px' 
                }}
                className="w-12 h-12 bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors"
              >
                <div className="text-orange-600 group-hover:text-white transition-colors duration-300">
                  {renderIcon(item.icon)}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-950 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Adding a small Global CSS for the Hover Glow 
          Since standard Tailwind doesn't support dynamic hover colors in hex 
      */}
      <style>{`
        .group:hover {
          box-shadow: 0 25px 50px -12px ${theme.primaryColor}20 !important;
        }
        .group:hover .w-12 {
          background-color: ${theme.primaryColor} !important;
        }
      `}</style>
    </section>
  );
};

export default Features01;