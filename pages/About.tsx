import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Bot, ShoppingCart, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 py-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 animate-slide-up">
          <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            {language === 'ru' ? 'О проекте Podari.AI' : 'About Podari.AI'}
          </h1>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-start opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="p-4 bg-primary-50 rounded-2xl text-primary-600">
                <Bot className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  {language === 'ru' ? 'Искусственный Интеллект' : 'Artificial Intelligence'}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {language === 'ru' 
                    ? 'Мы используем передовой AI-движок для анализа миллионов комбинаций интересов, возрастов и поводов. Наша цель — найти не просто товар, а эмоцию, которая идеально подойдет получателю.' 
                    : 'We use an advanced AI-powered engine to analyze millions of combinations of interests, ages, and occasions. Our goal is to find not just a product, but an emotion that fits the recipient perfectly.'}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  {language === 'ru' ? 'Умный Каталог' : 'Smart Catalog'}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {language === 'ru'
                    ? 'Мы не продаем товары напрямую. Мы ищем лучшие предложения на Ozon, Wildberries, Яндекс Маркете и AliExpress, чтобы вы могли сравнить цены и купить там, где вам удобно.'
                    : 'We do not sell products directly. We find the best deals on Ozon, Wildberries, Yandex Market, and AliExpress so you can compare prices and buy where it fits you best.'}
                </p>
              </div>
            </div>

             <div className="flex flex-col md:flex-row gap-6 items-start opacity-0 animate-slide-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <div className="p-4 bg-rose-50 rounded-2xl text-rose-600">
                <Heart className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  {language === 'ru' ? 'Сделано с любовью' : 'Made with Love'}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {language === 'ru'
                    ? 'Наша миссия — избавить вас от стресса выбора подарков. Дарите радость, а поиск мы берем на себя.'
                    : 'Our mission is to relieve you of the stress of choosing gifts. Give joy, and we will take care of the search.'}
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20 pt-12 border-t border-slate-100 animate-slide-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-primary-500" />
              {language === 'ru' ? 'Наша Команда' : 'Our Team'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CMO */}
              <div className="group text-center">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-md relative group-hover:shadow-xl transition-all duration-300">
                  {/* Replace src with your uploaded image URL for the person on the rocks */}
                 <img 
                    src="/images/Davyd.jpg" 
                    alt="Co-founder & CMO" 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Taron Seynyan</h3>
                <p className="text-primary-600 font-medium tracking-wide text-sm uppercase">Co-founder & CEO</p>
              </div>

              {/* CEO */}
              <div className="group text-center">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-md relative group-hover:shadow-xl transition-all duration-300">
                  {/* Replace src with your uploaded image URL for the person in blue shirt/sunglasses */}
                  <img 
                    src="/images/Taron.jpg" 
                    alt="Co-founder & CEO" 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Davyd Shevchenko</h3>
                <p className="text-primary-600 font-medium tracking-wide text-sm uppercase">Co-founder & CMO</p>
              </div>

              {/* CTO */}
              <div className="group text-center">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-md relative group-hover:shadow-xl transition-all duration-300">
                   {/* Replace src with your uploaded image URL for the person in white tank top */}
                  <img 
                    src="/images/Amir.jpg" 
                    alt="Co-founder & CEO" 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Amir Dairov</h3>
                <p className="text-primary-600 font-medium tracking-wide text-sm uppercase">Co-founder & CTO</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;