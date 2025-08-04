import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DynamicSEO = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const currentLanguage = i18n.language;
    const pathname = location.pathname;

    // SEO keywords for each language and page
    const seoKeywords = {
      el: {
        home: "δικηγόρος αθήνα, δικηγόρος ελλάδα, δικηγόρος να μιλάει ρωσικά, δικηγόρος 24/7, δικηγόρος ποινικό δίκαιο, δικηγόρος αστικό δίκαιο, δικηγόρος άδεια παραμονής, μεταναστευτικό δίκαιο, αγορά σπιτιού, συμβόλαια, νομικές υπηρεσίες",
        family: "δικηγόρος οικογενειακό δίκαιο, διαζύγια αθήνα, επιμέλεια παιδιών, διατροφές, διαθήκες, κληρονομιά, οικογενειακό δίκαιο",
        immigration: "δικηγόρος μεταναστευτικό δίκαιο, άδεια παραμονής, golden visa, ιθαγένεια, μεταναστευτικό δίκαιο, δικηγόρος άδεια παραμονής",
        criminal: "δικηγόρος ποινικό δίκαιο, ποινική υπεράσπιση, πλημμελήματα, κακουργήματα, ποινικό δίκαιο",
        civil: "δικηγόρος αστικό δίκαιο, αποζημιώσεις, συμβόλαια, αδικοπραξίες, αγορά σπιτιού, αστικό δίκαιο",
        corporate: "δικηγόρος εταιρικό δίκαιο, ίδρυση εταιρειών, εμπορικές συμβάσεις, εταιρικό δίκαιο, συμβόλαια",
        translations: "μεταφράσεις αθήνα, επικυρώσεις, επίσημες μεταφράσεις, νομικές μεταφράσεις"
      },
      ru: {
        home: "адвокат в афинах, адвокат в греции, адвокат говорящий по-русски, адвокат 24/7, адвокат по уголовному праву, адвокат по гражданскому праву, адвокат по вопросам вида на жительство, иммиграционное право, покупка недвижимости дома, контракты договоры, юридические услуги",
        family: "адвокат семейное право, разводы афины, опека детей, алименты, завещания, наследство, семейное право",
        immigration: "адвокат иммиграционное право, вид на жительство, golden visa, гражданство, иммиграционное право, адвокат вид на жительство",
        criminal: "адвокат уголовное право, уголовная защита, проступки, преступления, уголовное право",
        civil: "адвокат гражданское право, компенсации, контракты, деликты, покупка дома, гражданское право",
        corporate: "адвокат корпоративное право, регистрация компаний, коммерческие контракты, корпоративное право, контракты",
        translations: "переводы афины, заверения, официальные переводы, юридические переводы"
      },
      en: {
        home: "lawyer in athens, lawyer in greece, russian-speaking lawyer, lawyer 24/7, criminal law lawyer, civil law lawyer, residence permit lawyer, immigration law, house purchase, contracts, legal services",
        family: "family law lawyer, divorces athens, child custody, alimony, wills, inheritance, family law",
        immigration: "immigration law lawyer, residence permit, golden visa, citizenship, immigration law, residence permit lawyer",
        criminal: "criminal law lawyer, criminal defense, misdemeanors, felonies, criminal law",
        civil: "civil law lawyer, compensation, contracts, torts, house purchase, civil law",
        corporate: "corporate law lawyer, company formation, commercial contracts, corporate law, contracts",
        translations: "translations athens, certifications, official translations, legal translations"
      }
    };

    // Get current page type
    let pageType = 'home';
    if (pathname === '/family') pageType = 'family';
    else if (pathname === '/immigration') pageType = 'immigration';
    else if (pathname === '/criminal') pageType = 'criminal';
    else if (pathname === '/civil') pageType = 'civil';
    else if (pathname === '/corporate') pageType = 'corporate';
    else if (pathname === '/translations') pageType = 'translations';

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && seoKeywords[currentLanguage] && seoKeywords[currentLanguage][pageType]) {
      metaKeywords.setAttribute('content', seoKeywords[currentLanguage][pageType]);
    }

    // Update meta description with language-specific content
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const descriptions = {
        el: {
          home: "Δικηγόρος Μαρίνα Ιλιούσινα στην Αθήνα. Εξειδικευμένες νομικές υπηρεσίες σε οικογενειακό δίκαιο, μεταναστευτικό δίκαιο, ποινικό δίκαιο, αστικό δίκαιο και εταιρικό δίκαιο. Δικηγόρος να μιλάει ρωσικά. Επικοινωνήστε για δωρεάν πρώτη συμβουλή.",
          family: "Δικηγόρος οικογενειακό δίκαιο στην Αθήνα. Εξειδικευμένες υπηρεσίες σε διαζύγια, επιμέλεια, διατροφές, διαθήκες και κληρονομιά. Επικοινωνήστε για δωρεάν πρώτη συμβουλή.",
          immigration: "Δικηγόρος μεταναστευτικό δίκαιο στην Αθήνα. Εξειδικευμένες υπηρεσίες σε άδειες διαμονής, Golden Visa, ιθαγένεια και μεταναστευτικές διαδικασίες. Επικοινωνήστε για δωρεάν πρώτη συμβουλή.",
          criminal: "Δικηγόρος ποινικό δίκαιο στην Αθήνα. Εξειδικευμένες υπηρεσίες σε ποινική υπεράσπιση, πλημμελήματα και κακουργήματα. Επικοινωνήστε για δωρεάν πρώτη συμβουλή.",
          civil: "Δικηγόρος αστικό δίκαιο στην Αθήνα. Εξειδικευμένες υπηρεσίες σε αποζημιώσεις, συμβόλαια, αδικοπραξίες και αγορά σπιτιού. Επικοινωνήστε για δωρεάν πρώτη συμβουλή.",
          corporate: "Δικηγόρος εταιρικό δίκαιο στην Αθήνα. Εξειδικευμένες υπηρεσίες σε ίδρυση εταιρειών, εμπορικές συμβάσεις και εταιρικό δίκαιο. Επικοινωνήστε για δωρεάν πρώτη συμβουλή.",
          translations: "Επίσημες μεταφράσεις νομικών εγγράφων στην Αθήνα. Εξειδικευμένες υπηρεσίες μεταφράσεων και επικυρώσεων. Επικοινωνήστε για δωρεάν πρώτη συμβουλή."
        },
        ru: {
          home: "Адвокат Марина Ильюшина в Афинах. Специализированные юридические услуги в области семейного права, иммиграционного права, уголовного права, гражданского права и корпоративного права. Адвокат, говорящий по-русски. Свяжитесь для бесплатной первой консультации.",
          family: "Адвокат семейное право в Афинах. Специализированные услуги в области разводов, опеки, алиментов, завещаний и наследства. Свяжитесь для бесплатной первой консультации.",
          immigration: "Адвокат иммиграционное право в Афинах. Специализированные услуги в области видов на жительство, Golden Visa, гражданства и иммиграционных процедур. Свяжитесь для бесплатной первой консультации.",
          criminal: "Адвокат уголовное право в Афинах. Специализированные услуги в области уголовной защиты, проступков и преступлений. Свяжитесь для бесплатной первой консультации.",
          civil: "Адвокат гражданское право в Афинах. Специализированные услуги в области компенсаций, контрактов, деликтов и покупки недвижимости. Свяжитесь для бесплатной первой консультации.",
          corporate: "Адвокат корпоративное право в Афинах. Специализированные услуги в области регистрации компаний, коммерческих контрактов и корпоративного права. Свяжитесь для бесплатной первой консультации.",
          translations: "Официальные переводы юридических документов в Афинах. Специализированные услуги переводов и заверений. Свяжитесь для бесплатной первой консультации."
        },
        en: {
          home: "Lawyer Marina Ilyushina in Athens. Specialized legal services in family law, immigration law, criminal law, civil law and corporate law. Russian-speaking lawyer. Contact for free first consultation.",
          family: "Family law lawyer in Athens. Specialized services in divorces, custody, alimony, wills and inheritance. Contact for free first consultation.",
          immigration: "Immigration law lawyer in Athens. Specialized services in residence permits, Golden Visa, citizenship and immigration procedures. Contact for free first consultation.",
          criminal: "Criminal law lawyer in Athens. Specialized services in criminal defense, misdemeanors and felonies. Contact for free first consultation.",
          civil: "Civil law lawyer in Athens. Specialized services in compensation, contracts, torts and house purchase. Contact for free first consultation.",
          corporate: "Corporate law lawyer in Athens. Specialized services in company formation, commercial contracts and corporate law. Contact for free first consultation.",
          translations: "Official translations of legal documents in Athens. Specialized translation and certification services. Contact for free first consultation."
        }
      };

      if (descriptions[currentLanguage] && descriptions[currentLanguage][pageType]) {
        metaDescription.setAttribute('content', descriptions[currentLanguage][pageType]);
      }
    }

  }, [location.pathname, i18n.language]);

  return null;
};

export default DynamicSEO; 