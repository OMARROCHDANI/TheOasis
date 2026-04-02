import React from 'react';

const SectionDivider = () => {
  return (
    <div className="w-full relative section-divider overflow-hidden flex justify-center py-4">
      {/* Background divider defined in CSS */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E6A15A] to-transparent opacity-30"></div>
      
      {/* Soft light sweep */}
      <div 
        className="absolute inset-y-0 w-32 bg-[#FFD56B] opacity-20 blur-xl"
        style={{
          animation: 'particle-drift 8s ease-in-out infinite alternate',
          transform: 'translateX(-100%)'
        }}
      ></div>
    </div>
  );
};

export default SectionDivider;
