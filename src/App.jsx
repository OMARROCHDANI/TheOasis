import React from 'react';
import BootScreen from './components/BootScreen';
import CRTOverlay from './components/CRTOverlay';
import StarParticles from './components/StarParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import SectionDivider from './components/SectionDivider';
import Stack from './components/Stack';
import Projects from './components/Projects';
import TerminalCTA from './components/TerminalCTA';
import Footer from './components/Footer';
import GalleryDemo from './components/GalleryDemo';


function App() {
  return (
    <main className="bg-[#0A0A0A] text-[#E6A15A] min-h-screen relative font-vt323 overflow-x-hidden">
      <BootScreen />
      <CRTOverlay />
      <StarParticles />
      <Navbar />
      <Hero />
      <GalleryDemo />
      <Marquee />
      <About />
      <SectionDivider />
      <Stack />
      <SectionDivider />
      <Projects />
      <SectionDivider />


      <SectionDivider />
      <TerminalCTA />
      <Footer />
    </main>
  );
}

export default App;
