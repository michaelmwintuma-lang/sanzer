import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Compass, ZoomIn } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import TrustBar from '../components/TrustBar';
import ServicesSection from '../components/ServicesSection';
import OfferSection from '../components/OfferSection';
import SecurityGallerySection from '../components/SecurityGallerySection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ScrollReveal from '../components/ScrollReveal';
import { showcaseItems } from '../data/sanzerData';

export default function HomePage({ onOpenServiceModal, onOpenLightbox }) {
  // Take first 4 items for quick preview on Home
  const homeShowcase = showcaseItems.slice(0, 4);

  return (
    <div className="home-page">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Key Trust Bar */}
      <TrustBar />

      {/* 3. Core Services Grid & Featured Spotlight */}
      <ScrollReveal direction="down">
        <ServicesSection onOpenServiceModal={onOpenServiceModal} />
      </ScrollReveal>

      {/* 4. Complete Fabrication & Automation Offer */}
      <ScrollReveal direction="down">
        <OfferSection />
      </ScrollReveal>



      {/* 6. Real Projects Showcase on Home */}
      <section className="section home-showcase-preview">
        <div className="container">
          <ScrollReveal direction="down">
            <div className="section-heading centered">
              <span className="eyebrow">Verified Site Work</span>
              <h2>Recent Installation Projects</h2>
              <p className="section-copy">
                High-quality craftsmanship delivered to satisfied clients throughout Greater Accra, Central, Ashanti, and beyond.
              </p>
              <div style={{ marginTop: '14px' }}>
                <Link to="/projects" className="btn btn-secondary" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                  <span>View All Projects</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="home-showcase-grid">
            {homeShowcase.map((item, idx) => (
              <ScrollReveal key={item.id} direction="down" delay={idx * 80}>
                <div
                  className="home-showcase-item"
                  onClick={() => onOpenLightbox(item.image, item.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onOpenLightbox(item.image, item.title);
                  }}
                >
                  <div className="home-showcase-img-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="home-showcase-overlay">
                      <ZoomIn size={22} />
                      <span>Inspect Photo</span>
                    </div>
                  </div>
                  <div className="home-showcase-info">
                    <span className="hsi-tag">{item.tag}</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Security Gallery (Fencing & Surveillance) */}
      <ScrollReveal direction="down">
        <SecurityGallerySection onOpenLightbox={onOpenLightbox} />
      </ScrollReveal>

      {/* 8. Six Engineering Benefits */}
      <ScrollReveal direction="down">
        <BenefitsSection />
      </ScrollReveal>

      {/* 9. Testimonials & Client Reviews */}
      <ScrollReveal direction="down">
        <TestimonialsSection />
      </ScrollReveal>

      {/* 10. Direct Call to Action */}
      <section className="section home-cta-section">
        <div className="container">
          <ScrollReveal direction="down">
            <div className="home-cta-box">
              <div className="home-cta-content">
                <span className="eyebrow light">Direct Site Support</span>
                <h2>Ready to Automate or Secure Your Property?</h2>
                <p>
                  Get direct advice, site measurements, and quotation options for garage doors, gates, electric fencing, and CCTV.
                </p>
              </div>
              <div className="home-cta-actions">
                <Link to="/contact" className="btn btn-gold">
                  Book Site Inspection <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Explore All Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
