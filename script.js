(() => {
  const root = document.documentElement;

  // OctaScene landing pages use the cinematic dark visual system at all times.
  // Clear the previous time-based/light preference so returning visitors also
  // receive the intended dark background immediately.
  root.dataset.theme = 'dark';
  localStorage.removeItem('octascene-theme');

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.style.display = 'none';
  }

  document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  document.querySelectorAll('.chapter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chapter').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  document.querySelectorAll('.scene-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.scene-card').forEach(x => x.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
})();