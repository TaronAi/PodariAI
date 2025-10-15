import React from 'react';
import WhyPodariAI from '../components/WhyPodariAI';

interface AboutPageProps {
  t: any;
}

const AboutPage: React.FC<AboutPageProps> = ({ t }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            About Podari.AI
        </h2>
        <p className="text-lg text-slate-300 mb-12">
            We believe that the perfect gift is more than just an item—it's a thoughtful expression of connection. In a world of endless options, finding that perfect gift can be overwhelming. That's why we created Podari.AI.
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-left mb-12">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Our Mission</h3>
            <p className="text-slate-300">
                Our mission is simple: to make gift-giving joyful and effortless. We leverage the power of advanced artificial intelligence to understand the unique personality and interests of the person you're shopping for. Instead of generic recommendations, we provide personalized, creative, and thoughtful suggestions that truly resonate.
            </p>
        </div>
        
        <WhyPodariAI t={t} />

    </div>
  );
};

export default AboutPage;
