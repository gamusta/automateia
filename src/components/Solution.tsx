import { GraduationCap, Zap, Bot, ArrowRight } from 'lucide-react';

const Solution = () => {
    const pillars = [
        {
            icon: GraduationCap,
            title: "Formation",
            subtitle: "Devenez autonome rapidement",
            features: [
                "Ateliers pratiques IA et automatisation",
                "Accompagnement personnalisé 1:1",
                "Support continu par nos experts",
                "Communauté d'entraide exclusive"
            ],
            color: "from-green-500 to-emerald-600",
            bgColor: "bg-green-50",
            iconColor: "text-green-600"
        },
        {
            icon: Zap,
            title: "Automatisation",
            subtitle: "Workflows intelligents clés en main",
            features: [
                "Factures et devis automatiques",
                "Intégrations avec vos outils existants",
                "Reporting et analytics automatisés",
                "Gestion RDV et planning optimisée"
            ],
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            icon: Bot,
            title: "Relation Client Augmentée",
            subtitle: "IA conversationnelle 24/7",
            features: [
                "Chatbot multicanal (WhatsApp, web, SMS)",
                "Réponses instantanées et personnalisées",
                "Qualification automatique des prospects",
                "Escalade intelligente vers vous"
            ],
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600"
        }
    ];

    return (
        <section id="solution" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Notre solution : <span className="text-blue-600">Les 3 Piliers</span> de votre transformation
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Une approche complète qui combine formation, technologie et accompagnement pour garantir votre réussite
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl bg-gradient-to-br ${pillar.color} transition-opacity`}></div>

                            <div className="relative">
                                <div className={`inline-flex p-4 rounded-2xl ${pillar.bgColor} mb-6`}>
                                    <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                                <p className="text-gray-600 mb-6">{pillar.subtitle}</p>

                                <ul className="space-y-3">
                                    {pillar.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start space-x-3">
                                            <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Prêt à découvrir comment ces 3 piliers peuvent transformer votre entreprise ?
                    </h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Réservez votre audit gratuit de 30 minutes. Nous analysons votre situation et vous montrons le potentiel d'automatisation spécifique à votre activité.
                    </p>
                    <a
                        href="#demo"
                        className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors group"
                    >
                        Réserver mon audit gratuit
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Solution;