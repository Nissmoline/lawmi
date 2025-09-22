// SEO constants for the application
export const SEO_DEFAULTS = {
  SITE_URL: 'https://milawyer.gr',
  SITE_NAME: 'Marina Ilyushina Law Office',
  SITE_DESCRIPTION: 'Δικηγόρος Μαρίνα Ιλιούσινα στην Αθήνα. Εξειδικευμένες νομικές υπηρεσίες σε οικογενειακό δίκαιο, μεταναστευτικό δίκαιο, ποινικό δίκαιο, αστικό δίκαιο και εταιρικό δίκαιο.',
  DEFAULT_IMAGE: 'https://milawyer.gr/images/Ilyushina.jpg',
  LOGO_URL: 'https://milawyer.gr/favicon.ico'
};

// Supported languages
export const SUPPORTED_LANGUAGES = ['el', 'en', 'ru'];

// Default language
export const DEFAULT_LANGUAGE = 'en';

// Hreflang URLs for each route
export const HREFLANG_URLS = {
  [SEO_DEFAULTS.SITE_URL]: {
    el: 'https://milawyer.gr/',
    en: 'https://milawyer.gr/',
    ru: 'https://milawyer.gr/',
    'x-default': 'https://milawyer.gr/'
  },
  '/family': {
    el: 'https://milawyer.gr/family',
    en: 'https://milawyer.gr/family',
    ru: 'https://milawyer.gr/family',
    'x-default': 'https://milawyer.gr/family'
  },
  '/immigration': {
    el: 'https://milawyer.gr/immigration',
    en: 'https://milawyer.gr/immigration',
    ru: 'https://milawyer.gr/immigration',
    'x-default': 'https://milawyer.gr/immigration'
  },
  '/criminal': {
    el: 'https://milawyer.gr/criminal',
    en: 'https://milawyer.gr/criminal',
    ru: 'https://milawyer.gr/criminal',
    'x-default': 'https://milawyer.gr/criminal'
  },
  '/civil': {
    el: 'https://milawyer.gr/civil',
    en: 'https://milawyer.gr/civil',
    ru: 'https://milawyer.gr/civil',
    'x-default': 'https://milawyer.gr/civil'
  },
  '/corporate': {
    el: 'https://milawyer.gr/corporate',
    en: 'https://milawyer.gr/corporate',
    ru: 'https://milawyer.gr/corporate',
    'x-default': 'https://milawyer.gr/corporate'
  },
  '/translations': {
    el: 'https://milawyer.gr/translations',
    en: 'https://milawyer.gr/translations',
    ru: 'https://milawyer.gr/translations',
    'x-default': 'https://milawyer.gr/translations'
  },
  '/terms': {
    el: 'https://milawyer.gr/terms',
    en: 'https://milawyer.gr/terms',
    ru: 'https://milawyer.gr/terms',
    'x-default': 'https://milawyer.gr/terms'
  },
  '/privacy': {
    el: 'https://milawyer.gr/privacy',
    en: 'https://milawyer.gr/privacy',
    ru: 'https://milawyer.gr/privacy',
    'x-default': 'https://milawyer.gr/privacy'
  },
  '/impressum': {
    el: 'https://milawyer.gr/impressum',
    en: 'https://milawyer.gr/impressum',
    ru: 'https://milawyer.gr/impressum',
    'x-default': 'https://milawyer.gr/impressum'
  }
};

// Business information for structured data
export const BUSINESS_INFO = {
  name: 'Marina Ilyushina Law Office',
  alternateName: 'Μαρίνα Ιλιούσινα - Δικηγόρος',
  description: 'Δικηγόρος Μαρίνα Ιλιούσινα στην Αθήνα. Εξειδικευμένες νομικές υπηρεσίες σε οικογενειακό δίκαιο, μεταναστευτικό δίκαιο, ποινικό δίκαιο, αστικό δίκαιο και εταιρικό δίκαιο.',
  logo: 'https://milawyer.gr/favicon.ico',
  image: 'https://milawyer.gr/images/Ilyushina.jpg',
  address: {
    streetAddress: 'Στουρνάρη 39',
    addressLocality: 'Αθήνα',
    postalCode: '106 82',
    addressCountry: 'GR',
    addressRegion: 'Αττική'
  },
  contactPoint: {
    telephone: '+30-698-336-3775',
    contactType: 'customer service',
    availableLanguage: ['Greek', 'Russian', 'English'],
    areaServed: 'GR',
    email: 'ilyushina.law@gmail.com'
  },
  areaServed: {
    name: 'Greece'
  },
  geo: {
    latitude: 37.9849,
    longitude: 23.7312
  },
  sameAs: [
    'https://www.facebook.com/aquamarinegr/',
    'https://www.instagram.com/aquamarinegr/',
    'https://t.me/aquamarineru',
    'https://maps.google.com/?q=Στουρνάρη+39,+Αθήνα+106+82'
  ],
  foundingDate: '2020',
  numberOfEmployees: '1',
  priceRange: '€€',
  openingHours: 'Mo-Fr 09:00-17:00',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  hasMap: 'https://maps.google.com/?q=Στουρνάρη+39,+Αθήνα+106+82'
};
