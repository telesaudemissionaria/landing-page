import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HelpCard: React.FC<{
    title: string;
    description: string;
    cta: string;
    href: string;
    icon: string;
    isPrimary?: boolean;
}> = ({ title, description, cta, href, icon, isPrimary = false }) => (
    <div className={`flex flex-col gap-4 rounded-xl p-6 ${isPrimary ? 'bg-accent text-white' : 'bg-card-light dark:bg-card-dark border border-border-color dark:border-border-color-dark'}`}>
        <div className="flex items-center gap-4">
            <div className={`flex items-center justify-center size-12 rounded-full ${isPrimary ? 'bg-white/20' : 'bg-primary/10'}`}>
                <span className={`material-symbols-outlined text-3xl ${isPrimary ? 'text-white' : 'text-primary'}`}>{icon}</span>
            </div>
            <h4 className={`text-xl font-bold ${isPrimary ? 'text-white' : 'text-text-primary dark:text-text-primary-dark'}`}>{title}</h4>
        </div>
        <p className={isPrimary ? 'text-white/90' : 'text-text-secondary dark:text-text-secondary-dark'}>{description}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 text-base font-bold leading-normal transition-opacity hover:opacity-90 ${isPrimary ? 'bg-white text-accent' : 'bg-primary text-white'}`}>
            <span className="truncate">{cta}</span>
        </a>
    </div>
);


export const Help: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="ajudar" className="py-10 px-4">
             <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-center mb-4 text-card-dark dark:text-card-light">{t('help_title')}</h2>
                <p className="text-text-secondary dark:text-text-secondary-dark text-base font-normal leading-relaxed text-center mb-10">
                    {t('help_desc')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <HelpCard 
                        title={t('help_volunteer_title')}
                        description={t('help_volunteer_desc')}
                        cta={t('help_volunteer_cta')}
                        href="https://wa.me/5511000000000?text=Quero%20ser%20voluntário"
                        icon="volunteer_activism"
                    />
                     <HelpCard 
                        title={t('help_donate_title')}
                        description={t('help_donate_desc')}
                        cta={t('help_donate_cta')}
                        href="https://www.mercadopago.com.br/donate"
                        icon="favorite"
                        isPrimary
                    />
                </div>
            </div>
        </section>
    );
};