import React from 'react';
import { motion } from 'motion/react';
import { education } from '../data';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Academic <span className="text-gradient">Background</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            My educational journey and academic achievements at Cebu Institute of Technology - University.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-8 h-8 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-neon-purple font-medium">{edu.degree}</p>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full glass border-white/10 text-sm font-bold text-slate-400">
                  {edu.period}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-5 h-5 text-neon-blue" />
                    <h4 className="text-lg font-bold text-white">Honors & Awards</h4>
                  </div>
                  <ul className="space-y-4">
                    {edu.awards.map((award, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <BookOpen className="w-5 h-5 text-neon-purple" />
                    <h4 className="text-lg font-bold text-white">Key Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {edu.courses.map((course, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-400 uppercase tracking-widest"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
