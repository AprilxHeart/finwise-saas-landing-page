'use client';

import React from 'react';
import Image from 'next/image'
import Container from './Container';
import { useLanguage } from '@/contexts/LanguageContext';

interface TrustItem {
  id: string;
  title: { th: string; en: string };
  description: { th: string; en: string };
  image: string;
  icon: React.ReactNode;
}

const trustItems: TrustItem[] = [
  {
    id: '1',
    title: { 
      th: 'มาตรฐานสากล', 
      en: 'International Standards' 
    },
    description: { 
      th: 'ผลิตภัณฑ์ผ่านมาตรฐาน ISO และการรับรองคุณภาพระดับสากล',
      en: 'Products certified with ISO standards and international quality certifications'
    },
    image: '/images/Trust/output-003.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: '2',
    title: { 
      th: 'การรับประกัน', 
      en: 'Warranty Coverage' 
    },
    description: { 
      th: 'รับประกันสินค้า 2 ปี พร้อมบริการหลังการขายที่ครอบคลุม',
      en: '2-year product warranty with comprehensive after-sales service'
    },
    image: '/images/Trust/output-005.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    id: '3',
    title: { 
      th: 'ความปลอดภัย', 
      en: 'Safety Systems' 
    },
    description: { 
      th: 'ระบบความปลอดภัยที่ครอบคลุม ป้องกันอุบัติเหตุในการใช้งาน',
      en: 'Comprehensive safety systems to prevent accidents during operation'
    },
    image: '/images/Trust/output-019.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    id: '4',
    title: { 
      th: 'ประสิทธิภาพสูง', 
      en: 'High Performance' 
    },
    description: { 
      th: 'เทคโนโลยีที่ทันสมัย ประหยัดพลังงาน และมีประสิทธิภาพสูง',
      en: 'Modern technology, energy-efficient and high performance'
    },
    image: '/images/Trust/output-021.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const certifications = [
  { name: 'ISO 9001', image: '/images/Trust/PDF2 (11).png' },
  { name: 'CE Mark', image: '/images/Trust/PDF2 (13).png' },
  { name: 'Thai Industrial Standard', image: '/images/Trust/PDF2 (14).png' },
  { name: 'Energy Star', image: '/images/Trust/PDF2 (15).png' }
];

const TrustSection: React.FC = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="py-16 bg-white dark:bg-gray-800 transition-colors">
      <Container>
        {/* Main Trust Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.trust.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.trust.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustItems.map((item) => (
            <div 
              key={item.id} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  width={300}
                  height={200}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {item.title[language]}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {t.trust.certifications.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t.trust.certifications.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md dark:shadow-gray-900/50 transition-shadow duration-300 text-center"
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={120}
                  height={80}
                  loading="lazy"
                  className="w-full h-20 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
            <p className="text-gray-600 dark:text-gray-400">{t.trust.stats.projects}</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
            <p className="text-gray-600 dark:text-gray-400">{t.trust.stats.experience}</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.8%</div>
            <p className="text-gray-600 dark:text-gray-400">{t.trust.stats.satisfaction}</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
            <p className="text-gray-600 dark:text-gray-400">{t.trust.afterSales}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrustSection;
