import React from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Java Certified Foundations Associate',
      issuer: 'Oracle University',
      year: '2026',
      badgeColor: 'text-amber-400 border-amber-500/20 bg-amber-500/10',
      description: 'Oracle Certified Foundations Associate credential verifying core knowledge of Java programming language, logic structures, OOP principles, exception handling, and arrays.'
    },
    {
      title: 'Cybersecurity Analyst Job Simulation',
      issuer: 'Tata (via Forage)',
      year: '2026',
      badgeColor: 'text-sky-400 border-sky-500/20 bg-sky-500/10',
      description: 'Completed practical simulation tasks in Identity and Access Management (IAM) fundamentals, IAM strategy assessment, crafting custom IAM solutions, and platform integration.'
    },
    {
      title: 'Cyber Job Simulation',
      issuer: 'Deloitte (via Forage)',
      year: '2026',
      badgeColor: 'text-teal-400 border-teal-500/20 bg-teal-500/10',
      description: 'Completed practical simulation tasks in cyber security monitoring, threat analysis, incident response, and mitigation planning.'
    },
    {
      title: 'Technology Job Simulation',
      issuer: 'Deloitte (via Forage)',
      year: '2025',
      badgeColor: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/10',
      description: 'Completed practical simulation tasks focused on software coding, development principles, and systems analysis workflows.'
    },
    {
      title: 'OCI AI Foundations Associate',
      issuer: 'Oracle Cloud Infrastructure (OCI)',
      year: '2025',
      badgeColor: 'text-purple-400 border-purple-500/20 bg-purple-500/10',
      description: 'Covers core principles of Artificial Intelligence, Machine Learning, Deep Learning, Generative AI models, and OCI AI developer services.'
    },
    {
      title: 'Google AI Essentials',
      issuer: 'Google',
      year: '2024',
      badgeColor: 'text-pink-400 border-pink-500/20 bg-pink-500/10',
      description: 'Focuses on applying generative AI tools in daily workflows, recognizing biases, and evaluating prompt templates responsibly.'
    },
    {
      title: 'Google Prompting Essentials',
      issuer: 'Google',
      year: '2024',
      badgeColor: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
      description: 'Advanced prompt design techniques, system instructions, and temperature settings optimization for LLMs.'
    },
    {
      title: 'Yuva AI for All',
      issuer: 'NASSCOM FutureSkills Prime',
      year: '2024',
      badgeColor: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
      description: 'National level capacity building initiative covering programming tools, ML fundamentals, and data ethics principles.'
    }
  ];

  return (
    <section id="certifications" className="relative py-24 border-t border-slate-900/60 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-purple-400 mb-2">Credentials</h2>
          <p className="text-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Professional Certifications
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Horizontal Timeline Scroll Wrapper */}
        <div className="flex overflow-x-auto space-x-6 pb-8 pt-4 px-2 scrollbar-thin select-none snap-x snap-mandatory">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border-glow flex flex-col justify-between w-80 shrink-0 snap-center"
            >
              <div>
                {/* Badge Icon Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 rounded-xl border flex items-center justify-center ${cert.badgeColor}`}>
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-extrabold text-white leading-snug tracking-wide mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-pink-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                  {cert.issuer}
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Verified Certificate Indicator */}
              <div className="flex items-center space-x-1 mt-6 text-[10px] text-cyan-400 font-mono tracking-widest uppercase font-semibold">
                <CheckCircle size={10} className="fill-cyan-400/20" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Helper Hint */}
        <p className="text-center text-xs text-slate-500 font-mono mt-4 uppercase tracking-widest animate-pulse">
          ← Swipe or Scroll Horizontally to view all →
        </p>

      </div>
    </section>
  );
};
export default Certifications;
