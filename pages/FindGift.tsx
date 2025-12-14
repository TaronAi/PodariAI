import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Check, Gift, RefreshCw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FilterState, Product } from '../types';
import ProductCard from '../components/ProductCard';
import { getGiftRecommendations } from '../services/geminiService';
import { MOCK_PRODUCTS } from '../constants';

const INTERESTS_LIST = {
  en: ['Technology', 'Beauty', 'Fashion', 'Gaming', 'Pets', 'Sports', 'Home Decor', 'Art', 'Cooking', 'Travel', 'Music', 'Books'],
  ru: ['Технологии', 'Красота', 'Мода', 'Гейминг', 'Животные', 'Спорт', 'Декор', 'Искусство', 'Кулинария', 'Путешествия', 'Музыка', 'Книги']
};

const PERSONALITY_TYPES = {
  en: ['Creative', 'Practical', 'Minimalist', 'Funny', 'Romantic', 'Intellectual'],
  ru: ['Творческий', 'Практичный', 'Минималист', 'Веселый', 'Романтичный', 'Интеллектуал']
};

const STEPS = [
  'recipient',
  'occasion',
  'demographics',
  'interests',
  'personality',
  'price'
];

const FindGift: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    recipient: '',
    gender: '',
    age: '',
    occasion: '',
    interests: [],
    personality: '',
    priceRange: '',
  });

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      startSearch();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFilters(prev => {
      if (prev.interests.includes(interest)) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      }
      return { ...prev, interests: [...prev.interests, interest] };
    });
  };

  const startSearch = async () => {
    setIsAnimating(true);
    setLoading(true);
    
    // Fetch data in background while animation plays
    try {
      if (process.env.API_KEY) {
         const results = await getGiftRecommendations(filters, language);
         setProducts(results);
      } else {
         // Fallback
         setTimeout(() => {
           setProducts([...MOCK_PRODUCTS, ...MOCK_PRODUCTS].sort(() => 0.5 - Math.random()));
         }, 1500);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Handle animation completion
  useEffect(() => {
    if (isAnimating && !loading) {
      // Allow the "opening" animation to finish before showing results
      // Total animation time is roughly 2.5s (shake 1.5s + pop 0.8s) + buffer
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setShowResults(true);
      }, 2500); 
      return () => clearTimeout(timer);
    }
  }, [isAnimating, loading]);

  const resetQuiz = () => {
    setFilters({
      recipient: '',
      gender: '',
      age: '',
      occasion: '',
      interests: [],
      personality: '',
      priceRange: '',
    });
    setCurrentStep(0);
    setShowResults(false);
    setProducts([]);
  };

  // Render Helpers
  const renderStep = () => {
    switch (currentStep) {
      case 0: // Recipient
        const recipients = [
          { value: 'Friend', label: language === 'ru' ? 'Друг/Подруга' : 'Friend', icon: '👋' },
          { value: 'Partner', label: language === 'ru' ? 'Партнер' : 'Partner', icon: '❤️' },
          { value: 'Parent', label: language === 'ru' ? 'Родитель' : 'Parent', icon: '👪' },
          { value: 'Child', label: language === 'ru' ? 'Ребенок' : 'Child', icon: '👶' },
          { value: 'Colleague', label: language === 'ru' ? 'Коллега' : 'Colleague', icon: '💼' },
          { value: 'Myself', label: language === 'ru' ? 'Себе' : 'Myself', icon: '😎' },
        ];
        return (
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-center text-slate-900">{t.filters.recipient}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {recipients.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { updateFilter('recipient', opt.value); handleNext(); }}
                  className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 flex flex-col items-center justify-center space-y-3 ${
                    filters.recipient === opt.value
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-slate-100 bg-white hover:border-primary-200 text-slate-600'
                  }`}
                >
                  <span className="text-4xl animate-bounce" style={{ animationDuration: '3s' }}>{opt.icon}</span>
                  <span className="font-medium">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 1: // Occasion
        const occasions = [
          { value: 'No Occasion', label: language === 'ru' ? 'Без повода' : 'Just Because' },
          { value: 'Birthday', label: language === 'ru' ? 'День рождения' : 'Birthday' },
          { value: 'New Year', label: language === 'ru' ? 'Новый год' : 'New Year' },
          { value: 'Valentine', label: language === 'ru' ? '14 Февраля' : 'Valentine\'s Day' },
          { value: 'Wedding', label: language === 'ru' ? 'Свадьба' : 'Wedding' },
          { value: 'Graduation', label: language === 'ru' ? 'Выпускной' : 'Graduation' },
        ];
        return (
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-center text-slate-900">{t.filters.occasion}</h2>
            <div className="grid grid-cols-2 gap-4">
              {occasions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { updateFilter('occasion', opt.value); handleNext(); }}
                  className={`p-4 rounded-xl border-2 transition-all text-lg font-medium hover:scale-[1.02] ${
                    filters.occasion === opt.value
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-slate-100 bg-white hover:border-primary-200 text-slate-600'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 2: // Demographics
        return (
          <div className="space-y-8 animate-slide-up max-w-md mx-auto">
             <h2 className="text-2xl font-bold text-center text-slate-900">{language === 'ru' ? 'Кто они?' : 'Who are they?'}</h2>
             
             <div className="space-y-4">
               <label className="block text-sm font-medium text-slate-700">{t.filters.gender}</label>
               <div className="flex rounded-xl bg-slate-100 p-1">
                 {['Female', 'Male', 'Any'].map((g) => (
                   <button
                    key={g}
                    onClick={() => updateFilter('gender', g)}
                    className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                      filters.gender === g ? 'bg-white shadow-sm text-primary-600' : 'text-slate-500 hover:text-slate-700'
                    }`}
                   >
                     {g === 'Female' ? (language === 'ru' ? 'Женщина' : 'Female') : 
                      g === 'Male' ? (language === 'ru' ? 'Мужчина' : 'Male') : 
                      (language === 'ru' ? 'Неважно' : 'Any')}
                   </button>
                 ))}
               </div>
             </div>

             <div className="space-y-4">
               <label className="block text-sm font-medium text-slate-700">{t.filters.age}</label>
               <input 
                  type="number"
                  value={filters.age}
                  onChange={(e) => updateFilter('age', e.target.value)}
                  placeholder="e.g. 25"
                  className="w-full text-center text-3xl font-bold p-4 rounded-xl border-2 border-slate-200 focus:border-primary-500 focus:ring-0 outline-none transition-colors text-slate-800"
               />
             </div>
             
             <button 
               onClick={handleNext} 
               disabled={!filters.gender || !filters.age}
               className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
             >
               {language === 'ru' ? 'Далее' : 'Next'}
             </button>
          </div>
        );

      case 3: // Interests
        const interestsList = language === 'ru' ? INTERESTS_LIST.ru : INTERESTS_LIST.en;
        return (
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-center text-slate-900">{t.filters.interests}</h2>
            <p className="text-center text-slate-500 -mt-4 mb-6">{language === 'ru' ? 'Выберите несколько вариантов' : 'Select a few options'}</p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {interestsList.map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-6 py-3 rounded-full text-base font-medium border-2 transition-all hover:shadow-sm ${
                    filters.interests.includes(interest)
                      ? 'bg-slate-900 text-white border-slate-900 transform scale-105'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-primary-300'
                  }`}
                >
                  {filters.interests.includes(interest) && <Check className="inline-block w-4 h-4 mr-2" />}
                  {interest}
                </button>
              ))}
            </div>
            
            <button 
               onClick={handleNext}
               className="w-full mt-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all active:scale-95"
             >
               {language === 'ru' ? 'Далее' : 'Next'}
             </button>
          </div>
        );

      case 4: // Personality
        const personalities = language === 'ru' ? PERSONALITY_TYPES.ru : PERSONALITY_TYPES.en;
        return (
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-center text-slate-900">{t.filters.personality}</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {personalities.map((type) => (
                <button
                  key={type}
                  onClick={() => { updateFilter('personality', type); handleNext(); }}
                  className={`p-4 rounded-xl border-2 transition-all font-medium hover:scale-[1.02] ${
                    filters.personality === type
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-slate-100 bg-white hover:border-primary-200 text-slate-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        );

      case 5: // Price
        const prices = [
          { value: 'Under 1000', label: language === 'ru' ? 'До 1 000 ₽' : 'Under 1000 ₽' },
          { value: '1000-5000', label: language === 'ru' ? '1 000 - 5 000 ₽' : '1000 - 5000 ₽' },
          { value: '5000-10000', label: language === 'ru' ? '5 000 - 10 000 ₽' : '5000 - 10000 ₽' },
          { value: '10000+', label: language === 'ru' ? 'Более 10 000 ₽' : '10000+ ₽' },
          { value: 'Any', label: language === 'ru' ? 'Любой бюджет' : 'Any Budget' },
        ];
        return (
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-center text-slate-900">{t.filters.price}</h2>
            
            <div className="space-y-3">
              {prices.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { 
                    updateFilter('priceRange', opt.value); 
                    handleNext(); 
                  }}
                  className={`w-full p-4 rounded-xl border-2 transition-all font-medium flex justify-between items-center hover:scale-[1.01] ${
                    filters.priceRange === opt.value
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-slate-100 bg-white hover:border-primary-200 text-slate-600'
                  }`}
                >
                  <span>{opt.label}</span>
                  {filters.priceRange === opt.value && <Check className="w-5 h-5" />}
                </button>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  // Gift Animation Component
  if (isAnimating || (loading && !showResults)) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden">
        <style>{`
          @keyframes shake {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-10deg); }
            50% { transform: rotate(10deg); }
            75% { transform: rotate(-5deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes pop {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1.5); opacity: 0; }
          }
          .gift-shake { animation: shake 0.5s ease-in-out infinite; }
          .gift-pop { animation: pop 0.8s ease-out forwards; animation-delay: 1.5s; }
        `}</style>
        
        <div className="relative z-10 text-center">
          <div className={`transition-all duration-500 ${!loading ? 'gift-pop' : ''}`}>
             <div className="relative">
               <Gift className="w-32 h-32 text-primary-600 gift-shake" />
               <div className="absolute top-0 right-0 -mt-4 -mr-4 animate-bounce">
                  <Sparkles className="w-10 h-10 text-yellow-400 fill-yellow-400" />
               </div>
             </div>
          </div>
          <h2 className="mt-8 text-2xl font-bold text-slate-900 animate-pulse">
            {t.filters.loading}
          </h2>
          <p className="text-slate-500 mt-2">
            {language === 'ru' ? 'AI подбирает лучшие варианты...' : 'AI is selecting the best options...'}
          </p>
        </div>
      </div>
    );
  }

  // Results View
  if (showResults) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 animate-fade-in">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {language === 'ru' ? 'Мы нашли для вас!' : 'We found these for you!'}
              </h1>
              <p className="text-slate-600">
                {language === 'ru' ? 'На основе ваших ответов.' : 'Based on your answers.'}
              </p>
            </div>
            <button 
              onClick={resetQuiz}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <RefreshCw className="h-4 w-4" />
              <span>{t.filters.reset}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div key={product.id} className="opacity-0 animate-slide-up" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-lg text-slate-500">
                {language === 'ru' ? 'Упс, ничего не найдено. Попробуйте изменить параметры.' : 'Oops, nothing found. Try changing parameters.'}
              </p>
              <button onClick={resetQuiz} className="mt-4 text-primary-600 font-medium underline">
                {t.filters.reset}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Quiz View
  return (
    <div className="min-h-[90vh] bg-slate-50 flex items-center justify-center py-12 px-4 animate-fade-in">
      <div className="w-full max-w-2xl">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
            <span>{language === 'ru' ? 'Старт' : 'Start'}</span>
            <span>{language === 'ru' ? `Шаг ${currentStep + 1} из ${STEPS.length}` : `Step ${currentStep + 1} of ${STEPS.length}`}</span>
            <span>{language === 'ru' ? 'Финиш' : 'Finish'}</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-10 relative transition-all duration-300">
          
          {/* Back Button */}
          {currentStep > 0 && (
            <button 
              onClick={handleBack}
              className="absolute top-6 left-6 p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          )}

          {/* Content */}
          <div className="mt-4">
            {renderStep()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FindGift;