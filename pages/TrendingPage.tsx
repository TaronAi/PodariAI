import React from 'react';
import { GiftSuggestion } from '../types';

interface TrendingPageProps {
  t: {
    trendingTitle: string;
    whereToBuy: string;
    addToWishlist: string;
    removeFromWishlist: string;
    viewProduct: string;
  };
  onAddToWishlist: (gift: GiftSuggestion) => void;
  wishlist: GiftSuggestion[];
}

const trendingGifts: GiftSuggestion[] = [
    {
        title: "Xiaomi Redmi Buds 5",
        description: "Wireless headphones with active noise cancellation for immersive sound quality on the go.",
        price: "19,800 ֏",
        url: "https://www.wildberries.am/product?card=203879308",
        imageUrl: "https://basket-12.wbbasket.ru/vol1727/part172744/172744158/images/big/1.jpg",
        seller: "Wildberries"
    },
    {
        title: "The Alchemist by Paulo Coelho",
        description: "A classic, inspiring novel about following your dreams. A timeless gift for any reader.",
        price: "3,500 ֏",
        url: "https://www.wildberries.am/product?card=11306385",
        imageUrl: "https://basket-01.wbbasket.ru/vol138/part13876/13876378/images/big/1.jpg",
        seller: "Wildberries"
    },
    {
        title: "Power Bank 20000 mAh",
        description: "A high-capacity portable charger to keep all your devices powered up throughout the day.",
        price: "8,900 ֏",
        url: "https://www.wildberries.am/product?card=143336499",
        imageUrl: "https://basket-02.wbbasket.ru/vol198/part19888/198889980/images/big/1.jpg",
        seller: "Wildberries"
    },
    {
        title: "Geyser Coffee Maker",
        description: "A classic moka pot for brewing rich, aromatic Armenian-style coffee right at home.",
        price: "6,200 ֏",
        url: "https://www.wildberries.am/product?card=80447190",
        imageUrl: "https://basket-01.wbbasket.ru/vol114/part11432/114329035/images/big/1.jpg",
        seller: "Wildberries"
    },
    {
        title: "Monopoly Classic Board Game",
        description: "The world-famous board game of property and finance. Perfect for fun evenings with family and friends.",
        price: "12,500 ֏",
        url: "https://www.wildberries.am/product?card=10243407",
        imageUrl: "https://basket-01.wbbasket.ru/vol130/part13009/13009848/images/big/1.jpg",
        seller: "Wildberries"
    },
    {
        title: "Yves Saint Laurent Black Opium",
        description: "An addictive and energizing fragrance for women, blending notes of coffee, vanilla, and white flowers.",
        price: "45,000 ֏",
        url: "https://www.wildberries.am/product?card=18018244",
        imageUrl: "https://basket-02.wbbasket.ru/vol222/part22271/22271813/images/big/1.jpg",
        seller: "Wildberries"
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
          const isInWishlist = wishlist.some(item => item.title === gift.title);
          return (
            <div 
              key={index} 
              className="bg-slate-800 rounded-lg shadow-lg flex flex-col overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 relative"
              >
              <a href={gift.url} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow no-underline text-current">
                <div className="relative h-56 w-full">
                  <img 
                    src={gift.imageUrl}
                    alt={gift.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-lg sm:text-xl font-bold text-white pr-4">{gift.title}</h3>
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <p className="text-slate-300 text-sm flex-grow mb-4">{gift.description}</p>
                  <p className="text-xl sm:text-2xl font-semibold text-white mt-auto mb-4">{gift.price}</p>
                  <div className="border-t border-slate-700 pt-4">
                    {gift.seller && <p className="text-sm font-semibold text-slate-400 mb-3">{t.whereToBuy}: <span className="text-white font-bold">{gift.seller}</span></p>}
                    <div className="flex flex-col space-y-2 text-sm mt-3">
                      <div className="flex items-center justify-center font-bold text-white bg-purple-600 group-hover:bg-purple-700 rounded-md py-2 px-4 transition-all duration-200 transform hover:scale-105">
                        <i className="fas fa-shopping-cart mr-2"></i>{t.viewProduct}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
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
          )
        })}
      </div>
    </div>
  );
};

// FIX: Add default export for the component.
export default TrendingPage;
