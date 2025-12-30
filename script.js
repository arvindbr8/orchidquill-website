// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  // Close nav when clicking a link (mobile)
  nav.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      nav.classList.remove("is-open");
    }
  });
}

// Smooth scrolling (for older browsers that ignore CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Contact form validation + fake submit
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success-message");

function setError(fieldName, message) {
  const errorEl = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (errorEl) errorEl.textContent = message || "";
}

function validateEmail(email) {
  // Basic email check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    let isValid = true;

    // Clear previous success message
    if (successMessage) {
      successMessage.textContent = "";
    }

    // Name
    if (!name) {
      setError("name", "Please share your name.");
      isValid = false;
    } else {
      setError("name", "");
    }

    // Email
    if (!email) {
      setError("email", "An email address helps us write back.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setError("email", "Please enter a valid email.");
      isValid = false;
    } else {
      setError("email", "");
    }

    // Message
    if (!message) {
      setError(
        "message",
        "Share a little about your wedding and what you’re dreaming of."
      );
      isValid = false;
    } else {
      setError("message", "");
    }

    if (!isValid) return;

    // Here you would integrate with a real backend (Formspree, Netlify, etc.)
    // For now, we just show a friendly message.
    form.reset();
    if (successMessage) {
      successMessage.textContent =
        "Thank you for reaching out. Your enquiry has been received and we’ll respond warmly as soon as possible.";
    }
  });
}

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
