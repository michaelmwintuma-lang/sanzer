import React from 'react';
import { 
  Users, 
  Award, 
  ThumbsUp, 
  Globe, 
  Briefcase, 
  Headphones 
} from 'lucide-react';
import { benefitsData } from '../data/sanzerData';

const benefitIconMap = {
  Users,
  Award,
  ThumbsUp,
  Globe,
  Briefcase,
  Headphones
};

export default function BenefitsSection() {
  return (
    <section className="section benefits-section" id="benefits">
      <div className="container">
        <div className="section-heading centered light">
          <span className="eyebrow">Our Benefits</span>
          <h2>Powering Your Property with Quality & Excellence</h2>
          <p className="section-copy">
            We merge technical engineering with high-standard site delivery to keep your property safe, automated, and impeccably finished.
          </p>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((benefit, idx) => {
            const Icon = benefitIconMap[benefit.icon] || Award;
            return (
              <article key={idx} className="benefit-card">
                <div className="benefit-icon-box">
                  <Icon size={26} />
                </div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
