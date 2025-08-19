import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const FinalCTA = () => {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        secteur: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
        // Ici vous pourriez intégrer avec votre service d'email/CRM
        alert('Merci ! Nous vous contacterons sous 24h pour planifier votre audit gratuit.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="demo" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Prêt à <span className="text-blue-300">automatiser</span> votre entreprise ?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Réservez votre audit gratuit de 30 minutes. Nous analysons votre situation
                            et vous montrons exactement comment automatiser vos processus.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Sans engagement</h3>
                                    <p className="text-blue-200 text-sm">Audit 100% gratuit, aucune obligation d'achat</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-600 p-2 rounded-lg">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Réponse sous 24h</h3>
                                    <p className="text-blue-200 text-sm">Notre équipe vous contacte rapidement</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-600 p-2 rounded-lg">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Expert dédié</h3>
                                    <p className="text-blue-200 text-sm">Un spécialiste de votre secteur vous accompagne</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-800/50 rounded-2xl p-6 border border-blue-700">
                            <h4 className="font-semibold text-lg mb-3">Ce que vous repartez avec :</h4>
                            <ul className="space-y-2 text-blue-100">
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    <span>Audit complet de vos processus actuels</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    <span>Plan d'automatisation personnalisé</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    <span>Estimation précise du ROI</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    <span>Roadmap de mise en œuvre</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Réservez votre audit gratuit
                            </h3>
                            <p className="text-gray-600">
                                30 minutes qui peuvent transformer votre entreprise
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nom complet *
                                </label>
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    required
                                    value={formData.nom}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Jean Dupont"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email professionnel *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="jean@monentreprise.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Téléphone *
                                </label>
                                <input
                                    type="tel"
                                    id="telephone"
                                    name="telephone"
                                    required
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="06 12 34 56 78"
                                />
                            </div>

                            <div>
                                <label htmlFor="secteur" className="block text-sm font-medium text-gray-700 mb-2">
                                    Secteur d'activité *
                                </label>
                                <select
                                    id="secteur"
                                    name="secteur"
                                    required
                                    value={formData.secteur}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Sélectionnez votre secteur</option>
                                    <option value="restauration">Restauration</option>
                                    <option value="immobilier">Immobilier</option>
                                    <option value="sante">Santé</option>
                                    <option value="artisanat">Artisanat</option>
                                    <option value="services">Services</option>
                                    <option value="commerce">Commerce</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center group"
                            >
                                Réserver ma démo gratuite (30min)
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold text-green-800">Garantie :</span> Audit offert, sans engagement
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex items-center space-x-8 bg-blue-800/30 rounded-2xl px-8 py-6 border border-blue-700">
                        <div className="text-white">
                            <div className="text-2xl font-bold">157</div>
                            <div className="text-sm text-blue-200">Démos réservées ce mois</div>
                        </div>
                        <div className="w-px h-10 bg-blue-600"></div>
                        <div className="text-white">
                            <div className="text-2xl font-bold">4.9/5</div>
                            <div className="text-sm text-blue-200">Satisfaction client</div>
                        </div>
                        <div className="w-px h-10 bg-blue-600"></div>
                        <div className="text-white">
                            <div className="text-2xl font-bold">24h</div>
                            <div className="text-sm text-blue-200">Délai de réponse moyen</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;