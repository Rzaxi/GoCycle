"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { IconShoppingCart, IconStar, IconArrowRight } from "@tabler/icons-react";

const products = [
    {
        id: 1,
        name: "Sofa Ban Bekas",
        price: 23000,
        stock: 20,
        rating: 4.7,
        image: "https://img.freepik.com/free-photo/tire-chair-garden_1098-18572.jpg",
        category: "Furniture",
    },
    {
        id: 2,
        name: "Tas Daur Ulang",
        price: 45000,
        stock: 15,
        rating: 4.8,
        image: "https://img.freepik.com/free-photo/eco-bag-mockup_1108-287.jpg",
        category: "Fashion",
    },
    {
        id: 3,
        name: "Pot Bunga Botol",
        price: 15000,
        stock: 30,
        rating: 4.5,
        image: "https://img.freepik.com/free-photo/plastic-bottle-recycled-planter-diy-project_23-2149367255.jpg",
        category: "Dekorasi",
    },
    {
        id: 4,
        name: "Lampu Hias Kertas",
        price: 35000,
        stock: 10,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800",
        category: "Dekorasi",
    },
];

export default function MarketplacePreview() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="bg-gradient-to-br from-white via-green-50/30 to-white py-24 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #2E8B57 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] text-sm font-semibold mb-4"
                    >
                        <span className="w-2 h-2 bg-[#2E8B57] rounded-full animate-pulse"></span>
                        Marketplace
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Produk <span className="text-[#2E8B57]">Terpopuler</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Temukan produk berkualitas dari limbah daur ulang pilihan
                    </motion.p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onHoverStart={() => setHoveredId(product.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            className="group relative"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden bg-gray-100">
                                    <motion.img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                        animate={{
                                            scale: hoveredId === product.id ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />

                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Quick Action Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: hoveredId === product.id ? 1 : 0,
                                        }}
                                        className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center"
                                    >
                                        <motion.button
                                            initial={{ y: 10 }}
                                            animate={{
                                                y: hoveredId === product.id ? 0 : 10,
                                            }}
                                            className="px-6 py-3 bg-white text-[#2E8B57] rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <IconShoppingCart size={20} />
                                            Beli Sekarang
                                        </motion.button>
                                    </motion.div>
                                </div>

                                {/* Product Info */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center gap-1 text-yellow-500 flex-shrink-0 ml-2">
                                            <IconStar size={16} fill="currentColor" />
                                            <span className="text-sm font-semibold text-gray-700">
                                                {product.rating}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div>
                                            <p className="text-2xl font-bold text-[#2E8B57]">
                                                Rp {product.price.toLocaleString("id-ID")}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Stok: {product.stock} unit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="/marketplace"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#2E8B57] text-white rounded-xl font-bold shadow-lg hover:bg-[#246e45] hover:shadow-xl transition-all hover:gap-3"
                    >
                        Lihat Semua Produk
                        <IconArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
