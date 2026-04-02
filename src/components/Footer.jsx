import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] py-12 px-6 border-t border-[#E6A15A]/10 text-sm font-vt323 tracking-widest text-[#E6A15A]/60 flex flex-col sm:flex-row justify-between items-center z-20 relative">
      <div className="flex items-center space-x-2 mb-4 sm:mb-0">
        <span className="animate-glow-pulse text-[#3CC7D6]">Stillness Mode: Active</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#3CC7D6] animate-[breathing_3s_infinite]"></div>
      </div>
      
      <div>
        Digital Oasis &copy; 2026
      </div>
    </footer>
  );
};

export default Footer;
