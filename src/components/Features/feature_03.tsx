import React from 'react';

interface BentoProps {
  config: {
    theme: {
      primaryColor: string;
      secondaryColor: string;
      borderRadius: string;
    };
    bento: any; // Simplified for this example
  };
}

const Features03: React.FC<BentoProps> = ({ config }) => {
  const { theme, bento } = config;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      {/* 1. CUSTOM ANIMATION STYLES */}
      <style>{`
        .bento-card {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .bento-card:hover {
          transform: translateY(-5px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16">
          <h2 
            style={{ color: theme.primaryColor }}
            className="font-bold uppercase tracking-widest text-sm mb-3"
          >
            {bento.tag}
          </h2>
          <p className="text-4xl md:text-6xl font-black tracking-tight text-slate-950 leading-tight">
            {bento.title.split(bento.highlight)[0]} <br />
            <span className="text-gray-400">{bento.highlight}</span>
          </p>
        </div>

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto md:h-[700px]">
          
          {/* CARD 1: LARGE WHITE (Span 4) */}
          <div 
            style={{ borderRadius: theme.borderRadius }}
            className="md:col-span-4 bg-white border border-gray-200 p-8 md:p-12 flex flex-col justify-between overflow-hidden relative bento-card shadow-sm"
          >
            <div className="relative z-20 max-w-sm md:max-w-md">
              <h3 className="text-3xl font-bold mb-4">{bento.card1.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">{bento.card1.desc}</p>
            </div>
            <div className="relative md:absolute -bottom-6 -right-6 w-full md:w-[65%] mt-8 z-10">
              <img 
                src={bento.card1.img} 
                style={{ borderRadius: theme.borderRadius }}
                className="shadow-2xl border-l-4 border-t-4 border-gray-100" 
                alt="Feature"
              />
            </div>
          </div>

          {/* CARD 2: DARK (Span 2) */}
          <div 
            style={{ backgroundColor: theme.secondaryColor, borderRadius: theme.borderRadius }}
            className="md:col-span-2 p-8 flex flex-col justify-between bento-card text-white overflow-hidden relative"
          >
            <div className="relative z-20">
              <h3 className="text-2xl font-bold mb-4">{bento.card2.title}</h3>
              <p className="text-slate-400 leading-relaxed">{bento.card2.desc}</p>
            </div>
            {/* Ambient Glow */}
            <div 
              style={{ backgroundColor: theme.primaryColor }}
              className="absolute -bottom-10 -left-10 w-40 h-40 opacity-20 blur-[60px]"
            ></div>
            <div className="relative z-10 self-end">
              <svg style={{ color: theme.primaryColor }} className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
          </div>

          {/* CARD 3: PRIMARY COLOR (Span 3) */}
          <div 
            style={{ backgroundColor: theme.primaryColor, borderRadius: theme.borderRadius }}
            className="md:col-span-3 p-8 flex items-center justify-between bento-card text-white shadow-lg"
          >
            <div className="max-w-[200px]">
              <h3 className="text-2xl font-bold mb-2">Dark Mode</h3>
              <p className="text-white/80 text-sm">Easier on the eyes, even during those 2AM sessions.</p>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded-full flex items-center px-1">
              <div className="w-10 h-10 bg-white rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* CARD 4: SMALL WHITE (Span 3) */}
          <div 
            style={{ borderRadius: theme.borderRadius }}
            className="md:col-span-3 bg-white border border-gray-200 p-8 bento-card shadow-sm hover:shadow-xl flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold">Encrypted Data</h3>
              <p className="text-gray-500 text-sm">Security that never sleeps.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features03;