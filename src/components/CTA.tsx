'use client';

import { ctaDetails } from "@/data/cta"
import { useLanguage } from "@/contexts/LanguageContext";

const CTA: React.FC = () => {
    const { t, language, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <section id="cta" className="my-20">
                <div className="relative mx-auto py-20 px-6">
                    <div className="h-full w-full">
                        <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-luxury-black via-secondary to-primary bg-[linear-gradient(to_right,#2c2c2c_1px,transparent_1px),linear-gradient(to_bottom,#2c2c2c_1px,transparent_1px)] bg-[size:6rem_4rem]">
                            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,rgba(212,175,55,0.1),transparent)]"></div>
                        </div>
                        <div className="h-full flex flex-col items-center justify-center text-white text-center max-w-4xl mx-auto">
                            <div className="w-64 h-8 bg-gray-300 rounded animate-pulse mb-6"></div>
                            <div className="w-80 h-6 bg-gray-300 rounded animate-pulse mb-10"></div>
                            <div className="flex gap-6">
                                <div className="w-40 h-12 bg-gray-300 rounded animate-pulse"></div>
                                <div className="w-40 h-12 bg-gray-300 rounded animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="cta" className="my-20">
            <div className="relative mx-auto py-20 px-6">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-luxury-black via-secondary to-primary bg-[linear-gradient(to_right,#2c2c2c_1px,transparent_1px),linear-gradient(to_bottom,#2c2c2c_1px,transparent_1px)] bg-[size:6rem_4rem] dark:from-gray-900 dark:via-gray-800 dark:to-primary">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,rgba(212,175,55,0.1),transparent)] dark:bg-[radial-gradient(circle_600px_at_50%_500px,rgba(59,130,246,0.1),transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 max-w-3xl pump-text-shadow leading-tight">
                            {t.cta.title}
                        </h2>

                        <p className="mx-auto max-w-2xl text-gray-200 dark:text-gray-300 text-lg lg:text-xl leading-relaxed mb-10">
                            {t.cta.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <a 
                                href={ctaDetails.facebookUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-primary-accent text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-base min-w-[200px] flex items-center justify-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                📞 รับใบเสนอราคาฟรี
                            </a>
                            <a 
                                href={ctaDetails.lineUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-base min-w-[200px] flex items-center justify-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771z"/>
                                </svg>
                                🚀 เริ่มต้นใช้งานเลย
                            </a>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-300 dark:text-gray-400">
                            <div className="flex flex-col items-center">
                                <svg className="w-6 h-6 mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-sm">{ctaDetails.phoneNumber}</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg className="w-6 h-6 mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm">{ctaDetails.email}</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg className="w-6 h-6 mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm">
                                    {language === 'th' ? 'จันทร์-ศุกร์ 8:00-17:00' : 'Mon-Fri 8:00-17:00'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA