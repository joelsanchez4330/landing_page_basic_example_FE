import React from 'react';

interface Project {
  category: string;
  title: string;
  img: string;
  aspect: string;
  color: string;
}

interface PortfolioProps {
  config: {
    theme: {
      primaryColor: string;
      borderRadius: string;
    };
    portfolio: {
      tag: string;
      title: string;
      highlight: string;
      categories: string[];
      projects: Project[];
    };
  };
}

const Gallery01: React.FC<PortfolioProps> = ({ config }) => {
  const { theme, portfolio: data } = config;

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      {/* HEADER SECTION */}
      <header className="max-w-[1400px] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 
            style={{ color: theme.primaryColor }}
            className="font-bold uppercase tracking-widest text-xs mb-2"
          >
            {data.tag}
          </h2>
          <p className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950">
            {data.title} <span className="text-gray-300 italic font-light">{data.highlight}</span>
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-3">
          {data.categories.map((cat, i) => (
            <button 
              key={i}
              className="px-6 py-2 rounded-full border border-gray-200 font-bold text-sm hover:bg-black hover:text-white transition-all duration-300"
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* MASONRY GRID */}
      <div className="max-w-[1400px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {data.projects.map((project, idx) => (
          <div key={idx} className="break-inside-avoid mb-8">
            <div 
              style={{ borderRadius: theme.borderRadius }}
              className={`group relative overflow-hidden bg-gray-100 ${project.aspect} shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              <img 
                src={`${project.img}?auto=format&fit=crop&w=800&q=80`} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* HOVER OVERLAY */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white"
                style={{ backgroundColor: `${project.color}E6` }} // E6 = 90% opacity hex
              >
                <span className="text-xs font-bold uppercase tracking-widest mb-1">
                  {project.category}
                </span>
                <h3 className="text-2xl font-black">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery01;