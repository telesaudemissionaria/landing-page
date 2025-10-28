import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="flex flex-col gap-2 rounded-xl flex-1 p-6 bg-card-light dark:bg-card-dark border border-border-color dark:border-border-color-dark shadow-sm min-w-[150px]">
        <p className="text-text-secondary dark:text-text-secondary-dark text-base font-medium leading-normal">{label}</p>
        <p className="text-accent tracking-light text-3xl font-bold leading-tight">{value}</p>
    </div>
);


export const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="sobre" className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-center mb-4 text-card-dark dark:text-card-light">{t('about_title')}</h2>
                <p className="text-text-secondary dark:text-text-secondary-dark text-base font-normal leading-relaxed text-center mb-10">
                    {t('about_subtitle')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                   <StatCard value="15,000+" label={t('stats_consultations')} />
                   <StatCard value="800+" label={t('stats_volunteers')} />
                   <StatCard value="120+" label={t('stats_communities')} />
                </div>
            </div>
        </section>
    );
};