import { ITestimonial } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

export const useTestimonials = (): ITestimonial[] => {
  const { t } = useLanguage();
  
  const avatars = [
    '/images/testimonial-1.webp',
    '/images/testimonial-2.webp',
    '/images/testimonial-3.webp'
  ];

  return t.testimonialsList.map((testimonial, index) => ({
    name: testimonial.name,
    role: testimonial.role,
    message: testimonial.message,
    avatar: avatars[index]
  }));
};