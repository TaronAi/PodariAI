
import React, { useState, useEffect } from 'react';

const loadingMessages = [
  {
    ru: "ИИ подбирает идеи...",
    en: "AI is crafting ideas...",
  },
  {
    ru: "Анализируем предпочтения...",
    en: "Analyzing preferences...",
  },
  {
    ru: "Ищем вдохновение во вселенной!",
    en: "Searching the universe for inspiration!",
  },
  {
    ru: "Составляем список идеальных подарков...",
    en: "Compiling the perfect gift list...",
  },
  {
    ru: "Почти готово!",
    en: "Almost there!",
  },
];

const LoadingSpinner: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
    }, 2500); // Change message every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in">
      <div className="w-16 h-16 border-4 border-t-purple-500 border-r-purple-500 border-b-transparent border-l-transparent rounded-full animate-spin mb-6"></div>
      <div className="h-20">
        <h2 className="text-2xl font-semibold text-white transition-opacity duration-500">
            {loadingMessages[messageIndex].ru}
        </h2>
        <p className="text-slate-400 mt-2 transition-opacity duration-500">
            ({loadingMessages[messageIndex].en})
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;