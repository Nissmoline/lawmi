import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function CriminalPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('seo.criminal.title')}
        description={t('seo.criminal.description')}
        keywords={t('seo.criminal.keywords')}
        canonical="https://milawyer.gr/criminal"
        hreflang={{
          "el": "https://milawyer.gr/criminal",
          "en": "https://milawyer.gr/criminal",
          "ru": "https://milawyer.gr/criminal",
          "x-default": "https://milawyer.gr/criminal"
        }}
      />

      {/* Law Area Section */}
      <section className="law-area-section">
        <div className="law-area-container">
          <h1 className="law-area-title">{t('pages.criminal.title')}</h1>
          <div className="law-area-divider"></div>
          <p className="law-area-description">
            {t('pages.criminal.content.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="civil-services-section">
        <div className="container">
          <h2 className="services-title">{t('pages.criminal.content.servicesTitle')}</h2>
          <div className="services-grid">
            {t('pages.criminal.content.services', { returnObjects: true }).map((service, index) => (
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

export default CriminalPage; 