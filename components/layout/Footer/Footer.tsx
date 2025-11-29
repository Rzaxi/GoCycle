"use client";

import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* 1. Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                                <span className="text-white font-black text-xl">G</span>
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Go Cycle
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Platform digital untuk masa depan Indonesia yang lebih hijau. Kelola sampahmu, selamatkan bumimu.
                        </p>
                        <div className="flex gap-4">
                            {[IconBrandInstagram, IconBrandTwitter, IconBrandLinkedin, IconBrandYoutube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Menu Utama</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Beranda", href: "/" },
                                { name: "EcoMarket", href: "/marketplace" },
                                { name: "Edukasi", href: "/edukasi" },
                                { name: "Tentang Kami", href: "/tentang-kami" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-emerald-400 transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Hubungi Kami</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <IconMapPin className="text-emerald-500 shrink-0" size={24} />
                                <span className="text-gray-400">
                                    Jl. Sudirman No. 123,<br />Jakarta Selatan, 12190
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <IconMail className="text-emerald-500 shrink-0" size={24} />
                                <span className="text-gray-400">hello@gocycle.id</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <IconPhone className="text-emerald-500 shrink-0" size={24} />
                                <span className="text-gray-400">+62 812 3456 7890</span>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Newsletter</h3>
                        <p className="text-gray-400 mb-6">
                            Dapatkan tips daur ulang dan info terbaru langsung di inbox Anda.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email Anda"
                                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                            />
                            <button className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                                Berlangganan
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Go Cycle. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
