(() => {
  const root = document.documentElement;
  const manual = localStorage.getItem('octascene-theme');
  const hour = new Date().getHours();
  const automatic = hour >= 7 && hour < 19 ? 'light' : 'dark';
  root.dataset.theme = manual || automatic;

  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('octascene-theme', next);
  });

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