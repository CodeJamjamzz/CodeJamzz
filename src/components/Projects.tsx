import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Github, ExternalLink, Database, Cpu, BarChart3, Layers } from 'lucide-react';

const Projects = () => {
  const categories = ["All", "AI / Machine Learning", "Software Engineering"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Technical <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto mb-10"
          >
            A comprehensive showcase of my technical projects, ranging from 
            intelligent AI systems to robust software engineering solutions.
          </motion.p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-lg shadow-neon-purple/20' 
                    : 'glass text-slate-400 hover:text-white border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-[2rem] overflow-hidden flex flex-col group border-white/5 hover:border-white/20 transition-all duration-700"
              >
                {/* Project Image Area */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full glass border-white/20 text-[9px] font-bold text-white uppercase tracking-widest backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Quick Links on Image */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-8 h-8 rounded-full glass border-white/20 flex items-center justify-center text-white hover:bg-neon-purple/20 transition-colors backdrop-blur-md"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-8 h-8 rounded-full glass border-white/20 flex items-center justify-center text-white hover:bg-neon-blue/20 transition-colors backdrop-blur-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors mb-1 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-neon-purple text-[10px] font-bold uppercase tracking-widest">{project.subtitle}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6 flex-grow">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center shrink-0 border border-neon-purple/20">
                        <Cpu className="w-4 h-4 text-neon-purple" />
                      </div>
                      <div>
                        <p className="text-slate-500 font-bold uppercase text-[8px] tracking-widest mb-0.5">Challenge</p>
                        <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{project.problem}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center shrink-0 border border-neon-cyan/20">
                        <Layers className="w-4 h-4 text-neon-cyan" />
                      </div>
                      <div>
                        <p className="text-slate-500 font-bold uppercase text-[8px] tracking-widest mb-0.5">Solution</p>
                        <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{project.approach}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center shrink-0 border border-neon-purple/20">
                        <BarChart3 className="w-4 h-4 text-neon-purple" />
                      </div>
                      <div>
                        <p className="text-slate-500 font-bold uppercase text-[8px] tracking-widest mb-0.5">Outcome</p>
                        <p className="text-neon-cyan text-xs font-bold line-clamp-1">{project.results}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <motion.a 
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white group/link"
                    >
                      <span>Case Study</span>
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-neon-cyan/20 transition-colors">
                        <ExternalLink className="w-3 h-3 text-neon-cyan group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
