import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface PillarCardProps {
    icon: string;
    title: string;
    description: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ icon, title, description }) => {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col gap-4 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-color dark:border-border-color-dark">
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 bg-primary/10 rounded-full">
                    <span className="material-symbols-outlined text-primary text-3xl icon-filled">{icon}</span>
                </div>
                <div>
                    <h3 className="text-text-primary dark:text-text-primary-dark text-lg font-bold">{title}</h3>
                </div>
            </div>
             <p className="text-text-secondary dark:text-text-secondary-dark text-base leading-relaxed">
                {description}
            </p>
            <button className="w-full mt-2 rounded-lg bg-accent text-white font-bold py-3 text-center transition-transform active:scale-95 hover:opacity-90">
              {t('pillar_cta')}
            </button>
        </div>
    );
};

export const Pillars: React.FC = () => {
    const { t } = useLanguage();
    
    const pillarsData = [
        { icon: 'health_and_safety', titleKey: 'pillar_1_title', descKey: 'pillar_1_desc' },
        { icon: 'school', titleKey: 'pillar_2_title', descKey: 'pillar_2_desc' },
        { icon: 'hub', titleKey: 'pillar_3_title', descKey: 'pillar_3_desc' },
        { icon: 'biotech', titleKey: 'pillar_4_title', descKey: 'pillar_4_desc' },
    ];
    
    return (
        <section id="pilares" className="py-10 px-4 bg-background-light dark:bg-background-dark">
             <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-center mb-10 text-card-dark dark:text-card-light">{t('tools_title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pillarsData.map((pillar, index) => (
                        <PillarCard
                            key={index}
                            icon={pillar.icon}
                            title={t(pillar.titleKey)}
                            description={t(pillar.descKey)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};