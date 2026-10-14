import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/sanzerData';

export default function TestimonialsSection() {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Customer Feedback</span>
          <h2>What Our Clients Say</h2>
          <p className="section-copy">
            Trusted by homeowners, estate developers, and corporate businesses across Ghana for quality installations and exceptional service.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((review, idx) => (
            <article key={idx} className="testimonial-card">
              <div className="testimonial-rating" aria-label={`${review.rating} out of 5 stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="testimonial-text">"{review.text}"</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {getInitials(review.name)}
                </div>
                <div>
                  <div className="testimonial-name">{review.name}</div>
                  <div className="testimonial-service">{review.service}</div>
                  {review.location && <div className="testimonial-loc">{review.location}</div>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
