'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { 
  FiTool, 
  FiSettings, 
  FiUsers, 
  FiPackage, 
  FiHeadphones, 
  FiZap, 
  FiGlobe, 
  FiTruck 
} from "react-icons/fi";

interface ServiceItem {
  title: string;
  description: string;
  iconType: string;
}

const Services: React.FC = () => {
  const { t } = useLanguage();

  // Product Catalog Schema for SEO
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ปั๊มน้ำอุตสาหกรรม Eifel Thailand",
    "description": "รายการสินค้าและบริการปั๊มน้ำอุตสาหกรรมครบวงจร",
    "numberOfItems": t.services.length,
    "itemListElement": t.services.map((service: ServiceItem, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": service.title.includes('บริการ') || service.title.includes('Service') ? "Service" : "Product",
        "name": service.title,
        "description": service.description,
        "brand": {
          "@type": "Brand",
          "name": "Eifel"
        },
        "manufacturer": {
          "@type": "Organization", 
          "name": "Eifel"
        },
        "category": "Industrial Equipment",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "THB",
          "seller": {
            "@type": "Organization",
            "name": "วอเตอร์เทค เซลล์ แอนด์ เซอร์วิส"
          }
        }
      }
    }))
  };

  const getIcon = (iconType: string) => {
    const iconProps = { size: 24, className: "text-blue-600 dark:text-blue-400" };
    
    switch (iconType) {
      case 'package': return <FiPackage {...iconProps} />;
      case 'settings': return <FiSettings {...iconProps} />;
      case 'users': return <FiUsers {...iconProps} />;
      case 'tool': return <FiTool {...iconProps} />;
      case 'headphones': return <FiHeadphones {...iconProps} />;
      case 'wrench': return <FiZap {...iconProps} />;
      case 'globe': return <FiGlobe {...iconProps} />;
      case 'hard-hat': return <FiTruck {...iconProps} />;
      default: return <FiTool {...iconProps} />;
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.services.map((service: ServiceItem, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  {getIcon(service.iconType)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
