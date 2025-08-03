import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'el', /* flag: '🇬🇷', */ name: 'EΛ' },
    { code: 'en', /* flag: '🇬🇧', */ name: 'EN' },
    { code: 'ru', /* flag: '🇷🇺', */ name: 'RU' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggle dropdown clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Close dropdown when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`language-selector ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
      <button
        className="language-selector-button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
        data-text={currentLanguage.name}
      >
        {currentLanguage.name}
        <span className="language-arrow">&#9662;</span>
      </button>
      
      <ul className="language-dropdown" role="menu">
        {languages.map((language) => (
          <li key={language.code} role="none">
            <button
              className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
              role="menuitem"
              type="button"
            >
              {language.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector; 