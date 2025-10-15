import React from 'react';

interface LanguageSwitcherProps {
  language: 'ru' | 'en';
  setLanguage: (lang: 'ru' | 'en') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
  const baseClasses = "px-3 py-1 rounded-md text-sm font-bold transition-colors";
  const activeClasses = "bg-purple-600 text-white shadow-md";
  const inactiveClasses = "bg-slate-700 text-slate-300 hover:bg-slate-600";

  return (
    <div className="bg-slate-800 p-1 rounded-lg shadow-md border border-slate-700 flex">
      <button
        onClick={() => setLanguage('ru')}
        className={`${baseClasses} ${language === 'ru' ? activeClasses : inactiveClasses}`}
        aria-pressed={language === 'ru'}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`${baseClasses} ${language === 'en' ? activeClasses : inactiveClasses}`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
