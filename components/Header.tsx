
import React from 'react';

interface HeaderProps {
  t: {
    headerSubtitle: string;
  };
}

const Header: React.FC<HeaderProps> = ({ t }) => {
  return (
    <header className="py-8 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Podari Ai
        </span>
        <i className="fas fa-gift ml-3 text-pink-500 animate-pulse"></i>
      </h1>
      <p className="text-slate-300 mt-3 text-lg">{t.headerSubtitle}</p>
    </header>
  );
};

export default Header;
