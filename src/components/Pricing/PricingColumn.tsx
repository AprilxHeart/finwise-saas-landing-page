import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", { "shadow-xl border-primary": highlight })}>
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">{name}</h3>
                <p className="text-3xl md:text-5xl font-bold mb-6">
                    <span className={clsx({ "text-primary": highlight, "text-secondary": !highlight })}>
                        ฿{price}
                    </span>
                </p>
                <button className={clsx("w-full py-3 px-4 rounded-full transition-all duration-300 font-semibold", { 
                    "bg-primary hover:bg-primary-accent text-luxury-black shadow-lg transform hover:scale-105": highlight, 
                    "bg-hero-background hover:bg-gray-200 text-secondary": !highlight 
                })}>
                    สั่งซื้อเลย
                </button>
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0 text-secondary">คุณสมบัติ</p>
                <p className="text-foreground-accent mb-5">สิ่งที่คุณจะได้รับ</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <BsFillCheckCircleFill className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn