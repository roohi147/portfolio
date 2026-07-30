import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Send, Sparkles } from 'lucide-react';

const roles = [
  'Integrated M.Tech Software Engineering Student',
  'AI Engineer',
  'Machine Learning Developer',
  'Full Stack Developer',
  'Placement Student Coordinator',
];

export const Hero: React.FC = () => {

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: any;

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(45);
      }, typingSpeed);
    } else {
      // Adding character
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(90);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentRole) {
      // Hold before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(200);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full filter blur-[100px] animate-blob -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full filter blur-[120px] animate-blob animation-delay-2000 -z-10" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-600/15 rounded-full filter blur-[90px] animate-blob animation-delay-4000 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Intro Accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold mb-6 tracking-wide"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span>Available for Placements & Research Roles</span>
        </motion.div>

        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold tracking-tight mb-4 leading-none"
        >
          <span className="text-white block sm:inline">SHAIK ROOHI </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block sm:inline">
            NAAZ
          </span>
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-16 md:h-12 flex items-center justify-center mb-8"
        >
          <p className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-slate-300">
            I am a <span className="text-white font-semibold underline decoration-pink-500 decoration-3 underline-offset-4 typing-caret pr-1">{displayText}</span>
          </p>
        </motion.div>

        {/* Intro Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed font-sans"
        >
          Solving complex real-world challenges through intelligent systems, machine learning pipelines, and highly scalable web technologies. Bridging the gap between raw data models and user-centered design.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          {/* View Projects CTA */}
          <button
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-white/10"
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </button>

          {/* Hire Me CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-white/5 border border-slate-700/80 hover:border-purple-500/50 hover:bg-purple-950/15 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          >
            <Send size={16} className="text-purple-400" />
            <span>Hire Me</span>
          </button>

          {/* Download Resume Button */}
          <a
            href="mailto:shaikroohi147@gmail.com?subject=Request%20for%20Resume"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl text-base font-bold text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-transparent hover:border-slate-800 transition-all duration-300 cursor-pointer"
          >
            <FileText size={16} />
            <span>Request Resume</span>
          </a>
        </motion.div>
      </div>

      {/* Parallax bottom indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={() => scrollToSection('about')}>
        <span className="text-xs uppercase font-semibold tracking-widest text-slate-400">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full p-1 flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
