export { default as en } from './en.json';
export { default as es } from './es.json';

import { createGetStaticPaths } from 'astro-i18n';
import {
    es,
    en
} from './'

export const Langs = {
    es,
    en,
} as const;

export type Locale = 'en' | 'es';
export type Key = keyof typeof Langs[Locale];
/**
 *@title i18n configuration
 *@desc any other configuration can be added here but should be changed in astro.config.mjs too
 */
export const i18n = {
    defaultLocale: "en" as Locale,
    locales: ["en", "es"] as Locale[],
    routing: {
        prefixDefaultLocale: true
    }
}

export const Languages = {
    en: 'English',
    es: 'Español'
}

export const useTranslations = (
    lang: Locale | undefined,
    defaultLang: Locale = i18n.defaultLocale
) => (key: Key) => {
    const currentLang = lang || defaultLang;
    return Langs[currentLang][key] || Langs[defaultLang][key];
};

export const getStaticPaths = async () => i18n.locales.map(lang => ({ params: { lang } }));