import { defineConfig } from 'astro/config';
import { i18n as i18nConfig } from './src/i18n/index';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: i18nConfig
});