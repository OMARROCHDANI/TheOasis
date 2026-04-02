import React from 'react';
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center font-vt323 pt-[calc(80px+2rem)] md:pt-[calc(96px+4rem)] px-4"
    >
      {/* Background Video with breathing zoom */}
      <div className="absolute inset-0 z-0 animate-breathing">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/pixel-oasis.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-0 oasis-overlay"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0A0A0A] opacity-40"></div>

      {/* Floating Particles Overlay */}
      <div className="absolute inset-0 z-10 ambient-particles retro-grid opacity-30"></div>

      {/* Main Content - Optically Centered */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full max-w-5xl gap-4 md:gap-6 transform translate-y-3 md:translate-y-6">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[#FFD56B] glow-text drop-shadow-[0_0_30px_rgba(255,213,107,0.4)] leading-tight md:leading-none my-1">
          THE DIGITAL OASIS
        </h1>

        <div className="text-base sm:text-lg md:text-2xl text-[#E6A15A] opacity-90 h-8 md:h-12 flex items-center justify-center mb-6 md:mb-8 drop-shadow-lg">
          <Typewriter text="A place where ideas flow like water..." delay={70} />
        </div>

        <div className="mt-4 md:mt-10">
          {/* Replaced boxed button with a floating cinematic text link */}
          <a
            href="#journey"
            className="group relative inline-flex items-center justify-center text-[#FFD56B] font-press-start text-[10px] sm:text-xs md:text-sm hover:text-white transition-colors duration-500 tracking-widest uppercase pb-2"
          >
            ENTER THE OASIS
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#FFD56B] transition-all duration-500 group-hover:w-full group-hover:bg-white glow-text"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
