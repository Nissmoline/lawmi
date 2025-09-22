import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function ImmigrationPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('seo.immigration.title')}
        description={t('seo.immigration.description')}
        keywords={t('seo.immigration.keywords')}
        canonical="https://milawyer.gr/immigration"
        hreflang={{
          "el": "https://milawyer.gr/immigration",
          "en": "https://milawyer.gr/immigration",
          "ru": "https://milawyer.gr/immigration",
          "x-default": "https://milawyer.gr/immigration"
        }}
      />

      {/* Law Area Section */}
      <section className="law-area-section">
        <div className="law-area-container">
          <h1 className="law-area-title">{t('pages.immigration.title')}</h1>
          <div className="law-area-divider"></div>
          <p className="law-area-description">
            {t('pages.immigration.content.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="civil-services-section">
        <div className="container">
          <h2 className="services-title">{t('pages.immigration.content.servicesTitle')}</h2>
          <div className="services-grid">
            {t('pages.immigration.content.services', { returnObjects: true }).map((service, index) => (
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

export default ImmigrationPage; 