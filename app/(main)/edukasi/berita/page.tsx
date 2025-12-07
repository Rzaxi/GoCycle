"use client";

import { motion } from "motion/react";
import { IconArrowLeft, IconArrowRight, IconCalendar, IconNews } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const newsData = [
    {
        id: 1,
        title: "Gen Z Driving Indonesia's Waste Revolution",
        date: "28 Nov 2024",
        source: "EcoTrend",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
        excerpt: "Generasi muda Indonesia memimpin gerakan daur ulang digital dan bank sampah komunitas dengan pendekatan yang inovatif."
    },
    {
        id: 2,
        title: "Plastik Jadi Bahan Bakar: Terobosan Baru ITS",
        date: "22 Nov 2024",
        source: "Tech Green",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&q=80",
        excerpt: "Mahasiswa ITS berhasil ubah sampah plastik menjadi bahan bakar alternatif ramah lingkungan yang efisien dan terjangkau."
    },
    {
        id: 3,
        title: "Bali Wajibkan Sedotan Bambu di Semua Resto",
        date: "15 Nov 2024",
        source: "Eco Policy",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
        excerpt: "Pemerintah Bali terapkan regulasi baru melarang sedotan plastik di seluruh tempat makan untuk menjaga kebersihan pantai."
    },
    {
        id: 4,
        title: "Hutan Kota Jakarta: Paru-paru Baru Ibukota",
        date: "10 Nov 2024",
        source: "Urban Nature",
        image: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?w=800&q=80",
        excerpt: "Penambahan area hijau di tengah Jakarta terbukti menurunkan tingkat polusi udara hingga 15% dalam setahun terakhir."
    },
    {
        id: 5,
        title: "Startup 'SampahKita' Raih Pendanaan Seri A",
        date: "05 Nov 2024",
        source: "BizGreen",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        excerpt: "Platform manajemen sampah digital ini siap ekspansi ke 10 kota besar di Indonesia setelah sukses di Surabaya."
    },
    {
        id: 6,
        title: "Festival Musik Bebas Sampah Pertama",
        date: "01 Nov 2024",
        source: "Culture Pop",
        image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?w=800&q=80",
        excerpt: "Synchronize Fest tahun ini berhasil mencapai target zero waste to landfill berkat sistem pemilahan yang ketat."
    }
];

export default function BeritaPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#FDFBF7] pb-20">
            {/* Header Section */}
            <div className="bg-emerald-900 pt-32 pb-16 px-4 sm:px-6 lg:px-8 rounded-b-[4rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <button
                        onClick={() => router.back()}
                        className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
                    >
                        <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
                            <IconArrowLeft size={20} />
                        </div>
                        <span className="font-medium">Kembali ke Edukasi</span>
                    </button>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Live Updates
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            Berita Lingkungan
                        </h1>
                        <p className="text-emerald-100/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Informasi terkini seputar isu lingkungan, inovasi hijau, dan kebijakan keberlanjutan dari dalam dan luar negeri.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((news, index) => (
                        <motion.div
                            key={news.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => router.push(`/edukasi/berita/${news.id}`)}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-100/40 hover:-translate-y-2 transition-all duration-300 group ring-1 ring-gray-100 flex flex-col h-full cursor-pointer"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md text-emerald-800 border border-emerald-100 text-xs px-3 py-1.5 rounded-full font-bold shadow-sm">
                                    {news.source}
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600/70 mb-4 uppercase tracking-wide">
                                    <IconCalendar size={14} />
                                    {news.date}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                                    {news.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                    {news.excerpt}
                                </p>
                                <button className="text-gray-900 font-bold text-sm flex items-center gap-2 group/link hover:gap-3 transition-all pt-4 border-t border-gray-100 mt-auto">
                                    Baca Berita <IconArrowRight size={18} className="text-emerald-500 group-hover/link:text-emerald-600" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
