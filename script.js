// Theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.onclick = () => {
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
};

// Language toggle
const langBtn = document.getElementById('languageToggle');
langBtn.onclick = () => {
  const isHindi = langBtn.textContent === 'हिन्दी';
  langBtn.textContent = isHindi ? 'English' : 'हिन्दी';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isHindi ? el.getAttribute('data-hi') : el.getAttribute('data-en');
  });
};

// 3D parallax for all sections
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelectorAll('.parallax').forEach(layer => {
    layer.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
  });
});

