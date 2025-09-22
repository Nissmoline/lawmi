import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Custom hook for navigation functionality
 * Handles navigation to sections and pages
 */
export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Navigate to a specific section on the home page
   * @param {string} sectionId - The ID of the section to scroll to
   */
  const navigateToSection = useCallback((sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first with scroll target
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on home page, just scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [navigate, location.pathname]);

  /**
   * Navigate to home page and scroll to top
   */
  const navigateToHome = useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo(0, 0);
    }
  }, [navigate, location.pathname]);

  /**
   * Navigate to a specific page
   * @param {string} path - The path to navigate to
   */
  const navigateToPage = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  /**
   * Handle scroll to section after navigation
   * This should be called in useEffect when location changes
   */
  const handleScrollToSection = useCallback(() => {
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

  return {
    navigateToSection,
    navigateToHome,
    navigateToPage,
    handleScrollToSection
  };
};
