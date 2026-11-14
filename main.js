(() => {
  'use strict';
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // selection handles on titles
  $$('.sel').forEach(s => {
    const l = document.createElement('i'); l.className = 'dotL';
    const r = document.createElement('i'); r.className = 'dotR';
    l.style.display = r.style.display = 'block';
    s.append(l, r);
  });

  // calm reveal + title highlight when in view
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add(e.target.classList.contains('sel-title') ? 'on' : 'in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.25, rootMargin: '0px 0px -8% 0px' });
  $$('.fade, .sel-title').forEach(el => io.observe(el));

  // click to enlarge
  const lb = document.getElementById('lb');
  const lbImg = lb.querySelector('img');
  $$('.row5 img, .row4 img, .row6 img, .tall2 img, .shot img, .trio img, .ex figure:not(.host1) img, .ab-row img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => { lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add('open'); });
  });
  lb.addEventListener('click', () => lb.classList.remove('open'));
  addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
})();
