// Route constants for the application
export const ROUTES = {
  HOME: '/',
  FAMILY: '/family',
  IMMIGRATION: '/immigration',
  CRIMINAL: '/criminal',
  CIVIL: '/civil',
  CORPORATE: '/corporate',
  TRANSLATIONS: '/translations',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  GOLDEN_VISA: '/golden-visa',
  DIVORCE: '/divorce',
  BLOG: '/blog',
  IMPRESSUM: '/impressum'
};

// Route labels for navigation
export const ROUTE_LABELS = {
  [ROUTES.HOME]: 'navigation.home',
  [ROUTES.FAMILY]: 'navigation.family',
  [ROUTES.IMMIGRATION]: 'navigation.immigration',
  [ROUTES.CRIMINAL]: 'navigation.criminal',
  [ROUTES.CIVIL]: 'navigation.civil',
  [ROUTES.CORPORATE]: 'navigation.corporate',
  [ROUTES.TRANSLATIONS]: 'navigation.translations',
  [ROUTES.TERMS]: 'breadcrumbs.terms',
  [ROUTES.PRIVACY]: 'breadcrumbs.privacy',
  [ROUTES.GOLDEN_VISA]: 'Golden Visa',
  [ROUTES.DIVORCE]: 'Διαζύγια',
  [ROUTES.BLOG]: 'Blog',
  [ROUTES.IMPRESSUM]: 'navigation.impressum'
};

// Route metadata for SEO
export const ROUTE_META = {
  [ROUTES.HOME]: {
    seoKey: 'seo.home',
    canonical: 'https://milawyer.gr/'
  },
  [ROUTES.FAMILY]: {
    seoKey: 'seo.family',
    canonical: 'https://milawyer.gr/family'
  },
  [ROUTES.IMMIGRATION]: {
    seoKey: 'seo.immigration',
    canonical: 'https://milawyer.gr/immigration'
  },
  [ROUTES.CRIMINAL]: {
    seoKey: 'seo.criminal',
    canonical: 'https://milawyer.gr/criminal'
  },
  [ROUTES.CIVIL]: {
    seoKey: 'seo.civil',
    canonical: 'https://milawyer.gr/civil'
  },
  [ROUTES.CORPORATE]: {
    seoKey: 'seo.corporate',
    canonical: 'https://milawyer.gr/corporate'
  },
  [ROUTES.TRANSLATIONS]: {
    seoKey: 'seo.translations',
    canonical: 'https://milawyer.gr/translations'
  },
  [ROUTES.TERMS]: {
    seoKey: 'seo.terms',
    canonical: 'https://milawyer.gr/terms'
  },
  [ROUTES.PRIVACY]: {
    seoKey: 'seo.privacy',
    canonical: 'https://milawyer.gr/privacy'
  },
  [ROUTES.IMPRESSUM]: {
    seoKey: 'seo.impressum',
    canonical: 'https://milawyer.gr/impressum'
  }
};
