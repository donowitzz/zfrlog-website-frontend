import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutSection() {
  
  const { t } = useTranslation();


  return (
    <section id="about" className="py-42 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div data-aos="fade-right"className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t("about.title")}</h2>
            <p className="text-gray-600 mb-4">
             {t("about.description1")}
            </p>
            <p className="text-gray-600 mb-4">
               {t("about.description2")}
            </p>
            <p className="text-gray-600 mb-4">
               {t("about.description3")}
            </p>
          </div>
          <div className="md:w-1/2">
            <div data-aos="fade-left" className="bg-white rounded-lg shadow-xl p-6 relative">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("about.experienceTitle")}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-blue-800 font-bold text-xl mb-1">33+</div>
                  <div className="text-gray-600">{t("about.countriesServed")}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-blue-800 font-bold text-xl mb-1">29+</div>
                  <div className="text-gray-600">{t("about.expertStaff")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
