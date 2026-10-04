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
