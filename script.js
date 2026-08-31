(() => {
  const root = document.documentElement;

  // Keep the cinematic dark visual system active.
  root.dataset.theme = 'dark';
  localStorage.removeItem('octascene-theme');

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) themeToggle.style.display = 'none';

  // Brand: use the latest OctaScene octopus/lens mark in the main header.
  const brandImage = document.querySelector('.brand img');
  if (brandImage) {
    brandImage.src = 'assets/logo-current.png';
    brandImage.alt = 'OctaScene';
  }

  // Browser icons.
  const ensureIcon = (rel, href, sizes) => {
    let link = document.querySelector(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ''}`);
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      if (sizes) link.sizes = sizes;
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = href;
  };
  ensureIcon('icon', 'assets/favicon-32.png', '32x32');
  ensureIcon('icon', 'assets/favicon-64.png', '64x64');
  ensureIcon('apple-touch-icon', 'assets/favicon-180.png', '180x180');

  // Add Roadmap to the main navigation if it is not already present.
  const mainNav = document.querySelector('.main-nav');
  if (mainNav && !mainNav.querySelector('a[href="roadmap.html"]')) {
    const roadmapLink = document.createElement('a');
    roadmapLink.href = 'roadmap.html';
    roadmapLink.textContent = 'Roadmap';
    mainNav.appendChild(roadmapLink);
  }

  // Main-page roadmap preview linking to the complete V1/V2/V3 roadmap.
  if (!document.querySelector('#roadmap-preview')) {
    const target = document.querySelector('.v1-teaser');
    const section = document.createElement('section');
    section.id = 'roadmap-preview';
    section.innerHTML = `
      <div class="roadmap-preview-head">
        <span>PRODUCT ROADMAP</span>
        <h2>From production pipeline to an intelligent directing system.</h2>
        <p>OctaScene is being built in three layers: a dependable long-form production foundation, a narrative-aware AI director, and a broader production intelligence platform.</p>
      </div>
      <div class="roadmap-preview-grid">
        <a href="roadmap.html#v1"><b>V1</b><strong>Production Foundation</strong><small>Script, narration, storyboard, generation, review, timeline, cost tracking, retry/resume, and export.</small></a>
        <a href="roadmap.html#v2"><b>V2</b><strong>Intelligent Director</strong><small>Direction Bible, narrative-aware directing, custom direction profiles, documentary shot systems, AI assistant/agent, and budget-aware provider routing.</small></a>
        <a href="roadmap.html#v3"><b>V3</b><strong>Advanced Production System</strong><small>Reusable production intelligence, deeper agents, research/provenance workflows, collaboration, richer finishing, and scalable commercial tooling.</small></a>
      </div>
      <a class="roadmap-preview-cta" href="roadmap.html">Explore the complete V1 → V2 → V3 roadmap →</a>
    `;

    const style = document.createElement('style');
    style.textContent = `
      #roadmap-preview{width:87.8%;max-width:1350px;margin:0 auto 72px;padding:46px;border:1px solid rgba(126,117,106,.48);border-radius:18px;background:linear-gradient(145deg,rgba(28,32,33,.84),rgba(12,17,21,.92));box-shadow:0 24px 64px rgba(0,0,0,.24)}
      .roadmap-preview-head{display:grid;grid-template-columns:.85fr 1.15fr;column-gap:64px;align-items:end;margin-bottom:28px}.roadmap-preview-head>span{grid-column:1;color:#ff6a13;font-size:11px;font-weight:700;letter-spacing:1.8px;margin-bottom:12px}.roadmap-preview-head h2{grid-column:1;margin:0;font-size:36px;line-height:1.08;letter-spacing:-1.6px;color:#f7f4ef}.roadmap-preview-head p{grid-column:2;grid-row:1/3;margin:0;color:#c8c1b8;font-size:15px;line-height:1.72}
      .roadmap-preview-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.roadmap-preview-grid a{display:flex;flex-direction:column;gap:10px;min-height:190px;padding:24px;border:1px solid rgba(104,99,92,.5);border-radius:12px;background:rgba(35,39,39,.68);text-decoration:none;transition:.2s ease}.roadmap-preview-grid a:hover{transform:translateY(-3px);border-color:rgba(255,107,24,.55)}.roadmap-preview-grid b{color:#ff6a13;font-size:12px;letter-spacing:1.2px}.roadmap-preview-grid strong{color:#f5f0e9;font-size:18px}.roadmap-preview-grid small{color:#bfb8b0;font-size:12.5px;line-height:1.62}.roadmap-preview-cta{display:inline-block;margin-top:24px;color:#ff7426;text-decoration:none;font-weight:600;font-size:13px}
      @media(max-width:900px){.roadmap-preview-head{grid-template-columns:1fr;gap:14px}.roadmap-preview-head>span,.roadmap-preview-head h2,.roadmap-preview-head p{grid-column:1;grid-row:auto}.roadmap-preview-grid{grid-template-columns:1fr}.roadmap-preview-head h2{font-size:31px}}
      @media(max-width:620px){#roadmap-preview{width:92%;padding:30px 22px}}
    `;
    document.head.appendChild(style);

    if (target) target.parentNode.insertBefore(section, target);
    else document.querySelector('main')?.appendChild(section);
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