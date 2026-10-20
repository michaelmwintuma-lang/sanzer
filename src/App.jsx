import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ServiceModal from './components/ServiceModal';
import LightboxModal from './components/LightboxModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';
import GarageDoorsAccraPage from './pages/GarageDoorsAccraPage';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [lightbox, setLightbox] = useState({ isOpen: false, image: null, caption: '' });

  const handleOpenModal = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleOpenLightbox = (image, caption) => {
    setLightbox({ isOpen: true, image, caption });
  };

  const handleCloseLightbox = () => {
    setLightbox({ isOpen: false, image: null, caption: '' });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="sanzer-app">
        <Header />

        <main className="main-content-flow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenServiceModal={handleOpenModal} 
                  onOpenLightbox={handleOpenLightbox} 
                />
              } 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route 
              path="/services" 
              element={<ServicesPage onOpenLightbox={handleOpenLightbox} />} 
            />
            <Route 
              path="/projects" 
              element={<ProjectsPage onOpenLightbox={handleOpenLightbox} />} 
            />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/garage-doors-accra"
              element={<GarageDoorsAccraPage onOpenLightbox={handleOpenLightbox} />}
            />
          </Routes>
        </main>

        <Footer />

        {/* Global floating quick-contact */}
        <FloatingWhatsApp />

        {/* Dynamic Modals */}
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={handleCloseModal}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {lightbox.isOpen && (
          <LightboxModal
            image={lightbox.image}
            caption={lightbox.caption}
            onClose={handleCloseLightbox}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
