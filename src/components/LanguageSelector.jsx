import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { loadLanguageResources } from '../i18n';
import { LANGUAGE_SWITCH_EVENT } from '../utils/languageUtils';
import './LanguageSelector.css';

const languages = [
  { code: 'el', name: 'EL' },
  { code: 'en', name: 'EN' },
  { code: 'ru', name: 'RU' }
];

const LanguageSelector = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = async (languageCode) => {
    await loadLanguageResources(languageCode);
    await i18n.changeLanguage(languageCode);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(LANGUAGE_SWITCH_EVENT, { detail: { language: languageCode } }));
    }

    setIsOpen(false);

    if (onLanguageChange) {
      onLanguageChange(languageCode);
    }
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen((prev) => !prev);
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
              data-value={language.code}
              value={language.code}
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
