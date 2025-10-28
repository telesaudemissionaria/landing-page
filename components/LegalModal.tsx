import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
        >
            <div 
                className="bg-card-light dark:bg-card-dark rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-card-light dark:bg-card-dark border-b border-border-color dark:border-border-color-dark p-5 flex justify-between items-center rounded-t-lg">
                    <h2 id="legal-modal-title" className="text-xl font-bold text-text-primary dark:text-text-primary-dark">{title}</h2>
                    <button onClick={onClose} className="text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent" aria-label="Close modal">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="p-6 overflow-y-auto">
                    <p className="text-text-secondary dark:text-text-secondary-dark whitespace-pre-line leading-relaxed">{content}</p>
                </div>
            </div>
        </div>
    );
};