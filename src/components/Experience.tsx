import React from 'react';
import { motion } from 'motion/react';
import { experience } from '../data';
import { Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            A timeline of my academic and professional growth in the field of 
            Artificial Intelligence and Software Engineering.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-blue to-transparent md:-translate-x-1/2 opacity-30 sm:block hidden" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-cyan md:-translate-x-1/2 z-10 top-0 shadow-[0_0_10px_rgba(0,255,255,0.5)] sm:block hidden" />

                <div className="md:w-1/2 pl-8 md:pl-0">
                  <div className={`glass p-8 rounded-3xl border-white/5 hover:border-white/20 transition-all duration-500 group ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-xs font-bold mb-4 border border-neon-purple/20">
                      {item.period}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neon-blue font-medium mb-4">{item.company}</p>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
