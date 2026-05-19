import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

const REGISTRY_URL = 'https://dspeiraia.gr/member_list.asp?cn=921&sl=%CE%99&pg=1';
const CERTIFICATE_URL = '/TELEIO-A-2019-ME-KAD.pdf';

const resourceCopy = {
  el: {
    ariaLabel: 'Επίσημα δικαιολογητικά',
    registryKicker: 'Δικηγορικός Σύλλογος',
    registryTitle: 'Καταχώριση στον Δικηγορικό Σύλλογο Πειραιά',
    registryDescription: 'Επίσημος σύνδεσμος στο μητρώο dspeiraia.gr',
    pdfKicker: 'Επίσημο έγγραφο πανεπιστημίου',
    pdfTitle: 'TELEIO-A-2019-ME-KAD.pdf',
    pdfDescription: 'Επιβεβαίωση αποφοίτησης: σελίδα 13, αριθμός 967'
  },
  en: {
    ariaLabel: 'Official supporting documents',
    registryKicker: 'Bar association',
    registryTitle: 'Piraeus Bar Association record',
    registryDescription: 'Official registry link on dspeiraia.gr',
    pdfKicker: 'Official university document',
    pdfTitle: 'TELEIO-A-2019-ME-KAD.pdf',
    pdfDescription: 'Graduation confirmation: page 13, number 967'
  },
  ru: {
    ariaLabel: 'Официальные подтверждающие документы',
    registryKicker: 'Коллегия адвокатов',
    registryTitle: 'Запись в Коллегии адвокатов Пирея',
    registryDescription: 'Официальная ссылка на реестр dspeiraia.gr',
    pdfKicker: 'Официальный документ университета',
    pdfTitle: 'TELEIO-A-2019-ME-KAD.pdf',
    pdfDescription: 'Подтверждение выпуска: страница 13, номер 967'
  }
};

const getResourceCopy = (language) => {
  const languageCode = language?.split('-')[0];
  return resourceCopy[languageCode] || resourceCopy.en;
};

function ImpressumPage() {
  const { t, i18n } = useTranslation();
  const sections = t('pages.impressum.sections', { returnObjects: true });
  const resources = getResourceCopy(i18n.language);

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

            <div className="official-resources" aria-label={resources.ariaLabel}>
              <a
                className="official-resource-link official-resource-link-primary"
                href={REGISTRY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="official-resource-kicker">{resources.registryKicker}</span>
                <span className="official-resource-title">{resources.registryTitle}</span>
                <span className="official-resource-description">
                  {resources.registryDescription}
                </span>
              </a>

              <a
                className="official-resource-link"
                href={CERTIFICATE_URL}
                download="TELEIO-A-2019-ME-KAD.pdf"
              >
                <span className="official-resource-kicker">{resources.pdfKicker}</span>
                <span className="official-resource-title">{resources.pdfTitle}</span>
                <span className="official-resource-description">
                  {resources.pdfDescription}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ImpressumPage;
