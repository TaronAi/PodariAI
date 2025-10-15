import React from 'react';
import { Page } from '../App';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  t: {
    footerHome: string;
    footerAbout: string;
    footerCopyright: string;
  }
}


const Footer: React.FC<FooterProps> = ({ setCurrentPage, t }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-16">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 transition-colors">
                <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 transition-colors">
                <i className="fab fa-instagram"></i>
            </a>
        </div>
        <div className="text-sm">
          <p>{t.footerCopyright}</p>
          <div className="mt-2 space-x-4">
              <button onClick={() => setCurrentPage('home')} className="hover:text-white">{t.footerHome}</button>
              <span>&middot;</span>
              <button onClick={() => setCurrentPage('about')} className="hover:text-white">{t.footerAbout}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
