/**
 * SEO, Open Graph, гео-теги и ключевые слова для t-auto.online
 */

export const SITE_URL = "https://www.t-auto.online"

/** Варианты названия бренда для поиска "т авто", "t auto" и т.п. */
export const BRAND_KEYWORDS = [
  "T-AUTO",
  "Т-АВТО",
  "т авто",
  "т авто москва",
  "t auto",
  "ти авто",
  "t-auto",
]

/** Ключевые слова по направлениям и гео */
export const SEO_KEYWORDS = [
  ...BRAND_KEYWORDS,
  "автосервис Москва",
  "автомойка Москва",
  "детейлинг Москва",
  "автоателье Москва",
  "перетяжка салона Москва",
  "автосервис Удальцова",
  "техцентр Москва",
  "ремонт автомобилей Москва",
  "химчистка авто Москва",
  "керамика кузова Москва",
  "замена автостекол Москва",
  "бронирование лобового стекла",
  "тонирование стекол Москва",
  "обслуживание электромобилей",
  "сервис гибридов Москва",
  "Олимпийская деревня автосервис",
  "автосервис ЮЗАО",
]

/** Базовые Open Graph изображения (путь от корня сайта) */
export const OG_IMAGE_DEFAULT = `${SITE_URL}/images/og-default.jpg`
export const OG_IMAGE_FALLBACK = `${SITE_URL}/images/photo_2026-02-19_11-58-43.jpg`

/** Гео для Москвы, ул. Удальцова 56 */
export const GEO = {
  region: "RU-MOW",
  placename: "Москва",
  position: "55.676789;37.493548",
  icbm: "55.676789, 37.493548",
  address: "г. Москва, ул. Удальцова, д. 56",
  locality: "Москва",
  country: "Россия",
} as const

/** JSON-LD LocalBusiness для поисковиков и карт */
export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE_URL}/#organization`,
    name: "T-AUTO — Техцентр",
    alternateName: ["T-AUTO", "Т-АВТО", "т авто", "t auto", "T AUTO"],
    description:
      "Автосервис, автомойка, автоателье, стекла в Москве. Обслуживание электромобилей и гибридов. Ул. Удальцова, 56.",
    url: SITE_URL,
    telephone: "+7-916-000-54-54",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Удальцова, д. 56",
      addressLocality: "Москва",
      addressRegion: "Москва",
      postalCode: "",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.676789,
      longitude: 37.493548,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    priceRange: "₽₽",
    areaServed: {
      "@type": "City",
      name: "Москва",
    },
    sameAs: [
      "https://t.me/+79160005454",
      "https://max.ru/chat/+79160005454",
    ],
    image: OG_IMAGE_FALLBACK,
  }
}

/** Мета по страницам (title, description) для layout-ов */
export const PAGE_META = {
  home: {
    title: "Главная",
    titleFull: "T-AUTO (т авто) — Техцентр | Автосервис, Автомойка, Детейлинг, Москва",
    description:
      "Т-АВТО (т авто) — автосервис и детейлинг в Москве, Удальцова 56. Ремонт авто, мойка, химчистка, автоателье, стекла. Электромобили и гибриды.",
    keywords: SEO_KEYWORDS.join(", "),
  },
  services: {
    title: "Услуги",
    titleFull: "Услуги автосервиса T-AUTO — цены на ремонт, мойку, детейлинг",
    description:
      "Автосервис, автомойка, автоателье, стекла: прайс и описание услуг. Замена масла, химчистка, керамика, перетяжка салона, бронирование стекол. Москва, Удальцова 56.",
    keywords: [
      "услуги автосервиса Москва",
      "прайс автосервис",
      "детейлинг цены",
      "химчистка авто",
      "перетяжка салона",
      "бронирование стекол",
      ...SEO_KEYWORDS,
    ].join(", "),
  },
  about: {
    title: "О компании",
    titleFull: "О компании T-AUTO — команда и ценности техцентра",
    description:
      "Профессиональная команда T-AUTO: автосервис, детейлинг, работа с электромобилями и гибридами. Москва, ул. Удальцова, 56.",
    keywords: [
      "T-AUTO о компании",
      "автосервис команда Москва",
      ...SEO_KEYWORDS,
    ].join(", "),
  },
  portfolio: {
    title: "Наши работы",
    titleFull: "Наши работы — портфолио T-AUTO: детейлинг, покраска, стекла",
    description:
      "Примеры работ: керамика, полировка, покраска, бронирование и тонирование стекол. Автосервис T-AUTO, Москва.",
    keywords: [
      "портфолио автосервиса",
      "примеры работ детейлинг",
      "керамика кузова",
      ...SEO_KEYWORDS,
    ].join(", "),
  },
  contacts: {
    title: "Контакты",
    titleFull: "Контакты T-AUTO — адрес, телефон, запись на сервис",
    description:
      "Автосервис T-AUTO: Москва, ул. Удальцова, 56. Телефон +7 (916) 000-54-54. Режим работы, карта, запись на услуги.",
    keywords: [
      "T-AUTO контакты",
      "автосервис Удальцова 56",
      "автосервис Москва телефон",
      ...SEO_KEYWORDS,
    ].join(", "),
  },
} as const
