
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
        title: "VonShef Electric Milk Frother",
        description: "An essential for any Cypriot household. Make the perfect ice-cold frappe at home with this top-rated frother.",
        price: "€30",
        url: "https://www.cyprusemall.com.cy/product/vonshef-milk-frother/",
        imageUrl: "https://www.cyprusemall.com.cy/wp-content/uploads/2023/10/71N1G4P3BDL._AC_SL1500_-300x300.jpg",
        seller: "Kitchen Paradise"
    },
    {
        title: "Peshtemal Stripe Beach Towel",
        description: "A large, absorbent, and stylish Turkish-style beach towel. Perfect for Cyprus's beautiful beaches.",
        price: "€22",
        url: "https://www.cyprusemall.com.cy/product/peshtemal-stripe-beach-towel-blue/",
        imageUrl: "https://www.cyprusemall.com.cy/wp-content/uploads/2023/07/71b-dIqA6L._AC_SL1500_-300x300.jpg",
        seller: "Summer Essentials"
    },
    {
        title: "Deluxe Wooden Backgammon Set",
        description: "A beautiful large wooden backgammon set for long afternoons at the local 'kafeneio' or at home.",
        price: "€45",
        url: "https://www.cyprusemall.com.cy/product/deluxe-backgammon-set-large/",
        imageUrl: "https://www.cyprusemall.com.cy/wp-content/uploads/2023/11/61Z6Q3Z3J7L._AC_SL1001_-300x300.jpg",
        seller: "Hobby Games CY"
    },
    {
        title: "BBQ Grill Tool Set (18pcs)",
        description: "Everything you need for the perfect souvla. This stainless steel set is a must-have for any grill master.",
        price: "€55",
        url: "https://www.cyprusemall.com.cy/product/bbq-tool-set-18pcs/",
        imageUrl: "https://www.cyprusemall.com.cy/wp-content/uploads/2023/07/81T6-i90l2L._AC_SL1500_-300x300.jpg",
        seller: "Super Home Center"
    },
    {
        title: "Unisex Classic Wayfarer Sunglasses",
        description: "A stylish and essential accessory for the sunny Cypriot climate. Protect your eyes in style with a classic design.",
        price: "€18",
        url: "https://www.cyprusemall.com.cy/product/unisex-wayfarer-sunglasses/",
        imageUrl: "https://www.cyprusemall.com.cy/wp-content/uploads/2023/07/61Yd2i7V-SL._AC_UY625_-300x300.jpg",
        seller: "Fashion Direct"
    },
    {
        title: "Nedis Hot Air Fryer 4.6L",
        description: "A trending kitchen gadget for healthier and quicker cooking. Great for making Cypriot 'sheftalies' or fries.",
        price: "€85",
        url: "https://www.cyprusemall.com.cy/product/nedis-hot-air-fryer-4-6l/",
        imageUrl: "https://www.cyprusemall.com.cy/wp-content/uploads/2024/02/KAAF250EBK_P-300x300.jpg",
        seller: "Electroline"
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
                <h3 className="absolute bottom-4 left-4 text-lg sm:text-xl font-bold text-white pr-4">{gift.title}</h3>
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
                  {gift.seller && <p className="text-sm font-semibold text-slate-400 mb-3">{t.whereToBuy}: <span className="text-white font-bold">{gift.seller}</span></p>}
                  <div className="flex flex-col space-y-2 text-sm mt-3">
                    <a href={gift.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-md py-2 px-4 transition-all duration-200 transform hover:scale-105">
                      <i className="fas fa-shopping-cart mr-2"></i>{t.viewProduct}
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
