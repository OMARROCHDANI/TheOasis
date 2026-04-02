import React from 'react';

const words = ["STILLNESS", "CLARITY", "PURPOSE", "BARAKAH", "FOCUS", "GROWTH"];

const Marquee = () => {
  return (
    <div className="w-full bg-[#E6A15A]/5 border-y border-[#E6A15A]/20 py-4 overflow-hidden relative flex">
      {/* Soft fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap text-[#7A5CFF] font-press-start opacity-70">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex space-x-12 px-6">
            {words.map((word, j) => (
              <span key={`${i}-${j}`} className="text-sm md:text-base tracking-widest uppercase">
                {word} <span className="text-[#3CC7D6] mx-8">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default Marquee;
