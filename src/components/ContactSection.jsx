import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ContactSection() {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    isim: '',
    email: '',
    konu: '',
    mesaj: ''
  });

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        setFormData({ isim: '', email: '', konu: '', mesaj: '' });
      } else {
        const errorText = await response.text();
        alert('Bir hata oluştu: ' + errorText);
      }
    } catch (err) {
      alert('Sunucuya bağlanırken bir hata oluştu.');
      console.error(err)
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("contact.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("contact.description")}</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div data-aos="fade-right" className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t("contact.form.header")}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">{t("contact.form.name")}</label>
                <input 
                  type="text" 
                  id="isim" 
                  value={formData.isim}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">{t("contact.form.email")}</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">{t("contact.form.subject")}</label>
                <input 
                  type="text" 
                  id="konu" 
                  value={formData.konu}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">{t("contact.form.message")}</label>
                <textarea 
                  id="mesaj" 
                  rows="5" 
                  value={formData.mesaj}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                ></textarea>
              </div>
              <button type="submit" className="cursor-pointer bg-zfrlog-blue text-white hover:text-shadow-lg/50 text-shadow-sm hover:bg-zfrlog-orange hover:text-zfrlog-white font-bold py-3 px-6 rounded-lg">
                {t("contact.form.header")}
              </button>
            </form>
          </div>
          
          <div data-aos="fade-left" className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t("contact.contactInfo.header")}</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4">
                  <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{t("contact.contactInfo.address")}</h4>
                  <p className="text-gray-600">Halkalı Merkez, Cihan Sk. No:9, 34303<br /> Küçükçekmece/İstanbul, Türkiye</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{t("contact.contactInfo.phone")}</h4>
                  <a href="tel:+905319432374" className="text-gray-600 hover:underline">
                    +90 (531) 943 23 74
                  </a>
                  <br />
                  <a href="tel:+902127411858" className="text-gray-600 hover:underline">
                    +90 (212) 741 18 58
                  </a>
                </div>

              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{t("contact.contactInfo.email")}</h4>
                  <p className="text-gray-600">info@zfrlog.com <br />z.kara@zfrlog.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps iframe */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.09305672064897!2d28.786711723752862!3d41.036436341915405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa438337addab%3A0x66b09b9f526aff99!2zSGFsa2FsxLEgTWVya2V6LCBDaWhhbiBTay4gTm86OSwgMzQzMDMgS8O8w6fDvGvDp2VrbWVjZS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1749204376903!5m2!1str!2str"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("contact.mapTitle")}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
