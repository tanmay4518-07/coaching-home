const themeBtn = document.getElementById('themeToggle');

themeBtn.onclick = () => {
  const isNowLight = document.body.classList.toggle('light');
  themeBtn.textContent = isNowLight ? '🌙' : '☀️';
};

// Set default icon on load
themeBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';


// Language toggle
const langBtn = document.getElementById('languageToggle');
langBtn.onclick = () => {
  const isHindi = langBtn.textContent === 'हिन्दी';
  langBtn.textContent = isHindi ? 'English' : 'हिन्दी';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isHindi ? el.getAttribute('data-hi') : el.getAttribute('data-en');
  });
};


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${ -y * 25 }deg) rotateY(${ x * 25 }deg)`; // ← Increased angle
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
