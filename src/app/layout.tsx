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
  title: {
    default: siteDetails.metadata.title,
    template: `%s | ${siteDetails.siteName}`,
  },
  description: siteDetails.metadata.description,
  keywords: [
    'ปั๊มน้ำอุตสาหกรรม',
    'ปั๊มดับเพลิง', 
    'ปั๊มน้ำเสีย',
    'ปั๊มสุญญากาศ',
    'Eifel Pump',
    'EA Series',
    'EH Series', 
    'EHF Series',
    'ESF Series',
    'EJ Series',
    'EJZ Series',
    'EJT Series',
    'EGM Series',
    'ES Series',
    'ELL Series',
    'ELC Series',
    'FDL Series',
    'EJCY Series',
    'ปั๊มคุณภาพสูง',
    'มาตรฐาน UL',
    'ISO 2858',
    'DIN24255',
    'EN 733',
    'UL Listed',
    'ประหยัดพลังงาน',
    'ปั๊มน้ำ',
    'industrial pump',
    'fire pump',
    'wastewater pump',
    'vacuum pump',
    'centrifugal pump',
    'self-priming pump',
    'split casing pump',
    'end suction pump',
    'in-line pump',
    'multistage pump',
    'liquid ring pump',
    'ปั๊มหอยโข่ง',
    'ปั๊มจุ่ม',
    'ปั๊มแนวตั้ง',
    'ปั๊มแนวนอน',
    'ปั๊มหลายใบพัด',
    'บริการซ่อมปั๊ม',
    'อะไหล่ปั๊ม',
    'ระบบประปา',
    'ระบบดับเพลิง',
    'ระบบบำบัดน้ำเสีย',
    'วอเตอร์เทค',
    'WaterTech',
    'Eifel Thailand',
    'ปั๊มเยอรมัน',
    'ปั๊มยุโรป',
    'เครื่องสูบน้ำ',
    'ปั๊มคุณภาพ',
    'ปั๊มประหยัดไฟ',
    'Back Pull-Out Design',
    'MEI ≥ 0.7',
    'โรงบำบัดน้ำเสีย',
    'HVAC',
    'Cooling Tower'
  ],
  authors: [{ name: siteDetails.siteName }],
  creator: siteDetails.siteName,
  publisher: siteDetails.siteName,
  category: 'Industrial Equipment',
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
  alternates: {
    canonical: siteDetails.siteUrl,
    languages: {
      'th-TH': siteDetails.siteUrl,
      'en-US': `${siteDetails.siteUrl}?lang=en`,
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
        url: `${siteDetails.siteUrl}/images/Eifel_logo.png`,
        width: 1200,
        height: 675,
        alt: `${siteDetails.siteName} - ปั๊มน้ำอุตสาหกรรมคุณภาพสูง`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    creator: '@EifelPumpTH',
    site: '@EifelPumpTH',
    images: [`${siteDetails.siteUrl}/images/Eifel_logo.png`],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '', // เพิ่ม Google Search Console verification code ตรงนี้
    yandex: process.env.YANDEX_VERIFICATION || '',
  },
  other: {
    'geo.region': 'TH-10',
    'geo.placename': 'Bangkok',
    'geo.position': '13.7563;100.5018',
    'ICBM': '13.7563, 100.5018',
    'msvalidate.01': process.env.BING_VERIFICATION || '', // Bing verification
    'business:contact_data:street_address': '213 ซ.เพชรเกษม 58 แยก 14',
    'business:contact_data:locality': 'กรุงเทพมหานคร',
    'business:contact_data:region': 'กรุงเทพมหานคร',
    'business:contact_data:postal_code': '10160',
    'business:contact_data:country_name': 'Thailand',
    'business:contact_data:email': siteDetails.companyInfo.email,
    'business:contact_data:phone_number': siteDetails.companyInfo.phone,
    'business:contact_data:website': siteDetails.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteDetails.siteUrl}#organization`,
        "name": siteDetails.companyInfo.name,
        "alternateName": siteDetails.siteName,
        "url": siteDetails.siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteDetails.siteUrl}${siteDetails.logoPath}`,
          "width": 512,
          "height": 512
        },
        "image": {
          "@type": "ImageObject",
          "url": `${siteDetails.siteUrl}${siteDetails.logoPath}`,
          "width": 1200,
          "height": 675
        },
        "description": siteDetails.metadata.description,
        "telephone": siteDetails.companyInfo.phone,
        "email": siteDetails.companyInfo.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "213 ซ.เพชรเกษม 58 แยก 14",
          "addressLocality": "แขวงบางด้วน",
          "addressRegion": "เขตภาษีเจริญ กรุงเทพมหานคร",
          "postalCode": "10160",
          "addressCountry": "TH"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 13.7563,
          "longitude": 100.5018
        },
        "openingHours": "Mo-Fr 08:00-17:00",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteDetails.companyInfo.phone,
          "contactType": "customer service",
          "email": siteDetails.companyInfo.email,
          "availableLanguage": ["th", "en"],
          "areaServed": "TH"
        },
        "sameAs": [
          siteDetails.companyInfo.facebook,
          `https://line.me/ti/p/${siteDetails.companyInfo.lineId}`
        ],
        "priceRange": "฿฿-฿฿฿",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "currenciesAccepted": "THB",
        "serviceArea": {
          "@type": "Country",
          "name": "Thailand"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "ปั๊มน้ำอุตสาหกรรมและอุปกรณ์",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "ปั๊มน้ำอุตสาหกรรม Eifel",
                "description": "ปั๊มน้ำคุณภาพสูง มาตรฐาน UL และ ISO ประหยัดพลังงาน",
                "brand": {
                  "@type": "Brand",
                  "name": "Eifel"
                },
                "manufacturer": {
                  "@type": "Organization",
                  "name": "Eifel"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product", 
                "name": "ปั๊มดับเพลิง",
                "description": "ปั๊มดับเพลิงมาตรฐานสากล UL Listed และ FM Approved",
                "brand": {
                  "@type": "Brand",
                  "name": "Eifel"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product", 
                "name": "ปั๊มน้ำเสีย",
                "description": "ปั๊มจุ่มน้ำเสีย ปั๊มหอยโข่งน้ำเสีย ทนทานและประสิทธิภาพสูง",
                "brand": {
                  "@type": "Brand",
                  "name": "Eifel"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "บริการซ่อมแซมและบำรุงรักษาปั๊ม",
                "description": "บริการซ่อมแซม บำรุงรักษา และจำหน่ายอะไหล่ปั๊มครบวงจร"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteDetails.siteUrl}#website`,
        "url": siteDetails.siteUrl,
        "name": siteDetails.siteName,
        "description": siteDetails.metadata.description,
        "publisher": {
          "@id": `${siteDetails.siteUrl}#organization`
        },
        "inLanguage": "th-TH",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteDetails.siteUrl}?search={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${siteDetails.siteUrl}#webpage`,
        "url": siteDetails.siteUrl,
        "name": siteDetails.metadata.title,
        "description": siteDetails.metadata.description,
        "isPartOf": {
          "@id": `${siteDetails.siteUrl}#website`
        },
        "about": {
          "@id": `${siteDetails.siteUrl}#organization`
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "หน้าแรก",
              "item": siteDetails.siteUrl
            }
          ]
        },
        "mainEntity": {
          "@id": `${siteDetails.siteUrl}#organization`
        }
      }
    ]
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
