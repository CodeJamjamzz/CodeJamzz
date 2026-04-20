import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ChevronDown, BrainCircuit } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {/* Profile Picture Space */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 relative inline-block"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-br from-neon-purple to-neon-blue relative z-10 overflow-hidden shadow-2xl shadow-neon-purple/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg border-2 border-white/10">
                <img 
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover hover:grayscale transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-0 -m-4 border border-neon-purple/20 rounded-full animate-pulse" />
            <div className="absolute inset-0 -m-8 border border-neon-blue/10 rounded-full animate-pulse delay-700" />
            <div className="absolute inset-0 -m-12 border border-white/5 rounded-full animate-pulse delay-1000" />
          </motion.div>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-tight"
          >
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold text-lg shadow-lg shadow-neon-purple/20 hover:shadow-neon-purple/40 transition-all"
            >
              View My Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl glass border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div> */}
    </section>
  );
};

export default Hero;
