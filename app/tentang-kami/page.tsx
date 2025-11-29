export default function TentangKami() {
    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Tentang Kami
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Mengenal lebih dekat tim di balik Go Cycle.
                    </p>
                </div>

                <div className="bg-green-50 rounded-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
                    <p className="text-gray-700 mb-4">
                        <strong>Visi:</strong> Menjadi platform terdepan dalam menggerakkan ekonomi sirkular di Indonesia.
                    </p>
                    <p className="text-gray-700">
                        <strong>Misi:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Mengedukasi masyarakat tentang pentingnya daur ulang.</li>
                        <li>Menyediakan marketplace yang aman dan nyaman untuk transaksi limbah.</li>
                        <li>Membangun komunitas yang peduli terhadap kelestarian lingkungan.</li>
                    </ul>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Tim Kami</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member Placeholder */}
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-lg font-bold text-gray-900">Nama Anggota</h3>
                            <p className="text-green-600">Posisi</p>
                        </div>
                        {/* Team Member Placeholder */}
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-lg font-bold text-gray-900">Nama Anggota</h3>
                            <p className="text-green-600">Posisi</p>
                        </div>
                        {/* Team Member Placeholder */}
                        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-lg font-bold text-gray-900">Nama Anggota</h3>
                            <p className="text-green-600">Posisi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
