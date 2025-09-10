'use client';

import React from 'react';
import Image from 'next/image';
import { useTestimonials } from '@/data/testimonials';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials: React.FC = () => {
    const { isLoading } = useLanguage();
    const testimonials = useTestimonials();

    if (isLoading) {
        return (
            <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="">
                        <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                            <div className="ml-4">
                                <div className="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                                <div className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        </div>
                        <div className="w-full h-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className=""
                >
                    <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                        <Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            width={50}
                            height={50}
                            className="rounded-full shadow-md"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-secondary dark:text-blue-400">{testimonial.name}</h3>
                            <p className="text-sm text-foreground-accent dark:text-gray-400">{testimonial.role}</p>
                        </div>
                    </div>
                    <p className="text-foreground-accent dark:text-gray-400 text-center lg:text-left">&quot;{testimonial.message}&quot;</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
