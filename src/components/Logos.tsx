'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Logos: React.FC = () => {
    const { language, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <section id="logos" className="py-16 px-5 bg-gray-50 dark:bg-gray-900 transition-colors">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="w-96 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-8"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mb-2"></div>
                                <div className="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="logos" className="py-16 px-5 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-8">
                    {language === 'th' 
                        ? <>ไว้วางใจโดยองค์กรชั้นนำ <span className="text-primary dark:text-blue-400 font-bold">1000+</span> แห่งทั่วประเทศไทย</>
                        : <>Trusted by <span className="text-primary dark:text-blue-400 font-bold">1000+</span> leading organizations across Thailand</>
                    }
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity duration-300">
                    {/* โรงพยาบาล */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                            {language === 'th' ? 'โรงพยาบาล' : 'Hospitals'}
                        </span>
                    </div>

                    {/* โรงงานอุตสาหกรรม */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                            {language === 'th' ? 'โรงงาน' : 'Factories'}
                        </span>
                    </div>

                    {/* โรงแรม */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                            {language === 'th' ? 'โรงแรม' : 'Hotels'}
                        </span>
                    </div>

                    {/* ห้างสรรพสินค้า */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                            {language === 'th' ? 'ห้างสรรพสินค้า' : 'Malls'}
                        </span>
                    </div>

                    {/* ศูนย์การค้า */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                            {language === 'th' ? 'ศูนย์การค้า' : 'Shopping Centers'}
                        </span>
                    </div>

                    {/* อพาร์ทเมนต์ */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                            {language === 'th' ? 'อพาร์ทเมนต์' : 'Apartments'}
                        </span>
                    </div>
                </div>

                {/* คำรับรอง */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {language === 'th' ? 'การรับรองคุณภาพระดับสากล' : 'International Quality Certifications'}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-700 dark:text-gray-300">ISO 9001</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                {language === 'th' ? 'มาตรฐานคุณภาพ' : 'Quality Standard'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-700 dark:text-gray-300">UL Listed</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                {language === 'th' ? 'ความปลอดภัย' : 'Safety Standard'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-700 dark:text-gray-300">CE Mark</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                {language === 'th' ? 'มาตรฐานยุโรป' : 'European Standard'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-700 dark:text-gray-300">TIS</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                {language === 'th' ? 'มาตรฐานไทย' : 'Thai Standard'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logos