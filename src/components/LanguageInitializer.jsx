import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { detectOptimalLanguage, isLanguageSupported } from '../utils/languageUtils';
import { loadLanguageResources } from '../i18n';

const LanguageInitializer = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const detectedLanguage = detectOptimalLanguage();
    const savedLanguage = typeof window !== 'undefined' ? window.localStorage?.getItem('i18nextLng') : null;

    const ensureLanguage = async (language) => {
      await loadLanguageResources(language);
      if (i18n.language !== language) {
        await i18n.changeLanguage(language);
      }
    };

    if (!savedLanguage) {
      ensureLanguage(detectedLanguage);
    } else if (!isLanguageSupported(savedLanguage)) {
      ensureLanguage('en');
    } else {
      loadLanguageResources(savedLanguage);
    }
  }, [i18n]);

  return null;
};

export default LanguageInitializer; 
