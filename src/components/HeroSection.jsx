import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeroSection() {
  const { t } = useTranslation();
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-white text-zfrlog-orange">
      <div className="absolute inset-0 z-0">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          showArrows={false}
          swipeable={false}
          stopOnHover={false}
        >
          <div>
            <img src="/image/hero/5-1.jpg" alt="slayt1" className="w-full h-screen object-cover " />
          </div>
          <div>
            <img src="/image/hero/7-1.jpg" alt="slayt2" className="w-full h-screen object-cover" />
          </div>
          <div>
            <img src="/image/hero/12-1.jpg" alt="slayt3" className="w-full h-screen object-cover" />
          </div>
          <div>
            <img src="/image/hero/13-1.jpg" alt="slayt4" className="w-full h-screen object-cover" />
          </div>
          
        </Carousel>
        
        
      </div>
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col sm:flex-row items-center">
          <div data-aos="fade-left" className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl xl:text-5xl font-bold 2xl:mt-120 mb-4 text-shadow-lg/50">{t("hero.title")}</h1>
            <p className="text-xl mb-8 text-shadow-lg/50">{t("hero.description")}</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-white border-2 border-white text-zfrlog-gray hover:bg-zfrlog-orange hover:text-shadow-lg/50 hover:text-white font-bold py-3 px-6 rounded-lg text-center text-shadow-sm">
                {t("hero.ctaContact")}
              </a>
              <a href="#services" className="bg-transparent border-2 text-shadow-lg/50 border-white text-zfrlog-orange hover:bg-zfrlog-orange hover:text-white font-bold py-3 px-6 rounded-lg text-center">
                {t("hero.ctaServices")}
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

