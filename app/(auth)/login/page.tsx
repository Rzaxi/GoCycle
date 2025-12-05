"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Mail, Lock, Leaf, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const isRegistered = searchParams.get("registered") === "true";

  return (
    <div className="min-h-screen flex bg-white relative overflow-hidden">
      
      {/* Background Pattern for Form Area (Subtle Dots) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#1B4D3E 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-50 lg:hidden">
        <Link href="/" className="p-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-sm text-gray-600 hover:text-[#1B4D3E] transition-colors">
            <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      {/* Left Side - Visual/Brand (Hidden on Mobile) */}
      <div className="hidden lg:flex w-[45%] bg-[#1B4D3E] relative overflow-hidden items-center justify-center p-16">
        {/* Navigation Back */}
        <div className="absolute top-8 left-8 z-20">
            <Link href="/" className="flex items-center gap-2 text-green-100/80 hover:text-white transition-colors font-medium group">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                </div>
                <span>Kembali ke Beranda</span>
            </Link>
        </div>

        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2E8B57] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4ADE80] rounded-full blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-md">
          <div className="mb-12">
             <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center mb-8 shadow-2xl shadow-green-900/20">
                <Leaf className="w-8 h-8 text-[#4ADE80]" />
             </div>
             <h1 className="text-5xl font-bold mb-6 leading-[1.1] text-white tracking-tight">
                Selamat Datang <br/> <span className="text-[#4ADE80]">Kembali!</span>
             </h1>
             <p className="text-green-100/90 text-lg leading-relaxed font-light">
                "Keberlanjutan dimulai dari satu langkah kecil. Terima kasih telah melanjutkan langkahmu bersama Gocycle."
             </p>
          </div>
          
          {/* Dynamic Stat Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl shadow-black/10 transform hover:scale-105 transition-transform duration-500">
            <div className="flex items-start gap-4">
                <div className="flex-1">
                    <div className="text-xs font-bold text-[#4ADE80] uppercase tracking-wider mb-1">Impact Tracker</div>
                    <div className="text-2xl font-bold text-white mb-1">1,240+ kg</div>
                    <div className="text-xs text-green-200">Limbah yang berhasil didaur ulang oleh komunitas minggu ini.</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#4ADE80]/20 flex items-center justify-center border border-[#4ADE80]/30">
                    <Leaf className="w-6 h-6 text-[#4ADE80]" />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-6 sm:p-12 relative">
        {/* Decorative Blur on Right */}
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        <div className="max-w-md w-full bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-[2.5rem] border border-white shadow-xl shadow-gray-100/50 relative z-10">
          
          {/* Mobile Header */}
          <div className="lg:hidden flex flex-col items-center mb-10">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-4">
                <Leaf className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#1B4D3E]">Gocycle</h2>
          </div>

          <div className="text-center lg:text-left mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Masuk Akun</h2>
            <p className="text-gray-500">
              Belum punya akun?{" "}
              <Link href="/register" className="text-[#1B4D3E] font-bold hover:underline decoration-2 underline-offset-4">
                Daftar Gratis Sekarang
              </Link>
            </p>
          </div>

          <form className="space-y-6">
            {/* Success Message */}
            {isRegistered && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-green-700 text-sm font-medium">
                  Akun berhasil dibuat! Silakan masuk dengan akun baru Anda.
                </span>
              </div>
            )}

            <div className="space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#1B4D3E] transition-colors" />
                  </div>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#1B4D3E]/20 focus:border-[#1B4D3E] transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-2 ml-1">
                  <label className="block text-sm font-bold text-gray-700">Password</label>
                  <Link href="/forgot-password" className="text-xs text-[#1B4D3E] font-bold hover:underline">
                    Lupa Password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#1B4D3E] transition-colors" />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#1B4D3E]/20 focus:border-[#1B4D3E] transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B4D3E] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#153d31] hover:shadow-xl hover:shadow-green-900/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative">Masuk Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest">
                <span className="px-4 bg-white/80 backdrop-blur-sm text-gray-400 font-semibold">Atau masuk dengan</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all gap-3 group bg-white">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-gray-700 text-sm">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all gap-3 group bg-white">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-gray-700 text-sm">Facebook</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
