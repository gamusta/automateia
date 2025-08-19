import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Marie Dubois",
            business: "Restaurant Le Petit Bistrot, Lyon",
            avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2",
            quote: "J'ai récupéré mes soirées grâce à l'automatisation des commandes WhatsApp. Plus de stress, mes clients sont servis même quand je ne suis pas là.",
            results: "15h/semaine économisées",
            rating: 5,
            sector: "🍴"
        },
        {
            name: "Thomas Martin",
            business: "Agent immobilier indépendant, Bordeaux",
            avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2",
            quote: "3x plus de prospects qualifiés depuis que le chatbot filtre les demandes. Je ne perds plus de temps avec des visiteurs non sérieux.",
            results: "+200% de leads qualifiés",
            rating: 5,
            sector: "🏠"
        },
        {
            name: "Dr. Sophie Laurent",
            business: "Cabinet médical, Toulouse",
            avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2",
            quote: "Fini les devis perdus ! Tout est automatisé, de la demande au suivi. Mes clients apprécient la rapidité et moi je gagne un temps fou.",
            results: "0 devis perdu depuis 6 mois",
            rating: 5,
            sector: "⚕️"
        }
    ];

    return (
        <section id="temoignages" className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Ils ont déjà <span className="text-blue-600">transformé leur entreprise</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez comment nos clients ont révolutionné leur quotidien et boosté leurs résultats
                        grâce à l'automatisation intelligente.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative"
                        >
                            <div className="absolute top-6 right-6 text-3xl opacity-20">
                                <Quote />
                            </div>

                            <div className="flex items-center space-x-4 mb-6">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                                    <div className="flex items-center mt-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                                <div className="text-2xl">
                                    {testimonial.sector}
                                </div>
                            </div>

                            <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                                "{testimonial.quote}"
                            </blockquote>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                                <div className="text-sm font-semibold text-blue-600">Résultat :</div>
                                <div className="text-lg font-bold text-gray-900">{testimonial.results}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 text-center">
                    <div className="mb-8">
                        <div className="flex justify-center items-center space-x-8 mb-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
                                <div className="text-sm text-gray-600">Entreprises accompagnées</div>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">4.9/5</div>
                                <div className="text-sm text-gray-600">Note de satisfaction</div>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-1">237%</div>
                                <div className="text-sm text-gray-600">ROI moyen</div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Rejoignez-les et transformez votre entreprise dès aujourd'hui
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Ne restez pas spectateur de la transformation digitale.
                        Vos concurrents automatisent déjà... et vous ?
                    </p>

                    <a
                        href="#demo"
                        className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                    >
                        Je veux les mêmes résultats
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;