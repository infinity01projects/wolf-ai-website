"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, MessageCircle, Home, Briefcase } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    download: false,
    testimonials: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = ["hero", "features", "download", "testimonials"]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/wolf-logo.png" alt="Wolf AI Logo" width={50} height={50} className="mr-3" />
            <span className="text-xl font-bold">Wolf AI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#features" className="hover:text-purple-400 transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#download" className="hover:text-purple-400 transition-colors">
              Télécharger
            </Link>
            <Link href="#about" className="hover:text-purple-400 transition-colors">
              À propos
            </Link>
          </div>
          <button className="md:hidden focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className={`container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center transition-opacity duration-1000 ${isVisible.hero ? "opacity-100" : "opacity-0"}`}
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Wolf AI – Conversez partout</h1>
          <p className="text-xl mb-8 text-gray-300">
            Votre assistant conversationnel intelligent, toujours prêt à discuter, répondre à vos questions ou vous
            accompagner au quotidien.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
              <Download className="mr-2 h-5 w-5" />
              Télécharger
            </button>
            <button className="bg-transparent hover:bg-gray-700 text-white font-bold py-3 px-6 border border-white rounded-lg transition-colors flex items-center justify-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Essayer la démo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-[500px] bg-gray-800 rounded-3xl overflow-hidden border-4 border-gray-700 shadow-2xl transform rotate-3">
            <div className="absolute top-0 w-full h-6 bg-black rounded-t-2xl"></div>
            <div className="flex justify-center items-center h-full">
              <Image src="/images/wolf-logo.png" alt="Wolf AI App" width={150} height={150} className="animate-pulse" />
            </div>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={`bg-gray-800 py-16 transition-transform duration-1000 ${isVisible.features ? "translate-y-0" : "translate-y-20"}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-xl hover:shadow-lg transition-all hover:transform hover:scale-105">
              <div className="bg-purple-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conversations Naturelles</h3>
              <p className="text-gray-300">
                Discutez avec Wolf AI comme avec un ami. Notre IA comprend le contexte et répond de façon naturelle.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl hover:shadow-lg transition-all hover:transform hover:scale-105">
              <div className="bg-purple-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Home className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Disponible Partout</h3>
              <p className="text-gray-300">
                À la maison, en déplacement ou au travail, Wolf AI est toujours disponible pour vous aider.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl hover:shadow-lg transition-all hover:transform hover:scale-105">
              <div className="bg-purple-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Assistant Quotidien</h3>
              <p className="text-gray-300">
                Obtenez des réponses à vos questions, des conseils personnalisés et une aide pour vos tâches
                quotidiennes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className={`py-16 bg-gradient-to-b from-gray-800 to-gray-900 transition-opacity duration-1000 ${isVisible.download ? "opacity-100" : "opacity-0"}`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Téléchargez Wolf AI dès maintenant</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
            Découvrez la puissance de l'intelligence artificielle dans votre poche. Wolf AI est disponible gratuitement
            sur Google Play.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all hover:transform hover:scale-105 inline-flex items-center">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className={`py-16 bg-gray-900 transition-transform duration-1000 ${isVisible.testimonials ? "translate-y-0" : "translate-y-20"}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos utilisateurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl transform transition-all hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-bold">Sophie M.</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "Wolf AI est devenu mon assistant quotidien. Il m'aide à organiser ma journée et répond à toutes mes
                questions avec précision."
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl transform transition-all hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold">T</span>
                </div>
                <div>
                  <h4 className="font-bold">Thomas L.</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "J'adore converser avec Wolf AI. Les réponses sont naturelles et l'application est très intuitive. Un
                must-have !"
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl transform transition-all hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold">E</span>
                </div>
                <div>
                  <h4 className="font-bold">Emma D.</h4>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "Une application très utile qui m'accompagne partout. Je l'utilise quotidiennement pour m'aider dans mes
                recherches."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Image src="/images/wolf-logo.png" alt="Wolf AI Logo" width={40} height={40} className="mr-3" />
              <span className="text-xl font-bold">Wolf AI</span>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                Contact
              </a>
            </div>
            <p className="mt-8 md:mt-0 md:order-1 text-gray-400">
              &copy; {new Date().getFullYear()} Wolf AI. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
