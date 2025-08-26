"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  // Fonction pour le carrousel des avis
  React.useEffect(() => {
    const container = document.getElementById("testimonials-container");
    if (!container) return;

    let currentIndex = 0;
    const totalSlides = 5;
    const slideWidth = 400 + 32; // largeur de la carte + espacement

    const moveToSlide = (index: number) => {
      currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
      const translateX = -currentIndex * slideWidth;
      container.style.transform = `translateX(${translateX}px)`;

      // Mise à jour des indicateurs
      const indicators = document.querySelectorAll("[data-indicator]");
      indicators.forEach((indicator, i) => {
        if (i === currentIndex) {
          indicator.classList.add("bg-blue-500");
          indicator.classList.remove("bg-gray-300");
        } else {
          indicator.classList.remove("bg-blue-500");
          indicator.classList.add("bg-gray-300");
        }
      });
    };

    // Défilement automatique
    const autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      moveToSlide(currentIndex);
    }, 5000);

    // Nettoyage
    return () => clearInterval(autoSlide);
  }, []);

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

      {/* Hero Section */}
      <section className="bg-purple-600 min-h-screen relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 flex items-center">
          {/* Left Content Block */}
          <div className="w-1/2 text-white z-10 relative">
            <div className="mb-6">
              <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                Où Chaque Enfant Brille !
              </span>
            </div>
            <h1 className="text-6xl font-bold leading-tight mb-8">
              Jouer, Apprendre,
              <br />
              Grandir Ensemble !
            </h1>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              En Savoir Plus
            </button>
          </div>

          {/* Right Image Block */}
          <div className="w-1/2 flex justify-center items-center relative">
            <div className="relative">
              {/* Organic-shaped frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-[60px] transform rotate-12 scale-110"></div>
              <div className="relative bg-white p-4 rounded-[50px] transform rotate-12">
                <div className="w-80 h-80 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-[40px] flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <div className="text-6xl mb-2">🧸</div>
                    <div className="text-2xl font-bold">Montessori</div>
                    <div className="text-lg">Éducation</div>
                  </div>
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

      {/* Section Avantages Montessori */}
      <section className="py-20 bg-gray-50">
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
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
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
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
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
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
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
              <div className="bg-gradient-to-br from-red-400 to-pink-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
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
              <div className="bg-gradient-to-br from-green-400 to-teal-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
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
              <div className="bg-gradient-to-br from-purple-400 to-violet-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
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
              <div className="bg-gradient-to-br from-pink-400 to-fuchsia-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
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
              <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
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

      {/* Section Nos Valeurs Fondamentales */}
      <section className="py-20 bg-white">
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
                Connect Montessori est une école maternelle d'excellence située
                au cœur de Paris, dédiée à l'épanouissement de chaque enfant.
                Notre établissement applique la pédagogie Montessori, une
                méthode éducative centenaire qui respecte le rythme naturel de
                développement de l'enfant. Nous créons un environnement préparé
                où chaque enfant peut explorer, découvrir et grandir en toute
                autonomie.
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
                    Centre de Paris
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
              <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transition-colors">
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
                        123 Rue de l'Éducation
                        <br />
                        75001 Paris, France
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
                        +33 (0)1 23 45 67 89
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
                        <br />
                        Sam: 9h00-12h00
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
                        contact@connectmontessori.fr
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

          {/* Carrousel des avis */}
          <div className="relative overflow-hidden">
            {/* Boutons de navigation */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group"
              onClick={() => {
                const container = document.getElementById(
                  "testimonials-container"
                );
                if (container) {
                  const currentTransform = container.style.transform;
                  const currentX = currentTransform
                    ? parseInt(currentTransform.match(/-?\d+/)?.[0] || "0")
                    : 0;
                  const slideWidth = 400 + 32;
                  const newX = Math.min(0, currentX + slideWidth);
                  container.style.transform = `translateX(${newX}px)`;

                  // Mise à jour des indicateurs
                  const currentIndex = Math.abs(Math.round(newX / slideWidth));
                  document
                    .querySelectorAll("[data-indicator]")
                    .forEach((indicator, index) => {
                      if (index === currentIndex) {
                        indicator.classList.add("bg-blue-500");
                        indicator.classList.remove("bg-gray-300");
                      } else {
                        indicator.classList.remove("bg-blue-500");
                        indicator.classList.add("bg-gray-300");
                      }
                    });
                }
              }}
            >
              <svg
                className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group"
              onClick={() => {
                const container = document.getElementById(
                  "testimonials-container"
                );
                if (container) {
                  const currentTransform = container.style.transform;
                  const currentX = currentTransform
                    ? parseInt(currentTransform.match(/-?\d+/)?.[0] || "0")
                    : 0;
                  const slideWidth = 400 + 32;
                  const maxX = -(4 * slideWidth); // 5 avis, donc 4 déplacements
                  const newX = Math.max(maxX, currentX - slideWidth);
                  container.style.transform = `translateX(${newX}px)`;

                  // Mise à jour des indicateurs
                  const currentIndex = Math.abs(Math.round(newX / slideWidth));
                  document
                    .querySelectorAll("[data-indicator]")
                    .forEach((indicator, index) => {
                      if (index === currentIndex) {
                        indicator.classList.add("bg-blue-500");
                        indicator.classList.remove("bg-gray-300");
                      } else {
                        indicator.classList.remove("bg-blue-500");
                        indicator.classList.add("bg-gray-300");
                      }
                    });
                }
              }}
            >
              <svg
                className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Container des avis avec défilement */}
            <div
              className="flex space-x-8 transition-transform duration-700 ease-in-out"
              id="testimonials-container"
            >
              {/* Avis 1 */}
              <div className="min-w-[400px] bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Sophie Martin</h4>
                    <p className="text-gray-500 text-sm">
                      Maman de Emma, 4 ans
                    </p>
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
              <div className="min-w-[400px] bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    T
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Thomas Dubois</h4>
                    <p className="text-gray-500 text-sm">
                      Papa de Lucas, 5 ans
                    </p>
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
              <div className="min-w-[400px] bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Marie Laurent</h4>
                    <p className="text-gray-500 text-sm">
                      Maman de Chloé, 3 ans
                    </p>
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

              {/* Avis 4 */}
              <div className="min-w-[400px] bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Antoine Moreau</h4>
                    <p className="text-gray-500 text-sm">Papa de Noah, 4 ans</p>
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
                  "L'école Connect Montessori offre un environnement
                  exceptionnel. Noah a développé une vraie passion pour les
                  mathématiques grâce au matériel Montessori. L'équipe est très
                  à l'écoute des parents."
                </p>
              </div>

              {/* Avis 5 */}
              <div className="min-w-[400px] bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    L
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Léa Bernard</h4>
                    <p className="text-gray-500 text-sm">Maman de Zoé, 5 ans</p>
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
                  "Zoé est devenue plus autonome et responsable depuis qu'elle
                  fréquente Connect Montessori. La pédagogie respecte vraiment
                  l'enfant et ses besoins. C'est exactement ce que nous
                  cherchions !"
                </p>
              </div>
            </div>

            {/* Indicateurs de navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  data-indicator
                  className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    i === 0 ? "bg-blue-500" : "bg-gray-300 hover:bg-blue-500"
                  }`}
                  onClick={() => {
                    const container = document.getElementById(
                      "testimonials-container"
                    );
                    if (container) {
                      const slideWidth = 400 + 32;
                      const translateX = -i * slideWidth;
                      container.style.transform = `translateX(${translateX}px)`;

                      // Mise à jour des indicateurs
                      document
                        .querySelectorAll("[data-indicator]")
                        .forEach((indicator, index) => {
                          if (index === i) {
                            indicator.classList.add("bg-blue-500");
                            indicator.classList.remove("bg-gray-300");
                          } else {
                            indicator.classList.remove("bg-blue-500");
                            indicator.classList.add("bg-gray-300");
                          }
                        });
                    }
                  }}
                ></button>
              ))}
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
