import React from 'react';
import { SectionId } from '../types';

const Speakers: React.FC = () => {
  return (
    <section id={SectionId.SPEAKERS} className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest">
            <span className="text-neon-green">&lt;</span> Speakers <span className="text-neon-green">/&gt;</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: 1,
              name: "A. Rosa Castillo",
              role: "Machine Learning Engineer Immunefi",
              topic: "AI Agents for Vulnerability Detection in Smart Contracts",
              image: "/assets/img/speaker_26c1.jpg"
            },
            {
              id: 2,
              name: "Undisclosed",
              role: "S2Grupo",
              topic: "Study of the MSS Offensive Ecosystem in China",
              image: "/assets/img/unc.jpg"
            },
            {
              id: 3,
              name: "Toño Díaz",
              role: "DFIR Principal Consultant UNIT42 Palo Alto Networks",
              topic: "Screening Serpents: The Dream Job That Opened the Door to an APT — A DFIR Case Study",
              image: "/assets/img/speaker_26c3.jpg"
            },
            {
              id: 4,
              name: "Alejandro Barranco",
              role: "Data Scientist OGA.ai",
              topic: "Vulnerabilidades en el Sistema de Acceso al Metro de Sevilla",
              image: "/assets/img/speaker_26c4.jpg"
            }
          ].map((speaker) => (
            <div key={speaker.id} className="group relative bg-black border border-gray-800 p-6 hover:border-neon-blue transition-all duration-300">
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>

              <div
                className="w-24 h-24 mx-auto bg-gray-800 rounded-full mb-6 overflow-hidden border-2 border-gray-700 group-hover:border-neon-blue speaker-image-container"
                style={{ '--speaker-bg': `url(${speaker.image})` } as React.CSSProperties}
              >
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all relative z-0" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue">{speaker.name}</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">{speaker.role}</p>
                <div className="h-px w-10 mx-auto bg-gray-800 mb-4 group-hover:bg-neon-blue transition-colors"></div>
                <p className="text-gray-400 text-sm">
                  {speaker.topic}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;