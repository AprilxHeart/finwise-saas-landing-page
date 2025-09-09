"use client";

import React from 'react';
import Image from 'next/image';
import Container from './Container';

interface WorkingImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'office' | 'factory' | 'service' | 'quality';
}

const workingImages: WorkingImage[] = [
  {
    id: '1',
    title: 'สำนักงานสมัยใหม่',
    description: 'พื้นที่ทำงานที่ทันสมัยและเอื้อต่อการออกแบบนวัตกรรม',
    image: '/images/working/34326_0.jpg',
    category: 'office'
  },
  {
    id: '2',
    title: 'โรงงานผลิตมาตรฐาน',
    description: 'โรงงานผลิตที่ผ่านมาตรฐานสากลและใช้เทคโนโลยีทันสมัย',
    image: '/images/working/34327_0.jpg',
    category: 'factory'
  },
  {
    id: '3',
    title: 'ทีมบริการมืออาชีพ',
    description: 'ทีมเทคนิคและวิศวกรที่พร้อมให้บริการตลอด 24 ชั่วโมง',
    image: '/images/working/34328_0.jpg',
    category: 'service'
  },
  {
    id: '4',
    title: 'ควบคุมคุณภาพ',
    description: 'ระบบควบคุมคุณภาพที่เข้มงวดในทุกขั้นตอนการผลิต',
    image: '/images/working/34329_0.jpg',
    category: 'quality'
  },
  {
    id: '5',
    title: 'ห้องปฏิบัติการทดสอบ',
    description: 'การทดสอบและตรวจสอบคุณภาพด้วยเครื่องมือที่ทันสมัย',
    image: '/images/working/34331_0.jpg',
    category: 'quality'
  },
  {
    id: '6',
    title: 'การติดตั้งในพื้นที่จริง',
    description: 'ประสบการณ์การติดตั้งและบำรุงรักษาในโครงการต่างๆ',
    image: '/images/working/34332_0.jpg',
    category: 'service'
  }
];

const WorkingEnvironment: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'office', name: 'สำนักงาน' },
    { id: 'factory', name: 'โรงงาน' },
    { id: 'service', name: 'บริการ' },
    { id: 'quality', name: 'คุณภาพ' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? workingImages 
    : workingImages.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            สภาพแวดล้อมการทำงาน
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            พื้นที่ทำงานและโรงงานผลิตที่มีมาตรฐาน พร้อมทีมงานมืออาชีพ
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
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredImages.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Working Values */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              ค่านิยมในการทำงาน
            </h3>
            <p className="text-gray-600">
              หลักการที่เราถือปฏิบัติในการให้บริการและการทำงาน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">คุณภาพเป็นเลิศ</h4>
              <p className="text-gray-600 text-sm">มุ่งมั่นในการส่งมอบผลิตภัณฑ์และบริการที่มีคุณภาพสูงสุด</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">นวัตกรรม</h4>
              <p className="text-gray-600 text-sm">พัฒนาเทคโนโลยีใหม่ๆ เพื่อตอบสนองความต้องการของลูกค้า</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">ทีมงานเป็นเลิศ</h4>
              <p className="text-gray-600 text-sm">ทีมงานมืออาชีพที่มีความเชี่ยวชาญและพร้อมให้บริการ</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">ตรงเวลา</h4>
              <p className="text-gray-600 text-sm">ส่งมอบตรงเวลาและให้บริการที่รวดเร็วและมีประสิทธิภาพ</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkingEnvironment;
