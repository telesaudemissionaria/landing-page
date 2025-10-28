import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const GroupCard: React.FC<{ title: string; description: string; icon: string; }> = ({ title, description, icon }) => {
    const { t } = useLanguage();
    return (
        <div className="p-4 pt-2">
            <div className="flex items-center gap-4 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-[0_0_12px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-center size-14 bg-primary/20 text-primary rounded-lg">
                    <span className="material-symbols-outlined text-3xl">{icon}</span>
                </div>
                <div className="flex flex-1 flex-col gap-1">
                    <p className="text-text-light dark:text-text-dark text-base font-bold leading-tight">{title}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">{description}</p>
                </div>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gray-200 dark:bg-zinc-700 text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                    <span className="truncate">{t('whatsapp_cta')}</span>
                </a>
            </div>
        </div>
    );
};

export const WhatsAppGroups: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="acesso-grupos-whatsapp">
            <div className="p-4">
                <div 
                    className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[218px] shadow-sm" 
                    style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXfpHPa_UpB3JMYjj9fvbf8DFlwljIXuLq43JMM6ntqlD8KwL93bwh6SlK6v8h0DskHpWymsvk5EOooOLAgLkcB9Ft1lKocEkowYR0lFahqIilScp-2BArFsx25-VF5GYvkxUdsk1vG9ZnMpnfevjb2EcRl9uPSOLY4cMt9KneDb2ZHuMzd07xI0L_I4jU5TZ4NjLXtCcY1_aV9U_pJS5igbOqcvfcMVVB3zuHVtGaVc54DWyTt5glhsGkk8dOaIFNuF6w8knXUrA")`}}
                >
                    <div className="flex p-4"><p className="text-white tracking-light text-[28px] font-bold leading-tight">{t('whatsapp_title')}</p></div>
                </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1 px-4">
                {t('whatsapp_desc')}
            </p>
            
            <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{t('whatsapp_general_title')}</h3>
            <GroupCard title={t('whatsapp_general_group')} description={t('whatsapp_general_desc')} icon="groups" />
            
            <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{t('whatsapp_regional_title')}</h3>
            <GroupCard title={t('whatsapp_regional_se')} description={t('whatsapp_regional_se_desc')} icon="location_on" />

             <div className="px-4 py-4">
                <hr className="border-t border-border-color dark:border-gray-700"/>
            </div>
        </section>
    );
};
