"use client";

import { motion } from "motion/react";
import { IconArrowLeft, IconTools, IconClock, IconChartBar, IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

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
    {
        id: 4,
        title: "Pot Bunga dari Ban Bekas",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
        difficulty: "Sulit",
        time: "3 Jam",
        category: "Outdoor"
    },
    {
        id: 5,
        title: "Lampu Hias Kardus Bekas",
        image: "https://images.unsplash.com/photo-1513506003011-3b644ab497e6?w=800&q=80",
        difficulty: "Sedang",
        time: "1.5 Jam",
        category: "Decor"
    },
    {
        id: 6,
        title: "Rak Buku dari Peti Buah",
        image: "https://images.unsplash.com/photo-1594620302200-9a76bc320f77?w=800&q=80",
        difficulty: "Mudah",
        time: "1 Jam",
        category: "Furniture"
    }
];

export default function DiyPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#FDFBF7] pb-20">
            {/* Header Section */}
            <div className="bg-emerald-600 pt-32 pb-16 px-4 sm:px-6 lg:px-8 rounded-b-[4rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>

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
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">Kreativitas Tanpa Batas</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            DIY Projects
                        </h1>
                        <p className="text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Ubah barang bekas jadi barang berkelas. Temukan inspirasi kreasi daur ulang yang unik dan bermanfaat di sini.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {diyData.map((diy, index) => (
                        <motion.div
                            key={diy.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => router.push(`/edukasi/diy/${diy.id}`)}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-100/50 hover:-translate-y-2 transition-all duration-300 group ring-1 ring-gray-100 cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img src={diy.image} alt={diy.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-sm flex items-center gap-1">
                                    <IconTools size={14} className="text-emerald-600" />
                                    {diy.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                                    <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1.5 rounded-lg border border-emerald-100">
                                        <IconChartBar size={14} />
                                        {diy.difficulty}
                                    </span>
                                    <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                                        <IconClock size={14} />
                                        {diy.time}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2">
                                    {diy.title}
                                </h3>
                                <button className="w-full py-3.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                    Lihat Panduan
                                    <IconArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
