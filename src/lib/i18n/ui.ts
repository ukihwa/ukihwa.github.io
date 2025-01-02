export const languages = {
  en: 'English',
  ko: '한국어',
} as const;

export type Language = keyof typeof languages;

export const defaultLang = 'ko';

export const ui = {
  en: {},
  ko: {},
};
