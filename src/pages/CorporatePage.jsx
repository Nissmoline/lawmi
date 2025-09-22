import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function CorporatePage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('seo.corporate.title')}
        description={t('seo.corporate.description')}
        keywords={t('seo.corporate.keywords')}
        canonical="https://milawyer.gr/corporate"
        hreflang={{
          "el": "https://milawyer.gr/corporate",
          "en": "https://milawyer.gr/corporate",
          "ru": "https://milawyer.gr/corporate",
          "x-default": "https://milawyer.gr/corporate"
        }}
      />

      {/* Law Area Section */}
      <section className="law-area-section">
        <div className="law-area-container">
          <h1 className="law-area-title">{t('pages.corporate.title')}</h1>
          <div className="law-area-divider"></div>
          <p className="law-area-description">
            {t('pages.corporate.content.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="civil-services-section">
        <div className="container">
          <h2 className="services-title">{t('pages.corporate.content.servicesTitle')}</h2>
          <div className="services-grid">
            {t('pages.corporate.content.services', { returnObjects: true }).map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CorporatePage; 