import React from 'react';
import { useTranslation } from 'react-i18next';

function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true });

  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div data-aos="fade-left" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('testimonials.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('testimonials.description')}</p>
        </div>
        
        <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

