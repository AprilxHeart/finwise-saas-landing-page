'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { heroDetails } from '@/data/hero';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
    const { t, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <section className="relative flex items-center justify-center min-h-screen pb-0 pt-32 md:pt-40 px-5">
                <div className="text-center max-w-7xl mx-auto">
                    <div className="w-64 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-6"></div>
                    <div className="w-96 h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-6"></div>
                    <div className="w-80 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-10"></div>
                </div>
            </section>
        );
    }

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] dark:via-[rgba(30,41,59,0.5)] dark:to-[rgba(15,23,42,0.5)]">
            </div>

            <div className="text-center max-w-7xl mx-auto">
                <div className="mb-8">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        {t.hero.trustBadge}
                    </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-5xl mx-auto mb-6 leading-tight">
                    {t.hero.title}
                    <br />
                    <span className="text-primary">{t.hero.subtitle}</span>
                </h1>
                
                <p className="mt-6 text-lg md:text-xl text-foreground-accent max-w-3xl mx-auto leading-relaxed mb-10">
                    {t.hero.description}
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 w-fit mx-auto">
                    <Link 
                        href="#pricing" 
                        className="bg-primary hover:bg-primary-accent text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-base min-w-[200px] flex items-center justify-center gap-3"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        {t.hero.ctaPrimary}
                    </Link>
                    <Link 
                        href="#cta" 
                        className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-primary border-2 border-primary font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-base min-w-[200px] flex items-center justify-center gap-3"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {t.hero.ctaSecondary}
                    </Link>
                </div>

                {/* Hero Image with enhanced styling */}
                <div className="relative mt-16 md:mt-20">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={500}
                        height={500}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority={true}
                        unoptimized={true}
                        alt="EIFEL Water Pump - ปั๊มน้ำคุณภาพสูง"
                        className='relative mx-auto z-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500'
                    />
                    {/* Floating elements */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
                </div>

                {/* Trust indicators */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">1000+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{t.hero.stats.projects}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">20+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{t.hero.stats.experience}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{t.hero.stats.support}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">99.8%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{t.hero.stats.satisfaction}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
