import { BsFillStarFill, BsShieldCheck } from "react-icons/bs";
import { PiHeartFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "15+",
        icon: <PiHeartFill size={34} className="text-red-500" />,
        description: "ปีในการสร้างสรรค์นาฬิกาคุณภาพ ด้วยประสบการณ์และความเชี่ยวชาญ"
    },
    {
        title: "4.9",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "คะแนนรีวิวจากลูกค้า จากการให้บริการและคุณภาพที่ยอดเยี่ยม"
    },
    {
        title: "50+ ",
        icon: <BsShieldCheck size={34} className="text-green-600" />,
        description: "ศูนย์บริการทั่วประเทศ พร้อมดูแลและบำรุงรักษานาฬิกาของคุณ"
    }
];