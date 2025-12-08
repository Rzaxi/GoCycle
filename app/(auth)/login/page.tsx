"use client";

import React, { useState } from "react";
import { IconMail, IconLock, IconBrandGoogle, IconArrowRight, IconLoader2 } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            window.location.href = "/profile";
        }, 1500);
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Image/Branding */}
            <div className="hidden lg:flex w-1/2 bg-emerald-900 relative overflow-hidden items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                <div className="relative z-10 p-12 text-white max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-5xl font-bold mb-6">Selamat Datang Kembali!</h1>
                        <p className="text-xl text-emerald-100 leading-relaxed">
                            Teruskan langkah kecilmu untuk bumi yang lebih bersih. Kelola sampahmu, dapatkan poinnya.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-md w-full"
                >
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Masuk Akun</h2>
                        <p className="text-gray-500">Masukkan email dan password untuk melanjutkan.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                            <div className="relative">
                                <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                    placeholder="nama@email.com"
                                    defaultValue="user@gocycle.id"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-bold text-gray-700">Password</label>
                                <a href="#" className="text-xs font-bold text-emerald-600 hover:text-emerald-700">Lupa Password?</a>
                            </div>
                            <div className="relative">
                                <IconLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                                    placeholder="••••••••"
                                    defaultValue="password123"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <IconLoader2 className="animate-spin" size={20} />
                            ) : (
                                <>Masuk Sekarang <IconArrowRight size={20} /></>
                            )}
                        </button>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">atau masuk dengan</span>
                            </div>
                        </div>

                        <button className="mt-6 w-full bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
                            <IconBrandGoogle size={20} /> Google
                        </button>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-500">
                        Belum punya akun? <Link href="/register" className="font-bold text-emerald-600 hover:text-emerald-700">Daftar Gratis</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
