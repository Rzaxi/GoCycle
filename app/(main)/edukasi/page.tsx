"use client";

import { motion } from "motion/react";
import { IconArrowRight, IconLeaf, IconRecycle, IconPlant, IconRobot } from "@tabler/icons-react";
import { AnimatedFacts } from "@/components/ui/AnimatedFacts/AnimatedFacts";
import { Timeline } from "@/components/ui/Timeline/Timeline";
import { EdukasiContent } from "@/components/sections/EdukasiContent/EdukasiContent";

const factsData = [
    {
        name: "64 Juta Ton",
        designation: "Sampah Per Tahun",
        quote: "Indonesia menghasilkan timbulan sampah yang luar biasa besar setiap tahunnya. Sebagian besar berakhir di TPA tanpa pengolahan lebih lanjut, menciptakan gunung sampah yang mencemari tanah dan air kita.",
        src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Hanya 7%",
        designation: "Yang Didaur Ulang",
        quote: "Dari jutaan ton sampah plastik yang dihasilkan, hanya sebagian kecil yang berhasil didaur ulang. Sisanya mencemari lautan, membunuh biota laut, dan masuk ke rantai makanan kita sebagai mikroplastik.",
        src: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "450 Tahun",
        designation: "Plastik Terurai",
        quote: "Botol plastik yang kita buang sembarangan hari ini akan tetap ada hingga 5 generasi mendatang. Plastik tidak benar-benar hilang, hanya terpecah menjadi partikel kecil yang berbahaya bagi ekosistem.",
        src: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?q=80&w=1000&auto=format&fit=crop"
    }
];

const timelineData = [
    {
        title: "Pemilahan",
        content: (
            <div>
                <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
                    Langkah pertama dimulai dari rumah. Memisahkan sampah organik, anorganik, dan residu adalah kunci utama dalam rantai daur ulang.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&q=80"
                        alt="sorting waste"
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=500&q=80"
                        alt="recycling bins"
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Pengumpulan",
        content: (
            <div>
                <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
                    Sampah yang terpilah dikumpulkan oleh petugas kebersihan atau bank sampah. Di sini, nilai ekonomi sampah mulai terlihat.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?w=500&q=80"
                        alt="waste collection"
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Pengolahan",
        content: (
            <div>
                <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
                    Sampah diolah menjadi bahan baku baru. Plastik dicacah menjadi bijih plastik, kertas didaur ulang menjadi bubur kertas.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&q=80"
                        alt="recycling plant"
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Produk Baru",
        content: (
            <div>
                <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
                    Hasil daur ulang lahir kembali menjadi produk baru yang bermanfaat, menutup siklus ekonomi sirkular.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://img.freepik.com/free-photo/eco-bag-mockup_1108-287.jpg"
                        alt="recycled product"
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            </div>
        ),
    },
];

export default function Edukasi() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">

            {/* 1. HERO SECTION */}
            <div className="relative h-[100vh] flex items-center justify-center overflow-hidden sticky top-0 z-0">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/foto/edukasi_hero.jpg"
                        alt="Masalah Sampah Lingkungan"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto -mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                            Kelola Sampah, <br />
                            <span className="text-[#4ADE80]">Jaga Masa Depan</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-lg">
                            Langkah kecilmu hari ini menentukan nasib bumi esok hari. <br className="hidden md:block" />
                            Mari belajar mengolah sampah dengan bijak.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-32 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2 z-20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs uppercase tracking-widest drop-shadow">Scroll untuk Lebih Lanjut</span>
                    <IconArrowRight className="rotate-90" />
                </motion.div>
            </div>

            {/* 2. PROBLEM AWARENESS */}
            <div className="bg-white relative z-10 rounded-t-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] pt-10 pb-20 -mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-0 pt-10">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Realita Yang Memprihatinkan</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Angka-angka ini bukan sekadar statistik. Ini adalah cerminan krisis lingkungan yang sedang kita hadapi bersama.
                        </p>
                    </div>
                    <AnimatedFacts facts={factsData} autoplay={true} />
                </div>
            </div>

            {/* 3. TIMELINE */}
            <div className="bg-white relative z-10">
                <Timeline data={timelineData} />
            </div>

            {/* 4. TRANSITION - CLEAN & SIMPLE */}
            <div className="relative pt-10 pb-24 bg-gradient-to-b from-emerald-500 to-emerald-600">
                <div className="absolute inset-0 bg-black/5"></div>

                <div className="relative max-w-4xl mx-auto px-6 text-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Yuk, Mulai Dari Kita!
                        </h2>

                        <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
                            Dengan memilah dan mendaur ulang sampah, kita bisa mengurangi pencemaran lingkungan.
                        </p>

                        <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
                            Setiap aksi kecil, seperti memisahkan sampah organik dan plastik, adalah langkah nyata menuju <span className="font-semibold text-white">bumi yang lebih bersih</span>.
                        </p>

                        <p className="text-lg md:text-xl text-white font-semibold mb-10">
                            Mari bersama-sama menjadi bagian dari solusi, bukan masalah!
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm">
                                <IconRecycle size={18} className="text-white" />
                                <span className="text-white text-sm font-medium">Pilah Sampah</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm">
                                <IconPlant size={18} className="text-white" />
                                <span className="text-white text-sm font-medium">Daur Ulang</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm">
                                <IconLeaf size={18} className="text-white" />
                                <span className="text-white text-sm font-medium">Kurangi Sampah</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 5. ACTIONABLE CONTENT */}
            <EdukasiContent />

            {/* AI Assistant Floating Button */}
            <motion.a
                href="/edukasi/ask-ai"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-4 border-white/20 backdrop-blur-sm group cursor-pointer"
            >
                <IconRobot size={32} />
                <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Tanya Gocycle AI
                    <div className="absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-white rotate-45"></div>
                </span>
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-bounce"></span>
            </motion.a>

        </div>
    );
}
