// Fisio Pedía - Base de Datos Anatómica y Pedagógica Completa
// Vocabulario esencial de anatomía, kinesiología, biomecánica y orientación para estudiantes de Fisioterapia.
// Contiene los 20 conceptos fundamentales de orientación y biomecánica + compendio de estructuras clínicas.

const FISIOPEDIA_TERMS = [
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
  }
];
