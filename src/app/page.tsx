"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fonction pour le défilement fluide vers Notre École
  const scrollToNotreEcole = () => {
    const notreEcoleSection = document.getElementById("notre-ecole");
    if (notreEcoleSection) {
      notreEcoleSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Fonction pour le défilement fluide vers Services
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
            <a href="#" className="hover:text-blue-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
              className="relative group font-bold text-lg text-green-600 transition-all duration-300 py-2 px-1"
            >
              <span className="relative z-10">Accueil</span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
              <div className="absolute inset-0 bg-green-50 rounded-lg -m-2"></div>
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
              className="block font-bold text-lg text-green-600 transition-colors py-2"
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
              className="block font-bold text-lg text-gray-800 hover:text-green-600 transition-colors py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 min-h-screen relative overflow-hidden">
        {/* Formes décoratives flottantes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-32 flex items-center relative z-10">
          {/* Left Content Block */}
          <div className="w-1/2 text-white relative">
            <div className="mb-6">
              <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                Où Chaque Enfant Brille !
              </span>
            </div>
            <h1 className="text-6xl font-bold leading-tight mb-8">
              Jouer, Apprendre,
              <br />
              Grandir Ensemble !
            </h1>
            <button
              onClick={scrollToNotreEcole}
              className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Découvrir l'école
            </button>
          </div>

          {/* Right Image Block */}
          <div className="w-1/2 flex justify-center items-center relative">
            <div className="relative">
              {/* Modern frame design */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl scale-105"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                <div className="w-88 h-88 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-xl flex items-center justify-center p-4">
                  <Image
                    src="/images/full_logo.png"
                    alt="Connect Montessori Logo"
                    width={229}
                    height={229}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="bg-white h-32 relative">
            <div className="absolute -top-16 left-0 right-0 h-32 bg-white rounded-t-full"></div>
            <div className="absolute -top-8 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute -top-12 right-40 w-16 h-16 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute -top-6 left-20 w-20 h-20 bg-green-300 rounded-full opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Section Notre École */}
      <section id="notre-ecole" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Partie gauche - Contenu textuel */}
            <div className="space-y-8">
              {/* En-tête */}
              <div>
                <span className="text-red-500 font-semibold text-lg">
                  Notre École
                </span>
                <h2 className="text-4xl font-bold text-gray-800 mt-2">
                  Connect Montessori
                </h2>
              </div>

              {/* Paragraphe descriptif */}
              <p className="text-gray-600 text-lg leading-relaxed">
                Connect Montessori est une école maternelle d'excellence, dédiée
                à l'épanouissement de chaque enfant. Notre établissement
                applique la pédagogie Montessori, une méthode éducative
                centenaire qui respecte le rythme naturel de développement de
                l'enfant. Nous créons un environnement préparé où chaque enfant
                peut explorer, découvrir et grandir en toute autonomie.
              </p>

              {/* Liste des 4 fonctionnalités */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <span className="text-gray-700 font-medium">
                    Pédagogie Montessori
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <span className="text-gray-700 font-medium">
                    Éducateurs Certifiés
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <span className="text-gray-700 font-medium">
                    Pédagogie Alternative
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    4
                  </div>
                  <span className="text-gray-700 font-medium">
                    Horaires Flexibles
                  </span>
                </div>
              </div>

              {/* Bouton d'action */}
              <button
                onClick={scrollToServices}
                className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transition-colors cursor-pointer"
              >
                Découvrir Plus
              </button>

              {/* Informations de contact et localisation */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Informations Pratiques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Adresse</p>
                      <p className="text-gray-600 text-sm">
                        348 Village Pilote Dar Bouazza
                        <br />
                        Casablanca, Maroc
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Téléphone</p>
                      <p className="text-gray-600 text-sm">
                        +212 6 75 75 19 09
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🕒</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Horaires</p>
                      <p className="text-gray-600 text-sm">
                        Lun-Ven: 8h00-18h00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600 text-sm">
                        connectmontessoridedarb@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crayon stylisé et éléments décoratifs */}
              <div className="relative">
                {/* Crayon stylisé */}
                <div className="relative w-32 h-8 mb-4">
                  {/* Corps du crayon */}
                  <div className="absolute inset-0 bg-yellow-400 rounded-l-full border-2 border-blue-800">
                    {/* Bandes horizontales orange */}
                    <div className="absolute top-1 left-2 right-2 h-0.5 bg-orange-500"></div>
                    <div className="absolute top-3 left-2 right-2 h-0.5 bg-orange-500"></div>
                    <div className="absolute top-5 left-2 right-2 h-0.5 bg-orange-500"></div>
                    {/* Reflet blanc */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 rounded-l-full"></div>
                  </div>
                  {/* Pointe blanche */}
                  <div className="absolute -right-2 top-0 w-4 h-8 bg-white border-2 border-blue-800 transform rotate-45 origin-left"></div>
                  {/* Mine bleue */}
                  <div className="absolute -right-1 top-2 w-2 h-4 bg-blue-900 transform rotate-45 origin-left"></div>
                  {/* Bande métallique */}
                  <div className="absolute -left-1 top-1 w-2 h-6 bg-gray-300 border border-gray-400"></div>
                  {/* Gomme rouge */}
                  <div className="absolute -left-2 top-1 w-3 h-6 bg-red-500 rounded-l-full border border-red-600"></div>
                </div>

                {/* Trait ondulé dessiné */}
                <svg
                  className="absolute -top-2 left-24 w-32 h-16"
                  viewBox="0 0 128 64"
                >
                  <path
                    d="M0,32 Q16,8 32,32 T64,32 T96,32 T128,32"
                    stroke="#1e3a8a"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Lignes courbes décoratives */}
                <div className="absolute -bottom-8 left-0 w-32 h-16">
                  <svg viewBox="0 0 128 64" className="w-full h-full">
                    <path
                      d="M0,64 Q32,32 64,64 T128,64"
                      stroke="#10b981"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-12 left-8 w-24 h-12">
                  <svg viewBox="0 0 96 48" className="w-full h-full">
                    <path
                      d="M0,48 Q24,24 48,48 T96,48"
                      stroke="#ef4444"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Partie droite - Image */}
            <div className="relative">
              {/* Formes abstraites colorées */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-yellow-400 rounded-full opacity-80 z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-green-400 rounded-full opacity-80 z-10"></div>

              {/* Image principale */}
              <div className="relative z-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
                <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-8xl mb-4">👩‍🏫</div>
                    <div className="text-2xl font-bold">
                      Éducatrice Montessori
                    </div>
                    <div className="text-lg">et enfant en apprentissage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages Montessori */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-lg">
              Services que nous proposons
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Offrir une éducation de qualité pour vos enfants
            </h2>
          </div>

          {/* Grille des 8 cartes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Carte 1 - Apprentissage et Amusement */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Apprentissage & Amusement
                  </h3>
                  <p className="text-sm leading-relaxed">
                    L'enfant apprend naturellement en s'amusant, développant sa
                    curiosité et sa motivation intrinsèque.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 2 - Compétences Numériques */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Compétences Numériques
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Introduction progressive aux technologies modernes dans un
                    environnement contrôlé et éducatif.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 3 - Découverte du Monde */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🏭</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Découverte du Monde
                  </h3>
                  <p className="text-sm leading-relaxed">
                    L'enfant explore différents domaines et développe une
                    compréhension globale de son environnement.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 4 - Environnement Bienveillant */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-red-400 to-pink-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Environnement Bienveillant
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Un cadre chaleureux et sécurisant qui respecte le rythme et
                    les besoins de chaque enfant.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 5 - Jeu Créatif */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-400 to-teal-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🎭</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Jeu Créatif</h3>
                  <p className="text-sm leading-relaxed">
                    Stimulation de l'imagination et de la créativité à travers
                    des activités artistiques et ludiques.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 6 - Compétences Précoces */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-400 to-violet-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Compétences Précoces
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Développement précoce des compétences cognitives, sociales
                    et motrices selon les périodes sensibles.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 7 - Apprentissage Pratique */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-pink-400 to-fuchsia-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">✋</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Apprentissage Pratique
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Manipulation concrète du matériel pour une compréhension
                    profonde et durable des concepts.
                  </p>
                </div>
              </div>
            </div>

            {/* Carte 8 - Exploration Joyeuse */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-80">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Exploration Joyeuse
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Découverte autonome et enthousiaste du monde, favorisant
                    l'émerveillement et l'apprentissage naturel.
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
          {/* En-tête de section */}
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

          {/* Grille des 3 témoignages */}
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
