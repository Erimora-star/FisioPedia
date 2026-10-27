// Fisio Pedía - Lógica de Aplicación
// SPA interactiva, sin servidor, con localStorage, Flashcards 3D y Quizzes.

(function () {
  'use strict';

  // --- ESTADO GLOBAL ---
  const state = {
    route: 'explorador',
    selectedTermId: 'propiocepcion',
    favorites: new Set(),
    searchTerm: '',
    selectedCategory: 'todos',
    selectedRegion: 'todas',
    sortBy: 'populares',
    flashcardIndex: 0,
    flashcardFlipped: false,
    quizIndex: 0,
    quizScore: 0,
    quizStreak: 4,
    quizUserAnswers: {},
    quizSubmitted: {}
  };

  // --- LOCAL STORAGE HELPERS ---
  const STORAGE_KEY = 'fisiopedia_favs_v1';
  function loadFavorites() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        state.favorites = new Set(JSON.parse(saved));
      } else {
        // Favoritos iniciales sugeridos para primera experiencia
        state.favorites = new Set(['propiocepcion', 'flexion-extension', 'tendon-aquiles']);
        saveFavorites();
      }
    } catch (e) {
      console.warn('LocalStorage no disponible:', e);
      state.favorites = new Set(['propiocepcion', 'flexion-extension']);
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(state.favorites)));
    } catch (e) {
      console.warn('Error guardando en LocalStorage:', e);
    }
    updateFavoritesBadges();
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast('Eliminado de tus favoritos', 'bookmark_border');
    } else {
      state.favorites.add(id);
      showToast('Guardado en tus favoritos', 'bookmark');
    }
    saveFavorites();
    renderCurrentRoute();
  }

  function updateFavoritesBadges() {
    const count = state.favorites.size;
    const badgeElements = document.querySelectorAll('.fav-count-badge');
    badgeElements.forEach(el => {
      el.textContent = count;
      el.classList.toggle('hidden', count === 0);
    });
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message, icon = 'info') {
    let toast = document.getElementById('fisiopedia-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'fisiopedia-toast';
      toast.className = 'fixed bottom-20 md:bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface shadow-lg border border-slate-border text-sm font-medium transition-all duration-300 opacity-0 translate-y-4 pointer-events-none';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="material-symbols-outlined text-primary text-base">${icon}</span><span>${message}</span>`;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 2400);
  }

  // --- AUDIO / PRONUNCIACIÓN ---
  function speakTerm(termName) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(termName);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
      showToast(`Reproduciendo pronunciación: ${termName}`, 'volume_up');
    } else {
      showToast('Síntesis de voz no disponible en este navegador', 'volume_off');
    }
  }

  // --- GENERADOR DE SVG ANATÓMICOS DIDÁCTICOS ---
  function getTermSvg(type) {
    switch (type) {
      case 'propiocepcion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="muscleGrad" x1="50" y1="110" x2="350" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#E2E8F0"/>
                <stop offset="25%" stop-color="#0D9488"/>
                <stop offset="75%" stop-color="#0D9488"/>
                <stop offset="100%" stop-color="#E2E8F0"/>
              </linearGradient>
            </defs>
            <path d="M 20 70 Q 40 70 45 90 L 45 130 Q 40 150 20 150 Z" fill="#94A3B8" opacity="0.6"/>
            <path d="M 45 95 L 100 98 L 100 122 L 45 125 Z" fill="#CBD5E1"/>
            <path d="M 100 98 C 140 60 240 60 290 98 L 290 122 C 240 160 140 160 100 122 Z" fill="url(#muscleGrad)" opacity="0.85"/>
            <path d="M 290 98 L 350 95 L 350 125 L 290 122 Z" fill="#CBD5E1"/>
            <path d="M 375 70 Q 355 70 350 90 L 350 130 Q 355 150 375 150 Z" fill="#94A3B8" opacity="0.6"/>
            <g id="spindle">
              <ellipse cx="195" cy="110" rx="35" ry="14" fill="#00685f" fill-opacity="0.25"/>
              <path d="M 165 110 Q 175 100 185 110 T 205 110 T 225 110" stroke="#00685f" stroke-width="2.5" fill="none"/>
              <circle cx="195" cy="110" r="4" fill="#00685f"/>
              <path d="M 195 106 C 195 65 230 35 280 30" stroke="#0D9488" stroke-width="2" stroke-dasharray="3 3"/>
              <text x="285" y="32" fill="#0D9488" font-size="10" font-family="Plus Jakarta Sans" font-weight="bold">Huso Neuromuscular (Ia)</text>
            </g>
            <g id="golgi">
              <rect x="290" y="102" width="28" height="16" rx="4" fill="#F59E0B" fill-opacity="0.35"/>
              <path d="M 292 110 L 316 110" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
              <circle cx="304" cy="110" r="4" fill="#F59E0B"/>
              <path d="M 304 102 C 304 70 330 45 350 35" stroke="#F59E0B" stroke-width="2" stroke-dasharray="3 3"/>
              <text x="290" y="180" fill="#F59E0B" font-size="10" font-family="Plus Jakarta Sans" font-weight="bold">Órgano Tendinoso de Golgi (Ib)</text>
            </g>
          </svg>
        `;
      case 'flexion_extension':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="160" cy="120" r="10" fill="#00685f"/>
            <!-- Brazo fijo -->
            <line x1="160" y1="120" x2="260" y2="120" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
            <!-- Segmento en flexión -->
            <line x1="160" y1="120" x2="100" y2="40" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
            <!-- Segmento en extensión -->
            <line x1="160" y1="120" x2="60" y2="120" stroke="#F59E0B" stroke-width="8" stroke-dasharray="6 4" stroke-linecap="round"/>
            <!-- Arco de movimiento -->
            <path d="M 220 120 A 60 60 0 0 0 125 70" stroke="#0D9488" stroke-width="2.5" fill="none" stroke-dasharray="3 3"/>
            <text x="140" y="60" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Flexión (- ángulo)</text>
            <text x="50" y="145" fill="#F59E0B" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Extensión (+ ángulo)</text>
            <text x="145" y="145" fill="#1E293B" font-size="10" font-family="Inter">Eje Transversal</text>
          </svg>
        `;
      case 'tendon_aquiles':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Pantorrilla / Gastrocnemios -->
            <path d="M 120 20 C 100 50 100 80 130 110 L 150 110 C 180 80 180 50 160 20 Z" fill="#0D9488" opacity="0.8"/>
            <!-- Tendón de Aquiles -->
            <rect x="133" y="110" width="16" height="55" rx="3" fill="#0284C7"/>
            <!-- Calcáneo (Talón) -->
            <path d="M 120 165 C 120 155 135 155 145 165 C 160 175 185 175 195 165 L 195 185 L 120 185 Z" fill="#94A3B8"/>
            <!-- Indicador de inserción -->
            <circle cx="141" cy="165" r="5" fill="#F43F5E"/>
            <text x="160" y="135" fill="#0284C7" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Tendón de Aquiles</text>
            <text x="160" y="150" fill="#64748B" font-size="9" font-family="Inter">Zona hipovascular crítica</text>
            <text x="60" y="60" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Tríceps Sural</text>
            <text x="60" y="180" fill="#64748B" font-size="10" font-family="Inter">Calcáneo</text>
          </svg>
        `;
      case 'lca':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Fémur distal -->
            <path d="M 110 20 L 110 70 Q 110 90 130 95 Q 160 100 160 70 Q 160 100 190 95 Q 210 90 210 70 L 210 20 Z" fill="#CBD5E1"/>
            <!-- Tibia proximal -->
            <path d="M 105 130 Q 160 120 215 130 L 210 185 L 110 185 Z" fill="#94A3B8"/>
            <!-- Ligamento Cruzado Anterior (LCA) -->
            <line x1="185" y1="80" x2="135" y2="130" stroke="#059669" stroke-width="7" stroke-linecap="round"/>
            <!-- Ligamento Cruzado Posterior (LCP) -->
            <line x1="135" y1="80" x2="185" y2="130" stroke="#6366F1" stroke-width="5" stroke-dasharray="4 3" stroke-linecap="round"/>
            <text x="40" y="105" fill="#059669" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">LCA (freno anterior)</text>
            <text x="210" y="115" fill="#6366F1" font-size="10" font-family="Plus Jakarta Sans">LCP (freno posterior)</text>
          </svg>
        `;
      case 'manguito_rotador':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Cabeza humeral -->
            <circle cx="160" cy="110" r="45" fill="#CBD5E1"/>
            <!-- Cavidad glenoidea -->
            <path d="M 115 65 Q 105 110 115 155" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
            <!-- Músculos Manguito -->
            <path d="M 130 40 Q 160 55 190 80" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
            <path d="M 175 145 Q 150 155 125 150" stroke="#F59E0B" stroke-width="6" stroke-linecap="round"/>
            <text x="175" y="45" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">1. Supraespinoso</text>
            <text x="180" y="165" fill="#F59E0B" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">2. Infraespinoso</text>
            <text x="40" y="115" fill="#1E293B" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Escápula</text>
            <text x="145" y="115" fill="#1E293B" font-size="10" font-family="Inter">Húmero</text>
          </svg>
        `;
      default:
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="30" width="240" height="120" rx="12" fill="#F0FDFA" stroke="#0D9488" stroke-width="2" stroke-dasharray="4 4"/>
            <circle cx="160" cy="90" r="30" fill="#0D9488" fill-opacity="0.15"/>
            <path d="M 150 90 L 160 80 L 170 90 M 160 82 L 160 102" stroke="#0D9488" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <text x="100" y="135" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Ilustración Biomecánica</text>
          </svg>
        `;
    }
  }

  // --- NAVEGACIÓN Y ENRUTAMIENTO (HASH ROUTER) ---
  function initRouter() {
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
  }

  function handleHashChange() {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    const parts = rawHash.split('/');
    const route = parts[0] || 'explorador';

    if (route === 'terminos' || route === 'termino') {
      state.route = 'termino';
      if (parts[1]) {
        state.selectedTermId = parts[1];
      }
    } else if (route === 'favoritos' || route === 'flashcards' || route === 'mis-favoritos-flashcards') {
      state.route = 'favoritos';
    } else if (route === 'quizzes' || route === 'evaluacion' || route === 'quizzes-de-autoevaluacion') {
      state.route = 'quizzes';
    } else {
      state.route = 'explorador';
    }

    renderCurrentRoute();
    updateNavActiveStates();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateTo(hash) {
    window.location.hash = hash;
  }

  function updateNavActiveStates() {
    const navLinks = document.querySelectorAll('[data-route-nav]');
    navLinks.forEach(link => {
      const targetRoute = link.getAttribute('data-route-nav');
      const isActive = targetRoute === state.route;
      if (isActive) {
        link.classList.remove('text-on-surface-variant', 'hover:bg-surface-container-high');
        link.classList.add('bg-primary-container', 'text-on-primary-container', 'font-semibold', 'shadow-sm');
      } else {
        link.classList.add('text-on-surface-variant', 'hover:bg-surface-container-high');
        link.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-semibold', 'shadow-sm');
      }
    });

    // Mobile Bottom Nav
    const mobileLinks = document.querySelectorAll('[data-route-mobile]');
    mobileLinks.forEach(link => {
      const targetRoute = link.getAttribute('data-route-mobile');
      const isActive = targetRoute === state.route;
      if (isActive) {
        link.classList.remove('text-slate-muted');
        link.classList.add('text-primary', 'font-bold');
      } else {
        link.classList.add('text-slate-muted');
        link.classList.remove('text-primary', 'font-bold');
      }
    });
  }

  function renderCurrentRoute() {
    const mainContainer = document.getElementById('app-main-content');
    if (!mainContainer) return;

    if (state.route === 'explorador') {
      mainContainer.innerHTML = renderExploradorView();
      bindExploradorEvents();
    } else if (state.route === 'termino') {
      mainContainer.innerHTML = renderTerminoView();
      bindTerminoEvents();
    } else if (state.route === 'favoritos') {
      mainContainer.innerHTML = renderFavoritosView();
      bindFavoritosEvents();
    } else if (state.route === 'quizzes') {
      mainContainer.innerHTML = renderQuizzesView();
      bindQuizzesEvents();
    }

    updateFavoritesBadges();
  }

  // --- FILTRADO DE TÉRMINOS ---
  function getFilteredTerms() {
    return FISIOPEDIA_TERMS.filter(term => {
      // Búsqueda de texto
      if (state.searchTerm) {
        const q = state.searchTerm.toLowerCase().trim();
        const matchesName = term.name.toLowerCase().includes(q);
        const matchesSimple = term.simpleExplanation.toLowerCase().includes(q);
        const matchesTech = term.technicalDef.toLowerCase().includes(q);
        const matchesExample = term.everydayExample.toLowerCase().includes(q);
        if (!matchesName && !matchesSimple && !matchesTech && !matchesExample) return false;
      }
      // Filtro de categoría
      if (state.selectedCategory !== 'todos') {
        if (term.category !== state.selectedCategory) return false;
      }
      // Filtro de región
      if (state.selectedRegion !== 'todas') {
        if (term.region !== state.selectedRegion && term.region !== 'general') return false;
      }
      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'az') return a.name.localeCompare(b.name);
      return 0;
    });
  }

  // ==========================================
  // VISTA 1: EXPLORADOR DICCIONARIO PRINCIPAL
  // ==========================================
  function renderExploradorView() {
    const featuredTerm = FISIOPEDIA_TERMS.find(t => t.id === 'propiocepcion') || FISIOPEDIA_TERMS[0];
    const isFeaturedFav = state.favorites.has(featuredTerm.id);
    const filteredTerms = getFilteredTerms();

    return `
      <!-- SEARCH & WELCOME HERO -->
      <section class="relative w-full rounded-2xl bg-surface-container-low p-6 sm:p-10 lg:p-12 overflow-hidden shadow-sm">
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber-quiz/5 blur-2xl pointer-events-none"></div>
        
        <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-4">
            <span class="flex h-2 w-2 rounded-full bg-cat-muscles animate-pulse"></span>
            <span class="font-label-caps text-label-caps text-primary uppercase tracking-wider">Compendio Clínico Pedagógico</span>
            <span class="text-slate-muted text-xs">•</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Ciclo 2025</span>
          </div>

          <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight max-w-2xl">
            Aprende anatomía sin enredarte en tecnicismos
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant mt-3 max-w-xl">
            Conceptos médicos explicados con lenguaje claro, ilustraciones y ejemplos del día a día para que tu aprendizaje sea duradero.
          </p>

          <!-- BUSCADOR CON CATEGORÍAS -->
          <div class="w-full mt-8 bg-surface-container-lowest rounded-2xl shadow-md p-2.5 sm:p-3 flex flex-col gap-3">
            <div class="relative flex items-center w-full">
              <span class="material-symbols-outlined absolute left-4 text-primary text-2xl select-none">search</span>
              <input
                id="main-search-input"
                type="text"
                autocomplete="off"
                value="${state.searchTerm}"
                placeholder="Escribe un término (ej. Propiocepción, Isquiotibiales, Extensión...)"
                class="w-full pl-12 pr-12 py-3.5 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-slate-muted focus:outline-none"
              />
              ${state.searchTerm ? `
                <button id="clear-search-btn" class="absolute right-3.5 p-1 text-slate-muted hover:text-on-surface transition-colors" type="button" aria-label="Limpiar búsqueda">
                  <span class="material-symbols-outlined text-lg">close</span>
                </button>
              ` : ''}
            </div>

            <!-- CHIPS DE TIPO EN EL BUSCADOR -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 px-1 no-scrollbar" id="category-filter-chips">
              <span class="font-label-sm text-label-sm text-slate-muted mr-1 hidden sm:inline-block">Tipo:</span>
              <button data-cat="todos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'todos' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                Todos
              </button>
              <button data-cat="musculos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'musculos' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-muscles mr-1.5"></span>Músculos
              </button>
              <button data-cat="huesos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'huesos' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-bones mr-1.5"></span>Huesos y Tendones
              </button>
              <button data-cat="articulaciones" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'articulaciones' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-joints mr-1.5"></span>Articulaciones
              </button>
              <button data-cat="movimientos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'movimientos' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-movements mr-1.5"></span>Movimientos
              </button>
            </div>
          </div>

          <!-- TENDENCIAS RÁPIDAS -->
          <div class="flex flex-wrap items-center justify-center gap-2 mt-4 text-left">
            <span class="font-label-caps text-label-caps text-slate-muted uppercase">Tendencias:</span>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Propiocepción">Propiocepción</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="LCA">Ligamento Cruzado (LCA)</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Manguito">Manguito Rotador</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Flexión">Flexión y Extensión</button>
          </div>
        </div>
      </section>

      <!-- EXPLORA POR REGIÓN CORPORAL -->
      <section class="mt-10 w-full">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-xl">accessibility_new</span>
            <h2 class="font-headline-sm text-headline-sm text-on-surface">Explora por Región Corporal</h2>
          </div>
          <span class="font-label-caps text-label-caps text-slate-muted">FILTRADO ANATÓMICO</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3" id="region-filter-group">
          ${renderRegionButton('todas', 'Todas', 'dataset', state.selectedRegion === 'todas')}
          ${renderRegionButton('columna', 'Columna', 'view_column', state.selectedRegion === 'columna')}
          ${renderRegionButton('hombro', 'Hombro', 'sports_gymnastics', state.selectedRegion === 'hombro')}
          ${renderRegionButton('codo', 'Codo', 'fitness_center', state.selectedRegion === 'codo')}
          ${renderRegionButton('mano', 'Mano', 'front_hand', state.selectedRegion === 'mano')}
          ${renderRegionButton('cadera', 'Cadera', 'airline_seat_recline_normal', state.selectedRegion === 'cadera')}
          ${renderRegionButton('rodilla', 'Rodilla', 'directions_walk', state.selectedRegion === 'rodilla')}
          ${renderRegionButton('tobillo', 'Tobillo', 'do_not_step', state.selectedRegion === 'tobillo')}
        </div>
      </section>

      <!-- DESTACADO: TÉRMINO DEL DÍA -->
      <section class="mt-12 w-full">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-amber-quiz text-2xl" style="font-variation-settings: 'FILL' 1;">stars</span>
            <h2 class="font-headline-sm text-headline-sm text-on-surface">Término del Día</h2>
            <span class="ml-2 px-2.5 py-0.5 rounded-full bg-amber-quiz/15 text-amber-quiz font-label-caps text-label-caps uppercase font-bold">Destacado</span>
          </div>
          <a class="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1 cursor-pointer" onclick="window.location.hash='#terminos'">
            Ver compendio completo <span class="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>

        <div class="w-full bg-surface-container-lowest rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md relative overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <!-- 7 Cols: Explicación y Definición -->
            <div class="lg:col-span-7 flex flex-col">
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="px-3 py-1 rounded-full ${featuredTerm.categoryClass} font-label-caps text-label-caps uppercase font-bold">
                  ${featuredTerm.categoryLabel}
                </span>
                <span class="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
                  ${featuredTerm.regionLabel}
                </span>
                <span class="flex items-center gap-1 font-label-sm text-label-sm text-slate-muted ml-auto">
                  <span class="material-symbols-outlined text-sm">schedule</span> ${featuredTerm.readingTime}
                </span>
              </div>

              <div class="flex items-baseline gap-3">
                <h3 class="font-headline-lg text-headline-lg text-primary tracking-tight">${featuredTerm.name}</h3>
                <button onclick="window.fisiopediaApp.speak('${featuredTerm.name}')" class="p-1.5 rounded-full hover:bg-surface-container-high text-slate-muted hover:text-primary transition-colors" type="button" title="Escuchar pronunciación">
                  <span class="material-symbols-outlined text-xl">volume_up</span>
                </button>
              </div>

              <p class="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed max-w-xl">
                <strong class="font-semibold text-on-surface">Definición técnica:</strong> ${featuredTerm.technicalDef}
              </p>

              <!-- En palabras sencillas -->
              <div class="mt-5 p-4 rounded-xl bg-surface-container-low flex items-start gap-3.5">
                <div class="p-2 rounded-lg bg-cat-muscles/15 text-cat-muscles shrink-0">
                  <span class="material-symbols-outlined text-2xl">lightbulb</span>
                </div>
                <div>
                  <span class="inline-block px-2.5 py-0.5 rounded-full bg-cat-muscles/15 text-cat-muscles font-label-caps text-label-caps uppercase font-bold mb-1">
                    En palabras sencillas
                  </span>
                  <p class="font-body-md text-body-md text-on-surface font-medium">
                    "${featuredTerm.simpleExplanation}"
                  </p>
                </div>
              </div>

              <!-- Ejemplo cotidiano -->
              <div class="mt-4 p-4 rounded-xl bg-amber-quiz/10 flex items-start gap-3.5">
                <div class="p-2 rounded-lg bg-amber-quiz/20 text-amber-quiz shrink-0">
                  <span class="material-symbols-outlined text-2xl">emoji_objects</span>
                </div>
                <div>
                  <span class="font-label-caps text-label-caps uppercase text-amber-quiz font-bold block mb-1">
                    Ejemplo Cotidiano de Evaluación
                  </span>
                  <p class="font-body-sm text-body-sm text-on-surface leading-snug">
                    ${featuredTerm.everydayExample}
                  </p>
                </div>
              </div>

              <!-- CTAs -->
              <div class="mt-6 flex flex-wrap items-center gap-3">
                <a href="#termino/${featuredTerm.id}" class="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-2">
                  <span>Ver ficha anatómica completa</span>
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
                <button onclick="window.fisiopediaApp.toggleFav('${featuredTerm.id}')" class="px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all flex items-center gap-2">
                  <span class="material-symbols-outlined ${isFeaturedFav ? 'text-amber-quiz' : 'text-slate-muted'}" style="font-variation-settings: 'FILL' ${isFeaturedFav ? '1' : '0'};">bookmark</span>
                  <span>${isFeaturedFav ? 'Guardado en Mis Favoritos' : 'Guardar en Favoritos'}</span>
                </button>
              </div>
            </div>

            <!-- 5 Cols: Diagrama Visual -->
            <div class="lg:col-span-5 flex flex-col h-full justify-between bg-surface-container-low rounded-xl p-5 shadow-inner">
              <div class="flex items-center justify-between mb-3">
                <span class="font-label-sm text-label-sm text-on-surface-variant font-semibold flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-sm text-cat-muscles">visibility</span> Diccionario Visual
                </span>
                <span class="text-xs px-2 py-0.5 rounded bg-surface-container-lowest text-slate-muted">Receptores Periféricos</span>
              </div>

              <div class="relative w-full rounded-lg overflow-hidden bg-surface-container-highest p-4 flex items-center justify-center">
                ${getTermSvg(featuredTerm.svgType)}
              </div>

              <div class="mt-4 pt-3 flex items-center justify-between text-xs text-on-surface-variant border-t border-slate-border/50">
                <div class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-sm text-primary">healing</span>
                  <span>Aplicación en rehabilitación articular</span>
                </div>
                <span class="font-semibold text-primary">Relevancia Alta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GRILLA DE CONCEPTOS DEL DICCIONARIO -->
      <section class="mt-14 w-full">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 class="font-headline-sm text-headline-sm text-on-surface">
              ${state.searchTerm ? `Resultados de búsqueda (${filteredTerms.length})` : 'Términos Anatómicos y Biomecánicos'}
            </h2>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              ${state.searchTerm ? `Mostrando conceptos coincidentes con "${state.searchTerm}"` : 'Los conceptos más consultados por estudiantes de Fisioterapia.'}
            </p>
          </div>

          <!-- Tabs de ordenamiento -->
          <div class="inline-flex p-1 rounded-xl bg-surface-container-high self-start sm:self-auto">
            <button data-sort="populares" class="sort-tab-btn px-3 py-1 rounded-lg font-label-sm text-label-sm transition-all ${state.sortBy === 'populares' ? 'bg-surface-container-lowest text-on-surface shadow-xs font-semibold' : 'text-on-surface-variant hover:text-on-surface'}">
              Más buscados
            </button>
            <button data-sort="az" class="sort-tab-btn px-3 py-1 rounded-lg font-label-sm text-label-sm transition-all ${state.sortBy === 'az' ? 'bg-surface-container-lowest text-on-surface shadow-xs font-semibold' : 'text-on-surface-variant hover:text-on-surface'}">
              Orden A-Z
            </button>
          </div>
        </div>

        ${filteredTerms.length === 0 ? `
          <div class="p-12 text-center rounded-2xl bg-surface-container-lowest border border-dashed border-slate-border">
            <span class="material-symbols-outlined text-5xl text-slate-muted mb-2">search_off</span>
            <h3 class="font-headline-sm text-headline-sm text-on-surface">No encontramos términos con esa búsqueda</h3>
            <p class="font-body-md text-body-md text-slate-muted mt-1">Prueba con palabras como flexión, ligamento, manguito o selecciona otra categoría.</p>
            <button onclick="window.fisiopediaApp.clearSearch()" class="mt-4 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm">
              Ver todos los términos
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${filteredTerms.map(term => renderTermCard(term)).join('')}
          </div>
        `}
      </section>

      <!-- BANNERS PEDAGÓGICOS: FLASHCARDS Y QUIZZES -->
      <section class="mt-14 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Banner Flashcards -->
          <div class="relative bg-gradient-to-br from-primary/10 via-surface-container-lowest to-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-sm">
            <div>
              <div class="flex items-start justify-between">
                <div class="p-3 rounded-xl bg-primary text-on-primary">
                  <span class="material-symbols-outlined text-2xl font-bold">style</span>
                </div>
                <span class="px-3 py-1 rounded-full bg-primary/20 text-primary font-label-caps text-label-caps uppercase font-bold">
                  Repaso Activo
                </span>
              </div>
              <div class="mt-6">
                <h3 class="font-headline-sm text-headline-sm text-on-surface">
                  Flashcards 3D de Estudio
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant mt-2 max-w-md">
                  Repasa tus <strong class="text-primary font-semibold">${state.favorites.size} términos favoritos</strong> con tarjetas de volteo tridimensional y nemotecnias.
                </p>
              </div>
            </div>
            <div class="mt-8 flex items-center gap-3">
              <a href="#favoritos" class="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-2">
                <span>Practicar Flashcards</span>
                <span class="material-symbols-outlined text-lg">play_arrow</span>
              </a>
            </div>
          </div>

          <!-- Banner Quizzes -->
          <div class="relative bg-gradient-to-br from-amber-quiz/10 via-surface-container-lowest to-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-sm">
            <div>
              <div class="flex items-start justify-between">
                <div class="p-3 rounded-xl bg-amber-quiz text-slate-strong">
                  <span class="material-symbols-outlined text-2xl font-bold">quiz</span>
                </div>
                <span class="px-3 py-1 rounded-full bg-amber-quiz/20 text-slate-strong font-label-caps text-label-caps uppercase font-bold">
                  Autoevaluación
                </span>
              </div>
              <div class="mt-6">
                <h3 class="font-headline-sm text-headline-sm text-on-surface">
                  Cuestionarios de Práctica Breves
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant mt-2 max-w-md">
                  Responde preguntas cortas de la vida cotidiana para comprobar lo aprendido con retroalimentación inmediata.
                </p>
              </div>
            </div>
            <div class="mt-8 flex items-center gap-3">
              <a href="#quizzes" class="px-5 py-2.5 rounded-lg bg-amber-quiz hover:bg-amber-quiz/90 text-slate-strong font-label-md text-label-md font-bold shadow-sm transition-all flex items-center gap-2">
                <span>Iniciar Cuestionario</span>
                <span class="material-symbols-outlined text-lg">bolt</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderRegionButton(id, label, icon, isActive) {
    return `
      <button
        data-region="${id}"
        class="region-btn flex flex-col items-center justify-center p-3.5 rounded-xl ${isActive ? 'bg-primary text-on-primary shadow-md ring-2 ring-primary/30' : 'bg-surface-container-lowest hover:bg-surface-container-low shadow-sm text-on-surface'} transition-all text-center group"
        type="button"
      >
        <div class="w-10 h-10 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'} flex items-center justify-center group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-xl">${icon}</span>
        </div>
        <span class="font-label-sm text-label-sm mt-2.5">${label}</span>
      </button>
    `;
  }

  function renderTermCard(term) {
    const isFav = state.favorites.has(term.id);
    return `
      <article class="flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-slate-border/40">
        <div>
          <div class="flex items-center justify-between">
            <span class="px-3 py-1 rounded-full ${term.categoryClass} font-label-caps text-label-caps uppercase font-bold">
              ${term.categoryLabel}
            </span>
            <button
              onclick="window.fisiopediaApp.toggleFav('${term.id}')"
              class="p-1 text-slate-muted hover:text-amber-quiz transition-colors"
              type="button"
              aria-label="Agregar a favoritos"
            >
              <span class="material-symbols-outlined text-xl ${isFav ? 'text-amber-quiz' : ''}" style="font-variation-settings: 'FILL' ${isFav ? '1' : '0'};">
                ${isFav ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>

          <h3 class="font-headline-sm text-headline-sm text-on-surface mt-4 group-hover:text-primary transition-colors cursor-pointer" onclick="window.location.hash='#termino/${term.id}'">
            ${term.name}
          </h3>

          <div class="mt-3 p-3 rounded-lg bg-surface-container-low">
            <span class="font-label-caps text-label-caps uppercase text-cat-muscles block mb-1">En el día a día</span>
            <p class="font-body-sm text-body-sm text-on-surface leading-snug line-clamp-3">
              ${term.everydayExample}
            </p>
          </div>

          <div class="mt-4 pt-2 text-xs text-on-surface-variant flex items-center justify-between">
            <span class="text-slate-muted">Región: <strong class="text-on-surface">${term.regionLabel}</strong></span>
            <span class="text-slate-muted">${term.readingTime}</span>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-border/50 flex items-center justify-between">
          <a href="#termino/${term.id}" class="font-label-sm text-label-sm text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Leer definición sencilla <span class="material-symbols-outlined text-base">arrow_forward</span>
          </a>
          <button onclick="window.fisiopediaApp.speak('${term.name}')" class="text-slate-muted hover:text-primary p-1" title="Escuchar">
            <span class="material-symbols-outlined text-base">volume_up</span>
          </button>
        </div>
      </article>
    `;
  }

  function bindExploradorEvents() {
    const searchInput = document.getElementById('main-search-input');
    const clearBtn = document.getElementById('clear-search-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value;
        const filtered = getFilteredTerms();
        // Re-render only terms grid if possible or trigger smooth update
        renderCurrentRoute();
        const freshInput = document.getElementById('main-search-input');
        if (freshInput) {
          freshInput.focus();
          freshInput.setSelectionRange(freshInput.value.length, freshInput.value.length);
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.searchTerm = '';
        renderCurrentRoute();
      });
    }

    // Category chips
    document.querySelectorAll('#category-filter-chips button[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedCategory = btn.getAttribute('data-cat');
        renderCurrentRoute();
      });
    });

    // Quick tag buttons
    document.querySelectorAll('.quick-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.searchTerm = btn.getAttribute('data-tag');
        renderCurrentRoute();
      });
    });

    // Region buttons
    document.querySelectorAll('.region-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedRegion = btn.getAttribute('data-region');
        renderCurrentRoute();
      });
    });

    // Sort tabs
    document.querySelectorAll('.sort-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.sortBy = btn.getAttribute('data-sort');
        renderCurrentRoute();
      });
    });
  }

  // ==========================================
  // VISTA 2: FICHA DE TÉRMINO ANATÓMICO (7:5)
  // ==========================================
  function renderTerminoView() {
    const term = FISIOPEDIA_TERMS.find(t => t.id === state.selectedTermId) || FISIOPEDIA_TERMS[0];
    const isFav = state.favorites.has(term.id);

    return `
      <!-- Migas de pan -->
      <div class="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
        <div class="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
          <a href="#explorador" class="hover:text-primary transition-colors flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">home</span> Inicio
          </a>
          <span class="text-outline-variant font-bold">/</span>
          <a href="#explorador" class="hover:text-primary transition-colors">Diccionario</a>
          <span class="text-outline-variant font-bold">/</span>
          <span class="text-primary font-bold">${term.categoryLabel}</span>
          <span class="text-outline-variant font-bold">/</span>
          <span class="text-on-surface font-semibold">${term.name}</span>
        </div>
        <div class="flex items-center gap-space-sm">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps tracking-wider">
            <span class="w-2 h-2 rounded-full bg-cat-muscles animate-pulse"></span>
            GUÍA DE ESTUDIO 2025
          </span>
        </div>
      </div>

      <!-- Selector rápido de términos -->
      <div class="mb-6 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span class="text-xs font-semibold text-slate-muted uppercase whitespace-nowrap mr-2">Otros términos:</span>
        ${FISIOPEDIA_TERMS.map(t => `
          <button onclick="window.location.hash='#termino/${t.id}'" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${t.id === term.id ? 'bg-primary text-on-primary font-bold shadow-sm' : 'bg-surface-container-lowest hover:bg-surface-container-low text-on-surface border border-slate-border/50'}">
            ${t.name}
          </button>
        `).join('')}
      </div>

      <!-- Layout Asimétrico 7:5 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <!-- COLUMNA IZQUIERDA (7 columnas): Contenido Pedagógico -->
        <section class="lg:col-span-7 flex flex-col gap-space-lg">
          <!-- 1. Cabecera -->
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden">
            <div class="flex flex-wrap items-center gap-space-sm mb-space-sm">
              <span class="px-3 py-1 rounded-full ${term.categoryClass} font-label-caps text-label-caps tracking-wide font-bold">
                ${term.categoryLabel}
              </span>
              <span class="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps tracking-wide">
                ${term.regionLabel}
              </span>
              <span class="px-3 py-1 rounded-full bg-amber-quiz/15 text-amber-quiz font-label-caps text-label-caps tracking-wide flex items-center gap-1 font-bold">
                <span class="material-symbols-outlined text-xs">local_fire_department</span>
                ${term.level}
              </span>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mt-space-xs">
              <div>
                <div class="flex items-center gap-space-sm flex-wrap">
                  <h1 class="font-display text-headline-lg text-on-surface tracking-tight leading-tight">
                    ${term.name}
                  </h1>
                  <button onclick="window.fisiopediaApp.speak('${term.name}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm transition-all active:scale-95 shadow-sm" type="button" title="Escuchar pronunciación fonética">
                    <span class="material-symbols-outlined text-base text-primary">volume_up</span>
                    <span>${term.pronunciation}</span>
                  </button>
                </div>
                <p class="font-body-sm text-body-sm text-slate-muted mt-1.5 italic flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm text-outline">translate</span>
                  ${term.etymology}
                </p>
              </div>
            </div>

            <!-- Barra de Acciones de Estudio -->
            <div class="mt-space-lg pt-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low rounded-lg p-space-sm">
              <button onclick="window.fisiopediaApp.toggleFav('${term.id}')" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg ${isFav ? 'bg-amber-quiz text-slate-strong font-bold' : 'bg-primary text-on-primary'} font-label-md text-label-md shadow-sm transition-all">
                <span class="material-symbols-outlined text-base" style="font-variation-settings: 'FILL' 1;">
                  ${isFav ? 'bookmark_added' : 'bookmark'}
                </span>
                <span>${isFav ? 'Guardado en Mis Favoritos' : 'Guardar en Mis Favoritos'}</span>
              </button>

              <button onclick="window.location.hash='#favoritos'" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm shadow-sm transition-colors">
                <span class="material-symbols-outlined text-base text-primary">style</span>
                <span>Estudiar en Flashcards</span>
              </button>
            </div>
          </div>

          <!-- 2. Comparativa: Técnico vs. Sencillo -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <!-- Técnico -->
            <div class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative flex flex-col justify-between border border-slate-border/50">
              <div class="space-y-space-xs">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-label-caps text-label-caps text-slate-muted uppercase tracking-wider flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm text-cat-bones">menu_book</span>
                    Definición Técnica / Libro Oficial
                  </span>
                </div>
                <h2 class="font-headline-sm text-headline-sm text-on-surface leading-snug">
                  Perspectiva Biomecánica
                </h2>
                <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pt-1">
                  "${term.technicalDef}"
                </p>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center justify-between text-slate-muted font-label-caps text-label-caps">
                <span>Rigor Académico</span>
                <span class="material-symbols-outlined text-sm">science</span>
              </div>
            </div>

            <!-- Sencillo -->
            <div class="bg-surface-container-low rounded-xl p-space-md shadow-sm relative flex flex-col justify-between border-2 border-primary/20">
              <div class="space-y-space-xs">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-label-caps text-label-caps text-primary font-bold uppercase tracking-wider flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm text-primary">lightbulb</span>
                    En Palabras Sencillas
                  </span>
                  <span class="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps font-bold">
                    Clave de Examen
                  </span>
                </div>
                <h2 class="font-headline-sm text-headline-sm text-primary leading-snug">
                  Fisio Pedía
                </h2>
                <p class="font-body-sm text-body-sm text-on-surface leading-relaxed pt-1 font-medium">
                  "${term.simpleExplanation}"
                </p>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center justify-between text-primary font-label-caps text-label-caps">
                <span>Para retención a largo plazo</span>
                <span class="material-symbols-outlined text-sm">emoji_objects</span>
              </div>
            </div>
          </div>

          <!-- 3. Metáfora de la Vida Cotidiana -->
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-slate-border/50">
            <div class="flex items-start gap-space-md">
              <div class="w-12 h-12 rounded-xl bg-amber-quiz/10 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-2xl text-amber-quiz">nature_people</span>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="font-label-caps text-label-caps text-amber-quiz font-bold uppercase tracking-widest">
                    Analogía de la Vida Cotidiana
                  </span>
                  <span class="text-outline-variant">•</span>
                  <span class="font-label-sm text-label-sm text-slate-muted">Ejemplo real</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface">
                  ${term.everydayTitle}
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  ${term.everydayExample}
                </p>
              </div>
            </div>
          </div>

          <!-- 4. Relevancia en Fisioterapia -->
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-slate-border/50">
            <div class="flex items-center justify-between mb-space-sm">
              <div class="flex items-center gap-2">
                <span class="w-8 h-8 rounded-lg bg-cat-muscles/15 text-cat-muscles flex items-center justify-center">
                  <span class="material-symbols-outlined text-lg">medical_services</span>
                </span>
                <h3 class="font-headline-sm text-headline-sm text-on-surface">
                  ${term.clinicalTitle}
                </h3>
              </div>
              <span class="font-label-caps text-label-caps text-cat-muscles uppercase font-bold tracking-wider">
                Relevancia Clínica
              </span>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              ${term.clinicalRelevance}
            </p>

            <div class="mt-4 p-4 rounded-xl bg-surface-container-low border-l-4 border-primary">
              <span class="font-label-caps text-label-caps text-primary font-bold uppercase tracking-wider block mb-1">
                Caso Práctico en Consulta
              </span>
              <p class="font-body-sm text-body-sm text-on-surface">
                ${term.clinicalCase}
              </p>
            </div>
          </div>
        </section>

        <!-- COLUMNA DERECHA (5 columnas): Diccionario Visual & Ficha Técnica -->
        <aside class="lg:col-span-5 flex flex-col gap-space-lg sticky top-24">
          <!-- Diagrama Visual -->
          <div class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-slate-border/50">
            <div class="flex items-center justify-between mb-space-sm">
              <div>
                <span class="font-label-caps text-label-caps text-cat-muscles font-bold uppercase tracking-wider">
                  Diccionario Visual
                </span>
                <h3 class="font-headline-sm text-headline-sm text-on-surface">
                  Representación Anatómica
                </h3>
              </div>
              <span class="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">
                Esquema
              </span>
            </div>

            <div class="bg-surface-container-low rounded-xl p-4 flex items-center justify-center overflow-hidden">
              ${getTermSvg(term.svgType)}
            </div>

            <!-- Tabla de datos estructurados -->
            <div class="mt-4 pt-4 border-t border-slate-border flex flex-col gap-2.5">
              ${term.keyDetails.map(detail => `
                <div class="flex items-start justify-between text-xs gap-3">
                  <span class="text-slate-muted font-semibold shrink-0">${detail.label}:</span>
                  <span class="text-on-surface text-right font-medium">${detail.value}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Botón de regreso -->
          <a href="#explorador" class="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">
            <span class="material-symbols-outlined text-base">arrow_back</span>
            <span>Volver al Explorador de Términos</span>
          </a>
        </aside>
      </div>
    `;
  }

  function bindTerminoEvents() {
    // Eventos específicos de ficha de término si aplican
  }

  // ==========================================
  // VISTA 3: MIS FAVORITOS & FLASHCARDS 3D
  // ==========================================
  function renderFavoritosView() {
    const favTerms = FISIOPEDIA_TERMS.filter(t => state.favorites.has(t.id));
    const activeDeck = favTerms.length > 0 ? favTerms : FISIOPEDIA_TERMS;
    const currentCard = activeDeck[state.flashcardIndex % activeDeck.length];

    return `
      <!-- Encabezado de Sección y Metadatos -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
        <div class="max-w-[65ch]">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cat-muscles/10 text-primary mb-2">
            <span class="material-symbols-outlined text-sm">psychology</span>
            <span class="font-label-caps text-label-caps uppercase tracking-wider">Técnica de Repetición Activa</span>
          </div>
          <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Mi Espacio de Estudio &amp; Favoritos</h1>
          <p class="font-body-md text-body-md text-on-surface-variant mt-1">
            Repasa los términos guardados mediante fichas interactivas en 3D, metáforas de la vida diaria y refuerzo visual.
          </p>
        </div>

        <div class="flex items-center gap-space-sm">
          <button id="shuffle-deck-btn" class="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md transition-all shadow-sm">
            <span class="material-symbols-outlined text-lg">shuffle</span>
            <span>Mezclar Tarjetas</span>
          </button>
        </div>
      </div>

      <!-- Métricas Superiores -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-xl">
        <div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-center justify-between border border-slate-border/40">
          <div class="flex flex-col">
            <span class="font-label-caps text-label-caps uppercase text-slate-muted">Términos Guardados</span>
            <span class="font-display text-display text-on-surface mt-1 leading-none">${state.favorites.size}</span>
            <span class="font-body-sm text-body-sm text-on-surface-variant mt-2 flex items-center gap-1">
              <span class="material-symbols-outlined text-cat-bones text-sm">bookmark</span>
              Guardados en este dispositivo
            </span>
          </div>
          <div class="w-14 h-14 rounded-full bg-cat-bones/10 text-cat-bones flex items-center justify-center">
            <span class="material-symbols-outlined text-2xl">auto_stories</span>
          </div>
        </div>

        <div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-center justify-between border border-slate-border/40">
          <div class="flex flex-col">
            <span class="font-label-caps text-label-caps uppercase text-slate-muted">Total en Compendio</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="font-display text-display text-primary leading-none">${FISIOPEDIA_TERMS.length}</span>
              <span class="font-label-md text-label-md text-primary font-bold">conceptos</span>
            </div>
            <div class="w-36 h-2 bg-surface-container-high rounded-full overflow-hidden mt-3">
              <div class="bg-primary h-full rounded-full" style="width: ${Math.round((state.favorites.size / FISIOPEDIA_TERMS.length) * 100)}%"></div>
            </div>
          </div>
          <div class="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <span class="material-symbols-outlined text-2xl">verified</span>
          </div>
        </div>

        <div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-center justify-between border border-slate-border/40">
          <div class="flex flex-col">
            <span class="font-label-caps text-label-caps uppercase text-slate-muted">Modo de Repaso</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="font-display text-display text-amber-quiz leading-none">3D</span>
              <span class="font-label-sm text-label-sm text-amber-quiz font-bold">Flashcard</span>
            </div>
            <span class="font-body-sm text-body-sm text-slate-muted mt-2 flex items-center gap-1">
              <span class="material-symbols-outlined text-amber-quiz text-sm">touch_app</span>
              Haz clic para girar la ficha
            </span>
          </div>
          <div class="w-14 h-14 rounded-full bg-amber-quiz/15 text-amber-quiz flex items-center justify-center">
            <span class="material-symbols-outlined text-2xl">style</span>
          </div>
        </div>
      </div>

      <!-- VISOR INTERACTIVO 3D DE FLASHCARDS -->
      <div class="w-full bg-gradient-to-br from-surface-container-lowest via-surface-container-low to-surface-container-lowest p-6 md:p-10 rounded-2xl shadow-md mb-space-xl relative overflow-hidden border border-slate-border/60">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-quiz animate-pulse"></span>
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Modo Activo de Repaso</span>
          </div>
          <span class="font-label-md text-label-md text-primary font-bold">
            Tarjeta ${(state.flashcardIndex % activeDeck.length) + 1} de ${activeDeck.length} ${favTerms.length === 0 ? '(Todas)' : '(En Favoritos)'}
          </span>
        </div>

        <!-- CONTENEDOR 3D FLIP CARD -->
        <div class="w-full max-w-3xl mx-auto perspective-1000 mb-6">
          <div
            id="flashcard-3d-element"
            class="relative w-full min-h-[380px] rounded-2xl transform-style-3d card-flip-transition cursor-pointer shadow-lg ${state.flashcardFlipped ? 'flipped' : ''}"
          >
            <!-- CARA ANVERSO (FRENTE) -->
            <div class="absolute inset-0 w-full h-full rounded-2xl bg-surface-container-lowest p-8 flex flex-col justify-between backface-hidden border border-slate-border">
              <div class="flex items-start justify-between">
                <span class="px-3 py-1 rounded-full font-label-caps text-label-caps uppercase ${currentCard.categoryClass} font-bold">
                  ${currentCard.categoryLabel}
                </span>
                <div class="flex items-center gap-1 text-slate-muted">
                  <span class="material-symbols-outlined text-lg">touch_app</span>
                  <span class="font-label-sm text-label-sm">Clic para voltear</span>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center text-center my-auto py-4">
                <span class="font-label-caps text-label-caps uppercase text-slate-muted tracking-widest mb-2">${currentCard.regionLabel}</span>
                <h2 class="font-headline-lg text-headline-lg text-slate-strong tracking-tight max-w-[20ch]">
                  ${currentCard.name}
                </h2>
                <p class="font-body-md text-body-md text-slate-muted mt-3 max-w-[45ch]">
                  ¿Recuerdas su definición sencilla y el ejemplo de la vida diaria?
                </p>
              </div>

              <div class="flex items-center justify-between pt-2 border-t border-slate-border/50">
                <span class="font-body-sm text-body-sm text-slate-muted flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">schedule</span> ${currentCard.readingTime}
                </span>
                <button id="btn-flip-trigger" type="button" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">
                  <span class="material-symbols-outlined text-lg text-primary">sync</span>
                  <span>Girar Ficha</span>
                </button>
              </div>
            </div>

            <!-- CARA REVERSO (DORSO) -->
            <div class="absolute inset-0 w-full h-full rounded-2xl bg-surface-container-lowest p-8 flex flex-col justify-between backface-hidden rotate-y-180 border-2 border-primary/40 shadow-xl">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full font-label-caps text-label-caps uppercase bg-primary/10 text-primary font-bold">
                      En Palabras Sencillas
                    </span>
                    <span class="px-2.5 py-1 rounded-full font-label-caps text-label-caps bg-surface-container-high text-on-surface-variant">
                      ${currentCard.regionLabel}
                    </span>
                  </div>
                  <span class="font-label-caps text-label-caps text-slate-muted">Dorso de la ficha</span>
                </div>

                <div class="p-4 rounded-xl bg-surface-container-low mb-4">
                  <span class="font-label-caps text-label-caps text-primary font-bold block mb-1">Concepto Central:</span>
                  <p class="font-body-md text-body-md text-on-surface font-medium leading-relaxed">
                    "${currentCard.simpleExplanation}"
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-amber-quiz/10">
                  <span class="font-label-caps text-label-caps text-amber-quiz font-bold block mb-1">Ejemplo Cotidiano:</span>
                  <p class="font-body-sm text-body-sm text-on-surface leading-snug">
                    ${currentCard.everydayExample}
                  </p>
                </div>
              </div>

              <div class="flex items-center justify-between pt-3 border-t border-slate-border">
                <a href="#termino/${currentCard.id}" class="text-xs text-primary font-bold hover:underline flex items-center gap-1">
                  Ver ficha completa <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <button id="btn-flip-back-trigger" type="button" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm">
                  <span class="material-symbols-outlined text-sm text-primary">sync</span>
                  Volver al frente
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- CONTROLES DE LA BARAJA -->
        <div class="flex items-center justify-center gap-4">
          <button id="prev-card-btn" class="flex items-center gap-1 px-4 py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container border border-slate-border text-on-surface font-label-md text-label-md shadow-sm transition-all">
            <span class="material-symbols-outlined text-base">arrow_back</span>
            <span>Anterior</span>
          </button>
          <button id="next-card-btn" class="flex items-center gap-1 px-5 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm transition-all">
            <span>Siguiente</span>
            <span class="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </div>

      <!-- LISTA DE TÉRMINOS FAVORITOS GUARDADOS -->
      <section class="mt-8">
        <h2 class="font-headline-sm text-headline-sm text-on-surface mb-4">Términos que estás repasando (${favTerms.length})</h2>
        ${favTerms.length === 0 ? `
          <div class="p-8 text-center rounded-2xl bg-surface-container-lowest border border-dashed border-slate-border">
            <span class="material-symbols-outlined text-4xl text-slate-muted mb-2">bookmark_border</span>
            <p class="font-body-md text-body-md text-slate-muted">Aún no has guardado términos en favoritos.</p>
            <p class="font-body-sm text-body-sm text-slate-muted mt-1">Haz clic en el icono de guardar en cualquier término del explorador para tenerlo a mano aquí.</p>
            <a href="#explorador" class="mt-4 inline-block px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md">
              Explorar Términos
            </a>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${favTerms.map(term => `
              <div class="p-4 rounded-xl bg-surface-container-lowest border border-slate-border flex items-start justify-between gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span class="px-2.5 py-0.5 rounded-full ${term.categoryClass} text-[10px] uppercase font-bold tracking-wider">
                    ${term.categoryLabel}
                  </span>
                  <h4 class="font-headline-sm text-base text-on-surface font-bold mt-2 cursor-pointer hover:text-primary transition-colors" onclick="window.location.hash='#termino/${term.id}'">
                    ${term.name}
                  </h4>
                  <p class="font-body-sm text-xs text-slate-muted mt-1 line-clamp-2">
                    ${term.simpleExplanation}
                  </p>
                </div>
                <button onclick="window.fisiopediaApp.toggleFav('${term.id}')" class="text-amber-quiz hover:text-coral-alert p-1" title="Quitar de favoritos">
                  <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">bookmark</span>
                </button>
              </div>
            `).join('')}
          </div>
        `}
      </section>
    `;
  }

  function bindFavoritosEvents() {
    const cardElement = document.getElementById('flashcard-3d-element');
    const btnFlip = document.getElementById('btn-flip-trigger');
    const btnFlipBack = document.getElementById('btn-flip-back-trigger');
    const prevBtn = document.getElementById('prev-card-btn');
    const nextBtn = document.getElementById('next-card-btn');
    const shuffleBtn = document.getElementById('shuffle-deck-btn');

    function toggleFlip(e) {
      if (e) e.stopPropagation();
      state.flashcardFlipped = !state.flashcardFlipped;
      if (cardElement) {
        cardElement.classList.toggle('flipped', state.flashcardFlipped);
      }
    }

    if (cardElement) {
      cardElement.addEventListener('click', toggleFlip);
    }
    if (btnFlip) {
      btnFlip.addEventListener('click', toggleFlip);
    }
    if (btnFlipBack) {
      btnFlipBack.addEventListener('click', toggleFlip);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        state.flashcardFlipped = false;
        state.flashcardIndex = Math.max(0, state.flashcardIndex - 1);
        renderCurrentRoute();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        state.flashcardFlipped = false;
        state.flashcardIndex++;
        renderCurrentRoute();
      });
    }

    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        state.flashcardFlipped = false;
        state.flashcardIndex = Math.floor(Math.random() * FISIOPEDIA_TERMS.length);
        renderCurrentRoute();
        showToast('Baraja mezclada aleatoriamente', 'shuffle');
      });
    }
  }

  // ==========================================
  // VISTA 4: CUESTIONARIOS DE AUTOEVALUACIÓN
  // ==========================================
  function renderQuizzesView() {
    const quiz = FISIOPEDIA_QUIZZES[state.quizIndex % FISIOPEDIA_QUIZZES.length];
    const totalQuestions = FISIOPEDIA_QUIZZES.length;
    const progressPercent = Math.round(((state.quizIndex + 1) / totalQuestions) * 100);
    const selectedOptionId = state.quizUserAnswers[state.quizIndex];
    const isSubmitted = state.quizSubmitted[state.quizIndex] === true;

    return `
      <!-- Barra superior de estado -->
      <section class="w-full mb-space-lg">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm border border-slate-border/50">
          <div class="flex items-center gap-space-md">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">quiz</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-label-caps text-label-caps uppercase text-primary tracking-wider font-bold">Cuestionario Activo</span>
                <span class="w-1.5 h-1.5 rounded-full bg-cat-muscles animate-pulse"></span>
                <span class="font-label-sm text-label-sm text-slate-muted">Práctica de conceptos</span>
              </div>
              <h1 class="font-headline-sm text-headline-sm text-slate-strong">Autoevaluación: Biomecánica &amp; Anatomía</h1>
            </div>
          </div>

          <!-- Badges de racha y aciertos -->
          <div class="flex items-center gap-space-sm flex-wrap">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface">
              <span class="material-symbols-outlined text-amber-quiz text-lg" style="font-variation-settings: 'FILL' 1;">bolt</span>
              <span class="font-label-md text-label-md font-bold">${state.quizScore * 100} pts</span>
            </div>
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cat-muscles/10 text-cat-muscles">
              <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">check_circle</span>
              <span class="font-label-md text-label-md font-bold">${state.quizScore} aciertos</span>
            </div>
            <button onclick="window.fisiopediaApp.resetQuiz()" class="p-2 rounded-lg bg-surface-container text-slate-muted hover:text-on-surface transition-colors" title="Reiniciar Cuestionario">
              <span class="material-symbols-outlined text-base">restart_alt</span>
            </button>
          </div>
        </div>

        <!-- Barra de Progreso -->
        <div class="mt-space-sm p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-2 border border-slate-border/50">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="font-label-md text-label-md text-slate-strong">Pregunta ${state.quizIndex + 1} de ${totalQuestions}</span>
              <span class="font-body-sm text-body-sm text-slate-muted">• ${quiz.category}</span>
            </div>
            <span class="font-label-caps text-label-caps text-primary uppercase font-bold">${progressPercent}% Completado</span>
          </div>
          <div class="w-full h-2.5 bg-slate-subtle rounded-full overflow-hidden flex">
            <div class="h-full bg-primary rounded-full transition-all duration-500 ease-out" style="width: ${progressPercent}%"></div>
          </div>
        </div>
      </section>

      <!-- Grid Principal 7:5 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <!-- Columna de Pregunta y Opciones (8 cols) -->
        <div class="lg:col-span-8 flex flex-col gap-space-lg min-w-0">
          <article class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden border border-slate-border/50">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-full font-label-caps text-label-caps text-primary bg-primary/10 font-bold">
                  ${quiz.level}
                </span>
                <span class="px-2.5 py-1 rounded-full font-label-caps text-label-caps text-cat-bones bg-cat-bones/10 font-bold">
                  ${quiz.category}
                </span>
              </div>
              <div class="flex items-center gap-1 text-slate-muted">
                <span class="material-symbols-outlined text-sm">menu_book</span>
                <span class="font-label-sm text-label-sm">Caso Cotidiano</span>
              </div>
            </div>

            <!-- Enunciado -->
            <div>
              <h2 class="font-headline-sm text-headline-sm text-slate-strong leading-snug">
                ${quiz.question}
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                ${quiz.scenario}
              </p>
            </div>

            <!-- Opciones A / B / C / D -->
            <div class="flex flex-col gap-3 mt-2">
              ${quiz.options.map(opt => {
                let cardClass = 'bg-surface-container-low hover:bg-surface-container cursor-pointer';
                let circleClass = 'bg-surface-container-highest text-slate-strong';
                let indicatorIcon = '';

                if (isSubmitted) {
                  if (opt.isCorrect) {
                    cardClass = 'bg-cat-muscles/15 border-2 border-cat-muscles shadow-sm';
                    circleClass = 'bg-cat-muscles text-on-primary';
                    indicatorIcon = '<span class="material-symbols-outlined text-sm font-bold">check</span>';
                  } else if (selectedOptionId === opt.id && !opt.isCorrect) {
                    cardClass = 'bg-coral-alert/15 border-2 border-coral-alert';
                    circleClass = 'bg-coral-alert text-on-primary';
                    indicatorIcon = '<span class="material-symbols-outlined text-sm font-bold">close</span>';
                  } else {
                    cardClass = 'bg-surface-container-low opacity-60';
                  }
                } else if (selectedOptionId === opt.id) {
                  cardClass = 'bg-primary/15 border-2 border-primary shadow-sm';
                  circleClass = 'bg-primary text-on-primary';
                }

                return `
                  <div
                    onclick="window.fisiopediaApp.selectQuizOption('${opt.id}')"
                    class="w-full flex items-center justify-between p-4 rounded-xl ${cardClass} transition-all duration-150 relative"
                  >
                    <div class="flex items-center gap-space-md">
                      <div class="w-8 h-8 rounded-lg ${circleClass} flex items-center justify-center font-label-md text-label-md shrink-0 shadow-sm font-bold">
                        ${opt.id}
                      </div>
                      <div class="flex flex-col text-left">
                        <span class="font-label-md text-label-md text-slate-strong font-bold">${opt.text}</span>
                        <span class="font-body-sm text-body-sm text-slate-muted">${opt.detail}</span>
                      </div>
                    </div>
                    <div class="w-6 h-6 rounded-full shrink-0 flex items-center justify-center">
                      ${indicatorIcon}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Explicación post-respuesta -->
            ${isSubmitted ? `
              <div class="mt-4 p-4 rounded-xl bg-surface-container-low border-l-4 ${quiz.options.find(o => o.id === selectedOptionId)?.isCorrect ? 'border-cat-muscles bg-cat-muscles/10' : 'border-coral-alert bg-coral-alert/10'}">
                <div class="flex items-center gap-2 mb-1">
                  <span class="material-symbols-outlined text-lg ${quiz.options.find(o => o.id === selectedOptionId)?.isCorrect ? 'text-cat-muscles' : 'text-coral-alert'}">
                    ${quiz.options.find(o => o.id === selectedOptionId)?.isCorrect ? 'task_alt' : 'info'}
                  </span>
                  <span class="font-label-caps text-label-caps font-bold uppercase">
                    ${quiz.options.find(o => o.id === selectedOptionId)?.isCorrect ? '¡Respuesta Correcta!' : 'Explicación Pedagógica'}
                  </span>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface leading-relaxed">
                  ${quiz.explanation}
                </p>
              </div>
            ` : ''}

            <!-- Botones de Acción -->
            <div class="mt-4 pt-4 border-t border-slate-border flex items-center justify-between">
              <span class="text-xs text-slate-muted">Selecciona una opción y verifica tu conocimiento.</span>
              ${!isSubmitted ? `
                <button
                  onclick="window.fisiopediaApp.submitQuizAnswer()"
                  ${!selectedOptionId ? 'disabled' : ''}
                  class="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-on-primary font-label-md text-label-md shadow-sm transition-all"
                >
                  Comprobar Respuesta
                </button>
              ` : `
                <button
                  onclick="window.fisiopediaApp.nextQuizQuestion()"
                  class="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-2"
                >
                  <span>${state.quizIndex + 1 < totalQuestions ? 'Siguiente Pregunta' : 'Completar Cuestionario'}</span>
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              `}
            </div>
          </article>
        </div>

        <!-- Columna Lateral de Contexto Biomecánico (4 cols) -->
        <aside class="lg:col-span-4 flex flex-col gap-space-md">
          <div class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-slate-border/50">
            <div class="flex items-center gap-2 mb-2">
              <span class="material-symbols-outlined text-primary text-base">explore</span>
              <span class="font-label-caps text-label-caps text-slate-muted uppercase tracking-wider font-bold">Pista Biomecánica</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              ${quiz.hint}
            </p>

            <div class="mt-4 pt-3 border-t border-slate-border flex flex-col gap-2">
              <span class="font-label-caps text-label-caps text-slate-muted">Eje &amp; Plano:</span>
              <span class="font-label-sm text-label-sm font-semibold text-primary">${quiz.planeAxis}</span>
            </div>

            <div class="grid grid-cols-1 gap-2 mt-3">
              ${quiz.metrics.map(m => `
                <div class="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between text-xs">
                  <span class="text-slate-muted font-medium">${m.label}:</span>
                  <span class="font-bold text-on-surface">${m.value}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </aside>
      </div>
    `;
  }

  function bindQuizzesEvents() {
    // Eventos específicos de quizzes si aplican
  }

  // --- MÉTODOS PÚBLICOS EN WINDOW PARA LLAMADAS INLINE ---
  window.fisiopediaApp = {
    toggleFav: (id) => toggleFavorite(id),
    speak: (term) => speakTerm(term),
    clearSearch: () => {
      state.searchTerm = '';
      state.selectedCategory = 'todos';
      state.selectedRegion = 'todas';
      renderCurrentRoute();
    },
    selectQuizOption: (optionId) => {
      if (state.quizSubmitted[state.quizIndex]) return;
      state.quizUserAnswers[state.quizIndex] = optionId;
      renderCurrentRoute();
    },
    submitQuizAnswer: () => {
      const optionId = state.quizUserAnswers[state.quizIndex];
      if (!optionId) return;
      state.quizSubmitted[state.quizIndex] = true;
      const quiz = FISIOPEDIA_QUIZZES[state.quizIndex % FISIOPEDIA_QUIZZES.length];
      const opt = quiz.options.find(o => o.id === optionId);
      if (opt && opt.isCorrect) {
        state.quizScore++;
        showToast('¡Respuesta correcta! +100 XP', 'verified');
      } else {
        showToast('Respuesta incorrecta. Revisa la explicación.', 'error');
      }
      renderCurrentRoute();
    },
    nextQuizQuestion: () => {
      if (state.quizIndex + 1 < FISIOPEDIA_QUIZZES.length) {
        state.quizIndex++;
        renderCurrentRoute();
      } else {
        // Cuestionario completado
        showToast(`¡Cuestionario finalizado! Obtuviste ${state.quizScore} de ${FISIOPEDIA_QUIZZES.length} aciertos.`, 'celebration');
        state.quizIndex = 0;
        state.quizSubmitted = {};
        state.quizUserAnswers = {};
        renderCurrentRoute();
      }
    },
    resetQuiz: () => {
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizSubmitted = {};
      state.quizUserAnswers = {};
      renderCurrentRoute();
      showToast('Cuestionario reiniciado', 'restart_alt');
    }
  };

  // --- INICIALIZACIÓN ---
  document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();
    initRouter();

    // Atajo de teclado global Ctrl+K / Cmd+K para enfocar búsqueda
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        navigateTo('#explorador');
        setTimeout(() => {
          const input = document.getElementById('main-search-input');
          if (input) {
            input.focus();
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    });
  });

})();
