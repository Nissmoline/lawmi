import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { detectOptimalLanguage, getBrowserLanguage, isLanguageSupported } from '../utils/languageUtils';

const LanguageInitializer = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Получаем язык браузера и определяем оптимальный язык
    const browserLanguage = getBrowserLanguage();
    const detectedLanguage = detectOptimalLanguage();
    
    // Проверяем, не установлен ли уже язык в localStorage
    const savedLanguage = localStorage.getItem('i18nextLng');
    
    if (!savedLanguage) {
      // Если язык не сохранен, устанавливаем определенный язык
      i18n.changeLanguage(detectedLanguage);
      console.log(`Автоматически установлен язык: ${detectedLanguage} (браузер: ${browserLanguage})`);
    } else {
      // Если язык уже сохранен, проверяем его валидность
      if (!isLanguageSupported(savedLanguage)) {
        i18n.changeLanguage('en');
        console.log('Сохраненный язык не поддерживается, установлен английский');
      }
    }
  }, [i18n]);

  return null; // Компонент не рендерит ничего
};

export default LanguageInitializer; 