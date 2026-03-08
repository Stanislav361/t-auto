import type { Metadata } from "next";
import { SITE_URL, PAGE_META, OG_IMAGE_FALLBACK } from "@/lib/seo";

const meta = PAGE_META.services;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: meta.titleFull,
    description: meta.description,
    url: `${SITE_URL}/services`,
    images: [{ url: OG_IMAGE_FALLBACK, width: 1200, height: 630, alt: meta.titleFull }],
  },
  twitter: {
    title: meta.titleFull,
    description: meta.description,
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
