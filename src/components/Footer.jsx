import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zfrlog-blue text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div data-aos="fade-right" className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">{t("footer.companyName")}</div>
            <p className="text-gray-400">{t("footer.tagline")}</p>
          </div>

          <div data-aos="fade-left" className="flex flex-wrap justify-center gap-8">
            <div>
              <h4 className="font-bold mb-3">{t("footer.quickAccess")}</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-zfrlog-orange">{t("footer.links.home")}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-zfrlog-orange">{t("footer.links.services")}</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-zfrlog-orange">{t("footer.links.about")}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-zfrlog-orange">{t("footer.links.contact")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">{t("footer.contact")}</h4>
              <ul className="space-y-2">
                <a href="tel:+902127411858" className="text-gray-400 hover:text-zfrlog-orange">
                  +90 (212) 741 18 58
                </a>
                <br />
                <a href="tel:+905319432374" className="text-gray-400 hover:text-zfrlog-orange">
                  +90 (531) 943 23 74
                </a>
                <br />
                <li className="text-gray-400">info@zfrlog.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sosyal Medya İkonları */}
        <div className="mt-8 text-center">
          <h4 className="text-lg font-semibold mb-4 text-zfrlog-orange">{t("footer.socialMedia") || "Sosyal Medyada Biz"}</h4>
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="https://www.linkedin.com/company/zfrlog-uluslararasi-ta%C5%9Fimacilik-a-%C5%9F/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-zfrlog-orange">
          <p>&copy; {currentYear} {t("footer.companyName")} {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
