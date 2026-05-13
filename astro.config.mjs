import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://mundial2026guia.com';

export default defineConfig({
  site: SITE,
  integrations: [
    tailwind(),
    sitemap({
      // v3.1.6 ya excluye 404/500 automáticamente, pero lo dejamos explícito
      filter: (page) => !page.includes('/404') && !page.includes('/500'),

      // Prioridades y frecuencias por tipo de ruta (señales SEO para Google)
      serialize(item) {
        const url     = item.url;
        const lastmod = new Date().toISOString();

        if (url === `${SITE}/`) {
          return { ...item, changefreq: 'daily',   priority: 1.0, lastmod };
        }
        if (url.includes('/horarios/')) {
          return { ...item, changefreq: 'weekly',  priority: 0.9, lastmod };
        }
        if (url.includes('/sedes/')) {
          return { ...item, changefreq: 'monthly', priority: 0.7, lastmod };
        }
        return { ...item, changefreq: 'monthly', priority: 0.5, lastmod };
      },
    }),
  ],
});
