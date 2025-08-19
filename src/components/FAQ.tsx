import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openItems, setOpenItems] = useState(new Set([0]));

    const toggleItem = (index: number) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index);
        } else {
            newOpenItems.add(index);
        }
        setOpenItems(newOpenItems);
    };

    const faqs = [
        {
            question: "Est-ce vraiment sans connaissances techniques ?",
            answer: "Absolument ! Notre approche no-code vous permet d'automatiser vos processus sans écrire une seule ligne de code. Nous vous formons sur des interfaces visuelles simples, et notre équipe vous accompagne à chaque étape. Plus de 95% de nos clients n'avaient aucune compétence technique au départ."
        },
        {
            question: "Combien de temps pour voir les premiers résultats ?",
            answer: "Les premiers résultats sont visibles dès la première semaine. Votre première automatisation sera active sous 48h après le démarrage. En général, nos clients économisent déjà 5-10h par semaine dès le premier mois, avec un ROI complet atteint sous 3 mois maximum."
        },
        {
            question: "Que se passe-t-il si je ne suis pas satisfait ?",
            answer: "Nous proposons une garantie 'satisfait ou remboursé' de 30 jours. Si notre solution ne répond pas à vos attentes, nous vous remboursons intégralement, sans questions ni justifications. De plus, nous nous engageons sur les résultats : si vous n'économisez pas au moins 5h par semaine, nous travaillons gratuitement jusqu'à y arriver."
        },
        {
            question: "Mes données sont-elles sécurisées ?",
            answer: "La sécurité est notre priorité absolue. Toutes vos données sont hébergées en France, sur des serveurs certifiés ISO 27001. Nous sommes 100% conformes RGPD, avec chiffrement de bout en bout et sauvegardes quotidiennes. Vous gardez le contrôle total de vos données et pouvez les récupérer à tout moment."
        },
        {
            question: "Puis-je intégrer vos solutions avec mes outils existants ?",
            answer: "Oui, c'est même notre spécialité ! Nous nous connectons à plus de 300 applications (comptabilité, CRM, e-commerce, réseaux sociaux...). Si votre outil spécifique n'est pas encore supporté, nous développons l'intégration personnalisée sans coût supplémentaire."
        },
        {
            question: "Que se passe-t-il si j'ai besoin d'aide après la formation ?",
            answer: "Notre accompagnement ne s'arrête jamais ! Vous avez accès à notre support par email, chat et téléphone. Nous proposons aussi des sessions de suivi mensuelles pour optimiser vos automatisations et en créer de nouvelles selon l'évolution de vos besoins."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Questions <span className="text-blue-600">fréquentes</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Toutes les réponses aux questions que vous vous posez sur notre solution d'automatisation
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            <button
                                className="w-full text-left p-6 flex justify-between items-start focus:outline-none"
                                onClick={() => toggleItem(index)}
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openItems.has(index) ? (
                                        <Minus className="w-5 h-5 text-blue-600" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-600" />
                                    )}
                                </div>
                            </button>

                            {openItems.has(index) && (
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-blue-50 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Vous n'avez pas trouvé la réponse à votre question ?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Notre équipe d'experts est là pour vous aider. Posez-nous toutes vos questions
                            lors de votre audit gratuit de 30 minutes.
                        </p>
                        <a
                            href="#demo"
                            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Réserver mon audit gratuit
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;