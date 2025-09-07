import { FiAward, FiShield, FiStar, FiTruck, FiZap, FiDroplet, FiSettings } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "เทคโนโลยีเยอรมัน",
        description: "ปั๊มน้ำทุกตัวผลิตด้วยเทคโนโลยีจากเยอรมนี มาตรฐานคุณภาพยุโรป ทนทานใช้งานยาวนาน",
        bullets: [
            {
                title: "มอเตอร์ประหยัดไฟ",
                description: "เทคโนโลยีมอเตอร์ขั้นสูง ประหยัดไฟได้มากกว่า 30%",
                icon: <FiZap size={26} />
            },
            {
                title: "วัสดุคุณภาพสูง",
                description: "ใช้วัสดุสแตนเลสสตีลและเหล็กหล่อชั้นดี ทนต่อการกัดกร่อน",
                icon: <FiStar size={26} />
            },
            {
                title: "มาตรฐานยุโรป",
                description: "ผ่านการทดสอบมาตรฐาน CE และ ISO คุณภาพระดับสากล",
                icon: <FiAward size={26} />
            }
        ],
        imageSrc: "/images/EA-1-500x500.jpg"
    },
    {
        title: "หลากหลายรุ่น",
        description: "เลือกปั๊มน้ำให้เหมาะกับทุกการใช้งาน ตั้งแต่บ้านเดี่ยวไปจนถึงโรงงานอุตสาหกรรม",
        bullets: [
            {
                title: "ปั๊มน้ำใส EA Series",
                description: "สำหรับบ้านพักอาศัย เงียบ ประหยัดไฟ",
                icon: <FiDroplet size={26} />
            },
            {
                title: "ปั๊มน้ำเสีย ES Series", 
                description: "สำหรับระบบบำบัดน้ำเสีย ทนทาน เชื่อถือได้",
                icon: <FiSettings size={26} />
            },
            {
                title: "ปั๊มอุตสาหกรรม",
                description: "สำหรับโรงงาน กำลังสูง ใช้งานต่อเนื่อง 24 ชั่วโมง",
                icon: <FiTruck size={26} />
            }
        ],
        imageSrc: "/images/ES+1-500x500.jpg"
    },
    {
        title: "บริการระดับพรีเมียม",
        description: "ความมั่นใจในทุกการซื้อด้วยบริการหลังการขายที่ครบครันและการรับประกันยาวนาน",
        bullets: [
            {
                title: "รับประกัน 3 ปี",
                description: "รับประกันคุณภาพและการใช้งานเต็ม 3 ปี",
                icon: <FiShield size={26} />
            },
            {
                title: "ส่งฟรีทั่วไทย",
                description: "ส่งถึงหน้างานฟรีทุกคำสั่งซื้อ พร้อมติดตั้ง",
                icon: <FiTruck size={26} />
            },
            {
                title: "ศูนย์บริการครบครัน",
                description: "ศูนย์บริการทั่วประเทศ พร้อมอะไหล่แท้และช่างผู้เชี่ยวชาญ",
                icon: <FiAward size={26} />
            }
        ],
        imageSrc: "/images/Eifel_logo.png"
    },
]