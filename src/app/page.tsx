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
    description: "Acquérez les compétences clés pour briller en tant que dirigeant et réussir votre promotion. Empruntez un parcours diligent alliant fluidité et simplicité, avec un style direct et précis.",
    features: ["Leadership stratégique", "Vision & pilotage", "Gouvernance & décision", "Transformation & IA"],
    price: "249.000 FCFA",
    link: LINKS.parcoursDirigeant,
    highlight: true,
  },
  {
    id: "manager",
    title: "Parcours Manager d'Élite",
    description: "Sortir de la naiveté, comprendre les règles d'excellence et l'élevation managériale et affirmer sa maturité structurelle et managériale et augmenter ses chances de réussir en tant que manager et mériter des next steps.",
    features: ["Management d'équipe", "Communication managériale", "Leadership opérationnel", "Gestion des conflits"],
    price: "79.000 FCFA",
    link: LINKS.parcoursManager,
  },
  {
    id: "commercial",
    title: "Parcours Manager Commercial d'Élite",
    description: "Etat d'Esprit, dispositifs et méthodes de pilotage commercial pour les directeurs et managers commerciaux pour réussir son job et être à l'aise dans la production commerciale et l'orchestration de la performance commerciale.",
    features: ["Management commercial", "Vente & négociation", "Suivi des objectifs", "Coaching des équipes"],
    price: "79.000 FCFA",
    link: LINKS.parcoursCommercial,
  },
  {
    id: "rh",
    title: "Parcours RH & Capital Humain d'Élite",
    description: "Sortir de l'approximation en management du capital humain et faire du capital humain un levier de performance.",
    features: ["Organisation RH", "Performance & culture", "Processus & pilotage", "Rôle stratégique de la fonction RH"],
    price: "79.000 FCFA",
    link: LINKS.parcoursRH,
  },
  {
    id: "ia",
    title: "Parcours IA & Performance Professionnelle d'Élite",
    description: "Comprendre l'IA de A-Z avec une bonne immersion dans les utilisations pratiques pour booster la productivité et les performances d'un professionnel et d'une équipe.",
    features: ["Fondamentaux IA", "IA pour managers & dirigeants", "Productivité & cas d'usage", "Transformation digitale"],
    price: "99.000 FCFA",
    link: LINKS.parcoursIA,
    icon: "🤖",
  },
  {
    id: "clarte",
    title: "Parcours Clarté & Performance Personnelle d'Élite",
    description: "Sortir de la dispersion, renforcer la lucidité personnelle et construire une discipline intérieure solide afin d'améliorer la qualité de ses décisions, sa constance dans l'action et sa performance globale dans un environnement exigeant.",
    features: ["Clarté mentale & lucidité", "Discipline personnelle & constance", "Gestion de l'énergie & équilibre", "Mental de performance & résilience"],
    price: "59.000 FCFA",
    link: LINKS.parcoursClarte,
  },
];

const faqData = [
  {
    q: "1. Qu'est-ce que la campagne « JE SUIS FOCUS EN 2026 » ?",
    a: "C'est la campagne de fin d'année de MANAGERSITY by H&C, pensé pour aider les professionnels à clarifier leurs priorités, renforcer leurs compétences clés et préparer efficacement l'année 2026. Elle propose des Parcours Élites, ciblés par rôle et par enjeu, et un Ultimate Pack, donnant un accès total à la plateforme pendant 12 mois."
  },
  {
    q: "2. À qui s'adresse cette campagne ?",
    a: "À toute personne qui veut entrer en 2026 avec plus de clarté et de structure, notamment : dirigeants et entrepreneurs, managers et responsables d'équipe, RH et fonctions support, commerciaux et managers commerciaux, professionnels ambitieux en évolution."
  },
  {
    q: "3. Est-ce une simple promotion ?",
    a: "Non. Il s'agit d'une opération structurée et limitée dans le temps, avec des formats spécifiques (Parcours Élites, Ultimate Pack) proposés uniquement pendant cette campagne."
  },
  {
    q: "4. Combien de temps dure la campagne ?",
    a: "La campagne se déroule sur 10 jours au total. À la fin, les conditions actuelles ne seront plus disponibles."
  },
  {
    q: "5. Qu'est-ce qu'un Parcours Élite ?",
    a: "Un Parcours Élite est un programme structuré qui regroupe plusieurs formations autour d'un enjeu précis (dirigeant, manager, RH, commercial, IA, performance personnelle). Un parcours = une transformation claire."
  },
  {
    q: "6. Dois-je suivre tous les parcours ?",
    a: "Non. Vous pouvez choisir un seul parcours, en fonction de votre priorité actuelle. Chaque parcours est conçu pour être autonome et complet."
  },
  {
    q: "7. Puis-je suivre plusieurs parcours ?",
    a: "Oui. Vous pouvez acheter plusieurs parcours séparément, ou opter pour l'Ultimate Pack, qui donne accès à tous les parcours."
  },
  {
    q: "8. Quel parcours choisir si j'hésite ?",
    a: "Si vous avez un enjeu principal clair → choisissez le parcours correspondant. Si vous avez plusieurs enjeux ou une vision long terme → l'Ultimate Pack est souvent le meilleur choix."
  },
  {
    q: "9. Les parcours sont-ils adaptés aux débutants ?",
    a: "Les parcours ne sont pas « débutants » au sens scolaire. Ils sont conçus pour des professionnels, avec ou sans expérience managériale, qui veulent structurer et améliorer leurs pratiques."
  },
  {
    q: "10. Comment se déroule un parcours ?",
    a: "Accès en ligne via la plateforme Managersity, progression à votre rythme, contenus structurés, applicables, orientés décision et action."
  },
  {
    q: "11. Le parcours développement personnel est-il du « développement personnel classique » ?",
    a: "Non. Ce parcours ne relève pas du développement personnel grand public. Il traite de : clarté mentale, discipline personnelle, gestion de l'énergie, solidité mentale, au service de la performance professionnelle."
  },
  {
    q: "12. À qui est destiné ce parcours ?",
    a: "À des professionnels sous pression, dirigeants ou managers, qui veulent : réduire la dispersion, améliorer la qualité de leurs décisions, renforcer leur constance et leur focus."
  },
  {
    q: "13. Qu'est-ce que l'Ultimate Pack ?",
    a: "L'Ultimate Pack Managersity donne un accès total à la plateforme pendant 12 mois. Il inclut : tous les cours, tous les Parcours Élites, toutes les nouvelles formations ajoutées durant l'année."
  },
  {
    q: "14. À qui s'adresse l'Ultimate Pack ?",
    a: "À ceux qui : ont plusieurs enjeux professionnels, veulent une vision long terme, ne veulent pas se limiter à un seul parcours, souhaitent évoluer en continu pendant l'année."
  },
  {
    q: "15. Quelle est la différence entre un parcours et l'Ultimate Pack ?",
    a: "Parcours Élite : traite un enjeu précis. Ultimate Pack : donne accès à tout, sans restriction, pendant 12 mois."
  },
  {
    q: "16. L'Ultimate Pack est-il plus rentable ?",
    a: "Oui, si vous prévoyez de suivre plusieurs parcours, ou d'explorer différents sujets au cours de l'année."
  },
  {
    q: "17. Combien de temps ai-je accès aux contenus ?",
    a: "Parcours Élite : accès selon les conditions de la plateforme. Ultimate Pack : accès total pendant 12 mois."
  },
  {
    q: "18. Puis-je apprendre à mon rythme ?",
    a: "Oui. Tous les contenus sont accessibles en ligne et peuvent être suivis à votre rythme, selon votre disponibilité."
  },
  {
    q: "19. Puis-je suivre les formations tout en travaillant ?",
    a: "Oui. Les parcours sont conçus pour des professionnels en activité, avec des formats compatibles avec un agenda chargé."
  },
  {
    q: "20. Les formations sont-elles théoriques ?",
    a: "Non. Les contenus Managersity sont : pratiques, structurés, orientés décision et application concrète."
  },
  {
    q: "21. Les prix sont-ils définitifs ?",
    a: "Les prix affichés sont valables uniquement pendant la campagne « JE SUIS FOCUS EN 2026 »."
  },
  {
    q: "22. Puis-je décider plus tard ?",
    a: "Vous pouvez, mais les formats actuels et les conditions de prix ne seront plus disponibles après la campagne."
  },
  {
    q: "23. Et si je ne suis pas sûr(e) ?",
    a: "Si vous hésitez : commencez par un Parcours Élite ciblé, ou choisissez l'Ultimate Pack pour garder une liberté totale."
  },
  {
    q: "24. Que se passe-t-il après la campagne ?",
    a: "La campagne se ferme. Managersity continuera à proposer des formations, mais pas sous ce format ni à ces conditions."
  },
  {
    q: "25. Pourquoi rejoindre cette campagne maintenant ?",
    a: "Parce que : le focus est une décision, 2026 se prépare aujourd'hui, et les compétences que vous développez maintenant détermineront vos résultats demain."
  },
];

// Countdown Hook
function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
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
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

// Countdown Component - Version grande pour la section urgence
function CountdownBig({ targetDate }: { targetDate: Date }) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="flex justify-center gap-3 md:gap-4">
      {[
        { value: days, label: "Jours" },
        { value: hours, label: "Heures" },
        { value: minutes, label: "Minutes" },
        { value: seconds, label: "Secondes" },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="bg-gold-medium text-charcoal text-2xl md:text-4xl font-bold rounded-xl w-16 md:w-20 h-16 md:h-20 flex items-center justify-center shadow-lg">
            {String(item.value).padStart(2, "0")}
          </div>
          <p className="text-gray-300 text-xs md:text-sm mt-2 font-medium">{item.label}</p>
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

function AcademicIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function CheckIcon({ className = "text-green-medium" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 px-4 md:px-8 bg-gradient-to-br from-green-dark via-green-dark to-green-medium min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white">
              <div className="inline-block bg-gold-medium/20 border border-gold-medium/40 text-gold-light text-sm font-semibold px-4 py-2 rounded-full mb-6">
                🔥 Jusqu&apos;à -70% pendant 10 jours
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                ACCÉDEZ À TOUT ET <span className="text-gold-light">CASSEZ LA BARAQUE</span> EN 2026 !
              </h1>
              <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
                Choisissez parmi <strong className="text-white">6 Parcours Élites</strong> ultra-ciblés (Dirigeant, Manager, Commercial, RH, IA, Performance Personnelle) ou prenez l&apos;<strong className="text-white">Ultimate Pack</strong> pour un accès total à toute la plateforme pendant 12 mois. Des prix jamais vus. Une opportunité unique.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#parcours" className="bg-gold-medium hover:bg-gold-light text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-center">
                  👉 Découvrir les offres
                </a>
                <a href="#ultimate" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-colors text-center">
                  👉 Accéder à l&apos;Ultimate Pack
                </a>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/hero-image.png"
                alt="Formation Managersity"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LE CONTEXTE (POURQUOI CETTE CAMPAGNE) */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <Image
                src="/context-image.png"
                alt="Pourquoi cette opportunité"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Pourquoi cette opportunité ?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                La fin d&apos;année est le moment idéal pour :
              </p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-green-medium">•</span> Faire le point
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-medium">•</span> Corriger ce qui n&apos;a pas marché
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-medium">•</span> Se préparer sérieusement pour l&apos;année à venir
                </li>
              </ul>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Mais progresser ne doit pas être improvisé.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Chez <strong className="text-green-dark">MANAGERSITY by H&C</strong>, nous avons regroupé nos meilleures formations en <strong>Parcours Élites</strong>, conçus pour des profils précis et des enjeux réels.
              </p>
              <a href="#parcours" className="bg-green-dark hover:bg-green-medium text-white font-medium px-6 py-3 rounded-lg transition-colors inline-block">
                👉 DÉCOUVREZ MAINTENANT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — LES 2 OPTIONS POSSIBLES */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1 - Fond blanc */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-dark/10 rounded-lg flex items-center justify-center text-green-dark mb-6">
                <AcademicIcon />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Option <span className="bg-green-dark text-white px-2 py-1 rounded text-lg">1</span> : Choisir un Parcours Élite
              </h3>
              <p className="text-gray-600 mb-6">
                Un parcours ciblé, structuré, orienté résultat. Idéal si vous avez un <strong className="text-green-dark">objectif précis</strong> :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> mieux diriger</li>
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> mieux manager</li>
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> mieux vendre</li>
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> structurer la fonction RH</li>
                <li className="flex items-center gap-2"><span className="text-green-medium">•</span> intégrer l&apos;IA dans votre performance</li>
              </ul>
            </div>

            {/* Option 2 - Fond vert avec badge corrigé */}
            <div className="relative bg-gradient-to-br from-green-dark to-green-medium rounded-xl p-8 text-white overflow-hidden">
              {/* Badge Recommandé - corrigé */}
              <div className="absolute top-4 right-4 bg-gold-medium text-charcoal px-3 py-1.5 rounded-full text-xs font-bold uppercase shadow-md">
                Recommandé
              </div>
              
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <ChartIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Option <span className="bg-gold-medium text-charcoal px-2 py-1 rounded text-lg">2</span> : Choisir l&apos;Ultimate Pack
              </h3>
              <p className="text-white/80 mb-6">
                Un accès total, sans limite, pendant 12 mois. Idéal si vous voulez :
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-2"><span className="text-gold-light">•</span> tout explorer</li>
                <li className="flex items-center gap-2"><span className="text-gold-light">•</span> évoluer sur plusieurs dimensions</li>
                <li className="flex items-center gap-2"><span className="text-gold-light">•</span> investir sur le long terme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PRÉSENTATION DES PARCOURS ÉLITES */}
      <section id="parcours" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-4">
            Nos Parcours Élites
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Des parcours pensés pour élever vos compétences, changer de dimension et transformer durablement vos pratiques.
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
                  <span className="text-xl font-bold text-green-dark">💰 {p.price}</span>
                  <a href={p.link} className="text-green-dark hover:text-green-medium font-medium text-sm transition-colors">
                    DÉCOUVRIR →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 md:px-8 bg-green-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rejoignez des milliers de professionnels
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Des dirigeants, managers et entrepreneurs ont déjà transformé leurs compétences avec nos parcours. À votre tour de passer au niveau supérieur.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold-light">2000+</p>
                  <p className="text-white/60 text-sm">Apprenants</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold-light">15+</p>
                  <p className="text-white/60 text-sm">Pays</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold-light">95%</p>
                  <p className="text-white/60 text-sm">Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="/testimonial-image.png"
                alt="Témoignages apprenants"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — L'OFFRE ULTIME */}
      <section id="ultimate" className="py-20 px-4 md:px-8 bg-white">
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
              {[
                "Tous les cours",
                "Tous les parcours élites",
                "Nouvelles formations incluses",
                "Certificat annuel Full Access",
                "Priorité sur événements et offres"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckIcon className="text-gold-medium" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-white/60 line-through mb-1">Valeur réelle : +1.000.000 FCFA</p>
              <p className="text-lg text-white/80 mb-2">Prix spécial :</p>
              <p className="text-4xl md:text-5xl font-bold">
                297.000 <span className="text-xl font-normal">FCFA / an</span>
              </p>
            </div>

            <a href={LINKS.ultimatePack} className="inline-block bg-gold-medium hover:bg-gold-light text-charcoal font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              JE VEUX L&apos;ULTIMATE PACK
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7 — GARANTIE & RASSURANCE */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "Accès immédiat", desc: "après paiement" },
              { icon: "🔒", title: "Paiement sécurisé", desc: "100% sécurisé" },
              { icon: "👥", title: "Plateforme utilisée", desc: "par des milliers de professionnels" },
              { icon: "📚", title: "Contenu structuré", desc: "pratique et applicable" },
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

      {/* FOIRE AUX QUESTIONS */}
      <section id="faq" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-4">
            ❓ FOIRE AUX QUESTIONS
          </h2>
          <p className="text-gray-600 text-center mb-12">
            JE SUIS FOCUS EN 2026 | MANAGERSITY
          </p>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-charcoal hover:bg-gray-100 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{item.q}</span>
                  <span className={`transform transition-transform ${openFaq === index ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div className={`px-6 text-gray-600 overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-96 pb-4" : "max-h-0"}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — URGENCE & CLÔTURE - Fond charcoal/sombre avec compteur */}
      <section className="py-16 px-4 md:px-8 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-5xl mb-6">⏰</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Attention : ces offres disparaissent dans
          </h2>
          
          {/* Compteur dynamique */}
          <div className="mb-8">
            <CountdownBig targetDate={END_DATE} />
          </div>

          <p className="text-lg text-gray-300 mb-4">
            Après la campagne :
          </p>
          <ul className="mb-8 space-y-2 text-gray-400">
            <li>• Les prix reviennent à la normale</li>
            <li>• Certains parcours ne seront plus disponibles sous ce format</li>
          </ul>
          <p className="text-xl font-semibold text-gold-light">
            Choisissez votre parcours ou l&apos;Ultimate Pack maintenant
          </p>
        </div>
      </section>

      {/* SECTION 9 — CTA FINAL */}
      <section className="py-20 px-4 md:px-8 bg-green-dark">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Prêt à faire de 2026 votre meilleure année ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#parcours" className="bg-gold-medium hover:bg-gold-light text-charcoal font-semibold px-8 py-4 rounded-lg transition-colors">
              👉 Découvrir les Parcours Élites
            </a>
            <a href="#ultimate" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-colors">
              👉 Accéder à l&apos;Ultimate Pack – Full Access 12 mois
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
                <li><a href="#parcours" className="hover:text-white transition-colors">Dirigeant d&apos;Élite</a></li>
                <li><a href="#parcours" className="hover:text-white transition-colors">Manager d&apos;Élite</a></li>
                <li><a href="#parcours" className="hover:text-white transition-colors">Manager Commercial</a></li>
                <li><a href="#parcours" className="hover:text-white transition-colors">RH & Capital Humain</a></li>
                <li><a href="#parcours" className="hover:text-white transition-colors">IA & Performance</a></li>
                <li><a href="#parcours" className="hover:text-white transition-colors">Clarté & Performance</a></li>
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
