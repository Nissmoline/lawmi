import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs = [
      { name: t('breadcrumbs.home'), path: '/', current: pathnames.length === 0 }
    ];

    pathnames.forEach((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;
      
      // Map route names to translated titles
      const routeNames = {
        'family': t('breadcrumbs.family'),
        'immigration': t('breadcrumbs.immigration'),
        'criminal': t('breadcrumbs.criminal'),
        'civil': t('breadcrumbs.civil'),
        'translations': t('breadcrumbs.translations'),
        'corporate': t('breadcrumbs.corporate'),
        'terms': t('breadcrumbs.terms'),
        'privacy': t('breadcrumbs.privacy')
      };

      breadcrumbs.push({
        name: routeNames[name] || name,
        path: path,
        current: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs on home page
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumbs-list">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="breadcrumb-item">
            {breadcrumb.current ? (
              <span className="breadcrumb-current" aria-current="page">
                {breadcrumb.name}
              </span>
            ) : (
              <Link to={breadcrumb.path} className="breadcrumb-link">
                {breadcrumb.name}
              </Link>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="breadcrumb-separator" aria-hidden="true">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 