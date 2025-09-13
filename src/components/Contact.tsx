'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteDetails } from '@/data/siteDetails';

const Contact: React.FC = () => {
    const { t, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-4"></div>
                        <div className="w-64 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            ))}
                        </div>
                        <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t.contact.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t.contact.subtitle}<br/>
                        <span className="text-primary font-semibold">{t.contact.readyToServe}</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                                <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {t.contact.companyInfo}
                            </h3>
                            
                            {/* Company Name */}
                            <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-lg border-l-4 border-primary">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-lg">
                                    Eifel Thailand
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                                    {t.contact.representative}: {siteDetails.companyInfo.name}
                                </p>
                            </div>

                            {/* Address */}
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t.footer.address}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {siteDetails.companyInfo.address}
                                    </p>
                                </div>
                            </div>

                            {/* Phone Numbers */}
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                                        📞 {t.footer.phone}
                                        <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                                            24 ชม.
                                        </span>
                                    </h4>
                                    <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <a 
                                                href={`tel:${siteDetails.companyInfo.phone}`}
                                                className="text-primary hover:text-primary-accent transition-colors font-medium text-lg"
                                            >
                                                {siteDetails.companyInfo.phone}
                                            </a>
                                            <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                                                หลัก
                                            </span>
                                        </div>
                                        {siteDetails.companyInfo.alternativePhones?.map((phone, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <a 
                                                    href={`tel:${phone}`}
                                                    className="text-primary hover:text-primary-accent transition-colors font-medium text-lg"
                                                >
                                                    {phone}
                                                </a>
                                                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                                                    สำรอง
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Fax */}
                            {siteDetails.companyInfo.fax && (
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v14a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t.footer.fax}</h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {siteDetails.companyInfo.fax}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Email */}
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                                        ✉️ {t.footer.email}
                                        <span className="ml-2 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
                                            ตอบภายใน 2 ชม.
                                        </span>
                                    </h4>
                                    <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <a 
                                                href={`mailto:${siteDetails.companyInfo.email}`}
                                                className="text-primary hover:text-primary-accent transition-colors font-medium"
                                            >
                                                {siteDetails.companyInfo.email}
                                            </a>
                                            <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                                                หลัก
                                            </span>
                                        </div>
                                        {siteDetails.companyInfo.alternativeEmail && (
                                            <div className="flex items-center space-x-2">
                                                <a 
                                                    href={`mailto:${siteDetails.companyInfo.alternativeEmail}`}
                                                    className="text-primary hover:text-primary-accent transition-colors font-medium"
                                                >
                                                    {siteDetails.companyInfo.alternativeEmail}
                                                </a>
                                                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                                                    สำรอง
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t.footer.workingHours}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {siteDetails.companyInfo.workingHours}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form or Map */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                            <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                                                        {t.contact.form.title} - รับคำปรึกษาฟรี
                        </h3>
                        
                        <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                            <p className="text-sm text-yellow-800 dark:text-yellow-200 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                💡 <strong>เคล็ดลับ:</strong> ยิ่งบอกรายละเอียดมาก เราให้คำแนะนำได้แม่นยำขึ้น!
                            </p>
                        </div>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t.contact.form.name}
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                                        placeholder={t.contact.form.namePlaceholder}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t.contact.form.company}
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                                        placeholder={t.contact.form.companyPlaceholder}
                                    />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t.contact.form.email}
                                    </label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                                        placeholder={t.contact.form.emailPlaceholder}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t.contact.form.phone}
                                    </label>
                                    <input 
                                        type="tel" 
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                                        placeholder={t.contact.form.phonePlaceholder}
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t.contact.form.productType}
                                </label>
                                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors">
                                    <option value="">{t.contact.form.selectProduct}</option>
                                    <option value="industrial">{t.contact.form.productOptions.industrial}</option>
                                    <option value="fire">{t.contact.form.productOptions.fire}</option>
                                    <option value="wastewater">{t.contact.form.productOptions.wastewater}</option>
                                    <option value="vacuum">{t.contact.form.productOptions.vacuum}</option>
                                    <option value="consultation">{t.contact.form.productOptions.consultation}</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    {t.contact.form.message}
                                </label>
                                <textarea 
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                                    placeholder={t.contact.form.messagePlaceholder}
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-accent text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                {t.contact.form.send}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Quick Contact Actions */}
                <div className="mt-12">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-6">
                        🚀 {t.contact.quickContact} - {t.contact.quickContactSuffix}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a 
                            href={`tel:${siteDetails.companyInfo.phone}`}
                            className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <div className="text-left">
                                <div className="font-semibold">📞 {t.contact.callNow}</div>
                                <div className="text-xs opacity-90">{t.contact.callDescription}</div>
                            </div>
                        </a>
                        
                        <a 
                            href={`mailto:${siteDetails.companyInfo.email}?subject=สอบถามข้อมูลปั๊มน้ำ&body=สวัสดีครับ/ค่ะ ต้องการสอบถามข้อมูลเกี่ยวกับ...`}
                            className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div className="text-left">
                                <div className="font-semibold">✉️ {t.contact.sendEmail}</div>
                                <div className="text-xs opacity-90">{t.contact.emailDescription}</div>
                            </div>
                        </a>
                        
                        {siteDetails.companyInfo.lineId && (
                            <a 
                                href={`https://line.me/R/ti/p/${siteDetails.companyInfo.lineId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771z"/>
                                </svg>
                                <div className="text-left">
                                    <div className="font-semibold">💬 Line Chat</div>
                                    <div className="text-xs opacity-90">แชทสดทันที</div>
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
