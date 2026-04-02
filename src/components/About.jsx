import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "01 — The desert is loud",
  "02 — Not everything is real",
  "03 — Illusions are everywhere",
  "04 — But this is different",
  "05 — This is calm",
  "06 — This is clarity",
  "07 — This is the oasis"
];

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const texts = gsap.utils.toArray('.animated-line');
    
    gsap.from(texts, {
      y: 80,
      opacity: 0,
      stagger: 0.4,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="journey" className="w-full min-h-screen bg-[#0A0A0A] py-32 px-6 flex justify-center items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 retro-grid opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF8C42]/5 rounded-full blur-[120px]"></div>

      <div 
        ref={containerRef}
        className="relative z-10 w-full max-w-5xl border border-[#E6A15A]/20 bg-[#0A0A0A]/80 p-10 sm:p-16 shadow-[0_0_50px_rgba(230,161,90,0.05)] backdrop-blur-md"
      >
        <div className="flex flex-col space-y-8 md:space-y-12 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-vt323 text-[#E6A15A] text-center">
          {lines.map((line, index) => (
            <p 
              key={index}
              className="animated-line"
            >
              <span className={index >= 4 ? 'text-[#3CC7D6] glow-text' : ''}>
                {line}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
