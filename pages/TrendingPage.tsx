import React from 'react';
import { GiftSuggestion } from '../types';

interface TrendingPageProps {
  t: any;
  onAddToWishlist: (gift: GiftSuggestion) => void;
  wishlist: GiftSuggestion[];
}

const trendingGifts: GiftSuggestion[] = [
    {
        name: "Smart Garden Kit",
        description: "An indoor herb garden that automates watering and light. Perfect for aspiring home cooks and tech lovers.",
        price: "8,000₽",
        ozonLink: "#", wildberriesLink: "#", yandexMarketLink: "#", otherOptions: "", imagePrompt: "smart garden"
    },
    {
        name: "Portable Projector",
        description: "Turn any room into a cinema with this compact and powerful projector. Great for movie nights or presentations.",
        price: "15,000₽",
        ozonLink: "#", wildberriesLink: "#", yandexMarketLink: "#", otherOptions: "", imagePrompt: "portable projector"
    },
    {
        name: "Weighted Blanket",
        description: "A cozy blanket designed to reduce anxiety and improve sleep quality through gentle, calming pressure.",
        price: "6,500₽",
        ozonLink: "#", wildberriesLink: "#", yandexMarketLink: "#", otherOptions: "", imagePrompt: "weighted blanket"
    },
    {
        name: "MasterClass Subscription",
        description: "Unlock access to online classes taught by the world's best in cooking, writing, science, and more.",
        price: "12,000₽",
        ozonLink: "#", wildberriesLink: "#", yandexMarketLink: "#", otherOptions: "", imagePrompt: "online class"
    },
    {
        name: "Artisan Coffee Set",
        description: "A curated selection of single-origin coffee beans, a high-quality grinder, and a French press.",
        price: "5,000₽",
        ozonLink: "#", wildberriesLink: "#", yandexMarketLink: "#", otherOptions: "", imagePrompt: "coffee set"
    },
    {
        name: "Virtual Reality Headset",
        description: "Dive into immersive games and experiences with a cutting-edge VR headset. The ultimate tech gift.",
        price: "35,000₽",
        ozonLink: "#", wildberriesLink: "#", yandexMarketLink: "#", otherOptions: "", imagePrompt: "vr headset"
    }
];

const TrendingPage: React.FC<TrendingPageProps> = ({ t, onAddToWishlist, wishlist }) => {
  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        Trending Gifts
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
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-300 text-sm flex-grow mb-4">{gift.description}</p>
                <p className="text-2xl font-semibold text-white mt-auto">{gift.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default TrendingPage;
