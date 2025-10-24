import React from 'react';
import { useTranslation } from 'react-i18next';

function ServicesSection() {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });

  return (
    <section id="services" className="py-36 bg-white">
      <div className="container mx-auto px-4">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("services.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("services.description")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <div 
            key={index} data-aos="fade-up" className={`rounded-lg shadow-lg p-6 bg-white transition duration-300
        ${index === 1 ? 'scale-110 z-10' : 'scale-90 opacity-70'}
      `}>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-gray-600">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
