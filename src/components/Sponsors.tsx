import React from 'react';
import { SectionId } from '../types';

const Sponsors: React.FC = () => {
  return (
    <section id={SectionId.SPONSORS} className="py-20 bg-black relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">SPONSORS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Without our sponsors, BSides Málaga wouldn't be possible. Join the list of companies supporting the security community.
          </p>
        </div>

        {/* Platinum Tier */}
        <div className="mb-16">
            <h3 className="text-center text-neon-purple font-mono text-xl mb-8 border-b border-gray-800 pb-2 mx-auto max-w-xs">_PLATINUM_TIER</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {[1, 2].map(i => (
                    <div key={i} className="w-64 h-32 bg-gray-900/50 border border-gray-800 flex items-center justify-center hover:border-neon-purple hover:bg-gray-900 transition-all cursor-pointer group grayscale hover:grayscale-0">
                        <span className="text-2xl font-bold text-gray-600 group-hover:text-white">SPONSOR {i}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Gold Tier */}
        <div className="mb-16">
             <h3 className="text-center text-yellow-500 font-mono text-lg mb-8 border-b border-gray-800 pb-2 mx-auto max-w-xs">_GOLD_TIER</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {[1, 2, 3].map(i => (
                     <div key={i} className="w-48 h-24 bg-gray-900/50 border border-gray-800 flex items-center justify-center hover:border-yellow-500 hover:bg-gray-900 transition-all cursor-pointer group grayscale hover:grayscale-0">
                        <span className="text-xl font-bold text-gray-600 group-hover:text-white">CORP {i}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className="text-center mt-12">
            <button className="bg-transparent border-2 border-neon-green text-neon-green px-8 py-3 font-bold uppercase tracking-widest hover:bg-neon-green hover:text-black transition-colors">
                Become a Sponsor
            </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;