import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "99€",
            period: "/mois",
            description: "Idéal pour démarrer l'automatisation",
            features: [
                "Formation complète (6h)",
                "1 workflow d'automatisation",
                "Support email",
                "Communauté exclusive",
                "Intégrations de base",
                "Reporting mensuel"
            ],
            cta: "Commencer maintenant",
            popular: false,
            color: "border-gray-200",
            buttonColor: "bg-gray-900 hover:bg-gray-800"
        },
        {
            name: "Pro",
            price: "199€",
            period: "/mois",
            description: "La solution complète pour TPE/PME",
            features: [
                "Formation complète (6h)",
                "Workflows illimités",
                "Chatbot IA multicanal",
                "Support prioritaire",
                "Accompagnement 1:1",
                "Intégrations avancées",
                "Reporting en temps réel",
                "API personnalisée"
            ],
            cta: "Démarrer maintenant",
            popular: true,
            color: "border-blue-500",
            buttonColor: "bg-blue-600 hover:bg-blue-700"
        },
        {
            name: "Enterprise",
            price: "Sur devis",
            period: "",
            description: "Solution personnalisée pour grandes entreprises",
            features: [
                "Tout du plan Pro",
                "Développements sur-mesure",
                "Chef de projet dédié",
                "Support 24/7",
                "Formation équipe complète",
                "SLA garanti",
                "Audit sécurité",
                "Migration assistée"
            ],
            cta: "Nous contacter",
            popular: false,
            color: "border-purple-200",
            buttonColor: "bg-purple-600 hover:bg-purple-700"
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Tarifs <span className="text-blue-600">transparents</span>, sans surprise
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Choisissez la formule qui correspond à vos besoins.
                        Tous nos plans incluent la formation et l'accompagnement pour garantir votre réussite.
                    </p>

                    <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-semibold">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Satisfait ou remboursé 30 jours
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 shadow-sm border-2 ${plan.color} ${
                                plan.popular ? 'transform scale-105' : ''
                            } hover:shadow-lg transition-all duration-300`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                                        <Star className="w-4 h-4 mr-1 fill-current" />
                                        Plus populaire
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-600 mb-4">{plan.description}</p>
                                <div className="flex items-end justify-center">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start space-x-3">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full ${plan.buttonColor} text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center group`}>
                                {plan.cta}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                        <div className="text-2xl mb-2">🔒</div>
                        <h4 className="font-semibold text-gray-900 mb-2">Données sécurisées</h4>
                        <p className="text-gray-600 text-sm">Hébergement en France, conformité RGPD garantie</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                        <div className="text-2xl mb-2">⚡</div>
                        <h4 className="font-semibold text-gray-900 mb-2">Mise en route rapide</h4>
                        <p className="text-gray-600 text-sm">Première automatisation active sous 48h</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                        <div className="text-2xl mb-2">🎯</div>
                        <h4 className="font-semibold text-gray-900 mb-2">Support français</h4>
                        <p className="text-gray-600 text-sm">Équipe basée en France, support en français</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-6">
                        Questions sur nos tarifs ? Besoin d'une solution sur-mesure ?
                    </p>
                    <a
                        href="#demo"
                        className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                    >
                        Contactez notre équipe commerciale
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;