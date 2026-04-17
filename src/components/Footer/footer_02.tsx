import React, { useState } from 'react';

interface FooterProps {
  config: {
    theme: { 
        primaryColor: string; 
        secondaryColor: string; 
        borderRadius: string; 
    };
    company: { name: string; };
    siteConfig: {
      footer: {
        // Shared fields
        socials: Array<{ label: string; url: string }>;
        
        // Footer 01 Specific (Optional)
        companyDesc?: string;
        ghostText?: string;
        columns?: Array<{
          title: string;
          links: Array<{ label: string; url: string; italic?: boolean }>;
        }>;

        // Footer 02 Specific (Optional)
        title?: string;
        highlight?: string;
        subtitle?: string;
        placeholder?: string;
        buttonText?: string;
      };
    };
  };
}

const footer_02: React.FC<FooterProps> = ({ config }) => {
// 2. UNIVERSAL DESTRUCTURING
const { theme, siteConfig } = config;
const data = siteConfig.footer; // Mapping 'footer' to 'data' for the JSX below

const [email, setEmail] = useState('');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  alert(`Signed up with: ${email}`);
  setEmail('');
};

return (
  <footer className="bg-gray-50 border-t border-gray-100 py-24 px-6">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      
      {/* NEWSLETTER CONTENT */}
      <div className="text-center max-w-2xl mb-16">
        <h3 className="text-4xl font-black mb-6 text-slate-950">
          {data.title} <span style={{ color: theme.primaryColor }}>{data.highlight}</span>
        </h3>
        <p className="text-gray-500 mb-8">
          {data.subtitle}
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={data.placeholder} 
            className="flex-grow px-8 py-4 rounded-full border border-gray-200 outline-none transition-all focus:ring-2"
            style={{ 
              boxShadow: `0 0 0 2px ${theme.primaryColor}20`,
            }} 
          />
          <button 
            type="submit"
            style={{ 
              backgroundColor: theme.secondaryColor,
              // Using theme.borderRadius instead of hardcoded 9999px
              borderRadius: theme.borderRadius || '9999px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.primaryColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.secondaryColor)}
            className="px-10 py-4 text-white font-bold transition-all hover:scale-105 active:scale-95"
          >
            {data.buttonText}
          </button>
        </form>
      </div>

      {/* SOCIAL LINKS */}
      <div className="flex flex-wrap gap-12 border-t border-gray-200 pt-12 w-full justify-center">
        {data.socials.map((link, idx) => (
          <a 
            key={idx}
            href={link.url} 
            className="text-xs font-black uppercase tracking-widest transition-colors duration-300"
            onMouseEnter={(e) => (e.currentTarget.style.color = theme.primaryColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = '')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
};

export default footer_02;