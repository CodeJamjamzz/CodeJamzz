import React from 'react';
import { personalInfo } from '../data';
import { Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Cpu className="w-6 h-6 text-neon-purple" />
          <span className="text-gradient font-display font-bold">CodeJamzz</span>
        </div>
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind.
        </p>
        
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
