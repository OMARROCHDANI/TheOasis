import React, { useState, useEffect, useRef } from 'react';
import Typewriter from './Typewriter';
import { gsap } from 'gsap';

const TerminalCTA = () => {
  const containerRef = useRef(null);
  const terminalRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState(0);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    // Initial entrance animation
    const tl = gsap.timeline();
    tl.fromTo(terminalRef.current, 
      { 
        y: 100, 
        opacity: 0, 
        rotateX: 45,
        scale: 0.8,
        filter: 'brightness(2) blur(10px)'
      },
      { 
        y: 0, 
        opacity: 1, 
        rotateX: 0,
        scale: 1,
        filter: 'brightness(1) blur(0px)',
        duration: 1.5, 
        ease: "expo.out" 
      }
    );

    // Sequence stages
    const timers = [
      setTimeout(() => setStage(1), 800),
      setTimeout(() => setStage(2), 2200),
      setTimeout(() => setStage(3), 3600),
      setTimeout(() => setStage(4), 5000),
      setTimeout(() => setStage(5), 6500),
    ];

    // Occasional glitch effect
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(glitchInterval);
    };
  }, [isVisible]);

  const StatusLine = ({ label, value, color = "text-oasis-blue" }) => (
    <div className="flex justify-between items-center w-full max-w-xs mb-2 opacity-60 hover:opacity-100 transition-opacity">
      <span className="text-[10px] font-press-start uppercase tracking-tighter opacity-50">{label}</span>
      <span className={`text-xs font-vt323 tracking-widest ${color}`}>{value}</span>
    </div>
  );

  return (
    <section id="contact" className="w-full bg-[#050505] py-40 px-6 flex justify-center items-center relative overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,92,255,0.05)_0%,transparent_70%)] opacity-50"></div>
      <div className="absolute inset-0 retro-grid opacity-10 pointer-events-none"></div>
      
      {/* Perspective Container */}
      <div className="perspective-1000 w-full max-w-5xl flex flex-col items-center" ref={containerRef}>
        
        {/* Terminal Header Decor */}
        <div className="w-[90%] h-px bg-gradient-to-r from-transparent via-sky-purple/50 to-transparent mb-12 opacity-30 animate-pulse"></div>

        <div 
          ref={terminalRef}
          className={`relative max-w-4xl w-full bg-[#0A0A0A]/40 backdrop-blur-xl border border-sky-purple/20 rounded-lg overflow-hidden transition-all duration-300 ${glitch ? 'skew-x-1 translate-x-1 brightness-150' : ''}`}
          style={{ boxShadow: '0 0 100px rgba(122,92,255,0.1), inset 0 0 2px rgba(255,255,255,0.05)' }}
        >
          {/* Internal CRT Scanlines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
            <div className="absolute top-0 left-0 w-full h-[20%] bg-sky-purple/10 blur-xl animate-scan-roll opacity-20"></div>
          </div>

          {/* Window Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-sky-purple/10 bg-zinc-900/40">
            <div className="flex space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/20 border border-rose-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40"></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-press-start text-sky-purple/40 tracking-[0.4em] uppercase">terminal.core // oasis_os</span>
              <div className="h-1 w-20 bg-sky-purple/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-sky-purple/50 transition-all duration-1000 ease-out" 
                  style={{ width: `${(stage / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left Sidebar Status */}
            <div className="md:col-span-3 border-r border-sky-purple/10 p-6 flex flex-col gap-6 bg-black/20">
              <div className="space-y-4">
                <StatusLine label="CPU" value="88.2%" />
                <StatusLine label="MEM" value="1.2GB/16GB" />
                <StatusLine label="NET" value="ESTABLISHED" color="text-green-400" />
                <StatusLine label="LOC" value="NODE_01" />
              </div>
              
              <div className="mt-auto pt-6 border-t border-sky-purple/5">
                <div className="text-[8px] font-press-start text-desert-sand/30 mb-2">SYSTEM_LOG:</div>
                <div className="h-24 overflow-hidden text-[10px] font-vt323 text-sky-purple/40 space-y-1">
                  <p className="">{'>'} INITIALIZING...</p>
                  {stage >= 1 && <p className="animate-reveal-left opacity-60">{'>'} USER_SCAN_COMPLETE</p>}
                  {stage >= 2 && <p className="animate-reveal-left opacity-60">{'>'} AUTH_REQ_SENT</p>}
                  {stage >= 3 && <p className="animate-reveal-left opacity-60">{'>'} BUFFER_STABLE</p>}
                  {stage >= 4 && <p className="animate-reveal-left opacity-100 text-oasis-blue">{'>'} ENTRY_GRANTED</p>}
                </div>
              </div>
            </div>

            {/* Main Terminal View */}
            <div className="md:col-span-9 p-8 md:p-16 min-h-[400px] flex flex-col items-center justify-center relative">
              
              {/* Typewriter Sequence */}
              <div className="flex flex-col items-center space-y-12 text-center relative z-10 w-full">
                
                {stage >= 1 && (
                  <div className="group/line">
                    <div className="text-oasis-blue/30 text-xs font-press-start mb-4 tracking-[0.2em] transform transition-all group-hover/line:scale-110">SCAN_SEQ_01</div>
                    <div className="text-3xl md:text-5xl font-vt323 text-desert-sand leading-none italic">
                      <Typewriter text="Detecting user presence..." delay={45} />
                    </div>
                  </div>
                )}

                {stage >= 3 && (
                  <div className="group/line relative">
                    <div className="text-sky-purple/30 text-xs font-press-start mb-4 tracking-[0.2em] transform transition-all group-hover/line:scale-110">AUTH_STREAMS</div>
                    <div className="text-3xl md:text-6xl font-vt323 text-glow-gold drop-shadow-2xl">
                      <Typewriter text="Reality buffer synchronized." delay={45} />
                    </div>
                    {/* Glowing highlight */}
                    <div className="absolute -inset-8 bg-glow-gold/5 blur-[40px] -z-10 rounded-full animate-pulse"></div>
                  </div>
                )}

                {stage >= 5 && (
                  <div className="pt-8 w-full flex flex-col items-center opacity-0 animate-fade-reveal">
                    <div className="h-px w-32 bg-sky-purple/20 mb-12"></div>
                    
                    <a 
                      href="mailto:hello@digitaloasis.com" 
                      className="group relative inline-flex flex-col items-center transition-all duration-500"
                    >
                      <div className="flex items-center justify-center p-0.5 bg-gradient-to-br from-sky-purple/40 to-oasis-blue/40 rounded-sm group-hover:scale-105 transition-transform duration-500">
                        <div className="bg-[#0A0A0A] px-12 py-6 rounded-sm relative overflow-hidden">
                          {/* Hover scanning line */}
                          <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent -top-[100%] group-hover:top-[100%] transition-all duration-1000 ease-in-out"></div>
                          
                          <span className="font-press-start text-[10px] md:text-xs tracking-[0.3em] text-sky-purple group-hover:text-glow-gold transition-colors duration-300">
                            INITIALIZE_PROTOCOL
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-8 flex items-center gap-4 text-[10px] font-press-start text-sky-purple/50 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <span>Send Transmission</span>
                        <span className="animate-bounce">↓</span>
                      </div>

                      {/* External Glow */}
                      <div className="absolute -inset-10 bg-sky-purple/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                    </a>
                  </div>
                )}

              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-sky-purple/20"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-sky-purple/20"></div>
            </div>
          </div>

          {/* System Status Footer */}
          <div className="bg-zinc-900/80 border-t border-sky-purple/10 p-4 px-8 backdrop-blur-md flex justify-between items-center text-[10px] font-press-start tracking-[0.2em] text-sky-purple/40 uppercase">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>Syncing_Live</span>
              </div>
              <span className="hidden sm:block">UPTIME: 99.9%</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Secure_Link_v4.2</span>
            </div>
          </div>
        </div>

        {/* Floating Background Text Decor */}
        <div className="absolute -bottom-20 -left-20 text-[180px] font-vt323 text-sky-purple/5 select-none pointer-events-none rotate-12">OASIS</div>
        <div className="absolute -top-20 -right-20 text-[180px] font-vt323 text-desert-sand/5 select-none pointer-events-none -rotate-12">COMMAND</div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes scan-roll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-scan-roll {
          animation: scan-roll 3s linear infinite;
        }
        @keyframes reveal-left {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-reveal-left {
          animation: reveal-left 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TerminalCTA;


