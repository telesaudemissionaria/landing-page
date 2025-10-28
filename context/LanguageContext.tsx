
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { translations } from '../translations';

type Language = 'pt' | 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // FIX: Update t function to accept an optional variables object for string interpolation.
  t: (key: string, variables?: { [key: string]: string | number }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language');
    return (savedLang && ['pt', 'es', 'en'].includes(savedLang) ? savedLang : 'pt') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };
  
  // FIX: Modify t function to handle variable substitution for dynamic content and improve fallback logic.
  const t = useCallback((key: string, variables?: { [key: string]: string | number }): string => {
      if (!key) return '';
      
      const resolve = (lang: Language, k: string) => {
        const keys = k.split('.');
        let res: any = translations[lang];
        for (const part of keys) {
            res = res?.[part];
            if (res === undefined) return undefined;
        }
        return res;
      };

      let text = resolve(language, key) ?? resolve('pt', key) ?? key;

      if (typeof text === 'string' && variables) {
          Object.keys(variables).forEach(varKey => {
              const regex = new RegExp(`{${varKey}}`, 'g');
              text = text.replace(regex, String(variables[varKey]));
          });
      }

      return text;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
