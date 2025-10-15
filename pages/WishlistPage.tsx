import React from 'react';
import { GiftSuggestion } from '../types';

interface WishlistPageProps {
  items: GiftSuggestion[];
  onRemove: (giftName: string) => void;
  t: {
    wishlistTitle: string;
    wishlistEmpty: string;
    wishlistEmptyHint: string;
    remove: string;
  }
}

const WishlistPage: React.FC<WishlistPageProps> = ({ items, onRemove, t }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <header className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          <i className="fas fa-heart mr-3"></i>
          {t.wishlistTitle}
        </h2>
      </header>
      
      <div>
        {items.length === 0 ? (
          <div className="text-center py-16 bg-slate-800/50 rounded-lg">
            <p className="text-xl text-slate-400">{t.wishlistEmpty}</p>
            <p className="text-md text-slate-500 mt-2">{t.wishlistEmptyHint}</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li 
                key={item.name} 
                className="flex flex-col sm:flex-row items-center bg-slate-800 p-4 rounded-lg animate-drop-in shadow-md"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
                >
                <img src={`https://picsum.photos/seed/${encodeURIComponent(item.name)}/200/200`} alt={item.name} className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"/>
                <div className="flex-grow min-w-0 text-center sm:text-left">
                  <h3 className="font-bold text-xl text-white">{item.name}</h3>
                  <p className="text-lg text-slate-300 my-1">{item.price}</p>
                   <p className="text-sm text-slate-400 hidden sm:block">{item.description}</p>
                </div>
                <button 
                  onClick={() => onRemove(item.name)} 
                  className="w-12 h-12 flex-shrink-0 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-transform transform hover:scale-110 mt-4 sm:mt-0 sm:ml-6"
                  aria-label={`${t.remove} ${item.name}`}
                >
                  <i className="fas fa-trash text-lg"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
