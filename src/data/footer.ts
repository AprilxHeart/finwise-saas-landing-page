import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "นาฬิกาไทยคุณภาพพรีเมียม ผสมผสานดีไซน์ไทยกับคุณภาพสากล",
    quickLinks: [
        {
            text: "คอลเลกชั่น",
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
    email: 'info@wisewatch.co.th',
    telephone: '02-123-4567',
    socials: {
        facebook: 'https://www.facebook.com/wisewatch',
        instagram: 'https://www.instagram.com/wisewatch_th',
        youtube: 'https://youtube.com/@wisewatchthailand',
        // tiktok: 'https://www.tiktok.com/@wisewatch_th',
        // line: 'https://line.me/R/ti/p/@wisewatch'
    }
}