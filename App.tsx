import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pillars } from './components/Pillars';
import { Help } from './components/Help';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { ModalContent } from './types';

const AppContent: React.FC = () => {
    const { t } = useLanguage();
    const [modalContent, setModalContent] = useState<ModalContent | null>(null);

    const handleOpenModal = (type: 'terms' | 'privacy') => {
        if (type === 'terms') {
            setModalContent({ titleKey: 'legal_terms_title', contentKey: 'legal_terms_content' });
        } else {
            setModalContent({ titleKey: 'legal_privacy_title', contentKey: 'legal_privacy_content' });
        }
    };

    const handleCloseModal = () => {
        setModalContent(null);
    };
    
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex-grow">
                <Hero />
                <About />
                <Pillars />
                <Help />
                <Faq />
            </main>
            <Footer onOpenModal={handleOpenModal} />
            <DisclaimerBanner />
            <LegalModal 
                isOpen={!!modalContent}
                onClose={handleCloseModal}
                title={modalContent ? t(modalContent.titleKey) : ''}
                content={modalContent ? t(modalContent.contentKey) : ''}
            />
        </div>
    );
};

const App: React.FC = () => (
    <LanguageProvider>
        <AppContent />
    </LanguageProvider>
);

export default App;