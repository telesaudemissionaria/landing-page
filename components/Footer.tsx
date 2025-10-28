import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const SocialIcon: React.FC<{href: string, children: React.ReactNode}> = ({ href, children }) => (
    <a className="text-text-secondary-dark dark:text-text-secondary-dark/80 hover:text-primary dark:hover:text-primary" href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

interface FooterProps {
    onOpenModal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card-dark dark:bg-gray-900 pb-8 pt-10 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <img alt="Telessaúde Missionária Logo" className="h-14 w-auto mb-4 mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpHvE_m6jn2nx3Mxi4HY18NU8zD0RQwRyXhaolMAaVbv5fEUOqYRfODFXqs7D1kxBmHDhDgShTY_-dPIYRtGosGuGrFwSIuV-cAXj032E4yKz7MFaaqsYtXoNh3cYKpvI8Zp9km_Kr6SKS5yYB0snJVCxwuTBM3zbEsj2pntWdpbpPyz_3ha4rsSBA-GbzyVsBUsog6lKVxj488BVuNHb7FpSEzWX4i3dOuvVIdX3VWjHoec3W4YDFyOf36zBTVqKly4i3EmbgDoE"/>
                <p className="text-text-primary-dark text-xl font-bold leading-normal">{t('header_title')}</p>
                <p className="text-text-secondary-dark text-sm font-normal leading-normal mt-1">{t('footer_tagline')}</p>
           
                <div className="mt-8 flex justify-center gap-6">
                    <SocialIcon href="#"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.54v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.08 11.37-11.37 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.98-2.03z"></path></svg></SocialIcon>
                    <SocialIcon href="#"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 4.62 3.2 8.52 7.5 9.67v-7.02H7.55V12.06h1.95V9.85c0-1.93 1.15-3 2.92-3 .83 0 1.7.15 1.7.15v2.23h-1.1c-.94 0-1.24.56-1.24 1.2v1.44h2.48l-.4 2.65H12.7v7.02c4.3-.1.15-5.05 7.5-9.67C22 6.53 17.5 2.04 12 2.04z"></path></svg></SocialIcon>
                    <SocialIcon href="#"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.62 14.39c-.49.27-1.03.41-1.62.41-1.34 0-2.42-1.08-2.42-2.42s1.08-2.42 2.42-2.42c.59 0 1.13.14 1.62.41V10.8c0-1.92-1.56-3.48-3.48-3.48S9.06 8.88 9.06 10.8v4.68c0 1.92 1.56 3.48 3.48 3.48s3.48-1.56 3.48-3.48v-1.11z"></path></svg></SocialIcon>
                </div>
                <div className="mt-8 border-t border-border-color-dark/50 pt-6 text-center text-sm text-text-secondary-dark space-y-2">
                    <div>
                        <button onClick={() => onOpenModal('privacy')} className="hover:text-primary dark:hover:text-primary underline">{t('footer_privacy')}</button>
                        <span className="mx-2">・</span>
                        <button onClick={() => onOpenModal('terms')} className="hover:text-primary dark:hover:text-primary underline">{t('footer_terms')}</button>
                    </div>
                    <p>{t('footer_copyright', { year: currentYear })}</p>
                </div>
            </div>
        </footer>
    );
};