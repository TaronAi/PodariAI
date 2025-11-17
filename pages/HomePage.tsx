import React, { useState, useCallback } from 'react';
import SurveyStep from '../components/SurveyStep';
import LoadingSpinner from '../components/LoadingSpinner';
import GiftResults from '../components/GiftResults';
import GiftOpeningAnimation from '../components/GiftOpeningAnimation';
import WhyPodariAI from '../components/WhyPodariAI';
import { SURVEY_STEPS } from '../constants';
import { getGiftSuggestions } from '../services/geminiService';
import { SurveyAnswers, GiftSuggestion, Language, RegionCode } from '../types';

type AppState = 'survey' | 'loading' | 'opening' | 'results' | 'error';

interface HomePageProps {
  wishlist: GiftSuggestion[];
  onAddToWishlist: (gift: GiftSuggestion) => void;
  language: Language;
  region: RegionCode;
  t: any; // Using 'any' for simplicity, could be typed more strictly
}

// Helper function to validate if a gift's price is within the selected budget
const isPriceInBudget = (priceStr: string, budgetStr?: string): boolean => {
  if (!budgetStr) return true; // No budget selected, so all prices are valid.

  // 1. Parse the price string (e.g., "5,900 ֏") into a number.
  // This regex removes currency symbols, spaces, and thousand separators.
  const price = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
  if (isNaN(price)) {
    return false; // If price can't be parsed, exclude the item.
  }

  // 2. Parse the budget string (e.g., "10000-25000" or "50000+")
  if (budgetStr.includes('-')) {
    const [min, max] = budgetStr.split('-').map(Number);
    if (!isNaN(min) && !isNaN(max)) {
      return price >= min && price <= max;
    }
  } else if (budgetStr.endsWith('+')) {
    const min = Number(budgetStr.slice(0, -1));
    if (!isNaN(min)) {
      return price >= min;
    }
  }

  // 3. If budget format is unknown, default to including the item.
  return true;
};


const HomePage: React.FC<HomePageProps> = ({ wishlist, onAddToWishlist, language, region, t }) => {
  const [appState, setAppState] = useState<AppState>('survey');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswers>({});
  const [error, setError] = useState<string | null>(null);
  const [giftSuggestions, setGiftSuggestions] = useState<GiftSuggestion[]>([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [noMoreGiftsMessage, setNoMoreGiftsMessage] = useState<string | null>(null);

  const handleReset = () => {
    setAppState('survey');
    setCurrentStep(0);
    setAnswers({});
    setError(null);
    setGiftSuggestions([]);
    setNoMoreGiftsMessage(null);
  };

  const fetchGifts = useCallback(async (finalAnswers: SurveyAnswers) => {
    setAppState('loading');
    setError(null);
    try {
      const suggestions = await getGiftSuggestions(finalAnswers, language);
      
      // Case 1: AI couldn't find anything at all.
      if (!suggestions || suggestions.length === 0) {
        setError(t.errorNoGiftsFound);
        setAppState('error');
        return;
      }
      
      const filteredSuggestions = suggestions.filter(gift => isPriceInBudget(gift.price, finalAnswers.budget));
      
      // Case 2: AI found gifts, but none matched the selected budget after filtering.
      if (filteredSuggestions.length === 0) {
        setError(t.errorNoGiftsInBudget);
        setAppState('error');
        return;
      }

      setGiftSuggestions(filteredSuggestions);
      setAppState('opening');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      setAppState('error');
    }
  }, [language, t]);

  const fetchMoreGifts = useCallback(async () => {
    setIsFetchingMore(true);
    setNoMoreGiftsMessage(null);
    try {
      const newSuggestions = await getGiftSuggestions(answers, language, giftSuggestions);
      const filteredNewSuggestions = newSuggestions.filter(gift => isPriceInBudget(gift.price, answers.budget));

      if (filteredNewSuggestions && filteredNewSuggestions.length > 0) {
        setGiftSuggestions(prev => [...prev, ...filteredNewSuggestions]);
      } else {
        setNoMoreGiftsMessage(t.noMoreGiftsFound);
      }
    } catch (err) {
       console.error("Failed to fetch more gifts:", err);
       setNoMoreGiftsMessage(t.errorTitle); // Show a generic error on API failure
    } finally {
      setIsFetchingMore(false);
    }
  }, [answers, language, giftSuggestions, t]);

  const handleNextStep = (answer: { id: keyof SurveyAnswers; value: string }) => {
    const newAnswers = { ...answers, [answer.id]: answer.value };
    setAnswers(newAnswers);

    if (currentStep < SURVEY_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      fetchGifts(newAnswers);
    }
  };

  const handleAnimationComplete = () => {
    setAppState('results');
  };

  const renderMainContent = () => {
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
        return (
          <GiftResults 
            suggestions={giftSuggestions} 
            onReset={handleReset} 
            onAddToWishlist={onAddToWishlist} 
            wishlist={wishlist}
            onFetchMore={fetchMoreGifts}
            isFetchingMore={isFetchingMore}
            noMoreGiftsMessage={noMoreGiftsMessage}
            t={t} 
          />
        );
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

  return (
    <div className={`w-full mx-auto transition-all duration-500 ${appState === 'results' ? 'max-w-6xl' : 'max-w-4xl'}`}>
       <div className="mt-4 sm:mt-8">
            {renderMainContent()}
          </div>
    </div>
  );
};

export default HomePage;