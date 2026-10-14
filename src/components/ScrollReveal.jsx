import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal component that drops content down as you scroll down.
 * Initial state: translateY(-24px), opacity: 0
 * Revealed state: translateY(0), opacity: 1
 */
export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  threshold = 0.12,
  direction = 'down' // 'down' (drops down from above), 'up', etc.
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    if (direction === 'down') return 'translateY(-26px)';
    if (direction === 'up') return 'translateY(26px)';
    return 'translateY(-26px)';
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal-container ${isVisible ? 'is-revealed' : ''} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}
