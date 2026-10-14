import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function PageHeader({ title, subtitle, breadcrumb = [] }) {
  return (
    <section className="page-header-banner">
      <div className="container">
        <ScrollReveal direction="down">
          <nav className="page-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight size={14} className="breadcrumb-separator" />
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  <span className="breadcrumb-current">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="page-header-title">{title}</h1>
          {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        </ScrollReveal>
      </div>
    </section>
  );
}
