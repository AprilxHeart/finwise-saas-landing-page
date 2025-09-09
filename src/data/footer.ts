import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "ปั๊มน้ำคุณภาพสูง มาตรฐานสากล รับรอง UL และ ISO ประหยัดพลังงาน เหมาะสำหรับทุกอุตสาหกรรม",
    quickLinks: [
        {
            text: "ผลิตภัณฑ์",
            url: "#products"
        },
        {
            text: "ราคา",
            url: "#pricing"
        },
        {
            text: "รีวิวลูกค้า",
            url: "#testimonials"
        },
        {
            text: "คำถามที่พบบ่อย",
            url: "#faq"
        }
    ],
    email: 'sales@eifelcn.com',
    telephone: '+86 591 38260798',
    socials: {
        facebook: 'https://www.facebook.com/eifelpumps',
        instagram: 'https://www.instagram.com/eifel_pumps_th',
        youtube: 'https://youtube.com/@eifelpumpsthailand',
        // tiktok: 'https://www.tiktok.com/@eifel_pumps_th',
        // line: 'https://line.me/R/ti/p/@eifelpumps'
    }
}