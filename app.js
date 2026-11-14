// ============================================================================
// EGYETEMI FÜGGVÉNYTÁBLÁZAT & TANULÓ WEBAPP – LOGIKA (app.js)
// ============================================================================

(function () {
  'use strict';

  const FORMULAS = window.FORMULA_DATA || [];
  const PRACTICE_PROBLEMS = window.PRACTICE_PROBLEMS || [];
  const EXTRA_QUIZ = window.EXTRA_QUIZ_QUESTIONS || [];

  // --- Persistent State in localStorage ---
  const STORAGE_KEY = 'fuggvenytablazat_state_v1';
  let userState = {
    theme: 'light',
    mastery: {}, // id -> 'learning' | 'mastered'
    favorites: {} // id -> boolean
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        userState = Object.assign(userState, parsed);
      }
    } catch (e) {
      console.warn('localStorage betöltési hiba:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
    } catch (e) {
      console.warn('localStorage mentési hiba:', e);
    }
    updateGlobalProgressUI();
  }

  // --- Active UI State ---
  let currentMode = 'table'; // 'table' | 'flashcards' | 'matching' | 'quiz' | 'practice'
  let activeCourse = 'all';  // 'all' | 'vsz' | 'pke' | 'dt'
  let activeCategory = 'all';
  let activeStatus = 'all';  // 'all' | 'fav' | 'learning' | 'mastered' | 'unseen'
  let searchQuery = '';
  let isCompactView = false;

  // --- Flashcard State ---
  let fcDeck = [];
  let fcIndex = 0;
  let fcDirection = 'name-to-formula'; // 'name-to-formula' | 'formula-to-name'
  let fcFilterStatus = 'all';

  // --- Matching Game State ---
  let matchPairs = [];
  let selectedLeftId = null;
  let selectedRightId = null;
  let matchedIds = new Set();
  let matchMistakes = 0;

  // --- Quiz State ---
  let quizQuestions = [];
  let quizIndex = 0;
  let quizScore = 0;
  let quizAnswered = false;
  let quizCountSetting = 10;
  let quizTypeSetting = 'mixed'; // 'mixed' | 'formula' | 'meaning' | 'exam'
  let quizMistakes = [];

  // --- Practice Calculator State ---
  let activeProblemIndex = 0;
  let activeProblemVariantScale = 1.0;

  // ============================================================================
  // KATEX RENDERING HELPER
  // ============================================================================

  function renderLatexToHtml(latexStr, displayMode = true) {
    if (!latexStr) return '';
    if (window.katex) {
      try {
        return window.katex.renderToString(latexStr, {
          displayMode: displayMode,
          throwOnError: false,
          strict: false
        });
      } catch (err) {
        console.warn('KaTeX hiba:', err, latexStr);
      }
    }
    return `<code>${escapeHtml(latexStr)}</code>`;
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getCourseBadgeClass(course) {
    if (course === 'vsz') return 'vsz';
    if (course === 'pke') return 'pke';
    if (course === 'dt') return 'dt';
    return 'all';
  }

  function getCourseShortLabel(course) {
    if (course === 'vsz') return 'Vezetői számvitel';
    if (course === 'pke') return 'Pénzügyi kimutatások elemzése';
    if (course === 'dt') return 'Döntéstámogatás';
    return 'Összes tantárgy';
  }

  // ============================================================================
  // INITIALIZATION & GLOBAL PROGRESS
  // ============================================================================

  let deferredInstallPrompt = null;

  function init() {
    loadState();
    applyTheme(userState.theme);
    bindHeaderEvents();
    bindCourseSummaryEvents();
    bindToolbarEvents();
    updateCourseCounts();
    updateGlobalProgressUI();
    populateCategoryDropdown();
    try { renderTableMode(); } catch (e) { console.error(e); }
    try { initFlashcards(); } catch (e) { console.error(e); }
    try { initMatchingGame(); } catch (e) { console.error(e); }
    try { initQuiz(); } catch (e) { console.error(e); }
    try { initPracticeMode(); } catch (e) { console.error(e); }
    bindKeyboardShortcuts();
    initPWA();

    // Restore mode from URL hash if present
    const hashMode = (window.location.hash || '').replace('#', '');
    if (['table', 'flashcards', 'matching', 'quiz', 'practice'].includes(hashMode)) {
      switchMode(hashMode, false);
    }
  }

  function initPWA() {
    // Register Service Worker for offline mode
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => {
          console.warn('Service Worker regisztráció sikertelen:', err);
        });
      });
    }

    // Hide install button if already running as installed standalone app
    const installBtn = document.getElementById('install-pwa-btn');
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      if (installBtn) installBtn.style.display = 'none';
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      if (installBtn) {
        installBtn.style.display = 'inline-flex';
      }
    });

    window.addEventListener('appinstalled', () => {
      deferredInstallPrompt = null;
      if (installBtn) installBtn.style.display = 'none';
    });
  }

  async function installPWA() {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      try {
        await deferredInstallPrompt.userChoice;
      } catch (e) {}
      deferredInstallPrompt = null;
      return;
    }
    const modal = document.getElementById('pwa-install-modal');
    if (modal) {
      modal.style.display = 'flex';
    }
  }

  function applyTheme(theme) {
    userState.theme = theme;
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '☀️ Világos' : '🌙 Sötét';
    }
    const metaTheme = document.getElementById('meta-theme-color');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#0E1014' : '#16181D');
    }
  }

  function toggleTheme() {
    const next = userState.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    saveState();
  }

  function printTable() {
    if (currentMode !== 'table') {
      switchMode('table', false);
    }
    setTimeout(() => window.print(), 150);
  }

  function updateCourseCounts() {
    const total = FORMULAS.length;
    const vszCount = FORMULAS.filter(f => f.course === 'vsz').length;
    const pkeCount = FORMULAS.filter(f => f.course === 'pke').length;
    const dtCount = FORMULAS.filter(f => f.course === 'dt').length;

    const elAll = document.getElementById('count-all');
    const elVsz = document.getElementById('count-vsz');
    const elPke = document.getElementById('count-pke');
    const elDt = document.getElementById('count-dt');

    if (elAll) elAll.textContent = `${total} képlet`;
    if (elVsz) elVsz.textContent = `${vszCount} képlet`;
    if (elPke) elPke.textContent = `${pkeCount} képlet`;
    if (elDt) elDt.textContent = `${dtCount} képlet`;
  }

  function updateGlobalProgressUI() {
    const total = FORMULAS.length;
    let masteredCount = 0;
    let learningCount = 0;

    FORMULAS.forEach(f => {
      const st = userState.mastery[f.id];
      if (st === 'mastered') masteredCount++;
      else if (st === 'learning') learningCount++;
    });

    const pct = total > 0 ? Math.round((masteredCount / total) * 100) : 0;
    const textEl = document.getElementById('global-progress-text');
    const fillEl = document.getElementById('global-progress-fill');

    if (textEl) {
      textEl.textContent = `${masteredCount}/${total} megtanulva (${pct}%)`;
    }
    if (fillEl) {
      fillEl.style.width = `${pct}%`;
    }
  }

  // ============================================================================
  // NAVIGATION & FILTER EVENTS
  // ============================================================================

  function bindHeaderEvents() {
    // Expose global handlers for inline onclick attributes in index.html
    window.switchAppMode = function (mode) {
      switchMode(mode, true);
    };
    window.selectAppCourse = function (course) {
      selectCourse(course);
    };
    window.toggleAppTheme = toggleTheme;
    window.printAppTable = printTable;
    window.installAppPWA = installPWA;
  }

  function switchMode(mode, shouldScroll = true) {
    if (!mode) return;
    currentMode = mode;

    document.querySelectorAll('.mode-btn').forEach(b => {
      const isMatch = b.getAttribute('data-mode') === mode;
      b.classList.toggle('active', isMatch);
      b.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    // Collapse course cards into compact single-line bar in study modes so content is immediately visible
    const courseGrid = document.getElementById('course-summary-grid');
    if (courseGrid) {
      courseGrid.classList.toggle('compact-bar', mode !== 'table');
    }

    const sections = ['table', 'flashcards', 'matching', 'quiz', 'practice'];
    sections.forEach(s => {
      const el = document.getElementById(`mode-${s}`);
      if (el) {
        el.style.display = s === mode ? 'block' : 'none';
      }
    });

    try {
      if (mode === 'table') renderTableMode();
      if (mode === 'flashcards') initFlashcards();
      if (mode === 'matching') initMatchingGame();
      if (mode === 'quiz' && quizQuestions.length === 0) initQuiz();
      if (mode === 'practice') {
        renderPracticeNav();
        renderPracticeWorkspace();
      }
    } catch (err) {
      console.error('Hiba a mód váltásakor:', err);
    }

    try {
      history.replaceState(null, '', '#' + mode);
    } catch (e) {}

    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function selectCourse(c) {
    if (!c) return;
    activeCourse = c;
    activeCategory = 'all';

    document.querySelectorAll('.course-stat-card').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-course') === c);
    });

    populateCategoryDropdown();
    if (currentMode === 'table') renderTableMode();
    if (currentMode === 'flashcards') initFlashcards();
    if (currentMode === 'matching') initMatchingGame();
    if (currentMode === 'quiz') initQuiz();
    if (currentMode === 'practice') {
      activeProblemIndex = 0;
      renderPracticeNav();
      renderPracticeWorkspace();
    }
  }

  function bindCourseSummaryEvents() {
    // Handled via window.selectAppCourse
  }

  function populateCategoryDropdown() {
    const select = document.getElementById('category-select');
    if (!select) return;

    const relevant = activeCourse === 'all'
      ? FORMULAS
      : FORMULAS.filter(f => f.course === activeCourse);

    const categories = [];
    relevant.forEach(f => {
      if (!categories.includes(f.category)) {
        categories.push(f.category);
      }
    });

    select.innerHTML = `<option value="all">Összes témakör (${categories.length})</option>` +
      categories.map(cat => `<option value="${escapeHtml(cat)}">${escapeHtml(cat)}</option>`).join('');
    select.value = activeCategory;
  }

  function bindToolbarEvents() {
    const searchInput = document.getElementById('formula-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderTableMode();
      });
    }

    const catSelect = document.getElementById('category-select');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        activeCategory = e.target.value;
        renderTableMode();
      });
    }

    document.querySelectorAll('.status-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        activeStatus = chip.getAttribute('data-status');
        document.querySelectorAll('.status-chip').forEach(c => {
          c.classList.toggle('active', c.getAttribute('data-status') === activeStatus);
        });
        renderTableMode();
      });
    });

    const viewToggleBtn = document.getElementById('compact-toggle-btn');
    if (viewToggleBtn) {
      viewToggleBtn.addEventListener('click', () => {
        isCompactView = !isCompactView;
        viewToggleBtn.textContent = isCompactView ? '📑 Részletes nézet' : '🗂️ Kompakt nézet';
        renderTableMode();
      });
    }
  }

  // ============================================================================
  // MODE 1: FÜGGVÉNYTÁBLÁZAT (FORMULA REFERENCE TABLE)
  // ============================================================================

  function getFilteredFormulas() {
    return FORMULAS.filter(f => {
      if (activeCourse !== 'all' && f.course !== activeCourse) return false;
      if (activeCategory !== 'all' && f.category !== activeCategory) return false;

      if (activeStatus === 'fav' && !userState.favorites[f.id]) return false;
      if (activeStatus === 'learning' && userState.mastery[f.id] !== 'learning') return false;
      if (activeStatus === 'mastered' && userState.mastery[f.id] !== 'mastered') return false;
      if (activeStatus === 'unseen' && userState.mastery[f.id]) return false;

      if (searchQuery) {
        const haystack = [
          f.id,
          f.name,
          f.courseName,
          f.category,
          f.source,
          f.latex,
          (f.altLatex || []).join(' '),
          f.whatIsIt,
          f.whatWeCalculate,
          f.whyAndHow,
          f.benchmark,
          f.excelFormula,
          (f.variables || []).map(v => `${v.sym} ${v.desc}`).join(' ')
        ].join(' ').toLowerCase();

        if (!haystack.includes(searchQuery)) return false;
      }
      return true;
    });
  }

  function renderTableMode() {
    const container = document.getElementById('formula-table-container');
    const resultMeta = document.getElementById('search-result-meta');
    if (!container) return;

    const filtered = getFilteredFormulas();
    if (resultMeta) {
      resultMeta.textContent = `${filtered.length} képlet megjelenítve a(z) ${FORMULAS.length}-ből`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="formula-card" style="text-align:center; padding: 3rem 1.5rem;">
          <h3 style="margin-bottom:0.5rem;">Nincs a szűrésnek megfelelő képlet</h3>
          <p style="color:var(--text-muted); margin-bottom:1rem;">Próbálj más keresőszót, vagy állítsd vissza a szűrőket az „Összes” opcióra.</p>
          <button class="icon-btn" id="reset-filters-btn">Szűrők visszaállítása</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCourse = 'all';
          activeCategory = 'all';
          activeStatus = 'all';
          searchQuery = '';
          const sInput = document.getElementById('formula-search');
          if (sInput) sInput.value = '';
          document.querySelectorAll('.course-stat-card').forEach(el => {
            el.classList.toggle('active', el.getAttribute('data-course') === 'all');
          });
          document.querySelectorAll('.status-chip').forEach(c => {
            c.classList.toggle('active', c.getAttribute('data-status') === 'all');
          });
          populateCategoryDropdown();
          renderTableMode();
        });
      }
      return;
    }

    // Group by category
    const grouped = new Map();
    filtered.forEach(f => {
      const key = `${f.course.toUpperCase()} — ${f.category}`;
      if (!grouped.has(key)) {
        grouped.set(key, { course: f.course, courseName: f.courseName, category: f.category, items: [] });
      }
      grouped.get(key).items.push(f);
    });

    let html = '';
    grouped.forEach(group => {
      html += `
        <section class="category-section">
          <div class="category-header">
            <div>
              <span class="course-tag ${getCourseBadgeClass(group.course)}" style="margin-right:0.5rem;">${escapeHtml(group.courseName)}</span>
              <span class="category-title">${escapeHtml(group.category)}</span>
            </div>
            <span class="category-count">${group.items.length} képlet</span>
          </div>
          <div class="formula-grid ${isCompactView ? 'compact-view' : ''}">
            ${group.items.map(f => renderFormulaCardHTML(f)).join('')}
          </div>
        </section>
      `;
    });

    container.innerHTML = html;

    // Bind card interactive buttons (favorite, learning, mastered)
    container.querySelectorAll('[data-action="toggle-fav"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        userState.favorites[id] = !userState.favorites[id];
        saveState();
        renderTableMode();
      });
    });

    container.querySelectorAll('[data-action="set-mastery"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const level = btn.getAttribute('data-level');
        if (userState.mastery[id] === level) {
          delete userState.mastery[id];
        } else {
          userState.mastery[id] = level;
        }
        saveState();
        renderTableMode();
      });
    });
  }

  function renderFormulaCardHTML(f) {
    const st = userState.mastery[f.id] || '';
    const isFav = !!userState.favorites[f.id];

    const primaryMath = renderLatexToHtml(f.latex, true);
    const altMathHtml = (f.altLatex && f.altLatex.length > 0)
      ? `<div class="math-alt-list">${f.altLatex.map(alt => `<div>${renderLatexToHtml(alt, false)}</div>`).join('')}</div>`
      : '';

    const varsHtml = (f.variables || []).map(v => `
      <div class="var-item">
        <span class="var-sym">${escapeHtml(v.sym)}</span>
        <span class="var-desc">${escapeHtml(v.desc)}</span>
        ${v.unit && v.unit !== '-' ? `<span class="var-unit">[${escapeHtml(v.unit)}]</span>` : ''}
      </div>
    `).join('');

    return `
      <article class="formula-card ${st}" id="card-${escapeHtml(f.id)}">
        <div class="card-top-bar">
          <div class="card-meta-left">
            <span class="course-tag ${getCourseBadgeClass(f.course)}">${escapeHtml(f.courseName)}</span>
            <span class="formula-id-badge">${escapeHtml(f.id.toUpperCase())}</span>
            <span class="formula-source">📍 ${escapeHtml(f.source || '')}</span>
          </div>
          <div class="card-actions-right">
            <button class="mastery-btn ${st === 'learning' ? 'active-learning' : ''}" data-action="set-mastery" data-id="${escapeHtml(f.id)}" data-level="learning" title="Még gyakorlom">⏳ Tanulom</button>
            <button class="mastery-btn ${st === 'mastered' ? 'active-mastered' : ''}" data-action="set-mastery" data-id="${escapeHtml(f.id)}" data-level="mastered" title="Megtanultam">✓ Tudom</button>
            <button class="fav-btn ${isFav ? 'active' : ''}" data-action="toggle-fav" data-id="${escapeHtml(f.id)}" title="Kedvenc">${isFav ? '★' : '☆'}</button>
          </div>
        </div>

        <h3 class="formula-title">${escapeHtml(f.name)}</h3>

        <div class="math-box">
          <div class="math-primary">${primaryMath}</div>
          ${altMathHtml}
        </div>

        <div class="explanation-pillars">
          <div class="pillar-box what-is">
            <div class="pillar-label">📌 Mi ez?</div>
            <div class="pillar-text">${escapeHtml(f.whatIsIt)}</div>
          </div>
          <div class="pillar-box what-calc">
            <div class="pillar-label">🧮 Mit számolunk?</div>
            <div class="pillar-text">${escapeHtml(f.whatWeCalculate)}</div>
          </div>
          <div class="pillar-box why-how">
            <div class="pillar-label">💡 Miért és hogyan értelmezzük?</div>
            <div class="pillar-text">${escapeHtml(f.whyAndHow)}</div>
          </div>
        </div>

        <div class="card-details-grid">
          <div class="vars-list">
            <strong style="font-size:0.74rem; text-transform:uppercase; letter-spacing:0.04em; color:var(--text-muted); margin-bottom:0.2rem;">Jelölések és változók</strong>
            ${varsHtml}
          </div>
          <div class="meta-side-box">
            ${f.benchmark ? `
              <div class="benchmark-box">
                <strong>🎯 Irányadó érték / Szabály</strong>
                ${escapeHtml(f.benchmark)}
              </div>
            ` : ''}
            ${f.excelFormula ? `
              <div class="excel-box" title="Gyakorlati Excel képlet">
                <strong>📊 Excel:</strong> ${escapeHtml(f.excelFormula)}
              </div>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }

  // ============================================================================
  // MODE 2: TANULÓKÁRTYÁK (3D FLASHCARDS WITH SPACED REPETITION)
  // ============================================================================

  function initFlashcards() {
    fcDeck = FORMULAS.filter(f => {
      if (activeCourse !== 'all' && f.course !== activeCourse) return false;
      if (fcFilterStatus === 'unmastered' && userState.mastery[f.id] === 'mastered') return false;
      if (fcFilterStatus === 'fav' && !userState.favorites[f.id]) return false;
      return true;
    });

    if (fcDeck.length === 0) {
      fcDeck = activeCourse === 'all' ? [...FORMULAS] : FORMULAS.filter(f => f.course === activeCourse);
    }

    fcIndex = 0;
    renderFlashcardUI();
  }

  function renderFlashcardUI() {
    const container = document.getElementById('flashcard-mount');
    if (!container) return;

    if (fcDeck.length === 0) {
      container.innerHTML = `<div class="formula-card">Nincs kártya ebben a szűrésben.</div>`;
      return;
    }

    if (fcIndex >= fcDeck.length) fcIndex = 0;
    if (fcIndex < 0) fcIndex = fcDeck.length - 1;

    const card = fcDeck[fcIndex];
    const st = userState.mastery[card.id] || 'unseen';
    const statusBadge = st === 'mastered' ? '✓ Megtanultam' : (st === 'learning' ? '⏳ Még tanulom' : 'Új kártya');

    const frontContent = fcDirection === 'name-to-formula'
      ? `
        <div class="fc-prompt-label">MONDJA FEL VAGY ÍRJA FEL A KÉPLETET!</div>
        <div class="fc-question-title">${escapeHtml(card.name)}</div>
        <div class="fc-hint"><strong>Mi ez?</strong> ${escapeHtml(card.whatIsIt)}</div>
      `
      : `
        <div class="fc-prompt-label">MELYIK MUTATÓ / MODELL KÉPLETÉT LÁTJA?</div>
        <div class="math-box" style="margin:1rem 0;">${renderLatexToHtml(card.latex, true)}</div>
        <div class="fc-hint">Mit számolunk vele, és hogyan értelmezzük?</div>
      `;

    const backContent = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.65rem;">
          <span class="course-tag ${getCourseBadgeClass(card.course)}">${escapeHtml(card.courseName)}</span>
          <span class="formula-id-badge">${escapeHtml(card.category)}</span>
        </div>
        <h3 style="font-size:1.15rem; margin-bottom:0.75rem;">${escapeHtml(card.name)}</h3>
        <div class="math-box" style="margin-bottom:0.85rem;">
          <div class="math-primary">${renderLatexToHtml(card.latex, true)}</div>
          ${(card.altLatex || []).map(a => `<div style="margin-top:0.4rem; font-size:0.88rem;">${renderLatexToHtml(a, false)}</div>`).join('')}
        </div>
        <div style="display:grid; gap:0.55rem; font-size:0.85rem; text-align:left;">
          <div class="pillar-box what-calc" style="padding:0.65rem 0.85rem;">
            <strong>🧮 Mit számolunk?</strong> ${escapeHtml(card.whatWeCalculate)}
          </div>
          <div class="pillar-box why-how" style="padding:0.65rem 0.85rem;">
            <strong>💡 Miért és hogyan értelmezzük?</strong> ${escapeHtml(card.whyAndHow)}
          </div>
          ${card.benchmark ? `<div class="benchmark-box"><strong>🎯 Benchmark:</strong> ${escapeHtml(card.benchmark)}</div>` : ''}
        </div>
      </div>
    `;

    container.innerHTML = `
      <div class="study-controls-bar">
        <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          <select id="fc-filter-select" class="select-input">
            <option value="all" ${fcFilterStatus === 'all' ? 'selected' : ''}>Összes kártya (${fcDeck.length})</option>
            <option value="unmastered" ${fcFilterStatus === 'unmastered' ? 'selected' : ''}>Csak a még nem tudott kártyák</option>
            <option value="fav" ${fcFilterStatus === 'fav' ? 'selected' : ''}>Csak a ★ Kedvencek</option>
          </select>
          <select id="fc-dir-select" class="select-input">
            <option value="name-to-formula" ${fcDirection === 'name-to-formula' ? 'selected' : ''}>Irány: Fogalom ➔ Képlet</option>
            <option value="formula-to-name" ${fcDirection === 'formula-to-name' ? 'selected' : ''}>Irány: Képlet ➔ Fogalom</option>
          </select>
          <button class="icon-btn" id="fc-shuffle-btn">🔀 Keverés</button>
        </div>
        <div style="font-family:var(--font-mono); font-size:0.85rem; font-weight:700;">
          ${fcIndex + 1} / ${fcDeck.length} • <span style="color:var(--text-muted);">${statusBadge}</span>
        </div>
      </div>

      <div class="flashcard-stage">
        <div class="flashcard-3d" id="fc-3d-card">
          <div class="fc-face fc-front">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="course-tag ${getCourseBadgeClass(card.course)}">${escapeHtml(card.courseName)}</span>
              <span class="formula-id-badge">${escapeHtml(card.id.toUpperCase())}</span>
            </div>
            <div class="fc-center">
              ${frontContent}
            </div>
            <div class="fc-footer-tip">Kattints a kártyára vagy nyomd meg a <strong>Szóköz (Space)</strong> billentyűt a megfordításhoz!</div>
          </div>
          <div class="fc-face fc-back">
            ${backContent}
            <div class="fc-footer-tip" style="margin-top:0.75rem;">Értékeld a tudásod alul az <strong>1, 2, 3</strong> gombokkal!</div>
          </div>
        </div>
      </div>

      <div class="fc-rating-bar">
        <button class="rate-btn hard" id="fc-rate-hard">
          <span>1 • Még gyakorlom</span>
          <span class="sub">Nem jutott eszembe</span>
        </button>
        <button class="rate-btn good" id="fc-rate-good">
          <span>2 • Bizonytalan</span>
          <span class="sub">Részben tudtam</span>
        </button>
        <button class="rate-btn easy" id="fc-rate-easy">
          <span>3 • Megtanultam!</span>
          <span class="sub">Hibátlanul ment</span>
        </button>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button class="icon-btn" id="fc-prev-btn">← Előző kártya</button>
        <span style="font-size:0.78rem; color:var(--text-muted);">Billentyűk: Space (fordít) • ←/→ (léptet) • 1/2/3 (értékel)</span>
        <button class="icon-btn" id="fc-next-btn">Következő kártya →</button>
      </div>
    `;

    const card3d = document.getElementById('fc-3d-card');
    if (card3d) {
      card3d.addEventListener('click', () => {
        card3d.classList.toggle('flipped');
      });
    }

    document.getElementById('fc-filter-select').addEventListener('change', (e) => {
      fcFilterStatus = e.target.value;
      initFlashcards();
    });

    document.getElementById('fc-dir-select').addEventListener('change', (e) => {
      fcDirection = e.target.value;
      renderFlashcardUI();
    });

    document.getElementById('fc-shuffle-btn').addEventListener('click', () => {
      fcDeck.sort(() => Math.random() - 0.5);
      fcIndex = 0;
      renderFlashcardUI();
    });

    document.getElementById('fc-prev-btn').addEventListener('click', () => {
      fcIndex--;
      renderFlashcardUI();
    });

    document.getElementById('fc-next-btn').addEventListener('click', () => {
      fcIndex++;
      renderFlashcardUI();
    });

    document.getElementById('fc-rate-hard').addEventListener('click', () => {
      userState.mastery[card.id] = 'learning';
      saveState();
      fcIndex++;
      renderFlashcardUI();
    });

    document.getElementById('fc-rate-good').addEventListener('click', () => {
      userState.mastery[card.id] = 'learning';
      saveState();
      fcIndex++;
      renderFlashcardUI();
    });

    document.getElementById('fc-rate-easy').addEventListener('click', () => {
      userState.mastery[card.id] = 'mastered';
      saveState();
      fcIndex++;
      renderFlashcardUI();
    });
  }

  function bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
      if (currentMode !== 'flashcards') return;

      const card3d = document.getElementById('fc-3d-card');
      if (e.code === 'Space') {
        e.preventDefault();
        if (card3d) card3d.classList.toggle('flipped');
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        fcIndex++;
        renderFlashcardUI();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        fcIndex--;
        renderFlashcardUI();
      } else if (e.key === '1') {
        const btn = document.getElementById('fc-rate-hard');
        if (btn) btn.click();
      } else if (e.key === '2') {
        const btn = document.getElementById('fc-rate-good');
        if (btn) btn.click();
      } else if (e.key === '3') {
        const btn = document.getElementById('fc-rate-easy');
        if (btn) btn.click();
      }
    });
  }

  // ============================================================================
  // MODE 3: KÉPLETPÁROSÍTÓ (ACTIVE RECALL MATCHING)
  // ============================================================================

  function initMatchingGame() {
    const pool = activeCourse === 'all'
      ? [...FORMULAS]
      : FORMULAS.filter(f => f.course === activeCourse);

    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 6);
    matchPairs = shuffled;
    selectedLeftId = null;
    selectedRightId = null;
    matchedIds = new Set();
    matchMistakes = 0;

    renderMatchingUI();
  }

  function renderMatchingUI() {
    const mount = document.getElementById('matching-mount');
    if (!mount) return;

    // Keep deterministic shuffled order for right column if not yet stored
    if (!mount._rightOrder || mount._rightOrder.length !== matchPairs.length || matchedIds.size === 0) {
      mount._rightOrder = [...matchPairs].sort(() => Math.random() - 0.5);
    }
    const rightItems = mount._rightOrder;

    const allDone = matchedIds.size === matchPairs.length && matchPairs.length > 0;

    mount.innerHTML = `
      <div class="study-controls-bar">
        <div>
          <strong>🧩 Képletpárosító kihívás (${escapeHtml(getCourseShortLabel(activeCourse))})</strong>
          <p style="font-size:0.8rem; color:var(--text-muted);">Kattints egy mutató nevére a bal oszlopban, majd a hozzá tartozó képletre a jobb oszlopban!</p>
        </div>
        <div style="display:flex; align-items:center; gap:0.8rem;">
          <span style="font-family:var(--font-mono); font-size:0.85rem;">Párosítva: <strong>${matchedIds.size}/${matchPairs.length}</strong> • Hibák: <strong>${matchMistakes}</strong></span>
          <button class="icon-btn" id="new-match-round-btn">🔄 Új 6-os leosztás</button>
        </div>
      </div>

      ${allDone ? `
        <div class="formula-card" style="text-align:center; padding:2rem; margin-bottom:1.25rem; border-color:var(--status-success);">
          <h3 style="color:var(--status-success); margin-bottom:0.5rem;">🎉 Gratulálok! Minden képletet sikeresen párosítottál!</h3>
          <p style="color:var(--text-secondary); margin-bottom:1rem;">Hibák száma ebben a körben: <strong>${matchMistakes}</strong></p>
          <button class="icon-btn" id="play-again-match-btn">Következő forduló indítása →</button>
        </div>
      ` : ''}

      <div class="matching-grid">
        <div class="match-col">
          <div class="match-col-title">1. Fogalom és Mit számolunk</div>
          ${matchPairs.map(item => {
            const isMatched = matchedIds.has(item.id);
            const isSelected = selectedLeftId === item.id;
            return `
              <div class="match-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" data-side="left" data-id="${escapeHtml(item.id)}">
                <div>
                  <div style="display:flex; gap:0.4rem; align-items:center; margin-bottom:0.25rem;">
                    <span class="course-tag ${getCourseBadgeClass(item.course)}">${escapeHtml(item.course.toUpperCase())}</span>
                    <strong style="font-size:0.9rem;">${escapeHtml(item.name)}</strong>
                  </div>
                  <div style="font-size:0.78rem; color:var(--text-secondary);">${escapeHtml(item.whatIsIt)}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="match-col">
          <div class="match-col-title">2. Matematikai képlet</div>
          ${rightItems.map(item => {
            const isMatched = matchedIds.has(item.id);
            const isSelected = selectedRightId === item.id;
            return `
              <div class="match-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" data-side="right" data-id="${escapeHtml(item.id)}" style="justify-content:center; overflow-x:auto;">
                <div>${renderLatexToHtml(item.latex, false)}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    const newBtn = document.getElementById('new-match-round-btn');
    if (newBtn) newBtn.addEventListener('click', () => { mount._rightOrder = null; initMatchingGame(); });

    const againBtn = document.getElementById('play-again-match-btn');
    if (againBtn) againBtn.addEventListener('click', () => { mount._rightOrder = null; initMatchingGame(); });

    mount.querySelectorAll('.match-card').forEach(cardEl => {
      cardEl.addEventListener('click', () => {
        const id = cardEl.getAttribute('data-id');
        const side = cardEl.getAttribute('data-side');
        if (matchedIds.has(id)) return;

        if (side === 'left') {
          selectedLeftId = selectedLeftId === id ? null : id;
        } else {
          selectedRightId = selectedRightId === id ? null : id;
        }

        if (selectedLeftId && selectedRightId) {
          if (selectedLeftId === selectedRightId) {
            matchedIds.add(selectedLeftId);
            userState.mastery[selectedLeftId] = 'mastered';
            saveState();
            selectedLeftId = null;
            selectedRightId = null;
            renderMatchingUI();
          } else {
            matchMistakes++;
            renderMatchingUI();
            const leftDom = mount.querySelector(`.match-card[data-side="left"][data-id="${selectedLeftId}"]`);
            const rightDom = mount.querySelector(`.match-card[data-side="right"][data-id="${selectedRightId}"]`);
            if (leftDom) leftDom.classList.add('wrong');
            if (rightDom) rightDom.classList.add('wrong');
            setTimeout(() => {
              selectedLeftId = null;
              selectedRightId = null;
              renderMatchingUI();
            }, 650);
          }
        } else {
          renderMatchingUI();
        }
      });
    });
  }

  // ============================================================================
  // MODE 4: VIZSGASZIMULÁTOR KVÍZ (QUIZ MODE)
  // ============================================================================

  function generateQuizPool() {
    const pool = activeCourse === 'all'
      ? [...FORMULAS]
      : FORMULAS.filter(f => f.course === activeCourse);

    const generated = [];

    // 1. Add curated conceptual/numerical exam questions
    if (quizTypeSetting === 'mixed' || quizTypeSetting === 'exam') {
      EXTRA_QUIZ.filter(q => activeCourse === 'all' || q.course === activeCourse).forEach(eq => {
        const opts = eq.options.map((text, idx) => ({ text, isLatex: false, isCorrect: idx === eq.correct }));
        opts.sort(() => Math.random() - 0.5);
        generated.push({
          course: eq.course,
          prompt: eq.q,
          promptLatex: null,
          options: opts,
          explanation: eq.explanation
        });
      });
    }

    // 2. Generate formula identification questions
    if (quizTypeSetting === 'mixed' || quizTypeSetting === 'formula') {
      pool.forEach(item => {
        const distractors = pool
          .filter(other => other.id !== item.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);

        if (distractors.length < 3) return;

        const opts = [
          { text: item.latex, isLatex: true, isCorrect: true },
          ...distractors.map(d => ({ text: d.latex, isLatex: true, isCorrect: false }))
        ].sort(() => Math.random() - 0.5);

        generated.push({
          course: item.course,
          formulaId: item.id,
          prompt: `Melyik a helyes képlet a következőre: „${item.name}”?`,
          promptSub: item.whatIsIt,
          options: opts,
          explanation: `${item.whatWeCalculate} ${item.whyAndHow}`
        });
      });
    }

    // 3. Generate interpretation / "Mit számolunk és miért?" questions
    if (quizTypeSetting === 'mixed' || quizTypeSetting === 'meaning') {
      pool.forEach(item => {
        const distractors = pool
          .filter(other => other.id !== item.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);

        if (distractors.length < 3) return;

        const opts = [
          { text: `${item.name}: ${item.whatWeCalculate}`, isLatex: false, isCorrect: true },
          ...distractors.map(d => ({ text: `${d.name}: ${d.whatWeCalculate}`, isLatex: false, isCorrect: false }))
        ].sort(() => Math.random() - 0.5);

        generated.push({
          course: item.course,
          formulaId: item.id,
          prompt: `Mit számolunk az alábbi képlettel, és melyik mutatóhoz tartozik?`,
          promptLatex: item.latex,
          options: opts,
          explanation: `${item.whyAndHow} (${item.benchmark || ''})`
        });
      });
    }

    generated.sort(() => Math.random() - 0.5);
    return quizCountSetting === 999 ? generated : generated.slice(0, quizCountSetting);
  }

  function initQuiz(customQuestions = null) {
    quizQuestions = customQuestions || generateQuizPool();
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    quizMistakes = [];
    renderQuizUI();
  }

  function renderQuizUI() {
    const mount = document.getElementById('quiz-mount');
    if (!mount) return;

    if (quizQuestions.length === 0) {
      mount.innerHTML = `<div class="formula-card">Nincs elérhető kvízkérdés.</div>`;
      return;
    }

    // Finished state
    if (quizIndex >= quizQuestions.length) {
      const pct = Math.round((quizScore / quizQuestions.length) * 100);
      mount.innerHTML = `
        <div class="quiz-card" style="text-align:center;">
          <h2 style="font-family:var(--font-serif); font-size:1.75rem; margin-bottom:0.5rem;">Vizsgaszimuláció Eredménye</h2>
          <p style="font-size:1.15rem; margin-bottom:1.25rem;">
            Elért pontszám: <strong>${quizScore} / ${quizQuestions.length}</strong> (${pct}%)
          </p>
          <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
            <button class="icon-btn" id="quiz-restart-btn">🔄 Új kvíz indítása</button>
            ${quizMistakes.length > 0 ? `<button class="icon-btn" id="quiz-retry-mistakes-btn" style="border-color:var(--status-warn);">🎯 Hibás válaszok újragyakorlása (${quizMistakes.length} db)</button>` : ''}
          </div>
        </div>
      `;
      document.getElementById('quiz-restart-btn').addEventListener('click', () => initQuiz());
      const retryBtn = document.getElementById('quiz-retry-mistakes-btn');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => initQuiz([...quizMistakes]));
      }
      return;
    }

    const q = quizQuestions[quizIndex];
    const letters = ['A', 'B', 'C', 'D'];

    mount.innerHTML = `
      <div class="study-controls-bar">
        <div style="display:flex; align-items:center; gap:0.65rem; flex-wrap:wrap;">
          <select id="quiz-type-select" class="select-input">
            <option value="mixed" ${quizTypeSetting === 'mixed' ? 'selected' : ''}>Vegyes vizsgakérdések (Képlet + Értelmezés + Elmélet)</option>
            <option value="formula" ${quizTypeSetting === 'formula' ? 'selected' : ''}>Csak képletfelismerés</option>
            <option value="meaning" ${quizTypeSetting === 'meaning' ? 'selected' : ''}>Csak „Mit számolunk és miért?”</option>
            <option value="exam" ${quizTypeSetting === 'exam' ? 'selected' : ''}>Elméleti & Módszertani csapdák</option>
          </select>
          <select id="quiz-count-select" class="select-input">
            <option value="10" ${quizCountSetting === 10 ? 'selected' : ''}>10 kérdés</option>
            <option value="20" ${quizCountSetting === 20 ? 'selected' : ''}>20 kérdés</option>
            <option value="999" ${quizCountSetting === 999 ? 'selected' : ''}>Összes kérdés</option>
          </select>
          <button class="icon-btn" id="quiz-new-btn">Újragenerálás</button>
        </div>
        <div style="font-family:var(--font-mono); font-size:0.86rem; font-weight:700;">
          Kérdés: ${quizIndex + 1} / ${quizQuestions.length} • Pontszám: ${quizScore}
        </div>
      </div>

      <div class="quiz-card">
        <div style="margin-bottom:0.75rem;">
          <span class="course-tag ${getCourseBadgeClass(q.course)}">${escapeHtml(getCourseShortLabel(q.course))}</span>
        </div>
        <h3 style="font-size:1.15rem; margin-bottom:0.65rem;">${escapeHtml(q.prompt)}</h3>
        ${q.promptSub ? `<p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:0.75rem;">${escapeHtml(q.promptSub)}</p>` : ''}
        ${q.promptLatex ? `<div class="math-box">${renderLatexToHtml(q.promptLatex, true)}</div>` : ''}

        <div class="quiz-options">
          ${q.options.map((opt, idx) => `
            <button class="quiz-opt-btn" data-idx="${idx}">
              <span class="quiz-opt-letter">${letters[idx]}</span>
              <div style="overflow-x:auto; flex:1;">
                ${opt.isLatex ? renderLatexToHtml(opt.text, false) : escapeHtml(opt.text)}
              </div>
            </button>
          `).join('')}
        </div>

        <div id="quiz-feedback-area"></div>
      </div>
    `;

    document.getElementById('quiz-type-select').addEventListener('change', (e) => {
      quizTypeSetting = e.target.value;
      initQuiz();
    });

    document.getElementById('quiz-count-select').addEventListener('change', (e) => {
      quizCountSetting = parseInt(e.target.value, 10);
      initQuiz();
    });

    document.getElementById('quiz-new-btn').addEventListener('click', () => initQuiz());

    mount.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (quizAnswered) return;
        quizAnswered = true;
        const chosenIdx = parseInt(btn.getAttribute('data-idx'), 10);
        const isCorrect = q.options[chosenIdx].isCorrect;

        if (isCorrect) {
          quizScore++;
          if (q.formulaId) {
            userState.mastery[q.formulaId] = 'mastered';
            saveState();
          }
        } else {
          quizMistakes.push(q);
          if (q.formulaId) {
            userState.mastery[q.formulaId] = 'learning';
            saveState();
          }
        }

        mount.querySelectorAll('.quiz-opt-btn').forEach((b, i) => {
          b.disabled = true;
          if (q.options[i].isCorrect) {
            b.classList.add('correct');
          } else if (i === chosenIdx && !isCorrect) {
            b.classList.add('incorrect');
          }
        });

        const fb = document.getElementById('quiz-feedback-area');
        if (fb) {
          fb.innerHTML = `
            <div class="quiz-feedback">
              <strong style="color:${isCorrect ? 'var(--status-success)' : 'var(--status-danger)'};">
                ${isCorrect ? '✓ Helyes válasz!' : '✗ Helytelen válasz!'}
              </strong>
              <p style="margin-top:0.35rem; color:var(--text-secondary);">${escapeHtml(q.explanation)}</p>
              <div style="margin-top:0.85rem; text-align:right;">
                <button class="icon-btn" id="quiz-next-q-btn">Következő kérdés →</button>
              </div>
            </div>
          `;
          document.getElementById('quiz-next-q-btn').addEventListener('click', () => {
            quizIndex++;
            quizAnswered = false;
            renderQuizUI();
          });
        }
      });
    });
  }

  // ============================================================================
  // MODE 5: GYAKORLATI SZÁMOLÓ & EXCEL FELADATOK (PRACTICE CALCULATOR)
  // ============================================================================

  function initPracticeMode() {
    renderPracticeNav();
    renderPracticeWorkspace();
  }

  function getFilteredProblems() {
    return activeCourse === 'all'
      ? PRACTICE_PROBLEMS
      : PRACTICE_PROBLEMS.filter(p => p.course === activeCourse);
  }

  function renderPracticeNav() {
    const navEl = document.getElementById('practice-nav-list');
    if (!navEl) return;

    const probs = getFilteredProblems();
    if (activeProblemIndex >= probs.length) activeProblemIndex = 0;

    navEl.innerHTML = probs.map((p, idx) => `
      <button class="prob-nav-btn ${idx === activeProblemIndex ? 'active' : ''}" data-idx="${idx}">
        <span class="course-tag ${getCourseBadgeClass(p.course)}">${escapeHtml(p.courseName)}</span>
        <div class="prob-nav-title">${escapeHtml(p.title)}</div>
      </button>
    `).join('');

    navEl.querySelectorAll('.prob-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeProblemIndex = parseInt(btn.getAttribute('data-idx'), 10);
        activeProblemVariantScale = 1.0;
        renderPracticeNav();
        renderPracticeWorkspace();
      });
    });
  }

  function renderPracticeWorkspace() {
    const ws = document.getElementById('practice-workspace');
    if (!ws) return;

    const probs = getFilteredProblems();
    if (probs.length === 0) {
      ws.innerHTML = `<p>Nincs gyakorlófeladat a kiválasztott szűrésben.</p>`;
      return;
    }

    const prob = probs[activeProblemIndex] || probs[0];
    const scale = activeProblemVariantScale;
    const isScaled = Math.abs(scale - 1.0) > 0.001;

    ws.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap;">
        <div>
          <span class="course-tag ${getCourseBadgeClass(prob.course)}">${escapeHtml(prob.courseName)}</span>
          <span class="formula-source" style="margin-left:0.5rem;">📊 Forrás: ${escapeHtml(prob.source)}</span>
          <h2 style="font-family:var(--font-serif); font-size:1.45rem; margin-top:0.35rem;">${escapeHtml(prob.title)}</h2>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <button class="icon-btn" id="prac-check-all-btn">✓ Válaszok ellenőrzése</button>
          <button class="icon-btn" id="prac-reveal-all-btn">👁️ Megoldókulcs mutatása</button>
        </div>
      </div>

      <div class="scenario-banner">
        <strong>📋 Feladatkiírás (Excel szemináriumi adatok):</strong><br>
        ${escapeHtml(prob.scenario)}
        ${isScaled ? `<br><em style="color:var(--dt-primary);">🎲 Aktív szorzófaktor: ×${scale.toFixed(2)} (Minden pénzérték és mennyiség arányosan skálázva)</em>` : ''}
      </div>

      <div class="calc-steps-list">
        ${prob.steps.map((step, sIdx) => `
          <div class="calc-step-row" id="calc-row-${sIdx}">
            <div class="calc-step-label">
              ${sIdx + 1}. ${escapeHtml(step.label)}
            </div>
            <div class="calc-input-group">
              <input type="text" class="calc-num-input" id="calc-input-${sIdx}" placeholder="Érték..." autocomplete="off">
              <span class="calc-unit-badge">${escapeHtml(step.unit)}</span>
            </div>
            <div class="calc-step-solution" id="calc-sol-${sIdx}">
              <strong>Helyes eredmény: ${formatHuNum(step.answer)} ${escapeHtml(step.unit)}</strong> — Levezetés: ${escapeHtml(step.formula)}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('prac-check-all-btn').addEventListener('click', () => {
      prob.steps.forEach((step, sIdx) => {
        const inp = document.getElementById(`calc-input-${sIdx}`);
        const row = document.getElementById(`calc-row-${sIdx}`);
        if (!inp || !row) return;
        const rawVal = inp.value.trim().replace(/\s+/g, '').replace(',', '.');
        const numVal = parseFloat(rawVal);
        row.classList.remove('step-ok', 'step-err');

        if (!isNaN(numVal) && Math.abs(numVal - step.answer) <= (step.tolerance || 0.5)) {
          row.classList.add('step-ok');
        } else {
          row.classList.add('step-err');
          row.classList.add('revealed');
        }
      });
    });

    document.getElementById('prac-reveal-all-btn').addEventListener('click', () => {
      prob.steps.forEach((step, sIdx) => {
        const row = document.getElementById(`calc-row-${sIdx}`);
        const inp = document.getElementById(`calc-input-${sIdx}`);
        if (row) row.classList.toggle('revealed');
        if (inp && !inp.value) {
          inp.value = String(step.answer).replace('.', ',');
        }
      });
    });
  }

  function formatHuNum(num) {
    return Number(num).toLocaleString('hu-HU', { maximumFractionDigits: 2 });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
