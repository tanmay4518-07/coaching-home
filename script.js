const themeBtn = document.getElementById('themeToggle');
const langBtn = document.getElementById('languageToggle');

themeBtn.onclick = () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
};

langBtn.onclick = () => {
  const isHindi = langBtn.textContent === 'हिन्दी';
  langBtn.textContent = isHindi ? 'English' : 'हिन्दी';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isHindi ? el.getAttribute('data-hi') : el.getAttribute('data-en');
  });
};

// Parallax effect
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  document.querySelectorAll('.parallax-layer').forEach(layer => {
    layer.style.transform = `rotateX(${y * -1}deg) rotateY(${x}deg)`;
  });
});
