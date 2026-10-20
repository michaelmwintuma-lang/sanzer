import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { findPageMeta, SITE_URL } from '../data/pageMeta';

const setMeta = (selector, attr, create) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = create();
    document.head.appendChild(tag);
  }
  return (value) => tag.setAttribute(attr, value);
};

// Keeps the tab title, description and canonical link correct during in-app navigation.
// (Direct visits get them from the per-page HTML built in vite.config.js.)
export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = findPageMeta(pathname);
    if (!meta) return;

    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    })(meta.description);
    setMeta('link[rel="canonical"]', 'href', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    })(`${SITE_URL}${meta.path}`);
  }, [pathname]);

  return null;
}
