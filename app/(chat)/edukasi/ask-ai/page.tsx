"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
    IconArrowLeft,
    IconSend,
    IconPhoto,
    IconRobot,
    IconX,
    IconLoader2,
    IconSparkles
} from "@tabler/icons-react";

// Types
type Message = {
    id: string;
    role: "user" | "ai";
    content: string;
    image?: string;
    timestamp: Date;
};

export default function AskAIPage() {
    const router = useRouter();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "ai",
            content: "Halo! Saya Gocycle AI. 🌿\n\nBingung memilah sampah? Kirim foto sampahmu atau tanya apa saja tentang daur ulang, saya siap bantu!",
            timestamp: new Date("2024-01-01T12:00:00") // Fixed time for hydration consistency
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!inputValue.trim() && !selectedImage) return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue,
            image: selectedImage || undefined,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue("");
        setSelectedImage(null);
        setIsTyping(true);

        // Mock AI Response
        setTimeout(() => {
            let aiResponse = "Maaf, saya kurang paham. Bisa coba tanya tentang jenis sampah?";

            // Simple keyword matching logic
            const lowerInput = newUserMessage.content.toLowerCase();

            if (newUserMessage.image) {
                aiResponse = "Hmm, saya sedang menganalisis foto ini... 🔍\n\nSepertinya ini **Botol Plastik (PET)**. \n\n✅ **Bisa Didaur Ulang!**\nPastikan botol bersih, remas, dan buang ke tempat sampah warna **Kuning** (Anorganik).";
            } else if (lowerInput.includes("plastik")) {
                aiResponse = "Plastik biasanya masuk kategori **Anorganik**. Jika bersih, bisa didaur ulang. Jangan lupa bersihkan sisa makanan sebelum dibuang ya!";
            } else if (lowerInput.includes("kertas") || lowerInput.includes("kardus")) {
                aiResponse = "Kertas dan kardus masuk tong sampah **Biru**. Pastikan kering dan tidak berminyak agar bisa didaur ulang.";
            } else if (lowerInput.includes("makanan") || lowerInput.includes("sisa")) {
                aiResponse = "Sisa makanan adalah **Organik** (Tong Hijau). Kamu bisa mengolahnya menjadi kompos untuk tanaman di rumah! 🌱";
            } else if (lowerInput.includes("halo") || lowerInput.includes("hai")) {
                aiResponse = "Halo juga! Ada sampah yang bikin kamu bingung hari ini? Foto aja, biar aku bantu identifikasi! 📸";
            }

            const newAiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: aiResponse,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, newAiMessage]);
            setIsTyping(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col h-screen bg-white">
            {/* Header */}
            <header className="flex items-center justify-between p-4 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
                    >
                        <IconArrowLeft size={24} />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200">
                                <IconRobot size={24} className="text-white" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div>
                            <h1 className="font-bold text-gray-900 text-lg leading-tight">Gocycle AI</h1>
                            <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                                <IconSparkles size={12} /> Online
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Chat Area */}
            <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#FDFBF7] scroll-smooth">
                <div className="max-w-3xl mx-auto space-y-6">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`flex items-end gap-2 max-w-[85%] md:max-w-[70%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>

                                {/* Avatar */}
                                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm">
                                    {msg.role === "ai" ? (
                                        <div className="w-full h-full bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center">
                                            <IconRobot size={18} className="text-white" />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">
                                            ME
                                        </div>
                                    )}
                                </div>

                                {/* Bubble */}
                                <div className={`p-4 rounded-2xl shadow-sm ${msg.role === "user"
                                    ? "bg-emerald-600 text-white rounded-tr-none"
                                    : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                                    }`}>
                                    {msg.image && (
                                        <div className="mb-3 rounded-xl overflow-hidden border border-white/20">
                                            <img src={msg.image} alt="Uploaded" className="w-full h-auto max-h-60 object-cover" />
                                        </div>
                                    )}
                                    <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                    <span suppressHydrationWarning className={`text-[10px] block mt-2 text-right opacity-70`}>
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                        >
                            <div className="flex items-end gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center shadow-sm">
                                    <IconRobot size={18} className="text-white" />
                                </div>
                                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </main>

            {/* Input Area */}
            <footer className="p-4 bg-white border-t border-gray-100 sticky bottom-0 z-30">
                <div className="max-w-3xl mx-auto">
                    {/* Image Preview */}
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                className="mb-4 relative inline-block"
                            >
                                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-emerald-100 shadow-lg relative cursor-pointer group">
                                    <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <IconX size={20} className="text-white" />
                                    </div>
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="absolute inset-0 w-full h-full z-10"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSendMessage} className="flex gap-2 items-end">
                        <div className="flex-1 relative bg-gray-50 rounded-[24px] border border-gray-200 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="image-upload"
                                onChange={handleImageUpload}
                            />
                            <label
                                htmlFor="image-upload"
                                className="absolute left-2 bottom-2 p-2 text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-full cursor-pointer transition-colors"
                            >
                                <IconPhoto size={24} />
                            </label>

                            <textarea
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSendMessage(e);
                                    }
                                }}
                                placeholder="Tanya tentang sampah..."
                                className="w-full py-4 pl-14 pr-4 bg-transparent border-none focus:ring-0 resize-none max-h-32 text-gray-700 placeholder:text-gray-400 rounded-[24px]"
                                rows={1}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={!inputValue.trim() && !selectedImage}
                            className="p-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:scale-105 active:scale-95 transition-all flex-shrink-0"
                        >
                            {isTyping ? <IconLoader2 className="animate-spin" size={24} /> : <IconSend size={24} />}
                        </button>
                    </form>
                    <p className="text-center text-[10px] text-gray-400 mt-3 font-medium">
                        *AI dapat membuat kesalahan. Selalu verifikasi informasi daur ulang setempat.
                    </p>
                </div>
            </footer>
        </div>
    );
}
