import React from 'react';

interface CTAProps {
  config: {
    theme: { 
      primaryColor: string; 
      secondaryColor: string; 
      borderRadius: string;
      fontFamily?: string; 
    };
    siteConfig: {
      cta: {
        // --- Shared / Standard CTA 01 Fields ---
        topTitle?: string;
        mainTitle?: string;
        highlight?: string;
        subtitle?: string;
        primaryBtn?: string;
        secondaryBtn?: string;

        // --- CTA 02 Specific Fields ---
        tag?: string;
        line1?: string;
        line1Highlight?: string;
        line2?: string;
        line2Highlight?: string;
        buttonText?: string;
        socials?: Array<{ label: string; url: string }>;
      };
    };
  };
}

const Cta02: React.FC<CTAProps> = ({ config }) => {
  // UNIVERSAL MAPPING
  const { theme, siteConfig } = config;
  const { cta: data } = siteConfig; 

  return (
    <section className="py-32 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* TOP TAG */}
        <div className="space-y-4 mb-12">
          <h2 
            style={{ color: theme.primaryColor }}
            className="font-bold uppercase tracking-[0.4em] text-[10px]"
          >
            {data.tag}
          </h2>

          {/* MASSIVE RESPONSIVE TEXT */}
          <p className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase text-slate-950">
            {data.line1}{' '}
            <span 
              className="text-gray-200 transition-colors duration-500 cursor-default"
              style={{ transitionProperty: 'color' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.primaryColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              {data.line1Highlight}
            </span> 
            <br />
            {data.line2}{' '}
            <span className="italic font-light text-gray-300">
              {data.line2Highlight}
            </span>
          </p>
        </div>

        {/* BUTTON */}
        <div className="relative group">
          <div 
            style={{ backgroundColor: theme.primaryColor }}
            className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
          ></div>
          
          <a 
            href="#" 
            style={{ backgroundColor: theme.secondaryColor }}
            className="relative block px-16 py-8 text-white rounded-full text-xl font-bold hover:scale-105 transition-transform"
          >
            {data.buttonText}
          </a>
        </div>

        {/* SOCIAL LINKS - Standardized from the CTA data */}
        <div className="mt-24 flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          {data.socials?.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url}
              className="transition-colors duration-300"
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.primaryColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta02;