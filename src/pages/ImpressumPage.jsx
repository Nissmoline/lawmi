import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function ImpressumPage() {
  const { t } = useTranslation();
  const sections = t('pages.impressum.sections', { returnObjects: true });

  return (
    <>
      <SEOHead
        title={t('seo.impressum.title')}
        description={t('seo.impressum.description')}
        keywords={t('seo.impressum.keywords')}
        canonical="https://milawyer.gr/impressum"
        hreflang={{
          el: 'https://milawyer.gr/impressum',
          en: 'https://milawyer.gr/impressum',
          ru: 'https://milawyer.gr/impressum',
          'x-default': 'https://milawyer.gr/impressum'
        }}
      />

      <section className="terms-section">
        <div className="terms-container">
          <h1 className="terms-title">{t('pages.impressum.title')}</h1>
          <div className="terms-divider"></div>
          <p className="terms-date">{t('pages.impressum.lastUpdated')}</p>

          <div className="terms-content">
            {Object.keys(sections).map((key) => {
              const section = sections[key];
              return (
                <div key={key}>
                  <h2>{section.title}</h2>
                  {section.content && (
                    <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
                  )}
                  {Array.isArray(section.info) && (
                    <ul>
                      {section.info.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ImpressumPage;
