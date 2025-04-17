"use client"

import { useState, useEffect } from "react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "auto" : "hidden"
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    // Cleanup function to ensure body scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
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

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={closeMenu} className="focus:outline-none" aria-label="Fermer le menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center text-2xl space-y-8 mt-20">
            <a href="#features" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
              Fonctionnalités
            </a>
            <a href="#download" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
              Télécharger
            </a>
            <a href="#about" onClick={closeMenu} className="hover:text-purple-400 transition-colors">
              À propos
            </a>
          </div>
        </div>
      )}
    </>
  )
}
