import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Competitions from './components/Competitions';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleSplashComplete = () => {
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-neon-purple/30 selection:text-white relative overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ParticleBackground />
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Competitions />
              <Certifications />
              <Skills />
              <Education />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
