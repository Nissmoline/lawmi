import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { detectOptimalLanguage, getSupportedLanguage } from './utils/languageUtils';

const LANGUAGE_LOADERS = {
  el: () => import('./locales/el/translations.json'),
  en: () => import('./locales/en/translations.json'),
  ru: () => import('./locales/ru/translations.json'),
};

const loadedLanguages = new Set();

const addResourcesToStore = (language, resources) => {
  if (typeof i18n.addResourceBundle === 'function') {
    i18n.addResourceBundle(language, 'translation', resources, true, true);
    return;
  }

  // Fallback for environments where addResourceBundle is unavailable before init
  const store = i18n.options.resources || (i18n.options.resources = {});
  store[language] = store[language] || {};
  store[language].translation = resources;
};

export const loadLanguageResources = async (language) => {
  const normalized = getSupportedLanguage(language);

  if (!LANGUAGE_LOADERS[normalized] || loadedLanguages.has(normalized)) {
    return;
  }

  const module = await LANGUAGE_LOADERS[normalized]();
  const resources = module.default ?? module;

  addResourcesToStore(normalized, resources);
  loadedLanguages.add(normalized);
};

export const initializeI18n = async () => {
  const savedLanguage = typeof window !== 'undefined' ? window.localStorage?.getItem('i18nextLng') : null;
  const initialLanguage = getSupportedLanguage(savedLanguage || detectOptimalLanguage());

  await loadLanguageResources(initialLanguage);
  if (initialLanguage !== 'en') {
    // Ensure fallback translations are ready without blocking rendering
    loadLanguageResources('en');
  }

  await i18n
    .use(initReactI18next)
    .init({
      lng: initialLanguage,
      fallbackLng: 'en',
      resources: i18n.options.resources,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });

  i18n.on('languageChanged', (nextLanguage) => {
    loadLanguageResources(nextLanguage);
  });

  return i18n;
};

export default i18n;
