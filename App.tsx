import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import AboutPage from './pages/AboutPage';
import WishlistPage from './pages/WishlistPage';
import SettingsPage from './pages/SettingsPage';
import Footer from './components/Footer';
import FloatingWishlistButton from './components/FloatingWishlistButton';
import { i18n } from './constants';
import { GiftSuggestion, RegionCode, Language } from './types';

export type Page = 'home' | 'trending' | 'about' | 'wishlist' | 'settings';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [wishlist, setWishlist] = useState<GiftSuggestion[]>([]);
  
  const [region, setRegion] = useState<RegionCode>('CY');
  const [language, setLanguage] = useState<Language>('en');

  const t = i18n[language] || i18n['en'];

  useEffect(() => {
    document.title = t.documentTitle;
  }, [t.documentTitle]);

  const handleAddToWishlist = (gift: GiftSuggestion) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.title === gift.title)) {
        return prevWishlist.filter((item) => item.title !== gift.title);
      }
      return [...prevWishlist, gift];
    });
  };

  const handleRemoveFromWishlist = (giftTitle: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.title !== giftTitle));
  };
  
  const renderContent = () => {
    switch (currentPage) {
      case 'trending':
        return <TrendingPage t={t} onAddToWishlist={handleAddToWishlist} wishlist={wishlist} />;
      case 'about':
        return <AboutPage t={t} />;
      case 'wishlist':
        return <WishlistPage items={wishlist} onRemove={handleRemoveFromWishlist} t={t} />;
      case 'settings':
        return <SettingsPage 
                  region={region} 
                  setRegion={setRegion} 
                  language={language}
                  setLanguage={setLanguage}
                  t={t}
                />;
      case 'home':
      default:
        return (
          <HomePage
            wishlist={wishlist}
            onAddToWishlist={handleAddToWishlist}
            language={language}
            region={region}
            t={t}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        t={t}
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <FloatingWishlistButton
        wishlistCount={wishlist.length}
        onClick={() => setCurrentPage('wishlist')}
        t={t}
      />
      <Footer setCurrentPage={setCurrentPage} t={t} />
    </div>
  );
};

export default App;