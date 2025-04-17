// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const burger = document.getElementById("burger-menu")
  const mobileMenu = document.getElementById("mobile-menu")
  const body = document.body

  if (burger) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
      if (mobileMenu.classList.contains("active")) {
        body.style.overflow = "hidden"
      } else {
        body.style.overflow = "auto"
      }
    })
  }

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".mobile-menu a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      body.style.overflow = "auto"
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(event.target) &&
      event.target !== burger &&
      !burger.contains(event.target)
    ) {
      mobileMenu.classList.remove("active")
      body.style.overflow = "auto"
    }
  })

  // Set current year in footer
  const currentYearElements = document.querySelectorAll("#current-year")
  currentYearElements.forEach((element) => {
    element.textContent = new Date().getFullYear()
  })

  // Contact form handling
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Simple validation
      if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs du formulaire.")
        return
      }

      // Simulate form submission
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalBtnText = submitBtn.innerHTML

      submitBtn.disabled = true
      submitBtn.innerHTML = "Envoi en cours..."

      // Simulate API call with timeout
      setTimeout(() => {
        alert("Votre message a été envoyé avec succès!")
        contactForm.reset()
        submitBtn.disabled = false
        submitBtn.innerHTML = originalBtnText
      }, 1500)
    })
  }

  // Scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".feature-card, .mission-card, .team-member, .value-card")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = element.classList.contains("value-card") ? "scale(1)" : "translateY(0)"
      }
    })
  }

  // Set initial opacity for animation elements
  const animationElements = document.querySelectorAll(".feature-card, .mission-card, .team-member, .value-card")
  animationElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    if (element.classList.contains("value-card")) {
      element.style.transform = "scale(0.95)"
    } else {
      element.style.transform = "translateY(20px)"
    }
  })

  // Run animations on load and scroll
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)
})
