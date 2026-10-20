import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Globe 
} from 'lucide-react';
import { companyInfo, servicesData } from '../data/sanzerData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-signup">
        <div className="container signup-inner">
          <div>
            <h3>Speak with Sanzer about your next project</h3>
            <p>Get fast quotes on gate automation, garage doors, roller shutters, and electric fencing.</p>
          </div>
          <Link to="/contact" className="signup-action">
            <span>Request Inspection</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div>
            <img src="/images/logo.jpeg" alt="Sanzer Automated & Security" className="footer-logo" />
            <p className="footer-about">
              Expert fabrication and automation services covering gate systems, garage doors, shutters, CCTV, electric fencing, and aluminum works across all 16 regions of Ghana.
            </p>
            <div className="footer-socials">
              <a
                href={`https://wa.me/${companyInfo.phones[0].wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="footer-social-btn"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${companyInfo.phones[0].tel}`}
                className="footer-social-btn"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Our Company</Link></li>
              <li><Link to="/services">Services & Solutions</Link></li>
              <li><Link to="/garage-doors-accra">Garage Door Installation Accra</Link></li>
              <li><Link to="/projects">Project Showcase</Link></li>
              <li><Link to="/why-us">Why Choose Us & FAQ</Link></li>
              <li><Link to="/contact">Contact & Inquiry</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-links">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link to={`/services#${svc.id}`}>{svc.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              {companyInfo.phones.map((p, idx) => (
                <li key={idx}>
                  <Phone size={15} style={{ minWidth: '15px', marginTop: '4px' }} />
                  <a href={`tel:${p.tel}`}>{p.label}</a>
                </li>
              ))}
              <li>
                <Mail size={15} style={{ minWidth: '15px', marginTop: '4px' }} />
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </li>
              <li>
                <MapPin size={15} style={{ minWidth: '15px', marginTop: '4px' }} />
                <span>{companyInfo.location} ({companyInfo.landmark})</span>
              </li>
              <li>
                <Globe size={15} style={{ minWidth: '15px', marginTop: '4px' }} />
                <span>{companyInfo.coverage}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Sanzer Automated & Security Co. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
