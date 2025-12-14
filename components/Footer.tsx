import React from 'react';
import { Gift, Instagram, Send, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Gift className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold text-slate-900">Podari.AI</span>
            </div>
            <p className="text-slate-500 text-sm">
              Making gift giving easier, faster, and more personal with the power of Artificial Intelligence.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">{t.nav.home}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/find-gift" className="hover:text-primary-500">Find a Gift</Link></li>
              <li><Link to="/about" className="hover:text-primary-500">How it Works</Link></li>
              <li><Link to="#" className="hover:text-primary-500">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="#" className="hover:text-primary-500">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-primary-500">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-primary-500">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Social</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/poda.riai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-100 rounded-full hover:bg-primary-100 text-slate-600 hover:text-primary-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me/podariai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-100 rounded-full hover:bg-primary-100 text-slate-600 hover:text-primary-600 transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
              <a 
                href="mailto:support@podari.ai" 
                className="p-2 bg-slate-100 rounded-full hover:bg-primary-100 text-slate-600 hover:text-primary-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Podari.AI. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;