import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, ShieldCheck, Zap, Globe } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),  // Core reveal
      setTimeout(() => setStep(2), 1500), // Name reveal
      setTimeout(() => setStep(3), 3000), // Keywords reveal
      setTimeout(() => setStep(4), 4500), // Start fade out
      setTimeout(onComplete, 5000)        // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-dark-bg flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Static Background Grid - Performance Friendly */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Simplified AI Core */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-12"
            >
              <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-lg shadow-neon-purple/20">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                
                {/* Single Smooth Rotating Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t-2 border-neon-cyan/30 rounded-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Name Reveal - Simplified */}
        <div className="h-20 flex flex-col items-center justify-center mb-6">
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-[0.2em]">
                  Jamiel Kyne <span className="text-gradient">Pinca</span>
                </h1>
                <div className="h-[1px] w-24 bg-white/10 mx-auto mt-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Keywords Reveal - Simplified */}
        <div className="h-8 flex items-center justify-center">
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-6 md:gap-10 text-slate-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase"
              >
                <span>Innovation</span>
                <div className="w-1 h-1 rounded-full bg-slate-800" />
                <span>Impact</span>
                <div className="w-1 h-1 rounded-full bg-slate-800" />
                <span>Intelligence</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
