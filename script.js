// Smooth scroll
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Skill bar animation
const skillBars = document.querySelectorAll(".skill-progress");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.skill;
      }
    });
  },
  { threshold: 0.5 }
);
skillBars.forEach((bar) => observer.observe(bar));

// Experience animation
const expBoxes = document.querySelectorAll(".exp-container");
const expObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);
expBoxes.forEach((box) => expObserver.observe(box));

// Contact form alert
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! I will reply soon.");
  form.reset();
});
