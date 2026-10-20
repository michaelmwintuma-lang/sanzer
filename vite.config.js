import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { garagePage, garageStructuredData, garageWhatsappUrl, SITE_URL } from './src/data/garageDoorsAccra.js';
import { companyInfo } from './src/data/sanzerData.js';

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Writes dist/garage-doors-accra/index.html with the page's own title, meta tags,
// structured data and readable content, so Google sees them without running JavaScript.
// React replaces the #root content as soon as the app loads.
function prerenderGaragePage() {
  let outDir;
  return {
    name: 'prerender-garage-doors-accra',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    writeBundle() {
      const pageUrl = `${SITE_URL}${garagePage.path}`;
      let html = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');

      const head = [
        `<title>${escapeHtml(garagePage.seoTitle)}</title>`,
        `<meta name="description" content="${escapeHtml(garagePage.metaDescription)}" />`,
        `<link rel="canonical" href="${pageUrl}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${escapeHtml(garagePage.seoTitle)}" />`,
        `<meta property="og:description" content="${escapeHtml(garagePage.metaDescription)}" />`,
        `<meta property="og:url" content="${pageUrl}" />`,
        `<meta property="og:image" content="${SITE_URL}/images/${encodeURIComponent('garage door5.jpeg')}" />`,
        `<script type="application/ld+json">${JSON.stringify(garageStructuredData()).replace(/</g, '\\u003c')}</script>`
      ].join('\n    ');

      const body = `
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

      html = html
        .replace(/<title>[\s\S]*?<\/title>/, '')
        .replace(/<meta\s+name="description"[\s\S]*?\/>/, '')
        .replace('</head>', `  ${head}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

      const dir = path.join(outDir, garagePage.path.replace(/^\//, ''));
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), html);
    }
  };
}

export default defineConfig({
  plugins: [react(), prerenderGaragePage()],
  server: {
    port: 5173,
    open: true
  }
});
