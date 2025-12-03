"use client";

import { useParams, useRouter } from "next/navigation";
import { allProducts } from "@/lib/data";
import { IconArrowLeft, IconStar, IconShoppingCart, IconHeart, IconShare, IconTruck, IconShieldCheck, IconLeaf } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function ProductDetail() {
    const params = useParams();
    const router = useRouter();
    const id = Number(params.id);
    const product = allProducts.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD]">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Produk Tidak Ditemukan</h1>
                    <button
                        onClick={() => router.back()}
                        className="text-emerald-600 hover:underline"
                    >
                        Kembali ke Marketplace
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-emerald-100 pb-20">

            {/* Navbar Placeholder (Back Button) */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-4">
                <div className="max-w-7xl mx-auto flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
                    >
                        <IconArrowLeft size={24} />
                    </button>
                    <span className="font-bold text-gray-900 truncate">Detail Produk</span>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* LEFT COLUMN: IMAGES */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-2xl shadow-gray-200/50 border border-gray-100">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            {product.tag && (
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-gray-900 shadow-lg border border-white/20">
                                        {product.tag}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Thumbnails (Mock) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="aspect-square rounded-2xl bg-gray-100 cursor-pointer hover:ring-2 ring-emerald-500 transition-all overflow-hidden">
                                    <img src={product.image} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" alt="thumbnail" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: DETAILS */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col h-full"
                    >
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                    {product.category}
                                </span>
                                <div className="flex items-center gap-1 text-amber-500">
                                    <IconStar size={16} className="fill-current" />
                                    <span className="text-sm font-bold text-gray-700">{product.rating} (120 Reviews)</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
                                {product.name}
                            </h1>

                            <div className="flex items-end gap-4 mb-6">
                                <p className="text-4xl font-black text-emerald-600 tracking-tight">
                                    <span className="text-lg font-bold text-gray-400 mr-1">Rp</span>
                                    {(product.price / 1000).toFixed(0)}k
                                </p>
                            </div>
                        </div>

                        {/* Seller Card */}
                        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-between mb-8 hover:shadow-md transition-shadow cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                                    {product.seller.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{product.seller}</p>
                                    <p className="text-xs text-gray-500">Verified Seller • Jakarta</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 rounded-full border border-gray-200 text-xs font-bold hover:bg-gray-50 transition-colors">
                                Chat
                            </button>
                        </div>

                        {/* Description */}
                        <div className="prose prose-gray max-w-none mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Deskripsi</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {product.description || "Produk berkualitas tinggi yang ramah lingkungan. Dibuat dengan penuh ketelitian untuk memastikan kepuasan Anda dan dampak positif bagi bumi."}
                            </p>
                        </div>

                        {/* Eco Impact */}
                        <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                                    <IconLeaf size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-emerald-900 mb-1">Dampak Lingkungan</h4>
                                    <p className="text-sm text-emerald-800/80 leading-relaxed">
                                        {product.impact || "Dengan membeli produk ini, Anda berkontribusi mengurangi limbah di TPA."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                                <IconTruck className="text-gray-400" />
                                <span className="text-sm font-medium text-gray-600">Pengiriman Cepat</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                                <IconShieldCheck className="text-gray-400" />
                                <span className="text-sm font-medium text-gray-600">Jaminan Kualitas</span>
                            </div>
                        </div>

                        {/* Sticky Bottom Actions */}
                        <div className="mt-auto pt-6 border-t border-gray-100 flex gap-4">
                            <button className="w-14 h-14 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all">
                                <IconHeart size={24} />
                            </button>
                            <button className="flex-1 bg-gray-900 text-white font-bold rounded-2xl text-lg hover:bg-emerald-600 transition-colors shadow-xl shadow-gray-200 hover:shadow-emerald-200 flex items-center justify-center gap-2">
                                <IconShoppingCart size={20} />
                                Tambah ke Keranjang
                            </button>
                        </div>

                    </motion.div>
                </div>
            </main>
        </div>
    );
}
