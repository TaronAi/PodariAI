import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Send, Phone, Handshake, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 py-20 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* General Support Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-center mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            {language === 'ru' ? 'Свяжитесь с нами' : 'Contact Us'}
          </h1>
          <p className="text-slate-500 mb-8">
            {language === 'ru' ? 'Есть вопросы или предложения? Напишите нам.' : 'Have questions or suggestions? Write to us.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="mailto:support@podari.ai" className="flex items-center justify-center p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200 group">
              <Mail className="h-6 w-6 text-slate-400 group-hover:text-primary-500 transition-colors mr-3" />
              <span className="font-medium text-slate-700">support@podari.ai</span>
            </a>

            <a href="https://t.me/podariai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-5 bg-slate-50 rounded-xl border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-colors group">
              <Send className="h-6 w-6 text-slate-400 group-hover:text-blue-500 transition-colors mr-3" />
              <span className="font-medium text-slate-700">@podariai</span>
            </a>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-xl text-white text-center relative overflow-hidden opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
           {/* decorative background elements */}
           <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-primary-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-48 h-48 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10">
            <div className="inline-flex p-4 bg-white/10 rounded-full mb-6 backdrop-blur-md ring-1 ring-white/20">
                <Handshake className="h-8 w-8 text-primary-300" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">
                {language === 'ru' ? 'Сотрудничество и Реклама' : 'Partnership & Advertising'}
            </h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
                {language === 'ru' 
                 ? 'Хотите разместить свои товары на нашей платформе? Станьте нашим партнером! Свяжитесь с нами в Telegram, Instagram или по телефону.' 
                 : 'Want to advertise your products on our website? Become our partner! Contact us via Telegram, Instagram, or phone.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+37491468210" className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-primary-50 transition-colors hover:scale-105 transform duration-200">
                    <Phone className="h-5 w-5 mr-2 text-primary-600" />
                    +374 91 468210
                </a>
                
                <div className="flex w-full sm:w-auto gap-4">
                   <a href="https://t.me/podariai" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors hover:scale-105 transform duration-200">
                      <Send className="h-5 w-5" />
                   </a>
                   <a href="https://instagram.com/poda.riai" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors hover:scale-105 transform duration-200">
                      <Instagram className="h-5 w-5" />
                   </a>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;