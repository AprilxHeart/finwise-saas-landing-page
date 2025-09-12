import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'นโยบายความเป็นส่วนตัว - Eifel Pump Thailand',
  description: 'นโยบายความเป็นส่วนตัวและการใช้คุกกี้ของ Eifel Pump Thailand',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          นโยบายความเป็นส่วนตัว
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            อัปเดตล่าสุด: 12 กันยายน 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. ข้อมูลที่เราเก็บรวบรวม
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              เราเก็บรวบรวมข้อมูลต่อไปนี้:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>ข้อมูลการติดต่อ (ชื่อ, อีเมล, เบอร์โทรศัพท์)</li>
              <li>ข้อมูลการใช้งานเว็บไซต์ผ่าน Google Analytics</li>
              <li>คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งาน</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. วัตถุประสงค์ในการใช้ข้อมูล
            </h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>ตอบสนองคำขอและให้บริการลูกค้า</li>
              <li>ปรับปรุงคุณภาพเว็บไซต์และบริการ</li>
              <li>ส่งข้อมูลผลิตภัณฑ์และข่าวสาร (หากได้รับอนุญาต)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. การใช้คุกกี้
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              เว็บไซต์ของเราใช้คุกกี้ประเภทต่อไปนี้:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>คุกกี้ที่จำเป็น:</strong> สำหรับการทำงานพื้นฐานของเว็บไซต์</li>
              <li><strong>คุกกี้เชิงวิเคราะห์:</strong> Google Analytics เพื่อวิเคราะห์การใช้งาน</li>
              <li><strong>คุกกี้การตลาด:</strong> Facebook Pixel (หากได้รับอนุญาต)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. สิทธิของผู้ใช้งาน
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              คุณมีสิทธิในการ:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>เข้าถึงข้อมูลส่วนบุคคลของคุณ</li>
              <li>ขอแก้ไขข้อมูลที่ไม่ถูกต้อง</li>
              <li>ขอลบข้อมูลส่วนบุคคลของคุณ</li>
              <li>ถอนความยินยอมในการใช้ข้อมูล</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. การติดต่อ
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ กรุณาติดต่อเราที่:
            </p>
            <ul className="list-none text-gray-600 dark:text-gray-300 mt-4 space-y-2">
              <li><strong>อีเมล:</strong> info@eifelpump.co.th</li>
              <li><strong>โทรศัพท์:</strong> +66 2 123 4567</li>
              <li><strong>ที่อยู่:</strong> กรุงเทพมหานคร ประเทศไทย</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
