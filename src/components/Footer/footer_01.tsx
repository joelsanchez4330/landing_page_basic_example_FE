import React from 'react';

interface FooterProps {
  config: {
    theme: {
      primaryColor: string;
      secondaryColor: string;
    };
    company: {
      name: string;
    };
    footer: {
      companyDesc: string;
      ghostText: string;
      columns: Array<{
        title: string;
        links: Array<{ label: string; url: string; italic?: boolean }>;
      }>;
      socials: string[];
    };
  };
}

const Footer01: React.FC<FooterProps> = ({ config }) => {
  const { theme, footer, company } = config;

  return (
    <footer 
      style={{ backgroundColor: theme.secondaryColor }} 
      className="text-white pt-24 pb-12 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          
          {/* BRAND COLUMN */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div 
              style={{ color: theme.primaryColor }}
              className="text-3xl font-black tracking-tighter"
            >
              {company.name.split(' ')[0]} 
              <span className="text-white font-light italic"> {company.name.split(' ')[1]}.</span>
            </div>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              {footer.companyDesc}
            </p>
            
            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {footer.socials.map((icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.primaryColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* DYNAMIC COLUMNS */}
          {footer.columns.map((col, idx) => (
            <div key={idx}>
              <h4 
                style={{ color: theme.primaryColor }}
                className="font-bold uppercase tracking-widest text-[10px] mb-6"
              >
                {col.title}
              </h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a 
                      href={link.url} 
                      className={`hover:text-white transition-colors ${link.italic ? 'italic' : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM GHOST TEXT & COPYRIGHT */}
        <div className="border-t border-white/5 pt-12 overflow-hidden">
          <h2 className="text-[18vw] font-black tracking-tighter leading-none text-white/5 pointer-events-none select-none -mb-8 lg:-mb-16">
            {footer.ghostText}
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 gap-4">
            <p>© 2026 {company.name} STUDIO</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer01;