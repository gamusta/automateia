import { ArrowRight, CheckCircle, Users, Zap, Clock } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-semibold">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                            Offre limitée - 50 premières entreprises
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Automatisez votre entreprise en{' '}
                            <span className="text-blue-600">30 jours</span>, sans connaissances techniques
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            La première plateforme IA française qui transforme les TPE/PME grâce à l'automatisation intelligente et accessible
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#demo"
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                            >
                                Demander une démo gratuite
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#solution"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center"
                            >
                                Découvrir la solution
                            </a>
                        </div>

                        <div className="flex items-center space-x-6 pt-4">
                            <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5 text-blue-600" />
                                <span className="text-gray-600 font-medium">Déjà adopté par 100+ entreprises</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                            {[
                                { icon: '🍴', label: 'Restauration' },
                                { icon: '🏠', label: 'Immobilier' },
                                { icon: '⚕️', label: 'Santé' },
                                { icon: '🔧', label: 'Artisanat' }
                            ].map((sector, index) => (
                                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <div className="text-2xl mb-2">{sector.icon}</div>
                                    <div className="text-sm font-medium text-gray-700">{sector.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <Zap className="w-8 h-8" />
                                    <div className="text-right">
                                        <div className="text-2xl font-bold">+237%</div>
                                        <div className="text-sm opacity-75">Productivité</div>
                                    </div>
                                </div>

                                <h2 className="text-xl font-semibold mb-4">Automatisation en action</h2>

                                <div className="space-y-4">
                                    {[
                                        { task: 'Génération devis automatique', status: 'completed', time: '2min' },
                                        { task: 'Qualification lead WhatsApp', status: 'completed', time: '30sec' },
                                        { task: 'Envoi rappel client', status: 'in-progress', time: '...' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <CheckCircle className={`w-5 h-5 ${item.status === 'completed' ? 'text-green-400' : 'text-yellow-400'}`} />
                                                <span className="text-sm">{item.task}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-4 h-4 opacity-75" />
                                                <span className="text-sm font-medium">{item.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;