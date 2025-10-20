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

// This component prompts the user to select an API key if one is not available.
const ApiKeyPrompt: React.FC<{ onKeySelected: () => void }> = ({ onKeySelected }) => {
  const handleSelectKey = async () => {
    // This global function is provided by the AI Studio environment.
    // @ts-ignore
    if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
      // @ts-ignore
      await window.aistudio.openSelectKey();
      // Assume success after triggering the dialog to avoid race conditions.
      onKeySelected();
    } else {
      console.error('aistudio.openSelectKey() is not available.');
      alert('API Key selection is not available in this environment.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 z-50 flex items-center justify-center animate-fade-in p-4" role="dialog" aria-modal="true" aria-labelledby="apiKeyTitle">
      <div className="bg-slate-800 rounded-lg shadow-2xl p-8 max-w-md w-full text-center border border-slate-700">
        <div className="text-pink-500 mb-4">
            <i className="fas fa-key text-4xl"></i>
        </div>
        <h2 id="apiKeyTitle" className="text-2xl font-bold text-white mb-3">API Key Required</h2>
        <p className="text-slate-400 mb-6">
          To use the AI gift finder, please select a Gemini API key.
        </p>
        <button
          onClick={handleSelectKey}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          Select API Key
        </button>
        <p className="text-xs text-slate-500 mt-4">
          For more information on billing, please see the{' '}
          <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-400">
            documentation
          </a>.
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [wishlist, setWishlist] = useState<GiftSuggestion[]>([]);
  
  const [region, setRegion] = useState<RegionCode>('CY');
  const [language, setLanguage] = useState<Language>('en');

  // State to manage API key readiness.
  const [isApiKeyReady, setIsApiKeyReady] = useState(false);

  const t = i18n[language] || i18n['en'];

  // Check for API key on component mount.
  useEffect(() => {
    const checkApiKey = async () => {
      // @ts-ignore
      if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
        // @ts-ignore
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (hasKey) {
          setIsApiKeyReady(true);
        }
      } else {
         // If not in AI Studio, assume key is in env and proceed.
         // This allows for local development if process.env.API_KEY is set.
         setIsApiKeyReady(true);
      }
    };
    checkApiKey();
  }, []);


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
  
  const resetApiKeyStatus = () => {
    setIsApiKeyReady(false);
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
            resetApiKeyStatus={resetApiKeyStatus}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {!isApiKeyReady && <ApiKeyPrompt onKeySelected={() => setIsApiKeyReady(true)} />}
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