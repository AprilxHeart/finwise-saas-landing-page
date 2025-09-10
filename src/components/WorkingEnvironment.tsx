"use client";

import React from 'react';
import Image from 'next/image';
import Container from './Container';
import { useLanguage } from '@/contexts/LanguageContext';

interface WorkingImage {
  id: string;
  title: { th: string; en: string };
  description: { th: string; en: string };
  image: string;
  category: 'office' | 'factory' | 'service' | 'quality';
}

const workingImages: WorkingImage[] = [
  {
    id: '1',
    title: { 
      th: 'สำนักงานสมัยใหม่', 
      en: 'Modern Office' 
    },
    description: { 
      th: 'พื้นที่ทำงานที่ทันสมัยและเอื้อต่อการออกแบบนวัตกรรม',
      en: 'Modern workspace conducive to innovation design'
    },
    image: '/images/working/34326_0.jpg',
    category: 'office'
  },
  {
    id: '2',
    title: { 
      th: 'โรงงานผลิตมาตรฐาน', 
      en: 'Standard Manufacturing Plant' 
    },
    description: { 
      th: 'โรงงานผลิตที่ผ่านมาตรฐานสากลและใช้เทคโนโลยีทันสมัย',
      en: 'Manufacturing plant with international standards and modern technology'
    },
    image: '/images/working/34327_0.jpg',
    category: 'factory'
  },
  {
    id: '3',
    title: { 
      th: 'ทีมบริการมืออาชีพ', 
      en: 'Professional Service Team' 
    },
    description: { 
      th: 'ทีมเทคนิคและวิศวกรที่พร้อมให้บริการตลอด 24 ชั่วโมง',
      en: 'Technical and engineering team ready to serve 24 hours'
    },
    image: '/images/working/34328_0.jpg',
    category: 'service'
  },
  {
    id: '4',
    title: { 
      th: 'ควบคุมคุณภาพ', 
      en: 'Quality Control' 
    },
    description: { 
      th: 'ระบบควบคุมคุณภาพที่เข้มงวดในทุกขั้นตอนการผลิต',
      en: 'Strict quality control system in every production step'
    },
    image: '/images/working/34329_0.jpg',
    category: 'quality'
  },
  {
    id: '5',
    title: { 
      th: 'ห้องปฏิบัติการทดสอบ', 
      en: 'Testing Laboratory' 
    },
    description: { 
      th: 'การทดสอบและตรวจสอบคุณภาพด้วยเครื่องมือที่ทันสมัย',
      en: 'Testing and quality inspection with modern equipment'
    },
    image: '/images/working/34331_0.jpg',
    category: 'quality'
  },
  {
    id: '6',
    title: { 
      th: 'การติดตั้งในพื้นที่จริง', 
      en: 'Real Site Installation' 
    },
    description: { 
      th: 'ประสบการณ์การติดตั้งและบำรุงรักษาในโครงการต่างๆ',
      en: 'Installation and maintenance experience in various projects'
    },
    image: '/images/working/34332_0.jpg',
    category: 'service'
  }
];

const WorkingEnvironment: React.FC = () => {
  const { language, isLoading, t } = useLanguage();
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const categories = [
    { 
      id: 'all', 
      name: { th: 'ทั้งหมด', en: 'All' }
    },
    { 
      id: 'office', 
      name: { th: 'สำนักงาน', en: 'Office' }
    },
    { 
      id: 'factory', 
      name: { th: 'โรงงาน', en: 'Factory' }
    },
    { 
      id: 'service', 
      name: { th: 'บริการ', en: 'Service' }
    },
    { 
      id: 'quality', 
      name: { th: 'คุณภาพ', en: 'Quality' }
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? workingImages 
    : workingImages.filter(item => item.category === activeCategory);

  if (isLoading) {
    return (
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <div className="w-64 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-4"></div>
            <div className="w-96 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-8"></div>
            <div className="flex justify-center gap-4 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-lg h-80 animate-pulse"></div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.workingEnvironment.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {t.workingEnvironment.subtitle}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {category.name[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredImages.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {item.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Working Values */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {t.workingEnvironment.values.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t.workingEnvironment.values.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t.workingEnvironment.values.quality.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t.workingEnvironment.values.quality.description}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t.workingEnvironment.values.innovation.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t.workingEnvironment.values.innovation.description}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t.workingEnvironment.values.service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t.workingEnvironment.values.service.description}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {t.workingEnvironment.values.sustainability.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t.workingEnvironment.values.sustainability.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkingEnvironment;
