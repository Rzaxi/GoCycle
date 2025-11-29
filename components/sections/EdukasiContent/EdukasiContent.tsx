"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    IconBulb,
    IconTools,
    IconNews,
    IconClock,
    IconChartBar,
    IconArrowRight,
    IconLeaf,
    IconHeart,
    IconShare
} from "@tabler/icons-react";

// Mock Data
const tipsData = [
    {
        id: 1,
        title: "Cara Memilah Sampah Rumah Tangga",
        description: "Panduan praktis memisahkan sampah organik, anorganik, dan B3 di rumah.",
        icon: <IconLeaf size={32} className="text-white" />,
        color: "bg-emerald-500",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
    },
    {
        id: 2,
        title: "Stop Plastik Sekali Pakai",
        description: "Ganti kantong plastik dengan totebag dan bawa botol minum sendiri.",
        icon: <IconBulb size={32} className="text-white" />,
        color: "bg-blue-500",
        image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&q=80"
    },
    {
        id: 3,
        title: "Kompos dari Sisa Makanan",
        description: "Ubah sisa sayuran dan buah menjadi pupuk alami untuk tanamanmu.",
        icon: <IconLeaf size={32} className="text-white" />,
        color: "bg-orange-500",
        image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?w=800&q=80"
    },
];

const diyData = [
    {
        id: 1,
        title: "Pot Bunga Botol Plastik",
        image: "https://img.freepik.com/free-photo/plastic-bottle-recycled-planter-diy-project_23-2149367255.jpg",
        difficulty: "Mudah",
        time: "30 Menit",
        category: "Gardening"
    },
    {
        id: 2,
        title: "Rak Buku Kardus Bekas",
        image: "https://img.freepik.com/free-photo/cardboard-boxes_144627-25217.jpg",
        difficulty: "Sedang",
        time: "2 Jam",
        category: "Furniture"
    },
    {
        id: 3,
        title: "Tas Belanja Kaos Lama",
        image: "https://img.freepik.com/free-photo/eco-bag-mockup_1108-287.jpg",
        difficulty: "Mudah",
        time: "45 Menit",
        category: "Fashion"
    },
];

const newsData = [
    {
        id: 1,
        title: "Indonesia Targetkan Bebas Sampah Plastik 2040",
        date: "28 Nov 2025",
        source: "Lingkungan News",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800",
        excerpt: "Pemerintah meluncurkan roadmap baru untuk pengurangan sampah plastik secara nasional."
    },
    {
        id: 2,
        title: "Inovasi Aspal dari Limbah Plastik",
        date: "25 Nov 2025",
        source: "Tekno Hijau",
        image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800",
        excerpt: "Teknologi baru mengubah limbah plastik menjadi campuran aspal yang lebih kuat dan tahan lama."
    },
    {
        id: 3,
        title: "Bank Sampah Digital Semakin Diminati",
        date: "20 Nov 2025",
        source: "Digital Eco",
        image: "https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?w=800",
        excerpt: "Aplikasi pengelolaan sampah berbasis digital mulai diadopsi oleh masyarakat perkotaan."
    }
];

const tabs = [
    { id: "tips", label: "Tips & Trik", icon: <IconBulb size={18} /> },
    { id: "diy", label: "DIY Projects", icon: <IconTools size={18} /> },
    { id: "news", label: "Berita Terkini", icon: <IconNews size={18} /> },
];

export function EdukasiContent() {
    const [activeTab, setActiveTab] = useState("tips");

    return (
        <div className="relative z-20 -mt-20 min-h-screen">
            <div className="bg-gray-50 rounded-t-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] pt-20 pb-20 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Modern Floating Tabs */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-white p-1.5 rounded-full shadow-xl inline-flex gap-1 border border-gray-100">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden ${activeTab === tab.id
                                            ? "text-white shadow-md"
                                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-black rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        {tab.icon}
                                        {tab.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeTab === "tips" && (
                                <motion.div
                                    key="tips"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                >
                                    {tipsData.map((tip, index) => (
                                        <div
                                            key={tip.id}
                                            className={`group relative overflow-hidden rounded-3xl h-[400px] ${index === 0 ? 'md:col-span-2' : ''}`}
                                        >
                                            <img src={tip.image} alt={tip.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                                <div className={`${tip.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg`}>
                                                    {tip.icon}
                                                </div>
                                                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{tip.title}</h3>
                                                <p className="text-gray-300 mb-6 line-clamp-2">{tip.description}</p>
                                                <button className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                                                    Baca Tips <IconArrowRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === "diy" && (
                                <motion.div
                                    key="diy"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    {diyData.map((diy) => (
                                        <div key={diy.id} className="bg-white rounded-[32px] p-4 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                                            <div className="relative h-64 rounded-[24px] overflow-hidden mb-4">
                                                <img src={diy.image} alt={diy.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                                                    {diy.category}
                                                </div>
                                            </div>
                                            <div className="px-2 pb-2">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{diy.title}</h3>
                                                    <div className="flex gap-2">
                                                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors">
                                                            <IconHeart size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                                    <div className="flex items-center gap-1.5">
                                                        <IconChartBar size={16} className="text-[#2E8B57]" />
                                                        {diy.difficulty}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <IconClock size={16} className="text-[#2E8B57]" />
                                                        {diy.time}
                                                    </div>
                                                </div>
                                                <button className="w-full bg-black text-white font-bold py-3.5 rounded-2xl hover:bg-[#2E8B57] transition-colors">
                                                    Mulai Project
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === "news" && (
                                <motion.div
                                    key="news"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-8"
                                >
                                    {newsData.map((news, index) => (
                                        <div key={news.id} className="group flex flex-col md:flex-row gap-8 items-center bg-white p-4 rounded-[32px] hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm">
                                            <div className="w-full md:w-1/3 h-64 rounded-[24px] overflow-hidden relative">
                                                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            </div>
                                            <div className="w-full md:w-2/3 pr-4">
                                                <div className="flex items-center gap-3 text-xs font-bold text-[#2E8B57] mb-3 uppercase tracking-wider">
                                                    <span className="bg-green-100 px-2 py-1 rounded-md">{news.source}</span>
                                                    <span className="text-gray-300">•</span>
                                                    <span>{news.date}</span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#2E8B57] transition-colors cursor-pointer">
                                                    {news.title}
                                                </h3>
                                                <p className="text-gray-500 text-lg mb-6 line-clamp-2">
                                                    {news.excerpt}
                                                </p>
                                                <div className="flex items-center gap-6">
                                                    <button className="text-black font-bold text-sm underline decoration-2 decoration-gray-200 hover:decoration-[#2E8B57] transition-all">
                                                        Baca Selengkapnya
                                                    </button>
                                                    <button className="text-gray-400 hover:text-black transition-colors">
                                                        <IconShare size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
