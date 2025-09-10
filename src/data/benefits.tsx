import { FiAward, FiShield, FiStar, FiTruck, FiZap, FiDroplet, FiSettings, FiTool } from "react-icons/fi";

import { IBenefit } from "@/types"
import { useLanguage } from "@/contexts/LanguageContext";

export const useBenefits = (): IBenefit[] => {
  const { t } = useLanguage();
  
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'shield': return <FiShield size={26} />;
      case 'award': return <FiAward size={26} />;
      case 'star': return <FiStar size={26} />;
      case 'zap': return <FiZap size={26} />;
      case 'truck': return <FiTruck size={26} />;
      case 'settings': return <FiSettings size={26} />;
      case 'droplet': return <FiDroplet size={26} />;
      case 'tool': return <FiTool size={26} />;
      default: return <FiStar size={26} />;
    }
  };

  const iconMappings = [
    ['shield', 'award', 'star'],
    ['zap', 'truck', 'settings'],
    ['shield', 'droplet', 'settings'],
    ['tool', 'star', 'settings']
  ];

  const images = [
    "/images/EA-1-500x500.jpg",
    "/images/ES+1-500x500.jpg", 
    "/images/Eifel_logo.png",
    "/images/EA-1-500x500.jpg"
  ];

  return t.benefits.map((benefit, index) => ({
    title: benefit.title,
    description: benefit.description,
    bullets: benefit.bullets.map((bullet, bulletIndex) => ({
      title: bullet.title,
      description: bullet.description,
      icon: getIcon(iconMappings[index][bulletIndex])
    })),
    imageSrc: images[index]
  }));
};