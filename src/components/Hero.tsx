import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <h1 className="text-3xl md:text-5xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-sm md:text-base text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-fit mx-auto">
                    <Link 
                        href="#pricing" 
                        className="bg-primary hover:bg-primary-accent text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                    >
                        ดูผลิตภัณฑ์
                    </Link>
                    <Link 
                        href="#cta" 
                        className="bg-white hover:bg-gray-100 text-primary border-2 border-primary font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                    >
                        ติดต่อเรา
                    </Link>
                </div>
                <Image
                    src={heroDetails.centerImageSrc}
                    width={400}
                    height={400}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority={true}
                    unoptimized={true}
                    alt="EIFEL Water Pump"
                    className='relative mt-12 md:mt-16 mx-auto z-10 rounded-lg'
                />
            </div>
        </section>
    );
};

export default Hero;
