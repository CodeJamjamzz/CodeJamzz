import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Mail, Github, Linkedin, Send, Phone, MapPin, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass border-white/10 text-[10px] font-bold text-neon-cyan uppercase tracking-[0.3em] mb-6"
          >
            Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-8"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Whether you have a question, a project idea, or just want to say hi, 
            my inbox is always open. Let's build something extraordinary together.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Email Card - Large */}
            <motion.a 
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(168, 85, 247, 0.08)" }}
              className="md:col-span-2 md:row-span-1 glass p-8 rounded-[2rem] border-white/5 flex flex-col justify-between group transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-neon-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-7 h-7 text-neon-purple" />
              </div>
              <div className="mt-8">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Primary Contact</p>
                <h3 className="text-xl md:text-2xl font-bold text-white break-all">{personalInfo.email}</h3>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(56, 189, 248, 0.08)" }}
              className="md:col-span-2 glass p-8 rounded-[2rem] border-white/5 flex flex-col justify-between group transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-7 h-7 text-neon-blue" />
              </div>
              <div className="mt-8">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Line</p>
                <h3 className="text-xl md:text-2xl font-bold text-white">{personalInfo.phone}</h3>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 211, 238, 0.08)" }}
              className="md:col-span-1 glass p-6 rounded-[2rem] border-white/5 flex flex-col items-center text-center group transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                <MapPin className="w-6 h-6 text-neon-cyan" />
              </div>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Location</p>
              <p className="text-white text-sm font-medium">{personalInfo.location}</p>
            </motion.div>

            {/* Social Cards */}
            <motion.a 
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="md:col-span-1 glass p-6 rounded-[2rem] border-white/5 flex flex-col items-center justify-center group transition-all"
            >
              <Github className="w-8 h-8 text-white group-hover:text-neon-blue transition-colors mb-2" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">GitHub</span>
            </motion.a>
            
            <motion.a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="md:col-span-1 glass p-6 rounded-[2rem] border-white/5 flex flex-col items-center justify-center group transition-all"
            >
              <Linkedin className="w-8 h-8 text-white group-hover:text-neon-cyan transition-colors mb-2" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">LinkedIn</span>
            </motion.a>

            <motion.a 
              href={personalInfo.facebook}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="md:col-span-1 glass p-6 rounded-[2rem] border-white/5 flex flex-col items-center justify-center group transition-all"
            >
              <Facebook className="w-8 h-8 text-white group-hover:text-neon-purple transition-colors mb-2" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Facebook</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
