import { getLocalBusinessJsonLd } from "@/lib/seo"

/** JSON-LD разметка LocalBusiness для поисковиков (Google, Yandex) */
export function SeoJsonLd() {
  const json = getLocalBusinessJsonLd()
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
