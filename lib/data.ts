import {
    IconSearch,
    IconRecycle,
    IconTools,
} from "@tabler/icons-react";

export const allProducts = [
    {
        id: 1,
        name: "Sofa Ban Bekas Premium",
        price: 230000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
        category: "DIY Product",
        seller: "Rajib Craft",
        tag: "Best Seller",
        description: "Sofa unik yang terbuat dari ban bekas berkualitas tinggi. Didesain dengan kenyamanan maksimal dan estetika modern. Cocok untuk mempercantik ruang tamu atau teras Anda dengan sentuhan ramah lingkungan.",
        impact: "Menyelamatkan 4 ban bekas dari TPA"
    },
    {
        id: 2,
        name: "Vas Botol Kaca Estetik",
        price: 45000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800",
        category: "DIY Product",
        seller: "Glass Art",
        tag: "New",
        description: "Vas bunga cantik dari botol kaca daur ulang. Diproses dengan teknik pemotongan dan penghalusan khusus sehingga aman dan terlihat elegan.",
        impact: "Mendaur ulang 2 botol kaca"
    },
    {
        id: 3,
        name: "Lampu Gantung Kardus",
        price: 85000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800",
        category: "DIY Product",
        seller: "Eco Light",
        tag: null,
        description: "Lampu gantung dengan kap yang terbuat dari kardus bekas pilihan. Memberikan nuansa hangat dan artistik pada ruangan Anda.",
        impact: "Mengurangi 0.5kg limbah kardus"
    },
    {
        id: 4,
        name: "Plastik PET Bersih (1kg)",
        price: 5000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1562077772-3bd305261997?w=800",
        category: "Limbah Domestik",
        seller: "Bank Sampah 01",
        tag: "High Demand",
        description: "Plastik jenis PET yang sudah dicuci bersih dan siap giling. Cocok untuk pengepul atau pengrajin daur ulang plastik.",
        impact: "Mencegah 1kg plastik mencemari laut"
    },
    {
        id: 5,
        name: "Kertas HVS Bekas (1kg)",
        price: 3000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800",
        category: "Limbah Domestik",
        seller: "Berkah Kertas",
        tag: null,
        description: "Kertas HVS bekas pakai (satu sisi atau dua sisi). Bisa didaur ulang menjadi kertas baru atau kerajinan bubur kertas.",
        impact: "Menyelamatkan pohon dari penebangan"
    },
    {
        id: 6,
        name: "Totebag Perca Denim",
        price: 120000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
        category: "DIY Product",
        seller: "Denim Upcycle",
        tag: "Limited",
        description: "Tas totebag trendy dari sisa potongan kain denim (perca). Kuat, stylish, dan setiap motifnya unik (one of a kind).",
        impact: "Mengurangi limbah tekstil fashion"
    },
    {
        id: 7,
        name: "Minyak Jelantah (5L)",
        price: 35000,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800",
        category: "Limbah Domestik",
        seller: "Dapur Sehat",
        tag: null,
        description: "Minyak jelantah sisa penggorengan rumah tangga. Dikumpulkan dalam jerigen 5 liter. Cocok untuk bahan baku biodiesel.",
        impact: "Mencegah pencemaran air tanah"
    },
    {
        id: 8,
        name: "Pupuk Kompos Organik",
        price: 15000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
        category: "DIY Product",
        seller: "Green Farm",
        tag: "Organic",
        description: "Pupuk kompos matang dari sampah organik dapur. Sangat subur untuk tanaman hias maupun sayuran.",
        impact: "Mengembalikan nutrisi ke tanah"
    },
];

export const categories = [
    { id: "all", label: "Semua", icon: IconSearch },
    { id: "DIY Product", label: "Kerajinan", icon: IconTools },
    { id: "Limbah Domestik", label: "Bahan Baku", icon: IconRecycle },
];
