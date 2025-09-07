import { BsFillStarFill, BsShieldCheck } from "react-icons/bs";
import { PiDropFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "25+",
        icon: <PiDropFill size={34} className="text-blue-500" />,
        description: "ปีในการผลิตปั๊มน้ำคุณภาพ ด้วยเทคโนโลยีและประสบการณ์จากเยอรมนี"
    },
    {
        title: "4.8",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "คะแนนรีวิวจากลูกค้า จากการให้บริการและคุณภาพที่ยอดเยี่ยม"
    },
    {
        title: "80+ ",
        icon: <BsShieldCheck size={34} className="text-green-600" />,
        description: "ศูนย์บริการทั่วประเทศ พร้อมช่างผู้เชี่ยวชาญและอะไหล่แท้"
    }
];