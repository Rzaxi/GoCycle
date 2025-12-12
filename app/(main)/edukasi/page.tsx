"use client";

import { motion } from "motion/react";
import { IconArrowRight, IconLeaf, IconRecycle, IconPlant, IconRobot, IconSparkles, IconSearch, IconScan, IconMessageChatbot, IconCamera, IconSend } from "@tabler/icons-react";
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
                        src="/foto/Pengolahan sampah.jpg"
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
        <div className="min-h-screen font-sans bg-white">

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

            {/* 4. AI SPOTLIGHT SECTION - APP SHOWCASE (INDONESIAN) */}
            <div className="relative py-32 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT: Copywriting (Indonesian) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-bold uppercase tracking-wider">
                                <IconSparkles size={16} /> Gocycle AI Assistant
                            </div>

                            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
                                Bingung Memilih <br />
                                <span className="text-emerald-600">Tempat Sampah?</span>
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                Foto sampahmu, dan biarkan AI kami memberitahu jawabannya. Mulai dari identifikasi jenis plastik hingga ide daur ulang kreatif, semua ada di genggamanmu.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="/edukasi/ask-ai" className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-emerald-600 transition-colors">
                                    <IconMessageChatbot size={20} /> Mulai Chat
                                </a>
                                <button className="flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold border border-gray-200 shadow-sm hover:border-emerald-200 transition-colors">
                                    <IconCamera size={20} /> Coba Scan
                                </button>
                            </div>

                            <div className="pt-8 border-t border-gray-200 flex items-center gap-8">
                                <div>
                                    <div className="text-3xl font-black text-gray-900">24/7</div>
                                    <div className="text-sm text-gray-500 font-medium">Selalu Aktif</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-gray-900">99%</div>
                                    <div className="text-sm text-gray-500 font-medium">Akurasi Deteksi</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: Chat App Visualization */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] md:w-[350px] shadow-xl flex flex-col overflow-hidden">
                                <div className="h-[32px] bg-gray-800 rounded-t-[2rem] absolute top-0 w-full z-20 flex justify-center">
                                    <div className="h-[18px] w-[100px] bg-black rounded-b-[1rem]"></div>
                                </div>

                                {/* Screen Content */}
                                <div className="flex-1 bg-white overflow-hidden flex flex-col relative pt-10">

                                    {/* App Header */}
                                    <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                <IconRobot size={18} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900">Gocycle AI</div>
                                                <div className="text-[10px] text-emerald-500 flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Online
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chat Area */}
                                    <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gray-50 opacity-50"></div>

                                        {/* AI Msg */}
                                        <div className="flex gap-2 relative z-10">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white mt-1">
                                                <IconRobot size={14} />
                                            </div>
                                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-600 max-w-[85%] border border-gray-100">
                                                Halo! Ada yang bisa saya bantu hari ini? 🌿
                                            </div>
                                        </div>

                                        {/* User Msg */}
                                        <div className="flex gap-2 flex-row-reverse relative z-10">
                                            <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 mt-1"></div>
                                            <div className="bg-emerald-600 p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-white max-w-[85%]">
                                                Botol plastik ini masuk kmn ya?
                                            </div>
                                        </div>

                                        {/* AI Reply with Image */}
                                        <div className="flex gap-2 relative z-10">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white mt-1">
                                                <IconRobot size={14} />
                                            </div>
                                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-600 max-w-[85%] border border-gray-100">
                                                <p className="mb-2">Itu jenis <strong>PET (1)</strong>. Masukkan ke tong sampah <span className="text-yellow-500 font-bold">KUNING</span> (Anorganik). 💛</p>
                                                <div className="rounded-lg bg-yellow-50 p-2 flex items-center gap-2 border border-yellow-100">
                                                    <IconRecycle size={16} className="text-yellow-600" />
                                                    <span className="font-bold text-yellow-700 text-[10px]">Daur Ulang!</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Input Area */}
                                    <div className="p-3 bg-white border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                                <IconCamera size={16} />
                                            </div>
                                            <div className="flex-1 h-8 bg-gray-100 rounded-full px-3 text-xs flex items-center text-gray-400">
                                                Ketik pesan...
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                                <IconSend size={16} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Decorative Blobs */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-emerald-400/20 blur-3xl -z-10 rounded-full"></div>
                        </motion.div>

                    </div>


                </div>
            </div>

            {/* 5. ACTIONABLE CONTENT */}
            <EdukasiContent />

            {/* AI Assistant Floating Button */}


        </div>
    );
}
