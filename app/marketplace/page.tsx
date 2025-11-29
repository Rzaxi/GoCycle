"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    IconSearch,
    IconShoppingCart,
    IconStar,
    IconArrowRight,
    IconTag,
    IconAdjustmentsHorizontal,
    IconFilter
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
    { id: "Limbah Domestik", label: "LIMBAH DOMESTIK" },
    { id: "DIY Product", label: "DIY PRODUCT" },
    { id: "Diskon", label: "DISKON" },
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
    const [hoveredId, setHoveredId] = useState<number | null>(null);

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
        <div className="min-h-screen bg-gray-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Hero Banner */}
                <div className="bg-[#86C89C] rounded-[30px] p-8 md:p-12 relative overflow-hidden mb-12 flex flex-col md:flex-row items-center justify-between min-h-[400px]">
                    {/* Decorative Background Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#74B78D] rounded-full opacity-50 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5FA87B] rounded-full opacity-30 blur-3xl"></div>
                    </div>

                    {/* Left Content */}
                    <div className="relative z-10 max-w-xl text-left mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-4 tracking-tight">
                            pilihan belanja yang<br />
                            lebih cerdas dan<br />
                            berkelanjutan.
                        </h1>
                        <p className="text-black/80 text-lg mb-8 max-w-md font-medium">
                            Marketplace ramah lingkungan untuk pilihan belanja yang lebih cerdas dan berkelanjutan.
                        </p>
                        <button className="bg-[#2E8B57] text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#246e45] transition-colors shadow-lg">
                            Belanja Sekarang
                        </button>
                    </div>

                    {/* Right Featured Product Card */}
                    <div className="relative z-10 w-full md:w-auto">
                        <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-3xl shadow-xl max-w-sm mx-auto md:mr-0 relative group">
                            {/* Floating Badge */}
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#C04A28] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg z-20 border-4 border-white">
                                a
                            </div>

                            <div className="relative rounded-2xl overflow-hidden mb-4 aspect-square">
                                <img
                                    src="https://img.freepik.com/free-photo/tire-chair-garden_1098-18572.jpg"
                                    alt="Featured"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="text-white">
                                <h3 className="font-bold text-xl mb-1">SOFA BAN BEKAS</h3>
                                <p className="text-white/80 text-xs mb-3">Kursi santai dari ban bekas</p>
                                <div className="flex items-center justify-between bg-black/20 rounded-xl p-3 backdrop-blur-sm">
                                    <div className="flex items-center gap-1 text-yellow-300">
                                        <IconStar size={16} fill="currentColor" />
                                        <span className="font-bold text-sm">4.7+</span>
                                    </div>
                                    <div className="font-bold">Rp 23.000</div>
                                    <div className="text-xs opacity-80">20 Stok</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls Section: Tabs, Search, Sort */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
                    {/* Tab Navigation */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide w-full lg:w-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-all border-2 ${activeTab === tab.id
                                    ? "bg-[#2E8B57] text-white border-[#2E8B57] shadow-md"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-[#2E8B57] hover:text-[#2E8B57]"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Search & Sort */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Cari produk..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none text-sm transition-all"
                            />
                        </div>
                        <div className="relative">
                            <IconAdjustmentsHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full sm:w-auto pl-10 pr-8 py-2.5 rounded-full border border-gray-200 bg-white focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none text-sm appearance-none cursor-pointer"
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

                {/* Product Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Special Offer / Banner in Grid */}
                    {activeTab === "Diskon" && (
                        <motion.div
                            variants={itemVariants}
                            className="col-span-1 sm:col-span-2 row-span-2 bg-black rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl"
                        >
                            <div className="relative z-10">
                                <div className="bg-white text-black font-black text-xl px-4 py-1 inline-block mb-4 transform -rotate-2">
                                    50% OFF
                                </div>
                                <h3 className="text-white text-4xl font-black leading-none mb-4">
                                    SPECIAL<br />OFFER
                                </h3>
                                <p className="text-gray-400 text-sm max-w-[200px]">
                                    Dapatkan diskon spesial untuk produk daur ulang pilihan minggu ini.
                                </p>
                            </div>
                            <div className="absolute right-0 bottom-0 w-48 h-48 bg-gradient-to-tl from-[#2E8B57] to-transparent opacity-50 rounded-tl-full"></div>
                            <IconTag className="absolute top-4 right-4 text-white/10 w-32 h-32 transform rotate-12" />
                        </motion.div>
                    )}

                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9 }}
                                onHoverStart={() => setHoveredId(product.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                className="bg-white rounded-3xl overflow-hidden relative group aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-[#2E8B57] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                                {product.category}
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-lg leading-tight mb-1">{product.name}</h3>
                                        <p className="text-gray-300 text-xs mb-3">by {product.seller}</p>
                                        <div className="flex items-center justify-between mt-4">
                                            <div>
                                                <span className="text-white font-bold text-xl block">Rp {product.price.toLocaleString("id-ID")}</span>
                                                <div className="flex items-center gap-1 text-yellow-400 text-xs mt-1">
                                                    <IconStar size={12} fill="currentColor" />
                                                    <span>{product.rating}</span>
                                                </div>
                                            </div>
                                            <button className="bg-white text-[#2E8B57] p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-110">
                                                <IconShoppingCart size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Discount Badge */}
                                {product.discount > 0 && (
                                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                                        {product.discount}% OFF
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
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
