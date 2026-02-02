import React from 'react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.bsidesmalaga.com/assets/img/bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        <div className="relative inline-block group mb-10 w-full max-w-2xl mx-auto">
          {/* Main Image */}
          <img
            src="https://www.bsidesmalaga.com/assets/img/logo.png"
            alt="BSides Málaga"
            className="relative z-10 w-full h-auto drop-shadow-[0_0_15px_rgba(0,255,0,0.3)]"
          />

          {/* Glitch Layer 1 - Red/Purple Shift */}
          <img
            src="https://www.bsidesmalaga.com/assets/img/logo.png"
            alt=""
            className="absolute top-0 left-0 -ml-1 opacity-50 mix-blend-screen animate-glitch z-0 w-full h-full pointer-events-none brightness-150 contrast-150 saturate-150"
            style={{ filter: 'drop-shadow(-2px 0 red)' }}
            aria-hidden="true"
          />

          {/* Glitch Layer 2 - Blue/Cyan Shift */}
          <img
            src="https://www.bsidesmalaga.com/assets/img/logo.png"
            alt=""
            className="absolute top-0 left-0 ml-1 opacity-50 mix-blend-screen animate-glitch z-0 w-full h-full pointer-events-none brightness-150 contrast-150 saturate-150"
            style={{ animationDelay: '0.2s', filter: 'drop-shadow(2px 0 blue)' }}
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl font-bold text-gray-300 my-8 font-mono">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span>March 20, 2026</span>
          </div>
          <span className="hidden md:block text-neon-green/50">|</span>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>GSEC Málaga</span>
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg">
          Join the underground. Uncover the future of security.
          <br />
          <span className="text-neon-green font-mono">system.status:</span> <span className="text-white">agenda_published</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-x-4 justify-center">
          <button disabled className="px-6 py-4 bg-gray-800 text-gray-500 font-bold uppercase tracking-widest cursor-not-allowed skew-x-[-10deg] border border-gray-700">
            <span className="skew-x-[10deg] block">Get Tickets (Coming Soon)</span>
          </button>
        </div>
      </div>


    </section>
  );
};

export default Hero;