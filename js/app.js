// Fisio Pedía - Lógica de Aplicación Completa
// SPA interactiva conectada a FisioStorage, con Diccionario Visual SVG integral, Flashcards 3D y Quizzes.

(function () {
  'use strict';

  // ARRAY DE RESPALDO DE SEGURIDAD (FALLBACK) DIRECTO EN SCRIPT
  // Garantiza que SIEMPRE se muestren términos en pantalla y nunca quede en blanco
  const FALLBACK_TERMS = [
  {
    "id": "agonista",
    "name": "Agonista",
    "termino": "Agonista",
    "pronunciation": "/a-go-nis-ta/",
    "fonetica": "a-go-NIS-ta",
    "etymology": "Del griego agōnistēs ('luchador, combatiente principal en los juegos').",
    "category": "musculos",
    "categoryLabel": "Biomecánica Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Control Motor Global",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Músculo o grupo muscular primario cuya contracción concéntrica genera el mayor torque y produce directamente el movimiento angular deseado en una articulación específica.",
    "defTecnica": "Músculo motor primario cuya contracción genera la fuerza principal para producir un movimiento articular específico.",
    "simpleExplanation": "El protagonista o motor principal del movimiento: es el músculo que hace la mayor parte de la fuerza para realizar la acción.",
    "explicacionSencilla": "El músculo protagonista que hace la fuerza principal para mover la articulación.",
    "everydayTitle": "Hacer un curl para levantar una mancuerna o bolsa pesada",
    "everydayExample": "Cuando doblas el codo para levantar una bolsa pesada del supermercado hacia tu pecho, el bíceps braquial actúa como el músculo agonista principal de la flexión.",
    "analogia": "Como el motor de un carro en plena marcha: es el encargado principal de impulsar el vehículo hacia adelante.",
    "clinicalTitle": "Relevancia en rehabilitación de fuerza",
    "clinicalRelevance": "Identificar el agonista permite al fisioterapeuta dosificar cargas hipertróficas o de resistencia y evaluar si compensa con sinergistas por fatiga o inhibición motora.",
    "clinicalCase": "Debilidad del glúteo mayor (agonista en extensión de cadera) que obliga a los isquiotibiales a sobrecargarse para subir escaleras.",
    "keyDetails": [
      {
        "label": "Rol funcional",
        "value": "Motor primario de la acción articular"
      },
      {
        "label": "Tipo de trabajo",
        "value": "Contracción concéntrica o excéntrica principal"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Bíceps en flexión de codo / Cuádriceps al patear"
      },
      {
        "label": "Objetivo clínico",
        "value": "Recuperar reclutamiento de unidades motoras"
      }
    ],
    "svgType": "agonista",
    "isFeatured": false
  },
  {
    "id": "antagonista",
    "name": "Antagonista",
    "termino": "Antagonista",
    "pronunciation": "/an-ta-go-nis-ta/",
    "fonetica": "an-ta-go-NIS-ta",
    "etymology": "Del griego anti ('en contra') + agōnistēs ('combatiente').",
    "category": "musculos",
    "categoryLabel": "Biomecánica Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Control Motor Global",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Músculo o grupo muscular que posee la acción anatómica opuesta al agonista. Durante el movimiento voluntario, se relaja coordinadamente (inhibición recíproca) o se contrae excéntricamente para desacelerar y controlar la articulación.",
    "defTecnica": "Músculo que realiza la acción opuesta al agonista, cediendo o frenando el movimiento de forma controlada.",
    "simpleExplanation": "El freno del movimiento: se estira y cede suavemente para permitir que el protagonista trabaje sin que la articulación se descontrole o se golpee.",
    "explicacionSencilla": "El músculo opuesto que cede y frena suavemente para proteger la articulación durante el movimiento.",
    "everydayTitle": "El tríceps cediendo al beber un vaso de agua",
    "everydayExample": "Cuando doblas el codo para acercar el vaso a tu boca, el tríceps (antagonista) debe relajarse y estirarse; si se quedara tenso o espástico, tu brazo no se podría doblar.",
    "analogia": "Como los frenos de disco de una bicicleta al bajar una pendiente: no detienen la bici en seco, sino que regulan y suavizan la velocidad para no chocar.",
    "clinicalTitle": "Inhibición recíproca y espasticidad",
    "clinicalRelevance": "En pacientes neurológicos (secuelas de ACV), la hiperactividad del antagonista (espasticidad) bloquea el movimiento voluntario del agonista.",
    "clinicalCase": "Isquiotibiales espásticos que impiden la extensión completa de rodilla en la fase de oscilación de la marcha.",
    "keyDetails": [
      {
        "label": "Rol funcional",
        "value": "Freno y estabilizador del rango final"
      },
      {
        "label": "Principio neurofisiológico",
        "value": "Inhibición recíproca de Sherrington"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Tríceps durante la flexión de codo"
      },
      {
        "label": "Alteración clínica",
        "value": "Contractura o rigidez que limita el arco"
      }
    ],
    "svgType": "antagonista",
    "isFeatured": false
  },
  {
    "id": "sinergico",
    "name": "Sinérgico",
    "termino": "Sinérgico",
    "pronunciation": "/si-nér-gi-co/",
    "fonetica": "si-NER-gi-co",
    "etymology": "Del griego syn ('junto con') + ergon ('trabajo, acción').",
    "category": "musculos",
    "categoryLabel": "Biomecánica Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Control Motor Global",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Músculo que coopera mecánicamente con el agonista para facilitar el movimiento primario, neutralizar componentes rotacionales no deseados o fijar segmentos óseos adyacentes.",
    "defTecnica": "Músculo que ayuda al agonista a realizar el movimiento y contribuye a la estabilización de los segmentos óseos.",
    "simpleExplanation": "El copiloto o asistente del movimiento: ayuda al músculo principal compartiendo carga o sosteniendo firme la articulación para que el gesto salga limpio.",
    "explicacionSencilla": "El músculo ayudante que apoya al principal y mantiene firme la articulación durante la acción.",
    "everydayTitle": "El braquiorradial ayudando a levantar una jarra",
    "everydayExample": "Al levantar una jarra pesada con la mano de canto (posición neutra), el braquiorradial y el braquial anterior asisten al bíceps como sinergistas para que la flexión sea potente y precisa.",
    "analogia": "Como el copiloto en un rally: no maneja el volante principal, pero orienta, da soporte y asegura que la trayectoria sea perfecta.",
    "clinicalTitle": "Sinergias patológicas y compensaciones",
    "clinicalRelevance": "Cuando el agonista se lesiona o fatiga, los sinérgicos intentan asumir todo el trabajo, lo que genera sobrecargas musculares y tendinopatías compensatorias.",
    "clinicalCase": "Tendinitis del tensor de la fascia lata por suplir un glúteo medio débil en la estabilización de pelvis.",
    "keyDetails": [
      {
        "label": "Rol funcional",
        "value": "Asistente, neutralizador y fijador"
      },
      {
        "label": "Beneficio biomecánico",
        "value": "Previene rotaciones o desvíos parásitos"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Braquial anterior asistiendo al bíceps"
      },
      {
        "label": "Riesgo de falla",
        "value": "Sobrecarga compensatoria si el agonista claudica"
      }
    ],
    "svgType": "sinergico",
    "isFeatured": false
  },
  {
    "id": "caudal",
    "name": "Caudal",
    "termino": "Caudal",
    "pronunciation": "/cau-dal/",
    "fonetica": "cau-DAL",
    "etymology": "Del latín cauda ('cola').",
    "category": "movimientos",
    "categoryLabel": "Orientación Anatómica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Ejes y Planos Anatómicos",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Término direccional de orientación anatómica que denota proximidad hacia el extremo inferior del cuerpo, los pies o la región del cóccix/cola, opuesto a craneal o cefálico.",
    "defTecnica": "Término de orientación anatómica que indica dirección hacia la parte inferior del cuerpo, los pies o el cóccix.",
    "simpleExplanation": "Hacia abajo o hacia los pies: si una estructura es más caudal que otra, significa que está más cerca de la planta de los pies o más baja en el cuerpo.",
    "explicacionSencilla": "Dirección anatómica que señala hacia abajo, hacia la cola o los pies.",
    "everydayTitle": "Ubicar el tobillo respecto a la rodilla",
    "everydayExample": "La articulación del tobillo está situada en una posición más CAUDAL en la pierna en comparación con la rodilla y la cadera.",
    "analogia": "Como mirar hacia la planta baja de un edificio: indica siempre que nos desplazamos hacia los pisos inferiores o el suelo.",
    "clinicalTitle": "Deslizamientos articulares caudales en terapia manual",
    "clinicalRelevance": "En técnicas de movilización articular (Maitland o Kaltenborn), un deslizamiento caudal de la cabeza humeral es indispensable para desbloquear la abducción de hombro sin pinzamiento.",
    "clinicalCase": "Tracción y deslizamiento caudal de la cabeza humeral para ganar los últimos 30 grados de elevación de brazo en capsulitis adhesiva.",
    "keyDetails": [
      {
        "label": "Eje anatómico",
        "value": "Eje longitudinal o cráneo-caudal"
      },
      {
        "label": "Término opuesto",
        "value": "Craneal / Superior / Cefálico"
      },
      {
        "label": "Ejemplo anatómico",
        "value": "La pelvis es caudal al tórax"
      },
      {
        "label": "Uso en fisioterapia",
        "value": "Dirección de tracciones y deslizamientos terapéuticos"
      }
    ],
    "svgType": "caudal",
    "isFeatured": false
  },
  {
    "id": "craneal",
    "name": "Craneal",
    "termino": "Craneal",
    "pronunciation": "/cra-ne-al/",
    "fonetica": "cra-ne-AL",
    "etymology": "Del griego kranion ('cráneo, casco protector del encéfalo').",
    "category": "movimientos",
    "categoryLabel": "Orientación Anatómica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Ejes y Planos Anatómicos",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Término direccional de orientación anatómica que describe una posición o vector dirigido hacia la cabeza o vértice superior del tronco humano, sinónimo de superior o cefálico.",
    "defTecnica": "Término de orientación que indica dirección hacia la cabeza o extremo superior del cuerpo.",
    "simpleExplanation": "Hacia arriba o hacia la cabeza: una estructura es craneal cuando se encuentra más cerca del tope de tu cabeza.",
    "explicacionSencilla": "Dirección anatómica que apunta hacia arriba, en dirección a la cabeza.",
    "everydayTitle": "Los hombros respecto a la cintura",
    "everydayExample": "Tus hombros y tu cuello están en una posición CRANEAL con respecto a tu ombligo y tus caderas.",
    "analogia": "Como subir en el ascensor hacia el ático o azotea: siempre te traslada hacia el piso más alto de la estructura.",
    "clinicalTitle": "Nivel neurológico en lesiones medulares",
    "clinicalRelevance": "En traumatismos raquimedulares, cuanto más craneal sea el nivel de la lesión (ej. C4 vs L1), mayor compromiso motor y respiratorio existirá.",
    "clinicalCase": "Descompresión cervical mediante tracción craneal suave para aliviar radiculopatía C6.",
    "keyDetails": [
      {
        "label": "Eje anatómico",
        "value": "Eje longitudinal cráneo-caudal"
      },
      {
        "label": "Término opuesto",
        "value": "Caudal / Inferior"
      },
      {
        "label": "Ejemplo anatómico",
        "value": "El corazón es craneal al estómago"
      },
      {
        "label": "Aplicación clínica",
        "value": "Mapeo de dermatomas y niveles reflejos"
      }
    ],
    "svgType": "craneal",
    "isFeatured": false
  },
  {
    "id": "ipsilateral",
    "name": "Ipsilateral",
    "termino": "Ipsilateral",
    "pronunciation": "/ip-si-la-te-ral/",
    "fonetica": "ip-si-la-te-RAL",
    "etymology": "Del latín ipse ('mismo') + latus, lateris ('lado').",
    "category": "movimientos",
    "categoryLabel": "Orientación Anatómica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Ejes y Planos Anatómicos",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Término que denota localización, manifestación o acción en el mismo lado del cuerpo respecto a una estructura anatómica, lesión o hemicuerpo tomado como referencia. Sinónimo de homolateral.",
    "defTecnica": "Relativo o situado en el mismo lado del cuerpo respecto a un punto de referencia anatómico o lesional.",
    "simpleExplanation": "En el mismo lado del cuerpo: si te doblas el tobillo derecho y te duele la rodilla derecha, el dolor es ipsilateral (ambos están a la derecha).",
    "explicacionSencilla": "Significa que dos estructuras o eventos ocurren en el mismo lado del cuerpo (ambos a la derecha o ambos a la izquierda).",
    "everydayTitle": "Llevar la mano derecha al bolsillo derecho del pantalón",
    "everydayExample": "Cuando metes la mano derecha en el bolsillo derecho de tu pantalón, estás realizando un movimiento ipsilateral (mismo lado del cuerpo).",
    "analogia": "Como mirar dos ventanas en la misma pared de tu habitación: están en el mismo costado de la casa.",
    "clinicalTitle": "Semiología cerebelosa y vestibular",
    "clinicalRelevance": "A diferencia de la corteza cerebral, las lesiones del hemisferio cerebeloso causan ataxia, dismetría e hipotonía ipsilaterales (en el mismo lado de la lesión).",
    "clinicalCase": "Paciente con infarto cerebeloso derecho que presenta temblor de intención e inestabilidad en brazo y pierna ipsilaterales (derechos).",
    "keyDetails": [
      {
        "label": "Sinónimo",
        "value": "Homolateral"
      },
      {
        "label": "Término opuesto",
        "value": "Contralateral"
      },
      {
        "label": "Ejemplo neurológico",
        "value": "Signos cerebelosos en el mismo lado de la lesión"
      },
      {
        "label": "Regla clínica",
        "value": "Mismo hemicuerpo (derecho con derecho o izq con izq)"
      }
    ],
    "svgType": "ipsilateral",
    "isFeatured": false
  },
  {
    "id": "contralateral",
    "name": "Contralateral",
    "termino": "Contralateral",
    "pronunciation": "/con-tra-la-te-ral/",
    "fonetica": "con-tra-la-te-RAL",
    "etymology": "Del latín contra ('opuesto, frente a') + latus, lateris ('lado').",
    "category": "movimientos",
    "categoryLabel": "Orientación Anatómica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Ejes y Planos Anatómicos",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Término que describe la ubicación o relación con el lado opuesto del cuerpo respecto a un punto de referencia anatómico, lesión encefálica o hemicuerpo.",
    "defTecnica": "Relativo o situado en el lado opuesto del cuerpo respecto a un punto anatómico o centro neurológico de referencia.",
    "simpleExplanation": "En el lado opuesto o cruzado: tu mano derecha es contralateral a tu mano izquierda, y el hemisferio cerebral izquierdo controla el movimiento contralateral (lado derecho).",
    "explicacionSencilla": "Significa que está ubicado o se produce en el lado contrario del cuerpo respecto a la referencia.",
    "everydayTitle": "Patrón cruzado al caminar o bracear",
    "everydayExample": "Al caminar naturalmente, cuando adelantas el pie derecho balanceas hacia adelante el brazo contralateral (brazo izquierdo) para equilibrar el torso.",
    "analogia": "Como un juego de espejos o un balancín: para que un lado suba con armonía, el lado opuesto equilibra desde el otro extremo.",
    "clinicalTitle": "Decusación piramidal y hemiplejía",
    "clinicalRelevance": "Las fibras de la vía corticoespinal motora se cruzan (decusan) en el bulbo raquídeo; un ACV en la corteza motora izquierda produce hemiparesia contralateral (derecha).",
    "clinicalCase": "Hemiparesia contralateral espástica tras isquemia de la arteria cerebral media.",
    "keyDetails": [
      {
        "label": "Concepto clave",
        "value": "Lado opuesto del cuerpo"
      },
      {
        "label": "Término opuesto",
        "value": "Ipsilateral / Homolateral"
      },
      {
        "label": "Mecanismo neuroanatómico",
        "value": "Decusación piramidal en tronco encefálico"
      },
      {
        "label": "Aplicación motriz",
        "value": "Coordinación cruzada de la marcha humana"
      }
    ],
    "svgType": "contralateral",
    "isFeatured": false
  },
  {
    "id": "proximal",
    "name": "Proximal",
    "termino": "Proximal",
    "pronunciation": "/pro-xi-mal/",
    "fonetica": "pro-xi-MAL",
    "etymology": "Del latín proximus ('el más cercano, próximo').",
    "category": "movimientos",
    "categoryLabel": "Orientación Anatómica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Ejes y Planos Anatómicos",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Término posicional que describe una estructura situada más cerca de la raíz de una extremidad, del eje axial o del punto de inserción/origen central de un vaso, nervio o segmento corporal.",
    "defTecnica": "Término posicional que indica mayor cercanía al tronco corporal o al punto de origen de una extremidad o estructura.",
    "simpleExplanation": "Más cerca del tronco o del origen: en tu extremidad, lo proximal es lo que está más 'pegado' al cuerpo central (el hombro es proximal a la mano).",
    "explicacionSencilla": "Ubicado más cerca del centro del cuerpo o del punto de inicio de un brazo o pierna.",
    "everydayTitle": "El hombro respecto al codo y muñeca",
    "everydayExample": "El hombro es PROXIMAL al codo, y el codo es proximal a la muñeca; el hombro está mucho más cerca del centro de tu cuerpo.",
    "analogia": "Como la salida de una autopista en el centro de la ciudad: es el punto de inicio antes de alejarse hacia la periferia.",
    "clinicalTitle": "Principio de control motor: estabilidad proximal para movilidad distal",
    "clinicalRelevance": "Para que la mano pueda escribir o agarrar con precisión fina, el hombro y la escápula (estabilidad proximal) deben estar sólidamente estabilizados.",
    "clinicalCase": "Disfunción de la musculatura periescapular proximal que causa dolor distal y tendinitis en el tendón rotador.",
    "keyDetails": [
      {
        "label": "Referencia central",
        "value": "Tronco / Raíz de la extremidad"
      },
      {
        "label": "Término opuesto",
        "value": "Distal"
      },
      {
        "label": "Máxima de fisioterapia",
        "value": "'Estabilidad proximal para movilidad distal'"
      },
      {
        "label": "Ejemplo anatómico",
        "value": "El fémur es proximal a la tibia"
      }
    ],
    "svgType": "proximal",
    "isFeatured": false
  },
  {
    "id": "distal",
    "name": "Distal",
    "termino": "Distal",
    "pronunciation": "/dis-tal/",
    "fonetica": "dis-TAL",
    "etymology": "Del latín distare ('estar lejos, apartarse').",
    "category": "movimientos",
    "categoryLabel": "Orientación Anatómica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Ejes y Planos Anatómicos",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Término posicional que indica mayor lejanía respecto al tronco del cuerpo, a la raíz de la extremidad o al punto de origen de una estructura vascular o nerviosa.",
    "defTecnica": "Término posicional que indica mayor lejanía respecto al tronco del cuerpo o punto de origen de una extremidad.",
    "simpleExplanation": "Más lejos del tronco o en la periferia: las puntas de tus dedos son la parte más distal de tus brazos.",
    "explicacionSencilla": "Ubicado más lejos del centro del cuerpo o del punto de inicio de una extremidad.",
    "everydayTitle": "Las uñas de tus dedos o la punta del pie",
    "everydayExample": "Tus dedos de los pies están en la posición más DISTAL de la pierna, muy alejados de la cadera y la pelvis.",
    "analogia": "Como las ramas más delgadas en la copa de un árbol: son las que están más alejadas del tronco y la raíz central.",
    "clinicalTitle": "Neuropatías periféricas en 'guante o calcetín'",
    "clinicalRelevance": "Las neuropatías metabólicas (polineuropatía diabética) afectan primero los axones nerviosos más largos, provocando pérdida sensitiva distal en pies y manos.",
    "clinicalCase": "Pérdida de sensibilidad vibratoria distal en dedos de pies en paciente diabético evaluada con diapasón de 128 Hz.",
    "keyDetails": [
      {
        "label": "Referencia central",
        "value": "Alejado del tronco o raíz"
      },
      {
        "label": "Término opuesto",
        "value": "Proximal"
      },
      {
        "label": "Ejemplo anatómico",
        "value": "La mano es distal al codo"
      },
      {
        "label": "Semiología clínica",
        "value": "Exploración de pulsos y sensibilidad periférica distal"
      }
    ],
    "svgType": "distal",
    "isFeatured": false
  },
  {
    "id": "ventral",
    "name": "Ventral",
    "termino": "Ventral",
    "pronunciation": "/ven-tral/",
    "fonetica": "ven-TRAL",
    "etymology": "Del latín venter, ventris ('vientre, abdomen').",
    "category": "movimientos",
    "categoryLabel": "Orientación Anatómica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Ejes y Planos Anatómicos",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Término de orientación que indica proximidad o relación con la cara anterior o delantera del cuerpo o tronco humano (hacia el abdomen). En humanos en bipedestación es casi idéntico a anterior.",
    "defTecnica": "Término de orientación anatómica que hace referencia a la parte anterior o delantera del cuerpo o vientre.",
    "simpleExplanation": "Hacia el pecho, vientre o frente: todo lo que da hacia tu pecho, cara o abdomen se encuentra en la cara ventral.",
    "explicacionSencilla": "Orientado hacia el frente o la parte delantera del cuerpo (hacia el vientre).",
    "everydayTitle": "Abrazar a alguien o dormir boca abajo",
    "everydayExample": "Cuando das un abrazo fuerte a otra persona, juntas la cara ventral de tu cuerpo (pecho y abdomen) contra la cara ventral de la otra persona.",
    "analogia": "Como la fachada frontal de una casa con su puerta de entrada principal.",
    "clinicalTitle": "Acomodo en decúbito ventral (prono)",
    "clinicalRelevance": "La posición decúbito ventral (boca abajo) se utiliza en fisioterapia respiratoria para reclutar alvéolos posteriores y drenar secreciones.",
    "clinicalCase": "Postura en decúbito ventral con cuñas pélvicas para extensión pasiva de columna lumbar (Método McKenzie).",
    "keyDetails": [
      {
        "label": "Sinónimo humano",
        "value": "Anterior"
      },
      {
        "label": "Término opuesto",
        "value": "Dorsal / Posterior"
      },
      {
        "label": "Eje cardinal",
        "value": "Eje anteroposterior (sagital)"
      },
      {
        "label": "Estructuras ventrales",
        "value": "Pectoral mayor, recto abdominal, cuádriceps"
      }
    ],
    "svgType": "ventral",
    "isFeatured": false
  },
  {
    "id": "dorsal",
    "name": "Dorsal",
    "termino": "Dorsal",
    "pronunciation": "/dor-sal/",
    "fonetica": "dor-SAL",
    "etymology": "Del latín dorsum ('dorso, espalda').",
    "category": "movimientos",
    "categoryLabel": "Orientación Anatómica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Ejes y Planos Anatómicos",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Término de orientación relativo a la cara posterior o trasera del cuerpo, tronco, mano (dorso de la mano) o pie (dorso del pie). En humanos bípedos equivale a posterior.",
    "defTecnica": "Término de orientación anatómica que hace referencia a la parte posterior o trasera del cuerpo (hacia la espalda).",
    "simpleExplanation": "Hacia la espalda o por detrás: todo lo que se sitúa en la parte trasera del cuerpo está en la superficie dorsal.",
    "explicacionSencilla": "Orientado hacia atrás o la espalda del cuerpo.",
    "everydayTitle": "Apoyar la espalda en el respaldar de una silla",
    "everydayExample": "Al sentarte y recostar tu espalda contra el respaldar del asiento, estás apoyando la cara DORSAL de tu tronco.",
    "analogia": "Como el patio trasero o contrafachada posterior de un edificio.",
    "clinicalTitle": "Cadena miofascial dorsal posterior",
    "clinicalRelevance": "La cadena estática dorsal (fascia plantar, gemelos, isquiotibiales, erectores espinales) suele retraerse provocando dolor lumbar y pérdida de flexión de tronco.",
    "clinicalCase": "Acortamiento de la cadena dorsal posterior evaluado mediante el test de distancia dedo-suelo (Schober modificado).",
    "keyDetails": [
      {
        "label": "Sinónimo humano",
        "value": "Posterior"
      },
      {
        "label": "Término opuesto",
        "value": "Ventral / Anterior"
      },
      {
        "label": "Casos especiales",
        "value": "Dorso de la mano y dorso del pie"
      },
      {
        "label": "Estructuras dorsales",
        "value": "Trapecio, dorsal ancho, glúteos, tríceps sural"
      }
    ],
    "svgType": "dorsal",
    "isFeatured": false
  },
  {
    "id": "medial",
    "name": "Medial",
    "termino": "Medial",
    "pronunciation": "/me-di-al/",
    "fonetica": "me-di-AL",
    "etymology": "Del latín medialis ('que está en el medio').",
    "category": "movimientos",
    "categoryLabel": "Orientación Anatómica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Ejes y Planos Anatómicos",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Término posicional que describe una estructura orientada o ubicada más cercana al plano sagital mediano (línea media vertical imaginaria) que divide al cuerpo humano en dos mitades simétricas.",
    "defTecnica": "Término posicional que indica ubicación hacia la línea media imaginaria del cuerpo.",
    "simpleExplanation": "Hacia el centro o línea media del cuerpo: si está más hacia el ombligo o esternón, está en posición medial.",
    "explicacionSencilla": "Ubicado hacia la línea media del cuerpo, más cerca del centro.",
    "everydayTitle": "La nariz respecto a los ojos y orejas",
    "everydayExample": "Tu nariz está en posición MEDIAL en la cara, mientras que tus ojos y orejas se encuentran más hacia los costados (laterales).",
    "analogia": "Como el separador central de líneas en una avenida de doble sentido: todo lo que se acerca a esa línea divisoria es medial.",
    "clinicalTitle": "Ligamento colateral medial (LCM) y menisco medial",
    "clinicalRelevance": "Las estructuras mediales de la rodilla sufren frecuentemente ante traumatismos en valgo forzado (fuerza que empuja la rodilla hacia adentro).",
    "clinicalCase": "Bursitis anserina (pata de ganso) en la cara medial proximal de la tibia por sobrecarga en corredores pronadores.",
    "keyDetails": [
      {
        "label": "Línea de referencia",
        "value": "Plano Sagital Medio"
      },
      {
        "label": "Término opuesto",
        "value": "Lateral"
      },
      {
        "label": "Término anatómico previo",
        "value": "Interno (en desuso por nómina oficial)"
      },
      {
        "label": "Ejemplo clínico",
        "value": "El dedo meñique es medial al pulgar en posición anatómica"
      }
    ],
    "svgType": "medial",
    "isFeatured": false
  },
  {
    "id": "lateral",
    "name": "Lateral",
    "termino": "Lateral",
    "pronunciation": "/la-te-ral/",
    "fonetica": "la-te-RAL",
    "etymology": "Del latín lateralis ('perteneciente al lado o flanco').",
    "category": "movimientos",
    "categoryLabel": "Orientación Anatómica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Ejes y Planos Anatómicos",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Término posicional que denota mayor lejanía respecto al plano sagital medio, orientándose hacia los costados izquierdo o derecho del cuerpo o de un segmento corporal.",
    "defTecnica": "Término posicional que indica ubicación hacia los lados del cuerpo, alejado de la línea media.",
    "simpleExplanation": "Hacia afuera o hacia los lados: todo lo que se aleja del centro del cuerpo para ir hacia los costados está en posición lateral.",
    "explicacionSencilla": "Ubicado hacia los costados exteriores del cuerpo, lejos de la línea media.",
    "everydayTitle": "Los brazos a los costados del tronco",
    "everydayExample": "Tus orejas son LATERALES con respecto a los ojos, y tus brazos caen por los lados laterales del tórax.",
    "analogia": "Como las aceras o bermas exteriores en una autopista: se ubican en los extremos laterales alejados del centro.",
    "clinicalTitle": "Epicondilalgia lateral (codo de tenista)",
    "clinicalRelevance": "La inserción común de los extensores de muñeca en el epicóndilo lateral del húmero sufre microrroturas por sobreuso repetitivo en pronosupinación.",
    "clinicalCase": "Dolor a la palpación en el epicóndilo lateral y prueba de Cozen positiva con extensión resistida de muñeca.",
    "keyDetails": [
      {
        "label": "Línea de referencia",
        "value": "Se aleja del plano medio"
      },
      {
        "label": "Término opuesto",
        "value": "Medial"
      },
      {
        "label": "Término previo",
        "value": "Externo"
      },
      {
        "label": "Ejemplo en mano",
        "value": "El pulgar es lateral al meñique en posición anatómica"
      }
    ],
    "svgType": "lateral",
    "isFeatured": false
  },
  {
    "id": "supinacion",
    "name": "Supinación",
    "termino": "Supinación",
    "pronunciation": "/su-pi-na-ción/",
    "fonetica": "su-pi-na-CION",
    "etymology": "Del latín supinus ('vuelto boca arriba, tendido hacia arriba').",
    "category": "movimientos",
    "categoryLabel": "Movimiento Biomecánico",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "codo",
    "regionLabel": "Codo, Antebrazo & Mano",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento de rotación del antebrazo en el plano transversal alrededor del eje longitudinal radio-cubital, mediante el cual el radio rota externamente quedando paralelo al cúbito y orientando la palma de la mano hacia adelante o arriba.",
    "defTecnica": "Giro rotacional del antebrazo que sitúa la palma de la mano orientada hacia arriba o hacia adelante.",
    "simpleExplanation": "Girar la mano para dejar la palma mirando hacia arriba, como cuando pides algo o esperas que te sirvan un plato de sopa.",
    "explicacionSencilla": "Giro del antebrazo que coloca la palma de la mano hacia arriba o hacia adelante.",
    "everydayTitle": "Pedir monedas o recibir un plato de sopa",
    "everydayExample": "Haces SUPINACIÓN cuando pones la palma hacia arriba para pedir un plato de SOPA o sostener un puñado de caramelos.",
    "analogia": "La regla mnemotécnica infalible de Fisioterapia: 'SUPInación = pedir SOPA caliente con la palma abierta al cielo'.",
    "clinicalTitle": "El bíceps braquial como potente supinador",
    "clinicalRelevance": "El bíceps braquial despliega su mayor potencia como supinador cuando el codo está flexionado a 90°. Si se pierde supinación, actividades como comer o peinarse se vuelven imposibles sin compensación.",
    "clinicalCase": "Rigidez radiocubital post-yeso con bloqueo a 20° de supinación que impide sostener monedas en la palma plana.",
    "keyDetails": [
      {
        "label": "Músculo estrella",
        "value": "Bíceps braquial (codo a 90°) y Músculo Supinador"
      },
      {
        "label": "Hueso móvil",
        "value": "Radio gira y queda paralelo al cúbito"
      },
      {
        "label": "ROM normal",
        "value": "80° - 90° con goniometría"
      },
      {
        "label": "Movimiento opuesto",
        "value": "Pronación"
      }
    ],
    "svgType": "supinacion",
    "isFeatured": false
  },
  {
    "id": "pronacion",
    "name": "Pronación",
    "termino": "Pronación",
    "pronunciation": "/pro-na-ción/",
    "fonetica": "pro-na-CION",
    "etymology": "Del latín pronus ('inclinado hacia adelante, boca abajo').",
    "category": "movimientos",
    "categoryLabel": "Movimiento Biomecánico",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "codo",
    "regionLabel": "Codo, Antebrazo & Mano",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento rotacional del antebrazo en el plano transversal sobre su eje longitudinal, en el cual el radio rota internamente cruzándose oblicuamente por delante del cúbito y orientando la palma hacia atrás o hacia abajo.",
    "defTecnica": "Giro rotacional del antebrazo que sitúa la palma de la mano orientada hacia abajo o hacia atrás.",
    "simpleExplanation": "Girar la mano para dejar la palma mirando hacia el suelo o la mesa, como cuando escribes en el teclado o usas el mouse de la computadora.",
    "explicacionSencilla": "Giro del antebrazo que coloca la palma de la mano hacia abajo o hacia atrás.",
    "everydayTitle": "Escribir en el teclado de tu laptop",
    "everydayExample": "Al apoyar tus palmas hacia abajo sobre las teclas de tu computador o sobre el escritorio para escribir, tus antebrazos están en PRONACIÓN.",
    "analogia": "Como voltear una tortilla en la sartén o poner boca abajo una carta de baraja sobre la mesa.",
    "clinicalTitle": "Pérdida de pronación en fracturas de muñeca",
    "clinicalRelevance": "Tras una fractura de radio distal (fractura de Colles), la pérdida de pronación obliga al paciente a elevar el codo y rotar el tronco para teclear o comer.",
    "clinicalCase": "Rehabilitación de pronadores con toallas y mancuernas para recuperar el giro funcional de las perillas de puertas.",
    "keyDetails": [
      {
        "label": "Músculos motores",
        "value": "Pronador redondo y Pronador cuadrado"
      },
      {
        "label": "Biomecánica ósea",
        "value": "El radio cruza oblicuamente sobre el cúbito"
      },
      {
        "label": "ROM normal",
        "value": "75° - 85°"
      },
      {
        "label": "Movimiento opuesto",
        "value": "Supinación"
      }
    ],
    "svgType": "pronacion",
    "isFeatured": false
  },
  {
    "id": "abduccion",
    "name": "Abducción",
    "termino": "Abducción",
    "pronunciation": "/ab-duc-ción/",
    "fonetica": "ab-duc-CION",
    "etymology": "Del latín ab ('lejos, separar') + ducere ('guiar, llevar').",
    "category": "movimientos",
    "categoryLabel": "Movimiento Biomecánico",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "hombro",
    "regionLabel": "Hombro, Cadera y Extremidades",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento angular en el plano frontal o coronal alrededor del eje anteroposterior (sagital), en el cual una extremidad o segmento corporal se aleja de la línea media longitudinal del cuerpo.",
    "defTecnica": "Movimiento que separa y aleja una extremidad o segmento corporal de la línea media del cuerpo.",
    "simpleExplanation": "Abrir o separar los brazos o las piernas hacia los lados, alejándolos del centro del cuerpo como abriendo las alas de un avión.",
    "explicacionSencilla": "Movimiento que aleja un brazo o pierna de la línea central del cuerpo hacia los costados.",
    "everydayTitle": "Abrir los brazos para señalar a los lados",
    "everydayExample": "Cuando abres ambos brazos hacia los costados imitando el vuelo de un avión o en la fase de salto de los 'jumping jacks', haces ABDUCCIÓN.",
    "analogia": "Mnemotecnia clásica: 'AB-ducir es como secuestrar o alejar del hogar (separar de la línea central)'.",
    "clinicalTitle": "Músculos abductores y estabilidad pélvica",
    "clinicalRelevance": "El glúteo medio es el principal abductor de cadera; evita que la pelvis caiga hacia el lado contrario al estar de pie sobre un solo pie (apoyo monopodal).",
    "clinicalCase": "Signo de Trendelenburg positivo por debilidad del abductor de cadera tras reemplazo total.",
    "keyDetails": [
      {
        "label": "Plano y eje",
        "value": "Plano Frontal / Eje Anteroposterior"
      },
      {
        "label": "Acción clave",
        "value": "Separa y aleja del centro"
      },
      {
        "label": "Músculos estrella",
        "value": "Deltoides medio (hombro) / Glúteo medio (cadera)"
      },
      {
        "label": "Movimiento opuesto",
        "value": "Aducción"
      }
    ],
    "svgType": "abduccion",
    "isFeatured": false
  },
  {
    "id": "aduccion",
    "name": "Aducción",
    "termino": "Aducción",
    "pronunciation": "/ad-duc-ción/",
    "fonetica": "ad-duc-CION",
    "etymology": "Del latín ad ('hacia, cerca') + ducere ('llevar').",
    "category": "movimientos",
    "categoryLabel": "Movimiento Biomecánico",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "hombro",
    "regionLabel": "Hombro, Cadera y Extremidades",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento en el plano frontal o coronal sobre un eje anteroposterior, mediante el cual un segmento corporal aproximado retorna o cruza hacia la línea media del cuerpo.",
    "defTecnica": "Movimiento que aproxima y acerca una extremidad hacia la línea media del cuerpo.",
    "simpleExplanation": "Cerrar o juntar las extremidades hacia el centro de tu cuerpo, como 'añadir' un brazo de vuelta contra tus costillas.",
    "explicacionSencilla": "Movimiento que acerca una extremidad o segmento corporal hacia el centro o línea media del cuerpo.",
    "everydayTitle": "Apretar una pelota entre las rodillas",
    "everydayExample": "Al apretar un balón o un cojín entre tus dos rodillas sentada en una silla, estás activando los aductores de cadera en plena ADUCCIÓN.",
    "analogia": "Mnemotecnia en inglés y español: 'ADDucción = ADD (añadir hacia adentro, sumar al centro del cuerpo)'.",
    "clinicalTitle": "Pubalgia y desbalance aductor-abdominal",
    "clinicalRelevance": "En futbolistas y atletas, la tensión excesiva de los aductores de cadera genera tracción asimétrica sobre la sínfisis púbica, causando pubalgia crónica.",
    "clinicalCase": "Fisioterapia en pubalgia del deportista reequilibrando aductor largo con recto del abdomen.",
    "keyDetails": [
      {
        "label": "Plano y eje",
        "value": "Plano Frontal / Eje Anteroposterior"
      },
      {
        "label": "Acción clave",
        "value": "Aproxima hacia la línea media"
      },
      {
        "label": "Músculos clave",
        "value": "Pectoral mayor (hombro) / Aductor largo, mayor y corto (cadera)"
      },
      {
        "label": "Movimiento opuesto",
        "value": "Abducción"
      }
    ],
    "svgType": "aduccion",
    "isFeatured": false
  },
  {
    "id": "flexion",
    "name": "Flexión",
    "termino": "Flexión",
    "pronunciation": "/fle-xión/",
    "fonetica": "fle-XION",
    "etymology": "Del latín flectere ('doblar, curvar').",
    "category": "movimientos",
    "categoryLabel": "Movimiento Biomecánico",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "codo",
    "regionLabel": "Articulaciones Diartrosis",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento angular en el plano sagital alrededor de un eje transversal (laterolateral), que disminuye el ángulo entre los dos segmentos óseos que forman la articulación, aproximando sus superficies.",
    "defTecnica": "Movimiento articular en el plano sagital que generalmente disminuye el ángulo entre dos segmentos corporales.",
    "simpleExplanation": "Doblar o plegar una articulación: cuando pliegas el codo para rascarte la barbilla o doblas la rodilla al dar un paso, estás flexionando.",
    "explicacionSencilla": "Movimiento que dobla una articulación y reduce el ángulo entre dos partes del cuerpo.",
    "everydayTitle": "Doblar el codo para hablar por teléfono",
    "everydayExample": "Cuando tomas el celular con tu mano y doblas el codo para pegarlo a tu oreja, ejecutas una FLEXIÓN de codo completa.",
    "analogia": "Como cerrar una navaja suiza o una puerta con bisagras: las dos hojas se aproximan y el ángulo entre ellas se achica.",
    "clinicalTitle": "Goniometría y evaluación del arco de movilidad",
    "clinicalRelevance": "La pérdida de flexión de rodilla (<90°) impide bajar escaleras, ponerse en cuclillas o levantarse de sillas bajas con normalidad.",
    "clinicalCase": "Ganancia de flexión de rodilla de 65° a 115° tras artroscopia mediante movilizaciones pasivas y calor profundo.",
    "keyDetails": [
      {
        "label": "Plano y eje",
        "value": "Plano Sagital / Eje Transversal"
      },
      {
        "label": "Efecto articular",
        "value": "Disminuye el ángulo entre segmentos"
      },
      {
        "label": "Ejemplos anatómicos",
        "value": "Flexión de codo, cadera, rodilla, tronco"
      },
      {
        "label": "Movimiento opuesto",
        "value": "Extensión"
      }
    ],
    "svgType": "flexion",
    "isFeatured": false
  },
  {
    "id": "extension",
    "name": "Extensión",
    "termino": "Extensión",
    "pronunciation": "/ex-ten-sión/",
    "fonetica": "ex-ten-SION",
    "etymology": "Del latín extendere ('desplegar, tender hacia fuera').",
    "category": "movimientos",
    "categoryLabel": "Movimiento Biomecánico",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "codo",
    "regionLabel": "Articulaciones Diartrosis",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento angular en el plano sagital alrededor del eje transversal (laterolateral), que aumenta el ángulo entre dos segmentos corporales, retornando la estructura a la posición anatómica o superándola.",
    "defTecnica": "Movimiento articular en el plano sagital que generalmente incrementa el ángulo entre dos segmentos corporales.",
    "simpleExplanation": "Estirar o desplegar una articulación en línea recta: cuando estiras la rodilla para ponerte de pie o estiras el brazo para alcanzar algo al frente.",
    "explicacionSencilla": "Movimiento que estira la articulación y aumenta el ángulo entre los dos segmentos del cuerpo.",
    "everydayTitle": "Estirar las piernas al levantarte de la cama",
    "everydayExample": "Cuando estás sentada y te pones de pie estirando completamente tus rodillas y caderas en línea recta, estás haciendo EXTENSIÓN.",
    "analogia": "Como abrir una regla plegable de carpintero: al desplegarla por completo queda recta y con su ángulo abierto al máximo (180°).",
    "clinicalTitle": "Déficit de extensión terminal y marcha claudicante",
    "clinicalRelevance": "Un flexo de rodilla de tan solo 5° a 10° tras cirugía de ligamentos altera el contacto de talón, sobrecarga el cuádriceps y produce marcha claudicante dolorosa.",
    "clinicalCase": "Extensión activa terminal de rodilla en camilla para activar el vasto medial oblicuo tras reconstrucción de LCA.",
    "keyDetails": [
      {
        "label": "Plano y eje",
        "value": "Plano Sagital / Eje Transversal"
      },
      {
        "label": "Efecto articular",
        "value": "Aumenta el ángulo entre segmentos"
      },
      {
        "label": "Músculo rey de extensión",
        "value": "Cuádriceps (rodilla) / Tríceps braquial (codo)"
      },
      {
        "label": "Movimiento opuesto",
        "value": "Flexión"
      }
    ],
    "svgType": "extension",
    "isFeatured": false
  },
  {
    "id": "isometrico",
    "name": "Isométrico",
    "termino": "Isométrico",
    "pronunciation": "/i-so-mé-tri-co/",
    "fonetica": "i-so-ME-tri-co",
    "etymology": "Del griego isos ('igual') + metron ('medida, longitud').",
    "category": "musculos",
    "categoryLabel": "Biomecánica Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Tipos de Contracción Muscular",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Tipo de contracción muscular estática en la que el músculo genera tensión activa interna sin modificar su longitud externa macroscópica y sin producir desplazamiento angular articular apreciable.",
    "defTecnica": "Contracción muscular en la que se genera tensión activa sin movimiento apreciable ni variación de longitud articular.",
    "simpleExplanation": "Hacer fuerza pura sin moverte del sitio: tus músculos están temblando de tensión, pero la articulación permanece quieta como una estatua.",
    "explicacionSencilla": "Contracción donde el músculo hace fuerza pero la articulación no se mueve ni cambia de ángulo.",
    "everydayTitle": "Empujar una pared de concreto o aguantar en 'sentadilla en pared'",
    "everydayExample": "Si empujas con todas tus fuerzas una pared sólida que no se mueve, o sostienes la postura de sentadilla contra la pared (wall sit) durante 45 segundos, tus cuádriceps trabajan en contracción ISOMÉTRICA.",
    "analogia": "Como una cuerda en un juego de tirar de la soga cuando los dos equipos tiran con idéntica fuerza: la cuerda está tensísima, pero no avanza hacia ningún lado.",
    "clinicalTitle": "Entrenamiento isométrico y efecto analgésico",
    "clinicalRelevance": "Las contracciones isométricas a carga moderada (45 s al 70% MVC) producen analgesia inmediata en tendinopatías rotulianas y permiten ganar fuerza en fases postquirúrgicas agudas sin dañar suturas articulares.",
    "clinicalCase": "Isométricos de cuádriceps en decúbito supino (apretar toalla enrollada bajo rodilla) en las primeras 48 horas post-operadas.",
    "keyDetails": [
      {
        "label": "Etimología médica",
        "value": "Iso (igual) + Metro (longitud)"
      },
      {
        "label": "Movimiento articular",
        "value": "0° de desplazamiento (estático)"
      },
      {
        "label": "Efecto terapéutico",
        "value": "Efecto hipoalgésico en tendinopatías y activación segura"
      },
      {
        "label": "Diferencia con isotónico",
        "value": "En el isotónico hay movimiento concéntrico o excéntrico"
      }
    ],
    "svgType": "isometrico",
    "isFeatured": false
  },
  {
    "id": "propiocepcion",
    "name": "Propiocepción",
    "termino": "Propiocepción",
    "pronunciation": "/pro-pio-cep-ción/",
    "fonetica": "pro-pio-cep-ción",
    "etymology": "Del latín proprius ('de uno mismo, propio') + capere ('captar, percibir').",
    "category": "movimientos",
    "categoryLabel": "Fisiología Neuromuscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Control Motor Global",
    "level": "Básico - Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Capacidad somatosensorial consciente e inconsciente mediada por mecanorreceptores periféricos (husos neuromusculares, órganos tendinosos de Golgi y receptores articulares) que informan continuamente al sistema nervioso central sobre la posición espacial estática, cinestesia dinámica y gradiente de tensión articular sin necesidad de estímulo visual.",
    "defTecnica": "Capacidad somatosensorial consciente e inconsciente mediada por mecanorreceptores periféricos (husos neuromusculares, órganos tendinosos de Golgi y receptores articulares) que informan continuamente al sistema nervioso central sobre la posición espacial estática, cinestesia dinámica y gradiente de tensión articular sin necesidad de estímulo visual.",
    "simpleExplanation": "El GPS interno de tu cuerpo: el sexto sentido que le dice a tu cerebro exactamente dónde están tus brazos, piernas y articulaciones en cada milisegundo sin necesidad de mirarlos.",
    "explicacionSencilla": "El GPS interno de tu cuerpo: el sexto sentido que le dice a tu cerebro exactamente dónde están tus brazos, piernas y articulaciones en cada milisegundo sin necesidad de mirarlos.",
    "everydayTitle": "Caminar a oscuras o abotonar la camisa a ciegas",
    "everydayExample": "Cuando caminas por tu habitación a oscuras sin tropezar, te tocas la punta de la nariz con los ojos cerrados, o abotonas el botón trasero de tu camisa con los dedos sin mirarte en el espejo.",
    "analogia": "Cuando caminas por tu habitación a oscuras sin tropezar, te tocas la punta de la nariz con los ojos cerrados, o abotonas el botón trasero de tu camisa con los dedos sin mirarte en el espejo.",
    "clinicalTitle": "¿Por qué es crucial en rehabilitación?",
    "clinicalRelevance": "En lesiones como el esguince de tobillo o rotura del LCA, los ligamentos se rompen y con ellos sus mecanorreceptores. El cerebro queda 'ciego' ante la posición del pie, causando esguinces repetitivos si no se reentrena la propiocepción con superficies inestables (Bosu, plato de Freeman).",
    "clinicalCase": "Esguince de tobillo recidivante: reeducación propioceptiva sobre colchonetas y apoyo monopodal para que los músculos peroneos reaccionen en menos de 60 ms ante una torcedura.",
    "keyDetails": [
      {
        "label": "Sensores principales",
        "value": "Husos neuromusculares (longitud) y Órganos de Golgi (tensión)"
      },
      {
        "label": "Vía de transmisión",
        "value": "Cordones posteriores de la médula espinal (Goll y Burdach)"
      },
      {
        "label": "Centro integrador",
        "value": "Cerebelo y corteza somatosensorial parietal"
      },
      {
        "label": "Herramienta terapéutica",
        "value": "Plato de Freeman, Bosu, ejercicios monopoidales"
      }
    ],
    "svgType": "propiocepcion",
    "isFeatured": true
  },
  {
    "id": "rotacion-interna-externa",
    "name": "Rotación Interna vs. Externa",
    "termino": "Rotación Interna vs. Externa",
    "pronunciation": "/ro-ta-ción in-ter-na / ex-ter-na/",
    "fonetica": "ro-ta-ción in-ter-na  ex-ter-na",
    "etymology": "Del latín rotare ('girar como rueda').",
    "category": "movimientos",
    "categoryLabel": "Movimiento Biomecánico",
    "categoryClass": "bg-amber-quiz/15 text-amber-quiz",
    "region": "hombro",
    "regionLabel": "Articulaciones Triaxiales",
    "level": "Básico - Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Movimiento de giro de un hueso alrededor de su propio eje longitudinal en el plano transversal. En la rotación interna (medial), la cara anterior del segmento gira hacia la línea media. En la rotación externa (lateral), gira alejándose de la línea media.",
    "defTecnica": "Movimiento de giro de un hueso alrededor de su propio eje longitudinal en el plano transversal. En la rotación interna (medial), la cara anterior del segmento gira hacia la línea media. En la rotación externa (lateral), gira alejándose de la línea media.",
    "simpleExplanation": "Girar un hueso sobre su propio eje largo hacia adentro (hacia el ombligo) o hacia afuera.",
    "explicacionSencilla": "Girar un hueso sobre su propio eje largo hacia adentro (hacia el ombligo) o hacia afuera.",
    "everydayTitle": "Rascote la espalda vs. peinarte la nuca",
    "everydayExample": "Rotación INTERNA: Meter la mano por detrás de tu espalda baja para rascarte. Rotación EXTERNA: Llevar ambas manos detrás de la nuca para peinarte o tomar sol.",
    "analogia": "Rotación INTERNA: Meter la mano por detrás de tu espalda baja para rascarte. Rotación EXTERNA: Llevar ambas manos detrás de la nuca para peinarte o tomar sol.",
    "clinicalTitle": "Arco de movilidad del hombro en atletas lanzadores",
    "clinicalRelevance": "En deportes de lanzamiento (béisbol, tenis), se produce una ganancia adaptativa de rotación externa a expensas de un déficit de rotación interna glenohumeral (GIRD).",
    "clinicalCase": "Déficit GIRD en tenista: hombro con dolor posterior en saque por acortamiento de la cápsula posterior y rotadores externos contracturados.",
    "keyDetails": [
      {
        "label": "Plano cardinal",
        "value": "Plano Transversal u Horizontal"
      },
      {
        "label": "Eje biomecánico",
        "value": "Eje Longitudinal o Vertical"
      },
      {
        "label": "Rotador interno clave",
        "value": "Subescapular y Pectoral Mayor"
      },
      {
        "label": "Rotadores externos",
        "value": "Infraespinoso y Redondo Menor"
      }
    ],
    "svgType": "rotacion",
    "isFeatured": false
  },
  {
    "id": "inversion-eversion",
    "name": "Inversión vs. Eversión del Pie",
    "termino": "Inversión vs. Eversión del Pie",
    "pronunciation": "/in-ver-sión / e-ver-sión/",
    "fonetica": "in-ver-sión  e-ver-sión",
    "etymology": "Del latín invertere ('volver hacia adentro') y evertere ('volver hacia afuera').",
    "category": "movimientos",
    "categoryLabel": "Movimiento Biomecánico",
    "categoryClass": "bg-amber-quiz/15 text-amber-quiz",
    "region": "tobillo",
    "regionLabel": "Tobillo & Pie (Articulación Subastragalina)",
    "level": "Básico - Intermedio",
    "readingTime": "2 min",
    "technicalDef": "Movimientos triplanares del pie producidos principalmente en la articulación subtalar (subastragalina). La inversión orienta la planta del pie hacia la línea media medial (combinando aducción, supinación y flexión plantar). La eversión orienta la planta hacia afuera lateralmente (abducción, pronación y flexión dorsal).",
    "defTecnica": "Movimientos triplanares del pie producidos principalmente en la articulación subtalar (subastragalina). La inversión orienta la planta del pie hacia la línea media medial (combinando aducción, supinación y flexión plantar). La eversión orienta la planta hacia afuera lateralmente (abducción, pronación y flexión dorsal).",
    "simpleExplanation": "Inclinar la planta del pie hacia adentro (mirándose entre sí los pies) o hacia afuera.",
    "explicacionSencilla": "Inclinar la planta del pie hacia adentro (mirándose entre sí los pies) o hacia afuera.",
    "everydayTitle": "Caminar por el borde de la acera o torcerse el pie",
    "everydayExample": "INVERSIÓN forzada es el movimiento típico con el que te doblas el tobillo al pisar mal un hoyo en la calle (el pie gira hacia adentro y caes sobre el borde externo).",
    "analogia": "INVERSIÓN forzada es el movimiento típico con el que te doblas el tobillo al pisar mal un hoyo en la calle (el pie gira hacia adentro y caes sobre el borde externo).",
    "clinicalTitle": "El mecanismo lesional del 85% de los esguinces",
    "clinicalRelevance": "El esguince de tobillo por inversión somete a máxima tensión y ruptura al ligamento peroneoastragalino anterior (LPAA).",
    "clinicalCase": "Esguince grado II por inversión brusca al pisar el pie de un contrincante en baloncesto: hematoma inmediato en la cara lateral externa del tobillo.",
    "keyDetails": [
      {
        "label": "Articulación clave",
        "value": "Subastragalina (calcáneo + astrágalo)"
      },
      {
        "label": "Inversores principales",
        "value": "Tibial anterior y Tibial posterior"
      },
      {
        "label": "Eversores principales",
        "value": "Músculos peroneo lateral largo y corto"
      },
      {
        "label": "Ligamento vulnerable",
        "value": "Peroneoastragalino anterior (LPAA)"
      }
    ],
    "svgType": "inversion_eversion",
    "isFeatured": false
  },
  {
    "id": "tendon-aquiles",
    "name": "Tendón de Aquiles",
    "termino": "Tendón de Aquiles",
    "pronunciation": "/ten-dón de a-qui-les/",
    "fonetica": "ten-dón de a-qui-les",
    "etymology": "De la mitología griega (el único punto vulnerable del héroe Aquiles) y latín tendo ('estirar').",
    "category": "huesos",
    "categoryLabel": "Estructura Tendinosa",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "tobillo",
    "regionLabel": "Tobillo & Pie",
    "level": "Básico",
    "readingTime": "3 min",
    "technicalDef": "Tendón común formado por la coalescencia de las aponeurosis del músculo tríceps sural (gastrocnemios medial y lateral junto con el sóleo). Se inserta en la tuberosidad posterior del hueso calcáneo y transmite la fuerza necesaria para la flexión plantar del tobillo.",
    "defTecnica": "Tendón común formado por la coalescencia de las aponeurosis del músculo tríceps sural (gastrocnemios medial y lateral junto con el sóleo). Se inserta en la tuberosidad posterior del hueso calcáneo y transmite la fuerza necesaria para la flexión plantar del tobillo.",
    "simpleExplanation": "La cuerda elástica más gruesa y fuerte de todo tu cuerpo. Conecta los músculos de la pantorrilla con el talón y actúa como un resorte de alta potencia que te impulsa en cada paso.",
    "explicacionSencilla": "La cuerda elástica más gruesa y fuerte de todo tu cuerpo. Conecta los músculos de la pantorrilla con el talón y actúa como un resorte de alta potencia que te impulsa en cada paso.",
    "everydayTitle": "El resorte para saltar y correr",
    "everydayExample": "Ponerte de puntillas para ver por encima de una multitud, dar un salto en baloncesto o el impulso en el último milisegundo antes de que el pie despegue del piso al correr.",
    "analogia": "Ponerte de puntillas para ver por encima de una multitud, dar un salto en baloncesto o el impulso en el último milisegundo antes de que el pie despegue del piso al correr.",
    "clinicalTitle": "Frecuente en lesiones deportivas y sobrecarga",
    "clinicalRelevance": "Soporta fuerzas de hasta 8 a 10 veces el peso corporal durante el sprint. Su zona hipovascular a 2-6 cm de la inserción es la más susceptible a tendinopatías y roturas espontáneas.",
    "clinicalCase": "Tendinopatía aquilea por cambio brusco a calzado plano o aumento de volumen de carrera: dolor matutino punzante al dar los primeros pasos del día.",
    "keyDetails": [
      {
        "label": "Músculos que lo forman",
        "value": "Gastrocnemios (gemelos) + Sóleo (Tríceps Sural)"
      },
      {
        "label": "Inserción ósea",
        "value": "Cara posterior del calcáneo"
      },
      {
        "label": "Acción principal",
        "value": "Flexión plantar del tobillo (propulsión)"
      },
      {
        "label": "Test de evaluación",
        "value": "Signo de Thompson (para evaluar rotura completa)"
      }
    ],
    "svgType": "tendon_aquiles",
    "isFeatured": false
  },
  {
    "id": "manguito-rotador",
    "name": "Manguito Rotador",
    "termino": "Manguito Rotador",
    "pronunciation": "/man-gui-to ro-ta-dor/",
    "fonetica": "man-gui-to ro-ta-dor",
    "etymology": "Metáfora anatómica por la forma en que los tendones rodean la cabeza del húmero como el puño de una manga.",
    "category": "musculos",
    "categoryLabel": "Complejo Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "hombro",
    "regionLabel": "Hombro & Cintura Escapular",
    "level": "Intermedio",
    "readingTime": "4 min",
    "technicalDef": "Conjunto musculotendinoso integrado por los músculos supraespinoso, infraespinoso, redondo menor y subescapular. Sus tendones se fusionan con la cápsula articular de la articulación glenohumeral, actuando como estabilizadores dinámicos y coaptadores de la cabeza humeral contra la cavidad glenoidea.",
    "defTecnica": "Conjunto musculotendinoso integrado por los músculos supraespinoso, infraespinoso, redondo menor y subescapular. Sus tendones se fusionan con la cápsula articular de la articulación glenohumeral, actuando como estabilizadores dinámicos y coaptadores de la cabeza humeral contra la cavidad glenoidea.",
    "simpleExplanation": "Los 4 músculos guardianes del hombro. Abrazan la esfera de tu brazo para mantenerla encajada en su cuenca mientras te mueves, evitando que el brazo se salga de su lugar.",
    "explicacionSencilla": "Los 4 músculos guardianes del hombro. Abrazan la esfera de tu brazo para mantenerla encajada en su cuenca mientras te mueves, evitando que el brazo se salga de su lugar.",
    "everydayTitle": "Lanzar una pelota o peinarse",
    "everydayExample": "Alcanzar el cinturón de seguridad en el auto, abrocharte el sostén por la espalda o lanzar una pelota de tenis con fuerza sin que se te disloque el hombro.",
    "analogia": "Alcanzar el cinturón de seguridad en el auto, abrocharte el sostén por la espalda o lanzar una pelota de tenis con fuerza sin que se te disloque el hombro.",
    "clinicalTitle": "Causa #1 de dolor de hombro en adultos",
    "clinicalRelevance": "El tendón del supraespinoso pasa por un espacio estrecho bajo el acromion (espacio subacromial) y puede pinzarse durante elevaciones repetitivas del brazo.",
    "clinicalCase": "Síndrome de pinzamiento subacromial: dolor agudo en arco doloroso entre 60° y 120° de abducción al levantar el brazo de lado.",
    "keyDetails": [
      {
        "label": "Mnemotecnia clínica",
        "value": "S.I.R.S (Supraespinoso, Infraespinoso, Redondo menor, Subescapular)"
      },
      {
        "label": "Función mecánica",
        "value": "Coaptación dinámica glenohumeral y rotaciones"
      },
      {
        "label": "Músculo más lesionado",
        "value": "Supraespinoso (inicia los primeros 15° de abducción)"
      },
      {
        "label": "Tests clínicos",
        "value": "Test de Neer, Hawkins-Kennedy, Jobe (Empty Can)"
      }
    ],
    "svgType": "manguito_rotador",
    "isFeatured": false
  },
  {
    "id": "lca",
    "name": "Ligamento Cruzado Anterior (LCA)",
    "termino": "Ligamento Cruzado Anterior (LCA)",
    "pronunciation": "/li-ga-men-to cru-za-do an-te-rior/",
    "fonetica": "li-ga-men-to cru-za-do an-te-rior",
    "etymology": "Del latín ligare ('atar'). Cruzado porque se cruza en X con el posterior en la fosa intercondílea.",
    "category": "articulaciones",
    "categoryLabel": "Articulación & Ligamentos",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "rodilla",
    "regionLabel": "Rodilla & Pierna",
    "level": "Básico - Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Banda densa de tejido conectivo fibroso intraarticular pero extrasinovial en la rodilla. Se origina en la superficie medial del cóndilo femoral lateral y se inserta en el área intercondílea anterior de la tibia. Su función primaria es resistir la traslación tibial anterior y las tensiones de rotación interna.",
    "defTecnica": "Banda densa de tejido conectivo fibroso intraarticular pero extrasinovial en la rodilla. Se origina en la superficie medial del cóndilo femoral lateral y se inserta en el área intercondílea anterior de la tibia. Su función primaria es resistir la traslación tibial anterior y las tensiones de rotación interna.",
    "simpleExplanation": "El cinturón de seguridad interno de tu rodilla. Evita que el hueso de tu espinilla (tibia) se resbale hacia adelante de forma descontrolada cuando frenas de golpe o cambias de dirección.",
    "explicacionSencilla": "El cinturón de seguridad interno de tu rodilla. Evita que el hueso de tu espinilla (tibia) se resbale hacia adelante de forma descontrolada cuando frenas de golpe o cambias de dirección.",
    "everydayTitle": "Frenar en seco o cambiar de dirección jugando fútbol",
    "everydayExample": "Cuando corres a toda velocidad tras el autobús y frenas en seco en la esquina, o cuando un futbolista hace un cambio de ritmo girando sobre un solo pie apoyado en el césped.",
    "analogia": "Cuando corres a toda velocidad tras el autobús y frenas en seco en la esquina, o cuando un futbolista hace un cambio de ritmo girando sobre un solo pie apoyado en el césped.",
    "clinicalTitle": "La lesión 'estrella' en el deporte de pivote",
    "clinicalRelevance": "Mecanismo típico: desaceleración brusca con valgo y rotación externa de rodilla sin contacto. Suele acompañarse de un 'chasquido' audible (pop) y derrame articular inmediato (hemartros).",
    "clinicalCase": "Rotura del LCA en una jugadora de básquet al caer de un rebote con la rodilla hacia adentro: sensación de rodilla 'suelta' o que cede al caminar.",
    "keyDetails": [
      {
        "label": "Origen biomecánico",
        "value": "Cara posteromedial del cóndilo femoral lateral"
      },
      {
        "label": "Inserción tibial",
        "value": "Espina tibial anterior (área intercondílea anterior)"
      },
      {
        "label": "Pruebas ortopédicas",
        "value": "Test de Lachman (más sensible), Cajón Anterior, Pivot Shift"
      },
      {
        "label": "Prevención kinésica",
        "value": "Fortalecimiento de isquiotibiales y control neuromuscular"
      }
    ],
    "svgType": "lca",
    "isFeatured": false
  },
  {
    "id": "lcp",
    "name": "Ligamento Cruzado Posterior (LCP)",
    "termino": "Ligamento Cruzado Posterior (LCP)",
    "pronunciation": "/li-ga-men-to cru-za-do pos-te-rior/",
    "fonetica": "li-ga-men-to cru-za-do pos-te-rior",
    "etymology": "Compañero posterior del LCA en la articulación de la rodilla.",
    "category": "articulaciones",
    "categoryLabel": "Articulación & Ligamentos",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "rodilla",
    "regionLabel": "Rodilla & Pierna",
    "level": "Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Banda ligamentosa intraarticular más gruesa y fuerte que el LCA. Se origina en la cara lateral del cóndilo femoral medial y se inserta en la depresión intercondílea posterior de la tibia. Es el estabilizador primario contra la traslación tibial posterior.",
    "defTecnica": "Banda ligamentosa intraarticular más gruesa y fuerte que el LCA. Se origina en la cara lateral del cóndilo femoral medial y se inserta en la depresión intercondílea posterior de la tibia. Es el estabilizador primario contra la traslación tibial posterior.",
    "simpleExplanation": "El freno posterior de tu rodilla. Impide que la espinilla se hunda hacia atrás por debajo del fémur.",
    "explicacionSencilla": "El freno posterior de tu rodilla. Impide que la espinilla se hunda hacia atrás por debajo del fémur.",
    "everydayTitle": "El impacto contra el tablero del auto",
    "everydayExample": "Un choque en auto donde la rodilla doblada a 90° golpea con fuerza directa el tablero hacia atrás (lesión del salpicadero o 'dashboard injury').",
    "analogia": "Un choque en auto donde la rodilla doblada a 90° golpea con fuerza directa el tablero hacia atrás (lesión del salpicadero o 'dashboard injury').",
    "clinicalTitle": "Menos frecuente pero de diagnóstico esquivo",
    "clinicalRelevance": "Tiene mayor capacidad intrínseca de cicatrización que el LCA por su mejor vascularización. Suele tratarse de forma conservadora con rehabilitación.",
    "clinicalCase": "Traumatismo directo en tibia proximal al caer de rodillas en moto: signo del 'cajón posterior' positivo con hundimiento del relieve tibial anterior.",
    "keyDetails": [
      {
        "label": "Función primaria",
        "value": "Resistir la traslación tibial posterior (95% de la fuerza restrictiva)"
      },
      {
        "label": "Inserción tibial",
        "value": "Depresión intercondílea posterior de la tibia"
      },
      {
        "label": "Prueba diagnóstica",
        "value": "Test de cajón posterior y Signo del hundimiento de Godfrey"
      },
      {
        "label": "Músculo que lo protege",
        "value": "Cuádriceps femoral (tira de la tibia hacia adelante)"
      }
    ],
    "svgType": "lcp",
    "isFeatured": false
  },
  {
    "id": "lcm",
    "name": "Ligamento Colateral Medial (LCM)",
    "termino": "Ligamento Colateral Medial (LCM)",
    "pronunciation": "/li-ga-men-to co-la-te-ral me-dial/",
    "fonetica": "li-ga-men-to co-la-te-ral me-dial",
    "etymology": "Del latín col- ('junto') + latus ('lado') y medialis ('hacia el centro').",
    "category": "articulaciones",
    "categoryLabel": "Articulación & Ligamentos",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "rodilla",
    "regionLabel": "Rodilla (Compartimento Medial)",
    "level": "Básico - Intermedio",
    "readingTime": "2 min",
    "technicalDef": "Banda ancha y aplanada del compartimento interno de la rodilla. Se extiende desde el epicóndilo medial del fémur hasta la superficie medial del cóndilo tibial y el menisco medial (con el que está íntimamente adherido). Resiste las fuerzas en valgo (abducción de rodilla).",
    "defTecnica": "Banda ancha y aplanada del compartimento interno de la rodilla. Se extiende desde el epicóndilo medial del fémur hasta la superficie medial del cóndilo tibial y el menisco medial (con el que está íntimamente adherido). Resiste las fuerzas en valgo (abducción de rodilla).",
    "simpleExplanation": "La correa lateral interna que evita que la rodilla se doble hacia adentro formando una 'X'.",
    "explicacionSencilla": "La correa lateral interna que evita que la rodilla se doble hacia adentro formando una 'X'.",
    "everydayTitle": "Recibir una patada por la parte externa de la rodilla",
    "everydayExample": "Un impacto lateral en fútbol que empuja la rodilla hacia adentro mientras el pie está clavado en el césped.",
    "analogia": "Un impacto lateral en fútbol que empuja la rodilla hacia adentro mientras el pie está clavado en el césped.",
    "clinicalTitle": "La 'Tríada O'Donoghue' o Tríada Terrible",
    "clinicalRelevance": "Como sus fibras profundas se anclan al menisco medial, una lesión severa suele comprometer al mismo tiempo al LCA, al LCM y al menisco medial.",
    "clinicalCase": "Dolor a la palpación en la línea articular medial tras traumatismo con estrés en valgo en esquí: bostezo articular medial en prueba de valgo a 30°.",
    "keyDetails": [
      {
        "label": "Freno primario contra",
        "value": "Estrés en valgo (abducción forzada)"
      },
      {
        "label": "Conexión anatómica íntima",
        "value": "Menisco medial (lo que explica lesiones conjuntas)"
      },
      {
        "label": "Prueba clínica",
        "value": "Test de valgo forzado (a 0° y 30° de flexión)"
      },
      {
        "label": "Cicatrización",
        "value": "Excelente (extraarticular con rica irrigación)"
      }
    ],
    "svgType": "lcm",
    "isFeatured": false
  },
  {
    "id": "cuadriceps-femoral",
    "name": "Cuádriceps Femoral",
    "termino": "Cuádriceps Femoral",
    "pronunciation": "/cuá-dri-ceps fe-mo-ral/",
    "fonetica": "cuá-dri-ceps fe-mo-ral",
    "etymology": "Del latín quattuor ('cuatro') + caput ('cabeza') y femur ('muslo').",
    "category": "musculos",
    "categoryLabel": "Grupo Muscular Mayor",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "rodilla",
    "regionLabel": "Muslo & Rodilla",
    "level": "Básico",
    "readingTime": "3 min",
    "technicalDef": "El músculo más voluminoso del cuerpo humano. Compuesto por cuatro vientres: recto femoral (biarticular), vasto medial, vasto lateral y vasto intermedio. Confluyen en el tendón cuadricipital que engloba la rótula y continúa como ligamento rotuliano hacia la tuberosidad tibial anterior.",
    "defTecnica": "El músculo más voluminoso del cuerpo humano. Compuesto por cuatro vientres: recto femoral (biarticular), vasto medial, vasto lateral y vasto intermedio. Confluyen en el tendón cuadricipital que engloba la rótula y continúa como ligamento rotuliano hacia la tuberosidad tibial anterior.",
    "simpleExplanation": "El gran motor delantero de tu pierna. Son cuatro músculos juntos que se encargan de poner tu rodilla bien recta y firme para sostener todo tu peso.",
    "explicacionSencilla": "El gran motor delantero de tu pierna. Son cuatro músculos juntos que se encargan de poner tu rodilla bien recta y firme para sostener todo tu peso.",
    "everydayTitle": "Patear un balón o levantarte del sofá",
    "everydayExample": "Patear un balón con fuerza, levantarte de una silla baja sin usar los brazos de apoyo, o frenar tu peso corporal al bajar una pendiente o escaleras empinadas.",
    "analogia": "Patear un balón con fuerza, levantarte de una silla baja sin usar los brazos de apoyo, o frenar tu peso corporal al bajar una pendiente o escaleras empinadas.",
    "clinicalTitle": "El amortiguador primordial de la rodilla",
    "clinicalRelevance": "La atrofia refleja del cuádriceps ocurre rápidamente tras cualquier derrame en la rodilla (inhibición artrogénica). Su reactivación temprana es la prioridad #1 en fisioterapia.",
    "clinicalCase": "Rehabilitación postquirúrgica de rodilla: ejercicios isométricos con toalla bajo el hueco poplíteo para 'despertar' el vasto medial y evitar que la rótula choque.",
    "keyDetails": [
      {
        "label": "4 vientres musculares",
        "value": "Recto femoral, Vasto medial, Vasto lateral, Vasto intermedio"
      },
      {
        "label": "Función principal",
        "value": "Extensión potente de rodilla (el recto además flexiona cadera)"
      },
      {
        "label": "Inervación motora",
        "value": "Nervio Femoral (L2 - L4)"
      },
      {
        "label": "Rol funcional",
        "value": "Contracción excéntrica para amortiguar impactos al bajar escaleras"
      }
    ],
    "svgType": "cuadriceps",
    "isFeatured": false
  },
  {
    "id": "isquiotibiales",
    "name": "Isquiotibiales (Hamstrings)",
    "termino": "Isquiotibiales (Hamstrings)",
    "pronunciation": "/is-quio-ti-bia-les/",
    "fonetica": "is-quio-ti-bia-les",
    "etymology": "Del griego ischion ('cadera') y tibia ('hueso de la espinilla'). Nacen en el isquion de la pelvis y van a la tibia/peroné.",
    "category": "musculos",
    "categoryLabel": "Grupo Muscular Posterior",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "rodilla",
    "regionLabel": "Muslo Posterior & Cadera",
    "level": "Básico - Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Complejo muscular biarticular de la región posterior del muslo compuesto por el bíceps femoral (cabeza larga y corta), el semitendinoso y el semimembranoso. Actúan como extensores potentes de cadera y flexores de la rodilla.",
    "defTecnica": "Complejo muscular biarticular de la región posterior del muslo compuesto por el bíceps femoral (cabeza larga y corta), el semitendinoso y el semimembranoso. Actúan como extensores potentes de cadera y flexores de la rodilla.",
    "simpleExplanation": "Los músculos frenadores de la parte trasera del muslo. Te permiten doblar la rodilla hacia tu glúteo y frenar la pierna cuando corres a toda velocidad.",
    "explicacionSencilla": "Los músculos frenadores de la parte trasera del muslo. Te permiten doblar la rodilla hacia tu glúteo y frenar la pierna cuando corres a toda velocidad.",
    "everydayTitle": "Frenar en carrera o llevar el talón al glúteo",
    "everydayExample": "Llevar el talón hacia la cola para rascarte con el pie opuesto o desacelerar rápidamente al llegar a la meta en una carrera de 100 metros.",
    "analogia": "Llevar el talón hacia la cola para rascarte con el pie opuesto o desacelerar rápidamente al llegar a la meta en una carrera de 100 metros.",
    "clinicalTitle": "La lesión muscular más frecuente en el fútbol",
    "clinicalRelevance": "Suelen desgarrarse en la fase terminal de oscilación de la carrera, cuando deben contraerse excéntricamente a alta velocidad para frenar la extensión de la rodilla.",
    "clinicalCase": "Desgarro miotendinoso en el bíceps femoral al picar hacia el balón: dolor punzante en la parte posterior del muslo ('tirón') con marcha en flexión.",
    "keyDetails": [
      {
        "label": "3 músculos clave",
        "value": "Bíceps femoral, Semitendinoso, Semimembranoso"
      },
      {
        "label": "Origen común",
        "value": "Tuberosidad isquiática de la pelvis"
      },
      {
        "label": "Función protectora",
        "value": "Sinergistas del LCA (evitan que la tibia se vaya adelante)"
      },
      {
        "label": "Inervación",
        "value": "Nervio Ciático (rama tibial y peronea común)"
      }
    ],
    "svgType": "isquiotibiales",
    "isFeatured": false
  },
  {
    "id": "biceps-braquial",
    "name": "Bíceps Braquial",
    "termino": "Bíceps Braquial",
    "pronunciation": "/bí-ceps bra-quial/",
    "fonetica": "bí-ceps bra-quial",
    "etymology": "Del latín bis ('dos') + caput ('cabeza') y brachium ('brazo'). Músculo de dos cabezas en el brazo.",
    "category": "musculos",
    "categoryLabel": "Músculo Flexor & Supinador",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "codo",
    "regionLabel": "Brazo & Antebrazo",
    "level": "Básico",
    "readingTime": "2 min",
    "technicalDef": "Músculo biarticular del compartimento anterior del brazo constituido por la cabeza larga (nace en el tubérculo supraglenoideo) y la cabeza corta (nace en la apófisis coracoides). Se inserta distalmente en la tuberosidad bicipital del radio.",
    "defTecnica": "Músculo biarticular del compartimento anterior del brazo constituido por la cabeza larga (nace en el tubérculo supraglenoideo) y la cabeza corta (nace en la apófisis coracoides). Se inserta distalmente en la tuberosidad bicipital del radio.",
    "simpleExplanation": "El famoso músculo 'forzudo' del brazo. Es el que sacas al hacer fuerza doblando el codo y es además el supinador más potente cuando el codo está doblado a 90°.",
    "explicacionSencilla": "El famoso músculo 'forzudo' del brazo. Es el que sacas al hacer fuerza doblando el codo y es además el supinador más potente cuando el codo está doblado a 90°.",
    "everydayTitle": "Levantar las bolsas del mercado y abrir una botella de vino",
    "everydayExample": "Cargar bolsas pesadas de compras con el codo doblado, o hacer fuerza con el sacacorchos girando la mano hacia arriba para destapar una botella.",
    "analogia": "Cargar bolsas pesadas de compras con el codo doblado, o hacer fuerza con el sacacorchos girando la mano hacia arriba para destapar una botella.",
    "clinicalTitle": "Tendinopatía de la porción larga del bíceps",
    "clinicalRelevance": "El tendón de la cabeza larga pasa por la corredera bicipital del húmero y puede inflamarse por fricción en movimientos por encima de la cabeza.",
    "clinicalCase": "Tendinitis bicipital en nadador: dolor localizado en la cara anterior del hombro reproducible con el Test de Yergason y Test de Speed.",
    "keyDetails": [
      {
        "label": "Acciones principales",
        "value": "Flexión de codo + Supinador principal (a 90° de flexión)"
      },
      {
        "label": "Inserción distal",
        "value": "Tuberosidad del radio (tuberosidad bicipital)"
      },
      {
        "label": "Inervación",
        "value": "Nervio Musculocutáneo (C5 - C7)"
      },
      {
        "label": "Tests clínicos",
        "value": "Speed test (palma arriba contra resistencia) y Yergason test"
      }
    ],
    "svgType": "biceps",
    "isFeatured": false
  },
  {
    "id": "meniscos-rodilla",
    "name": "Meniscos de la Rodilla",
    "termino": "Meniscos de la Rodilla",
    "pronunciation": "/me-nis-cos de la ro-di-lla/",
    "fonetica": "me-nis-cos de la ro-di-lla",
    "etymology": "Del griego meniskos ('pequeña luna, medialuna') por su característica morfología fibrocartilaginosa semilunar.",
    "category": "articulaciones",
    "categoryLabel": "Fibrocartílago Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "rodilla",
    "regionLabel": "Rodilla & Pierna",
    "level": "Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Estructuras fibrocartilaginosas semilunares interpuestas entre los cóndilos femorales convexos y los platillos tibiales aplanados. El menisco medial tiene forma de 'C' (más fijo y vulnerable) y el menisco lateral tiene forma de 'O' (más móvil y cerrado). Distribuyen cargas axiales y facilitan la lubricación articular.",
    "defTecnica": "Estructuras fibrocartilaginosas semilunares interpuestas entre los cóndilos femorales convexos y los platillos tibiales aplanados. El menisco medial tiene forma de 'C' (más fijo y vulnerable) y el menisco lateral tiene forma de 'O' (más móvil y cerrado). Distribuyen cargas axiales y facilitan la lubricación articular.",
    "simpleExplanation": "Las dos almohadillas amortiguadoras de tu rodilla. Rellenan el espacio entre el fémur y la tibia para que no rocen hueso contra hueso y absorben el golpe de cada pisada.",
    "explicacionSencilla": "Las dos almohadillas amortiguadoras de tu rodilla. Rellenan el espacio entre el fémur y la tibia para que no rocen hueso contra hueso y absorben el golpe de cada pisada.",
    "everydayTitle": "Las suelas de gel dentro de tu rodilla",
    "everydayExample": "Imagina poner una plantilla de gel de alta tecnología dentro de tu zapato: cuando saltas o corres sobre pavimento duro, los meniscos absorben el 50% al 70% del impacto para proteger tus huesos.",
    "analogia": "Imagina poner una plantilla de gel de alta tecnología dentro de tu zapato: cuando saltas o corres sobre pavimento duro, los meniscos absorben el 50% al 70% del impacto para proteger tus huesos.",
    "clinicalTitle": "Zona roja vs. zona blanca y capacidad de cicatrización",
    "clinicalRelevance": "Solo el tercio periférico (zona roja) tiene aporte sanguíneo y puede cicatrizar; los dos tercios internos (zona blanca) son avasculares y no cicatrizan por sí solos si se desgarran.",
    "clinicalCase": "Desgarro meniscal por giro brusco con pie fijo: bloqueo articular momentáneo ('se me traba la rodilla al agacharme') con chasquido doloroso.",
    "keyDetails": [
      {
        "label": "Regla mnemotécnica",
        "value": "C-I-T-O: C=Interno (Medial) / O=Externo (Lateral)"
      },
      {
        "label": "Funciones clave",
        "value": "Distribución de carga (shock absorption) y congruencia articular"
      },
      {
        "label": "Zonas vasculares",
        "value": "Zona Roja-Roja (vascular) / Roja-Blanca / Blanca-Blanca (avascular)"
      },
      {
        "label": "Pruebas clínicas",
        "value": "Test de McMurray, Test de Apley (compresión y tracción)"
      }
    ],
    "svgType": "meniscos",
    "isFeatured": false
  },
  {
    "id": "fascia-plantar",
    "name": "Fascia Plantar",
    "termino": "Fascia Plantar",
    "pronunciation": "/fas-cia plan-tar/",
    "fonetica": "fas-cia plan-tar",
    "etymology": "Del latín fascia ('venda, banda que envuelve') y planta ('planta del pie').",
    "category": "huesos",
    "categoryLabel": "Tejido Conectivo & Sostén",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "tobillo",
    "regionLabel": "Planta del Pie",
    "level": "Básico - Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Banda aponeurótica fibrosa gruesa de tejido conjuntivo que se extiende desde la tuberosidad medial del calcáneo hasta las bases de las falanges proximales. Soporta el arco longitudinal medial del pie y almacena energía elástica mediante el Mecanismo de Windlass.",
    "defTecnica": "Banda aponeurótica fibrosa gruesa de tejido conjuntivo que se extiende desde la tuberosidad medial del calcáneo hasta las bases de las falanges proximales. Soporta el arco longitudinal medial del pie y almacena energía elástica mediante el Mecanismo de Windlass.",
    "simpleExplanation": "El puente colgante de la planta de tu pie. Es una banda elástica y resistente que sostiene el arco del pie erguido para que no camines plano y amortigua cada pisada.",
    "explicacionSencilla": "El puente colgante de la planta de tu pie. Es una banda elástica y resistente que sostiene el arco del pie erguido para que no camines plano y amortigua cada pisada.",
    "everydayTitle": "El tensor del arco que duele al levantarse de la cama",
    "everydayExample": "Dar los primeros pasos descalzo al salir de la cama por la mañana sintiendo una puñalada en el talón que se alivia tras caminar unos minutos (signo clásico de fascitis plantar).",
    "analogia": "Dar los primeros pasos descalzo al salir de la cama por la mañana sintiendo una puñalada en el talón que se alivia tras caminar unos minutos (signo clásico de fascitis plantar).",
    "clinicalTitle": "El mecanismo de Windlass en la marcha",
    "clinicalRelevance": "Al extender los dedos del pie durante el despegue, la fascia se tensa como la cuerda de un molinete, elevando el arco y convirtiendo el pie en una palanca rígida de propulsión.",
    "clinicalCase": "Fascitis plantar en camarero por muchas horas de pie con calzado rígido: dolor exquisito a la presión en el tubérculo medial del calcáneo.",
    "keyDetails": [
      {
        "label": "Función estática",
        "value": "Mantiene la arquitectura del arco plantar medial"
      },
      {
        "label": "Efecto biomecánico",
        "value": "Mecanismo de Windlass (tensión al extender el dedo gordo)"
      },
      {
        "label": "Punto de dolor típico",
        "value": "Tubérculo anteromedial del calcáneo"
      },
      {
        "label": "Tratamiento kinésico",
        "value": "Terapia manual miofascial, estiramiento de tríceps sural"
      }
    ],
    "svgType": "fascia_plantar",
    "isFeatured": false
  },
  {
    "id": "psoas-iliaco",
    "name": "Psoas Ilíaco",
    "termino": "Psoas Ilíaco",
    "pronunciation": "/pso-as i-lí-a-co/",
    "fonetica": "pso-as i-lí-a-co",
    "etymology": "Del griego psoa ('lomo, riñón') e ilíaco (del hueso ilion de la pelvis).",
    "category": "musculos",
    "categoryLabel": "Músculo Flexor de Cadera",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "cadera",
    "regionLabel": "Columna Lumbar, Pelvis & Cadera",
    "level": "Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Potente unidad muscular formada por el psoas mayor (origen en vértebras T12-L5 y discos intervertebrales) y el músculo ilíaco (fosa ilíaca interna). Se unen en un tendón común para insertarse en el trocánter menor del fémur. Es el flexor primario de la articulación coxofemoral.",
    "defTecnica": "Potente unidad muscular formada por el psoas mayor (origen en vértebras T12-L5 y discos intervertebrales) y el músculo ilíaco (fosa ilíaca interna). Se unen en un tendón común para insertarse en el trocánter menor del fémur. Es el flexor primario de la articulación coxofemoral.",
    "simpleExplanation": "El puente que une tu columna vertebral con tus piernas. Es el músculo profundo que levanta la rodilla hacia el pecho al subir escaleras.",
    "explicacionSencilla": "El puente que une tu columna vertebral con tus piernas. Es el músculo profundo que levanta la rodilla hacia el pecho al subir escaleras.",
    "everydayTitle": "El músculo que se acorta al estar sentado todo el día",
    "everydayExample": "Pasar 8 horas seguidas sentado estudiando frente a la computadora y sentir que al ponerte de pie te cuesta estirar la cadera y te duele la espalda baja.",
    "analogia": "Pasar 8 horas seguidas sentado estudiando frente a la computadora y sentir que al ponerte de pie te cuesta estirar la cadera y te duele la espalda baja.",
    "clinicalTitle": "Relación directa con el dolor lumbar (Lumbago)",
    "clinicalRelevance": "Por originarse en los cuerpos lumbares, su acortamiento crónico aumenta la hiperlordosis lumbar y comprime las carillas articulares posteriores de la columna.",
    "clinicalCase": "Test de Thomas positivo: al acostar al paciente y flexionar una rodilla contra el pecho, la otra pierna se levanta de la camilla delatando psoas acortado.",
    "keyDetails": [
      {
        "label": "Inserción distal",
        "value": "Trocánter menor del fémur"
      },
      {
        "label": "Acción principal",
        "value": "Flexión potente de cadera e inclinación del tronco"
      },
      {
        "label": "Prueba de longitud",
        "value": "Test de Thomas"
      },
      {
        "label": "Relación postural",
        "value": "Aumenta la lordosis lumbar si está acortado"
      }
    ],
    "svgType": "psoas",
    "isFeatured": false
  },
  {
    "id": "disco-intervertebral",
    "name": "Disco Intervertebral",
    "termino": "Disco Intervertebral",
    "pronunciation": "/dis-co in-ter-ver-te-bral/",
    "fonetica": "dis-co in-ter-ver-te-bral",
    "etymology": "Del griego diskos ('plato circular plano') e inter ('entre') vértebras.",
    "category": "articulaciones",
    "categoryLabel": "Articulación Cartilaginosa (Sínfisis)",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "columna",
    "regionLabel": "Columna Vertebral (Cervical, Torácica, Lumbar)",
    "level": "Básico - Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Estructura fibrocartilaginosa interpuesta entre los cuerpos vertebrales adyacentes. Formada por dos componentes: el anillo fibroso periférico (láminas concéntricas de colágeno) y el núcleo pulposo central (gel gelatinoso hidrofílico rico en proteoglicanos y agua).",
    "defTecnica": "Estructura fibrocartilaginosa interpuesta entre los cuerpos vertebrales adyacentes. Formada por dos componentes: el anillo fibroso periférico (láminas concéntricas de colágeno) y el núcleo pulposo central (gel gelatinoso hidrofílico rico en proteoglicanos y agua).",
    "simpleExplanation": "Las almohadillas hidráulicas entre los huesos de tu espalda. Funcionan como amortiguadores de gel que absorben los golpes y permiten que la columna se doble sin rozar.",
    "explicacionSencilla": "Las almohadillas hidráulicas entre los huesos de tu espalda. Funcionan como amortiguadores de gel que absorben los golpes y permiten que la columna se doble sin rozar.",
    "everydayTitle": "El amortiguador que se deshidrata durante el día",
    "everydayExample": "¿Sabías que por la noche mides 1 a 2 cm más que al final del día? Durante el día, la gravedad exprime agua de los discos; al dormir acostado, los discos se rehidratan como esponjas.",
    "analogia": "¿Sabías que por la noche mides 1 a 2 cm más que al final del día? Durante el día, la gravedad exprime agua de los discos; al dormir acostado, los discos se rehidratan como esponjas.",
    "clinicalTitle": "La hernia discal y la compresión ciática",
    "clinicalRelevance": "Si el anillo fibroso se desgarra por sobreesfuerzo en flexión con rotación, el núcleo pulposo puede extruirse y comprimir una raíz nerviosa (ej. L5 o S1).",
    "clinicalCase": "Hernia L5-S1: dolor fulgurante tipo 'corrientazo' que baja por el glúteo y la parte trasera de la pierna hasta el talón (lumbociatalgia), con signo de Lasègue positivo.",
    "keyDetails": [
      {
        "label": "2 componentes clave",
        "value": "Anillo fibroso (externo resistente) y Núcleo pulposo (gel interno)"
      },
      {
        "label": "Mecanismo lesional",
        "value": "Flexión lumbar + Rotación de tronco levantando peso"
      },
      {
        "label": "Nutrición del disco",
        "value": "Por imbibición / difusión (avascular en el adulto)"
      },
      {
        "label": "Prueba neurológica",
        "value": "Maniobra de Lasègue (elevación de pierna recta)"
      }
    ],
    "svgType": "disco",
    "isFeatured": false
  },
  {
    "id": "goniometria",
    "name": "Goniometría Articular",
    "termino": "Goniometría Articular",
    "pronunciation": "/go-nio-me-trí-a/",
    "fonetica": "go-nio-me-trí-a",
    "etymology": "Del griego gonia ('ángulo') + metron ('medida'). Ciencia de medir ángulos articulares.",
    "category": "movimientos",
    "categoryLabel": "Evaluación Kinésica",
    "categoryClass": "bg-amber-quiz/15 text-amber-quiz",
    "region": "general",
    "regionLabel": "Método de Exploración Física",
    "level": "Básico - Instrumental",
    "readingTime": "3 min",
    "technicalDef": "Técnica de exploración física y evaluación biomecánica utilizada para cuantificar con precisión el rango de movimiento (ROM - Range of Motion) de una articulación en sus tres planos del espacio mediante el goniómetro universal, registrando grados sexagesimales.",
    "defTecnica": "Técnica de exploración física y evaluación biomecánica utilizada para cuantificar con precisión el rango de movimiento (ROM - Range of Motion) de una articulación en sus tres planos del espacio mediante el goniómetro universal, registrando grados sexagesimales.",
    "simpleExplanation": "El transportador escolar de los fisioterapeutas. Es la regla graduada con la que medimos con exactitud cuántos grados puede doblarse o estirarse una articulación.",
    "explicacionSencilla": "El transportador escolar de los fisioterapeutas. Es la regla graduada con la que medimos con exactitud cuántos grados puede doblarse o estirarse una articulación.",
    "everydayTitle": "El transportador para medir tu cuerpo",
    "everydayExample": "Igual que cuando en la escuela usabas el transportador de plástico para medir un ángulo de 90° en el cuaderno de geometría, pero colocado en el codo o la rodilla de tu paciente para ver cuánto le falta para doblar completo.",
    "analogia": "Igual que cuando en la escuela usabas el transportador de plástico para medir un ángulo de 90° en el cuaderno de geometría, pero colocado en el codo o la rodilla de tu paciente para ver cuánto le falta para doblar completo.",
    "clinicalTitle": "La brújula que demuestra el progreso del paciente",
    "clinicalRelevance": "Permite documentar objetivamente la evolución: 'El paciente inició con 85° de flexión de rodilla y tras 10 sesiones alcanzó 125°'. Da validez científica al tratamiento.",
    "clinicalCase": "Valoración de hombro congelado (capsulitis adhesiva): se mide abducción pasiva y activa; una diferencia marcada orienta hacia patología capsular vs. muscular.",
    "keyDetails": [
      {
        "label": "Partes del goniómetro",
        "value": "Eje o fulcro (eje articular), Brazo fijo (eje óseo proximal), Brazo móvil"
      },
      {
        "label": "Posición cero (0°)",
        "value": "Posición anatómica internacional de referencia"
      },
      {
        "label": "Tipos de movimiento",
        "value": "ROM Activo (voluntario) vs. ROM Pasivo (aplicado por el terapeuta)"
      },
      {
        "label": "End-Feel o tope final",
        "value": "Tope blando (aproximación tisular), firme (ligamento/cápsula) o duro (óseo)"
      }
    ],
    "svgType": "goniometria",
    "isFeatured": false
  },
  {
    "id": "cadena-cinetica",
    "name": "Cadena Cinética: Abierta vs. Cerrada",
    "termino": "Cadena Cinética: Abierta vs. Cerrada",
    "pronunciation": "/ca-de-na ci-né-ti-ca/",
    "fonetica": "ca-de-na ci-né-ti-ca",
    "etymology": "Del griego kinesis ('movimiento'). Concepto de eslabones mecánicos articulados de Franz Reuleaux.",
    "category": "movimientos",
    "categoryLabel": "Biomecánica Funcional",
    "categoryClass": "bg-amber-quiz/15 text-amber-quiz",
    "region": "general",
    "regionLabel": "Biomecánica de Extremidades",
    "level": "Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Clasificación biomecánica del movimiento en un sistema esquelético multiarticular. Cadena Cinética Abierta (CCA): el segmento distal (pie o mano) está libre en el espacio sin resistencia fija. Cadena Cinética Cerrada (CCC): el segmento distal está fijo o encuentra una resistencia externa insuperable (suelo, barra).",
    "defTecnica": "Clasificación biomecánica del movimiento en un sistema esquelético multiarticular. Cadena Cinética Abierta (CCA): el segmento distal (pie o mano) está libre en el espacio sin resistencia fija. Cadena Cinética Cerrada (CCC): el segmento distal está fijo o encuentra una resistencia externa insuperable (suelo, barra).",
    "simpleExplanation": "¿El pie o la mano se mueven libres en el aire (abierta), o están apoyados contra el suelo o una pared mientras mueves el resto del cuerpo (cerrada)?",
    "explicacionSencilla": "¿El pie o la mano se mueven libres en el aire (abierta), o están apoyados contra el suelo o una pared mientras mueves el resto del cuerpo (cerrada)?",
    "everydayTitle": "Patear una pelota al aire vs. hacer una sentadilla",
    "everydayExample": "Patear un balón al aire es Cadena ABIERTA (el pie viaja libre). Hacer una sentadilla o flexiones de pecho es Cadena CERRADA (tus pies o manos están clavados en el piso).",
    "analogia": "Patear un balón al aire es Cadena ABIERTA (el pie viaja libre). Hacer una sentadilla o flexiones de pecho es Cadena CERRADA (tus pies o manos están clavados en el piso).",
    "clinicalTitle": "Seguridad y co-contracción en rehabilitación",
    "clinicalRelevance": "La cadena cerrada genera co-contracción muscular simultánea (agonistas + antagonistas), mayor estabilidad articular y menor fuerza de cizallamiento anterior en el LCA.",
    "clinicalCase": "Fase temprana post-reconstrucción de LCA: se priorizan sentadillas cortas (CCC) sobre extensiones de rodilla en máquina con tobillera (CCA) para proteger el injerto.",
    "keyDetails": [
      {
        "label": "CCA (Cadena Abierta)",
        "value": "Segmento distal libre (ej. curl de bíceps, pateo)"
      },
      {
        "label": "CCC (Cadena Cerrada)",
        "value": "Segmento distal fijo (ej. flexiones de brazos, sentadillas)"
      },
      {
        "label": "Ventaja de la CCC",
        "value": "Mayor compresión y estabilidad articular articular, estimula propioceptores"
      },
      {
        "label": "Ventaja de la CCA",
        "value": "Aislamiento analítico de un músculo específico"
      }
    ],
    "svgType": "cadena_cinetica",
    "isFeatured": false
  },
  {
    "id": "nervio-ciatico",
    "name": "Nervio Ciático (Síndrome Piramidal)",
    "termino": "Nervio Ciático (Síndrome Piramidal)",
    "pronunciation": "/ner-vio ciá-ti-co/",
    "fonetica": "ner-vio ciá-ti-co",
    "etymology": "Del griego ischiadikos ('relativo a la cadera o isquion'). Raíces ventrales L4 a S3.",
    "category": "movimientos",
    "categoryLabel": "Neuroanatomía & Conducción",
    "categoryClass": "bg-amber-quiz/15 text-amber-quiz",
    "region": "cadera",
    "regionLabel": "Pelvis, Glúteo & Miembro Inferior",
    "level": "Intermedio",
    "readingTime": "3 min",
    "technicalDef": "El nervio periférico más voluminoso y largo del cuerpo humano, formado por las divisiones anteriores y posteriores de los ramos primarios anteriores de L4 a S3. Emerge de la pelvis a través del foramen ciático mayor por debajo del músculo piriforme y desciende por el compartimento posterior del muslo.",
    "defTecnica": "El nervio periférico más voluminoso y largo del cuerpo humano, formado por las divisiones anteriores y posteriores de los ramos primarios anteriores de L4 a S3. Emerge de la pelvis a través del foramen ciático mayor por debajo del músculo piriforme y desciende por el compartimento posterior del muslo.",
    "simpleExplanation": "El gran cable eléctrico de tu pierna: lleva la corriente desde tu espalda baja hasta los dedos del pie, controlando la fuerza y sensibilidad de toda la extremidad.",
    "explicacionSencilla": "El gran cable eléctrico de tu pierna: lleva la corriente desde tu espalda baja hasta los dedos del pie, controlando la fuerza y sensibilidad de toda la extremidad.",
    "everydayTitle": "La billetera gorda en el bolsillo trasero",
    "everydayExample": "Sentarte durante un viaje de 4 horas sobre una billetera gruesa en el bolsillo trasero del pantalón, comprimiendo el nervio hasta sentir un 'corrientazo' o adormecimiento que baja por el muslo.",
    "analogia": "Sentarte durante un viaje de 4 horas sobre una billetera gruesa en el bolsillo trasero del pantalón, comprimiendo el nervio hasta sentir un 'corrientazo' o adormecimiento que baja por el muslo.",
    "clinicalTitle": "Falsa ciática vs. Hernia discal lumbar",
    "clinicalRelevance": "El síndrome del piriforme o 'falsa ciática' ocurre cuando este músculo glúteo sufre espasmo y comprime al nervio sin que haya daño en las vértebras. Se diferencia mediante la prueba de Lasègue y la maniobra de FAIR.",
    "clinicalCase": "Taxista con dolor sordo en nalga que irradia hacia la corva tras horas al volante: prueba de FAIR positiva (flexión, aducción y rotación interna de cadera reproduce el dolor).",
    "keyDetails": [
      {
        "label": "Raíces nerviosas",
        "value": "Plexo Sacro: L4, L5, S1, S2, S3"
      },
      {
        "label": "2 ramas terminales",
        "value": "Nervio Tibial y Nervio Peroneo Común (Fibular)"
      },
      {
        "label": "Músculo 'trampa'",
        "value": "Músculo Piriforme (Piramidal de la pelvis)"
      },
      {
        "label": "Prueba neurodinámica",
        "value": "Test de Lasègue / Slump Test (tensión neural)"
      }
    ],
    "svgType": "nervio_ciatico",
    "isFeatured": false
  },
  {
    "id": "tunel-carpiano",
    "name": "Túnel Carpiano & Nervio Mediano",
    "termino": "Túnel Carpiano & Nervio Mediano",
    "pronunciation": "/tú-nel car-pia-no/",
    "fonetica": "tú-nel car-pia-no",
    "etymology": "Del griego karpos ('muñeca'). Conducto delimitado por el retináculo flexor.",
    "category": "articulaciones",
    "categoryLabel": "Complejo Articular de Mano",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "mano",
    "regionLabel": "Muñeca & Mano",
    "level": "Básico - Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Canal osteofibroso inextensible en la cara palmar de la muñeca. Su piso y paredes laterales están conformados por los huesos del carpo y su techo por el retináculo flexor. Aloja 9 tendones flexores de los dedos y al nervio mediano.",
    "defTecnica": "Canal osteofibroso inextensible en la cara palmar de la muñeca. Su piso y paredes laterales están conformados por los huesos del carpo y su techo por el retináculo flexor. Aloja 9 tendones flexores de los dedos y al nervio mediano.",
    "simpleExplanation": "Un túnel angosto por donde viajan juntos el cable sensor de tus dedos (nervio mediano) y las 9 cuerdas que cierran tu puño; si los tendones se inflaman, aplastan al nervio.",
    "explicacionSencilla": "Un túnel angosto por donde viajan juntos el cable sensor de tus dedos (nervio mediano) y las 9 cuerdas que cierran tu puño; si los tendones se inflaman, aplastan al nervio.",
    "everydayTitle": "Escribir en el teclado o sostener el celular en la cama",
    "everydayExample": "Despertarte en la madrugada sacudiendo la mano porque sientes los dedos pulgar, índice y medio 'dormidos' o con agujas tras pasar todo el día tecleando en la laptop.",
    "analogia": "Despertarte en la madrugada sacudiendo la mano porque sientes los dedos pulgar, índice y medio 'dormidos' o con agujas tras pasar todo el día tecleando en la laptop.",
    "clinicalTitle": "La neuropatía por atrapamiento más común del cuerpo",
    "clinicalRelevance": "La presión intracanal aumenta con la flexión y extensión extrema de muñeca. Si no se trata, la compresión crónica atrofia la eminencia tenar, debilitando la pinza pulgar-índice.",
    "clinicalCase": "Costurera con parestesias nocturnas en los tres primeros dedos: signo de Phalen positivo (flexión forzada mantenida durante 60 segundos reproduce adormecimiento).",
    "keyDetails": [
      {
        "label": "Contenido del túnel",
        "value": "9 tendones flexores + 1 nervio (Nervio Mediano)"
      },
      {
        "label": "Techo anatómico",
        "value": "Retináculo Flexor (Ligamento Anular del Carpo)"
      },
      {
        "label": "Maniobras clínicas",
        "value": "Test de Phalen, Signo de Tinel (percusión sobre el carpo)"
      },
      {
        "label": "Territorio sensitivo",
        "value": "Cara palmar de pulgar, índice, medio y mitad del anular"
      }
    ],
    "svgType": "tunel_carpiano",
    "isFeatured": false
  },
  {
    "id": "gluteo-medio",
    "name": "Glúteo Medio & Marcha de Trendelenburg",
    "termino": "Glúteo Medio & Marcha de Trendelenburg",
    "pronunciation": "/glú-teo me-dio/",
    "fonetica": "glú-teo me-dio",
    "etymology": "Del griego gloutos ('nalga'). Músculo abductor primario de la cadera.",
    "category": "musculos",
    "categoryLabel": "Músculos Estabilizadores",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "cadera",
    "regionLabel": "Pelvis & Cadera",
    "level": "Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Músculo multipenniforme que se origina en la fosa ilíaca externa (entre las líneas glúteas anterior y posterior) y se inserta en la faceta posterosuperior del trocánter mayor. Es el principal abductor de cadera y el estabilizador frontal más importante de la pelvis.",
    "defTecnica": "Músculo multipenniforme que se origina en la fosa ilíaca externa (entre las líneas glúteas anterior y posterior) y se inserta en la faceta posterosuperior del trocánter mayor. Es el principal abductor de cadera y el estabilizador frontal más importante de la pelvis.",
    "simpleExplanation": "El tensor estabilizador de tu cadera. Cada vez que das un paso y levantas un pie del suelo, este músculo del lado apoyado se contrae para que tu pelvis no se caiga de lado.",
    "explicacionSencilla": "El tensor estabilizador de tu cadera. Cada vez que das un paso y levantas un pie del suelo, este músculo del lado apoyado se contrae para que tu pelvis no se caiga de lado.",
    "everydayTitle": "Mantenerte en un solo pie para ponerte el zapato",
    "everydayExample": "Pararte sobre la pierna derecha para ponerte el zapato izquierdo sin caerte de lado ni tener que apoyarte en la pared: tu glúteo medio derecho está trabajando a tope.",
    "analogia": "Pararte sobre la pierna derecha para ponerte el zapato izquierdo sin caerte de lado ni tener que apoyarte en la pared: tu glúteo medio derecho está trabajando a tope.",
    "clinicalTitle": "Signo de Trendelenburg: la marcha de pato",
    "clinicalRelevance": "Cuando el glúteo medio está débil o inhibido, al apoyar esa pierna la cadera opuesta 'se desploma'. Para compensarlo, el paciente inclina todo el tronco sobre el lado débil.",
    "clinicalCase": "Paciente post-artroplastia de cadera que cojea inclinando el tronco hacia el lado operado: debilidad glútea grado 3/5 que requiere fortalecimiento en decúbito lateral y ejercicios unipodales.",
    "keyDetails": [
      {
        "label": "Inserción distal",
        "value": "Trocánter Mayor del Fémur"
      },
      {
        "label": "Inervación",
        "value": "Nervio Glúteo Superior (L4 - S1)"
      },
      {
        "label": "Función clave",
        "value": "Evitar la caída de la hemipelvis contralateral durante el apoyo monopodal"
      },
      {
        "label": "Prueba clínica",
        "value": "Signo de Trendelenburg (apoyo monopodal durante 30 s)"
      }
    ],
    "svgType": "gluteo_medio",
    "isFeatured": false
  },
  {
    "id": "diafragma",
    "name": "Diafragma & Mecánica Ventilatoria",
    "termino": "Diafragma & Mecánica Ventilatoria",
    "pronunciation": "/dia-frag-ma/",
    "fonetica": "dia-frag-ma",
    "etymology": "Del griego diaphragma ('partición, separación entre dos cavidades').",
    "category": "musculos",
    "categoryLabel": "Músculos Respiratorios",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "columna",
    "regionLabel": "Tórax, Abdomen & Raquis",
    "level": "Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Músculo músculotendinoso en forma de cúpula que separa la cavidad torácica de la abdominal. Inervado por el nervio frénico (C3-C5). Su centro frénico o tendinoso desciende en la inspiración, incrementando los diámetros torácicos y generando presión negativa intrapleural.",
    "defTecnica": "Músculo músculotendinoso en forma de cúpula que separa la cavidad torácica de la abdominal. Inervado por el nervio frénico (C3-C5). Su centro frénico o tendinoso desciende en la inspiración, incrementando los diámetros torácicos y generando presión negativa intrapleural.",
    "simpleExplanation": "El pistón maestro de tu respiración: un paracaídas muscular que al contraerse baja hacia tu estómago, abriendo espacio para que el aire entre solo a tus pulmones.",
    "explicacionSencilla": "El pistón maestro de tu respiración: un paracaídas muscular que al contraerse baja hacia tu estómago, abriendo espacio para que el aire entre solo a tus pulmones.",
    "everydayTitle": "El fuelle que infla tu cuerpo",
    "everydayExample": "Tomar aire hondo tras correr para calmarte: sientes cómo tu barriga se abomba suavemente hacia afuera mientras el diafragma baja y empuja los órganos del vientre.",
    "analogia": "Tomar aire hondo tras correr para calmarte: sientes cómo tu barriga se abomba suavemente hacia afuera mientras el diafragma baja y empuja los órganos del vientre.",
    "clinicalTitle": "Conexión directa con el dolor de cuello y lumbar",
    "clinicalRelevance": "Sus pilares musculares se anclan en las vértebras lumbares L1-L3. Si una persona respira solo con el pecho alto por estrés, sobrecarga trapecios y escalenos, bloqueando la movilidad toracolumbar.",
    "clinicalCase": "Oficinista con dolor cervical crónico y respiración apical superficial: reeducación diafragmática en decúbito supino con saquito de peso en el epigastrio para descontracturar los escalenos.",
    "keyDetails": [
      {
        "label": "Inervación vital",
        "value": "Nervio Frénico (C3 - C5: 'C3, 4, 5 mantiene el diafragma vivo')"
      },
      {
        "label": "3 orificios o hiatos",
        "value": "Vena Cava Inferior (T8), Esófago (T10), Aorta (T12)"
      },
      {
        "label": "Inserción vertebral",
        "value": "Pilares diafragmáticos en cuerpos vertebrales L1 a L3"
      },
      {
        "label": "Impacto postural",
        "value": "Sinergia con el suelo pélvico y transverso para regular la presión intraabdominal"
      }
    ],
    "svgType": "diafragma",
    "isFeatured": false
  },
  {
    "id": "core-transverso",
    "name": "Transverso del Abdomen (El Corsé Natural)",
    "termino": "Transverso del Abdomen (El Corsé Natural)",
    "pronunciation": "/trans-ver-so del ab-do-men/",
    "fonetica": "trans-ver-so del ab-do-men",
    "etymology": "Del latín transversus ('puesto a través'). Capa más profunda de la faja abdominal.",
    "category": "musculos",
    "categoryLabel": "Estabilizadores del Core",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "columna",
    "regionLabel": "Columna Lumbar & Faja Abdominal",
    "level": "Básico - Intermedio",
    "readingTime": "3 min",
    "technicalDef": "El músculo más profundo de la pared abdominal anterolateral. Sus fibras se disponen horizontalmente desde la cresta ilíaca, la fascia toracolumbar y los cartílagos costales hasta la línea alba. Su contracción aumenta la presión intraabdominal y coapta las vértebras lumbares.",
    "defTecnica": "El músculo más profundo de la pared abdominal anterolateral. Sus fibras se disponen horizontalmente desde la cresta ilíaca, la fascia toracolumbar y los cartílagos costales hasta la línea alba. Su contracción aumenta la presión intraabdominal y coapta las vértebras lumbares.",
    "simpleExplanation": "El corsé biomecánico que traes de fábrica. Se ciñe como una faja elástica alrededor de tu cintura para proteger tu columna lumbar un instante antes de que cargues cualquier peso.",
    "explicacionSencilla": "El corsé biomecánico que traes de fábrica. Se ciñe como una faja elástica alrededor de tu cintura para proteger tu columna lumbar un instante antes de que cargues cualquier peso.",
    "everydayTitle": "Meter la barriga para cerrar el pantalón",
    "everydayExample": "La acción instintiva de 'chupar' el ombligo hacia la columna para que suba la cremallera de un pantalón ajustado, o cuando te preparas para levantar una caja pesada del piso.",
    "analogia": "La acción instintiva de 'chupar' el ombligo hacia la columna para que suba la cremallera de un pantalón ajustado, o cuando te preparas para levantar una caja pesada del piso.",
    "clinicalTitle": "La clave olvidada en el dolor lumbar crónico",
    "clinicalRelevance": "En personas sanas, el transverso se activa milisegundos ANTES de mover cualquier extremidad (mecanismo feedforward). En personas con lumbago crónico, este reflejo se retrasa, dejando la columna desprotegida.",
    "clinicalCase": "Lumbago mecánico recurrente al cargar compras: reentrenamiento con maniobra de 'drawing-in' (hundir suavemente el ombligo manteniendo la respiración fluida) con biofeedback ecográfico.",
    "keyDetails": [
      {
        "label": "Disposición fibrilar",
        "value": "Fibras horizontales transversales (efecto cincha o corsé)"
      },
      {
        "label": "Mecanismo protector",
        "value": "Activación anticipatoria preprogramada (Feedforward postural)"
      },
      {
        "label": "Inserción posterior",
        "value": "Fascia Toracolumbar (tensa las vértebras lumbares)"
      },
      {
        "label": "Técnica de aislamiento",
        "value": "Maniobra de hundimiento abdominal sin retroversión pélvica"
      }
    ],
    "svgType": "core_transverso",
    "isFeatured": false
  },
  {
    "id": "ligamento-lateral-tobillo",
    "name": "Ligamento Peroneoastragalino Anterior (LPAA)",
    "termino": "Ligamento Peroneoastragalino Anterior (LPAA)",
    "pronunciation": "/li-ga-men-to pe-ro-neo-as-tra-ga-li-no/",
    "fonetica": "li-ga-men-to pe-ro-neo-as-tra-ga-li-no",
    "etymology": "Conecta el peroné (fibula) con el astrágalo (talus) en su cara anterior.",
    "category": "huesos_tendones",
    "categoryLabel": "Ligamentos & Estabilidad",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "tobillo",
    "regionLabel": "Tobillo & Tarso",
    "level": "Básico",
    "readingTime": "3 min",
    "technicalDef": "Banda ligamentosa cuadrilátera de 2 cm que se extiende oblicuamente desde el borde anterior del maléolo peroneo hasta el cuello del astrágalo. Es el componente más débil del complejo colateral lateral y el freno primario contra la inversión forzada en flexión plantar.",
    "defTecnica": "Banda ligamentosa cuadrilátera de 2 cm que se extiende oblicuamente desde el borde anterior del maléolo peroneo hasta el cuello del astrágalo. Es el componente más débil del complejo colateral lateral y el freno primario contra la inversión forzada en flexión plantar.",
    "simpleExplanation": "El primer cable protector de la parte de afuera del tobillo: es el que se estira y se desgarra cuando pisas mal y el pie se te 'dobla hacia adentro'.",
    "explicacionSencilla": "El primer cable protector de la parte de afuera del tobillo: es el que se estira y se desgarra cuando pisas mal y el pie se te 'dobla hacia adentro'.",
    "everydayTitle": "Bajar del andén y torcerse el pie",
    "everydayExample": "Ir distraído mirando el teléfono, pisar en falso el borde de la banqueta y sentir cómo el tobillo se dobla hacia adentro con un crujido agudo e hinchazón instantánea 'en huevo de paloma'.",
    "analogia": "Ir distraído mirando el teléfono, pisar en falso el borde de la banqueta y sentir cómo el tobillo se dobla hacia adentro con un crujido agudo e hinchazón instantánea 'en huevo de paloma'.",
    "clinicalTitle": "El ligamento que más veces se rompe en el deporte",
    "clinicalRelevance": "Involucrado en más del 85% de los esguinces de tobillo. Si no cicatriza con buen entrenamiento propioceptivo, genera inestabilidad mecánica crónica con microtraumatismos repetitivos.",
    "clinicalCase": "Esguince de tobillo grado II en básquetbol: cajón anterior de tobillo positivo con bostezo ligamentoso palpable sobre el surco anterolateral del maléolo externo.",
    "keyDetails": [
      {
        "label": "Mecanismo lesional típico",
        "value": "Inversión forzada + Flexión plantar súbita"
      },
      {
        "label": "Prueba clínica diagnóstica",
        "value": "Test del Cajón Anterior de Tobillo (traslación astragalina)"
      },
      {
        "label": "Signo visible",
        "value": "Edema en 'huevo de paloma' sobre el maléolo peroneo"
      },
      {
        "label": "Tiempo de cicatrización",
        "value": "Grado I: 1-2 semanas / Grado II: 4-6 semanas con carga precoz protegida"
      }
    ],
    "svgType": "lpaa",
    "isFeatured": false
  },
  {
    "id": "cintilla-iliotibial",
    "name": "Cintilla Iliotibial (Síndrome del Limpiaparabrisas)",
    "termino": "Cintilla Iliotibial (Síndrome del Limpiaparabrisas)",
    "pronunciation": "/cin-ti-lla i-lio-ti-bial/",
    "fonetica": "cin-ti-lla i-lio-ti-bial",
    "etymology": "Fascia lata reforzada desde la cresta ilíaca hasta la tibia anterior.",
    "category": "huesos_tendones",
    "categoryLabel": "Fascias & Tendones",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "rodilla",
    "regionLabel": "Muslo Lateral & Rodilla",
    "level": "Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Tracto aponeurótico longitudinal denso y fibroso que engloba las inserciones distales del tensor de la fascia lata y el glúteo mayor. Desciende a lo largo de la cara lateral del muslo hasta fijarse en el tubérculo de Gerdy en la cara anterolateral de la tibia proximal.",
    "defTecnica": "Tracto aponeurótico longitudinal denso y fibroso que engloba las inserciones distales del tensor de la fascia lata y el glúteo mayor. Desciende a lo largo de la cara lateral del muslo hasta fijarse en el tubérculo de Gerdy en la cara anterolateral de la tibia proximal.",
    "simpleExplanation": "Una tira fibrosa muy tensa como una correa de cuero en la cara de afuera de tu muslo, que roza contra el hueso de la rodilla cada vez que la doblas repetidamente.",
    "explicacionSencilla": "Una tira fibrosa muy tensa como una correa de cuero en la cara de afuera de tu muslo, que roza contra el hueso de la rodilla cada vez que la doblas repetidamente.",
    "everydayTitle": "El dolor punzante en bajada de los corredores",
    "everydayExample": "Comenzar a trotar sin molestias, pero al llegar al kilómetro 6 sentir un ardor insoportable en la cara externa de la rodilla como si te clavaran un clavo caliente que empeora al bajar pendientes.",
    "analogia": "Comenzar a trotar sin molestias, pero al llegar al kilómetro 6 sentir un ardor insoportable en la cara externa de la rodilla como si te clavaran un clavo caliente que empeora al bajar pendientes.",
    "clinicalTitle": "La 'Rodilla del Corredor' (Fricción a 30° de flexión)",
    "clinicalRelevance": "A los 30° de flexión de rodilla, la cintilla pasa justo por encima del cóndilo femoral externo. Si la cintilla está rígida o el glúteo medio no estabiliza la pelvis, el roce constante inflama la bursa subyacente.",
    "clinicalCase": "Maratonista con dolor agudo lateral en rodilla derecha: Test de Noble y Test de Renne positivos con crepitación palpable en cóndilo femoral externo a 30° de flexión.",
    "keyDetails": [
      {
        "label": "Inserción ósea distal",
        "value": "Tubérculo de Gerdy (Tibia anterolateral)"
      },
      {
        "label": "Ángulo de máximo roce",
        "value": "30° de flexión de rodilla (zona de conflicto biomecánico)"
      },
      {
        "label": "Prueba clínica",
        "value": "Test de compresión de Noble y Maniobra de Ober (retracción de fascia lata)"
      },
      {
        "label": "Causa raíz habitual",
        "value": "Debilidad del glúteo medio que aumenta el valgo dinámico de rodilla"
      }
    ],
    "svgType": "cintilla_iliotibial",
    "isFeatured": false
  },
  {
    "id": "pata-de-ganso",
    "name": "Pata de Ganso (Pes Anserinus)",
    "termino": "Pata de Ganso (Pes Anserinus)",
    "pronunciation": "/pa-ta de gan-so / pes an-se-ri-nus/",
    "fonetica": "pa-ta de gan-so / pes an-se-ri-nus",
    "etymology": "Del latín pes anserinus ('pie o pata de ganso'), por la similitud con las patas palmeadas de las aves.",
    "category": "huesos_tendones",
    "categoryLabel": "Inserciones Tendinosas",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "rodilla",
    "regionLabel": "Cara Medial de la Rodilla",
    "level": "Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Confluencia anatómica y tendinosa formada por la inserción distal común de tres tendones en la cara anteromedial de la tibia proximal: Sartorio (nervio femoral), Grácil (nervio obturador) y Semitendinoso (nervio ciático). Debajo de ellos se ubica la bursa anserina.",
    "defTecnica": "Confluencia anatómica y tendinosa formada por la inserción distal común de tres tendones en la cara anteromedial de la tibia proximal: Sartorio (nervio femoral), Grácil (nervio obturador) y Semitendinoso (nervio ciático). Debajo de ellos se ubica la bursa anserina.",
    "simpleExplanation": "Tres tendones de diferentes músculos que se unen en un mismo punto de la espinilla interna, formando una huella idéntica a la pata de un pato o ganso.",
    "explicacionSencilla": "Tres tendones de diferentes músculos que se unen en un mismo punto de la espinilla interna, formando una huella idéntica a la pata de un pato o ganso.",
    "everydayTitle": "Cruzar la pierna o levantarte de la cama",
    "everydayExample": "Sentir un dolorcito quemante en la cara interior de la rodilla (un par de centímetros abajo de la articulación) al frotar una rodilla contra la otra al dormir de lado.",
    "analogia": "Sentir un dolorcito quemante en la cara interior de la rodilla (un par de centímetros abajo de la articulación) al frotar una rodilla contra la otra al dormir de lado.",
    "clinicalTitle": "La regla mnemotécnica del 'Sargento'",
    "clinicalRelevance": "Cada uno de los tres músculos proviene de una región distinta y está inervado por un nervio diferente. Su inflamación (bursitis anserina) es muy frecuente en mujeres con sobrepeso, artrosis medial o valgo de rodilla.",
    "clinicalCase": "Ciclista aficionado con sillín demasiado bajo: dolor a la presión digital a 4 cm por debajo de la interlínea articular medial de la tibia sin derrame intrarticular.",
    "keyDetails": [
      {
        "label": "Músculos (S-A-R-G-E-N-T-O)",
        "value": "Sartorio, Grácil (Recto Interno) y Semitendinoso"
      },
      {
        "label": "3 nervios distintos",
        "value": "Femoral (Sartorio), Obturador (Grácil), Ciático (Semitendinoso)"
      },
      {
        "label": "Ubicación",
        "value": "Cara anteromedial de la extremidad proximal de la tibia"
      },
      {
        "label": "Función común",
        "value": "Flexión de rodilla y rotación interna de la tibia"
      }
    ],
    "svgType": "pata_ganso",
    "isFeatured": false
  },
  {
    "id": "bursa-subacromial",
    "name": "Bursa Subacromial & Pinzamiento (Impingement)",
    "termino": "Bursa Subacromial & Pinzamiento (Impingement)",
    "pronunciation": "/bur-sa su-bac-ro-mial/",
    "fonetica": "bur-sa su-bac-ro-mial",
    "etymology": "Del latín bursa ('bolsa'). Cojinete seroso situado bajo el acromion escapular.",
    "category": "articulaciones",
    "categoryLabel": "Complejo Glenohumeral",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "hombro",
    "regionLabel": "Cintura Escapular",
    "level": "Básico - Intermedio",
    "readingTime": "3 min",
    "technicalDef": "Bolsa serosa de deslizamiento ubicada entre el arco acromiocoracoideo (por arriba) y el tendón del supraespinoso con la tuberosidad mayor del húmero (por abajo). Su inflamación reduce el espacio subacromial causando el síndrome de pinzamiento de Neer.",
    "defTecnica": "Bolsa serosa de deslizamiento ubicada entre el arco acromiocoracoideo (por arriba) y el tendón del supraespinoso con la tuberosidad mayor del húmero (por abajo). Su inflamación reduce el espacio subacromial causando el síndrome de pinzamiento de Neer.",
    "simpleExplanation": "Un cojín de agua lubricante que evita que el hueso del techo de tu hombro machaque y deshilache los tendones cada vez que levantas el brazo.",
    "explicacionSencilla": "Un cojín de agua lubricante que evita que el hueso del techo de tu hombro machaque y deshilache los tendones cada vez que levantas el brazo.",
    "everydayTitle": "Colgar ropa en el tendedero alto",
    "everydayExample": "Levantar el brazo hacia arriba para alcanzar una lámpara o meter el brazo en la manga de un abrigo y sentir un pellizco punzante en la parte alta del hombro.",
    "analogia": "Levantar el brazo hacia arriba para alcanzar una lámpara o meter el brazo en la manga de un abrigo y sentir un pellizco punzante en la parte alta del hombro.",
    "clinicalTitle": "El 'Arco Doloroso' entre 60° y 120°",
    "clinicalRelevance": "Al levantar el brazo lateralmente, el húmero rota y comprime la bursa contra el acromion. El dolor aparece típicamente entre los 60° y 120° de abducción, desapareciendo por encima de los 120°.",
    "clinicalCase": "Pintor de brocha gorda con dolor al trabajar techos: signo de Hawkins-Kennedy positivo (rotación interna pasiva con hombro a 90° de flexión atrapa la bursa y reproduce dolor exquisito).",
    "keyDetails": [
      {
        "label": "Espacio crítico subacromial",
        "value": "Altura normal entre 9 y 10 mm en radiografía"
      },
      {
        "label": "El 'Arco Doloroso'",
        "value": "Dolor marcado entre 60° y 120° de abducción"
      },
      {
        "label": "Pruebas ortopédicas",
        "value": "Test de Neer, Maniobra de Hawkins-Kennedy, Test de Yocum"
      },
      {
        "label": "Estructura más atrapada",
        "value": "Tendón del supraespinoso junto a la bursa subacromial"
      }
    ],
    "svgType": "bursa_subacromial",
    "isFeatured": false
  },
  {
    "id": "bomba-muscular-retorno",
    "name": "Bomba Muscular de la Pantorrilla (Retorno Venoso)",
    "termino": "Bomba Muscular de la Pantorrilla (Retorno Venoso)",
    "pronunciation": "/bom-ba mus-cu-lar/",
    "fonetica": "bom-ba mus-cu-lar",
    "etymology": "Mecanismo hemodinámico de eyección venosa descrito por John Hunter.",
    "category": "movimientos",
    "categoryLabel": "Fisiología Biomecánica",
    "categoryClass": "bg-amber-quiz/15 text-amber-quiz",
    "region": "tobillo",
    "regionLabel": "Pantorrilla, Pierna & Circulación",
    "level": "Básico",
    "readingTime": "3 min",
    "technicalDef": "Mecanismo activo biomecánico y hemodinámico donde la contracción periódica de los músculos sóleo y gastrocnemios dentro de sus compartimentos aponeuróticos comprime las venas profundas de la pierna, propulsando la columna de sangre hacia el corazón asistida por válvulas venosas.",
    "defTecnica": "Mecanismo activo biomecánico y hemodinámico donde la contracción periódica de los músculos sóleo y gastrocnemios dentro de sus compartimentos aponeuróticos comprime las venas profundas de la pierna, propulsando la columna de sangre hacia el corazón asistida por válvulas venosas.",
    "simpleExplanation": "El 'segundo corazón' de tu cuerpo: está en tus pantorrillas y bombea la sangre de regreso hacia arriba cada vez que das un paso o te paras de puntas.",
    "explicacionSencilla": "El 'segundo corazón' de tu cuerpo: está en tus pantorrillas y bombea la sangre de regreso hacia arriba cada vez que das un paso o te paras de puntas.",
    "everydayTitle": "Piernas pesadas tras un vuelo de 6 horas",
    "everydayExample": "Estar 8 horas de pie quieto atendiendo un mostrador o sentado en un viaje largo en autobús y notar que los tobillos se hinchan y los zapatos aprietan porque la sangre se queda estancada abajo.",
    "analogia": "Estar 8 horas de pie quieto atendiendo un mostrador o sentado en un viaje largo en autobús y notar que los tobillos se hinchan y los zapatos aprietan porque la sangre se queda estancada abajo.",
    "clinicalTitle": "Prevención de trombosis venosa profunda (TVP)",
    "clinicalRelevance": "En pacientes encamados o post-quirúrgicos de cadera/rodilla, el desuso de la bomba muscular multiplica el riesgo de trombosis venosa profunda. Los ejercicios activos de bombeo de tobillo son obligatorios.",
    "clinicalCase": "Paciente en reposo postoperatorio de reemplazo articular: prescripción kinésica de ejercicios de bombeo tibiotarsiano (flexión dorsal y plantar rítmica 20 repeticiones cada hora).",
    "keyDetails": [
      {
        "label": "Músculos motores",
        "value": "Sóleo (grandes senos venosos profundos) y Gemelos"
      },
      {
        "label": "Componente valvular",
        "value": "Válvulas venosas semilunares que impiden el reflujo hacia el pie"
      },
      {
        "label": "Presión eyectada",
        "value": "La contracción puede generar presiones superiores a 150 mmHg en las venas"
      },
      {
        "label": "Terapia kinésica",
        "value": "Marcha activa, elevación de talones, presoterapia y medias compresivas"
      }
    ],
    "svgType": "bomba_muscular",
    "isFeatured": false
  },
  {
    "id": "isotonico",
    "name": "Isotónico",
    "termino": "Isotónico",
    "pronunciation": "/isotonico/",
    "fonetica": "ISOTONICO",
    "etymology": "Término fundamental de contracción muscular en ciencias de la salud.",
    "category": "musculos",
    "categoryLabel": "Contracción Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Contracción con cambio de longitud y movimiento articular.",
    "defTecnica": "Contracción con cambio de longitud y movimiento articular.",
    "simpleExplanation": "Contracción común con movimiento dinámico.",
    "explicacionSencilla": "Contracción común con movimiento dinámico.",
    "everydayTitle": "Ejemplo funcional: Flexión de bíceps con mancuerna.",
    "everydayExample": "Flexión de bíceps con mancuerna.",
    "analogia": "Como en la vida cotidiana: Flexión de bíceps con mancuerna.",
    "clinicalTitle": "Relevancia de Isotónico en Fisioterapia",
    "clinicalRelevance": "Comprender isotónico permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de isotónico durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Contracción Muscular"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Contracción común con movimiento dinámico."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Flexión de bíceps con mancuerna."
      }
    ],
    "svgType": "isotonico",
    "isFeatured": false
  },
  {
    "id": "isocinetico",
    "name": "Isocinético",
    "termino": "Isocinético",
    "pronunciation": "/isocinetico/",
    "fonetica": "ISOCINETICO",
    "etymology": "Término fundamental de contracción muscular en ciencias de la salud.",
    "category": "musculos",
    "categoryLabel": "Contracción Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Contracción a velocidad angular constante mediante equipo especializado.",
    "defTecnica": "Contracción a velocidad angular constante mediante equipo especializado.",
    "simpleExplanation": "Ejercicio a velocidad fija constante en todo el arco.",
    "explicacionSencilla": "Ejercicio a velocidad fija constante en todo el arco.",
    "everydayTitle": "Ejemplo funcional: Pruebas dinamométricas en rehabilitación.",
    "everydayExample": "Pruebas dinamométricas en rehabilitación.",
    "analogia": "Como en la vida cotidiana: Pruebas dinamométricas en rehabilitación.",
    "clinicalTitle": "Relevancia de Isocinético en Fisioterapia",
    "clinicalRelevance": "Comprender isocinético permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de isocinético durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Contracción Muscular"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Ejercicio a velocidad fija constante en todo el arco."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Pruebas dinamométricas en rehabilitación."
      }
    ],
    "svgType": "isocinetico",
    "isFeatured": false
  },
  {
    "id": "inversion",
    "name": "Inversión",
    "termino": "Inversión",
    "pronunciation": "/inversion/",
    "fonetica": "INVERSION",
    "etymology": "Término fundamental de movimiento articular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Articular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "tobillo",
    "regionLabel": "Tobillo y Pie",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento triplanar que orienta la planta del pie hacia la línea media.",
    "defTecnica": "Movimiento triplanar que orienta la planta del pie hacia la línea media.",
    "simpleExplanation": "Mirar la planta del pie hacia adentro.",
    "explicacionSencilla": "Mirar la planta del pie hacia adentro.",
    "everydayTitle": "Ejemplo funcional: Apoyo sobre el borde externo del pie.",
    "everydayExample": "Apoyo sobre el borde externo del pie.",
    "analogia": "Como en la vida cotidiana: Apoyo sobre el borde externo del pie.",
    "clinicalTitle": "Relevancia de Inversión en Fisioterapia",
    "clinicalRelevance": "Comprender inversión permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de inversión durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Articular"
      },
      {
        "label": "Región de aplicación",
        "value": "Tobillo y Pie"
      },
      {
        "label": "Definición pedagógica",
        "value": "Mirar la planta del pie hacia adentro."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Apoyo sobre el borde externo del pie."
      }
    ],
    "svgType": "inversion",
    "isFeatured": false
  },
  {
    "id": "eversion",
    "name": "Eversión",
    "termino": "Eversión",
    "pronunciation": "/eversion/",
    "fonetica": "EVERSION",
    "etymology": "Término fundamental de movimiento articular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Articular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "tobillo",
    "regionLabel": "Tobillo y Pie",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento triplanar que orienta la planta del pie hacia afuera.",
    "defTecnica": "Movimiento triplanar que orienta la planta del pie hacia afuera.",
    "simpleExplanation": "Mirar la planta del pie hacia afuera.",
    "explicacionSencilla": "Mirar la planta del pie hacia afuera.",
    "everydayTitle": "Ejemplo funcional: Apoyo sobre el borde interno del pie.",
    "everydayExample": "Apoyo sobre el borde interno del pie.",
    "analogia": "Como en la vida cotidiana: Apoyo sobre el borde interno del pie.",
    "clinicalTitle": "Relevancia de Eversión en Fisioterapia",
    "clinicalRelevance": "Comprender eversión permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de eversión durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Articular"
      },
      {
        "label": "Región de aplicación",
        "value": "Tobillo y Pie"
      },
      {
        "label": "Definición pedagógica",
        "value": "Mirar la planta del pie hacia afuera."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Apoyo sobre el borde interno del pie."
      }
    ],
    "svgType": "eversion",
    "isFeatured": false
  },
  {
    "id": "rotacion-interna",
    "name": "Rotación Interna",
    "termino": "Rotación Interna",
    "pronunciation": "/rotacion-interna/",
    "fonetica": "ROTACION-INTERNA",
    "etymology": "Término fundamental de movimiento articular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Articular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "hombro",
    "regionLabel": "Hombro y Cadera",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Giro del hueso sobre su eje longitudinal hacia la línea media.",
    "defTecnica": "Giro del hueso sobre su eje longitudinal hacia la línea media.",
    "simpleExplanation": "Girar extremidad hacia adentro.",
    "explicacionSencilla": "Girar extremidad hacia adentro.",
    "everydayTitle": "Ejemplo funcional: Llevar la mano al vientre rotando el hombro.",
    "everydayExample": "Llevar la mano al vientre rotando el hombro.",
    "analogia": "Como en la vida cotidiana: Llevar la mano al vientre rotando el hombro.",
    "clinicalTitle": "Relevancia de Rotación Interna en Fisioterapia",
    "clinicalRelevance": "Comprender rotación interna permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de rotación interna durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Articular"
      },
      {
        "label": "Región de aplicación",
        "value": "Hombro y Cadera"
      },
      {
        "label": "Definición pedagógica",
        "value": "Girar extremidad hacia adentro."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Llevar la mano al vientre rotando el hombro."
      }
    ],
    "svgType": "rotacion-interna",
    "isFeatured": false
  },
  {
    "id": "rotacion-externa",
    "name": "Rotación Externa",
    "termino": "Rotación Externa",
    "pronunciation": "/rotacion-externa/",
    "fonetica": "ROTACION-EXTERNA",
    "etymology": "Término fundamental de movimiento articular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Articular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "hombro",
    "regionLabel": "Hombro y Cadera",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Giro del hueso sobre su eje longitudinal alejándose de la línea media.",
    "defTecnica": "Giro del hueso sobre su eje longitudinal alejándose de la línea media.",
    "simpleExplanation": "Girar extremidad hacia afuera.",
    "explicacionSencilla": "Girar extremidad hacia afuera.",
    "everydayTitle": "Ejemplo funcional: Abrir el antebrazo hacia afuera con el codo pegado.",
    "everydayExample": "Abrir el antebrazo hacia afuera con el codo pegado.",
    "analogia": "Como en la vida cotidiana: Abrir el antebrazo hacia afuera con el codo pegado.",
    "clinicalTitle": "Relevancia de Rotación Externa en Fisioterapia",
    "clinicalRelevance": "Comprender rotación externa permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de rotación externa durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Articular"
      },
      {
        "label": "Región de aplicación",
        "value": "Hombro y Cadera"
      },
      {
        "label": "Definición pedagógica",
        "value": "Girar extremidad hacia afuera."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Abrir el antebrazo hacia afuera con el codo pegado."
      }
    ],
    "svgType": "rotacion-externa",
    "isFeatured": false
  },
  {
    "id": "circunduccion",
    "name": "Circunducción",
    "termino": "Circunducción",
    "pronunciation": "/circunduccion/",
    "fonetica": "CIRCUNDUCCION",
    "etymology": "Término fundamental de movimiento articular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Articular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "hombro",
    "regionLabel": "Hombro y Cadera",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento circular secuencial que combina flexión, abducción, extensión y aducción.",
    "defTecnica": "Movimiento circular secuencial que combina flexión, abducción, extensión y aducción.",
    "simpleExplanation": "Trazar círculos cónicos completos con brazo o pierna.",
    "explicacionSencilla": "Trazar círculos cónicos completos con brazo o pierna.",
    "everydayTitle": "Ejemplo funcional: Hacer círculos amplios con el brazo en el aire.",
    "everydayExample": "Hacer círculos amplios con el brazo en el aire.",
    "analogia": "Como en la vida cotidiana: Hacer círculos amplios con el brazo en el aire.",
    "clinicalTitle": "Relevancia de Circunducción en Fisioterapia",
    "clinicalRelevance": "Comprender circunducción permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de circunducción durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Articular"
      },
      {
        "label": "Región de aplicación",
        "value": "Hombro y Cadera"
      },
      {
        "label": "Definición pedagógica",
        "value": "Trazar círculos cónicos completos con brazo o pierna."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Hacer círculos amplios con el brazo en el aire."
      }
    ],
    "svgType": "circunduccion",
    "isFeatured": false
  },
  {
    "id": "dorsiflexion",
    "name": "Dorsiflexión",
    "termino": "Dorsiflexión",
    "pronunciation": "/dorsiflexion/",
    "fonetica": "DORSIFLEXION",
    "etymology": "Término fundamental de movimiento articular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Articular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "tobillo",
    "regionLabel": "Tobillo",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento que eleva el dorso del pie acercándolo a la cara anterior de la tibia.",
    "defTecnica": "Movimiento que eleva el dorso del pie acercándolo a la cara anterior de la tibia.",
    "simpleExplanation": "Apuntar la punta del pie hacia arriba y el techo.",
    "explicacionSencilla": "Apuntar la punta del pie hacia arriba y el techo.",
    "everydayTitle": "Ejemplo funcional: Caminar apoyándose solo sobre los talones.",
    "everydayExample": "Caminar apoyándose solo sobre los talones.",
    "analogia": "Como en la vida cotidiana: Caminar apoyándose solo sobre los talones.",
    "clinicalTitle": "Relevancia de Dorsiflexión en Fisioterapia",
    "clinicalRelevance": "Comprender dorsiflexión permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de dorsiflexión durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Articular"
      },
      {
        "label": "Región de aplicación",
        "value": "Tobillo"
      },
      {
        "label": "Definición pedagógica",
        "value": "Apuntar la punta del pie hacia arriba y el techo."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Caminar apoyándose solo sobre los talones."
      }
    ],
    "svgType": "dorsiflexion",
    "isFeatured": false
  },
  {
    "id": "plantiflexion",
    "name": "Plantiflexión",
    "termino": "Plantiflexión",
    "pronunciation": "/plantiflexion/",
    "fonetica": "PLANTIFLEXION",
    "etymology": "Término fundamental de movimiento articular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Articular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "tobillo",
    "regionLabel": "Tobillo",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento que empuja la planta del pie hacia el suelo alejándola de la tibia.",
    "defTecnica": "Movimiento que empuja la planta del pie hacia el suelo alejándola de la tibia.",
    "simpleExplanation": "Apuntar la punta del pie hacia abajo.",
    "explicacionSencilla": "Apuntar la punta del pie hacia abajo.",
    "everydayTitle": "Ejemplo funcional: Ponerse de puntillas para alcanzar algo alto.",
    "everydayExample": "Ponerse de puntillas para alcanzar algo alto.",
    "analogia": "Como en la vida cotidiana: Ponerse de puntillas para alcanzar algo alto.",
    "clinicalTitle": "Relevancia de Plantiflexión en Fisioterapia",
    "clinicalRelevance": "Comprender plantiflexión permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de plantiflexión durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Articular"
      },
      {
        "label": "Región de aplicación",
        "value": "Tobillo"
      },
      {
        "label": "Definición pedagógica",
        "value": "Apuntar la punta del pie hacia abajo."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Ponerse de puntillas para alcanzar algo alto."
      }
    ],
    "svgType": "plantiflexion",
    "isFeatured": false
  },
  {
    "id": "anteversion",
    "name": "Anteversión",
    "termino": "Anteversión",
    "pronunciation": "/anteversion/",
    "fonetica": "ANTEVERSION",
    "etymology": "Término fundamental de biomecánica pelviana en ciencias de la salud.",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Pelviana",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "cadera",
    "regionLabel": "Pelvis y Cadera",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Inclinación anterior de la pelvis sobre la cabeza femoral que incrementa la lordosis lumbar.",
    "defTecnica": "Inclinación anterior de la pelvis sobre la cabeza femoral que incrementa la lordosis lumbar.",
    "simpleExplanation": "Sacar glúteos e inclinar la pelvis hacia adelante.",
    "explicacionSencilla": "Sacar glúteos e inclinar la pelvis hacia adelante.",
    "everydayTitle": "Ejemplo funcional: Acentuar la curvatura lumbar en bipedestación.",
    "everydayExample": "Acentuar la curvatura lumbar en bipedestación.",
    "analogia": "Como en la vida cotidiana: Acentuar la curvatura lumbar en bipedestación.",
    "clinicalTitle": "Relevancia de Anteversión en Fisioterapia",
    "clinicalRelevance": "Comprender anteversión permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de anteversión durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Biomecánica Pelviana"
      },
      {
        "label": "Región de aplicación",
        "value": "Pelvis y Cadera"
      },
      {
        "label": "Definición pedagógica",
        "value": "Sacar glúteos e inclinar la pelvis hacia adelante."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Acentuar la curvatura lumbar en bipedestación."
      }
    ],
    "svgType": "anteversion",
    "isFeatured": false
  },
  {
    "id": "retroversion",
    "name": "Retroversión",
    "termino": "Retroversión",
    "pronunciation": "/retroversion/",
    "fonetica": "RETROVERSION",
    "etymology": "Término fundamental de biomecánica pelviana en ciencias de la salud.",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Pelviana",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "cadera",
    "regionLabel": "Pelvis y Cadera",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Inclinación posterior de la pelvis que aplana la curva lordótica lumbar.",
    "defTecnica": "Inclinación posterior de la pelvis que aplana la curva lordótica lumbar.",
    "simpleExplanation": "Meter la pelvis aplanando la espalda baja.",
    "explicacionSencilla": "Meter la pelvis aplanando la espalda baja.",
    "everydayTitle": "Ejemplo funcional: Aplanar la columna lumbar contra el suelo en colchoneta.",
    "everydayExample": "Aplanar la columna lumbar contra el suelo en colchoneta.",
    "analogia": "Como en la vida cotidiana: Aplanar la columna lumbar contra el suelo en colchoneta.",
    "clinicalTitle": "Relevancia de Retroversión en Fisioterapia",
    "clinicalRelevance": "Comprender retroversión permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de retroversión durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Biomecánica Pelviana"
      },
      {
        "label": "Región de aplicación",
        "value": "Pelvis y Cadera"
      },
      {
        "label": "Definición pedagógica",
        "value": "Meter la pelvis aplanando la espalda baja."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Aplanar la columna lumbar contra el suelo en colchoneta."
      }
    ],
    "svgType": "retroversion",
    "isFeatured": false
  },
  {
    "id": "protraccion",
    "name": "Protracción",
    "termino": "Protracción",
    "pronunciation": "/protraccion/",
    "fonetica": "PROTRACCION",
    "etymology": "Término fundamental de movimiento escapular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Escapular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "hombro",
    "regionLabel": "Hombro y Escápula",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Desplazamiento anterolateral de las escápulas sobre la caja torácica.",
    "defTecnica": "Desplazamiento anterolateral de las escápulas sobre la caja torácica.",
    "simpleExplanation": "Llevar los hombros hacia adelante separando omóplatos.",
    "explicacionSencilla": "Llevar los hombros hacia adelante separando omóplatos.",
    "everydayTitle": "Ejemplo funcional: Empujar contra una pared al final de una flexión de brazos.",
    "everydayExample": "Empujar contra una pared al final de una flexión de brazos.",
    "analogia": "Como en la vida cotidiana: Empujar contra una pared al final de una flexión de brazos.",
    "clinicalTitle": "Relevancia de Protracción en Fisioterapia",
    "clinicalRelevance": "Comprender protracción permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de protracción durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Escapular"
      },
      {
        "label": "Región de aplicación",
        "value": "Hombro y Escápula"
      },
      {
        "label": "Definición pedagógica",
        "value": "Llevar los hombros hacia adelante separando omóplatos."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Empujar contra una pared al final de una flexión de brazos."
      }
    ],
    "svgType": "protraccion",
    "isFeatured": false
  },
  {
    "id": "retraccion",
    "name": "Retracción",
    "termino": "Retracción",
    "pronunciation": "/retraccion/",
    "fonetica": "RETRACCION",
    "etymology": "Término fundamental de movimiento escapular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Escapular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "hombro",
    "regionLabel": "Hombro y Escápula",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Desplazamiento posteromedial de las escápulas acercándose a la columna vertebral.",
    "defTecnica": "Desplazamiento posteromedial de las escápulas acercándose a la columna vertebral.",
    "simpleExplanation": "Juntar las escápulas atrás sacando pecho erguido.",
    "explicacionSencilla": "Juntar las escápulas atrás sacando pecho erguido.",
    "everydayTitle": "Ejemplo funcional: Juntar las paletas de la espalda al hacer remo en polea.",
    "everydayExample": "Juntar las paletas de la espalda al hacer remo en polea.",
    "analogia": "Como en la vida cotidiana: Juntar las paletas de la espalda al hacer remo en polea.",
    "clinicalTitle": "Relevancia de Retracción en Fisioterapia",
    "clinicalRelevance": "Comprender retracción permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de retracción durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Escapular"
      },
      {
        "label": "Región de aplicación",
        "value": "Hombro y Escápula"
      },
      {
        "label": "Definición pedagógica",
        "value": "Juntar las escápulas atrás sacando pecho erguido."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Juntar las paletas de la espalda al hacer remo en polea."
      }
    ],
    "svgType": "retraccion",
    "isFeatured": false
  },
  {
    "id": "elevacion",
    "name": "Elevación",
    "termino": "Elevación",
    "pronunciation": "/elevacion/",
    "fonetica": "ELEVACION",
    "etymology": "Término fundamental de movimiento escapular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Escapular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "hombro",
    "regionLabel": "Hombro y Mandíbula",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Desplazamiento en sentido craneal o hacia arriba de una estructura ósea.",
    "defTecnica": "Desplazamiento en sentido craneal o hacia arriba de una estructura ósea.",
    "simpleExplanation": "Subir los hombros o cerrar la mandíbula hacia arriba.",
    "explicacionSencilla": "Subir los hombros o cerrar la mandíbula hacia arriba.",
    "everydayTitle": "Ejemplo funcional: Gesto de encogerse de hombros diciendo 'no sé'.",
    "everydayExample": "Gesto de encogerse de hombros diciendo 'no sé'.",
    "analogia": "Como en la vida cotidiana: Gesto de encogerse de hombros diciendo 'no sé'.",
    "clinicalTitle": "Relevancia de Elevación en Fisioterapia",
    "clinicalRelevance": "Comprender elevación permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de elevación durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Escapular"
      },
      {
        "label": "Región de aplicación",
        "value": "Hombro y Mandíbula"
      },
      {
        "label": "Definición pedagógica",
        "value": "Subir los hombros o cerrar la mandíbula hacia arriba."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Gesto de encogerse de hombros diciendo 'no sé'."
      }
    ],
    "svgType": "elevacion",
    "isFeatured": false
  },
  {
    "id": "depresion",
    "name": "Depresión",
    "termino": "Depresión",
    "pronunciation": "/depresion/",
    "fonetica": "DEPRESION",
    "etymology": "Término fundamental de movimiento escapular en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Movimiento Escapular",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "hombro",
    "regionLabel": "Hombro y Mandíbula",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Desplazamiento en sentido caudal o hacia abajo de una estructura ósea.",
    "defTecnica": "Desplazamiento en sentido caudal o hacia abajo de una estructura ósea.",
    "simpleExplanation": "Bajar los hombros o descender la mandíbula al abrir la boca.",
    "explicacionSencilla": "Bajar los hombros o descender la mandíbula al abrir la boca.",
    "everydayTitle": "Ejemplo funcional: Descender hombros activando dorsal y pectoral menor.",
    "everydayExample": "Descender hombros activando dorsal y pectoral menor.",
    "analogia": "Como en la vida cotidiana: Descender hombros activando dorsal y pectoral menor.",
    "clinicalTitle": "Relevancia de Depresión en Fisioterapia",
    "clinicalRelevance": "Comprender depresión permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de depresión durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Movimiento Escapular"
      },
      {
        "label": "Región de aplicación",
        "value": "Hombro y Mandíbula"
      },
      {
        "label": "Definición pedagógica",
        "value": "Bajar los hombros o descender la mandíbula al abrir la boca."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Descender hombros activando dorsal y pectoral menor."
      }
    ],
    "svgType": "depresion",
    "isFeatured": false
  },
  {
    "id": "valgo",
    "name": "Valgo",
    "termino": "Valgo",
    "pronunciation": "/valgo/",
    "fonetica": "VALGO",
    "etymology": "Término fundamental de alineación articular en ciencias de la salud.",
    "category": "articulaciones",
    "categoryLabel": "Alineación Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "rodilla",
    "regionLabel": "Rodilla y Codo",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Desviación angular del segmento distal hacia afuera alejándose de la línea media.",
    "defTecnica": "Desviación angular del segmento distal hacia afuera alejándose de la línea media.",
    "simpleExplanation": "Articulaciones aproximadas al centro ('rodillas en X').",
    "explicacionSencilla": "Articulaciones aproximadas al centro ('rodillas en X').",
    "everydayTitle": "Ejemplo funcional: Genu valgo visible al aterrizar de un salto.",
    "everydayExample": "Genu valgo visible al aterrizar de un salto.",
    "analogia": "Como en la vida cotidiana: Genu valgo visible al aterrizar de un salto.",
    "clinicalTitle": "Relevancia de Valgo en Fisioterapia",
    "clinicalRelevance": "Comprender valgo permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de valgo durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Alineación Articular"
      },
      {
        "label": "Región de aplicación",
        "value": "Rodilla y Codo"
      },
      {
        "label": "Definición pedagógica",
        "value": "Articulaciones aproximadas al centro ('rodillas en X')."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Genu valgo visible al aterrizar de un salto."
      }
    ],
    "svgType": "valgo",
    "isFeatured": false
  },
  {
    "id": "varo",
    "name": "Varo",
    "termino": "Varo",
    "pronunciation": "/varo/",
    "fonetica": "VARO",
    "etymology": "Término fundamental de alineación articular en ciencias de la salud.",
    "category": "articulaciones",
    "categoryLabel": "Alineación Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "rodilla",
    "regionLabel": "Rodilla y Codo",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Desviación angular del segmento distal hacia adentro acercándose a la línea media.",
    "defTecnica": "Desviación angular del segmento distal hacia adentro acercándose a la línea media.",
    "simpleExplanation": "Alineación arqueada hacia afuera ('piernas de vaquero').",
    "explicacionSencilla": "Alineación arqueada hacia afuera ('piernas de vaquero').",
    "everydayTitle": "Ejemplo funcional: Genu varo habitual en futbolistas y arqueros.",
    "everydayExample": "Genu varo habitual en futbolistas y arqueros.",
    "analogia": "Como en la vida cotidiana: Genu varo habitual en futbolistas y arqueros.",
    "clinicalTitle": "Relevancia de Varo en Fisioterapia",
    "clinicalRelevance": "Comprender varo permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de varo durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Alineación Articular"
      },
      {
        "label": "Región de aplicación",
        "value": "Rodilla y Codo"
      },
      {
        "label": "Definición pedagógica",
        "value": "Alineación arqueada hacia afuera ('piernas de vaquero')."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Genu varo habitual en futbolistas y arqueros."
      }
    ],
    "svgType": "varo",
    "isFeatured": false
  },
  {
    "id": "cifosis",
    "name": "Cifosis",
    "termino": "Cifosis",
    "pronunciation": "/cifosis/",
    "fonetica": "CIFOSIS",
    "etymology": "Término fundamental de columna vertebral en ciencias de la salud.",
    "category": "huesos",
    "categoryLabel": "Columna Vertebral",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "columna",
    "regionLabel": "Columna Vertebral",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Curvatura fisiológica o patológica de convexidad posterior en el plano sagital dorsal.",
    "defTecnica": "Curvatura fisiológica o patológica de convexidad posterior en el plano sagital dorsal.",
    "simpleExplanation": "Curvatura convexa o joroba en la espalda alta.",
    "explicacionSencilla": "Curvatura convexa o joroba en la espalda alta.",
    "everydayTitle": "Ejemplo funcional: Incremento de cifosis dorsal por trabajo prolongado en computador.",
    "everydayExample": "Incremento de cifosis dorsal por trabajo prolongado en computador.",
    "analogia": "Como en la vida cotidiana: Incremento de cifosis dorsal por trabajo prolongado en computador.",
    "clinicalTitle": "Relevancia de Cifosis en Fisioterapia",
    "clinicalRelevance": "Comprender cifosis permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de cifosis durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Columna Vertebral"
      },
      {
        "label": "Región de aplicación",
        "value": "Columna Vertebral"
      },
      {
        "label": "Definición pedagógica",
        "value": "Curvatura convexa o joroba en la espalda alta."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Incremento de cifosis dorsal por trabajo prolongado en computador."
      }
    ],
    "svgType": "cifosis",
    "isFeatured": false
  },
  {
    "id": "lordosis",
    "name": "Lordosis",
    "termino": "Lordosis",
    "pronunciation": "/lordosis/",
    "fonetica": "LORDOSIS",
    "etymology": "Término fundamental de columna vertebral en ciencias de la salud.",
    "category": "huesos",
    "categoryLabel": "Columna Vertebral",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "columna",
    "regionLabel": "Columna Vertebral",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Curvatura fisiológica o patológica de concavidad posterior en región cervical o lumbar.",
    "defTecnica": "Curvatura fisiológica o patológica de concavidad posterior en región cervical o lumbar.",
    "simpleExplanation": "Curva normal o aumentada hacia adentro en cuello o cintura.",
    "explicacionSencilla": "Curva normal o aumentada hacia adentro en cuello o cintura.",
    "everydayTitle": "Ejemplo funcional: Hiperlordosis lumbar adaptativa durante el embarazo.",
    "everydayExample": "Hiperlordosis lumbar adaptativa durante el embarazo.",
    "analogia": "Como en la vida cotidiana: Hiperlordosis lumbar adaptativa durante el embarazo.",
    "clinicalTitle": "Relevancia de Lordosis en Fisioterapia",
    "clinicalRelevance": "Comprender lordosis permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de lordosis durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Columna Vertebral"
      },
      {
        "label": "Región de aplicación",
        "value": "Columna Vertebral"
      },
      {
        "label": "Definición pedagógica",
        "value": "Curva normal o aumentada hacia adentro en cuello o cintura."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Hiperlordosis lumbar adaptativa durante el embarazo."
      }
    ],
    "svgType": "lordosis",
    "isFeatured": false
  },
  {
    "id": "escoliosis",
    "name": "Escoliosis",
    "termino": "Escoliosis",
    "pronunciation": "/escoliosis/",
    "fonetica": "ESCOLIOSIS",
    "etymology": "Término fundamental de columna vertebral en ciencias de la salud.",
    "category": "huesos",
    "categoryLabel": "Columna Vertebral",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "columna",
    "regionLabel": "Columna Vertebral",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Desviación tridimensional lateral estructurada de la columna vertebral en 'S' o 'C'.",
    "defTecnica": "Desviación tridimensional lateral estructurada de la columna vertebral en 'S' o 'C'.",
    "simpleExplanation": "Columna torcida lateralmente hacia un costado.",
    "explicacionSencilla": "Columna torcida lateralmente hacia un costado.",
    "everydayTitle": "Ejemplo funcional: Asimetría en la altura de hombros o escápulas al inclinarse.",
    "everydayExample": "Asimetría en la altura de hombros o escápulas al inclinarse.",
    "analogia": "Como en la vida cotidiana: Asimetría en la altura de hombros o escápulas al inclinarse.",
    "clinicalTitle": "Relevancia de Escoliosis en Fisioterapia",
    "clinicalRelevance": "Comprender escoliosis permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de escoliosis durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Columna Vertebral"
      },
      {
        "label": "Región de aplicación",
        "value": "Columna Vertebral"
      },
      {
        "label": "Definición pedagógica",
        "value": "Columna torcida lateralmente hacia un costado."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Asimetría en la altura de hombros o escápulas al inclinarse."
      }
    ],
    "svgType": "escoliosis",
    "isFeatured": false
  },
  {
    "id": "fascia",
    "name": "Fascia",
    "termino": "Fascia",
    "pronunciation": "/fascia/",
    "fonetica": "FASCIA",
    "etymology": "Término fundamental de tejido conectivo y fascias en ciencias de la salud.",
    "category": "huesos",
    "categoryLabel": "Tejido Conectivo y Fascias",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Red viscoelástica continua de tejido conectivo denso que envuelve y conecta músculos y vísceras.",
    "defTecnica": "Red viscoelástica continua de tejido conectivo denso que envuelve y conecta músculos y vísceras.",
    "simpleExplanation": "Envoltura elástica continua que conecta todo el cuerpo.",
    "explicacionSencilla": "Envoltura elástica continua que conecta todo el cuerpo.",
    "everydayTitle": "Ejemplo funcional: Fascia toracolumbar o fascia plantar del pie.",
    "everydayExample": "Fascia toracolumbar o fascia plantar del pie.",
    "analogia": "Como en la vida cotidiana: Fascia toracolumbar o fascia plantar del pie.",
    "clinicalTitle": "Relevancia de Fascia en Fisioterapia",
    "clinicalRelevance": "Comprender fascia permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de fascia durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Tejido Conectivo y Fascias"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Envoltura elástica continua que conecta todo el cuerpo."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Fascia toracolumbar o fascia plantar del pie."
      }
    ],
    "svgType": "fascia",
    "isFeatured": false
  },
  {
    "id": "tono-muscular",
    "name": "Tono Muscular",
    "termino": "Tono Muscular",
    "pronunciation": "/tono-muscular/",
    "fonetica": "TONO-MUSCULAR",
    "etymology": "Término fundamental de neurofisiología en ciencias de la salud.",
    "category": "musculos",
    "categoryLabel": "Neurofisiología",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Estado basal de tensión pasiva y semicontracción refleja continua del músculo en reposo.",
    "defTecnica": "Estado basal de tensión pasiva y semicontracción refleja continua del músculo en reposo.",
    "simpleExplanation": "Firmeza de base y resistencia pasiva del músculo sano.",
    "explicacionSencilla": "Firmeza de base y resistencia pasiva del músculo sano.",
    "everydayTitle": "Ejemplo funcional: Tono muscular de cuello para sostener la cabeza erguida.",
    "everydayExample": "Tono muscular de cuello para sostener la cabeza erguida.",
    "analogia": "Como en la vida cotidiana: Tono muscular de cuello para sostener la cabeza erguida.",
    "clinicalTitle": "Relevancia de Tono Muscular en Fisioterapia",
    "clinicalRelevance": "Comprender tono muscular permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de tono muscular durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Neurofisiología"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Firmeza de base y resistencia pasiva del músculo sano."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Tono muscular de cuello para sostener la cabeza erguida."
      }
    ],
    "svgType": "tono-muscular",
    "isFeatured": false
  },
  {
    "id": "hipertrofia",
    "name": "Hipertrofia",
    "termino": "Hipertrofia",
    "pronunciation": "/hipertrofia/",
    "fonetica": "HIPERTROFIA",
    "etymology": "Término fundamental de fisiología muscular en ciencias de la salud.",
    "category": "musculos",
    "categoryLabel": "Fisiología Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Aumento volumétrico y transversal del diámetro de las fibras musculares esqueléticas.",
    "defTecnica": "Aumento volumétrico y transversal del diámetro de las fibras musculares esqueléticas.",
    "simpleExplanation": "Crecimiento del tamaño y masa del músculo por entrenamiento.",
    "explicacionSencilla": "Crecimiento del tamaño y masa del músculo por entrenamiento.",
    "everydayTitle": "Ejemplo funcional: Aumento del cuadríceps tras meses de sentadillas progresivas.",
    "everydayExample": "Aumento del cuadríceps tras meses de sentadillas progresivas.",
    "analogia": "Como en la vida cotidiana: Aumento del cuadríceps tras meses de sentadillas progresivas.",
    "clinicalTitle": "Relevancia de Hipertrofia en Fisioterapia",
    "clinicalRelevance": "Comprender hipertrofia permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de hipertrofia durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Fisiología Muscular"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Crecimiento del tamaño y masa del músculo por entrenamiento."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Aumento del cuadríceps tras meses de sentadillas progresivas."
      }
    ],
    "svgType": "hipertrofia",
    "isFeatured": false
  },
  {
    "id": "atrofia",
    "name": "Atrofia",
    "termino": "Atrofia",
    "pronunciation": "/atrofia/",
    "fonetica": "ATROFIA",
    "etymology": "Término fundamental de fisiología muscular en ciencias de la salud.",
    "category": "musculos",
    "categoryLabel": "Fisiología Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Disminución de masa, calibre fibrilar y fuerza muscular debida a desuso, denervación o lesión.",
    "defTecnica": "Disminución de masa, calibre fibrilar y fuerza muscular debida a desuso, denervación o lesión.",
    "simpleExplanation": "Pérdida de volumen y masa muscular por no usar el miembro.",
    "explicacionSencilla": "Pérdida de volumen y masa muscular por no usar el miembro.",
    "everydayTitle": "Ejemplo funcional: Pérdida notable del volumen del muslo tras 6 semanas con yeso.",
    "everydayExample": "Pérdida notable del volumen del muslo tras 6 semanas con yeso.",
    "analogia": "Como en la vida cotidiana: Pérdida notable del volumen del muslo tras 6 semanas con yeso.",
    "clinicalTitle": "Relevancia de Atrofia en Fisioterapia",
    "clinicalRelevance": "Comprender atrofia permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de atrofia durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Fisiología Muscular"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Pérdida de volumen y masa muscular por no usar el miembro."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Pérdida notable del volumen del muslo tras 6 semanas con yeso."
      }
    ],
    "svgType": "atrofia",
    "isFeatured": false
  },
  {
    "id": "rango-de-movimiento-rom",
    "name": "Rango de Movimiento (ROM)",
    "termino": "Rango de Movimiento (ROM)",
    "pronunciation": "/rango-de-movimiento-(rom)/",
    "fonetica": "RANGO-DE-MOVIMIENTO-(ROM)",
    "etymology": "Término fundamental de evaluación kinesiológica en ciencias de la salud.",
    "category": "movimientos",
    "categoryLabel": "Evaluación Kinesiológica",
    "categoryClass": "bg-cat-movements/15 text-cat-movements",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Arco total de movilidad angular en grados que puede describir una articulación libre.",
    "defTecnica": "Arco total de movilidad angular en grados que puede describir una articulación libre.",
    "simpleExplanation": "Grados totales que una articulación puede doblar o estirar.",
    "explicacionSencilla": "Grados totales que una articulación puede doblar o estirar.",
    "everydayTitle": "Ejemplo funcional: Medir con goniómetro los 135 grados de flexión de rodilla.",
    "everydayExample": "Medir con goniómetro los 135 grados de flexión de rodilla.",
    "analogia": "Como en la vida cotidiana: Medir con goniómetro los 135 grados de flexión de rodilla.",
    "clinicalTitle": "Relevancia de Rango de Movimiento (ROM) en Fisioterapia",
    "clinicalRelevance": "Comprender rango de movimiento (rom) permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de rango de movimiento (rom) durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Evaluación Kinesiológica"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Grados totales que una articulación puede doblar o estirar."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Medir con goniómetro los 135 grados de flexión de rodilla."
      }
    ],
    "svgType": "rango-de-movimiento-rom",
    "isFeatured": false
  },
  {
    "id": "artrocinematica",
    "name": "Artrocinemática",
    "termino": "Artrocinemática",
    "pronunciation": "/artrocinematica/",
    "fonetica": "ARTROCINEMATICA",
    "etymology": "Término fundamental de biomecánica muscular en ciencias de la salud.",
    "category": "musculos",
    "categoryLabel": "Biomecánica Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimientos microscópicos involuntarios de rodamiento, deslizamiento y giro entre carillas articulares.",
    "defTecnica": "Movimientos microscópicos involuntarios de rodamiento, deslizamiento y giro entre carillas articulares.",
    "simpleExplanation": "Pequeños rodamientos y deslizamientos internos entre huesos.",
    "explicacionSencilla": "Pequeños rodamientos y deslizamientos internos entre huesos.",
    "everydayTitle": "Ejemplo funcional: Deslizamiento inferior de la cabeza humeral al levantar el brazo.",
    "everydayExample": "Deslizamiento inferior de la cabeza humeral al levantar el brazo.",
    "analogia": "Como en la vida cotidiana: Deslizamiento inferior de la cabeza humeral al levantar el brazo.",
    "clinicalTitle": "Relevancia de Artrocinemática en Fisioterapia",
    "clinicalRelevance": "Comprender artrocinemática permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de artrocinemática durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Biomecánica Muscular"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Pequeños rodamientos y deslizamientos internos entre huesos."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Deslizamiento inferior de la cabeza humeral al levantar el brazo."
      }
    ],
    "svgType": "artrocinematica",
    "isFeatured": false
  },
  {
    "id": "osteocinematica",
    "name": "Osteocinemática",
    "termino": "Osteocinemática",
    "pronunciation": "/osteocinematica/",
    "fonetica": "OSTEOCINEMATICA",
    "etymology": "Término fundamental de biomecánica muscular en ciencias de la salud.",
    "category": "musculos",
    "categoryLabel": "Biomecánica Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Movimiento macroscópico observable del hueso en los planos sagital, frontal o transversal.",
    "defTecnica": "Movimiento macroscópico observable del hueso en los planos sagital, frontal o transversal.",
    "simpleExplanation": "Movimiento amplio y visible del miembro en el espacio.",
    "explicacionSencilla": "Movimiento amplio y visible del miembro en el espacio.",
    "everydayTitle": "Ejemplo funcional: Elevar el muslo hacia adelante en flexión de cadera.",
    "everydayExample": "Elevar el muslo hacia adelante en flexión de cadera.",
    "analogia": "Como en la vida cotidiana: Elevar el muslo hacia adelante en flexión de cadera.",
    "clinicalTitle": "Relevancia de Osteocinemática en Fisioterapia",
    "clinicalRelevance": "Comprender osteocinemática permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de osteocinemática durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Biomecánica Muscular"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Movimiento amplio y visible del miembro en el espacio."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Elevar el muslo hacia adelante en flexión de cadera."
      }
    ],
    "svgType": "osteocinematica",
    "isFeatured": false
  },
  {
    "id": "cadena-cinematica-abierta",
    "name": "Cadena Cinemática Abierta",
    "termino": "Cadena Cinemática Abierta",
    "pronunciation": "/cadena-cinematica-abierta/",
    "fonetica": "CADENA-CINEMATICA-ABIERTA",
    "etymology": "Término fundamental de biomecánica muscular en ciencias de la salud.",
    "category": "musculos",
    "categoryLabel": "Biomecánica Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Sistema biomecánico donde el segmento distal se encuentra libre en el espacio sin apoyo fijo.",
    "defTecnica": "Sistema biomecánico donde el segmento distal se encuentra libre en el espacio sin apoyo fijo.",
    "simpleExplanation": "Movimiento con manos o pies sueltos moviéndose en el aire.",
    "explicacionSencilla": "Movimiento con manos o pies sueltos moviéndose en el aire.",
    "everydayTitle": "Ejemplo funcional: Patear un balón de fútbol o extender la pierna sentado en máquina.",
    "everydayExample": "Patear un balón de fútbol o extender la pierna sentado en máquina.",
    "analogia": "Como en la vida cotidiana: Patear un balón de fútbol o extender la pierna sentado en máquina.",
    "clinicalTitle": "Relevancia de Cadena Cinemática Abierta en Fisioterapia",
    "clinicalRelevance": "Comprender cadena cinemática abierta permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de cadena cinemática abierta durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Biomecánica Muscular"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Movimiento con manos o pies sueltos moviéndose en el aire."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Patear un balón de fútbol o extender la pierna sentado en máquina."
      }
    ],
    "svgType": "cadena-cinematica-abierta",
    "isFeatured": false
  },
  {
    "id": "cadena-cinematica-cerrada",
    "name": "Cadena Cinemática Cerrada",
    "termino": "Cadena Cinemática Cerrada",
    "pronunciation": "/cadena-cinematica-cerrada/",
    "fonetica": "CADENA-CINEMATICA-CERRADA",
    "etymology": "Término fundamental de biomecánica muscular en ciencias de la salud.",
    "category": "musculos",
    "categoryLabel": "Biomecánica Muscular",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Global / General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Sistema biomecánico donde el segmento distal permanece fijo contra una superficie externa sólida.",
    "defTecnica": "Sistema biomecánico donde el segmento distal permanece fijo contra una superficie externa sólida.",
    "simpleExplanation": "Movimiento con pies o manos bien apoyados sobre piso o barra.",
    "explicacionSencilla": "Movimiento con pies o manos bien apoyados sobre piso o barra.",
    "everydayTitle": "Ejemplo funcional: Sentadillas profundas o flexiones de pecho apoyando palmas.",
    "everydayExample": "Sentadillas profundas o flexiones de pecho apoyando palmas.",
    "analogia": "Como en la vida cotidiana: Sentadillas profundas o flexiones de pecho apoyando palmas.",
    "clinicalTitle": "Relevancia de Cadena Cinemática Cerrada en Fisioterapia",
    "clinicalRelevance": "Comprender cadena cinemática cerrada permite al kinesiólogo evaluar patrones biomecánicos alterados y programar prescripciones de ejercicio terapéutico seguras.",
    "clinicalCase": "Evaluación funcional de cadena cinemática cerrada durante la rehabilitación musculoesquelética.",
    "keyDetails": [
      {
        "label": "Categoría clínica",
        "value": "Biomecánica Muscular"
      },
      {
        "label": "Región de aplicación",
        "value": "Global / General"
      },
      {
        "label": "Definición pedagógica",
        "value": "Movimiento con pies o manos bien apoyados sobre piso o barra."
      },
      {
        "label": "Ejemplo en vida diaria",
        "value": "Sentadillas profundas o flexiones de pecho apoyando palmas."
      }
    ],
    "svgType": "cadena-cinematica-cerrada",
    "isFeatured": false
  },
  {
    "id": "sinartrosis",
    "name": "Sinartrosis",
    "pronunciation": "/si-nar-tro-sis/",
    "fonetica": "si-nar-TRO-sis",
    "etymology": "Del griego syn ('junto') y arthron ('articulación').",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "craneo",
    "regionLabel": "Cráneo y Cara",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Articulación fibrosa inmóvil cuyos huesos están unidos sólidamente por tejido conectivo denso o cartílago hialino, sin cavidad articular.",
    "defTecnica": "Articulación inmóvil unida por tejido fibroso o cartílago que carece de cavidad sinovial.",
    "simpleExplanation": "Unión fija entre dos huesos que no se mueve nada, como piezas de un rompecabezas soldadas.",
    "explicacionSencilla": "Unión que no se mueve nada.",
    "everydayTitle": "Suturas protectoras de la bóveda craneal",
    "everydayExample": "Las suturas de tu cráneo encajan como los dientes de una cremallera cerrada protegiendo el cerebro de impactos.",
    "analogia": "Como dos placas metálicas remachadas sólidamente una con otra para que nunca se deslicen.",
    "clinicalTitle": "Craneosinostosis y rigidez sutural",
    "clinicalRelevance": "El cierre prematuro de una sinartrosis craneal en infantes restringe el crecimiento encefálico y requiere descompresión quirúrgica o moldeamiento.",
    "clinicalCase": "Fusión prematura de la sutura sagital en un lactante que produce escafocefalia.",
    "keyDetails": [
      {
        "label": "Movilidad",
        "value": "Nula (inmóvil)"
      },
      {
        "label": "Tejido de unión",
        "value": "Fibroso denso o cartilaginoso"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Suturas del cráneo"
      }
    ],
    "svgType": "sinartrosis",
    "termino": "Sinartrosis"
  },
  {
    "id": "anfiartrosis",
    "name": "Anfiartrosis",
    "pronunciation": "/an-fiar-tro-sis/",
    "fonetica": "an-fiar-TRO-sis",
    "etymology": "Del griego amphi ('ambos lados / parcial') y arthron ('articulación').",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "columna",
    "regionLabel": "Columna y Pelvis",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Articulación semimóvil cartilaginosa unida por fibrocartílago o cartílago hialino que permite microdesplazamientos de amortiguación.",
    "defTecnica": "Articulación de movimiento muy limitado unida por cartílago, especializada en absorber cargas.",
    "simpleExplanation": "Una unión que se mueve un poquitico para amortiguar golpes, como un bloque elástico entre dos ladrillos.",
    "explicacionSencilla": "Se mueve poquitico.",
    "everydayTitle": "Flexibilidad sutil de la columna vertebral",
    "everydayExample": "Al caminar o trotar, los discos fibrocartilaginosos entre tus vértebras ceden ligeramente para que el impacto no dañe la médula.",
    "analogia": "Como las almohadillas de caucho debajo de una lavadora que oscilan milímetros absorbiendo la vibración.",
    "clinicalTitle": "Sobrecarga discal y lumbalgia mecánica",
    "clinicalRelevance": "La pérdida de hidratación del núcleo pulposo en estas articulaciones genera compresión facetaria y radiculopatía.",
    "clinicalCase": "Degeneración discal L5-S1 en un conductor de carga por vibración axial continuada.",
    "keyDetails": [
      {
        "label": "Movilidad",
        "value": "Limitada (semimóvil)"
      },
      {
        "label": "Tejido de unión",
        "value": "Fibrocartílago elástico"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Discos entre vértebras"
      }
    ],
    "svgType": "anfiartrosis",
    "termino": "Anfiartrosis"
  },
  {
    "id": "diartrosis",
    "name": "Diartrosis",
    "pronunciation": "/diar-tro-sis/",
    "fonetica": "diar-TRO-sis",
    "etymology": "Del griego dia ('a través de') y arthron ('articulación').",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "general",
    "regionLabel": "Sistema Articular Periférico",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Articulación sinovial de gran movilidad caracterizada por cartílago articular, cavidad articular cerrada, cápsula fibrosa y líquido sinovial.",
    "defTecnica": "Articulación sinovial de movimiento libre y amplio con cápsula y líquido lubricante.",
    "simpleExplanation": "La que sí se mueve bastante en múltiples direcciones: tiene lubricante adentro para doblarse sin desgastarse.",
    "explicacionSencilla": "La que sí se mueve bastante.",
    "everydayTitle": "Movilidad ágil de rodilla, cadera y codo",
    "everydayExample": "Cuando te agachas a amarrarte los cordones, tu rodilla se dobla libremente gracias al líquido sinovial que baña el cartílago.",
    "analogia": "Como una bisagra de puerta engrasada con aceite de alta gama que abre y cierra con suavidad.",
    "clinicalTitle": "Osteoartritis y desgaste articular",
    "clinicalRelevance": "En fisioterapia, restaurar la artrocinemática de deslizamiento y rodamiento en diartrosis previene la anquilosis postquirúrgica.",
    "clinicalCase": "Rigidez capsular glenohumeral postinmovilización con yeso en fractura de radio.",
    "keyDetails": [
      {
        "label": "Movilidad",
        "value": "Libre y amplia (multiaxial/uniaxial)"
      },
      {
        "label": "Estructuras clave",
        "value": "Cápsula, membrana sinovial y cartílago"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Rodilla, hombro y cadera"
      }
    ],
    "svgType": "diartrosis",
    "termino": "Diartrosis"
  },
  {
    "id": "sincondrosis",
    "name": "Sincondrosis",
    "pronunciation": "/sin-con-dro-sis/",
    "fonetica": "sin-con-DRO-sis",
    "etymology": "Del griego syn ('junto') y chondros ('cartílago').",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "general",
    "regionLabel": "Esqueleto Axial y Apendicular",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Articulación cartilaginosa primaria unida por cartílago hialino, frecuentemente temporal durante el desarrollo óseo endocondral.",
    "defTecnica": "Unión por cartílago hialino entre dos huesos que habitualmente se osifica con la edad.",
    "simpleExplanation": "Unión con cartílago que durante el crecimiento se va transformando en hueso definitivo.",
    "explicacionSencilla": "Cartílago que luego se vuelve hueso.",
    "everydayTitle": "Placa de crecimiento infantil y juvenil",
    "everydayExample": "La placa fisis de los huesos largos de un niño permite que siga creciendo en estatura antes de cerrarse al llegar a la adultez.",
    "analogia": "Como un puente de cera dura entre dos piezas de metal que con el tiempo se funde y convierte en metal macizo.",
    "clinicalTitle": "Lesiones ficiarias de Salter-Harris",
    "clinicalRelevance": "Un traumatismo sobre una sincondrosis en crecimiento puede causar dismetría o deformidad angular permanente en la extremidad.",
    "clinicalCase": "Fractura Salter-Harris tipo II distal de tibia en un futbolista adolescente de 13 años.",
    "keyDetails": [
      {
        "label": "Cartílago",
        "value": "Hialino especializado"
      },
      {
        "label": "Durabilidad",
        "value": "Frecuentemente temporal (se osifica)"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Placa de crecimiento de tibia"
      }
    ],
    "svgType": "sincondrosis",
    "termino": "Sincondrosis"
  },
  {
    "id": "sinfisis",
    "name": "Sínfisis",
    "pronunciation": "/sin-fi-sis/",
    "fonetica": "SIN-fi-sis",
    "etymology": "Del griego symphysis ('crecer juntos').",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "pelvis",
    "regionLabel": "Pelvis y Columna",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Articulación cartilaginosa secundaria donde los extremos óseos revestidos de cartílago hialino se unen mediante un disco grueso de fibrocartílago intermedio.",
    "defTecnica": "Unión por fibrocartílago entre dos huesos diseñada para soportar fuerzas de compresión y cizallamiento.",
    "simpleExplanation": "Una unión resistente con un disco amortiguador en el centro que mantiene los huesos firmes pero capaces de ceder.",
    "explicacionSencilla": "Unión con disco amortiguador.",
    "everydayTitle": "Unión de los huesos púbicos en la pelvis",
    "everydayExample": "Al correr y cambiar de dirección en el fútbol, la sínfisis púbica disipa el cizallamiento entre las dos mitades de la pelvis.",
    "analogia": "Como un taco de goma dura remachado entre dos vigas de acero de un edificio antisísmico.",
    "clinicalTitle": "Osteopatía dinámica de pubis (pubalgia)",
    "clinicalRelevance": "El desbalance de fuerzas entre aductores potentes y recto abdominal débil inflama la sínfisis púbica generando dolor inguinal severo.",
    "clinicalCase": "Pubalgia en deportista por sobreuso de patada con cizallamiento asimétrico de la sínfisis.",
    "keyDetails": [
      {
        "label": "Componente central",
        "value": "Disco de fibrocartílago"
      },
      {
        "label": "Función",
        "value": "Amortiguación de cargas y cizallamiento"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Sínfisis púbica y sínfisis intervertebral"
      }
    ],
    "svgType": "sinfisis",
    "termino": "Sínfisis"
  },
  {
    "id": "sindesmosis",
    "name": "Sindesmosis",
    "pronunciation": "/sin-des-mo-sis/",
    "fonetica": "sin-des-MO-sis",
    "etymology": "Del griego syndesmos ('ligamento, atadura').",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "pierna",
    "regionLabel": "Pierna y Tobillo",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Articulación fibrosa en la que dos huesos vecinos están conectados por una lámina o cordón de ligamento o membrana interósea.",
    "defTecnica": "Unión por ligamento entre dos huesos separados que permite escasa movilidad coordinada.",
    "simpleExplanation": "Dos huesos amarrados de lado a lado por ligamentos fuertes como si estuvieran atados con cuerdas tensas.",
    "explicacionSencilla": "Huesos amarrados por ligamento.",
    "everydayTitle": "Fijación entre la tibia y el peroné",
    "everydayExample": "Cuando apoyas todo tu peso al saltar, la sindesmosis impide que la tibia y el peroné se abran hacia los lados.",
    "analogia": "Como dos maderos amarrados fuertemente con cuerdas elásticas de nailon para que no se separen.",
    "clinicalTitle": "Esguince alto de tobillo (lesión sindesmótica)",
    "clinicalRelevance": "Una rotura de los ligamentos tibioperoneos distales desestabiliza la mortaja y requiere periodos prolongados de descarga y propiocepción.",
    "clinicalCase": "Esguince por rotación externa forzada de tobillo con dolor exquisito sobre la membrana interósea.",
    "keyDetails": [
      {
        "label": "Tipo de unión",
        "value": "Membrana interósea y ligamentos"
      },
      {
        "label": "Estabilidad",
        "value": "Mantiene unida la mortaja articular"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Sindesmosis tibioperonea distal"
      }
    ],
    "svgType": "sindesmosis",
    "termino": "Sindesmosis"
  },
  {
    "id": "gonfosis",
    "name": "Gónfosis",
    "pronunciation": "/gon-fo-sis/",
    "fonetica": "gon-FO-sis",
    "etymology": "Del griego gomphos ('clavija, perno') y osis ('proceso').",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "cabeza",
    "regionLabel": "Cabeza y Cara",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Articulación fibrosa especializada en forma de clavija que encaja en un alvéolo, sostenida firmemente por el ligamento periodontal.",
    "defTecnica": "Articulación fibrosa tipo clavija en cavidad que sujeta las raíces dentales en los maxilares.",
    "simpleExplanation": "Un diente metido en su hueco óseo y fijado como un clavo con micropuntas elásticas.",
    "explicacionSencilla": "Diente metido en su hueco.",
    "everydayTitle": "Fijación dental y propiocepción masticatoria",
    "everydayExample": "Cuando muerdes una cáscara de nuez o un grano duro, el ligamento periodontal de la gónfosis siente la presión y activa el reflejo de soltar.",
    "analogia": "Como una clavija de madera encajada a presión en un orificio con un forro de fieltro que absorbe impactos.",
    "clinicalTitle": "Movilidad dental y ortodoncia biomecánica",
    "clinicalRelevance": "La fuerza continua y controlada de un bracket remodela el hueso alveolar a través de la mecanotransducción en la gónfosis.",
    "clinicalCase": "Sensibilidad periodontal aguda post-ajuste de arco ortodóncico.",
    "keyDetails": [
      {
        "label": "Estructura",
        "value": "Clavija (raíz) dentro de alvéolo"
      },
      {
        "label": "Ligamento",
        "value": "Periodontal rico en mecanorreceptores"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Diente en el alvéolo mandibular/maxilar"
      }
    ],
    "svgType": "gonfosis",
    "termino": "Gónfosis"
  },
  {
    "id": "apofisis",
    "name": "Apófisis",
    "pronunciation": "/a-po-fi-sis/",
    "fonetica": "a-PO-fi-sis",
    "etymology": "Del griego apophysis ('saliente, brote de hueso').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Esqueleto Axial y Apendicular",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Prominencia, saliente o proceso óseo natural que sirve de punto de inserción para tendones y ligamentos o como superficie articular.",
    "defTecnica": "Saliente ósea para inserción muscular y ligamentosa que incrementa el brazo de palanca biomecánico.",
    "simpleExplanation": "Un piquito o saliente del hueso donde se engancha el músculo para tirar de él con más fuerza.",
    "explicacionSencilla": "Piquito del hueso donde se pega el músculo.",
    "everydayTitle": "Los salientes palpables de la espalda",
    "everydayExample": "Si pasas tus dedos por el centro de tu columna, sientes bolitas duras una tras otra: son las apófisis espinosas vertebrales.",
    "analogia": "Como el mango sobresaliente de una llave inglesa que permite aplicar fuerza con mucho menos esfuerzo.",
    "clinicalTitle": "Avulsiones apofisarias en deportistas",
    "clinicalRelevance": "Tracciones musculares violentas en atletas adolescentes pueden desprender la apófisis ósea antes de su completa fusión.",
    "clinicalCase": "Avulsión de la apófisis espinosa C7 por esfuerzo brusco de carga cervical (fractura del paleo).",
    "keyDetails": [
      {
        "label": "Función",
        "value": "Inserción muscular y brazo de palanca"
      },
      {
        "label": "Tipos",
        "value": "Espinosas, transversas, articulares, estiloides"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Apófisis espinosa vertebral"
      }
    ],
    "svgType": "apofisis",
    "termino": "Apófisis"
  },
  {
    "id": "fosa",
    "name": "Fosa",
    "pronunciation": "/fo-sa/",
    "fonetica": "FO-sa",
    "etymology": "Del latín fossa ('zanja, hoyo, cavidad').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Esqueleto General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Depresión, concavidad o hendidura poco profunda en la superficie de un hueso, destinada a alojar un músculo, glándula o extremo articular.",
    "defTecnica": "Depresión o hueco poco profundo en hueso que alberga masas musculares o vísceras.",
    "simpleExplanation": "Un huequito o cuenco excavado en el hueso para que quepa un músculo o encaje otra pieza.",
    "explicacionSencilla": "Huequito en el hueso.",
    "everydayTitle": "El hueco detrás de la rodilla y la fosa escapular",
    "everydayExample": "La fosa subescapular es el hueco ancho en la cara anterior del omóplato donde descansa el músculo del mismo nombre.",
    "analogia": "Como la concavidad de una cuchara de sopa diseñada para contener líquido sin desbordarse.",
    "clinicalTitle": "Atrapamiento en fosas osteofibrosas",
    "clinicalRelevance": "Procesos inflamatorios en fosas anatómicas cerradas elevan la presión interna comprimiendo estructuras neurovasculares.",
    "clinicalCase": "Quiste de Baker con distensión palpable de la fosa poplítea tras desgarro meniscal.",
    "keyDetails": [
      {
        "label": "Morfología",
        "value": "Depresión cóncava suave"
      },
      {
        "label": "Utilidad",
        "value": "Alojamiento muscular y protección neurovascular"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Fosa poplítea y fosa supraespinosa"
      }
    ],
    "svgType": "fosa",
    "termino": "Fosa"
  },
  {
    "id": "surco",
    "name": "Surco",
    "pronunciation": "/sur-co/",
    "fonetica": "SUR-co",
    "etymology": "Del latín sulcus ('zanja, hendidura lineal').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Esqueleto General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Ranura, hendidura o canal alargado en la superficie ósea que guía y protege el trayecto de un vaso sanguíneo, tendón o nervio periférico.",
    "defTecnica": "Ranura alargada en hueso para el paso guiado de vaso sanguíneo o nervio.",
    "simpleExplanation": "Una canaleta tallada en el hueso por donde resbala un cable importante sin ser aplastado.",
    "explicacionSencilla": "Canaleta del hueso.",
    "everydayTitle": "El carril del tendón del bíceps en el hombro",
    "everydayExample": "El tendón largo del bíceps corre a lo largo del surco intertubercular del húmero como un tren sobre sus rieles.",
    "analogia": "Como la canaleta plástica de pared que organiza y protege cables eléctricos para que nadie los pise.",
    "clinicalTitle": "Inestabilidad tendinosa en surcos óseos",
    "clinicalRelevance": "La ruptura del retináculo del surco permite la subluxación dolorosa del tendón durante arcos de movimiento activo.",
    "clinicalCase": "Tendinopatía bicipital con chasquido doloroso por subluxación del tendón fuera de su surco humeral.",
    "keyDetails": [
      {
        "label": "Forma",
        "value": "Canal alargado estrecho"
      },
      {
        "label": "Función",
        "value": "Direccionamiento y protección de tendones y nervios"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Surco del nervio radial y surco bicipital"
      }
    ],
    "svgType": "surco",
    "termino": "Surco"
  },
  {
    "id": "meato",
    "name": "Meato",
    "pronunciation": "/me-a-to/",
    "fonetica": "me-A-to",
    "etymology": "Del latín meatus ('pasaje, camino, conducto').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "cabeza",
    "regionLabel": "Cabeza y Oído",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Conducto, túnel u orificio alargado que atraviesa una estructura ósea comunicando espacios anatómicos profundos con el exterior.",
    "defTecnica": "Conducto u orificio estrecho en hueso para la conducción de estructuras acústicas o vasculares.",
    "simpleExplanation": "Un tunelcito dentro del hueso por donde viaja el sonido o los nervios hacia el interior de la cabeza.",
    "explicacionSencilla": "Tunelcito dentro del hueso.",
    "everydayTitle": "El túnel por el que escuchas en el oído",
    "everydayExample": "El meato acústico externo es el túnel óseo del hueso temporal que conduce las ondas sonoras hacia el tímpano.",
    "analogia": "Como un túnel carretero excavado a través de una montaña de roca sólida para permitir el paso del tráfico.",
    "clinicalTitle": "Patología del meato acústico y vértigo",
    "clinicalRelevance": "Compresiones del nervio vestibulococlear en el meato acústico interno provocan acúfenos, hipoacusia y alteración del equilibrio.",
    "clinicalCase": "Schwannoma vestibular diagnosticado por asimetría auditiva en el meato acústico interno.",
    "keyDetails": [
      {
        "label": "Morfología",
        "value": "Conducto cilíndrico óseo"
      },
      {
        "label": "Estructuras que lo cruzan",
        "value": "Nervios acústicos, facial y vasos laberínticos"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Meato acústico interno y externo"
      }
    ],
    "svgType": "meato",
    "termino": "Meato"
  },
  {
    "id": "foramen",
    "name": "Foramen",
    "pronunciation": "/fo-ra-men/",
    "fonetica": "fo-RA-men",
    "etymology": "Del latín foramen ('agujero, perforación').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Esqueleto General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Orificio, agujero o perforación en un hueso que permite el paso de nervios, arterias o venas hacia cavidades corporales adyacentes.",
    "defTecnica": "Orificio en hueso para paso de nervios o vasos sanguíneos esenciales.",
    "simpleExplanation": "Un hueco o ventanita redonda en el hueso para que los cables nerviosos y tuberías de sangre puedan cruzar.",
    "explicacionSencilla": "Hueco para nervio o sangre.",
    "everydayTitle": "Ventanitas de salida en las vértebras",
    "everydayExample": "Entre cada par de vértebras hay un foramen intervertebral por donde sale el nervio ciático hacia tu pierna.",
    "analogia": "Como el orificio con aro de goma en un escritorio de oficina por donde descienden los cables de la computadora sin rasparse.",
    "clinicalTitle": "Estenosis foraminal y radiculopatía",
    "clinicalRelevance": "El estrechamiento del foramen por osteofitos pinza la raíz nerviosa generando dolor irradiado, parestesias y debilidad motora.",
    "clinicalCase": "Ciática por estenosis foraminal L4-L5 con reflejo patelar disminuido.",
    "keyDetails": [
      {
        "label": "Geometría",
        "value": "Perforación circular u ovalada"
      },
      {
        "label": "Contenido",
        "value": "Paquete vasculonervioso"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Foramen magno y foramen intervertebral"
      }
    ],
    "svgType": "foramen",
    "termino": "Foramen"
  },
  {
    "id": "hiato",
    "name": "Hiato",
    "pronunciation": "/ia-to/",
    "fonetica": "ia-TO",
    "etymology": "Del latín hiatus ('abertura, hendidura, separación').",
    "category": "musculos",
    "categoryLabel": "Anatomía Topográfica",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Esqueleto y Fascias",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Abertura, hendidura o espacio libre natural en un músculo, fascia o hueso que permite el tránsito de un conducto o vaso sanguíneo.",
    "defTecnica": "Abertura en estructura anatómica para el paso continuado de otra estructura vital.",
    "simpleExplanation": "Una rendija o puerta abierta entre fibras musculares o fascias para dejar pasar un vaso o tubo sin estrangularlo.",
    "explicacionSencilla": "Rendija por donde pasa algo.",
    "everydayTitle": "El paso del esófago a través del diafragma",
    "everydayExample": "El hiato esofágico del diafragma permite que los alimentos pasen del tórax al estómago mientras respiras con normalidad.",
    "analogia": "Como un ojal elástico en una prenda de vestir por donde pasa un botón grueso manteniéndolo en su sitio.",
    "clinicalTitle": "Hernias y atrapamientos hiatales",
    "clinicalRelevance": "La laxitud del hiato permite la protrusión anormal de órganos provocando reflujo gastroesofágico o congestión venosa.",
    "clinicalCase": "Hernia hiatal diafragmática que empeora la mecánica ventilatoria costodiafragmática.",
    "keyDetails": [
      {
        "label": "Estructura",
        "value": "Abertura delimitada por bordes musculares o fibrosos"
      },
      {
        "label": "Función",
        "value": "Transición entre compartimentos"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Hiato esofágico y hiato safeno"
      }
    ],
    "svgType": "hiato",
    "termino": "Hiato"
  },
  {
    "id": "condilo",
    "name": "Cóndilo",
    "pronunciation": "/con-di-lo/",
    "fonetica": "CON-di-lo",
    "etymology": "Del griego kondylos ('nudo, protuberancia redondeada').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Esqueleto Apendicular y Cráneo",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Eminencia o protuberancia ósea redondeada, lisa y convexa que forma parte de una articulación móvil sinovial.",
    "defTecnica": "Protuberancia redondeada articular que rueda y desliza sobre una fosa cóncava.",
    "simpleExplanation": "Una bolita lisa en el extremo del hueso que encaja en un hueco para rodar suavemente.",
    "explicacionSencilla": "Bolita del hueso que encaja.",
    "everydayTitle": "Las ruedas del fémur al doblar la rodilla",
    "everydayExample": "Los cóndilos femorales actúan como dos cilindros lisos que ruedan sobre la tibia cuando haces sentadillas profundas.",
    "analogia": "Como las ruedas de un vagón de tren apoyadas sobre los rieles curvos de la vía.",
    "clinicalTitle": "Osteocondritis disecante de cóndilo",
    "clinicalRelevance": "La necrosis focal del cartílago y hueso subcondral del cóndilo femoral provoca bloqueos mecánicos y derrame articular.",
    "clinicalCase": "Lesión osteocondral en cóndilo femoral medial en corredor de fondo con dolor al cargar peso.",
    "keyDetails": [
      {
        "label": "Superficie",
        "value": "Cartílago hialino articular convexo"
      },
      {
        "label": "Mecánica",
        "value": "Rodamiento y deslizamiento artrocinemático"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Cóndilo femoral y cóndilo occipital"
      }
    ],
    "svgType": "condilo",
    "termino": "Cóndilo"
  },
  {
    "id": "epicondilo",
    "name": "Epicóndilo",
    "pronunciation": "/e-pi-con-di-lo/",
    "fonetica": "e-pi-CON-di-lo",
    "etymology": "Del griego epi ('sobre, encima') y kondylos ('cóndilo').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "pierna",
    "regionLabel": "Miembro Superior e Inferior",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Eminencia ósea no articular situada por encima o al lado de un cóndilo que sirve de inserción a ligamentos colaterales y tendones.",
    "defTecnica": "Protuberancia sobre un cóndilo para la fijación de ligamentos y músculos estabilizadores.",
    "simpleExplanation": "Un bultico situado justo encima de la bolita del hueso donde se amarran ligamentos fuertes.",
    "explicacionSencilla": "Bultico encima de la bolita.",
    "everydayTitle": "El codo de tenista y la rodilla del corredor",
    "everydayExample": "En el codo, el epicóndilo lateral es el bulto donde se originan todos los músculos que levantan la muñeca.",
    "analogia": "Como un gancho de amarre instalado en el techo de un remolque para sujetar cuerdas tensoras.",
    "clinicalTitle": "Epicondilalgia y fricción de cintilla iliotibial",
    "clinicalRelevance": "La sobrecarga por movimientos repetitivos inflama la entesis del epicóndilo produciendo dolor incapacitante al prensar o flexionar.",
    "clinicalCase": "Epicondilitis lateral en oficinista por digitación y uso de ratón prolongado.",
    "keyDetails": [
      {
        "label": "Naturaleza",
        "value": "Eminencia no articular (extraarticular)"
      },
      {
        "label": "Función",
        "value": "Inserción de ligamentos colaterales y tendones"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Epicóndilo lateral del codo y fémur"
      }
    ],
    "svgType": "epicondilo",
    "termino": "Epicóndilo"
  },
  {
    "id": "tuberculo",
    "name": "Tubérculo",
    "pronunciation": "/tu-ber-cu-lo/",
    "fonetica": "tu-BER-cu-lo",
    "etymology": "Del latín tuberculum ('pequeño bulto, protuberancia').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Esqueleto General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Protuberancia ósea pequeña, redondeada o nodular que proporciona anclaje firme a un tendón o fascículo ligamentoso.",
    "defTecnica": "Protuberancia pequeña y redondeada en la superficie ósea para inserción fascial o ligamentosa.",
    "simpleExplanation": "Un bultico chiquito y firme en el hueso que sirve como agarradera para un tendón delgado.",
    "explicacionSencilla": "Bultico chiquito del hueso.",
    "everydayTitle": "El anclaje de la rodilla en la tibia",
    "everydayExample": "El tubérculo de Gerdy en la tibia es el bulto externo donde se inserta la banda iliotibial estabilizando la marcha.",
    "analogia": "Como un pequeño botón de anclaje donde se engancha el cable elástico de una carpa.",
    "clinicalTitle": "Síndrome de fricción en tubérculos óseos",
    "clinicalRelevance": "La fricción excesiva entre una banda fascial y un tubérculo óseo genera bursitis y tendinopatía de fricción.",
    "clinicalCase": "Dolor punzante sobre el tubérculo de Gerdy en corredor tras aumento repentino de kilometraje.",
    "keyDetails": [
      {
        "label": "Tamaño",
        "value": "Pequeño / discreto"
      },
      {
        "label": "Función",
        "value": "Anclaje de bandas y ligamentos"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Tubérculo de Gerdy y tubérculo mayor del húmero"
      }
    ],
    "svgType": "tuberculo",
    "termino": "Tubérculo"
  },
  {
    "id": "tuberosidad",
    "name": "Tuberosidad",
    "pronunciation": "/tu-be-ro-si-dad/",
    "fonetica": "tu-be-ro-si-DAD",
    "etymology": "Del latín tuberositas ('masa nudosa, protuberancia amplia').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Esqueleto General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Gran protuberancia ósea ancha, redondeada y rugosa adaptada biomecánicamente para anclar tendones de músculos potentes.",
    "defTecnica": "Protuberancia grande y rugosa en hueso que soporta tracciones mecánicas elevadas.",
    "simpleExplanation": "Un bulto grande y áspero en el hueso diseñado para soportar los tirones de los músculos más fuertes del cuerpo.",
    "explicacionSencilla": "Bulto grande y áspero.",
    "everydayTitle": "El bulto debajo de tu rodilla y los huesos de sentarse",
    "everydayExample": "Justo debajo de la rótula palpas la tuberosidad tibial anterior, donde se inserta el tendón rotuliano que sostiene todo tu peso al patear.",
    "analogia": "Como una placa de hierro rugosa soldada con múltiples remaches para sujetar una grúa de carga pesada.",
    "clinicalTitle": "Apofisitis por tracción de Osgood-Schlatter",
    "clinicalRelevance": "En jóvenes deportistas, la tracción repetida del cuádriceps sobre la tuberosidad tibial inmadura causa inflamación y prominencia ósea dolorosa.",
    "clinicalCase": "Osgood-Schlatter bilateral en adolescente practicante de baloncesto con dolor al arrodillarse.",
    "keyDetails": [
      {
        "label": "Tamaño y textura",
        "value": "Grande, prominente y rugosa"
      },
      {
        "label": "Fuerza mecánica",
        "value": "Soporta tracciones de alta tensión"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Tuberosidad tibial y tuberosidad isquiática"
      }
    ],
    "svgType": "tuberosidad",
    "termino": "Tuberosidad"
  },
  {
    "id": "espina",
    "name": "Espina",
    "pronunciation": "/es-pi-na/",
    "fonetica": "es-PI-na",
    "etymology": "Del latín spina ('espina, púa, púa afilada').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Esqueleto Axial y Pelvis",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Proyección ósea puntiaguda, alargada o delgada que emerge de un hueso proporcionando inserción y actuando como referencia anatómica de superficie.",
    "defTecnica": "Proyección ósea delgada y puntiaguda que sirve de anclaje ligamentoso o muscular.",
    "simpleExplanation": "Una puntica filosa o cresta delgada del hueso que sobresale como una pequeña espina guía.",
    "explicacionSencilla": "Puntica filosa del hueso.",
    "everydayTitle": "Los huesos salientes en el frente de tu cadera",
    "everydayExample": "Al ponerte las manos en la cintura, tus pulgares tocan la espina ilíaca anterosuperior, clave para medir la longitud de las piernas.",
    "analogia": "Como la púa de una flecha o mástil delgado que sobresale para enganchar una guía tensora.",
    "clinicalTitle": "Palpación en evaluación pelviana y dismetría",
    "clinicalRelevance": "La altura comparativa de las espinas ilíacas permite diagnosticar báscula pélvica, torsión sacra o dismetría de miembros inferiores.",
    "clinicalCase": "Asimetría de espinas ilíacas posterosuperiores por anteversión hemipélvica derecha.",
    "keyDetails": [
      {
        "label": "Forma",
        "value": "Puntiaguda, afilada y esbelta"
      },
      {
        "label": "Relevancia clínica",
        "value": "Hito palpatorio para mediciones antropométricas"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Espina ilíaca anterosuperior y espina de la escápula"
      }
    ],
    "svgType": "espina",
    "termino": "Espina"
  },
  {
    "id": "cresta",
    "name": "Cresta",
    "pronunciation": "/cres-ta/",
    "fonetica": "CRES-ta",
    "etymology": "Del latín crista ('penacho, reborde saliente').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Pelvis y Esqueleto General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Borde, reborde o margen óseo alargado, estrecho y prominente que divide superficies y sirve de anclaje para capas musculares extensas.",
    "defTecnica": "Borde óseo prominente y alargado que delimita superficies y ancla paredes musculares.",
    "simpleExplanation": "Un filo largo y sobresaliente en el hueso, como el lomo de un libro cerrado.",
    "explicacionSencilla": "Filo largo del hueso.",
    "everydayTitle": "El borde curvo superior de tus caderas",
    "everydayExample": "La cresta ilíaca es el filo óseo curvo donde apoyas las manos cuando descansas en posición de jarra.",
    "analogia": "Como la cresta afilada de una cordillera montañosa que separa dos valles.",
    "clinicalTitle": "Dolor miofascial en cresta ilíaca",
    "clinicalRelevance": "La inserción del cuadrado lumbar y glúteo medio en la cresta ilíaca es un punto gatillo frecuente en pacientes con lumbalgia crónica.",
    "clinicalCase": "Puntos gatillo en cresta ilíaca con dolor irradiado a nalga por sobrecarga en hiperlordosis.",
    "keyDetails": [
      {
        "label": "Forma",
        "value": "Reborde lineal prominente y sinuoso"
      },
      {
        "label": "Inserciones",
        "value": "Músculos anchos del abdomen y glúteos"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Cresta ilíaca y cresta supracondílea"
      }
    ],
    "svgType": "cresta",
    "termino": "Cresta"
  },
  {
    "id": "linea",
    "name": "Línea",
    "pronunciation": "/li-ne-a/",
    "fonetica": "LI-ne-a",
    "etymology": "Del latín linea ('hilo de lino, trazo fino').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Esqueleto General",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Elevación o reborde óseo sutil, estrecho y alargado, menos prominente que una cresta, producido por la tracción suave y continua de una fascia o músculo.",
    "defTecnica": "Elevación ósea leve y alargada que marca la separación o anclaje de fibras musculares.",
    "simpleExplanation": "Una rayita o cordón sobresalido en el hueso provocada por los músculos que tiran de ella.",
    "explicacionSencilla": "Rayita sobresalida del hueso.",
    "everydayTitle": "El carril de los aductores en la parte trasera del fémur",
    "everydayExample": "A lo largo de la cara posterior del fémur corre la línea áspera, donde se fijan los potentes músculos aductores del muslo.",
    "analogia": "Como una costura en relieve en la suela de un zapato deportivo.",
    "clinicalTitle": "Puntos de inserción y periostitis femoral",
    "clinicalRelevance": "Fuerzas de cizallamiento continuas a lo largo de la línea áspera producen entesopatías en velocistas y saltadores.",
    "clinicalCase": "Dolor en cara medial del muslo por sobrecarga de aductores en su anclaje a la línea áspera.",
    "keyDetails": [
      {
        "label": "Perfil",
        "value": "Relieve bajo y alargado (sutil)"
      },
      {
        "label": "Origen",
        "value": "Modelado óseo por tracción muscular"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Línea áspera del fémur y línea del sóleo"
      }
    ],
    "svgType": "linea",
    "termino": "Línea"
  },
  {
    "id": "acetabulo",
    "name": "Acetábulo",
    "pronunciation": "/a-ce-ta-bu-lo/",
    "fonetica": "a-ce-TA-bu-lo",
    "etymology": "Del latín acetabulum ('pequeña copa o vinagrera').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "pelvis",
    "regionLabel": "Pelvis y Cadera",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Gran cavidad cotiloidea hemisférica y profunda del hueso coxal formada por ilion, isquion y pubis, donde encaja la cabeza articular del fémur.",
    "defTecnica": "Cavidad donde encaja la cabeza del fémur para constituir la articulación coxofemoral.",
    "simpleExplanation": "El hueco en forma de cuenco hondo en la pelvis donde entra la bola de la pierna para que puedas caminar.",
    "explicacionSencilla": "Hueco donde entra la pierna.",
    "everydayTitle": "El encaje perfecto de tu cadera",
    "everydayExample": "Cuando te mantienes de pie en una sola pierna, todo el peso de tu tronco se transmite a través del techo de ese acetábulo.",
    "analogia": "Como una taza de café honda donde encaja una esfera maciza permitiéndole girar sin salirse.",
    "clinicalTitle": "Displasia del desarrollo de la cadera (DDC)",
    "clinicalRelevance": "Un acetábulo plano y poco profundo no cubre adecuadamente la cabeza femoral provocando luxaciones precoces y artrosis prematura.",
    "clinicalCase": "Displasia acetabular derecha en adulto joven con choque femoroacetabular e inicio de coxartrosis.",
    "keyDetails": [
      {
        "label": "Geometría",
        "value": "Copa hemisférica profunda revestida de cartílago"
      },
      {
        "label": "Huesos formativos",
        "value": "Ilion, isquion y pubis"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Articulación coxofemoral (cadera)"
      }
    ],
    "svgType": "acetabulo",
    "termino": "Acetábulo"
  },
  {
    "id": "foramen-magno",
    "name": "Foramen magno",
    "pronunciation": "/fo-ra-men mag-no/",
    "fonetica": "fo-RA-men MAG-no",
    "etymology": "Del latín foramen magnum ('gran orificio o gran agujero').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "craneo",
    "regionLabel": "Base del Cráneo",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Gran orificio oval en la base del cráneo (hueso occipital) que comunica la cavidad craneal con el conducto vertebral, dando paso al bulbo raquídeo y médula espinal.",
    "defTecnica": "Orificio en la base del cráneo por donde transita la médula espinal y arterias vertebrales.",
    "simpleExplanation": "El gran hueco en el piso del cráneo por donde baja el cable maestro del cerebro hacia la espalda.",
    "explicacionSencilla": "Hueco por donde baja la médula.",
    "everydayTitle": "La autopista principal del sistema nervioso",
    "everydayExample": "A través de este orificio el cerebro envía en milisegundos las órdenes motoras que mueven tus dedos y piernas.",
    "analogia": "Como el túnel principal de salida por donde el cable troncal de fibra óptica abandona el edificio central.",
    "clinicalTitle": "Malformación de Chiari y herniación amigdalina",
    "clinicalRelevance": "El descenso de las amígdalas cerebelosas a través del foramen magno comprime el tronco encefálico alterando la dinámica del LCR.",
    "clinicalCase": "Cefalea suboccipital pulsátil que empeora con maniobras de Valsalva por Chiari tipo I.",
    "keyDetails": [
      {
        "label": "Ubicación",
        "value": "Hueso occipital en base craneal"
      },
      {
        "label": "Estructuras clave",
        "value": "Bulbo raquídeo, arterias vertebrales y nervios accesorios"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Unión bulbomedular en base de cráneo"
      }
    ],
    "svgType": "foramen_magno",
    "termino": "Foramen magno"
  },
  {
    "id": "silla-turca",
    "name": "Silla turca",
    "pronunciation": "/si-lla tur-ca/",
    "fonetica": "SI-lla TUR-ca",
    "etymology": "Del latín sella turcica, por su semejanza con la montura de caballo otomana.",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "craneo",
    "regionLabel": "Cráneo Profundo",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Depresión ósea transversal en la cara superior del cuerpo del hueso esfenoides que aloja y protege la glándula hipófisis (pituitaria).",
    "defTecnica": "Depresión en hueso esfenoides destinada a albergar la glándula hipófisis.",
    "simpleExplanation": "Una sillita tallada en el centro del cráneo donde descansa la glándula reina de las hormonas.",
    "explicacionSencilla": "Sillita para la glándula.",
    "everydayTitle": "La cuna protegida del centro de tu cabeza",
    "everydayExample": "En el centro geométrico de tu cráneo, la hipófisis reposa en esta silla coordinando tu crecimiento, tiroides y metabolismo.",
    "analogia": "Como la butaca acolchada del comandante en el centro del puente de mando de un barco.",
    "clinicalTitle": "Adenomas hipofisarios y compresión quiasmática",
    "clinicalRelevance": "El crecimiento de un tumor dentro de la silla turca erosiona sus paredes óseas y comprime el quiasma óptico causando hemianopsia bitemporal.",
    "clinicalCase": "Pérdida de visión periférica bilateral en paciente con macroadenoma expansivo en la silla turca.",
    "keyDetails": [
      {
        "label": "Hueso",
        "value": "Esfenoides (fosa craneal media)"
      },
      {
        "label": "Órgano protegido",
        "value": "Glándula hipófisis (pituitaria)"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Fosa hipofisaria en el centro del cráneo"
      }
    ],
    "svgType": "silla_turca",
    "termino": "Silla turca"
  },
  {
    "id": "lamina-cribosa",
    "name": "Lámina cribosa",
    "pronunciation": "/la-mi-na cri-bo-sa/",
    "fonetica": "LA-mi-na cri-BO-sa",
    "etymology": "Del latín lamina y cribrum ('criba, colador con múltiples agujeros').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "craneo",
    "regionLabel": "Cráneo Anterior y Nariz",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Porción horizontal y perforada del hueso etmoides en el techo de las fosas nasales que permite el paso de los filetes del nervio olfatorio hacia el bulbo olfatorio.",
    "defTecnica": "Placa con diminutos orificios para el paso de las fibras del nervio olfatorio (I par).",
    "simpleExplanation": "Una coladera de hueso en el techo de la nariz por donde pasan los cablecitos que captan los olores.",
    "explicacionSencilla": "Coladera del olfato.",
    "everydayTitle": "El puente sensitivo del olfato",
    "everydayExample": "Cuando hueles una flor o café recién tostado, las moléculas químicas envían señales eléctricas a través de los poros de esta lámina.",
    "analogia": "Como un colador metálico de cocina con decenas de agujeritos pequeños para filtrar agua.",
    "clinicalTitle": "Anosmia y fístula de LCR postraumática",
    "clinicalRelevance": "Un traumatismo frontal puede fracturar la frágil lámina cribosa provocando pérdida del olfato y salida de líquido cefalorraquídeo por la nariz (rinorrea de LCR).",
    "clinicalCase": "Rinorrea clara de líquido cefalorraquídeo tras golpe frontal en accidente ciclista.",
    "keyDetails": [
      {
        "label": "Hueso",
        "value": "Etmoides (fosa craneal anterior)"
      },
      {
        "label": "Función",
        "value": "Paso de axones del I par craneal (nervio olfatorio)"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Techo de la cavidad nasal"
      }
    ],
    "svgType": "lamina_cribosa",
    "termino": "Lámina cribosa"
  },
  {
    "id": "promontorio",
    "name": "Promontorio",
    "pronunciation": "/pro-mon-to-rio/",
    "fonetica": "pro-mon-TO-rio",
    "etymology": "Del latín promontorium ('montaña saliente hacia adelante').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "pelvis",
    "regionLabel": "Columna y Pelvis",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Borde anterior y saliente prominente del cuerpo de la primera vértebra sacra (S1) que delimita el estrecho superior de la pelvis.",
    "defTecnica": "Borde anterior saliente de la 1ª vértebra sacra que marca la entrada superior a la pelvis menor.",
    "simpleExplanation": "La puntica sobresaliente del sacro que se asoma hacia adelante marcando la entrada de la pelvis.",
    "explicacionSencilla": "Puntica sobresaliente del sacro.",
    "everydayTitle": "El escalón de transición entre la espalda baja y la pelvis",
    "everydayExample": "Al estar erguido, la curva de la zona lumbar se apoya sobre el promontorio transfiriendo el peso hacia las alas del sacro.",
    "analogia": "Como un acantilado o proa de barco que sobresale al frente en la entrada de un puerto.",
    "clinicalTitle": "Pelvimetría obstétrica y espondilolistesis",
    "clinicalRelevance": "La distancia entre el promontorio y el pubis (diámetro conjugado) determina la viabilidad del canal de parto natural.",
    "clinicalCase": "Deslizamiento L5 sobre el promontorio sacro (espondilolistesis ístmica de grado II).",
    "keyDetails": [
      {
        "label": "Ubicación",
        "value": "Borde anterosuperior de la vértebra S1"
      },
      {
        "label": "Relevancia",
        "value": "Límite posterior del estrecho superior pelviano"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Entrada de la pelvis menor"
      }
    ],
    "svgType": "promontorio",
    "termino": "Promontorio"
  },
  {
    "id": "trocanter-mayor",
    "name": "Trocánter mayor",
    "pronunciation": "/tro-can-ter ma-yor/",
    "fonetica": "tro-CAN-ter ma-YOR",
    "etymology": "Del griego trochos ('rueda, polea') por su acción rotatoria biomecánica.",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "pierna",
    "regionLabel": "Cadera y Muslo",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Gran saliente cuadrilátera y rugosa en la porción lateral del extremo proximal del fémur donde se insertan los potentes músculos glúteos y rotadores.",
    "defTecnica": "Gran saliente lateral en el extremo superior del fémur para la inserción glútea y palanca abductora.",
    "simpleExplanation": "El bulto duro que sientes al lado de la cadera donde se pegan los glúteos para mantenerte en equilibrio.",
    "explicacionSencilla": "Bulto al lado de la cadera.",
    "everydayTitle": "El ancla de soporte lateral de la pierna",
    "everydayExample": "Al dormir de lado sobre un colchón muy firme, sientes la presión justamente sobre el trocánter mayor del fémur.",
    "analogia": "Como el brazo largo de una palanca lateral de elevación que multiplica la fuerza del motor.",
    "clinicalTitle": "Síndrome de dolor trocantérico mayor (bursitis trocantérea)",
    "clinicalRelevance": "La fricción de la fascia lata sobre el trocánter provoca bursitis trocantérea, una de las causas más frecuentes de dolor lateral de cadera.",
    "clinicalCase": "Dolor agudo al caminar y al dormir sobre el lado afectado en paciente con trocanteritis.",
    "keyDetails": [
      {
        "label": "Morfología",
        "value": "Saliente ósea prominente lateral"
      },
      {
        "label": "Músculos insertados",
        "value": "Glúteo medio, glúteo menor y piriforme"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Lado externo superior del muslo"
      }
    ],
    "svgType": "trocanter_mayor",
    "termino": "Trocánter mayor"
  },
  {
    "id": "maleolo",
    "name": "Maléolo",
    "pronunciation": "/ma-le-o-lo/",
    "fonetica": "ma-LE-o-lo",
    "etymology": "Del latín malleolus ('pequeño martillo').",
    "category": "huesos",
    "categoryLabel": "Anatomía Ósea",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "tobillo",
    "regionLabel": "Tobillo y Pie",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Eminencia ósea redondeada visible a cada lado de la articulación talocrural (maléolo medial de la tibia y lateral del peroné), formando la mortaja.",
    "defTecnica": "Saliente ósea a cada lado del tobillo que estabiliza el astrágalo en la mortaja articular.",
    "simpleExplanation": "Los dos huesitos que sobresalen a los lados del tobillo para abrazar el pie y evitar que se tuerza.",
    "explicacionSencilla": "Huesitos del tobillo.",
    "everydayTitle": "Las columnas de amarre de tus tobillos",
    "everydayExample": "El huesito interno es el maléolo tibial y el externo es el del peroné; juntos sujetan tu pie en cada pisada irregular.",
    "analogia": "Como las dos tenazas laterales de una pinza de freno que abrazan y estabilizan el disco.",
    "clinicalTitle": "Fracturas maleolares y clasificación de Weber",
    "clinicalRelevance": "Una torsión violenta del tobillo fractura uno o ambos maléolos rompiendo la congruencia de la mortaja articular.",
    "clinicalCase": "Fractura bimaleolar por mecanismo de supinación-rotación externa con edema y equimosis.",
    "keyDetails": [
      {
        "label": "Huesos",
        "value": "Medial (tibia) y lateral (peroné)"
      },
      {
        "label": "Función",
        "value": "Conformación de la mortaja tibioperoneoastragalina"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Maléolos del tobillo"
      }
    ],
    "svgType": "maleolo",
    "termino": "Maléolo"
  },
  {
    "id": "trigono-femoral",
    "name": "Trígono femoral",
    "pronunciation": "/tri-go-no fe-mo-ral/",
    "fonetica": "tri-GO-no fe-mo-RAL",
    "etymology": "Del griego trigonon ('triángulo de tres esquinas') y del latín femoralis ('del muslo').",
    "category": "musculos",
    "categoryLabel": "Anatomía Topográfica",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "pierna",
    "regionLabel": "Muslo y Pelvis",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Espacio anatómico triangular subfascial en la cara anterior y superior del muslo (triángulo de Scarpa) por donde transita el paquete neurovascular femoral.",
    "defTecnica": "Depresión triangular anterior del muslo que alberga el nervio, arteria y vena femorales.",
    "simpleExplanation": "Un triangulito hundido justo debajo de la ingle por donde pasa la tubería principal de sangre hacia la pierna.",
    "explicacionSencilla": "Triangulito hundido del muslo.",
    "everydayTitle": "Donde se toma el pulso de la pierna en la ingle",
    "everydayExample": "Si presionas suavemente dos dedos en el centro de tu ingle, sientes los latidos de la arteria femoral cruzando este trígono.",
    "analogia": "Como una encrucijada triangular de autopistas donde se agrupan los cables y tuberías maestras de una ciudad.",
    "clinicalTitle": "Cateterismo y hernias femorales",
    "clinicalRelevance": "El trígono femoral es el punto de acceso vascular preferido para cateterismos cardíacos e intervenciones de urgencia.",
    "clinicalCase": "Hematoma pulsátil en el trígono femoral tras punción diagnóstica de la arteria femoral.",
    "keyDetails": [
      {
        "label": "Límites",
        "value": "Ligamento inguinal, sartorio y aductor largo"
      },
      {
        "label": "Contenido (NAVE)",
        "value": "Nervio femoral, arteria femoral, vena femoral y ganglios"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Triángulo de Scarpa en la ingle"
      }
    ],
    "svgType": "trigono_femoral",
    "termino": "Trígono femoral"
  },
  {
    "id": "fosa-poplitea",
    "name": "Fosa poplítea",
    "pronunciation": "/fo-sa po-pli-te-a/",
    "fonetica": "FO-sa po-PLI-te-a",
    "etymology": "Del latín poples ('corva o parte posterior de la rodilla').",
    "category": "musculos",
    "categoryLabel": "Anatomía Topográfica",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "rodilla",
    "regionLabel": "Rodilla y Pierna",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Espacio romboidal situado en la cara posterior de la articulación de la rodilla delimitado por músculos isquiotibiales y gastrocnemios, protegido por grasa.",
    "defTecnica": "Depresión en rombo detrás de la rodilla que da paso a vasos poplíteos y nervios ciáticos.",
    "simpleExplanation": "El hueco blando en forma de rombo que tienes detrás de la rodilla, conocido popularmente como la corva.",
    "explicacionSencilla": "Hueco detrás de la rodilla.",
    "everydayTitle": "La corva detrás de tu rodilla",
    "everydayExample": "Cuando te sientas con las piernas colgando, notas el hueco suave detrás de la articulación: es la fosa poplítea.",
    "analogia": "Como el fuelle flexible detrás de una puerta corrediza que resguarda mangueras hidráulicas cuando la puerta se pliega.",
    "clinicalTitle": "Quiste de Baker y pulso poplíteo",
    "clinicalRelevance": "La acumulación de líquido articular en la bolsa del semimembranoso forma el quiste de Baker, provocando tensión y limitación de la flexión.",
    "clinicalCase": "Masa indolora pero tensa en la fosa poplítea izquierda tras meniscopatía medial crónica.",
    "keyDetails": [
      {
        "label": "Límites",
        "value": "Bíceps femoral, semitendinoso, semimembranoso y gemelos"
      },
      {
        "label": "Contenido",
        "value": "Arteria y vena poplítea, nervio tibial y peroneo común"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Rombo poplíteo posterior"
      }
    ],
    "svgType": "fosa_poplitea",
    "termino": "Fosa poplítea"
  },
  {
    "id": "retinaculo",
    "name": "Retináculo",
    "pronunciation": "/re-ti-na-cu-lo/",
    "fonetica": "re-ti-NA-cu-lo",
    "etymology": "Del latín retinaculum ('cuerda, rienda, lazo que retiene').",
    "category": "musculos",
    "categoryLabel": "Tejido Conectivo y Fascias",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "pierna",
    "regionLabel": "Tobillo, Muñeca y Pie",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Banda gruesa de tejido conectivo fibroso denso que sujeta y retiene tendones contra el hueso, impidiendo el efecto cuerda de arco durante la contracción muscular.",
    "defTecnica": "Banda fibrosa que mantiene los tendones adosados a los planos óseos al flexionar o extender.",
    "simpleExplanation": "Una correa de reloj o pulsera interna que mantiene los tendones pegaditos al hueso para que no salten como la cuerda de un arco.",
    "explicacionSencilla": "Correa que sujeta tendones.",
    "everydayTitle": "La pulsera que sujeta los tendones de tu empeine",
    "everydayExample": "Al levantar con fuerza los dedos de los pies, los tendones del empeine se tensan pero no se despegan del tobillo gracias al retináculo extensor.",
    "analogia": "Como las anillas metálicas a lo largo de una caña de pescar que mantienen el hilo adherido a la vara.",
    "clinicalTitle": "Ruptura de retináculo y tendón luxado",
    "clinicalRelevance": "La ruptura del retináculo peroneo en esguinces de tobillo permite la subluxación anterior de los tendones peroneos provocando chasquidos dolorosos.",
    "clinicalCase": "Subluxación recidivante del tendón peroneo lateral corto con chasquido palpable tras trauma deportivo.",
    "keyDetails": [
      {
        "label": "Composición",
        "value": "Fascia profunda engrosada"
      },
      {
        "label": "Función mecánica",
        "value": "Evita el bowstringing (cuerda de arco) tendinoso"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Retináculo extensor y flexor del tobillo"
      }
    ],
    "svgType": "retinaculo",
    "termino": "Retináculo"
  },
  {
    "id": "menisco",
    "name": "Menisco",
    "pronunciation": "/me-nis-co/",
    "fonetica": "me-NIS-co",
    "etymology": "Del griego mēniskos ('pequeña luna, medialuna').",
    "category": "articulaciones",
    "categoryLabel": "Cartílago y Meniscos",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "rodilla",
    "regionLabel": "Rodilla",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Estructura fibrocartilaginosa semilunar bicóncava intraarticular que mejora la congruencia entre los cóndilos femorales convexos y los platillos tibiales planos, distribuyendo presiones.",
    "defTecnica": "Fibrocartílago en forma de C que absorbe impactos y congruencia las superficies articulares de la rodilla.",
    "simpleExplanation": "Una almohadilla de goma en forma de medialuna que amortigua los golpes entre el muslo y la pierna al saltar.",
    "explicacionSencilla": "Almohadilla en luna de la rodilla.",
    "everydayTitle": "El amortiguador interno de cada salto",
    "everydayExample": "Al caer de un salto o bajar gradas, el menisco multiplica el área de contacto repartiendo los kilos de impacto para no desgastar el cartílago.",
    "analogia": "Como una almohadilla de silicona debajo de una pata de mesa pesada sobre un suelo de baldosas lisas.",
    "clinicalTitle": "Roturas meniscales en asa de cubo",
    "clinicalRelevance": "Un giro brusco con el pie clavado desgarra el menisco; el fragmento desprendido puede bloquear mecánicamente la extensión completa de la rodilla.",
    "clinicalCase": "Bloqueo articular agudo a 30° de flexión tras torsión en fútbol con test de McMurray positivo.",
    "keyDetails": [
      {
        "label": "Geometría",
        "value": "Medialuna fibrocartilaginosa (C medial, O lateral)"
      },
      {
        "label": "Vascularización",
        "value": "Zona roja (periférica vascular) y zona blanca (avascular)"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Menisco medial y lateral de la rodilla"
      }
    ],
    "svgType": "menisco",
    "termino": "Menisco"
  },
  {
    "id": "labrum",
    "name": "Labrum",
    "pronunciation": "/la-brum/",
    "fonetica": "LA-brum",
    "etymology": "Del latín labrum ('borde, labio').",
    "category": "articulaciones",
    "categoryLabel": "Cartílago y Rodetes",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "cadera",
    "regionLabel": "Cadera y Hombro",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Anillo o rodete de fibrocartílago denso unido al borde óseo de cavidades articulares cotiloideas que profundiza la concavidad y optimiza el sellado hidrostático.",
    "defTecnica": "Anillo de fibrocartílago que profundiza cavidades articulares para evitar luxaciones.",
    "simpleExplanation": "Un labio de goma que rodea el borde del cuenco para hacerlo más hondo y que la bola no se salga de su lugar.",
    "explicacionSencilla": "Borde que ahonda el hueco.",
    "everydayTitle": "El sello que asegura la cabeza de tu fémur o húmero",
    "everydayExample": "En la cadera, el labrum acetabular crea un vacío de succión que mantiene la cabeza del fémur firmemente encajada durante movimientos amplios.",
    "analogia": "Como el aro de goma de una ventosa que crea vacío al apoyarse en un cristal impidiendo que se desprenda.",
    "clinicalTitle": "Desgarro del labrum acetabular o glenoideo (SLAP)",
    "clinicalRelevance": "El pinzamiento femoroacetabular repetido desgarra el labrum, generando dolor inguinal punzante y pérdida progresiva del sellado articular.",
    "clinicalCase": "Dolor inguinal profundo en posición de sentadilla con signo de FADIR positivo por rotura labral.",
    "keyDetails": [
      {
        "label": "Estructura",
        "value": "Anillo fibrocartilaginoso perimetral"
      },
      {
        "label": "Mecanismo",
        "value": "Profundización de cavidad y sellado por succión"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Labrum acetabular y labrum glenoideo"
      }
    ],
    "svgType": "labrum",
    "termino": "Labrum"
  },
  {
    "id": "capsula-articular",
    "name": "Cápsula articular",
    "pronunciation": "/cap-su-la ar-ti-cu-lar/",
    "fonetica": "CAP-su-la ar-ti-cu-LAR",
    "etymology": "Del latín capsula ('pequeña caja, estuche cerrado').",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "general",
    "regionLabel": "Articulaciones Sinoviales",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Membrana fibrosa densa en forma de manguito tubular que envuelve por completo la articulación diartrodial, sellando la cavidad sinovial y fijándose al periostio contiguo.",
    "defTecnica": "Membrana fibrosa envolvente que confina el líquido sinovial y contiene ligamentos intrínsecos.",
    "simpleExplanation": "Una bolsa o funda hermética que encierra la articulación para que el líquido lubricante no se escape.",
    "explicacionSencilla": "Bolsa que encierra la articulación.",
    "everydayTitle": "La funda hermética de tus articulaciones",
    "everydayExample": "Tu hombro está totalmente cubierto por una cápsula articular que es laxa para permitir vueltas completas pero firme para evitar luxaciones.",
    "analogia": "Como la bolsa hermética de fuelle que cubre las juntas mecánicas de un automóvil reteniendo la grasa adentro.",
    "clinicalTitle": "Capsulitis adhesiva (hombro congelado)",
    "clinicalRelevance": "La inflamación y fibrosis retráctil de la cápsula produce una pérdida drástica de todos los arcos de movimiento glenohumerales.",
    "clinicalCase": "Pérdida severa de rotación externa activa y pasiva en paciente con capsulitis adhesiva idiopática.",
    "keyDetails": [
      {
        "label": "Capas",
        "value": "Capa fibrosa externa y membrana sinovial interna"
      },
      {
        "label": "Propiedad",
        "value": "Rica en propioceptores de Ruffini y Pacini"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Cápsula glenohumeral y cápsula de rodilla"
      }
    ],
    "svgType": "capsula_articular",
    "termino": "Cápsula articular"
  },
  {
    "id": "cavidad-sinovial",
    "name": "Cavidad sinovial",
    "pronunciation": "/ca-vi-dad si-no-vial/",
    "fonetica": "ca-vi-DAD si-no-VIAL",
    "etymology": "Del latín cavitas ('hueco') y synovia (del griego syn y latín ovum: 'similar a la clara de huevo').",
    "category": "articulaciones",
    "categoryLabel": "Biomecánica Articular",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "general",
    "regionLabel": "Articulaciones Móviles",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Espacio físico interno sellado herméticamente por la membrana sinovial y la cápsula articular que contiene líquido sinovial con baja fricción.",
    "defTecnica": "Espacio articular cerrado bañado por líquido sinovial para nutrición y movimiento sin roce.",
    "simpleExplanation": "El espacio con lubricante adentro de la articulación que permite doblar los huesos sin que rechinen.",
    "explicacionSencilla": "Espacio con lubricante.",
    "everydayTitle": "La cámara de aceite de tus huesos",
    "everydayExample": "Cada vez que flexionas y extiendes la rodilla, los extremos de los huesos se deslizan dentro de esta cavidad sin tocarse en seco.",
    "analogia": "Como la cámara sellada de una suspensión hidráulica llena de aceite mineral para absorber impactos.",
    "clinicalTitle": "Derrame articular y artrocentesis",
    "clinicalRelevance": "Un traumatismo o proceso inflamatorio provoca hiperproducción de líquido distendiendo la cavidad sinovial con dolor y limitación.",
    "clinicalCase": "Hidrartros agudo de rodilla postrauma que requiere aspiración evacuadora y reposo.",
    "keyDetails": [
      {
        "label": "Líquido",
        "value": "Sinovial rico en ácido hialurónico y lubricina"
      },
      {
        "label": "Coeficiente de fricción",
        "value": "Casi nulo (0.001 - 0.01)"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Cavidad articular de la rodilla y cadera"
      }
    ],
    "svgType": "cavidad_sinovial",
    "termino": "Cavidad sinovial"
  },
  {
    "id": "dermatoma",
    "name": "Dermatoma",
    "pronunciation": "/der-ma-to-ma/",
    "fonetica": "der-ma-TO-ma",
    "etymology": "Del griego derma ('piel') y tome ('corte, sección').",
    "category": "musculos",
    "categoryLabel": "Neuroanatomía y Control Motor",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Sistema Nervioso Periférico",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Área o franja topográfica de la piel cuya inervación sensitiva procede de las fibras aferentes de una única raíz nerviosa o segmento medular espinal.",
    "defTecnica": "Zona de piel inervada sensitivamente por un solo nervio espinal.",
    "simpleExplanation": "Un pedazo o franja de piel conectado a un solo cable nervioso que sale de la columna vertebral.",
    "explicacionSencilla": "Pedazo de piel de un nervio.",
    "everydayTitle": "El mapa táctil que conecta tu piel con la columna",
    "everydayExample": "Si sientes hormigueo en la franja del empeine y el dedo gordo del pie, el fisioterapeuta sabe que la raíz L5 de tu columna lumbar está irritada.",
    "analogia": "Como el plano de zonas eléctricas de una casa donde un fusible individual controla los tomacorrientes de una sola habitación.",
    "clinicalTitle": "Exploración de sensibilidad en radiculopatías",
    "clinicalRelevance": "El test de tacto ligero y pinchazo con alfiler sobre los dermatomas clave localiza el nivel exacto de una lesión medular o hernia discal.",
    "clinicalCase": "Hipoestesia en banda a lo largo de la cara lateral del pie correspondiente al dermatoma S1.",
    "keyDetails": [
      {
        "label": "Inervación",
        "value": "Raíz dorsal aferente de un segmento medular"
      },
      {
        "label": "Distribución",
        "value": "Bandas metaméricas horizontales en tronco y longitudinales en extremidades"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Dermatoma L4 (cara medial de pierna) y C6 (pulgar)"
      }
    ],
    "svgType": "dermatoma",
    "termino": "Dermatoma"
  },
  {
    "id": "miotoma",
    "name": "Miotoma",
    "pronunciation": "/mio-to-ma/",
    "fonetica": "mio-TO-ma",
    "etymology": "Del griego mys ('músculo') y tome ('corte, segmento').",
    "category": "musculos",
    "categoryLabel": "Neuroanatomía y Control Motor",
    "categoryClass": "bg-cat-muscles/15 text-cat-muscles",
    "region": "general",
    "regionLabel": "Sistema Nervioso Periférico",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Grupo o conjunto de músculos esqueléticos inervados por los axones motores somáticos de una única raíz nerviosa o segmento de la médula espinal.",
    "defTecnica": "Músculos inervados por las fibras motoras de un solo nervio espinal.",
    "simpleExplanation": "El grupo de músculos que reciben la orden de encenderse desde un mismo cable de la médula espinal.",
    "explicacionSencilla": "Músculos de un solo nervio.",
    "everydayTitle": "La prueba de fuerza en la camilla",
    "everydayExample": "Cuando el terapeuta te pide levantar el dedo gordo contra su mano, está evaluando directamente la potencia del miotoma L5.",
    "analogia": "Como un interruptor maestro de tablero que enciende todas las bombillas de un pasillo al mismo tiempo.",
    "clinicalTitle": "Balance muscular manual y nivel neurológico",
    "clinicalRelevance": "La debilidad aislada en un movimiento articular orienta la raíz espinal afectada antes de solicitar resonancia magnética.",
    "clinicalCase": "Debilidad en dorsiflexión de tobillo (miotoma L4) tras hernia discal foraminal L3-L4.",
    "keyDetails": [
      {
        "label": "Inervación",
        "value": "Raíz ventral eferente somática"
      },
      {
        "label": "Evaluación",
        "value": "Fuerza muscular contra resistencia en acción clave"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Miotoma L5 (extensión del hallux) y C5 (abducción de hombro)"
      }
    ],
    "svgType": "miotoma",
    "termino": "Miotoma"
  },
  {
    "id": "esclerotoma",
    "name": "Esclerotoma",
    "pronunciation": "/es-cle-ro-to-ma/",
    "fonetica": "es-cle-ro-TO-ma",
    "etymology": "Del griego skleros ('duro, hueso') y tome ('sección').",
    "category": "huesos",
    "categoryLabel": "Embriología y Tejidos",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Embriogénesis y Columna",
    "level": "Avanzado (3er año)",
    "readingTime": "2 min",
    "technicalDef": "Subdivisión ventromedial del somita embrionario cuyas células mesenquimales migran para originar las vértebras, costillas y cartílagos del esqueleto axial.",
    "defTecnica": "Parte del somita que origina las estructuras óseas y cartilaginosas del esqueleto axial.",
    "simpleExplanation": "El pedacito de tejido en el embrión que con los meses se convierte en los huesos y discos de tu columna.",
    "explicacionSencilla": "Pedacito embrionario para hueso.",
    "everydayTitle": "El origen de tus vértebras antes de nacer",
    "everydayExample": "En las primeras semanas de vida en el vientre materno, las células del esclerotoma envuelven la notocorda para formar la columna.",
    "analogia": "Como las placas de encofrado y varillas de acero colocadas para fundir los pilares de concreto de una obra.",
    "clinicalTitle": "Dolor referido esclerotomal en fisioterapia",
    "clinicalRelevance": "El dolor esclerotomal se origina en estructuras somáticas profundas (periostio, facetas) y produce dolor difuso, sordo y mal delimitado.",
    "clinicalCase": "Dolor lumbar bajo y glúteo difuso de origen esclerotomal por artrosis facetaria L4-L5.",
    "keyDetails": [
      {
        "label": "Origen embrionario",
        "value": "Porción ventromedial del somita"
      },
      {
        "label": "Derivados adultos",
        "value": "Cuerpos vertebrales, arcos costales y base occipital"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Esclerotoma vertebral en formación"
      }
    ],
    "svgType": "esclerotoma",
    "termino": "Esclerotoma"
  },
  {
    "id": "somita",
    "name": "Somita",
    "pronunciation": "/so-mi-ta/",
    "fonetica": "so-MI-ta",
    "etymology": "Del griego soma ('cuerpo') con sufijo diminutivo -ita.",
    "category": "huesos",
    "categoryLabel": "Embriología y Morfogénesis",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Desarrollo Embrionario",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Bloque par y segmentario de mesodermo paraaxial que se forma a ambos lados del tubo neural en el embrión, diferenciándose en esclerotoma, miotoma y dermatoma.",
    "defTecnica": "Segmento de mesodermo embrionario que da origen metamerizado a músculos, vértebras y dermis.",
    "simpleExplanation": "Los bloques de construcción alineados en el embrión que dan forma organizada a la espalda, costillas y músculos.",
    "explicacionSencilla": "Bloques del embrión.",
    "everydayTitle": "Los ladrillos originales del cuerpo humano",
    "everydayExample": "Al igual que los vagones de un tren, los somitas aparecen uno a uno marcando la segmentación metamera de tu cuerpo.",
    "analogia": "Como bloques modulares de construcción Lego que se ensamblan en fila para formar una estructura compleja.",
    "clinicalTitle": "Segmentación metamerica y malformaciones congénitas",
    "clinicalRelevance": "Fallas en la separación de somitas embrionarios provocan hemivértebras y escoliosis congénita de progresión rápida.",
    "clinicalCase": "Hemivértebra torácica diagnosticada en niño con escoliosis congénita por defecto de segmentación somítica.",
    "keyDetails": [
      {
        "label": "Organización",
        "value": "Pares metaméricos a ambos lados de la línea media"
      },
      {
        "label": "Trilogía celular",
        "value": "Esclerotoma, miotoma y dermatoma"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Somitas paraaxiales embrionarios"
      }
    ],
    "svgType": "somita",
    "termino": "Somita"
  },
  {
    "id": "notocorda",
    "name": "Notocorda",
    "pronunciation": "/no-to-cor-da/",
    "fonetica": "no-to-COR-da",
    "etymology": "Del griego noton ('espalda, dorso') y chorde ('cuerda, tira').",
    "category": "articulaciones",
    "categoryLabel": "Embriología y Columna",
    "categoryClass": "bg-cat-joints/15 text-cat-joints",
    "region": "columna",
    "regionLabel": "Eje Embrionario y Columna",
    "level": "Intermedio (2do año)",
    "readingTime": "2 min",
    "technicalDef": "Varilla celular flexible longitudinal que define el eje primitivo del embrión cordado, induce la formación del tubo neural y persiste en el adulto como el núcleo pulposo discal.",
    "defTecnica": "Estructura embrionaria que guía el desarrollo del sistema nervioso y la columna vertebral.",
    "simpleExplanation": "El eje o cuerda guía en el embrión alrededor de la cual se construye toda la columna vertebral.",
    "explicacionSencilla": "Eje guía de la columna.",
    "everydayTitle": "El núcleo gel de tus discos intervertebrales",
    "everydayExample": "El remanente directo de tu notocorda primitiva es el gel amortiguador (núcleo pulposo) en el centro de cada disco de tu columna.",
    "analogia": "Como el hilo guía o plomada que un maestro de obra coloca en el centro para levantar un muro perfectamente alineado.",
    "clinicalTitle": "Hernias de disco y cordomas",
    "clinicalRelevance": "El desplazamiento del remanente notocordal (núcleo pulposo) hacia el canal medular comprime las raíces nerviosas provocando radiculalgia.",
    "clinicalCase": "Hernia discal extruida L5-S1 con migración del material notocordal hacia el espacio epidural.",
    "keyDetails": [
      {
        "label": "Rol inductor",
        "value": "Induce la placa neural y cuerpos vertebrales"
      },
      {
        "label": "Remanente adulto",
        "value": "Núcleo pulposo del disco intervertebral"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Eje longitudinal embrionario"
      }
    ],
    "svgType": "notocorda",
    "termino": "Notocorda"
  },
  {
    "id": "periostio",
    "name": "Periostio",
    "pronunciation": "/pe-rios-tio/",
    "fonetica": "pe-RIOS-tio",
    "etymology": "Del griego peri ('alrededor') y osteon ('hueso').",
    "category": "huesos",
    "categoryLabel": "Tejido Óseo y Envolturas",
    "categoryClass": "bg-cat-bones/15 text-cat-bones",
    "region": "general",
    "regionLabel": "Esqueleto General",
    "level": "Básico (1er año)",
    "readingTime": "2 min",
    "technicalDef": "Membrana vascularizada y densa de tejido conectivo fibroso que recubre todas las superficies óseas externas excepto las caras articulares, clave en nutrición, sensibilidad y crecimiento.",
    "defTecnica": "Membrana vascularizada ricamente inervada que cubre el hueso y permite su reparación y engrosamiento.",
    "simpleExplanation": "La piel viva y muy sensible que envuelve el hueso, llena de vasos de sangre que lo alimentan y hacen crecer.",
    "explicacionSencilla": "Piel del hueso que lo hace crecer.",
    "everydayTitle": "Por qué duele tanto un golpe en la espinilla",
    "everydayExample": "Si te golpeas la espinilla con la esquina de una mesa, el dolor agudo e insoportable proviene de las terminaciones nerviosas del periostio tibial.",
    "analogia": "Como la corteza viva de un árbol que protege el tronco de madera, conduce la savia y duele si se raspa.",
    "clinicalTitle": "Periostitis tibial en corredores (Shin Splints)",
    "clinicalRelevance": "El impacto repetido y la tracción del músculo sóleo o tibial posterior inflama el periostio tibial provocando dolor quemante al apoyar.",
    "clinicalCase": "Periostitis tibial medial bilateral en recluta militar tras marchas forzadas con calzado rígido.",
    "keyDetails": [
      {
        "label": "Capas",
        "value": "Fibrosa externa (protección) y celular interna osteogénica (reparación)"
      },
      {
        "label": "Inervación",
        "value": "Sumamente sensible al dolor por abundantes nociceptores"
      },
      {
        "label": "Ejemplo clásico",
        "value": "Periostio diafisario del fémur y tibia"
      }
    ],
    "svgType": "periostio",
    "termino": "Periostio"
  }
];
  if (typeof window.FISIOPEDIA_TERMS === 'undefined' || !Array.isArray(window.FISIOPEDIA_TERMS) || window.FISIOPEDIA_TERMS.length === 0) {
    window.FISIOPEDIA_TERMS = FALLBACK_TERMS;
  }

  // Acceso seguro al compendio de términos
  function getTerms() {
    if (typeof window.FISIOPEDIA_TERMS !== 'undefined' && Array.isArray(window.FISIOPEDIA_TERMS) && window.FISIOPEDIA_TERMS.length > 0) {
      return window.FISIOPEDIA_TERMS;
    }
    return FALLBACK_TERMS;
  }

  // Contador global de índice actual para Flashcards (solicitado)
  let currentCardIndex = 0;
  window.currentCardIndex = currentCardIndex;

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

      case 'flexion':
      case 'extension':
      case 'flexion_extension':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <circle cx="180" cy="120" r="12" fill="#00685f"/>
            <!-- Brazo fijo -->
            <line x1="180" y1="120" x2="280" y2="120" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
            <!-- Flexión -->
            <line x1="180" y1="120" x2="110" y2="40" stroke="#0D9488" stroke-width="${type === 'flexion' ? '10' : '7'}" stroke-linecap="round"/>
            <!-- Extensión -->
            <line x1="180" y1="120" x2="80" y2="120" stroke="#F59E0B" stroke-width="${type === 'extension' ? '10' : '7'}" stroke-dasharray="6 4" stroke-linecap="round"/>
            <!-- Arco de movimiento -->
            <path d="M 240 120 A 60 60 0 0 0 135 65" stroke="#0D9488" stroke-width="2.5" fill="none" stroke-dasharray="4 3"/>
            <text x="115" y="30" fill="${type === 'extension' ? '#64748B' : '#0D9488'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">FLEXIÓN (Disminuye ángulo)</text>
            <text x="50" y="145" fill="${type === 'flexion' ? '#64748B' : '#F59E0B'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">EXTENSIÓN (Aumenta ángulo)</text>
          </svg>
        `;

      case 'abduccion':
      case 'aduccion':
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
            <line x1="180" y1="90" x2="70" y2="40" stroke="#0D9488" stroke-width="${type === 'abduccion' ? '10' : '6'}" stroke-linecap="round"/>
            <path d="M 120 90 Q 110 65 90 55" stroke="#0D9488" stroke-width="2" fill="none"/>
            <text x="40" y="30" fill="${type === 'aduccion' ? '#64748B' : '#0D9488'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">ABDUCCIÓN (Separa)</text>
            <!-- Aducción (se acerca) -->
            <line x1="180" y1="90" x2="195" y2="160" stroke="#6366F1" stroke-width="${type === 'aduccion' ? '10' : '6'}" stroke-linecap="round"/>
            <text x="210" y="150" fill="${type === 'abduccion' ? '#64748B' : '#6366F1'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">ADUCCIÓN (Añade al centro)</text>
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

      case 'supinacion':
      case 'pronacion':
      case 'supinacion_pronacion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Supinación (Radio y Cúbito paralelos) -->
            <g transform="translate(40, 30)">
              <rect x="10" y="20" width="12" height="100" rx="4" fill="${type === 'pronacion' ? '#94A3B8' : '#0D9488'}"/>
              <rect x="35" y="20" width="12" height="100" rx="4" fill="#64748B"/>
              <text x="30" y="140" text-anchor="middle" fill="${type === 'pronacion' ? '#64748B' : '#0D9488'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">SUPINACIÓN</text>
              <text x="30" y="155" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Palma arriba (Huesos paralelos)</text>
            </g>
            <!-- Pronación (Radio cruza cúbito) -->
            <g transform="translate(200, 30)">
              <rect x="35" y="20" width="12" height="100" rx="4" fill="#64748B"/>
              <line x1="10" y1="20" x2="60" y2="120" stroke="${type === 'supinacion' ? '#94A3B8' : '#F59E0B'}" stroke-width="12" stroke-linecap="round"/>
              <text x="35" y="140" text-anchor="middle" fill="${type === 'supinacion' ? '#64748B' : '#F59E0B'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">PRONACIÓN</text>
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

      case 'nervio_ciatico':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Pelvis / Sacro -->
            <path d="M 120 30 C 150 20 210 20 240 30 C 230 65 190 75 180 80 C 170 75 130 65 120 30 Z" fill="#CBD5E1"/>
            <text x="180" y="45" text-anchor="middle" fill="#475569" font-size="10" font-family="Inter">Sacro & Ilion</text>
            <!-- MÃºsculo Piriforme -->
            <path d="M 155 70 C 180 75 220 85 245 95 L 240 110 C 215 100 175 90 150 85 Z" fill="#0D9488" opacity="0.9"/>
            <text x="250" y="85" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">M. Piriforme</text>
            <!-- Nervio CiÃ¡tico Principal -->
            <path d="M 175 60 C 180 80 185 110 190 185" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>
            <path d="M 175 60 C 180 80 185 110 190 185" stroke="#FDE68A" stroke-width="3" stroke-linecap="round"/>
            <!-- Zona de Atrapamiento -->
            <circle cx="184" cy="98" r="8" fill="#F43F5E" fill-opacity="0.8"/>
            <text x="75" y="105" fill="#F43F5E" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Zona de CompresiÃ³n</text>
            <text x="195" y="175" fill="#F59E0B" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">N. CiÃ¡tico (L4-S3)</text>
          </svg>
        `;

      case 'tunel_carpiano':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Huesos del Carpo (Piso Ã³seo) -->
            <path d="M 80 130 C 110 160 250 160 280 130 C 260 175 100 175 80 130 Z" fill="#94A3B8"/>
            <text x="180" y="175" text-anchor="middle" fill="#475569" font-size="10" font-family="Inter">Arco Ã“seo del Carpo</text>
            <!-- RetinÃ¡culo Flexor (Techo fibroso) -->
            <path d="M 80 120 Q 180 95 280 120" stroke="#00685f" stroke-width="7" stroke-linecap="round"/>
            <text x="180" y="85" text-anchor="middle" fill="#00685f" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">RetinÃ¡culo Flexor (Techo)</text>
            <!-- 9 Tendones Flexores -->
            <g fill="#CBD5E1" stroke="#64748B" stroke-width="1.5">
              <circle cx="120" cy="130" r="7"/><circle cx="140" cy="132" r="7"/><circle cx="160" cy="135" r="7"/>
              <circle cx="200" cy="135" r="7"/><circle cx="220" cy="132" r="7"/><circle cx="240" cy="130" r="7"/>
              <circle cx="140" cy="148" r="6"/><circle cx="180" cy="150" r="6"/><circle cx="220" cy="148" r="6"/>
            </g>
            <!-- Nervio Mediano Atrapado -->
            <circle cx="180" cy="115" r="9" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
            <circle cx="180" cy="115" r="4" fill="#FEF3C7"/>
            <text x="180" y="138" text-anchor="middle" fill="#B45309" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">Nervio Mediano</text>
          </svg>
        `;

      case 'gluteo_medio':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- LÃ­nea horizontal pÃ©lvica -->
            <line x1="60" y1="60" x2="300" y2="60" stroke="#CBD5E1" stroke-width="3" stroke-dasharray="4 4"/>
            <text x="180" y="45" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Pelvis Nivelada (Sin Trendelenburg)</text>
            <!-- Pelvis esquemÃ¡tica -->
            <path d="M 100 60 C 130 55 170 70 180 85 C 190 70 230 55 260 60" stroke="#94A3B8" stroke-width="8" stroke-linecap="round"/>
            <!-- GlÃºteo Medio Activo (Lado de apoyo izquierdo) -->
            <path d="M 105 65 L 140 120" stroke="#0D9488" stroke-width="12" stroke-linecap="round"/>
            <text x="50" y="100" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">GlÃºteo Medio</text>
            <text x="50" y="112" fill="#64748B" font-size="8" font-family="Inter">(TracciÃ³n Abductora)</text>
            <!-- FÃ©mur izquierdo (apoyo) -->
            <line x1="140" y1="120" x2="140" y2="185" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
            <circle cx="140" cy="120" r="8" fill="#F59E0B"/>
            <text x="155" y="125" fill="#F59E0B" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">TrocÃ¡nter Mayor</text>
            <!-- Pierna contralateral suspendida -->
            <line x1="220" y1="85" x2="235" y2="155" stroke="#CBD5E1" stroke-width="6" stroke-linecap="round"/>
            <text x="245" y="140" fill="#64748B" font-size="9" font-family="Inter">Pierna Oscilante</text>
          </svg>
        `;

      case 'diafragma':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Caja torÃ¡cica -->
            <path d="M 70 40 C 70 110 90 150 120 175" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
            <path d="M 290 40 C 290 110 270 150 240 175" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
            <!-- CÃºpula diafragmÃ¡tica (EspiraciÃ³n / reposo - lÃ­nea punteada) -->
            <path d="M 80 125 C 130 65 230 65 280 125" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="4 4" fill="none"/>
            <text x="180" y="65" text-anchor="middle" fill="#94A3B8" font-size="9" font-family="Inter">EspiraciÃ³n (Asciende)</text>
            <!-- Diafragma contraÃ­do (InspiraciÃ³n - cÃºpula aplanada) -->
            <path d="M 80 135 C 130 105 230 105 280 135" stroke="#0D9488" stroke-width="7" stroke-linecap="round" fill="none"/>
            <text x="180" y="125" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">InspiraciÃ³n (Desciende como PistÃ³n)</text>
            <!-- Flechas de vector de descenso -->
            <path d="M 180 85 L 180 105 M 175 100 L 180 105 L 185 100" stroke="#0D9488" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Nervio FrÃ©nico -->
            <line x1="180" y1="20" x2="180" y2="70" stroke="#F59E0B" stroke-width="3" stroke-dasharray="3 3"/>
            <text x="195" y="35" fill="#F59E0B" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">N. FrÃ©nico (C3-C5)</text>
            <text x="180" y="165" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Aumento del volumen pulmonar</text>
          </svg>
        `;

      case 'core_transverso':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Cilindro abdominal corte axial -->
            <ellipse cx="180" cy="100" rx="110" ry="65" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="2"/>
            <!-- VÃ©rtebra lumbar posterior -->
            <circle cx="180" cy="55" r="14" fill="#94A3B8"/>
            <text x="180" y="58" text-anchor="middle" fill="#FFFFFF" font-size="8" font-weight="bold" font-family="Inter">VÃ©rtebra</text>
            <!-- LÃ­nea alba anterior -->
            <circle cx="180" cy="160" r="5" fill="#0284C7"/>
            <text x="180" y="180" text-anchor="middle" fill="#0284C7" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">LÃ­nea Alba (Ombligo)</text>
            <!-- Faja del Transverso (Cincha circular) -->
            <path d="M 166 55 C 100 65 80 120 160 158" stroke="#0D9488" stroke-width="6" stroke-linecap="round" fill="none"/>
            <path d="M 194 55 C 260 65 280 120 200 158" stroke="#0D9488" stroke-width="6" stroke-linecap="round" fill="none"/>
            <text x="60" y="105" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Faja Transversa</text>
            <text x="240" y="105" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">CorsÃ© Natural</text>
            <text x="180" y="110" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">PresiÃ³n Intraabdominal</text>
          </svg>
        `;

      case 'lpaa':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- PeronÃ© / MalÃ©olo Externo -->
            <path d="M 120 20 L 120 100 C 120 115 135 125 145 120 L 145 20 Z" fill="#94A3B8"/>
            <text x="80" y="65" fill="#475569" font-size="10" font-family="Inter">PeronÃ©</text>
            <!-- AstrÃ¡galo -->
            <circle cx="190" cy="120" r="28" fill="#CBD5E1"/>
            <text x="200" y="115" fill="#475569" font-size="10" font-family="Inter">AstrÃ¡galo</text>
            <!-- CalcÃ¡neo inferior -->
            <path d="M 145 140 C 160 135 220 135 240 160 L 150 175 Z" fill="#E2E8F0"/>
            <!-- LPAA (Lig. Peroneoastragalino Anterior) -->
            <line x1="140" y1="110" x2="175" y2="105" stroke="#F43F5E" stroke-width="7" stroke-linecap="round"/>
            <circle cx="157" cy="107" r="5" fill="#F59E0B"/>
            <text x="140" y="85" fill="#F43F5E" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">LPAA (85% Esguinces)</text>
            <!-- Flecha de InversiÃ³n forzada -->
            <path d="M 230 165 C 245 150 255 125 245 105" stroke="#0D9488" stroke-width="3" stroke-dasharray="3 3" fill="none"/>
            <text x="255" y="140" fill="#0D9488" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">InversiÃ³n Forzada</text>
          </svg>
        `;

      case 'cintilla_iliotibial':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- FÃ©mur lateral -->
            <rect x="170" y="20" width="30" height="100" rx="6" fill="#CBD5E1"/>
            <!-- CÃ³ndilo Femoral Externo (Prominencia) -->
            <circle cx="185" cy="120" r="22" fill="#94A3B8"/>
            <text x="70" y="125" fill="#475569" font-size="9" font-family="Inter">CÃ³ndilo Lateral</text>
            <!-- Tibia con TubÃ©rculo de Gerdy -->
            <rect x="172" y="142" width="28" height="50" rx="4" fill="#CBD5E1"/>
            <circle cx="172" cy="150" r="6" fill="#0284C7"/>
            <text x="70" y="155" fill="#0284C7" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">TubÃ©rculo de Gerdy</text>
            <!-- Cintilla Iliotibial descendiendo -->
            <path d="M 180 20 L 175 110 L 172 150" stroke="#0D9488" stroke-width="9" stroke-linecap="round"/>
            <!-- Punto de roce / fricciÃ³n a 30 grados -->
            <circle cx="175" cy="118" r="8" fill="#F43F5E"/>
            <text x="200" y="115" fill="#F43F5E" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">FricciÃ³n a 30Â° de flexiÃ³n</text>
            <text x="200" y="130" fill="#64748B" font-size="8" font-family="Inter">Rodilla del Corredor</text>
            <text x="195" y="50" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Tracto Iliotibial</text>
          </svg>
        `;

      case 'pata_ganso':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Tibia Proximal Medial -->
            <path d="M 190 40 L 190 180 L 225 180 L 225 40 Z" fill="#CBD5E1"/>
            <text x="235" y="120" fill="#475569" font-size="10" font-family="Inter">Tibia Medial</text>
            <!-- Los 3 Tendones Convergentes (Sartorio, GrÃ¡cil, Semitendinoso) -->
            <!-- 1. Sartorio (Arriba) -->
            <path d="M 60 45 C 110 65 150 95 190 105" stroke="#0D9488" stroke-width="5" stroke-linecap="round"/>
            <text x="50" y="40" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">1. Sartorio (N. Femoral)</text>
            <!-- 2. GrÃ¡cil (Medio) -->
            <path d="M 60 90 C 110 95 150 105 190 108" stroke="#0284C7" stroke-width="5" stroke-linecap="round"/>
            <text x="50" y="85" fill="#0284C7" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">2. GrÃ¡cil (N. Obturador)</text>
            <!-- 3. Semitendinoso (Abajo) -->
            <path d="M 60 135 C 110 125 150 115 190 111" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
            <text x="50" y="150" fill="#F59E0B" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">3. Semitendinoso (N. CiÃ¡tico)</text>
            <!-- InserciÃ³n Conjunta en Pata de Ganso -->
            <ellipse cx="193" cy="108" rx="8" ry="12" fill="#F43F5E"/>
            <text x="140" y="180" text-anchor="middle" fill="#F43F5E" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">Pes Anserinus (Pata de Ganso)</text>
          </svg>
        `;

      case 'bursa_subacromial':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Techo Ã“seo: Acromion -->
            <path d="M 120 40 L 220 40 C 230 40 240 50 240 60 L 120 60 Z" fill="#94A3B8"/>
            <text x="180" y="32" text-anchor="middle" fill="#475569" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Acromion (Techo)</text>
            <!-- Cabeza del HÃºmero (Abajo) -->
            <circle cx="180" cy="150" r="50" fill="#CBD5E1"/>
            <text x="180" y="165" text-anchor="middle" fill="#475569" font-size="11" font-family="Inter">HÃºmero</text>
            <!-- TendÃ³n del Supraespinoso -->
            <path d="M 100 85 L 205 98" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
            <text x="60" y="80" fill="#0D9488" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">Supraespinoso</text>
            <!-- Bursa Subacromial (Cojinete Seroso) -->
            <ellipse cx="175" cy="73" rx="35" ry="8" fill="#F43F5E" fill-opacity="0.85"/>
            <text x="250" y="75" fill="#F43F5E" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Bursa Comprimida</text>
            <text x="180" y="115" text-anchor="middle" fill="#B45309" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">Espacio Subacromial (9-10 mm)</text>
          </svg>
        `;

      case 'bomba_muscular':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Vena Profunda Central -->
            <rect x="165" y="20" width="30" height="160" rx="6" fill="#DAE2FD" stroke="#6366F1" stroke-width="2"/>
            <!-- VÃ¡lvulas Venosas Unidireccionales (Abiertas hacia arriba) -->
            <path d="M 166 80 L 178 65 M 194 80 L 182 65" stroke="#6366F1" stroke-width="3" stroke-linecap="round"/>
            <path d="M 166 140 L 178 125 M 194 140 L 182 125" stroke="#6366F1" stroke-width="3" stroke-linecap="round"/>
            <!-- Flujo SanguÃ­neo Ascendente (Flechas azules) -->
            <path d="M 180 150 L 180 100 M 175 108 L 180 100 L 185 108" stroke="#0284C7" stroke-width="3" stroke-linecap="round"/>
            <path d="M 180 90 L 180 40 M 175 48 L 180 40 L 185 48" stroke="#0284C7" stroke-width="3" stroke-linecap="round"/>
            <text x="180" y="32" text-anchor="middle" fill="#0284C7" font-size="9" font-weight="bold" font-family="Plus Jakarta Sans">Hacia el CorazÃ³n</text>
            <!-- MÃºsculos Gemelos & SÃ³leo Comprimiendo (Vientres laterales) -->
            <path d="M 115 40 C 135 70 135 130 115 160 L 145 160 C 160 130 160 70 145 40 Z" fill="#0D9488" opacity="0.9"/>
            <path d="M 245 40 C 225 70 225 130 245 160 L 215 160 C 200 130 200 70 215 40 Z" fill="#0D9488" opacity="0.9"/>
            <text x="60" y="105" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">SÃ³leo / Gemelos</text>
            <text x="60" y="118" fill="#64748B" font-size="8" font-family="Inter">(CompresiÃ³n Activa)</text>
            <text x="260" y="105" fill="#6366F1" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Retorno Venoso</text>
            <text x="260" y="118" fill="#64748B" font-size="8" font-family="Inter">"Segundo Corazón"</text>
          </svg>
        `;

      case 'agonista':
      case 'antagonista':
      case 'sinergico':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="150" y="25" width="20" height="90" rx="6" fill="#CBD5E1"/>
            <circle cx="160" cy="120" r="10" fill="#00685f"/>
            <rect x="160" y="115" width="90" height="16" rx="5" fill="#94A3B8"/>
            <path d="M 135 45 Q 115 80 148 115" stroke="${type === 'antagonista' ? '#94A3B8' : '#0D9488'}" stroke-width="${type === 'agonista' ? '14' : '9'}" stroke-linecap="round" fill="none"/>
            <text x="60" y="65" fill="${type === 'antagonista' ? '#64748B' : '#0D9488'}" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Agonista (Motor)</text>
            <path d="M 175 45 Q 195 80 168 125" stroke="${type === 'agonista' ? '#94A3B8' : '#F59E0B'}" stroke-width="${type === 'antagonista' ? '14' : '9'}" stroke-linecap="round" fill="none"/>
            <text x="215" y="65" fill="${type === 'agonista' ? '#64748B' : '#F59E0B'}" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Antagonista (Freno)</text>
            <path d="M 148 85 Q 135 105 160 120" stroke="${type === 'sinergico' ? '#6366F1' : '#94A3B8'}" stroke-width="${type === 'sinergico' ? '10' : '6'}" stroke-linecap="round" fill="none"/>
            <text x="180" y="165" fill="#6366F1" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Sinérgico (Asistente/Fijador)</text>
          </svg>
        `;

      case 'isometrico':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="260" y="20" width="20" height="160" rx="4" fill="#64748B"/>
            <text x="290" y="105" fill="#64748B" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Pared Fija</text>
            <rect x="80" y="90" width="170" height="18" rx="6" fill="#0D9488"/>
            <circle cx="80" cy="99" r="10" fill="#00685f"/>
            <path d="M 120 70 L 170 70" stroke="#F59E0B" stroke-width="4"/>
            <path d="M 230 70 L 180 70" stroke="#F43F5E" stroke-width="4"/>
            <text x="180" y="55" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">CONTRACCIÓN ISOMÉTRICA</text>
            <text x="170" y="140" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Δ Longitud = 0 (Sin movimiento)</text>
            <text x="170" y="160" text-anchor="middle" fill="#F59E0B" font-size="10" font-family="Inter">Tensión activa interna máxima</text>
          </svg>
        `;

      case 'caudal':
      case 'craneal':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <circle cx="180" cy="45" r="18" fill="#CBD5E1"/>
            <rect x="172" y="65" width="16" height="75" rx="6" fill="#CBD5E1"/>
            <line x1="175" y1="140" x2="165" y2="185" stroke="#CBD5E1" stroke-width="10" stroke-linecap="round"/>
            <line x1="185" y1="140" x2="195" y2="185" stroke="#CBD5E1" stroke-width="10" stroke-linecap="round"/>
            <path d="M 120 70 L 120 30" stroke="${type === 'caudal' ? '#94A3B8' : '#0D9488'}" stroke-width="5" stroke-linecap="round"/>
            <polygon points="114,35 120,20 126,35" fill="${type === 'caudal' ? '#94A3B8' : '#0D9488'}"/>
            <text x="105" y="55" text-anchor="end" fill="${type === 'caudal' ? '#64748B' : '#0D9488'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">CRANEAL</text>
            <path d="M 240 120 L 240 160" stroke="${type === 'craneal' ? '#94A3B8' : '#F59E0B'}" stroke-width="5" stroke-linecap="round"/>
            <polygon points="234,155 240,170 246,155" fill="${type === 'craneal' ? '#94A3B8' : '#F59E0B'}"/>
            <text x="255" y="145" fill="${type === 'craneal' ? '#64748B' : '#F59E0B'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">CAUDAL</text>
          </svg>
        `;

      case 'proximal':
      case 'distal':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="40" y="40" width="55" height="120" rx="12" fill="#CBD5E1"/>
            <text x="67" y="105" text-anchor="middle" fill="#475569" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Tronco</text>
            <line x1="95" y1="75" x2="300" y2="75" stroke="#94A3B8" stroke-width="14" stroke-linecap="round"/>
            <circle cx="125" cy="75" r="9" fill="${type === 'distal' ? '#64748B' : '#0D9488'}"/>
            <text x="125" y="115" text-anchor="middle" fill="${type === 'distal' ? '#64748B' : '#0D9488'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">PROXIMAL</text>
            <text x="125" y="130" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Cerca del origen</text>
            <circle cx="280" cy="75" r="9" fill="${type === 'proximal' ? '#64748B' : '#F59E0B'}"/>
            <text x="280" y="115" text-anchor="middle" fill="${type === 'proximal' ? '#64748B' : '#F59E0B'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">DISTAL</text>
            <text x="280" y="130" text-anchor="middle" fill="#64748B" font-size="9" font-family="Inter">Lejos del origen</text>
          </svg>
        `;

      case 'medial':
      case 'lateral':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <line x1="180" y1="20" x2="180" y2="180" stroke="#00685f" stroke-width="2.5" stroke-dasharray="6 4"/>
            <text x="180" y="195" text-anchor="middle" fill="#00685f" font-size="10" font-weight="bold" font-family="Plus Jakarta Sans">Línea Media (Sagital)</text>
            <path d="M 120 85 L 165 85" stroke="${type === 'lateral' ? '#94A3B8' : '#0D9488'}" stroke-width="5" stroke-linecap="round"/>
            <polygon points="160,80 172,85 160,90" fill="${type === 'lateral' ? '#94A3B8' : '#0D9488'}"/>
            <text x="110" y="65" text-anchor="middle" fill="${type === 'lateral' ? '#64748B' : '#0D9488'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">MEDIAL</text>
            <path d="M 200 85 L 245 85" stroke="${type === 'medial' ? '#94A3B8' : '#F59E0B'}" stroke-width="5" stroke-linecap="round"/>
            <polygon points="240,80 252,85 240,90" fill="${type === 'medial' ? '#94A3B8' : '#F59E0B'}"/>
            <text x="250" y="65" text-anchor="middle" fill="${type === 'medial' ? '#64748B' : '#F59E0B'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">LATERAL</text>
          </svg>
        `;

      case 'ventral':
      case 'dorsal':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 180 30 Q 195 45 185 70 Q 200 95 190 130 Q 195 155 185 175 L 165 175 Q 155 140 165 110 Q 155 80 165 45 Z" fill="#CBD5E1"/>
            <path d="M 215 100 L 265 100" stroke="${type === 'dorsal' ? '#94A3B8' : '#0D9488'}" stroke-width="5" stroke-linecap="round"/>
            <polygon points="260,94 274,100 260,106" fill="${type === 'dorsal' ? '#94A3B8' : '#0D9488'}"/>
            <text x="270" y="80" text-anchor="middle" fill="${type === 'dorsal' ? '#64748B' : '#0D9488'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">VENTRAL</text>
            <path d="M 135 100 L 85 100" stroke="${type === 'ventral' ? '#94A3B8' : '#F59E0B'}" stroke-width="5" stroke-linecap="round"/>
            <polygon points="90,94 76,100 90,106" fill="${type === 'ventral' ? '#94A3B8' : '#F59E0B'}"/>
            <text x="85" y="80" text-anchor="middle" fill="${type === 'ventral' ? '#64748B' : '#F59E0B'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">DORSAL</text>
          </svg>
        `;

      case 'ipsilateral':
      case 'contralateral':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <line x1="180" y1="20" x2="180" y2="180" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4 4"/>
            <g transform="translate(20, 20)">
              <text x="70" y="25" text-anchor="middle" fill="${type === 'contralateral' ? '#64748B' : '#0D9488'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">IPSILATERAL</text>
              <circle cx="50" cy="65" r="12" fill="${type === 'contralateral' ? '#94A3B8' : '#0D9488'}"/>
              <circle cx="50" cy="125" r="12" fill="${type === 'contralateral' ? '#94A3B8' : '#0D9488'}"/>
              <line x1="50" y1="77" x2="50" y2="113" stroke="${type === 'contralateral' ? '#94A3B8' : '#0D9488'}" stroke-width="3"/>
            </g>
            <g transform="translate(190, 20)">
              <text x="75" y="25" text-anchor="middle" fill="${type === 'ipsilateral' ? '#64748B' : '#6366F1'}" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">CONTRALATERAL</text>
              <circle cx="35" cy="65" r="12" fill="${type === 'ipsilateral' ? '#94A3B8' : '#6366F1'}"/>
              <circle cx="115" cy="125" r="12" fill="${type === 'ipsilateral' ? '#94A3B8' : '#6366F1'}"/>
              <line x1="45" y1="75" x2="105" y2="115" stroke="${type === 'ipsilateral' ? '#94A3B8' : '#6366F1'}" stroke-width="3" stroke-dasharray="4 3"/>
            </g>
          </svg>
        `;

      case 'sinartrosis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 40 40 L 170 40 L 165 60 L 175 75 L 163 90 L 178 110 L 166 130 L 176 150 L 165 165 L 40 165 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
            <path d="M 320 40 L 190 40 L 185 60 L 195 75 L 183 90 L 198 110 L 186 130 L 196 150 L 185 165 L 320 165 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
            <path d="M 180 40 L 175 60 L 185 75 L 173 90 L 188 110 L 176 130 L 186 150 L 175 165" stroke="#0D9488" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <text x="180" y="28" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold" font-family="Plus Jakarta Sans">SUTURA CRANEAL (INMÓVIL)</text>
            <text x="95" y="105" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Hueso Parietal</text>
            <text x="265" y="105" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Hueso Parietal</text>
            <text x="180" y="185" text-anchor="middle" fill="#0D9488" font-size="9" font-weight="bold">Tejido fibroso denso interdigitado</text>
          </svg>
        `;

      case 'anfiartrosis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="100" y="30" width="160" height="40" rx="6" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="180" y="55" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Cuerpo Vertebral Superior</text>
            <rect x="110" y="78" width="140" height="34" rx="8" fill="#0D9488" fill-opacity="0.2" stroke="#0D9488" stroke-width="2.5"/>
            <ellipse cx="180" cy="95" rx="28" ry="10" fill="#0D9488"/>
            <text x="180" y="98" text-anchor="middle" fill="#FFFFFF" font-size="9" font-weight="bold">Núcleo Pulposo</text>
            <rect x="100" y="120" width="160" height="40" rx="6" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="180" y="145" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Cuerpo Vertebral Inferior</text>
            <path d="M 65 95 L 85 95 M 80 90 L 86 95 L 80 100" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
            <path d="M 295 95 L 275 95 M 280 90 L 274 95 L 280 100" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
            <text x="180" y="180" text-anchor="middle" fill="#F59E0B" font-size="10" font-weight="bold">Micro-movilidad y Amortiguación Axial</text>
          </svg>
        `;

      case 'diartrosis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 120 20 L 240 20 L 240 50 C 240 75 120 75 120 50 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 125 55 C 135 78 225 78 235 55" stroke="#38BDF8" stroke-width="5" fill="none" stroke-linecap="round"/>
            <path d="M 110 170 L 250 170 L 250 140 C 250 115 110 115 110 140 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 115 135 C 130 112 230 112 245 135" stroke="#38BDF8" stroke-width="5" fill="none" stroke-linecap="round"/>
            <path d="M 120 55 C 80 95 80 105 110 140" stroke="#F59E0B" stroke-width="3" fill="none"/>
            <path d="M 240 55 C 280 95 280 105 250 140" stroke="#F59E0B" stroke-width="3" fill="none"/>
            <ellipse cx="180" cy="95" rx="35" ry="12" fill="#0D9488" fill-opacity="0.3"/>
            <text x="180" y="99" text-anchor="middle" fill="#00685f" font-size="10" font-weight="bold">Líquido Sinovial</text>
            <text x="180" y="190" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Movilidad Amplia (Diartrodial)</text>
          </svg>
        `;

      case 'sincondrosis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="120" y="25" width="120" height="45" rx="6" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="180" y="52" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Epífisis Ósea</text>
            <rect x="120" y="76" width="120" height="22" rx="4" fill="#38BDF8" fill-opacity="0.7" stroke="#0284C7" stroke-width="2"/>
            <text x="180" y="91" text-anchor="middle" fill="#0369A1" font-size="9" font-weight="bold">Placa de Cartílago Hialino</text>
            <rect x="120" y="104" width="120" height="65" rx="6" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="180" y="140" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Diáfisis (Hueso en Crecimiento)</text>
            <text x="180" y="188" text-anchor="middle" fill="#0284C7" font-size="10" font-weight="bold">Sincondrosis Fisiaria (Placa de Crecimiento)</text>
          </svg>
        `;

      case 'sinfisis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 40 50 C 90 50 140 70 140 150 L 40 150 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="90" y="110" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Pubis Izq.</text>
            <rect x="145" y="65" width="70" height="85" rx="8" fill="#0D9488" fill-opacity="0.3" stroke="#0D9488" stroke-width="2.5"/>
            <text x="180" y="110" text-anchor="middle" fill="#00685f" font-size="9" font-weight="bold">Disco de Fibrocartílago</text>
            <path d="M 320 50 C 270 50 220 70 220 150 L 320 150 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="270" y="110" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Pubis Der.</text>
            <text x="180" y="180" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Sínfisis Púbica (Resistencia al Cizallamiento)</text>
          </svg>
        `;

      case 'sindesmosis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="80" y="25" width="55" height="145" rx="8" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="107" y="105" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Tibia</text>
            <rect x="225" y="25" width="35" height="145" rx="8" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="242" y="105" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Peroné</text>
            <g stroke="#0D9488" stroke-width="3" stroke-linecap="round">
              <line x1="135" y1="45" x2="225" y2="55"/>
              <line x1="135" y1="70" x2="225" y2="80"/>
              <line x1="135" y1="95" x2="225" y2="105"/>
              <line x1="135" y1="120" x2="225" y2="130"/>
              <line x1="135" y1="145" x2="225" y2="155"/>
            </g>
            <text x="180" y="186" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Membrana Interósea &amp; Ligamentos</text>
          </svg>
        `;

      case 'gonfosis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 60 170 L 60 110 C 60 80 120 70 140 110 L 140 170 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 300 170 L 300 110 C 300 80 240 70 220 110 L 220 170 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="90" y="150" text-anchor="middle" fill="#64748B" font-size="9" font-weight="bold">Hueso Alveolar</text>
            <text x="270" y="150" text-anchor="middle" fill="#64748B" font-size="9" font-weight="bold">Hueso Alveolar</text>
            <path d="M 150 40 C 150 40 210 40 210 40 C 210 90 205 130 180 160 C 155 130 150 90 150 40 Z" fill="#FFFFFF" stroke="#64748B" stroke-width="2.5"/>
            <text x="180" y="65" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Corona / Raíz</text>
            <path d="M 148 100 L 141 100 M 153 125 L 143 125 M 212 100 L 219 100 M 207 125 L 217 125" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
            <text x="180" y="188" text-anchor="middle" fill="#F59E0B" font-size="10" font-weight="bold">Ligamento Periodontal (Propiocepción Clavija)</text>
          </svg>
        `;

      case 'apofisis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <circle cx="100" cy="100" r="50" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="100" y="105" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Cuerpo</text>
            <path d="M 140 85 L 290 50 L 275 80 L 150 110 Z" fill="#0D9488" fill-opacity="0.3" stroke="#0D9488" stroke-width="2.5"/>
            <path d="M 290 50 L 340 35" stroke="#E11D48" stroke-width="4" stroke-linecap="round"/>
            <text x="240" y="42" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Apófisis Espinosa</text>
            <text x="310" y="25" fill="#E11D48" font-size="9" font-weight="bold">Tendón/Músculo</text>
            <text x="180" y="185" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Brazo de Palanca para Inserción Muscular</text>
          </svg>
        `;

      case 'fosa':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 40 60 L 110 60 C 140 60 150 140 180 140 C 210 140 220 60 250 60 L 320 60 L 320 170 L 40 170 Z" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>
            <path d="M 120 70 C 145 70 155 130 180 130 C 205 130 215 70 240 70" stroke="#0D9488" stroke-width="3" fill="#0D9488" fill-opacity="0.2"/>
            <text x="180" y="105" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold">Fosa (Depresión Cóncava)</text>
            <text x="180" y="185" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Alojamiento de Músculos o Cabezas Articulares</text>
          </svg>
        `;

      case 'surco':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="50" y="40" width="260" height="120" rx="12" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>
            <path d="M 150 40 L 150 160 C 150 160 180 170 210 160 L 210 40" fill="#CBD5E1"/>
            <line x1="180" y1="30" x2="180" y2="170" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>
            <text x="180" y="25" text-anchor="middle" fill="#F59E0B" font-size="10" font-weight="bold">Nervio / Tendón Guiado</text>
            <text x="95" y="105" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Borde Óseo</text>
            <text x="265" y="105" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Borde Óseo</text>
            <text x="180" y="188" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Surco: Corredera Protectora</text>
          </svg>
        `;

      case 'meato':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 40 40 L 320 40 L 320 85 L 140 85 C 100 85 80 115 80 150 L 40 150 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 40 170 L 320 170 L 320 125 L 150 125 C 130 125 120 135 120 170 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 50 105 L 310 105" stroke="#38BDF8" stroke-width="6" stroke-dasharray="6 4" stroke-linecap="round"/>
            <text x="180" y="75" text-anchor="middle" fill="#0369A1" font-size="11" font-weight="bold">Túnel del Meato Acústico</text>
            <text x="180" y="188" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Conducto tubular óseo</text>
          </svg>
        `;

      case 'foramen':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="50" y="30" width="260" height="140" rx="16" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <ellipse cx="180" cy="100" rx="45" ry="35" fill="#0F172A"/>
            <ellipse cx="175" cy="95" rx="40" ry="30" fill="#1E293B"/>
            <circle cx="170" cy="95" r="10" fill="#E11D48"/>
            <circle cx="190" cy="95" r="8" fill="#F59E0B"/>
            <text x="180" y="75" text-anchor="middle" fill="#FFFFFF" font-size="9" font-weight="bold">Paso Vasculonervioso</text>
            <text x="180" y="188" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="bold">Foramen: Orificio de Tránsito Óseo</text>
          </svg>
        `;

      case 'hiato':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 40 40 C 140 40 140 160 40 160 Z" fill="#E11D48" fill-opacity="0.3" stroke="#E11D48" stroke-width="2"/>
            <path d="M 320 40 C 220 40 220 160 320 160 Z" fill="#E11D48" fill-opacity="0.3" stroke="#E11D48" stroke-width="2"/>
            <ellipse cx="180" cy="100" rx="30" ry="45" fill="#F8FAFC" stroke="#0D9488" stroke-width="3" stroke-dasharray="5 3"/>
            <line x1="180" y1="20" x2="180" y2="180" stroke="#0D9488" stroke-width="6" stroke-linecap="round"/>
            <text x="180" y="105" text-anchor="middle" fill="#00685f" font-size="10" font-weight="bold">Hiato (Abertura)</text>
            <text x="180" y="188" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Espacio entre fibras musculares / fascias</text>
          </svg>
        `;

      case 'condilo':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 120 20 L 240 20 L 240 70 C 240 130 195 130 180 100 C 165 130 120 130 120 70 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 125 75 C 130 125 170 125 180 95" stroke="#38BDF8" stroke-width="6" fill="none" stroke-linecap="round"/>
            <path d="M 180 95 C 190 125 230 125 235 75" stroke="#38BDF8" stroke-width="6" fill="none" stroke-linecap="round"/>
            <text x="145" y="150" text-anchor="middle" fill="#0284C7" font-size="10" font-weight="bold">Cóndilo Medial</text>
            <text x="215" y="150" text-anchor="middle" fill="#0284C7" font-size="10" font-weight="bold">Cóndilo Lateral</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Eminencias Articulares Convexas</text>
          </svg>
        `;

      case 'epicondilo':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 140 20 L 220 20 L 220 70 C 255 75 250 110 220 120 L 220 145 C 180 145 180 145 140 145 L 140 120 C 110 110 105 75 140 70 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <circle cx="118" cy="95" r="14" fill="#F59E0B" fill-opacity="0.4" stroke="#F59E0B" stroke-width="2.5"/>
            <circle cx="242" cy="95" r="14" fill="#F59E0B" fill-opacity="0.4" stroke="#F59E0B" stroke-width="2.5"/>
            <text x="65" y="100" fill="#B45309" font-size="10" font-weight="bold">Epicóndilo</text>
            <text x="260" y="100" fill="#B45309" font-size="10" font-weight="bold">Epicóndilo</text>
            <text x="180" y="185" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Relieves Superiores para Amarre de Ligamentos</text>
          </svg>
        `;

      case 'tuberculo':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="80" y="40" width="160" height="120" rx="12" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 240 80 C 265 80 265 110 240 110 Z" fill="#0D9488" stroke="#00685f" stroke-width="2.5"/>
            <text x="290" y="100" fill="#0D9488" font-size="10" font-weight="bold">Tubérculo</text>
            <text x="160" y="105" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Cuerpo Óseo</text>
            <text x="180" y="185" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Pequeña Eminencia Redondeada de Anclaje</text>
          </svg>
        `;

      case 'tuberosidad':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 80 40 L 220 40 L 220 70 C 270 75 270 135 220 140 L 220 160 L 80 160 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 225 75 L 245 80 L 240 90 L 255 100 L 240 115 L 250 125 L 225 135" stroke="#E11D48" stroke-width="4" stroke-linecap="round"/>
            <text x="290" y="105" fill="#E11D48" font-size="10" font-weight="bold">Tuberosidad Rugosa</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Gran Relieve para Tracciones Musculares Fuertes</text>
          </svg>
        `;

      case 'espina':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 60 50 L 200 50 L 280 100 L 200 150 L 60 150 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <polygon points="280,100 230,85 230,115" fill="#0D9488"/>
            <text x="285" y="95" fill="#0D9488" font-size="11" font-weight="bold">Espina Afilada</text>
            <text x="130" y="105" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Hueso Ilíaco / Escápula</text>
            <text x="180" y="185" text-anchor="middle" fill="#00685f" font-size="10" font-weight="bold">Proyección Ósea Aguda y Hito Palpatorio</text>
          </svg>
        `;

      case 'cresta':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 60 160 C 80 70 280 70 300 160 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 60 160 C 80 65 280 65 300 160" stroke="#0D9488" stroke-width="7" fill="none" stroke-linecap="round"/>
            <text x="180" y="55" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold">Cresta Ilíaca (Reborde Prominente)</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Borde Alargado de Inserción Abdominal y Glútea</text>
          </svg>
        `;

      case 'linea':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="130" y="25" width="100" height="150" rx="14" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <line x1="180" y1="35" x2="180" y2="165" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
            <text x="245" y="100" fill="#D97706" font-size="10" font-weight="bold">Línea Áspera</text>
            <text x="180" y="188" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Relieve Óseo Lineal Estrecho</text>
          </svg>
        `;

      case 'acetabulo':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 40 40 L 140 40 C 140 40 120 70 120 100 C 120 130 140 160 140 160 L 40 160 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 125 65 C 170 65 200 80 200 100 C 200 120 170 135 125 135" stroke="#0D9488" stroke-width="6" fill="#0D9488" fill-opacity="0.2"/>
            <circle cx="210" cy="100" r="35" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>
            <text x="210" y="104" text-anchor="middle" fill="#334155" font-size="9" font-weight="bold">Cabeza Fémur</text>
            <text x="90" y="105" text-anchor="middle" fill="#00685f" font-size="10" font-weight="bold">Acetábulo</text>
            <text x="180" y="185" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Cavidad Cotiloidea Hemisférica de la Cadera</text>
          </svg>
        `;

      case 'foramen_magno':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <ellipse cx="180" cy="100" rx="120" ry="70" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <ellipse cx="180" cy="100" rx="45" ry="32" fill="#0F172A"/>
            <ellipse cx="180" cy="100" rx="25" ry="18" fill="#E11D48" fill-opacity="0.8"/>
            <text x="180" y="104" text-anchor="middle" fill="#FFFFFF" font-size="9" font-weight="bold">Médula Espinal</text>
            <text x="180" y="55" text-anchor="middle" fill="#334155" font-size="11" font-weight="bold">Base del Hueso Occipital</text>
            <text x="180" y="185" text-anchor="middle" fill="#E11D48" font-size="10" font-weight="bold">Foramen Magno: Tránsito Troncoencefálico</text>
          </svg>
        `;

      case 'silla_turca':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 40 150 L 110 150 L 110 70 L 135 70 C 135 125 225 125 225 70 L 250 70 L 250 150 L 320 150 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <circle cx="180" cy="80" r="22" fill="#F59E0B" fill-opacity="0.85"/>
            <text x="180" y="84" text-anchor="middle" fill="#FFFFFF" font-size="9" font-weight="bold">Hipófisis</text>
            <text x="180" y="145" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="bold">Fosa Hipofisaria (Esfenoides)</text>
            <text x="180" y="185" text-anchor="middle" fill="#F59E0B" font-size="10" font-weight="bold">Silla Turca en el Centro del Cráneo</text>
          </svg>
        `;

      case 'lamina_cribosa':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="60" y="75" width="240" height="30" rx="4" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <g fill="#0F172A">
              <circle cx="85" cy="90" r="4"/><circle cx="110" cy="90" r="4"/><circle cx="135" cy="90" r="4"/>
              <circle cx="160" cy="90" r="4"/><circle cx="185" cy="90" r="4"/><circle cx="210" cy="90" r="4"/>
              <circle cx="235" cy="90" r="4"/><circle cx="260" cy="90" r="4"/><circle cx="285" cy="90" r="4"/>
            </g>
            <text x="180" y="55" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold">Bulbo Olfatorio (Cráneo)</text>
            <text x="180" y="145" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Techo de Fosas Nasales (Filetes Olfatorios)</text>
            <text x="180" y="185" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Lámina Cribosa del Etmoides (Criba Olfatoria)</text>
          </svg>
        `;

      case 'promontorio':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="140" y="25" width="100" height="40" rx="6" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="190" y="50" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Vértebra L5</text>
            <path d="M 120 75 L 240 75 L 210 165 L 140 165 Z" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>
            <circle cx="120" cy="75" r="8" fill="#E11D48"/>
            <path d="M 120 75 L 70 85" stroke="#E11D48" stroke-width="3"/>
            <text x="60" y="105" text-anchor="middle" fill="#E11D48" font-size="10" font-weight="bold">Promontorio S1</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Borde Saliente Anterior de la Entrada Pélvica</text>
          </svg>
        `;

      case 'trocanter_mayor':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 160 170 L 160 110 L 100 80 C 80 70 85 40 115 45 L 145 60 L 190 30 C 220 20 240 50 220 75 L 195 95 L 195 170 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <circle cx="102" cy="62" r="14" fill="#0D9488" fill-opacity="0.4" stroke="#0D9488" stroke-width="3"/>
            <text x="60" y="50" fill="#00685f" font-size="10" font-weight="bold">Trocánter Mayor</text>
            <text x="235" y="45" fill="#64748B" font-size="10" font-weight="bold">Cabeza Fémur</text>
            <text x="180" y="188" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Brazo de Palanca para Glúteos y Abductores</text>
          </svg>
        `;

      case 'maleolo':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 90 20 L 170 20 L 170 110 L 190 110 L 190 145 C 150 145 130 110 90 110 Z" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 230 20 L 270 20 L 270 110 L 285 110 L 285 155 C 265 155 250 110 230 110 Z" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>
            <rect x="180" y="125" width="60" height="40" rx="8" fill="#F1F5F9" stroke="#94A3B8" stroke-width="2"/>
            <circle cx="190" cy="135" r="7" fill="#0D9488"/>
            <circle cx="280" cy="145" r="7" fill="#F59E0B"/>
            <text x="110" y="145" fill="#0D9488" font-size="9" font-weight="bold">Maléolo Medial</text>
            <text x="250" y="175" fill="#F59E0B" font-size="9" font-weight="bold">Maléolo Lateral</text>
            <text x="180" y="190" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Mortaja Articular del Tobillo</text>
          </svg>
        `;

      case 'trigono_femoral':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <polygon points="60,40 300,40 180,165" fill="#0D9488" fill-opacity="0.15" stroke="#0D9488" stroke-width="2.5"/>
            <line x1="60" y1="40" x2="300" y2="40" stroke="#64748B" stroke-width="4"/>
            <text x="180" y="32" text-anchor="middle" fill="#64748B" font-size="9" font-weight="bold">Ligamento Inguinal</text>
            <line x1="165" y1="40" x2="175" y2="165" stroke="#E11D48" stroke-width="5"/>
            <line x1="185" y1="40" x2="190" y2="165" stroke="#3B82F6" stroke-width="5"/>
            <line x1="150" y1="40" x2="160" y2="165" stroke="#F59E0B" stroke-width="3"/>
            <text x="180" y="100" text-anchor="middle" fill="#00685f" font-size="10" font-weight="bold">N. A. V. Femoral</text>
            <text x="180" y="185" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Trígono Femoral (Triángulo de Scarpa)</text>
          </svg>
        `;

      case 'fosa_poplitea':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <polygon points="180,30 260,100 180,170 100,100" fill="#0D9488" fill-opacity="0.2" stroke="#0D9488" stroke-width="2.5"/>
            <line x1="180" y1="20" x2="180" y2="180" stroke="#E11D48" stroke-width="4"/>
            <line x1="190" y1="20" x2="190" y2="180" stroke="#3B82F6" stroke-width="4"/>
            <text x="180" y="95" text-anchor="middle" fill="#00685f" font-size="10" font-weight="bold">Rombo Poplíteo</text>
            <text x="75" y="70" fill="#64748B" font-size="9" font-weight="bold">Isquiotibiales</text>
            <text x="75" y="140" fill="#64748B" font-size="9" font-weight="bold">Gastrocnemios</text>
            <text x="180" y="190" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Fosa Poplítea (Hueco Posterior de Rodilla)</text>
          </svg>
        `;

      case 'retinaculo':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 60 50 L 300 150" stroke="#E11D48" stroke-width="7" stroke-linecap="round"/>
            <path d="M 80 40 L 320 140" stroke="#E11D48" stroke-width="7" stroke-linecap="round"/>
            <rect x="150" y="45" width="55" height="120" rx="8" fill="#0D9488" fill-opacity="0.8" stroke="#00685f" stroke-width="2"/>
            <text x="177" y="110" text-anchor="middle" fill="#FFFFFF" font-size="9" font-weight="bold">Retináculo</text>
            <text x="80" y="165" fill="#E11D48" font-size="10" font-weight="bold">Tendones Sujetos</text>
            <text x="180" y="188" text-anchor="middle" fill="#00685f" font-size="10" font-weight="bold">Polea Fibrosa que Impide el Efecto Arco</text>
          </svg>
        `;

      case 'menisco':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <path d="M 70 100 C 70 55 150 55 150 75 C 110 75 95 90 95 100 C 95 110 110 125 150 125 C 150 145 70 145 70 100 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="2.5"/>
            <text x="110" y="105" text-anchor="middle" fill="#0369A1" font-size="9" font-weight="bold">Menisco Medial (C)</text>
            <path d="M 290 100 C 290 55 210 55 210 75 C 250 75 265 90 265 100 C 265 110 250 125 210 125 C 210 145 290 145 290 100 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="2.5"/>
            <text x="250" y="105" text-anchor="middle" fill="#0369A1" font-size="9" font-weight="bold">Menisco Lateral (O)</text>
            <text x="180" y="185" text-anchor="middle" fill="#0284C7" font-size="10" font-weight="bold">Fibrocartílagos Semilunares Amortiguadores</text>
          </svg>
        `;

      case 'labrum':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <ellipse cx="180" cy="100" rx="90" ry="60" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <ellipse cx="180" cy="100" rx="65" ry="40" fill="#E2E8F0"/>
            <path d="M 90 100 A 90 60 0 1 0 270 100 A 90 60 0 1 0 90 100 Z" stroke="#0D9488" stroke-width="8" fill="none"/>
            <text x="180" y="105" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold">Labrum Fibrocartilaginoso</text>
            <text x="180" y="185" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Anillo Perimetral de Sellado y Profundización</text>
          </svg>
        `;

      case 'capsula_articular':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="130" y="20" width="100" height="50" rx="8" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <rect x="130" y="130" width="100" height="50" rx="8" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 130 50 C 70 80 70 120 130 150" stroke="#F59E0B" stroke-width="6" fill="none"/>
            <path d="M 230 50 C 290 80 290 120 230 150" stroke="#F59E0B" stroke-width="6" fill="none"/>
            <text x="180" y="105" text-anchor="middle" fill="#B45309" font-size="11" font-weight="bold">Cápsula Fibrosa Envolvente</text>
            <text x="180" y="190" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Manguito Hermético con Líquido Sinovial</text>
          </svg>
        `;

      case 'cavidad_sinovial':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <ellipse cx="180" cy="100" rx="80" ry="40" fill="#0D9488" fill-opacity="0.25" stroke="#0D9488" stroke-width="3"/>
            <circle cx="150" cy="95" r="4" fill="#0D9488"/>
            <circle cx="180" cy="105" r="4" fill="#0D9488"/>
            <circle cx="210" cy="95" r="4" fill="#0D9488"/>
            <text x="180" y="80" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold">Líquido Sinovial Lubricante</text>
            <text x="180" y="185" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Espacio Intraarticular Hermético de Fricción Mínima</text>
          </svg>
        `;

      case 'dermatoma':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="140" y="25" width="80" height="150" rx="16" fill="#F1F5F9" stroke="#94A3B8" stroke-width="2"/>
            <path d="M 140 50 L 220 50" stroke="#0D9488" stroke-width="4"/>
            <path d="M 140 85 L 220 85" stroke="#3B82F6" stroke-width="4"/>
            <path d="M 140 120 L 220 120" stroke="#F59E0B" stroke-width="4"/>
            <text x="245" y="55" fill="#0D9488" font-size="10" font-weight="bold">L3</text>
            <text x="245" y="90" fill="#3B82F6" font-size="10" font-weight="bold">L4</text>
            <text x="245" y="125" fill="#F59E0B" font-size="10" font-weight="bold">L5</text>
            <text x="90" y="90" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Piel Inervada</text>
            <text x="180" y="188" text-anchor="middle" fill="#3B82F6" font-size="10" font-weight="bold">Dermatomas: Bandas Sensitivas Radiculares</text>
          </svg>
        `;

      case 'miotoma':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <circle cx="80" cy="100" r="28" fill="#F59E0B" fill-opacity="0.3" stroke="#F59E0B" stroke-width="2"/>
            <text x="80" y="104" text-anchor="middle" fill="#B45309" font-size="9" font-weight="bold">Médula L5</text>
            <line x1="108" y1="100" x2="200" y2="100" stroke="#F59E0B" stroke-width="3"/>
            <path d="M 200 100 C 240 60 280 60 310 100 C 280 140 240 140 200 100 Z" fill="#E11D48" fill-opacity="0.7"/>
            <text x="260" y="105" text-anchor="middle" fill="#FFFFFF" font-size="9" font-weight="bold">Grupo Muscular</text>
            <text x="180" y="185" text-anchor="middle" fill="#E11D48" font-size="10" font-weight="bold">Miotoma: Inervación Motora de un Segmento Espinal</text>
          </svg>
        `;

      case 'esclerotoma':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <circle cx="180" cy="65" r="22" fill="#3B82F6" fill-opacity="0.4"/>
            <text x="180" y="69" text-anchor="middle" fill="#1D4ED8" font-size="9" font-weight="bold">Tubo Neural</text>
            <circle cx="180" cy="105" r="12" fill="#0D9488"/>
            <text x="180" y="108" text-anchor="middle" fill="#FFFFFF" font-size="7" font-weight="bold">Notocorda</text>
            <ellipse cx="130" cy="95" rx="25" ry="30" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <ellipse cx="230" cy="95" rx="25" ry="30" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <text x="130" y="100" text-anchor="middle" fill="#334155" font-size="8" font-weight="bold">Esclerotoma</text>
            <text x="230" y="100" text-anchor="middle" fill="#334155" font-size="8" font-weight="bold">Esclerotoma</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Origen Mesenquimal de Vértebras y Costillas</text>
          </svg>
        `;

      case 'somita':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="175" y="20" width="10" height="150" fill="#0D9488" rx="5"/>
            <g fill="#CBD5E1" stroke="#64748B" stroke-width="1.5">
              <rect x="110" y="30" width="55" height="25" rx="6"/>
              <rect x="195" y="30" width="55" height="25" rx="6"/>
              <rect x="110" y="65" width="55" height="25" rx="6"/>
              <rect x="195" y="65" width="55" height="25" rx="6"/>
              <rect x="110" y="100" width="55" height="25" rx="6"/>
              <rect x="195" y="100" width="55" height="25" rx="6"/>
              <rect x="110" y="135" width="55" height="25" rx="6"/>
              <rect x="195" y="135" width="55" height="25" rx="6"/>
            </g>
            <text x="60" y="100" fill="#334155" font-size="10" font-weight="bold">Somitas Pares</text>
            <text x="180" y="188" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Bloques Metaméricos del Embrión Humano</text>
          </svg>
        `;

      case 'notocorda':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <line x1="60" y1="100" x2="300" y2="100" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
            <circle cx="180" cy="100" r="16" fill="#00685f"/>
            <text x="180" y="55" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold">Eje Notocordal Embrionario</text>
            <text x="180" y="145" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Inductor de Columna y Futuro Núcleo Pulposo</text>
            <text x="180" y="185" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Guía Esquelética Axial Primitiva</text>
          </svg>
        `;

      case 'periostio':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="80" y="45" width="200" height="110" rx="10" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>
            <text x="180" y="105" text-anchor="middle" fill="#334155" font-size="12" font-weight="bold">Corteza Ósea Compacta</text>
            <path d="M 70 35 L 290 35 L 290 165 L 70 165 Z" stroke="#E11D48" stroke-width="4" stroke-dasharray="6 3" fill="none"/>
            <text x="180" y="28" text-anchor="middle" fill="#E11D48" font-size="10" font-weight="bold">Periostio (Vascularizado e Inervado)</text>
            <text x="180" y="185" text-anchor="middle" fill="#E11D48" font-size="10" font-weight="bold">Membrana Osteogénica y Sensitiva del Hueso</text>
          </svg>
        `;


      case 'rango-de-movimiento-rom':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Goniómetro circular -->
            <circle cx="180" cy="110" r="60" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4 4"/>
            <path d="M 120 110 A 60 60 0 0 1 230 65" stroke="#0D9488" stroke-width="6" fill="none"/>
            <circle cx="180" cy="110" r="10" fill="#00685f"/>
            <!-- Brazo fijo -->
            <line x1="180" y1="110" x2="260" y2="110" stroke="#64748B" stroke-width="5" stroke-linecap="round"/>
            <!-- Brazo móvil -->
            <line x1="180" y1="110" x2="230" y2="40" stroke="#0D9488" stroke-width="5" stroke-linecap="round"/>
            <text x="215" y="85" fill="#0D9488" font-size="12" font-weight="bold">ROM: 0° - 135°</text>
            <text x="180" y="30" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold">Rango de Movimiento Articular (Goniometría)</text>
            <text x="180" y="185" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Amplitud angular completa alcanzable por una articulación</text>
          </svg>
        `;

      case 'lordosis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Perfil anatómico y curvatura lordótica (concavidad posterior) -->
            <path d="M 160 30 Q 140 70 170 100 Q 210 135 170 170" stroke="#0D9488" stroke-width="6" fill="none" stroke-linecap="round"/>
            <line x1="200" y1="90" x2="200" y2="150" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4 3"/>
            <path d="M 180 120 L 220 120 M 215 115 L 225 120 L 215 125" stroke="#F59E0B" stroke-width="3"/>
            <text x="235" y="125" fill="#D97706" font-size="10" font-weight="bold">Concavidad Posterior</text>
            <text x="180" y="25" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold">Lordosis Cervical y Lumbar</text>
            <text x="180" y="188" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Curvatura fisiológica adaptada a la bipedestación</text>
          </svg>
        `;

      case 'cifosis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Curvatura cifótica (convexidad posterior torácica) -->
            <path d="M 150 30 Q 220 90 150 170" stroke="#E11D48" stroke-width="6" fill="none" stroke-linecap="round"/>
            <line x1="140" y1="30" x2="140" y2="170" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4 4"/>
            <path d="M 140 100 L 205 100 M 200 95 L 210 100 L 200 105" stroke="#E11D48" stroke-width="3"/>
            <text x="215" y="105" fill="#E11D48" font-size="10" font-weight="bold">Convexidad Posterior</text>
            <text x="180" y="25" text-anchor="middle" fill="#E11D48" font-size="11" font-weight="bold">Cifosis Torácica y Sacra</text>
            <text x="180" y="188" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Curvatura primaria protectora de la caja torácica</text>
          </svg>
        `;

      case 'escoliosis':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <line x1="180" y1="20" x2="180" y2="180" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4 4"/>
            <!-- Curva en S escoliótica en plano frontal -->
            <path d="M 180 30 C 230 65 220 100 180 115 C 140 130 145 155 180 175" stroke="#E11D48" stroke-width="6" fill="none" stroke-linecap="round"/>
            <circle cx="215" cy="75" r="8" fill="#E11D48" fill-opacity="0.3"/>
            <circle cx="150" cy="145" r="8" fill="#E11D48" fill-opacity="0.3"/>
            <text x="180" y="22" text-anchor="middle" fill="#E11D48" font-size="11" font-weight="bold">Escoliosis (Plano Frontal)</text>
            <text x="180" y="190" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Desviación lateral tridimensional de la columna vertebral</text>
          </svg>
        `;

      case 'atrofia':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Músculo normal -->
            <g transform="translate(60, 40)">
              <text x="50" y="0" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Normal</text>
              <path d="M 0 50 C 30 10 70 10 100 50 C 70 90 30 90 0 50 Z" fill="#0D9488" fill-opacity="0.7"/>
            </g>
            <!-- Flecha de pérdida -->
            <path d="M 175 90 L 195 90 M 190 85 L 198 90 L 190 95" stroke="#64748B" stroke-width="3"/>
            <!-- Músculo atrófico reducido -->
            <g transform="translate(210, 50)">
              <text x="45" y="-10" text-anchor="middle" fill="#E11D48" font-size="10" font-weight="bold">Atrofia</text>
              <path d="M 0 40 C 25 25 65 25 90 40 C 65 55 25 55 0 40 Z" fill="#E11D48" fill-opacity="0.4"/>
            </g>
            <text x="180" y="185" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Disminución de masa, sarcómeros y sección transversal</text>
          </svg>
        `;

      case 'hipertrofia':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Músculo base -->
            <g transform="translate(60, 50)">
              <text x="45" y="-10" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Basal</text>
              <path d="M 0 40 C 25 20 65 20 90 40 C 65 60 25 60 0 40 Z" fill="#CBD5E1"/>
            </g>
            <!-- Flecha de crecimiento -->
            <path d="M 170 90 L 195 90 M 190 85 L 198 90 L 190 95" stroke="#0D9488" stroke-width="4"/>
            <!-- Músculo hipertrofiado -->
            <g transform="translate(210, 30)">
              <text x="55" y="0" text-anchor="middle" fill="#0D9488" font-size="10" font-weight="bold">Hipertrofia</text>
              <path d="M 0 60 C 35 5 75 5 110 60 C 75 115 35 115 0 60 Z" fill="#0D9488" fill-opacity="0.85"/>
            </g>
            <text x="180" y="185" text-anchor="middle" fill="#00685f" font-size="10" font-weight="bold">Aumento de miofibrillas y fuerza contráctil por sobrecarga</text>
          </svg>
        `;

      case 'tono-muscular':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Resorte / Tensión activa continua -->
            <path d="M 60 100 L 90 100 L 105 70 L 125 130 L 145 70 L 165 130 L 185 70 L 205 130 L 225 70 L 245 130 L 260 100 L 300 100" stroke="#0D9488" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <text x="180" y="50" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold">Tono Muscular Basal</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Resistencia elástica pasiva y semicontracción continua refleja</text>
          </svg>
        `;

      case 'fascia':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Fibras musculares envueltas en red fascial -->
            <rect x="70" y="45" width="220" height="110" rx="12" fill="#E11D48" fill-opacity="0.3"/>
            <!-- Trama de colágeno fascial entrecruzado -->
            <g stroke="#0D9488" stroke-width="2.5" opacity="0.85">
              <line x1="80" y1="50" x2="280" y2="150"/>
              <line x1="120" y1="50" x2="280" y2="130"/>
              <line x1="80" y1="80" x2="240" y2="150"/>
              <line x1="280" y1="50" x2="80" y2="150"/>
              <line x1="240" y1="50" x2="80" y2="130"/>
              <line x1="280" y1="80" x2="120" y2="150"/>
            </g>
            <text x="180" y="32" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold">Red Fascial y Tejido Conectivo</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Transmisión miofascial de tensiones corporales en red continua</text>
          </svg>
        `;

      case 'artrocinematica':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Carilla cóncava -->
            <path d="M 60 160 C 130 130 230 130 300 160" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
            <!-- Carilla convexa rodando y deslizando -->
            <circle cx="160" cy="95" r="45" fill="#0D9488" fill-opacity="0.3" stroke="#0D9488" stroke-width="3"/>
            <!-- Giro y deslizamiento -->
            <path d="M 130 85 C 135 65 175 65 185 85" stroke="#F59E0B" stroke-width="4" fill="none"/>
            <path d="M 130 135 L 200 135 M 195 130 L 205 135 L 195 140" stroke="#0D9488" stroke-width="4"/>
            <text x="215" y="140" fill="#00685f" font-size="10" font-weight="bold">Deslizamiento</text>
            <text x="160" y="55" text-anchor="middle" fill="#D97706" font-size="10" font-weight="bold">Rodamiento</text>
            <text x="180" y="188" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Movimientos articulares microscópicos: rodar, deslizar y girar</text>
          </svg>
        `;

      case 'osteocinematica':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <circle cx="180" cy="140" r="12" fill="#00685f"/>
            <!-- Hueso fijo -->
            <line x1="180" y1="140" x2="280" y2="140" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
            <!-- Palanca ósea rotando en el espacio -->
            <line x1="180" y1="140" x2="100" y2="50" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
            <path d="M 230 140 A 50 50 0 0 0 135 75" stroke="#F59E0B" stroke-width="3" stroke-dasharray="4 3" fill="none"/>
            <text x="180" y="30" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold">Osteocinemática (Plano Sagital)</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Desplazamiento angular macroscópico de los huesos en el espacio</text>
          </svg>
        `;

      case 'cadena-cinematica-abierta':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Muslo fijo / pierna libre pateando en el aire -->
            <rect x="70" y="60" width="100" height="24" rx="6" fill="#64748B"/>
            <circle cx="170" cy="72" r="10" fill="#00685f"/>
            <line x1="170" y1="72" x2="270" y2="130" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
            <!-- Pie libre en el aire -->
            <circle cx="270" cy="130" r="12" fill="#0D9488"/>
            <path d="M 260 150 C 275 160 295 150 290 120" stroke="#F59E0B" stroke-width="4" fill="none"/>
            <text x="280" y="175" text-anchor="middle" fill="#F59E0B" font-size="10" font-weight="bold">Extremo Libre (0 Carga)</text>
            <text x="180" y="30" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold">Cadena Cinemática Abierta (CCA)</text>
          </svg>
        `;

      case 'cadena-cinematica-cerrada':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Suelo de soporte fijo -->
            <line x1="40" y1="170" x2="320" y2="170" stroke="#334155" stroke-width="6"/>
            <!-- Pies apoyados firmemente -->
            <rect x="150" y="155" width="60" height="15" rx="4" fill="#00685f"/>
            <!-- Articulación de tobillo, rodilla y cadera flexionándose con carga -->
            <line x1="180" y1="155" x2="150" y2="90" stroke="#0D9488" stroke-width="7" stroke-linecap="round"/>
            <line x1="150" y1="90" x2="190" y2="40" stroke="#0D9488" stroke-width="7" stroke-linecap="round"/>
            <circle cx="150" cy="90" r="8" fill="#F59E0B"/>
            <text x="180" y="30" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold">Cadena Cinemática Cerrada (CCC)</text>
            <text x="180" y="190" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Extremo distal fijo al suelo (Co-contracción y estabilidad axial)</text>
          </svg>
        `;

      case 'isocinetico':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <circle cx="180" cy="110" r="50" stroke="#0D9488" stroke-width="4" stroke-dasharray="8 6"/>
            <line x1="180" y1="110" x2="225" y2="80" stroke="#00685f" stroke-width="6" stroke-linecap="round"/>
            <text x="180" y="40" text-anchor="middle" fill="#0D9488" font-size="12" font-weight="bold">VELOCIDAD CONSTANTE (60°/s)</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Contracción Isocinética: Resistencia acomodada a velocidad fija</text>
          </svg>
        `;

      case 'isotonico':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Mancuerna de carga constante -->
            <rect x="70" y="70" width="80" height="60" rx="8" fill="#64748B"/>
            <path d="M 180 50 L 180 150 M 160 90 L 180 50 L 200 90" stroke="#0D9488" stroke-width="4" fill="none"/>
            <text x="245" y="80" fill="#0D9488" font-size="10" font-weight="bold">Concéntrico</text>
            <text x="245" y="130" fill="#F59E0B" font-size="10" font-weight="bold">Excéntrico</text>
            <text x="180" y="35" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold">Contracción Isotónica (Tensión Dinámica)</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Carga externa constante con variación angular de longitud muscular</text>
          </svg>
        `;

      case 'inversion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Planta del pie inclinada hacia medial -->
            <ellipse cx="180" cy="100" rx="40" ry="70" transform="rotate(-25 180 100)" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 180 140 C 140 140 120 110 135 85" stroke="#0D9488" stroke-width="5" fill="none"/>
            <polygon points="135,75 125,85 140,90" fill="#0D9488"/>
            <text x="100" y="65" fill="#0D9488" font-size="11" font-weight="bold">Planta hacia Medial</text>
            <text x="180" y="25" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold">Inversión del Pie (Supinación + Aducción)</text>
          </svg>
        `;

      case 'eversion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Planta del pie inclinada hacia lateral -->
            <ellipse cx="180" cy="100" rx="40" ry="70" transform="rotate(25 180 100)" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
            <path d="M 180 140 C 220 140 240 110 225 85" stroke="#F59E0B" stroke-width="5" fill="none"/>
            <polygon points="225,75 235,85 220,90" fill="#F59E0B"/>
            <text x="260" y="65" fill="#D97706" font-size="11" font-weight="bold">Planta hacia Lateral</text>
            <text x="180" y="25" text-anchor="middle" fill="#D97706" font-size="11" font-weight="bold">Eversión del Pie (Pronación + Abducción)</text>
          </svg>
        `;

      case 'dorsiflexion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Pierna vertical -->
            <rect x="110" y="30" width="30" height="110" rx="6" fill="#CBD5E1"/>
            <!-- Pie levantándose hacia arriba -->
            <line x1="125" y1="140" x2="230" y2="105" stroke="#0D9488" stroke-width="8" stroke-linecap="round"/>
            <path d="M 230 150 C 240 135 240 115 225 105" stroke="#0D9488" stroke-width="4" fill="none"/>
            <text x="245" y="95" fill="#0D9488" font-size="11" font-weight="bold">DORSIFLEXIÓN</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Acercamiento del dorso del pie hacia la espinilla anterior</text>
          </svg>
        `;

      case 'plantiflexion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Pierna vertical -->
            <rect x="110" y="30" width="30" height="110" rx="6" fill="#CBD5E1"/>
            <!-- Pie apuntando hacia abajo -->
            <line x1="125" y1="140" x2="210" y2="175" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>
            <path d="M 180 140 C 195 150 205 160 215 170" stroke="#F59E0B" stroke-width="4" fill="none"/>
            <text x="225" y="165" fill="#D97706" font-size="11" font-weight="bold">PLANTIFLEXIÓN</text>
            <text x="180" y="188" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Descenso de la punta del pie hacia el suelo (Puntillas)</text>
          </svg>
        `;

      case 'elevacion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="140" y="80" width="80" height="60" rx="10" fill="#0D9488" fill-opacity="0.3" stroke="#0D9488" stroke-width="3"/>
            <path d="M 180 130 L 180 50 M 165 65 L 180 45 L 195 65" stroke="#0D9488" stroke-width="5" stroke-linecap="round"/>
            <text x="180" y="35" text-anchor="middle" fill="#0D9488" font-size="12" font-weight="bold">ELEVACIÓN ESCAPULAR</text>
            <text x="180" y="185" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Desplazamiento en sentido craneal / hacia arriba</text>
          </svg>
        `;

      case 'depresion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="140" y="60" width="80" height="60" rx="10" fill="#64748B" fill-opacity="0.3" stroke="#64748B" stroke-width="3"/>
            <path d="M 180 70 L 180 150 M 165 135 L 180 155 L 195 135" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
            <text x="180" y="40" text-anchor="middle" fill="#D97706" font-size="12" font-weight="bold">DEPRESIÓN ESCAPULAR</text>
            <text x="180" y="185" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Desplazamiento en sentido caudal / hacia abajo</text>
          </svg>
        `;

      case 'protraccion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="100" y="65" width="80" height="70" rx="10" fill="#CBD5E1"/>
            <path d="M 160 100 L 250 100 M 235 85 L 255 100 L 235 115" stroke="#0D9488" stroke-width="5" stroke-linecap="round"/>
            <text x="210" y="75" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold">PROTRACCIÓN</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Desplazamiento anterior (hacia adelante) de escápula o mandíbula</text>
          </svg>
        `;

      case 'retraccion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="180" y="65" width="80" height="70" rx="10" fill="#CBD5E1"/>
            <path d="M 200 100 L 110 100 M 125 85 L 105 100 L 125 115" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
            <text x="150" y="75" text-anchor="middle" fill="#D97706" font-size="11" font-weight="bold">RETRACCIÓN</text>
            <text x="180" y="185" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Desplazamiento posterior (hacia atrás / aproximación a línea media)</text>
          </svg>
        `;

      case 'rotacion-interna':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="170" y="30" width="20" height="130" rx="8" fill="#CBD5E1"/>
            <line x1="180" y1="15" x2="180" y2="185" stroke="#64748B" stroke-width="2" stroke-dasharray="4 3"/>
            <path d="M 160 80 C 120 90 120 110 160 120" stroke="#0D9488" stroke-width="4" fill="none"/>
            <polygon points="150,110 165,120 150,126" fill="#0D9488"/>
            <text x="80" y="105" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold">Rotación Interna</text>
            <text x="180" y="188" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Giro anterior hacia el plano medial del cuerpo</text>
          </svg>
        `;

      case 'rotacion-externa':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <rect x="170" y="30" width="20" height="130" rx="8" fill="#CBD5E1"/>
            <line x1="180" y1="15" x2="180" y2="185" stroke="#64748B" stroke-width="2" stroke-dasharray="4 3"/>
            <path d="M 200 80 C 240 90 240 110 200 120" stroke="#F59E0B" stroke-width="4" fill="none"/>
            <polygon points="210,110 195,120 210,126" fill="#F59E0B"/>
            <text x="280" y="105" text-anchor="middle" fill="#D97706" font-size="11" font-weight="bold">Rotación Externa</text>
            <text x="180" y="188" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Giro posterior alejándose del plano medial</text>
          </svg>
        `;

      case 'circunduccion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Vértice articular -->
            <circle cx="90" cy="100" r="12" fill="#00685f"/>
            <!-- Cono de movimiento -->
            <path d="M 90 100 L 260 40 L 260 160 Z" fill="#0D9488" fill-opacity="0.15"/>
            <ellipse cx="260" cy="100" rx="25" ry="60" stroke="#0D9488" stroke-width="3" fill="none"/>
            <text x="260" y="28" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold">Base Cónica Circular</text>
            <text x="180" y="188" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Circunducción: Secuencia continua flexión-abducción-extensión-aducción</text>
          </svg>
        `;

      case 'anteversion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Pelvis inclinada hacia anterior -->
            <ellipse cx="180" cy="100" rx="70" ry="40" transform="rotate(20 180 100)" fill="#0D9488" fill-opacity="0.25" stroke="#0D9488" stroke-width="3"/>
            <path d="M 230 80 L 270 95 M 260 85 L 275 97 L 265 105" stroke="#0D9488" stroke-width="4"/>
            <text x="260" y="65" fill="#00685f" font-size="11" font-weight="bold">Inclinación Anterior</text>
            <text x="180" y="30" text-anchor="middle" fill="#00685f" font-size="11" font-weight="bold">Anteversión Pélvica / Femoral</text>
          </svg>
        `;

      case 'retroversion':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Pelvis inclinada hacia posterior -->
            <ellipse cx="180" cy="100" rx="70" ry="40" transform="rotate(-20 180 100)" fill="#F59E0B" fill-opacity="0.25" stroke="#F59E0B" stroke-width="3"/>
            <path d="M 130 80 L 90 95 M 100 85 L 85 97 L 95 105" stroke="#F59E0B" stroke-width="4"/>
            <text x="100" y="65" fill="#D97706" font-size="11" font-weight="bold">Inclinación Posterior</text>
            <text x="180" y="30" text-anchor="middle" fill="#D97706" font-size="11" font-weight="bold">Retroversión Pélvica</text>
          </svg>
        `;

      case 'valgo':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Rodillas aproximadas hacia adentro (X) y pies separados hacia afuera -->
            <line x1="120" y1="40" x2="160" y2="105" stroke="#E11D48" stroke-width="6" stroke-linecap="round"/>
            <line x1="240" y1="40" x2="200" y2="105" stroke="#E11D48" stroke-width="6" stroke-linecap="round"/>
            <circle cx="160" cy="105" r="8" fill="#E11D48"/>
            <circle cx="200" cy="105" r="8" fill="#E11D48"/>
            <line x1="160" y1="105" x2="100" y2="170" stroke="#E11D48" stroke-width="6" stroke-linecap="round"/>
            <line x1="200" y1="105" x2="260" y2="170" stroke="#E11D48" stroke-width="6" stroke-linecap="round"/>
            <text x="180" y="30" text-anchor="middle" fill="#E11D48" font-size="11" font-weight="bold">GENU VALGO (Rodillas en X)</text>
            <text x="180" y="190" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Segmento distal se desvía hacia lateral respecto a la línea media</text>
          </svg>
        `;

      case 'varo':
        return `
          <svg class="w-full h-auto max-w-sm mx-auto" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="200" rx="12" fill="#F8FAFC"/>
            <!-- Rodillas separadas hacia afuera (paréntesis) y pies juntos -->
            <line x1="150" y1="40" x2="105" y2="105" stroke="#0D9488" stroke-width="6" stroke-linecap="round"/>
            <line x1="210" y1="40" x2="255" y2="105" stroke="#0D9488" stroke-width="6" stroke-linecap="round"/>
            <circle cx="105" cy="105" r="8" fill="#0D9488"/>
            <circle cx="255" cy="105" r="8" fill="#0D9488"/>
            <line x1="105" y1="105" x2="160" y2="170" stroke="#0D9488" stroke-width="6" stroke-linecap="round"/>
            <line x1="255" y1="105" x2="200" y2="170" stroke="#0D9488" stroke-width="6" stroke-linecap="round"/>
            <text x="180" y="30" text-anchor="middle" fill="#0D9488" font-size="11" font-weight="bold">GENU VARO (Rodillas en Paréntesis)</text>
            <text x="180" y="190" text-anchor="middle" fill="#64748B" font-size="10" font-weight="bold">Segmento distal se desvía hacia medial respecto a la línea media</text>
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

  // --- NAVEGACIÓN Y ENRUTAMIENTO (SPA TABS & HASH ROUTER) ---
  function normalizeTabName(raw) {
    if (!raw) return 'explorador';
    const clean = raw.toString().toLowerCase().trim().replace(/^#\/?/, '').split('/')[0];
    if (clean === 'quizzes' || clean === 'cuestionarios' || clean === 'cuestionario' || clean === 'evaluacion' || clean === 'quizzes-de-autoevaluacion') {
      return 'quizzes';
    }
    if (clean === 'terminos' || clean === 'termino' || clean === 'catalogo') {
      return 'terminos';
    }
    if (clean === 'favoritos' || clean === 'flashcards' || clean === 'mis-favoritos-flashcards') {
      return 'favoritos';
    }
    return 'explorador';
  }

  function initRouter() {
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
  }

  function handleHashChange() {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    const parts = rawHash.split('/');
    const route = parts[0] || 'explorador';

    if ((route === 'terminos' || route === 'termino') && parts[1]) {
      state.route = 'termino';
      state.selectedTermId = parts[1];
      showTermDetailView(parts[1]);
    } else {
      const norm = normalizeTabName(route);
      switchTab(norm);
    }
  }

  function navigateTo(hash) {
    const targetHash = hash.startsWith('#') ? hash : '#' + hash;
    if (window.location.hash === targetHash) {
      handleHashChange();
    } else {
      window.location.hash = targetHash;
    }
  }

  function showTermDetailView(termId) {
    hideLoader();
    ['explorador', 'favoritos', 'quizzes'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('hidden');
        el.classList.remove('active');
        el.style.display = 'none';
      }
    });

    const terminosEl = document.getElementById('terminos');
    if (terminosEl) {
      terminosEl.classList.remove('hidden');
      terminosEl.classList.add('active');
      terminosEl.style.display = '';
      terminosEl.innerHTML = renderTerminoView();
      bindTerminoEvents();
    }
    updateNavActiveStates('terminos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchTab(tabName) {
    hideLoader();
    const normalized = normalizeTabName(tabName);
    state.route = normalized;

    const tabIds = ['explorador', 'terminos', 'favoritos', 'quizzes'];
    tabIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (id === normalized) {
          el.classList.remove('hidden');
          el.classList.add('active');
          el.style.display = 'block';
        } else {
          el.classList.add('hidden');
          el.classList.remove('active');
          el.style.display = 'none';
        }
      }
    });

    if (normalized === 'quizzes') {
      const quizzesEl = document.getElementById('quizzes') || document.getElementById('cuestionarios') || document.getElementById('quizzes-section');
      if (quizzesEl) {
        quizzesEl.classList.remove('hidden');
        quizzesEl.classList.add('active');
        quizzesEl.style.display = 'block';
        ['explorador', 'terminos', 'favoritos'].forEach(otherId => {
          const otherEl = document.getElementById(otherId);
          if (otherEl) {
            otherEl.classList.add('hidden');
            otherEl.classList.remove('active');
            otherEl.style.display = 'none';
          }
        });
        renderQuizzes();
      }
    } else if (normalized === 'terminos') {
      const terminosEl = document.getElementById('terminos');
      if (terminosEl) {
        terminosEl.innerHTML = renderCatalogoTerminosView();
        bindCatalogoTerminosEvents();
      }
    } else if (normalized === 'favoritos') {
      const favEl = document.getElementById('favoritos');
      if (favEl) {
        favEl.innerHTML = renderFavoritosView();
        bindFavoritosEvents();
      }
    } else if (normalized === 'explorador') {
      const expEl = document.getElementById('explorador');
      if (expEl) {
        const termsContainer = document.getElementById('terms-container');
        const resultsContainer = document.getElementById('terms-results-container');
        if (!termsContainer && !resultsContainer) {
          expEl.innerHTML = renderExploradorView();
          bindExploradorEvents();
        }
        renderTerms(getFilteredTerms());
      }
    }

    // Sincronizar hash si difiere
    const currentHashClean = window.location.hash.replace(/^#\/?/, '').split('/')[0];
    if (normalizeTabName(currentHashClean) !== normalized) {
      try {
        history.replaceState(null, '', '#' + normalized);
      } catch (e) {
        window.location.hash = '#' + normalized;
      }
    }

    updateNavActiveStates(normalized);
    updateFavoritesBadges();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateNavActiveStates(activeTab) {
    const current = normalizeTabName(activeTab || state.route || 'explorador');

    // Desktop nav links
    const desktopLinks = document.querySelectorAll('#desktop-nav a, [data-route-nav]');
    desktopLinks.forEach(link => {
      const target = normalizeTabName(link.getAttribute('data-tab') || link.getAttribute('data-route-nav') || link.getAttribute('href'));
      const isActive = target === current;
      if (isActive) {
        link.classList.add('active', 'bg-primary-container', 'text-on-primary-container', 'font-semibold', 'shadow-sm');
        link.classList.remove('text-on-surface-variant', 'hover:bg-surface-container-high');
      } else {
        link.classList.remove('active', 'bg-primary-container', 'text-on-primary-container', 'font-semibold', 'shadow-sm');
        link.classList.add('text-on-surface-variant', 'hover:bg-surface-container-high');
      }
    });

    // Mobile bottom nav links
    const mobileLinks = document.querySelectorAll('#mobile-nav a, [data-route-mobile]');
    mobileLinks.forEach(link => {
      const target = normalizeTabName(link.getAttribute('data-tab') || link.getAttribute('data-route-mobile') || link.getAttribute('href'));
      const isActive = target === current;
      if (isActive) {
        link.classList.add('active', 'text-primary', 'font-bold');
        link.classList.remove('text-slate-muted');
      } else {
        link.classList.remove('active', 'text-primary', 'font-bold');
        link.classList.add('text-slate-muted');
      }
    });

    // Enlaces globales con clase .nav-link
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => {
      const target = normalizeTabName(link.getAttribute('data-tab') || link.getAttribute('href'));
      if (target === current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function hideLoader() {
    const loader = document.getElementById('loader') || document.getElementById('app-loader');
    if (loader) {
      loader.style.setProperty('display', 'none', 'important');
    }
  }

  function renderCurrentRoute() {
    switchTab(state.route);
  }

  // --- NORMALIZACIÓN Y BÚSQUEDA INTELIGENTE ---
  function normalizeText(str) {
    if (!str) return '';
    return str
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
  const normalizeSearchText = normalizeText;

  function getCategoryLabel(cat) {
    const map = {
      todos: 'Todos los tipos',
      musculos: 'Músculos y Biomecánica',
      huesos: 'Huesos y Tendones',
      huesos_tendones: 'Huesos y Tendones',
      articulaciones: 'Articulaciones',
      movimientos: 'Movimientos y Orientación'
    };
    return map[cat] || cat;
  }
  const getCategoryName = getCategoryLabel;

  function getRegionLabel(reg) {
    const map = {
      todas: 'Todas las regiones',
      columna: 'Columna Vertebral',
      hombro: 'Hombro',
      codo: 'Codo y Antebrazo',
      mano: 'Mano y Muñeca',
      cadera: 'Cadera',
      rodilla: 'Rodilla',
      tobillo: 'Tobillo y Pie',
      general: 'Global / General'
    };
    return map[reg] || reg;
  }
  const getRegionName = getRegionLabel;

  // --- FILTRADO DE TÉRMINOS (INSENSIBLE A TILDES Y MAYÚSCULAS) ---
  function getFilteredTerms() {
    const rawSearch = normalizeText(state.searchTerm);
    const tokens = rawSearch.split(/\s+/).filter(Boolean);

    let filtered = getTerms().filter(term => {
      // 1. Coincidencia por texto completo o parcial en todos los campos académicos
      if (tokens.length > 0) {
        const corpus = normalizeText([
          term.name,
          term.termino,
          term.id,
          term.category,
          term.categoryLabel,
          term.region,
          term.regionLabel,
          term.simpleExplanation,
          term.explicacionSencilla,
          term.technicalDef,
          term.defTecnica,
          term.everydayTitle,
          term.everydayExample,
          term.analogia,
          term.clinicalTitle,
          term.clinicalRelevance,
          term.clinicalCase,
          term.pronunciation,
          term.fonetica,
          term.level,
          ...(term.keyDetails ? term.keyDetails.map(d => `${d.label} ${d.value}`) : [])
        ].join(' '));

        const matchesAll = tokens.every(token => corpus.includes(token));
        if (!matchesAll) return false;
      }

      // 2. Filtro de Categoría
      if (state.selectedCategory !== 'todos') {
        if (state.selectedCategory === 'huesos' || state.selectedCategory === 'huesos_tendones') {
          if (term.category !== 'huesos' && term.category !== 'huesos_tendones') return false;
        } else if (term.category !== state.selectedCategory) {
          return false;
        }
      }

      // 3. Filtro de Región Corporal
      if (state.selectedRegion !== 'todas') {
        if (term.region !== state.selectedRegion) return false;
      }

      return true;
    });

    // Ordenamiento por relevancia o por A-Z
    if (tokens.length > 0) {
      filtered.sort((a, b) => {
        const aName = normalizeText(a.name || a.termino);
        const bName = normalizeText(b.name || b.termino);

        // Coincidencia que inicia con el texto de búsqueda
        const aStarts = aName.startsWith(rawSearch);
        const bStarts = bName.startsWith(rawSearch);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        // Coincidencia que incluye el texto en el nombre
        const aIncludes = aName.includes(rawSearch);
        const bIncludes = bName.includes(rawSearch);
        if (aIncludes && !bIncludes) return -1;
        if (!aIncludes && bIncludes) return 1;

        return (a.name || a.termino).localeCompare(b.name || b.termino, 'es');
      });
    } else if (state.sortBy === 'az') {
      filtered.sort((a, b) => (a.name || a.termino).localeCompare(b.name || b.termino, 'es'));
    }

    return filtered;
  }

  // ==========================================
  // VISTA 1: EXPLORADOR DICCIONARIO PRINCIPAL
  // ==========================================
  function renderExploradorView() {
    const allTerms = getTerms();
    const featuredTerm = allTerms.find(t => t.id === 'propiocepcion') || allTerms[0] || FALLBACK_TERMS[0];
    const isFeaturedFav = state.favorites && featuredTerm ? state.favorites.has(featuredTerm.id) : false;
    const filteredTerms = getFilteredTerms();

    const countTotal = allTerms.length;
    const countMusculos = allTerms.filter(t => t.category === 'musculos').length;
    const countHuesos = allTerms.filter(t => t.category === 'huesos').length;
    const countArticulaciones = allTerms.filter(t => t.category === 'articulaciones').length;
    const countMovimientos = allTerms.filter(t => t.category === 'movimientos').length;

    const countColumna = allTerms.filter(t => t.region === 'columna').length;
    const countHombro = allTerms.filter(t => t.region === 'hombro').length;
    const countCodo = allTerms.filter(t => t.region === 'codo').length;
    const countCadera = allTerms.filter(t => t.region === 'cadera').length;
    const countRodilla = allTerms.filter(t => t.region === 'rodilla').length;
    const countTobillo = allTerms.filter(t => t.region === 'tobillo').length;
    const countGeneral = allTerms.filter(t => t.region === 'general').length;

    return `
      <!-- SEARCH & WELCOME HERO -->
      <section class="relative w-full rounded-2xl bg-surface-container-low p-6 sm:p-10 lg:p-12 overflow-hidden shadow-sm">
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber-quiz/5 blur-2xl pointer-events-none"></div>
        
        <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-4">
            <span class="flex h-2 w-2 rounded-full bg-cat-muscles animate-pulse"></span>
            <span class="font-label-caps text-label-caps text-primary uppercase tracking-wider font-bold">Diccionario Clínico Pedagógico</span>
            <span class="text-slate-muted text-xs">•</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-medium">${countTotal} Términos Oficiales</span>
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
                id="search-input"
                name="search-input"
                data-id="main-search-input"
                type="text"
                autocomplete="off"
                value="${state.searchTerm}"
                placeholder="Escribe un término (ej. Agonista, Flexión, Supinación, LCA, Menisco...)"
                class="w-full pl-12 pr-12 py-3.5 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-slate-muted focus:outline-none"
              />
              <button id="clear-search-btn" class="absolute right-3.5 p-1 text-slate-muted hover:text-on-surface transition-colors ${state.searchTerm ? '' : 'hidden'}" type="button" aria-label="Limpiar búsqueda">
                <span class="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <!-- CHIPS DE TIPO EN EL BUSCADOR -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 px-1 no-scrollbar" id="category-filter-chips">
              <span class="font-label-sm text-label-sm text-slate-muted mr-1 hidden sm:inline-block font-bold">Tipo:</span>
              <button data-cat="todos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'todos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                Todos (${countTotal})
              </button>
              <button data-cat="musculos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'musculos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-muscles mr-1.5"></span>Músculos (${countMusculos})
              </button>
              <button data-cat="huesos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'huesos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-bones mr-1.5"></span>Huesos y Tendones (${countHuesos})
              </button>
              <button data-cat="articulaciones" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'articulaciones' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-joints mr-1.5"></span>Articulaciones (${countArticulaciones})
              </button>
              <button data-cat="movimientos" class="px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${state.selectedCategory === 'movimientos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}">
                <span class="inline-block w-2 h-2 rounded-full bg-cat-movements mr-1.5"></span>Movimientos (${countMovimientos})
              </button>
            </div>
          </div>

          <!-- TENDENCIAS RÁPIDAS -->
          <div class="flex flex-wrap items-center justify-center gap-2 mt-4 text-left">
            <span class="font-label-caps text-label-caps text-slate-muted uppercase font-bold">Tendencias:</span>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Agonista">Agonista</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Flexión">Flexión</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Supinación">Supinación</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Isométrico">Isométrico</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="LCA">LCA Rodilla</button>
            <button class="quick-tag-btn px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary/10 font-label-sm text-label-sm text-on-surface-variant transition-colors" data-tag="Manguito">Manguito Rotador</button>
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
          ${renderRegionButton('todas', `Todas (${countTotal})`, 'dataset', state.selectedRegion === 'todas')}
          ${renderRegionButton('columna', `Columna (${countColumna})`, 'view_column', state.selectedRegion === 'columna')}
          ${renderRegionButton('hombro', `Hombro (${countHombro})`, 'sports_gymnastics', state.selectedRegion === 'hombro')}
          ${renderRegionButton('codo', `Codo (${countCodo})`, 'fitness_center', state.selectedRegion === 'codo')}
          ${renderRegionButton('cadera', `Cadera (${countCadera})`, 'airline_seat_recline_normal', state.selectedRegion === 'cadera')}
          ${renderRegionButton('rodilla', `Rodilla (${countRodilla})`, 'directions_walk', state.selectedRegion === 'rodilla')}
          ${renderRegionButton('tobillo', `Tobillo (${countTobillo})`, 'do_not_step', state.selectedRegion === 'tobillo')}
          ${renderRegionButton('general', `Global (${countGeneral})`, 'public', state.selectedRegion === 'general')}
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
                <h3 class="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">${featuredTerm.name || featuredTerm.termino}</h3>
                <button onclick="window.fisiopediaApp.speak('${featuredTerm.name || featuredTerm.termino}')" class="p-1.5 rounded-full hover:bg-surface-container-high text-slate-muted hover:text-primary transition-colors cursor-pointer" type="button" title="Escuchar pronunciación">
                  <span class="material-symbols-outlined text-xl">volume_up</span>
                </button>
              </div>

              <p class="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed max-w-xl">
                <strong class="font-semibold text-on-surface">Definición técnica:</strong> ${featuredTerm.technicalDef || featuredTerm.defTecnica}
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
                    "${featuredTerm.simpleExplanation || featuredTerm.explicacionSencilla}"
                  </p>
                </div>
              </div>

              <!-- Ejemplo cotidiano / Analogía -->
              <div class="mt-4 p-4 rounded-xl bg-amber-quiz/10 flex items-start gap-3.5 border-l-4 border-amber-quiz">
                <div class="p-2 rounded-lg bg-amber-quiz/20 text-amber-quiz shrink-0">
                  <span class="material-symbols-outlined text-2xl">emoji_objects</span>
                </div>
                <div>
                  <span class="font-label-caps text-label-caps uppercase text-amber-quiz font-bold block mb-1">
                    Analogía de la Vida Cotidiana
                  </span>
                  <p class="font-body-sm text-body-sm text-on-surface leading-snug">
                    ${featuredTerm.everydayExample || featuredTerm.analogia}
                  </p>
                </div>
              </div>

              <!-- CTAs -->
              <div class="mt-6 flex flex-wrap items-center gap-3">
                <a href="#termino/${featuredTerm.id}" class="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-2 font-bold">
                  <span>Ver ficha anatómica completa</span>
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
                <button onclick="window.fisiopediaApp.toggleFav('${featuredTerm.id}')" class="px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all flex items-center gap-2 cursor-pointer">
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
      <!-- CONTENEDOR REACTIVO DE RESULTADOS Y GRILLA -->
      <section class="mt-14 w-full" id="terms-results-container">
        ${renderTermsResultsHTML(filteredTerms)}
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
                  Cuestionarios de Práctica (${getQuizzes().length || 25} Preguntas)
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

  // --- SUB-RENDERER DE RESULTADOS DE TÉRMINOS ---
  function renderTermsResultsHTML(filteredTerms) {
    const hasActiveFilters = state.searchTerm !== '' || state.selectedCategory !== 'todos' || state.selectedRegion !== 'todas';

    return `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2">
            <span>${state.searchTerm ? `Resultados de búsqueda` : 'Términos Anatómicos y Biomecánicos'}</span>
            <span class="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
              ${filteredTerms.length} ${filteredTerms.length === 1 ? 'término' : 'términos'}
            </span>
          </h2>
          <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            ${state.searchTerm ? `Coincidencias para "${state.searchTerm}" sin distinguir mayúsculas ni tildes.` : `Explora los ${FISIOPEDIA_TERMS.length} conceptos esenciales de Fisioterapia.`}
          </p>
        </div>

        <!-- Tabs de ordenamiento -->
        <div class="inline-flex p-1 rounded-xl bg-surface-container-high self-start sm:self-auto shrink-0">
          <button data-sort="populares" class="sort-tab-btn px-3 py-1 rounded-lg font-label-sm text-label-sm transition-all ${state.sortBy === 'populares' ? 'bg-surface-container-lowest text-on-surface shadow-xs font-bold' : 'text-on-surface-variant hover:text-on-surface'}">
            Relevancia
          </button>
          <button data-sort="az" class="sort-tab-btn px-3 py-1 rounded-lg font-label-sm text-label-sm transition-all ${state.sortBy === 'az' ? 'bg-surface-container-lowest text-on-surface shadow-xs font-bold' : 'text-on-surface-variant hover:text-on-surface'}">
            Orden A-Z
          </button>
        </div>
      </div>

      <!-- Barra de Filtros Activos (si hay alguno aplicado) -->
      ${hasActiveFilters ? `
        <div class="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-surface-container-low border border-slate-border/50 mb-6">
          <span class="text-xs font-bold text-slate-muted uppercase tracking-wider flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">tune</span> Filtros aplicados:
          </span>
          ${state.searchTerm ? `
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold shadow-xs">
              <span>Búsqueda: "${state.searchTerm}"</span>
              <button onclick="window.fisiopediaApp.clearSearchQuery()" class="hover:text-coral-alert transition-colors flex items-center" title="Quitar búsqueda">
                <span class="material-symbols-outlined text-sm">close</span>
              </button>
            </span>
          ` : ''}
          ${state.selectedCategory !== 'todos' ? `
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cat-bones/15 text-cat-bones text-xs font-bold shadow-xs">
              <span>Tipo: ${getCategoryLabel(state.selectedCategory)}</span>
              <button onclick="window.fisiopediaApp.setCategory('todos')" class="hover:text-coral-alert transition-colors flex items-center" title="Quitar filtro de tipo">
                <span class="material-symbols-outlined text-sm">close</span>
              </button>
            </span>
          ` : ''}
          ${state.selectedRegion !== 'todas' ? `
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cat-joints/15 text-cat-joints text-xs font-bold shadow-xs">
              <span>Región: ${getRegionLabel(state.selectedRegion)}</span>
              <button onclick="window.fisiopediaApp.setRegion('todas')" class="hover:text-coral-alert transition-colors flex items-center" title="Quitar filtro de región">
                <span class="material-symbols-outlined text-sm">close</span>
              </button>
            </span>
          ` : ''}
          <button onclick="window.fisiopediaApp.clearSearch()" class="ml-auto text-xs text-coral-alert hover:underline font-bold flex items-center gap-1 py-1 px-2 rounded hover:bg-coral-alert/10 transition-colors">
            <span class="material-symbols-outlined text-sm">filter_alt_off</span>
            Limpiar todos los filtros
          </button>
        </div>
      ` : ''}

      ${filteredTerms.length === 0 ? `
        <div id="terms-container" class="w-full">
          <div class="p-12 text-center rounded-2xl bg-surface-container-lowest border border-dashed border-slate-border">
            <div class="w-16 h-16 mx-auto rounded-full bg-slate-subtle flex items-center justify-center text-slate-muted mb-3">
              <span class="material-symbols-outlined text-4xl">search_off</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">No se encontraron términos coincidentes</h3>
            <p class="font-body-md text-body-md text-slate-muted mt-2 max-w-lg mx-auto">
              No encontramos ningún concepto anatómico con los criterios actuales.
              Prueba buscando sin tildes (ej. <em>agonista</em>, <em>flexion</em>, <em>supinacion</em>, <em>isometrico</em>) o limpia los filtros para ver todo el compendio.
            </p>
            <div class="mt-6 flex items-center justify-center gap-3">
              <button onclick="window.fisiopediaApp.clearSearch()" class="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm font-bold flex items-center gap-2 transition-all">
                <span class="material-symbols-outlined text-lg">filter_alt_off</span>
                <span>Restablecer búsqueda y filtros</span>
              </button>
            </div>
          </div>
        </div>
      ` : `
        <div id="terms-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredTerms.map(term => renderTermCard(term)).join('')}
        </div>
      `}
    `;
  }

  function renderRegionButton(id, label, icon, isActive) {
    return `
      <button
        data-region="${id}"
        class="region-btn flex flex-col items-center justify-center p-3.5 rounded-xl ${isActive ? 'bg-primary text-on-primary shadow-md ring-2 ring-primary/30' : 'bg-surface-container-lowest hover:bg-surface-container-low shadow-sm text-on-surface'} transition-all text-center group border border-slate-border/40 cursor-pointer"
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
    const titleName = term.name || term.termino;
    const example = term.everydayExample || term.analogia;
    return `
      <article class="flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-slate-border/50">
        <div>
          <div class="flex items-center justify-between">
            <span class="px-3 py-1 rounded-full ${term.categoryClass || 'bg-primary/10 text-primary'} font-label-caps text-label-caps uppercase font-bold">
              ${term.categoryLabel}
            </span>
            <button
              onclick="window.fisiopediaApp.toggleFav('${term.id}')"
              class="p-1 text-slate-muted hover:text-amber-quiz transition-colors cursor-pointer"
              type="button"
              aria-label="Agregar a favoritos"
            >
              <span class="material-symbols-outlined text-xl ${isFav ? 'text-amber-quiz' : ''}" style="font-variation-settings: 'FILL' ${isFav ? '1' : '0'};">
                ${isFav ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>

          <h3 class="font-headline-sm text-headline-sm text-on-surface mt-4 group-hover:text-primary transition-colors cursor-pointer font-bold" onclick="window.location.hash='#termino/${term.id}'">
            ${titleName}
          </h3>

          <!-- Definición médica / ¿Qué es? -->
          <div class="mt-2 text-xs sm:text-sm text-on-surface leading-relaxed">
            <p><strong class="font-bold text-primary">¿Qué es?</strong> ${term.simpleExplanation || term.explicacionSencilla || term.technicalDef || term.defTecnica}</p>
          </div>

          <div class="mt-3 p-3 rounded-lg bg-surface-container-low border border-slate-border/30">
            <span class="font-label-caps text-label-caps uppercase text-cat-muscles block mb-1 font-bold">En el día a día</span>
            <p class="font-body-sm text-body-sm text-on-surface leading-snug line-clamp-3">
              ${example}
            </p>
          </div>

          <div class="mt-4 pt-2 text-xs text-on-surface-variant flex items-center justify-between">
            <span class="text-slate-muted">Región: <strong class="text-on-surface">${term.regionLabel}</strong></span>
            <span class="text-slate-muted font-medium">${term.readingTime || '2 min'}</span>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-border/50 flex items-center justify-between">
          <a href="#termino/${term.id}" class="font-label-sm text-label-sm text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
            Ver explicación sencilla <span class="material-symbols-outlined text-base">arrow_forward</span>
          </a>
          <button onclick="window.fisiopediaApp.speak('${titleName}')" class="text-slate-muted hover:text-primary p-1 cursor-pointer" title="Escuchar pronunciación">
            <span class="material-symbols-outlined text-base">volume_up</span>
          </button>
        </div>
      </article>
    `;
  }

  // Función global de renderizado renderTerms(terms) (solicitada)
  function renderTerms(termsToRender) {
    try {
      const list = Array.isArray(termsToRender) ? termsToRender : getFilteredTerms();
      const resultsContainer = document.getElementById('terms-results-container');
      const termsContainer = document.getElementById('terms-container');

      if (resultsContainer) {
        resultsContainer.innerHTML = renderTermsResultsHTML(list);
        bindSortTabEvents();
      } else if (termsContainer) {
        if (list.length === 0) {
          termsContainer.innerHTML = `
            <div class="col-span-full p-12 text-center rounded-2xl bg-surface-container-lowest border border-dashed border-slate-border">
              <span class="material-symbols-outlined text-4xl text-slate-muted mb-2">search_off</span>
              <p class="font-headline-sm text-base font-bold text-on-surface">No se encontraron términos coincidentes</p>
              <p class="text-sm text-slate-muted mt-1">Intenta con otra palabra o limpia los filtros.</p>
            </div>
          `;
        } else {
          termsContainer.innerHTML = list.map(term => renderTermCard(term)).join('');
        }
      }
      return list;
    } catch (err) {
      console.error('Error en renderTerms:', err);
    }
  }
  window.renderTerms = renderTerms;

  function updateExploradorResultsOnly() {
    try {
      const terms = getFilteredTerms();
      renderTerms(terms);
      const clearBtn = document.getElementById('clear-search-btn');
      if (clearBtn) {
        clearBtn.classList.toggle('hidden', !state.searchTerm);
      }
    } catch (err) {
      console.error('Error en updateExploradorResultsOnly:', err);
    }
  }

  function bindSortTabEvents() {
    document.querySelectorAll('.sort-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.sortBy = btn.getAttribute('data-sort');
        updateExploradorResultsOnly();
      });
    });
  }

  // Función maestra y unificada de búsqueda reactiva en tiempo real
  function executeRealtimeSearch(query) {
    try {
      state.searchTerm = query || '';
      
      // Sincronizar todos los inputs existentes
      const allInputs = document.querySelectorAll('#search-input, #desktop-header-search, [data-id="main-search-input"]');
      allInputs.forEach(inp => {
        if (inp.value !== state.searchTerm) {
          inp.value = state.searchTerm;
        }
      });

      const clearBtn = document.getElementById('clear-search-btn');
      if (clearBtn) {
        clearBtn.classList.toggle('hidden', !state.searchTerm);
      }

      // Si el usuario busca mientras está en otra vista, redirigir al explorador
      if (state.route !== 'explorador' && state.route !== 'terminos') {
        state.route = 'explorador';
        window.location.hash = '#explorador';
        renderCurrentRoute();
        return;
      }

      // Filtrar siempre sobre el compendio total normalizando con NFD (sin tildes, minúsculas)
      const filtrados = getFilteredTerms();
      renderTerms(filtrados);
    } catch (err) {
      console.error('Error en executeRealtimeSearch:', err);
    }
  }

  function bindExploradorEvents() {
    try {
      const searchInput = document.getElementById('search-input') || document.getElementById('main-search-input');
      const clearBtn = document.getElementById('clear-search-btn');
      const desktopSearch = document.getElementById('desktop-header-search');

      function handleSearchInput(e) {
        executeRealtimeSearch(e.target.value);
      }

      if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
      }

      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          try {
            state.searchTerm = '';
            if (searchInput) {
              searchInput.value = '';
              searchInput.focus();
            }
            if (desktopSearch) desktopSearch.value = '';
            updateExploradorResultsOnly();
          } catch (err) {
            console.error('Error al limpiar búsqueda:', err);
          }
        });
      }

      // Filtros de categoría
      document.querySelectorAll('#category-filter-chips button[data-cat]').forEach(btn => {
        btn.addEventListener('click', () => {
          try {
            state.selectedCategory = btn.getAttribute('data-cat');
            renderCurrentRoute();
          } catch (err) {
            console.error('Error en filtro de categoría:', err);
          }
        });
      });

      // Etiquetas rápidas de tendencias
      document.querySelectorAll('.quick-tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          try {
            state.searchTerm = btn.getAttribute('data-tag');
            if (searchInput) searchInput.value = state.searchTerm;
            if (desktopSearch) desktopSearch.value = state.searchTerm;
            renderCurrentRoute();
          } catch (err) {
            console.error('Error en etiqueta de tendencia:', err);
          }
        });
      });

      // Filtros de región
      document.querySelectorAll('.region-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          try {
            state.selectedRegion = btn.getAttribute('data-region');
            renderCurrentRoute();
          } catch (err) {
            console.error('Error en filtro de región:', err);
          }
        });
      });

      // Ordenamiento
      bindSortTabEvents();
    } catch (err) {
      console.error('Error en bindExploradorEvents:', err);
    }
  }


  function findTermById(id) {
    if (!id) return null;
    const direct = FISIOPEDIA_TERMS.find(t => t.id === id);
    if (direct) return direct;

    const aliases = {
      'flexion-extension': 'flexion',
      'abduccion-aduccion': 'abduccion',
      'supinacion-pronacion': 'supinacion'
    };
    if (aliases[id]) {
      return FISIOPEDIA_TERMS.find(t => t.id === aliases[id]);
    }
    return null;
  }


  // ==========================================
  // VISTA 2B: CATÁLOGO COMPLETO DE TÉRMINOS ILUSTRADOS (#terminos)
  // ==========================================
  function renderCatalogoTerminosView() {
    const allTerms = getTerms();
    const selCat = state.catalogoCategory || 'todos';

    const countTotal = allTerms.length;
    const countMusculos = allTerms.filter(t => t.category === 'musculos').length;
    const countHuesos = allTerms.filter(t => t.category === 'huesos' || t.category === 'huesos_tendones').length;
    const countArticulaciones = allTerms.filter(t => t.category === 'articulaciones').length;
    const countMovimientos = allTerms.filter(t => t.category === 'movimientos').length;

    let displayTerms = allTerms;
    if (selCat !== 'todos') {
      if (selCat === 'huesos' || selCat === 'huesos_tendones') {
        displayTerms = allTerms.filter(t => t.category === 'huesos' || t.category === 'huesos_tendones');
      } else {
        displayTerms = allTerms.filter(t => t.category === selCat);
      }
    }

    return `
      <!-- Encabezado de la Sección Términos Anatómicos -->
      <section class="w-full mb-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-border/50">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-2">
              <span class="material-symbols-outlined text-sm font-bold">menu_book</span>
              <span class="font-label-caps text-label-caps uppercase tracking-wider font-bold">Diccionario Visual Ilustrado</span>
            </div>
            <h1 class="font-headline-lg text-headline-lg text-on-surface font-bold">
              Compendio Anatómico Completo
            </h1>
            <p class="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
              Explora los <strong>${countTotal} términos oficiales</strong> organizados por categorías, con ilustraciones vectoriales SVG de alta definición, explicaciones sencillas y analogías cotidianas.
            </p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="px-4 py-2 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-sm flex items-center gap-1.5">
              <span class="material-symbols-outlined text-lg">auto_awesome</span>
              <span>${displayTerms.length} de ${countTotal} Términos</span>
            </span>
          </div>
        </div>

        <!-- Filtros de Categoría para el Catálogo -->
        <div class="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar" id="catalogo-filter-chips">
          <span class="font-label-sm text-slate-muted mr-1 hidden sm:inline-block font-bold">Categoría:</span>
          <button data-catalogo-cat="todos" class="px-4 py-2 rounded-full font-label-sm text-xs transition-all ${selCat === 'todos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-medium'} cursor-pointer">
            Todos (${countTotal})
          </button>
          <button data-catalogo-cat="musculos" class="px-4 py-2 rounded-full font-label-sm text-xs transition-all ${selCat === 'musculos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-medium'} cursor-pointer">
            <span class="inline-block w-2 h-2 rounded-full bg-cat-muscles mr-1.5"></span>Músculos (${countMusculos})
          </button>
          <button data-catalogo-cat="huesos" class="px-4 py-2 rounded-full font-label-sm text-xs transition-all ${selCat === 'huesos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-medium'} cursor-pointer">
            <span class="inline-block w-2 h-2 rounded-full bg-cat-bones mr-1.5"></span>Huesos y Tendones (${countHuesos})
          </button>
          <button data-catalogo-cat="articulaciones" class="px-4 py-2 rounded-full font-label-sm text-xs transition-all ${selCat === 'articulaciones' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-medium'} cursor-pointer">
            <span class="inline-block w-2 h-2 rounded-full bg-cat-joints mr-1.5"></span>Articulaciones (${countArticulaciones})
          </button>
          <button data-catalogo-cat="movimientos" class="px-4 py-2 rounded-full font-label-sm text-xs transition-all ${selCat === 'movimientos' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-medium'} cursor-pointer">
            <span class="inline-block w-2 h-2 rounded-full bg-cat-movements mr-1.5"></span>Movimientos (${countMovimientos})
          </button>
        </div>
      </section>

      <!-- Grilla del 100% de Términos con Ilustración Vectorial SVG -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="catalogo-terms-container">
        ${displayTerms.map(term => {
          const isFav = state.favorites.has(term.id);
          const whatIs = term.simpleExplanation || term.explicacionSencilla || term.technicalDef || term.defTecnica;
          return `
            <article class="flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group border border-slate-border/50 overflow-hidden">
              <div>
                <!-- Ilustración Vectorial SVG estilizada -->
                <div class="w-full bg-surface-container-low rounded-xl p-3 mb-4 flex items-center justify-center overflow-hidden border border-slate-border/30">
                  ${getTermSvg(term.svgType)}
                </div>

                <div class="flex items-center justify-between gap-2">
                  <span class="px-2.5 py-0.5 rounded-full ${term.categoryClass || 'bg-primary/10 text-primary'} font-label-caps text-[11px] uppercase font-bold">
                    ${term.categoryLabel}
                  </span>
                  <button
                    onclick="window.fisiopediaApp.toggleFav('${term.id}')"
                    class="p-1 text-slate-muted hover:text-amber-quiz transition-colors cursor-pointer"
                    type="button"
                    title="Guardar en favoritos"
                  >
                    <span class="material-symbols-outlined text-lg ${isFav ? 'text-amber-quiz' : ''}" style="font-variation-settings: 'FILL' ${isFav ? '1' : '0'};">
                      ${isFav ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>
                </div>

                <div class="flex items-center justify-between gap-2 mt-3">
                  <h3 class="font-headline-sm text-lg text-on-surface font-bold group-hover:text-primary transition-colors cursor-pointer" onclick="window.location.hash='#termino/${term.id}'">
                    ${term.name || term.termino}
                  </h3>
                  <button onclick="window.fisiopediaApp.speak('${term.name || term.termino}')" class="text-slate-muted hover:text-primary p-1 cursor-pointer shrink-0" title="Pronunciación">
                    <span class="material-symbols-outlined text-base">volume_up</span>
                  </button>
                </div>

                <!-- Definición / ¿Qué es? -->
                <div class="mt-2 text-xs sm:text-sm text-on-surface leading-relaxed">
                  <p><strong class="font-semibold text-primary">¿Qué es?</strong> ${whatIs}</p>
                </div>

                <!-- En la vida diaria -->
                <div class="mt-2.5 p-2 rounded-lg bg-surface-container-low border border-slate-border/30 text-[11px]">
                  <strong class="text-cat-muscles block mb-0.5 font-bold">En el día a día:</strong>
                  <p class="text-on-surface line-clamp-2">${term.everydayExample || term.analogia}</p>
                </div>

                <div class="mt-3 pt-2 text-[11px] text-slate-muted flex items-center justify-between">
                  <span>Región: <strong class="text-on-surface">${term.regionLabel}</strong></span>
                  <span>${term.readingTime || '2 min'}</span>
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-border/50 flex items-center justify-between">
                <a href="#termino/${term.id}" class="font-label-sm text-xs text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                  Ver Ficha Anatómica 7:5 <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </article>
          `;
        }).join('')}
      </section>
    `;
  }

  function bindCatalogoTerminosEvents() {
    document.querySelectorAll('[data-catalogo-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.catalogoCategory = btn.getAttribute('data-catalogo-cat') || 'todos';
        renderCurrentRoute();
      });
    });
  }

  // ==========================================
  // VISTA 2: FICHA DE TÉRMINO ANATÓMICO (7:5)
  // ==========================================
  function renderTerminoView() {
    const term = findTermById(state.selectedTermId) || FISIOPEDIA_TERMS[0];
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

              <div class="flex items-center gap-2">
                <button onclick="window.print()" class="no-print inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm shadow-sm transition-colors font-semibold" title="Imprimir o guardar ficha en PDF">
                  <span class="material-symbols-outlined text-base text-primary">print</span>
                  <span>Exportar / Imprimir</span>
                </button>
                <button onclick="window.location.hash='#favoritos'" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-sm text-label-sm shadow-sm transition-colors font-semibold">
                  <span class="material-symbols-outlined text-base text-primary">style</span>
                  <span>Repasar en Flashcards 3D</span>
                </button>
              </div>
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
  // VISTA 3: MIS FAVORITOS & FLASHCARDS 3D
  // ==========================================
  function getActiveDeck() {
    try {
      const all = getTerms();
      if (state.flashcardMode === 'favoritos') {
        const favDeck = all.filter(t => state.favorites.has(t.id));
        return favDeck.length > 0 ? favDeck : all;
      }
      if (state.flashcardCategory && state.flashcardCategory !== 'todas') {
        const filtered = all.filter(t => t.category === state.flashcardCategory);
        if (filtered.length > 0) return filtered;
      }
      return (all && all.length > 0) ? all : FALLBACK_TERMS;
    } catch (e) {
      console.error('Error en getActiveDeck:', e);
      return FALLBACK_TERMS;
    }
  }

  function validateCardIndex(deck) {
    try {
      const len = (deck && deck.length) ? deck.length : 1;
      if (currentCardIndex < 0) {
        currentCardIndex = ((currentCardIndex % len) + len) % len;
      } else if (currentCardIndex >= len) {
        currentCardIndex = currentCardIndex % len;
      }
      state.flashcardIndex = currentCardIndex;
      window.currentCardIndex = currentCardIndex;
      return currentCardIndex;
    } catch (e) {
      console.error('Error validando índice de flashcard:', e);
      currentCardIndex = 0;
      state.flashcardIndex = 0;
      return 0;
    }
  }

  function renderFavoritosView() {
    const activeDeck = getActiveDeck();
    const safeIndex = validateCardIndex(activeDeck);
    const currentCard = activeDeck[safeIndex] || activeDeck[0] || FALLBACK_TERMS[0];
    const favCount = state.favorites.size;
    const allTerms = getTerms();

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
              <span class="font-display text-display text-primary leading-none font-bold">${allTerms.length}</span>
              <span class="font-label-md text-label-md text-primary font-bold">términos</span>
            </div>
            <div class="w-36 h-2 bg-surface-container-high rounded-full overflow-hidden mt-3">
              <div class="bg-primary h-full rounded-full" style="width: ${Math.round((favCount / (allTerms.length || 1)) * 100)}%"></div>
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
        <!-- Selector de Mazo (Completo vs Favoritos) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-quiz animate-pulse"></span>
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Mazo Activo:</span>
            <div class="inline-flex items-center p-1 rounded-xl bg-surface-container border border-slate-border/60">
              <button data-deck-mode="completo" class="px-3 py-1 rounded-lg text-xs font-bold transition-all ${state.flashcardMode !== 'favoritos' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'} cursor-pointer">
                Todo el Compendio (${allTerms.length})
              </button>
              <button data-deck-mode="favoritos" class="px-3 py-1 rounded-lg text-xs font-bold transition-all ${state.flashcardMode === 'favoritos' ? 'bg-amber-quiz text-slate-strong shadow-xs' : 'text-on-surface-variant hover:text-on-surface'} cursor-pointer">
                Mis Favoritos (${favCount})
              </button>
            </div>
          </div>
          <span class="font-label-md text-label-md text-primary font-bold">
            Tarjeta ${(state.flashcardIndex % activeDeck.length) + 1} de ${activeDeck.length}
          </span>
        </div>

        <!-- CONTENEDOR 3D FLIP CARD -->
        <div class="w-full max-w-3xl mx-auto perspective-1000 mb-6">
          <div
            id="flashcard-3d-element"
            data-id="flashcard"
            class="relative w-full min-h-[380px] rounded-2xl transform-style-3d card-flip-transition cursor-pointer shadow-lg ${state.flashcardFlipped ? 'flipped active' : ''}"
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
                <button id="flip-card" data-alias="btn-flip-trigger" type="button" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors font-bold cursor-pointer">
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
                <button id="flip-back-card" data-alias="btn-flip-back-trigger" type="button" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold cursor-pointer">
                  <span class="material-symbols-outlined text-sm text-primary">sync</span>
                  Volver al frente
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- CONTROLES DE LA BARAJA -->
        <div class="flex items-center justify-center gap-4">
          <button id="prev-card" data-alias="prev-card-btn" class="flex items-center gap-1 px-4 py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container border border-slate-border text-on-surface font-label-md text-label-md shadow-sm transition-all font-bold cursor-pointer">
            <span class="material-symbols-outlined text-base">arrow_back</span>
            <span>Anterior</span>
          </button>
          <button id="next-card" data-alias="next-card-btn" class="flex items-center gap-1 px-5 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md shadow-sm transition-all font-bold cursor-pointer">
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
    try {
      function toggleFlipCard(e) {
        if (e && e.stopPropagation) e.stopPropagation();
        try {
          state.flashcardFlipped = !state.flashcardFlipped;
          const cardElements = [
            document.getElementById('flashcard-3d-element'),
            document.getElementById('flashcard')
          ].filter(Boolean);

          cardElements.forEach(card => {
            card.classList.toggle('flipped', state.flashcardFlipped);
            card.classList.toggle('active', state.flashcardFlipped);
          });
        } catch (err) {
          console.error('Error al voltear flashcard:', err);
        }
      }

      function handleNextCard(e) {
        if (e && e.stopPropagation) e.stopPropagation();
        try {
          const deck = getActiveDeck();
          state.flashcardFlipped = false;
          currentCardIndex = (currentCardIndex + 1) % (deck.length || 1);
          validateCardIndex(deck);
          renderCurrentRoute();
        } catch (err) {
          console.error('Error al pasar a tarjeta siguiente:', err);
        }
      }

      function handlePrevCard(e) {
        if (e && e.stopPropagation) e.stopPropagation();
        try {
          const deck = getActiveDeck();
          state.flashcardFlipped = false;
          currentCardIndex = (currentCardIndex - 1 + (deck.length || 1)) % (deck.length || 1);
          validateCardIndex(deck);
          renderCurrentRoute();
        } catch (err) {
          console.error('Error al pasar a tarjeta anterior:', err);
        }
      }

      // Reconstruir escuchadores para voltear la tarjeta (#flip-card, #flashcard-3d-element, etc.)
      ['#flip-card', '#btn-flip-trigger', '#flip-back-card', '#btn-flip-back-trigger', '#flashcard-3d-element', '#flashcard'].forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          el.removeEventListener('click', toggleFlipCard);
          el.addEventListener('click', toggleFlipCard);
        });
      });

      // Reconstruir escuchadores para Anterior (#prev-card)
      ['#prev-card', '#prev-card-btn'].forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          el.removeEventListener('click', handlePrevCard);
          el.addEventListener('click', handlePrevCard);
        });
      });

      // Reconstruir escuchadores para Siguiente (#next-card)
      ['#next-card', '#next-card-btn'].forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          el.removeEventListener('click', handleNextCard);
          el.addEventListener('click', handleNextCard);
        });
      });

      const shuffleBtn = document.getElementById('shuffle-deck-btn');
      if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
          try {
            const deck = getActiveDeck();
            state.flashcardFlipped = false;
            currentCardIndex = Math.floor(Math.random() * (deck.length || 1));
            validateCardIndex(deck);
            renderCurrentRoute();
            showToast('Baraja mezclada', 'shuffle');
          } catch (err) {
            console.error('Error al mezclar baraja:', err);
          }
        });
      }

      // Conmutar entre Mazo Completo y Mis Favoritos
      document.querySelectorAll('[data-deck-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          try {
            state.flashcardMode = btn.getAttribute('data-deck-mode');
            currentCardIndex = 0;
            state.flashcardIndex = 0;
            state.flashcardFlipped = false;
            renderCurrentRoute();
          } catch (err) {
            console.error('Error conmutando modo de mazo:', err);
          }
        });
      });
    } catch (err) {
      console.error('Error en bindFavoritosEvents:', err);
    }
  }

  // ==========================================
  // VISTA 4: CUESTIONARIOS DE AUTOEVALUACIÓN
  // ==========================================
  function getQuizzes() {
    if (typeof window !== 'undefined' && Array.isArray(window.FISIOPEDIA_QUIZZES) && window.FISIOPEDIA_QUIZZES.length > 0) {
      return window.FISIOPEDIA_QUIZZES;
    }
    try {
      if (typeof FISIOPEDIA_QUIZZES !== 'undefined' && Array.isArray(FISIOPEDIA_QUIZZES)) {
        return FISIOPEDIA_QUIZZES;
      }
    } catch (e) {}
    return [];
  }

  function renderQuizzes() {
    const quizzesEl = document.getElementById('quizzes') || document.getElementById('cuestionarios') || document.getElementById('quizzes-section');
    if (!quizzesEl) return '';
    try {
      const html = renderQuizzesView();
      quizzesEl.innerHTML = html;
      bindQuizzesEvents();
      return html;
    } catch (err) {
      console.error('Error al renderizar cuestionarios:', err);
      return '';
    }
  }

  function getActiveQuizzes() {
    const all = getQuizzes();
    const filter = state.quizFilter || 'todos';
    if (filter === 'verdadero_falso') {
      return all.filter(q => q.quizType === 'verdadero_falso' || q.options.length === 2);
    }
    if (filter === 'caso_clinico') {
      return all.filter(q => q.quizType === 'caso_clinico');
    }
    if (filter === 'multiple') {
      return all.filter(q => !q.quizType || q.quizType === 'multiple' || q.options.length === 4);
    }
    return all;
  }

  function renderQuizzesView() {
    const activeQuizzes = getActiveQuizzes();
    if (!activeQuizzes || activeQuizzes.length === 0) {
      return `
        <div class="max-w-2xl mx-auto my-8 p-8 bg-surface-container-lowest rounded-2xl shadow-md border border-slate-border text-center">
          <div class="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
            <span class="material-symbols-outlined text-3xl animate-spin">sync</span>
          </div>
          <h2 class="font-headline-sm text-slate-strong font-bold">Cuestionarios de Autoevaluación</h2>
          <p class="text-slate-muted text-sm mt-2">Cargando preguntas de biomecánica y casos clínicos...</p>
        </div>
      `;
    }

    const totalQuestions = activeQuizzes.length || (getQuizzes().length || 25);

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

    const quiz = activeQuizzes[state.quizIndex % totalQuestions];
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

        <!-- Selector de Tipo de Pregunta -->
        <div class="flex items-center gap-2 overflow-x-auto py-2 px-1 no-scrollbar my-2" id="quiz-filter-chips">
          <span class="text-xs font-bold text-slate-muted mr-1 hidden sm:inline-block">Modalidad:</span>
          <button data-quiz-filter="todos" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${(state.quizFilter || 'todos') === 'todos' ? 'bg-primary text-on-primary shadow-xs' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'} cursor-pointer">
            Todas (${getQuizzes().length || 25})
          </button>
          <button data-quiz-filter="multiple" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${state.quizFilter === 'multiple' ? 'bg-primary text-on-primary shadow-xs' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'} cursor-pointer">
            Opción Múltiple (15)
          </button>
          <button data-quiz-filter="verdadero_falso" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${state.quizFilter === 'verdadero_falso' ? 'bg-amber-quiz text-slate-strong shadow-xs' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'} cursor-pointer">
            Verdadero o Falso (5)
          </button>
          <button data-quiz-filter="caso_clinico" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${state.quizFilter === 'caso_clinico' ? 'bg-cat-muscles text-white shadow-xs' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'} cursor-pointer">
            Casos Clínicos (5)
          </button>
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
          <article class="quiz-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden border border-slate-border/50">
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

  function bindQuizzesEvents() {
    document.querySelectorAll('[data-quiz-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.quizFilter = btn.getAttribute('data-quiz-filter') || 'todos';
        state.quizIndex = 0;
        state.quizSubmitted = {};
        state.quizUserAnswers = {};
        state.quizCompleted = false;
        renderCurrentRoute();
      });
    });
  }

  // --- MÉTODOS PÚBLICOS GLOBALES ---
  window.fisiopediaApp = {
    initApp: () => initApp(),
    startApp: () => startApp(),
    switchTab: (tab) => switchTab(tab),
    navigateTo: (hash) => navigateTo(hash),
    toggleFav: (id) => toggleFavorite(id),
    speak: (term) => speakTerm(term),
    clearSearch: () => {
      state.searchTerm = '';
      state.selectedCategory = 'todos';
      state.selectedRegion = 'todas';
      const mainInput = document.getElementById('search-input') || document.getElementById('main-search-input');
      if (mainInput) mainInput.value = '';
      const desktopSearch = document.getElementById('desktop-header-search');
      if (desktopSearch) desktopSearch.value = '';
      renderCurrentRoute();
      showToast('Filtros restablecidos', 'restart_alt');
    },
    clearSearchOnly: () => {
      state.searchTerm = '';
      renderCurrentRoute();
    },
    clearCategoryOnly: () => {
      state.selectedCategory = 'todos';
      renderCurrentRoute();
    },
    clearRegionOnly: () => {
      state.selectedRegion = 'todas';
      renderCurrentRoute();
    },
    clearSearchQuery: () => {
      state.searchTerm = '';
      const mainInput = document.getElementById('search-input') || document.getElementById('main-search-input');
      if (mainInput) mainInput.value = '';
      const desktopSearch = document.getElementById('desktop-header-search');
      if (desktopSearch) desktopSearch.value = '';
      if (state.route === 'explorador') {
        updateExploradorResultsOnly();
      } else {
        renderCurrentRoute();
      }
    },
    setCategory: (cat) => {
      state.selectedCategory = cat;
      renderCurrentRoute();
    },
    setRegion: (reg) => {
      state.selectedRegion = reg;
      renderCurrentRoute();
    },
    nextCard: () => {
      const deck = getActiveDeck();
      state.flashcardFlipped = false;
      currentCardIndex = (currentCardIndex + 1) % (deck.length || 1);
      validateCardIndex(deck);
      renderCurrentRoute();
    },
    prevCard: () => {
      const deck = getActiveDeck();
      state.flashcardFlipped = false;
      currentCardIndex = (currentCardIndex - 1 + (deck.length || 1)) % (deck.length || 1);
      validateCardIndex(deck);
      renderCurrentRoute();
    },
    flipCard: () => {
      state.flashcardFlipped = !state.flashcardFlipped;
      const cardElements = [
        document.getElementById('flashcard-3d-element'),
        document.getElementById('flashcard')
      ].filter(Boolean);
      cardElements.forEach(card => {
        card.classList.toggle('flipped', state.flashcardFlipped);
        card.classList.toggle('active', state.flashcardFlipped);
      });
    },
    shareTerm: (id) => {
      const term = findTermById(id);
      const url = `${window.location.origin}${window.location.pathname}#termino/${id}`;
      if (navigator.share) {
        navigator.share({
          title: term ? (term.name || term.termino) : 'Fisio Pedía',
          text: term ? (term.simpleExplanation || term.explicacionSencilla) : 'Diccionario del cuerpo humano',
          url: url
        }).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          showToast('Enlace copiado al portapapeles', 'content_copy');
        }).catch(() => {
          showToast('Enlace: ' + url, 'link');
        });
      } else {
        showToast('Enlace: ' + url, 'link');
      }
    },
    printTerm: () => {
      window.print();
    },
    selectQuizOption: (optionId) => {
      if (state.quizSubmitted[state.quizIndex]) return;
      state.quizUserAnswers[state.quizIndex] = optionId;
      state.quizSubmitted[state.quizIndex] = true;
      const activeQuizzes = getActiveQuizzes();
      const quiz = activeQuizzes[state.quizIndex % activeQuizzes.length];
      const opt = quiz.options.find(o => o.id === optionId);
      if (opt && opt.isCorrect) {
        state.quizScore++;
        state.quizStreak = (state.quizStreak || 0) + 1;
        showToast('¡Respuesta correcta! +100 XP', 'verified');
      } else {
        state.quizStreak = 0;
        showToast('Respuesta incorrecta. Revisa la justificación pedagógica.', 'error');
      }
      renderCurrentRoute();
    },
    submitQuizAnswer: () => {
      const optionId = state.quizUserAnswers[state.quizIndex];
      if (!optionId) return;
      if (!state.quizSubmitted[state.quizIndex]) {
        state.quizSubmitted[state.quizIndex] = true;
        const activeQuizzes = getActiveQuizzes();
        const quiz = activeQuizzes[state.quizIndex % activeQuizzes.length];
        const opt = quiz.options.find(o => o.id === optionId);
        if (opt && opt.isCorrect) {
          state.quizScore++;
          showToast('¡Respuesta correcta! +100 XP', 'verified');
        } else {
          showToast('Respuesta incorrecta. Revisa la justificación.', 'error');
        }
      }
      renderCurrentRoute();
    },
    nextQuizQuestion: () => {
      const total = getQuizzes().length || 25;
      if (state.quizIndex + 1 < total) {
        state.quizIndex++;
        renderCurrentRoute();
      } else {
        // Cuestionario finalizado
        state.quizCompleted = true;
        if (typeof FisioStorage !== 'undefined') {
          FisioStorage.saveQuizStats({
            totalAttempted: total,
            totalCorrect: state.quizScore,
            lastScore: Math.round((state.quizScore / total) * 100),
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
    },
    renderQuizzes: () => renderQuizzes()
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

  // --- INICIALIZACIÓN ROBUSTA DE LA APLICACIÓN ---
  function startApp() {
    hideLoader();

    try {
      if (typeof window.FISIOPEDIA_TERMS === 'undefined' || !Array.isArray(window.FISIOPEDIA_TERMS)) {
        window.FISIOPEDIA_TERMS = [];
      }
      loadInitialState();
      initRouter();
      initCloudSyncUI();
      renderQuizzes();
    } catch (err) {
      console.error('FisioPedia start error:', err);
    } finally {
      hideLoader();
    }

    // Registro seguro de Service Worker para funcionamiento Offline / PWA
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((reg) => {
          reg.update().catch(() => {});
        }).catch((err) => {
          console.warn('ServiceWorker error:', err);
        });
      });
    }

    const desktopSearch = document.getElementById('desktop-header-search');
    if (desktopSearch) {
      desktopSearch.addEventListener('input', (e) => {
        state.searchTerm = e.target.value;
        if (state.route !== 'explorador') {
          navigateTo('#explorador');
        } else {
          const mainInput = document.getElementById('search-input') || document.getElementById('main-search-input');
          if (mainInput && mainInput.value !== state.searchTerm) {
            mainInput.value = state.searchTerm;
          }
          updateExploradorResultsOnly();
        }
      });
      desktopSearch.addEventListener('focus', () => {
        if (state.route !== 'explorador') {
          navigateTo('#explorador');
        }
      });
    }

    // Atajos de teclado:
    // Ctrl+K / Cmd+K para enfocar búsqueda
    // Barra espaciadora para girar flashcard
    // Flechas izquierda y derecha para pasar flashcards
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        navigateTo('#explorador');
        setTimeout(() => {
          const input = document.getElementById('search-input') || document.getElementById('main-search-input');
          if (input) {
            input.focus();
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else if (state.route === 'favoritos') {
        if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
          e.preventDefault();
          const cardEl = document.getElementById('flashcard-3d-element') || document.getElementById('flashcard');
          if (cardEl) {
            state.flashcardFlipped = !state.flashcardFlipped;
            cardEl.classList.toggle('flipped', state.flashcardFlipped);
            cardEl.classList.toggle('active', state.flashcardFlipped);
          }
        } else if (e.key === 'ArrowRight') {
          const deck = getActiveDeck();
          state.flashcardFlipped = false;
          currentCardIndex = (currentCardIndex + 1) % (deck.length || 1);
          validateCardIndex(deck);
          renderCurrentRoute();
        } else if (e.key === 'ArrowLeft') {
          const deck = getActiveDeck();
          state.flashcardFlipped = false;
          currentCardIndex = (currentCardIndex - 1 + (deck.length || 1)) % (deck.length || 1);
          validateCardIndex(deck);
          renderCurrentRoute();
        }
      }
    });

    // Escuchador global delegated en document: NUNCA se pierde con innerHTML dinámico
    document.addEventListener('input', (e) => {
      if (e.target && (e.target.id === 'search-input' || e.target.id === 'desktop-header-search' || e.target.getAttribute('data-id') === 'main-search-input')) {
        executeRealtimeSearch(e.target.value);
      }
    });

    // Delegación para botón de limpiar búsqueda y chips
    document.addEventListener('click', (e) => {
      if (e.target.closest('#clear-search-btn') || e.target.closest('[data-action="clear-search"]')) {
        executeRealtimeSearch('');
        const input = document.getElementById('search-input') || document.getElementById('main-search-input');
        if (input) input.focus();
      }
    });

    // Delegación unificada para enlaces de navegación por pestañas (.nav-link / data-tab)
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"], .nav-link, [data-tab], [data-route-nav], [data-route-mobile]');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const dataTab = link.getAttribute('data-tab') || link.getAttribute('data-route-nav') || link.getAttribute('data-route-mobile');
      
      let target = dataTab || '';
      if (!target && href.startsWith('#')) {
        target = href.replace(/^#\/?/, '').split('/')[0];
      }

      if (target) {
        if (href.includes('/') && href.split('/')[1]) {
          return;
        }
        const norm = normalizeTabName(target);
        if (['explorador', 'terminos', 'favoritos', 'quizzes'].includes(norm)) {
          e.preventDefault();
          switchTab(norm);
          if (window.location.hash !== '#' + norm) {
            try {
              history.pushState(null, '', '#' + norm);
            } catch (err) {
              window.location.hash = '#' + norm;
            }
          }
        }
      }
    });
  }

  const initApp = startApp;
  window.initApp = initApp;
  window.startApp = startApp;
  window.switchTab = switchTab;
  window.handleHashChange = handleHashChange;
  window.renderQuizzes = renderQuizzes;
  window.renderQuizzesView = renderQuizzesView;

  function onReady() {
    try {
      hideLoader();
      initApp();
      renderTerms(window.FISIOPEDIA_TERMS);
      renderQuizzes();
    } catch (err) {
      console.error('Error al iniciar FisioPedia:', err);
    } finally {
      hideLoader();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

})();
