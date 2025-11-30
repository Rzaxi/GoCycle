"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = Math.abs(currentScrollY - lastScrollY);

            // Only trigger if scroll difference is significant (reduces jitter)
            if (scrollDifference < 5) return;

            // Show navbar when at top of page
            if (currentScrollY < 10) {
                setIsVisible(true);
            }
            // Hide when scrolling down, show when scrolling up
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true); // Scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'EcoMarket', href: '/marketplace' },
        { name: 'Edukasi', href: '/edukasi' },
        { name: 'Tentang Kami', href: '/tentang-kami' },
    ];

    return (
        <div className={`
            fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-4
            transform transition-transform duration-500 ease-out will-change-transform
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        `}>
            <nav className="bg-white/90 shadow-lg backdrop-blur-md py-3 w-full max-w-6xl rounded-full border border-white/20 px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-[#2E8B57] rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                                G
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#74B78D]">
                                Go Cycle
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`
                                        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                                        ${isActive
                                            ? 'text-[#2E8B57] bg-green-50 font-bold'
                                            : 'text-gray-600 hover:text-[#2E8B57] hover:bg-gray-50'}
                                    `}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Link href="/login" className="text-gray-600 hover:text-[#2E8B57] font-medium text-sm px-3 py-2 rounded-full transition-colors">
                            Masuk
                        </Link>
                        <Link href="/register" className="bg-[#2E8B57] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#246e45] shadow-lg hover:shadow-green-200 transition-all transform hover:-translate-y-0.5">
                            Daftar
                        </Link>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-600 hover:text-[#2E8B57] focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
