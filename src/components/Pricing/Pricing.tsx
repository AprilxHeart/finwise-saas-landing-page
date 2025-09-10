'use client';

import PricingCarousel from "./PricingCarousel";
import { usePricing } from "@/data/pricing";

const Pricing: React.FC = () => {
    const tiers = usePricing();
    
    return (
        <div className="w-full">
            <PricingCarousel tiers={tiers} />
        </div>
    )
}

export default Pricing