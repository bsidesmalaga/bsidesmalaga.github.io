import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col gap-4">
          <p className="text-gray-600 text-sm mt-2 font-mono">
            &copy; 2026 La Peña Overflow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;