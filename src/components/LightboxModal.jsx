import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ image, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="lightbox-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="lightbox-content">
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <X size={24} />
        </button>

        <img src={image} alt={caption || 'Preview image'} />
        {caption && <div className="lightbox-caption">{caption}</div>}
      </div>
    </div>
  );
}
