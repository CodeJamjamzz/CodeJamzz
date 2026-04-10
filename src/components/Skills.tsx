import React from 'react';
import { motion } from 'motion/react';
import { skills } from '../data';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Coffee, 
  Zap, 
  Smartphone, 
  Leaf, 
  Atom, 
  Link as LinkIcon, 
  Container, 
  Palette, 
  Send, 
  FileJson,
  Brain,
  Database,
  Globe,
  Figma,
  Github
} from 'lucide-react';

const skillIconMap: Record<string, any> = {
  "Python": Terminal,
  "C": Cpu,
  "C++": Cpu,
  "Java": Coffee,
  "JavaScript": FileJson,
  "TypeScript": FileJson,
  "Kotlin": Smartphone,
  "Django": Leaf,
  "Spring Boot": Leaf,
  "React": Atom,
  "TensorFlow": Brain,
  "FastAPI": Zap,
  "LangChain": LinkIcon,
  "Scikit-Learn": Brain,
  "Git/GitHub": Github,
  "Docker": Container,
  "Figma": Palette,
  "Canva": Palette,
  "VS Code": Code2,
  "PyCharm": Code2,
  "Postman": Send,
  "AI/ML": Brain,
  "Innovation": Zap,
  "Startups": Globe,
  "Tech for Social Impact": Globe,
  "Product Ideation": Brain
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            A curated collection of technologies and tools I've mastered to build 
            intelligent, scalable, and impactful solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="glass p-8 rounded-[2rem] border-white/5 hover:border-white/10 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors tracking-tight">
                    {skillGroup.category}
                  </h3>
                  <div className="h-[1px] w-12 bg-neon-purple/30 group-hover:w-20 transition-all duration-500 mt-2" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (groupIndex * 0.1) + (skillIndex * 0.03) }}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-neon-cyan/20 hover:bg-neon-cyan/5 transition-all"
                    >
                      <span className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
