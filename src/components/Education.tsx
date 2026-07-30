import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, School } from 'lucide-react';

export const Education: React.FC = () => {
  const educationList = [
    {
      degree: 'Integrated M.Tech (Software Engineering)',
      school: 'Vellore Institute of Technology (VIT), Vellore',
      duration: '2023 - Present',
      scoreLabel: 'CGPA',
      scoreValue: '9.3 / 10',
      description: 'Acquiring advanced fundamentals in Software Architectures, Machine Learning pipelines, Algorithm Design, Database Management Systems, and Intelligent computing platforms.',
      icon: <GraduationCap size={16} />
    },
    {
      degree: 'Intermediate (Class XII) - General Stream',
      school: 'Sai Sri Chaitanya Junior College, Palamaner, Chittoor',
      duration: '2021 - 2023',
      scoreLabel: 'Percentage',
      scoreValue: '97.7%',
      description: 'Strengthened core mathematics, physics, and programming foundations, graduating with stellar high-distinction grades.',
      icon: <School size={16} />
    }
  ];

  return (
    <section id="education" className="relative py-24 border-t border-slate-900/60 overflow-hidden">
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-purple-600/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-purple-400 mb-2">My Studies</h2>
          <p className="text-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Academic Background
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline structure */}
        <div className="relative border-l-2 border-pink-500/20 ml-4 md:ml-8 space-y-12">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12">
              
              {/* Dot Icon indicator */}
              <div className="absolute -left-[17px] top-0 bg-slate-950 border-2 border-pink-500 w-8 h-8 rounded-full flex items-center justify-center text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.3)] z-10">
                {edu.icon}
              </div>

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border-glow flex flex-col md:flex-row md:items-start gap-6"
              >
                {/* Main details */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-2.5 py-0.5 rounded-md">
                      {edu.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-wide">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-slate-300 font-medium text-sm flex items-center gap-1.5">
                    <BookOpen size={14} className="text-slate-400" />
                    <span>{edu.school}</span>
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Score Widget */}
                <div className="shrink-0 flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-950/60 border border-white/5 w-full md:w-36 text-center shadow-inner">
                  <Award size={24} className="text-cyan-400 mb-1" />
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">{edu.scoreLabel}</span>
                  <span className="text-white text-lg font-extrabold mt-1 font-mono tracking-tight">{edu.scoreValue}</span>
                </div>

              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Education;
