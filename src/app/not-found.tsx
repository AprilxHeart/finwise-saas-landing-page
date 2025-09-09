import Link from 'next/link';
import { siteDetails } from '@/data/siteDetails';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-indigo-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            ไม่พบหน้าที่คุณค้นหา
          </h2>
          <p className="text-gray-600 mt-2">
            ขออภัย หน้าเว็บที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่มีอยู่จริง
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            กลับสู่หน้าหลัก
          </Link>
          
          <div className="text-sm text-gray-500">
            หรือติดต่อเราได้ที่: 
            <a 
              href={`mailto:${siteDetails.companyInfo?.email || 'info@eifelpump.co.th'}`}
              className="text-indigo-600 hover:text-indigo-700 ml-1"
            >
              {siteDetails.companyInfo?.email || 'info@eifelpump.co.th'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
