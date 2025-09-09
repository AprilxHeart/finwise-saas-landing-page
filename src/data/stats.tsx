import { BsFillStarFill, BsShieldCheck } from "react-icons/bs";
import { PiDropFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "1000+",
        icon: <PiDropFill size={34} className="text-blue-500" />,
        description: "โครงการที่ติดตั้งสำเร็จทั่วประเทศไทย ครอบคลุมทุกอุตสาหกรรม"
    },
    {
        title: "99.8%",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "ระดับความพึงพอใจจากลูกค้า จากการให้บริการและคุณภาพที่ยอดเยี่ยม"
    },
    {
        title: "24/7",
        icon: <BsShieldCheck size={34} className="text-green-600" />,
        description: "บริการหลังการขายและซ่อมบำรุง พร้อมทีมช่างผู้เชี่ยวชาญ"
    }
];