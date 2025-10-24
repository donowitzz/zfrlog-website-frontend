import React from 'react';
import { useTranslation } from 'react-i18next';

function CTASection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 bg-zfrlog-blue text-white">
      <div data-aos="fade-down" className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {t("cta.description")}
        </p>
        <a href="#contact" className="bg-white text-blue-800 text-zfrlog-gray hover:bg-zfrlog-orange hover:text-white hover:text-shadow-lg/50 border-2 border-white font-bold py-3 px-8 rounded-lg inline-block text-shadow-sm">
          {t("cta.button")}
        </a>
      </div>
    </section>
  );
}

export default CTASection;
