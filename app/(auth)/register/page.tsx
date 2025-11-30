import Link from "next/link";
import { ArrowRight, Mail, Lock, User, Leaf, CheckCircle, ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex bg-white relative overflow-hidden">
      
      {/* Back to Home Button (Mobile) */}
      <div className="absolute top-6 left-6 z-50 lg:hidden">
        <Link href="/" className="p-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-sm text-gray-600 hover:text-[#2E8B57] transition-colors">
            <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      {/* Left Side - Visual/Brand */}
      <div className="hidden lg:flex w-[45%] bg-[#2E8B57] relative overflow-hidden items-center justify-center p-16">
        {/* Navigation Back */}
        <div className="absolute top-8 left-8 z-20">
            <Link href="/" className="flex items-center gap-2 text-green-50 hover:text-white transition-colors font-medium group">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                </div>
                <span>Kembali ke Beranda</span>
            </Link>
        </div>

        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1B4D3E] rounded-full blur-[120px] opacity-30 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#86EFAC] rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-md">
          <div className="mb-12">
             <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center mb-8 shadow-2xl shadow-green-900/20">
                <Leaf className="w-8 h-8 text-white" />
             </div>
             <h1 className="text-5xl font-bold mb-6 leading-[1.1] text-white tracking-tight">
                Mulai Perubahan <br/> <span className="text-[#86EFAC]">Sekarang.</span>
             </h1>
             <p className="text-green-50/90 text-lg leading-relaxed font-light mb-10">
                Bergabung dengan komunitas Gocycle dan jadilah bagian dari solusi pengolahan limbah masa depan.
             </p>
          </div>
          
          {/* Feature List */}
          <div className="space-y-5">
            {[
              "Akses penuh ke Marketplace Daur Ulang",
              "Tracking dampak lingkungan personal",
              "Terhubung dengan komunitas lokal",
              "Reward poin untuk setiap kontribusi"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#86EFAC]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#86EFAC]" />
                </div>
                <span className="font-medium text-white text-sm">{item}</span>
              </div>
            ))}
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
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#2E8B57] mb-4">
                <Leaf className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#2E8B57]">Gocycle</h2>
          </div>

          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Buat Akun Baru</h2>
            <p className="text-gray-500">
              Sudah punya akun?{" "}
              <Link href="/login" className="text-[#2E8B57] font-bold hover:underline decoration-2 underline-offset-4">
                Masuk di sini
              </Link>
            </p>
          </div>

          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Nama Lengkap</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#2E8B57] transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Nama lengkap kamu"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 font-medium"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#2E8B57] transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="nama@email.com"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#2E8B57] transition-colors" />
                </div>
                <input
                  type="password"
                  placeholder="Buat password kuat"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 font-medium"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 pt-2 ml-1">
              <div className="flex items-center h-5 mt-0.5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-[#2E8B57] focus:ring-[#2E8B57] cursor-pointer"
                />
              </div>
              <label htmlFor="terms" className="text-sm text-gray-500 leading-tight cursor-pointer select-none">
                Saya setuju dengan <Link href="/terms" className="text-[#2E8B57] font-bold hover:underline">Syarat & Ketentuan</Link> serta <Link href="/privacy" className="text-[#2E8B57] font-bold hover:underline">Kebijakan Privasi</Link> Gocycle.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2E8B57] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#246e45] hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden mt-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative">Daftar Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </button>

            {/* Social Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest">
                <span className="px-4 bg-white/80 backdrop-blur-sm text-gray-400 font-semibold">Atau daftar dengan</span>
              </div>
            </div>

            {/* Social Buttons */}
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
