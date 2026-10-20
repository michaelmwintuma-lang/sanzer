import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function OfferSection() {
  const offerPoints = [
    { title: "Garage door automation with all major motor brands", bold: true },
    { title: "Automatic swing & sliding gate systems for estates & homes", bold: false },
    { title: "Electric fencing and perimeter anti-tamper security", bold: false },
    { title: "CCTV surveillance cameras and access control integration", bold: false },
    { title: "Architectural aluminum windows, doors, and shopfronts", bold: false },
    { title: "Motorized roller shutters for commercial and residential use", bold: false }
  ];

  return (
    <section className="section offer-section" id="offer">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Complete Engineering Solutions</span>
          <h2>Fabrication and Automation Built to Last</h2>
          <p className="section-copy">
            We deliver reliable, neatly installed automation systems with genuine parts and dedicated after-sales service throughout Ghana.
          </p>
        </div>

        <div className="offer-layout">
          <div className="offer-media">
            <img
              src="/images/portfolio5.jpg"
              alt="Roller shutter and automation installation by Sanzer"
              loading="lazy"
            />
            <div className="offer-badge">
              <strong>Premium Workmanship</strong>
              <span>Serving All 16 Regions of Ghana</span>
            </div>
          </div>

          <div className="offer-copy">
            <h3>Ghana's Trusted Provider for Garage & Gate Automation</h3>
            <p>
              Sanzer specializes in expert garage door automation and motorized gates with all major motor brands. From site measurement to preventative maintenance, we deliver reliable solutions with a practical focus on safety, professional finishing, and lasting durability.
            </p>

            <ul className="check-list">
              {offerPoints.map((pt, idx) => (
                <li key={idx}>
                  <div className="check-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  {pt.bold ? <strong>{pt.title}</strong> : <span>{pt.title}</span>}
                </li>
              ))}
            </ul>

            <div className="offer-action-row">
              <Link to="/contact" className="btn btn-primary">
                Book a Site Inspection (Fee Applies) <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
