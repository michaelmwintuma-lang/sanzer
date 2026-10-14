import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose, onOpenLightbox }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="service-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="service-modal-panel">
        <button
          className="service-modal-close"
          onClick={onClose}
          aria-label="Close service details"
        >
          <X size={20} />
        </button>

        <div className="service-modal-grid">
          <div>
            <span className="eyebrow">Service Details</span>
            <h3 id="service-modal-title">{service.title}</h3>
            <p className="service-modal-desc">{service.description}</p>

            <div className="service-modal-block">
              <h4>Key Features & Specifications</h4>
              <ul className="service-modal-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="service-modal-block">
              <h4>Why Choose Sanzer?</h4>
              <ul className="service-modal-list">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="btn btn-primary"
              style={{ marginTop: '16px' }}
              onClick={onClose}
            >
              <span>Get Quote for {service.title}</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div>
            <h4 style={{ marginBottom: '14px', fontSize: '1.1rem' }}>Project Photos</h4>
            <div className="service-modal-gallery">
              {service.gallery && service.gallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="modal-gallery-img"
                  onClick={() => onOpenLightbox && onOpenLightbox(imgSrc, `${service.title} - Photo ${idx + 1}`)}
                  title="Click to view full screen"
                >
                  <img src={imgSrc} alt={`${service.title} reference photo ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
