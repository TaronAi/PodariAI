import React from 'react';
import { GiftSuggestion } from '../types';

interface GiftResultsProps {
  suggestions: GiftSuggestion[];
  onReset: () => void;
  onAddToWishlist: (gift: GiftSuggestion) => void;
  wishlist: GiftSuggestion[];
  t: {
    resultsTitle: string;
    whereToBuy: string;
    startOver: string;
    addToWishlist: string;
    removeFromWishlist: string;
  }
}

const GiftResults: React.FC<GiftResultsProps> = ({ suggestions, onReset, onAddToWishlist, wishlist, t }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 animate-fade-in">
        {t.resultsTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {suggestions.map((gift, index) => {
          const isInWishlist = wishlist.some(item => item.name === gift.name);
          return (
            <div 
              key={index} 
              className="bg-slate-800 rounded-lg shadow-lg flex flex-col overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 animate-drop-in"
              style={{ animationDelay: `${index * 150}ms` } as React.CSSProperties}
              >
              <div className="relative h-56 w-full">
                <img 
                  src={`https://picsum.photos/seed/${encodeURIComponent(gift.name)}/400/300`} 
                  alt={gift.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-lg sm:text-xl font-bold text-white pr-4">{gift.name}</h3>
                 <button
                    onClick={() => onAddToWishlist(gift)}
                    className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:opacity-100 ${
                      isInWishlist ? 'bg-white/90 text-red-500' : 'opacity-70 bg-black/50 text-white hover:bg-white/80 hover:text-red-500'
                    }`}
                    aria-label={isInWishlist ? t.removeFromWishlist : t.addToWishlist}
                  >
                    <i className={`fa-heart text-lg ${isInWishlist ? 'fas' : 'far'}`}></i>
                </button>
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <p className="text-slate-300 text-sm flex-grow mb-4">{gift.description}</p>
                <p className="text-xl sm:text-2xl font-semibold text-white mt-auto mb-4">{gift.price}</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-sm font-semibold text-slate-400 mb-3">{t.whereToBuy}:</p>
                  <div className="flex flex-col space-y-2 text-sm">
                    <a href={gift.ozonLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-4 transition-all duration-200 transform hover:scale-105">
                      <i className="fas fa-shopping-cart mr-2"></i>Ozon
                    </a>
                    <a href={gift.wildberriesLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-md py-2 px-4 transition-all duration-200 transform hover:scale-105">
                      <i className="fas fa-shopping-cart mr-2"></i>Wildberries
                    </a>
                    <a href={gift.yandexMarketLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-bold text-white bg-red-500 hover:bg-red-600 rounded-md py-2 px-4 transition-all duration-200 transform hover:scale-105">
                      <i className="fas fa-shopping-cart mr-2"></i>Yandex Market
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mt-4 text-center">{gift.otherOptions}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div 
        className="text-center mt-12 animate-fade-in"
        style={{ animationDelay: `${suggestions.length * 150}ms` } as React.CSSProperties}
        >
        <button
          onClick={onReset}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
        >
          {t.startOver}
        </button>
      </div>
    </div>
  );
};

export default GiftResults;
