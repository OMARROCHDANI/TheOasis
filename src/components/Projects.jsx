import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Cpu, Globe, ArrowRight, Zap } from 'lucide-react';

const discoveries = [
  {
    id: "001",
    title: "NEURAL GARDEN",
    category: "AI / ECOSYSTEM",
    status: "ARCHIVED",
    insight: "Simulating organic growth within digital constraints. A study of emergent complexity.",
    tags: ["Three.js", "TensorFlow", "React"],
    details: "The Neural Garden uses recursive algorithms to generate flora that reacts to real-time user interaction, merging biology with binary code."
  },
  {
    id: "002",
    title: "VOID RUNNER",
    category: "ENGINE / PHYSICS",
    status: "OPERATIONAL",
    insight: "Navigating the silence between data points. Procedural generation in its rawest form.",
    tags: ["C++", "GLSL", "Vulkan"],
    details: "A custom-built exploration engine designed to render infinite, non-Euclidean spaces with zero latency and high visual fidelity."
  },
  {
    id: "003",
    title: "CHRONOS PROTOCOL",
    category: "WEB3 / TIME-SYNC",
    status: "EXPERIMENTAL",
    insight: "Synchronizing local states across asynchronous networks. Time is but a variable.",
    tags: ["Rust", "Wasm", "Go"],
    details: "A decentralized protocol implementing a new consensus mechanism for ultra-fast transaction finality across distributed ledgers."
  },
  {
    id: "004",
    title: "ECHO CHAMBER",
    category: "SOCIAL ARCHITECTURE",
    status: "DECOMMISSIONED",
    insight: "Visualizing the feedback loops of human interaction. The digital mirror never lies.",
    tags: ["React", "D3.js", "Python"],
    details: "An interactive visualization platform that maps the spread of misinformation through network graph analysis and sentiment tracking."
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(discoveries[0]);

  return (
    <section id="oasis" className="w-full bg-[#070707] py-32 px-6 relative font-vt323 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3CC7D6]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7A5CFF]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[2px] w-12 bg-[#3CC7D6]"></div>
            <span className="text-[#3CC7D6] tracking-[0.3em] uppercase text-sm font-bold">Project Repository</span>
            <div className="h-[2px] w-12 bg-[#3CC7D6]"></div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-press-start text-white mb-6 text-center tracking-tighter drop-shadow-[0_0_15px_rgba(60,199,214,0.3)]">
            DISCOVERIES<span className="animate-pulse">_</span>
          </h2>
          
          <p className="text-[#E6A15A]/60 max-w-2xl text-center text-lg leading-relaxed">
            Explorations into the boundaries of digital space, where code meets creativity and complexity becomes clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-[600px]">
          {/* Project List Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-[#111] border border-white/10 p-4 mb-6 rounded-sm">
              <div className="flex items-center gap-3 text-[#3CC7D6] text-xs uppercase tracking-widest font-bold mb-2">
                <Database size={14} />
                <span>INDEXING_SYSTEM.v2.0</span>
              </div>
              <div className="text-white/30 text-[10px] uppercase font-mono">
                Location: Sector 7G / Archives
              </div>
            </div>

            {discoveries.map((project) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveProject(project)}
                whileHover={{ x: 10 }}
                className={`w-full text-left p-6 border-l-4 transition-all duration-300 relative group overflow-hidden ${
                  activeProject.id === project.id 
                    ? "border-[#3CC7D6] bg-white/5" 
                    : "border-transparent bg-transparent hover:border-white/20 hover:bg-white/2"
                }`}
              >
                {/* Active Indicator Pulse */}
                {activeProject.id === project.id && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute inset-0 bg-[#3CC7D6]/5 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Hover Background Glitch Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3CC7D6]/0 to-[#3CC7D6]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <span className={`text-[10px] font-mono tracking-tighter ${activeProject.id === project.id ? "text-[#3CC7D6]" : "text-white/40"}`}>
                    ID::{project.id}
                  </span>
                  <span className={`text-[9px] font-mono px-2 py-0.5 border flex items-center gap-1.5 ${
                    project.status === "OPERATIONAL" ? "border-green-500/30 text-green-400 bg-green-500/5 shadow-[0_0_10px_rgba(34,197,94,0.1)]" :
                    project.status === "EXPERIMENTAL" ? "border-yellow-500/30 text-yellow-400 bg-yellow-500/5 shadow-[0_0_10px_rgba(234,179,8,0.1)]" :
                    "border-red-500/30 text-red-400 bg-red-500/5 shadow-[0_0_10px_rgba(239,68,68,0.1)]"
                  }`}>
                    {project.status === "OPERATIONAL" && <span className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />}
                    {project.status}
                  </span>
                </div>
                <h3 className={`text-xl md:text-2xl font-press-start transition-colors duration-300 relative z-10 ${
                  activeProject.id === project.id ? "text-white" : "text-white/40 group-hover:text-white/70"
                }`}>
                  {project.title}
                </h3>
              </motion.button>
            ))}
          </div>

          {/* Project Details Display Area */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className="bg-[#0D0D0D] border border-white/10 h-full p-8 md:p-12 relative flex flex-col justify-between overflow-hidden group">
                  {/* Decorative Scanline */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-[#3CC7D6]/50 animate-re-scan pointer-events-none z-30"></div>
                  
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <div className="bg-[#3CC7D6]/10 text-[#3CC7D6] px-4 py-1 text-sm uppercase tracking-widest font-bold border border-[#3CC7D6]/30">
                        {activeProject.category}
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-sm italic">
                        <Terminal size={14} />
                        <span>root@oasis/discoveries/{activeProject.title.toLowerCase().replace(' ', '_')}</span>
                      </div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-press-start text-white mb-10 leading-tight">
                      {activeProject.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                      <div>
                        <h4 className="text-[#E6A15A] text-xs uppercase tracking-[0.2em] font-bold mb-4 flex items-center gap-2">
                          <Cpu size={14} /> CORE_INSIGHT
                        </h4>
                        <p className="text-white/80 text-xl md:text-2xl leading-relaxed italic border-l-2 border-[#E6A15A]/30 pl-6">
                          "{activeProject.insight}"
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[#E6A15A] text-xs uppercase tracking-[0.2em] font-bold mb-4 flex items-center gap-2">
                          <Globe size={14} /> TECHNICAL_SPEC
                        </h4>
                        <p className="text-white/60 text-lg leading-relaxed">
                          {activeProject.details}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {activeProject.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white/5 border border-white/10 px-4 py-2 text-xs font-mono text-white/50 uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="self-start mt-auto flex items-center gap-4 bg-[#3CC7D6] text-black font-press-start text-xs py-5 px-10 relative overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                    <span className="relative z-10 flex items-center gap-3">
                      INITIATE PROTOCOL <ArrowRight size={16} />
                    </span>
                  </motion.button>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-8 right-8 opacity-20 hidden md:block">
                    <Zap size={100} className="text-[#3CC7D6]" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes re-scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(600px); }
        }
        .animate-re-scan {
          animation: re-scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;

