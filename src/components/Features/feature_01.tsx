import React from 'react';

interface FeaturesProps {
  config: {
    theme: {
      primaryColor: string;
      borderRadius: string;
    };
    features: {
      topTitle: string;
      mainTitle: string;
      items: Array<{
        title: string;
        desc: string;
        icon: string;
      }>;
    };
  };
}

const Features01: React.FC<FeaturesProps> = ({ config }) => {
  const { theme, features } = config;

  // Helper to render the correct SVG based on the icon name in JSON
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 transition-colors duration-300" };
    switch (iconName) {
      case 'bolt': return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
      case 'lock': return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
      case 'chart': return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
      default: return null;
    }
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