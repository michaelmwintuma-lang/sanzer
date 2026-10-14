import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { statisticsData, companyInfo } from '../data/sanzerData';

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-gallery">
          <img
            src="/images/gate auto2.jpg"
            alt="Sanzer gate automation project"
            className="about-img tall"
            loading="lazy"
          />
          <img
            src="/images/shutter3.jpg"
            alt="Sanzer roller shutter project"
            className="about-img"
            loading="lazy"
          />
          <img
            src="/images/media__1778959467756.jpg"
            alt="Sanzer surveillance camera installation"
            className="about-img"
            loading="lazy"
          />
          <img
            src="/images/electric fence 3.png"
            alt="Sanzer electric fencing detail installation"
            className="about-img"
            loading="lazy"
          />
          <img
            src="/images/alum2.jpg"
            alt="Sanzer aluminum fabrication installation"
            className="about-img wide"
            loading="lazy"
          />
        </div>

        <div className="about-copy">
          <span className="eyebrow">About Company</span>
          <h2>Sanzer automation and fabrication excellence</h2>
          <p>
            Sanzer Automated & Security Co. Ltd specializes in security installations and fabrication services including automatic gates, roller shutters, electric fencing, CCTV systems, access control, and aluminum works.
          </p>
          <p>
            We combine practical site experience with careful installation standards to deliver solutions that improve protection, convenience, and architectural finishing quality for homes and businesses across Ghana.
          </p>

          <div className="stats-row">
            {statisticsData.map((stat, idx) => (
              <div key={idx} className="stat-box">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="contact-highlight">
            <p>For inquiries, inspection booking, or immediate advice:</p>
            <div className="contact-highlight-links">
              {companyInfo.phones.map((phone, idx) => (
                <a key={idx} href={`tel:${phone.tel}`}>
                  <Phone size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {phone.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
