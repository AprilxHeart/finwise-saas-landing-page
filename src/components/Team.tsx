import React from 'react';
import Image from 'next/image';
import Container from './Container';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'วิศวกรระบบน้ำ',
    position: 'หัวหน้าทีมเทคนิค',
    image: '/images/Thai_team/34319_0.jpg',
    description: 'ประสบการณ์กว่า 15 ปี ในระบบปั๊มน้ำอุตสาหกรรม'
  },
  {
    id: '2',
    name: 'ทีมวิศวกร',
    position: 'ฝ่ายออกแบบระบบ',
    image: '/images/Thai_team/34320_0.jpg',
    description: 'เชี่ยวชาญการออกแบบระบบปั๊มน้ำสำหรับโรงงาน'
  },
  {
    id: '3',
    name: 'ทีมเทคนิค',
    position: 'ฝ่ายบริการหลังการขาย',
    image: '/images/Thai_team/34321_0.jpg',
    description: 'พร้อมให้บริการและดูแลระบบตลอด 24 ชั่วโมง'
  },
  {
    id: '4',
    name: 'ทีมควบคุมคุณภาพ',
    position: 'ฝ่ายประกันคุณภาพ',
    image: '/images/Thai_team/34323_0.jpg',
    description: 'ตรวจสอบคุณภาพทุกขั้นตอน ก่อนส่งมอบลูกค้า'
  }
];

const Team: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ทีมงานมืออาชีพ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ทีมวิศวกรและเทคนิคผู้เชี่ยวชาญ พร้อมให้คำปรึกษาและบริการที่ดีที่สุด
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ประสบการณ์ 15+ ปี
            </h3>
            <p className="text-gray-600">
              ในการติดตั้งและบำรุงรักษาระบบปั๊มน้ำอุตสาหกรรม
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ทีมงาน 50+ คน
            </h3>
            <p className="text-gray-600">
              วิศวกรและเทคนิคผู้เชี่ยวชาญพร้อมให้บริการ
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              บริการ 24/7
            </h3>
            <p className="text-gray-600">
              พร้อมให้บริการและซ่อมบำรุงตลอด 24 ชั่วโมง
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
