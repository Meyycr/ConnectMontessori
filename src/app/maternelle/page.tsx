"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Maternelle() {
  const [showTarifs, setShowTarifs] = useState(false);
  const [showFournitures, setShowFournitures] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              className="relative group font-bold text-lg text-green-600 transition-all duration-300 py-2 px-1"
            >
              <span className="relative z-10">Maternelle</span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
              <div className="absolute inset-0 bg-green-50 rounded-lg -m-2"></div>
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
              className="relative group font-bold text-lg text-gray-800 hover:text-green-600 transition-all duration-300 py-2 px-1"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
              <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg -m-2"></div>
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
              className="block font-bold text-lg text-green-600 transition-colors py-2"
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
              className="block font-bold text-lg text-gray-800 hover:text-green-600 transition-colors py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

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
              <button
                onClick={() => {
                  document.getElementById("notre-approche")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Découvrir la Pédagogie
              </button>
              <button
                onClick={() => {
                  document.getElementById("pret-commencer")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Informations Pratiques
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Prêt à Commencer l'Aventure */}
      <section id="pret-commencer" className="py-20 bg-white">
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

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
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
                  <button
                    onClick={() => setShowTarifs(true)}
                    className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Voir les Tarifs
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
                  <button
                    onClick={() => setShowFournitures(true)}
                    className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Voir la Liste
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Tarifs */}
      {showTarifs && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-t-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      Frais de Scolarité
                    </h2>
                    <p className="text-xl opacity-90">Rentrée 2025 / 2026</p>
                  </div>
                  <button
                    onClick={() => setShowTarifs(false)}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Table */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-4 gap-6 text-center">
                  {/* Headers */}
                  <div className="font-bold text-lg text-gray-800">Frais</div>
                  <div className="font-bold text-lg text-green-600">P.S</div>
                  <div className="font-bold text-lg text-blue-600">M.S</div>
                  <div className="font-bold text-lg text-purple-600">G.S</div>

                  {/* Frais d'inscription */}
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">
                      Frais d'inscription
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      (Assurance + juin)
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    2800 DH
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    2800 DH
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    2800 DH
                  </div>

                  {/* 1er paiement */}
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">
                      Frais de scolarité
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      1er paiement (Septembre-Octobre-Novembre)
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    3900 DH
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    3900 DH
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    3900 DH
                  </div>

                  {/* 2ème paiement */}
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">
                      Frais de scolarité
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      2ème paiement (Décembre-Janvier-Février)
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    3900 DH
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    3900 DH
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    3900 DH
                  </div>

                  {/* 3ème paiement */}
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">
                      Frais de scolarité
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      3ème paiement (Mars-Avril-Mai)
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    3900 DH
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    3900 DH
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    3900 DH
                  </div>

                  {/* Garde */}
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">Garde</div>
                    <div className="text-sm text-gray-600 mt-1">
                      (De 15h30 à 17h00)
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    200 DH
                  </div>
                  <div className="text-2xl font-bold text-blue-600">200 DH</div>
                  <div className="text-2xl font-bold text-purple-600">
                    200 DH
                  </div>
                </div>
              </div>

              {/* Informations supplémentaires */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">📋</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Informations Importantes
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• P.S = Petite Section (3-4 ans)</li>
                    <li>• M.S = Moyenne Section (4-5 ans)</li>
                    <li>• G.S = Grande Section (5-6 ans)</li>
                    <li>• Tous les montants sont en Dirhams (DH)</li>
                  </ul>
                </div>
              </div>

              {/* Call to action */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Prêt à nous rejoindre ?
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Contactez-nous pour plus d'informations ou pour planifier
                    une visite
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      📞 Nous Appeler
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
                      📧 Nous Écrire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Fournitures */}
      {showFournitures && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-t-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      Liste des Fournitures
                    </h2>
                    <p className="text-xl opacity-90">
                      Matériel nécessaire pour la rentrée
                    </p>
                  </div>
                  <button
                    onClick={() => setShowFournitures(false)}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Fournitures Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Hygiène */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🧴</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Hygiène</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sandales</li>
                    <li>• Petite serviette</li>
                    <li>• Brosse à dents</li>
                    <li>• Dentifrice</li>
                  </ul>
                </div>

                {/* Trousse */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">✏️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Trousse</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 2 stylos: 1 bleu et 1 vert</li>
                    <li>• 1 crayon</li>
                    <li>• 1 taille-crayon</li>
                    <li>• 1 gomme</li>
                    <li>• 2 paquets de crayons de couleur</li>
                    <li>• 2 paquets de feutres en couleur</li>
                    <li>• 2 bâtons de colle</li>
                    <li>• 2 pinceaux: 1 plat et 1 rond</li>
                    <li>• Tubes de peinture: toutes les couleurs</li>
                    <li>• 1 palette de peinture</li>
                    <li>• 1 tablier de peinture</li>
                    <li>• Pâte à modeler: toutes les couleurs</li>
                  </ul>
                </div>

                {/* Cartable */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🎒</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Cartable
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 4 cahiers petit format 50p</li>
                    <li>
                      • 4 couvertures petit format: 1 bleu, 1 vert, 1 jaune et 1
                      rouge
                    </li>
                    <li>• 1 cahier de texte</li>
                    <li>• 1 ardoise</li>
                    <li>• 1 brosse</li>
                    <li>• 2 feutres</li>
                    <li>• 2 paquets de papier canson en couleur</li>
                    <li>• 2 paquets de papier canson blanc</li>
                  </ul>
                </div>
              </div>

              {/* Call to action */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Besoin d'aide pour les fournitures ?
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Notre équipe peut vous guider dans le choix des matériaux et
                    vous conseiller sur la qualité
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      📞 Nous Appeler
                    </button>
                    <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      📧 Nous Écrire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Notre Approche */}
      <section id="notre-approche" className="py-20 bg-gray-50">
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
                  <h4 className="font-bold text-gray-800">Maman de Lina</h4>
                  <p className="text-gray-500 text-sm">4 ans</p>
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
                "Connect Montessori a transformé l'expérience d'apprentissage de
                Lina. Elle est devenue plus autonome et curieuse. Les éducateurs
                sont exceptionnels et l'environnement est parfaitement adapté
                aux enfants."
              </p>
            </div>

            {/* Avis 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  T
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Papa de Yassir</h4>
                  <p className="text-gray-500 text-sm">5 ans</p>
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
                "La pédagogie Montessori a permis à Yassir de développer sa
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
                  <h4 className="font-bold text-gray-800">Maman de Sara</h4>
                  <p className="text-gray-500 text-sm">3 ans</p>
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
                "Sara adore aller à l'école ! L'approche Montessori respecte
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
