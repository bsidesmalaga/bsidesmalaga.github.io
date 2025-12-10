import React from 'react';
import { SectionId } from '../types';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-black relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-neon-purple">#</span> WHOAMI
            </h2>
            <div className="w-20 h-1 bg-neon-green mb-8"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              BSides Málaga is part of the global Security BSides framework, a community-driven event built for and by information security community members.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our goal is to expand the spectrum of conversation beyond the traditional confines of space and time. It creates opportunities for individuals to both present and participate in an intimate atmosphere that encourages collaboration.
            </p>
             <p className="text-gray-300 text-lg leading-relaxed">
              We use <a href="https://meetu.ps/c/4rLWk/CYvzw/a" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-blue hover:underline transition-colors">Meetup</a> to announce Bsides events, and we also have accounts on <a href="https://x.com/BsidesMalaga" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-blue hover:underline transition-colors">X</a> and <a href="https://infosec.exchange/@bsidesmalaga" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-blue hover:underline transition-colors">Mastodon</a>, as well as a <a href="https://t.me/joinchat/ADPU8BXatywF9NRU_5CSAw" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-blue hover:underline transition-colors">Telegram</a> group.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-y-2 sm:gap-x-6">
                <button 
                  onClick={() => onNavigate('coc')} 
                  className="text-neon-green hover:text-neon-blue transition-colors font-mono font-bold flex items-center gap-2 group text-lg"
                >
                   <span>&gt; Read Code of Conduct (EN)</span>
                </button>
                <button 
                  onClick={() => onNavigate('coc-es')} 
                  className="text-neon-green hover:text-neon-blue transition-colors font-mono font-bold flex items-center gap-2 group text-lg"
                >
                   <span>&gt; Leer Código de Conducta (ES)</span>
                </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border border-gray-800 p-4 rounded hover:border-neon-green transition-colors">
                <h3 className="text-neon-blue font-bold text-xl mb-2">100</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Attendees</p>
              </div>
              <div className="border border-gray-800 p-4 rounded hover:border-neon-green transition-colors">
                <h3 className="text-neon-blue font-bold text-xl mb-2">∞</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Networking</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full group">
            <div className="absolute inset-0 border-2 border-neon-purple transform translate-x-4 translate-y-4 rounded transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="absolute inset-0 bg-gray-900 overflow-hidden rounded">
               <img 
                 src="https://www.bsidesmalaga.com/assets/img/gsec.jpg" 
                 alt="Hacker working" 
                 className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            {/* Terminal Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur border border-green-500/30 p-4 font-mono text-xs md:text-sm text-green-400">
               <p>&gt; access_level: granted</p>
               <p>&gt; connecting to community_node...</p>
               <p>&gt; connection established. Welcome to BSides.</p>
               <span className="animate-pulse">_</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;