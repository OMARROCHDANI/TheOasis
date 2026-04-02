import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutImg from '../assets/about_bg.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
                once: true
            }
        });

        tl.from('.terminal-frame', {
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.about-title', {
            y: -20,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(2)'
        }, "-=0.5")
        .from('.about-image-container', {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, "-=0.4")
        .from('.about-text-content > *', {
            x: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power2.out'
        }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section id="journey" ref={containerRef} className="w-full min-h-screen bg-black py-24 md:py-32 px-6 relative overflow-hidden flex items-center justify-center">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 retro-grid opacity-10"></div>
            <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-sunset-orange/5 rounded-full blur-[150px]"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-oasis-blue/5 rounded-full blur-[150px]"></div>

            {/* Decorative Corners - Matching Gallery Style */}
            <div className="corner-decor absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-sunset-orange opacity-40 pointer-events-none" />
            <div className="corner-decor absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-sunset-orange opacity-40 pointer-events-none" />
            <div className="corner-decor absolute bottom-12 left-12 w-16 h-16 border-b-2 border-l-2 border-sunset-orange opacity-40 pointer-events-none" />
            <div className="corner-decor absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-sunset-orange opacity-40 pointer-events-none" />

            {/* Main Terminal Frame */}
            <div className="terminal-frame relative z-10 w-full max-w-6xl bg-black/40 backdrop-blur-xl pixel-border-soft overflow-hidden">
                {/* Terminal Header */}
                <div className="w-full bg-desert-sand/10 border-b border-desert-sand/30 p-3 flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-sunset-orange/60 shadow-[0_0_5px_rgba(255,140,66,0.5)]"></div>
                        <div className="w-3 h-3 rounded-full bg-oasis-blue/60 shadow-[0_0_5px_rgba(60,199,214,0.5)]"></div>
                        <div className="w-3 h-3 rounded-full bg-palm-green/60 shadow-[0_0_5px_rgba(46,139,87,0.5)]"></div>
                    </div>
                    <div className="font-press-start text-[8px] md:text-[10px] text-desert-sand/60 tracking-wider">
                        FILE: SYSTEM_MANIFEST.LOG — ACCESS: GRANTED
                    </div>
                    <div className="flex gap-4">
                        <div className="w-4 h-1 bg-desert-sand/40"></div>
                        <div className="w-4 h-4 border border-desert-sand/40"></div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
                    
                    {/* Left Panel: Visual */}
                    <div className="lg:col-span-5 about-image-container relative group">
                        <div className="absolute inset-0 bg-sunset-orange/20 mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
                        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden border border-desert-sand/20 shadow-2xl">
                            <img 
                                src={AboutImg} 
                                alt="Digital Oasis Landscape" 
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                            />
                            {/* CRT/Scanline Overlay specifically for the image */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-20 opacity-30"></div>
                        </div>
                        {/* Caption Label */}
                        <div className="absolute -bottom-4 right-4 bg-black border border-desert-sand p-2 px-4 shadow-xl z-30">
                            <span className="font-vt323 text-xs text-desert-sand leading-none block">COORD: 24.9°N, 55.3°E</span>
                        </div>
                    </div>

                    {/* Right Panel: Data Content */}
                    <div className="lg:col-span-7 about-text-content space-y-8">
                        <div className="space-y-2">
                            <h2 className="about-title text-2xl md:text-4xl text-glow-gold font-press-start leading-tight">
                                THE OASIS<br />PROTOCOL
                            </h2>
                            <div className="h-0.5 w-24 bg-gradient-to-r from-sunset-orange to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-vt323">
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-widest text-desert-sand/50">Identification</p>
                                <p className="text-xl text-desert-sand">PROJECT_OASIS.V1</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-widest text-desert-sand/50">Current Origin</p>
                                <p className="text-xl text-desert-sand">0X-BEYOND THE DUNE</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="font-vt323 text-xl md:text-2xl text-desert-sand/90 leading-relaxed italic border-l-4 border-sunset-orange/40 pl-6 py-2">
                                "The desert is loud, but here is stillness. Not every oasis is a mirage. Some are built brick by digital brick."
                            </p>
                            <p className="font-vt323 text-lg md:text-xl text-desert-sand/70 leading-relaxed">
                                Our mission is to create a sanctuary in the digital void. We blend heritage with high-tech, crafting experiences where data flows freely and dreams are rendered in hues of sunset orange and oasis blue. We believe in purposeful growth, centered around clarity, stillness, and the timeless concept of Barakah.
                            </p>
                        </div>

                        {/* Status Grid */}
                        <div className="bg-desert-sand/5 border border-desert-sand/20 p-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-press-start text-[10px] text-oasis-blue">SYSTEM STATUS</span>
                                <span className="font-vt323 text-palm-green glow-text">ONLINE // OPTIMAL</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                                    <div key={i} className={`h-1.5 rounded-full ${i <= 8 ? 'bg-oasis-blue/50' : 'bg-oasis-blue/10'}`}></div>
                                ))}
                            </div>
                            <p className="font-vt323 text-xs text-desert-sand/40 text-center tracking-widest">
                                LAST_SCAN: SUCCESSFUL | LATENCY: 12ms | INTEGRITY: 99.9%
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Status Marquee */}
                <div className="w-full bg-black/80 border-t border-desert-sand/20 py-2 overflow-hidden flex">
                    <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite] font-vt323 text-[10px] text-desert-sand/40 tracking-[0.3em] uppercase">
                        {[...Array(4)].map((_, i) => (
                            <span key={i} className="px-8">
                                SCANNING FOR STREAMS ... LOADING ASSETS ... BUFFERING REALITY ... CONNECTION STABLE ... NO MIRAGE DETECTED ... 
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}} />
        </section>
    );
};

export default About;

