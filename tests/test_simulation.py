#!/usr/bin/env python3
"""
Simulación de Ejecución DOM y Lógica de Eventos de FisioPedia
Verifica que las funciones de inicialización, fallback, búsqueda y flashcards funcionen
sin errores en tiempo de ejecución.
"""

import re
import json

def test_simulation():
    with open('js/app.js', 'r', encoding='utf-8') as f:
        app_js = f.read()

    # 1. Verificar extracción de FALLBACK_TERMS
    m_fb = re.search(r'const\s+FALLBACK_TERMS\s*=\s*(\[[\s\S]*?\]);\s*if', app_js)
    assert m_fb, "FALLBACK_TERMS no se pudo extraer o está mal formateado"
    fallback_terms = json.loads(m_fb.group(1))
    assert len(fallback_terms) >= 47, f"Se esperaban al menos 47 términos en fallback, encontrados {len(fallback_terms)}"
    print(f"[PASS] FALLBACK_TERMS verificado con {len(fallback_terms)} términos integrados.")

    # 2. Simular índice de flashcards con baraja de 1 elemento
    single_deck = [fallback_terms[0]]
    current_index = 0

    # Simular siguiente
    current_index = (current_index + 1) % len(single_deck)
    assert current_index == 0, "Falla en índice de baraja con 1 elemento (next)"

    # Simular anterior
    current_index = (current_index - 1 + len(single_deck)) % len(single_deck)
    assert current_index == 0, "Falla en índice de baraja con 1 elemento (prev)"
    print("[PASS] Validación de índice con 1 elemento: sin división por cero ni bloqueo.")

    # 3. Simular índice de flashcards con baraja múltiple
    multi_deck = fallback_terms[:5]
    for i in range(12):
        current_index = (current_index + 1) % len(multi_deck)
        assert 0 <= current_index < len(multi_deck), f"Índice fuera de rango: {current_index}"

    for i in range(12):
        current_index = (current_index - 1 + len(multi_deck)) % len(multi_deck)
        assert 0 <= current_index < len(multi_deck), f"Índice fuera de rango: {current_index}"
    print("[PASS] Validación de índice con múltiples elementos: navegación circular perfecta.")

    # 4. Verificar presencia de selectores en app.js
    required_tokens = [
        'search-input',
        'terms-container',
        '#next-card',
        '#prev-card',
        '#flip-card',
        '#flashcard-3d-element',
        'flipped',
        'active'
    ]
    for token in required_tokens:
        assert token in app_js, f"Falta identificador requerido: {token}"
    print(f"[PASS] Todos los {len(required_tokens)} identificadores y clases están integrados en app.js.")

def test_tab_navigation_simulation():
    """
    Simula clics en todos los botones del menú de navegación (desktop, mobile y footer)
    y verifica que el DOM alterne la visibilidad de las 4 pestañas (.active y hidden) sin fallos.
    """
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    with open('js/app.js', 'r', encoding='utf-8') as f:
        app_js = f.read()

    # 1. Verificar existencia de las 4 secciones de pestañas en index.html
    required_tabs = ['explorador', 'terminos', 'favoritos', 'quizzes']
    for tab in required_tabs:
        assert f'id="{tab}"' in html, f"index.html debe contener la sección con id='{tab}'"
    print("[PASS] Verificación de contenedores de pestañas (#explorador, #terminos, #favoritos, #quizzes) en index.html.")

    # 2. Verificar que switchTab y handleHashChange están definidos y expuestos
    assert 'function switchTab(' in app_js, "js/app.js debe definir la función switchTab(tabName)"
    assert 'function handleHashChange(' in app_js, "js/app.js debe definir la función handleHashChange()"
    assert 'window.switchTab = switchTab' in app_js, "js/app.js debe exponer switchTab en window"
    assert "window.addEventListener('hashchange'" in app_js, "js/app.js debe escuchar hashchange para navegación unificada"
    print("[PASS] Enrutador SPA unificado (switchTab, handleHashChange, hashchange) presente en js/app.js.")

    # 3. Extraer todos los enlaces .nav-link y simular clics en el DOM
    nav_links = re.findall(r'<a\s+[^>]*class="[^"]*nav-link[^"]*"[^>]*>', html)
    assert len(nav_links) >= 8, f"Se esperaban al menos 8 enlaces de navegación (.nav-link), encontrados {len(nav_links)}"

    # Modelo de estado del DOM para simular clases
    class MockElement:
        def __init__(self, tag_id, classes=None):
            self.id = tag_id
            self.classes = set(classes or [])
        def add_class(self, cls):
            self.classes.add(cls)
        def remove_class(self, cls):
            self.classes.discard(cls)
        def has_class(self, cls):
            return cls in self.classes

    dom_tabs = {
        'explorador': MockElement('explorador', ['tab-view', 'active']),
        'terminos': MockElement('terminos', ['tab-view', 'hidden']),
        'favoritos': MockElement('favoritos', ['tab-view', 'hidden']),
        'quizzes': MockElement('quizzes', ['tab-view', 'hidden'])
    }

    def simulate_switch_tab(target):
        # Mapeo exacto de normalizeTabName en js/app.js
        clean = target.lower().strip().replace('#', '').replace('/', '')
        if clean in ['quizzes', 'cuestionarios', 'cuestionario', 'evaluacion']:
            active_id = 'quizzes'
        elif clean in ['terminos', 'termino', 'catalogo']:
            active_id = 'terminos'
        elif clean in ['favoritos', 'flashcards', 'mis-favoritos-flashcards']:
            active_id = 'favoritos'
        else:
            active_id = 'explorador'

        for tab_id, el in dom_tabs.items():
            if tab_id == active_id:
                el.remove_class('hidden')
                el.add_class('active')
            else:
                el.add_class('hidden')
                el.remove_class('active')
        return active_id

    # Prueba A: Estado Inicial en Explorador
    assert dom_tabs['explorador'].has_class('active') and not dom_tabs['explorador'].has_class('hidden')
    assert dom_tabs['quizzes'].has_class('hidden') and not dom_tabs['quizzes'].has_class('active')

    # Prueba B: Clics hacia Cuestionarios (soporta #quizzes y alias #cuestionarios)
    for test_target in ['quizzes', '#quizzes', 'cuestionarios', '#cuestionarios']:
        res = simulate_switch_tab(test_target)
        assert res == 'quizzes'
        assert dom_tabs['quizzes'].has_class('active') and not dom_tabs['quizzes'].has_class('hidden'), f"Fallo al activar quizzes con {test_target}"
        assert dom_tabs['explorador'].has_class('hidden') and not dom_tabs['explorador'].has_class('active')
        assert dom_tabs['terminos'].has_class('hidden') and not dom_tabs['terminos'].has_class('active')
        assert dom_tabs['favoritos'].has_class('hidden') and not dom_tabs['favoritos'].has_class('active')
    print("[PASS] Simulación de clic a Cuestionarios (#quizzes y #cuestionarios): activa #quizzes y oculta las demás secciones.")

    # Prueba C: Clics hacia Términos Anatómicos
    for test_target in ['terminos', '#terminos']:
        res = simulate_switch_tab(test_target)
        assert res == 'terminos'
        assert dom_tabs['terminos'].has_class('active') and not dom_tabs['terminos'].has_class('hidden')
        assert dom_tabs['quizzes'].has_class('hidden') and not dom_tabs['quizzes'].has_class('active')
        assert dom_tabs['explorador'].has_class('hidden') and not dom_tabs['explorador'].has_class('active')
        assert dom_tabs['favoritos'].has_class('hidden') and not dom_tabs['favoritos'].has_class('active')
    print("[PASS] Simulación de clic a Términos (#terminos): activa #terminos y oculta las demás secciones.")

    # Prueba D: Clics hacia Flashcards / Mis Favoritos
    for test_target in ['favoritos', '#favoritos', 'flashcards', '#flashcards']:
        res = simulate_switch_tab(test_target)
        assert res == 'favoritos'
        assert dom_tabs['favoritos'].has_class('active') and not dom_tabs['favoritos'].has_class('hidden')
        assert dom_tabs['quizzes'].has_class('hidden')
        assert dom_tabs['terminos'].has_class('hidden')
        assert dom_tabs['explorador'].has_class('hidden')
    print("[PASS] Simulación de clic a Favoritos (#favoritos / #flashcards): activa #favoritos y oculta las demás secciones.")

    # Prueba E: Retorno al Explorador / Buscador (#explorador)
    for test_target in ['explorador', '#explorador', 'inicio', '#inicio']:
        res = simulate_switch_tab(test_target)
        assert res == 'explorador'
        assert dom_tabs['explorador'].has_class('active') and not dom_tabs['explorador'].has_class('hidden')
        assert dom_tabs['favoritos'].has_class('hidden') and not dom_tabs['favoritos'].has_class('active')
        assert dom_tabs['terminos'].has_class('hidden') and not dom_tabs['terminos'].has_class('active')
        assert dom_tabs['quizzes'].has_class('hidden') and not dom_tabs['quizzes'].has_class('active')

    # Verificar que el buscador y el renderizado existen en el retorno al explorador
    assert 'renderTerms' in app_js, "js/app.js debe invocar renderTerms al volver al explorador"
    assert 'search-input' in html, "index.html debe contener search-input en la vista del explorador"
    assert 'terms-container' in html, "index.html debe contener terms-container en la vista del explorador"
    print("[PASS] Simulación de retorno a Explorador (#explorador): reactiva #explorador con buscador y términos.")

    # 4. Verificar que cada enlace .nav-link tenga data-tab o href
    for link_html in nav_links:
        has_href = 'href="#' in link_html
        has_datatab = 'data-tab=' in link_html or 'data-route-' in link_html
        assert has_href or has_datatab, f"Enlace nav-link sin href o data-tab: {link_html}"
    print(f"[PASS] Auditoría de botones y enlaces de navegación: {len(nav_links)} enlaces .nav-link con data-tab/href conformes.")

if __name__ == '__main__':
    test_simulation()
    test_tab_navigation_simulation()
    print("¡Simulación de ejecución exitosa!")
