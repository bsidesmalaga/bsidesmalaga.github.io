import React from 'react';
import { SectionId } from '../types';

const Speakers: React.FC = () => {
  // Placeholder data - in a real app this would come from an API
  const placeholders = [1, 2, 3];

  return (
    <section id={SectionId.SPEAKERS} className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest">
            <span className="text-neon-green">&lt;</span> Speakers <span className="text-neon-green">/&gt;</span>
          </h2>
          <p className="text-gray-400 font-mono">Call for Papers is open. Lineup coming soon.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholders.map((i) => (
            <div key={i} className="group relative bg-black border border-gray-800 p-6 hover:border-neon-blue transition-all duration-300">
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full mb-6 overflow-hidden border-2 border-gray-700 group-hover:border-neon-blue">
                 <img src={`https://picsum.photos/100/100?random=${i}`} alt="TBA" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all"/>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue">Classified Speaker</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">Pending...</p>
                <div className="h-px w-10 mx-auto bg-gray-800 mb-4 group-hover:bg-neon-blue transition-colors"></div>
                <p className="text-gray-400 text-sm">
                   Topic data encrypted. Decryption key scheduled for release in Q1 2026.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdOjfzRWDQr45DjtiOvMWHqlEtDLshWtOj3bPvDNQ_Lnw0h3g/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-4 border border-neon-blue text-neon-blue font-bold uppercase tracking-widest hover:bg-neon-blue/10 transition-colors duration-300 skew-x-[-10deg] inline-block"
            >
                <span className="skew-x-[10deg] block">Apply to Speak (CFP)</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Speakers;