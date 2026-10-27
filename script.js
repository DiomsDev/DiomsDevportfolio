// Menu mobile
const menuToggle = document.querySelector("#menu-toggle");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen
    ? '<i class="bx bx-x"></i>'
    : '<i class="bx bx-menu"></i>';
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
  });
});

// Effet de texte avec Typed.js
if (window.Typed) {
  new Typed(".typed-text", {
    strings: [
      "d'applications web.",
      "front-end.",
      "back-end.",
      "passionné par l'innovation."
    ],
    typeSpeed: 55,
    backSpeed: 28,
    backDelay: 1400,
    loop: true
  });
}

// Animations au défilement avec ScrollReveal
if (window.ScrollReveal) {
  const sr = ScrollReveal({
    distance: "45px",
    duration: 900,
    easing: "ease",
    reset: false,
    viewFactor: 0.15
  });

  sr.reveal(".reveal", { origin: "bottom", interval: 120 });
  sr.reveal(".reveal-left", { origin: "left", interval: 120 });
  sr.reveal(".reveal-right", { origin: "right", interval: 120 });
}

// Effet de bordure dans l'en-tête lors du défilement
const header = document.querySelector(".header");
const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", updateHeader);
updateHeader();

// Mise à jour automatique de l'année
document.querySelector("#year").textContent = new Date().getFullYear();

// Navigation active selon la section visible
const sections = document.querySelectorAll("main section[id]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => observer.observe(section));

// Formulaire : prépare un e-mail dans le logiciel de messagerie
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // IMPORTANT : remplace cette adresse par ton adresse e-mail réelle.
  const destination = "pacomemamadoudiomande@gmail.com";
  if (destination === "pacomemamadoudiomande@gmail.com") {
    formNote.textContent = "Remplace d'abord ton.email@example.com dans index.html et script.js par ton adresse e-mail réelle.";
    formNote.style.color = "#ffbd69";
    return;
  }

  const data = new FormData(contactForm);
  const nom = data.get("nom");
  const email = data.get("email");
  const objet = data.get("objet");
  const message = data.get("message");
  const corps = `Nom : ${nom}\nE-mail : ${email}\n\n${message}`;
  window.location.href = `mailto:${destination}?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(corps)}`;
});
