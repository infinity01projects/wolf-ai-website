import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de Wolf AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'histoire et la mission derrière votre assistant conversationnel intelligent préféré.
          </p>
        </div>

        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <Image
              src="/wolf-logo.png"
              alt="Wolf AI Logo"
              width={300}
              height={300}
              className="mx-auto drop-shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Notre Histoire</h2>
            <p className="text-lg text-gray-600">
              Wolf AI est né d'une vision simple : rendre l'intelligence artificielle accessible à tous, partout et à
              tout moment. Nous croyons que la technologie doit s'adapter à l'humain, et non l'inverse.
            </p>
            <p className="text-lg text-gray-600">
              Développé par une équipe passionnée d'experts en IA et en expérience utilisateur, Wolf AI combine les
              dernières avancées en matière d'intelligence artificielle avec une interface intuitive et conviviale.
            </p>
            <p className="text-lg text-gray-600">
              Le loup, symbole de notre marque, représente l'intelligence, l'adaptabilité et la loyauté - des qualités
              que nous avons intégrées au cœur de notre assistant conversationnel.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Notre Mission</h2>
              <p className="text-lg text-gray-600">
                Chez Wolf AI, notre mission est de créer un assistant conversationnel qui comprend véritablement les
                besoins humains et y répond de manière naturelle et intuitive.
              </p>
              <p className="text-lg text-gray-600">
                Nous nous engageons à développer une technologie qui respecte la vie privée des utilisateurs tout en
                offrant une expérience personnalisée et enrichissante.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Rendre l'intelligence artificielle accessible à tous, quelle que soit leur expertise technique
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Créer des conversations naturelles qui enrichissent la vie quotidienne des utilisateurs
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Protéger la confidentialité des données tout en offrant une expérience personnalisée
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  "Notre vision est de créer un assistant IA qui comprend non seulement ce que vous dites, mais aussi ce
                  dont vous avez besoin, avant même que vous ne le demandiez."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">WA</span>
                  </div>
                  <div>
                    <p className="font-semibold">L'équipe Wolf AI</p>
                    <p className="text-sm text-gray-500">Fondateurs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Confidentialité</h3>
              <p className="text-gray-600">
                Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Votre
                confiance est notre priorité.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Nous repoussons constamment les limites de ce qui est possible avec l'IA pour vous offrir une expérience
                toujours plus intuitive et utile.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibilité</h3>
              <p className="text-gray-600">
                Nous concevons nos produits pour qu'ils soient accessibles à tous, quels que soient leurs capacités ou
                leur niveau de compétence technique.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-purple-900 text-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Contactez-nous</h2>
              <p className="text-lg">
                Vous avez des questions, des suggestions ou besoin d'assistance? Notre équipe est là pour vous aider.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>assistancewolfia@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0-2.591-.799-5-2.157-6.918M16.157 3.082A8.961 8.961 0 0112 1.5c-2.591 0-5 .799-6.918 2.157"
                    />
                  </svg>
                  <span>www.wolf-ai.com</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Rejoignez notre communauté</h3>
                <p className="mb-6">
                  Suivez-nous sur les réseaux sociaux pour rester informé des dernières mises à jour et fonctionnalités
                  de Wolf AI.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Prêt à découvrir Wolf AI?</h2>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            <Download className="mr-2 h-5 w-5" /> Télécharger l'application
          </Button>
        </div>
      </div>
    </main>
  )
}
