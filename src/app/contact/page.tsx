"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Formulaire soumis:", formData);
    alert(
      "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais."
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>Lun à Ven – 8h00 à 18h00</span>
            <span>+212 6 75 75 19 09</span>
          </div>
          <div className="hidden md:block">
            <span>348 Village Pilote Dar Bouazza, Casablanca</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-all duration-300 font-bold text-xl group"
            >
              <Image
                src="/images/logo.png"
                alt="Connect Montessori Logo"
                width={32}
                height={32}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                Connect Montessori
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="relative group font-bold text-lg text-gray-800 hover:text-green-600 transition-all duration-300 py-2 px-1"
            >
              <span className="relative z-10">Accueil</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
              <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg -m-2"></div>
            </Link>
            <Link
              href="/maternelle"
              className="relative group font-bold text-lg text-gray-800 hover:text-green-600 transition-all duration-300 py-2 px-1"
            >
              <span className="relative z-10">Maternelle</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
              <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg -m-2"></div>
            </Link>
            <Link
              href="/cours-soutien"
              className="relative group font-bold text-lg text-gray-800 hover:text-green-600 transition-all duration-300 py-2 px-1"
            >
              <span className="relative z-10">Cours de Soutien</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
              <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg -m-2"></div>
            </Link>
            <Link
              href="/contact"
              className="relative group font-bold text-lg text-green-600 transition-all duration-300 py-2 px-1"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
              <div className="absolute inset-0 bg-green-50 rounded-lg -m-2"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 hover:text-green-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block font-bold text-lg text-gray-800 hover:text-green-600 transition-colors py-2"
            >
              Accueil
            </Link>
            <Link
              href="/maternelle"
              className="block font-bold text-lg text-gray-800 hover:text-green-600 transition-colors py-2"
            >
              Maternelle
            </Link>
            <Link
              href="/cours-soutien"
              className="block font-bold text-lg text-gray-800 hover:text-green-600 transition-colors py-2"
            >
              Cours de Soutien
            </Link>
            <Link
              href="/contact"
              className="block font-bold text-lg text-green-600 transition-colors py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section Contact */}
      <section className="bg-gradient-to-br from-green-500 via-blue-600 to-purple-700 min-h-[50vh] relative overflow-hidden">
        {/* Éléments décoratifs animés */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Formes géométriques flottantes */}
        <div className="absolute inset-0">
          <div
            className="absolute top-10 right-10 w-32 h-32 border-2 border-white/20 rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white/20 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center text-white">
            <div className="mb-8">
              <span className="text-lg font-medium bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm border border-white/30">
                📞 Contactez-nous
              </span>
            </div>
            <h1 className="text-6xl font-bold leading-tight mb-8">
              Parlons de
              <br />
              <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                l'Avenir de Votre Enfant
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90 leading-relaxed">
              Nous sommes là pour répondre à toutes vos questions et vous
              accompagner dans le choix de la meilleure éducation pour votre
              enfant.
            </p>
          </div>
        </div>
      </section>

      {/* Section Principale Contact */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulaire de Contact */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                {/* Éléments décoratifs du formulaire */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-white">✉️</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      Envoyez-nous un Message
                    </h2>
                    <p className="text-gray-600">
                      Nous vous répondrons dans les plus brefs délais
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="nom"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="telephone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="sujet"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Sujet *
                        </label>
                        <select
                          id="sujet"
                          name="sujet"
                          value={formData.sujet}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        >
                          <option value="">Choisir un sujet</option>
                          <option value="maternelle">
                            Information Maternelle
                          </option>
                          <option value="cours-soutien">
                            Cours de Soutien
                          </option>
                          <option value="inscription">Inscription</option>
                          <option value="visite">Demande de Visite</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                        placeholder="Décrivez votre demande ou posez vos questions..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Envoyer le Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Informations de Contact */}
            <div className="space-y-8">
              {/* En-tête des informations */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Informations de Contact
                </h2>
                <p className="text-gray-600 text-lg">
                  Retrouvez toutes nos coordonnées et horaires d'ouverture
                </p>
              </div>

              {/* Cartes d'informations */}
              <div className="space-y-6">
                {/* Téléphone */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                        <p className="text-white/90 text-lg">
                          +212 6 75 75 19 09
                        </p>
                        <p className="text-white/80 text-sm">
                          Lun-Ven: 8h00-18h00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                        <p className="text-white/90 text-lg">
                          +212 6 75 75 19 09
                        </p>
                        <p className="text-white/80 text-sm">
                          Réponse rapide garantie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Adresse */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Adresse</h3>
                        <p className="text-white/90 text-lg">
                          348 Village Pilote Dar Bouazza
                        </p>
                        <p className="text-white/80 text-sm">
                          Casablanca, Maroc
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">🕒</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Horaires d'Ouverture
                        </h3>
                        <p className="text-white/90 text-lg">
                          Lundi - Vendredi
                        </p>
                        <p className="text-white/80 text-sm">8h00 - 18h00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte d'information supplémentaire */}
              <div className="bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl p-6 border border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Besoin d'une Réponse Rapide ?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Utilisez WhatsApp pour une réponse immédiate ou appelez-nous
                    directement !
                  </p>
                  <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
                    Ouvrir WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte Interactive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Notre Localisation
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Situés à Dar Bouazza, Casablanca, nous sommes facilement
              accessibles.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-6xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                348 Village Pilote Dar Bouazza, Casablanca
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Notre école est située à Dar Bouazza, Casablanca. Un emplacement
                idéal pour les familles de Dar Bouazza.
              </p>
              <div className="flex justify-center">
                <div className="bg-white rounded-xl p-4 shadow-sm max-w-xs">
                  <div className="text-2xl mb-2">🚗</div>
                  <p className="font-semibold text-gray-800">Parking</p>
                  <p className="text-sm text-gray-600">
                    Parking public à proximité
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                Connect Montessori
              </h3>
              <p className="text-gray-300">
                École maternelle et cours de soutien utilisant la pédagogie
                Montessori pour un développement optimal de l'enfant.
              </p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Maternelle Montessori</li>
                <li>Cours de Soutien</li>
                <li>Accompagnement Personnalisé</li>
                <li>Activités Éducatives</li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📞 +212 6 75 75 19 09</li>
                <li>📧 connectmontessoridedarb@gmail.com</li>
                <li>📍 348 Village Pilote Dar Bouazza</li>
                <li>🏙️ Casablanca, Maroc</li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Connect Montessori. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
