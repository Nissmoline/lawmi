import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
        canonical="https://milawyer.gr/"
        hreflang={{
          "el": "https://milawyer.gr/",
          "en": "https://milawyer.gr/",
          "ru": "https://milawyer.gr/",
          "x-default": "https://milawyer.gr/"
        }}
      />

      {/* Hero Section */}
      <section id="hero">
        <div className="parallax-content">
          <h1>{t('homepage.hero.title')}</h1>
          <p>{t('homepage.hero.subtitle')}</p>
          <a href="tel:+306983363775" className="cta-button">{t('homepage.hero.cta')}</a>
        </div>
      </section>

      {/* Services/Values Section */}
      <section id="services">
        <div className="container">
          <h2 className="visually-hidden">{t('homepage.services.title')}</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/Clip path group.png" alt={t('homepage.services.integrity.title')} />
              </div>
              <h3>{t('homepage.services.integrity.title')}</h3>
              <p>{t('homepage.services.integrity.description')}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/Group.png" alt={t('homepage.services.expertise.title')} />
              </div>
              <h3>{t('homepage.services.expertise.title')}</h3>
              <p>{t('homepage.services.expertise.description')}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/Group1.png" alt={t('homepage.services.commitment.title')} />
              </div>
              <h3>{t('homepage.services.commitment.title')}</h3>
              <p>{t('homepage.services.commitment.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('homepage.about.title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('homepage.about.description') }}></p>
              
              <h3>{t('homepage.about.workMethod.title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('homepage.about.workMethod.description') }}></p>
              
              <p dangerouslySetInnerHTML={{ __html: t('homepage.about.workMethod.cta') }}></p>
            </div>
            <div className="about-image">
              <img src="/images/Ilyushina.jpg" alt="Marina Ilyushina - Δικηγόρος" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section id="areas">
        <div className="container">
          <h2>{t('homepage.areas.title')}</h2>
          <div className="areas-grid">
            <Link to="/family">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>{t('homepage.areas.family.title')}</h3>
                  <div className="area-icon">
                    <img src="/images/famaly.png" alt={t('homepage.areas.family.title')} />
                  </div>
                </div>
                <div className="area-card-bottom">
                  <p>{t('homepage.areas.family.description')}</p>
                </div>
              </div>
            </Link>
            <Link to="/immigration">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>{t('homepage.areas.immigration.title')}</h3>
                  <div className="area-icon">
                    <img src="/images/immigration.png" alt={t('homepage.areas.immigration.title')} />
                  </div>
                </div>
                <div className="area-card-bottom">
                  <p>{t('homepage.areas.immigration.description')}</p>
                </div>
              </div>
            </Link>
            <Link to="/criminal">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>{t('homepage.areas.criminal.title')}</h3>
                  <div className="area-icon">
                    <img src="/images/criminal.png" alt={t('homepage.areas.criminal.title')} />
                  </div>
                </div>
                <div className="area-card-bottom">
                  <p>{t('homepage.areas.criminal.description')}</p>
                </div>
              </div>
            </Link>
            <Link to="/civil">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>{t('homepage.areas.civil.title')}</h3>
                  <div className="area-icon">
                    <img src="/images/realestate.png" alt={t('homepage.areas.civil.title')} />
                  </div>
                </div>
                <div className="area-card-bottom">
                  <p>{t('homepage.areas.civil.description')}</p>
                </div>
              </div>
            </Link>
            <Link to="/corporate">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>{t('homepage.areas.corporate.title')}</h3>
                  <div className="area-icon">
                    <img src="/images/corporate.png" alt={t('homepage.areas.corporate.title')} />
                  </div>
                </div>
                <div className="area-card-bottom">
                  <p>{t('homepage.areas.corporate.description')}</p>
                </div>
              </div>
            </Link>
            <Link to="/translations">
              <div className="area-card">
                <div className="area-card-top">
                  <h3>{t('homepage.areas.translations.title')}</h3>
                  <div className="area-icon">
                    <img src="/images/translate.png" alt={t('homepage.areas.translations.title')} />
                  </div>
                </div>
                <div className="area-card-bottom">
                  <p>{t('homepage.areas.translations.description')}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact">
        <div className="container">
          <h2>{t('homepage.contact.title')}</h2>
          <p>{t('homepage.contact.description')}</p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>{t('homepage.contact.phone')}:</strong>
              <a href="tel:+306983363775">+30 698 336 3775</a>
            </div>
            <div className="contact-item">
              <strong>{t('homepage.contact.email')}:</strong>
              <a href="mailto:info@milawyer.gr">info@milawyer.gr</a>
            </div>
            <div className="contact-item">
              <strong>{t('homepage.contact.address')}:</strong>
              <span>{t('homepage.contact.addressValue')}</span>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default HomePage; 