import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from './Typewriter';

const sysLogs = [
  "BIOS Date 04/01/26 23:44:00 Ver 4.0",
  "CPU: Neuromancer Core, Speed: 6.4 GHz",
  "Memory Test: 4194304K OK",
  "Booting OASIS OS...",
  "Loading graphics adapter...",
  "Initializing neural link [==========] 100%",
  "Bypassing security protocols...",
  "Access granted."
];

const BootScreen = () => {
  const [stage, setStage] = useState(0);
  const [complete, setComplete] = useState(false);
  const [visibleLogs, setVisibleLogs] = useState([]);

  useEffect(() => {
    // Initial terminal print effect
    sysLogs.forEach((log, i) => {
      setTimeout(() => {
        setVisibleLogs(prev => [...prev, log]);
      }, 100 * i + (Math.random() * 80));
    });

    // Timing sequence
    const t0 = setTimeout(() => setStage(1), 1500); // Clear terminal, show poetry 1
    const t1 = setTimeout(() => setStage(2), 2700); // Poetry 2
    const t2 = setTimeout(() => setStage(3), 4000); // "OASIS" ready state
    const t3 = setTimeout(() => setComplete(true), 5500); // Finish

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070707] text-[#3CC7D6] font-vt323 overflow-hidden"
        >
          {/* Subtle grid and CRT scanlines for authentic retro feel */}
          <div className="absolute inset-0 retro-grid opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />

          {/* STAGE 0: TERMINAL BOOTUP */}
          {stage === 0 && (
            <div className="absolute top-8 left-8 flex flex-col items-start w-full max-w-4xl opacity-80 z-10">
              {visibleLogs.map((log, i) => (
                <motion.p 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  className={`text-sm sm:text-base md:text-lg font-press-start leading-loose ${log.includes("Access granted") ? "text-[#FFD56B] mt-4" : "text-[#3CC7D6]"}`}
                >
                  {log}
                </motion.p>
              ))}
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                className="w-3 h-5 bg-[#3CC7D6] inline-block mt-2"
              />
            </div>
          )}

          {/* STAGE 1 & 2 & 3: THE OASIS EXPERIENCE */}
          {stage > 0 && (
            <div className="relative z-10 w-full max-w-3xl flex flex-col items-center justify-center text-center space-y-8 px-6">
              
              <div className="h-24 sm:h-32 flex flex-col justify-center space-y-4">
                {stage >= 1 && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    className="text-xl sm:text-3xl text-[#E6A15A] tracking-wider"
                  >
                    <Typewriter text="In a desert full of noise..." delay={40} cursor={false} />
                  </motion.p>
                )}
                {stage >= 2 && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    className="text-xl sm:text-3xl text-[#3CC7D6] tracking-wider"
                  >
                    <Typewriter text="There is a place of clarity..." delay={40} cursor={false} />
                  </motion.p>
                )}
              </div>

              {stage >= 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="mt-8 flex flex-col items-center"
                >
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-press-start text-[#FFD56B] glow-text tracking-widest mb-2">
                    WELCOME
                  </h1>
                  <p className="text-sm sm:text-base font-press-start text-[#E6A15A] tracking-widest opacity-80">
                    SYSTEM READY
                  </p>
                </motion.div>
              )}
            </div>
          )}

          {/* NEW PREMIUM PROGRESS BAR (Stages 1+) */}
          {stage > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-16 sm:bottom-24 w-[80%] max-w-md z-20"
            >
              <div className="flex justify-between items-center mb-3 font-press-start text-[10px] sm:text-xs text-[#3CC7D6]">
                <span className="uppercase tracking-widest">Loading Oasis</span>
                <span className="glow-text">{stage >= 3 ? 100 : Math.min(100, Math.floor((stage * 100) / 3))}%</span>
              </div>
              <div className="relative h-3 w-full bg-[#0A0A0A] border border-[#3CC7D6]/40 rounded-sm overflow-hidden p-[2px]">
                <div 
                  className="h-full bg-gradient-to-r from-[#3CC7D6] via-[#7A5CFF] to-[#FFD56B] relative"
                  style={{
                    width: `${stage >= 3 ? 100 : Math.min(100, Math.floor((stage * 100) / 3))}%`,
                    transition: 'width 1.5s cubic-bezier(0.25, 1, 0.5, 1)',
                    boxShadow: '0 0 15px rgba(60,199,214,0.6)'
                  }}
                >
                  {/* Glare effect inside progress bar */}
                  <div className="absolute top-0 left-0 right-0 h-[30%] bg-white/30" />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;
