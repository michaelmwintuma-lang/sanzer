import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/sanzerData';

export default function FloatingWhatsApp() {
  const directMessage = encodeURIComponent(
    "Hello Sanzer! I'm interested in your automation and security services. Could you assist me?"
  );
  const waUrl = `https://wa.me/${companyInfo.phones[0].wa}?text=${directMessage}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with Sanzer on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <div className="floating-whatsapp-pulse"></div>
      <MessageCircle size={32} />
    </a>
  );
}
