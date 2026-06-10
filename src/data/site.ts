export const site = {
  name: "MUSICARTES",
  legalName: "Sociedad de Artistas de la Música y Obras Audiovisuales",
  url: "https://musicartes.org",
  email: "info@musicartes.org",
  supportEmail: "asistencia@musicartes.org",
  phone: "+502 2316 8116",
  address: "21 Avenida B 0-10 zona 15 Vista Hermosa 2, Guatemala",
  hours: "lunes a viernes de 9:00am a 4:00pm"
};

export const nav = {
  es: [
    {
      label: "Socios",
      href: "/hazte-socio/",
      children: [
        { label: "Hazte socio", href: "/hazte-socio/" },
        { label: "Zona de socios", href: "/zona-de-socios/" },
        { label: "Obras no declaradas", href: "/obras-no-declaradas/" },
        { label: "Socios activos", href: "/socios-activos/" }
      ]
    },
    {
      label: "Conócenos",
      href: "/nosotros/",
      children: [
        { label: "Nosotros", href: "/nosotros/" },
        { label: "Socios honorarios", href: "/socios-honorarios/" },
        { label: "Preguntas frecuentes", href: "/preguntas-frecuentes-faq/" }
      ]
    },
    {
      label: "Gestión",
      href: "/recursos-legales/",
      children: [
        { label: "Recursos legales", href: "/recursos-legales/" },
        { label: "Reglamento distribución", href: "/reglamento-distribucion/" },
        { label: "Estados financieros", href: "/estados-financieros/" },
        { label: "Memoria de labores", href: "/memoria-de-labores/" },
        { label: "Estatutos", href: "/estatutos/" },
        { label: "Acuerdos internacionales", href: "/acuerdos-internacionales/" }
      ]
    },
    {
      label: "Recursos",
      href: "/blog/",
      children: [
        { label: "Blog", href: "/blog/" },
        { label: "Talleres", href: "/talleres/" },
        { label: "Prensa", href: "/prensa/" },
        { label: "Eventos", href: "/eventos/" }
      ]
    },
    { label: "Contacto", href: "/contacto/" }
  ],
  en: [
    { label: "About", href: "/en/about-us/" },
    { label: "Become a member", href: "/en/become-a-member/" },
    { label: "Legal resources", href: "/en/legal-resources/" },
    { label: "Transparency", href: "/en/financial-statements/" },
    { label: "News", href: "/en/news/" },
    { label: "Contact", href: "/en/contact/" }
  ]
};

export const pathPairs: Record<string, { es: string; en: string }> = {
  home: { es: "/", en: "/en/" },
  about: { es: "/nosotros/", en: "/en/about-us/" },
  member: { es: "/hazte-socio/", en: "/en/become-a-member/" },
  legal: { es: "/recursos-legales/", en: "/en/legal-resources/" },
  financial: { es: "/estados-financieros/", en: "/en/financial-statements/" },
  reports: { es: "/memoria-de-labores/", en: "/en/annual-reports/" },
  workshops: { es: "/talleres/", en: "/en/workshops/" },
  faq: { es: "/preguntas-frecuentes-faq/", en: "/en/faq/" },
  contact: { es: "/contacto/", en: "/en/contact/" },
  news: { es: "/noticias/", en: "/en/news/" },
  events: { es: "/eventos/", en: "/en/events/" },
  statutes: { es: "/estatutos/", en: "/en/statutes/" },
  active: { es: "/socios-activos/", en: "/en/active-members/" },
  agreements: { es: "/acuerdos-internacionales/", en: "/en/international-agreements/" },
  distribution: { es: "/reglamento-distribucion/", en: "/en/distribution-regulations/" },
  press: { es: "/prensa/", en: "/en/press/" }
};
