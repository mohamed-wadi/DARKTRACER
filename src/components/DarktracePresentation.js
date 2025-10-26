import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Brain, Eye, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';

const DarktracePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "L'IA au service de la Cybersécurité",
      subtitle: "Darktrace : Protection Intelligente des Réseaux",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Pourquoi l'IA en cybersécurité ?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>L'IA permet aux ordinateurs d'apprendre et de prendre des décisions intelligentes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Détecte les menaces <strong>avant</strong> qu'elles ne causent des dégâts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Plus rapide et efficace que les méthodes traditionnelles</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Qu'est-ce que Darktrace ?",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className="bg-purple-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Une entreprise leader en cybersécurité</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Spécialisée dans la protection des réseaux et systèmes informatiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Utilise l'IA pour une détection automatique des menaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Détecte les comportements inhabituels et signale les anomalies</span>
              </li>
            </ul>
          </div>
          <div className="bg-purple-800/20 p-4 rounded-lg border border-purple-500/30">
            <p className="text-sm text-purple-200">Utilisé par des entreprises, hôpitaux, banques et organisations du monde entier</p>
          </div>
        </div>
      )
    },
    {
      title: "Comment ça fonctionne ?",
      icon: Brain,
      content: (
        <div className="space-y-6">
          <div className="bg-green-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-300">Surveillance intelligente 24/7</h3>
            <div className="space-y-4">
              <div className="flex items-start bg-green-800/20 p-4 rounded">
                <span className="text-2xl mr-3">👁</span>
                <div>
                  <strong className="text-green-300">Observation continue</strong>
                  <p className="text-sm mt-1">Darktrace observe le réseau d'une entreprise en temps réel</p>
                </div>
              </div>
              <div className="flex items-start bg-green-800/20 p-4 rounded">
                <span className="text-2xl mr-3">🧠</span>
                <div>
                  <strong className="text-green-300">Apprentissage du "normal"</strong>
                  <p className="text-sm mt-1">Il apprend le comportement habituel de chaque appareil et utilisateur</p>
                </div>
              </div>
              <div className="flex items-start bg-green-800/20 p-4 rounded">
                <span className="text-2xl mr-3">🚨</span>
                <div>
                  <strong className="text-green-300">Détection et action</strong>
                  <p className="text-sm mt-1">Dès qu'il détecte quelque chose d'anormal, il alerte ou agit automatiquement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Technologies IA utilisées",
      icon: Brain,
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-indigo-300">Machine Learning et détection d'anomalies</h3>
            <div className="space-y-4">
              <div className="bg-indigo-800/20 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-300 mb-2">Machine Learning (Apprentissage automatique)</h4>
                <p className="text-sm">L'IA apprend à reconnaître ce qui est normal et ce qui est suspect dans le réseau</p>
              </div>
              <div className="bg-indigo-800/20 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-300 mb-2">Détection d'anomalies</h4>
                <p className="text-sm">Identification automatique des comportements inhabituels</p>
              </div>
              <div className="bg-indigo-700/20 p-4 rounded-lg mt-4">
                <p className="text-sm"><strong>Exemple :</strong> Un ordinateur qui envoie soudainement beaucoup de fichiers ou accède à des données sensibles à des heures inhabituelles</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Architecture du système Darktrace",
      icon: Eye,
      content: (
        <div className="space-y-4">
          <div className="bg-cyan-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Les 4 étapes de protection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-cyan-800/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                  <h4 className="font-semibold text-cyan-300">Collecte</h4>
                </div>
                <p className="text-sm">Capture de toutes les données : physiques, virtuelles, cloud, SaaS</p>
              </div>
              <div className="bg-cyan-800/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                  <h4 className="font-semibold text-cyan-300">Analyse</h4>
                </div>
                <p className="text-sm">L'IA analyse les comportements (humains, appareils, réseau) et détecte les anomalies</p>
              </div>
              <div className="bg-cyan-800/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                  <h4 className="font-semibold text-cyan-300">Visualisation</h4>
                </div>
                <p className="text-sm">Interface 3D pour voir en temps réel les menaces sur le réseau</p>
              </div>
              <div className="bg-cyan-800/20 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">4</span>
                  <h4 className="font-semibold text-cyan-300">Action</h4>
                </div>
                <p className="text-sm">Alertes automatiques et blocage des menaces via SIEM, notifications, API</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <img src={image2} alt="Architecture Darktrace" className="max-w-full rounded-lg shadow-lg" />
          </div>
        </div>
      )
    },
    {
      title: "Exemple concret : Cas réel de détection",
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <div className="bg-red-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-red-300">Tentative d'exfiltration de données détectée</h3>
            <div className="bg-red-800/20 p-4 rounded-lg mb-4">
              <p className="text-sm mb-3"><strong>Scénario :</strong> Le 13 juin 2024, l'ordinateur "Henry Jones Laptop" présente des comportements suspects</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">⚠</span>
                  <span>Accès à un fichier de mots de passe sensible (Password.xlsx)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">⚠</span>
                  <span>Connexion au serveur financier à une heure inhabituelle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">⚠</span>
                  <span>Transfert de données en grand volume vers un serveur backup</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-300 mb-2">Réaction de Darktrace RESPOND</h4>
              <p className="text-sm mb-2"><strong>Score d'anomalie : 69%</strong> (niveau élevé)</p>
              <p className="text-sm">Action proposée : Bloquer les connexions au port 445 pendant 1 heure pour stopper l'attaque</p>
            </div>
          </div>
          <div className="bg-yellow-900/20 p-3 rounded-lg border border-yellow-500/30">
            <p className="text-sm text-yellow-200">✓ Détection en quelques minutes seulement, avant que les dégâts ne soient irréversibles</p>
          </div>
          <div className="mt-4 flex justify-center">
            <img src={image1} alt="Exemple de détection" className="max-w-full rounded-lg shadow-lg" />
          </div>
        </div>
      )
    },
    {
      title: "Applications concrètes",
      icon: CheckCircle,
      content: (
        <div className="space-y-6">
          <div className="bg-teal-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-teal-300">Protection contre les cybermenaces</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-teal-800/20 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-300 mb-2">🛡 Ransomwares & Virus</h4>
                <p className="text-sm">Détection et blocage automatique des logiciels malveillants</p>
              </div>
              <div className="bg-teal-800/20 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-300 mb-2">📧 Phishing & Emails frauduleux</h4>
                <p className="text-sm">Identification des tentatives de fraude par email</p>
              </div>
              <div className="bg-teal-800/20 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-300 mb-2">🔓 Tentatives d'intrusion</h4>
                <p className="text-sm">Surveillance des accès non autorisés au réseau</p>
              </div>
              <div className="bg-teal-800/20 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-300 mb-2">⚡ Réaction automatique</h4>
                <p className="text-sm">Action immédiate avant même l'intervention humaine</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Éthique et limites",
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className="bg-orange-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-orange-300">Considérations importantes</h3>
            <div className="space-y-4">
              <div className="bg-orange-800/20 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-300 mb-2">🔒 Confidentialité des données</h4>
                <p className="text-sm">Darktrace analyse des données sensibles : la protection de la vie privée est essentielle</p>
              </div>
              <div className="bg-orange-800/20 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-300 mb-2">👥 L'humain reste indispensable</h4>
                <p className="text-sm">L'IA détecte, mais les décisions critiques nécessitent une supervision humaine</p>
              </div>
              <div className="bg-orange-800/20 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-300 mb-2">⚠ Limitations techniques</h4>
                <p className="text-sm">Risques de fausses alertes et limites face aux attaques très sophistiquées</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Conclusion",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-300">L'avenir de la cybersécurité</h3>
            <div className="space-y-4">
              <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                <p className="text-lg">✓ Darktrace illustre la puissance de l'IA pour protéger les entreprises</p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                <p className="text-lg">✓ L'IA rend la cybersécurité <strong>proactive, rapide et intelligente</strong></p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                <p className="text-lg">✓ La combinaison <strong>Humain + IA</strong> est la meilleure approche</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg">
                <p className="text-xl font-bold">Sécurité intelligente = Protection efficace</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <CurrentIcon className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h1>
          {slides[currentSlide].subtitle && (
            <p className="text-xl text-blue-300">{slides[currentSlide].subtitle}</p>
          )}
        </div>

        {/* Content */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 mb-8 min-h-[500px] shadow-2xl">
          {slides[currentSlide].content}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5" />
            Précédent
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-blue-500 w-8' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === slides.length - 1}
          >
            Suivant
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide counter */}
        <div className="text-center mt-4 text-slate-400">
          Diapositive {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};

export default DarktracePresentation;