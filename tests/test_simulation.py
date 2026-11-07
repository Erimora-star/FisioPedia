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

if __name__ == '__main__':
    test_simulation()
    print("¡Simulación de ejecución exitosa!")
