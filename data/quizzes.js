// Fisio Pedía - Cuestionarios de Autoevaluación
// Preguntas cortas, casos de la vida diaria y retroalimentación pedagógica inmediata.

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
  }
];
