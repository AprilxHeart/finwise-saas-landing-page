import Head from 'next/head';
import { siteDetails } from '@/data/siteDetails';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image,
  imageAlt,
  noindex = false,
  nofollow = false,
  structuredData,
  breadcrumbs = []
}) => {
  const pageTitle = title 
    ? `${title} | ${siteDetails.siteName}` 
    : siteDetails.metadata.title;
  
  const pageDescription = description || siteDetails.metadata.description;
  const pageCanonical = canonical || siteDetails.siteUrl;
  const pageImage = image || `${siteDetails.siteUrl}${siteDetails.logoPath}`;
  const pageImageAlt = imageAlt || `${siteDetails.siteName} - ${title || 'ปั๊มน้ำอุตสาหกรรม'}`;

  const robotsContent = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

  // Generate breadcrumb structured data
  const breadcrumbStructuredData = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={pageCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={pageImageAlt} />
      <meta property="og:locale" content="th_TH" />
      <meta property="og:site_name" content={siteDetails.siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={pageImageAlt} />
      <meta name="twitter:creator" content="@EifelPumpTH" />
      <meta name="twitter:site" content="@EifelPumpTH" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content={siteDetails.siteName} />
      <meta name="publisher" content={siteDetails.siteName} />
      <meta name="geo.region" content="TH-10" />
      <meta name="geo.placename" content="Bangkok" />
      <meta name="geo.position" content="13.7563;100.5018" />
      <meta name="ICBM" content="13.7563, 100.5018" />
      
      {/* Structured Data */}
      {breadcrumbStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData),
          }}
        />
      )}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
};

export default SEO;
