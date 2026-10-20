import React, { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { companyInfo, ghanaRegions } from '../data/sanzerData';

export default function ContactSection() {
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

  const regionsList = Object.keys(ghanaRegions);
  const availableTowns = formData.region ? ghanaRegions[formData.region] || [] : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'region') {
      setFormData(prev => ({
        ...prev,
        region: value,
        town: '' // reset town when region changes
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
      'Hello Sanzer,',
      '',
      'I would like to request your service.',
      '',
      `Full Name: ${formData.name}`,
      `Phone Number: ${formData.phone}`,
      `Email Address: ${formData.email}`,
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
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Get In Touch</span>
          <h2>Contact Us Today</h2>
          <p className="section-copy">
            Ready to start your project? Reach out for consultation, quotations, or on-site inspections. Please note that site inspections are not free; an inspection fee applies.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="contact-cards">
          <article className="contact-card">
            <div className="contact-card-icon">
              <Phone size={24} />
            </div>
            <h3>Phone & WhatsApp</h3>
            <div className="contact-stack">
              {companyInfo.phones.map((p, idx) => (
                <div key={idx} className="contact-line">
                  <span className="contact-label">Call</span>
                  <a href={`tel:${p.tel}`}>{p.label}</a>
                </div>
              ))}
              {companyInfo.phones.map((p, idx) => (
                <div key={`wa-${idx}`} className="contact-line">
                  <span className="contact-label">WhatsApp</span>
                  <a href={`https://wa.me/${p.wa}`} target="_blank" rel="noopener noreferrer">
                    {p.label}
                  </a>
                </div>
              ))}
            </div>
          </article>

          <article className="contact-card">
            <div className="contact-card-icon">
              <MapPin size={24} />
            </div>
            <h3>Main Office</h3>
            <div className="contact-stack">
              <div className="contact-line">
                <span className="contact-label">Location</span>
                <span>{companyInfo.location}</span>
              </div>
              <div className="contact-line">
                <span className="contact-label">Landmark</span>
                <span>{companyInfo.landmark}</span>
              </div>
              <div className="contact-line">
                <span className="contact-label">Coverage</span>
                <span>{companyInfo.coverage}</span>
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

          <article className="contact-card">
            <div className="contact-card-icon">
              <Mail size={24} />
            </div>
            <h3>Email Us</h3>
            <div className="contact-stack">
              <div className="contact-line">
                <span className="contact-label">Email</span>
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </div>
            </div>
            <p style={{ marginTop: 'auto', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Send us architectural plans, site photos, or bills of quantities for prompt quotations.
            </p>
          </article>
        </div>

        {/* Embedded Map */}
        <div className="map-panel">
          <iframe
            src={companyInfo.mapsEmbed}
            title="Sanzer office location at Kasoa Ayibe Town near West Hills Mall"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form */}
        <div className="contact-form-container">
          <div className="contact-form-header">
            <h3>Request Consultation or Quote</h3>
            <p>Fill out the form below and we'll instantly connect with you directly on WhatsApp.</p>
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
                <label htmlFor="form-area">Specific Area / Landmark</label>
                <input
                  type="text"
                  id="form-area"
                  name="area"
                  placeholder="e.g. Near Shell filling station"
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
                  <option value="Gate Motor Automation">Gate Motor Automation</option>
                  <option value="Roller Shutter Automation">Roller Shutter Automation</option>
                  <option value="Electric Fencing">Electric Fencing</option>
                  <option value="CCTV Cameras Installation">CCTV Cameras Installation</option>
                  <option value="Access Control Systems">Access Control Systems</option>
                  <option value="Aluminum Fabrication">Aluminum Fabrication</option>
                </select>
              </div>

              <div className="form-group form-group-wide">
                <label htmlFor="form-message">Project Details *</label>
                <textarea
                  id="form-message"
                  name="message"
                  rows="4"
                  placeholder="Please describe your property type, current gate/garage setup, or security needs..."
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
      </div>
    </section>
  );
}
