import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import WhatsappButton from './components/WhatsAppButton';



function App() {
  return (
    <div className="bg-gray-50">
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <WhatsappButton/>
      <Footer />
    </div>
  );
}

export default App;

