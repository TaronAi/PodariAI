import React from 'react';

const WhyPodariAI: React.FC = () => {
    return (
        <div className="w-full max-w-4xl mx-auto text-center p-6 md:p-8 mt-12 bg-slate-800/50 border border-slate-700 rounded-lg animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Почему Podari.AI? (Why Podari.AI?)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-brain mr-2"></i>Настоящий ИИ</h3>
                    <p className="text-slate-300 text-sm">Не просто фильтры — наш ИИ учится и генерирует новые идеи, анализируя тысячи вариантов.</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-store mr-2"></i>Все магазины сразу</h3>
                    <p className="text-slate-300 text-sm">Мы находим лучшие варианты на Ozon, Wildberries и Яндекс.Маркете, чтобы вы могли сравнить.</p>
                </div>
                 <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-users mr-2"></i>Анализ соцсетей</h3>
                    <p className="text-slate-300 text-sm">Опционально: вставьте ссылку на профиль, чтобы ИИ точнее угадал интересы человека.</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-heart mr-2"></i>Вишлисты и профили</h3>
                    <p className="text-slate-300 text-sm">Сохраняйте идеи в вишлисты и создавайте профили для близких, чтобы не забыть о важных датах.</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-infinity mr-2"></i>Широкий охват</h3>
                    <p className="text-slate-300 text-sm">От физических товаров до подписок, впечатлений и нишевых подарков.</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-tags mr-2"></i>Прозрачность цен</h3>
                    <p className="text-slate-300 text-sm">Показываем цены в разных магазинах, помогая вам сделать выгодный выбор.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyPodariAI;
