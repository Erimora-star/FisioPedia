# Fisio Pedía 🦴🧠
> **Diccionario del Cuerpo Humano para Estudiantes de Fisioterapia**

Fisio Pedía es una aplicación web educativa interactiva desarrollada para estudiantes de Fisioterapia y del área de la salud que inician sus estudios anatómicos y biomecánicos. Su meta es facilitar el aprendizaje mediante **explicaciones sencillas**, **ejemplos de la vida cotidiana**, **diccionario visual**, **flashcards 3D** y **cuestionarios de autoevaluación**.

---

## 🚀 Características Principales (Arquitectura Híbrida: Local + Nube)

1. 🔍 **Buscador de Términos Anatómicos**:
   - Búsqueda en tiempo real por nombre, concepto o metáfora cotidiana.
   - Atajo de teclado rápido `Ctrl + K` / `Cmd + K`.
   - Filtros por categoría: *Músculos*, *Huesos & Tendones*, *Articulaciones*, *Movimientos*.
   - Filtros por región corporal: *Columna*, *Hombro*, *Codo*, *Mano*, *Cadera*, *Rodilla*, *Tobillo*, *Control Global*.

2. 💡 **Explicaciones Sencillas y Cotidianas**:
   - Definición técnica rigurosa complementada con *"En palabras sencillas"*.
   - Metáforas de la vida diaria (ej. *abotonar una camisa a ciegas*, *pedir sopa con la mano*, *frenar en seco*, *alcanzar la taza de café*).
   - Casos clínicos reales de fisioterapia y rehabilitación (esguince recidivante, manguito rotador, LCA, pinzamiento, meniscopatía).
   - Síntesis de voz fonética médica en español con Web Speech API.

3. 🖼️ **Diccionario Visual Biomecánico Integral (SVG)**:
   - Ilustraciones vectoriales (SVG) de planos, ejes, husos neuromusculares, receptores de Golgi, articulaciones, ligamentos, cadenas cinéticas y goniometría.
   - Fichas estructuradas de origen, inserción, inervación y goniometría.

4. ⭐ **Favoritos & Flashcards 3D**:
   - Guarda términos para repasar posteriormente con un solo clic.
   - Visor de tarjetas didácticas en 3D con volteo interactivo (*flip card*).
   - Mezclador de baraja (*shuffle*) y conteo de progreso sincronizado.

5. 📝 **Cuestionarios de Autoevaluación**:
   - 10 preguntas basadas en situaciones cotidianas de consulta kinésica.
   - Retroalimentación inmediata con justificación pedagógica, racha de estudio y cálculo de aciertos (+100 XP).

6. ☁️ **Sincronización en la Nube con Google Firebase & Cloud Firestore**:
   - **Modo Offline-First**: Funciona de forma 100% autónoma y privada en el navegador con `localStorage`.
   - **Modo Nube en Tiempo Real**: Conecta con Firebase Firestore con un solo clic para sincronizar favoritos y resultados de pruebas entre tus dispositivos (celular y computadora) en tiempo real mediante listeners `onSnapshot` y autenticación anónima silenciosa.
   - Panel de control integrado en la aplicación con asistente interactivo de configuración y prueba de conectividad.

---

## ⚙️ Configuración de Firebase & Firestore (Opcional)

Puedes activar la sincronización en la nube de dos formas:

### Opción 1: Desde la propia aplicación (Recomendada)
1. Abre `index.html` en tu navegador.
2. Haz clic en el botón **"Nube: Local"** en la barra superior o en el pie de página.
3. Pega el objeto `firebaseConfig` obtenido de tu [Firebase Console](https://console.firebase.google.com).
4. Haz clic en **"Guardar y Conectar"** o en **"Probar Conexión"**.

### Opción 2: Mediante archivo de configuración
Copia `js/firebase-config.example.js` como `js/firebase-config.js` y asigna tus credenciales:
```javascript
window.FISIOPEDIA_FIREBASE_CONFIG = {
  apiKey: "AIzaSy...",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
```

---

## 🛡️ Aviso Legal y Ético (Disclaimer Médico)
Fisio Pedía es una herramienta de apoyo al estudio pedagógico. **No diagnostica enfermedades ni lesiones**, **no recomienda tratamientos personalizados** ni reemplaza una consulta con un profesional de la salud, docente o libro oficial de estudio.

---

## 🧪 Pruebas Automatizadas

Para validar que todos los archivos, términos, quizzes y esquemas SVG funcionen al 100%:

### En Windows (PowerShell):
```powershell
powershell -ExecutionPolicy Bypass -File tests\verify_app.ps1
```

### En Mac / Linux (Python 3):
```bash
python3 tests/verify_app.py
```

---

## 🌐 Publicación en GitHub Pages
Para habilitar la web en vivo gratuitamente:
1. Ve a tu repositorio en GitHub: **[Erimora-star/FisioPedia](https://github.com/Erimora-star/FisioPedia)**
2. Entra en **Settings** -> **Pages**.
3. En **Build and deployment > Branch**, selecciona `main` y carpeta `/ (root)`.
4. Haz clic en **Save**. En 1 minuto tendrás tu enlace público listo.
