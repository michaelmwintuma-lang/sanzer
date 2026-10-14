import React, { useState } from 'react';
import { ZoomIn, ShieldCheck, Video, CheckCircle2, ArrowRight, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SecurityGallerySection({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'ef-1',
      category: 'electric-fence',
      categoryLabel: 'Electric Fencing',
      src: '/images/electric fence1.png',
      title: 'Wall-Top Bracket & Line Alignment',
      subtitle: 'High-tensile multi-strand stainless line installation on perimeter wall'
    },
    {
      id: 'ef-2',
      category: 'electric-fence',
      categoryLabel: 'Electric Fencing',
      src: '/images/electric fence 2.png',
      title: 'Perimeter Live-Site Tensioning',
      subtitle: 'Calibrated wire tensioning with industrial spring hooks and stabilizers'
    },
    {
      id: 'ef-3',
      category: 'electric-fence',
      categoryLabel: 'Electric Fencing',
      src: '/images/electric fence 3.png',
      title: 'Corner Tensioners & Insulated Bobbins',
      subtitle: 'UV-resistant heavy-duty bobbins and high-voltage conduit junction'
    },
    {
      id: 'ef-4',
      category: 'electric-fence',
      categoryLabel: 'Electric Fencing',
      src: '/images/electric fence 4.png',
      title: 'Finished Residential Boundary Fence',
      subtitle: 'Completed anti-climb setup integrated with 30W siren and strobe flasher'
    },
    {
      id: 'cctv-1',
      category: 'cctv',
      categoryLabel: 'CCTV Surveillance',
      src: '/images/surveillance1.png',
      title: 'Exterior Weatherproof Camera Setup',
      subtitle: 'IP67 rated metal housing with wide-angle infrared night vision'
    },
    {
      id: 'cctv-2',
      category: 'cctv',
      categoryLabel: 'CCTV Surveillance',
      src: '/images/surveillance 2.png',
      title: 'Commercial Compound Viewing Angle',
      subtitle: 'Precision camera orientation covering vehicle driveway and entrance'
    },
    {
      id: 'cctv-3',
      category: 'cctv',
      categoryLabel: 'CCTV Surveillance',
      src: '/images/surveillance 3.png',
      title: 'Wide-Angle Compound Monitoring Station',
      subtitle: 'Multi-channel NVR display setup with remote smartphone streaming'
    },
    {
      id: 'cctv-4',
      category: 'cctv',
      categoryLabel: 'CCTV Surveillance',
      src: '/images/surveillance 4.png',
      title: 'High-Mount Perimeter Gate CCTV',
      subtitle: 'Elevated vantage point monitoring gate activity and visitor access'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(item => item.category === activeFilter);

  return (
    <section className="section security-showcase-section" id="security-gallery">
      <div className="container">
        {/* Section Heading - Centered */}
        <div className="section-heading centered">
          <span className="eyebrow">Proven Perimeter Protection</span>
          <h2>Electric Fencing & Surveillance Projects</h2>
          <p className="section-copy">
            Explore authentic site installations completed by our field engineers across Ghana. Every system is built to deter intrusion, trigger alerts, and provide round-the-clock peace of mind.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="security-filter-bar">
          <button
            className={`security-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Security Projects ({projects.length})
          </button>
          <button
            className={`security-filter-btn ${activeFilter === 'electric-fence' ? 'active' : ''}`}
            onClick={() => setActiveFilter('electric-fence')}
          >
            <Zap size={16} />
            <span>Electric Fencing (4)</span>
          </button>
          <button
            className={`security-filter-btn ${activeFilter === 'cctv' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cctv')}
          >
            <Video size={16} />
            <span>CCTV Surveillance (4)</span>
          </button>
        </div>

        {/* Projects Grid - Uncramped, High Clarity Cards */}
        <div className="security-projects-grid">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="security-project-card"
              onClick={() => onOpenLightbox(item.src, `${item.categoryLabel}: ${item.title}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onOpenLightbox(item.src, `${item.categoryLabel}: ${item.title}`);
              }}
            >
              <div className="security-card-image-wrap">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="security-card-img"
                />
                <span className={`security-card-badge ${item.category}`}>
                  {item.category === 'electric-fence' ? <Zap size={12} /> : <Video size={12} />}
                  <span>{item.categoryLabel}</span>
                </span>
                <div className="security-card-zoom-overlay">
                  <div className="zoom-btn-pill">
                    <ZoomIn size={16} />
                    <span>Inspect Photo</span>
                  </div>
                </div>
              </div>

              <div className="security-card-body">
                <h4 className="security-card-title">{item.title}</h4>
                <p className="security-card-desc">{item.subtitle}</p>
                <div className="security-card-action">
                  <span className="view-detail-link">
                    <Eye size={14} />
                    <span>Click to enlarge</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Standards & Engineering Specs Breakdown */}
        <div className="security-specs-banner">
          <div className="specs-col">
            <div className="specs-col-header">
              <div className="specs-icon-box fence">
                <ShieldCheck size={22} />
              </div>
              <div>
                <span className="specs-tag">Perimeter Deterrence</span>
                <h3>Electric Fencing Technical Standards</h3>
              </div>
            </div>
            <ul className="specs-list">
              <li>
                <CheckCircle2 size={16} className="spec-bullet-icon" />
                <span><strong>High-Voltage Energizer:</strong> Continuous non-lethal pulsed deterrence with instant cut/tamper sensing</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-bullet-icon" />
                <span><strong>Battery Backup Built-In:</strong> Fully operational during ECG power cuts with rechargeable backup cells</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-bullet-icon" />
                <span><strong>Durable Hardware:</strong> Stainless steel multi-strand wire, UV-stabilized bobbins, and surge diverters</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-bullet-icon" />
                <span><strong>Audible Siren & Strobe:</strong> 30W external siren with visual strobe indicator immediately alerts security</span>
              </li>
            </ul>
            <div className="specs-col-footer">
              <Link to="/contact?service=Electric%20Fencing" className="btn btn-primary btn-sm">
                <span>Inquire Fence Installation</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="specs-col">
            <div className="specs-col-header">
              <div className="specs-icon-box cctv">
                <Video size={22} />
              </div>
              <div>
                <span className="specs-tag">24/7 Monitoring</span>
                <h3>CCTV Surveillance Technical Standards</h3>
              </div>
            </div>
            <ul className="specs-list">
              <li>
                <CheckCircle2 size={16} className="spec-bullet-icon" />
                <span><strong>High-Definition Video:</strong> 1080p Full HD to 4K Ultra-HD cameras with crisp wide-angle compound coverage</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-bullet-icon" />
                <span><strong>Night Vision & Low Light:</strong> Smart infrared (IR) and color night-viewing for pitch-black visibility</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-bullet-icon" />
                <span><strong>Mobile Phone Streaming:</strong> Secure live viewing and motion playback directly on iOS and Android devices</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="spec-bullet-icon" />
                <span><strong>Weatherproof Enclosures:</strong> IP67 dust/water resistant metal housings with surge-protected NVR hubs</span>
              </li>
            </ul>
            <div className="specs-col-footer">
              <Link to="/contact?service=CCTV%20Surveillance" className="btn btn-primary btn-sm">
                <span>Inquire CCTV Setup</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
