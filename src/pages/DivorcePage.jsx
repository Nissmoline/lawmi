import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function DivorcePage() {
  const { t, i18n } = useTranslation();

  const faqItems = useMemo(() => {
    const items = t('pages.divorce.faq.items', { returnObjects: true, lng: i18n.language });
    return Array.isArray(items) ? items : [];
  }, [t, i18n.language]);

  return (
    <>
      <SEOHead 
        title={t('seo.divorce.title')}
        description={t('seo.divorce.description')}
        keywords={t('seo.divorce.keywords')}
        canonical="https://milawyer.gr/divorce"
        faqItems={faqItems}
        hreflang={{
          "el": "https://milawyer.gr/divorce",
          "en": "https://milawyer.gr/divorce",
          "ru": "https://milawyer.gr/divorce",
          "x-default": "https://milawyer.gr/divorce"
        }}
      />

      {/* Hero Section */}
      <section className="law-area-section">
        <div className="law-area-container">
          <h1 className="law-area-title">{t('pages.divorce.hero.title')}</h1>
          <div className="law-area-divider"></div>
          <p className="law-area-description">{t('pages.divorce.hero.description')}</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="civil-services-section">
        <div className="container">
          <h2 className="services-title">{t('pages.divorce.services.title')}</h2>
          <div className="services-grid">
            {t('pages.divorce.services.items', { returnObjects: true }).map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>{t('pages.divorce.process.title')}</h2>
          <div className="process-steps">
            {t('pages.divorce.process.steps', { returnObjects: true }).map((step, index) => (
              <div key={index} className="step">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>{t('pages.divorce.faq.title')}</h2>
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
          <h2>{t('pages.divorce.cta.title')}</h2>
          <p>{t('pages.divorce.cta.description')}</p>
          <a href="tel:+306983363775" className="cta-button">{t('pages.divorce.cta.button')}</a>
        </div>
      </section>
    </>
  );
}

export default DivorcePage;
