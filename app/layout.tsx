import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wolf IA – Conversez partout",
  description:
    "Wolf IA - Conversez partout est votre assistant conversationnel intelligent, toujours prêt à discuter, répondre à vos questions ou vous accompagner au quotidien.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 md:px-6 py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/wolf-logo.png" alt="Wolf IA Logo" width={40} height={40} />
                  <span className="font-bold text-xl">Wolf IA</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                  <Link href="/" className="text-gray-600 hover:text-purple-600">
                    Accueil
                  </Link>
                  <Link href="/features" className="text-gray-600 hover:text-purple-600">
                    Fonctionnalités
                  </Link>
                  <Link href="/about" className="text-gray-600 hover:text-purple-600">
                    À propos
                  </Link>
                  <Link href="/privacy" className="text-gray-600 hover:text-purple-600">
                    Confidentialité
                  </Link>
                </nav>
                <Link
                  href="#download"
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Télécharger
                </Link>
              </div>
            </div>
          </header>

          {children}

          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Image src="/wolf-logo.png" alt="Wolf IA Logo" width={40} height={40} />
                    <span className="font-bold text-xl">Wolf IA</span>
                  </div>
                  <p className="text-gray-400">
                    Votre assistant conversationnel intelligent, toujours prêt à discuter.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Liens Rapides</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Accueil
                      </Link>
                    </li>
                    <li>
                      <Link href="/features" className="text-gray-400 hover:text-white">
                        Fonctionnalités
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-white">
                        À propos
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="text-gray-400 hover:text-white">
                        Politique de confidentialité
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Contact</h3>
                  <p className="text-gray-400">Pour toute question ou assistance, n'hésitez pas à nous contacter.</p>
                  <p className="text-gray-400 mt-2">wolf.ia.app@gmail.com</p>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>© {new Date().getFullYear()} Wolf IA – Conversez partout. Tous droits réservés.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
