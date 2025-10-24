import React, { useState , useEffect } from 'react';
import LanguageDropdown from './LanguageDropdown';
import { useTranslation } from 'react-i18next';



function Navbar() {
  const { t } = useTranslation(); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = activeSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = `#${section.id}`;
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Sayfa yüklendiğinde aktif section'ı ayarlamak için

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Ortak link stil fonksiyonu
  const navLinkClass = (sectionId) =>
  `relative inline-block text-zfrlog-blue hover:text-zfrlog-orange block py-2 md:py-0 transition-all duration-300 ${
    activeSection === sectionId
      ? 'font-semibold text-lg after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-zfrlog-orange after:origin-left after:scale-x-100 after:transition-transform after:duration-700 after:ease-in-out'
      : 'font-normal text-base after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-zfrlog-orange after:origin-left after:scale-x-0 after:transition-transform after:duration-700 after:ease-in-out'
  }`;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-20 relative">
        <a href='#home' className='flex items-center h-full relative '>
        <img src='/image/zfrlog1.png' alt='logo' className='hidden md:block h-43 w-auto'/>
        <img src='/image/zfrlog-yazı.png' alt='mobil logo' className='block md:hidden h-50 w-auto -ml-8'/>
        </a>
        


        {/* Masaüstü menü */}
        <div className="hidden md:flex space-x-8 md:ml-0 lg:-ml-32 ">
          <a href="#home" onClick={() => setActiveSection('#home')} className={`${navLinkClass('#home')} text-zfrlog-blue`} >
            {t("navbar.home")}
          </a>
          <a href="#services" onClick={() => setActiveSection('#services')} className={`${navLinkClass('#services')} text-zfrlog-blue`} >
            {t("navbar.services")}
          </a>
          <a href="#about" onClick={() => setActiveSection('#about')} className={`${navLinkClass('#about')}text-zfrlog-blue `} >
            {t("navbar.about")}
          </a>
          <a href="#contact" onClick={() => setActiveSection('#contact')} className={`${navLinkClass('#contact')} text-zfrlog-blue`} >
            {t("navbar.contact")}
          </a>
        </div>

        {/* Sağ: Dil seçici ve mobil menü butonu */}
        <div className="hidden md:flex items-center gap-4 text-zfrlog-orange hover:text-zfrlog-blue ">
          <LanguageDropdown />
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobil menü butonu */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobil menü */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 flex flex-col text-sm justify-center gap-3 w-full overflow-x-hidden items-center text-center">
          
          <a href="#home" onClick={() => {setActiveSection('#home'); setMobileMenuOpen(false); }} className={navLinkClass('#home')}>
            {t("navbar.home")}
          </a>
          <a href="#services" onClick={() => {setActiveSection('#services'); setMobileMenuOpen(false);}} className={navLinkClass('#services')}>
            {t("navbar.services")}
          </a>
          <a href="#about" onClick={() => {setActiveSection('#about'); setMobileMenuOpen(false);}} className={navLinkClass('#about')}>
            {t("navbar.about")}
          </a>
          <a href="#contact" onClick={() => {setActiveSection('#contact'); setMobileMenuOpen(false);}} className={navLinkClass('#contact')}>
            {t("navbar.contact")}
          </a>


          {/* Mobil menüde dil seçici */}
          <div className="pt-2 text-zfrlog-orange hover:text-zfrlog-blue">
            <LanguageDropdown isMobile={true} onClose={() => setMobileMenuOpen(false)}/>
          </div>
        </div>
      )}
    </nav>
  );
}


export default Navbar;