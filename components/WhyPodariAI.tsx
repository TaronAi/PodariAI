
import React from 'react';

interface WhyPodariAIProps {
  t: {
    whyTitle: string;
    why1Title: string;
    why1Desc: string;
    why2Title: string;
    why2Desc: string;
    why3Title: string;
    why3Desc: string;
    why4Title: string;
    why4Desc: string;
    why5Title: string;
    why5Desc: string;
    why6Title: string;
    why6Desc: string;
  }
}

const WhyPodariAI: React.FC<WhyPodariAIProps> = ({ t }) => {
    return (
        <div className="w-full max-w-4xl mx-auto text-center p-6 md:p-8 mt-12 bg-slate-800/50 border border-slate-700 rounded-lg animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              {t.whyTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-brain mr-2"></i>{t.why1Title}</h3>
                    <p className="text-slate-300 text-sm">{t.why1Desc}</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-store mr-2"></i>{t.why2Title}</h3>
                    <p className="text-slate-300 text-sm">{t.why2Desc}</p>
                </div>
                 <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-users mr-2"></i>{t.why3Title}</h3>
                    <p className="text-slate-300 text-sm">{t.why3Desc}</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-heart mr-2"></i>{t.why4Title}</h3>
                    <p className="text-slate-300 text-sm">{t.why4Desc}</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-infinity mr-2"></i>{t.why5Title}</h3>
                    <p className="text-slate-300 text-sm">{t.why5Desc}</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-pink-400 mb-2"><i className="fas fa-tags mr-2"></i>{t.why6Title}</h3>
                    <p className="text-slate-300 text-sm">{t.why6Desc}</p>
                </div>
            </div>
        </div>
    );
};

export default WhyPodariAI;
