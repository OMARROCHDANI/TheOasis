import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

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
          duration: 2,
          delay: 0.2,
          ease: "easeOut",
          onUpdate: (latest) => setDisplayValue(Math.round(latest))
        });
      }}
      className="font-mono"
    >
      {displayValue}%
    </motion.span>
  );
};

const paths = [
  { 
    name: 'KNOWLEDGE', 
    level: '85%', 
    tag: 'SYSTEM_MEMORY', 
    desc: 'Deep architecture and data pattern recognition.',
    color: '#3CC7D6'
  },
  { 
    name: 'DISCIPLINE', 
    level: '75%', 
    tag: 'CORE_STABILITY', 
    desc: 'Execution consistency under high-load scenarios.',
    color: '#2E8B57'
  },
  { 
    name: 'CREATIVITY', 
    level: '90%', 
    tag: 'HEURISTIC_ENGINE', 
    desc: 'Generative problem solving and novel pathfinding.',
    color: '#FF8C42'
  },
  { 
    name: 'STRATEGY', 
    level: '80%', 
    tag: 'LOGIC_LAYER', 
    desc: 'Optimization of available resources for end-state goals.',
    color: '#7A5CFF'
  },
  { 
    name: 'CONSISTENCY', 
    level: '70%', 
    tag: 'UPTIME_PROTOCOL', 
    desc: 'Persistence across multiple temporal iterations.',
    color: '#FFD56B'
  },
  { 
    name: 'FAITH', 
    level: '100%', 
    tag: 'SINGULARITY', 
    desc: 'Absolute alignment with the terminal vision.',
    color: '#E6A15A'
  }
];

const Stack = () => {
  return (
    <section id="paths" className="w-full bg-[#050505] py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 retro-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#050505] pointer-events-none" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#7A5CFF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FF8C42]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-[#FF8C42]/30 bg-[#FF8C42]/5 text-[#FF8C42] text-[10px] font-press-start mb-6 tracking-widest uppercase"
          >
            S y s t e m . C o r e
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-press-start text-white mb-4 text-center tracking-tighter"
          >
            TRANSCENDENCE
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#3CC7D6] to-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#202020] to-[#101010] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500 group-hover:from-[#3CC7D6] group-hover:to-[#7A5CFF]" />
              
              <div className="relative h-full p-8 bg-[#0D0D0D] border border-white/5 rounded-lg flex flex-col overflow-hidden">
                {/* ID Tag */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-white/30 tracking-tighter">
                    NODE_{index.toString().padStart(2, '0')} // STATUS_OK
                  </span>
                  <div className="flex items-center gap-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#3CC7D6] animate-pulse" />
                     <span className="text-[10px] font-mono text-[#3CC7D6]">ACTIVE</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-press-start text-white mb-2 group-hover:text-[#3CC7D6] transition-colors duration-300">
                  {path.name}
                </h3>
                <p className="text-sm font-vt323 text-white/50 mb-8 leading-relaxed">
                  {path.desc}
                </p>

                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-end font-vt323">
                    <span className="text-[#3CC7D6] text-xs font-mono uppercase tracking-widest">{path.tag}</span>
                    <span className="text-2xl text-white">
                      <StatCounter targetValue={path.level} />
                    </span>
                  </div>
                  
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: path.level }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 2, 
                        delay: 0.5 + (index * 0.1),
                        ease: [0.43, 0.13, 0.23, 0.96]
                      }}
                      className="h-full absolute left-0 top-0"
                      style={{ 
                        backgroundColor: path.color,
                        boxShadow: `0 0 10px ${path.color}44`
                      }}
                    />
                  </div>
                </div>

                {/* Subtle Scanline Effect */}
                <div className="absolute inset-x-0 top-0 h-px bg-white/5 group-hover:bg-[#3CC7D6]/20 group-hover:animate-[particle-drift_2s_linear_infinite]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Technical Detail */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="text-[10px] font-mono text-white/20 border-t border-white/5 pt-8 flex gap-8">
            <span>UPTIME: 99.9%</span>
            <span>SYSTEM_V: 4.2.0-ALBION</span>
            <span>CORE_TEMP: OPTIMAL</span>
            <span className="hidden md:inline">CONNECTION: ENCRYPTED // TERMINAL_ACTIVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;

