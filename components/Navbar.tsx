import React, { useState } from 'react';
import { Page } from '../App';

interface NavbarProps {
  setCurrentPage: (page: Page) => void;
  currentPage: Page;
  t: {
    navHome: string;
    navTrending: string;
    navAbout: string;
    navSettings: string;
  }
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage, currentPage, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { page: 'home' as Page, label: t.navHome },
    { page: 'trending' as Page, label: t.navTrending },
    { page: 'about' as Page, label: t.navAbout },
  ];

  const NavLink: React.FC<{ page: Page, children: React.ReactNode }> = ({ page, children }) => (
    <button
      onClick={() => {
        setCurrentPage(page);
        setIsMenuOpen(false);
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        currentPage === page
          ? 'text-white bg-slate-700'
          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
  
  const SettingsButton: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => (
     <button
        onClick={() => {
          setCurrentPage('settings');
          setIsMenuOpen(false);
        }}
        className={`transition-colors ${
          isMobile 
            ? `w-full text-left px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'settings' ? 'text-white bg-slate-700' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`
            : `p-2 rounded-full ${currentPage === 'settings' ? 'text-white bg-slate-700' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}`}
        aria-label={t.navSettings}
      >
        <i className="fas fa-cog text-lg"></i>
        {isMobile && <span className="ml-2">{t.navSettings}</span>}
      </button>
  );


  return (
    <nav className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40 border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setCurrentPage('home')} className="flex-shrink-0 flex items-center space-x-2">
              <h1 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Podari AI
                </span>
                <i className="fas fa-gift ml-2 text-pink-500"></i>
              </h1>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <NavLink key={link.page} page={link.page}>{link.label}</NavLink>
            ))}
            <SettingsButton />
          </div>
          <div className="md:hidden flex items-center">
             <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map(link => (
              <NavLink key={link.page} page={link.page}>{link.label}</NavLink>
            ))}
             <div className="pt-2 w-full">
               <SettingsButton isMobile={true}/>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
