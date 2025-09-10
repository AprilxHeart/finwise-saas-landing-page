import { IFAQ } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

export const useFAQs = (): IFAQ[] => {
  const { t } = useLanguage();
  
  return t.faqList.map((faq) => ({
    question: faq.question,
    answer: faq.answer
  }));
};