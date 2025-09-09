import { FiAward, FiShield, FiStar, FiTruck, FiZap, FiDroplet, FiSettings, FiTool } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "มาตรฐานระดับโลก มั่นใจทุกการใช้งาน",
        description: "ผลิตตามมาตรฐานสากล DIN24255, EN733, ISO2858 และ GB/T5657-95 ผ่านการรับรองคุณภาพระดับสากลจาก UL (สหรัฐอเมริกา) และ PSB (สิงคโปร์)",
        bullets: [
            {
                title: "รับรอง UL Listed",
                description: "ปั๊มดับเพลิงรับรองมาตรฐาน UL สำหรับความปลอดภัยสูงสุด",
                icon: <FiShield size={26} />
            },
            {
                title: "มาตรฐาน ISO 9001:2015",
                description: "ระบบบริหารจัดการคุณภาพระดับสากล",
                icon: <FiAward size={26} />
            },
            {
                title: "โครงสร้างทนทาน",
                description: "แข็งแรง ใช้งานได้ยาวนาน ลดเสียงรบกวนและแรงสั่นสะเทือน",
                icon: <FiStar size={26} />
            }
        ],
        imageSrc: "/images/EA-1-500x500.jpg"
    },
    {
        title: "ประสิทธิภาพสูง ประหยัดพลังงานอย่างยั่งยืน",
        description: "ค่า MEI สูงกว่า 0.7 ในปั๊ม EK ซีรีส์ การออกแบบระบบไฮดรอลิกอัจฉริยะ ช่วยเพิ่มประสิทธิภาพการทำงานและลดการใช้พลังงานได้ถึง 10%+",
        bullets: [
            {
                title: "ประหยัดพลังงาน 10%+",
                description: "เทคโนโลยีมอเตอร์ขั้นสูง ลดต้นทุนการดำเนินงาน",
                icon: <FiZap size={26} />
            },
            {
                title: "ประสิทธิภาพเหนือกว่า",
                description: "เหนือกว่ามาตรฐาน ISO2858 ในปั๊ม EH ซีรีส์",
                icon: <FiTruck size={26} />
            },
            {
                title: "วิศวกรรมขั้นสูง",
                description: "การออกแบบระบบไฮดรอลิกอัจฉริยะ",
                icon: <FiSettings size={26} />
            }
        ],
        imageSrc: "/images/ES+1-500x500.jpg"
    },
    {
        title: "ครอบคลุมทุกการใช้งาน รองรับทุกความต้องการ",
        description: "ปั๊มหลากหลายซีรีส์ ปั๊มดับเพลิง ปั๊มน้ำอุตสาหกรรม ปั๊มน้ำเสีย ปั๊มสุญญากาศ ปั๊มเครื่องยนต์ดีเซล",
        bullets: [
            {
                title: "ปั๊มดับเพลิง UL Listed",
                description: "รุ่น EHF/ESF เพื่อความปลอดภัยสูงสุดในระบบดับเพลิง",
                icon: <FiShield size={26} />
            },
            {
                title: "ปั๊มอุตสาหกรรม & เทศบาล",
                description: "ระบบประปา HVAC ระบบหมุนเวียนน้ำหล่อเย็น ระบบเพิ่มแรงดัน",
                icon: <FiDroplet size={26} />
            },
            {
                title: "ปั๊มน้ำเสีย & ตะกอน",
                description: "รองรับของแข็งขนาดสูงสุด 76 มม. สำหรับโรงบำบัด",
                icon: <FiSettings size={26} />
            }
        ],
        imageSrc: "/images/Eifel_logo.png"
    },
    {
        title: "บำรุงรักษาง่าย ประหยัดเวลาและค่าใช้จ่าย",
        description: "การออกแบบ Back Pull-Out ทำให้ง่ายต่อการติดตั้งและบำรุงรักษา ชิ้นส่วนสามารถเปลี่ยนทดแทนกันได้ในหลายรุ่น",
        bullets: [
            {
                title: "Back Pull-Out Design",
                description: "ง่ายต่อการติดตั้งและบำรุงรักษา ไม่ต้องถอดท่อหรือมอเตอร์",
                icon: <FiTool size={26} />
            },
            {
                title: "ชิ้นส่วนเปลี่ยนทดแทนได้",
                description: "ลดสต็อกอะไหล่ ประหยัดต้นทุน",
                icon: <FiStar size={26} />
            },
            {
                title: "ช่องบำรุงรักษา",
                description: "ในปั๊มน้ำเสีย เพื่อทำความสะอาดได้ง่าย",
                icon: <FiSettings size={26} />
            }
        ],
        imageSrc: "/images/EA-1-500x500.jpg"
    },
]