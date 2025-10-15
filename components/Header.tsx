import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  t: {
    headerSubtitle: string;
  };
  language: 'ru' | 'en';
  setLanguage: (lang: 'ru' | 'en') => void;
  wishlistCount: number;
  onWishlistClick: () => void;
  showWishlistButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ t, language, setLanguage, wishlistCount, onWishlistClick, showWishlistButton }) => {
  return (
    <header className="py-6 px-2 sm:px-4">
      <div className="flex justify-between items-start">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Podari Ai
            </span>
            <i className="fas fa-gift ml-2 sm:ml-3 text-pink-500 animate-pulse"></i>
          </h1>
          <p className="text-slate-300 mt-2 text-base sm:text-lg">{t.headerSubtitle}</p>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0 mt-1">
          {showWishlistButton && (
            <button
              onClick={onWishlistClick}
              className="relative z-10 w-10 h-10 bg-slate-800 text-white rounded-full shadow-md flex items-center justify-center hover:bg-pink-600 transition-colors"
              aria-label="Open wishlist"
            >
              <i className="fas fa-heart text-lg"></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-slate-900">
                  {wishlistCount}
                </span>
              )}
            </button>
          )}
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
