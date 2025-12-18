"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Liens externes - à personnaliser
const LINKS = {
  parcoursDirigeant: "#",
  parcoursManager: "#",
  parcoursCommercial: "#",
  parcoursRH: "#",
  parcoursIA: "#",
  parcoursClarte: "#",
  ultimatePack: "#",
  whatsapp: "https://wa.me/221771017188",
  email: "mailto:contact@managersity.co",
};

// Date de fin de la campagne (10 jours à partir d'aujourd'hui)
const END_DATE = new Date();
END_DATE.setDate(END_DATE.getDate() + 10);

const parcours = [
  {
    id: "dirigeant",
    title: "Parcours Dirigeant d'Élite",
    description: "Acquérez les compétences clés pour briller en tant que dirigeant et réussir votre promotion.",
    features: ["Leadership stratégique", "Vision & pilotage", "Gouvernance & décision", "Transformation & IA"],
    price: "249.000 FCFA",
    link: LINKS.parcoursDirigeant,
    highlight: true,
  },
  {
    id: "manager",
    title: "Parcours Manager d'Élite",
    description: "Sortez de la naïveté, comprenez les règles d'excellence et affirmez votre maturité managériale.",
    features: ["Management d'équipe", "Communication managériale", "Leadership opérationnel", "Gestion des conflits"],
    price: "79.000 FCFA",
    link: LINKS.parcoursManager,
  },
  {
    id: "commercial",
    title: "Parcours Manager Commercial",
    description: "Méthodes de pilotage commercial pour réussir et orchestrer la performance commerciale.",
    features: ["Management commercial", "Vente & négociation", "Suivi des objectifs", "Coaching des équipes"],
    price: "79.000 FCFA",
    link: LINKS.parcoursCommercial,
  },
  {
    id: "rh",
    title: "Parcours RH & Capital Humain",
    description: "Faites du capital humain un levier de performance pour votre organisation.",
    features: ["Organisation RH", "Performance & culture", "Processus & pilotage", "Rôle stratégique RH"],
    price: "79.000 FCFA",
    link: LINKS.parcoursRH,
  },
  {
    id: "ia",
    title: "Parcours IA & Performance",
    description: "Comprenez l'IA de A-Z pour booster la productivité d'un professionnel et d'une équipe.",
    features: ["Fondamentaux IA", "IA pour managers", "Productivité & cas d'usage", "Transformation digitale"],
    price: "99.000 FCFA",
    link: LINKS.parcoursIA,
    icon: "🤖",
  },
  {
    id: "clarte",
    title: "Parcours Clarté & Performance",
    description: "Renforcez la lucidité et construisez une discipline intérieure solide.",
    features: ["Clarté mentale", "Discipline personnelle", "Gestion de l'énergie", "Mental de performance"],
    price: "59.000 FCFA",
    link: LINKS.parcoursClarte,
  },
];

const faqData = [
  {
    q: "Qu'est-ce que la campagne « JE SUIS FOCUS EN 2026 » ?",
    a: "C'est la campagne de fin d'année de MANAGERSITY by H&C, pensée pour aider les professionnels à clarifier leurs priorités, renforcer leurs compétences clés et préparer efficacement l'année 2026."
  },
  {
    q: "À qui s'adresse cette campagne ?",
    a: "À toute personne qui veut entrer en 2026 avec plus de clarté : dirigeants, entrepreneurs, managers, responsables d'équipe, RH, commerciaux et professionnels ambitieux."
  },
  {
    q: "Qu'est-ce qu'un Parcours Élite ?",
    a: "Un programme structuré qui regroupe plusieurs formations autour d'un enjeu précis. Un parcours = une transformation claire."
  },
  {
    q: "Qu'est-ce que l'Ultimate Pack ?",
    a: "L'Ultimate Pack donne un accès total à la plateforme pendant 12 mois : tous les cours, tous les parcours, toutes les nouvelles formations."
  },
  {
    q: "Puis-je apprendre à mon rythme ?",
    a: "Oui. Tous les contenus sont accessibles en ligne et peuvent être suivis selon votre disponibilité."
  },
];

// Countdown Hook
function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

// Countdown Component
function Countdown({ targetDate }: { targetDate: Date }) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="flex gap-3 md:gap-4">
      {[
        { value: days, label: "Jours" },
        { value: hours, label: "Heures" },
        { value: minutes, label: "Min" },
        { value: seconds, label: "Sec" },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="bg-white text-green-dark text-2xl md:text-4xl font-bold rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center shadow-lg">
            {String(item.value).padStart(2, "0")}
          </div>
          <p className="text-white/80 text-xs md:text-sm mt-2">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

// Icon Components
function ChartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function AcademicIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-medium" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Managersity by H&C"
            width={200}
            height={47}
            className="h-10 md:h-12 w-auto"
            priority
          />
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#parcours" className="hover:text-green-dark transition-colors">Parcours</a>
            <a href="#ultimate" className="hover:text-green-dark transition-colors">Ultimate Pack</a>
            <a href="#faq" className="hover:text-green-dark transition-colors">FAQ</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-dark text-white px-4 py-2 rounded-lg font-medium hover:bg-green-medium transition-colors">
              Nous contacter
            </a>
          </nav>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="md:hidden bg-green-dark text-white px-4 py-2 rounded-lg text-sm font-medium">
            Contact
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-green-dark via-green-dark to-green-medium">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                JE SUIS FOCUS<br />
                <span className="text-gold-light">EN 2026</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
                La plus grande montée en compétences commence maintenant. Accédez à nos Parcours Élites ou à l&apos;Ultimate Pack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#parcours" className="bg-gold-medium hover:bg-gold-light text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-center">
                  Découvrir les Parcours
                </a>
                <a href="#ultimate" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-colors text-center">
                  Voir l&apos;Ultimate Pack
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 md:gap-12">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold-light">6</p>
                  <p className="text-white/60 text-sm">Parcours Élites</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold-light">12</p>
                  <p className="text-white/60 text-sm">Mois d&apos;accès</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold-light">100%</p>
                  <p className="text-white/60 text-sm">En ligne</p>
                </div>
              </div>
            </div>

            {/* Right - Countdown */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                <p className="text-white/80 text-center mb-4 font-medium">⏰ Offre valable encore</p>
                <Countdown targetDate={END_DATE} />
                <p className="text-white/60 text-center text-sm mt-4">
                  Après cette date, les prix reviennent à la normale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            MANAGERSITY by H&C
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Plateforme de formation en ligne spécialisée en management. Nous proposons des parcours structurés pour les dirigeants, managers et professionnels ambitieux.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#parcours" className="bg-green-dark hover:bg-green-medium text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Nos Parcours Élites
            </a>
            <a href="#ultimate" className="bg-white hover:bg-gray-100 text-green-dark font-medium px-6 py-3 rounded-lg border border-green-dark/20 transition-colors">
              Ultimate Pack
            </a>
          </div>
        </div>
      </section>

      {/* Services/Options */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-4">
            Deux options pour avancer
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choisissez le format qui correspond à vos objectifs et votre ambition
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Option Card 1 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-dark/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-dark/10 rounded-lg flex items-center justify-center text-green-dark mb-4">
                <AcademicIcon />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Parcours Élite</h3>
              <p className="text-gray-600 text-sm mb-4">Un parcours ciblé pour un objectif précis</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> Formation structurée</li>
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> Objectif clair</li>
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> À votre rythme</li>
              </ul>
            </div>

            {/* Option Card 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-dark/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-dark/10 rounded-lg flex items-center justify-center text-green-dark mb-4">
                <ChartIcon />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Ultimate Pack</h3>
              <p className="text-gray-600 text-sm mb-4">Accès total pendant 12 mois</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> Tous les parcours</li>
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> Nouvelles formations</li>
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> Certificat Full Access</li>
              </ul>
            </div>

            {/* Option Card 3 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-dark/30 hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-green-dark/10 rounded-lg flex items-center justify-center text-green-dark mb-4">
                <UsersIcon />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Pour qui ?</h3>
              <p className="text-gray-600 text-sm mb-4">Professionnels ambitieux</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> Dirigeants & entrepreneurs</li>
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> Managers & chefs d&apos;équipe</li>
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> RH & commerciaux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours Section */}
      <section id="parcours" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-4">
            Nos Parcours Élites
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Des parcours pensés pour élever vos compétences et transformer durablement vos pratiques
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parcours.map((p) => (
              <div
                key={p.id}
                className={`bg-white rounded-xl p-6 border transition-all hover:shadow-lg ${
                  p.highlight ? "border-gold-medium ring-1 ring-gold-medium" : "border-gray-200 hover:border-green-dark/30"
                }`}
              >
                {p.highlight && (
                  <span className="inline-block bg-gold-medium text-charcoal text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Populaire
                  </span>
                )}
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {p.icon && <span className="mr-2">{p.icon}</span>}
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xl font-bold text-green-dark">{p.price}</span>
                  <a href={p.link} className="text-green-dark hover:text-green-medium font-medium text-sm transition-colors">
                    Découvrir →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate Pack Section */}
      <section id="ultimate" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-dark to-green-medium rounded-2xl p-8 md:p-12 text-white text-center">
            <span className="inline-block bg-gold-medium text-charcoal text-sm font-semibold px-4 py-1 rounded-full mb-6">
              OFFRE ULTIME
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ultimate Pack Managersity
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Accès total. Zéro limite. 12 mois.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8 text-left">
              {["Tous les cours", "Tous les parcours élites", "Nouvelles formations incluses", "Certificat Full Access", "Priorité événements"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-white/60 line-through mb-1">Valeur : +1.000.000 FCFA</p>
              <p className="text-4xl md:text-5xl font-bold">
                297.000 <span className="text-xl font-normal">FCFA/an</span>
              </p>
            </div>

            <a href={LINKS.ultimatePack} className="inline-block bg-gold-medium hover:bg-gold-light text-charcoal font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Je veux l&apos;Ultimate Pack
            </a>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "Accès immédiat", desc: "Après paiement" },
              { icon: "🔒", title: "Paiement sécurisé", desc: "100% sécurisé" },
              { icon: "👥", title: "Milliers d'apprenants", desc: "Nous font confiance" },
              { icon: "📚", title: "Contenu pratique", desc: "Applicable immédiatement" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <h4 className="font-semibold text-charcoal">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-4">
            Questions fréquentes
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Tout ce que vous devez savoir sur nos offres
          </p>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-charcoal hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{item.q}</span>
                  <span className={`transform transition-transform ${openFaq === index ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div className={`px-6 text-gray-600 overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40 pb-4" : "max-h-0"}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-green-dark">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à faire de 2026 votre meilleure année ?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Le focus est une décision. 2026 se prépare aujourd&apos;hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#parcours" className="bg-gold-medium hover:bg-gold-light text-charcoal font-semibold px-8 py-4 rounded-lg transition-colors">
              Découvrir les Parcours
            </a>
            <a href="#ultimate" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-colors">
              Ultimate Pack – 12 mois
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/logo.png"
                alt="Managersity by H&C"
                width={180}
                height={42}
                className="h-10 w-auto brightness-0 invert mb-4"
              />
              <p className="text-gray-400 text-sm">
                #1 de la formation en ligne en management
              </p>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <p>📍 Dakar, Sénégal</p>
                <p>✉️ contact@managersity.co</p>
                <p>📞 +221 77 101 71 88</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Parcours</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Dirigeant d&apos;Élite</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manager d&apos;Élite</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manager Commercial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RH & Capital Humain</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Offres</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#parcours" className="hover:text-white transition-colors">Parcours Élites</a></li>
                <li><a href="#ultimate" className="hover:text-white transition-colors">Ultimate Pack</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href={LINKS.email} className="hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>Copyright 2025 © Managersity by H&C. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
