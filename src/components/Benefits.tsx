import { Clock, TrendingUp, DollarSign, Target } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: Clock,
            title: "10h/semaine",
            subtitle: "récupérées sur l'administratif",
            description: "Plus de saisies manuelles, de relances clients ou de facturation. Concentrez-vous sur votre cœur de métier.",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: TrendingUp,
            title: "+40%",
            subtitle: "d'augmentation du taux de conversion",
            description: "Réponses instantanées, suivi personnalisé, qualification automatique. Vos prospects deviennent clients.",
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: DollarSign,
            title: "-30%",
            subtitle: "de réduction des coûts opérationnels",
            description: "Moins d'erreurs, de ressources humaines dédiées à l'admin. Plus de marge pour investir et grandir.",
            color: "from-purple-500 to-pink-600"
        },
        {
            icon: Target,
            title: "ROI garanti",
            subtitle: "sous 3 mois maximum",
            description: "Les gains de productivité compensent largement l'investissement. Sinon, nous vous remboursons.",
            color: "from-orange-500 to-red-600"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Des résultats <span className="text-blue-600">mesurables dès le premier mois</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nos clients constatent des améliorations concrètes rapidement.
                        Voici les bénéfices moyens observés sur plus de 100 entreprises accompagnées.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2"
                        >
                            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-6 group-hover:scale-110 transition-transform`}>
                                <benefit.icon className="w-8 h-8 text-white" />
                            </div>

                            <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2`}>
                                {benefit.title}
                            </div>

                            <div className="text-lg font-semibold text-gray-900 mb-4">
                                {benefit.subtitle}
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Calcul de votre ROI personnalisé
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Chaque entreprise est unique. C'est pourquoi nous calculons votre retour sur investissement
                                basé sur votre situation actuelle et vos objectifs spécifiques.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-gray-700">Audit gratuit de vos processus actuels</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-gray-700">Estimation du temps gagné par automatisation</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-gray-700">Projection des gains sur 12 mois</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Exemple concret :</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Temps administratif/semaine :</span>
                                    <span className="font-semibold">15h</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Coût horaire (charges incluses) :</span>
                                    <span className="font-semibold">35€</span>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-900 font-semibold">Économie mensuelle :</span>
                                        <span className="text-2xl font-bold text-green-600">2 100€</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 font-semibold">ROI en 3 mois :</span>
                                    <span className="text-2xl font-bold text-blue-600">+350%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;