import React, { useState } from 'react';
import { Gift, Menu, X, Globe, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useWishlist } from '../contexts/WishlistContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { wishlist } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'ru' ? 'en' : 'ru');

  const isActive = (path: string) => location.pathname === path ? 'text-primary-600 font-semibold' : 'text-slate-600 hover:text-primary-500';

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 animate-in slide-in-from-top duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Gift className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600">
              Podari.AI
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/')}>{t.nav.home}</Link>
            <Link to="/find-gift" className={isActive('/find-gift')}>{t.nav.findGift}</Link>
            <Link to="/about" className={isActive('/about')}>{t.nav.about}</Link>
            <Link to="/contact" className={isActive('/contact')}>{t.nav.contact}</Link>
            
            <div className="flex items-center space-x-3 pl-4 border-l border-slate-200">
              {/* Language Switcher */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-1 rounded-full border border-slate-200 hover:border-primary-400 transition-colors"
              >
                <Globe className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-medium uppercase">{language}</span>
              </button>

              {/* Wishlist Button */}
              <Link 
                to="/wishlist"
                className="relative p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-primary-600 transition-colors"
              >
                <Heart className={`h-5 w-5 ${location.pathname === '/wishlist' ? 'fill-primary-100 text-primary-600' : ''}`} />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-primary-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full animate-bounce">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <Link 
                to="/wishlist"
                className="relative p-2 rounded-full text-slate-600"
              >
                <Heart className="h-6 w-6" />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-primary-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
            </Link>
             <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1 rounded-full border border-slate-200"
            >
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>
            <button onClick={toggleMenu} className="text-slate-600 hover:text-primary-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 pb-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 space-y-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md ${location.pathname === '/' ? 'bg-primary-50 text-primary-600' : 'text-slate-600'}`}>{t.nav.home}</Link>
            <Link to="/find-gift" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md ${location.pathname === '/find-gift' ? 'bg-primary-50 text-primary-600' : 'text-slate-600'}`}>{t.nav.findGift}</Link>
            <Link to="/wishlist" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md ${location.pathname === '/wishlist' ? 'bg-primary-50 text-primary-600' : 'text-slate-600'}`}>{t.wishlist.title}</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md ${location.pathname === '/about' ? 'bg-primary-50 text-primary-600' : 'text-slate-600'}`}>{t.nav.about}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md ${location.pathname === '/contact' ? 'bg-primary-50 text-primary-600' : 'text-slate-600'}`}>{t.nav.contact}</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
