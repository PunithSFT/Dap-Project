// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Carousel functionality
  const carousel = document.getElementById("carousel")
  if (carousel) {
    let currentIndex = 0
    const items = carousel.children.length

    setInterval(() => {
      currentIndex = (currentIndex + 1) % items
      const translateX = -currentIndex * (100 / 4)
      carousel.style.transform = `translateX(${translateX}%)`
    }, 3000)
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }
})

// WhatsApp function
function openWhatsApp() {
  const message =
    "Hello! I'm interested in your chauffeur guide services in Sri Lanka. Could you please provide more information?"
  const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

// Form submission
function handleFormSubmit(event) {
  event.preventDefault()
  // Add form submission logic here
  alert("Thank you for your message! We will get back to you soon.")
}

// Page navigation with scroll to top
function navigateToPage(url) {
  window.location.href = url
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
}
