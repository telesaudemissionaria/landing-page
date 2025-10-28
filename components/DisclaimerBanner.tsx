import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const DisclaimerBanner: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <div className="sticky bottom-0 bg-primary/20 dark:bg-primary/30 p-4 text-center backdrop-blur-sm z-10">
            <p className="text-xs text-text-light dark:text-text-dark">
                {t('disclaimer_text')} <a className="font-bold underline" href="#">{t('disclaimer_link')}</a>
            </p>
        </div>
    );
};
