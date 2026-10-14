import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { showcaseItems } from '../data/sanzerData';

export default function ShowcaseSection({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Garage Doors', 'Gates', 'Shutters', 'Security', 'Surveillance', 'Fabrication'];

  const filteredItems = activeCategory === 'All'
    ? showcaseItems
    : showcaseItems.filter(item => item.category === activeCategory);

  return (
    <section className="section showcase-section" id="showcase">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Project Showcase</span>
          <h2>Our Recent Completed Works</h2>
          <p className="section-copy">
            A glance at our field engineering, gate automation installations, and precision fabrication across Ghana.
          </p>
        </div>

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

        <div className="showcase-grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="showcase-card"
              onClick={() => onOpenLightbox(item.image, item.title)}
            >
              <div className="showcase-card-img-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="showcase-copy">
                <span className="showcase-tag">{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
