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
  },
  {
    id: "q11",
    question: "Â¿QuÃ© nervio estÃ¡ comprometido si el paciente despierta con adormecimiento en pulgar, Ã­ndice y medio?",
    scenario: "Una secretaria de 42 aÃ±os acude a consulta refiriendo que se despierta a las 3 a.m. sacudiendo la mano derecha por hormigueo y adormecimiento en la cara palmar del pulgar, Ã­ndice y dedo medio. Al flexionarle la muÃ±eca a 90Â° durante 60 segundos (Test de Phalen), los sÃ­ntomas se reproducen de inmediato.",
    level: "Intermedio",
    category: "Miembro Superior",
    planeAxis: "NeuropatÃ­a por Atrapamiento",
    hint: "Este nervio atraviesa el tÃºnel carpiano junto a nueve tendones flexores de los dedos.",
    metrics: [
      { label: "Conducto osteofibroso", value: "TÃºnel Carpiano" },
      { label: "MÃºsculos afectados", value: "Eminencia Tenar" }
    ],
    options: [
      {
        id: "A",
        text: "Nervio Cubital (Ulnar)",
        detail: "Inerva el 5to dedo y la mitad del 4to dedo (canal de GuyÃ³n).",
        isCorrect: false
      },
      {
        id: "B",
        text: "Nervio Mediano",
        detail: "Discurre por el tÃºnel carpiano e inerva los tres primeros dedos y medio.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Nervio Radial",
        detail: "Inerva el dorso de la mano y extiende la muÃ±eca; no cruza el tÃºnel carpiano.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Nervio MÃºsculocutÃ¡neo",
        detail: "Inerva el compartimento anterior del brazo (bÃ­ceps y braquial anterior).",
        isCorrect: false
      }
    ],
    explanation: "Â¡Correcto! El **Nervio Mediano** transcurre dentro del tÃºnel carpiano bajo el retinÃ¡culo flexor. Su compresiÃ³n produce parestesias en los tres primeros dedos y signo de Phalen positivo caracterÃ­stico del SÃ­ndrome del TÃºnel Carpiano."
  },
  {
    id: "q12",
    question: "Â¿QuÃ© mÃºsculo presenta debilidad si al apoyar un pie, la pelvis opuesta cae de lado (Trendelenburg)?",
    scenario: "Durante la evaluaciÃ³n de la marcha de un paciente, observas que en la fase de apoyo monopodal sobre su pierna izquierda, la hemipelvis derecha cae visiblemente hacia abajo en lugar de mantenerse horizontal. Â¿La debilidad o inhibiciÃ³n de quÃ© mÃºsculo produce este signo de Trendelenburg?",
    level: "Intermedio - Avanzado",
    category: "Pelvis y Marcha",
    planeAxis: "Plano Frontal â€¢ Eje Anteroposterior",
    hint: "Es el abductor primario de la cadera del lado de apoyo y se inserta en el trocÃ¡nter mayor.",
    metrics: [
      { label: "Lado de la debilidad", value: "GlÃºteo Medio Izquierdo (lado de apoyo)" },
      { label: "Lado de la caÃ­da", value: "Hemipelvis Derecha (lado contralateral)" }
    ],
    options: [
      {
        id: "A",
        text: "GlÃºteo Mayor",
        detail: "Principal extensor de cadera en plano sagital; no controla la bÃ¡scula frontal de la pelvis.",
        isCorrect: false
      },
      {
        id: "B",
        text: "GlÃºteo Medio del lado de apoyo",
        detail: "MÃºsculo estabilizador transversal que impide el desplome de la pelvis contralateral.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Aductor Mayor contralateral",
        detail: "Aproxima el muslo hacia la lÃ­nea media; no estabiliza el apoyo monopodal.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Psoas IlÃ­aco",
        detail: "Es el flexor primordial de la cadera; no evita la caÃ­da de la pelvis en el plano frontal.",
        isCorrect: false
      }
    ],
    explanation: "Â¡Exacto! El **GlÃºteo Medio del lado de apoyo** es el tensor estabilizador primordial que mantiene nivelada la pelvis en apoyo monopodal. Si estÃ¡ dÃ©bil, la hemipelvis contralateral cae (Signo de Trendelenburg positivo)."
  },
  {
    id: "q13",
    question: "Â¿CuÃ¡l es el ligamento que con mayor frecuencia se rompe en un esguince de tobillo por inversiÃ³n?",
    scenario: "Un jugador de baloncesto aterriza sobre el pie de un rival; su tobillo se dobla violentamente hacia adentro (inversiÃ³n forzada en flexiÃ³n plantar). Inmediatamente se forma una tumefacciÃ³n prominente en 'huevo de paloma' justo delante del malÃ©olo externo. Â¿QuÃ© estructura ligamentosa es la lesionada con mayor frecuencia?",
    level: "BÃ¡sico - Intermedio",
    category: "Miembro Inferior",
    planeAxis: "InversiÃ³n Forzada del Pie",
    hint: "Une el borde anterior del peronÃ© con el cuello del astrÃ¡galo y es el freno primario del complejo colateral lateral.",
    metrics: [
      { label: "Frecuencia lesional", value: "> 85% de los esguinces de tobillo" },
      { label: "Prueba de cajÃ³n", value: "CajÃ³n Anterior de Tobillo" }
    ],
    options: [
      {
        id: "A",
        text: "Ligamento Deltoideo",
        detail: "Ligamento medial potente que se lesiona por eversiÃ³n forzada hacia afuera.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Ligamento Peroneoastragalino Anterior (LPAA)",
        detail: "Primer ligamento anterolateral que se tensa y desgarra en la inversiÃ³n forzada.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Ligamento PeroneocalcÃ¡neo",
        detail: "Se lesiona secundariamente tras rotura completa del LPAA en esguinces grado III.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Ligamento Cruzado Anterior",
        detail: "Se ubica en el pivote central de la rodilla, no en el tobillo.",
        isCorrect: false
      }
    ],
    explanation: "Â¡Correcto! El **Ligamento Peroneoastragalino Anterior (LPAA)** es el primer estabilizador anterolateral que cede ante la inversiÃ³n del pie en flexiÃ³n plantar, participando en mÃ¡s del 85% de los esguinces de tobillo."
  },
  {
    id: "q14",
    question: "Â¿CuÃ¡les son los tres mÃºsculos que forman el tendÃ³n de la 'Pata de Ganso' (Pes Anserinus)?",
    scenario: "Un corredor de media distancia refiere dolor exquisito a la palpaciÃ³n en la cara anteromedial de la tibia proximal, unos 4 cm por debajo de la interlÃ­nea de la rodilla. La profesora de fisioterapia le pregunta cuÃ¡les son los tres mÃºsculos que confluyen en esta inserciÃ³n conjunta ('regla del S-A-R-G-E-N-T-O').",
    level: "Intermedio",
    category: "Miembro Inferior",
    planeAxis: "InserciÃ³n Tendinosa Medial",
    hint: "Provienen de tres compartimentos distintos y estÃ¡n inervados por el nervio femoral, obturador y ciÃ¡tico.",
    metrics: [
      { label: "Mnemotecnia clÃ­nica", value: "S-A-R - G - E-N-T-O" },
      { label: "Hueso de inserciÃ³n", value: "Tibia Anteromedial" }
    ],
    options: [
      {
        id: "A",
        text: "BÃ­ceps femoral, Semitendinoso y Semimembranoso",
        detail: "Son los tres isquiotibiales; el bÃ­ceps femoral va al peronÃ©, no a la pata de ganso.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Sartorio, GrÃ¡cil (Recto Interno) y Semitendinoso",
        detail: "Los tres mÃºsculos que confluyen en la cara anteromedial de la tibia proximal.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Recto femoral, Vasto medial y Vasto lateral",
        detail: "Forman el cuÃ¡driceps femoral e insertan en la tuberosidad anterior de la tibia.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Tibial anterior, Peroneo lateral y SÃ³leo",
        detail: "MÃºsculos de la pierna y pie que no componen la pata de ganso.",
        isCorrect: false
      }
    ],
    explanation: "Â¡Correcto! La **Pata de Ganso (Pes Anserinus)** estÃ¡ formada por el **Sartorio**, el **GrÃ¡cil (Recto Interno)** y el **Semitendinoso**. Recuerda siempre la regla del 'Sargento'."
  },
  {
    id: "q15",
    question: "Â¿En quÃ© rango de abducciÃ³n del hombro se presenta el 'Arco Doloroso' por pinzamiento subacromial?",
    scenario: "Un pintor de obra acude a fisioterapia refiriendo que al levantar el brazo de lado, el movimiento es indoloro al inicio, pero al alcanzar la altura del hombro siente un pinchazo agudo incapacitante que desaparece cuando logra subir la mano por encima de su cabeza. Â¿En quÃ© rango angular ocurre este 'arco doloroso' de Neer?",
    level: "BÃ¡sico - Intermedio",
    category: "Miembro Superior",
    planeAxis: "Plano Frontal â€¢ AbducciÃ³n Glenohumeral",
    hint: "Es el intervalo donde el troquÃ­ter humeral comprime la bursa subacromial contra el techo del acromion.",
    metrics: [
      { label: "PatologÃ­a", value: "Pinzamiento Subacromial (Impingement)" },
      { label: "Estructura en conflicto", value: "Bursa subacromial y tendÃ³n del supraespinoso" }
    ],
    options: [
      {
        id: "A",
        text: "0Â° a 30Â°",
        detail: "Fase inicial dependiente principalmente del supraespinoso; no genera atrapamiento acromial.",
        isCorrect: false
      },
      {
        id: "B",
        text: "60Â° a 120Â°",
        detail: "Rango crÃ­tico donde el troquÃ­ter choca bajo el arco coracoacromial pellizcando la bursa.",
        isCorrect: true
      },
      {
        id: "C",
        text: "150Â° a 180Â°",
        detail: "Fase terminal que involucra bÃ¡scula escapular y articulaciÃ³n esternoclavicular.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Ãšnicamente a 0Â° en reposo",
        detail: "El pinzamiento biomecÃ¡nico es dinÃ¡mico y se desencadena con la elevaciÃ³n activa.",
        isCorrect: false
      }
    ],
    explanation: "Â¡Correcto! El **Arco Doloroso Subacromial** se manifiesta tÃ­picamente entre los **60Â° y 120Â° de abducciÃ³n**, intervalo biomecÃ¡nico donde el espacio entre el acromion y el hÃºmero se reduce al mÃ­nimo, pinzando la bursa y el supraespinoso."
  },
  {
    id: "q16",
    quizType: "verdadero_falso",
    question: "Verdadero o Falso: Las suturas de la bóveda craneal son diartrosis móviles que permiten expansión encefálica en la adultez.",
    scenario: "Durante una discusión clínica sobre biomecánica articular, un estudiante afirma que las suturas del cráneo adulto son diartrosis porque tienen cartílago hialino y movimiento activo.",
    level: "Básico (1er año)",
    category: "Biomecánica Articular",
    planeAxis: "Inmóvil (Sinartrosis)",
    hint: "Recuerda que las suturas craneales son articulaciones fibrosas inmóviles unidas sólidamente por tejido conectivo denso.",
    metrics: [
      {
        label: "Clasificación Real",
        value: "Sinartrosis Fibrosa"
      },
      {
        label: "Rango de Movimiento",
        value: "0° (Inmóvil)"
      }
    ],
    options: [
      {
        id: "A",
        text: "Verdadero",
        detail: "Afirma erróneamente que las suturas son diartrosis con movimiento activo.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Falso",
        detail: "Correcto: las suturas del cráneo son sinartrosis inmóviles fibrosas, no diartrosis.",
        isCorrect: true
      }
    ],
    explanation: "¡Correcto! Es FALSO. Las suturas craneales son **sinartrosis** (articulaciones fibrosas inmóviles). Las diartrosis son articulaciones sinoviales de libre movimiento como la rodilla o el hombro."
  },
  {
    id: "q17",
    quizType: "verdadero_falso",
    question: "Verdadero o Falso: El periostio es una membrana ósea ricamente inervada por nociceptores, responsable del dolor agudo ante un impacto directo sobre la tibia.",
    scenario: "Un futbolista recibe una patada directa en la cara anterior de la tibia («espinilla») experimentando dolor punzante inmediato e intenso sin presentar fractura evidente.",
    level: "Básico (1er año)",
    category: "Tejido Óseo",
    planeAxis: "Inervación Nociceptiva Somática",
    hint: "El hueso compacto subyacente tiene pocas terminaciones sensitivas; la capa que lo recubre es la que posee la mayor densidad de fibras del dolor.",
    metrics: [
      {
        label: "Estructura Receptora",
        value: "Periostio"
      },
      {
        label: "Fibras Nerviosas",
        value: "A-delta y C Nociceptivas"
      }
    ],
    options: [
      {
        id: "A",
        text: "Verdadero",
        detail: "El periostio posee una altísima concentración de nociceptores sensibles a contusiones y tracción.",
        isCorrect: true
      },
      {
        id: "B",
        text: "Falso",
        detail: "Incorrecto: el periostio sí es sumamente inervado y responsable del dolor óseo agudo.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! Es VERDADERO. El **periostio** está profusamente vascularizado e inervado por fibras sensitivas somáticas. Por ello, cualquier contusión directa en zonas subcutáneas como la espinilla despierta un dolor exquisito e inmediato."
  },
  {
    id: "q18",
    quizType: "verdadero_falso",
    question: "Verdadero o Falso: En una contracción isométrica, la distancia entre el origen y la inserción del músculo varía significativamente produciendo aceleración angular articular.",
    scenario: "Un paciente realiza la postura de 'plancha abdominal' o mantiene una bandeja cargada con los codos en 90° sin mover los brazos.",
    level: "Básico (1er año)",
    category: "Biomecánica Muscular",
    planeAxis: "Estático • Torque Interno = Torque Externo",
    hint: "El prefijo 'iso' significa igual y 'metro' medida; no hay desplazamiento angular.",
    metrics: [
      {
        label: "Variación de Longitud",
        value: "Nula (constante)"
      },
      {
        label: "Trabajo Mecánico Externo",
        value: "0 Joules"
      }
    ],
    options: [
      {
        id: "A",
        text: "Verdadero",
        detail: "Incorrecto: confunde la contracción isométrica con la isotónica concéntrica/excéntrica.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Falso",
        detail: "Correcto: en la contracción isométrica la longitud muscular y el ángulo articular permanecen constantes.",
        isCorrect: true
      }
    ],
    explanation: "¡Correcto! Es FALSO. En una contracción **isométrica**, la tensión se incrementa pero la longitud del músculo y el ángulo articular no cambian (longitud constante, trabajo angular cero)."
  },
  {
    id: "q19",
    quizType: "verdadero_falso",
    question: "Verdadero o Falso: Los meniscos de la rodilla aumentan la superficie de contacto articular reduciendo el estrés de contacto sobre el cartílago hialino.",
    scenario: "Se evalúa la mecánica de amortiguación en la rodilla de un saltador de longitud durante la fase de recepción.",
    level: "Intermedio (2do año)",
    category: "Cartílago y Meniscos",
    planeAxis: "Distribución de Carga Femorotibial",
    hint: "Al interponerse entre el cóndilo curvo y el platillo tibial plano, multiplican el área de contacto (Estrés = Fuerza / Área).",
    metrics: [
      {
        label: "Carga Absorbida",
        value: "50% a 70% de carga compresiva"
      },
      {
        label: "Morfología",
        value: "Fibrocartílago en cuña"
      }
    ],
    options: [
      {
        id: "A",
        text: "Verdadero",
        detail: "Al aumentar el área de contacto reducen significativamente el estrés compresivo por unidad de superficie.",
        isCorrect: true
      },
      {
        id: "B",
        text: "Falso",
        detail: "Incorrecto: los meniscos sí incrementan el área de contacto y protegen el cartílago.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! Es VERDADERO. Los **meniscos** transforman el contacto puntual en un contacto amplio y congruente, distribuyendo entre el 50% y 70% de las fuerzas axiales y protegiendo el cartílago hialino del desgaste."
  },
  {
    id: "q20",
    quizType: "verdadero_falso",
    question: "Verdadero o Falso: El retináculo extensor del tobillo permite que los tendones se despeguen libremente hacia adelante (efecto cuerda de arco) para ganar mayor palanca.",
    scenario: "Al realizar una dorsiflexión máxima para subir un escalón alto, se observa la alineación de los tendones tibial anterior y extensor largo de los dedos.",
    level: "Intermedio (2do año)",
    category: "Tejido Conectivo y Fascias",
    planeAxis: "Polea Osteofibrosa de Contención",
    hint: "La función primordial del retináculo es justamente evitar que los tendones se separen o hagan 'cuerda de arco'.",
    metrics: [
      {
        label: "Función",
        value: "Contención y guía tendinosa"
      },
      {
        label: "Fenómeno Evitado",
        value: "Bowstringing (Cuerda de arco)"
      }
    ],
    options: [
      {
        id: "A",
        text: "Verdadero",
        detail: "Incorrecto: el retináculo no permite que se despeguen, sino que los fija sólidamente al hueso.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Falso",
        detail: "Correcto: la función del retináculo es mantener los tendones adosados contra el plano óseo.",
        isCorrect: true
      }
    ],
    explanation: "¡Correcto! Es FALSO. La función biomecánica del **retináculo** es mantener los tendones adosados al hueso actuando como polea anatómica y evitando a toda costa el efecto cuerda de arco (bowstringing)."
  },
  {
    id: "q21",
    quizType: "caso_clinico",
    question: "Caso Clínico: Paciente con marcha en 'steppage' y caída del antepié tras traumatismo en cuello de peroné. ¿Qué miotoma y nervio están comprometidos?",
    scenario: "Un paciente acude a consulta de Fisioterapia tras sufrir un golpe en la cara lateral de la rodilla derecha. Presenta incapacidad para elevar la punta del pie (dorsiflexión) al caminar, tropezando con los dedos y viéndose obligado a elevar exageradamente la rodilla para avanzar.",
    level: "Avanzado (3er año)",
    category: "Control Neuromuscular",
    planeAxis: "Plano Sagital • Miotoma L4-L5",
    hint: "El nervio rodea el cuello del peroné superficialmente y el miotoma principal de la dorsiflexión del tobillo corresponde a L4.",
    metrics: [
      {
        label: "Músculo Afectado",
        value: "Tibial Anterior"
      },
      {
        label: "Signo Clínico",
        value: "Marcha en Steppage (Pie Caído)"
      }
    ],
    options: [
      {
        id: "A",
        text: "Nervio Peroneo Común y Miotoma L4 (Tibial anterior)",
        detail: "El nervio peroneo común inerva los dorsiflexores y se lesiona típicamente en el cuello del peroné.",
        isCorrect: true
      },
      {
        id: "B",
        text: "Nervio Tibial y Miotoma S1 (Gastrocnemios)",
        detail: "La lesión del nervio tibial comprometería la flexión plantar y la sensibilidad de la planta, no la dorsiflexión.",
        isCorrect: false
      },
      {
        id: "C",
        text: "Nervio Femoral y Miotoma L3 (Cuádriceps)",
        detail: "El nervio femoral inerva los extensores de rodilla, no los dorsiflexores del tobillo.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Nervio Obturador y Miotoma L2 (Aductores)",
        detail: "El nervio obturador inerva la aducción de cadera en cara medial del muslo.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! La compresión o traumatismo en el cuello del peroné afecta al **Nervio Peroneo Común** (fibular común), anulando la inervación del tibial anterior (**miotoma L4**), produciendo pie caído (steppage gait)."
  },
  {
    id: "q22",
    quizType: "caso_clinico",
    question: "Caso Clínico: Bloqueo articular brusco de rodilla a 30° de flexión tras pivoteo en básquetbol. ¿Qué estructura anatómica se encuentra atrapada?",
    scenario: "Una jugadora de baloncesto pivota bruscamente sobre su pie plantado y escucha un chasquido. De inmediato su rodilla queda atascada a 30° de flexión, siendo incapaz de extender la pierna completamente por un tope elástico doloroso.",
    level: "Intermedio - Avanzado",
    category: "Cartílago y Meniscos",
    planeAxis: "Plano Sagital • Bloqueo Artrocinemático",
    hint: "Un desgarro longitudinal con desplazamiento medial ('asa de cubo') de esta estructura semilunar se interpone entre cóndilo y platillo tibial.",
    metrics: [
      {
        label: "Estructura Lesionada",
        value: "Menisco Medial (Asa de cubo)"
      },
      {
        label: "Prueba Positiva",
        value: "Test de McMurray / Apley"
      }
    ],
    options: [
      {
        id: "A",
        text: "Tendón rotuliano desinsertado",
        detail: "La rotura del tendón rotuliano produce imposibilidad de extensión activa pero sin tope elástico.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Desgarro en asa de cubo del menisco medial",
        detail: "El fragmento meniscal luxado se interpone en la fosa intercondílea impidiendo la extensión terminal.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Distensión del ligamento colateral medial",
        detail: "Produce dolor medial al estrés en valgo, pero no un bloqueo mecánico rígido de la extensión.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Luxación patelar lateral",
        detail: "La rótula se desplaza hacia el exterior de la tróclea con deformidad visible anterior, no bloqueo interno.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! El bloqueo mecánico en flexión con imposibilidad de extensión completa es el signo patognomónico de una rotura del **menisco medial en asa de cubo**, donde la porción desgarrada se luxa en la escotadura intercondílea actuando como cuña."
  },
  {
    id: "q23",
    quizType: "caso_clinico",
    question: "Caso Clínico: Caída de la pelvis contralateral al dar un paso (Signo de Trendelenburg). ¿Qué músculo agonista y qué trocánter están implicados?",
    scenario: "Un paciente adulto mayor presenta claudicación al caminar: cada vez que levanta la pierna izquierda del suelo para dar el paso, su pelvis cae hacia ese lado izquierdo en vez de mantenerse horizontal.",
    level: "Intermedio (2do año)",
    category: "Biomecánica Muscular",
    planeAxis: "Plano Frontal • Eje Anteroposterior",
    hint: "El músculo abductor de la cadera derecha de apoyo debe contraerse firmemente en su inserción en el trocánter mayor para estabilizar la pelvis opuesta.",
    metrics: [
      {
        label: "Músculo Insuficiente",
        value: "Glúteo Medio Derecho"
      },
      {
        label: "Punto de Inserción",
        value: "Trocánter Mayor Femoral"
      }
    ],
    options: [
      {
        id: "A",
        text: "Debilidad del Glúteo Mayor en la cresta ilíaca",
        detail: "El glúteo mayor es extensor de cadera en plano sagital, no estabilizador frontal pelviano.",
        isCorrect: false
      },
      {
        id: "B",
        text: "Insuficiencia del Glúteo Medio derecho insertado en el trocánter mayor",
        detail: "El glúteo medio de la pierna en apoyo actúa como palanca de primer grado estabilizando la pelvis contralateral.",
        isCorrect: true
      },
      {
        id: "C",
        text: "Acortamiento del psoas ilíaco en trocánter menor",
        detail: "El psoas ilíaco flexiona la cadera pero no genera la basculación frontal observada en Trendelenburg.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Contractura de aductores en línea áspera",
        detail: "Los aductores aproximan el muslo pero no provocan la caída pelviana contralateral.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! El Signo de Trendelenburg positivo revela debilidad o inhibición del **Glúteo Medio de la pierna en apoyo (derecha)**, cuya inserción en el **trocánter mayor** es biomecánicamente incapaz de generar el torque abductor para sostener la pelvis nivelada."
  },
  {
    id: "q24",
    quizType: "caso_clinico",
    question: "Caso Clínico: Dolor inguinal agudo en sentadillas profundas con test FADIR positivo en futbolista. ¿Qué lesión del fibrocartílago acetabular sospechas?",
    scenario: "Un jugador de fútbol de 24 años consulta por dolor inguinal punzante profundo al realizar flexión, aducción y rotación interna de cadera (test FADIR). La resonancia magnética confirma pinzamiento femoroacetabular.",
    level: "Avanzado (3er año)",
    category: "Cartílago y Rodetes",
    planeAxis: "Choque Femoroacetabular Anterosuperior",
    hint: "Este rodete fibrocartilaginoso bordea el acetábulo aumentando su profundidad y el sellado articular.",
    metrics: [
      {
        label: "Estructura Lesionada",
        value: "Labrum Acetabular"
      },
      {
        label: "Mecanismo",
        value: "Compresión y cizallamiento en flexión/rotación"
      }
    ],
    options: [
      {
        id: "A",
        text: "Desgarro del Labrum Acetabular por pinzamiento",
        detail: "El choque de la unión cabeza-cuello femoral contra el labrum acetabular anterosuperior produce dolor y desgarro.",
        isCorrect: true
      },
      {
        id: "B",
        text: "Avulsión de la sínfisis púbica",
        detail: "Causaría dolor en la línea media púbica, no positivo al test FADIR intraarticular de cadera.",
        isCorrect: false
      },
      {
        id: "C",
        text: "Bursitis trocantérica lateral",
        detail: "El dolor sería palpable en la cara lateral del muslo, no un dolor profundo inguinal.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Fractura por estrés del cuello femoral",
        detail: "Produce dolor difuso al cargar peso continuo, pero el FADIR positivo selectivo es específico de patología labral.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! El dolor inguinal reproducible con la maniobra FADIR es característico del desgarro del **Labrum Acetabular**, el anillo fibrocartilaginoso que sella y ahonda la cavidad articular de la cadera."
  },
  {
    id: "q25",
    quizType: "caso_clinico",
    question: "Caso Clínico: Parestesias en cara anteromedial de pierna y pérdida del reflejo rotuliano. ¿Qué raíz nerviosa y dermatoma se encuentran comprometidos?",
    scenario: "Un levantador de pesas presenta dolor lumbar bajo irradiado por la cara anterior del muslo y cara anteromedial de la tibia hasta el maléolo medial. En la exploración neurológica el reflejo rotuliano o patelar se encuentra abolido.",
    level: "Avanzado (3er año)",
    category: "Neuroanatomía y Control Motor",
    planeAxis: "Raíz Espinal L4 • Arco Reflejo Monosináptico",
    hint: "El reflejo patelar evalúa la raíz L4 y su dermatoma recorre la cara medial de la pierna y maléolo interno.",
    metrics: [
      {
        label: "Segmento Medular",
        value: "Raíz L4"
      },
      {
        label: "Reflejo Clave",
        value: "Reflejo Patelar / Rotuliano"
      }
    ],
    options: [
      {
        id: "A",
        text: "Raíz Espinal L4 (Dermatoma anteromedial de pierna y reflejo patelar)",
        detail: "L4 inerva sensitivamente la cara medial de la pierna y comanda el arco reflejo rotuliano del cuádriceps.",
        isCorrect: true
      },
      {
        id: "B",
        text: "Raíz Espinal S1 (Reflejo aquileo y cara lateral del pie)",
        detail: "S1 se evalúa con el reflejo aquileo y el dermatoma de la planta y borde externo del pie.",
        isCorrect: false
      },
      {
        id: "C",
        text: "Raíz Espinal L5 (Dermatoma del dorso del pie y hallux)",
        detail: "L5 no tiene reflejo osteotendinoso principal y su dermatoma abarca el dorso del pie y dedo gordo.",
        isCorrect: false
      },
      {
        id: "D",
        text: "Raíz Espinal L2 (Cara superior de muslo sin reflejo patelar)",
        detail: "L2 inerva la flexión de cadera y cara anterior alta del muslo, sin relación con el tendón rotuliano.",
        isCorrect: false
      }
    ],
    explanation: "¡Correcto! La combinación de hipoestesia en el **dermatoma L4** (cara medial de pierna hasta maléolo medial) y la abolición del **reflejo rotuliano** confirma radiculopatía compresiva de la raíz nerviosa **L4**."
  }
];

if (typeof window !== 'undefined') {
  window.FISIOPEDIA_QUIZZES = FISIOPEDIA_QUIZZES;
}