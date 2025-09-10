'use client';

import React from 'react';
import Image from 'next/image';
import Container from './Container';
import { useLanguage } from '@/contexts/LanguageContext';

interface TeamMember {
  id: string;
  name: { th: string; en: string };
  position: { th: string; en: string };
  image: string;
  description: { th: string; en: string };
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: { 
      th: 'วิศวกรระบบน้ำ', 
      en: 'Water System Engineer' 
    },
    position: { 
      th: 'หัวหน้าทีมเทคนิค', 
      en: 'Technical Team Lead' 
    },
    image: '/images/Thai_team/34319_0.jpg',
    description: { 
      th: 'ประสบการณ์กว่า 15 ปี ในระบบปั๊มน้ำอุตสาหกรรม', 
      en: 'Over 15 years of experience in industrial water pump systems' 
    }
  },
  {
    id: '2',
    name: { 
      th: 'ทีมวิศวกร', 
      en: 'Engineering Team' 
    },
    position: { 
      th: 'ฝ่ายออกแบบระบบ', 
      en: 'System Design Department' 
    },
    image: '/images/Thai_team/34320_0.jpg',
    description: { 
      th: 'เชี่ยวชาญการออกแบบระบบปั๊มน้ำสำหรับโรงงาน', 
      en: 'Specialized in designing water pump systems for factories' 
    }
  },
  {
    id: '3',
    name: { 
      th: 'ทีมเทคนิค', 
      en: 'Technical Team' 
    },
    position: { 
      th: 'ฝ่ายบริการหลังการขาย', 
      en: 'After-Sales Service Department' 
    },
    image: '/images/Thai_team/34321_0.jpg',
    description: { 
      th: 'พร้อมให้บริการและดูแลระบบตลอด 24 ชั่วโมง', 
      en: 'Ready to provide service and system maintenance 24 hours a day' 
    }
  },
  {
    id: '4',
    name: { 
      th: 'ทีมควบคุมคุณภาพ', 
      en: 'Quality Control Team' 
    },
    position: { 
      th: 'ฝ่ายประกันคุณภาพ', 
      en: 'Quality Assurance Department' 
    },
    image: '/images/Thai_team/34323_0.jpg',
    description: { 
      th: 'ตรวจสอบคุณภาพทุกขั้นตอน ก่อนส่งมอบลูกค้า', 
      en: 'Quality inspection at every step before delivery to customers' 
    }
  }
];

const Team: React.FC = () => {
  const { t, language, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-4"></div>
            <div className="w-64 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
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
            {t.team.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name[language]}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {member.name[language]}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.position[language]}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {language === 'th' ? 'ประสบการณ์ 15+ ปี' : '15+ Years Experience'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'th' 
                ? 'ในการติดตั้งและบำรุงรักษาระบบปั๊มน้ำอุตสาหกรรม'
                : 'In installation and maintenance of industrial water pump systems'
              }
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {language === 'th' ? 'ทีมงาน 50+ คน' : '50+ Team Members'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'th' 
                ? 'วิศวกรและเทคนิคผู้เชี่ยวชาญพร้อมให้บริการ'
                : 'Expert engineers and technicians ready to serve'
              }
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {language === 'th' ? 'บริการ 24/7' : '24/7 Service'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'th' 
                ? 'พร้อมให้บริการและซ่อมบำรุงตลอด 24 ชั่วโมง'
                : 'Ready to provide service and maintenance 24 hours a day'
              }
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
