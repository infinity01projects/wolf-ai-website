import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, MessageCircle, Shield, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-900 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Wolf IA – Conversez partout</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Votre assistant conversationnel intelligent, toujours prêt à discuter, répondre à vos questions ou vous
              accompagner au quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Download className="mr-2 h-5 w-5" /> Télécharger l'app
              </Button>
              <Link href="/features">
                <Button variant="secondary" size="lg" className="bg-white/90 text-purple-900 hover:bg-white border-0">
                  En savoir plus <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px] bg-black rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-lg"></div>
              <div className="h-full w-full bg-gradient-to-b from-purple-800/20 to-gray-900/20 backdrop-blur-sm p-4 pt-8 flex flex-col items-center">
                <Image src="/wolf-logo.png" alt="Wolf IA Logo" width={120} height={120} className="mb-6" />
                <div className="bg-gray-800/80 rounded-xl p-4 w-full mb-4">
                  <p className="text-sm text-gray-200">Bonjour, comment puis-je vous aider aujourd'hui?</p>
                </div>
                <div className="bg-purple-600/80 rounded-xl p-4 w-full self-end mb-4">
                  <p className="text-sm">Raconte-moi une histoire courte.</p>
                </div>
                <div className="bg-gray-800/80 rounded-xl p-4 w-full">
                  <p className="text-sm text-gray-200">
                    Il était une fois un loup gris qui aidait les habitants de la forêt à résoudre leurs problèmes grâce
                    à son intelligence exceptionnelle...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fonctionnalités Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conversations Naturelles</h3>
              <p className="text-gray-600">
                Discutez de manière fluide et naturelle avec Wolf IA, comme si vous parliez à un ami.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Disponible Partout</h3>
              <p className="text-gray-600">
                Que vous soyez en déplacement, à la maison ou au travail, Wolf IA est toujours à votre écoute.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurité Garantie</h3>
              <p className="text-gray-600">
                Vos conversations sont protégées et vos données personnelles restent confidentielles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image src="/wolf-logo.png" alt="Wolf IA Logo" width={300} height={300} className="mx-auto" />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">À Propos de Wolf IA</h2>
              <p className="text-lg text-gray-600">
                Wolf IA - Conversez partout est votre assistant conversationnel intelligent, toujours prêt à discuter,
                répondre à vos questions ou vous accompagner au quotidien. Que vous soyez en déplacement, à la maison ou
                au travail, l'intelligence artificielle Wolf IA est à votre écoute.
              </p>
              <p className="text-lg text-gray-600">
                Notre mission est de rendre l'intelligence artificielle accessible à tous, en offrant une expérience de
                conversation naturelle et intuitive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/privacy" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  Politique de confidentialité <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/about" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à converser avec Wolf IA?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Téléchargez l'application dès maintenant et découvrez un assistant conversationnel intelligent qui vous
            accompagne partout.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
            <Download className="mr-2 h-5 w-5" /> Télécharger sur Google Play
          </Button>
        </div>
      </section>
    </main>
  )
}
