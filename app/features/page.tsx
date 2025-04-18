import Link from "next/link"
import { ArrowLeft, Brain, Cpu, Globe, Headphones, Lock, MessageCircle, Smartphone, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Features() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fonctionnalités de Wolf AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez toutes les capacités de votre assistant conversationnel intelligent, conçu pour vous accompagner
            dans votre quotidien.
          </p>
        </div>

        {/* Hero Feature */}
        <div className="bg-gradient-to-r from-purple-900 to-gray-900 text-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Intelligence Artificielle Avancée</h2>
              <p className="text-lg mb-6">
                Wolf AI utilise les dernières avancées en matière d'intelligence artificielle pour vous offrir des
                conversations naturelles et pertinentes. Notre modèle de langage a été entraîné sur des milliards de
                textes pour comprendre vos intentions et vous répondre avec précision.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Compréhension contextuelle</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Apprentissage continu</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Réponses personnalisées</span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 bg-purple-800/50 rounded-full flex items-center justify-center">
                <Brain className="h-24 w-24 text-white" />
                <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Conversations Naturelles</h3>
            <p className="text-gray-600 mb-4">
              Discutez de manière fluide et naturelle avec Wolf AI, comme si vous parliez à un ami. Notre IA comprend le
              contexte de vos conversations et maintient le fil de la discussion.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Compréhension du langage naturel
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Mémoire des conversations précédentes
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Détection des émotions et du ton
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Disponible Partout</h3>
            <p className="text-gray-600 mb-4">
              Que vous soyez en déplacement, à la maison ou au travail, Wolf AI est toujours à votre écoute. Notre
              application est optimisée pour fonctionner sur tous les appareils Android.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Fonctionne hors ligne pour les fonctions de base
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Synchronisation entre vos appareils
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Interface adaptée à tous les écrans
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sécurité Garantie</h3>
            <p className="text-gray-600 mb-4">
              Vos conversations sont protégées et vos données personnelles restent confidentielles. Nous utilisons des
              technologies de chiffrement avancées pour garantir votre vie privée.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Chiffrement de bout en bout
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Contrôle total sur vos données
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Conformité RGPD
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Réponses Instantanées</h3>
            <p className="text-gray-600 mb-4">
              Wolf AI vous répond en temps réel, sans délai d'attente. Notre technologie optimisée permet des
              interactions rapides et fluides, même avec des connexions limitées.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Traitement local pour les requêtes simples
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Optimisation pour les réseaux mobiles
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Mise en cache intelligente
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multilingue</h3>
            <p className="text-gray-600 mb-4">
              Communiquez avec Wolf AI dans plusieurs langues. Notre assistant comprend et répond dans votre langue
              préférée, facilitant les échanges quelle que soit votre origine.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Support de plus de 20 langues
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Détection automatique de la langue
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Traduction en temps réel
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personnalisation</h3>
            <p className="text-gray-600 mb-4">
              Wolf AI s'adapte à vos préférences et à votre style de communication. Plus vous l'utilisez, plus il
              comprend vos besoins et personnalise ses réponses.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Profils d'utilisateurs personnalisables
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Apprentissage de vos préférences
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span> Thèmes et interfaces adaptables
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Fonctionnalités Supplémentaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Commandes Vocales</h3>
              <p className="text-sm text-gray-600">Interagissez avec Wolf AI par la voix</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Mode Économie</h3>
              <p className="text-sm text-gray-600">Optimisé pour préserver votre batterie</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Widgets</h3>
              <p className="text-sm text-gray-600">Accès rapide depuis votre écran d'accueil</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Thèmes</h3>
              <p className="text-sm text-gray-600">Personnalisez l'apparence de l'application</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Prêt à découvrir toutes ces fonctionnalités?</h2>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Télécharger Wolf AI
          </Button>
        </div>
      </div>
    </main>
  )
}
