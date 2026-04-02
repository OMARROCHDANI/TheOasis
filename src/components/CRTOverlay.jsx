import React from 'react';

const CRTOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 oasis-overlay" />
      {/* Subtle light sweep */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255, 213, 107, 0.1), transparent)',
          animation: 'particle-drift 10s linear infinite'
        }}
      />
      {/* Subdued vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,10,10,0.4)] pointer-events-none" />
    </div>
  );
};

export default CRTOverlay;
