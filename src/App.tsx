import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Footer from './components/Footer';
import CodeOfConduct from './components/CodeOfConduct';

type Page = 'home' | 'coc' | 'coc-es';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="font-sans antialiased text-gray-100 bg-black min-h-screen selection:bg-neon-green selection:text-black flex flex-col">
      <main className="flex-grow">
        {page === 'home' ? (
          <>
            <Hero />
            <About onNavigate={(target) => setPage(target as Page)} />
            <Speakers />
            <Agenda />
            
            {/* Venue section placeholder */}
            <section id="venue" className="py-20 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest">
                <span className="text-neon-green">&lt;</span> Location <span className="text-neon-green">/&gt;</span>
              </h2>                 
              <div className="aspect-w-16 aspect-h-9 w-full h-[400px] bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 relative overflow-hidden group hover:border-neon-green transition-colors duration-300">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.174294437325!2d-4.4149304228615724!3d36.71837507227046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7939b82f6ed%3A0xaf011e847732b09!2sCentro%20Google%20de%20excelencia%20para%20la%20ciberseguridad.!5e0!3m2!1sen!2ses!4v1702723369112!5m2!1sen!2ses" 
                          width="100%" 
                          height="100%" 
                          style={{border:0, filter: 'grayscale(30%) invert(85%) contrast(90%)'}} 
                          allowFullScreen={true} 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          className="relative z-10"
                        ></iframe>
                        <div className="absolute inset-0 bg-neon-green/5 z-20 pointer-events-none mix-blend-overlay"></div>
                    </div>
                </div>
            </section>
          </>
        ) : (
          <CodeOfConduct 
            language={page === 'coc-es' ? 'es' : 'en'} 
            onBack={() => setPage('home')} 
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;