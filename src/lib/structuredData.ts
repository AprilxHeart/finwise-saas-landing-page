import { siteDetails } from '@/data/siteDetails';

export const generateStructuredData = () => {
  return {
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
};