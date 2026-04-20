import React from 'react';
import { motion } from 'motion/react';
import { competitions } from '../data';
import { Trophy, Code2, Award, ExternalLink } from 'lucide-react';

const Competitions = () => {
  return (
    <section id="competitions" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Hackathons & <span className="text-gradient">Competitions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Showcasing my competitive spirit and ability to build innovative 
            solutions under pressure.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {competitions.map((comp, index) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(45%-1rem)] max-w-xl"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <comp.icon className="w-7 h-7 text-neon-cyan" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-[10px] font-bold uppercase tracking-widest">
                    {comp.result}
                  </div>
                </div>

                {comp.image && (
                  /* Changed aspect-video to aspect-[3/2] or aspect-[4/3] */
                  <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 aspect-[3/2]"> 
                    <img 
                      src={comp.image} 
                      alt={comp.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
                  {comp.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="font-bold text-neon-blue uppercase text-[9px] tracking-widest">Role:</span>
                    {comp.role}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="font-bold text-neon-blue uppercase text-[9px] tracking-widest">Team:</span>
                    {comp.team}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="font-bold text-neon-blue uppercase text-[9px] tracking-widest">Project:</span>
                    {comp.project}
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {comp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 mb-6">
                  {comp.tech.map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                {comp.link && (
                  <motion.a 
                    href={comp.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-neon-cyan group/link"
                  >
                    View Competition Post <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
