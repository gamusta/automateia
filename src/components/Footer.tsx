import { Zap, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold">AutomateIA</span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            La première plateforme française d'automatisation IA pour TPE/PME.
                            Simplifiez vos processus, boostez votre productivité.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com" aria-label="linkedin" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.x.com" aria-label="x" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Solutions</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Automatisation</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Chatbot IA</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Formation</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Intégrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300">contact@automateia.fr</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300">01 23 45 67 89</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300">Paris, France</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h5 className="font-semibold mb-4">Secteurs</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white">Restauration</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Immobilier</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Santé</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Artisanat</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-semibold mb-4">Ressources</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Webinaires</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Études de cas</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-semibold mb-4">Support</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white">Centre d'aide</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Communauté</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-semibold mb-4">Légal</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white">CGU</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Confidentialité</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">RGPD</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Mentions légales</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 AutomateIA. Tous droits réservés.
                        </p>
                        <div className="flex items-center space-x-6 mt-4 md:mt-0">
                            <span className="text-gray-400 text-sm">🇫🇷 Hébergé en France</span>
                            <span className="text-gray-400 text-sm">🔒 Conforme RGPD</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;