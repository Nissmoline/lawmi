import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function GoldenVisaPage() {
  const { t, i18n } = useTranslation();

  const faqItems = useMemo(() => {
    const items = t('pages.goldenVisa.faq.items', { returnObjects: true, lng: i18n.language });
    return Array.isArray(items) ? items : [];
  }, [t, i18n.language]);

  return (
    <>
      <SEOHead 
        title={t('seo.goldenVisa.title')}
        description={t('seo.goldenVisa.description')}
        keywords={t('seo.goldenVisa.keywords')}
        canonical="https://milawyer.gr/golden-visa"
        faqItems={faqItems}
        hreflang={{
          "el": "https://milawyer.gr/golden-visa",
          "en": "https://milawyer.gr/golden-visa",
          "ru": "https://milawyer.gr/golden-visa",
          "x-default": "https://milawyer.gr/golden-visa"
        }}
      />

      {/* Hero Section */}
      <section className="law-area-section">
        <div className="law-area-container">
          <h1 className="law-area-title">{t('pages.goldenVisa.hero.title')}</h1>
          <div className="law-area-divider"></div>
          <p className="law-area-description">{t('pages.goldenVisa.hero.description')}</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="civil-services-section">
        <div className="container">
          <h2 className="services-title">{t('pages.goldenVisa.services.title')}</h2>
          <div className="services-grid">
            {t('pages.goldenVisa.services.items', { returnObjects: true }).map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>{t('pages.goldenVisa.faq.title')}</h2>
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('pages.goldenVisa.cta.title')}</h2>
          <p>{t('pages.goldenVisa.cta.description')}</p>
          <a href="tel:+306983363775" className="cta-button">{t('pages.goldenVisa.cta.button')}</a>
        </div>
      </section>
    </>
  );
}

export default GoldenVisaPage;
