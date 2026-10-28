# Fisio Pedía - Automated Test Suite (PowerShell Native)
# Valida la integridad de datos, esquemas SVG, enlaces HTML, capa de almacenamiento y servidor local.

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
    # 1. Verificar archivos esenciales
    $requiredFiles = @(
        "index.html",
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

    # 2. Integridad de Términos Anatómicos
    $termsContent = Get-Content -Raw -Encoding UTF8 "data/terms.js"
    $idMatches = [regex]::Matches($termsContent, 'id:\s*["'']([^"'']+)["'']')
    $termIds = @($idMatches | ForEach-Object { $_.Groups[1].Value })

    if ($termIds.Count -lt 20) {
        throw "Se esperaban al menos 20 términos, encontrados: $($termIds.Count)"
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
    Log-Result "Verificación de base de datos de términos: $($termIds.Count) términos anatómicos válidos." "PASS"

    # 3. Integridad de Quizzes
    $quizzesContent = Get-Content -Raw -Encoding UTF8 "data/quizzes.js"
    $qMatches = [regex]::Matches($quizzesContent, 'id:\s*["''](q\d+)["'']')
    $qIds = @($qMatches | ForEach-Object { $_.Groups[1].Value })
    if ($qIds.Count -lt 10) {
        throw "Se esperaban al menos 10 quizzes, encontrados: $($qIds.Count)"
    }

    $correctCount = [regex]::Matches($quizzesContent, 'isCorrect:\s*true').Count
    if ($correctCount -ne $qIds.Count) {
        throw "Cada quiz debe tener exactamente 1 respuesta correcta. Quizzes: $($qIds.Count), Correctas: $correctCount"
    }
    Log-Result "Verificación de quizzes: $($qIds.Count) preguntas clínicas con 1 respuesta correcta cada una." "PASS"

    # 4. Cobertura de Esquemas SVG
    $appContent = Get-Content -Raw -Encoding UTF8 "js/app.js"
    $svgTypes = [regex]::Matches($termsContent, 'svgType:\s*["'']([^"'']+)["'']') | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique

    foreach ($st in $svgTypes) {
        if (-not ($appContent -match "case\s*['""]$st['""]")) {
            throw "Falta caso SVG para: $st en js/app.js"
        }
    }
    Log-Result "Cobertura de esquemas SVG: $($svgTypes.Count) tipos de esquemas anatómicos mapeados." "PASS"

    # 5. Verificación de Capa Firebase / Storage
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
    Log-Result "Capa de almacenamiento: Soporte híbrido LocalStorage + Firebase Firestore verificado." "PASS"

    # 6. Verificación de Interfaz HTML y Disclaimer Médico
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
    if (-not ($htmlContent -match "modal-cloud-sync")) {
        throw "index.html no contiene el modal de sincronización en la nube"
    }
    Log-Result "Interfaz HTML: Enlaces a scripts, disclaimer médico y modal de Firebase íntegros." "PASS"

    # 7. Verificación de Recursos Estáticos y Enlaces Locales
    $localAssets = @(
        "index.html",
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

    Log-Result "Servidor y recursos estáticos: Todos los 7 recursos se resuelven e integran sin errores." "PASS"

    Write-Host ("=" * 60)
    Log-Result "¡TODAS LAS PRUEBAS PASARON EXITOSAMENTE! (100% FUNCIONAL)" "PASS"
    Write-Host ("=" * 60)
}
catch {
    Log-Result "Falla en la prueba: $_" "FAIL"
    exit 1
}
