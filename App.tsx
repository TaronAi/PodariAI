
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import SurveyStep from './components/SurveyStep';
import LoadingSpinner from './components/LoadingSpinner';
import GiftResults from './components/GiftResults';
import GiftOpeningAnimation from './components/GiftOpeningAnimation';
import FireflyBackground from './components/FireflyBackground';
import Wishlist from './components/Wishlist';
import WhyPodariAI from './components/WhyPodariAI';
import LanguageSwitcher from './components/LanguageSwitcher';
import { SURVEY_STEPS, i18n } from './constants';
import { getGiftSuggestions } from './services/geminiService';
import { SurveyAnswers, GiftSuggestion } from './types';

type AppState = 'survey' | 'loading' | 'opening' | 'results' | 'error';
type Language = 'ru' | 'en';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('survey');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswers>({});
  const [error, setError] = useState<string | null>(null);
  const [giftSuggestions, setGiftSuggestions] = useState<GiftSuggestion[]>([]);
  const [wishlist, setWishlist] = useState<GiftSuggestion[]>([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [language, setLanguage] = useState<Language>('ru');

  const t = i18n[language];

  const handleReset = () => {
    setAppState('survey');
    setCurrentStep(0);
    setAnswers({});
    setError(null);
    setGiftSuggestions([]);
    // Not resetting wishlist so user can start a new search and add to the same list
  };

  const fetchGifts = useCallback(async (finalAnswers: SurveyAnswers, lang: Language) => {
    setAppState('loading');
    setError(null);
    try {
      const suggestions = await getGiftSuggestions(finalAnswers, lang);
      setGiftSuggestions(suggestions);
      setAppState('opening');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      setAppState('error');
    }
  }, []);

  const handleNextStep = (answer: { id: keyof SurveyAnswers; value: string }) => {
    const newAnswers = { ...answers, [answer.id]: answer.value };
    setAnswers(newAnswers);

    if (currentStep < SURVEY_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      fetchGifts(newAnswers, language);
    }
  };
  
  const handleAnimationComplete = () => {
    setAppState('results');
  };

  const handleAddToWishlist = (gift: GiftSuggestion) => {
    setWishlist((prevWishlist) => {
      // Toggle: if item exists, remove it. If not, add it.
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
    switch (appState) {
      case 'error':
        return (
          <div className="text-center p-8 bg-red-900/50 border border-red-700 rounded-lg">
            <h2 className="text-2xl font-bold text-red-300">{t.errorTitle}</h2>
            <p className="text-red-400 mt-2">{error}</p>
            <button
              onClick={handleReset}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              {t.tryAgain}
            </button>
          </div>
        );
      case 'loading':
        return <LoadingSpinner t={t} />;
      case 'opening':
        return <GiftOpeningAnimation onAnimationComplete={handleAnimationComplete} t={t} />;
      case 'results':
        return <GiftResults suggestions={giftSuggestions} onReset={handleReset} onAddToWishlist={handleAddToWishlist} wishlist={wishlist} t={t} />;
      case 'survey':
      default:
        const stepData = SURVEY_STEPS[currentStep];
        return (
          <>
            <SurveyStep stepData={stepData} onNext={handleNextStep} language={language} t={t} />
            {currentStep === 0 && <WhyPodariAI t={t} />}
          </>
        );
    }
  };
  
  const isSurveyInProgress = appState === 'survey';
  const progressPercentage = isSurveyInProgress ? (currentStep / SURVEY_STEPS.length) * 100 : 100;

  const isResultsView = appState === 'results';

  return (
    <>
      <FireflyBackground />
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
       {/* Wishlist Button */}
      {(appState === 'results' || wishlist.length > 0) && (
        <button
          onClick={() => setShowWishlist(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-pink-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-700 transition-transform transform hover:scale-110"
          aria-label="Open wishlist"
        >
          <i className="fas fa-heart text-2xl"></i>
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-pink-600">
              {wishlist.length}
            </span>
          )}
        </button>
      )}

      {/* Wishlist Modal */}
      {showWishlist && (
        <Wishlist items={wishlist} onRemove={handleRemoveFromWishlist} onClose={() => setShowWishlist(false)} t={t} />
      )}

      <div className="min-h-screen flex flex-col items-center p-4 sm:p-6">
        <div className={`w-full mx-auto transition-all duration-500 ${isResultsView ? 'max-w-6xl' : 'max-w-4xl'}`}>
          <Header t={t} />
          <main className="mt-8">
            {isSurveyInProgress && (
              <div className="w-full bg-slate-800 rounded-full h-2.5 mb-8 shadow-inner">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            )}
            {renderContent()}
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
