import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Star, ShieldCheck, Heart } from 'lucide-react';

export const Leadership: React.FC = () => {
  const qualities = [
    {
      title: 'Placement Student Coordinator',
      icon: <Award className="text-purple-400" size={24} />,
      desc: 'Formed a key bridge between global enterprise recruiters and candidate cohorts, ensuring successful matching and pipeline logistics.',
    },
    {
      title: 'Team Coordination',
      icon: <Users className="text-pink-400" size={24} />,
      desc: 'Directed groups of student volunteers to manage mass assessments, candidate check-ins, and complex mock drive evaluations.',
    },
    {
      title: 'Recruitment Support',
      icon: <ShieldCheck className="text-cyan-400" size={24} />,
      desc: 'Maintained strict protocols for scheduling, candidate testing, score compilation, and direct executive interactions.',
    },
    {
      title: 'Student Engagement',
      icon: <Heart className="text-indigo-400" size={24} />,
      desc: 'Delivered pre-placement talks, answered cohort queries, and guided students to match corporate benchmarks.',
    },
  ];

  return (
    <section id="leadership" className="relative py-24 border-t border-slate-900/60 overflow-hidden">
      {/* Background radial shine */}
      <div className="absolute right-10 bottom-10 w-[300px] h-[300px] bg-cyan-600/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-purple-400 mb-2">Coordination & Teamwork</h2>
          <p className="text-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Leadership & Interpersonal Skills
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Spotlight Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-55px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border-glow flex flex-col justify-between"
            >
              <div>
                {/* Qual Icon */}
                <div className="p-3 bg-slate-950/60 w-fit rounded-xl border border-white/5 mb-4 shadow-inner">
                  {item.icon}
                </div>

                <h3 className="text-lg font-heading font-bold text-white tracking-wide mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Verified badge */}
              <div className="flex items-center space-x-1.5 mt-5 text-[10px] text-cyan-400/80 font-mono tracking-wider uppercase font-semibold">
                <Star size={10} className="fill-cyan-400" />
                <span>CORE STRENGTH</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Leadership;
