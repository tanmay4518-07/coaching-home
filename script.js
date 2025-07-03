// Theme Toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.onclick = () => {
  const isLight = document.body.classList.toggle('light');
  themeBtn.textContent = isLight ? '🌙' : '☀️';
};

// Language Toggle
const langBtn = document.getElementById('languageToggle');
langBtn.onclick = () => {
  const isHindi = langBtn.textContent === 'हिन्दी';
  langBtn.textContent = isHindi ? 'English' : 'हिन्दी';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isHindi ? el.getAttribute('data-hi') : el.getAttribute('data-en');
  });
};

// Stronger 3D Parallax
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 60;
  const y = (e.clientY / window.innerHeight - 0.5) * 60;
  document.querySelectorAll('.parallax').forEach(layer => {
    layer.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
  });
});
