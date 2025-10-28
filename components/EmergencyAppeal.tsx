import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const EmergencyAppeal: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <section className="px-4 pt-4 pb-6">
            <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-primary p-6 text-center text-white">
                <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                <p className="text-xl font-bold leading-tight tracking-[-0.015em]">{t('emergency_title')}</p>
                <p className="max-w-md text-base font-normal leading-normal">{t('emergency_text')}</p>
                <a href="https://www.mercadopago.com.br/donate" target="_blank" rel="noopener noreferrer" className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-background-light text-primary text-sm font-bold leading-normal transition-opacity hover:opacity-90">
                    <span className="truncate">{t('emergency_cta')}</span>
                </a>
            </div>
        </section>
    );
};