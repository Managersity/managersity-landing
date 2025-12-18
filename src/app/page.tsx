"use client";

import Image from "next/image";
import { useState } from "react";

// Liens externes - à personnaliser
const LINKS = {
  parcoursDirigeant: "#parcours-dirigeant",
  parcoursManager: "#parcours-manager",
  parcoursCommercial: "#parcours-commercial",
  parcoursRH: "#parcours-rh",
  parcoursIA: "#parcours-ia",
  parcoursClarte: "#parcours-clarte",
  ultimatePack: "#ultimate-pack",
  whatsapp: "https://wa.me/221771017188",
  email: "mailto:contact@managersity.co",
};

const parcours = [
  {
    id: "dirigeant",
    title: "Parcours Dirigeant d'Élite",
    description: "Acquérez les compétences clés pour briller en tant que dirigeant et réussir votre promotion. Empruntez un parcours diligent alliant fluidité et simplicité.",
    features: ["Leadership stratégique", "Vision & pilotage", "Gouvernance & décision", "Transformation & IA"],
    price: "249.000 FCFA",
    link: LINKS.parcoursDirigeant,
    highlight: true,
  },
  {
    id: "manager",
    title: "Parcours Manager d'Élite",
    description: "Sortez de la naïveté, comprenez les règles d'excellence et affirmez votre maturité structurelle et managériale.",
    features: ["Management d'équipe", "Communication managériale", "Leadership opérationnel", "Gestion des conflits"],
    price: "79.000 FCFA",
    link: LINKS.parcoursManager,
  },
  {
    id: "commercial",
    title: "Parcours Manager Commercial d'Élite",
    description: "État d'esprit, dispositifs et méthodes de pilotage commercial pour réussir et orchestrer la performance commerciale.",
    features: ["Management commercial", "Vente & négociation", "Suivi des objectifs", "Coaching des équipes"],
    price: "79.000 FCFA",
    link: LINKS.parcoursCommercial,
  },
  {
    id: "rh",
    title: "Parcours RH & Capital Humain d'Élite",
    description: "Sortez de l'approximation en management du capital humain et faites-en un levier de performance.",
    features: ["Organisation RH", "Performance & culture", "Processus & pilotage", "Rôle stratégique RH"],
    price: "79.000 FCFA",
    link: LINKS.parcoursRH,
  },
  {
    id: "ia",
    title: "Parcours IA & Performance d'Élite",
    emoji: "🤖",
    description: "Comprenez l'IA de A-Z avec une immersion pratique pour booster la productivité d'un professionnel et d'une équipe.",
    features: ["Fondamentaux IA", "IA pour managers & dirigeants", "Productivité & cas d'usage", "Transformation digitale"],
    price: "99.000 FCFA",
    link: LINKS.parcoursIA,
  },
  {
    id: "clarte",
    title: "Parcours Clarté & Performance Personnelle",
    description: "Sortez de la dispersion, renforcez la lucidité et construisez une discipline intérieure solide.",
    features: ["Clarté mentale & lucidité", "Discipline personnelle", "Gestion de l'énergie", "Mental de performance"],
    price: "59.000 FCFA",
    link: LINKS.parcoursClarte,
  },
];

const faqData = [
  {
    q: "Qu'est-ce que la campagne « JE SUIS FOCUS EN 2026 » ?",
    a: "C'est la campagne de fin d'année de MANAGERSITY by H&C, pensée pour aider les professionnels à clarifier leurs priorités, renforcer leurs compétences clés et préparer efficacement l'année 2026. Elle propose des Parcours Élites ciblés et un Ultimate Pack donnant un accès total à la plateforme pendant 12 mois."
  },
  {
    q: "À qui s'adresse cette campagne ?",
    a: "À toute personne qui veut entrer en 2026 avec plus de clarté et de structure : dirigeants, entrepreneurs, managers, responsables d'équipe, RH, commerciaux et professionnels ambitieux en évolution."
  },
  {
    q: "Combien de temps dure la campagne ?",
    a: "La campagne se déroule sur 10 jours au total. À la fin, les conditions actuelles ne seront plus disponibles."
  },
  {
    q: "Qu'est-ce qu'un Parcours Élite ?",
    a: "Un Parcours Élite est un programme structuré qui regroupe plusieurs formations autour d'un enjeu précis (dirigeant, manager, RH, commercial, IA, performance personnelle). Un parcours = une transformation claire."
  },
  {
    q: "Quel parcours choisir si j'hésite ?",
    a: "Si vous avez un enjeu principal clair, choisissez le parcours correspondant. Si vous avez plusieurs enjeux ou une vision long terme, l'Ultimate Pack est souvent le meilleur choix."
  },
  {
    q: "Qu'est-ce que l'Ultimate Pack ?",
    a: "L'Ultimate Pack Managersity donne un accès total à la plateforme pendant 12 mois. Il inclut tous les cours, tous les Parcours Élites, et toutes les nouvelles formations ajoutées durant l'année."
  },
  {
    q: "Les prix sont-ils définitifs ?",
    a: "Les prix affichés sont valables uniquement pendant la campagne « JE SUIS FOCUS EN 2026 ». Après la campagne, les prix reviennent à la normale."
  },
  {
    q: "Puis-je apprendre à mon rythme ?",
    a: "Oui. Tous les contenus sont accessibles en ligne et peuvent être suivis à votre rythme, selon votre disponibilité. Les parcours sont conçus pour des professionnels en activité."
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-cream">
      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 text-center font-semibold animate-pulse">
        ⏰ Offres exceptionnelles valables pendant 10 jours seulement !
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-green-dark via-green-medium to-green-light overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-medium rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-light rounded-full blur-3xl animate-float [animation-delay:-10s]" />
        </div>

        {/* Header */}
        <header className="relative z-10 py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Image
              src="/logo.png"
              alt="Managersity by H&C"
              width={280}
              height={65}
              className="h-12 md:h-16 w-auto"
              priority
            />
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>+221 77 101 71 88</span>
            </a>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              JE SUIS FOCUS<br />EN 2026...
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 opacity-95">
              La plus grande montée en compétences commence maintenant.
            </p>
            <p className="text-lg md:text-xl mb-10 opacity-85 max-w-2xl mx-auto">
              Accédez à nos Parcours Élites ou à l&apos;Ultimate Pack, entrez sereinement en 2026 et <strong>cassez la baraque</strong> !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#parcours"
                className="inline-block bg-gradient-to-r from-gold-dark via-gold-medium to-gold-light text-charcoal font-bold py-4 px-8 rounded-lg uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                👉 Découvrir les offres
              </a>
              <a
                href="#ultimate"
                className="inline-block bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white/80 uppercase tracking-wide hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all duration-300"
              >
                👉 Accéder à l&apos;Ultimate Pack
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 pb-8 flex justify-center">
          <div className="animate-bounce text-white/60">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
            Pourquoi cette opportunité ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-dark to-gold-medium mx-auto rounded-sm mb-10" />
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            La fin d&apos;année est le moment idéal pour <strong>faire le point</strong>, <strong>corriger ce qui n&apos;a pas marché</strong> et <strong>se préparer sérieusement</strong> pour l&apos;année à venir.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Mais progresser ne doit pas être improvisé. Chez <strong className="text-green-dark">MANAGERSITY by H&C</strong>, nous avons regroupé nos meilleures formations en <strong>Parcours Élites</strong>, conçus pour des profils précis et des enjeux réels.
          </p>
          <a
            href="#parcours"
            className="inline-block bg-gradient-to-r from-gold-dark via-gold-medium to-gold-light text-charcoal font-bold py-4 px-8 rounded-lg uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            👉 Découvrez maintenant
          </a>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-20 px-4 md:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-dark mb-4">
            Deux options pour avancer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-dark to-gold-medium mx-auto rounded-sm mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-dark/10">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-2xl font-bold text-green-dark mb-4">
                Choisir un Parcours Élite
              </h3>
              <p className="text-gray-600 mb-6">
                Un parcours ciblé, structuré, orienté résultat. Idéal si vous avez un <strong>objectif précis</strong> :
              </p>
              <ul className="space-y-2 text-gray-700">
                {["Mieux diriger", "Mieux manager", "Mieux vendre", "Structurer la fonction RH", "Intégrer l'IA dans votre performance"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-gold-medium">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Option 2 */}
            <div className="relative bg-gradient-to-br from-green-dark to-green-medium rounded-2xl p-8 shadow-lg text-white overflow-hidden">
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-lg animate-bounce-slow z-20">
                Recommandé
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-medium/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">2️⃣</div>
                <h3 className="text-2xl font-bold mb-4">
                  Choisir l&apos;Ultimate Pack
                </h3>
                <p className="opacity-90 mb-6">
                  Un accès total, sans limite, pendant 12 mois. Idéal si vous voulez :
                </p>
                <ul className="space-y-2 opacity-90">
                  {["Tout explorer", "Évoluer sur plusieurs dimensions", "Investir sur le long terme"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-gold-light">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours Section */}
      <section id="parcours" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-dark mb-4">
            Nos Parcours Élites
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-dark to-gold-medium mx-auto rounded-sm mb-4" />
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Des parcours pensés pour élever vos compétences, changer de dimension et transformer durablement vos pratiques.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parcours.map((p) => (
              <div
                key={p.id}
                className={`relative bg-white rounded-xl p-6 shadow-lg border border-green-dark/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden ${p.highlight ? "ring-2 ring-gold-medium" : ""}`}
              >
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-dark to-gold-medium" />
                
                {p.highlight && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg animate-bounce-slow z-10">
                    Populaire
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-green-dark mb-3 mt-2">
                  {p.emoji && <span className="mr-2">{p.emoji}</span>}
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {p.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-gold-medium font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="inline-block bg-gradient-to-r from-gold-dark to-gold-medium text-white px-4 py-2 rounded-full font-bold text-sm shadow-md">
                    {p.price}
                  </span>
                  <a
                    href={p.link}
                    className="text-green-dark font-semibold hover:text-gold-dark transition-colors text-sm"
                  >
                    Découvrir →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate Pack Section */}
      <section id="ultimate" className="py-20 px-4 md:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-green-dark to-green-medium rounded-2xl p-8 md:p-12 text-white text-center overflow-hidden shadow-2xl">
            {/* Animated glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-light/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-medium/15 rounded-full blur-3xl animate-pulse-slow [animation-delay:-2s]" />
            
            <div className="relative z-10">
              <span className="inline-block bg-gold-medium text-charcoal px-4 py-1 rounded-full text-sm font-bold mb-6">
                OFFRE ULTIME
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ultimate Pack Managersity
              </h2>
              <p className="text-2xl md:text-3xl font-light mb-8 opacity-90">
                Accès total. Zéro limite. 12 mois.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
                {["Tous les cours", "Tous les parcours élites", "Nouvelles formations incluses", "Certificat Full Access"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-gold-light text-xl">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 sm:col-span-2 justify-center">
                  <span className="text-gold-light text-xl">✓</span>
                  <span>Priorité sur événements et offres</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-lg opacity-70 line-through mb-2">
                  Valeur réelle : +1.000.000 FCFA
                </p>
                <p className="text-4xl md:text-5xl font-bold">
                  297.000 <span className="text-2xl">FCFA/an</span>
                </p>
              </div>

              <a
                href={LINKS.ultimatePack}
                className="inline-block bg-gradient-to-r from-gold-dark via-gold-medium to-gold-light text-charcoal font-bold py-4 px-10 rounded-lg uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-lg"
              >
                JE VEUX L&apos;ULTIMATE PACK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-dark mb-10">
            Garanties & Rassurances
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "⚡", text: "Accès immédiat après paiement" },
              { icon: "🔒", text: "Paiement sécurisé" },
              { icon: "👥", text: "Plateforme utilisée par des milliers de professionnels" },
              { icon: "📚", text: "Contenu structuré, pratique et applicable" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-green-dark/5 rounded-lg border-l-4 border-gold-medium">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-dark mb-4">
            Questions fréquentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-dark to-gold-medium mx-auto rounded-sm mb-12" />

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-green-dark/10 last:border-b-0">
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-green-dark hover:text-gold-dark transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="pr-4">{item.q}</span>
                  <span className={`transform transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`px-6 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-4xl mb-4">⏰</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Attention : ces offres disparaissent dans 10 jours.
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Après la campagne, les prix reviennent à la normale et certains parcours ne seront plus disponibles sous ce format.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#parcours" className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Choisir un Parcours
            </a>
            <a href="#ultimate" className="inline-block bg-gold-medium text-charcoal font-bold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors">
              Choisir l&apos;Ultimate Pack
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Prêt à faire de 2026 votre meilleure année ?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Le focus est une décision. 2026 se prépare aujourd&apos;hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#parcours"
              className="inline-block bg-gradient-to-r from-gold-dark via-gold-medium to-gold-light text-charcoal font-bold py-4 px-8 rounded-lg uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              👉 Découvrir les Parcours Élites
            </a>
            <a
              href="#ultimate"
              className="inline-block bg-green-dark text-white font-bold py-4 px-8 rounded-lg hover:bg-green-medium transition-colors"
            >
              👉 Ultimate Pack – Full Access 12 mois
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-dark text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <Image
                src="/logo.png"
                alt="Managersity by H&C"
                width={200}
                height={47}
                className="h-10 w-auto brightness-0 invert mx-auto md:mx-0 mb-4"
              />
              <p className="opacity-70">
                #1 de la formation en ligne en management
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold-light transition-colors"
              >
                <span>📞</span>
                <span>+221 77 101 71 88</span>
              </a>
              <a
                href={LINKS.email}
                className="flex items-center gap-2 hover:text-gold-light transition-colors"
              >
                <span>✉️</span>
                <span>contact@managersity.co</span>
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="opacity-70">
              Copyright 2025 © Managersity by H&C
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
