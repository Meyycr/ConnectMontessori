"use client";

import React from "react";
import Link from "next/link";

export default function CoursSoutien() {
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
              className="hover:text-green-600 transition-colors font-medium"
            >
              Maternelle
            </Link>
            <Link
              href="/cours-soutien"
              className="text-green-600 font-medium border-b-2 border-green-600"
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

      {/* Hero Section avec Slogan Attractif */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 min-h-[70vh] relative overflow-hidden">
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
          <div
            className="absolute top-1/2 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Formes géométriques flottantes */}
        <div className="absolute inset-0">
          <div
            className="absolute top-10 right-10 w-32 h-32 border-2 border-white/20 rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white/20 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center text-white">
            <div className="mb-8">
              <span className="text-lg font-medium bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm border border-white/30">
                🚀 Excellence Académique
              </span>
            </div>
            <h1 className="text-6xl font-bold leading-tight mb-8">
              Réussir Ensemble,
              <br />
              <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Grandir Individuellement
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed">
              Nos cours de soutien personnalisés accompagnent chaque élève vers
              l'excellence, en respectant son rythme et en développant sa
              confiance en soi.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Découvrir nos Cours
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Demander un Devis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Cards des Cours Proposés */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">
              Nos Matières
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Cours de Soutien Personnalisés
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Découvrez notre gamme complète de cours de soutien dans toutes les
              matières principales
            </p>
          </div>

          {/* Grille des 6 cours */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte Anglais */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🇬🇧</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Anglais
                  </h3>
                  <p className="text-white/90 text-center mb-6 leading-relaxed">
                    Maîtrise de la langue anglaise à travers des méthodes
                    interactives et des supports authentiques.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Grammaire et vocabulaire</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Compréhension orale et écrite</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Expression orale et écrite</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    En Savoir Plus
                  </button>
                </div>
              </div>
            </div>

            {/* Carte Français */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🇫🇷</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Français
                  </h3>
                  <p className="text-white/90 text-center mb-6 leading-relaxed">
                    Renforcement des compétences en français avec un focus sur
                    la littérature et l'expression.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Grammaire et orthographe</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Analyse de textes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Rédaction et dissertation</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-white text-red-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    En Savoir Plus
                  </button>
                </div>
              </div>
            </div>

            {/* Carte Arabe */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🇸🇦</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">Arabe</h3>
                  <p className="text-white/90 text-center mb-6 leading-relaxed">
                    Apprentissage de l'arabe moderne standard et de la culture
                    arabe.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Alphabet et prononciation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Grammaire de base</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Conversation quotidienne</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-white text-green-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    En Savoir Plus
                  </button>
                </div>
              </div>
            </div>

            {/* Carte Mathématiques */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🔢</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Mathématiques
                  </h3>
                  <p className="text-white/90 text-center mb-6 leading-relaxed">
                    Développement du raisonnement logique et maîtrise des
                    concepts mathématiques.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Algèbre et géométrie</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Résolution de problèmes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Logique et démonstration</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-white text-purple-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    En Savoir Plus
                  </button>
                </div>
              </div>
            </div>

            {/* Carte Physique-Chimie */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">⚗️</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Physique-Chimie
                  </h3>
                  <p className="text-white/90 text-center mb-6 leading-relaxed">
                    Découverte des phénomènes physiques et chimiques à travers
                    l'expérimentation.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Mécanique et énergie</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Électricité et magnétisme</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Réactions chimiques</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-white text-orange-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    En Savoir Plus
                  </button>
                </div>
              </div>
            </div>

            {/* Carte SVT */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🌱</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">SVT</h3>
                  <p className="text-white/90 text-center mb-6 leading-relaxed">
                    Exploration du vivant et de la Terre avec des approches
                    pratiques et scientifiques.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Biologie cellulaire</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Écologie et environnement</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>Géologie et évolution</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-white text-teal-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    En Savoir Plus
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
              Découvrez les expériences des familles qui ont choisi nos cours de
              soutien
            </p>
          </div>

          {/* Grille des avis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Avis 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Amélie Dubois</h4>
                  <p className="text-gray-500 text-sm">Maman de Léo, 12 ans</p>
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
                "Les cours de mathématiques ont permis à Léo de reprendre
                confiance en lui. Les professeurs sont très pédagogues et
                adaptent leur méthode à chaque élève."
              </p>
            </div>

            {/* Avis 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Marc Leroy</h4>
                  <p className="text-gray-500 text-sm">Papa de Sarah, 14 ans</p>
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
                "Sarah a fait d'énormes progrès en anglais grâce aux cours de
                soutien. L'approche interactive et les supports variés rendent
                l'apprentissage passionnant."
              </p>
            </div>

            {/* Avis 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  C
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Claire Martin</h4>
                  <p className="text-gray-500 text-sm">Maman de Tom, 16 ans</p>
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
                "Les cours de physique-chimie ont éveillé la curiosité
                scientifique de Tom. Il adore les expériences pratiques et
                comprend maintenant les concepts abstraits."
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
