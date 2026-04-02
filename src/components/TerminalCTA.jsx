import React, { useState, useEffect, useRef } from 'react';
import Typewriter from './Typewriter';
import { gsap } from 'gsap';

const TerminalCTA = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    // Smooth container entrance
    gsap.fromTo(containerRef.current, 
      { 
        y: 50, 
        opacity: 0, 
        filter: 'blur(20px)',
        scale: 0.95
      },
      { 
        y: 0, 
        opacity: 1, 
        filter: 'blur(0px)',
        scale: 1,
        duration: 0.8, 
        ease: "power4.out" 
      }
    );

    // Staged sequence for typewriter lines (accelerated)
    const t1 = setTimeout(() => setStage(1), 500);
    const t2 = setTimeout(() => setStage(2), 1600);
    const t3 = setTimeout(() => setStage(3), 2800);
    const t4 = setTimeout(() => setStage(4), 4200);

    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, [isVisible]);

  return (
    <section id="contact" className="w-full bg-[#050505] py-48 px-6 flex justify-center items-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 retro-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-[1000px] bg-sky-purple/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div 
        ref={containerRef}
        className="max-w-4xl w-full border border-sky-purple/30 bg-[#0A0A0A]/95 relative shadow-[0_0_80px_rgba(122,92,255,0.15)] group transition-all duration-700"
      >
        {/* Decorative Top Bar */}
        <div className="bg-sky-purple/10 border-b border-sky-purple/20 p-4 px-6 flex justify-between items-center bg-zinc-900/50 backdrop-blur-sm">
          <div className="flex space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40 border border-rose-500/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40 border border-amber-500/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/20"></div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sky-purple/60 text-[10px] font-press-start tracking-[0.2em] uppercase hidden sm:inline-block">system.core.init</span>
            <div className="h-1 w-16 bg-sky-purple/20 rounded-full overflow-hidden">
              <div className="h-full bg-sky-purple/60 animate-progress-fill" style={{ '--progress-target': '100%' }}></div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-12 md:p-20 relative min-h-[450px] flex flex-col justify-center overflow-hidden">
          {/* Internal Scanlines Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-0" 
               style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }}></div>

          <div className="flex flex-col space-y-10 text-3xl md:text-5xl font-vt323 text-desert-sand relative z-10 leading-tight">
            {stage >= 1 && (
              <div className="flex items-start group/line">
                <span className="text-oasis-blue mr-8 opacity-40 group-hover/line:opacity-100 transition-opacity duration-300">~</span>
                <Typewriter text="You arrived..." delay={40} />
              </div>
            )}
            
            {stage >= 2 && (
              <div className="flex items-start group/line">
                <span className="text-oasis-blue mr-8 opacity-40 group-hover/line:opacity-100 transition-opacity duration-300">~</span>
                <Typewriter text="Take your time..." delay={40} />
              </div>
            )}
            
            {stage >= 3 && (
              <div className="flex items-start group/line pt-2">
                <span className="text-oasis-blue mr-8 opacity-40 group-hover/line:opacity-100 transition-opacity duration-300">~</span>
                <div className="glow-text text-glow-gold drop-shadow-[0_0_15px_rgba(255,213,107,0.3)]">
                  <Typewriter text="The journey begins here." delay={40} />
                </div>
              </div>
            )}
            
            {stage >= 4 && (
              <div className="pt-16 self-center sm:self-start opacity-0 animate-fade-reveal">
                <a 
                  href="mailto:hello@digitaloasis.com" 
                  className="group relative inline-flex items-center justify-center px-12 py-6 font-press-start text-xs tracking-widest transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Background layer */}
                  <span className="absolute inset-0 bg-[#7A5CFF]/5"></span>
                  
                  {/* Glowing Borders */}
                  <span className="absolute inset-0 border border-[#7A5CFF]/40 group-hover:border-[#7A5CFF] transition-all duration-300"></span>
                  
                  {/* Animated Fill Layer */}
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-sky-purple/10 group-hover:h-full transition-all duration-500 ease-out"></span>
                  
                  {/* Content */}
                  <span className="relative text-sky-purple group-hover:text-white transition-colors duration-300 flex items-center">
                    BEGIN THE JOURNEY 
                    <span className="ml-5 transform group-hover:translate-x-3 transition-transform duration-500">→</span>
                  </span>

                  {/* Corner Accent Decor */}
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-glow-gold/0 group-hover:border-glow-gold/80 transition-all duration-500"></span>
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-glow-gold/0 group-hover:border-glow-gold/80 transition-all duration-500"></span>
                  
                  {/* Extra Pulse Light */}
                  <span className="absolute inset-0 bg-[#7A5CFF]/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></span>
                </a>
              </div>
            )}
          </div>
        </div>
        
        {/* System Footer info */}
        <div className="bg-zinc-900/50 p-4 px-8 text-[11px] font-vt323 border-t border-sky-purple/10 flex justify-between text-sky-purple/50 tracking-[0.3em] uppercase backdrop-blur-sm">
          <span>OASIS_NODE_PRIME</span>
          <span className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-purple/60 animate-pulse mr-3"></span>
            CONNECTED_SECURELY
          </span>
        </div>
      </div>
    </section>
  );
};

export default TerminalCTA;

