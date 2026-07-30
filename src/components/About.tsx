import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Code, GraduationCap } from 'lucide-react';
import profileImg from '../assets/profile.png';

export const About: React.FC = () => {
  const highlights = [
    { icon: <GraduationCap className="text-purple-400" size={24} />, title: 'Integrated M.Tech', desc: 'Software Engineering at VIT (Vellore)' },
    { icon: <Award className="text-pink-400" size={24} />, title: 'Outstanding CGPA', desc: '9.3 / 10 Academic Score' },
    { icon: <Brain className="text-cyan-400" size={24} />, title: 'AI & ML Focus', desc: 'Deep learning & explainable AI solutions' },
    { icon: <Code className="text-indigo-400" size={24} />, title: 'Full Stack Coding', desc: 'Scalable modern web architectures' },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-slate-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display text-xs uppercase font-extrabold tracking-widest text-purple-400 mb-2">About Me</h2>
          <p className="text-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Driven by Data, Built for Scale
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Glowing Avatar Frame - Left side (Cols 1-5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-80 sm:w-[350px] sm:h-[350px] flex items-center justify-center">
              
              {/* Outer spinning dash ring */}
              <div className="absolute inset-0 border border-dashed border-purple-500/30 rounded-full animate-[spin_40s_linear_infinite]" />
              {/* Inner glowing pulse ring */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 p-[3px] shadow-[0_0_40px_rgba(139,92,246,0.3)] animate-[spin_15s_linear_infinite]">
                <div className="w-full h-full rounded-full bg-[#030014]" />
              </div>

              {/* Central avatar design (glowing border photo) */}
              <div className="absolute inset-5 rounded-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center border border-white/5 shadow-inner">
                {/* Profile Photo */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full flex flex-col items-center justify-center p-0"
                >
                  <img src={profileImg} className="w-full h-full object-cover rounded-full" alt="Shaik Roohi Naaz" />
                </motion.div>
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 glass-panel px-3.5 py-1.5 rounded-xl border border-white/10 flex items-center space-x-1.5"
              >
                <GraduationCap className="text-purple-400" size={16} />
                <span className="text-xs font-mono font-bold text-white">VIT M.Tech</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-2 glass-panel px-3.5 py-1.5 rounded-xl border border-white/10 flex items-center space-x-1.5"
              >
                <Award className="text-cyan-400" size={16} />
                <span className="text-xs font-mono font-bold text-white">CGPA 9.3</span>
              </motion.div>
            </div>
          </div>

          {/* About Summary - Right side (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide">
              Who is Shaik Roohi Naaz?
            </h3>
            
            <p className="text-slate-300 leading-relaxed font-sans text-base sm:text-lg">
              I am an **Integrated M.Tech Software Engineering** student at Vellore Institute of Technology (VIT). Driven by an intense interest in intelligent software systems, I specialize in engineering robust pipelines for **Artificial Intelligence** and **Machine Learning** while building premium, interactive **Full Stack** web architectures.
            </p>

            <p className="text-slate-300 leading-relaxed font-sans text-base">
              My philosophy lies in combining clean mathematical algorithms with modern software engineering practices. I apply data structures, optimization methods, and explainable AI paradigms (like SHAP) to turn complex datasets into explainable, automated, and high-yielding business assets.
            </p>

            {/* highlights cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="glass-panel glass-panel-hover p-4 rounded-xl flex items-start space-x-4 border-glow"
                >
                  <div className="p-2 bg-slate-900/60 rounded-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm font-display tracking-wide">{item.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default About;
