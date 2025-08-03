import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function TermsPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('pages.terms.title')}
        description="Условия использования веб-сайта адвоката Марины Илюшиной"
        keywords="условия использования, правовая информация"
        canonical="https://milawyer.gr/terms"
        hreflang={{
          "el": "https://milawyer.gr/terms",
          "en": "https://milawyer.gr/en/terms",
          "ru": "https://milawyer.gr/ru/terms",
          "x-default": "https://milawyer.gr/terms"
        }}
      />

      {/* Terms Section */}
      <section className="terms-section">
        <div className="terms-container">
          <h1 className="terms-title">{t('pages.terms.title')}</h1>
          <div className="terms-divider"></div>
          <p className="terms-date">{t('pages.terms.lastUpdated')}</p>
          
          <div className="terms-content">
            <h2>{t('pages.terms.sections.introduction.title')}</h2>
            <p>{t('pages.terms.sections.introduction.content')}</p>

            <h2>{t('pages.terms.sections.services.title')}</h2>
            <p>{t('pages.terms.sections.services.content')}</p>
            <p>{t('pages.terms.sections.services.disclaimer')}</p>

            <h2>{t('pages.terms.sections.intellectualProperty.title')}</h2>
            <p>{t('pages.terms.sections.intellectualProperty.content')}</p>

            <h2>{t('pages.terms.sections.use.title')}</h2>
            <p>{t('pages.terms.sections.use.content')}</p>
            <ul>
              {t('pages.terms.sections.use.list', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>{t('pages.terms.sections.privacy.title')}</h2>
            <p>{t('pages.terms.sections.privacy.content')}</p>

            <h2>{t('pages.terms.sections.limitation.title')}</h2>
            <p>{t('pages.terms.sections.limitation.content')}</p>

            <h2>{t('pages.terms.sections.changes.title')}</h2>
            <p>{t('pages.terms.sections.changes.content')}</p>

            <h2>{t('pages.terms.sections.contact.title')}</h2>
            <p>{t('pages.terms.sections.contact.content')}</p>
            <ul>
              {t('pages.terms.sections.contact.info', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsPage; 