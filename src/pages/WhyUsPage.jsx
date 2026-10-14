import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  ThumbsUp, 
  Globe, 
  Briefcase, 
  Headphones, 
  Zap, 
  ShieldCheck, 
  BatteryCharging,
  ArrowRight
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FaqSection from '../components/FaqSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ScrollReveal from '../components/ScrollReveal';
import { benefitsData } from '../data/sanzerData';

const benefitIconMap = {
  Users,
  Award,
  ThumbsUp,
  Globe,
  Briefcase,
  Headphones
};

export default function WhyUsPage() {
  return (
    <div className="why-us-page">
      <PageHeader
        title="Why Choose Sanzer Automated & Security"
        subtitle="Discover why property owners across Ghana choose us for durable automation and uncompromised security."
        breadcrumb={[{ label: 'Why Us & FAQ' }]}
      />

      {/* Benefits Overview */}
      <section className="section why-us-benefits-section">
        <div className="container">
          <ScrollReveal direction="down">
            <div className="section-heading centered">
              <span className="eyebrow">Our Advantage</span>
              <h2>Built on Engineering Rigor & Trust</h2>
              <p className="section-copy">
                Six foundational principles that define every project we undertake.
              </p>
            </div>
          </ScrollReveal>

          <div className="benefits-grid">
            {benefitsData.map((benefit, idx) => {
              const Icon = benefitIconMap[benefit.icon] || Award;
              return (
                <ScrollReveal key={idx} direction="down" delay={idx * 80}>
                  <article className="benefit-card light-theme">
                    <div className="benefit-icon-box">
                      <Icon size={26} />
                    </div>
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.desc}</p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Built for Ghanaian Conditions Feature */}
      <section className="section ghana-conditions-section">
        <div className="container">
          <div className="ghana-conditions-card">
            <ScrollReveal direction="down">
              <div className="gc-header">
                <span className="eyebrow">Tropicalized Engineering</span>
                <h2>Engineered Specifically for Ghana's Climate & Power Grid</h2>
                <p>
                  We understand the unique challenges of operating automation in Ghana: seasonal humidity, coastal salt air, power fluctuations, and dust. Here is how we ensure reliability:
                </p>
              </div>

              <div className="gc-grid">
                <div className="gc-item">
                  <BatteryCharging size={28} className="gc-icon" />
                  <h4>Uninterrupted Battery Backup</h4>
                  <p>
                    Every automated gate and garage door is backed by reliable rechargeable 12V/24V deep-cycle batteries. When dumsor strikes, your gates continue operating seamlessly.
                  </p>
                </div>

                <div className="gc-item">
                  <Zap size={28} className="gc-icon" />
                  <h4>Electrical Surge Protection</h4>
                  <p>
                    We equip control motherboards with surge suppressors to shield sensitive logic boards from voltage spikes and lightning.
                  </p>
                </div>

                <div className="gc-item">
                  <ShieldCheck size={28} className="gc-icon" />
                  <h4>Weatherproof & Anti-Corrosion Finishes</h4>
                  <p>
                    All brackets, fence bobbins, and aluminum sections feature powder-coated and anodized treatments that resist coastal oxidation and rust.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <ScrollReveal direction="down">
        <FaqSection />
      </ScrollReveal>

      {/* Client Testimonials */}
      <ScrollReveal direction="down">
        <TestimonialsSection />
      </ScrollReveal>

      {/* Final Action */}
      <section className="section why-us-cta">
        <div className="container">
          <ScrollReveal direction="down">
            <div className="home-cta-box">
              <div className="home-cta-content">
                <span className="eyebrow light">Direct Site Support</span>
                <h2>Have More Questions or Need a Custom Quote?</h2>
                <p>
                  Speak with an experienced automation engineer today. We provide upfront quotes with no hidden fees.
                </p>
              </div>
              <div className="home-cta-actions">
                <Link to="/contact" className="btn btn-gold">
                  Contact Us Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
