import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Eye
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import { companyInfo } from '../data/sanzerData';
import { garagePage, garageWhatsappUrl, SITE_URL } from '../data/garageDoorsAccra';

// Keep the tab title / description correct when this page is reached by in-app navigation.
// (Direct visits get them from the prerendered HTML built in vite.config.js.)
function usePageMeta(title, description, canonical) {
  useEffect(() => {
    const prevTitle = document.title;
    const descTag = document.querySelector('meta[name="description"]');
    const prevDesc = descTag ? descTag.getAttribute('content') : null;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    const addedCanonical = !canonicalTag;
    const prevCanonical = canonicalTag ? canonicalTag.getAttribute('href') : null;

    document.title = title;
    if (descTag) descTag.setAttribute('content', description);
    if (addedCanonical) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonical);

    return () => {
      document.title = prevTitle;
      if (descTag && prevDesc !== null) descTag.setAttribute('content', prevDesc);
      if (addedCanonical) canonicalTag.remove();
      else canonicalTag.setAttribute('href', prevCanonical);
    };
  }, [title, description, canonical]);
}

export default function GarageDoorsAccraPage({ onOpenLightbox }) {
  const [openIndex, setOpenIndex] = useState(0);
  const waUrl = garageWhatsappUrl();
  const mainPhone = companyInfo.phones[0];

  usePageMeta(garagePage.seoTitle, garagePage.metaDescription, `${SITE_URL}${garagePage.path}`);

  return (
    <div className="garage-accra-page">
      <PageHeader
        title={garagePage.h1}
        subtitle={garagePage.heroText}
        breadcrumb={[{ label: 'Services', link: '/services' }, { label: 'Garage Door Installation Accra' }]}
      />

      {/* Quick call / WhatsApp actions */}
      <section className="gda-action-strip">
        <div className="container gda-action-row">
          <a href={`tel:${mainPhone.tel}`} className="btn btn-primary">
            <Phone size={18} />
            <span>Call {mainPhone.label}</span>
          </a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn gda-btn-whatsapp">
            <MessageCircle size={18} />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container gda-two-col">
          <ScrollReveal direction="down">
            <div>
              <span className="eyebrow">Main Specialty</span>
              <h2>{garagePage.intro.title}</h2>
              <p className="gda-lead">{garagePage.intro.text}</p>

              <h3 className="gda-subheading">What we supply and install</h3>
              <ul className="service-spec-list">
                {garagePage.installs.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} className="spec-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="down" delay={150}>
            <div className="gda-gallery">
              <img
                src={garagePage.gallery[0]}
                alt="Automated garage door installed by Sanzer in Accra"
                className="gda-gallery-main"
              />
              <div className="gda-gallery-thumbs">
                {garagePage.gallery.slice(1).map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    className="gda-thumb"
                    onClick={() => onOpenLightbox(src, `Garage door installation - View ${idx + 2}`)}
                    title="Click to zoom image"
                  >
                    <img src={src} alt={`Garage door installation in Accra, photo ${idx + 2}`} loading="lazy" />
                    <span className="gda-thumb-zoom"><Eye size={16} /></span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section gda-soft-bg">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">Benefits</span>
            <h2>Why automate your garage door</h2>
          </div>
          <div className="gda-card-grid">
            {garagePage.benefits.map((b) => (
              <article key={b.title} className="gda-card">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">How It Works</span>
            <h2>Our garage door installation process</h2>
          </div>
          <ol className="gda-steps">
            {garagePage.process.map((step, idx) => (
              <li key={step.title} className="gda-step">
                <span className="gda-step-num">{idx + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section gda-soft-bg">
        <div className="container gda-two-col">
          <div>
            <span className="eyebrow">Coverage</span>
            <h2>Areas we serve in Accra</h2>
            <p className="gda-lead">
              We install garage doors across Greater Accra, and our teams also travel to all 16 regions of Ghana.
            </p>
            <div className="benefits-tags">
              {garagePage.areas.map((area) => (
                <span key={area} className="benefit-tag">
                  <MapPin size={14} /> {area}
                </span>
              ))}
            </div>
          </div>
          <figure className="gda-testimonial">
            <blockquote>&ldquo;{garagePage.testimonial.text}&rdquo;</blockquote>
            <figcaption>
              <strong>{garagePage.testimonial.name}</strong>, {garagePage.testimonial.location}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">FAQ</span>
            <h2>Garage door installation in Accra: frequently asked questions</h2>
          </div>
          <div className="faq-accordion">
            {garagePage.faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <div className="faq-toggle-icon">
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gda-cta-card">
            <div>
              <span className="eyebrow light">Get A Quote</span>
              <h3>Ready to install a garage door in Accra?</h3>
              <p>
                Call or WhatsApp Sanzer to book a site inspection (inspection fee applies) and get a quote for your garage door.
              </p>
              <ul className="gda-contact-list">
                {companyInfo.phones.map((p) => (
                  <li key={p.tel}>
                    <Phone size={15} /> <a href={`tel:${p.tel}`}>{p.label}</a>
                  </li>
                ))}
                <li>
                  <Mail size={15} /> <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                </li>
                <li>
                  <MapPin size={15} /> <span>{companyInfo.location} ({companyInfo.landmark})</span>
                </li>
              </ul>
            </div>
            <div className="gda-cta-actions">
              <a href={`tel:${mainPhone.tel}`} className="btn btn-gold">
                <Phone size={16} /> Call Now
              </a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn gda-btn-whatsapp">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <Link to="/services" className="gda-text-link">
                See all our services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
