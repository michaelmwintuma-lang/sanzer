import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Warehouse, 
  DoorOpen, 
  ShieldAlert, 
  Zap, 
  Camera, 
  Wrench, 
  KeyRound, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Eye
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import { servicesData } from '../data/sanzerData';

const iconMap = {
  Warehouse,
  DoorOpen,
  ShieldAlert,
  Zap,
  Camera,
  Wrench,
  KeyRound
};

export default function ServicesPage({ onOpenLightbox }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.hash]);

  return (
    <div className="services-page">
      <PageHeader
        title="Engineering Services & Solutions"
        subtitle="Complete automation, perimeter security, and precision fabrication services tailored for Ghanaian homes and enterprises."
        breadcrumb={[{ label: 'Services' }]}
      />

      <section className="section services-detail-section">
        <div className="container">
          <ScrollReveal direction="down">
            <div className="section-heading centered">
              <span className="eyebrow">Our Specialties</span>
              <h2>Comprehensive Property Solutions</h2>
              <p className="section-copy">
                From single residential gate automation to multi-tier commercial warehouse security, our engineers deliver with lasting durability.
              </p>
            </div>
          </ScrollReveal>

          <div className="services-full-list">
            {servicesData.map((svc, index) => {
              const Icon = iconMap[svc.icon] || Warehouse;
              const isEven = index % 2 === 1;

              return (
                <div 
                  key={svc.id} 
                  id={svc.id} 
                  className={`service-detailed-block ${isEven ? 'layout-reverse' : ''}`}
                >
                  <ScrollReveal direction="down">
                    <div className="service-detail-content">
                      <div className="service-detail-badge-row">
                        <span className="service-category-tag">
                          <Icon size={16} /> {svc.badge}
                        </span>
                        {svc.isFeatured && (
                          <span className="featured-pill">★ Main Specialty</span>
                        )}
                      </div>

                      <h2>{svc.title}</h2>
                      <p className="service-long-desc">{svc.description}</p>

                      <div className="service-features-card">
                        <h4>Key Specifications & Features</h4>
                        <ul className="service-spec-list">
                          {svc.features.map((feat, fIdx) => (
                            <li key={fIdx}>
                              <CheckCircle2 size={16} className="spec-check" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="service-benefits-summary">
                        <h4>Why Sanzer for this Service:</h4>
                        <div className="benefits-tags">
                          {svc.benefits.map((b, bIdx) => (
                            <span key={bIdx} className="benefit-tag">✔ {b}</span>
                          ))}
                        </div>
                      </div>

                      <div className="service-action-buttons">
                        <Link 
                          to={`/contact?service=${encodeURIComponent(svc.title)}`} 
                          className="btn btn-primary"
                        >
                          <span>Get Free Quote for {svc.title}</span>
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="down" delay={150}>
                    <div className="service-detail-media-wrap">
                      <div className="service-main-image-box">
                        <img
                          src={svc.gallery[0]}
                          alt={svc.title}
                          className="service-lead-img"
                          loading="lazy"
                        />
                      </div>

                      {svc.gallery.length > 1 && (
                        <div className="service-thumbnail-grid">
                          {svc.gallery.slice(1, 5).map((thumbSrc, tIdx) => (
                            <div 
                              key={tIdx} 
                              className="service-thumb-item"
                              onClick={() => onOpenLightbox(thumbSrc, `${svc.title} - View ${tIdx + 2}`)}
                              role="button"
                              tabIndex={0}
                              title="Click to zoom image"
                            >
                              <img src={thumbSrc} alt={`${svc.title} photo`} loading="lazy" />
                              <div className="thumb-zoom-overlay">
                                <Eye size={18} />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services consultation banner */}
      <section className="section services-cta-banner">
        <div className="container">
          <ScrollReveal direction="down">
            <div className="cta-banner-card">
              <div>
                <span className="eyebrow light">Need Custom Specs?</span>
                <h3>Unsure which motor brand or fencing setup suits your space?</h3>
                <p>
                  Our engineers provide free technical consultation and can conduct a site survey anywhere in Ghana.
                </p>
              </div>
              <Link to="/contact" className="btn btn-gold">
                Contact Technical Support <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
