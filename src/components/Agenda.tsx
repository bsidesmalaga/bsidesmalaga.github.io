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

        <div className="space-y-4">
          {[
            { time: "16:30", event: "Apertura y registro", type: "other" },
            { time: "16:55", event: "Welcome to Bsides Málaga 2026", type: "special" },
            { time: "17:00", event: "AI Agents for Vulnerability Detection in Smart Contracts", type: "talk" },
            { time: "17:35", event: "Study of the MSS Offensive Ecosystem in China", type: "talk" },
            { time: "18:10", event: "Screening Serpents: The Dream Job That Opened the Door to an APT — A DFIR Case Study", type: "talk" },
            { time: "18:45", event: "Vulnerabilidades en el Sistema de Acceso al Metro de Sevilla", type: "talk" },
            { time: "19:30", event: "Networking", type: "other" },
            { time: "20:30", event: "Connection lost...", type: "other" },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row items-center bg-black/40 border border-zinc-800 p-6 hover:border-neon-green/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-full md:w-32 flex-shrink-0 mb-4 md:mb-0">
                <span className="text-xl font-mono font-bold text-neon-green tracking-tighter">
                  {item.time}
                </span>
              </div>

              <div className="flex-grow">
                <h3 className={`text-lg font-bold ${item.type === 'talk' ? 'text-white' : 'text-gray-300'} group-hover:text-neon-green transition-colors`}>
                  {item.event}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;