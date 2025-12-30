// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (navToggle && nav) navToggle.addEventListener('click', () => nav.classList.toggle('is-open'));
if (nav) nav.addEventListener('click', e => e.target.tagName === 'A' && nav.classList.remove('is-open'));

// Smooth scrolling (for older browsers that ignore CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const t = document.getElementById(id);
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// Contact form validation + fake submit
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success-message');
const setError = (name, msg) => { const el = document.querySelector(`[data-error-for="${name}"]`); if (el) el.textContent = msg || '' };
const validEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  let ok = true;
  if (successMessage) successMessage.textContent = '';
  if (!name) { setError('name', 'Please share your name.'); ok = false } else setError('name', '');
  if (!email) { setError('email', 'An email address helps us write back.'); ok = false } else if (!validEmail(email)) { setError('email', 'Please enter a valid email.'); ok = false } else setError('email', '');
  if (!message) { setError('message', 'Share a little about your wedding and what you’re dreaming of.'); ok = false } else setError('message', '');
  if (!ok) return;
  form.reset();
  if (successMessage) successMessage.textContent = 'Thank you for reaching out. Your enquiry has been received and we’ll respond warmly as soon as possible.';
});

// Dynamic year in footer
const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();
