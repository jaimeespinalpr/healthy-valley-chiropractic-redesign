// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jaimeespinalpr.github.io/healthy-valley-chiropractic-redesign',
  base: '/healthy-valley-chiropractic-redesign/',
  vite: {
    plugins: [tailwindcss()],
  },
});
