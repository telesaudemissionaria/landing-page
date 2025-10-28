import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
    const { t } = useLanguage();
    return (
        <header className="sticky top-0 z-20 flex items-center bg-background-light/80 dark:bg-background-dark/80 p-4 pb-2 justify-between backdrop-blur-sm border-b border-border-color dark:border-border-color-dark">
            <div className="flex size-12 shrink-0 items-center justify-start">
                <button aria-label="Open menu" className="text-text-primary dark:text-text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>
            <h1 className="text-text-primary dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">{t('header_title')}</h1>
            <div className="flex w-12 items-center justify-end">
                 <button aria-label="User account" className="text-text-primary dark:text-text-primary-dark">
                    <span className="material-symbols-outlined text-3xl">account_circle</span>
                </button>
            </div>
        </header>
    );
};