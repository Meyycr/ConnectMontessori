"use client";

import React from "react";
import Link from "next/link";

export default function Maternelle() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>Lun à Ven – 9h00 à 17h00</span>
            <span>+33 (0)1 23 45 67 89</span>
          </div>
          <div className="hidden md:block">
            <span>123 Rue de l'Éducation, 75001 Paris</span>
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
              className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-xl hover:bg-green-600 transition-colors"
            >
              Connect Montessori
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-gray-700">
            <Link
              href="/"
              className="hover:text-green-600 transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/maternelle"
              className="text-green-600 font-medium border-b-2 border-green-600"
            >
              Maternelle
            </Link>
            <Link
              href="/cours-soutien"
              className="hover:text-green-600 transition-colors font-medium"
            >
              Cours de Soutien
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
          <div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors font-medium">
              Prendre RDV
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section Maternelle */}
      <section className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 min-h-[60vh] relative overflow-hidden">
        {/* Formes décoratives flottantes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="text-lg font-medium bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                🏫 Section Maternelle
              </span>
            </div>
            <h1 className="text-6xl font-bold leading-tight mb-8">
              L'Éveil de
              <br />
              <span className="text-yellow-300">Votre Enfant</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Découvrez notre approche Montessori unique qui éveille la
              curiosité, développe l'autonomie et cultive l'amour d'apprendre
              dès le plus jeune âge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Découvrir la Pédagogie
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105">
                Visiter l'École
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pédagogie Montessori */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contenu textuel */}
            <div className="space-y-8">
              <div>
                <span className="text-green-600 font-semibold text-lg">
                  Notre Approche
                </span>
                <h2 className="text-4xl font-bold text-gray-800 mt-2">
                  La Pédagogie Montessori
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                La méthode Montessori est basée sur l'observation scientifique
                du développement naturel de l'enfant. Elle respecte les périodes
                sensibles et permet à chaque enfant d'évoluer à son rythme dans
                un environnement préparé et bienveillant.
              </p>

              {/* Points clés avec icônes */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Périodes Sensibles
                    </h4>
                    <p className="text-gray-600">
                      Reconnaissance des moments optimaux d'apprentissage pour
                      chaque compétence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Environnement Préparé
                    </h4>
                    <p className="text-gray-600">
                      Espace organisé et adapté qui favorise l'exploration et
                      l'autonomie.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Auto-éducation
                    </h4>
                    <p className="text-gray-600">
                      L'enfant apprend par lui-même avec le matériel pédagogique
                      adapté.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Illustration créative */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Formes géométriques décoratives */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-300 rounded-full opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300 rounded-full opacity-20"></div>

                <div className="relative z-10 text-center">
                  <div className="text-8xl mb-6">🎨</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Matériel Montessori
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Découvrez notre collection de matériel pédagogique qui
                    stimule tous les sens de l'enfant
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-3xl mb-2">🔢</div>
                      <p className="text-sm font-medium">Mathématiques</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-3xl mb-2">🔤</div>
                      <p className="text-sm font-medium">Langage</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-3xl mb-2">🌍</div>
                      <p className="text-sm font-medium">Culture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages avec Design Créatif */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">
              Pourquoi Choisir Montessori ?
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Les Avantages de Notre Méthode
            </h2>
          </div>

          {/* Grille des avantages avec design créatif */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte 1 - Autonomie */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    🚀
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Développement de l'Autonomie
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    L'enfant apprend à faire seul, développe sa confiance en soi
                    et sa capacité de prise de décision.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 2 - Créativité */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    🎨
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Stimulation de la Créativité
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    L'environnement Montessori encourage l'expression artistique
                    et la pensée créative.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 3 - Socialisation */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    🤝
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Compétences Sociales
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Apprentissage du respect, de l'entraide et de la
                    communication avec les autres.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 4 - Concentration */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Amélioration de la Concentration
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Le matériel Montessori capte l'attention et développe la
                    capacité de concentration.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 5 - Motricité */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    🏃
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Développement de la Motricité
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Affinement des mouvements fins et développement de la
                    coordination œil-main.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 6 - Curiosité */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    🔍
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Éveil de la Curiosité
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stimulation naturelle de l'envie d'apprendre et de découvrir
                    le monde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Boutons d'Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Prêt à Commencer l'Aventure ?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez nos tarifs, informations pratiques et préparez la
              rentrée de votre enfant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bouton Tarifs */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-center text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">💰</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Tarifs & Inscriptions
                  </h3>
                  <p className="text-white/90 mb-6">
                    Découvrez nos tarifs transparents et nos options
                    d'inscription
                  </p>
                  <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Voir les Tarifs
                  </button>
                </div>
              </div>
            </div>

            {/* Bouton Informations */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-center text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">ℹ️</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Informations Pratiques
                  </h3>
                  <p className="text-white/90 mb-6">
                    Horaires, planning, activités et organisation de la journée
                  </p>
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    En Savoir Plus
                  </button>
                </div>
              </div>
            </div>

            {/* Bouton Fournitures */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🎒</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Fournitures & Matériel
                  </h3>
                  <p className="text-white/90 mb-6">
                    Liste des fournitures nécessaires et matériel pédagogique
                  </p>
                  <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Voir la Liste
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avis des Parents */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">
              Témoignages
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Ce que disent les parents
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Découvrez les expériences des familles qui ont choisi Connect
              Montessori pour l'éducation de leurs enfants
            </p>
          </div>

          {/* Grille des avis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Avis 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sophie Martin</h4>
                  <p className="text-gray-500 text-sm">Maman de Emma, 4 ans</p>
                </div>
                <div className="ml-auto">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "Connect Montessori a transformé l'expérience d'apprentissage
                d'Emma. Elle est devenue plus autonome et curieuse. Les
                éducateurs sont exceptionnels et l'environnement est
                parfaitement adapté aux enfants."
              </p>
            </div>

            {/* Avis 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  T
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Thomas Dubois</h4>
                  <p className="text-gray-500 text-sm">Papa de Lucas, 5 ans</p>
                </div>
                <div className="ml-auto">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "La pédagogie Montessori a permis à Lucas de développer sa
                confiance en lui et ses compétences sociales. L'équipe
                pédagogique est très professionnelle et bienveillante. Je
                recommande vivement !"
              </p>
            </div>

            {/* Avis 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Marie Laurent</h4>
                  <p className="text-gray-500 text-sm">Maman de Chloé, 3 ans</p>
                </div>
                <div className="ml-auto">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "Chloé adore aller à l'école ! L'approche Montessori respecte
                vraiment son rythme et ses centres d'intérêt. Elle a fait des
                progrès incroyables en motricité fine et en langage."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400">
                Connect Montessori
              </h3>
              <p className="text-gray-300">
                École maternelle et cours de soutien utilisant la pédagogie
                Montessori pour un développement optimal de l'enfant.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Maternelle Montessori</li>
                <li>Cours de Soutien</li>
                <li>Accompagnement Personnalisé</li>
                <li>Activités Éducatives</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📞 +33 (0)1 23 45 67 89</li>
                <li>📧 contact@connectmontessori.fr</li>
                <li>📍 123 Rue de l'Éducation</li>
                <li>🏙️ 75001 Paris, France</li>
              </ul>
            </div>
            <div>
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
            <p>&copy; 2024 Connect Montessori. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
