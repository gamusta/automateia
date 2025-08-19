import { ArrowRight } from 'lucide-react';

const Sectors = () => {
    const sectors = [
        {
            emoji: '🍴',
            title: 'Restauration',
            description: 'Gestion commandes, réservations, livraisons',
            features: [
                'Prise de commandes automatisée WhatsApp',
                'Gestion des réservations intelligente',
                'Suivi des livraisons en temps réel',
                'Fidélisation client personnalisée'
            ],
            color: 'from-orange-500 to-red-600',
            bgColor: 'bg-orange-50'
        },
        {
            emoji: '🏠',
            title: 'Immobilier',
            description: 'Suivi prospects, visites, contrats',
            features: [
                'Qualification automatique des leads',
                'Planification des visites optimisée',
                'Suivi personnalisé des dossiers',
                'Reporting commercial automatique'
            ],
            color: 'from-blue-500 to-indigo-600',
            bgColor: 'bg-blue-50'
        },
        {
            emoji: '⚕️',
            title: 'Santé',
            description: 'Prise RDV, rappels patients, facturation',
            features: [
                'Réservation RDV 24/7 automatisée',
                'Rappels patients personnalisés',
                'Gestion des annulations intelligente',
                'Facturation et remboursements'
            ],
            color: 'from-green-500 to-teal-600',
            bgColor: 'bg-green-50'
        },
        {
            emoji: '🔧',
            title: 'Artisanat',
            description: 'Devis automatiques, planning chantiers',
            features: [
                'Génération de devis intelligents',
                'Planification optimisée des chantiers',
                'Suivi matériaux et approvisionnement',
                'Communication client automatisée'
            ],
            color: 'from-purple-500 to-pink-600',
            bgColor: 'bg-purple-50'
        }
    ];

    return (
        <section id="secteurs" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Solutions sur-mesure pour <span className="text-blue-600">votre secteur</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Chaque métier a ses spécificités. Nos automatisations sont conçues pour répondre
                        aux défis particuliers de votre secteur d'activité.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start space-x-6">
                                <div className={`p-4 rounded-2xl ${sector.bgColor} text-4xl group-hover:scale-110 transition-transform`}>
                                    {sector.emoji}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {sector.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {sector.description}
                                    </p>

                                    <ul className="space-y-3 mb-6">
                                        {sector.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start space-x-3">
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${sector.color} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="#demo"
                                        className={`inline-flex items-center text-transparent bg-gradient-to-r ${sector.color} bg-clip-text font-semibold group-hover:underline`}
                                    >
                                        Voir un exemple pour mon secteur
                                        <ArrowRight className="ml-2 w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Votre secteur n'est pas listé ?
                        </h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Nous adaptons notre solution à tous les types d'entreprises.
                            Contactez-nous pour découvrir comment automatiser votre activité spécifique.
                        </p>
                        <a
                            href="#demo"
                            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors group"
                        >
                            Discuter de mon cas spécifique
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sectors;