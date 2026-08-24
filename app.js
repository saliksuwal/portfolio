/* ===================================================================
   SALIK SUWAL - PORTFOLIO INTERACTIVE LOGIC & ENGINES (app.js)
   - Dynamic Canvas Particle Physics
   - Matrix Rain Overlay Engine
   - Web Audio API Sound Synthesizer
   - Interactive Cyber Terminal (CLI Drawer)
   - Dynamic Typing Effect
   - Project Filtering & Modal Previews
   - Theme Switching & Persistence
   - Contact Form Handling & Toast Notifications
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all subsystems
  initTheme();
  initSoundEngine();
  initBackgroundCanvas();
  initMatrixRain();
  initTypingEffect();
  renderDynamicData();
  initProjectFiltering();
  initTerminal();
  initContactForm();
  initMobileDrawer();
  initScrollAnimations();
  initLucideIcons();
});

/* ===================================================================
   1. THEME SWITCHER ENGINE
   =================================================================== */
let currentTheme = 'neon';

const THEME_COLORS = {
  neon: { particle: 'rgba(0, 240, 255, ', line: 'rgba(168, 85, 247, ' },
  space: { particle: 'rgba(217, 70, 239, ', line: 'rgba(139, 92, 246, ' },
  matrix: { particle: 'rgba(0, 255, 102, ', line: 'rgba(16, 185, 129, ' },
  minimal: { particle: 'rgba(56, 189, 248, ', line: 'rgba(148, 163, 184, ' }
};

function initTheme() {
  const savedTheme = localStorage.getItem('salik_portfolio_theme') || 'neon';
  setTheme(savedTheme, false);

  const themeSelector = document.getElementById('theme-select');
  if (themeSelector) {
    themeSelector.value = savedTheme;
    themeSelector.addEventListener('change', (e) => {
      setTheme(e.target.value, true);
      playSynthSound('blip');
    });
  }
}

function setTheme(themeName, showToast = true) {
  if (!THEME_COLORS[themeName]) themeName = 'neon';
  currentTheme = themeName;
  
  if (themeName === 'neon') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', themeName);
  }
  
  localStorage.setItem('salik_portfolio_theme', themeName);
  
  const themeSelector = document.getElementById('theme-select');
  if (themeSelector && themeSelector.value !== themeName) {
    themeSelector.value = themeName;
  }

  if (showToast) {
    showNotification(`🎨 Theme switched to: ${themeName.toUpperCase()}`);
  }
}

/* ===================================================================
   2. WEB AUDIO API SYNTHESIZER (Sci-Fi Sound FX Engine)
   =================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initSoundEngine() {
  const savedSound = localStorage.getItem('salik_portfolio_sound');
  soundEnabled = savedSound !== null ? savedSound === 'true' : true;
  updateSoundButtonUI();

  const toggleBtn = document.getElementById('sound-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem('salik_portfolio_sound', soundEnabled);
      updateSoundButtonUI();
      if (soundEnabled) {
        playSynthSound('powerup');
        showNotification('🔊 Cyber Sound Effects: ON');
      } else {
        showNotification('🔇 Sound Effects Muted');
      }
    });
  }

  // Add click sound effects to interactive buttons
  document.querySelectorAll('button, a, input, select, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (soundEnabled) playSynthSound('hover');
    });
  });
}

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSynthSound(type = 'click') {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(620, now + 0.04);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.08);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'blip') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'powerup') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.25);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'laser') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.18);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    } else if (type === 'matrix') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.linearRampToValueAtTime(800, now + 0.05);
      osc.frequency.linearRampToValueAtTime(400, now + 0.12);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  } catch (err) {
    // Graceful fallback if audio context is blocked
  }
}

function updateSoundButtonUI() {
  const icon = document.getElementById('sound-toggle-icon');
  const label = document.getElementById('sound-toggle-label');
  if (icon) {
    icon.setAttribute('data-lucide', soundEnabled ? 'volume-2' : 'volume-x');
  }
  if (label) {
    label.textContent = soundEnabled ? 'SFX: ON' : 'SFX: OFF';
  }
  initLucideIcons();
}

/* ===================================================================
   3. BACKGROUND PARTICLE COSMOS CANVAS ENGINE
   =================================================================== */
let particleSwarm = [];
let mousePos = { x: null, y: null, radius: 140 };

function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    particleSwarm = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 85);
    for (let i = 0; i < count; i++) {
      particleSwarm.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mousePos.x = null;
    mousePos.y = null;
  });

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const colors = THEME_COLORS[currentTheme] || THEME_COLORS.neon;

    for (let i = 0; i < particleSwarm.length; i++) {
      const p = particleSwarm[i];

      // Movement
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Mouse interaction
      if (mousePos.x !== null && mousePos.y !== null) {
        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mousePos.radius) {
          const force = (1 - dist / mousePos.radius) * 1.5;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `${colors.particle}${p.baseAlpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `${colors.particle}0.8)`;
      ctx.fill();

      // Connect lines
      for (let j = i + 1; j < particleSwarm.length; j++) {
        const p2 = particleSwarm[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.18;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `${colors.line}${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ===================================================================
   4. MATRIX DIGITAL RAIN ENGINE
   =================================================================== */
let matrixAnimationId = null;
let matrixActive = false;

function initMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const characters = "010101010101XYZSUWALCOMPUTERC++SYSTEMSアイウエオカキクケコサシスセソタチツテト";
  let columns = 0;
  let drops = [];

  function setupMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const fontSize = 16;
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }
  }

  window.addEventListener('resize', setupMatrix);
  setupMatrix();

  function drawMatrix() {
    ctx.fillStyle = 'rgba(3, 10, 6, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff66';
    ctx.font = '15px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(Math.floor(Math.random() * characters.length));
      const x = i * 16;
      const y = drops[i] * 16;

      ctx.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    matrixAnimationId = requestAnimationFrame(drawMatrix);
  }

  window.toggleMatrixRain = function(state) {
    matrixActive = state !== undefined ? state : !matrixActive;
    if (matrixActive) {
      canvas.classList.add('active');
      setupMatrix();
      if (!matrixAnimationId) drawMatrix();
      playSynthSound('matrix');
      showNotification('🟢 Matrix Digital Rain Activated. Click anywhere or type "matrix" to exit.');
    } else {
      canvas.classList.remove('active');
      if (matrixAnimationId) {
        cancelAnimationFrame(matrixAnimationId);
        matrixAnimationId = null;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      showNotification('Matrix Rain Deactivated.');
    }
  };

  canvas.addEventListener('click', () => {
    window.toggleMatrixRain(false);
  });
}

/* ===================================================================
   5. DYNAMIC TYPING EFFECT
   =================================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('dynamic-typing-text');
  if (!typingElement) return;

  const roles = [
    "Starting BE Computer Engineering 🎓",
    "Exploring C/C++ Systems & Memory Internals ⚡",
    "Algorithms & Data Structures Enthusiast 🧠",
    "Future Software Architect & Open Source Builder 🚀",
    "Bridging Low-Level Hardware to High-Level Code 💻"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ===================================================================
   6. RENDER DYNAMIC DATA (Skills, Roadmap, Projects, Lab)
   =================================================================== */
function renderDynamicData() {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  // Render Stats
  const statsContainer = document.getElementById('stats-grid');
  if (statsContainer) {
    statsContainer.innerHTML = PORTFOLIO_DATA.personal.stats.map(stat => `
      <div class="glass-card p-4 text-center">
        <div class="text-xl md:text-2xl font-bold font-mono gradient-text mb-1">${stat.value}</div>
        <div class="text-xs text-slate-400 font-mono">${stat.label}</div>
      </div>
    `).join('');
  }

  // Render Bio Paragraphs
  const bioContainer = document.getElementById('bio-paragraphs');
  if (bioContainer) {
    bioContainer.innerHTML = PORTFOLIO_DATA.personal.bio.map(p => `
      <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-3">${p}</p>
    `).join('');
  }

  // Render Skills
  renderSkillsSection();

  // Render Academic Roadmap
  renderRoadmapSection();

  // Render Projects
  renderProjectsGrid(PORTFOLIO_DATA.projects);

  // Render Lab Experiments
  renderLabSection();
}

function renderSkillsSection() {
  const container = document.getElementById('skills-categories-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills.categories.map(cat => `
    <div class="glass-card p-6 cyber-corner">
      <div class="flex items-center gap-3 mb-6 pb-3 border-b border-cyan-500/20">
        <div class="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
          <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
        </div>
        <h3 class="font-display text-lg font-bold tracking-wide text-white">${cat.name}</h3>
      </div>
      <div class="space-y-5">
        ${cat.items.map(item => `
          <div>
            <div class="flex justify-between items-center mb-1.5">
              <div class="flex items-center gap-2">
                <span class="font-mono text-sm font-semibold text-slate-200">${item.name}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">${item.badge}</span>
              </div>
              <span class="font-mono text-xs text-cyan-400 font-bold">${item.level}%</span>
            </div>
            <div class="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
              <div class="skill-bar-fill h-full rounded-full" style="width: ${item.level}%;"></div>
            </div>
            <p class="text-xs text-slate-400 mt-1">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderRoadmapSection() {
  const container = document.getElementById('roadmap-timeline-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.roadmap.map((phase, idx) => {
    const isEven = idx % 2 === 0;
    const isCurrent = phase.status === 'current';
    
    return `
      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8">
        <!-- Node Dot -->
        <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 ${isCurrent ? 'border-cyan-400 bg-cyan-500/20 shadow-[0_0_15px_rgba(0,240,255,0.6)]' : 'border-purple-400/40 bg-slate-900'} text-cyan-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
          <span class="font-mono text-xs font-bold">${idx + 1}</span>
        </div>
        
        <!-- Content Card -->
        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 relative">
          <div class="flex items-center justify-between mb-2">
            <span class="cyber-badge ${isCurrent ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/40' : 'cyber-badge-purple'}">
              ${phase.statusLabel}
            </span>
            <span class="text-xs font-mono text-slate-400">${phase.phase}</span>
          </div>
          
          <h4 class="font-display text-lg font-bold text-white mb-2">${phase.semester}</h4>
          
          <ul class="space-y-1.5 mb-4 text-xs md:text-sm text-slate-300">
            ${phase.topics.map(t => `
              <li class="flex items-start gap-2">
                <span class="text-cyan-400 font-mono">▸</span>
                <span>${t}</span>
              </li>
            `).join('')}
          </ul>
          
          <div class="pt-3 border-t border-slate-700/50 flex items-center gap-2 text-xs font-mono text-cyan-300">
            <i data-lucide="target" class="w-3.5 h-3.5 shrink-0 text-cyan-400"></i>
            <span><strong>Target:</strong> ${phase.goal}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderProjectsGrid(projects) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-400 font-mono">
        No projects match this category filter.
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(proj => `
    <div class="glass-card p-6 flex flex-col justify-between h-full group">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-mono px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">
            ${proj.category}
          </span>
          ${proj.featured ? '<span class="cyber-badge"><span class="pulse-dot"></span> Featured</span>' : ''}
        </div>
        
        <h3 class="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          ${proj.title}
        </h3>
        
        <p class="text-xs md:text-sm text-slate-300 mb-4 leading-relaxed line-clamp-3">
          ${proj.tagline}
        </p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${proj.technologies.map(tech => `
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300/90 border border-cyan-500/20">
              ${tech}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-700/50 flex items-center justify-between">
        <button onclick="openProjectModal('${proj.id}')" class="cyber-btn-secondary !py-1.5 !px-3 !text-xs">
          <i data-lucide="layers" class="w-3.5 h-3.5"></i>
          <span>Architecture & Demo</span>
        </button>
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-slate-800/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-700">
          <i data-lucide="github" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

function renderLabSection() {
  const container = document.getElementById('lab-experiments-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.labExperiments.map(exp => `
    <div class="glass-card lab-card p-6 flex flex-col justify-between h-full">
      <div>
        <div class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
          <i data-lucide="${exp.icon}" class="w-6 h-6"></i>
        </div>
        <h4 class="font-display text-lg font-bold text-white mb-2">${exp.title}</h4>
        <p class="text-xs md:text-sm text-slate-400 mb-6">${exp.description}</p>
      </div>
      <button onclick="runLabExperiment('${exp.id}')" class="cyber-btn-secondary w-full">
        <i data-lucide="play" class="w-4 h-4"></i>
        <span>${exp.actionLabel}</span>
      </button>
    </div>
  `).join('');
}

/* ===================================================================
   7. PROJECT FILTERING & MODAL ENGINE
   =================================================================== */
function initProjectFiltering() {
  const buttons = document.querySelectorAll('.project-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('cyber-btn-primary');
        b.classList.add('cyber-btn-secondary');
      });
      btn.classList.remove('cyber-btn-secondary');
      btn.classList.add('cyber-btn-primary');

      playSynthSound('click');
      const filter = btn.getAttribute('data-filter');

      if (filter === 'all') {
        renderProjectsGrid(PORTFOLIO_DATA.projects);
      } else {
        const filtered = PORTFOLIO_DATA.projects.filter(p => 
          p.category.toLowerCase().includes(filter.toLowerCase())
        );
        renderProjectsGrid(filtered);
      }
    });
  });
}

window.openProjectModal = function(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modalContainer = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  if (!modalContainer || !modalContent) return;

  playSynthSound('blip');

  modalContent.innerHTML = `
    <div class="flex items-start justify-between mb-4 border-b border-cyan-500/20 pb-4">
      <div>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-2 inline-block">
          ${proj.category}
        </span>
        <h3 class="font-display text-2xl font-bold text-white">${proj.title}</h3>
      </div>
      <button onclick="closeProjectModal()" class="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <p class="text-sm text-slate-300 mb-6 leading-relaxed">${proj.description}</p>

    <div class="grid grid-cols-3 gap-3 mb-6">
      ${Object.entries(proj.stats).map(([k, v]) => `
        <div class="glass-card p-3 text-center border-slate-700">
          <div class="text-xs text-slate-400 font-mono mb-1">${k}</div>
          <div class="text-sm md:text-base font-bold font-mono text-cyan-400">${v}</div>
        </div>
      `).join('')}
    </div>

    <h4 class="font-display text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">Key Engineering Highlights</h4>
    <ul class="space-y-2 mb-6 text-xs md:text-sm text-slate-300">
      ${proj.highlights.map(h => `
        <li class="flex items-start gap-2">
          <span class="text-cyan-400 font-mono">✔</span>
          <span>${h}</span>
        </li>
      `).join('')}
    </ul>

    <div class="flex flex-wrap gap-2 mb-6">
      ${proj.technologies.map(t => `
        <span class="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-cyan-500/30">
          ${t}
        </span>
      `).join('')}
    </div>

    <div class="flex items-center gap-3 pt-4 border-t border-slate-700/50">
      <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="cyber-btn-primary flex-1">
        <i data-lucide="github" class="w-4 h-4"></i>
        <span>View Source on GitHub</span>
      </a>
      <button onclick="closeProjectModal()" class="cyber-btn-secondary">
        <span>Close</span>
      </button>
    </div>
  `;

  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('flex');
  initLucideIcons();
};

window.closeProjectModal = function() {
  const modalContainer = document.getElementById('project-modal');
  if (modalContainer) {
    modalContainer.classList.add('hidden');
    modalContainer.classList.remove('flex');
    playSynthSound('click');
  }
};

/* ===================================================================
   8. INTERACTIVE LAB EXPERIMENTS RUNNER
   =================================================================== */
window.runLabExperiment = function(expId) {
  if (expId === 'matrix-rain') {
    window.toggleMatrixRain(true);
  } else if (expId === 'particle-gravity') {
    // Blast particles toward center
    playSynthSound('laser');
    if (particleSwarm.length > 0) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      particleSwarm.forEach(p => {
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        p.vx = (dx / 40) + (Math.random() - 0.5) * 5;
        p.vy = (dy / 40) + (Math.random() - 0.5) * 5;
      });
      showNotification('⚡ Gravitational particle pulse triggered!');
    }
  } else if (expId === 'synth-audio') {
    playSynthSound('powerup');
    showNotification('🎵 Sci-Fi frequency sweep generated via Web Audio API');
  }
};

/* ===================================================================
   9. INTERACTIVE CYBER TERMINAL EMULATOR (CLI)
   =================================================================== */
let commandHistory = [];
let historyIndex = -1;

function initTerminal() {
  const terminalInput = document.getElementById('terminal-input-cmd');
  const terminalBody = document.getElementById('terminal-output');
  const terminalModal = document.getElementById('terminal-modal');

  if (!terminalInput || !terminalBody) return;

  // Toggle terminal shortcut Ctrl+` or ~ or Ctrl+K
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key === 'k') || e.key === '`') {
      e.preventDefault();
      toggleTerminal();
    }
  });

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = terminalInput.value.trim();
      if (rawCmd) {
        commandHistory.push(rawCmd);
        historyIndex = commandHistory.length;
        processTerminalCommand(rawCmd);
        terminalInput.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      handleTabAutocomplete(terminalInput);
    }
  });
}

window.toggleTerminal = function(state) {
  const terminalModal = document.getElementById('terminal-modal');
  const terminalInput = document.getElementById('terminal-input-cmd');
  if (!terminalModal) return;

  const isHidden = terminalModal.classList.contains('hidden');
  const shouldOpen = state !== undefined ? state : isHidden;

  if (shouldOpen) {
    terminalModal.classList.remove('hidden');
    terminalModal.classList.add('flex');
    playSynthSound('powerup');
    if (terminalInput) {
      setTimeout(() => terminalInput.focus(), 100);
    }
  } else {
    terminalModal.classList.add('hidden');
    terminalModal.classList.remove('flex');
    playSynthSound('click');
  }
};

function processTerminalCommand(inputStr) {
  const terminalBody = document.getElementById('terminal-output');
  if (!terminalBody) return;

  playSynthSound('click');
  const parts = inputStr.toLowerCase().split(' ');
  const cmd = parts[0];
  const arg = parts[1];

  // Append user input line
  const userLine = document.createElement('div');
  userLine.className = 'flex items-center gap-2 text-cyan-400 font-mono mt-2';
  userLine.innerHTML = `<span class="text-purple-400">salik@portfolio:~$</span> <span>${escapeHTML(inputStr)}</span>`;
  terminalBody.appendChild(userLine);

  const responseLine = document.createElement('div');
  responseLine.className = 'text-slate-300 font-mono text-xs md:text-sm pl-4 border-l-2 border-cyan-500/30 my-1 space-y-1';

  switch (cmd) {
    case 'help':
      responseLine.innerHTML = `
        <div class="text-cyan-400 font-bold mb-1">Available Cyber Commands:</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 text-xs">
          ${PORTFOLIO_DATA.terminalHelp.map(h => `
            <div><span class="text-emerald-400 font-bold">${h.cmd}</span> - <span class="text-slate-400">${h.desc}</span></div>
          `).join('')}
        </div>
      `;
      break;

    case 'about':
      responseLine.innerHTML = `
        <div class="text-cyan-400 font-bold">${PORTFOLIO_DATA.personal.name}</div>
        <div class="text-purple-300 text-xs">${PORTFOLIO_DATA.personal.title}</div>
        <div class="text-slate-300 mt-2">${PORTFOLIO_DATA.personal.bio.join('<br><br>')}</div>
      `;
      break;

    case 'skills':
      responseLine.innerHTML = `
        <div class="text-cyan-400 font-bold mb-2">Technical Arsenal & Focus:</div>
        ${PORTFOLIO_DATA.skills.categories.map(c => `
          <div class="mb-2">
            <span class="text-purple-400 font-bold">[${c.name}]</span>: 
            <span class="text-slate-300">${c.items.map(i => `${i.name} (${i.level}%)`).join(', ')}</span>
          </div>
        `).join('')}
      `;
      break;

    case 'projects':
      responseLine.innerHTML = `
        <div class="text-cyan-400 font-bold mb-1">Engineering Projects:</div>
        ${PORTFOLIO_DATA.projects.map(p => `
          <div class="py-1">
            <span class="text-emerald-400 font-bold">⚡ ${p.title}</span><br>
            <span class="text-slate-400 text-xs">${p.tagline}</span><br>
            <span class="text-cyan-300 text-[11px]">Stack: ${p.technologies.join(', ')}</span>
          </div>
        `).join('')}
      `;
      break;

    case 'roadmap':
      responseLine.innerHTML = `
        <div class="text-cyan-400 font-bold mb-1">BE Computer 4-Year Roadmap:</div>
        ${PORTFOLIO_DATA.roadmap.map(r => `
          <div class="py-1">
            <span class="text-purple-400 font-bold">${r.semester} (${r.statusLabel})</span>:
            <span class="text-slate-300 text-xs">${r.topics.join(' • ')}</span>
          </div>
        `).join('')}
      `;
      break;

    case 'education':
      responseLine.innerHTML = `
        <div class="text-cyan-400 font-bold">Academic Status:</div>
        <div class="text-slate-200">Degree: Bachelor of Computer Engineering (BE Computer)</div>
        <div class="text-slate-300 text-xs">Status: Incoming First Year Undergraduate</div>
        <div class="text-slate-400 text-xs">Location: Nepal</div>
      `;
      break;

    case 'contact':
      responseLine.innerHTML = `
        <div class="text-cyan-400 font-bold">Contact & Social Channels:</div>
        <div class="text-slate-300">Email: <a href="mailto:${PORTFOLIO_DATA.personal.email}" class="text-cyan-400 underline">${PORTFOLIO_DATA.personal.email}</a></div>
        <div class="text-slate-300">GitHub: <a href="${PORTFOLIO_DATA.personal.github}" target="_blank" class="text-cyan-400 underline">${PORTFOLIO_DATA.personal.github}</a></div>
        <div class="text-slate-300">LinkedIn: <a href="${PORTFOLIO_DATA.personal.linkedin}" target="_blank" class="text-cyan-400 underline">${PORTFOLIO_DATA.personal.linkedin}</a></div>
        <div class="text-slate-300">Discord: <span class="text-emerald-400">${PORTFOLIO_DATA.personal.discord}</span></div>
      `;
      break;

    case 'theme':
      if (['neon', 'space', 'matrix', 'minimal'].includes(arg)) {
        setTheme(arg, true);
        responseLine.innerHTML = `<span class="text-emerald-400">Theme updated to: ${arg.toUpperCase()}</span>`;
      } else {
        responseLine.innerHTML = `<span class="text-yellow-400">Usage: theme &lt;neon | space | matrix | minimal&gt;</span>`;
      }
      break;

    case 'matrix':
      window.toggleMatrixRain();
      responseLine.innerHTML = `<span class="text-emerald-400">Matrix Rain mode toggled.</span>`;
      break;

    case 'sfx':
      soundEnabled = !soundEnabled;
      localStorage.setItem('salik_portfolio_sound', soundEnabled);
      updateSoundButtonUI();
      responseLine.innerHTML = `<span class="text-emerald-400">Sound effects: ${soundEnabled ? 'ON' : 'OFF'}</span>`;
      break;

    case 'sudo':
      if (arg === 'hire-me' || parts.slice(1).join(' ') === 'hire-me') {
        playSynthSound('powerup');
        responseLine.innerHTML = `
          <div class="text-emerald-400 font-bold">ACCESS GRANTED: Protocol "HIRE_SALIK" initiated! 🚀</div>
          <div class="text-slate-300 text-xs mt-1">Salik is super enthusiastic, disciplined, and eager to learn, build, and solve hard problems.</div>
          <div class="mt-2"><a href="mailto:${PORTFOLIO_DATA.personal.email}?subject=Collaboration%20or%20Opportunity%20with%20Salik" class="cyber-btn-primary !py-1 !px-3 !text-xs">Send Email Invite ✉️</a></div>
        `;
      } else {
        responseLine.innerHTML = `<span class="text-red-400">sudo: user 'guest' is not in the sudoers file. Try: sudo hire-me</span>`;
      }
      break;

    case 'clear':
      terminalBody.innerHTML = '';
      return;

    case 'exit':
      window.toggleTerminal(false);
      return;

    default:
      responseLine.innerHTML = `<span class="text-red-400">Command not recognized: "${escapeHTML(cmd)}". Type <span class="text-cyan-400 font-bold">help</span> to view available commands.</span>`;
      break;
  }

  terminalBody.appendChild(responseLine);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function handleTabAutocomplete(inputElement) {
  const val = inputElement.value.trim().toLowerCase();
  const validCommands = PORTFOLIO_DATA.terminalHelp.map(h => h.cmd.split(' ')[0]);
  const match = validCommands.find(c => c.startsWith(val));
  if (match) {
    inputElement.value = match;
    playSynthSound('hover');
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* ===================================================================
   10. CONTACT FORM & TOAST NOTIFICATION SYSTEM
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    playSynthSound('powerup');

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (!name || !email || !message) {
      showNotification('⚠️ Please complete all fields before sending.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> <span>Transmitting...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();
      initLucideIcons();

      showNotification(`🚀 Message transmitted! Thank you, ${name}. Salik will respond shortly.`);
      
      // Also open prefilled email fallback
      const mailtoLink = `mailto:${PORTFOLIO_DATA.personal.email}?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
      window.location.href = mailtoLink;
    }, 900);
  });

  // Copy email button
  window.copyEmailToClipboard = function() {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email).then(() => {
      playSynthSound('blip');
      showNotification('📋 Email copied to clipboard: ' + PORTFOLIO_DATA.personal.email);
    }).catch(() => {
      showNotification('Email: ' + PORTFOLIO_DATA.personal.email);
    });
  };
}

function showNotification(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4 text-cyan-400"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  initLucideIcons();

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ===================================================================
   11. MOBILE DRAWER & SCROLL ANIMATIONS
   =================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      playSynthSound('click');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      playSynthSound('click');
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (drawer) drawer.classList.remove('open');
    });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-6');
    observer.observe(sec);
  });
}

function initLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}
