import { useTranslation } from "react-i18next";

import { useState } from "react";



const LanguageDropdown = ({ isMobile = false, onClose}) => {
  const {i18n} = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  

  const languages = [
    { code: "tr", label: "Türkçe", flag: "🇹🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (code) => {
    
    i18n.changeLanguage(code);
    setIsOpen(false);
    if (onClose) onClose();
  };

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  if (isMobile) {
    // Mobil için açılır panel (accordion) tarzı tasarım
    return (
      <div className="w-full border-t border-gray-300 pt-2">
        <button
  onClick={toggleDropdown}
  className="w-full flex justify-between items-center px-2 py-1 bg-gray-100 rounded focus:outline-none text-sm"
  aria-expanded={isOpen}
  aria-controls="mobile-language-options"
>
  <span className="flex items-center gap-1 text-xs">
    <span className="text-base">{current.flag}</span>
    
  </span>
  <svg
    className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
</button>

        {isOpen && (
          <div id="mobile-language-options" className="mt-2 bg-white rounded-md shadow-md">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-200 text-left"
              >
                <span className="text-sm">{lang.flag}</span>
                
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        
        className="inline-flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 transition"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{current.flag}</span>
        <svg
          className="w-4 h-4 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-44 bg-white rounded-md shadow-md z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 transition"
            >
              <span className="text-lg mr-2">{lang.flag}</span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
