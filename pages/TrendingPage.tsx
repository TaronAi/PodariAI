import React from 'react';
import { GiftSuggestion } from '../types';

interface TrendingPageProps {
  t: {
    trendingTitle: string;
    whereToBuy: string;
    addToWishlist: string;
    removeFromWishlist: string;
  };
  onAddToWishlist: (gift: GiftSuggestion) => void;
  wishlist: GiftSuggestion[];
}

const trendingGifts: GiftSuggestion[] = [
    {
        name: "Frappe Maker",
        description: "An essential for any Cypriot household. Make the perfect ice-cold frappe at home.",
        price: "€25",
        marketplace1Link: "https://www.public.cy/search/frappe-maker",
        marketplace2Link: "https://www.stephanis.com.cy/en/search?q=frappe%20maker",
        marketplace3Link: "https://www.skroutz.com.cy/search?keyphrase=frappe+maker",
        otherOptions: "Available in all major home appliance stores.",
        imagePrompt: "frappe maker"
    },
    {
        name: "High-Quality Beach Towel",
        description: "A large, absorbent, and stylish beach towel. Perfect for Cyprus's beautiful beaches.",
        price: "€40",
        marketplace1Link: "https://www.amazon.de/s?k=beach+towel",
        marketplace2Link: "https://www.skroutz.com.cy/c/2435/Petsedes-Thalassis.html",
        marketplace3Link: "https://www.next.com.cy/en/search/keywords-beach-towel",
        otherOptions: "Find in department stores and beachwear shops.",
        imagePrompt: "luxury beach towel on sand"
    },
    {
        name: "Backgammon (Tavli) Set",
        description: "A beautiful wooden backgammon set for long afternoons at the local 'kafeneio' or at home.",
        price: "€50",
        marketplace1Link: "https://www.public.cy/search/tavli",
        marketplace2Link: "https://www.amazon.de/s?k=backgammon+set",
        marketplace3Link: "https://www.skroutz.com.cy/c/1831/Tavli.html",
        otherOptions: "Available in toy and traditional gift shops.",
        imagePrompt: "wooden backgammon set"
    },
    {
        name: "Local Winery Tour & Tasting",
        description: "An experience gift to explore one of Cyprus's many excellent wineries in the Troodos mountains.",
        price: "€60",
        marketplace1Link: "https://www.vlassideswinery.com/",
        marketplace2Link: "https://www.oenouyi.com/vineyard-and-winery-tour-and-tasting/",
        marketplace3Link: "https://www.facebook.com/Tsiakkas.winery/",
        otherOptions: "Book directly with wineries like Vlassides or Tsiakkas.",
        imagePrompt: "wine tasting in a vineyard"
    },
    {
        name: "Designer Sunglasses",
        description: "A stylish and essential accessory for the sunny Cypriot climate. Protect your eyes in style.",
        price: "€150",
        marketplace1Link: "https://www.public.cy/search/sunglasses",
        marketplace2Link: "https://www.amazon.de/s?k=designer+sunglasses",
        marketplace3Link: "https://www.skroutz.com.cy/c/1058/gualia-hliou.html",
        otherOptions: "Available at all major opticians and fashion retailers.",
        imagePrompt: "designer sunglasses on a cafe table"
    },
    {
        name: "Air Fryer",
        description: "A trending kitchen gadget for healthier and quicker cooking. Great for making Cypriot 'sheftalies' or fries.",
        price: "€90",
        marketplace1Link: "https://www.public.cy/search/air-fryer",
        marketplace2Link: "https://www.stephanis.com.cy/en/search?q=air%20fryer",
        marketplace3Link: "https://www.skroutz.com.cy/search?keyphrase=air+fryer",
        otherOptions: "Check prices at major electronics retailers.",
        imagePrompt: "modern air fryer in a kitchen"
    }
];

const TrendingPage: React.FC<TrendingPageProps> = ({ t, onAddToWishlist, wishlist }) => {
  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        {t.trendingTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {trendingGifts.map((gift, index) => {
          const isInWishlist = wishlist.some(item => item.name === gift.name);
          return (
            <div 
              key={index} 
              className="bg-slate-800 rounded-lg shadow-lg flex flex-col overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
              >
              <div className="relative h-56 w-full">
                <img 
                  src={`https://picsum.photos/seed/${encodeURIComponent(gift.imagePrompt)}/400/300`} 
                  alt={gift.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white pr-4">{gift.name}</h3>
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
                    <a href={gift.marketplace1Link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-4 transition-all duration-200 transform hover:scale-105">
                      <i className="fas fa-shopping-cart mr-2"></i>Shop 1
                    </a>
                    <a href={gift.marketplace2Link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-md py-2 px-4 transition-all duration-200 transform hover:scale-105">
                      <i className="fas fa-shopping-cart mr-2"></i>Shop 2
                    </a>
                    <a href={gift.marketplace3Link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-bold text-white bg-red-500 hover:bg-red-600 rounded-md py-2 px-4 transition-all duration-200 transform hover:scale-105">
                      <i className="fas fa-shopping-cart mr-2"></i>Shop 3
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mt-4 text-center">{gift.otherOptions}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default TrendingPage;