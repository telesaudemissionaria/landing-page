import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    return (
        <details className="flex flex-col rounded-lg bg-card-light dark:bg-card-dark p-4 group border border-border-color dark:border-border-color-dark">
            <summary className="flex cursor-pointer items-center justify-between gap-4">
                <p className="text-text-primary dark:text-text-primary-dark text-base font-medium leading-normal">{question}</p>
                <span className="material-symbols-outlined text-text-secondary dark:text-text-secondary-dark group-open:rotate-180 transition-transform duration-300">expand_more</span>
            </summary>
            <div className="pt-2">
                <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-relaxed pb-2">
                    {answer}
                </p>
            </div>
        </details>
    );
};

export const Faq: React.FC = () => {
    const { t } = useLanguage();
    
    const faqs = [
        { qKey: 'faq_3_q', aKey: 'faq_3_a' },
        { qKey: 'faq_4_q', aKey: 'faq_4_a' },
        { qKey: 'faq_1_q', aKey: 'faq_1_a' },
        { qKey: 'faq_2_q', aKey: 'faq_2_a' },
    ];
    
    return (
        <section id="faq" className="py-10 px-4 bg-background-light dark:bg-background-dark">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-center mb-10 text-card-dark dark:text-card-light">{t('faq_title')}</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqItem 
                            key={index}
                            question={t(faq.qKey)}
                            answer={t(faq.aKey)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};