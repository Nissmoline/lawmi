import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getSupportedLanguage } from './utils/languageUtils';

// Import translation files
import { translations } from './locales';

const resources = {
  el: {
    translation: translations.el
  },
  en: {
    translation: translations.en
  },
  ru: {
    translation: translations.ru
  }
};

// Используем импортированную функцию из утилит

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Изменено на английский
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupSessionStorage: 'i18nextLng',
      
      // Кастомная функция определения языка
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      
      // Проверяем язык браузера
      checkWhitelist: true,
      checkForSimilarInWhitelist: true,
      
      // Функция для обработки определенного языка
      convertDetectedLanguage: (lng) => {
        return getSupportedLanguage(lng);
      }
    },
  });

export default i18n; 