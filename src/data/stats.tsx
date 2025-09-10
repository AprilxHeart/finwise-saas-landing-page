import { BsFillStarFill, BsShieldCheck } from "react-icons/bs";
import { PiDropFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "1000+",
        icon: <PiDropFill size={34} className="text-blue-500" />,
        description: {
            th: "โครงการที่ติดตั้งสำเร็จทั่วประเทศไทย ครอบคลุมทุกอุตสาหกรรม",
            en: "Successfully installed projects across Thailand, covering all industries"
        }
    },
    {
        title: "99.8%",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: {
            th: "ระดับความพึงพอใจจากลูกค้า จากการให้บริการและคุณภาพที่ยอดเยี่ยม",
            en: "Customer satisfaction rate from excellent service and quality"
        }
    },
    {
        title: "24/7",
        icon: <BsShieldCheck size={34} className="text-green-600" />,
        description: {
            th: "บริการหลังการขายและซ่อมบำรุง พร้อมทีมช่างผู้เชี่ยวชาญ",
            en: "After-sales service and maintenance with expert technician team"
        }
    }
];