import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function CivilPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('seo.civil.title')}
        description={t('seo.civil.description')}
        keywords={t('seo.civil.keywords')}
        canonical="https://milawyer.gr/civil"
        hreflang={{
          "el": "https://milawyer.gr/civil",
          "en": "https://milawyer.gr/en/civil",
          "ru": "https://milawyer.gr/ru/civil",
          "x-default": "https://milawyer.gr/civil"
        }}
      />

      {/* Law Area Section */}
      <section className="law-area-section">
        <div className="law-area-container">
          <h1 className="law-area-title">{t('pages.civil.title')}</h1>
          <div className="law-area-divider"></div>
          <p className="law-area-description">
            {t('pages.civil.content.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="civil-services-section">
        <div className="container">
          <h2 className="services-title">{t('pages.civil.content.servicesTitle')}</h2>
          <div className="services-grid">
            {t('pages.civil.content.services', { returnObjects: true }).map((service, index) => (
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

export default CivilPage; 