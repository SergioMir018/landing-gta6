// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sergiomir018.github.io',
  base: '/landing-gta6',
  vite: {
    plugins: [tailwindcss()]
  }
});