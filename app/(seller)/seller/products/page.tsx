"use client";

import { motion } from "motion/react";
import {
    IconPlus,
    IconSearch,
    IconFilter,
    IconEdit,
    IconTrash,
    IconDots
} from "@tabler/icons-react";

export default function SellerProductsPage() {
    // Mock Product Data
    const products = [
        { id: 1, name: "Botol Plastik PET Bersih", price: "Rp 3.500/kg", stock: "45 kg", category: "Plastik", status: "Aktif", image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?w=100&q=80" },
        { id: 2, name: "Kardus Bekas Layak Pakai", price: "Rp 2.000/kg", stock: "120 kg", category: "Kertas", status: "Aktif", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=100&q=80" },
        { id: 3, name: "Kaleng Aluminium", price: "Rp 12.000/kg", stock: "5 kg", category: "Logam", status: "Stok Habis", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=100&q=80" },
        { id: 4, name: "Tutup Botol HDPE", price: "Rp 5.000/kg", stock: "12 kg", category: "Plastik", status: "Arsip", image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=100&q=80" },
    ];

    return (
        <div className="space-y-6">
            {/* Header & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Produk Saya</h1>
                    <p className="text-gray-500 text-sm">Kelola semua barang daur ulang yang kamu jual.</p>
                </div>
                <button
                    onClick={() => alert("Fitur: Form Tambah Produk")}
                    className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20"
                >
                    <IconPlus size={20} /> Tambah Produk
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Cari nama produk..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50">
                    <IconFilter size={20} /> Filter Kategori
                </button>
            </div>

            {/* Product Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                <th className="px-6 py-4">Produk</th>
                                <th className="px-6 py-4">Harga Satuan</th>
                                <th className="px-6 py-4">Stok</th>
                                <th className="px-6 py-4">Kategori</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 line-clamp-1">{product.name}</div>
                                                <div className="text-xs text-gray-400">ID: {product.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-emerald-600">{product.price}</td>
                                    <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-600 border border-gray-200">
                                            {product.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${product.status === "Aktif" ? "bg-green-50 text-green-600 border border-green-100" :
                                                product.status === "Stok Habis" ? "bg-red-50 text-red-600 border border-red-100" :
                                                    "bg-gray-100 text-gray-500 border border-gray-200"
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${product.status === "Aktif" ? "bg-green-500" :
                                                    product.status === "Stok Habis" ? "bg-red-500" :
                                                        "bg-gray-400"
                                                }`}></span>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 actions opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-gray-400 hover:text-emerald-600 bg-white hover:bg-emerald-50 rounded-lg border border-transparent hover:border-emerald-200 transition-all">
                                                <IconEdit size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-600 bg-white hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 transition-all">
                                                <IconTrash size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination (Static) */}
                <div className="border-t border-gray-100 p-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Menampilkan 1-4 dari 14 produk</span>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>Sebelumnya</button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 hover:bg-gray-50">Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
