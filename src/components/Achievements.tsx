import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, GraduationCap, Lightbulb } from 'lucide-react';

export const Achievements: React.FC = () => {
  // Simple state counters
  const [cgpa, setCgpa] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);

  useEffect(() => {
    // Animate CGPA
    let cgpaStart = 0;
    const cgpaEnd = 9.3;
    const cgpaDuration = 1500;
    const cgpaStep = (cgpaEnd / cgpaDuration) * 30;
    const cgpaTimer = setInterval(() => {
      cgpaStart += cgpaStep;
      if (cgpaStart >= cgpaEnd) {
        setCgpa(cgpaEnd);
        clearInterval(cgpaTimer);
      } else {
        setCgpa(Number(cgpaStart.toFixed(2)));
      }
    }, 30);

    // Animate Projects
    let projStart = 0;
    const projEnd = 4;
    const projTimer = setInterval(() => {
      projStart += 1;
      if (projStart >= projEnd) {
        setProjectsCount(projEnd);
        clearInterval(projTimer);
      } else {
        setProjectsCount(projStart);
      }
    }, 150);

    // Animate Students Coordinate
    let studStart = 0;
    const studEnd = 1000;
    const studStep = Math.ceil(studEnd / 40);
    const studTimer = setInterval(() => {
      studStart += studStep;
      if (studStart >= studEnd) {
        setStudentsCount(studEnd);
        clearInterval(studTimer);
      } else {
        setStudentsCount(studStart);
      }
    }, 30);

    return () => {
      clearInterval(cgpaTimer);
      clearInterval(projTimer);
      clearInterval(studTimer);
    };
  }, []);

  const achievementsList = [
    {
      title: 'High Academic Score',
      icon: <GraduationCap className="text-purple-400" size={22} />,
      metric: `${cgpa} CGPA`,
      desc: 'Ranked in the top echelon of the Integrated M.Tech Software Engineering cohort at VIT Vellore.'
    },
    {
      title: 'End-to-End AI Projects',
      icon: <Code className="text-pink-400" size={22} />,
      metric: `${projectsCount} Core builds`,
      desc: 'Engineered advanced ML predictors using SHAP, PCA, random forests, and Ethereum smart contract integrations.'
    },
    {
      title: 'Placement Coordination',
      icon: <Briefcase className="text-cyan-400" size={22} />,
      metric: `${studentsCount}+ Students`,
      desc: 'Managed operations and recruitment drive communications for a large candidate batch and MNC HRs.'
    },
    {
      title: 'Patent Published',
      icon: <Lightbulb className="text-emerald-400" size={22} />,
      metric: 'App #202641075271',
      desc: 'Published a patent on "Collaborative Edge-Intelligent Micro-Green Point Tokenization System for Privacy-Preserving Ghost Load Management" (Co-invented with Dr. R. Charanya) on June 26, 2026.'
    }
  ];

  return (
    <section id="achievements" className="relative py-24 border-t border-slate-900/60 overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[350px] h-[350px] bg-pink-600/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-purple-400 mb-2">Milestones</h2>
          <p className="text-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Key Achievements
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border-glow flex flex-col justify-between"
            >
              <div>
                {/* Metric Icon Box */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-white font-mono text-2xl font-extrabold tracking-tight">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-white tracking-wide mb-2">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Verified Ribbon */}
              <div className="flex items-center space-x-1.5 mt-6 text-[10px] text-pink-400/80 font-mono tracking-widest uppercase font-semibold">
                <Award size={10} className="text-pink-400" />
                <span>Verified Milestone</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Achievements;
