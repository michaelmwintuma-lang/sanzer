import React, { useState } from 'react';
import { ZoomIn, Eye, ArrowRight, ShieldCheck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import { showcaseItems } from '../data/sanzerData';
import { Link } from 'react-router-dom';

export default function ProjectsPage({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Garage Doors', 'Gates', 'Shutters', 'Security', 'Surveillance', 'Fabrication'];

  const filteredItems = activeCategory === 'All'
    ? showcaseItems
    : showcaseItems.filter(item => item.category === activeCategory);

  return (
    <div className="projects-page">
      <PageHeader
        title="Project Showcase & Portfolio"
        subtitle="Real, verified installation photos showcasing our field engineering and fabrication work across Ghana."
        breadcrumb={[{ label: 'Projects' }]}
      />

      <section className="section portfolio-section">
        <div className="container">
          <ScrollReveal direction="down">
            <div className="section-heading centered">
              <span className="eyebrow">Proven Field Experience</span>
              <h2>Our Completed Project Installations</h2>
              <p className="section-copy">
                Click on any photo to inspect high-resolution details of our alignments, welding, brackets, and motor mounts.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="down">
            <div className="showcase-filter">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="showcase-grid">
            {filteredItems.map((item, idx) => (
              <ScrollReveal key={item.id} direction="down" delay={idx * 60}>
                <article
                  className="showcase-card"
                  onClick={() => onOpenLightbox(item.image, item.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onOpenLightbox(item.image, item.title);
                  }}
                >
                  <div className="showcase-card-img-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="showcase-zoom-hint">
                      <ZoomIn size={22} />
                      <span>Inspect Photo</span>
                    </div>
                  </div>
                  <div className="showcase-copy">
                    <span className="showcase-tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="down">
            <div className="portfolio-footer-box">
              <div className="pf-content">
                <ShieldCheck size={36} className="pf-icon" />
                <div>
                  <h4>Want a similar setup at your residence or commercial property?</h4>
                  <p>Send us your site dimensions or photos on WhatsApp and we will quote you within 24 hours.</p>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Inquire About a Project <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
