import React, { useState } from 'react';

interface StickyStep {
  step: string;
  title: string;
  highlight: string;
  desc: string;
  img: string;
  dark: boolean;
}

interface Features04Props {
  config: {
    theme: {
      primaryColor: string;
      secondaryColor: string;
      borderRadius: string;
    };
    stickySteps: StickyStep[];
  };
}

const Features04: React.FC<Features04Props> = ({ config }) => {
  const { theme, stickySteps } = config;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {stickySteps.map((item, idx) => {
          // Logic for stacking offset (top-24, top-32, etc.)
          const stickyTop = 24 + idx * 8;

          return (
            <div
              key={idx}
              // 1. Move the direction logic here into the className
              className={`sticky rounded-[3rem] border p-8 md:p-16 shadow-xl flex flex-col items-center gap-12 group transition-all duration-500 
                ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              
              style={{
                top: `${stickyTop}px`,
                backgroundColor: item.dark ? theme.secondaryColor : '#ffffff',
                borderColor: item.dark ? 'rgba(255,255,255,0.1)' : '#e2e8f0',
                color: item.dark ? '#ffffff' : '#0f172a',
                borderRadius: theme.borderRadius,
                // 2. Remove flexDirection from here!
              }}
            >
              {/* TEXT BLOCK */}
              <div className="w-full md:w-1/2 space-y-6">
                <span 
                  style={{ color: theme.primaryColor }}
                  className="font-bold tracking-widest uppercase text-xs"
                >
                  {item.step}
                </span>
                
                <h3 className="text-4xl font-black tracking-tight leading-tight">
                  {item.title.split(item.highlight)[0]}
                  <span style={{ color: theme.primaryColor }}>{item.highlight}</span>
                  {item.title.split(item.highlight)[1]}
                </h3>
                
                <p className={`${item.dark ? 'text-slate-400' : 'text-slate-500'} text-lg leading-relaxed`}>
                  {item.desc}
                </p>

                {/* Button only shows if it's the first step or configured */}
                {!item.dark && (
                  <button 
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{ 
                      backgroundColor: hoveredIdx === idx ? theme.primaryColor : theme.secondaryColor,
                      color: '#ffffff',
                      borderRadius: '9999px',
                      transition: 'all 0.3s ease'
                    }}
                    className="px-8 py-3 font-bold shadow-lg"
                  >
                    Explore AI
                  </button>
                )}
              </div>

              {/* IMAGE BLOCK */}
              <div 
                className={`w-full md:w-1/2 overflow-hidden aspect-video shadow-inner rounded-2xl`}
                style={{ backgroundColor: item.dark ? '#1e293b' : '#f1f5f9' }}
              >
                <img 
                  src={item.img} 
                  alt={item.step}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.dark ? 'opacity-80' : 'opacity-100'}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features04;