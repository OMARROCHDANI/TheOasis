import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InfiniteGallery from "./ui/3d-gallery-photography";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryDemo() {
    const sectionRef = useRef(null);
    const sampleImages = [
        { src: 'https://images.unsplash.com/photo-1568405336404-1fefdca58699?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
        { src: 'https://images.unsplash.com/photo-1730647730769-ad0cb5591e14?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' },
        { src: 'https://images.unsplash.com/photo-1628676895419-82aec7a38039?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3' },
        { src: 'https://images.unsplash.com/photo-1711769366206-a2849cecd0e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
        { src: 'https://images.unsplash.com/photo-1609151712779-4f86b3de7308?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 5' },
        { src: 'https://images.unsplash.com/photo-1679056251071-aab5fb606158?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 6' },
        { src: 'https://images.unsplash.com/photo-1691520326140-05a37ea5d9c9?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 7' },
        { src: 'https://images.unsplash.com/photo-1669024513552-56127b2d0d85?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 8' },
    ];

    const [scrollProgress, setScrollProgress] = React.useState(0);

    useGSAP(() => {
        // Pin the gallery section
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=110% ", // Pin for only 30% of a screen height
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                setScrollProgress(self.progress);
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative h-screen w-full bg-black overflow-hidden border-y border-desert-sand/20 [isolation:isolate]">
            <InfiniteGallery
                images={sampleImages}
                speed={1.2}
                visibleCount={12}
                className="h-full w-full"
                externalProgress={scrollProgress}
            />
            {/* Title Overlay with font-press-start, white color and stark inversing effect */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-center px-3 mix-blend-difference z-20">
                <h1 className="font-press-start text-3xl md:text-5xl lg:text-8xl tracking-tighter text-glow-gold glow-text">
                    PIXEL<br />ARCHIVE
                </h1>
            </div>

            {/* Navigation hint with font-vt323 */}
            <div className="text-center absolute bottom-12 left-0 right-0 font-vt323 uppercase text-xs md:text-sm tracking-[0.2em] text-desert-sand pointer-events-none">
                <div className="flex flex-col gap-2 items-center">
                    <p className="px-4 py-1 bg-black/80 pixel-border-soft backdrop-blur-sm shadow-xl">
                        INPUT: [ MOUSE_WHEEL / ARROWS / TOUCH ]
                    </p>
                    <p className="text-desert-sand/50 text-[10px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        SYSTEM STATUS: AUTO-PLAY ENABLED
                    </p>
                </div>
            </div>

            {/* Decorative corners for a retro UI feel */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-sunset-orange opacity-40 pointer-events-none" />
            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-sunset-orange opacity-40 pointer-events-none" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-sunset-orange opacity-40 pointer-events-none" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-sunset-orange opacity-40 pointer-events-none" />
        </section>
    );
}
