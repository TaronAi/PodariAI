import React from 'react';
import WhyPodariAI from '../components/WhyPodariAI';

interface AboutPageProps {
  t: {
    aboutTitle: string;
    aboutParagraph1: string;
    aboutMissionTitle: string;
    aboutMissionParagraph: string;
    whyTitle: string;
    why1Title: string;
    why1Desc: string;
    why2Title: string;
    why2Desc: string;
    why4Title: string;
    why4Desc: string;
    why5Title: string;
    why5Desc: string;
    why6Title: string;
    why6Desc: string;
  };
}

const AboutPage: React.FC<AboutPageProps> = ({ t }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            {t.aboutTitle}
        </h2>
        <p className="text-lg text-slate-300 mb-12">
            {t.aboutParagraph1}
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-left mb-12">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">{t.aboutMissionTitle}</h3>
            <p className="text-slate-300">
                {t.aboutMissionParagraph}
            </p>
        </div>
        
        <WhyPodariAI t={t} />

    </div>
  );
};

export default AboutPage;
