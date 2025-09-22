import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('pages.privacy.title')}
        description="Политика конфиденциальности адвоката Марины Илюшиной"
        keywords="политика конфиденциальности, защита данных, GDPR"
        canonical="https://milawyer.gr/privacy"
        hreflang={{
          "el": "https://milawyer.gr/privacy",
          "en": "https://milawyer.gr/privacy",
          "ru": "https://milawyer.gr/privacy",
          "x-default": "https://milawyer.gr/privacy"
        }}
      />

      {/* Privacy Section */}
      <section className="privacy-section">
        <div className="privacy-container">
          <h1 className="privacy-title">{t('pages.privacy.title')}</h1>
          <div className="privacy-divider"></div>
          <p className="privacy-date">{t('pages.privacy.lastUpdated')}</p>
          
          <div className="privacy-content">
            <h2>{t('pages.privacy.sections.introduction.title')}</h2>
            <p>{t('pages.privacy.sections.introduction.content')}</p>

            <h2>{t('pages.privacy.sections.dataCollection.title')}</h2>
            <p>{t('pages.privacy.sections.dataCollection.content')}</p>
            <ul>
              {t('pages.privacy.sections.dataCollection.list', { returnObjects: true }).map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
            <p>{t('pages.privacy.sections.dataCollection.note')}</p>

            <h2>{t('pages.privacy.sections.dataCollectionMethods.title')}</h2>
            <p>{t('pages.privacy.sections.dataCollectionMethods.content')}</p>
            <ul>
              {t('pages.privacy.sections.dataCollectionMethods.list', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{t('pages.privacy.sections.dataCollectionMethods.additional')}</p>

            <h2>{t('pages.privacy.sections.legalBasis.title')}</h2>
            <p>{t('pages.privacy.sections.legalBasis.content')}</p>
            <ul>
              {t('pages.privacy.sections.legalBasis.list', { returnObjects: true }).map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>

            <h2>{t('pages.privacy.sections.dataUsage.title')}</h2>
            <p>{t('pages.privacy.sections.dataUsage.content')}</p>
            <ul>
              {t('pages.privacy.sections.dataUsage.list', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{t('pages.privacy.sections.dataUsage.note')}</p>

            <h2>{t('pages.privacy.sections.dataSharing.title')}</h2>
            <p>{t('pages.privacy.sections.dataSharing.content')}</p>
            <p>{t('pages.privacy.sections.dataSharing.additional')}</p>

            <h2>{t('pages.privacy.sections.rights.title')}</h2>
            <p>{t('pages.privacy.sections.rights.content')}</p>
            <ul>
              {t('pages.privacy.sections.rights.list', { returnObjects: true }).map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
            <p>{t('pages.privacy.sections.rights.contact')}</p>

            <h2>{t('pages.privacy.sections.security.title')}</h2>
            <p>{t('pages.privacy.sections.security.content')}</p>
            <p>{t('pages.privacy.sections.security.additional')}</p>

            <h2>{t('pages.privacy.sections.retention.title')}</h2>
            <p>{t('pages.privacy.sections.retention.content')}</p>
            <ul>
              {t('pages.privacy.sections.retention.list', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>{t('pages.privacy.sections.cookies.title')}</h2>
            <p>{t('pages.privacy.sections.cookies.content')}</p>

            <h2>{t('pages.privacy.sections.changes.title')}</h2>
            <p>{t('pages.privacy.sections.changes.content')}</p>

            <h2>{t('pages.privacy.sections.contact.title')}</h2>
            <p>{t('pages.privacy.sections.contact.content')}</p>
            <ul>
              {t('pages.privacy.sections.contact.info', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPage; 
