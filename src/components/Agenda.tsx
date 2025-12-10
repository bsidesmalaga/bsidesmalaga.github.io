import React from 'react';
import { SectionId } from '../types';

const Agenda: React.FC = () => {
  return (
    <section id={SectionId.AGENDA} className="py-20 bg-zinc-950 relative border-t border-zinc-900">
       {/* Tech background grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest">
            <span className="text-neon-green">&lt;</span> Agenda <span className="text-neon-green">/&gt;</span>
          </h2>
        </div>

        <div className="bg-black/50 border border-zinc-800 rounded-lg overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/50 min-h-[400px] flex flex-col items-center justify-center p-8 text-center group hover:border-neon-green/30 transition-colors relative">
            
            {/* Background scanner effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent h-[20%] w-full animate-pulse pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-white mb-2 font-mono tracking-tight">
                ACCESS LOCKED
            </h3>
             <p className="text-neon-green font-mono text-sm mb-6 uppercase tracking-widest">
                [ Call for Papers in Progress ]
            </p>
            
            <p className="text-gray-400 max-w-md mx-auto mb-8 text-lg">
                The schedule is currently compiling. The final agenda will be decrypted and published once the Call for Papers concludes.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Agenda;