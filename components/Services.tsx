
import React, { forwardRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ServiceItemProps {
    icon: string;
    title: string;
    description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-md">
        <div className="text-primary text-4xl">
            <i className={`fa-solid ${icon}`}></i>
        </div>
        <div>
            <h3 className="text-xl font-bold font-heading mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

export const Services = forwardRef<HTMLElement>((props, ref) => {
    const { t } = useLanguage();

    const servicesData = [
        { icon: 'fa-laptop-medical', titleKey: 'service_1_title', descKey: 'service_1_desc' },
        { icon: 'fa-people-group', titleKey: 'service_2_title', descKey: 'service_2_desc' },
        { icon: 'fa-comments', titleKey: 'service_3_title', descKey: 'service_3_desc' },
    ];

    return (
        <section ref={ref} id="servicos" className="py-20 bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold font-heading mb-4">{t('services_title')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
                    {servicesData.map((service, index) => (
                        <ServiceItem 
                            key={index}
                            icon={service.icon}
                            title={t(service.titleKey)}
                            description={t(service.descKey)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

Services.displayName = 'Services';
