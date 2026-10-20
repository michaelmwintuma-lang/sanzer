// Per-page SEO title and description for every route.
// Read by components/PageMeta.jsx (in-app navigation) and by vite.config.js,
// which writes dist/<path>/index.html with these tags so Google sees them without running JavaScript.
import { garagePage, SITE_URL } from './garageDoorsAccra.js';

export { SITE_URL };

export const DEFAULT_OG_IMAGE = '/images/logo.jpeg';

export const pageMeta = [
  {
    path: '/',
    title: 'Sanzer Automated & Security | Gate Automation & Garage Doors Ghana',
    description:
      'Sanzer Automated & Security installs garage doors, gate motors, roller shutters, electric fencing, CCTV and aluminum fabrication across Ghana. Call or WhatsApp.'
  },
  {
    path: '/about',
    title: 'About Us | Sanzer Automated & Security, Kasoa Ghana',
    description:
      'Learn about Sanzer Automated & Security Co. Ltd, a Kasoa-based contractor for automated gates, garage doors, perimeter security and fabrication across Ghana.'
  },
  {
    path: '/services',
    title: 'Services | Garage Doors, Gate Motors, Electric Fencing & CCTV Ghana',
    description:
      'Garage door and gate motor automation, roller shutters, electric fencing, CCTV surveillance and aluminum fabrication for homes and businesses in Ghana.'
  },
  {
    path: '/projects',
    title: 'Projects | Sanzer Installation Portfolio in Ghana',
    description:
      'See real photos of garage doors, automated gates, electric fences, CCTV and aluminum fabrication projects installed by Sanzer across Ghana.'
  },
  {
    path: '/why-us',
    title: 'Why Choose Sanzer | FAQs on Gate & Garage Automation Ghana',
    description:
      'Why property owners across Ghana choose Sanzer: trusted motor brands, battery backup, nationwide installation and after-sales support. Read our FAQs.'
  },
  {
    path: '/contact',
    title: 'Contact Sanzer | Request a Quote in Kasoa & Accra',
    description:
      'Contact Sanzer Automated & Security in Kasoa (near West Hills Mall). Call, WhatsApp or email for a quote or to book a site inspection anywhere in Ghana.'
  },
  {
    path: garagePage.path,
    title: garagePage.seoTitle,
    description: garagePage.metaDescription,
    ogImage: `/images/${encodeURIComponent('garage door5.jpeg')}`
  }
];

export const findPageMeta = (pathname) => {
  const clean = pathname !== '/' ? pathname.replace(/\/+$/, '') : pathname;
  return pageMeta.find((p) => p.path === clean);
};
