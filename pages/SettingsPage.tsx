import React from 'react';
import { RegionCode, Language } from '../types';
import { REGIONS } from '../constants';

interface SettingsPageProps {
  region: RegionCode;
  setRegion: (region: RegionCode) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  t: {
    settingsTitle: string;
    settingsSubtitle: string;
    settingsRegion: string;
    settingsLanguage: string;
  }
}

const SettingsPage: React.FC<SettingsPageProps> = ({ 
  region, 
  setRegion, 
  language, 
  setLanguage, 
  t 
}) => {

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRegionCode = e.target.value as RegionCode;
    setRegion(newRegionCode);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  const selectStyles = "w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:outline-none transition text-white";

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <header className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          <i className="fas fa-cog mr-3"></i>
          {t.settingsTitle}
        </h2>
        <p className="text-slate-400 mt-2">{t.settingsSubtitle}</p>
      </header>

      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 sm:p-8 space-y-8">
        <div>
          <label htmlFor="region-select" className="block text-lg font-semibold text-slate-300 mb-2">
            {t.settingsRegion}
          </label>
          <select
            id="region-select"
            value={region}
            onChange={handleRegionChange}
            className={selectStyles}
          >
            {REGIONS.map(r => (
              <option key={r.code} value={r.code}>{r.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="language-select" className="block text-lg font-semibold text-slate-300 mb-2">
            {t.settingsLanguage}
          </label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className={selectStyles}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="hy">Հայերեն</option>
          </select>
        </div>
        
      </div>

    </div>
  );
};

export default SettingsPage;