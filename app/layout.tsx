import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, OG_IMAGE_FALLBACK, GEO, PAGE_META } from "@/lib/seo";
import { SeoJsonLd } from "@/components/seo-json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const defaultMeta = PAGE_META.home;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultMeta.titleFull,
    template: "%s | T-AUTO — Техцентр",
  },
  description: defaultMeta.description,
  keywords: defaultMeta.keywords,
  authors: [{ name: "T-AUTO", url: SITE_URL }],
  creator: "T-AUTO",
  publisher: "T-AUTO",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "T-AUTO — Техцентр",
    title: defaultMeta.titleFull,
    description: defaultMeta.description,
    images: [
      {
        url: OG_IMAGE_FALLBACK,
        width: 1200,
        height: 630,
        alt: "T-AUTO — автосервис и детейлинг в Москве",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.titleFull,
    description: defaultMeta.description,
    images: [OG_IMAGE_FALLBACK],
  },
  verification: {
    yandex: "ae7fc6b3e6a18360",
  },
  other: {
    "geo.region": GEO.region,
    "geo.placename": GEO.placename,
    "geo.position": GEO.position,
    ICBM: GEO.icbm,
    "contact:phone": "+7-916-000-54-54",
    "contact:address": GEO.address,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <SeoJsonLd />
        {children}
      </body>
    </html>
  );
}


