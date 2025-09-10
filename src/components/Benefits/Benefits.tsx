'use client';

import React from 'react';
import BenefitSection from "./BenefitSection";
import { useBenefits } from "@/data/benefits";
import { useLanguage } from '@/contexts/LanguageContext';

const Benefits: React.FC = () => {
    const { isLoading } = useLanguage();
    const benefits = useBenefits();

    if (isLoading) {
        return (
            <div id="features">
                <h2 className="sr-only">Features</h2>
                {[1, 2, 3].map((i) => (
                    <div key={i} className="py-16">
                        <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div id="features">
            <h2 className="sr-only">Features</h2>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits