import { FiAward, FiHeart, FiShield, FiStar, FiTruck, FiWatch } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "งานฝีมือไทยแท้",
        description: "นาฬิกาทุกเรือนผลิตด้วยความพิถีพิถันของช่างฝีมือไทย ผสมผสานดีไซน์ไทยกับเทคโนโลยีสมัยใหม่",
        bullets: [
            {
                title: "ลวดลายไทยประณีต",
                description: "หน้าปัดตกแต่งด้วยลวดลายไทยอันเป็นเอกลักษณ์",
                icon: <FiHeart size={26} />
            },
            {
                title: "วัสดุคุณภาพสูง",
                description: "ใช้เครื่องจักรสวิสแท้และกระจกแซฟไฟร์",
                icon: <FiStar size={26} />
            },
            {
                title: "ประกอบในไทย",
                description: "สนับสนุนเศรษฐกิจไทยด้วยการผลิตในประเทศ",
                icon: <FiAward size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "คอลเลกชั่นหลากหลาย",
        description: "เลือกสรรนาฬิกาให้เหมาะกับทุกโอกาส ตั้งแต่สไตล์ลำลองไปจนถึงเฟอร์มอลสุดหรู",
        bullets: [
            {
                title: "Classic Collection",
                description: "นาฬิกาคลาสสิกสำหรับผู้ที่ชื่นชอบความเรียบง่าย",
                icon: <FiWatch size={26} />
            },
            {
                title: "Royal Collection", 
                description: "นาฬิกาหรูหราสำหรับโอกาสพิเศษ",
                icon: <FiStar size={26} />
            },
            {
                title: "Sport Collection",
                description: "นาฬิกาสปอร์ตสำหรับผู้ที่ชีวิตเคลื่อนไหว",
                icon: <FiTruck size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "บริการระดับพรีเมียม",
        description: "ความมั่นใจในทุกการซื้อด้วยบริการหลังการขายที่ครบครันและการรับประกันยาวนาน",
        bullets: [
            {
                title: "รับประกัน 2 ปี",
                description: "รับประกันคุณภาพและการใช้งานเต็ม 2 ปี",
                icon: <FiShield size={26} />
            },
            {
                title: "ส่งฟรีทั่วไทย",
                description: "ส่งถึงบ้านฟรีทุกคำสั่งซื้อ พร้อมบรรจุภัณฑ์พิเศษ",
                icon: <FiTruck size={26} />
            },
            {
                title: "ศูนย์บริการครบครัน",
                description: "ศูนย์บริการทั่วประเทศ พร้อมบริการซ่อมและดูแลรักษา",
                icon: <FiAward size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]