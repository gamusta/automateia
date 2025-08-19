import { Clock, DollarSign, MessageSquare, BarChart3 } from 'lucide-react';

const Problem = () => {
    const problems = [
        {
            icon: Clock,
            title: "Vous passez 15h/semaine sur l'administratif",
            description: "Saisie manuelle, suivi clients, facturation... Autant de temps perdu au lieu de développer votre activité.",
            color: "text-red-600"
        },
        {
            icon: DollarSign,
            title: "Les solutions existantes sont trop chères et complexes",
            description: "Coûts cachés, formations longues, intégrations compliquées. Vous abandonnez avant même de commencer.",
            color: "text-orange-600"
        },
        {
            icon: MessageSquare,
            title: "Vos clients vous contactent partout, tout le temps",
            description: "WhatsApp, email, téléphone... Impossible de tout suivre et de répondre rapidement à chacun.",
            color: "text-yellow-600"
        },
        {
            icon: BarChart3,
            title: "Vous n'avez jamais de vue d'ensemble sur votre activité",
            description: "Données éparpillées, reporting inexistant. Vous pilotez à l'aveugle sans savoir où vous allez.",
            color: "text-blue-600"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Stop aux tâches répétitives qui <span className="text-red-600">freinent votre croissance</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Chaque jour, vous perdez un temps précieux sur des tâches qui pourraient être automatisées.
                        Pendant ce temps, vos concurrents prennent de l'avance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`p-3 rounded-lg bg-gray-50 ${problem.color}`}>
                                    <problem.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        {problem.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-red-100 rounded-full text-red-800 font-semibold">
                        <span className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></span>
                        Résultat : Vous travaillez DANS votre entreprise, pas SUR votre entreprise
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;