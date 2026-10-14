import React from 'react';
import { 
  Warehouse, 
  DoorOpen, 
  ShieldAlert, 
  Zap, 
  Camera, 
  Wrench, 
  KeyRound, 
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { servicesData } from '../data/sanzerData';
import { Link } from 'react-router-dom';

const iconMap = {
  Warehouse,
  DoorOpen,
  ShieldAlert,
  Zap,
  Camera,
  Wrench,
  KeyRound
};

export default function ServicesSection({ onOpenServiceModal }) {
  // Separate featured service (Garage Doors) and other services
  const featuredService = servicesData.find(s => s.isFeatured) || servicesData[0];
  const standardServices = servicesData.filter(s => s.id !== featuredService.id);

  const FeaturedIcon = iconMap[featuredService.icon] || Warehouse;

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">What We Offer</span>
          <h2>Our Core Engineering Services</h2>
          <p className="section-copy">
            Professional fabrication, motorized access automation, and perimeter security across Ghana.
          </p>
        </div>

        {/* Featured Main Service Spotlight Banner */}
        <div className="featured-service-spotlight">
          <div className="fss-copy">
            <div className="fss-badge-row">
              <span className="fss-star-badge">★ MAIN SPECIALTY</span>
              <span className="fss-tag">Residential & Commercial</span>
            </div>
            <h3>{featuredService.title}</h3>
            <p className="fss-desc">{featuredService.shortDesc}</p>
            
            <ul className="fss-features-list">
              <li>
                <CheckCircle2 size={16} className="fss-check" />
                <span>Compatible with Centurion, Nice, Roger, Sommer & major motor brands</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="fss-check" />
                <span>Battery backup included for uninterrupted power during dumsor</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="fss-check" />
                <span>Remote key fobs, smartphone triggers, and anti-crush safety sensors</span>
              </li>
            </ul>

            <div className="fss-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenServiceModal(featuredService)}
              >
                <span>View Full Specifications</span>
                <ArrowRight size={15} />
              </button>
              <Link 
                to={`/contact?service=${encodeURIComponent(featuredService.title)}`}
                className="btn btn-secondary"
              >
                Request Quote
              </Link>
            </div>
          </div>

          <div className="fss-media">
            <img
              src={featuredService.gallery[0] || "/images/garage door5.jpeg"}
              alt={featuredService.title}
              className="fss-image"
              loading="lazy"
            />
            <div className="fss-media-badge">
              <strong>100% Tested</strong>
              <span>Smooth & Whisper-Quiet Track Operation</span>
            </div>
          </div>
        </div>

        {/* Grid of the remaining services */}
        <div className="services-grid-wrapper">
          <div className="services-grid">
            {standardServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Warehouse;
              const formattedNumber = String(index + 1).padStart(2, '0');

              return (
                <article
                  key={service.id}
                  className="service-card"
                >
                  <div className="service-card-top">
                    <div className="service-icon-box">
                      <IconComponent size={24} />
                    </div>
                    <span className="service-card-number">{formattedNumber}</span>
                  </div>

                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-text">{service.shortDesc}</p>

                  <ul className="service-card-bullets">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={16} className="service-bullet-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-footer">
                    <button
                      type="button"
                      className="btn btn-primary service-card-btn"
                      onClick={() => onOpenServiceModal(service)}
                      aria-label={`View specifications for ${service.title}`}
                    >
                      <span>View Specs</span>
                      <ArrowRight size={14} />
                    </button>

                    <Link 
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="btn btn-secondary service-card-btn"
                    >
                      Get Quote
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="services-bottom-cta">
          <p>Looking for a complete multi-system security package (Gates + CCTV + Electric Fencing)?</p>
          <Link to="/contact" className="btn btn-primary">
            Speak with an Automation Engineer &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
