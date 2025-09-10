'use client';

import React from 'react';
import { stats } from "@/data/stats";
import { useLanguage } from '@/contexts/LanguageContext';

const Stats: React.FC = () => {
    const { t, language, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <section id="stats" className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-3xl transition-colors">
                <div className="text-center mb-12">
                    <div className="w-64 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-4"></div>
                    <div className="w-96 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
                </div>
                <div className="grid sm:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 animate-pulse"></div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="stats" className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-3xl transition-colors">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {t.stats.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {t.stats.subtitle}
                </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
                {stats.map((stat) => (
                    <div key={stat.title} className="text-center group">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold text-primary dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {typeof stat.description === 'object' 
                                    ? stat.description[language] 
                                    : stat.description
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats