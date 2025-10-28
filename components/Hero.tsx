import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="p-4">
            <div 
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[320px] shadow-lg" 
                style={{backgroundImage: `linear-gradient(0deg, rgba(0, 51, 102, 0.6) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOzXfGjaQkbC9mBAPlVwE9fZKoiIh9sZdsAuji0-9I6c2WK30LkKAtitMetInALoZDm1zxduq44bOFlwVaXrVcRZ0NAgS_im8mdPc77VNFU9q4cYkrN256K0ZntjbyCity_ZRLLR45M7WcOjTvfnfQhmzgp7ibzkldS0ZJiwpbTzg0gYz7F45iaDmGbe3UV_BbZXMj9k5tYEOxKeQXZQCc5atLXU8d9mHsmSYuLEa0NgoyYyaRnBahD07Wls5YIROBa6tKQwC-h3E")`}}
            >
                <div className="p-6 text-white">
                    <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-2">{t('hero_title')}</h1>
                    <p className="text-base lg:text-lg font-normal leading-relaxed max-w-2xl">{t('hero_subtitle')}</p>
                </div>
            </div>
        </section>
    );
};