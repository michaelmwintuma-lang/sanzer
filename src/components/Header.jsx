import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { companyInfo, servicesData } from '../data/sanzerData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="top">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Sanzer Home">
          <img 
            src="/images/logo.jpeg" 
            alt="Sanzer Automated & Security Logo" 
            className="brand-logo" 
          />
        </Link>

        <nav className="main-nav" aria-label="Main Navigation">
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                Home
              </NavLink>
            </li>

            <li 
              className={`has-dropdown ${dropdownOpen ? 'open' : ''}`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <NavLink 
                to="/services" 
                className={({ isActive }) => `dropdown-trigger ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  if (window.innerWidth <= 860) {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  }
                }}
              >
                Services <ChevronDown size={14} className="dropdown-arrow" />
              </NavLink>

              <ul className="nav-dropdown">
                <li>
                  <Link to="/services" className="dropdown-all-link">
                    <strong>All Services Overview &rarr;</strong>
                  </Link>
                </li>
                {servicesData.map((svc) => (
                  <li key={svc.id} className={svc.isFeatured ? 'featured-item' : ''}>
                    <Link to={`/services#${svc.id}`}>
                      <span>{svc.isFeatured ? '★ ' : ''}{svc.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/why-us" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Why Us & FAQ
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="header-actions">
            <a href={`tel:${companyInfo.phones[0].tel}`} className="header-phone-link">
              <Phone size={14} />
              <span>{companyInfo.phones[0].label}</span>
            </a>

            <Link to="/contact" className="btn btn-primary header-quote-btn">
              <span>Get Quote</span>
              <ArrowRight size={14} />
            </Link>

            {/* Mobile menu toggle with comfortable safe spacing */}
            <button
              className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
              id="menu-toggle"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
