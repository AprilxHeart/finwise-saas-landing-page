import { IPricing } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

export const usePricing = (): IPricing[] => {
  const { t } = useLanguage();
  
  const images = [
    '/images/EA-1-500x500.jpg',
    '/images/ES+1-500x500.jpg',
    '/images/EA-1-500x500.jpg',
    '/images/ES+1-500x500.jpg'
  ];

  return t.pricing.map((item, index) => ({
    name: item.name,
    price: item.price,
    category: item.category,
    description: item.description,
    imageSrc: images[index],
    features: item.features
  }));
};