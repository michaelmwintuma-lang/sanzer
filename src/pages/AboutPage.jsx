import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Compass, 
  ShieldCheck, 
  Wrench, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Award,
  Zap,
  Clock,
  Layers
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import { companyInfo, companyMissionVision, statisticsData } from '../data/sanzerData';

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHeader
        title="About Sanzer Automated & Security"
        subtitle="Ghana's premier contractor for automated access, high-security perimeters, and precision architectural fabrication."
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* Main Company Intro */}
      <section className="section about-intro-section">
        <div className="container">
          <div className="about-intro-grid">
            <ScrollReveal direction="down">
              <div className="about-intro-copy">
                <span className="eyebrow">Who We Are</span>
                <h2>Engineering Safety, Automation, and Architectural Quality</h2>
                <p>
                  <strong>Sanzer Automated & Security Co. Ltd</strong> is a registered Ghanaian engineering and fabrication enterprise dedicated to raising property safety and convenience standards across the country.
                </p>
                <p>
                  Specializing in <strong>garage door automation, gate motor systems, high-voltage electric fencing, CCTV surveillance, and bespoke aluminum fabrication</strong>, we provide turnkey solutions for private residences, luxury estates, corporate institutions, and commercial logistics hubs.
                </p>
                <p>
                  Headquartered in <strong>Kasoa - Ayibe Town (near West Hills Mall)</strong>, our certified mobile technical crews operate nationwide across all 16 administrative regions of Ghana, ensuring that every project is measured accurately, installed securely, and backed by swift local support.
                </p>

                <div className="about-highlights-list">
                  <div className="highlight-item">
                    <CheckCircle className="highlight-icon" size={20} />
                    <span>Specialized expertise in all major international gate & garage motor brands</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle className="highlight-icon" size={20} />
                    <span>Integrated battery backup solutions engineered for uninterrupted power</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle className="highlight-icon" size={20} />
                    <span>Full fabrication workshop producing custom aluminum frames and fittings</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="down" delay={150}>
              <div className="about-intro-media">
                <img
                  src="/images/portfolio1.jpg"
                  alt="Sanzer Engineering Team on Site"
                  className="about-featured-img"
                  loading="lazy"
                />
                <div className="about-experience-badge">
                  <strong>100%</strong>
                  <span>Tested & Certified Installations</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Engineering Standards & Values */}
      <section className="section core-values-section">
        <div className="container">
          <ScrollReveal direction="down">
            <div className="section-heading centered">
              <span className="eyebrow">Engineering Rigor</span>
              <h2>Our Core Engineering Standards</h2>
              <p className="section-copy">
                Every project is guided by strict mechanical accuracy, durable parts, and nationwide customer accountability.
              </p>
            </div>
          </ScrollReveal>

          <div className="core-values-grid">
            {companyMissionVision.values.map((val, idx) => (
              <ScrollReveal key={idx} direction="down" delay={idx * 80}>
                <div className="value-card">
                  <div className="value-number">0{idx + 1}</div>
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats Row */}
      <section className="section stats-banner-section">
        <div className="container">
          <div className="stats-banner-grid">
            {statisticsData.map((stat, idx) => (
              <ScrollReveal key={idx} direction="down" delay={idx * 80}>
                <div className="stat-banner-box">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop & Standards */}
      <section className="section workshop-section">
        <div className="container">
          <div className="workshop-layout">
            <ScrollReveal direction="down">
              <div className="workshop-gallery">
                <img
                  src="/images/gate auto2.jpg"
                  alt="Automatic Gate Installation"
                  className="workshop-img"
                  loading="lazy"
                />
                <img
                  src="/images/shutter3.jpg"
                  alt="Roller Shutter Fabrication"
                  className="workshop-img"
                  loading="lazy"
                />
                <img
                  src="/images/alum2.jpg"
                  alt="Aluminum Fabrication Works"
                  className="workshop-img"
                  loading="lazy"
                />
                <img
                  src="/images/electric fence 3.png"
                  alt="Electric Fencing Alignment"
                  className="workshop-img"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="down" delay={150}>
              <div className="workshop-copy">
                <span className="eyebrow">Quality Delivery</span>
                <h2>Why Ghanaian Clients Trust Sanzer</h2>
                <p>
                  We don’t cut corners. From heavy-duty stainless steel fasteners to calibrated electrical surge protectors, our site technicians follow strict procedures to ensure every system withstands daily wear and environmental factors.
                </p>
                <div className="workshop-perks">
                  <div className="perk-card">
                    <Zap size={22} className="perk-icon" />
                    <div>
                      <h5>Battery Backups Included</h5>
                      <p>All gate and garage operators come configured with backup power so you never get locked out during power cuts.</p>
                    </div>
                  </div>

                  <div className="perk-card">
                    <Clock size={22} className="perk-icon" />
                    <div>
                      <h5>Fast Turnaround Times</h5>
                      <p>Prompt preliminary site inspection followed by swift execution and rigorous safety testing.</p>
                    </div>
                  </div>

                  <div className="perk-card">
                    <Layers size={22} className="perk-icon" />
                    <div>
                      <h5>Genuine Manufacturer Parts</h5>
                      <p>We source authentic motor parts, tracks, sensors, and remote transmitters directly from certified distributors.</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '28px' }}>
                  <Link to="/contact" className="btn btn-primary">
                    Get in Touch with Our Engineers <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
