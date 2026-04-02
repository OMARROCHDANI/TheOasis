import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#0A0A0A]/70 border-b border-[#E6A15A]/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[#E6A15A] font-vt323 text-xl sm:text-2xl">
        <ul className="flex space-x-6 sm:space-x-8">
          {['HOME', 'JOURNEY', 'OASIS', 'CONTACT'].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3CC7D6] transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center space-x-3 text-[#7A5CFF]">
          <span className="animate-glow-pulse">Calm Mode: Active</span>
          <div className="w-2 h-2 rounded-full bg-[#3CC7D6] shadow-[0_0_8px_#3CC7D6] animate-pulse"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
