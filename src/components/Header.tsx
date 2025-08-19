import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">AutomateIA</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#solution" className="text-gray-600 hover:text-blue-600 transition-colors">Solution</a>
                        <a href="#secteurs" className="text-gray-600 hover:text-blue-600 transition-colors">Secteurs</a>
                        <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Tarifs</a>
                        {/*<a href="#temoignages" className="text-gray-600 hover:text-blue-600 transition-colors">Témoignages</a>*/}
                    </nav>

                    <div className="hidden md:block">
                        <a href="#demo" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Démo gratuite
                        </a>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 py-4">
                        <nav className="flex flex-col space-y-4">
                            <a href="#solution" className="text-gray-600 hover:text-blue-600">Solution</a>
                            <a href="#secteurs" className="text-gray-600 hover:text-blue-600">Secteurs</a>
                            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Tarifs</a>
                            {/*<a href="#temoignages" className="text-gray-600 hover:text-blue-600">Témoignages</a>*/}
                            <a href="#demo" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-center">
                                Démo gratuite
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;