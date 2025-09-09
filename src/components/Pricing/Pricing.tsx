import PricingCarousel from "./PricingCarousel";
import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    return (
        <div className="w-full">
            <PricingCarousel tiers={tiers} />
        </div>
    )
}

export default Pricing