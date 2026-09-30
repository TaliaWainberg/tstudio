import he from './he.json';
import en from './en.json';

export const locales = ['he', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'he';

const dict = { he, en } as const;
export type Dict = typeof he;

export const t = (locale: Locale): Dict => dict[locale] as Dict;
export const dirOf = (locale: Locale) => (locale === 'he' ? 'rtl' : 'ltr');
export const pathOf = (locale: Locale) => (locale === defaultLocale ? '/' : `/${locale}/`);
export const otherOf = (locale: Locale): Locale => (locale === 'he' ? 'en' : 'he');

export const INSTAGRAM_URL = 'https://www.instagram.com/____t.studio/';
export const INSTAGRAM_HANDLE = '@____t.studio';

// Business contact details (also used on the accessibility statement).
export const WHATSAPP_URL = 'https://wa.me/972502777209';
export const PHONE_DISPLAY = '050-277-7209';
export const PHONE_TEL = '+972502777209';

// Accessibility statement. `name` and `email` must be confirmed by the owner before launch.
export const A11Y = {
  name: '',
  email: 'talia.alaluf@gmail.com',
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  updated: '2026-09-30',
};

/** Split a trailing/leading arrow off a label so it can be hidden from screen readers. */
export const splitArrow = (s: string) => {
  const m = s.match(/^(.*?)\s*([↓↑←→↗])$/u);
  return m ? { text: m[1], arrow: m[2] } : { text: s, arrow: '' };
};
