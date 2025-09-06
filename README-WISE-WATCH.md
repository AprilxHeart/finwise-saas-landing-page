# WISE Watch - Landing Page

นาฬิกาไทยคุณภาพพรีเมียม ผสมผสานดีไซน์ไทยกับเทคโนโลยีสากล

## 🌟 คุณสมบัติเด่น

- **งานฝีมือไทยแท้** - ลวดลายไทยประณีตบนหน้าปัด
- **คุณภาพสากล** - เครื่องจักรสวิสแท้และวัสดุคุณภาพสูง  
- **บริการครบครัน** - รับประกัน 2 ปี พร้อมศูนย์บริการทั่วประเทศ
- **คอลเลกชั่นหลากหลาย** - Classic, Royal, และ Limited Edition

## 📱 เทคโนโลยี

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Typography**: Prompt (Google Fonts)
- **Icons**: React Icons
- **Language**: TypeScript

## 🎨 ธีมสี

- **Primary**: ทอง (Gold) #d4af37
- **Secondary**: เทาเข้ม (Dark Gray) #2c2c2c  
- **Accent**: ดำ (Luxury Black) #000000
- **Background**: ขาว (White) #ffffff

## 🚀 การติดตั้งและรัน

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd finwise-saas-landing-page
   ```

2. **ติดตั้ง dependencies**
   ```bash
   pnpm install
   ```

3. **รัน development server**
   ```bash
   pnpm dev
   ```

4. **เปิดเบราว์เซอร์ที่**
   ```
   http://localhost:3000
   ```

## 📁 โครงสร้างโปรเจค

```
src/
├── app/
│   ├── globals.css          # สไตล์หลักและธีมสี
│   ├── layout.tsx           # Layout หลัก
│   └── page.tsx             # หน้าแรก
├── components/
│   ├── Benefits/            # ส่วนคุณสมบัติเด่น
│   ├── Pricing/             # ส่วนแสดงคอลเลกชั่น
│   ├── CTA.tsx              # Call to Action
│   ├── FAQ.tsx              # คำถามที่พบบ่อย
│   ├── Hero.tsx             # ส่วนหัวหน้า
│   ├── Testimonials.tsx     # รีวิวลูกค้า
│   └── ...
├── data/
│   ├── benefits.tsx         # ข้อมูลคุณสมบัติ
│   ├── pricing.ts           # ข้อมูลคอลเลกชั่น
│   ├── testimonials.ts      # ข้อมูลรีวิว
│   └── ...
└── types.ts                 # TypeScript definitions
```

## 📞 ช่องทางติดต่อ

- **Facebook**: [WISE Watch](https://www.facebook.com/wisewatch)
- **Instagram**: [@wisewatch_th](https://www.instagram.com/wisewatch_th)
- **YouTube**: [WISE Watch Thailand](https://youtube.com/@wisewatchthailand)
- **Email**: info@wisewatch.co.th
- **Tel**: 02-123-4567

## 🛠️ การปรับแต่ง

### เปลี่ยนสี
แก้ไขไฟล์ `src/app/globals.css` ในส่วน `:root` variables

### เปลี่ยนเนื้อหา
แก้ไขไฟล์ในโฟลเดอร์ `src/data/`

### เพิ่มรูปภาพ
ใส่รูปภาพในโฟลเดอร์ `public/images/`

## 📝 License

© 2024 WISE Watch Thailand. All rights reserved.

---

**หมายเหตุ**: Landing Page นี้ใช้ข้อมูลจำลองเพื่อการสาธิต ในการใช้งานจริงควรแทนที่ด้วยข้อมูลและรูปภาพจริงจาก Facebook เพจ WISE Watch
