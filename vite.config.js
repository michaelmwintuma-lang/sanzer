import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { garagePage, garageStructuredData, garageWhatsappUrl, SITE_URL } from './src/data/garageDoorsAccra.js';
import { pageMeta, DEFAULT_OG_IMAGE } from './src/data/pageMeta.js';
import { companyInfo } from './src/data/sanzerData.js';

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Title, description, canonical link and social-share tags for one page.
const headFor = (meta) => {
  const pageUrl = `${SITE_URL}${meta.path}`;
  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${pageUrl}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(companyInfo.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${pageUrl}" />`,
    `<meta property="og:image" content="${SITE_URL}${meta.ogImage || DEFAULT_OG_IMAGE}" />`
  ];
};

// Readable content for the garage landing page, shown to crawlers before JavaScript runs.
const garageBody = () => `
      <main>
        <h1>${escapeHtml(garagePage.h1)}</h1>
        <p>${escapeHtml(garagePage.heroText)}</p>
        <p><a href="tel:${companyInfo.phones[0].tel}">Call ${escapeHtml(companyInfo.phones[0].label)}</a> |
           <a href="${escapeHtml(garageWhatsappUrl())}">WhatsApp Us</a></p>
        <h2>${escapeHtml(garagePage.intro.title)}</h2>
        <p>${escapeHtml(garagePage.intro.text)}</p>
        <h3>What we supply and install</h3>
        <ul>${garagePage.installs.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>
        <h2>Why automate your garage door</h2>
        <ul>${garagePage.benefits.map((b) => `<li><strong>${escapeHtml(b.title)}:</strong> ${escapeHtml(b.text)}</li>`).join('')}</ul>
        <h2>Our garage door installation process</h2>
        <ol>${garagePage.process.map((s) => `<li><strong>${escapeHtml(s.title)}:</strong> ${escapeHtml(s.text)}</li>`).join('')}</ol>
        <h2>Areas we serve in Accra</h2>
        <p>${garagePage.areas.map(escapeHtml).join(', ')}, and all 16 regions of Ghana.</p>
        <h2>Garage door installation in Accra: frequently asked questions</h2>
        ${garagePage.faqs.map((f) => `<h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p>`).join('\n        ')}
        <h2>Contact Sanzer</h2>
        <ul>
          ${companyInfo.phones.map((p) => `<li><a href="tel:${p.tel}">${escapeHtml(p.label)}</a></li>`).join('')}
          <li><a href="mailto:${companyInfo.email}">${escapeHtml(companyInfo.email)}</a></li>
          <li>${escapeHtml(companyInfo.location)} (${escapeHtml(companyInfo.landmark)})</li>
        </ul>
        <p><a href="/services">See all our services</a></p>
      </main>
    `;

// Writes dist/<path>/index.html for every page in src/data/pageMeta.js, each with its own
// title, meta tags and canonical link, so Google sees them without running JavaScript.
// The garage page also gets structured data and readable content; React replaces the
// #root content as soon as the app loads.
function prerenderPages() {
  let outDir;
  return {
    name: 'prerender-page-meta',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    writeBundle() {
      const template = fs
        .readFileSync(path.join(outDir, 'index.html'), 'utf8')
        .replace(/<title>[\s\S]*?<\/title>/, '')
        .replace(/<meta\s+name="description"[\s\S]*?\/>/, '');

      for (const meta of pageMeta) {
        const isGarage = meta.path === garagePage.path;
        const head = headFor(meta);
        if (isGarage) {
          head.push(
            `<script type="application/ld+json">${JSON.stringify(garageStructuredData()).replace(/</g, '\\u003c')}</script>`
          );
        }

        let html = template.replace('</head>', `  ${head.join('\n    ')}\n  </head>`);
        if (isGarage) html = html.replace('<div id="root"></div>', `<div id="root">${garageBody()}</div>`);

        const dir = path.join(outDir, meta.path.replace(/^\//, ''));
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html);
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), prerenderPages()],
  server: {
    port: 5173,
    open: true
  }
});
