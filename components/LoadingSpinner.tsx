
import React, { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  t: {
    loadingMessages: string[];
  }
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ t }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messages = t.loadingMessages;
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2500); // Change message every 2.5 seconds

    return () => clearInterval(interval);
  }, [t.loadingMessages]);

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in">
      <div className="w-16 h-16 border-4 border-t-purple-500 border-r-purple-500 border-b-transparent border-l-transparent rounded-full animate-spin mb-6"></div>
      <div className="h-20">
        <h2 className="text-2xl font-semibold text-white transition-opacity duration-500">
            {t.loadingMessages[messageIndex]}
        </h2>
      </div>
    </div>
  );
};

export default LoadingSpinner;
