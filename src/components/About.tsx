import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { User, Target, GraduationCap, Brain, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Deciphering <span className="text-gradient">Intelligence</span>
          </h2>
          
          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-3xl mx-auto">
            {personalInfo.about}
          </p>

          <div className="flex justify-center mb-16">
            <motion.a
              href={personalInfo.datacamp}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold shadow-lg shadow-neon-purple/20 group"
            >
              <Brain className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>View DataCamp Portfolio</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl border-white/10"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center shrink-0 border border-neon-purple/20">
                  <Target className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">My Mission</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">To build ethical AI systems that enhance human capabilities and solve complex societal challenges.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl border-white/10"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-neon-blue/20 flex items-center justify-center shrink-0 border border-neon-blue/20">
                  <GraduationCap className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Current Focus</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{personalInfo.currentFocus}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
