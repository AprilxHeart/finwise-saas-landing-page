import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { siteDetails } from '@/data/siteDetails';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  keywords: [
    'ปั๊มน้ำอุตสาหกรรม',
    'ปั๊มดับเพลิง', 
    'ปั๊มน้ำเสีย',
    'ปั๊มสุญญากาศ',
    'Eifel Pump',
    'ปั๊มคุณภาพสูง',
    'มาตรฐาน UL',
    'ISO',
    'ประหยัดพลังงาน'
  ],
  authors: [{ name: siteDetails.siteName }],
  creator: siteDetails.siteName,
  publisher: siteDetails.siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/Eifel.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/images/Eifel_logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Eifel_logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/Eifel_logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/Eifel_logo.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/images/Eifel.ico',
    apple: [
      { url: '/images/Eifel_logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    type: 'website',
    locale: 'th_TH',
    images: [
      {
        url: '/images/Eifel_logo.png',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    creator: '@EifelPumpTH',
    images: ['/images/Eifel_logo.png'],
  },
  verification: {
    google: '', // เพิ่ม Google Search Console verification code ตรงนี้
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteDetails.companyInfo.name,
    "url": siteDetails.siteUrl,
    "logo": `${siteDetails.siteUrl}${siteDetails.logoPath}`,
    "description": siteDetails.metadata.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteDetails.companyInfo.phone,
      "contactType": "customer service",
      "email": siteDetails.companyInfo.email,
      "availableLanguage": ["th", "en"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "กรุงเทพมหานคร",
      "addressCountry": "TH"
    },
    "sameAs": [
      siteDetails.companyInfo.facebook
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ปั๊มน้ำอุตสาหกรรม",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "ปั๊มน้ำอุตสาหกรรม",
            "description": "ปั๊มน้ำคุณภาพสูง มาตรฐาน UL และ ISO"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "ปั๊มดับเพลิง",
            "description": "ปั๊มดับเพลิงมาตรฐานสากล"
          }
        }
      ]
    }
  };

  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
            <Header />
            <main>
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
