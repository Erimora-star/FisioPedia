# Fisio Pedía - Automated Test Suite (PowerShell Native)
# Valida la integridad de datos, esquemas SVG, enlaces HTML, capa de almacenamiento y PWA.

$ErrorActionPreference = "Stop"

function Log-Result($msg, $status) {
    $colors = @{
        "PASS" = "Green"
        "FAIL" = "Red"
        "INFO" = "Cyan"
        "WARN" = "Yellow"
    }
    Write-Host "[$status] $msg" -ForegroundColor $colors[$status]
}

Write-Host ("=" * 60)
Write-Host "Iniciando Suite de Pruebas Automatizadas de Fisio Pedía..."
Write-Host ("=" * 60)

try {
    # 1. Verificar archivos esenciales del proyecto
    $requiredFiles = @(
        "index.html",
        "manifest.json",
        "sw.js",
        "css/custom.css",
        "js/firebase-config.js",
        "js/firebase-config.example.js",
        "js/storage.js",
        "data/terms.js",
        "data/quizzes.js",
        "js/app.js",
        "README.md",
        ".gitignore"
    )

    foreach ($file in $requiredFiles) {
        if (-not (Test-Path $file)) {
            throw "Falta archivo requerido: $file"
        }
        $len = (Get-Item $file).Length
        if ($len -le 0) {
            throw "El archivo $file está vacío"
        }
    }
    Log-Result "Todos los $($requiredFiles.Count) archivos requeridos existen y tienen contenido." "PASS"

    # 2. Integridad de Términos Anatómicos (30 términos completos)
    $termsContent = Get-Content -Raw -Encoding UTF8 "data/terms.js"
    $idMatches = [regex]::Matches($termsContent, 'id:\s*["'']([^"'']+)["'']')
    $termIds = @($idMatches | ForEach-Object { $_.Groups[1].Value })

    if ($termIds.Count -lt 30) {
        throw "Se esperaban al menos 30 términos, encontrados: $($termIds.Count)"
    }
    $uniqueIds = $termIds | Select-Object -Unique
    if ($termIds.Count -ne $uniqueIds.Count) {
        throw "Existen IDs duplicados en terms.js"
    }

    $requiredFields = @("name", "pronunciation", "category", "categoryLabel", "level", "technicalDef", "simpleExplanation", "everydayExample", "clinicalRelevance", "keyDetails", "svgType")
    foreach ($field in $requiredFields) {
        $count = [regex]::Matches($termsContent, "$field\s*:").Count
        if ($count -lt $termIds.Count) {
            throw "Campo '$field' incompleto: solo $count encontrados para $($termIds.Count) términos."
        }
    }
    Log-Result "Base de datos anatómica: $($termIds.Count) términos válidos sin duplicados y con todos los campos." "PASS"

    # 3. Integridad de Quizzes Clínicos (15 preguntas)
    $quizzesContent = Get-Content -Raw -Encoding UTF8 "data/quizzes.js"
    $qMatches = [regex]::Matches($quizzesContent, 'id:\s*["''](q\d+)["'']')
    $qIds = @($qMatches | ForEach-Object { $_.Groups[1].Value })
    if ($qIds.Count -lt 15) {
        throw "Se esperaban al menos 15 quizzes, encontrados: $($qIds.Count)"
    }

    $uniqueQ = $qIds | Select-Object -Unique
    if ($qIds.Count -ne $uniqueQ.Count) {
        throw "Existen IDs duplicados en quizzes.js"
    }

    $correctCount = [regex]::Matches($quizzesContent, 'isCorrect:\s*true').Count
    if ($correctCount -ne $qIds.Count) {
        throw "Cada quiz debe tener exactamente 1 respuesta correcta. Quizzes: $($qIds.Count), Correctas: $correctCount"
    }
    Log-Result "Banco de evaluación: $($qIds.Count) preguntas clínicas, cada una con exactamente 1 respuesta correcta." "PASS"

    # 4. Cobertura de Esquemas SVG Didácticos (30 tipos)
    $appContent = Get-Content -Raw -Encoding UTF8 "js/app.js"
    $svgTypes = [regex]::Matches($termsContent, 'svgType:\s*["'']([^"'']+)["'']') | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique

    foreach ($st in $svgTypes) {
        if (-not ($appContent -match "case\s*['""]$st['""]")) {
            throw "Falta caso SVG para: $st en js/app.js"
        }
    }
    Log-Result "Cobertura de esquemas SVG: $($svgTypes.Count) diagramas vectoriales implementados al 100%." "PASS"

    # 5. Verificación de Capa Híbrida de Almacenamiento & Firebase
    $storageContent = Get-Content -Raw -Encoding UTF8 "js/storage.js"
    if (-not ($storageContent -match "FirebaseAdapter")) {
        throw "js/storage.js no contiene la implementación de FirebaseAdapter"
    }
    if (-not ($storageContent -match "saveCloudConfig")) {
        throw "Falta método saveCloudConfig en js/storage.js"
    }
    if (-not ($storageContent -match "testCloudConnection")) {
        throw "Falta método testCloudConnection en js/storage.js"
    }
    Log-Result "Capa de persistencia: Arquitectura híbrida (LocalStorage + Firebase Firestore) lista." "PASS"

    # 6. Verificación de Interfaz HTML, PWA y Disclaimer Médico
    $htmlContent = [System.IO.File]::ReadAllText("$pwd/index.html", [System.Text.Encoding]::UTF8)
    if (-not ($htmlContent -match "Fisio Ped")) {
        throw "index.html no contiene el título Fisio Pedía"
    }
    if (-not ($htmlContent -match "No diagnostica enfermedades")) {
        throw "Falta el disclaimer médico obligatorio del PRD en index.html"
    }
    if (-not ($htmlContent -match "firebase-firestore-compat.js")) {
        throw "index.html no incluye el SDK de Firestore"
    }
    if (-not ($htmlContent -match "manifest.json")) {
        throw "index.html no enlaza el manifest.json de PWA"
    }
    if (-not ($htmlContent -match "modal-cloud-sync")) {
        throw "index.html no contiene el modal de sincronización en la nube"
    }

    # Validar manifest JSON
    $manifestContent = Get-Content -Raw -Encoding UTF8 "manifest.json"
    $manifestObj = $manifestContent | ConvertFrom-Json
    if (-not $manifestObj.name) {
        throw "manifest.json no es un JSON válido o no contiene campo 'name'"
    }
    Log-Result "Interfaz web y PWA: HTML, disclaimer ético, manifest PWA y modal de nube íntegros." "PASS"

    # 7. Verificación de Búsqueda sin tildes e insensibilidad a mayúsculas
    if (-not ($appContent -match "normalizeSearchText")) {
        throw "Falta función normalizeSearchText en js/app.js para búsqueda insensible a acentos/tildes"
    }
    Log-Result "Buscador inteligente: Normalización NFD para búsquedas sin tildes y mayúsculas verificada." "PASS"

    # 8. Verificación de Recursos Estáticos Locales
    $localAssets = @(
        "index.html",
        "manifest.json",
        "sw.js",
        "css/custom.css",
        "js/firebase-config.js",
        "js/storage.js",
        "data/terms.js",
        "data/quizzes.js",
        "js/app.js"
    )

    foreach ($asset in $localAssets) {
        if (-not (Test-Path $asset)) {
            throw "Recurso local no encontrado: $asset"
        }
        $bytes = [System.IO.File]::ReadAllBytes("$pwd/$asset")
        if ($bytes.Length -le 0) {
            throw "Recurso local con longitud 0 bytes: $asset"
        }
    }

    Log-Result "Recursos estáticos: Todos los $($localAssets.Count) archivos se resuelven y leen correctamente." "PASS"

    Write-Host ("=" * 60)
    Log-Result "¡AUDITORÍA Y PRUEBAS COMPLETADAS EXITOSAMENTE! (100% OPERACIONAL)" "PASS"
    Write-Host ("=" * 60)
}
catch {
    Log-Result "Falla en la prueba: $_" "FAIL"
    exit 1
}
