import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Mail, 
  MessageCircle, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import { companyInfo, ghanaRegions } from '../data/sanzerData';

export default function ContactPage() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    region: '',
    town: '',
    area: '',
    service: '',
    message: ''
  });

  // Read URL query parameter for ?service=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [location.search]);

  const regionsList = Object.keys(ghanaRegions);
  const availableTowns = formData.region ? ghanaRegions[formData.region] || [] : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'region') {
      setFormData(prev => ({
        ...prev,
        region: value,
        town: ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = [
      'Hello Sanzer Automated & Security,',
      '',
      'I would like to request an inspection/quotation for your services.',
      '',
      `Full Name: ${formData.name}`,
      `Phone Number: ${formData.phone}`,
      `Email Address: ${formData.email || 'Not provided'}`,
      `Region: ${formData.region}`,
      `Town / City: ${formData.town}`,
      `Specific Area / Landmark: ${formData.area || 'Not provided'}`,
      `Service Needed: ${formData.service}`,
      '',
      'Project Details:',
      formData.message
    ].join('\n');

    const whatsappUrl = `https://wa.me/${companyInfo.phones[0].wa}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page">
      <PageHeader
        title="Contact Sanzer Automated & Security"
        subtitle="Schedule an on-site inspection (inspection fee applies), request a quotation, or talk directly with an automation engineer."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="section contact-main-section">
        <div className="container">
          {/* Quick contact cards */}
          <div className="contact-cards">
            <ScrollReveal direction="down" delay={50}>
              <article className="contact-card">
                <div className="contact-card-icon">
                  <Phone size={24} />
                </div>
                <h3>Direct Phone Lines</h3>
                <div className="contact-stack">
                  {companyInfo.phones.map((p, idx) => (
                    <div key={idx} className="contact-line">
                      <span className="contact-label">Call Line</span>
                      <a href={`tel:${p.tel}`}>{p.label}</a>
                    </div>
                  ))}
                  <div className="contact-line" style={{ marginTop: '6px' }}>
                    <span className="contact-label">Hours</span>
                    <span>Monday - Saturday: 7:30 AM - 6:30 PM</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="down" delay={120}>
              <article className="contact-card">
                <div className="contact-card-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
                  <MessageCircle size={24} />
                </div>
                <h3>WhatsApp Direct Chat</h3>
                <div className="contact-stack">
                  {companyInfo.phones.map((p, idx) => (
                    <div key={idx} className="contact-line">
                      <span className="contact-label">WhatsApp</span>
                      <a href={`https://wa.me/${p.wa}`} target="_blank" rel="noopener noreferrer">
                        {p.label}
                      </a>
                    </div>
                  ))}
                  <div className="contact-line" style={{ marginTop: '6px' }}>
                    <span className="contact-label">Response</span>
                    <span>Typically replies within 15 minutes</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="down" delay={190}>
              <article className="contact-card">
                <div className="contact-card-icon">
                  <MapPin size={24} />
                </div>
                <h3>Main Headquarters</h3>
                <div className="contact-stack">
                  <div className="contact-line">
                    <span className="contact-label">Office</span>
                    <span>{companyInfo.location}</span>
                  </div>
                  <div className="contact-line">
                    <span className="contact-label">Landmark</span>
                    <span>{companyInfo.landmark}</span>
                  </div>
                  <div className="contact-line">
                    <span className="contact-label">Service</span>
                    <span>All 16 Regions of Ghana</span>
                  </div>
                </div>
                <a
                  href={companyInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-btn"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </article>
            </ScrollReveal>
          </div>

          {/* Form and Map Grid */}
          <div className="contact-form-layout">
            <ScrollReveal direction="down">
              <div className="contact-form-container">
                <div className="contact-form-header">
                  <h3>Submit Project Consultation Request</h3>
                  <p>
                    Fill in your project details. We will automatically format and send your inquiry directly to our engineering WhatsApp line for fast quotation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="form-name">Full Name *</label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        placeholder="e.g. Samuel Mensah"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        placeholder="e.g. 055 945 1949"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-email">Email Address</label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        placeholder="e.g. samuel@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-region">Region in Ghana *</label>
                      <select
                        id="form-region"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a Region</option>
                        {regionsList.map((reg) => (
                          <option key={reg} value={reg}>{reg}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-town">Main City / Town *</label>
                      <select
                        id="form-town"
                        name="town"
                        value={formData.town}
                        onChange={handleChange}
                        disabled={!formData.region}
                        required
                      >
                        <option value="" disabled>
                          {formData.region ? 'Select a Town' : 'Select Region first'}
                        </option>
                        {availableTowns.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="form-area">Specific Area / Suburb / Landmark</label>
                      <input
                        type="text"
                        id="form-area"
                        name="area"
                        placeholder="e.g. Near Shell station / Community 25"
                        value={formData.area}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group form-group-wide">
                      <label htmlFor="form-service">Service Needed *</label>
                      <select
                        id="form-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a Service</option>
                        <option value="Garage Door Automation">Garage Door Automation (Main Specialty)</option>
                        <option value="Gate Motor Automation">Gate Motor Automation (Sliding & Swing)</option>
                        <option value="Roller Shutter Automation">Roller Shutter Automation</option>
                        <option value="Electric Fencing">Electric Fencing</option>
                        <option value="CCTV Cameras Installation">CCTV Cameras Installation</option>
                        <option value="Access Control Systems">Access Control Systems</option>
                        <option value="Aluminum Fabrication">Aluminum Fabrication</option>
                      </select>
                    </div>

                    <div className="form-group form-group-wide">
                      <label htmlFor="form-message">Project Description / Details *</label>
                      <textarea
                        id="form-message"
                        name="message"
                        rows="4"
                        placeholder="Describe your property (residential villa, estate, warehouse), your existing gate or garage setup, or security requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-submit-row">
                    <button type="submit" className="whatsapp-submit-btn">
                      <MessageCircle size={22} />
                      <span>Send Request via WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>

            {/* Location & Map */}
            <ScrollReveal direction="down" delay={150}>
              <div className="contact-map-card">
                <div className="contact-map-header">
                  <h4>Find Our Workshop & Office</h4>
                  <p>{companyInfo.location} - Near West Hills Mall, Greater Accra/Central border.</p>
                </div>
                <iframe
                  src={companyInfo.mapsEmbed}
                  title="Sanzer office location map"
                  className="contact-map-frame"
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="contact-dispatch-note">
                  <ShieldCheck size={20} className="dispatch-icon" />
                  <div>
                    <strong>Nationwide Field Deployment</strong>
                    <p>Our mobile installation vans travel to clients across Greater Accra, Ashanti, Western, Eastern, and all 16 regions.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
