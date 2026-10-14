import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/sanzerData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Help & Information</span>
          <h2>Frequently Asked Questions</h2>
          <p className="section-copy">
            Find answers to common questions about our gate automation, motors, warranty, and nationwide site operations.
          </p>
        </div>

        <div className="faq-accordion">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleIndex(idx)}
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
  );
}
