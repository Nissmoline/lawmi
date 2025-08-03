import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    console.log('closeMenu called');
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Navigation functions for sections
  const navigateToSection = (sectionId) => {
    console.log('navigateToSection called with:', sectionId);
    closeMenu();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      console.log('Navigating to home with scrollTo:', sectionId);
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on home page, just scroll to section
      console.log('Already on home, scrolling to section:', sectionId);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        console.log('Found element:', element);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Navigate to home and scroll to top
  const navigateToHome = () => {
    console.log('navigateToHome called');
    closeMenu();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home
      console.log('Navigating to home from:', location.pathname);
      navigate('/');
    } else {
      // If already on home page, scroll to top
      console.log('Already on home, scrolling to top');
      window.scrollTo(0, 0);
    }
  };

  // Handle scroll to section after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      // Clear the state to prevent re-scrolling
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  // Scroll to top for all pages except home page
  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Close menu when location changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
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
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav ref={menuRef}>
        <div className="logo">
          <button onClick={navigateToHome} className="logo-button">
            <img src="logo.svg" alt="Ilyushina Marina" />
          </button>
        </div>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><button onClick={navigateToHome} className="nav-link">{t('navigation.home')}</button></li>
          <li><button onClick={() => navigateToSection('about')} className="nav-link">{t('navigation.profile')}</button></li>
          <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
            <a 
              href="#" 
              className="dropdown-toggle"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              data-text={t('navigation.areas')}
            >
              {t('navigation.areas')} <span className="dropdown-arrow">&#9662;</span>
            </a>
            <ul className="submenu" role="menu">
              <li role="none"><Link to="/family" onClick={closeMenu} role="menuitem">{t('navigation.family')}</Link></li>
              <li role="none"><Link to="/immigration" onClick={closeMenu} role="menuitem">{t('navigation.immigration')}</Link></li>
              <li role="none"><Link to="/criminal" onClick={closeMenu} role="menuitem">{t('navigation.criminal')}</Link></li>
              <li role="none"><Link to="/civil" onClick={closeMenu} role="menuitem">{t('navigation.civil')}</Link></li>
              <li role="none"><Link to="/translations" onClick={closeMenu} role="menuitem">{t('navigation.translations')}</Link></li>
              <li role="none"><Link to="/corporate" onClick={closeMenu} role="menuitem">{t('navigation.corporate')}</Link></li>
            </ul>
          </li>
          <li><button onClick={() => navigateToSection('contact')} className="nav-link">{t('navigation.contact')}</button></li>
          <li className="language-selector-item"><LanguageSelector /></li>
        </ul>
        <div className="mobile-actions">
          <a 
            href="tel:+306983363775" 
            className="mobile-phone-button"
            aria-label="Call +30 698 336 3775"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.72 19.72 0 0 1 3 4.09 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75l1.13 4.53a1 1 0 0 1-.29 1L8.3 11.7a16 16 0 0 0 6 6l2.42-2.42a1 1 0 0 1 1-.29l4.53 1.13a1 1 0 0 1 .75 1Z" />
            </svg>
          </a>
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 