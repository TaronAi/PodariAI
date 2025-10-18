
import React, { useState, useCallback } from 'react';
import SurveyStep from '../components/SurveyStep';
import LoadingSpinner from '../components/LoadingSpinner';
import GiftResults from '../components/GiftResults';
import GiftOpeningAnimation from '../components/GiftOpeningAnimation';
import WhyPodariAI from '../components/WhyPodariAI';
import { SURVEY_STEPS, REGIONS } from '../constants';
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

const HomePage: React.FC<HomePageProps> = ({ wishlist, onAddToWishlist, language, region, t }) => {
  const [appState, setAppState] = useState<AppState>('survey');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswers>({});
  const [error, setError] = useState<string | null>(null);
  const [giftSuggestions, setGiftSuggestions] = useState<GiftSuggestion[]>([]);

  const handleReset = () => {
    setAppState('survey');
    setCurrentStep(0);
    setAnswers({});
    setError(null);
    setGiftSuggestions([]);
  };

  const fetchGifts = useCallback(async (finalAnswers: SurveyAnswers, lang: Language, reg: RegionCode) => {
    setAppState('loading');
    setError(null);
    const regionName = REGIONS.find(r => r.code === reg)?.name || 'Cyprus';
    try {
      const suggestions = await getGiftSuggestions(finalAnswers, lang, regionName);
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
      fetchGifts(newAnswers, language, region);
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
        return <GiftResults suggestions={giftSuggestions} onReset={handleReset} onAddToWishlist={onAddToWishlist} wishlist={wishlist} t={t} />;
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