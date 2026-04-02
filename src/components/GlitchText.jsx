import React from 'react';

const GlitchText = ({ text, as: Component = 'span', className = '' }) => {
  return (
    <Component className={`glow-text ${className}`}>
      {text}
    </Component>
  );
};

export default GlitchText;
