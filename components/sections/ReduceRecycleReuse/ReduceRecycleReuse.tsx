import RevealOnScroll from "@/components/animations/RevealOnScroll/RevealOnScroll";

export default function ReduceRecycleReuse() {
    return (
        <div className="relative bg-white overflow-hidden py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column: Text & Cards */}
                    <RevealOnScroll direction="right">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-800 text-xs font-bold tracking-wide uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                            Misi Kami
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Reduce, <span className="text-[#2E8B57]">Recycle</span>, Reuse
                        </h2>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Kami menghubungkan rantai pasok daur ulang. Dari limbah rumah tangga hingga sisa produksi konveksi, semua punya nilai di <strong>GOCYCLE</strong>.
                        </p>

                        {/* Modern List / Cards */}
                        <div className="space-y-6">
                            {[
                                { title: 'Reduce', desc: 'Kurangi penumpukan limbah dengan menjualnya kepada yang membutuhkan.', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
                                { title: 'Reuse', desc: 'Beli kain perca atau botol bekas untuk bahan kerajinan & UMKM.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
                                { title: 'Recycle', desc: 'Edukasi cara mengolah limbah menjadi produk bernilai ekonomi tinggi.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E8B57] flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                        <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>

                    {/* Right Column: Images Composition */}
                    <RevealOnScroll direction="left" delay={0.2} className="relative h-[600px] w-full flex items-center justify-center">
                        {/* Clean Background Blob */}
                        <div className="absolute inset-4 bg-white rounded-[60px] transform rotate-2 z-0"></div>

                        {/* Top Image Card */}
                        <div className="absolute top-8 right-4 w-72 h-64 bg-white p-4 rounded-3xl shadow-xl transform rotate-6 transition-transform hover:rotate-3 z-10">
                            <img
                                src="https://img.freepik.com/free-vector/students-learning-foreign-language-with-vocabulary_74855-11070.jpg"
                                alt="Education Illustration"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                        {/* Bottom Image Card */}
                        <div className="absolute bottom-12 left-8 w-80 h-96 bg-white p-4 rounded-3xl shadow-2xl transform -rotate-2 transition-transform hover:rotate-0 z-20">
                            <img
                                src="https://img.freepik.com/free-photo/colorful-collage-concept_23-2148666782.jpg"
                                alt="Recycling Project"
                                className="w-full h-full object-cover rounded-2xl"
                            />

                            {/* Checkmark Badge */}
                            <div className="absolute -top-5 -right-5 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-30">
                                <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#2E8B57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Bottom CTA Bar */}
                <RevealOnScroll direction="up" delay={0.3} className="mt-20 w-full bg-[#2E8B57] rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:px-12 gap-6">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">Siap untuk memulai perubahan?</h3>
                        <p className="text-green-100">Gabung sekarang dan jadilah pahlawan lingkungan.</p>
                    </div>
                    <button className="relative z-10 bg-white text-[#2E8B57] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-50 transform hover:scale-105 transition-all">
                        Gabung Sekarang
                    </button>
                    {/* Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full transform -translate-x-10 translate-y-10"></div>
                </RevealOnScroll>
            </div>
        </div>
    );
}
