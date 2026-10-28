// Fisio Pedía - Lógica de Aplicación Completa
// SPA interactiva conectada a FisioStorage, con Diccionario Visual SVG integral, Flashcards 3D y Quizzes.

(function () {
  'use strict';

  // --- ESTADO GLOBAL REACTIVO ---
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
    flashcardCategory: 'todas',
    quizIndex: 0,
    quizScore: 0,
    quizStreak: 4,
    quizUserAnswers: {},
    quizSubmitted: {},
    quizCompleted: false
  };

  // --- PERSISTENCIA CON FISIOSTORAGE & FIRESTORE ---
  function loadInitialState() {
    if (typeof FisioStorage !== 'undefined') {
      const favList = FisioStorage.getFavorites();
      state.favorites = new Set(favList);
      const stats = FisioStorage.getQuizStats();
      if (stats && stats.streak) state.quizStreak = stats.streak;

      // Suscripciones reactivas a Cloud Firestore
      FisioStorage.subscribe('favorites-updated', (newFavs) => {
        state.favorites = new Set(newFavs);
        updateFavoritesBadges();
        if (state.route === 'favoritos' || state.route === 'explorador') {
          renderCurrentRoute();
        }
      });

      FisioStorage.subscribe('status-changed', (cloudStatus) => {
        if (typeof updateCloudStatusUI === 'function') {
          updateCloudStatusUI(cloudStatus);
        }
      });

      FisioStorage.subscribe('sync-completed', () => {
        showToast('Datos sincronizados con Firestore', 'cloud_done');
      });
    } else {
      state.favorites = new Set(['propiocepcion', 'flexion-extension', 'tendon-aquiles']);
    }
  }

  function persistFavorites() {
    if (typeof FisioStorage !== 'undefined') {
      FisioStorage.saveFavorites(Array.from(state.favorites));
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
    persistFavorites();
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

  // --- NOTIFICACIONES TOAST ---
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

  // --- AUDIO / PRONUNCIACIÓN MÉDICA ---
  function speakTerm(termName) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(termName);
      utterance.lang = 'es-ES';
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
      showToast(`Pronunciando: ${termName}`, 'volume_up');
    } else {
      showToast('Síntesis de voz no disponible en este navegador', 'volume_off');
    }
  }

  // --- GENERADOR INTEGRAL DE DICCIONARIO VISUAL (SVG) ---
  function getTermSvg(type) {
    switch (type) {
      case 'propiocepcion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Vientre muscular -->
            <path d="M 60 100 C 110 50 250 50 300 100 C 250 150 110 150 60 100 Z" fill="#0D9488" opacity="0.85"/>
            <!-- Tendones -->
            <rect x="20" y="93" width="45" height="14" rx="3" fill="#94A3B8"/>
            <rect x="295" y="93" width="45" height="14" rx="3" fill="#94A3B8"/>
            <!-- Huso Neuromuscular -->
            <ellipse cx="180" cy="100" rx="30" ry="12" fill="#00685f" fill-opacity="0.3"/>
            <path d="M 155 100 Q 165 92 175 100 T 195 100 T 205 100" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
            <circle cx="180" cy="100" r="4" fill="#FFFFFF"/>
            <text x="180" y="70" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Huso Neuromuscular (Longitud)</text>
            <!-- Órgano Tendinoso de Golgi -->
            <rect x="290" y="90" width="22" height="20" rx="4" fill="#F59E0B" fill-opacity="0.4"/>
            <circle cx="301" cy="100" r="3.5" fill="#F59E0B"/>
            <text x="290" y="140" fill="#F59E0B" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Golgi (Tensión)</text>
          </svg>
        `;

      case 'flexion_extension':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <circle cx="180" cy="120" r="12" fill="#00685f"/>
            <!-- Brazo fijo -->
            <line x1="180" y1="120" x2="280" y2="120" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
            <!-- Flexión -->
            <line x1="180" y1="120" x2="110" y2="40" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
            <!-- Extensión -->
            <line x1="180" y1="120" x2="80" y2="120" stroke="#F59E0B" stroke-width="7" stroke-dasharray="6 4" stroke-linecap="round"/>
            <!-- Arco de movimiento -->
            <path d="M 240 120 A 60 60 0 0 0 135 65" stroke="#0D9488" stroke-width="2.5" fill="none" stroke-dasharray="4 3"/>
            <text x="115" y="30" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">FLEXIÓN (Disminuye ángulo)</text>
            <text x="50" y="145" fill="#F59E0B" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">EXTENSIÓN (Aumenta ángulo)</text>
          </svg>
        `;

      case 'abduccion_aduccion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Línea media del cuerpo -->
            <line x1="180" y1="20" x2="180" y2="180" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4 4"/>
            <text x="185" y="30" fill="#94A3B8" font-size="9" font-family="Inter">Línea Media</text>
            <!-- Centro articular (Hombro / Cadera) -->
            <circle cx="180" cy="90" r="8" fill="#00685f"/>
            <!-- Abducción (se aleja) -->
            <line x1="180" y1="90" x2="70" y2="40" stroke="#0D9488" stroke-width="7" stroke-linecap="round"/>
            <path d="M 120 90 Q 110 65 90 55" stroke="#0D9488" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
            <text x="40" y="30" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">ABDUCCIÓN (Separa)</text>
            <!-- Aducción (se acerca) -->
            <line x1="180" y1="90" x2="195" y2="160" stroke="#6366F1" stroke-width="7" stroke-linecap="round"/>
            <text x="210" y="150" fill="#6366F1" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">ADUCCIÓN (Añade al centro)</text>
          </svg>
        `;

      case 'rotacion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Húmero central -->
            <rect x="170" y="30" width="20" height="130" rx="8" fill="#CBD5E1"/>
            <line x1="180" y1="15" x2="180" y2="185" stroke="#64748B" stroke-width="2" stroke-dasharray="4 3"/>
            <!-- Giro Rotación Interna -->
            <path d="M 160 80 C 130 90 130 110 160 120" stroke="#0D9488" stroke-width="3" fill="none"/>
            <text x="60" y="105" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Rot. Interna</text>
            <!-- Giro Rotación Externa -->
            <path d="M 200 80 C 230 90 230 110 200 120" stroke="#F59E0B" stroke-width="3" fill="none"/>
            <text x="235" y="105" fill="#F59E0B" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Rot. Externa</text>
          </svg>
        `;

      case 'supinacion_pronacion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Supinación (Radio y Cúbito paralelos) -->
            <g transform="translate(40, 30)">
              <rect x="10" y="20" width="12" height="100" rx="4" fill="#0D9488"/>
              <rect x="35" y="20" width="12" height="100" rx="4" fill="#64748B"/>
              <text x="30" y="140" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">SUPINACIÓN</text>
              <text x="30" y="155" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Palma arriba (Paralelos)</text>
            </g>
            <!-- Pronación (Radio cruza cúbito) -->
            <g transform="translate(200, 30)">
              <rect x="35" y="20" width="12" height="100" rx="4" fill="#64748B"/>
              <line x1="10" y1="20" x2="60" y2="120" stroke="#F59E0B" stroke-width="12" stroke-linecap="round"/>
              <text x="35" y="140" text-anchor="middle" fill="#F59E0B" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">PRONACIÓN</text>
              <text x="35" y="155" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Radio cruza sobre Cúbito</text>
            </g>
          </svg>
        `;

      case 'inversion_eversion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Pie en Inversión -->
            <g transform="translate(40, 25)">
              <ellipse cx="60" cy="90" rx="40" ry="20" transform="rotate(-25 60 90)" fill="#0D9488" opacity="0.8"/>
              <text x="60" y="145" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">INVERSIÓN</text>
              <text x="60" y="160" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Planta hacia adentro (85% esguinces)</text>
            </g>
            <!-- Pie en Eversión -->
            <g transform="translate(200, 25)">
              <ellipse cx="60" cy="90" rx="40" ry="20" transform="rotate(25 60 90)" fill="#6366F1" opacity="0.8"/>
              <text x="60" y="145" text-anchor="middle" fill="#6366F1" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">EVERSIÓN</text>
              <text x="60" y="160" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Planta hacia afuera</text>
            </g>
          </svg>
        `;

      case 'tendon_aquiles':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Gemelos / Sóleo -->
            <path d="M 140 20 C 120 50 120 80 150 105 L 170 105 C 200 80 200 50 180 20 Z" fill="#0D9488" opacity="0.85"/>
            <!-- Tendón Aquileo -->
            <rect x="152" y="105" width="18" height="55" rx="3" fill="#0284C7"/>
            <!-- Calcáneo -->
            <path d="M 135 160 C 135 150 150 150 160 160 C 175 170 205 170 215 160 L 215 185 L 135 185 Z" fill="#94A3B8"/>
            <circle cx="161" cy="160" r="5" fill="#F43F5E"/>
            <text x="185" y="130" fill="#0284C7" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Tendón de Aquiles</text>
            <text x="185" y="145" fill="#64748B" font-size="9" font-family="Inter">Zona hipovascular (2-6 cm)</text>
            <text x="65" y="60" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Tríceps Sural</text>
            <text x="65" y="175" fill="#64748B" font-size="10" font-family="Inter">Calcáneo (Talón)</text>
          </svg>
        `;

      case 'manguito_rotador':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Cabeza del húmero -->
            <circle cx="180" cy="105" r="45" fill="#CBD5E1"/>
            <text x="180" y="110" text-anchor="middle" fill="#475569" font-size="11" font-family="Inter">Húmero</text>
            <!-- Escápula / Glenoides -->
            <path d="M 130 55 Q 120 105 130 155" stroke="#64748B" stroke-width="9" stroke-linecap="round"/>
            <text x="60" y="110" fill="#64748B" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Escápula</text>
            <!-- Músculos Manguito -->
            <path d="M 145 35 Q 180 50 215 75" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
            <text x="210" y="45" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">1. Supraespinoso</text>
            <path d="M 195 145 Q 170 155 140 148" stroke="#F59E0B" stroke-width="7" stroke-linecap="round"/>
            <text x="195" y="170" fill="#F59E0B" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">2. Infraespinoso / Redondo</text>
          </svg>
        `;

      case 'lca':
      case 'lcp':
      case 'lcm':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Fémur -->
            <path d="M 130 20 L 130 70 Q 130 90 150 95 Q 180 100 180 70 Q 180 100 210 95 Q 230 90 230 70 L 230 20 Z" fill="#CBD5E1"/>
            <text x="180" y="45" text-anchor="middle" fill="#475569" font-size="10" font-family="Inter">Fémur</text>
            <!-- Tibia -->
            <path d="M 125 135 Q 180 125 235 135 L 230 185 L 130 185 Z" fill="#94A3B8"/>
            <text x="180" y="170" text-anchor="middle" fill="#FFFFFF" font-size="10" font-family="Inter">Tibia</text>
            <!-- LCA -->
            <line x1="205" y1="80" x2="155" y2="135" stroke="#059669" stroke-width="${type === 'lca' ? '8' : '4'}" stroke-linecap="round"/>
            <text x="50" y="100" fill="#059669" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">LCA (freno ant.)</text>
            <!-- LCP -->
            <line x1="155" y1="80" x2="205" y2="135" stroke="#6366F1" stroke-width="${type === 'lcp' ? '8' : '4'}" stroke-dasharray="4 3" stroke-linecap="round"/>
            <text x="240" y="100" fill="#6366F1" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">LCP (freno post.)</text>
            <!-- LCM -->
            <line x1="128" y1="65" x2="125" y2="145" stroke="#0284C7" stroke-width="${type === 'lcm' ? '8' : '4'}" stroke-linecap="round"/>
            <text x="35" y="130" fill="#0284C7" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">LCM (valgo)</text>
          </svg>
        `;

      case 'cuadriceps':
      case 'isquiotibiales':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Muslo -->
            <path d="M 140 20 C 120 70 120 120 150 150 L 175 150 C 205 120 205 70 185 20 Z" fill="${type === 'cuadriceps' ? '#0D9488' : '#F59E0B'}" opacity="0.85"/>
            <!-- Rótula y tendón rotuliano -->
            <circle cx="162" cy="155" r="9" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>
            <rect x="158" y="164" width="8" height="20" fill="#0284C7"/>
            <text x="162" y="90" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="bold" font-family="Plus Jakarta Sans">
              ${type === 'cuadriceps' ? '4 Vientres (Extensión)' : 'Isquiotibiales (Flexión)'}
            </text>
            <text x="162" y="108" text-anchor="middle" fill="#FFFFFF" font-size="9" font-family="Inter">
              ${type === 'cuadriceps' ? 'Recto, vasto med, lat, interm.' : 'Bíceps fem, semitend, semimembr.'}
            </text>
          </svg>
        `;

      case 'meniscos':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Platillo tibial -->
            <ellipse cx="180" cy="100" rx="110" ry="60" fill="#E2E8F0"/>
            <!-- Menisco Medial (Forma de C) -->
            <path d="M 110 65 A 40 40 0 0 0 110 135" stroke="#0D9488" stroke-width="16" stroke-linecap="round" fill="none"/>
            <text x="90" y="45" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Menisco Medial ("C")</text>
            <!-- Menisco Lateral (Forma de O casi cerrada) -->
            <ellipse cx="230" cy="100" rx="28" ry="32" stroke="#6366F1" stroke-width="15" fill="none"/>
            <text x="210" y="45" fill="#6366F1" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Menisco Lateral ("O")</text>
          </svg>
        `;

      case 'disco':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Vértebra superior -->
            <rect x="110" y="25" width="140" height="35" rx="6" fill="#94A3B8"/>
            <!-- Disco intervertebral -->
            <rect x="115" y="65" width="130" height="26" rx="8" fill="#CBD5E1"/>
            <!-- Anillo fibroso -->
            <rect x="115" y="65" width="130" height="26" rx="8" stroke="#0D9488" stroke-width="3" fill="none"/>
            <!-- Núcleo pulposo gel -->
            <ellipse cx="180" cy="78" rx="20" ry="7" fill="#06B6D4"/>
            <!-- Vértebra inferior -->
            <rect x="110" y="95" width="140" height="35" rx="6" fill="#94A3B8"/>
            <text x="180" y="160" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Anillo Fibroso + Núcleo Pulposo Hidrofílico</text>
          </svg>
        `;

      case 'goniometria':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Fulcro / Eje central -->
            <circle cx="140" cy="130" r="35" fill="#E2E8F0" stroke="#00685f" stroke-width="3"/>
            <circle cx="140" cy="130" r="6" fill="#00685f"/>
            <!-- Escala graduada -->
            <path d="M 175 130 A 35 35 0 0 0 140 95" stroke="#94A3B8" stroke-width="2" stroke-dasharray="2 3"/>
            <!-- Brazo fijo -->
            <line x1="140" y1="130" x2="270" y2="130" stroke="#64748B" stroke-width="7" stroke-linecap="round"/>
            <text x="210" y="150" fill="#64748B" font-size="10" font-family="Inter">Brazo fijo</text>
            <!-- Brazo móvil en 45 grados -->
            <line x1="140" y1="130" x2="225" y2="45" stroke="#0D9488" stroke-width="7" stroke-linecap="round"/>
            <text x="210" y="35" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Brazo móvil (ROM)</text>
          </svg>
        `;

      case 'biceps':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Húmero de fondo -->
            <rect x="165" y="30" width="22" height="130" rx="8" fill="#CBD5E1"/>
            <!-- Vientre Muscular Bíceps -->
            <path d="M 160 55 C 130 85 130 115 160 145 C 185 135 185 70 160 55 Z" fill="#0D9488" opacity="0.88"/>
            <!-- Tendón Proximal Doble Cabeza -->
            <line x1="160" y1="55" x2="140" y2="25" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
            <line x1="165" y1="55" x2="185" y2="25" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
            <!-- Inserción en Tuberosidad del Radio -->
            <line x1="160" y1="145" x2="145" y2="175" stroke="#0284C7" stroke-width="5" stroke-linecap="round"/>
            <circle cx="145" cy="175" r="5" fill="#0284C7"/>
            <text x="50" y="95" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Bíceps Braquial</text>
            <text x="50" y="110" fill="#64748B" font-size="9" font-family="Inter">Flexor + Supinador</text>
            <text x="195" y="25" fill="#64748B" font-size="9" font-family="Inter">C. Corta / C. Larga</text>
            <text x="160" y="180" fill="#0284C7" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">Tuberosidad Radio</text>
          </svg>
        `;

      case 'fascia_plantar':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Silueta arco del pie -->
            <path d="M 60 135 C 80 110 140 100 220 125 L 300 135 C 290 150 250 155 210 150 L 90 155 Z" fill="#E2E8F0"/>
            <!-- Calcáneo -->
            <circle cx="85" cy="135" r="20" fill="#94A3B8"/>
            <text x="45" y="125" fill="#475569" font-size="10" font-family="Inter">Calcáneo</text>
            <!-- Fascia plantar tensa (Banda elástica) -->
            <path d="M 90 148 Q 180 135 285 142" stroke="#0D9488" stroke-width="6" stroke-linecap="round"/>
            <!-- Zona de dolor por fascitis -->
            <circle cx="95" cy="148" r="7" fill="#F43F5E"/>
            <circle cx="95" cy="148" r="14" stroke="#F43F5E" stroke-width="1.5" stroke-dasharray="3 3"/>
            <text x="180" y="95" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Mecanismo de Windlass (Cuerda de Arco)</text>
            <text x="180" y="172" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Banda Fibrosa Aponeurótica</text>
            <text x="110" y="132" fill="#F43F5E" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">Zona Fascitis</text>
          </svg>
        `;

      case 'psoas':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Columna lumbar -->
            <rect x="170" y="15" width="22" height="60" rx="4" fill="#94A3B8"/>
            <text x="200" y="35" fill="#64748B" font-size="9" font-family="Inter">Vértebras L1-L5</text>
            <!-- Pelvis / Fosa Ilíaca -->
            <path d="M 125 50 C 95 65 90 110 135 125" stroke="#CBD5E1" stroke-width="10" stroke-linecap="round" fill="none"/>
            <!-- Músculo Psoas-Ilíaco convergente -->
            <path d="M 172 30 C 150 70 145 110 135 155 L 150 155 C 160 115 178 70 182 30 Z" fill="#0D9488" opacity="0.85"/>
            <!-- Trocánter menor fémur -->
            <circle cx="140" cy="160" r="7" fill="#F59E0B"/>
            <text x="40" y="85" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Psoas Mayor + Ilíaco</text>
            <text x="40" y="100" fill="#64748B" font-size="9" font-family="Inter">Flexor Primordial de Cadera</text>
            <text x="155" y="165" fill="#F59E0B" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">Trocánter Menor</text>
          </svg>
        `;

      case 'cadena_cinetica':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Separador central -->
            <line x1="180" y1="20" x2="180" y2="180" stroke="#E2E8F0" stroke-width="2" stroke-dasharray="4 4"/>
            <!-- Cadena Abierta (CCA) -->
            <g transform="translate(10, 20)">
              <text x="80" y="20" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Cadena Abierta (CCA)</text>
              <circle cx="80" cy="60" r="8" fill="#64748B"/>
              <line x1="80" y1="60" x2="80" y2="110" stroke="#64748B" stroke-width="6" stroke-linecap="round"/>
              <line x1="80" y1="110" x2="120" y2="135" stroke="#0D9488" stroke-width="6" stroke-linecap="round"/>
              <circle cx="120" cy="135" r="6" fill="#0D9488"/>
              <text x="80" y="160" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Extremo Libre (Patada/Curl)</text>
            </g>
            <!-- Cadena Cerrada (CCC) -->
            <g transform="translate(190, 20)">
              <text x="80" y="20" text-anchor="middle" fill="#6366F1" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Cadena Cerrada (CCC)</text>
              <line x1="30" y1="140" x2="130" y2="140" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>
              <line x1="80" y1="60" x2="55" y2="105" stroke="#64748B" stroke-width="6" stroke-linecap="round"/>
              <line x1="55" y1="105" x2="80" y2="138" stroke="#6366F1" stroke-width="6" stroke-linecap="round"/>
              <circle cx="80" cy="138" r="6" fill="#6366F1"/>
              <text x="80" y="160" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Extremo Fijo (Sentadilla/Piso)</text>
            </g>
          </svg>
        `;

      default:
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="180" rx="12" fill="#F8FAFC"/>
            <circle cx="180" cy="90" r="32" fill="#0D9488" fill-opacity="0.15"/>
            <path d="M 170 90 L 180 80 L 190 90 M 180 82 L 180 102" stroke="#0D9488" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <text x="180" y="135" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Esquema Biomecánico Oficial</text>
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
      if (state.searchTerm) {
        const q = state.searchTerm.toLowerCase().trim();
        const matchesName = term.name.toLowerCase().includes(q);
        const matchesSimple = term.simpleExplanation.toLowerCase().includes(q);
        const matchesTech = term.technicalDef.toLowerCase().includes(q);
        const matchesExample = term.everydayExample.toLowerCase().includes(q);
        if (!matchesName && !matchesSimple && !matchesTech && !matchesExample) return false;
      }
      if (state.selectedCategory !== 'todos') {
        if (term.category !== state.selectedCategory) return false;
      }
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
            <span class="font-label-caps text-label-caps text-primary uppercase tracking-wider font-bold">Compendio Clínico Pedagógico</span>
            <span class="text-slate-muted text-xs">•</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Ciclo 2025</span>
          </div>

          <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight max-w-2xl font-bold">
            Aprende anatomía sin enredarte en tecnicismos
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant mt-3 max-w-xl">
            Conceptos médicos explicados con lenguaje claro, ilustraciones y ejemplos del día a día para que tu aprendizaje sea duradero.
          </p>

          <!-- BUSCADOR CON CATEGORÍAS -->
          <div class="w-full mt-8 bg-surface-container-lowest rounded-2xl shadow-md p-2.5 sm:p-3 flex flex-col gap-3 border border-slate-border/50">
            <div class="relative flex items-center w-full">
              <span class="material-symbols-outlined absolute left-4 text-primary text-2xl select-none">search</span>
              <input
                id="main-search-input"
                type="text"
                autocomplete="off"
                value="${state.searchTerm}"
                placeholder="Escribe un término (ej. Propiocepción, Isquiotibiales, Extensión, Menisco...)"
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
              <span class="font-label-sm text-label-sm text-slate-muted mr-1 hidden sm:inline-block font-bold">Tipo:</span>
              <button data-cat="todos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'todos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                Todos (${FISIOPEDIA_TERMS.length})
              </button>
              <button data-cat="musculos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'musculos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-muscles mr-1.5"></span>Músculos
              </button>
              <button data-cat="huesos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'huesos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-bones mr-1.5"></span>Huesos y Tendones
              </button>
              <button data-cat="articulaciones" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'articulaciones' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-joints mr-1.5"></span>Articulaciones
              </button>
              <button data-cat="movimientos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'movimientos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-movements mr-1.5"></span>Movimientos
              </button>
            </div>
          </div>

          <!-- TENDENCIAS RÁPIDAS -->
          <div class="flex flex-wrap items-center justify-center gap-2 mt-4 text-left">
            <span class="font-label-caps text-label-caps text-slate-muted uppercase font-bold">Tendencias:</span>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Propiocepción">Propiocepción</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="LCA">LCA Rodilla</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Manguito">Manguito Rotador</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Menisco">Meniscos</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Fascia">Fascia Plantar</button>
          </div>
        </div>
      </section>

      <!-- EXPLORA POR REGIÓN CORPORAL -->
      <section class="mt-10 w-full">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-xl">accessibility_new</span>
            <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">Explora por Región Corporal</h2>
          </div>
          <span class="font-label-caps text-label-caps text-slate-muted font-bold">ANATOMÍA REGIONAL</span>
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
            <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">Término del Día</h2>
            <span class="ml-2 px-2.5 py-0.5 rounded-full bg-amber-quiz/15 text-amber-quiz font-label-caps text-label-caps uppercase font-bold">Destacado</span>
          </div>
          <a class="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1 cursor-pointer font-bold" onclick="window.location.hash='#terminos'">
            Ver compendio completo <span class="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>

        <div class="w-full bg-surface-container-lowest rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md relative overflow-hidden border border-slate-border/50">
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
                <span class="flex items-center gap-1 font-label-sm text-label-sm text-slate-muted ml-auto font-medium">
                  <span class="material-symbols-outlined text-sm">schedule</span> ${featuredTerm.readingTime}
                </span>
              </div>

              <div class="flex items-baseline gap-3">
                <h3 class="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">${featuredTerm.name}</h3>
                <button onclick="window.fisiopediaApp.speak('${featuredTerm.name}')" class="p-1.5 rounded-full hover:bg-surface-container-high text-slate-muted hover:text-primary transition-colors" type="button" title="Escuchar pronunciación">
                  <span class="material-symbols-outlined text-xl">volume_up</span>
                </button>
              </div>

              <p class="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed max-w-xl">
                <strong class="font-semibold text-on-surface">Definición técnica:</strong> ${featuredTerm.technicalDef}
              </p>

              <!-- En palabras sencillas -->
              <div class="mt-5 p-4 rounded-xl bg-surface-container-low flex items-start gap-3.5 border-l-4 border-cat-muscles">
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
              <div class="mt-4 p-4 rounded-xl bg-amber-quiz/10 flex items-start gap-3.5 border-l-4 border-amber-quiz">
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
                <a href="#termino/${featuredTerm.id}" class="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-2 font-bold">
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
            <div class="lg:col-span-5 flex flex-col h-full justify-between bg-surface-container-low rounded-xl p-5 shadow-inner border border-slate-border/50">
              <div class="flex items-center justify-between mb-3">
                <span class="font-label-sm text-label-sm text-on-surface-variant font-semibold flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-sm text-cat-muscles">visibility</span> Diccionario Visual
                </span>
                <span class="text-xs px-2 py-0.5 rounded bg-surface-container-lowest text-slate-muted font-mono">Esquema</span>
              </div>

              <div class="relative w-full rounded-lg overflow-hidden bg-surface-container-highest p-4 flex items-center justify-center">
                ${getTermSvg(featuredTerm.svgType)}
              </div>

              <div class="mt-4 pt-3 flex items-center justify-between text-xs text-on-surface-variant border-t border-slate-border/50">
                <div class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-sm text-primary">healing</span>
                  <span>Rehabilitación funcional</span>
                </div>
                <span class="font-bold text-primary">Relevancia 10/10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GRILLA DE CONCEPTOS DEL DICCIONARIO -->
      <section class="mt-14 w-full">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">
              ${state.searchTerm ? `Resultados de búsqueda (${filteredTerms.length})` : 'Términos Anatómicos y Biomecánicos'}
            </h2>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              ${state.searchTerm ? `Mostrando conceptos coincidentes con "${state.searchTerm}"` : `Explora los ${FISIOPEDIA_TERMS.length} conceptos esenciales de Fisioterapia.`}
            </p>
          </div>

          <!-- Tabs de ordenamiento -->
          <div class="inline-flex p-1 rounded-xl bg-surface-container-high self-start sm:self-auto">
            <button data-sort="populares" class="sort-tab-btn px-3 py-1 rounded-lg font-label-sm text-label-sm transition-all ${state.sortBy === 'populares' ? 'bg-surface-container-lowest text-on-surface shadow-xs font-bold' : 'text-on-surface-variant hover:text-on-surface'}">
              Más consultados
            </button>
            <button data-sort="az" class="sort-tab-btn px-3 py-1 rounded-lg font-label-sm text-label-sm transition-all ${state.sortBy === 'az' ? 'bg-surface-container-lowest text-on-surface shadow-xs font-bold' : 'text-on-surface-variant hover:text-on-surface'}">
              Orden A-Z
            </button>
          </div>
        </div>

        ${filteredTerms.length === 0 ? `
          <div class="p-12 text-center rounded-2xl bg-surface-container-lowest border border-dashed border-slate-border">
            <span class="material-symbols-outlined text-5xl text-slate-muted mb-2">search_off</span>
            <h3 class="font-headline-sm text-headline-sm text-on-surface">No encontramos términos con esa búsqueda</h3>
            <p class="font-body-md text-body-md text-slate-muted mt-1">Prueba con términos como flexión, ligamento, manguito o quita los filtros de categoría.</p>
            <button onclick="window.fisiopediaApp.clearSearch()" class="mt-4 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm font-bold">
              Restablecer búsqueda
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
          <div class="relative bg-gradient-to-br from-primary/10 via-surface-container-lowest to-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-sm border border-slate-border/50">
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
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Flashcards 3D de Estudio
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant mt-2 max-w-md">
                  Repasa tus <strong class="text-primary font-semibold">${state.favorites.size} términos favoritos</strong> con tarjetas de volteo tridimensional, nemotecnias y retroalimentación activa.
                </p>
              </div>
            </div>
            <div class="mt-8 flex items-center gap-3">
              <a href="#favoritos" class="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-2 font-bold">
                <span>Practicar Flashcards</span>
                <span class="material-symbols-outlined text-lg">play_arrow</span>
              </a>
            </div>
          </div>

          <!-- Banner Quizzes -->
          <div class="relative bg-gradient-to-br from-amber-quiz/10 via-surface-container-lowest to-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-sm border border-slate-border/50">
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
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Cuestionarios de Práctica (${FISIOPEDIA_QUIZZES.length} Preguntas)
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant mt-2 max-w-md">
                  Responde preguntas cortas de la vida cotidiana para comprobar lo aprendido con justificación anatómica y cálculo de puntaje.
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
        class="region-btn flex flex-col items-center justify-center p-3.5 rounded-xl ${isActive ? 'bg-primary text-on-primary shadow-md ring-2 ring-primary/30' : 'bg-surface-container-lowest hover:bg-surface-container-low shadow-sm text-on-surface'} transition-all text-center group border border-slate-border/40"
        type="button"
      >
        <div class="w-10 h-10 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'} flex items-center justify-center group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-xl">${icon}</span>
        </div>
        <span class="font-label-sm text-label-sm mt-2.5 font-bold">${label}</span>
      </button>
    `;
  }

  function renderTermCard(term) {
    const isFav = state.favorites.has(term.id);
    return `
      <article class="flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-slate-border/50">
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

          <h3 class="font-headline-sm text-headline-sm text-on-surface mt-4 group-hover:text-primary transition-colors cursor-pointer font-bold" onclick="window.location.hash='#termino/${term.id}'">
            ${term.name}
          </h3>

          <div class="mt-3 p-3 rounded-lg bg-surface-container-low border border-slate-border/30">
            <span class="font-label-caps text-label-caps uppercase text-cat-muscles block mb-1 font-bold">En el día a día</span>
            <p class="font-body-sm text-body-sm text-on-surface leading-snug line-clamp-3">
              ${term.everydayExample}
            </p>
          </div>

          <div class="mt-4 pt-2 text-xs text-on-surface-variant flex items-center justify-between">
            <span class="text-slate-muted">Región: <strong class="text-on-surface">${term.regionLabel}</strong></span>
            <span class="text-slate-muted font-medium">${term.readingTime}</span>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-border/50 flex items-center justify-between">
          <a href="#termino/${term.id}" class="font-label-sm text-label-sm text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
            Ver explicación sencilla <span class="material-symbols-outlined text-base">arrow_forward</span>
          </a>
          <button onclick="window.fisiopediaApp.speak('${term.name}')" class="text-slate-muted hover:text-primary p-1" title="Escuchar pronunciación">
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

    // Filtros de categoría
    document.querySelectorAll('#category-filter-chips button[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedCategory = btn.getAttribute('data-cat');
        renderCurrentRoute();
      });
    });

    // Etiquetas rápidas
    document.querySelectorAll('.quick-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.searchTerm = btn.getAttribute('data-tag');
        renderCurrentRoute();
      });
    });

    // Filtros de región
    document.querySelectorAll('.region-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedRegion = btn.getAttribute('data-region');
        renderCurrentRoute();
      });
    });

    // Ordenamiento
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
          <a href="#explorador" class="hover:text-primary transition-colors flex items-center gap-1 font-medium">
            <span class="material-symbols-outlined text-sm">home</span> Inicio
          </a>
          <span class="text-outline-variant font-bold">/</span>
          <a href="#explorador" class="hover:text-primary transition-colors font-medium">Diccionario</a>
          <span class="text-outline-variant font-bold">/</span>
          <span class="text-primary font-bold">${term.categoryLabel}</span>
          <span class="text-outline-variant font-bold">/</span>
          <span class="text-on-surface font-bold">${term.name}</span>
        </div>
        <div class="flex items-center gap-space-sm">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps tracking-wider font-bold">
            <span class="w-2 h-2 rounded-full bg-cat-muscles animate-pulse"></span>
            REVISIÓN ANATÓMICA OFICIAL
          </span>
        </div>
      </div>

      <!-- Selector rápido de términos -->
      <div class="mb-6 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span class="text-xs font-bold text-slate-muted uppercase whitespace-nowrap mr-2">Otros términos:</span>
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
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden border border-slate-border/50">
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
                  <h1 class="font-display text-headline-lg text-on-surface tracking-tight leading-tight font-bold">
                    ${term.name}
                  </h1>
                  <button onclick="window.fisiopediaApp.speak('${term.name}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm transition-all active:scale-95 shadow-sm font-bold" type="button" title="Escuchar pronunciación fonética">
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

            <!-- Acciones de Estudio -->
            <div class="mt-space-lg pt-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low rounded-lg p-space-sm border border-slate-border/40">
              <button onclick="window.fisiopediaApp.toggleFav('${term.id}')" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg ${isFav ? 'bg-amber-quiz text-slate-strong font-bold' : 'bg-primary text-on-primary font-bold'} font-label-md text-label-md shadow-sm transition-all">
                <span class="material-symbols-outlined text-base" style="font-variation-settings: 'FILL' 1;">
                  ${isFav ? 'bookmark_added' : 'bookmark'}
                </span>
                <span>${isFav ? 'Guardado en Mis Favoritos' : 'Guardar en Mis Favoritos'}</span>
              </button>

              <button onclick="window.location.hash='#favoritos'" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm shadow-sm transition-colors font-semibold">
                <span class="material-symbols-outlined text-base text-primary">style</span>
                <span>Repasar en Flashcards 3D</span>
              </button>
            </div>
          </div>

          <!-- 2. Comparativa: Técnico vs. Sencillo -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <!-- Técnico -->
            <div class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative flex flex-col justify-between border border-slate-border/50">
              <div class="space-y-space-xs">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-label-caps text-label-caps text-slate-muted uppercase tracking-wider flex items-center gap-1 font-bold">
                    <span class="material-symbols-outlined text-sm text-cat-bones">menu_book</span>
                    Definición Técnica / Libro Oficial
                  </span>
                </div>
                <h2 class="font-headline-sm text-headline-sm text-on-surface leading-snug font-bold">
                  Perspectiva Biomecánica
                </h2>
                <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pt-1">
                  "${term.technicalDef}"
                </p>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center justify-between text-slate-muted font-label-caps text-label-caps font-bold">
                <span>Rigor Académico</span>
                <span class="material-symbols-outlined text-sm">science</span>
              </div>
            </div>

            <!-- Sencillo -->
            <div class="bg-surface-container-low rounded-xl p-space-md shadow-sm relative flex flex-col justify-between border-2 border-primary/30">
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
                <h2 class="font-headline-sm text-headline-sm text-primary leading-snug font-bold">
                  Fisio Pedía
                </h2>
                <p class="font-body-sm text-body-sm text-on-surface leading-relaxed pt-1 font-semibold">
                  "${term.simpleExplanation}"
                </p>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center justify-between text-primary font-label-caps text-label-caps font-bold">
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
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
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
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
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
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Representación Anatómica
                </h3>
              </div>
              <span class="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps font-mono">
                Esquema SVG
              </span>
            </div>

            <div class="bg-surface-container-low rounded-xl p-4 flex items-center justify-center overflow-hidden border border-slate-border/40">
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
          <a href="#explorador" class="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors font-bold border border-slate-border/40">
            <span class="material-symbols-outlined text-base">arrow_back</span>
            <span>Volver al Explorador de Términos</span>
          </a>
        </aside>
      </div>
    `;
  }

  function bindTerminoEvents() {}

  // ==========================================
  // VISTA 3: MIS FAVORITOS & FLASHCARDS 3D
  // ==========================================
  function renderFavoritosView() {
    let activeDeck = FISIOPEDIA_TERMS.filter(t => state.favorites.has(t.id));
    if (activeDeck.length === 0) {
      activeDeck = FISIOPEDIA_TERMS; // Muestra todo el compendio si aún no hay favoritos
    }

    if (state.flashcardCategory !== 'todas') {
      const filtered = activeDeck.filter(t => t.category === state.flashcardCategory);
      if (filtered.length > 0) activeDeck = filtered;
    }

    const currentCard = activeDeck[state.flashcardIndex % activeDeck.length];
    const favCount = state.favorites.size;

    return `
      <!-- Encabezado de Sección y Metadatos -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
        <div class="max-w-[65ch]">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cat-muscles/10 text-primary mb-2">
            <span class="material-symbols-outlined text-sm">psychology</span>
            <span class="font-label-caps text-label-caps uppercase tracking-wider font-bold">Repetición Activa & Memoria Visual</span>
          </div>
          <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">Mi Espacio de Estudio &amp; Favoritos</h1>
          <p class="font-body-md text-body-md text-on-surface-variant mt-1">
            Repasa los términos guardados mediante fichas interactivas en 3D, metáforas de la vida diaria y refuerzo visual.
          </p>
        </div>

        <div class="flex items-center gap-space-sm">
          <button id="shuffle-deck-btn" class="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm font-bold border border-slate-border/50">
            <span class="material-symbols-outlined text-lg">shuffle</span>
            <span>Mezclar Tarjetas</span>
          </button>
        </div>
      </div>

      <!-- Métricas Superiores -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-xl">
        <div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-center justify-between border border-slate-border/50">
          <div class="flex flex-col">
            <span class="font-label-caps text-label-caps uppercase text-slate-muted font-bold">Términos en Favoritos</span>
            <span class="font-display text-display text-on-surface mt-1 leading-none font-bold">${favCount}</span>
            <span class="font-body-sm text-body-sm text-on-surface-variant mt-2 flex items-center gap-1">
              <span class="material-symbols-outlined text-cat-bones text-sm">bookmark</span>
              Guardados en este dispositivo
            </span>
          </div>
          <div class="w-14 h-14 rounded-full bg-cat-bones/10 text-cat-bones flex items-center justify-center">
            <span class="material-symbols-outlined text-2xl">auto_stories</span>
          </div>
        </div>

        <div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-center justify-between border border-slate-border/50">
          <div class="flex flex-col">
            <span class="font-label-caps text-label-caps uppercase text-slate-muted font-bold">Compendio Total</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="font-display text-display text-primary leading-none font-bold">${FISIOPEDIA_TERMS.length}</span>
              <span class="font-label-md text-label-md text-primary font-bold">términos</span>
            </div>
            <div class="w-36 h-2 bg-surface-container-high rounded-full overflow-hidden mt-3">
              <div class="bg-primary h-full rounded-full" style="width: ${Math.round((favCount / FISIOPEDIA_TERMS.length) * 100)}%"></div>
            </div>
          </div>
          <div class="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <span class="material-symbols-outlined text-2xl">verified</span>
          </div>
        </div>

        <div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-center justify-between border border-slate-border/50">
          <div class="flex flex-col">
            <span class="font-label-caps text-label-caps uppercase text-slate-muted font-bold">Modo de Repaso</span>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="font-display text-display text-amber-quiz leading-none font-bold">3D</span>
              <span class="font-label-sm text-label-sm text-amber-quiz font-bold">Flashcard</span>
            </div>
            <span class="font-body-sm text-body-sm text-slate-muted mt-2 flex items-center gap-1">
              <span class="material-symbols-outlined text-amber-quiz text-sm">touch_app</span>
              Clic para voltear ficha
            </span>
          </div>
          <div class="w-14 h-14 rounded-full bg-amber-quiz/15 text-amber-quiz flex items-center justify-center">
            <span class="material-symbols-outlined text-2xl">style</span>
          </div>
        </div>
      </div>

      <!-- VISOR INTERACTIVO 3D DE FLASHCARDS -->
      <div class="w-full bg-gradient-to-br from-surface-container-lowest via-surface-container-low to-surface-container-lowest p-6 md:p-10 rounded-2xl shadow-md mb-space-xl relative overflow-hidden border border-slate-border/60">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-quiz animate-pulse"></span>
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Modo Activo de Repaso</span>
          </div>
          <span class="font-label-md text-label-md text-primary font-bold">
            Tarjeta ${(state.flashcardIndex % activeDeck.length) + 1} de ${activeDeck.length}
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
                  <span class="font-label-sm text-label-sm font-medium">Clic para voltear</span>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center text-center my-auto py-4">
                <span class="font-label-caps text-label-caps uppercase text-slate-muted tracking-widest mb-2 font-bold">${currentCard.regionLabel}</span>
                <h2 class="font-headline-lg text-headline-lg text-slate-strong tracking-tight max-w-[20ch] font-bold">
                  ${currentCard.name}
                </h2>
                <p class="font-body-md text-body-md text-slate-muted mt-3 max-w-[45ch]">
                  ¿Recuerdas cómo explicar este concepto en palabras sencillas y con un ejemplo de la vida diaria?
                </p>
              </div>

              <div class="flex items-center justify-between pt-2 border-t border-slate-border/50">
                <span class="font-body-sm text-body-sm text-slate-muted flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">schedule</span> ${currentCard.readingTime}
                </span>
                <button id="btn-flip-trigger" type="button" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors font-bold">
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
                    <span class="px-2.5 py-1 rounded-full font-label-caps text-label-caps bg-surface-container-high text-on-surface-variant font-medium">
                      ${currentCard.regionLabel}
                    </span>
                  </div>
                  <span class="font-label-caps text-label-caps text-slate-muted font-bold">Dorso</span>
                </div>

                <div class="p-4 rounded-xl bg-surface-container-low mb-4 border-l-4 border-primary">
                  <span class="font-label-caps text-label-caps text-primary font-bold block mb-1">Concepto Clave:</span>
                  <p class="font-body-md text-body-md text-on-surface font-medium leading-relaxed">
                    "${currentCard.simpleExplanation}"
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-amber-quiz/10 border-l-4 border-amber-quiz">
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
                <button id="btn-flip-back-trigger" type="button" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">
                  <span class="material-symbols-outlined text-sm text-primary">sync</span>
                  Volver al frente
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- CONTROLES DE LA BARAJA -->
        <div class="flex items-center justify-center gap-4">
          <button id="prev-card-btn" class="flex items-center gap-1 px-4 py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container border border-slate-border text-on-surface font-label-md text-label-md shadow-sm transition-all font-bold">
            <span class="material-symbols-outlined text-base">arrow_back</span>
            <span>Anterior</span>
          </button>
          <button id="next-card-btn" class="flex items-center gap-1 px-5 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm transition-all font-bold">
            <span>Siguiente</span>
            <span class="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </div>

      <!-- LISTA DE TÉRMINOS FAVORITOS GUARDADOS -->
      <section class="mt-8">
        <h2 class="font-headline-sm text-headline-sm text-on-surface mb-4 font-bold">Términos que estás repasando (${favCount})</h2>
        ${favCount === 0 ? `
          <div class="p-8 text-center rounded-2xl bg-surface-container-lowest border border-dashed border-slate-border">
            <span class="material-symbols-outlined text-4xl text-slate-muted mb-2">bookmark_border</span>
            <p class="font-body-md text-body-md text-slate-muted font-medium">Aún no has guardado términos en favoritos.</p>
            <p class="font-body-sm text-body-sm text-slate-muted mt-1">Haz clic en el icono de guardar en cualquier término del explorador para tenerlo a mano aquí.</p>
            <a href="#explorador" class="mt-4 inline-block px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold">
              Explorar Términos
            </a>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${FISIOPEDIA_TERMS.filter(t => state.favorites.has(t.id)).map(term => `
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

    if (cardElement) cardElement.addEventListener('click', toggleFlip);
    if (btnFlip) btnFlip.addEventListener('click', toggleFlip);
    if (btnFlipBack) btnFlipBack.addEventListener('click', toggleFlip);

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
        showToast('Baraja mezclada', 'shuffle');
      });
    }
  }

  // ==========================================
  // VISTA 4: CUESTIONARIOS DE AUTOEVALUACIÓN
  // ==========================================
  function renderQuizzesView() {
    const totalQuestions = FISIOPEDIA_QUIZZES.length;

    // Si terminó el cuestionario, mostrar pantalla de resultados / resumen
    if (state.quizCompleted) {
      const percentage = Math.round((state.quizScore / totalQuestions) * 100);
      let medalColor = 'text-amber-quiz';
      let title = '¡Buen esfuerzo!';
      if (percentage >= 80) {
        title = '¡Excelente dominio anatómico!';
        medalColor = 'text-amber-quiz';
      } else if (percentage >= 60) {
        title = '¡Buen resultado!';
        medalColor = 'text-cat-muscles';
      }

      return `
        <div class="max-w-2xl mx-auto my-8 p-8 bg-surface-container-lowest rounded-2xl shadow-md border border-slate-border text-center">
          <div class="w-20 h-20 mx-auto rounded-full bg-amber-quiz/10 flex items-center justify-center ${medalColor} mb-4">
            <span class="material-symbols-outlined text-5xl">military_tech</span>
          </div>
          <span class="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps uppercase font-bold">
            Cuestionario Finalizado
          </span>
          <h2 class="font-headline-lg text-headline-lg text-slate-strong font-bold mt-3">${title}</h2>
          <p class="font-body-md text-body-md text-slate-muted mt-2">
            Obtuviste <strong class="text-primary font-bold">${state.quizScore} de ${totalQuestions} aciertos</strong> (${percentage}%).
          </p>

          <div class="grid grid-cols-2 gap-4 my-6">
            <div class="p-4 rounded-xl bg-surface-container-low border border-slate-border/50">
              <span class="text-xs text-slate-muted uppercase font-bold">Puntos Obtenidos</span>
              <p class="text-2xl font-bold text-amber-quiz mt-1">${state.quizScore * 100} XP</p>
            </div>
            <div class="p-4 rounded-xl bg-surface-container-low border border-slate-border/50">
              <span class="text-xs text-slate-muted uppercase font-bold">Tasa de Acierto</span>
              <p class="text-2xl font-bold text-cat-muscles mt-1">${percentage}%</p>
            </div>
          </div>

          <div class="flex items-center justify-center gap-3">
            <button onclick="window.fisiopediaApp.resetQuiz()" class="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md font-bold shadow-sm transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">restart_alt</span>
              <span>Practicar de nuevo</span>
            </button>
            <a href="#favoritos" class="px-5 py-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-bold transition-all">
              Repasar Flashcards
            </a>
          </div>
        </div>
      `;
    }

    const quiz = FISIOPEDIA_QUIZZES[state.quizIndex % totalQuestions];
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
                <span class="font-label-sm text-label-sm text-slate-muted font-medium">Autoevaluación clínica</span>
              </div>
              <h1 class="font-headline-sm text-headline-sm text-slate-strong font-bold">Biomecánica &amp; Anatomía Práctica</h1>
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
              <span class="font-label-md text-label-md text-slate-strong font-bold">Pregunta ${state.quizIndex + 1} de ${totalQuestions}</span>
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
              <h2 class="font-headline-sm text-headline-sm text-slate-strong leading-snug font-bold">
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
                    class="w-full flex items-center justify-between p-4 rounded-xl ${cardClass} transition-all duration-150 relative border border-slate-border/40"
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

            <!-- Explicación pedagógica -->
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
              <span class="text-xs text-slate-muted">Selecciona una opción para verificar tu respuesta.</span>
              ${!isSubmitted ? `
                <button
                  onclick="window.fisiopediaApp.submitQuizAnswer()"
                  ${!selectedOptionId ? 'disabled' : ''}
                  class="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-on-primary font-label-md text-label-md shadow-sm transition-all font-bold"
                >
                  Comprobar Respuesta
                </button>
              ` : `
                <button
                  onclick="window.fisiopediaApp.nextQuizQuestion()"
                  class="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-2 font-bold"
                >
                  <span>${state.quizIndex + 1 < totalQuestions ? 'Siguiente Pregunta' : 'Ver Resultados Finales'}</span>
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
              <span class="font-label-caps text-label-caps text-slate-muted font-bold">Eje &amp; Plano:</span>
              <span class="font-label-sm text-label-sm font-semibold text-primary">${quiz.planeAxis}</span>
            </div>

            <div class="grid grid-cols-1 gap-2 mt-3">
              ${quiz.metrics.map(m => `
                <div class="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between text-xs border border-slate-border/30">
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

  function bindQuizzesEvents() {}

  // --- MÉTODOS PÚBLICOS GLOBALES ---
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
        showToast('Respuesta incorrecta. Revisa la justificación.', 'error');
      }
      renderCurrentRoute();
    },
    nextQuizQuestion: () => {
      if (state.quizIndex + 1 < FISIOPEDIA_QUIZZES.length) {
        state.quizIndex++;
        renderCurrentRoute();
      } else {
        // Cuestionario finalizado
        state.quizCompleted = true;
        if (typeof FisioStorage !== 'undefined') {
          FisioStorage.saveQuizStats({
            totalAttempted: FISIOPEDIA_QUIZZES.length,
            totalCorrect: state.quizScore,
            lastScore: Math.round((state.quizScore / FISIOPEDIA_QUIZZES.length) * 100),
            streak: state.quizStreak + 1,
            completedAt: new Date().toISOString()
          });
        }
        renderCurrentRoute();
      }
    },
    resetQuiz: () => {
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizSubmitted = {};
      state.quizUserAnswers = {};
      state.quizCompleted = false;
      renderCurrentRoute();
      showToast('Cuestionario reiniciado', 'restart_alt');
    }
  };

  // --- GESTIÓN DE LA NUBE Y FIREBASE MODAL ---
  function updateCloudStatusUI(cloudInfo) {
    if (!cloudInfo) return;
    const pillIcon = document.getElementById('cloud-pill-icon');
    const pillText = document.getElementById('cloud-pill-text');
    const pillDot = document.getElementById('cloud-pill-dot');

    const modalDot = document.getElementById('modal-status-dot');
    const modalLabel = document.getElementById('modal-status-label');
    const modalProject = document.getElementById('modal-status-project');
    const modalSync = document.getElementById('modal-status-sync');

    const status = cloudInfo.status || 'unconfigured';

    if (pillIcon && pillText && pillDot) {
      if (status === 'connected') {
        pillIcon.textContent = 'cloud_done';
        pillIcon.className = 'material-symbols-outlined text-base text-emerald-600';
        pillText.textContent = 'Nube: Activa';
        pillDot.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse';
      } else if (status === 'connecting') {
        pillIcon.textContent = 'sync';
        pillIcon.className = 'material-symbols-outlined text-base text-blue-500 animate-spin';
        pillText.textContent = 'Conectando...';
        pillDot.className = 'w-2 h-2 rounded-full bg-blue-500';
      } else if (status === 'error') {
        pillIcon.textContent = 'cloud_off';
        pillIcon.className = 'material-symbols-outlined text-base text-coral-alert';
        pillText.textContent = 'Nube: Error';
        pillDot.className = 'w-2 h-2 rounded-full bg-coral-alert';
      } else {
        pillIcon.textContent = 'cloud_queue';
        pillIcon.className = 'material-symbols-outlined text-base text-slate-muted';
        pillText.textContent = 'Nube: Local';
        pillDot.className = 'w-2 h-2 rounded-full bg-slate-muted';
      }
    }

    if (modalLabel && modalDot && modalProject && modalSync) {
      if (status === 'connected') {
        modalLabel.textContent = '🟢 Conectado a Firestore';
        modalDot.className = 'w-2.5 h-2.5 rounded-full bg-emerald-500';
        modalProject.textContent = cloudInfo.projectId || 'Proyecto activo';
      } else if (status === 'connecting') {
        modalLabel.textContent = '🔵 Conectando...';
        modalDot.className = 'w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse';
        modalProject.textContent = cloudInfo.projectId || 'Iniciando sesión anónima';
      } else if (status === 'error') {
        modalLabel.textContent = '🔴 Error de Conexión';
        modalDot.className = 'w-2.5 h-2.5 rounded-full bg-coral-alert';
        modalProject.textContent = cloudInfo.projectId || 'Error';
      } else {
        modalLabel.textContent = '⚪ Modo Local Offline';
        modalDot.className = 'w-2.5 h-2.5 rounded-full bg-slate-muted';
        modalProject.textContent = 'Sin vincular';
      }

      if (cloudInfo.lastSync) {
        try {
          const d = new Date(cloudInfo.lastSync);
          modalSync.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' (' + d.toLocaleDateString() + ')';
        } catch (_) {
          modalSync.textContent = cloudInfo.lastSync;
        }
      } else {
        modalSync.textContent = 'Almacenado local';
      }
    }
  }

  function parseFirebaseSnippet(rawText) {
    if (!rawText || !rawText.trim()) return null;
    const text = rawText.trim();

    try {
      const obj = JSON.parse(text);
      if (obj.apiKey && obj.projectId) return obj;
    } catch (_) {}

    const extract = (key) => {
      const regex = new RegExp(`${key}\\s*:\\s*["']([^"']+)["']`, 'i');
      const m = text.match(regex);
      return m ? m[1].trim() : '';
    };

    const apiKey = extract('apiKey');
    const projectId = extract('projectId');
    const authDomain = extract('authDomain');
    const storageBucket = extract('storageBucket');
    const messagingSenderId = extract('messagingSenderId');
    const appId = extract('appId');

    if (apiKey && projectId) {
      return {
        apiKey,
        projectId,
        authDomain: authDomain || `${projectId}.firebaseapp.com`,
        storageBucket: storageBucket || `${projectId}.appspot.com`,
        messagingSenderId: messagingSenderId || '',
        appId: appId || ''
      };
    }

    return null;
  }

  function initCloudSyncUI() {
    const btnHeader = document.getElementById('btn-cloud-sync');
    const btnFooter = document.getElementById('btn-footer-cloud');
    const modal = document.getElementById('modal-cloud-sync');
    const btnClose = document.getElementById('modal-cloud-close');

    const tabConfig = document.getElementById('tab-btn-config');
    const tabGuide = document.getElementById('tab-btn-guide');
    const contentConfig = document.getElementById('tab-content-config');
    const contentGuide = document.getElementById('tab-content-guide');

    const textarea = document.getElementById('input-firebase-config-json');
    const alertBox = document.getElementById('modal-cloud-alert');

    const btnSave = document.getElementById('btn-save-cloud-config');
    const btnTest = document.getElementById('btn-test-cloud-connection');
    const btnSync = document.getElementById('btn-force-sync');
    const btnDisconnect = document.getElementById('btn-disconnect-cloud');

    function showAlert(msg, type = 'info') {
      if (!alertBox) return;
      alertBox.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200', 'bg-coral-alert/10', 'text-coral-alert', 'bg-blue-50', 'text-blue-800');
      
      let styleClass = 'bg-blue-50 text-blue-800 border border-blue-200';
      let icon = 'info';
      if (type === 'success') {
        styleClass = 'bg-emerald-50 text-emerald-800 border border-emerald-200';
        icon = 'check_circle';
      } else if (type === 'error') {
        styleClass = 'bg-coral-alert/10 text-coral-alert border border-coral-alert/30';
        icon = 'error';
      }
      alertBox.className = `p-3.5 rounded-xl text-xs font-medium flex items-center gap-2 ${styleClass}`;
      alertBox.innerHTML = `<span class="material-symbols-outlined text-base">${icon}</span><span>${msg}</span>`;
    }

    function openModal() {
      if (!modal) return;
      modal.classList.remove('hidden');

      if (typeof FisioStorage !== 'undefined') {
        const cloud = FisioStorage.getCloudStatus();
        updateCloudStatusUI(cloud);
        if (cloud.config && textarea && !textarea.value) {
          textarea.value = JSON.stringify(cloud.config, null, 2);
        }
      }
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.add('hidden');
    }

    if (btnHeader) btnHeader.addEventListener('click', openModal);
    if (btnFooter) btnFooter.addEventListener('click', openModal);
    if (btnClose) btnClose.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    if (tabConfig && tabGuide && contentConfig && contentGuide) {
      tabConfig.addEventListener('click', () => {
        tabConfig.className = 'py-3 px-4 font-label-md text-sm border-b-2 border-primary text-primary font-bold cursor-pointer transition-colors';
        tabGuide.className = 'py-3 px-4 font-label-md text-sm border-b-2 border-transparent text-slate-muted hover:text-on-surface cursor-pointer transition-colors';
        contentConfig.classList.remove('hidden');
        contentGuide.classList.add('hidden');
      });

      tabGuide.addEventListener('click', () => {
        tabGuide.className = 'py-3 px-4 font-label-md text-sm border-b-2 border-primary text-primary font-bold cursor-pointer transition-colors';
        tabConfig.className = 'py-3 px-4 font-label-md text-sm border-b-2 border-transparent text-slate-muted hover:text-on-surface cursor-pointer transition-colors';
        contentGuide.classList.remove('hidden');
        contentConfig.classList.add('hidden');
      });
    }

    if (btnSave) {
      btnSave.addEventListener('click', async () => {
        const raw = textarea ? textarea.value : '';
        const parsed = parseFirebaseSnippet(raw);

        if (!parsed) {
          showAlert('No se pudieron detectar las credenciales. Asegúrate de incluir al menos apiKey y projectId.', 'error');
          return;
        }

        showAlert('Conectando a Cloud Firestore...', 'info');
        btnSave.disabled = true;

        try {
          const success = await FisioStorage.saveCloudConfig(parsed);
          if (success) {
            showAlert('¡Conectado exitosamente a Firebase Firestore! Tus datos están sincronizados en la nube.', 'success');
            showToast('Conectado a Firestore', 'cloud_done');
          } else {
            showAlert('No fue posible completar la conexión. Verifica tus credenciales o las reglas de Firestore.', 'error');
          }
        } catch (err) {
          showAlert(`Error: ${err.message}`, 'error');
        } finally {
          btnSave.disabled = false;
        }
      });
    }

    if (btnTest) {
      btnTest.addEventListener('click', async () => {
        const raw = textarea ? textarea.value : '';
        const parsed = parseFirebaseSnippet(raw);

        if (!parsed) {
          showAlert('Ingresa una configuración válida antes de probar la conexión.', 'error');
          return;
        }

        showAlert('Probando comunicación con Firestore...', 'info');
        btnTest.disabled = true;

        try {
          const result = await FisioStorage.testCloudConnection(parsed);
          if (result.success) {
            showAlert(`✅ ${result.message}`, 'success');
          } else {
            showAlert(`❌ Falló la prueba: ${result.message}`, 'error');
          }
        } catch (e) {
          showAlert(`Error en prueba: ${e.message}`, 'error');
        } finally {
          btnTest.disabled = false;
        }
      });
    }

    if (btnSync) {
      btnSync.addEventListener('click', async () => {
        showAlert('Sincronizando favoritos y puntuaciones...', 'info');
        const ok = await FisioStorage.syncNow();
        if (ok) {
          showAlert('¡Sincronización completada con éxito!', 'success');
          showToast('Sincronización completa', 'sync');
        } else {
          showAlert('No hay una sesión activa de Firebase para sincronizar.', 'error');
        }
      });
    }

    if (btnDisconnect) {
      btnDisconnect.addEventListener('click', async () => {
        await FisioStorage.disconnectCloud();
        if (textarea) textarea.value = '';
        showAlert('Desconectado. Ahora la aplicación almacena tus datos localmente en este navegador.', 'info');
        showToast('Modo Local Offline activo', 'cloud_off');
      });
    }

    if (typeof FisioStorage !== 'undefined') {
      setTimeout(() => {
        updateCloudStatusUI(FisioStorage.getCloudStatus());
      }, 500);
    }
  }

  // --- INICIALIZACIÓN DE LA APLICACIÓN ---
  document.addEventListener('DOMContentLoaded', () => {
    loadInitialState();
    initRouter();
    initCloudSyncUI();

    // Atajos de teclado:
    // Ctrl+K / Cmd+K para enfocar búsqueda
    // Barra espaciadora para girar flashcard
    // Flechas izquierda y derecha para pasar flashcards
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
      } else if (state.route === 'favoritos') {
        if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
          e.preventDefault();
          const cardEl = document.getElementById('flashcard-3d-element');
          if (cardEl) {
            state.flashcardFlipped = !state.flashcardFlipped;
            cardEl.classList.toggle('flipped', state.flashcardFlipped);
          }
        } else if (e.key === 'ArrowRight') {
          state.flashcardFlipped = false;
          state.flashcardIndex++;
          renderCurrentRoute();
        } else if (e.key === 'ArrowLeft') {
          state.flashcardFlipped = false;
          state.flashcardIndex = Math.max(0, state.flashcardIndex - 1);
          renderCurrentRoute();
        }
      }
    });
  });

})();
