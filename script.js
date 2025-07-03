const themeBtn = document.getElementById('themeToggle');
const langBtn = document.getElementById('languageToggle');

themeBtn.onclick = () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
};

langBtn.onclick = () => {
  const isHindi = langBtn.textContent === 'हिन्दी';
  langBtn.textContent = isHindi ? 'English' : 'हिन्दी';

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isHindi ? el.getAttribute('data-hi') : el.getAttribute('data-en');
  });
};

