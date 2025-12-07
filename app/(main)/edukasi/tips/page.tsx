"use client";

import { motion } from "motion/react";
import { IconArrowLeft, IconLeaf, IconRecycle, IconPlant, IconBulb, IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

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
    {
        id: 4,
        title: "Hemat Energi di Rumah",
        description: "Tips sederhana menghemat listrik yang bisa mengurangi tagihan dan emisi karbon.",
        icon: <IconBulb size={32} className="text-white" />,
        color: "bg-yellow-500",
        image: "https://images.unsplash.com/photo-1510563800743-aed236490d08?w=800&q=80"
    },
    {
        id: 5,
        title: "Belanja Tanpa Plastik",
        description: "Cara cerdas berbelanja di pasar dan supermarket tanpa membawa pulang sampah plastik.",
        icon: <IconLeaf size={32} className="text-white" />,
        color: "bg-emerald-500",
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800&q=80"
    },
    {
        id: 6,
        title: "Fashion Berkelanjutan",
        description: "Panduan memilih pakaian yang ramah lingkungan dan awet tahan lama.",
        icon: <IconRecycle size={32} className="text-white" />,
        color: "bg-purple-500",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
    }
];

export default function TipsPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header Section */}
            <div className="bg-emerald-600 pt-32 pb-16 px-4 sm:px-6 lg:px-8 rounded-b-[4rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <button
                        onClick={() => router.back()}
                        className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                    >
                        <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
                            <IconArrowLeft size={20} />
                        </div>
                        <span className="font-medium">Kembali ke Edukasi</span>
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            Tips & Trik Lingkungan
                        </h1>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Kumpulan panduan praktis untuk memulai gaya hidup yang lebih ramah lingkungan dari hal-hal kecil sehari-hari.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tipsData.map((tip, index) => (
                        <motion.div
                            key={tip.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => router.push(`/edukasi/tips/${tip.id}`)}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-100/40 hover:-translate-y-2 transition-all duration-300 group ring-1 ring-gray-100 cursor-pointer"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img src={tip.image} alt={tip.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className={`absolute top-4 left-4 ${tip.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg`}>
                                    {tip.icon}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                    {tip.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">
                                    {tip.description}
                                </p>
                                <button className="text-emerald-600 font-bold text-sm tracking-wide uppercase border-b-2 border-emerald-100 pb-0.5 group-hover:border-emerald-500 transition-all flex items-center gap-1 group-hover:gap-2">
                                    Baca Selengkapnya <IconArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
