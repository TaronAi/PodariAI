import React, { useEffect } from 'react';

interface GiftOpeningAnimationProps {
  onAnimationComplete: () => void;
}

const GiftOpeningAnimation: React.FC<GiftOpeningAnimationProps> = ({ onAnimationComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 2500); // Should match the total animation duration

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="flex flex-col items-center justify-center animate-fade-in py-16">
        <div className="gift-container">
            <div className="gift-lid"></div>
            <div className="gift-box"></div>
        </div>
        <p className="mt-8 text-2xl font-semibold text-white">Открываем ваш подарок... (Opening your present...)</p>
    </div>
  );
};

export default GiftOpeningAnimation;
