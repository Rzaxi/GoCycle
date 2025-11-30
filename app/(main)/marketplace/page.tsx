"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    IconSearch,
    IconShoppingCart,
    IconStar,
    IconFilter,
    IconHeart,
    IconRecycle,
    IconTools,
    IconTag,
    IconArrowRight,
    IconFlame
} from "@tabler/icons-react";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

// Mock Data
const allProducts = [
    {
        id: 1,
        name: "Sofa Ban Bekas Premium",
        price: 230000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
        category: "DIY Product",
        seller: "Rajib Craft",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Vas Botol Kaca Estetik",
        price: 45000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800",
        category: "DIY Product",
        seller: "Glass Art",
        tag: "New"
    },
    {
        id: 3,
        name: "Lampu Gantung Kardus",
        price: 85000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800",
        category: "DIY Product",
        seller: "Eco Light",
        tag: null
    },
    {
        id: 4,
        name: "Plastik PET Bersih (1kg)",
        price: 5000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1562077772-3bd305261997?w=800",
        category: "Limbah Domestik",
        seller: "Bank Sampah 01",
        tag: "High Demand"
    },
    {
        id: 5,
        name: "Kertas HVS Bekas (1kg)",
        price: 3000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800",
        category: "Limbah Domestik",
        seller: "Berkah Kertas",
        tag: null
    },
    {
        id: 6,
        name: "Totebag Perca Denim",
        price: 120000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
        category: "DIY Product",
        seller: "Denim Upcycle",
        tag: "Limited"
    },
    {
        id: 7,
        name: "Minyak Jelantah (5L)",
        price: 35000,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800",
        category: "Limbah Domestik",
        seller: "Dapur Sehat",
        tag: null
    },
    {
        id: 8,
        name: "Pupuk Kompos Organik",
        price: 15000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
        category: "DIY Product",
        seller: "Green Farm",
        tag: "Organic"
    },
];

const categories = [
    { id: "all", label: "Semua", icon: <IconSearch size={18} /> },
    { id: "DIY Product", label: "Kerajinan", icon: <IconTools size={18} /> },
    { id: "Limbah Domestik", label: "Bahan Baku", icon: <IconRecycle size={18} /> },
];

export default function Marketplace() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    const filteredProducts = activeCategory === "all" 
        ? allProducts 
        : allProducts.filter(p => p.category === activeCategory);

    const placeholders = [
        "Cari botol plastik bekas...",
        "Cari kerajinan tangan unik...",
        "Cari limbah kertas kiloan...",
        "Cari minyak jelantah...",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-emerald-100">
            
            {/* 1. HERO SECTION - CENTERED STACKED STYLE */}
            <section className="relative pt-24 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
                <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full mb-8">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Eco-Commerce Platform
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-[0.9] mb-8 tracking-tighter max-w-5xl">
                        Waste <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-300% animate-gradient">To Wealth.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-10 font-light">
                        Marketplace kurasi pertama di Indonesia untuk produk daur ulang berkualitas tinggi dan bahan baku limbah terpercaya.
                    </p>
                    
                    {/* Search Bar - Centered */}
                    <div className="w-full max-w-xl relative z-20 mb-16">
                        <PlaceholdersAndVanishInput
                            placeholders={placeholders}
                            onChange={handleChange}
                            onSubmit={onSubmit}
                        />
                    </div>

                    {/* Visual Hero - Full Width Card */}
                    <div className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden group shadow-2xl shadow-emerald-900/20">
                        <img 
                            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600" 
                            alt="Eco Lifestyle" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        
                        {/* Floating Stats - Inside Image */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row justify-between items-end text-white gap-6">
                            <div className="text-left">
                                <p className="text-sm opacity-90 uppercase tracking-widest mb-2 border-l-2 border-emerald-400 pl-3">Impact Tracker</p>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-5xl md:text-6xl font-bold">2.4M+</p>
                                    <p className="text-lg opacity-80">Transaksi</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-all cursor-pointer">
                                    Lihat Laporan Lengkap
                                </div>
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                                    <IconArrowRight size={24} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. TRENDING SECTION - MODERN BENTO GRID */}
            <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                            <IconFlame size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Sedang Hangat</h2>
                    </div>
                    <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group">
                        Lihat Semua <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
                    {/* Big Featured Card (Span 8) */}
                    <div className="md:col-span-8 bg-[#F4F5F7] rounded-[2.5rem] p-10 relative overflow-hidden group cursor-pointer border border-gray-100 hover:shadow-xl transition-all duration-500">
                        <div className="relative z-10 max-w-md h-full flex flex-col justify-center">
                            <span className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-gray-900 mb-6 w-fit">Pilihan Editor</span>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Kursi Santai <br/> Ban Bekas</h3>
                            <p className="text-gray-500 text-lg mb-8 line-clamp-2">Karya pengrajin lokal Yogyakarta. Tahan cuaca, ramah lingkungan, dan sangat nyaman untuk teras rumah.</p>
                            <button className="flex items-center gap-3 text-gray-900 font-bold group/btn w-fit">
                                <span className="border-b-2 border-gray-900 pb-0.5 group-hover/btn:border-emerald-600 group-hover/btn:text-emerald-600 transition-colors">Lihat Detail Produk</span>
                                <IconArrowRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:text-emerald-600 transition-transform" />
                            </button>
                        </div>
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 md:block hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800" 
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                                alt="Featured"
                            />
                        </div>
                        {/* Mobile Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F5F7] via-[#F4F5F7]/80 to-transparent md:hidden pointer-events-none"></div>
                    </div>
                    
                    {/* Promo Card (Span 4) */}
                    <div className="md:col-span-4 bg-[#1B4D3E] rounded-[2.5rem] p-8 text-white flex flex-col justify-between relative overflow-hidden group hover:shadow-xl hover:shadow-emerald-900/20 transition-all duration-500">
                         <div className="relative z-10">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold mb-2">Diskon Spesial</h3>
                                <IconTag className="text-[#4ADE80]" />
                            </div>
                            <p className="text-emerald-100/80 text-sm leading-relaxed mt-2">Khusus pembelian bahan baku limbah plastik &gt; 10kg minggu ini.</p>
                         </div>
                         <div className="relative z-10 mt-4">
                            <div className="text-6xl font-black text-[#4ADE80] tracking-tighter">-20%</div>
                            <button className="mt-6 w-full py-3 bg-white text-[#1B4D3E] rounded-xl font-bold hover:bg-[#4ADE80] hover:text-white transition-colors">
                                Klaim Voucher
                            </button>
                         </div>
                         {/* Abstract Pattern */}
                         <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                         <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-[#4ADE80]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    </div>
                </div>
            </section>

            {/* 2. CATEGORY NAVIGATION - FLOATING MODERN TABS */}
            <div className="sticky top-6 z-40 transition-all duration-300 pointer-events-none pb-8">
                <div className="max-w-fit mx-auto px-2">
                    <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-xl shadow-gray-200/40 rounded-full p-1.5 pointer-events-auto flex items-center gap-1">
                        
                        {/* Categories */}
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`
                                    relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300
                                    ${activeCategory === cat.id 
                                        ? "text-gray-900" 
                                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
                                    }
                                `}
                            >
                                {activeCategory === cat.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-gray-100"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className={activeCategory === cat.id ? "text-[#2E8B57]" : "text-gray-400"}>
                                        {cat.icon}
                                    </span>
                                    {cat.label}
                                </span>
                            </button>
                        ))}

                        <div className="w-px h-6 bg-gray-200 mx-2"></div>

                        {/* Filter Button (Compact) */}
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors">
                            <IconFilter size={18} />
                        </button>

                    </div>
                </div>
            </div>

            {/* 4. MAIN PRODUCT GRID - CLEAN & MODERN */}
            <section className="pb-32 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">
                <div className="flex items-end justify-between mb-12">
                     <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Koleksi Terbaru</h2>
                        <p className="text-gray-500">Temukan barang unik yang diselamatkan dari TPA.</p>
                     </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            key={product.id}
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            {/* Glassmorphism Card Container */}
                            <div className="relative bg-white/60 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-6 shadow-xl shadow-gray-200/40 group-hover:shadow-2xl group-hover:shadow-gray-300/50 transition-all duration-500 group-hover:-translate-y-2">
                                
                                {/* Image Container */}
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6 bg-gradient-to-br from-gray-100 to-gray-200">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    
                                    {/* Floating Price Tag */}
                                    <div className="absolute -top-3 -right-3 bg-[#2E8B57] text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                        <span className="text-sm font-bold">Rp {(product.price / 1000).toFixed(0)}k</span>
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Tag Badge */}
                                    {product.tag && (
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-gray-800 shadow-md border border-white/30">
                                                {product.tag}
                                            </span>
                                        </div>
                                    )}

                                    {/* Action Buttons - Floating */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                        <button className="w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors transform hover:scale-110">
                                            <IconHeart size={16} />
                                        </button>
                                        <button className="w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg text-gray-500 hover:text-[#2E8B57] hover:bg-green-50 transition-colors transform hover:scale-110">
                                            <IconShoppingCart size={16} />
                                        </button>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="space-y-3">
                                    {/* Title & Rating */}
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#2E8B57] transition-colors line-clamp-2 flex-1">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full border border-amber-100">
                                            <IconStar size={12} className="text-amber-400 fill-amber-400" />
                                            <span className="text-xs font-bold text-amber-700">{product.rating}</span>
                                        </div>
                                    </div>

                                    {/* Category & Seller */}
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                            {product.category}
                                        </span>
                                        <span className="text-gray-500 font-medium">{product.seller}</span>
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#2E8B57] to-[#3BA55C] text-white font-bold rounded-xl shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
                                        <IconShoppingCart size={18} />
                                        Tambah ke Keranjang
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
