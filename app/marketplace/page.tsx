"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    IconSearch,
    IconShoppingCart,
    IconStar,
    IconArrowRight,
    IconTag,
    IconFilter,
    IconHeart
} from "@tabler/icons-react";

// Extended product data with specific categories
const allProducts = [
    {
        id: 1,
        name: "Sofa Ban Bekas",
        price: 23000,
        stock: 20,
        rating: 4.7,
        image: "https://img.freepik.com/free-photo/tire-chair-garden_1098-18572.jpg",
        category: "DIY Product",
        seller: "Rajib Craft",
        discount: 0
    },
    {
        id: 2,
        name: "Botol Plastik PET",
        price: 5000,
        stock: 50,
        rating: 4.5,
        image: "https://img.freepik.com/free-photo/plastic-bottles-recycling-concept_23-2149367255.jpg",
        category: "Limbah Domestik",
        seller: "Bank Sampah Jaya",
        discount: 0
    },
    {
        id: 3,
        name: "Kardus Bekas",
        price: 2000,
        stock: 100,
        rating: 4.8,
        image: "https://img.freepik.com/free-photo/cardboard-boxes_144627-25217.jpg",
        category: "Limbah Domestik",
        seller: "Pengepul Berkah",
        discount: 0
    },
    {
        id: 4,
        name: "Lampu Hias Kertas",
        price: 35000,
        stock: 10,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800",
        category: "DIY Product",
        seller: "Paper Art",
        discount: 10
    },
    {
        id: 5,
        name: "Kaleng Aluminium",
        price: 15000,
        stock: 30,
        rating: 4.6,
        image: "https://img.freepik.com/free-photo/aluminum-cans-recycling_23-2149367255.jpg",
        category: "Limbah Domestik",
        seller: "Green Cycle",
        discount: 0
    },
    {
        id: 6,
        name: "Meja Kayu Palet",
        price: 120000,
        stock: 8,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800",
        category: "DIY Product",
        seller: "Wood Works",
        discount: 50 // Featured discount
    },
    {
        id: 7,
        name: "Minyak Jelantah",
        price: 8000,
        stock: 20,
        rating: 4.4,
        image: "https://img.freepik.com/free-photo/oil-bottle_144627-25217.jpg",
        category: "Limbah Domestik",
        seller: "Dapur Bunda",
        discount: 0
    },
    {
        id: 8,
        name: "Tas Selempang Denim",
        price: 65000,
        stock: 12,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
        category: "DIY Product",
        seller: "Denim Dreams",
        discount: 0
    },
];

const tabs = [
    { id: "Limbah Domestik", label: "Limbah Domestik" },
    { id: "DIY Product", label: "DIY Product" },
    { id: "Diskon", label: "Lagi Diskon" },
];

const sortOptions = [
    { label: "Terpopuler", value: "popular" },
    { label: "Harga Terendah", value: "price-asc" },
    { label: "Harga Tertinggi", value: "price-desc" },
    { label: "Rating Tertinggi", value: "rating" },
];

export default function Marketplace() {
    const [activeTab, setActiveTab] = useState("Limbah Domestik");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("popular");

    // Filter and sort products
    const filteredProducts = allProducts
        .filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTab = activeTab === "Diskon" ? product.discount > 0 : product.category === activeTab;
            return matchesSearch && matchesTab;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "rating":
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-20">
            {/* 1. HERO SECTION - Modern & Clean */}
            <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 pt-32 pb-20 px-6 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-white max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium mb-6">
                                🌱 Marketplace Ramah Lingkungan
                            </span>
                            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
                                Belanja Cerdas,<br />
                                <span className="text-emerald-200">Bumi Bernapas.</span>
                            </h1>
                            <p className="text-lg text-emerald-50 mb-8 max-w-lg leading-relaxed">
                                Temukan produk daur ulang berkualitas atau jual limbah domestikmu. Langkah kecil untuk dampak besar.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-white text-emerald-700 px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                    Mulai Belanja
                                </button>
                                <button className="bg-transparent border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
                                    Jual Sampah
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Featured Card - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block relative z-10"
                    >
                        <div className="relative w-80 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute -top-4 -right-4 bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-20 rotate-12">
                                50%
                            </div>
                            <div className="rounded-2xl overflow-hidden mb-4 aspect-square shadow-inner">
                                <img
                                    src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800"
                                    alt="Featured Product"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-white">
                                <h3 className="font-bold text-lg mb-1">Meja Kayu Palet</h3>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-white/60 text-xs line-through">Rp 240.000</p>
                                        <p className="font-bold text-xl">Rp 120.000</p>
                                    </div>
                                    <div className="bg-white/20 p-2 rounded-full">
                                        <IconArrowRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                {/* 2. FILTERS & SEARCH - Floating Bar */}
                <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-12 border border-gray-100">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Tabs */}
                        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Search & Sort */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <div className="relative flex-1 sm:w-72">
                                <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Cari produk ramah lingkungan..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all"
                                />
                            </div>
                            <div className="relative">
                                <IconFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full sm:w-auto pl-12 pr-10 py-3 rounded-full bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm appearance-none cursor-pointer font-medium text-gray-700"
                                >
                                    {sortOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. PRODUCT GRID - Clean Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Badges */}
                                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                                        {product.discount > 0 && (
                                            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                                                -{product.discount}%
                                            </span>
                                        )}
                                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-wide">
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Action Button (Visible on Hover) */}
                                    <button className="absolute bottom-3 right-3 bg-white text-emerald-600 p-2.5 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-emerald-600 hover:text-white">
                                        <IconShoppingCart size={20} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="mb-1 flex items-center gap-1">
                                        <IconStar size={14} className="text-yellow-400 fill-yellow-400" />
                                        <span className="text-xs font-bold text-gray-500">{product.rating}</span>
                                        <span className="text-xs text-gray-300">•</span>
                                        <span className="text-xs text-gray-400 truncate">{product.seller}</span>
                                    </div>

                                    <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                                        {product.name}
                                    </h3>

                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex flex-col">
                                            {product.discount > 0 && (
                                                <span className="text-xs text-gray-400 line-through">
                                                    Rp {product.price.toLocaleString("id-ID")}
                                                </span>
                                            )}
                                            <span className="text-lg font-black text-emerald-600">
                                                Rp {(product.price * (100 - product.discount) / 100).toLocaleString("id-ID")}
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-md">
                                            Stok: {product.stock}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                        <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconSearch size={32} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Produk tidak ditemukan</h3>
                        <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter kategori Anda.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
