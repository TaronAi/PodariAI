import React from 'react';
import { Star, ExternalLink, Heart } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useWishlist } from '../contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useLanguage();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isLiked = isInWishlist(product.id);

  const getMarketplaceColor = (market: string) => {
    switch (market) {
      case 'Ozon': return 'bg-blue-100 text-blue-700';
      case 'Wildberries': return 'bg-purple-100 text-purple-700';
      case 'Yandex Market': return 'bg-yellow-100 text-yellow-700';
      case 'AliExpress': return 'bg-red-100 text-red-700';
      case 'Amazon': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const openAffiliate = () => {
    const link = product.affiliateLink.startsWith("http")
      ? product.affiliateLink
      : "https://" + product.affiliateLink;

    window.open(link, "_blank");
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${getMarketplaceColor(product.marketplace)}`}>
          {product.marketplace}
        </div>

        <button
          onClick={handleHeartClick}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-all transform hover:scale-110 active:scale-95 group-hover:opacity-100 md:opacity-0 opacity-100 transition-opacity duration-300"
        >
          <Heart className={`h-5 w-5 transition-colors ${isLiked ? 'fill-primary-500 text-primary-500' : 'text-slate-400 hover:text-primary-500'}`} />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center space-x-1 mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-slate-700">{product.rating}</span>
          <span className="text-xs text-slate-400">({product.reviewsCount})</span>
        </div>

        <h3 className="font-semibold text-slate-900 mb-1 line-clamp-2 flex-grow">
          {product.title}
        </h3>

        {product.description && (
          <p className="text-xs text-slate-500 mb-3 line-clamp-2">{product.description}</p>
        )}

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50">
          <div className="text-lg font-bold text-slate-900">
            {product.price.toLocaleString()} {product.currency}
          </div>

          <button
            onClick={openAffiliate}
            className="flex items-center space-x-2 bg-slate-900 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <span>{t.product.buy}</span>
            <ExternalLink className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
