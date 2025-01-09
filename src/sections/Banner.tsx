import React from 'react';
import { ExternalLink, Code, Sparkles } from 'lucide-react';

interface BannerProps {
  isDarkMode: boolean;
}

export const Banner: React.FC<BannerProps> = ({ isDarkMode }) => {
  return (
    <div className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-700
      ${isDarkMode 
        ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-[0_-1px_0_0_rgba(255,255,255,0.1)]' 
        : 'bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 shadow-[0_-1px_0_0_rgba(0,0,0,0.1)]'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 opacity-20 
          ${isDarkMode ? 'bg-grid-white/5' : 'bg-grid-black/5'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-3 flex items-center justify-center gap-x-4">
          {/* Left Decorative Icon */}
          <div className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-lg
            ${isDarkMode 
              ? 'bg-slate-700/50 text-slate-300' 
              : 'bg-green-500/50 text-white'}`}>
            <Code className="w-4 h-4" />
          </div>

          {/* Main Text */}
          <div className="text-center text-sm text-white font-medium flex items-center gap-x-2">
            <span className="hidden sm:inline">Dies ist ein Showcase-Projekt von</span>
            <span className="sm:hidden">Showcase von</span>
            <a
              href="https://tru-tec.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-3 py-1 rounded-full 
                transition-all duration-300 gap-x-1.5
                bg-white/10 hover:bg-white/20"
            >
              <span className="relative">
                TruTec
                <span className={`absolute -bottom-px left-0 w-full h-px 
                  transition-all duration-300 transform origin-left scale-x-0 
                  group-hover:scale-x-100
                  ${isDarkMode ? 'bg-green-400' : 'bg-green-300'}`} />
              </span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 
                group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Right Decorative Icon */}
          <div className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-lg
            ${isDarkMode 
              ? 'bg-slate-700/50 text-slate-300' 
              : 'bg-green-500/50 text-white'}`}>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Decorative Side Elements */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/[0.07] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/[0.07] to-transparent" />
    </div>
  );
};

export default Banner;