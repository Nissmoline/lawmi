import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function TranslationsPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('seo.translations.title')}
        description={t('seo.translations.description')}
        keywords={t('seo.translations.keywords')}
        canonical="https://milawyer.gr/translations"
        hreflang={{
          "el": "https://milawyer.gr/translations",
          "en": "https://milawyer.gr/translations",
          "ru": "https://milawyer.gr/translations",
          "x-default": "https://milawyer.gr/translations"
        }}
      />

      {/* Law Area Section */}
      <section className="law-area-section">
        <div className="law-area-container">
          <h1 className="law-area-title">{t('pages.translations.title')}</h1>
          <div className="law-area-divider"></div>
          <p className="law-area-description">
            {t('pages.translations.content.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="civil-services-section">
        <div className="container">
          <h2 className="services-title">{t('pages.translations.content.servicesTitle')}</h2>
          <div className="services-grid">
            {t('pages.translations.content.services', { returnObjects: true }).map((service, index) => (
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

export default TranslationsPage; 