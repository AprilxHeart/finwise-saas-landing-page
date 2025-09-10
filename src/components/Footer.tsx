'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <footer className="bg-hero-background dark:bg-gray-900 text-foreground py-10">
                <div className="max-w-7xl w-full mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="space-y-4">
                                <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="w-48 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="w-40 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="bg-hero-background dark:bg-gray-900 text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-3">
                        <Image 
                            src={siteDetails.logoPath || "/images/Eifel_logo.png"} 
                            alt={`${siteDetails.siteName} Logo`} 
                            width={32} 
                            height={32}
                            className="min-w-fit"
                        />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {t.footer.description}
                    </p>
                    
                    {/* Company Info */}
                    {siteDetails.companyInfo && (
                        <div className="mt-4 text-sm text-foreground-accent">
                            <p>{siteDetails.companyInfo.name}</p>
                            {siteDetails.companyInfo.address && (
                                <p className="mt-1">{siteDetails.companyInfo.address}</p>
                            )}
                            {siteDetails.companyInfo.workingHours && (
                                <p className="mt-1">{t.footer.workingHours}: {siteDetails.companyInfo.workingHours}</p>
                            )}
                        </div>
                    )}
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
                    <ul className="text-foreground-accent">
                        <li className="mb-2">
                            <Link href="#features" className="hover:text-foreground transition-colors">
                                {t.nav.features}
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#pricing" className="hover:text-foreground transition-colors">
                                {t.nav.products}
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#testimonials" className="hover:text-foreground transition-colors">
                                {t.nav.reviews}
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#team" className="hover:text-foreground transition-colors">
                                {t.nav.team}
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#faq" className="hover:text-foreground transition-colors">
                                {t.nav.faq}
                            </Link>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>

                    {/* Primary Thailand Contact */}
                    {siteDetails.companyInfo?.phone && (
                        <a 
                            href={`tel:${siteDetails.companyInfo.phone}`} 
                            className="block text-foreground-accent hover:text-foreground transition-colors mb-2"
                        >
                            📞 {siteDetails.companyInfo.phone}
                        </a>
                    )}

                    {siteDetails.companyInfo?.email && (
                        <a 
                            href={`mailto:${siteDetails.companyInfo.email}`} 
                            className="block text-foreground-accent hover:text-foreground transition-colors mb-2"
                        >
                            ✉️ {siteDetails.companyInfo.email}
                        </a>
                    )}

                    {siteDetails.companyInfo?.lineId && (
                        <a 
                            href={`https://line.me/R/ti/p/${siteDetails.companyInfo.lineId}`} 
                            className="block text-foreground-accent hover:text-foreground transition-colors mb-2"
                        >
                            💬 Line: {siteDetails.companyInfo.lineId}
                        </a>
                    )}

                    {/* Alternative Contact Info */}
                    <div className="mt-4 pt-4 border-t border-gray-600 dark:border-gray-700">
                        <p className="text-sm text-gray-400 mb-2">{t.footer.headOffice}</p>
                        {footerDetails.email && (
                            <a 
                                href={`mailto:${footerDetails.email}`} 
                                className="block text-sm text-foreground-accent hover:text-foreground transition-colors"
                            >
                                ✉️ {footerDetails.email}
                            </a>
                        )}
                        {footerDetails.telephone && (
                            <a 
                                href={`tel:${footerDetails.telephone}`} 
                                className="block text-sm text-foreground-accent hover:text-foreground transition-colors"
                            >
                                📞 {footerDetails.telephone}
                            </a>
                        )}
                    </div>

                    {/* Social Media */}
                    {footerDetails.socials && (
                        <div className="mt-5">
                            <h5 className="text-sm font-medium mb-2">{t.footer.followUs}</h5>
                            <div className="flex items-center gap-4 flex-wrap">
                                {Object.keys(footerDetails.socials).map(platformName => {
                                    if (platformName && footerDetails.socials[platformName]) {
                                        return (
                                            <Link
                                                href={footerDetails.socials[platformName]}
                                                key={platformName}
                                                aria-label={`ติดตาม ${siteDetails.siteName} บน ${platformName}`}
                                                className="text-foreground-accent hover:text-foreground transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {getPlatformIconByName(platformName)}
                                            </Link>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-600 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-6 text-center text-foreground-accent">
                    <p className="mb-2">
                        {t.footer.copyright}
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <p>{t.footer.madeWith} <a href="https://nexilaunch.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Nexi Launch</a></p>
                        <span className="hidden md:inline">|</span>
                        <p>{t.footer.uiKitBy} <a href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Youthmind</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
