import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

function MultilingualBlogPage() {
  const { i18n } = useTranslation();

  const getBlogPosts = (language) => {
    const posts = {
      el: [
        {
          id: 1,
          title: "Golden Visa Ελλάδα 2024: Ολοκληρωμένος Οδηγός",
          excerpt: "Όλα όσα χρειάζεται να γνωρίζετε για το Golden Visa στην Ελλάδα, τις απαιτήσεις και τη διαδικασία.",
          date: "2024-12-19",
          category: "Μεταναστευτικό Δίκαιο",
          slug: "golden-visa-odigos-2024"
        },
        {
          id: 2,
          title: "Διαζύγια στην Ελλάδα: Τι Πρέπει να Ξέρετε",
          excerpt: "Ολοκληρωμένος οδηγός για τη διαδικασία διαζυγίου, τα έξοδα και τις νομικές υποχρεώσεις.",
          date: "2024-12-18",
          category: "Οικογενειακό Δίκαιο",
          slug: "diazygia-ellada-odigos"
        }
      ],
      ru: [
        {
          id: 1,
          title: "Золотая Виза Греция 2024: Полное Руководство",
          excerpt: "Все, что вам нужно знать о Золотой визе в Греции, требованиях и процедуре.",
          date: "2024-12-19",
          category: "Иммиграционное Право",
          slug: "zolotaya-viza-gretsiya-2024"
        },
        {
          id: 2,
          title: "Разводы в Греции: Что Нужно Знать",
          excerpt: "Полное руководство по процедуре развода, расходам и юридическим обязательствам.",
          date: "2024-12-18",
          category: "Семейное Право",
          slug: "razvody-gretsiya-rukovodstvo"
        }
      ],
      en: [
        {
          id: 1,
          title: "Golden Visa Greece 2024: Complete Guide",
          excerpt: "Everything you need to know about Golden Visa in Greece, requirements and procedure.",
          date: "2024-12-19",
          category: "Immigration Law",
          slug: "golden-visa-greece-2024-guide"
        },
        {
          id: 2,
          title: "Divorces in Greece: What You Need to Know",
          excerpt: "Complete guide to divorce procedure, costs and legal obligations.",
          date: "2024-12-18",
          category: "Family Law",
          slug: "divorces-greece-guide"
        }
      ]
    };

    return posts[language] || posts.el;
  };

  const getSEOData = (language) => {
    const seoData = {
      el: {
        title: "Νομικό Blog | Δικηγόρος Μαρίνα Ιλιούσινα | Νομικές Συμβουλές",
        description: "Νομικό blog με συμβουλές και οδηγούς για Golden Visa, διαζύγια, μεταναστευτικό δίκαιο και άλλες νομικές υπηρεσίες από τη δικηγόρο Μαρίνα Ιλιούσινα.",
        keywords: "νομικό blog, νομικές συμβουλές, golden visa blog, διαζύγια blog, μεταναστευτικό δίκαιο blog, νομικές πληροφορίες, δικηγόρος συμβουλές"
      },
      ru: {
        title: "Юридический Блог | Адвокат Марина Ильюшина | Юридические Советы",
        description: "Юридический блог с советами и руководствами по Золотой визе, разводам, иммиграционному праву и другим юридическим услугам от адвоката Марины Ильюшиной.",
        keywords: "юридический блог, юридические советы, золотая виза блог, разводы блог, иммиграционное право блог, юридическая информация, советы адвоката"
      },
      en: {
        title: "Legal Blog | Lawyer Marina Ilyushina | Legal Advice",
        description: "Legal blog with advice and guides on Golden Visa, divorces, immigration law and other legal services from lawyer Marina Ilyushina.",
        keywords: "legal blog, legal advice, golden visa blog, divorce blog, immigration law blog, legal information, lawyer advice"
      }
    };

    return seoData[language] || seoData.el;
  };

  const currentLanguage = i18n.language;
  const blogPosts = getBlogPosts(currentLanguage);
  const seoData = getSEOData(currentLanguage);

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical="https://milawyer.gr/blog"
        hreflang={{
          "el": "https://milawyer.gr/blog",
          "en": "https://milawyer.gr/blog",
          "ru": "https://milawyer.gr/blog",
          "x-default": "https://milawyer.gr/blog"
        }}
      />

      {/* Hero Section */}
      <section className="law-area-section">
        <div className="law-area-container">
          <h1 className="law-area-title">
            {currentLanguage === 'el' && 'Νομικό Blog'}
            {currentLanguage === 'ru' && 'Юридический Блог'}
            {currentLanguage === 'en' && 'Legal Blog'}
          </h1>
          <div className="law-area-divider"></div>
          <p className="law-area-description">
            {currentLanguage === 'el' && 'Νομικές συμβουλές και οδηγοί από τη δικηγόρο Μαρίνα Ιλιούσινα. Μάθετε περισσότερα για τα δικαιώματά σας και τις νομικές διαδικασίες.'}
            {currentLanguage === 'ru' && 'Юридические советы и руководства от адвоката Марины Ильюшиной. Узнайте больше о ваших правах и юридических процедурах.'}
            {currentLanguage === 'en' && 'Legal advice and guides from lawyer Marina Ilyushina. Learn more about your rights and legal procedures.'}
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post">
                <div className="blog-post-header">
                  <span className="blog-category">{post.category}</span>
                  <time className="blog-date">{post.date}</time>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="blog-read-more">
                  {currentLanguage === 'el' && 'Διαβάστε Περισσότερα →'}
                  {currentLanguage === 'ru' && 'Читать Далее →'}
                  {currentLanguage === 'en' && 'Read More →'}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>
            {currentLanguage === 'el' && 'Ενημερωθείτε για Νέες Συμβουλές'}
            {currentLanguage === 'ru' && 'Подпишитесь на Новые Советы'}
            {currentLanguage === 'en' && 'Stay Updated with New Advice'}
          </h2>
          <p>
            {currentLanguage === 'el' && 'Λάβετε τις τελευταίες νομικές συμβουλές και ενημερώσεις'}
            {currentLanguage === 'ru' && 'Получайте последние юридические советы и обновления'}
            {currentLanguage === 'en' && 'Get the latest legal advice and updates'}
          </p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder={
                currentLanguage === 'el' ? 'Το email σας' :
                currentLanguage === 'ru' ? 'Ваш email' :
                'Your email'
              } 
            />
            <button type="submit">
              {currentLanguage === 'el' && 'Εγγραφή'}
              {currentLanguage === 'ru' && 'Подписаться'}
              {currentLanguage === 'en' && 'Subscribe'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MultilingualBlogPage;
