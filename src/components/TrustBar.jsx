import React from 'react';
import { ShieldCheck, BatteryCharging, Globe, Award } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "All Motor Brands Supported",
      subtitle: "Centurion, Nice, Roger, Sommer & more"
    },
    {
      icon: BatteryCharging,
      title: "Dumsor-Resilient Systems",
      subtitle: "Rechargeable battery backups configured"
    },
    {
      icon: Globe,
      title: "Nationwide Installation",
      subtitle: "Field crews across all 16 regions of Ghana"
    },
    {
      icon: Award,
      title: "Certified Workmanship",
      subtitle: "Neat fabrication & warranty guarantee"
    }
  ];

  return (
    <section className="trust-bar-section">
      <div className="container">
        <div className="trust-bar-grid">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="trust-item">
                <div className="trust-icon-box">
                  <Icon size={22} />
                </div>
                <div className="trust-text">
                  <strong>{item.title}</strong>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
