import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
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
                        {footerDetails.subheading}
                    </p>
                    
                    {/* Company Info */}
                    {siteDetails.companyInfo && (
                        <div className="mt-4 text-sm text-foreground-accent">
                            <p>{siteDetails.companyInfo.name}</p>
                            {siteDetails.companyInfo.address && (
                                <p className="mt-1">{siteDetails.companyInfo.address}</p>
                            )}
                            {siteDetails.companyInfo.workingHours && (
                                <p className="mt-1">{siteDetails.companyInfo.workingHours}</p>
                            )}
                        </div>
                    )}
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground transition-colors">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>

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
                    <div className="mt-4 pt-4 border-t border-gray-600">
                        <p className="text-sm text-gray-400 mb-2">สำนักงานใหญ่ (จีน):</p>
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
                        <div className="mt-5 flex items-center gap-4 flex-wrap">
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
                    )}
                </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-600">
                <div className="max-w-7xl mx-auto px-6 text-center text-foreground-accent">
                    <p className="mb-2">
                        {siteDetails.metadata?.copyright || `© ${new Date().getFullYear()} ${siteDetails.siteName}. All rights reserved.`}
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500">
                        <p>Made with ♥ by <a href="https://nexilaunch.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Nexi Launch</a></p>
                        <span className="hidden md:inline">|</span>
                        <p>UI kit by <a href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Youthmind</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
