
import React, { useState, useEffect } from 'react';
// Corrected comments to accurately reflect the types being used.
import { SurveyStepData, OptionType, SurveyAnswers, Language } from '../types';

interface SurveyStepProps {
  stepData: SurveyStepData;
  onNext: (answer: { id: keyof SurveyAnswers; value: string }) => void;
  // Prop type is correct, accepting 'cy' or 'en'.
  language: Language;
  t: {
    other: string;
    submit: string;
    socialLinkPlaceholder: string;
    findGifts: string;
    skip: string;
  };
}

const SurveyStep: React.FC<SurveyStepProps> = ({ stepData, onNext, language, t }) => {
  const [socialLink, setSocialLink] = useState('');
  const [isOtherInputVisible, setOtherInputVisible] = useState(false);
  const [otherValue, setOtherValue] = useState('');

  // This logic correctly selects 'cy' or 'en' to match the LocalizedString type.
  const langKey = language === 'cy' ? 'cy' : 'en';

  // Reset local state when the survey step (question) changes
  useEffect(() => {
    setOtherInputVisible(false);
    setOtherValue('');
  }, [stepData.id]);

  const handleOtherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otherValue.trim()) {
      onNext({ id: stepData.id, value: otherValue.trim() });
    }
  };
  
  const handleOptionClick = (value: string) => {
    if (isOtherInputVisible) {
      setOtherInputVisible(false);
    }
    onNext({ id: stepData.id, value });
  };

  const handleOtherButtonClick = () => {
    setOtherInputVisible(true);
  };


  if (stepData.id === 'socialLink') {
    return (
        <div className="flex flex-col items-center animate-fade-in">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center">{stepData.question[langKey]}</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                onNext({ id: stepData.id, value: socialLink || 'not provided' });
            }} className="w-full max-w-md flex flex-col items-center">
                <input
                    type="text"
                    value={socialLink}
                    onChange={(e) => setSocialLink(e.target.value)}
                    placeholder={t.socialLinkPlaceholder}
                    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                />
                <button
                    type="submit"
                    className="mt-6 w-full max-w-xs bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                >
                    {t.findGifts} <i className="fas fa-search ml-2"></i>
                </button>
                 <button
                    type="button"
                    onClick={() => onNext({ id: stepData.id, value: 'not provided' })}
                    className="mt-4 text-slate-400 hover:text-white transition"
                >
                    {t.skip}
                </button>
            </form>
        </div>
    );
  }

  return (
    <div className="flex flex-col items-center animate-fade-in">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-center">{stepData.question[langKey]}</h2>
      
      <div
        className={
          stepData.type === OptionType.IMAGE
            ? 'grid grid-cols-1 md:grid-cols-2 gap-6 w-full'
            : 'flex flex-col items-center space-y-4 w-full max-w-sm'
        }
      >
        {stepData.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            className={`
              ${stepData.type === OptionType.IMAGE
                ? 'relative rounded-lg overflow-hidden group border-2 border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500'
                : 'w-full bg-slate-800 hover:bg-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg'
              }
            `}
          >
            {stepData.type === OptionType.IMAGE && option.imageUrl && (
              <>
                <img src={option.imageUrl} alt={option.label[langKey]} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <span className="absolute bottom-4 left-4 text-white text-lg font-bold">{option.label[langKey]}</span>
              </>
            )}
            {stepData.type === OptionType.TEXT && <span>{option.label[langKey]}</span>}
          </button>
        ))}

        {stepData.allowOther && (
            <button
              onClick={handleOtherButtonClick}
              className={`w-full font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${
                isOtherInputVisible
                  ? 'bg-purple-800 text-white ring-2 ring-purple-500'
                  : 'bg-slate-700 hover:bg-purple-800 text-slate-300'
              }`}
            >
                {t.other}
            </button>
        )}
      </div>

      {isOtherInputVisible && (
          <form onSubmit={handleOtherSubmit} className="w-full max-w-sm flex flex-col items-center animate-fade-in mt-6">
              <input
                  type="text"
                  value={otherValue}
                  onChange={(e) => setOtherValue(e.target.value)}
                  placeholder={t.other + '...'}
                  className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                  autoFocus
              />
              <button
                  type="submit"
                  className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
              >
                  {t.submit}
              </button>
          </form>
      )}
    </div>
  );
};

export default SurveyStep;