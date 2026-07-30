import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Placement Student Coordinator',
      company: 'Vellore Institute of Technology (VIT)',
      duration: 'July 2026 - Present',
      description: 'Serving as a lead student liaison between students and recruiter relations to facilitate smooth university hiring pipelines.',
      bullets: [
        'Coordinating end-to-end placement and hiring drives for top tier engineering and technology companies.',
        'Communicating seamlessly with corporate HR recruiters and 1000+ prospective student candidates.',
        'Organizing schedules, written assessments, technical interviews, and logistics for virtual/on-campus drives.',
        'Supporting the core operations of the VIT Placement Cell with high confidentiality and professionalism.',
        'Developing leadership qualities, critical problem solving, event management, and team engagement.'
      ],
      tags: ['Leadership', 'Event Coordination', 'Student Engagement', 'Corporate Relations', 'Professionalism']
    },
    {
      role: 'Machine Learning Intern',
      company: 'Saiket Systems',
      duration: 'June 2026 - July 2026',
      description: 'Completed a hands-on Machine Learning internship, focused on constructing, training, and optimizing predictive systems and analytical pipelines.',
      bullets: [
        'Designed, trained, and evaluated Machine Learning models to address complex prediction and classification datasets.',
        'Collaborated on data preprocessing, feature analysis, and accuracy tuning to enhance model reliability.',
        'Exhibited exceptional analytical skills, problem-solving, and attention to detail during model debugging.',
        'Acquired practical experience in translating theoretical ML concepts into functional, real-world solutions.'
      ],
      tags: ['Machine Learning', 'Python', 'Predictive Modeling', 'Feature Engineering', 'Model Evaluation']
    },
    {
      role: 'Web Development Intern',
      company: 'Cognifyz IT Solutions',
      duration: 'June 2026 - July 2026',
      description: 'Completed a hands-on Web Development internship, designing, implementing, and deploying high-quality, responsive web solutions while working on real-world coding assignments.',
      bullets: [
        'Designed and implemented interactive user interfaces with polished modern layouts and visual aesthetics.',
        'Collaborated on programming challenges and web assignments with dedication, creativity, and attention to detail.',
        'Utilized HTML5, CSS3, and JavaScript best practices to ensure layout flexibility and cross-device consistency.',
        'Engaged in professional software delivery workflows and communication channels.'
      ],
      tags: ['Web Development', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX Design', 'Problem Solving']
    }
  ];

  return (
    <section id="experience" className="relative py-24 border-t border-slate-900/60 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-pink-600/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-purple-400 mb-2">Professional Path</h2>
          <p className="text-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Leadership & Experience
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline structure */}
        <div className="relative border-l-2 border-purple-500/20 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12">
              
              {/* Dot Icon indicator */}
              <div className="absolute -left-[17px] top-0 bg-slate-950 border-2 border-purple-500 w-8 h-8 rounded-full flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.3)] z-10">
                <Briefcase size={14} />
              </div>

              {/* Exp Card Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border-glow"
              >
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 font-semibold text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-slate-300 text-xs font-mono font-bold w-fit shrink-0">
                    <Calendar size={12} className="text-pink-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-3">
                      <CheckCircle2 size={16} className="text-pink-500 mt-1 shrink-0" />
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Experience;
