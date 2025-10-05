import React from 'react';
import { GiftSuggestion } from '../types';

interface WishlistProps {
  items: GiftSuggestion[];
  onRemove: (giftName: string) => void;
  onClose: () => void;
}

const Wishlist: React.FC<WishlistProps> = ({ items, onRemove, onClose }) => {
  // Prevent scrolling on the body when the modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-slate-700 flex-shrink-0">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            <i className="fas fa-heart mr-2"></i>
            Ваш вишлист (Your Wishlist)
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white" aria-label="Close wishlist">
            <i className="fas fa-times text-2xl"></i>
          </button>
        </header>
        
        <div className="overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-slate-400">Ваш вишлист пуст. (Your wishlist is empty.)</p>
              <p className="text-sm text-slate-500 mt-2">Нажмите на сердечко на карточке подарка, чтобы добавить его сюда. (Click the heart on a gift card to add it here.)</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li 
                  key={item.name} 
                  className="flex items-center bg-slate-900 p-3 rounded-lg animate-drop-in"
                  style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
                  >
                  <img src={`https://picsum.photos/seed/${encodeURIComponent(item.name)}/100/100`} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                  <div className="flex-grow">
                    <h3 className="font-bold text-white">{item.name}</h3>
                    <p className="text-sm text-slate-400">{item.price}</p>
                  </div>
                  <button 
                    onClick={() => onRemove(item.name)} 
                    className="w-10 h-10 flex-shrink-0 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-transform transform hover:scale-110"
                    aria-label={`Remove ${item.name} from wishlist`}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
