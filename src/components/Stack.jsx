import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';

const StatCounter = ({ targetValue }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(targetValue);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        animate(0, numericValue, {
          duration: 1.5,
          delay: 0.5,
          onUpdate: (latest) => setDisplayValue(Math.round(latest))
        });
      }}
    >
      {displayValue}%
    </motion.span>
  );
};

const paths = [
  { name: 'Knowledge', level: '85%' },
  { name: 'Discipline', level: '75%' },
  { name: 'Creativity', level: '90%' },
  { name: 'Strategy', level: '80%' },
  { name: 'Consistency', level: '70%' },
  { name: 'Faith', level: '100%' }
];

const Stack = () => {
  return (
    <section id="paths" className="w-full bg-[#0A0A0A] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0A0A0A] pointer-events-none opacity-50 z-10"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-press-start text-[#FF8C42] mb-16 text-center"
        >
          PATHS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {paths.map((path, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 border border-[#2E8B57]/30 bg-[#2E8B57]/5 hover:bg-[#2E8B57]/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Scanline hover effect restored */}
              <div className="absolute inset-x-0 bottom-full w-full h-1 bg-[#2E8B57]/50 group-hover:animate-[particle-drift_2s_linear_infinite]" />
              
              <div className="flex justify-between items-end mb-4 font-vt323 text-2xl text-[#E6A15A]">
                <span>{path.name}</span>
                <span className="text-lg opacity-60">
                  Level: <StatCounter targetValue={path.level} />
                </span>
              </div>
              
              <div className="w-full h-2 bg-[#1a1a1a] rounded overflow-hidden relative border border-[#E6A15A]/20">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: path.level }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 0.5 + (index * 0.1),
                    ease: [0.43, 0.13, 0.23, 0.96] // Custom smooth ease
                  }}
                  className="h-full bg-[#3CC7D6] shadow-[0_0_12px_#3CC7D6] absolute left-0 top-0 group-hover:bg-[#FFD56B] transition-colors duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
