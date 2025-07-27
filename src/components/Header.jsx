import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Navigation functions for sections
  const navigateToSection = (sectionId) => {
    closeMenu();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Navigate to home and scroll to top
  const navigateToHome = () => {
    closeMenu();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home
      navigate('/');
    } else {
      // If already on home page, scroll to top
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

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
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
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav ref={menuRef}>
        <div className="logo">
          <button onClick={navigateToHome} className="logo-button">
            <img src="/logo.svg" alt="Ilyushina Marina" />
          </button>
        </div>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><button onClick={navigateToHome} className="nav-link">Αρχική</button></li>
          <li><button onClick={() => navigateToSection('about')} className="nav-link">Προφίλ</button></li>
          <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
            <a 
              href="#" 
              className="dropdown-toggle"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Τομείς <span className="dropdown-arrow">&#9662;</span>
            </a>
            <ul className="submenu" role="menu">
              <li role="none"><Link to="/family" onClick={closeMenu} role="menuitem">Οικογενειακό & Κληρονομικό Δίκαιο</Link></li>
              <li role="none"><Link to="/immigration" onClick={closeMenu} role="menuitem">Μεταναστευτικό Δίκαιο</Link></li>
              <li role="none"><Link to="/criminal" onClick={closeMenu} role="menuitem">Ποινικό Δίκαιο</Link></li>
              <li role="none"><Link to="/civil" onClick={closeMenu} role="menuitem">Αστικό Δίκαιο</Link></li>
              <li role="none"><Link to="/translations" onClick={closeMenu} role="menuitem">Μεταφράσεις & Επικυρώσεις</Link></li>
              <li role="none"><Link to="/corporate" onClick={closeMenu} role="menuitem">Εταιρικό & Εμπορικό Δίκαιο</Link></li>
            </ul>
          </li>
          <li><button onClick={() => navigateToSection('contact')} className="nav-link">Επικοινωνία</button></li>
        </ul>
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
      </nav>
    </header>
  );
};

export default Header; 