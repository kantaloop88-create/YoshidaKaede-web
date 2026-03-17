/* ================================================================
   SVG ICONS
   ================================================================ */
const ICONS = {
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  soundcloud: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.56 8.87V17h8.76c1.73-.01 2.68-1.38 2.68-2.56 0-1.29-.97-2.56-2.68-2.56-.11 0-.22.01-.33.03.01-.12.01-.24.01-.36 0-2.21-1.79-4-4-4-.45 0-.89.08-1.3.22-.2-.18-.43-.33-.68-.43-.3-.12-.62-.18-.95-.18-.8 0-1.53.37-2.01.95-.5.6-.79 1.41-.74 2.29L11.56 8.87zm-1.75.14c-.17-.95-.92-1.67-1.87-1.67-.5 0-.95.2-1.28.53-.33.33-.54.77-.57 1.27-.34-.07-.7-.07-1.05.03-.8.23-1.37.95-1.37 1.79 0 .96.78 1.74 1.74 1.74h5.27V9.01H9.81z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 0 1 1.47.957c.453.453.752.898.957 1.47.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 0 1-.957 1.47 4.088 4.088 0 0 1-1.47.957c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 0 1-1.47-.957 4.088 4.088 0 0 1-.957-1.47c-.163-.46-.35-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 0 1 .957-1.47A4.088 4.088 0 0 1 5.063 2.293c.46-.163 1.26-.35 2.43-.403C8.759 1.832 9.139 1.82 12 1.82zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.903.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.876 5.876 0 0 0 .63 4.14C.333 4.903.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.15.558 2.913a5.876 5.876 0 0 0 1.384 2.126A5.876 5.876 0 0 0 4.14 23.37c.763.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.15-.261 2.913-.558a5.876 5.876 0 0 0 2.126-1.384 5.876 5.876 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.913C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.058-1.278-.261-2.15-.558-2.913a5.876 5.876 0 0 0-1.384-2.126A5.876 5.876 0 0 0 19.86.63C19.097.333 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
  applemusic: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 3.5c.3 0 .5.2.5.5v12.7c0 1.5-1.3 2.8-2.8 2.8-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.5 0 1 .1 1.4.4V7.3l-7.2 1.7v9.7c0 1.5-1.3 2.8-2.8 2.8C6.1 21.5 5 20.3 5 18.8s1.2-2.7 2.7-2.7c.5 0 1 .1 1.4.4V5.8c0-.3.2-.5.4-.6l8.5-2c.1 0 .3-.1.5 0z"/></svg>',
  spotify: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>'
};

/* ================================================================
   ENGINE
   ================================================================ */

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function ytId(u) {
  const m = u.match(/(?:v=|youtu\.be\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function dragScroll(el) {
  let d = false, sx, sl;
  el.addEventListener('mousedown', e => { d = true; sx = e.pageX - el.offsetLeft; sl = el.scrollLeft; });
  ['mouseup', 'mouseleave'].forEach(ev => el.addEventListener(ev, () => { d = false; }));
  el.addEventListener('mousemove', e => { if (!d) return; e.preventDefault(); el.scrollLeft = sl - (e.pageX - el.offsetLeft - sx) * 1.4; });
}

// Overlay
const ov = document.getElementById('overlay');
const ovC = document.getElementById('ovContent');
function openOv(html) { ovC.innerHTML = html; ov.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeOv() { ov.classList.remove('open'); document.body.style.overflow = ''; setTimeout(() => { ovC.innerHTML = ''; }, 320); }
document.getElementById('ovClose').addEventListener('click', closeOv);
ov.addEventListener('click', e => { if (e.target === ov) closeOv(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOv(); });

/* ================================================================
   LOAD DATA & RENDER
   ================================================================ */

fetch('./data/site.json')
  .then(res => res.json())
  .then(SITE => {
    renderMusic(SITE.music);
    renderMovie(SITE.movie);
    renderLive(SITE.live);
    renderNews(SITE.news);
    renderGoods(SITE.goods || []);
    renderAbout(SITE);
    renderContact(SITE.contact);
    renderFooter(SITE);
    renderHeroSocial(SITE.social);
    initKaedeSwitch();
    initCursorTargets();
    initScrollReveal();
  });

/* ── Music ─────────────────────────────────────── */
function renderMusic(items) {
  const rM = document.getElementById('rowMusic');
  items.forEach(m => {
    const a = document.createElement(m.link ? 'a' : 'div');
    a.className = 'music-item';
    if (m.link) { a.href = m.link; a.target = '_blank'; a.rel = 'noopener'; }
    a.innerHTML = `<div class="music-jacket">${m.image ? `<img src="${esc(m.image)}" alt="${esc(m.title)}" loading="lazy">` : '<div class="music-jacket-ph">♩</div>'}</div><div class="music-title">${esc(m.title)}</div><div class="music-date">${esc(m.date)}</div>`;
    rM.appendChild(a);
  });
  dragScroll(rM);
}

/* ── Movie ─────────────────────────────────────── */
function renderMovie(items) {
  const rMv = document.getElementById('rowMovie');
  items.forEach(m => {
    const id = ytId(m.youtube); if (!id) return;
    const div = document.createElement('div');
    div.className = 'movie-item';
    div.innerHTML = `<div class="movie-thumb-wrap"><img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="${esc(m.title)}" loading="lazy"><div class="movie-play"><div class="movie-play-ring"><div class="movie-play-tri"></div></div></div></div>${m.title ? `<div class="movie-title">${esc(m.title)}</div>` : ''}`;
    div.addEventListener('click', () => openOv(`<div class="ov-video"><iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe></div>`));
    rMv.appendChild(div);
  });
  dragScroll(rMv);
}

/* ── Live ──────────────────────────────────────── */
function renderLive(items) {
  const rL = document.getElementById('rowLive');
  items.forEach(l => {
    const el = document.createElement(l.link ? 'a' : 'div');
    el.className = 'live-item';
    if (l.link) { el.href = l.link; el.target = '_blank'; el.rel = 'noopener'; }
    el.innerHTML = `<div class="live-flyer">${l.image ? `<img src="${esc(l.image)}" alt="${esc(l.title)}" loading="lazy">` : '<div class="live-flyer-ph">◈</div>'}</div><div class="live-title">${esc(l.title)}</div><div class="live-date">${esc(l.date)}</div>`;
    rL.appendChild(el);
  });
  dragScroll(rL);
}

/* ── Auto-link URLs in text ────────────────────── */
function linkify(text) {
  return text.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
}

/* ── News ──────────────────────────────────────── */
function renderNews(items) {
  const rN = document.getElementById('rowNews');
  items.forEach(n => {
    const div = document.createElement('div');
    div.className = 'news-item';
    div.innerHTML = `<div class="news-thumb">${n.image ? `<img src="${esc(n.image)}" alt="${esc(n.title)}" loading="lazy">` : '<div class="news-thumb-ph">✦</div>'}</div><div class="news-date">${esc(n.date)}</div><div class="news-title">${esc(n.title)}</div>`;
    div.addEventListener('click', () => openOv(`<div class="ov-news"><div class="ov-news-date">${esc(n.date)}</div><div class="ov-news-title">${esc(n.title)}</div>${n.image ? `<img class="ov-news-img" src="${esc(n.image)}" alt="">` : ''}<div class="ov-news-body">${linkify(esc(n.body))}</div></div>`));
    rN.appendChild(div);
  });
  dragScroll(rN);
}

/* ── Goods ─────────────────────────────────────── */
function renderGoods(items) {
  const rG = document.getElementById('rowGoods');
  items.forEach(g => {
    const a = document.createElement('a');
    a.className = 'goods-item';
    a.href = g.link;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `<div class="goods-thumb">${g.image ? `<img src="${g.image}" alt="goods" loading="lazy">` : '<div class="goods-thumb-ph">◈</div>'}</div>`;
    rG.appendChild(a);
  });
  dragScroll(rG);
}

/* ── About ─────────────────────────────────────── */
function renderAbout(SITE) {
  document.getElementById('aboutBio').innerHTML = SITE.bio;
  const sk = document.getElementById('aboutSkills');
  SITE.skills.forEach(g => {
    const d = document.createElement('div');
    d.className = 'skill-group rev';
    d.innerHTML = `<div class="skill-label">${g.label}</div><div class="skill-list">${g.items.join(' / ')}</div>`;
    sk.appendChild(d);
  });
}

/* ── Contact ───────────────────────────────────── */
function renderContact(items) {
  const cLinks = document.getElementById('contactLinks');
  items.forEach(c => {
    const a = document.createElement('a');
    a.className = 'contact-link-item';
    a.href = c.href;
    if (c.type !== 'email') { a.target = '_blank'; a.rel = 'noopener'; }
    const iconSvg = ICONS[c.type] || ICONS.email;
    a.innerHTML = `<div class="contact-link-icon">${iconSvg}</div><div><div class="contact-link-label">${esc(c.label)}</div><div class="contact-link-value">${esc(c.value)}</div></div>`;
    cLinks.appendChild(a);
  });
}

/* ── Footer ────────────────────────────────────── */
function renderFooter(SITE) {
  document.getElementById('footerCopy').textContent = SITE.footer.copy;
  const fIcons = document.getElementById('footerIcons');
  SITE.social.forEach(s => {
    const a = document.createElement('a');
    a.className = 'footer-icon-link';
    a.href = s.href; a.target = '_blank'; a.rel = 'noopener';
    a.title = s.type;
    a.innerHTML = ICONS[s.type] || '';
    fIcons.appendChild(a);
  });
}

/* ── Hero social icons ─────────────────────────── */
function renderHeroSocial(items) {
  const container = document.getElementById('heroSocial');
  items.forEach(s => {
    const a = document.createElement('a');
    a.className = 'hero-social-link';
    a.href = s.href; a.target = '_blank'; a.rel = 'noopener';
    a.title = s.type;
    a.innerHTML = ICONS[s.type] || '';
    container.appendChild(a);
  });
}

/* ── Cursor targets (re-bind after dynamic render) */
function initCursorTargets() {
  const cur = document.getElementById('cursor');
  document.querySelectorAll('a,button,.music-item,.movie-item,.live-item,.news-item').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('big'));
    el.addEventListener('mouseleave', () => cur.classList.remove('big'));
  });
}

/* ── Scroll reveal (re-observe after dynamic render) */
function initScrollReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: .08 });
  document.querySelectorAll('.rev').forEach(el => io.observe(el));
}

/* ================================================================
   3D MODEL SWITCHER
   ================================================================ */
const GLB_MODELS = [
  { path: './models/yoshikaeChan_remesh_forWeb_draco.glb', size: 5.2, offsetY: 0.5 },
  { path: './models/Moyuyu_Robot.glb',               size: 5.2, offsetY: 0 },
];
const MESH_MAT = new THREE.MeshStandardMaterial({ color: 0xe8e4dc, metalness: .5, roughness: .25 });

// Cache loaded GLB scenes so we don't re-fetch
const loadedModels = [];
let activeModel = 0;
let isTransitioning = false;

const dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/libs/draco/');

function loadGLBModel(idx, cb) {
  const cfg = GLB_MODELS[idx];
  const loader = new THREE.GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  loader.load(cfg.path, gltf => {
    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = cfg.size / maxDim;
    model.scale.setScalar(scale);
    model.position.sub(center.multiplyScalar(scale));
    model._baseScale = scale;
    // offsetY: body-height ratio (-0.5 = half body down) + custom offset
    model._baseY = -(size.y * scale) * cfg.offsetY;
    cb(model);
  });
}

function switchModel(idx) {
  if (idx === activeModel || isTransitioning) return;
  isTransitioning = true;
  activeModel = idx;
  document.querySelectorAll('.model-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.model) === idx);
  });

  const currentTarget = objGroup;
  if (!currentTarget) return;
  const easeOutExpo = t => t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);

  // Fade out current
  let fadeOut = 0;
  const fadeOutStep = () => {
    fadeOut += 0.14;
    const e = easeOutExpo(Math.min(1, fadeOut));
    const s = currentTarget._baseScale || 1;
    currentTarget.scale.setScalar(s * (1 - e * 0.5));
    if (fadeOut < 1) { requestAnimationFrame(fadeOutStep); return; }

    scene.remove(currentTarget);

    const swapIn = (newModel) => {
      objGroup = newModel;
      objBaseY = newModel._baseY || 0;
      scene.add(newModel);
      const ns = newModel._baseScale || 1;
      let fadeIn = 0;
      const fadeInStep = () => {
        fadeIn += 0.12;
        const e = easeOutExpo(Math.min(1, fadeIn));
        newModel.scale.setScalar(ns * (0.5 + e * 0.5));
        if (fadeIn < 1) { requestAnimationFrame(fadeInStep); return; }
        newModel.scale.setScalar(ns);
        isTransitioning = false;
      };
      requestAnimationFrame(fadeInStep);
    };

    if (loadedModels[idx]) {
      swapIn(loadedModels[idx]);
    } else {
      loadGLBModel(idx, model => {
        loadedModels[idx] = model;
        swapIn(model);
      });
    }
  };
  requestAnimationFrame(fadeOutStep);
}

function initKaedeSwitch() {
  const kaede = document.getElementById('kaede');
  kaede.addEventListener('click', () => {
    const nextIdx = (activeModel + 1) % GLB_MODELS.length;
    const toggled = nextIdx !== 0;
    kaede.classList.toggle('toggled', toggled);
    // Swap particle colors: red ↔ teal
    const c1 = toggled ? 0x41adb9 : 0xe53c51;
    const c2 = toggled ? 0xe53c51 : 0x41adb9;
    particles1.material.color.setHex(c1);
    particles2.material.color.setHex(c2);
    plexusDots.material.color.setHex(c1);
    lineMat.color.setHex(c1);
    switchModel(nextIdx);
  });
}

/* ================================================================
   THREE.JS SCENE
   ================================================================ */
const canvas = document.getElementById('three-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.6;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, .1, 100);
camera.position.set(0, 0, 5);

// Neutral environment map for metallic reflections (dimmed to reduce white-out)
const envGen = new THREE.PMREMGenerator(renderer);
const envScene = new THREE.Scene();
envScene.background = new THREE.Color(0xc0c0c0);
const envMap = envGen.fromScene(envScene, 0, 0.1, 100).texture;
scene.environment = envMap;
envGen.dispose();

scene.add(new THREE.AmbientLight(0xffffff, .3));
const pl1 = new THREE.PointLight(0xe53c51, 1.0, 20); pl1.position.set(4, 3, 3); scene.add(pl1);
const pl2 = new THREE.PointLight(0x41adb9, 0.6, 20); pl2.position.set(-4, -2, 2); scene.add(pl2);
const pl3 = new THREE.PointLight(0xffffff, 0.6, 20); pl3.position.set(0, 5, -3); scene.add(pl3);
const pl4 = new THREE.PointLight(0xffffff, 0.8, 20); pl4.position.set(0, 0, 5); scene.add(pl4);

// Active GLB model group
let objGroup = null;
let objBaseY = 0;

// Load default GLB model, then preload others
loadGLBModel(0, model => {
  loadedModels[0] = model;
  objGroup = model;
  objBaseY = model._baseY || 0;
  scene.add(objGroup);
  // Preload remaining models in background
  for (let i = 1; i < GLB_MODELS.length; i++) {
    loadGLBModel(i, m => { loadedModels[i] = m; });
  }
});

// Particles — two dot layers + plexus lines
const PARTICLE_COUNT = 600;
function makeParticles(color, size, opacity, spread) {
  const buf = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    buf[i * 3]     = (Math.random() - .5) * spread;
    buf[i * 3 + 1] = (Math.random() - .5) * spread;
    buf[i * 3 + 2] = (Math.random() - .5) * spread * 0.6;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(buf, 3));
  return new THREE.Points(geo, new THREE.PointsMaterial({
    color, size, transparent: true, opacity, depthWrite: false
  }));
}
const particles1 = makeParticles(0xe53c51, 0.06, 0.45, 14);
const particles2 = makeParticles(0x41adb9, 0.04, 0.35, 18);
scene.add(particles1);
scene.add(particles2);

// Plexus — separate node set with connecting lines
const PLEXUS_COUNT = 80;
const PLEXUS_DIST = 3.0;
const MAX_LINES = PLEXUS_COUNT * PLEXUS_COUNT;

// Plexus nodes: store base positions + velocity for drifting
const plexusBase = [];
const plexusVel = [];
for (let i = 0; i < PLEXUS_COUNT; i++) {
  plexusBase.push(
    (Math.random() - .5) * 12,
    (Math.random() - .5) * 12,
    (Math.random() - .5) * 6
  );
  plexusVel.push(
    (Math.random() - .5) * 0.004,
    (Math.random() - .5) * 0.004,
    (Math.random() - .5) * 0.002
  );
}
const plexusPosBuf = new Float32Array(plexusBase);
const plexusDotGeo = new THREE.BufferGeometry();
plexusDotGeo.setAttribute('position', new THREE.BufferAttribute(plexusPosBuf, 3));
const plexusDots = new THREE.Points(plexusDotGeo, new THREE.PointsMaterial({
  color: 0xe53c51, size: 0.08, transparent: true, opacity: 0.6, depthWrite: false
}));
scene.add(plexusDots);

// Line geometry
const linePosBuf = new Float32Array(MAX_LINES * 6);
const lineGeo = new THREE.BufferGeometry();
lineGeo.setAttribute('position', new THREE.BufferAttribute(linePosBuf, 3));
lineGeo.setDrawRange(0, 0);
const lineMat = new THREE.LineBasicMaterial({
  color: 0xe53c51, transparent: true, opacity: 0.25, depthWrite: false
});
const plexusLines = new THREE.LineSegments(lineGeo, lineMat);
scene.add(plexusLines);

function updatePlexus() {
  // Drift nodes
  for (let i = 0; i < PLEXUS_COUNT; i++) {
    const i3 = i * 3;
    plexusPosBuf[i3]     += plexusVel[i3];
    plexusPosBuf[i3 + 1] += plexusVel[i3 + 1];
    plexusPosBuf[i3 + 2] += plexusVel[i3 + 2];
    // Bounce at boundaries
    if (Math.abs(plexusPosBuf[i3])     > 6) plexusVel[i3]     *= -1;
    if (Math.abs(plexusPosBuf[i3 + 1]) > 6) plexusVel[i3 + 1] *= -1;
    if (Math.abs(plexusPosBuf[i3 + 2]) > 3) plexusVel[i3 + 2] *= -1;
  }
  plexusDotGeo.attributes.position.needsUpdate = true;

  // Build line segments between nearby nodes
  let lineIdx = 0;
  for (let i = 0; i < PLEXUS_COUNT; i++) {
    for (let j = i + 1; j < PLEXUS_COUNT; j++) {
      const i3 = i * 3, j3 = j * 3;
      const dx = plexusPosBuf[i3]     - plexusPosBuf[j3];
      const dy = plexusPosBuf[i3 + 1] - plexusPosBuf[j3 + 1];
      const dz = plexusPosBuf[i3 + 2] - plexusPosBuf[j3 + 2];
      const dist = dx * dx + dy * dy + dz * dz;
      if (dist < PLEXUS_DIST * PLEXUS_DIST) {
        const li = lineIdx * 6;
        linePosBuf[li]     = plexusPosBuf[i3];
        linePosBuf[li + 1] = plexusPosBuf[i3 + 1];
        linePosBuf[li + 2] = plexusPosBuf[i3 + 2];
        linePosBuf[li + 3] = plexusPosBuf[j3];
        linePosBuf[li + 4] = plexusPosBuf[j3 + 1];
        linePosBuf[li + 5] = plexusPosBuf[j3 + 2];
        lineIdx++;
      }
    }
  }
  lineGeo.attributes.position.needsUpdate = true;
  lineGeo.setDrawRange(0, lineIdx * 2);
}

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

/* ── Scroll → halftone mask ───────────────────── */
const halftone = document.getElementById('halftone');
const worksEl = document.getElementById('works');
const navEl = document.getElementById('nav');
let sY = 0, mx = 0, my = 0;

function updateHalftone() {
  const rect = worksEl.getBoundingClientRect();
  const vh = window.innerHeight;
  const edgePx = Math.max(0, Math.min(vh, rect.top));
  const edgePct = (edgePx / vh * 100).toFixed(2);
  const feather = 3;
  const maskVal = `linear-gradient(to bottom, transparent ${edgePct}%, black ${(parseFloat(edgePct) + feather).toFixed(2)}%)`;
  halftone.style.webkitMaskImage = maskVal;
  halftone.style.maskImage = maskVal;
}

window.addEventListener('scroll', () => {
  sY = window.scrollY;
  navEl.classList.toggle('vis', sY > 60);
  updateHalftone();
});
updateHalftone();

// Cursor
const cur = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cur.style.left = e.clientX + 'px';
  cur.style.top = e.clientY + 'px';
  mx = (e.clientX / window.innerWidth - .5) * 2;
  my = (e.clientY / window.innerHeight - .5) * 2;
});

/* ── Animation loop ───────────────────────────── */
let t = 0;
(function tick() {
  requestAnimationFrame(tick); t += .004;
  if (objGroup) {
    objGroup.rotation.y = t * .22 + sY * .0015;
    objGroup.rotation.x = Math.sin(t * .35) * .12 + sY * .0005;
    objGroup.position.x += (mx * .35 - objGroup.position.x) * .05;
    objGroup.position.y += ((-my * .35 + objBaseY) - objGroup.position.y) * .05;
  }
  pl1.intensity = 2.5 + Math.sin(t * 1.1) * .5;
  // Slowly drift particles
  particles1.rotation.y = t * 0.08;
  particles1.rotation.x = Math.sin(t * 0.15) * 0.1;
  particles2.rotation.y = -t * 0.06;
  particles2.rotation.z = Math.cos(t * 0.12) * 0.08;
  // Plexus constellation
  updatePlexus();
  renderer.render(scene, camera);
})();
