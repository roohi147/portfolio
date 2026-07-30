import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, LayoutTemplate, Settings, Cpu, Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="text-pink-400" size={18} />,
      skills: [
        { name: 'Scikit-learn', level: 90 },
        { name: 'XGBoost & LightGBM', level: 85 },
        { name: 'Neural Networks (DL)', level: 80 },
        { name: 'SHAP (Explainable AI)', level: 85 },
        { name: 'Random Forest & SVM', level: 90 },
        { name: 'Large Language Models (LLMs)', level: 88 },
        { name: 'Prompt Engineering', level: 90 },
      ],
    },
    {
      title: 'Data Science',
      icon: <Cpu className="text-cyan-400" size={18} />,
      skills: [
        { name: 'Pandas & NumPy', level: 95 },
        { name: 'Matplotlib & Seaborn', level: 90 },
        { name: 'EDA (Exploratory Data Analysis)', level: 92 },
        { name: 'Feature Engineering', level: 88 },
        { name: 'PCA (Dimensionality Reduction)', level: 80 },
      ],
    },
    {
      title: 'Programming & Languages',
      icon: <Code2 className="text-purple-400" size={18} />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 88 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'C & C++', level: 80 },
      ],
    },
    {
      title: 'Full Stack Development',
      icon: <LayoutTemplate className="text-indigo-400" size={18} />,
      skills: [
        { name: 'React.js', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'SQL & Database Design', level: 85 },
        { name: 'HTML5 & CSS3', level: 92 },
      ],
    },
    {
      title: 'Tools & Core CS',
      icon: <Settings className="text-emerald-400" size={18} />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Data Structures & Algorithms', level: 88 },
        { name: 'Object-Oriented Programming (OOP)', level: 90 },
        { name: 'Jupyter & Google Colab', level: 95 },
        { name: 'Software Engineering & DBMS', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-slate-900/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-purple-400 mb-2">My Skillset</h2>
          <p className="text-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Technical Superpowers
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Desktop Tabs / Mobile Select */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeTab === index
                  ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.15)] font-bold'
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {categories[activeTab].skills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl border-glow flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-display font-semibold text-white text-base sm:text-lg">
                  {skill.name}
                </span>
                <span className="font-mono text-xs font-bold text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-lg">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress track */}
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-[1px] border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                />
              </div>

              {/* Skill description hints */}
              <div className="flex items-center space-x-1.5 mt-2.5 text-[11px] text-slate-400 font-mono uppercase tracking-widest">
                <Sparkles size={10} className="text-cyan-400 animate-pulse" />
                <span>Verified Competency & Application</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Counter quick stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-panel p-5 rounded-xl text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">25+</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">Tools & Libs</p>
          </div>
          <div className="glass-panel p-5 rounded-xl text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-purple-400">9.3</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">Academic CGPA</p>
          </div>
          <div className="glass-panel p-5 rounded-xl text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-pink-400">5+</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">AI Models</p>
          </div>
          <div className="glass-panel p-5 rounded-xl text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400">100%</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">Dedication</p>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Skills;
