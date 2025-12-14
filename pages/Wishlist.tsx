import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Share2, Check, ArrowRight, Trash2 } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useLanguage } from '../contexts/LanguageContext';
import ProductCard from '../components/ProductCard';

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = wishlist.map(p => `- ${p.title} (${p.price} ${p.currency})`).join('\n');
    const shareText = `${t.wishlist.title}:\n\n${text}\n\nFind them at Podari.AI`;
    
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const totalPrice = wishlist.reduce((acc, curr) => acc + curr.price, 0);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 px-4 animate-fade-in">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 text-center max-w-lg w-full animate-scale-in">
          <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-10 w-10 text-primary-400" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">{t.wishlist.title}</h1>
          <p className="text-slate-500 mb-8">{t.wishlist.empty}</p>
          <Link 
            to="/find-gift"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
          >
            {t.hero.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center animate-slide-up">
          <Heart className="h-8 w-8 text-primary-500 mr-3 fill-primary-500" />
          {t.wishlist.title}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((product, idx) => (
                <div key={product.id} className="opacity-0 animate-slide-up" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:w-80 flex-shrink-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24">
              <h2 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">
                {language === 'ru' ? 'Сводка' : 'Summary'}
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>{language === 'ru' ? 'Подарков:' : 'Items:'}</span>
                  <span className="font-medium text-slate-900">{wishlist.length}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-slate-900 pt-2">
                  <span>{t.wishlist.total}:</span>
                  <span>{totalPrice.toLocaleString()} ₽</span>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={handleShare}
                  disabled={copied}
                  className={`w-full py-3 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-95 ${
                    copied 
                    ? 'bg-green-500 text-white' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {copied ? <Check className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
                  <span>{copied ? t.wishlist.copied : t.wishlist.share}</span>
                </button>
                
                <Link 
                  to="/find-gift"
                  className="w-full py-3 rounded-xl font-bold flex items-center justify-center space-x-2 border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                >
                   <span>{language === 'ru' ? 'Искать еще' : 'Find more'}</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wishlist;