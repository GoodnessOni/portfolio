import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Providers from "@/components/Providers";
import { absUrl, asset, contact, seo, siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

const title = seo.title;
const description = seo.description;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl + "/"),
  title: { default: title, template: "%s · Goodness Oni" },
  description,
  applicationName: "Goodness Oni",
  authors: [{ name: "Goodness Oni", url: siteUrl }],
  keywords: [
    "Goodness Oni",
    "AI/ML engineer",
    "Systems Engineering",
    "UNILAG",
    "University of Lagos",
    "Lagos",
    "OGverse Innovations",
    "backend engineer",
  ],
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    url: siteUrl + "/",
    siteName: "Goodness Oni",
    title,
    description,
    images: [{ url: absUrl("/og.png"), width: 1200, height: 630, alt: seo.ogImageAlt }],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: absUrl("/og.png"), alt: seo.ogImageAlt }],
  },
  icons: {
    icon: [
      { url: asset("/favicon.svg"), type: "image/svg+xml" },
      { url: asset("/favicon-32.png"), sizes: "32x32", type: "image/png" },
    ],
    apple: asset("/apple-touch-icon.png"),
  },
  robots: { index: true, follow: true },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export const viewport: Viewport = { themeColor: "#fff8ea", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Goodness Oluwapelumi Oni",
  alternateName: "Goodness Oni",
  url: siteUrl,
  image: absUrl("/img/portrait.webp"),
  description,
  jobTitle: "AI/ML Engineer; Systems Engineering student, University of Lagos; Founder & CEO, OGverse Innovations",
  worksFor: { "@type": "Organization", name: "OGverse Innovations" },
  affiliation: { "@type": "CollegeOrUniversity", name: "University of Lagos" },
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  email: `mailto:${contact.email}`,
  sameAs: [contact.github, contact.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
