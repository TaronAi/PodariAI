import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ProductCard from '../components/ProductCard';
import { REVIEWS } from '../constants';

import { getProducts, mapToProduct } from "../services/takprodamService";

const Home: React.FC = () => {
  const { t } = useLanguage();

  const [products, setProducts] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function load() {
      try {
        const items = await getProducts();
        setProducts(items.map(mapToProduct));
      } catch (err) {
        console.error("Error loading products:", err);
      }
    }
    load();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-purple-50 pt-20 pb-32 overflow-hidden">

        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-0 left-0 -mt-20 -ml-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-primary-100 text-primary-600 text-sm font-medium mb-6 shadow-sm hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Powered Gift Engine
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link 
                to="/find-gift"
                className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 shadow-lg hover:shadow-primary-500/30 transition-all flex items-center justify-center transform hover:-translate-y-1"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-10 animate-slide-up">
            <TrendingUp className="h-6 w-6 text-primary-500" />
            <h2 className="text-3xl font-bold text-slate-900">{t.home.trendingTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, idx) => (
              <div 
                key={product.id} 
                className="opacity-0 animate-slide-up" 
                style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 animate-fade-in">{t.home.reviewsTitle}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {REVIEWS.map((review, idx) => (
               <div 
                 key={review.id} 
                 className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow opacity-0 animate-scale-in"
                 style={{ animationDelay: `${(idx * 200) + 200}ms`, animationFillMode: 'forwards' }}
               >
                 <div className="flex text-yellow-400 mb-4">
                   {[...Array(review.rating)].map((_, i) => <Gift key={i} className="h-5 w-5 fill-current" />)}
                 </div>
                 <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                 <div className="font-semibold text-slate-900">{review.user}</div>
               </div>
             ))}
           </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
