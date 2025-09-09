import clsx from "clsx";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiPhone, FiMail } from "react-icons/fi";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features, imageSrc, category, description } = tier;

    return (
        <div className={clsx(
            "w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg", 
            { "shadow-xl border-primary ring-2 ring-primary ring-opacity-20": highlight }
        )}>
            {/* Product Image */}
            {imageSrc && (
                <div className="relative h-48 w-full">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {category && (
                        <div className="absolute top-3 left-3">
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                {category}
                            </span>
                        </div>
                    )}
                    {highlight && (
                        <div className="absolute top-3 right-3">
                            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                แนะนำ
                            </span>
                        </div>
                    )}
                </div>
            )}

            {/* Content */}
            <div className="flex flex-col flex-grow">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-semibold mb-2 text-secondary">{name}</h3>
                    {description && (
                        <p className="text-sm text-gray-600 mb-4">{description}</p>
                    )}
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">{price}</span>
                        <div className="flex gap-2">
                            <button className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors group">
                                <FiPhone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                            </button>
                            <button className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors group">
                                <FiMail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                    <button className={clsx(
                        "w-full py-3 px-4 rounded-full transition-all duration-300 font-semibold", 
                        { 
                            "bg-primary hover:bg-primary-accent text-white shadow-lg transform hover:scale-105": highlight, 
                            "bg-gray-100 hover:bg-gray-200 text-secondary hover:text-primary": !highlight 
                        }
                    )}>
                        สอบถามข้อมูล
                    </button>
                </div>

                {/* Features */}
                <div className="p-6 flex-grow">
                    <p className="font-semibold mb-2 text-secondary">คุณสมบัติเด่น</p>
                    <ul className="space-y-3">
                        {features.slice(0, 6).map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <BsFillCheckCircleFill className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                            </li>
                        ))}
                        {features.length > 6 && (
                            <li className="text-sm text-gray-400 font-medium">
                                +{features.length - 6} คุณสมบัติเพิ่มเติม
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PricingColumn