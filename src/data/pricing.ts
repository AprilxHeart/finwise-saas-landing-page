import { IPricing } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

export const usePricing = (): IPricing[] => {
  const { t } = useLanguage();
  
  const images = [
    '/images/eifel_images_hd/EA/0bbfecf2d68fb282.jpg',  // EA Series
    '/images/eifel_images_hd/EA/766fd3252c5faf79.jpg',  // EH Series (ใช้ภาพ EA เนื่องจากเป็น End Suction เหมือนกัน)
    '/images/eifel_images_hd/EHF/20660bf3da66697f.jpg', // EHF/ESF Series
    '/images/eifel_images_hd/EJ/1d2b911e682af36e.jpg',  // EJ/EJZ/EJT Series
    '/images/eifel_images_hd/EA/93be5c23ff859e3d.jpg',  // EGM Series (In-line pump)
    '/images/ES+1-500x500.jpg',                         // ES Series (Split Casing)
    '/images/eifel_images_hd/EA/a0a7ad6d961f47ad.jpg',  // ELL/ELC Series (Vacuum)
    '/images/eifel_images_hd/EA/b87f874b63174af5.jpg'   // FDL Series (Multistage)
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