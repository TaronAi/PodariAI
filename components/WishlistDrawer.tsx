import React, { useState } from 'react';
import { X, Trash2, Share2, Check, ExternalLink } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useLanguage } from '../contexts/LanguageContext';

const WishlistDrawer: React.FC = () => {
  const { isWishlistOpen, setWishlistOpen, wishlist, removeFromWishlist } = useWishlist();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isWishlistOpen) return null;

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

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={() => setWishlistOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white z-10">
          <h2 className="text-xl font-bold text-slate-900">{t.wishlist.title}</h2>
          <button 
            onClick={() => setWishlistOpen(false)}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-slate-400">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <Share2 className="h-8 w-8 text-slate-300" />
              </div>
              <p>{t.wishlist.empty}</p>
            </div>
          ) : (
            wishlist.map(product => (
              <div key={product.id} className="flex gap-4 p-3 rounded-xl border border-slate-100 hover:border-primary-100 bg-white group transition-all">
                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-50">
                  <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">{product.title}</h3>
                    <button 
                      onClick={() => removeFromWishlist(product.id)}
                      className="text-slate-400 hover:text-red-500 p-1"
                      title={t.wishlist.remove}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-primary-600">{product.price.toLocaleString()} {product.currency}</span>
                    <a 
                      href={product.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs flex items-center text-slate-500 hover:text-primary-600"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {product.marketplace}
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <div className="flex justify-between items-center mb-4 text-sm font-medium text-slate-600">
              <span>{t.wishlist.total}:</span>
              <span className="text-lg font-bold text-slate-900">{totalPrice.toLocaleString()} ₽</span>
            </div>
            <button 
              onClick={handleShare}
              disabled={copied}
              className={`w-full py-3 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all ${
                copied 
                ? 'bg-green-500 text-white' 
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl'
              }`}
            >
              {copied ? <Check className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
              <span>{copied ? t.wishlist.copied : t.wishlist.share}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistDrawer;