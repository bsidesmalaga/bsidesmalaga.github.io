import React, { useState } from 'react';
import { SectionId } from '../types';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    // Navigate to home first in case we are on another page
    onNavigate('home');
    setMobileMenuOpen(false);

    // Small timeout to allow the view to switch before scrolling
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const navItems = [
    { label: 'Home', id: SectionId.HOME },
    { label: 'About', id: SectionId.ABOUT },
    { label: 'Speakers', id: SectionId.SPEAKERS },
    { label: 'Venue', id: SectionId.VENUE },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer font-bold text-white text-xl tracking-tighter" onClick={() => scrollTo(SectionId.HOME)}>
            <span className="text-neon-green">BSides</span>Málaga
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-gray-300 hover:text-neon-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-wide hover:bg-neon-green/5"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="#" 
                className="bg-neon-purple/20 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-4 py-2 rounded-sm text-sm font-bold transition-all uppercase"
              >
                Get Tickets
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={mobileMenuOpen ? 'hidden' : 'inline-flex'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className={mobileMenuOpen ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-neon-green/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-300 hover:text-neon-green block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </button>
            ))}
             <a 
                href="#" 
                className="block w-full text-center mt-4 bg-neon-purple/20 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-4 py-2 rounded-sm text-base font-bold transition-all uppercase"
              >
                Get Tickets
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;