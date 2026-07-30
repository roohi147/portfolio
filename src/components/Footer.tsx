import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative py-12 border-t border-slate-900/60 bg-slate-950/20 font-sans z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Sub */}
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-xl gradient-text tracking-wider">
              SRN.DEV
            </span>
            <p className="text-slate-500 text-xs mt-1 max-w-sm">
              Integrated M.Tech Software Engineering Student at VIT. Building intelligent web and data pipelines.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/roohi147"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/10 transition-colors flex items-center justify-center"
              aria-label="GitHub"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/shaikroohinaaz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/10 transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="mailto:shaikroohi147@gmail.com"
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Copyrights and Back-to-Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500 font-mono uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Shaik Roohi Naaz. All Rights Reserved.</p>
          
          {/* Back to top Button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-purple-500/50 bg-slate-900/40 hover:text-white cursor-pointer transition-colors duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
