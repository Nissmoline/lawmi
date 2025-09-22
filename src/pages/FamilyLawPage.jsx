import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function FamilyLawPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('seo.family.title')}
        description={t('seo.family.description')}
        keywords={t('seo.family.keywords')}
        canonical="https://milawyer.gr/family"
        hreflang={{
          "el": "https://milawyer.gr/family",
          "en": "https://milawyer.gr/family",
          "ru": "https://milawyer.gr/family",
          "x-default": "https://milawyer.gr/family"
        }}
      />

      {/* Law Area Section */}
      <section className="law-area-section">
        <div className="law-area-container">
          <h1 className="law-area-title">{t('pages.family.title')}</h1>
          <div className="law-area-divider"></div>
          <p className="law-area-description">
            {t('pages.family.content.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="civil-services-section">
        <div className="container">
          <h2 className="services-title">{t('pages.family.content.servicesTitle')}</h2>
          <div className="services-grid">
            {t('pages.family.content.services', { returnObjects: true }).map((service, index) => (
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

export default FamilyLawPage; 