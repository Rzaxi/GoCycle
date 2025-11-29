"use client";

import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
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
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
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
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
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
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
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
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
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

            {/* 1. HERO SECTION: Environmental Problem Statement */}
            <div className="relative h-[90vh] flex items-center justify-center overflow-hidden sticky top-0 z-0">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/foto/edukasi_hero.jpg"
                        alt="Masalah Sampah Lingkungan"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto -mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-7 leading-tight tracking-tight drop-shadow-2xl">
                            Sampah Kita, <br />
                            <span className="text-red-400">Masa Depan Bumi</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-lg">
                            Setiap hari, jutaan ton sampah mencemari lingkungan kita. <br />
                            Saatnya kita memahami dampaknya dan mulai bertindak.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs uppercase tracking-widest drop-shadow">Scroll untuk Lebih Lanjut</span>
                    <IconArrowRight className="rotate-90" />
                </motion.div>
            </div>

            {/* 2. PROBLEM AWARENESS: The Harsh Reality */}
            <div className="bg-white relative z-10 rounded-t-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] pt-10 pb-20">
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

            {/* 3. TIMELINE: Understanding The Journey */}
            <div className="bg-white relative z-10">
                <Timeline data={timelineData} />
            </div>

            {/* 4. TRANSITION: The Solution & Call to Action */}
            <div className="bg-[#2E8B57] py-32 relative overflow-hidden z-10">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Yuk, Mulai Dari Kita!</h2>
                    <p className="text-xl md:text-2xl text-green-100 mb-6 leading-relaxed font-light">
                        Dengan memilah dan mendaur ulang sampah, kita bisa mengurangi pencemaran lingkungan. <br />
                        Setiap aksi kecil, seperti memisahkan sampah organik dan plastik, <br />
                        adalah langkah nyata menuju <span className="font-bold text-white border-b-2 border-white/30 pb-1">bumi yang lebih bersih</span>.
                    </p>
                    <p className="text-lg md:text-xl text-white font-semibold">
                        Mari bersama-sama menjadi bagian dari solusi, bukan masalah!
                    </p>
                </div>
            </div>

            {/* 5. ACTIONABLE CONTENT: Tabs & Cards */}
            <EdukasiContent />
        </div>
    );
}
