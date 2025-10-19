
import React from 'react';
import { GiftSuggestion } from '../types';

interface TrendingPageProps {
  t: {
    trendingTitle: string;
    whereToBuy: string;
    addToWishlist: string;
    removeFromWishlist: string;
    buyOnAmazon: string;
  };
  onAddToWishlist: (gift: GiftSuggestion) => void;
  wishlist: GiftSuggestion[];
}

const trendingGifts: GiftSuggestion[] = [
    {
        title: "Aerolatte Milk Frother, Original Steam Free with Stand",
        description: "An essential for any Cypriot household. Make the perfect ice-cold frappe at home with this top-rated frother.",
        price: "€25",
        url: "https://www.amazon.co.uk/dp/B0001IXA40?tag=podariai-21",
        imageUrl: "https://m.media-amazon.com/images/I/611sF4a-t7L._AC_SL1500_.jpg"
    },
    {
        title: "Utopia Towels Large Beach Towel Cabana Stripe",
        description: "A large, absorbent, and stylish beach towel. Perfect for Cyprus's beautiful beaches.",
        price: "€40",
        url: "https://www.amazon.co.uk/dp/B07595C953?tag=podariai-21",
        imageUrl: "https://m.media-amazon.com/images/I/9102gL3tJbL._AC_SL1500_.jpg"
    },
    {
        title: "Jaques of London Wooden Backgammon Set",
        description: "A beautiful 15-inch wooden backgammon set for long afternoons at the local 'kafeneio' or at home.",
        price: "€50",
        url: "https://www.amazon.co.uk/dp/B0852HSX3V?tag=podariai-21",
        imageUrl: "https://m.media-amazon.com/images/I/81kLIaT-E-L._AC_SL1500_.jpg"
    },
    {
        title: "Cyprus: A Culinary Journey by Georgina Hayden",
        description: "Learn to cook delicious Cypriot dishes at home with this authentic, highly-rated recipe book.",
        price: "€25",
        url: "https://www.amazon.co.uk/dp/1529108233?tag=podariai-21",
        imageUrl: "https://m.media-amazon.com/images/I/91T1wt9UlIL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Ray-Ban New Wayfarer Sunglasses",
        description: "A stylish and essential accessory for the sunny Cypriot climate. Protect your eyes in style with a classic.",
        price: "€150",
        url: "https://www.amazon.co.uk/dp/B001GNB24E?tag=podariai-21",
        imageUrl: "https://m.media-amazon.com/images/I/61a251tL83L._AC_SL1500_.jpg"
    },
    {
        title: "COSORI Air Fryer 5.5L",
        description: "A trending kitchen gadget for healthier and quicker cooking. Great for making Cypriot 'sheftalies' or fries.",
        price: "€90",
        url: "https://www.amazon.co.uk/dp/B07N8HD9pr?tag=podariai-21",
        imageUrl: "https://m.media-amazon.com/images/I/71i-1tI33CL._AC_SL1500_.jpg"
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
              className="bg-slate-800 rounded-lg shadow-lg flex flex-col overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
              >
              <div className="relative h-56 w-full">
                <img 
                  src={gift.imageUrl}
                  alt={gift.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white pr-4">{gift.title}</h3>
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
                    <a href={gift.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-bold text-slate-900 bg-yellow-400 hover:bg-yellow-500 rounded-md py-2 px-4 transition-all duration-200 transform hover:scale-105">
                      <i className="fab fa-amazon mr-2"></i>{t.buyOnAmazon}
                    </a>
                  </div>
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