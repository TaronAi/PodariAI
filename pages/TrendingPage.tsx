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
        name: "Smart Garden Kit",
        description: "An indoor herb garden that automates watering and light. Perfect for aspiring home cooks and tech lovers.",
        price: "8,000₽",
        ozonLink: "https://www.ozon.ru/search/?text=smart+garden+kit",
        wildberriesLink: "https://www.wildberries.ru/catalog/0/search.aspx?search=smart+garden+kit",
        yandexMarketLink: "https://market.yandex.ru/search?text=smart+garden+kit",
        otherOptions: "Available in home & garden or electronics stores.",
        imagePrompt: "smart garden"
    },
    {
        name: "Portable Projector",
        description: "Turn any room into a cinema with this compact and powerful projector. Great for movie nights or presentations.",
        price: "15,000₽",
        ozonLink: "https://www.ozon.ru/search/?text=portable+projector",
        wildberriesLink: "https://www.wildberries.ru/catalog/0/search.aspx?search=portable+projector",
        yandexMarketLink: "https://market.yandex.ru/search?text=portable+projector",
        otherOptions: "Find in major electronics retailers.",
        imagePrompt: "portable projector"
    },
    {
        name: "Weighted Blanket",
        description: "A cozy blanket designed to reduce anxiety and improve sleep quality through gentle, calming pressure.",
        price: "6,500₽",
        ozonLink: "https://www.ozon.ru/search/?text=weighted+blanket",
        wildberriesLink: "https://www.wildberries.ru/catalog/0/search.aspx?search=weighted+blanket",
        yandexMarketLink: "https://market.yandex.ru/search?text=weighted+blanket",
        otherOptions: "Available in home goods stores and online.",
        imagePrompt: "weighted blanket"
    },
    {
        name: "MasterClass Subscription",
        description: "Unlock access to online classes taught by the world's best in cooking, writing, science, and more.",
        price: "12,000₽",
        ozonLink: "https://www.masterclass.com/",
        wildberriesLink: "https://www.masterclass.com/",
        yandexMarketLink: "https://www.masterclass.com/",
        otherOptions: "Purchase directly from the MasterClass website.",
        imagePrompt: "online class"
    },
    {
        name: "Artisan Coffee Set",
        description: "A curated selection of single-origin coffee beans, a high-quality grinder, and a French press.",
        price: "5,000₽",
        ozonLink: "https://www.ozon.ru/search/?text=artisan+coffee+set",
        wildberriesLink: "https://www.wildberries.ru/catalog/0/search.aspx?search=artisan+coffee+set",
        yandexMarketLink: "https://market.yandex.ru/search?text=artisan+coffee+set",
        otherOptions: "Specialty coffee shops often sell these.",
        imagePrompt: "coffee set"
    },
    {
        name: "Virtual Reality Headset",
        description: "Dive into immersive games and experiences with a cutting-edge VR headset. The ultimate tech gift.",
        price: "35,000₽",
        ozonLink: "https://www.ozon.ru/search/?text=vr+headset",
        wildberriesLink: "https://www.wildberries.ru/catalog/0/search.aspx?search=vr+headset",
        yandexMarketLink: "https://market.yandex.ru/search?text=vr+headset",
        otherOptions: "Check prices at DNS, M.Video, and Eldorado.",
        imagePrompt: "vr headset"
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
    </div>
  );
};

export default TrendingPage;
