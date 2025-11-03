// script.js
// Vanilla JS for theme toggle, form validation and saving contact messages to localStorage.

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement; // we'll set data-theme attribute here
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const yearEl = document.getElementById('year');

  // Set current year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize theme from localStorage or system preference
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', currentTheme);
  if (themeToggle) themeToggle.setAttribute('aria-pressed', currentTheme === 'dark');

  // Theme toggle handler
  themeToggle && themeToggle.addEventListener('click', function () {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.setAttribute('aria-pressed', next === 'dark');
  });

  // Simple email regex (not exhaustive) for demo validation
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Show status message with optional error flag
  function showStatus(message, isError) {
    formStatus.textContent = message;
    formStatus.style.color = isError ? 'var(--muted)' : 'var(--accent)';
  }

  // Load existing messages (for demonstration)
  function loadMessages() {
    try {
      const raw = localStorage.getItem('contactMessages');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  // Save message
  function saveMessage(payload) {
    const items = loadMessages();
    items.push(payload);
    localStorage.setItem('contactMessages', JSON.stringify(items));
  }

  // Form submit handler
  form && form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    formStatus.textContent = '';

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    if (name.length < 2) {
      showStatus('Please enter your name (2+ characters).', true);
      form.elements['name'].focus();
      return;
    }
    if (!isValidEmail(email)) {
      showStatus('Please enter a valid email address.', true);
      form.elements['email'].focus();
      return;
    }
    if (message.length < 6) {
      showStatus('Please enter a longer message (6+ characters).', true);
      form.elements['message'].focus();
      return;
    }

    const payload = {
      name: name,
      email: email,
      message: message,
      createdAt: new Date().toISOString()
    };

    // Simulate persistence by saving to localStorage
    try {
      saveMessage(payload);
      form.reset();
      showStatus('Thanks! Your message was saved locally. (demo)', false);
    } catch (err) {
      showStatus('There was an error saving your message. Please try again.', true);
      console.error(err);
    }
  });

  // Optional: clear status on reset
  form && form.addEventListener('reset', function () {
    setTimeout(() => formStatus.textContent = '', 150);
  });

});
