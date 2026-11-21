// Menu navigasi untuk tampilan HP
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Tahun otomatis pada footer
document.getElementById("year").textContent = new Date().getFullYear();

// Efek pergantian teks profesi/minat
const roleElement = document.getElementById("typedRole");
const roles = ["Web Enthusiast", "Mahasiswa", "Programmer Pemula"];
let roleIndex = 0;

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleElement.style.opacity = "0";
  setTimeout(() => {
    roleElement.textContent = roles[roleIndex];
    roleElement.style.opacity = "1";
  }, 220);
}, 2400);
