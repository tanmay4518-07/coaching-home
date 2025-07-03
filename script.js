// Theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.onclick = () => {
  const isLight = document.body.classList.toggle('light');
  themeBtn.textContent = isLight ? '🌙' : '☀️';
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

// Hover-based parallax effect
document.querySelectorAll('.parallax').forEach(section => {
  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    section.style.transform = `rotateX(${ -y * 15 }deg) rotateY(${ x * 15 }deg)`;
  });

  section.addEventListener('mouseleave', () => {
    section.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});

