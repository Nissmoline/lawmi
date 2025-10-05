export const LANGUAGE_SWITCH_EVENT = 'language-switch';

// Утилиты для работы с языками

/**
 * Получает поддерживаемый язык на основе языка браузера
 * @param {string} browserLanguage - Язык браузера (например, 'ru-RU', 'en-US', 'el-GR')
 * @returns {string} - Код поддерживаемого языка ('el', 'en', 'ru') или 'en' по умолчанию
 */
export const getSupportedLanguage = (browserLanguage) => {
  const supportedLanguages = ['el', 'en', 'ru'];
  
  if (!browserLanguage) {
    return 'en';
  }
  
  // Получаем основной код языка (до дефиса)
  const languageCode = browserLanguage.toLowerCase().split('-')[0];
  
  if (supportedLanguages.includes(languageCode)) {
    return languageCode;
  }
  
  return 'en'; // Fallback на английский
};

/**
 * Получает язык браузера
 * @returns {string} - Язык браузера
 */
export const getBrowserLanguage = () => {
  return navigator.language || navigator.userLanguage || navigator.browserLanguage || 'en';
};

/**
 * Определяет оптимальный язык для сайта
 * @returns {string} - Код языка для использования
 */
export const detectOptimalLanguage = () => {
  const browserLanguage = getBrowserLanguage();
  return getSupportedLanguage(browserLanguage);
};

/**
 * Проверяет, поддерживается ли язык
 * @param {string} languageCode - Код языка для проверки
 * @returns {boolean} - Поддерживается ли язык
 */
export const isLanguageSupported = (languageCode) => {
  const supportedLanguages = ['el', 'en', 'ru'];
  return supportedLanguages.includes(languageCode);
};

/**
 * Получает список поддерживаемых языков
 * @returns {Array} - Массив поддерживаемых языков
 */
export const getSupportedLanguages = () => {
  return ['el', 'en', 'ru'];
}; 
