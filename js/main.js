// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Book filters
const filters = document.querySelectorAll(".filter");
const books = document.querySelectorAll(".book");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", String(b === btn));
    });
    const f = btn.dataset.filter;
    books.forEach((book) => {
      book.hidden = f !== "all" && book.dataset.category !== f;
    });
  });
});

// Store links open in a new tab so readers don't lose the site
document.querySelectorAll(".btn[data-store]").forEach((a) => {
  const href = a.getAttribute("href");
  if (href && href !== "#") {
    a.target = "_blank";
    a.rel = "noopener";
  }
});

// Newsletter: until a MailerLite/Kit form URL is pasted into the form's
// action attribute, fall back to an email so signups are never lost.
const form = document.querySelector(".signup");
const note = document.querySelector(".form-note");
form.addEventListener("submit", (e) => {
  if (form.getAttribute("action")) return;
  e.preventDefault();
  const email = form.dataset.fallbackEmail;
  const name = document.getElementById("signup-name").value.trim();
  const reader = document.getElementById("signup-email").value.trim();
  const subject = encodeURIComponent("Add me to the reader list");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${reader}`);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  note.hidden = false;
  note.innerHTML = `Thanks! If your email app didn't open, write to <a href="mailto:${email}">${email}</a>.`;
});

// Header turns solid once the page scrolls past the top
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// If a cover image fails to load, show a designed typographic cover instead
function coverFallback(img) {
  const box = document.createElement("div");
  box.className = "cover-fallback";
  box.setAttribute("role", "img");
  box.setAttribute("aria-label", img.alt);
  box.innerHTML = '<span class="cf-title"></span><span class="cf-rule"></span><span class="cf-author"></span>';
  box.querySelector(".cf-title").textContent = img.dataset.title || img.alt;
  box.querySelector(".cf-author").textContent = img.dataset.author || "";
  img.replaceWith(box);
}
document.querySelectorAll("img[data-title]").forEach((img) => {
  if (img.complete && img.naturalWidth === 0) coverFallback(img);
  else img.addEventListener("error", () => coverFallback(img));
});

// Gentle fade-in of sections as they scroll into view
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".section .wrap, .quote-band .wrap").forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}
