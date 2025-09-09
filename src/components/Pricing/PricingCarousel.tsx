'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import PricingColumn from './PricingColumn';
import { IPricing } from '@/types';

interface PricingCarouselProps {
    tiers: IPricing[];
}

const PricingCarousel: React.FC<PricingCarouselProps> = ({ tiers }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    
    // Responsive items per view
    const [itemsPerView, setItemsPerView] = useState(3);
    
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1); // Mobile: 1 card
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2); // Tablet: 2 cards
            } else {
                setItemsPerView(3); // Desktop: 3 cards
            }
        };
        
        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);
    
    const maxIndex = Math.max(0, tiers.length - itemsPerView);
    
    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, [isTransitioning, maxIndex]);
    
    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    }, [isTransitioning, maxIndex]);
    
    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(Math.min(index, maxIndex));
    }, [isTransitioning, maxIndex]);

    // Touch handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 300);
        
        return () => clearTimeout(timer);
    }, [currentIndex]);
    
    // Auto-play functionality (หยุดเมื่อ hover)
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            if (!isTransitioning) {
                nextSlide();
            }
        }, 6000); // เลื่อนทุก 6 วินาที
        
        return () => clearInterval(interval);
    }, [isTransitioning, nextSlide, isPaused]);
    
    return (
        <div className="relative w-full">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl">
                <div 
                    ref={carouselRef}
                    className="flex transition-transform duration-300 ease-in-out select-none"
                    style={{ 
                        transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                        width: `${(tiers.length / itemsPerView) * 100}%`
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {tiers.map((tier, index) => (
                        <div 
                            key={tier.name} 
                            className="flex-shrink-0 px-2 md:px-4"
                            style={{ width: `${100 / tiers.length}%` }}
                        >
                            <PricingColumn 
                                tier={tier} 
                                highlight={index === 1} // Highlight EHF/ESF Series (ปั๊มดับเพลิง)
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Navigation Arrows - ซ่อนบนมือถือ */}
            <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 z-10 items-center justify-center"
                aria-label="Previous"
            >
                <FiChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 z-10 items-center justify-center"
                aria-label="Next"
            >
                <FiChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isTransitioning}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentIndex 
                                ? 'bg-primary scale-110' 
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`ดูซีรีส์ที่ ${index + 1}`}
                    />
                ))}
            </div>
            
            {/* Series Counter & Instructions */}
            <div className="text-center mt-4">
                <p className="text-sm text-gray-500 mb-2">
                    แสดง {Math.min(currentIndex + itemsPerView, tiers.length)} จาก {tiers.length} ซีรีส์ปั๊มน้ำ Eifel
                </p>
                <p className="text-xs text-gray-400 md:hidden">
                    📱 ปัดซ้าย-ขวาเพื่อดูซีรีส์อื่น
                </p>
                <p className="text-xs text-gray-400 hidden md:block">
                    🖱️ ใช้ลูกศรหรือจุดด้านล่างเพื่อเลื่อนดู
                </p>
            </div>
        </div>
    );
};

export default PricingCarousel;
