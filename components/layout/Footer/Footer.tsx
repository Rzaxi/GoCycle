const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Go Cycle</h3>
                        <p className="text-gray-400 text-sm">
                            Platform untuk mendaur ulang limbah dan edukasi lingkungan. Bersama kita jaga bumi.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Tautan</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/" className="hover:text-white">Beranda</a></li>
                            <li><a href="/marketplace" className="hover:text-white">Marketplace</a></li>
                            <li><a href="/edukasi" className="hover:text-white">Edukasi</a></li>
                            <li><a href="/tentang-kami" className="hover:text-white">Tentang Kami</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
                        <p className="text-gray-400 text-sm">
                            Email: info@gocycle.com<br />
                            Telepon: +62 123 4567 890
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Go Cycle. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
