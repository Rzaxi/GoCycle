import RevealOnScroll from "@/components/animations/RevealOnScroll/RevealOnScroll";
import Link from "next/link";
import { ArrowRight, Repeat, TrendingUp, BookOpen, Users, Leaf } from "lucide-react";

export default function ReduceRecycleReuse() {
    return (
        <section className="relative bg-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* PART 1: HEADER STYLE (Reference: GreenFlow) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
                    {/* Left: Title & CTA */}
                    <RevealOnScroll direction="right">
                        <div className="flex flex-col items-start">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white shadow-sm mb-6">
                                <span className="text-[#2E8B57]">✨</span>
                                <span className="text-gray-700 text-sm font-medium">Ekosistem Gocycle</span>
                            </div>
                            
                            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-8">
                                Solusi <span className="text-[#2E8B57]">Lingkungan</span><br/> Terintegrasi
                            </h2>
                            
                            <Link 
                                href="/dashboard"
                                className="group inline-flex items-center gap-3 bg-[#1B4D3E] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#153d31] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Masuk Dashboard
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </RevealOnScroll>

                    {/* Right: Description */}
                    <RevealOnScroll direction="left">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 leading-snug mt-4 lg:mt-0">
                            <span className="text-gray-900">Gocycle</span> menghadirkan platform all-in-one untuk <span className="text-gray-900">Marketplace Daur Ulang</span>, <span className="text-gray-900">Tracking Jejak Karbon</span>, dan <span className="text-gray-900">Edukasi</span>.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* PART 2: GRID LAYOUT (Reference: Our Platform) WITH CARD STYLE (Reference: GreenFlow) */}
                <div className="flex flex-col gap-6">
                    
                    {/* ROW 1: Two Wide Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Card 1: Marketplace (Light Green Style) */}
                        <RevealOnScroll direction="up" delay={0.1}>
                            <div className="bg-[#E8F5E9] rounded-[2.5rem] p-8 h-full min-h-[300px] flex flex-col justify-between relative overflow-hidden group transition-all hover:shadow-lg">
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">Circular Marketplace</h3>
                                        <div className="p-3 bg-white/50 backdrop-blur-sm rounded-full text-[#2E8B57]">
                                            <Repeat className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed max-w-[80%]">
                                        Jual beli limbah terpilah aman & terpercaya. Hubungkan pengepul dengan industri.
                                    </p>
                                </div>
                                {/* Decorative Image */}
                                <img 
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop" 
                                    alt="Nature" 
                                    className="absolute -right-10 -bottom-10 w-48 h-48 object-cover rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                                />
                            </div>
                        </RevealOnScroll>

                        {/* Card 2: Tracking (Dark Green Style) */}
                        <RevealOnScroll direction="up" delay={0.2}>
                            <div className="bg-[#1B4D3E] rounded-[2.5rem] p-8 h-full min-h-[300px] flex flex-col justify-between relative overflow-hidden group transition-all hover:shadow-lg">
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white">Smart Tracking</h3>
                                        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <p className="text-green-100 text-lg leading-relaxed max-w-[80%]">
                                        Monitor jejak karbon harianmu. Data real-time untuk gaya hidup yang lebih hijau.
                                    </p>
                                </div>
                                {/* Abstract Pattern */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full transition-transform duration-500 group-hover:scale-125" />
                            </div>
                        </RevealOnScroll>

                    </div>

                    {/* ROW 2: Three Smaller Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Card 3: Edukasi (White/Clean Style) */}
                        <RevealOnScroll direction="up" delay={0.3}>
                            <div className="bg-gray-50 rounded-[2.5rem] p-8 h-full min-h-[240px] flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-900">Edukasi</h3>
                                        <BookOpen className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Akses ratusan tutorial DIY dan panduan memilah sampah yang benar.
                                    </p>
                                </div>
                                <Link href="/edukasi" className="mt-4 text-sm font-bold text-gray-900 flex items-center gap-2 hover:gap-3 transition-all">
                                    Pelajari <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </RevealOnScroll>

                        {/* Card 4: Komunitas (White/Clean Style) */}
                        <RevealOnScroll direction="up" delay={0.4}>
                            <div className="bg-gray-50 rounded-[2.5rem] p-8 h-full min-h-[240px] flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-900">Komunitas</h3>
                                        <Users className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Terhubung dengan aktivis lingkungan dan ikuti event lokal.
                                    </p>
                                </div>
                                <div className="mt-4 flex -space-x-2">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>

                        {/* Card 5: CTA Button (Vibrant Green Style) */}
                        <RevealOnScroll direction="up" delay={0.5}>
                            <Link href="/register" className="bg-[#2E8B57] rounded-[2.5rem] p-8 h-full min-h-[240px] flex flex-col justify-center items-center text-center relative overflow-hidden group hover:bg-[#257a4a] transition-colors">
                                <div className="relative z-10">
                                    <Leaf className="w-8 h-8 text-white mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-1">Gabung Gocycle</h3>
                                    <p className="text-green-100 text-xs mb-6">Gratis Selamanya</p>
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                                        <ArrowRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                {/* Decor */}
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
                            </Link>
                        </RevealOnScroll>

                    </div>

                </div>
            </div>
        </section>
    );
}

