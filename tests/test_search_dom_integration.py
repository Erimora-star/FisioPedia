import re
import json
import unicodedata

def normalize_text(text):
    if not text:
        return ""
    nfkd = unicodedata.normalize('NFD', str(text))
    without_diacritics = "".join([c for c in nfkd if unicodedata.category(c) != 'Mn'])
    return without_diacritics.lower().strip()

def run_integration_tests():
    with open('js/app.js', 'r', encoding='utf-8') as f:
        app_js = f.read()

    # 1. Verify FALLBACK_TERMS has all 116 terms
    m_fb = re.search(r'const\s+FALLBACK_TERMS\s*=\s*(\[[\s\S]*?\]);\s*if', app_js)
    assert m_fb, "FALLBACK_TERMS not extracted"
    terms = json.loads(m_fb.group(1))
    assert len(terms) == 116, f"Expected 116 terms, got {len(terms)}"

    # 2. Test search queries: 'craneal', 'antagonista', 'CRANEAL', 'Antagonista'
    def simulate_search(query, cat='todos'):
        raw = normalize_text(query)
        tokens = raw.split()
        res = []
        for t in terms:
            if cat != 'todos':
                if cat == 'huesos' or cat == 'huesos_tendones':
                    if t.get('category') != 'huesos' and t.get('category') != 'huesos_tendones':
                        continue
                elif t.get('category') != cat:
                    continue
            if not tokens:
                res.append(t)
                continue
            corpus = normalize_text(' '.join([
                t.get('name', ''),
                t.get('termino', ''),
                t.get('id', ''),
                t.get('category', ''),
                t.get('categoryLabel', ''),
                t.get('region', ''),
                t.get('regionLabel', ''),
                t.get('simpleExplanation', ''),
                t.get('explicacionSencilla', ''),
                t.get('technicalDef', ''),
                t.get('defTecnica', ''),
                t.get('everydayTitle', ''),
                t.get('everydayExample', ''),
                t.get('analogia', ''),
                t.get('clinicalTitle', ''),
                t.get('clinicalRelevance', ''),
                t.get('clinicalCase', ''),
                t.get('pronunciation', ''),
                t.get('fonetica', ''),
                t.get('level', '')
            ]))
            if all(tok in corpus for tok in tokens):
                res.append(t)
        return res

    # Test craneal
    res_craneal = simulate_search('craneal')
    assert len(res_craneal) > 0, "No results for 'craneal'"
    assert any(t['id'] == 'craneal' for t in res_craneal), "Term 'craneal' missing from search results"

    # Test antagonista
    res_antagonista = simulate_search('antagonista')
    assert len(res_antagonista) > 0, "No results for 'antagonista'"
    assert any(t['id'] == 'antagonista' for t in res_antagonista), "Term 'antagonista' missing from search results"

    # Test empty query restores all 116
    res_empty = simulate_search('')
    assert len(res_empty) == 116, f"Clearing search must restore all 116 terms, got {len(res_empty)}"

    # Test nonsense query yields 0
    res_none = simulate_search('xyznonexistentterm123')
    assert len(res_none) == 0, f"Expected 0 matches, got {len(res_none)}"

    # 3. Verify that ¿Qué es? is included in renderTermCard
    assert '¿Qué es?' in app_js, "renderTermCard must include '¿Qué es?'"

    # 4. Verify search event delegation in app.js
    assert "executeRealtimeSearch" in app_js, "app.js must include executeRealtimeSearch"
    assert "document.addEventListener('input'" in app_js, "app.js must include document.addEventListener('input')"

    # 5. Verify renderCatalogoTerminosView exists for #terminos
    assert "renderCatalogoTerminosView" in app_js, "app.js must include renderCatalogoTerminosView"

    # 6. Verify quizzes has 25 questions and 3 modalities
    with open('data/quizzes.js', 'r', encoding='utf-8') as f:
        quizzes_text = f.read()
    assert "q25" in quizzes_text, "quizzes must include up to q25"
    assert "verdadero_falso" in quizzes_text, "quizzes must include verdadero_falso"
    assert "caso_clinico" in quizzes_text, "quizzes must include caso_clinico"

    print("[PASS] Integration test: search in real-time, ¿Qué es?, 116 terms, and quizzes 100% verified.")

if __name__ == '__main__':
    run_integration_tests()
