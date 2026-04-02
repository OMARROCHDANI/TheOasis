import React from 'react';
import { EvervaultCard } from './ui/evervault-card';

const discoveries = [
  {
    title: "Project Alpha",
    category: "Development",
    insight: "The code is never finished, only abandoned.",
  },
  {
    title: "Oasis Engine",
    category: "Architecture",
    insight: "Structure brings peace to chaos.",
  },
  {
    title: "Sand Script",
    category: "Design",
    insight: "Less color, more meaning.",
  },
  {
    title: "Mirage AI",
    category: "Intelligence",
    insight: "What you seek is seeking you.",
  }
];

const Projects = () => {
  return (
    <section id="oasis" className="w-full bg-[#0A0A0A] py-24 px-6 relative font-vt323 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7A5CFF]/5 rounded-[100%] blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-20">
        <h2 className="text-3xl md:text-5xl font-press-start text-[#3CC7D6] mb-16 text-center animate-glow-pulse tracking-widest uppercase">
          Discoveries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {discoveries.map((disc, idx) => (
            <div key={idx} className="h-80 w-full cursor-pointer group">
              <EvervaultCard className="h-full w-full">
                <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center z-20 pointer-events-none relative">
                  {/* Category */}
                  <p className="text-[#E6A15A] text-sm uppercase tracking-widest opacity-60 group-hover:opacity-0 transition-opacity duration-500 absolute top-8">
                    [{disc.category}]
                  </p>

                  {/* Title */}
                  <div className="relative flex-1 flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-3xl text-[#FFD56B] glow-text group-hover:text-white group-hover:drop-shadow-[0_4px_6px_rgba(0,0,0,1)] transition-colors duration-500 font-press-start text-sm leading-relaxed z-20">
                      {disc.title}
                    </h3>
                  </div>
                  
                  {/* Insight on Hover */}
                  <p className="text-white drop-shadow-[0_4px_6px_rgba(0,0,0,1)] font-bold tracking-wide text-xl opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 absolute bottom-12 px-6 z-20">
                    "{disc.insight}"
                  </p>
                </div>
              </EvervaultCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
