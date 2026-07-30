import React, { useEffect } from 'react';
import type { Project } from './Projects';
import { ArrowLeft, Terminal, Sparkles, AlertCircle, Play, Settings } from 'lucide-react';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
  // Scroll to top when loading a project detail view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Background glow elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/10 rounded-full filter blur-[100px] -z-10" />

      {/* Back navigation button */}
      <button
        onClick={onBack}
        className="group mb-8 inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-purple-950/20 text-slate-300 hover:text-white border border-slate-800 hover:border-purple-500/35 transition-all duration-300 cursor-pointer font-semibold text-sm hover:-translate-x-1"
      >
        <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
        <span>Back to Portfolio</span>
      </button>

      {/* Project Banner Header */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl mb-8 border-glow">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-md uppercase">
            {project.category}
          </span>
          <span className="text-slate-500 text-sm">•</span>
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1">
            <Sparkles size={11} className="animate-pulse" />
            Active Development
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4 leading-tight">
          {project.name}
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
          {project.description}
        </p>


      </div>

      {/* Info Sections Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Details (Col 1-2) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Overview Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-4 tracking-wide flex items-center gap-2">
              <Play size={16} className="text-purple-400" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem Statement Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border-l-4 border-pink-500">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-4 tracking-wide flex items-center gap-2">
              <AlertCircle size={16} className="text-pink-500" />
              <span>Problem Statement</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* System Architecture Block */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-4 tracking-wide flex items-center gap-2">
              <Settings size={16} className="text-cyan-400" />
              <span>System Architecture & Pipeline</span>
            </h3>
            
            {/* Visual representation card */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-white/5 font-mono text-xs sm:text-sm text-cyan-300 mb-4 leading-relaxed overflow-x-auto whitespace-pre-wrap">
              {project.architecture}
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              The project is engineered for computational speed and interpretability, separating concerns into discrete API services, data pipeline engines, and clean web interface displays.
            </p>
          </div>

          {/* Features Checklist */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-4 tracking-wide">
              Key Features Implemented
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start space-x-3">
                  <span className="h-5 w-5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Workflow */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-6 tracking-wide flex items-center gap-2">
              <Terminal size={16} className="text-pink-400" />
              <span>Execution Workflow</span>
            </h3>

            <div className="relative border-l border-slate-800 ml-4 pl-6 space-y-8">
              {project.workflow.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Step bubble */}
                  <div className="absolute -left-[35px] top-0 bg-slate-950 border border-slate-800 text-[10px] font-mono text-pink-400 font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar Info Panel (Col 3) */}
        <div className="space-y-8">
          
          {/* Tech Stack List */}
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-4 tracking-wide">
              Tech Stack Used
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800/90 text-xs font-mono font-semibold text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Future Roadmap / Improvements */}
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-4 tracking-wide">
              Future Improvements
            </h3>

            <ul className="space-y-3">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start space-x-2">
                  <span className="text-pink-500 mt-0.5">•</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>



        </div>

      </div>

    </section>
  );
};
export default ProjectDetails;
