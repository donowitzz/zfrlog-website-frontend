import React from 'react';
import { useTranslation } from 'react-i18next';

function StatsSection() {

  const { t } = useTranslation();

  const stats = [
    { value: "33+", label: t("stats.countries") },
    { value: "35+", label: t("stats.experience") },
    { value: "396.512+", label: t("stats.deliveries") },
    { value: "39.000+", label: t("stats.happyCustomers") }
  ];

  return (
    <section className="py-14 bg-zfrlog-blue text-white">
      <div data-aos="fade-up" className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 border-r border-blue-700 last:border-0">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
