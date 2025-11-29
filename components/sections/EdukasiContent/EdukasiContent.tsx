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
    IconShare,
    IconRecycle,
    IconPlant
} from "@tabler/icons-react";

// Mock Data
const tipsData = [
    {
        id: 1,
        title: "5 Cara Mulai Zero Waste",
        description: "Langkah praktis menerapkan gaya hidup minim sampah dari rumah. Mulai dari belanja hingga makan.",
        icon: <IconLeaf size={32} className="text-white" />,
        color: "bg-emerald-500",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
    },
    {
        id: 2,
        title: "Pilah Sampah: Mudah Kok!",
        description: "Panduan warna-warni memisahkan sampah organik, plastik, kertas, dan B3 di rumah.",
        icon: <IconRecycle size={32} className="text-white" />,
        color: "bg-blue-500",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
    },
    {
        id: 3,
        title: "Kompos: Sampah Jadi Harta",
        description: "Tutorial bikin kompos sendiri dari sisa makanan. Tanaman kamu bakal seneng!",
        icon: <IconPlant size={32} className="text-white" />,
        color: "bg-orange-500",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
    },
];

const diyData = [
    {
        id: 1,
        title: "Vertical Garden dari Botol Bekas",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
        difficulty: "Mudah",
        time: "1 Jam",
        category: "Gardening"
    },
    {
        id: 2,
        title: "Organizer Meja Kaleng Susu",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        difficulty: "Mudah",
        time: "30 Menit",
        category: "Home Decor"
    },
    {
        id: 3,
        title: "Tas Kece dari Jeans Lama",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80",
        difficulty: "Sedang",
        time: "2 Jam",
        category: "Fashion"
    },
];

const newsData = [
    {
        id: 1,
        title: "Gen Z Driving Indonesia's Waste Revolution",
        date: "28 Nov 2024",
        source: "EcoTrend",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
        excerpt: "Generasi muda Indonesia memimpin gerakan daur ulang digital dan bank sampah komunitas."
    },
    {
        id: 2,
        title: "Plastik Jadi Bahan Bakar: Terobosan Baru ITS",
        date: "22 Nov 2024",
        source: "Tech Green",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&q=80",
        excerpt: "Mahasiswa ITS berhasil ubah sampah plastik menjadi bahan bakar alternatif ramah lingkungan."
    },
    {
        id: 3,
        title: "Bali Wajibkan Sedotan Bambu di Semua Resto",
        date: "15 Nov 2024",
        source: "Eco Policy",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
        excerpt: "Pemerintah Bali terapkan regulasi baru melarang sedotan plastik di seluruh tempat makan."
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
            <div className="bg-white rounded-t-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] pt-20 pb-20 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Modern Minimalist Tabs */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-gray-100/50 p-1.5 rounded-full inline-flex gap-1 backdrop-blur-sm">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative ${activeTab === tab.id
                                        ? "text-white shadow-lg shadow-emerald-500/30"
                                        : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-[#2E8B57] rounded-full"
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
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                >
                                    {tipsData.map((tip, index) => (
                                        <div
                                            key={tip.id}
                                            className={`group relative overflow-hidden rounded-[32px] ${index === 0 ? 'md:col-span-2 md:row-span-2 h-[500px]' : 'h-[240px]'}`}
                                        >
                                            <img src={tip.image} alt={tip.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className={`${tip.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm bg-opacity-90`}>
                                                        {tip.icon}
                                                    </div>
                                                    <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black">
                                                        <IconArrowRight size={20} />
                                                    </button>
                                                </div>
                                                <h3 className={`font-bold text-white mb-2 leading-tight ${index === 0 ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                                                    {tip.title}
                                                </h3>
                                                {index === 0 && (
                                                    <p className="text-gray-200 text-lg line-clamp-2 max-w-lg">{tip.description}</p>
                                                )}
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
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    {diyData.map((diy) => (
                                        <div key={diy.id} className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                                            <div className="relative h-64 overflow-hidden">
                                                <img src={diy.image} alt={diy.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                                                    {diy.category}
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                                                    <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                                                        <IconChartBar size={14} className="text-[#2E8B57]" />
                                                        {diy.difficulty}
                                                    </span>
                                                    <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                                                        <IconClock size={14} className="text-[#2E8B57]" />
                                                        {diy.time}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2E8B57] transition-colors">{diy.title}</h3>
                                                <button className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-black hover:text-white hover:border-black transition-all duration-300 flex items-center justify-center gap-2">
                                                    Lihat Panduan <IconArrowRight size={16} />
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
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                                >
                                    {newsData.map((news, index) => (
                                        <div key={news.id} className="group flex flex-col bg-white rounded-[24px] overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 border border-gray-100">
                                            <div className="h-56 overflow-hidden relative">
                                                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                                                    {news.source}
                                                </div>
                                            </div>
                                            <div className="p-6 flex-1 flex flex-col">
                                                <div className="text-xs font-medium text-gray-400 mb-3">{news.date}</div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#2E8B57] transition-colors">
                                                    {news.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-1">
                                                    {news.excerpt}
                                                </p>
                                                <button className="text-[#2E8B57] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Baca Selengkapnya <IconArrowRight size={16} />
                                                </button>
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
