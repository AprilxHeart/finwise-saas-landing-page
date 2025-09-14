'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import LoadingSpinner from './ui/LoadingSpinner';
import { siteDetails } from '@/data/siteDetails';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, isLoading } = useLanguage();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (isLoading) {
        return (
            <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
                <Container className="!px-0">
                    <nav className="shadow-md md:shadow-none bg-white dark:bg-gray-900 md:bg-transparent dark:md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                        <LoadingSpinner size="sm" text="" />
                    </nav>
                </Container>
            </header>
        );
    }

    const menuItems = [
        { text: t.nav.features, url: "#features" },
        { text: t.nav.services, url: "#services" },
        { text: t.nav.products, url: "#pricing" },
        { text: t.nav.reviews, url: "#testimonials" },
        { text: t.nav.team, url: "#team" },
        { text: t.nav.faq, url: "#faq" },
        { text: t.nav.contact, url: "#contact" }
    ];

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white dark:bg-gray-900 md:bg-transparent dark:md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image 
                            src="/images/Eifel_logo.png" 
                            alt="EIFEL Logo" 
                            width={40} 
                            height={40}
                            className="min-w-fit"
                        />
                        <span className="manrope text-lg font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        
                        {/* Theme and Language Toggles */}
                        <li className="flex items-center gap-2">
                            <ThemeToggle />
                            <LanguageToggle />
                        </li>
                        
                        <li>
                            <Link href="#cta" className="text-white bg-primary hover:bg-primary-accent px-6 py-2 rounded-full transition-colors text-sm font-medium">
                                {t.nav.contact}
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <LanguageToggle />
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">{t.common.menu}</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#cta" className="text-white bg-primary hover:bg-primary-accent px-4 py-2 rounded-full block w-fit text-sm font-medium" onClick={toggleMenu}>
                                {t.nav.contact}
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
