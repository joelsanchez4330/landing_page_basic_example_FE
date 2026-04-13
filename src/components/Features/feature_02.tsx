import React, { useState } from 'react';

interface FeatureRow {
  tag: string;
  title: string;
  highlight: string;
  desc: string;
  imageUrl: string;
  list?: string[];
  cta?: string;
}

interface Features02Props {
  config: {
    theme: {
      primaryColor: string;
      secondaryColor: string;
      borderRadius: string;
    };
    featureRows: FeatureRow[];
  };
}

const Features02: React.FC<Features02Props> = ({ config }) => {
  const { theme, featureRows } = config;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      {/* Container Lane */}
      <div className="max-w-7xl mx-auto space-y-32">
        {featureRows.map((row, idx) => {
          // Use index to alternate layout: even = image right, odd = image left
          const isReversed = idx % 2 !== 0;

          return (
            <div 
              key={idx} 
              className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* TEXT BLOCK */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div 
                  style={{ 
                    backgroundColor: `${theme.primaryColor}10`, // 10% opacity for tag bg
                    color: theme.primaryColor 
                  }}
                  className="inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                >
                  {row.tag}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-950">
                  {row.title.split(row.highlight)[0]}
                  <span style={{ color: theme.primaryColor }}>{row.highlight}</span>
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  {row.desc}
                </p>

                {/* Conditional List */}
                {row.list && (
                  <ul className="space-y-3">
                    {row.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <span style={{ color: theme.primaryColor }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Conditional Button */}
                {row.cta && (
                  <button 
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{ 
                      backgroundColor: hoveredIdx === idx ? theme.primaryColor : theme.secondaryColor,
                      borderRadius: theme.borderRadius,
                      transition: 'all 0.3s ease'
                    }}
                    className="px-6 py-3 text-white font-bold shadow-lg"
                  >
                    {row.cta}
                  </button>
                )}
              </div>
              
              {/* IMAGE BLOCK */}
              <div 
                className={`w-full lg:w-1/2 rounded-[2.5rem] p-4 lg:p-8 border border-slate-200 shadow-inner`}
                style={{ backgroundColor: isReversed ? '#eff6ff' : '#f8fafc' }} // Alternates BG colors slightly
              >
                <img 
                  src={row.imageUrl} 
                  alt={row.tag} 
                  style={{ borderRadius: theme.borderRadius }}
                  className="shadow-2xl border border-white w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features02;