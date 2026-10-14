import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { heroSlides } from '../data/sanzerData';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const totalSlides = heroSlides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide]);

  const handleManualAction = (action) => {
    if (timerRef.current) clearInterval(timerRef.current);
    action();
  };

  return (
    <section className="hero-slider" id="home" aria-label="Hero Section Slider">
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <article
            key={slide.id}
            className={`hero-slide ${isActive ? 'active' : ''}`}
            aria-hidden={!isActive}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-image"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="hero-overlay"></div>

            <div className="container hero-content">
              <span className="eyebrow">{slide.eyebrow}</span>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>

              <div className="hero-actions">
                <a href={slide.primaryBtn.link} className="btn btn-primary">
                  {slide.primaryBtn.text}
                </a>
                <a href={slide.secondaryBtn.link} className="btn btn-secondary">
                  {slide.secondaryBtn.text}
                </a>
              </div>
            </div>
          </article>
        );
      })}

      <div className="hero-controls">
        <button
          className="hero-control"
          id="hero-prev"
          aria-label="Previous slide"
          onClick={() => handleManualAction(prevSlide)}
        >
          <ArrowLeft size={20} />
        </button>
        <button
          className="hero-control"
          id="hero-next"
          aria-label="Next slide"
          onClick={() => handleManualAction(nextSlide)}
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="hero-dots" id="hero-dots">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => handleManualAction(() => goToSlide(idx))}
          />
        ))}
      </div>
    </section>
  );
}
