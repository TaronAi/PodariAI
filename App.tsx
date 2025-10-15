import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import AboutPage from './pages/AboutPage';
import WishlistPage from './pages/WishlistPage';
import Footer from './components/Footer';
import FireflyBackground from './components/FireflyBackground';
import FloatingWishlistButton from './components/FloatingWishlistButton';
import { i18n } from './constants';
import { GiftSuggestion } from './types';

export type Page = 'home' | 'trending' | 'about' | 'wishlist';
export type Language = 'ru' | 'en';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [wishlist, setWishlist] = useState<GiftSuggestion[]>([]);
  const [language, setLanguage] = useState<Language>('ru');

  const t = i18n[language];

  const handleAddToWishlist = (gift: GiftSuggestion) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.name === gift.name)) {
        return prevWishlist.filter((item) => item.name !== gift.name);
      }
      return [...prevWishlist, gift];
    });
  };

  const handleRemoveFromWishlist = (giftName: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.name !== giftName));
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'trending':
        return <TrendingPage t={t} onAddToWishlist={handleAddToWishlist} wishlist={wishlist} />;
      case 'about':
        return <AboutPage t={t} />;
      case 'wishlist':
        return <WishlistPage items={wishlist} onRemove={handleRemoveFromWishlist} t={t} />;
      case 'home':
      default:
        return (
          <HomePage
            wishlist={wishlist}
            onAddToWishlist={handleAddToWishlist}
            language={language}
            t={t}
          />
        );
    }
  };

  return (
    <>
      <FireflyBackground />
      <div className="min-h-screen flex flex-col">
        <Navbar
          t={t}
          language={language}
          setLanguage={setLanguage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>
        <FloatingWishlistButton
          wishlistCount={wishlist.length}
          onClick={() => setCurrentPage('wishlist')}
        />
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default App;
