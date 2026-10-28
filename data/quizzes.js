// Fisio Pedía - Banco de Cuestionarios de Autoevaluación
// Preguntas de práctica basadas en casos clínicos reales y situaciones de la vida cotidiana.

const FISIOPEDIA_QUIZZES = [
  {
    id: "q1",
    question: "¿Qué movimiento articular principal se ejecuta al alcanzar un objeto en una repisa elevada?",
    scenario: "Un paciente intenta alcanzar una taza de café en la repisa más alta de la cocina levantando el brazo recto hacia adelante y hacia arriba por encima de su cabeza. ¿Qué movimiento articular principal está ejecutando en la articulación glenohumeral del hombro?",
    level: "Principiante / 1er Año",
    category: "Miembro Superior",
    planeAxis: "Plano Sagital • Eje Transversal",
    hint: "El movimiento se realiza hacia adelante respecto a la posición anatómica cero (0° a 180°), aproximando las caras anteriores.",
    metrics: [
      { label: "Rango Normal (ROM)", value: "0° - 180°" },
      { label: "Músculo Agonista Primario", value: "Deltoides Anterior" }
    ],
    options: [
      {
        id: "A",
        text: "Abducción de hombro",
        detail: "Desplazamiento lateral en plano frontal, alejándose de la línea media.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Flexión de hombro",
        detail: "Elevación anterior en plano sagital hacia arriba y al frente.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Extensión de hombro",
        detail: "Movimiento posterior del brazo por detrás del plano medio del tronco.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Rotación externa",
        detail: "Giro del húmero sobre su eje longitudinal hacia afuera.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! Levantar el brazo recto hacia adelante y arriba es una **Flexión de Hombro**, movimiento que ocurre en el plano sagital sobre el eje transversal. El deltoides anterior y el pectoral mayor (haz clavicular) son los motores principales."
  },
  {
    id: "q2",
    question: "¿Cuál es la función del 'GPS interno del cuerpo' (Propiocepción)?",
    scenario: "Al bajar de noche las escaleras de tu casa a oscuras sin encender la luz, tus pies calculan la altura exacta de cada escalón y apoyan sin tropezar ni necesitar mirar. ¿Qué mecanorreceptores transmiten principalmente esta información de longitud muscular al cerebro?",
    level: "Básico - Intermedio",
    category: "Control Neuromuscular",
    planeAxis: "Vía Aferente Somatosensorial",
    hint: "Están dispuestos 'en paralelo' con las fibras musculares extrafusales y censan el estiramiento o longitud del músculo.",
    metrics: [
      { label: "Sensor de longitud", value: "Huso Neuromuscular" },
      { label: "Sensor de tensión", value: "Órgano de Golgi" }
    ],
    options: [
      {
        id: "A",
        text: "Discos de Merkel",
        detail: "Mecanorreceptores de adaptación lenta de la piel para tacto discriminativo.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Husos neuromusculares",
        detail: "Detectan cambios en la longitud muscular y velocidad de estiramiento.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Corpúsculos de Meissner",
        detail: "Receptores encapsulados de tacto ligero en la dermis superficial.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Termorreceptores de Ruffini",
        detail: "Sensibles predominantemente al calor y cambios térmicos.",
        isCorrect: false
      }
    ],
    explanation: "¡Excelente! Los **husos neuromusculares** están intercalados en el vientre muscular y avisan al sistema nervioso central de inmediato si el músculo se estira, activando reflejos protectores instantáneos."
  },
  {
    id: "q3",
    question: "Al pedir comida con la palma mirando hacia arriba, ¿qué movimiento realiza el antebrazo?",
    scenario: "Un estudiante extiende su mano derecha con la palma abierta orientada hacia el techo para recibir unas monedas de cambio. ¿Cómo se denomina este movimiento donde el radio queda paralelo al cúbito?",
    level: "Principiante (1er Año)",
    category: "Antebrazo y Mano",
    planeAxis: "Plano Transversal • Eje Longitudinal",
    hint: "Recuerda la regla nemotécnica de la SOPA: palma hacia arriba para pedir un plato de sopa.",
    metrics: [
      { label: "Músculo agonista", value: "Bíceps Braquial / Supinador" },
      { label: "ROM normal", value: "80° - 90°" }
    ],
    options: [
      {
        id: "A",
        text: "Pronación",
        detail: "El radio cruza sobre el cúbito y la palma queda hacia abajo.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Supinación",
        detail: "La palma gira hacia arriba y el radio queda paralelo al cúbito.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Desviación cubital",
        detail: "Inclinación de la muñeca en plano frontal hacia el meñique.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Circunducción",
        detail: "Secuencia combinada de los 4 movimientos angulares.",
        isCorrect: false
      }
    ],
    explanation: "¡Muy bien! **Supinación** es orientar la palma hacia arriba o hacia adelante. Nemotecnia: 'SUPInar es pedir SUPIta (sopa)'. En este movimiento el radio no cruza el cúbito, sino que se alinea paralelo a él."
  },
  {
    id: "q4",
    question: "¿Qué estructura evita que la espinilla (tibia) se desplace descontrolada hacia adelante?",
    scenario: "Durante un partido de microfútbol, un jugador frena bruscamente con la rodilla flexionada en valgo y siente un 'chasquido'. El fisioterapeuta realiza el Test de Lachman encontrando traslación anterior excesiva de la tibia. ¿Qué ligamento está afectado?",
    level: "Intermedio",
    category: "Rodilla & Ligamentos",
    planeAxis: "Estabilidad Articular Sagital",
    hint: "Es el principal freno pasivo ante la traslación tibial anterior y tiene inserción en la espina tibial anterior.",
    metrics: [
      { label: "Test más específico", value: "Test de Lachman" },
      { label: "Inserción femoral", value: "Cóndilo externo (cara interna)" }
    ],
    options: [
      {
        id: "A",
        text: "Ligamento Cruzado Anterior (LCA)",
        detail: "Frena la traslación de la tibia hacia adelante respecto al fémur.",
        isCorrect: true
      },
      {
        id: "B",
        text: "Ligamento Colateral Medial (LCM)",
        detail: "Frena la apertura de la rodilla en valgo (fuerzas hacia adentro).",
        isCorrect: false
      },
      {
        id: "C",
        text: "Ligamento Cruzado Posterior (LCP)",
        detail: "Frena el desplazamiento de la tibia hacia atrás (cajón posterior).",
        isCorrect: false
      },
      {
        id: "D",
        text: "Ligamento Rotuliano",
        detail: "Transmite la fuerza del cuádriceps desde la rótula a la tibia.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! El **Ligamento Cruzado Anterior (LCA)** actúa como el cinturón de seguridad que impide que la tibia se deslice anteriormente bajo el fémur. Su prueba de referencia es el Test de Lachman."
  },
  {
    id: "q5",
    question: "¿Cuáles son los 4 músculos que componen el Manguito Rotador del hombro?",
    scenario: "Para recordar los músculos que estabilizan la cabeza del húmero en la cavidad glenoidea, los docentes de anatomía suelen enseñar la nemotecnia S.I.R.S. ¿Cuál es la opción que contiene los 4 músculos exactos?",
    level: "Intermedio",
    category: "Hombro & Manguito",
    planeAxis: "Estabilidad Dinámica Glenohumeral",
    hint: "Tres se insertan en el troquíter (tubérculo mayor) y uno solo en el troquín (tubérculo menor).",
    metrics: [
      { label: "Nemotecnia oficial", value: "S.I.R.S" },
      { label: "Abductor inicial (15°)", value: "Supraespinoso" }
    ],
    options: [
      {
        id: "A",
        text: "Supraespinoso, Infraespinoso, Redondo mayor y Subescapular",
        detail: "Ojo: el Redondo mayor NO forma parte del manguito rotador.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Supraespinoso, Infraespinoso, Redondo menor y Subescapular",
        detail: "Los 4 coaptadores exactos que componen el manguito rotador.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Deltoides, Pectoral mayor, Coracobraquial y Bíceps",
        detail: "Son músculos motores primarios grandes, no estabilizadores profundos.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Trapecio, Serrato anterior, Romboides y Dorsal ancho",
        detail: "Músculos estabilizadores de la escápula, no de la articulación glenohumeral.",
        isCorrect: false
      }
    ],
    explanation: "¡Excelente! La respuesta correcta es **Supraespinoso, Infraespinoso, Redondo MENOR y Subescapular** (S.I.R.S). Una trampa clásica de examen es confundir el redondo menor con el redondo mayor (el redondo mayor no se une a la cápsula articular)."
  },
  {
    id: "q6",
    question: "¿Qué movimiento forzado del pie produce el 85% de los esguinces de tobillo?",
    scenario: "Al bajar de la acera de forma descuidada, una persona pisa el borde de un hoyo y siente un tirón violento en el exterior del tobillo. El pie se dobló hacia adentro con la planta mirando hacia el otro pie. ¿Cómo se llama este movimiento lesional?",
    level: "Básico - Intermedio",
    category: "Tobillo & Pie",
    planeAxis: "Articulación Subastragalina",
    hint: "Combina aproximación, supinación y flexión plantar.",
    metrics: [
      { label: "Ligamento más dañado", value: "Peroneoastragalino anterior (LPAA)" },
      { label: "Articulación clave", value: "Subtalar o subastragalina" }
    ],
    options: [
      {
        id: "A",
        text: "Inversión",
        detail: "La planta del pie gira hacia la línea media medial.",
        isCorrect: true
      },
      {
        id: "B",
        text: "Eversión",
        detail: "La planta del pie gira lateralmente hacia afuera.",
        isCorrect: false
      },
      {
        id: "C",
        text: "Dorsiflexión pura",
        detail: "Elevación de la punta del pie hacia la espinilla.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Abducción del retropié",
        detail: "Desplazamiento horizontal del talón.",
        isCorrect: false
      }
    ],
    explanation: "¡Exacto! La **Inversión** (con flexión plantar) es el mecanismo lesional clásico del esguince de tobillo, que tensa y desgarra en primer lugar al ligamento peroneoastragalino anterior (LPAA)."
  },
  {
    id: "q7",
    question: "Al hacer una sentadilla con los pies fijos en el suelo, ¿qué tipo de cadena cinética se ejecuta?",
    scenario: "En la sala de fisioterapia, el paciente realiza sentadillas apoyando firmemente ambas plantas de los pies sobre una colchoneta mientras dobla y estira sus rodillas y caderas. ¿Qué tipo de cadena cinética biomecánica representa este ejercicio?",
    level: "Intermedio",
    category: "Biomecánica Funcional",
    planeAxis: "Cadenas Biomecánicas",
    hint: "El segmento distal (los pies) está fijo al piso y el cuerpo se mueve sobre él.",
    metrics: [
      { label: "Segmento distal", value: "Fijo (Suelo)" },
      { label: "Efecto articular", value: "Co-contracción y compresión protectora" }
    ],
    options: [
      {
        id: "A",
        text: "Cadena Cinética Abierta (CCA)",
        detail: "El segmento distal se mueve libremente en el espacio sin apoyo.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Cadena Cinética Cerrada (CCC)",
        detail: "El segmento distal está apoyado en una superficie fija inamovible.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Cadena Isocinética Pura",
        detail: "Velocidad constante mantenida por un dinamómetro robótico.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Cadena Pasiva Refleja",
        detail: "Movimiento inducido exclusivamente por gravedad o terapeuta.",
        isCorrect: false
      }
    ],
    explanation: "¡Muy bien! Es una **Cadena Cinética Cerrada (CCC)** porque los pies están fijos en el piso y el peso corporal se desplaza sobre ellos. Esto produce co-contracción de cuádriceps e isquiotibiales, aportando gran estabilidad a la rodilla."
  },
  {
    id: "q8",
    question: "¿Qué estructura fibrocartilaginosa de la rodilla tiene forma de 'C' y es menos móvil?",
    scenario: "En una resonancia magnética de rodilla, el informe radiológico describe un desgarro en asa de balde en el fibrocartílago medial, recordando que está íntimamente unido al ligamento colateral medial. ¿Qué menisco es?",
    level: "Intermedio",
    category: "Rodilla & Cartílago",
    planeAxis: "Platillo Tibial Medial",
    hint: "Recuerda la regla mnemotécnica C-I-T-O: C = Interno (Medial), O = Externo (Lateral).",
    metrics: [
      { label: "Mnemotecnia", value: "C-I-T-O" },
      { label: "Forma meniscal", value: "Forma de C abierta" }
    ],
    options: [
      {
        id: "A",
        text: "Menisco Medial (Interno)",
        detail: "Tiene forma de 'C', está adherido al LCM y se lesiona con mayor frecuencia.",
        isCorrect: true
      },
      {
        id: "B",
        text: "Menisco Lateral (Externo)",
        detail: "Tiene forma de 'O' casi cerrada y posee mayor movilidad fisiológica.",
        isCorrect: false
      },
      {
        id: "C",
        text: "Cartílago Hialino Rotuliano",
        detail: "Cubre la carilla posterior de la rótula, no los platillos tibiales.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Almohadilla Grasa de Hoffa",
        detail: "Tejido adiposo infrapatelar ricamente vascularizado e inervado.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! El **Menisco Medial** tiene forma de 'C', es más grande, está fijo al ligamento colateral medial y por ser menos móvil absorbe más fuerzas lesionales (regla C-I-T-O: C=Interno, O=Externo)."
  },
  {
    id: "q9",
    question: "¿Por qué duele la planta del pie en los primeros pasos de la mañana en la fascitis plantar?",
    scenario: "Un paciente de 45 años refiere un dolor punzante en la base del talón que es insoportable al levantarse de la cama, pero que mejora después de caminar 10 a 15 minutos. ¿Qué estructura tendinosa/aponeurótica se encuentra acortada e inflamada?",
    level: "Básico - Intermedio",
    category: "Tobillo & Pie",
    planeAxis: "Arco Longitudinal Medial",
    hint: "Es la banda elástica de tejido conectivo que sostiene el arco plantar mediante el mecanismo de Windlass.",
    metrics: [
      { label: "Estructura afectada", value: "Fascia Plantar" },
      { label: "Mecanismo biomecánico", value: "Mecanismo de Windlass" }
    ],
    options: [
      {
        id: "A",
        text: "Ligamento deltoideo",
        detail: "Complejo ligamentoso medial fuerte que estabiliza el tobillo.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Fascia Plantar",
        detail: "Aponeurosis fibrosa que sostiene el arco del pie y amortigua la pisada.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Músculo sóleo",
        detail: "Músculo profundo de la pantorrilla responsable de la flexión plantar.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Tendón del tibial anterior",
        detail: "Se ubica en la cara anterior y dorsal del tobillo, no en la planta.",
        isCorrect: false
      }
    ],
    explanation: "¡Exacto! La **Fascia Plantar** se acorta y repara durante el reposo nocturno. Al dar el primer paso con el peso del cuerpo, las microroturas se estiran abruptamente causando ese dolor agudo en el talón."
  },
  {
    id: "q10",
    question: "¿Cuál es el instrumento estándar para medir con exactitud los grados de movilidad articular?",
    scenario: "En la primera sesión de evaluación, la fisioterapeuta coloca un instrumento de dos brazos articulados con una escala circular graduada de 0° a 180° sobre el epicóndilo del codo para medir cuántos grados dobla el paciente. ¿Cómo se llama este instrumento?",
    level: "Básico (1er Año)",
    category: "Evaluación Kinésica",
    planeAxis: "Medición en Grados Sexagesimales",
    hint: "Proviene del griego gonia (ángulo) y metron (medida).",
    metrics: [
      { label: "Unidad de medida", value: "Grados (°)" },
      { label: "Posición de referencia", value: "Posición Anatómica (0°)" }
    ],
    options: [
      {
        id: "A",
        text: "Goniómetro Universal",
        detail: "Instrumento con fulcro, brazo fijo y brazo móvil para medir el ROM articular.",
        isCorrect: true
      },
      {
        id: "B",
        text: "Dinamómetro manual",
        detail: "Aparato que mide la fuerza de agarre o prensión en kilogramos o libras.",
        isCorrect: false
      },
      {
        id: "C",
        text: "Inclinómetro digital",
        detail: "Mide inclinaciones gravitatorias, común en mediciones de columna.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Cinta métrica antropométrica",
        detail: "Utilizada para medir perímetros musculares y longitud de extremidades.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! El **Goniómetro Universal** es la herramienta fundamental de la goniometría articular en fisioterapia para cuantificar de manera objetiva el rango de movimiento activo y pasivo."
  }
];
