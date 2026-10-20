// Content for the /garage-doors-accra SEO landing page.
// Also read by vite.config.js to prerender the page's HTML (title, meta, structured data).
import { companyInfo } from './sanzerData.js';

export const SITE_URL = 'https://www.sanzer.online';

export const garagePage = {
  path: '/garage-doors-accra',
  seoTitle: 'Garage Door Installation Accra | Sanzer Automated & Security',
  metaDescription:
    'Garage door installation in Accra by Sanzer: we supply and install automated sectional and roll-up doors with Centurion, Nice & Sommer motors. Call or WhatsApp.',
  h1: 'Garage Door Installation in Accra',
  heroText:
    "We supply and install automated garage doors for homes and businesses across Accra. Smooth, quiet operation, remote control, and battery backup that keeps working during dumsor.",
  whatsappMessage:
    "Hello Sanzer! I'm interested in garage door installation in Accra. Could you give me a quote?",
  intro: {
    title: 'Garage door installation you can rely on',
    text:
      "Garage door automation is Sanzer's main specialty. We supply the garage door itself and install it complete with the motor, so you deal with one team from start to finish. We work on homes, estates, offices and commercial properties across Accra, handling everything from fitting the door and motor to balance adjustment, safety sensor setup and remote programming. Most installations are completed in about one day."
  },
  installs: [
    'Supply and installation of sectional garage doors',
    'Supply and installation of roll-up garage doors',
    'Garage door motors from Centurion, Nice, Roger Technology, Sommer, BFT and Ditec',
    'Rolling-code remote controls and key fobs',
    'Rechargeable 12V/24V battery backup systems',
    'Safety stop sensors with anti-crush auto-reverse',
    'Spare parts, extra remotes and replacement batteries'
  ],
  benefits: [
    { title: 'Convenience', text: 'Open and close from your car with a remote, with no getting out in the rain or at night.' },
    { title: 'Security', text: 'Rolling-code transmitters make the remote signal hard to copy.' },
    { title: 'Safety', text: 'Sensors stop and reverse the door if a person, child, pet or car is in the way.' },
    { title: 'Works during dumsor', text: 'Battery backup keeps the door running during power cuts, and a manual override key is always available.' },
    { title: 'Quiet', text: 'Whisper-quiet track and motor operation.' }
  ],
  process: [
    { title: 'Contact us', text: 'Call or WhatsApp with your location and garage size or photos.' },
    { title: 'Paid site inspection', text: 'We visit, measure the opening and recommend the right door and motor. Site inspections carry a fee.' },
    { title: 'Quote', text: 'You receive a quote for the door, motor and installation.' },
    { title: 'Supply and installation', text: 'We supply and fit the door, mount the motor, adjust the tracks and balance, and align the safety sensors.' },
    { title: 'Programming and handover', text: 'We program your remotes, test the safety features and show you how to use the manual override.' },
    { title: 'After-sales support', text: 'Warranty, maintenance and quick callouts by phone or WhatsApp.' }
  ],
  areas: ['East Legon', 'Airport Hills', 'Spintex', 'Madina', 'Adenta', 'Dome', 'Tema', 'Dodowa'],
  testimonial: {
    text: 'Best decision we made for our garage. The automated door works reliably with the remote controls, and the customer service from Sanzer is excellent. Five stars!',
    name: 'Kwame Boateng',
    location: 'Airport Hills, Accra'
  },
  gallery: [
    '/images/garage door5.jpeg',
    '/images/garage door 1.jpg',
    '/images/garage door 2.jpg',
    '/images/garage door 3.jpg',
    '/images/garage door4.jpeg'
  ],
  faqs: [
    {
      q: 'How much does garage door installation cost in Accra?',
      a: 'The price depends on the size of your garage opening, the door type (sectional or roll-up) and the motor brand you choose. We carry out a paid site inspection to measure your garage and give you an accurate quote. Send us your location and garage photos on WhatsApp to get started.'
    },
    {
      q: 'Which garage door motor brands do you install?',
      a: 'We install leading brands including Centurion, Nice, Roger Technology, Sommer, BFT and Ditec, and we supply original spare parts, remotes and backup batteries.'
    },
    {
      q: 'Will my automatic garage door work during dumsor?',
      a: 'Yes. Our motor systems come with 12V or 24V rechargeable battery backup, so the door keeps working during power outages. Every motor also has an emergency manual override key.'
    },
    {
      q: 'How long does garage door installation take?',
      a: 'A standard garage door installation takes about one day.'
    },
    {
      q: 'Can you automate my existing manual garage door?',
      a: 'In many cases, yes. We inspect the door, adjust its balance and tracks, and mount a suitable motor. If the door is not suitable, we can supply and install a new one.'
    },
    {
      q: 'Do you supply the garage door, or only the motor?',
      a: 'We supply the garage door ourselves. We supply and install complete sectional and roll-up garage doors together with the motor, remotes and safety sensors.'
    },
    {
      q: 'Do you install garage doors for businesses and commercial buildings?',
      a: 'Yes. We handle both residential garages and commercial setups, including warehouses and business premises.'
    },
    {
      q: 'Are automatic garage doors safe for children and pets?',
      a: 'Yes. We install safety stop sensors and anti-crush auto-reverse mechanisms that stop and reverse the door if something is in its path.'
    },
    {
      q: 'Is an automatic garage door secure?',
      a: 'Yes. Our systems use rolling-code transmitters, which change the signal each time you press the remote, making it very difficult to copy.'
    },
    {
      q: 'Can I get extra remotes or replace a lost one?',
      a: 'Yes. We supply additional remotes and key fobs and program them to your motor.'
    },
    {
      q: 'Are automatic garage doors noisy?',
      a: 'No. We install whisper-quiet motors and tracks for smooth, quiet operation.'
    },
    {
      q: 'Which areas in Accra do you cover?',
      a: 'We serve all of Greater Accra, including East Legon, Airport Hills, Spintex, Madina, Adenta, Dome, Tema and Dodowa.'
    },
    {
      q: 'Where is Sanzer located?',
      a: `Our office is at ${companyInfo.location}, ${companyInfo.landmark.toLowerCase()}. Our technical teams travel to install across Accra and all 16 regions of Ghana.`
    },
    {
      q: 'Is there a fee for a site inspection?',
      a: 'Yes. Site inspections carry a fee. During the visit we measure your garage, check the structure and recommend the right door and motor so your quote is accurate.'
    },
    {
      q: 'Do you offer a warranty and maintenance?',
      a: 'Yes. We provide equipment warranty and guaranteed workmanship, plus maintenance contracts and quick emergency callouts with direct support by phone and WhatsApp.'
    },
    {
      q: 'Do you sell garage door spare parts?',
      a: 'Yes. We supply original spare parts, remotes and backup batteries for the motor brands we install.'
    },
    {
      q: 'How do I get a quote for garage door installation in Accra?',
      a: `Call us on ${companyInfo.phones.map((p) => p.label).join(', ')}, send a WhatsApp message, or email ${companyInfo.email}. We will arrange a paid site inspection and send you a quote.`
    }
  ]
};

export function garageWhatsappUrl() {
  return `https://wa.me/${companyInfo.phones[0].wa}?text=${encodeURIComponent(garagePage.whatsappMessage)}`;
}

// Structured data (JSON-LD) for Google: FAQPage + local business + service.
export function garageStructuredData() {
  const pageUrl = `${SITE_URL}${garagePage.path}`;
  const businessId = `${SITE_URL}/#business`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': businessId,
        name: companyInfo.name,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.jpeg`,
        image: `${SITE_URL}/images/${encodeURIComponent('garage door5.jpeg')}`,
        telephone: companyInfo.phones[0].tel,
        email: companyInfo.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: `Ayibe Town, ${companyInfo.landmark}`,
          addressLocality: 'Kasoa',
          addressRegion: 'Central Region',
          addressCountry: 'GH'
        },
        openingHours: 'Mo-Sa 07:30-18:30',
        areaServed: [{ '@type': 'City', name: 'Accra' }, { '@type': 'Country', name: 'Ghana' }]
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: 'Garage Door Installation in Accra',
        serviceType: 'Garage door installation',
        description: garagePage.metaDescription,
        provider: { '@id': businessId },
        areaServed: { '@type': 'City', name: 'Accra' },
        url: pageUrl
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: garagePage.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: 'Garage Door Installation Accra', item: pageUrl }
        ]
      }
    ]
  };
}
