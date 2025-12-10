"use client";

import { motion } from "motion/react";
import { IconLeaf, IconRecycle, IconBolt, IconTrophy, IconArrowUpRight, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";

export default function ImpactPage() {
    // Mock Data
    const stats = [
        {
            label: "Total Sampah Didaur Ulang",
            value: "15,420",
            unit: "kg",
            icon: IconRecycle,
            color: "text-emerald-600",
            bg: "bg-emerald-100",
            trend: "+12% bulan ini"
        },
        {
            label: "Emisi CO2 Dihemat",
            value: "8,250",
            unit: "kg",
            icon: IconLeaf,
            color: "text-teal-600",
            bg: "bg-teal-100",
            trend: "Setara 400 pohon"
        },
        {
            label: "Energi Diselamatkan",
            value: "45,000",
            unit: "kWh",
            icon: IconBolt,
            color: "text-yellow-600",
            bg: "bg-yellow-100",
            trend: "Cukup untuk 200 rumah"
        }
    ];

    const leaderboard = [
        { name: "Budi Santoso", points: 12500, avatar: "BS", rank: 1 },
        { name: "Siti Aminah", points: 9800, avatar: "SA", rank: 2 },
        { name: "Rudi Hartono", points: 8400, avatar: "RH", rank: 3 },
        { name: "Dewi Lestari", points: 7200, avatar: "DL", rank: 4 },
        { name: "Agus Pratama", points: 6500, avatar: "AP", rank: 5 },
    ];

    const wasteComposition = [
        { type: "Plastik", percentage: 45, color: "bg-blue-500" },
        { type: "Kertas/Kardus", percentage: 30, color: "bg-yellow-500" },
        { type: "Logam", percentage: 15, color: "bg-gray-500" },
        { type: "Kaca", percentage: 5, color: "bg-green-500" },
        { type: "Lainnya", percentage: 5, color: "bg-red-500" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold uppercase tracking-widest mb-6 border border-emerald-100"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Impact Tracker
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
                    >
                        Dampak Nyata <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">GoCycle</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto"
                    >
                        Transparansi jejak lingkungan kita bersama. Setiap kilogram sampah yang Anda daur ulang membawa perubahan besar.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <stat.icon size={32} />
                            </div>
                            <h3 className="text-gray-500 font-medium mb-2">{stat.label}</h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-black text-gray-900">{stat.value}</span>
                                <span className="text-lg font-bold text-gray-400">{stat.unit}</span>
                            </div>
                            <div className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                <IconArrowUpRight size={16} />
                                {stat.trend}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Charts & Leaderboard Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Waste Composition Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 lg:col-span-2"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <IconRecycle className="text-emerald-500" />
                            Komposisi Sampah
                        </h3>

                        <div className="space-y-6">
                            {wasteComposition.map((item, index) => (
                                <div key={item.type}>
                                    <div className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                                        <span>{item.type}</span>
                                        <span>{item.percentage}%</span>
                                    </div>
                                    <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.percentage}%` }}
                                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                            className={`h-full rounded-full ${item.color}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-blue-800 mb-2">Insight Bulan Ini</h4>
                            <p className="text-blue-600/80 text-sm">
                                Daur ulang plastik meningkat 15% dibandingkan bulan lalu. Terima kasih telah memilah botol plastik Anda!
                            </p>
                        </div>
                    </motion.div>

                    {/* Leaderboard */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-gradient-to-b from-[#1B4D3E] to-[#143d30] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                            <IconTrophy className="text-yellow-400" />
                            Top Pahlawan
                        </h3>

                        <div className="space-y-4 relative z-10">
                            {leaderboard.map((user, index) => (
                                <div key={index} className="flex items-center gap-4 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors border border-white/5">
                                    <div className={`
                                        w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm
                                        ${index === 0 ? 'bg-yellow-400 text-yellow-900' :
                                            index === 1 ? 'bg-gray-300 text-gray-800' :
                                                index === 2 ? 'bg-orange-400 text-orange-900' : 'bg-white/20 text-white'}
                                    `}>
                                        {user.rank}
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-300 flex items-center justify-center text-emerald-900 font-bold text-sm">
                                        {user.avatar}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold truncate">{user.name}</p>
                                        <p className="text-xs text-emerald-200">{user.points.toLocaleString()} Poin</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold transition-colors shadow-lg shadow-emerald-900/20">
                            Lihat Semua Peringkat
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
