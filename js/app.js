// Fisio Pedía - Lógica de Aplicación Completa
// SPA interactiva conectada a FisioStorage, con Diccionario Visual SVG integral, Flashcards 3D y Quizzes.

(function () {
  'use strict';

  // ARRAY DE RESPALDO DE SEGURIDAD (FALLBACK) DIRECTO EN SCRIPT
  // Garantiza que SIEMPRE se muestren términos en pantalla y nunca quede en blanco
  const FALLBACK_TERMS = [{"id": "agonista", "name": "Agonista", "termino": "Agonista", "pronunciation": "/a-go-nis-ta/", "fonetica": "a-go-NIS-ta", "etymology": "Del griego agōnistēs ('luchador, combatiente principal en los juegos').", "category": "musculos", "categoryLabel": "Biomecánica Muscular", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "general", "regionLabel": "Control Motor Global", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Músculo o grupo muscular primario cuya contracción concéntrica genera el mayor torque y produce directamente el movimiento angular deseado en una articulación específica.", "defTecnica": "Músculo motor primario cuya contracción genera la fuerza principal para producir un movimiento articular específico.", "simpleExplanation": "El protagonista o motor principal del movimiento: es el músculo que hace la mayor parte de la fuerza para realizar la acción.", "explicacionSencilla": "El músculo protagonista que hace la fuerza principal para mover la articulación.", "everydayTitle": "Hacer un curl para levantar una mancuerna o bolsa pesada", "everydayExample": "Cuando doblas el codo para levantar una bolsa pesada del supermercado hacia tu pecho, el bíceps braquial actúa como el músculo agonista principal de la flexión.", "analogia": "Como el motor de un carro en plena marcha: es el encargado principal de impulsar el vehículo hacia adelante.", "clinicalTitle": "Relevancia en rehabilitación de fuerza", "clinicalRelevance": "Identificar el agonista permite al fisioterapeuta dosificar cargas hipertróficas o de resistencia y evaluar si compensa con sinergistas por fatiga o inhibición motora.", "clinicalCase": "Debilidad del glúteo mayor (agonista en extensión de cadera) que obliga a los isquiotibiales a sobrecargarse para subir escaleras.", "keyDetails": [{"label": "Rol funcional", "value": "Motor primario de la acción articular"}, {"label": "Tipo de trabajo", "value": "Contracción concéntrica o excéntrica principal"}, {"label": "Ejemplo clásico", "value": "Bíceps en flexión de codo / Cuádriceps al patear"}, {"label": "Objetivo clínico", "value": "Recuperar reclutamiento de unidades motoras"}], "svgType": "agonista", "isFeatured": false}, {"id": "antagonista", "name": "Antagonista", "termino": "Antagonista", "pronunciation": "/an-ta-go-nis-ta/", "fonetica": "an-ta-go-NIS-ta", "etymology": "Del griego anti ('en contra') + agōnistēs ('combatiente').", "category": "musculos", "categoryLabel": "Biomecánica Muscular", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "general", "regionLabel": "Control Motor Global", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Músculo o grupo muscular que posee la acción anatómica opuesta al agonista. Durante el movimiento voluntario, se relaja coordinadamente (inhibición recíproca) o se contrae excéntricamente para desacelerar y controlar la articulación.", "defTecnica": "Músculo que realiza la acción opuesta al agonista, cediendo o frenando el movimiento de forma controlada.", "simpleExplanation": "El freno del movimiento: se estira y cede suavemente para permitir que el protagonista trabaje sin que la articulación se descontrole o se golpee.", "explicacionSencilla": "El músculo opuesto que cede y frena suavemente para proteger la articulación durante el movimiento.", "everydayTitle": "El tríceps cediendo al beber un vaso de agua", "everydayExample": "Cuando doblas el codo para acercar el vaso a tu boca, el tríceps (antagonista) debe relajarse y estirarse; si se quedara tenso o espástico, tu brazo no se podría doblar.", "analogia": "Como los frenos de disco de una bicicleta al bajar una pendiente: no detienen la bici en seco, sino que regulan y suavizan la velocidad para no chocar.", "clinicalTitle": "Inhibición recíproca y espasticidad", "clinicalRelevance": "En pacientes neurológicos (secuelas de ACV), la hiperactividad del antagonista (espasticidad) bloquea el movimiento voluntario del agonista.", "clinicalCase": "Isquiotibiales espásticos que impiden la extensión completa de rodilla en la fase de oscilación de la marcha.", "keyDetails": [{"label": "Rol funcional", "value": "Freno y estabilizador del rango final"}, {"label": "Principio neurofisiológico", "value": "Inhibición recíproca de Sherrington"}, {"label": "Ejemplo clásico", "value": "Tríceps durante la flexión de codo"}, {"label": "Alteración clínica", "value": "Contractura o rigidez que limita el arco"}], "svgType": "antagonista", "isFeatured": false}, {"id": "sinergico", "name": "Sinérgico", "termino": "Sinérgico", "pronunciation": "/si-nér-gi-co/", "fonetica": "si-NER-gi-co", "etymology": "Del griego syn ('junto con') + ergon ('trabajo, acción').", "category": "musculos", "categoryLabel": "Biomecánica Muscular", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "general", "regionLabel": "Control Motor Global", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Músculo que coopera mecánicamente con el agonista para facilitar el movimiento primario, neutralizar componentes rotacionales no deseados o fijar segmentos óseos adyacentes.", "defTecnica": "Músculo que ayuda al agonista a realizar el movimiento y contribuye a la estabilización de los segmentos óseos.", "simpleExplanation": "El copiloto o asistente del movimiento: ayuda al músculo principal compartiendo carga o sosteniendo firme la articulación para que el gesto salga limpio.", "explicacionSencilla": "El músculo ayudante que apoya al principal y mantiene firme la articulación durante la acción.", "everydayTitle": "El braquiorradial ayudando a levantar una jarra", "everydayExample": "Al levantar una jarra pesada con la mano de canto (posición neutra), el braquiorradial y el braquial anterior asisten al bíceps como sinergistas para que la flexión sea potente y precisa.", "analogia": "Como el copiloto en un rally: no maneja el volante principal, pero orienta, da soporte y asegura que la trayectoria sea perfecta.", "clinicalTitle": "Sinergias patológicas y compensaciones", "clinicalRelevance": "Cuando el agonista se lesiona o fatiga, los sinérgicos intentan asumir todo el trabajo, lo que genera sobrecargas musculares y tendinopatías compensatorias.", "clinicalCase": "Tendinitis del tensor de la fascia lata por suplir un glúteo medio débil en la estabilización de pelvis.", "keyDetails": [{"label": "Rol funcional", "value": "Asistente, neutralizador y fijador"}, {"label": "Beneficio biomecánico", "value": "Previene rotaciones o desvíos parásitos"}, {"label": "Ejemplo clásico", "value": "Braquial anterior asistiendo al bíceps"}, {"label": "Riesgo de falla", "value": "Sobrecarga compensatoria si el agonista claudica"}], "svgType": "sinergico", "isFeatured": false}, {"id": "caudal", "name": "Caudal", "termino": "Caudal", "pronunciation": "/cau-dal/", "fonetica": "cau-DAL", "etymology": "Del latín cauda ('cola').", "category": "movimientos", "categoryLabel": "Orientación Anatómica", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "general", "regionLabel": "Ejes y Planos Anatómicos", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Término direccional de orientación anatómica que denota proximidad hacia el extremo inferior del cuerpo, los pies o la región del cóccix/cola, opuesto a craneal o cefálico.", "defTecnica": "Término de orientación anatómica que indica dirección hacia la parte inferior del cuerpo, los pies o el cóccix.", "simpleExplanation": "Hacia abajo o hacia los pies: si una estructura es más caudal que otra, significa que está más cerca de la planta de los pies o más baja en el cuerpo.", "explicacionSencilla": "Dirección anatómica que señala hacia abajo, hacia la cola o los pies.", "everydayTitle": "Ubicar el tobillo respecto a la rodilla", "everydayExample": "La articulación del tobillo está situada en una posición más CAUDAL en la pierna en comparación con la rodilla y la cadera.", "analogia": "Como mirar hacia la planta baja de un edificio: indica siempre que nos desplazamos hacia los pisos inferiores o el suelo.", "clinicalTitle": "Deslizamientos articulares caudales en terapia manual", "clinicalRelevance": "En técnicas de movilización articular (Maitland o Kaltenborn), un deslizamiento caudal de la cabeza humeral es indispensable para desbloquear la abducción de hombro sin pinzamiento.", "clinicalCase": "Tracción y deslizamiento caudal de la cabeza humeral para ganar los últimos 30 grados de elevación de brazo en capsulitis adhesiva.", "keyDetails": [{"label": "Eje anatómico", "value": "Eje longitudinal o cráneo-caudal"}, {"label": "Término opuesto", "value": "Craneal / Superior / Cefálico"}, {"label": "Ejemplo anatómico", "value": "La pelvis es caudal al tórax"}, {"label": "Uso en fisioterapia", "value": "Dirección de tracciones y deslizamientos terapéuticos"}], "svgType": "caudal", "isFeatured": false}, {"id": "craneal", "name": "Craneal", "termino": "Craneal", "pronunciation": "/cra-ne-al/", "fonetica": "cra-ne-AL", "etymology": "Del griego kranion ('cráneo, casco protector del encéfalo').", "category": "movimientos", "categoryLabel": "Orientación Anatómica", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "general", "regionLabel": "Ejes y Planos Anatómicos", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Término direccional de orientación anatómica que describe una posición o vector dirigido hacia la cabeza o vértice superior del tronco humano, sinónimo de superior o cefálico.", "defTecnica": "Término de orientación que indica dirección hacia la cabeza o extremo superior del cuerpo.", "simpleExplanation": "Hacia arriba o hacia la cabeza: una estructura es craneal cuando se encuentra más cerca del tope de tu cabeza.", "explicacionSencilla": "Dirección anatómica que apunta hacia arriba, en dirección a la cabeza.", "everydayTitle": "Los hombros respecto a la cintura", "everydayExample": "Tus hombros y tu cuello están en una posición CRANEAL con respecto a tu ombligo y tus caderas.", "analogia": "Como subir en el ascensor hacia el ático o azotea: siempre te traslada hacia el piso más alto de la estructura.", "clinicalTitle": "Nivel neurológico en lesiones medulares", "clinicalRelevance": "En traumatismos raquimedulares, cuanto más craneal sea el nivel de la lesión (ej. C4 vs L1), mayor compromiso motor y respiratorio existirá.", "clinicalCase": "Descompresión cervical mediante tracción craneal suave para aliviar radiculopatía C6.", "keyDetails": [{"label": "Eje anatómico", "value": "Eje longitudinal cráneo-caudal"}, {"label": "Término opuesto", "value": "Caudal / Inferior"}, {"label": "Ejemplo anatómico", "value": "El corazón es craneal al estómago"}, {"label": "Aplicación clínica", "value": "Mapeo de dermatomas y niveles reflejos"}], "svgType": "craneal", "isFeatured": false}, {"id": "ipsilateral", "name": "Ipsilateral", "termino": "Ipsilateral", "pronunciation": "/ip-si-la-te-ral/", "fonetica": "ip-si-la-te-RAL", "etymology": "Del latín ipse ('mismo') + latus, lateris ('lado').", "category": "movimientos", "categoryLabel": "Orientación Anatómica", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "general", "regionLabel": "Ejes y Planos Anatómicos", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Término que denota localización, manifestación o acción en el mismo lado del cuerpo respecto a una estructura anatómica, lesión o hemicuerpo tomado como referencia. Sinónimo de homolateral.", "defTecnica": "Relativo o situado en el mismo lado del cuerpo respecto a un punto de referencia anatómico o lesional.", "simpleExplanation": "En el mismo lado del cuerpo: si te doblas el tobillo derecho y te duele la rodilla derecha, el dolor es ipsilateral (ambos están a la derecha).", "explicacionSencilla": "Significa que dos estructuras o eventos ocurren en el mismo lado del cuerpo (ambos a la derecha o ambos a la izquierda).", "everydayTitle": "Llevar la mano derecha al bolsillo derecho del pantalón", "everydayExample": "Cuando metes la mano derecha en el bolsillo derecho de tu pantalón, estás realizando un movimiento ipsilateral (mismo lado del cuerpo).", "analogia": "Como mirar dos ventanas en la misma pared de tu habitación: están en el mismo costado de la casa.", "clinicalTitle": "Semiología cerebelosa y vestibular", "clinicalRelevance": "A diferencia de la corteza cerebral, las lesiones del hemisferio cerebeloso causan ataxia, dismetría e hipotonía ipsilaterales (en el mismo lado de la lesión).", "clinicalCase": "Paciente con infarto cerebeloso derecho que presenta temblor de intención e inestabilidad en brazo y pierna ipsilaterales (derechos).", "keyDetails": [{"label": "Sinónimo", "value": "Homolateral"}, {"label": "Término opuesto", "value": "Contralateral"}, {"label": "Ejemplo neurológico", "value": "Signos cerebelosos en el mismo lado de la lesión"}, {"label": "Regla clínica", "value": "Mismo hemicuerpo (derecho con derecho o izq con izq)"}], "svgType": "ipsilateral", "isFeatured": false}, {"id": "contralateral", "name": "Contralateral", "termino": "Contralateral", "pronunciation": "/con-tra-la-te-ral/", "fonetica": "con-tra-la-te-RAL", "etymology": "Del latín contra ('opuesto, frente a') + latus, lateris ('lado').", "category": "movimientos", "categoryLabel": "Orientación Anatómica", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "general", "regionLabel": "Ejes y Planos Anatómicos", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Término que describe la ubicación o relación con el lado opuesto del cuerpo respecto a un punto de referencia anatómico, lesión encefálica o hemicuerpo.", "defTecnica": "Relativo o situado en el lado opuesto del cuerpo respecto a un punto anatómico o centro neurológico de referencia.", "simpleExplanation": "En el lado opuesto o cruzado: tu mano derecha es contralateral a tu mano izquierda, y el hemisferio cerebral izquierdo controla el movimiento contralateral (lado derecho).", "explicacionSencilla": "Significa que está ubicado o se produce en el lado contrario del cuerpo respecto a la referencia.", "everydayTitle": "Patrón cruzado al caminar o bracear", "everydayExample": "Al caminar naturalmente, cuando adelantas el pie derecho balanceas hacia adelante el brazo contralateral (brazo izquierdo) para equilibrar el torso.", "analogia": "Como un juego de espejos o un balancín: para que un lado suba con armonía, el lado opuesto equilibra desde el otro extremo.", "clinicalTitle": "Decusación piramidal y hemiplejía", "clinicalRelevance": "Las fibras de la vía corticoespinal motora se cruzan (decusan) en el bulbo raquídeo; un ACV en la corteza motora izquierda produce hemiparesia contralateral (derecha).", "clinicalCase": "Hemiparesia contralateral espástica tras isquemia de la arteria cerebral media.", "keyDetails": [{"label": "Concepto clave", "value": "Lado opuesto del cuerpo"}, {"label": "Término opuesto", "value": "Ipsilateral / Homolateral"}, {"label": "Mecanismo neuroanatómico", "value": "Decusación piramidal en tronco encefálico"}, {"label": "Aplicación motriz", "value": "Coordinación cruzada de la marcha humana"}], "svgType": "contralateral", "isFeatured": false}, {"id": "proximal", "name": "Proximal", "termino": "Proximal", "pronunciation": "/pro-xi-mal/", "fonetica": "pro-xi-MAL", "etymology": "Del latín proximus ('el más cercano, próximo').", "category": "movimientos", "categoryLabel": "Orientación Anatómica", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "general", "regionLabel": "Ejes y Planos Anatómicos", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Término posicional que describe una estructura situada más cerca de la raíz de una extremidad, del eje axial o del punto de inserción/origen central de un vaso, nervio o segmento corporal.", "defTecnica": "Término posicional que indica mayor cercanía al tronco corporal o al punto de origen de una extremidad o estructura.", "simpleExplanation": "Más cerca del tronco o del origen: en tu extremidad, lo proximal es lo que está más 'pegado' al cuerpo central (el hombro es proximal a la mano).", "explicacionSencilla": "Ubicado más cerca del centro del cuerpo o del punto de inicio de un brazo o pierna.", "everydayTitle": "El hombro respecto al codo y muñeca", "everydayExample": "El hombro es PROXIMAL al codo, y el codo es proximal a la muñeca; el hombro está mucho más cerca del centro de tu cuerpo.", "analogia": "Como la salida de una autopista en el centro de la ciudad: es el punto de inicio antes de alejarse hacia la periferia.", "clinicalTitle": "Principio de control motor: estabilidad proximal para movilidad distal", "clinicalRelevance": "Para que la mano pueda escribir o agarrar con precisión fina, el hombro y la escápula (estabilidad proximal) deben estar sólidamente estabilizados.", "clinicalCase": "Disfunción de la musculatura periescapular proximal que causa dolor distal y tendinitis en el tendón rotador.", "keyDetails": [{"label": "Referencia central", "value": "Tronco / Raíz de la extremidad"}, {"label": "Término opuesto", "value": "Distal"}, {"label": "Máxima de fisioterapia", "value": "'Estabilidad proximal para movilidad distal'"}, {"label": "Ejemplo anatómico", "value": "El fémur es proximal a la tibia"}], "svgType": "proximal", "isFeatured": false}, {"id": "distal", "name": "Distal", "termino": "Distal", "pronunciation": "/dis-tal/", "fonetica": "dis-TAL", "etymology": "Del latín distare ('estar lejos, apartarse').", "category": "movimientos", "categoryLabel": "Orientación Anatómica", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "general", "regionLabel": "Ejes y Planos Anatómicos", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Término posicional que indica mayor lejanía respecto al tronco del cuerpo, a la raíz de la extremidad o al punto de origen de una estructura vascular o nerviosa.", "defTecnica": "Término posicional que indica mayor lejanía respecto al tronco del cuerpo o punto de origen de una extremidad.", "simpleExplanation": "Más lejos del tronco o en la periferia: las puntas de tus dedos son la parte más distal de tus brazos.", "explicacionSencilla": "Ubicado más lejos del centro del cuerpo o del punto de inicio de una extremidad.", "everydayTitle": "Las uñas de tus dedos o la punta del pie", "everydayExample": "Tus dedos de los pies están en la posición más DISTAL de la pierna, muy alejados de la cadera y la pelvis.", "analogia": "Como las ramas más delgadas en la copa de un árbol: son las que están más alejadas del tronco y la raíz central.", "clinicalTitle": "Neuropatías periféricas en 'guante o calcetín'", "clinicalRelevance": "Las neuropatías metabólicas (polineuropatía diabética) afectan primero los axones nerviosos más largos, provocando pérdida sensitiva distal en pies y manos.", "clinicalCase": "Pérdida de sensibilidad vibratoria distal en dedos de pies en paciente diabético evaluada con diapasón de 128 Hz.", "keyDetails": [{"label": "Referencia central", "value": "Alejado del tronco o raíz"}, {"label": "Término opuesto", "value": "Proximal"}, {"label": "Ejemplo anatómico", "value": "La mano es distal al codo"}, {"label": "Semiología clínica", "value": "Exploración de pulsos y sensibilidad periférica distal"}], "svgType": "distal", "isFeatured": false}, {"id": "ventral", "name": "Ventral", "termino": "Ventral", "pronunciation": "/ven-tral/", "fonetica": "ven-TRAL", "etymology": "Del latín venter, ventris ('vientre, abdomen').", "category": "movimientos", "categoryLabel": "Orientación Anatómica", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "general", "regionLabel": "Ejes y Planos Anatómicos", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Término de orientación que indica proximidad o relación con la cara anterior o delantera del cuerpo o tronco humano (hacia el abdomen). En humanos en bipedestación es casi idéntico a anterior.", "defTecnica": "Término de orientación anatómica que hace referencia a la parte anterior o delantera del cuerpo o vientre.", "simpleExplanation": "Hacia el pecho, vientre o frente: todo lo que da hacia tu pecho, cara o abdomen se encuentra en la cara ventral.", "explicacionSencilla": "Orientado hacia el frente o la parte delantera del cuerpo (hacia el vientre).", "everydayTitle": "Abrazar a alguien o dormir boca abajo", "everydayExample": "Cuando das un abrazo fuerte a otra persona, juntas la cara ventral de tu cuerpo (pecho y abdomen) contra la cara ventral de la otra persona.", "analogia": "Como la fachada frontal de una casa con su puerta de entrada principal.", "clinicalTitle": "Acomodo en decúbito ventral (prono)", "clinicalRelevance": "La posición decúbito ventral (boca abajo) se utiliza en fisioterapia respiratoria para reclutar alvéolos posteriores y drenar secreciones.", "clinicalCase": "Postura en decúbito ventral con cuñas pélvicas para extensión pasiva de columna lumbar (Método McKenzie).", "keyDetails": [{"label": "Sinónimo humano", "value": "Anterior"}, {"label": "Término opuesto", "value": "Dorsal / Posterior"}, {"label": "Eje cardinal", "value": "Eje anteroposterior (sagital)"}, {"label": "Estructuras ventrales", "value": "Pectoral mayor, recto abdominal, cuádriceps"}], "svgType": "ventral", "isFeatured": false}, {"id": "dorsal", "name": "Dorsal", "termino": "Dorsal", "pronunciation": "/dor-sal/", "fonetica": "dor-SAL", "etymology": "Del latín dorsum ('dorso, espalda').", "category": "movimientos", "categoryLabel": "Orientación Anatómica", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "general", "regionLabel": "Ejes y Planos Anatómicos", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Término de orientación relativo a la cara posterior o trasera del cuerpo, tronco, mano (dorso de la mano) o pie (dorso del pie). En humanos bípedos equivale a posterior.", "defTecnica": "Término de orientación anatómica que hace referencia a la parte posterior o trasera del cuerpo (hacia la espalda).", "simpleExplanation": "Hacia la espalda o por detrás: todo lo que se sitúa en la parte trasera del cuerpo está en la superficie dorsal.", "explicacionSencilla": "Orientado hacia atrás o la espalda del cuerpo.", "everydayTitle": "Apoyar la espalda en el respaldar de una silla", "everydayExample": "Al sentarte y recostar tu espalda contra el respaldar del asiento, estás apoyando la cara DORSAL de tu tronco.", "analogia": "Como el patio trasero o contrafachada posterior de un edificio.", "clinicalTitle": "Cadena miofascial dorsal posterior", "clinicalRelevance": "La cadena estática dorsal (fascia plantar, gemelos, isquiotibiales, erectores espinales) suele retraerse provocando dolor lumbar y pérdida de flexión de tronco.", "clinicalCase": "Acortamiento de la cadena dorsal posterior evaluado mediante el test de distancia dedo-suelo (Schober modificado).", "keyDetails": [{"label": "Sinónimo humano", "value": "Posterior"}, {"label": "Término opuesto", "value": "Ventral / Anterior"}, {"label": "Casos especiales", "value": "Dorso de la mano y dorso del pie"}, {"label": "Estructuras dorsales", "value": "Trapecio, dorsal ancho, glúteos, tríceps sural"}], "svgType": "dorsal", "isFeatured": false}, {"id": "medial", "name": "Medial", "termino": "Medial", "pronunciation": "/me-di-al/", "fonetica": "me-di-AL", "etymology": "Del latín medialis ('que está en el medio').", "category": "movimientos", "categoryLabel": "Orientación Anatómica", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "general", "regionLabel": "Ejes y Planos Anatómicos", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Término posicional que describe una estructura orientada o ubicada más cercana al plano sagital mediano (línea media vertical imaginaria) que divide al cuerpo humano en dos mitades simétricas.", "defTecnica": "Término posicional que indica ubicación hacia la línea media imaginaria del cuerpo.", "simpleExplanation": "Hacia el centro o línea media del cuerpo: si está más hacia el ombligo o esternón, está en posición medial.", "explicacionSencilla": "Ubicado hacia la línea media del cuerpo, más cerca del centro.", "everydayTitle": "La nariz respecto a los ojos y orejas", "everydayExample": "Tu nariz está en posición MEDIAL en la cara, mientras que tus ojos y orejas se encuentran más hacia los costados (laterales).", "analogia": "Como el separador central de líneas en una avenida de doble sentido: todo lo que se acerca a esa línea divisoria es medial.", "clinicalTitle": "Ligamento colateral medial (LCM) y menisco medial", "clinicalRelevance": "Las estructuras mediales de la rodilla sufren frecuentemente ante traumatismos en valgo forzado (fuerza que empuja la rodilla hacia adentro).", "clinicalCase": "Bursitis anserina (pata de ganso) en la cara medial proximal de la tibia por sobrecarga en corredores pronadores.", "keyDetails": [{"label": "Línea de referencia", "value": "Plano Sagital Medio"}, {"label": "Término opuesto", "value": "Lateral"}, {"label": "Término anatómico previo", "value": "Interno (en desuso por nómina oficial)"}, {"label": "Ejemplo clínico", "value": "El dedo meñique es medial al pulgar en posición anatómica"}], "svgType": "medial", "isFeatured": false}, {"id": "lateral", "name": "Lateral", "termino": "Lateral", "pronunciation": "/la-te-ral/", "fonetica": "la-te-RAL", "etymology": "Del latín lateralis ('perteneciente al lado o flanco').", "category": "movimientos", "categoryLabel": "Orientación Anatómica", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "general", "regionLabel": "Ejes y Planos Anatómicos", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Término posicional que denota mayor lejanía respecto al plano sagital medio, orientándose hacia los costados izquierdo o derecho del cuerpo o de un segmento corporal.", "defTecnica": "Término posicional que indica ubicación hacia los lados del cuerpo, alejado de la línea media.", "simpleExplanation": "Hacia afuera o hacia los lados: todo lo que se aleja del centro del cuerpo para ir hacia los costados está en posición lateral.", "explicacionSencilla": "Ubicado hacia los costados exteriores del cuerpo, lejos de la línea media.", "everydayTitle": "Los brazos a los costados del tronco", "everydayExample": "Tus orejas son LATERALES con respecto a los ojos, y tus brazos caen por los lados laterales del tórax.", "analogia": "Como las aceras o bermas exteriores en una autopista: se ubican en los extremos laterales alejados del centro.", "clinicalTitle": "Epicondilalgia lateral (codo de tenista)", "clinicalRelevance": "La inserción común de los extensores de muñeca en el epicóndilo lateral del húmero sufre microrroturas por sobreuso repetitivo en pronosupinación.", "clinicalCase": "Dolor a la palpación en el epicóndilo lateral y prueba de Cozen positiva con extensión resistida de muñeca.", "keyDetails": [{"label": "Línea de referencia", "value": "Se aleja del plano medio"}, {"label": "Término opuesto", "value": "Medial"}, {"label": "Término previo", "value": "Externo"}, {"label": "Ejemplo en mano", "value": "El pulgar es lateral al meñique en posición anatómica"}], "svgType": "lateral", "isFeatured": false}, {"id": "supinacion", "name": "Supinación", "termino": "Supinación", "pronunciation": "/su-pi-na-ción/", "fonetica": "su-pi-na-CION", "etymology": "Del latín supinus ('vuelto boca arriba, tendido hacia arriba').", "category": "movimientos", "categoryLabel": "Movimiento Biomecánico", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "codo", "regionLabel": "Codo, Antebrazo & Mano", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Movimiento de rotación del antebrazo en el plano transversal alrededor del eje longitudinal radio-cubital, mediante el cual el radio rota externamente quedando paralelo al cúbito y orientando la palma de la mano hacia adelante o arriba.", "defTecnica": "Giro rotacional del antebrazo que sitúa la palma de la mano orientada hacia arriba o hacia adelante.", "simpleExplanation": "Girar la mano para dejar la palma mirando hacia arriba, como cuando pides algo o esperas que te sirvan un plato de sopa.", "explicacionSencilla": "Giro del antebrazo que coloca la palma de la mano hacia arriba o hacia adelante.", "everydayTitle": "Pedir monedas o recibir un plato de sopa", "everydayExample": "Haces SUPINACIÓN cuando pones la palma hacia arriba para pedir un plato de SOPA o sostener un puñado de caramelos.", "analogia": "La regla mnemotécnica infalible de Fisioterapia: 'SUPInación = pedir SOPA caliente con la palma abierta al cielo'.", "clinicalTitle": "El bíceps braquial como potente supinador", "clinicalRelevance": "El bíceps braquial despliega su mayor potencia como supinador cuando el codo está flexionado a 90°. Si se pierde supinación, actividades como comer o peinarse se vuelven imposibles sin compensación.", "clinicalCase": "Rigidez radiocubital post-yeso con bloqueo a 20° de supinación que impide sostener monedas en la palma plana.", "keyDetails": [{"label": "Músculo estrella", "value": "Bíceps braquial (codo a 90°) y Músculo Supinador"}, {"label": "Hueso móvil", "value": "Radio gira y queda paralelo al cúbito"}, {"label": "ROM normal", "value": "80° - 90° con goniometría"}, {"label": "Movimiento opuesto", "value": "Pronación"}], "svgType": "supinacion", "isFeatured": false}, {"id": "pronacion", "name": "Pronación", "termino": "Pronación", "pronunciation": "/pro-na-ción/", "fonetica": "pro-na-CION", "etymology": "Del latín pronus ('inclinado hacia adelante, boca abajo').", "category": "movimientos", "categoryLabel": "Movimiento Biomecánico", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "codo", "regionLabel": "Codo, Antebrazo & Mano", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Movimiento rotacional del antebrazo en el plano transversal sobre su eje longitudinal, en el cual el radio rota internamente cruzándose oblicuamente por delante del cúbito y orientando la palma hacia atrás o hacia abajo.", "defTecnica": "Giro rotacional del antebrazo que sitúa la palma de la mano orientada hacia abajo o hacia atrás.", "simpleExplanation": "Girar la mano para dejar la palma mirando hacia el suelo o la mesa, como cuando escribes en el teclado o usas el mouse de la computadora.", "explicacionSencilla": "Giro del antebrazo que coloca la palma de la mano hacia abajo o hacia atrás.", "everydayTitle": "Escribir en el teclado de tu laptop", "everydayExample": "Al apoyar tus palmas hacia abajo sobre las teclas de tu computador o sobre el escritorio para escribir, tus antebrazos están en PRONACIÓN.", "analogia": "Como voltear una tortilla en la sartén o poner boca abajo una carta de baraja sobre la mesa.", "clinicalTitle": "Pérdida de pronación en fracturas de muñeca", "clinicalRelevance": "Tras una fractura de radio distal (fractura de Colles), la pérdida de pronación obliga al paciente a elevar el codo y rotar el tronco para teclear o comer.", "clinicalCase": "Rehabilitación de pronadores con toallas y mancuernas para recuperar el giro funcional de las perillas de puertas.", "keyDetails": [{"label": "Músculos motores", "value": "Pronador redondo y Pronador cuadrado"}, {"label": "Biomecánica ósea", "value": "El radio cruza oblicuamente sobre el cúbito"}, {"label": "ROM normal", "value": "75° - 85°"}, {"label": "Movimiento opuesto", "value": "Supinación"}], "svgType": "pronacion", "isFeatured": false}, {"id": "abduccion", "name": "Abducción", "termino": "Abducción", "pronunciation": "/ab-duc-ción/", "fonetica": "ab-duc-CION", "etymology": "Del latín ab ('lejos, separar') + ducere ('guiar, llevar').", "category": "movimientos", "categoryLabel": "Movimiento Biomecánico", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "hombro", "regionLabel": "Hombro, Cadera y Extremidades", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Movimiento angular en el plano frontal o coronal alrededor del eje anteroposterior (sagital), en el cual una extremidad o segmento corporal se aleja de la línea media longitudinal del cuerpo.", "defTecnica": "Movimiento que separa y aleja una extremidad o segmento corporal de la línea media del cuerpo.", "simpleExplanation": "Abrir o separar los brazos o las piernas hacia los lados, alejándolos del centro del cuerpo como abriendo las alas de un avión.", "explicacionSencilla": "Movimiento que aleja un brazo o pierna de la línea central del cuerpo hacia los costados.", "everydayTitle": "Abrir los brazos para señalar a los lados", "everydayExample": "Cuando abres ambos brazos hacia los costados imitando el vuelo de un avión o en la fase de salto de los 'jumping jacks', haces ABDUCCIÓN.", "analogia": "Mnemotecnia clásica: 'AB-ducir es como secuestrar o alejar del hogar (separar de la línea central)'.", "clinicalTitle": "Músculos abductores y estabilidad pélvica", "clinicalRelevance": "El glúteo medio es el principal abductor de cadera; evita que la pelvis caiga hacia el lado contrario al estar de pie sobre un solo pie (apoyo monopodal).", "clinicalCase": "Signo de Trendelenburg positivo por debilidad del abductor de cadera tras reemplazo total.", "keyDetails": [{"label": "Plano y eje", "value": "Plano Frontal / Eje Anteroposterior"}, {"label": "Acción clave", "value": "Separa y aleja del centro"}, {"label": "Músculos estrella", "value": "Deltoides medio (hombro) / Glúteo medio (cadera)"}, {"label": "Movimiento opuesto", "value": "Aducción"}], "svgType": "abduccion", "isFeatured": false}, {"id": "aduccion", "name": "Aducción", "termino": "Aducción", "pronunciation": "/ad-duc-ción/", "fonetica": "ad-duc-CION", "etymology": "Del latín ad ('hacia, cerca') + ducere ('llevar').", "category": "movimientos", "categoryLabel": "Movimiento Biomecánico", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "hombro", "regionLabel": "Hombro, Cadera y Extremidades", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Movimiento en el plano frontal o coronal sobre un eje anteroposterior, mediante el cual un segmento corporal aproximado retorna o cruza hacia la línea media del cuerpo.", "defTecnica": "Movimiento que aproxima y acerca una extremidad hacia la línea media del cuerpo.", "simpleExplanation": "Cerrar o juntar las extremidades hacia el centro de tu cuerpo, como 'añadir' un brazo de vuelta contra tus costillas.", "explicacionSencilla": "Movimiento que acerca una extremidad o segmento corporal hacia el centro o línea media del cuerpo.", "everydayTitle": "Apretar una pelota entre las rodillas", "everydayExample": "Al apretar un balón o un cojín entre tus dos rodillas sentada en una silla, estás activando los aductores de cadera en plena ADUCCIÓN.", "analogia": "Mnemotecnia en inglés y español: 'ADDucción = ADD (añadir hacia adentro, sumar al centro del cuerpo)'.", "clinicalTitle": "Pubalgia y desbalance aductor-abdominal", "clinicalRelevance": "En futbolistas y atletas, la tensión excesiva de los aductores de cadera genera tracción asimétrica sobre la sínfisis púbica, causando pubalgia crónica.", "clinicalCase": "Fisioterapia en pubalgia del deportista reequilibrando aductor largo con recto del abdomen.", "keyDetails": [{"label": "Plano y eje", "value": "Plano Frontal / Eje Anteroposterior"}, {"label": "Acción clave", "value": "Aproxima hacia la línea media"}, {"label": "Músculos clave", "value": "Pectoral mayor (hombro) / Aductor largo, mayor y corto (cadera)"}, {"label": "Movimiento opuesto", "value": "Abducción"}], "svgType": "aduccion", "isFeatured": false}, {"id": "flexion", "name": "Flexión", "termino": "Flexión", "pronunciation": "/fle-xión/", "fonetica": "fle-XION", "etymology": "Del latín flectere ('doblar, curvar').", "category": "movimientos", "categoryLabel": "Movimiento Biomecánico", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "codo", "regionLabel": "Articulaciones Diartrosis", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Movimiento angular en el plano sagital alrededor de un eje transversal (laterolateral), que disminuye el ángulo entre los dos segmentos óseos que forman la articulación, aproximando sus superficies.", "defTecnica": "Movimiento articular en el plano sagital que generalmente disminuye el ángulo entre dos segmentos corporales.", "simpleExplanation": "Doblar o plegar una articulación: cuando pliegas el codo para rascarte la barbilla o doblas la rodilla al dar un paso, estás flexionando.", "explicacionSencilla": "Movimiento que dobla una articulación y reduce el ángulo entre dos partes del cuerpo.", "everydayTitle": "Doblar el codo para hablar por teléfono", "everydayExample": "Cuando tomas el celular con tu mano y doblas el codo para pegarlo a tu oreja, ejecutas una FLEXIÓN de codo completa.", "analogia": "Como cerrar una navaja suiza o una puerta con bisagras: las dos hojas se aproximan y el ángulo entre ellas se achica.", "clinicalTitle": "Goniometría y evaluación del arco de movilidad", "clinicalRelevance": "La pérdida de flexión de rodilla (<90°) impide bajar escaleras, ponerse en cuclillas o levantarse de sillas bajas con normalidad.", "clinicalCase": "Ganancia de flexión de rodilla de 65° a 115° tras artroscopia mediante movilizaciones pasivas y calor profundo.", "keyDetails": [{"label": "Plano y eje", "value": "Plano Sagital / Eje Transversal"}, {"label": "Efecto articular", "value": "Disminuye el ángulo entre segmentos"}, {"label": "Ejemplos anatómicos", "value": "Flexión de codo, cadera, rodilla, tronco"}, {"label": "Movimiento opuesto", "value": "Extensión"}], "svgType": "flexion", "isFeatured": false}, {"id": "extension", "name": "Extensión", "termino": "Extensión", "pronunciation": "/ex-ten-sión/", "fonetica": "ex-ten-SION", "etymology": "Del latín extendere ('desplegar, tender hacia fuera').", "category": "movimientos", "categoryLabel": "Movimiento Biomecánico", "categoryClass": "bg-cat-movements/15 text-cat-movements", "region": "codo", "regionLabel": "Articulaciones Diartrosis", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Movimiento angular en el plano sagital alrededor del eje transversal (laterolateral), que aumenta el ángulo entre dos segmentos corporales, retornando la estructura a la posición anatómica o superándola.", "defTecnica": "Movimiento articular en el plano sagital que generalmente incrementa el ángulo entre dos segmentos corporales.", "simpleExplanation": "Estirar o desplegar una articulación en línea recta: cuando estiras la rodilla para ponerte de pie o estiras el brazo para alcanzar algo al frente.", "explicacionSencilla": "Movimiento que estira la articulación y aumenta el ángulo entre los dos segmentos del cuerpo.", "everydayTitle": "Estirar las piernas al levantarte de la cama", "everydayExample": "Cuando estás sentada y te pones de pie estirando completamente tus rodillas y caderas en línea recta, estás haciendo EXTENSIÓN.", "analogia": "Como abrir una regla plegable de carpintero: al desplegarla por completo queda recta y con su ángulo abierto al máximo (180°).", "clinicalTitle": "Déficit de extensión terminal y marcha claudicante", "clinicalRelevance": "Un flexo de rodilla de tan solo 5° a 10° tras cirugía de ligamentos altera el contacto de talón, sobrecarga el cuádriceps y produce marcha claudicante dolorosa.", "clinicalCase": "Extensión activa terminal de rodilla en camilla para activar el vasto medial oblicuo tras reconstrucción de LCA.", "keyDetails": [{"label": "Plano y eje", "value": "Plano Sagital / Eje Transversal"}, {"label": "Efecto articular", "value": "Aumenta el ángulo entre segmentos"}, {"label": "Músculo rey de extensión", "value": "Cuádriceps (rodilla) / Tríceps braquial (codo)"}, {"label": "Movimiento opuesto", "value": "Flexión"}], "svgType": "extension", "isFeatured": false}, {"id": "isometrico", "name": "Isométrico", "termino": "Isométrico", "pronunciation": "/i-so-mé-tri-co/", "fonetica": "i-so-ME-tri-co", "etymology": "Del griego isos ('igual') + metron ('medida, longitud').", "category": "musculos", "categoryLabel": "Biomecánica Muscular", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "general", "regionLabel": "Tipos de Contracción Muscular", "level": "Básico (1er año)", "readingTime": "2 min", "technicalDef": "Tipo de contracción muscular estática en la que el músculo genera tensión activa interna sin modificar su longitud externa macroscópica y sin producir desplazamiento angular articular apreciable.", "defTecnica": "Contracción muscular en la que se genera tensión activa sin movimiento apreciable ni variación de longitud articular.", "simpleExplanation": "Hacer fuerza pura sin moverte del sitio: tus músculos están temblando de tensión, pero la articulación permanece quieta como una estatua.", "explicacionSencilla": "Contracción donde el músculo hace fuerza pero la articulación no se mueve ni cambia de ángulo.", "everydayTitle": "Empujar una pared de concreto o aguantar en 'sentadilla en pared'", "everydayExample": "Si empujas con todas tus fuerzas una pared sólida que no se mueve, o sostienes la postura de sentadilla contra la pared (wall sit) durante 45 segundos, tus cuádriceps trabajan en contracción ISOMÉTRICA.", "analogia": "Como una cuerda en un juego de tirar de la soga cuando los dos equipos tiran con idéntica fuerza: la cuerda está tensísima, pero no avanza hacia ningún lado.", "clinicalTitle": "Entrenamiento isométrico y efecto analgésico", "clinicalRelevance": "Las contracciones isométricas a carga moderada (45 s al 70% MVC) producen analgesia inmediata en tendinopatías rotulianas y permiten ganar fuerza en fases postquirúrgicas agudas sin dañar suturas articulares.", "clinicalCase": "Isométricos de cuádriceps en decúbito supino (apretar toalla enrollada bajo rodilla) en las primeras 48 horas post-operadas.", "keyDetails": [{"label": "Etimología médica", "value": "Iso (igual) + Metro (longitud)"}, {"label": "Movimiento articular", "value": "0° de desplazamiento (estático)"}, {"label": "Efecto terapéutico", "value": "Efecto hipoalgésico en tendinopatías y activación segura"}, {"label": "Diferencia con isotónico", "value": "En el isotónico hay movimiento concéntrico o excéntrico"}], "svgType": "isometrico", "isFeatured": false}, {"id": "propiocepcion", "name": "Propiocepción", "termino": "Propiocepción", "pronunciation": "/pro-pio-cep-ción/", "fonetica": "pro-pio-cep-ción", "etymology": "Del latín proprius ('de uno mismo, propio') + capere ('captar, percibir').", "category": "movimientos", "categoryLabel": "Fisiología Neuromuscular", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "general", "regionLabel": "Control Motor Global", "level": "Básico - Intermedio", "readingTime": "3 min", "technicalDef": "Capacidad somatosensorial consciente e inconsciente mediada por mecanorreceptores periféricos (husos neuromusculares, órganos tendinosos de Golgi y receptores articulares) que informan continuamente al sistema nervioso central sobre la posición espacial estática, cinestesia dinámica y gradiente de tensión articular sin necesidad de estímulo visual.", "defTecnica": "Capacidad somatosensorial consciente e inconsciente mediada por mecanorreceptores periféricos (husos neuromusculares, órganos tendinosos de Golgi y receptores articulares) que informan continuamente al sistema nervioso central sobre la posición espacial estática, cinestesia dinámica y gradiente de tensión articular sin necesidad de estímulo visual.", "simpleExplanation": "El GPS interno de tu cuerpo: el sexto sentido que le dice a tu cerebro exactamente dónde están tus brazos, piernas y articulaciones en cada milisegundo sin necesidad de mirarlos.", "explicacionSencilla": "El GPS interno de tu cuerpo: el sexto sentido que le dice a tu cerebro exactamente dónde están tus brazos, piernas y articulaciones en cada milisegundo sin necesidad de mirarlos.", "everydayTitle": "Caminar a oscuras o abotonar la camisa a ciegas", "everydayExample": "Cuando caminas por tu habitación a oscuras sin tropezar, te tocas la punta de la nariz con los ojos cerrados, o abotonas el botón trasero de tu camisa con los dedos sin mirarte en el espejo.", "analogia": "Cuando caminas por tu habitación a oscuras sin tropezar, te tocas la punta de la nariz con los ojos cerrados, o abotonas el botón trasero de tu camisa con los dedos sin mirarte en el espejo.", "clinicalTitle": "¿Por qué es crucial en rehabilitación?", "clinicalRelevance": "En lesiones como el esguince de tobillo o rotura del LCA, los ligamentos se rompen y con ellos sus mecanorreceptores. El cerebro queda 'ciego' ante la posición del pie, causando esguinces repetitivos si no se reentrena la propiocepción con superficies inestables (Bosu, plato de Freeman).", "clinicalCase": "Esguince de tobillo recidivante: reeducación propioceptiva sobre colchonetas y apoyo monopodal para que los músculos peroneos reaccionen en menos de 60 ms ante una torcedura.", "keyDetails": [{"label": "Sensores principales", "value": "Husos neuromusculares (longitud) y Órganos de Golgi (tensión)"}, {"label": "Vía de transmisión", "value": "Cordones posteriores de la médula espinal (Goll y Burdach)"}, {"label": "Centro integrador", "value": "Cerebelo y corteza somatosensorial parietal"}, {"label": "Herramienta terapéutica", "value": "Plato de Freeman, Bosu, ejercicios monopoidales"}], "svgType": "propiocepcion", "isFeatured": true}, {"id": "rotacion-interna-externa", "name": "Rotación Interna vs. Externa", "termino": "Rotación Interna vs. Externa", "pronunciation": "/ro-ta-ción in-ter-na / ex-ter-na/", "fonetica": "ro-ta-ción in-ter-na  ex-ter-na", "etymology": "Del latín rotare ('girar como rueda').", "category": "movimientos", "categoryLabel": "Movimiento Biomecánico", "categoryClass": "bg-amber-quiz/15 text-amber-quiz", "region": "hombro", "regionLabel": "Articulaciones Triaxiales", "level": "Básico - Intermedio", "readingTime": "3 min", "technicalDef": "Movimiento de giro de un hueso alrededor de su propio eje longitudinal en el plano transversal. En la rotación interna (medial), la cara anterior del segmento gira hacia la línea media. En la rotación externa (lateral), gira alejándose de la línea media.", "defTecnica": "Movimiento de giro de un hueso alrededor de su propio eje longitudinal en el plano transversal. En la rotación interna (medial), la cara anterior del segmento gira hacia la línea media. En la rotación externa (lateral), gira alejándose de la línea media.", "simpleExplanation": "Girar un hueso sobre su propio eje largo hacia adentro (hacia el ombligo) o hacia afuera.", "explicacionSencilla": "Girar un hueso sobre su propio eje largo hacia adentro (hacia el ombligo) o hacia afuera.", "everydayTitle": "Rascote la espalda vs. peinarte la nuca", "everydayExample": "Rotación INTERNA: Meter la mano por detrás de tu espalda baja para rascarte. Rotación EXTERNA: Llevar ambas manos detrás de la nuca para peinarte o tomar sol.", "analogia": "Rotación INTERNA: Meter la mano por detrás de tu espalda baja para rascarte. Rotación EXTERNA: Llevar ambas manos detrás de la nuca para peinarte o tomar sol.", "clinicalTitle": "Arco de movilidad del hombro en atletas lanzadores", "clinicalRelevance": "En deportes de lanzamiento (béisbol, tenis), se produce una ganancia adaptativa de rotación externa a expensas de un déficit de rotación interna glenohumeral (GIRD).", "clinicalCase": "Déficit GIRD en tenista: hombro con dolor posterior en saque por acortamiento de la cápsula posterior y rotadores externos contracturados.", "keyDetails": [{"label": "Plano cardinal", "value": "Plano Transversal u Horizontal"}, {"label": "Eje biomecánico", "value": "Eje Longitudinal o Vertical"}, {"label": "Rotador interno clave", "value": "Subescapular y Pectoral Mayor"}, {"label": "Rotadores externos", "value": "Infraespinoso y Redondo Menor"}], "svgType": "rotacion", "isFeatured": false}, {"id": "inversion-eversion", "name": "Inversión vs. Eversión del Pie", "termino": "Inversión vs. Eversión del Pie", "pronunciation": "/in-ver-sión / e-ver-sión/", "fonetica": "in-ver-sión  e-ver-sión", "etymology": "Del latín invertere ('volver hacia adentro') y evertere ('volver hacia afuera').", "category": "movimientos", "categoryLabel": "Movimiento Biomecánico", "categoryClass": "bg-amber-quiz/15 text-amber-quiz", "region": "tobillo", "regionLabel": "Tobillo & Pie (Articulación Subastragalina)", "level": "Básico - Intermedio", "readingTime": "2 min", "technicalDef": "Movimientos triplanares del pie producidos principalmente en la articulación subtalar (subastragalina). La inversión orienta la planta del pie hacia la línea media medial (combinando aducción, supinación y flexión plantar). La eversión orienta la planta hacia afuera lateralmente (abducción, pronación y flexión dorsal).", "defTecnica": "Movimientos triplanares del pie producidos principalmente en la articulación subtalar (subastragalina). La inversión orienta la planta del pie hacia la línea media medial (combinando aducción, supinación y flexión plantar). La eversión orienta la planta hacia afuera lateralmente (abducción, pronación y flexión dorsal).", "simpleExplanation": "Inclinar la planta del pie hacia adentro (mirándose entre sí los pies) o hacia afuera.", "explicacionSencilla": "Inclinar la planta del pie hacia adentro (mirándose entre sí los pies) o hacia afuera.", "everydayTitle": "Caminar por el borde de la acera o torcerse el pie", "everydayExample": "INVERSIÓN forzada es el movimiento típico con el que te doblas el tobillo al pisar mal un hoyo en la calle (el pie gira hacia adentro y caes sobre el borde externo).", "analogia": "INVERSIÓN forzada es el movimiento típico con el que te doblas el tobillo al pisar mal un hoyo en la calle (el pie gira hacia adentro y caes sobre el borde externo).", "clinicalTitle": "El mecanismo lesional del 85% de los esguinces", "clinicalRelevance": "El esguince de tobillo por inversión somete a máxima tensión y ruptura al ligamento peroneoastragalino anterior (LPAA).", "clinicalCase": "Esguince grado II por inversión brusca al pisar el pie de un contrincante en baloncesto: hematoma inmediato en la cara lateral externa del tobillo.", "keyDetails": [{"label": "Articulación clave", "value": "Subastragalina (calcáneo + astrágalo)"}, {"label": "Inversores principales", "value": "Tibial anterior y Tibial posterior"}, {"label": "Eversores principales", "value": "Músculos peroneo lateral largo y corto"}, {"label": "Ligamento vulnerable", "value": "Peroneoastragalino anterior (LPAA)"}], "svgType": "inversion_eversion", "isFeatured": false}, {"id": "tendon-aquiles", "name": "Tendón de Aquiles", "termino": "Tendón de Aquiles", "pronunciation": "/ten-dón de a-qui-les/", "fonetica": "ten-dón de a-qui-les", "etymology": "De la mitología griega (el único punto vulnerable del héroe Aquiles) y latín tendo ('estirar').", "category": "huesos", "categoryLabel": "Estructura Tendinosa", "categoryClass": "bg-cat-bones/15 text-cat-bones", "region": "tobillo", "regionLabel": "Tobillo & Pie", "level": "Básico", "readingTime": "3 min", "technicalDef": "Tendón común formado por la coalescencia de las aponeurosis del músculo tríceps sural (gastrocnemios medial y lateral junto con el sóleo). Se inserta en la tuberosidad posterior del hueso calcáneo y transmite la fuerza necesaria para la flexión plantar del tobillo.", "defTecnica": "Tendón común formado por la coalescencia de las aponeurosis del músculo tríceps sural (gastrocnemios medial y lateral junto con el sóleo). Se inserta en la tuberosidad posterior del hueso calcáneo y transmite la fuerza necesaria para la flexión plantar del tobillo.", "simpleExplanation": "La cuerda elástica más gruesa y fuerte de todo tu cuerpo. Conecta los músculos de la pantorrilla con el talón y actúa como un resorte de alta potencia que te impulsa en cada paso.", "explicacionSencilla": "La cuerda elástica más gruesa y fuerte de todo tu cuerpo. Conecta los músculos de la pantorrilla con el talón y actúa como un resorte de alta potencia que te impulsa en cada paso.", "everydayTitle": "El resorte para saltar y correr", "everydayExample": "Ponerte de puntillas para ver por encima de una multitud, dar un salto en baloncesto o el impulso en el último milisegundo antes de que el pie despegue del piso al correr.", "analogia": "Ponerte de puntillas para ver por encima de una multitud, dar un salto en baloncesto o el impulso en el último milisegundo antes de que el pie despegue del piso al correr.", "clinicalTitle": "Frecuente en lesiones deportivas y sobrecarga", "clinicalRelevance": "Soporta fuerzas de hasta 8 a 10 veces el peso corporal durante el sprint. Su zona hipovascular a 2-6 cm de la inserción es la más susceptible a tendinopatías y roturas espontáneas.", "clinicalCase": "Tendinopatía aquilea por cambio brusco a calzado plano o aumento de volumen de carrera: dolor matutino punzante al dar los primeros pasos del día.", "keyDetails": [{"label": "Músculos que lo forman", "value": "Gastrocnemios (gemelos) + Sóleo (Tríceps Sural)"}, {"label": "Inserción ósea", "value": "Cara posterior del calcáneo"}, {"label": "Acción principal", "value": "Flexión plantar del tobillo (propulsión)"}, {"label": "Test de evaluación", "value": "Signo de Thompson (para evaluar rotura completa)"}], "svgType": "tendon_aquiles", "isFeatured": false}, {"id": "manguito-rotador", "name": "Manguito Rotador", "termino": "Manguito Rotador", "pronunciation": "/man-gui-to ro-ta-dor/", "fonetica": "man-gui-to ro-ta-dor", "etymology": "Metáfora anatómica por la forma en que los tendones rodean la cabeza del húmero como el puño de una manga.", "category": "musculos", "categoryLabel": "Complejo Muscular", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "hombro", "regionLabel": "Hombro & Cintura Escapular", "level": "Intermedio", "readingTime": "4 min", "technicalDef": "Conjunto musculotendinoso integrado por los músculos supraespinoso, infraespinoso, redondo menor y subescapular. Sus tendones se fusionan con la cápsula articular de la articulación glenohumeral, actuando como estabilizadores dinámicos y coaptadores de la cabeza humeral contra la cavidad glenoidea.", "defTecnica": "Conjunto musculotendinoso integrado por los músculos supraespinoso, infraespinoso, redondo menor y subescapular. Sus tendones se fusionan con la cápsula articular de la articulación glenohumeral, actuando como estabilizadores dinámicos y coaptadores de la cabeza humeral contra la cavidad glenoidea.", "simpleExplanation": "Los 4 músculos guardianes del hombro. Abrazan la esfera de tu brazo para mantenerla encajada en su cuenca mientras te mueves, evitando que el brazo se salga de su lugar.", "explicacionSencilla": "Los 4 músculos guardianes del hombro. Abrazan la esfera de tu brazo para mantenerla encajada en su cuenca mientras te mueves, evitando que el brazo se salga de su lugar.", "everydayTitle": "Lanzar una pelota o peinarse", "everydayExample": "Alcanzar el cinturón de seguridad en el auto, abrocharte el sostén por la espalda o lanzar una pelota de tenis con fuerza sin que se te disloque el hombro.", "analogia": "Alcanzar el cinturón de seguridad en el auto, abrocharte el sostén por la espalda o lanzar una pelota de tenis con fuerza sin que se te disloque el hombro.", "clinicalTitle": "Causa #1 de dolor de hombro en adultos", "clinicalRelevance": "El tendón del supraespinoso pasa por un espacio estrecho bajo el acromion (espacio subacromial) y puede pinzarse durante elevaciones repetitivas del brazo.", "clinicalCase": "Síndrome de pinzamiento subacromial: dolor agudo en arco doloroso entre 60° y 120° de abducción al levantar el brazo de lado.", "keyDetails": [{"label": "Mnemotecnia clínica", "value": "S.I.R.S (Supraespinoso, Infraespinoso, Redondo menor, Subescapular)"}, {"label": "Función mecánica", "value": "Coaptación dinámica glenohumeral y rotaciones"}, {"label": "Músculo más lesionado", "value": "Supraespinoso (inicia los primeros 15° de abducción)"}, {"label": "Tests clínicos", "value": "Test de Neer, Hawkins-Kennedy, Jobe (Empty Can)"}], "svgType": "manguito_rotador", "isFeatured": false}, {"id": "lca", "name": "Ligamento Cruzado Anterior (LCA)", "termino": "Ligamento Cruzado Anterior (LCA)", "pronunciation": "/li-ga-men-to cru-za-do an-te-rior/", "fonetica": "li-ga-men-to cru-za-do an-te-rior", "etymology": "Del latín ligare ('atar'). Cruzado porque se cruza en X con el posterior en la fosa intercondílea.", "category": "articulaciones", "categoryLabel": "Articulación & Ligamentos", "categoryClass": "bg-cat-joints/15 text-cat-joints", "region": "rodilla", "regionLabel": "Rodilla & Pierna", "level": "Básico - Intermedio", "readingTime": "3 min", "technicalDef": "Banda densa de tejido conectivo fibroso intraarticular pero extrasinovial en la rodilla. Se origina en la superficie medial del cóndilo femoral lateral y se inserta en el área intercondílea anterior de la tibia. Su función primaria es resistir la traslación tibial anterior y las tensiones de rotación interna.", "defTecnica": "Banda densa de tejido conectivo fibroso intraarticular pero extrasinovial en la rodilla. Se origina en la superficie medial del cóndilo femoral lateral y se inserta en el área intercondílea anterior de la tibia. Su función primaria es resistir la traslación tibial anterior y las tensiones de rotación interna.", "simpleExplanation": "El cinturón de seguridad interno de tu rodilla. Evita que el hueso de tu espinilla (tibia) se resbale hacia adelante de forma descontrolada cuando frenas de golpe o cambias de dirección.", "explicacionSencilla": "El cinturón de seguridad interno de tu rodilla. Evita que el hueso de tu espinilla (tibia) se resbale hacia adelante de forma descontrolada cuando frenas de golpe o cambias de dirección.", "everydayTitle": "Frenar en seco o cambiar de dirección jugando fútbol", "everydayExample": "Cuando corres a toda velocidad tras el autobús y frenas en seco en la esquina, o cuando un futbolista hace un cambio de ritmo girando sobre un solo pie apoyado en el césped.", "analogia": "Cuando corres a toda velocidad tras el autobús y frenas en seco en la esquina, o cuando un futbolista hace un cambio de ritmo girando sobre un solo pie apoyado en el césped.", "clinicalTitle": "La lesión 'estrella' en el deporte de pivote", "clinicalRelevance": "Mecanismo típico: desaceleración brusca con valgo y rotación externa de rodilla sin contacto. Suele acompañarse de un 'chasquido' audible (pop) y derrame articular inmediato (hemartros).", "clinicalCase": "Rotura del LCA en una jugadora de básquet al caer de un rebote con la rodilla hacia adentro: sensación de rodilla 'suelta' o que cede al caminar.", "keyDetails": [{"label": "Origen biomecánico", "value": "Cara posteromedial del cóndilo femoral lateral"}, {"label": "Inserción tibial", "value": "Espina tibial anterior (área intercondílea anterior)"}, {"label": "Pruebas ortopédicas", "value": "Test de Lachman (más sensible), Cajón Anterior, Pivot Shift"}, {"label": "Prevención kinésica", "value": "Fortalecimiento de isquiotibiales y control neuromuscular"}], "svgType": "lca", "isFeatured": false}, {"id": "lcp", "name": "Ligamento Cruzado Posterior (LCP)", "termino": "Ligamento Cruzado Posterior (LCP)", "pronunciation": "/li-ga-men-to cru-za-do pos-te-rior/", "fonetica": "li-ga-men-to cru-za-do pos-te-rior", "etymology": "Compañero posterior del LCA en la articulación de la rodilla.", "category": "articulaciones", "categoryLabel": "Articulación & Ligamentos", "categoryClass": "bg-cat-joints/15 text-cat-joints", "region": "rodilla", "regionLabel": "Rodilla & Pierna", "level": "Intermedio", "readingTime": "3 min", "technicalDef": "Banda ligamentosa intraarticular más gruesa y fuerte que el LCA. Se origina en la cara lateral del cóndilo femoral medial y se inserta en la depresión intercondílea posterior de la tibia. Es el estabilizador primario contra la traslación tibial posterior.", "defTecnica": "Banda ligamentosa intraarticular más gruesa y fuerte que el LCA. Se origina en la cara lateral del cóndilo femoral medial y se inserta en la depresión intercondílea posterior de la tibia. Es el estabilizador primario contra la traslación tibial posterior.", "simpleExplanation": "El freno posterior de tu rodilla. Impide que la espinilla se hunda hacia atrás por debajo del fémur.", "explicacionSencilla": "El freno posterior de tu rodilla. Impide que la espinilla se hunda hacia atrás por debajo del fémur.", "everydayTitle": "El impacto contra el tablero del auto", "everydayExample": "Un choque en auto donde la rodilla doblada a 90° golpea con fuerza directa el tablero hacia atrás (lesión del salpicadero o 'dashboard injury').", "analogia": "Un choque en auto donde la rodilla doblada a 90° golpea con fuerza directa el tablero hacia atrás (lesión del salpicadero o 'dashboard injury').", "clinicalTitle": "Menos frecuente pero de diagnóstico esquivo", "clinicalRelevance": "Tiene mayor capacidad intrínseca de cicatrización que el LCA por su mejor vascularización. Suele tratarse de forma conservadora con rehabilitación.", "clinicalCase": "Traumatismo directo en tibia proximal al caer de rodillas en moto: signo del 'cajón posterior' positivo con hundimiento del relieve tibial anterior.", "keyDetails": [{"label": "Función primaria", "value": "Resistir la traslación tibial posterior (95% de la fuerza restrictiva)"}, {"label": "Inserción tibial", "value": "Depresión intercondílea posterior de la tibia"}, {"label": "Prueba diagnóstica", "value": "Test de cajón posterior y Signo del hundimiento de Godfrey"}, {"label": "Músculo que lo protege", "value": "Cuádriceps femoral (tira de la tibia hacia adelante)"}], "svgType": "lcp", "isFeatured": false}, {"id": "lcm", "name": "Ligamento Colateral Medial (LCM)", "termino": "Ligamento Colateral Medial (LCM)", "pronunciation": "/li-ga-men-to co-la-te-ral me-dial/", "fonetica": "li-ga-men-to co-la-te-ral me-dial", "etymology": "Del latín col- ('junto') + latus ('lado') y medialis ('hacia el centro').", "category": "articulaciones", "categoryLabel": "Articulación & Ligamentos", "categoryClass": "bg-cat-joints/15 text-cat-joints", "region": "rodilla", "regionLabel": "Rodilla (Compartimento Medial)", "level": "Básico - Intermedio", "readingTime": "2 min", "technicalDef": "Banda ancha y aplanada del compartimento interno de la rodilla. Se extiende desde el epicóndilo medial del fémur hasta la superficie medial del cóndilo tibial y el menisco medial (con el que está íntimamente adherido). Resiste las fuerzas en valgo (abducción de rodilla).", "defTecnica": "Banda ancha y aplanada del compartimento interno de la rodilla. Se extiende desde el epicóndilo medial del fémur hasta la superficie medial del cóndilo tibial y el menisco medial (con el que está íntimamente adherido). Resiste las fuerzas en valgo (abducción de rodilla).", "simpleExplanation": "La correa lateral interna que evita que la rodilla se doble hacia adentro formando una 'X'.", "explicacionSencilla": "La correa lateral interna que evita que la rodilla se doble hacia adentro formando una 'X'.", "everydayTitle": "Recibir una patada por la parte externa de la rodilla", "everydayExample": "Un impacto lateral en fútbol que empuja la rodilla hacia adentro mientras el pie está clavado en el césped.", "analogia": "Un impacto lateral en fútbol que empuja la rodilla hacia adentro mientras el pie está clavado en el césped.", "clinicalTitle": "La 'Tríada O'Donoghue' o Tríada Terrible", "clinicalRelevance": "Como sus fibras profundas se anclan al menisco medial, una lesión severa suele comprometer al mismo tiempo al LCA, al LCM y al menisco medial.", "clinicalCase": "Dolor a la palpación en la línea articular medial tras traumatismo con estrés en valgo en esquí: bostezo articular medial en prueba de valgo a 30°.", "keyDetails": [{"label": "Freno primario contra", "value": "Estrés en valgo (abducción forzada)"}, {"label": "Conexión anatómica íntima", "value": "Menisco medial (lo que explica lesiones conjuntas)"}, {"label": "Prueba clínica", "value": "Test de valgo forzado (a 0° y 30° de flexión)"}, {"label": "Cicatrización", "value": "Excelente (extraarticular con rica irrigación)"}], "svgType": "lcm", "isFeatured": false}, {"id": "cuadriceps-femoral", "name": "Cuádriceps Femoral", "termino": "Cuádriceps Femoral", "pronunciation": "/cuá-dri-ceps fe-mo-ral/", "fonetica": "cuá-dri-ceps fe-mo-ral", "etymology": "Del latín quattuor ('cuatro') + caput ('cabeza') y femur ('muslo').", "category": "musculos", "categoryLabel": "Grupo Muscular Mayor", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "rodilla", "regionLabel": "Muslo & Rodilla", "level": "Básico", "readingTime": "3 min", "technicalDef": "El músculo más voluminoso del cuerpo humano. Compuesto por cuatro vientres: recto femoral (biarticular), vasto medial, vasto lateral y vasto intermedio. Confluyen en el tendón cuadricipital que engloba la rótula y continúa como ligamento rotuliano hacia la tuberosidad tibial anterior.", "defTecnica": "El músculo más voluminoso del cuerpo humano. Compuesto por cuatro vientres: recto femoral (biarticular), vasto medial, vasto lateral y vasto intermedio. Confluyen en el tendón cuadricipital que engloba la rótula y continúa como ligamento rotuliano hacia la tuberosidad tibial anterior.", "simpleExplanation": "El gran motor delantero de tu pierna. Son cuatro músculos juntos que se encargan de poner tu rodilla bien recta y firme para sostener todo tu peso.", "explicacionSencilla": "El gran motor delantero de tu pierna. Son cuatro músculos juntos que se encargan de poner tu rodilla bien recta y firme para sostener todo tu peso.", "everydayTitle": "Patear un balón o levantarte del sofá", "everydayExample": "Patear un balón con fuerza, levantarte de una silla baja sin usar los brazos de apoyo, o frenar tu peso corporal al bajar una pendiente o escaleras empinadas.", "analogia": "Patear un balón con fuerza, levantarte de una silla baja sin usar los brazos de apoyo, o frenar tu peso corporal al bajar una pendiente o escaleras empinadas.", "clinicalTitle": "El amortiguador primordial de la rodilla", "clinicalRelevance": "La atrofia refleja del cuádriceps ocurre rápidamente tras cualquier derrame en la rodilla (inhibición artrogénica). Su reactivación temprana es la prioridad #1 en fisioterapia.", "clinicalCase": "Rehabilitación postquirúrgica de rodilla: ejercicios isométricos con toalla bajo el hueco poplíteo para 'despertar' el vasto medial y evitar que la rótula choque.", "keyDetails": [{"label": "4 vientres musculares", "value": "Recto femoral, Vasto medial, Vasto lateral, Vasto intermedio"}, {"label": "Función principal", "value": "Extensión potente de rodilla (el recto además flexiona cadera)"}, {"label": "Inervación motora", "value": "Nervio Femoral (L2 - L4)"}, {"label": "Rol funcional", "value": "Contracción excéntrica para amortiguar impactos al bajar escaleras"}], "svgType": "cuadriceps", "isFeatured": false}, {"id": "isquiotibiales", "name": "Isquiotibiales (Hamstrings)", "termino": "Isquiotibiales (Hamstrings)", "pronunciation": "/is-quio-ti-bia-les/", "fonetica": "is-quio-ti-bia-les", "etymology": "Del griego ischion ('cadera') y tibia ('hueso de la espinilla'). Nacen en el isquion de la pelvis y van a la tibia/peroné.", "category": "musculos", "categoryLabel": "Grupo Muscular Posterior", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "rodilla", "regionLabel": "Muslo Posterior & Cadera", "level": "Básico - Intermedio", "readingTime": "3 min", "technicalDef": "Complejo muscular biarticular de la región posterior del muslo compuesto por el bíceps femoral (cabeza larga y corta), el semitendinoso y el semimembranoso. Actúan como extensores potentes de cadera y flexores de la rodilla.", "defTecnica": "Complejo muscular biarticular de la región posterior del muslo compuesto por el bíceps femoral (cabeza larga y corta), el semitendinoso y el semimembranoso. Actúan como extensores potentes de cadera y flexores de la rodilla.", "simpleExplanation": "Los músculos frenadores de la parte trasera del muslo. Te permiten doblar la rodilla hacia tu glúteo y frenar la pierna cuando corres a toda velocidad.", "explicacionSencilla": "Los músculos frenadores de la parte trasera del muslo. Te permiten doblar la rodilla hacia tu glúteo y frenar la pierna cuando corres a toda velocidad.", "everydayTitle": "Frenar en carrera o llevar el talón al glúteo", "everydayExample": "Llevar el talón hacia la cola para rascarte con el pie opuesto o desacelerar rápidamente al llegar a la meta en una carrera de 100 metros.", "analogia": "Llevar el talón hacia la cola para rascarte con el pie opuesto o desacelerar rápidamente al llegar a la meta en una carrera de 100 metros.", "clinicalTitle": "La lesión muscular más frecuente en el fútbol", "clinicalRelevance": "Suelen desgarrarse en la fase terminal de oscilación de la carrera, cuando deben contraerse excéntricamente a alta velocidad para frenar la extensión de la rodilla.", "clinicalCase": "Desgarro miotendinoso en el bíceps femoral al picar hacia el balón: dolor punzante en la parte posterior del muslo ('tirón') con marcha en flexión.", "keyDetails": [{"label": "3 músculos clave", "value": "Bíceps femoral, Semitendinoso, Semimembranoso"}, {"label": "Origen común", "value": "Tuberosidad isquiática de la pelvis"}, {"label": "Función protectora", "value": "Sinergistas del LCA (evitan que la tibia se vaya adelante)"}, {"label": "Inervación", "value": "Nervio Ciático (rama tibial y peronea común)"}], "svgType": "isquiotibiales", "isFeatured": false}, {"id": "biceps-braquial", "name": "Bíceps Braquial", "termino": "Bíceps Braquial", "pronunciation": "/bí-ceps bra-quial/", "fonetica": "bí-ceps bra-quial", "etymology": "Del latín bis ('dos') + caput ('cabeza') y brachium ('brazo'). Músculo de dos cabezas en el brazo.", "category": "musculos", "categoryLabel": "Músculo Flexor & Supinador", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "codo", "regionLabel": "Brazo & Antebrazo", "level": "Básico", "readingTime": "2 min", "technicalDef": "Músculo biarticular del compartimento anterior del brazo constituido por la cabeza larga (nace en el tubérculo supraglenoideo) y la cabeza corta (nace en la apófisis coracoides). Se inserta distalmente en la tuberosidad bicipital del radio.", "defTecnica": "Músculo biarticular del compartimento anterior del brazo constituido por la cabeza larga (nace en el tubérculo supraglenoideo) y la cabeza corta (nace en la apófisis coracoides). Se inserta distalmente en la tuberosidad bicipital del radio.", "simpleExplanation": "El famoso músculo 'forzudo' del brazo. Es el que sacas al hacer fuerza doblando el codo y es además el supinador más potente cuando el codo está doblado a 90°.", "explicacionSencilla": "El famoso músculo 'forzudo' del brazo. Es el que sacas al hacer fuerza doblando el codo y es además el supinador más potente cuando el codo está doblado a 90°.", "everydayTitle": "Levantar las bolsas del mercado y abrir una botella de vino", "everydayExample": "Cargar bolsas pesadas de compras con el codo doblado, o hacer fuerza con el sacacorchos girando la mano hacia arriba para destapar una botella.", "analogia": "Cargar bolsas pesadas de compras con el codo doblado, o hacer fuerza con el sacacorchos girando la mano hacia arriba para destapar una botella.", "clinicalTitle": "Tendinopatía de la porción larga del bíceps", "clinicalRelevance": "El tendón de la cabeza larga pasa por la corredera bicipital del húmero y puede inflamarse por fricción en movimientos por encima de la cabeza.", "clinicalCase": "Tendinitis bicipital en nadador: dolor localizado en la cara anterior del hombro reproducible con el Test de Yergason y Test de Speed.", "keyDetails": [{"label": "Acciones principales", "value": "Flexión de codo + Supinador principal (a 90° de flexión)"}, {"label": "Inserción distal", "value": "Tuberosidad del radio (tuberosidad bicipital)"}, {"label": "Inervación", "value": "Nervio Musculocutáneo (C5 - C7)"}, {"label": "Tests clínicos", "value": "Speed test (palma arriba contra resistencia) y Yergason test"}], "svgType": "biceps", "isFeatured": false}, {"id": "meniscos-rodilla", "name": "Meniscos de la Rodilla", "termino": "Meniscos de la Rodilla", "pronunciation": "/me-nis-cos de la ro-di-lla/", "fonetica": "me-nis-cos de la ro-di-lla", "etymology": "Del griego meniskos ('pequeña luna, medialuna') por su característica morfología fibrocartilaginosa semilunar.", "category": "articulaciones", "categoryLabel": "Fibrocartílago Articular", "categoryClass": "bg-cat-joints/15 text-cat-joints", "region": "rodilla", "regionLabel": "Rodilla & Pierna", "level": "Intermedio", "readingTime": "3 min", "technicalDef": "Estructuras fibrocartilaginosas semilunares interpuestas entre los cóndilos femorales convexos y los platillos tibiales aplanados. El menisco medial tiene forma de 'C' (más fijo y vulnerable) y el menisco lateral tiene forma de 'O' (más móvil y cerrado). Distribuyen cargas axiales y facilitan la lubricación articular.", "defTecnica": "Estructuras fibrocartilaginosas semilunares interpuestas entre los cóndilos femorales convexos y los platillos tibiales aplanados. El menisco medial tiene forma de 'C' (más fijo y vulnerable) y el menisco lateral tiene forma de 'O' (más móvil y cerrado). Distribuyen cargas axiales y facilitan la lubricación articular.", "simpleExplanation": "Las dos almohadillas amortiguadoras de tu rodilla. Rellenan el espacio entre el fémur y la tibia para que no rocen hueso contra hueso y absorben el golpe de cada pisada.", "explicacionSencilla": "Las dos almohadillas amortiguadoras de tu rodilla. Rellenan el espacio entre el fémur y la tibia para que no rocen hueso contra hueso y absorben el golpe de cada pisada.", "everydayTitle": "Las suelas de gel dentro de tu rodilla", "everydayExample": "Imagina poner una plantilla de gel de alta tecnología dentro de tu zapato: cuando saltas o corres sobre pavimento duro, los meniscos absorben el 50% al 70% del impacto para proteger tus huesos.", "analogia": "Imagina poner una plantilla de gel de alta tecnología dentro de tu zapato: cuando saltas o corres sobre pavimento duro, los meniscos absorben el 50% al 70% del impacto para proteger tus huesos.", "clinicalTitle": "Zona roja vs. zona blanca y capacidad de cicatrización", "clinicalRelevance": "Solo el tercio periférico (zona roja) tiene aporte sanguíneo y puede cicatrizar; los dos tercios internos (zona blanca) son avasculares y no cicatrizan por sí solos si se desgarran.", "clinicalCase": "Desgarro meniscal por giro brusco con pie fijo: bloqueo articular momentáneo ('se me traba la rodilla al agacharme') con chasquido doloroso.", "keyDetails": [{"label": "Regla mnemotécnica", "value": "C-I-T-O: C=Interno (Medial) / O=Externo (Lateral)"}, {"label": "Funciones clave", "value": "Distribución de carga (shock absorption) y congruencia articular"}, {"label": "Zonas vasculares", "value": "Zona Roja-Roja (vascular) / Roja-Blanca / Blanca-Blanca (avascular)"}, {"label": "Pruebas clínicas", "value": "Test de McMurray, Test de Apley (compresión y tracción)"}], "svgType": "meniscos", "isFeatured": false}, {"id": "fascia-plantar", "name": "Fascia Plantar", "termino": "Fascia Plantar", "pronunciation": "/fas-cia plan-tar/", "fonetica": "fas-cia plan-tar", "etymology": "Del latín fascia ('venda, banda que envuelve') y planta ('planta del pie').", "category": "huesos", "categoryLabel": "Tejido Conectivo & Sostén", "categoryClass": "bg-cat-bones/15 text-cat-bones", "region": "tobillo", "regionLabel": "Planta del Pie", "level": "Básico - Intermedio", "readingTime": "3 min", "technicalDef": "Banda aponeurótica fibrosa gruesa de tejido conjuntivo que se extiende desde la tuberosidad medial del calcáneo hasta las bases de las falanges proximales. Soporta el arco longitudinal medial del pie y almacena energía elástica mediante el Mecanismo de Windlass.", "defTecnica": "Banda aponeurótica fibrosa gruesa de tejido conjuntivo que se extiende desde la tuberosidad medial del calcáneo hasta las bases de las falanges proximales. Soporta el arco longitudinal medial del pie y almacena energía elástica mediante el Mecanismo de Windlass.", "simpleExplanation": "El puente colgante de la planta de tu pie. Es una banda elástica y resistente que sostiene el arco del pie erguido para que no camines plano y amortigua cada pisada.", "explicacionSencilla": "El puente colgante de la planta de tu pie. Es una banda elástica y resistente que sostiene el arco del pie erguido para que no camines plano y amortigua cada pisada.", "everydayTitle": "El tensor del arco que duele al levantarse de la cama", "everydayExample": "Dar los primeros pasos descalzo al salir de la cama por la mañana sintiendo una puñalada en el talón que se alivia tras caminar unos minutos (signo clásico de fascitis plantar).", "analogia": "Dar los primeros pasos descalzo al salir de la cama por la mañana sintiendo una puñalada en el talón que se alivia tras caminar unos minutos (signo clásico de fascitis plantar).", "clinicalTitle": "El mecanismo de Windlass en la marcha", "clinicalRelevance": "Al extender los dedos del pie durante el despegue, la fascia se tensa como la cuerda de un molinete, elevando el arco y convirtiendo el pie en una palanca rígida de propulsión.", "clinicalCase": "Fascitis plantar en camarero por muchas horas de pie con calzado rígido: dolor exquisito a la presión en el tubérculo medial del calcáneo.", "keyDetails": [{"label": "Función estática", "value": "Mantiene la arquitectura del arco plantar medial"}, {"label": "Efecto biomecánico", "value": "Mecanismo de Windlass (tensión al extender el dedo gordo)"}, {"label": "Punto de dolor típico", "value": "Tubérculo anteromedial del calcáneo"}, {"label": "Tratamiento kinésico", "value": "Terapia manual miofascial, estiramiento de tríceps sural"}], "svgType": "fascia_plantar", "isFeatured": false}, {"id": "psoas-iliaco", "name": "Psoas Ilíaco", "termino": "Psoas Ilíaco", "pronunciation": "/pso-as i-lí-a-co/", "fonetica": "pso-as i-lí-a-co", "etymology": "Del griego psoa ('lomo, riñón') e ilíaco (del hueso ilion de la pelvis).", "category": "musculos", "categoryLabel": "Músculo Flexor de Cadera", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "cadera", "regionLabel": "Columna Lumbar, Pelvis & Cadera", "level": "Intermedio", "readingTime": "3 min", "technicalDef": "Potente unidad muscular formada por el psoas mayor (origen en vértebras T12-L5 y discos intervertebrales) y el músculo ilíaco (fosa ilíaca interna). Se unen en un tendón común para insertarse en el trocánter menor del fémur. Es el flexor primario de la articulación coxofemoral.", "defTecnica": "Potente unidad muscular formada por el psoas mayor (origen en vértebras T12-L5 y discos intervertebrales) y el músculo ilíaco (fosa ilíaca interna). Se unen en un tendón común para insertarse en el trocánter menor del fémur. Es el flexor primario de la articulación coxofemoral.", "simpleExplanation": "El puente que une tu columna vertebral con tus piernas. Es el músculo profundo que levanta la rodilla hacia el pecho al subir escaleras.", "explicacionSencilla": "El puente que une tu columna vertebral con tus piernas. Es el músculo profundo que levanta la rodilla hacia el pecho al subir escaleras.", "everydayTitle": "El músculo que se acorta al estar sentado todo el día", "everydayExample": "Pasar 8 horas seguidas sentado estudiando frente a la computadora y sentir que al ponerte de pie te cuesta estirar la cadera y te duele la espalda baja.", "analogia": "Pasar 8 horas seguidas sentado estudiando frente a la computadora y sentir que al ponerte de pie te cuesta estirar la cadera y te duele la espalda baja.", "clinicalTitle": "Relación directa con el dolor lumbar (Lumbago)", "clinicalRelevance": "Por originarse en los cuerpos lumbares, su acortamiento crónico aumenta la hiperlordosis lumbar y comprime las carillas articulares posteriores de la columna.", "clinicalCase": "Test de Thomas positivo: al acostar al paciente y flexionar una rodilla contra el pecho, la otra pierna se levanta de la camilla delatando psoas acortado.", "keyDetails": [{"label": "Inserción distal", "value": "Trocánter menor del fémur"}, {"label": "Acción principal", "value": "Flexión potente de cadera e inclinación del tronco"}, {"label": "Prueba de longitud", "value": "Test de Thomas"}, {"label": "Relación postural", "value": "Aumenta la lordosis lumbar si está acortado"}], "svgType": "psoas", "isFeatured": false}, {"id": "disco-intervertebral", "name": "Disco Intervertebral", "termino": "Disco Intervertebral", "pronunciation": "/dis-co in-ter-ver-te-bral/", "fonetica": "dis-co in-ter-ver-te-bral", "etymology": "Del griego diskos ('plato circular plano') e inter ('entre') vértebras.", "category": "articulaciones", "categoryLabel": "Articulación Cartilaginosa (Sínfisis)", "categoryClass": "bg-cat-joints/15 text-cat-joints", "region": "columna", "regionLabel": "Columna Vertebral (Cervical, Torácica, Lumbar)", "level": "Básico - Intermedio", "readingTime": "3 min", "technicalDef": "Estructura fibrocartilaginosa interpuesta entre los cuerpos vertebrales adyacentes. Formada por dos componentes: el anillo fibroso periférico (láminas concéntricas de colágeno) y el núcleo pulposo central (gel gelatinoso hidrofílico rico en proteoglicanos y agua).", "defTecnica": "Estructura fibrocartilaginosa interpuesta entre los cuerpos vertebrales adyacentes. Formada por dos componentes: el anillo fibroso periférico (láminas concéntricas de colágeno) y el núcleo pulposo central (gel gelatinoso hidrofílico rico en proteoglicanos y agua).", "simpleExplanation": "Las almohadillas hidráulicas entre los huesos de tu espalda. Funcionan como amortiguadores de gel que absorben los golpes y permiten que la columna se doble sin rozar.", "explicacionSencilla": "Las almohadillas hidráulicas entre los huesos de tu espalda. Funcionan como amortiguadores de gel que absorben los golpes y permiten que la columna se doble sin rozar.", "everydayTitle": "El amortiguador que se deshidrata durante el día", "everydayExample": "¿Sabías que por la noche mides 1 a 2 cm más que al final del día? Durante el día, la gravedad exprime agua de los discos; al dormir acostado, los discos se rehidratan como esponjas.", "analogia": "¿Sabías que por la noche mides 1 a 2 cm más que al final del día? Durante el día, la gravedad exprime agua de los discos; al dormir acostado, los discos se rehidratan como esponjas.", "clinicalTitle": "La hernia discal y la compresión ciática", "clinicalRelevance": "Si el anillo fibroso se desgarra por sobreesfuerzo en flexión con rotación, el núcleo pulposo puede extruirse y comprimir una raíz nerviosa (ej. L5 o S1).", "clinicalCase": "Hernia L5-S1: dolor fulgurante tipo 'corrientazo' que baja por el glúteo y la parte trasera de la pierna hasta el talón (lumbociatalgia), con signo de Lasègue positivo.", "keyDetails": [{"label": "2 componentes clave", "value": "Anillo fibroso (externo resistente) y Núcleo pulposo (gel interno)"}, {"label": "Mecanismo lesional", "value": "Flexión lumbar + Rotación de tronco levantando peso"}, {"label": "Nutrición del disco", "value": "Por imbibición / difusión (avascular en el adulto)"}, {"label": "Prueba neurológica", "value": "Maniobra de Lasègue (elevación de pierna recta)"}], "svgType": "disco", "isFeatured": false}, {"id": "goniometria", "name": "Goniometría Articular", "termino": "Goniometría Articular", "pronunciation": "/go-nio-me-trí-a/", "fonetica": "go-nio-me-trí-a", "etymology": "Del griego gonia ('ángulo') + metron ('medida'). Ciencia de medir ángulos articulares.", "category": "movimientos", "categoryLabel": "Evaluación Kinésica", "categoryClass": "bg-amber-quiz/15 text-amber-quiz", "region": "general", "regionLabel": "Método de Exploración Física", "level": "Básico - Instrumental", "readingTime": "3 min", "technicalDef": "Técnica de exploración física y evaluación biomecánica utilizada para cuantificar con precisión el rango de movimiento (ROM - Range of Motion) de una articulación en sus tres planos del espacio mediante el goniómetro universal, registrando grados sexagesimales.", "defTecnica": "Técnica de exploración física y evaluación biomecánica utilizada para cuantificar con precisión el rango de movimiento (ROM - Range of Motion) de una articulación en sus tres planos del espacio mediante el goniómetro universal, registrando grados sexagesimales.", "simpleExplanation": "El transportador escolar de los fisioterapeutas. Es la regla graduada con la que medimos con exactitud cuántos grados puede doblarse o estirarse una articulación.", "explicacionSencilla": "El transportador escolar de los fisioterapeutas. Es la regla graduada con la que medimos con exactitud cuántos grados puede doblarse o estirarse una articulación.", "everydayTitle": "El transportador para medir tu cuerpo", "everydayExample": "Igual que cuando en la escuela usabas el transportador de plástico para medir un ángulo de 90° en el cuaderno de geometría, pero colocado en el codo o la rodilla de tu paciente para ver cuánto le falta para doblar completo.", "analogia": "Igual que cuando en la escuela usabas el transportador de plástico para medir un ángulo de 90° en el cuaderno de geometría, pero colocado en el codo o la rodilla de tu paciente para ver cuánto le falta para doblar completo.", "clinicalTitle": "La brújula que demuestra el progreso del paciente", "clinicalRelevance": "Permite documentar objetivamente la evolución: 'El paciente inició con 85° de flexión de rodilla y tras 10 sesiones alcanzó 125°'. Da validez científica al tratamiento.", "clinicalCase": "Valoración de hombro congelado (capsulitis adhesiva): se mide abducción pasiva y activa; una diferencia marcada orienta hacia patología capsular vs. muscular.", "keyDetails": [{"label": "Partes del goniómetro", "value": "Eje o fulcro (eje articular), Brazo fijo (eje óseo proximal), Brazo móvil"}, {"label": "Posición cero (0°)", "value": "Posición anatómica internacional de referencia"}, {"label": "Tipos de movimiento", "value": "ROM Activo (voluntario) vs. ROM Pasivo (aplicado por el terapeuta)"}, {"label": "End-Feel o tope final", "value": "Tope blando (aproximación tisular), firme (ligamento/cápsula) o duro (óseo)"}], "svgType": "goniometria", "isFeatured": false}, {"id": "cadena-cinetica", "name": "Cadena Cinética: Abierta vs. Cerrada", "termino": "Cadena Cinética: Abierta vs. Cerrada", "pronunciation": "/ca-de-na ci-né-ti-ca/", "fonetica": "ca-de-na ci-né-ti-ca", "etymology": "Del griego kinesis ('movimiento'). Concepto de eslabones mecánicos articulados de Franz Reuleaux.", "category": "movimientos", "categoryLabel": "Biomecánica Funcional", "categoryClass": "bg-amber-quiz/15 text-amber-quiz", "region": "general", "regionLabel": "Biomecánica de Extremidades", "level": "Intermedio", "readingTime": "3 min", "technicalDef": "Clasificación biomecánica del movimiento en un sistema esquelético multiarticular. Cadena Cinética Abierta (CCA): el segmento distal (pie o mano) está libre en el espacio sin resistencia fija. Cadena Cinética Cerrada (CCC): el segmento distal está fijo o encuentra una resistencia externa insuperable (suelo, barra).", "defTecnica": "Clasificación biomecánica del movimiento en un sistema esquelético multiarticular. Cadena Cinética Abierta (CCA): el segmento distal (pie o mano) está libre en el espacio sin resistencia fija. Cadena Cinética Cerrada (CCC): el segmento distal está fijo o encuentra una resistencia externa insuperable (suelo, barra).", "simpleExplanation": "¿El pie o la mano se mueven libres en el aire (abierta), o están apoyados contra el suelo o una pared mientras mueves el resto del cuerpo (cerrada)?", "explicacionSencilla": "¿El pie o la mano se mueven libres en el aire (abierta), o están apoyados contra el suelo o una pared mientras mueves el resto del cuerpo (cerrada)?", "everydayTitle": "Patear una pelota al aire vs. hacer una sentadilla", "everydayExample": "Patear un balón al aire es Cadena ABIERTA (el pie viaja libre). Hacer una sentadilla o flexiones de pecho es Cadena CERRADA (tus pies o manos están clavados en el piso).", "analogia": "Patear un balón al aire es Cadena ABIERTA (el pie viaja libre). Hacer una sentadilla o flexiones de pecho es Cadena CERRADA (tus pies o manos están clavados en el piso).", "clinicalTitle": "Seguridad y co-contracción en rehabilitación", "clinicalRelevance": "La cadena cerrada genera co-contracción muscular simultánea (agonistas + antagonistas), mayor estabilidad articular y menor fuerza de cizallamiento anterior en el LCA.", "clinicalCase": "Fase temprana post-reconstrucción de LCA: se priorizan sentadillas cortas (CCC) sobre extensiones de rodilla en máquina con tobillera (CCA) para proteger el injerto.", "keyDetails": [{"label": "CCA (Cadena Abierta)", "value": "Segmento distal libre (ej. curl de bíceps, pateo)"}, {"label": "CCC (Cadena Cerrada)", "value": "Segmento distal fijo (ej. flexiones de brazos, sentadillas)"}, {"label": "Ventaja de la CCC", "value": "Mayor compresión y estabilidad articular articular, estimula propioceptores"}, {"label": "Ventaja de la CCA", "value": "Aislamiento analítico de un músculo específico"}], "svgType": "cadena_cinetica", "isFeatured": false}, {"id": "nervio-ciatico", "name": "Nervio Ciático (Síndrome Piramidal)", "termino": "Nervio Ciático (Síndrome Piramidal)", "pronunciation": "/ner-vio ciá-ti-co/", "fonetica": "ner-vio ciá-ti-co", "etymology": "Del griego ischiadikos ('relativo a la cadera o isquion'). Raíces ventrales L4 a S3.", "category": "movimientos", "categoryLabel": "Neuroanatomía & Conducción", "categoryClass": "bg-amber-quiz/15 text-amber-quiz", "region": "cadera", "regionLabel": "Pelvis, Glúteo & Miembro Inferior", "level": "Intermedio", "readingTime": "3 min", "technicalDef": "El nervio periférico más voluminoso y largo del cuerpo humano, formado por las divisiones anteriores y posteriores de los ramos primarios anteriores de L4 a S3. Emerge de la pelvis a través del foramen ciático mayor por debajo del músculo piriforme y desciende por el compartimento posterior del muslo.", "defTecnica": "El nervio periférico más voluminoso y largo del cuerpo humano, formado por las divisiones anteriores y posteriores de los ramos primarios anteriores de L4 a S3. Emerge de la pelvis a través del foramen ciático mayor por debajo del músculo piriforme y desciende por el compartimento posterior del muslo.", "simpleExplanation": "El gran cable eléctrico de tu pierna: lleva la corriente desde tu espalda baja hasta los dedos del pie, controlando la fuerza y sensibilidad de toda la extremidad.", "explicacionSencilla": "El gran cable eléctrico de tu pierna: lleva la corriente desde tu espalda baja hasta los dedos del pie, controlando la fuerza y sensibilidad de toda la extremidad.", "everydayTitle": "La billetera gorda en el bolsillo trasero", "everydayExample": "Sentarte durante un viaje de 4 horas sobre una billetera gruesa en el bolsillo trasero del pantalón, comprimiendo el nervio hasta sentir un 'corrientazo' o adormecimiento que baja por el muslo.", "analogia": "Sentarte durante un viaje de 4 horas sobre una billetera gruesa en el bolsillo trasero del pantalón, comprimiendo el nervio hasta sentir un 'corrientazo' o adormecimiento que baja por el muslo.", "clinicalTitle": "Falsa ciática vs. Hernia discal lumbar", "clinicalRelevance": "El síndrome del piriforme o 'falsa ciática' ocurre cuando este músculo glúteo sufre espasmo y comprime al nervio sin que haya daño en las vértebras. Se diferencia mediante la prueba de Lasègue y la maniobra de FAIR.", "clinicalCase": "Taxista con dolor sordo en nalga que irradia hacia la corva tras horas al volante: prueba de FAIR positiva (flexión, aducción y rotación interna de cadera reproduce el dolor).", "keyDetails": [{"label": "Raíces nerviosas", "value": "Plexo Sacro: L4, L5, S1, S2, S3"}, {"label": "2 ramas terminales", "value": "Nervio Tibial y Nervio Peroneo Común (Fibular)"}, {"label": "Músculo 'trampa'", "value": "Músculo Piriforme (Piramidal de la pelvis)"}, {"label": "Prueba neurodinámica", "value": "Test de Lasègue / Slump Test (tensión neural)"}], "svgType": "nervio_ciatico", "isFeatured": false}, {"id": "tunel-carpiano", "name": "Túnel Carpiano & Nervio Mediano", "termino": "Túnel Carpiano & Nervio Mediano", "pronunciation": "/tú-nel car-pia-no/", "fonetica": "tú-nel car-pia-no", "etymology": "Del griego karpos ('muñeca'). Conducto delimitado por el retináculo flexor.", "category": "articulaciones", "categoryLabel": "Complejo Articular de Mano", "categoryClass": "bg-cat-joints/15 text-cat-joints", "region": "mano", "regionLabel": "Muñeca & Mano", "level": "Básico - Intermedio", "readingTime": "3 min", "technicalDef": "Canal osteofibroso inextensible en la cara palmar de la muñeca. Su piso y paredes laterales están conformados por los huesos del carpo y su techo por el retináculo flexor. Aloja 9 tendones flexores de los dedos y al nervio mediano.", "defTecnica": "Canal osteofibroso inextensible en la cara palmar de la muñeca. Su piso y paredes laterales están conformados por los huesos del carpo y su techo por el retináculo flexor. Aloja 9 tendones flexores de los dedos y al nervio mediano.", "simpleExplanation": "Un túnel angosto por donde viajan juntos el cable sensor de tus dedos (nervio mediano) y las 9 cuerdas que cierran tu puño; si los tendones se inflaman, aplastan al nervio.", "explicacionSencilla": "Un túnel angosto por donde viajan juntos el cable sensor de tus dedos (nervio mediano) y las 9 cuerdas que cierran tu puño; si los tendones se inflaman, aplastan al nervio.", "everydayTitle": "Escribir en el teclado o sostener el celular en la cama", "everydayExample": "Despertarte en la madrugada sacudiendo la mano porque sientes los dedos pulgar, índice y medio 'dormidos' o con agujas tras pasar todo el día tecleando en la laptop.", "analogia": "Despertarte en la madrugada sacudiendo la mano porque sientes los dedos pulgar, índice y medio 'dormidos' o con agujas tras pasar todo el día tecleando en la laptop.", "clinicalTitle": "La neuropatía por atrapamiento más común del cuerpo", "clinicalRelevance": "La presión intracanal aumenta con la flexión y extensión extrema de muñeca. Si no se trata, la compresión crónica atrofia la eminencia tenar, debilitando la pinza pulgar-índice.", "clinicalCase": "Costurera con parestesias nocturnas en los tres primeros dedos: signo de Phalen positivo (flexión forzada mantenida durante 60 segundos reproduce adormecimiento).", "keyDetails": [{"label": "Contenido del túnel", "value": "9 tendones flexores + 1 nervio (Nervio Mediano)"}, {"label": "Techo anatómico", "value": "Retináculo Flexor (Ligamento Anular del Carpo)"}, {"label": "Maniobras clínicas", "value": "Test de Phalen, Signo de Tinel (percusión sobre el carpo)"}, {"label": "Territorio sensitivo", "value": "Cara palmar de pulgar, índice, medio y mitad del anular"}], "svgType": "tunel_carpiano", "isFeatured": false}, {"id": "gluteo-medio", "name": "Glúteo Medio & Marcha de Trendelenburg", "termino": "Glúteo Medio & Marcha de Trendelenburg", "pronunciation": "/glú-teo me-dio/", "fonetica": "glú-teo me-dio", "etymology": "Del griego gloutos ('nalga'). Músculo abductor primario de la cadera.", "category": "musculos", "categoryLabel": "Músculos Estabilizadores", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "cadera", "regionLabel": "Pelvis & Cadera", "level": "Intermedio", "readingTime": "3 min", "technicalDef": "Músculo multipenniforme que se origina en la fosa ilíaca externa (entre las líneas glúteas anterior y posterior) y se inserta en la faceta posterosuperior del trocánter mayor. Es el principal abductor de cadera y el estabilizador frontal más importante de la pelvis.", "defTecnica": "Músculo multipenniforme que se origina en la fosa ilíaca externa (entre las líneas glúteas anterior y posterior) y se inserta en la faceta posterosuperior del trocánter mayor. Es el principal abductor de cadera y el estabilizador frontal más importante de la pelvis.", "simpleExplanation": "El tensor estabilizador de tu cadera. Cada vez que das un paso y levantas un pie del suelo, este músculo del lado apoyado se contrae para que tu pelvis no se caiga de lado.", "explicacionSencilla": "El tensor estabilizador de tu cadera. Cada vez que das un paso y levantas un pie del suelo, este músculo del lado apoyado se contrae para que tu pelvis no se caiga de lado.", "everydayTitle": "Mantenerte en un solo pie para ponerte el zapato", "everydayExample": "Pararte sobre la pierna derecha para ponerte el zapato izquierdo sin caerte de lado ni tener que apoyarte en la pared: tu glúteo medio derecho está trabajando a tope.", "analogia": "Pararte sobre la pierna derecha para ponerte el zapato izquierdo sin caerte de lado ni tener que apoyarte en la pared: tu glúteo medio derecho está trabajando a tope.", "clinicalTitle": "Signo de Trendelenburg: la marcha de pato", "clinicalRelevance": "Cuando el glúteo medio está débil o inhibido, al apoyar esa pierna la cadera opuesta 'se desploma'. Para compensarlo, el paciente inclina todo el tronco sobre el lado débil.", "clinicalCase": "Paciente post-artroplastia de cadera que cojea inclinando el tronco hacia el lado operado: debilidad glútea grado 3/5 que requiere fortalecimiento en decúbito lateral y ejercicios unipodales.", "keyDetails": [{"label": "Inserción distal", "value": "Trocánter Mayor del Fémur"}, {"label": "Inervación", "value": "Nervio Glúteo Superior (L4 - S1)"}, {"label": "Función clave", "value": "Evitar la caída de la hemipelvis contralateral durante el apoyo monopodal"}, {"label": "Prueba clínica", "value": "Signo de Trendelenburg (apoyo monopodal durante 30 s)"}], "svgType": "gluteo_medio", "isFeatured": false}, {"id": "diafragma", "name": "Diafragma & Mecánica Ventilatoria", "termino": "Diafragma & Mecánica Ventilatoria", "pronunciation": "/dia-frag-ma/", "fonetica": "dia-frag-ma", "etymology": "Del griego diaphragma ('partición, separación entre dos cavidades').", "category": "musculos", "categoryLabel": "Músculos Respiratorios", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "columna", "regionLabel": "Tórax, Abdomen & Raquis", "level": "Intermedio", "readingTime": "3 min", "technicalDef": "Músculo músculotendinoso en forma de cúpula que separa la cavidad torácica de la abdominal. Inervado por el nervio frénico (C3-C5). Su centro frénico o tendinoso desciende en la inspiración, incrementando los diámetros torácicos y generando presión negativa intrapleural.", "defTecnica": "Músculo músculotendinoso en forma de cúpula que separa la cavidad torácica de la abdominal. Inervado por el nervio frénico (C3-C5). Su centro frénico o tendinoso desciende en la inspiración, incrementando los diámetros torácicos y generando presión negativa intrapleural.", "simpleExplanation": "El pistón maestro de tu respiración: un paracaídas muscular que al contraerse baja hacia tu estómago, abriendo espacio para que el aire entre solo a tus pulmones.", "explicacionSencilla": "El pistón maestro de tu respiración: un paracaídas muscular que al contraerse baja hacia tu estómago, abriendo espacio para que el aire entre solo a tus pulmones.", "everydayTitle": "El fuelle que infla tu cuerpo", "everydayExample": "Tomar aire hondo tras correr para calmarte: sientes cómo tu barriga se abomba suavemente hacia afuera mientras el diafragma baja y empuja los órganos del vientre.", "analogia": "Tomar aire hondo tras correr para calmarte: sientes cómo tu barriga se abomba suavemente hacia afuera mientras el diafragma baja y empuja los órganos del vientre.", "clinicalTitle": "Conexión directa con el dolor de cuello y lumbar", "clinicalRelevance": "Sus pilares musculares se anclan en las vértebras lumbares L1-L3. Si una persona respira solo con el pecho alto por estrés, sobrecarga trapecios y escalenos, bloqueando la movilidad toracolumbar.", "clinicalCase": "Oficinista con dolor cervical crónico y respiración apical superficial: reeducación diafragmática en decúbito supino con saquito de peso en el epigastrio para descontracturar los escalenos.", "keyDetails": [{"label": "Inervación vital", "value": "Nervio Frénico (C3 - C5: 'C3, 4, 5 mantiene el diafragma vivo')"}, {"label": "3 orificios o hiatos", "value": "Vena Cava Inferior (T8), Esófago (T10), Aorta (T12)"}, {"label": "Inserción vertebral", "value": "Pilares diafragmáticos en cuerpos vertebrales L1 a L3"}, {"label": "Impacto postural", "value": "Sinergia con el suelo pélvico y transverso para regular la presión intraabdominal"}], "svgType": "diafragma", "isFeatured": false}, {"id": "core-transverso", "name": "Transverso del Abdomen (El Corsé Natural)", "termino": "Transverso del Abdomen (El Corsé Natural)", "pronunciation": "/trans-ver-so del ab-do-men/", "fonetica": "trans-ver-so del ab-do-men", "etymology": "Del latín transversus ('puesto a través'). Capa más profunda de la faja abdominal.", "category": "musculos", "categoryLabel": "Estabilizadores del Core", "categoryClass": "bg-cat-muscles/15 text-cat-muscles", "region": "columna", "regionLabel": "Columna Lumbar & Faja Abdominal", "level": "Básico - Intermedio", "readingTime": "3 min", "technicalDef": "El músculo más profundo de la pared abdominal anterolateral. Sus fibras se disponen horizontalmente desde la cresta ilíaca, la fascia toracolumbar y los cartílagos costales hasta la línea alba. Su contracción aumenta la presión intraabdominal y coapta las vértebras lumbares.", "defTecnica": "El músculo más profundo de la pared abdominal anterolateral. Sus fibras se disponen horizontalmente desde la cresta ilíaca, la fascia toracolumbar y los cartílagos costales hasta la línea alba. Su contracción aumenta la presión intraabdominal y coapta las vértebras lumbares.", "simpleExplanation": "El corsé biomecánico que traes de fábrica. Se ciñe como una faja elástica alrededor de tu cintura para proteger tu columna lumbar un instante antes de que cargues cualquier peso.", "explicacionSencilla": "El corsé biomecánico que traes de fábrica. Se ciñe como una faja elástica alrededor de tu cintura para proteger tu columna lumbar un instante antes de que cargues cualquier peso.", "everydayTitle": "Meter la barriga para cerrar el pantalón", "everydayExample": "La acción instintiva de 'chupar' el ombligo hacia la columna para que suba la cremallera de un pantalón ajustado, o cuando te preparas para levantar una caja pesada del piso.", "analogia": "La acción instintiva de 'chupar' el ombligo hacia la columna para que suba la cremallera de un pantalón ajustado, o cuando te preparas para levantar una caja pesada del piso.", "clinicalTitle": "La clave olvidada en el dolor lumbar crónico", "clinicalRelevance": "En personas sanas, el transverso se activa milisegundos ANTES de mover cualquier extremidad (mecanismo feedforward). En personas con lumbago crónico, este reflejo se retrasa, dejando la columna desprotegida.", "clinicalCase": "Lumbago mecánico recurrente al cargar compras: reentrenamiento con maniobra de 'drawing-in' (hundir suavemente el ombligo manteniendo la respiración fluida) con biofeedback ecográfico.", "keyDetails": [{"label": "Disposición fibrilar", "value": "Fibras horizontales transversales (efecto cincha o corsé)"}, {"label": "Mecanismo protector", "value": "Activación anticipatoria preprogramada (Feedforward postural)"}, {"label": "Inserción posterior", "value": "Fascia Toracolumbar (tensa las vértebras lumbares)"}, {"label": "Técnica de aislamiento", "value": "Maniobra de hundimiento abdominal sin retroversión pélvica"}], "svgType": "core_transverso", "isFeatured": false}, {"id": "ligamento-lateral-tobillo", "name": "Ligamento Peroneoastragalino Anterior (LPAA)", "termino": "Ligamento Peroneoastragalino Anterior (LPAA)", "pronunciation": "/li-ga-men-to pe-ro-neo-as-tra-ga-li-no/", "fonetica": "li-ga-men-to pe-ro-neo-as-tra-ga-li-no", "etymology": "Conecta el peroné (fibula) con el astrágalo (talus) en su cara anterior.", "category": "huesos_tendones", "categoryLabel": "Ligamentos & Estabilidad", "categoryClass": "bg-cat-bones/15 text-cat-bones", "region": "tobillo", "regionLabel": "Tobillo & Tarso", "level": "Básico", "readingTime": "3 min", "technicalDef": "Banda ligamentosa cuadrilátera de 2 cm que se extiende oblicuamente desde el borde anterior del maléolo peroneo hasta el cuello del astrágalo. Es el componente más débil del complejo colateral lateral y el freno primario contra la inversión forzada en flexión plantar.", "defTecnica": "Banda ligamentosa cuadrilátera de 2 cm que se extiende oblicuamente desde el borde anterior del maléolo peroneo hasta el cuello del astrágalo. Es el componente más débil del complejo colateral lateral y el freno primario contra la inversión forzada en flexión plantar.", "simpleExplanation": "El primer cable protector de la parte de afuera del tobillo: es el que se estira y se desgarra cuando pisas mal y el pie se te 'dobla hacia adentro'.", "explicacionSencilla": "El primer cable protector de la parte de afuera del tobillo: es el que se estira y se desgarra cuando pisas mal y el pie se te 'dobla hacia adentro'.", "everydayTitle": "Bajar del andén y torcerse el pie", "everydayExample": "Ir distraído mirando el teléfono, pisar en falso el borde de la banqueta y sentir cómo el tobillo se dobla hacia adentro con un crujido agudo e hinchazón instantánea 'en huevo de paloma'.", "analogia": "Ir distraído mirando el teléfono, pisar en falso el borde de la banqueta y sentir cómo el tobillo se dobla hacia adentro con un crujido agudo e hinchazón instantánea 'en huevo de paloma'.", "clinicalTitle": "El ligamento que más veces se rompe en el deporte", "clinicalRelevance": "Involucrado en más del 85% de los esguinces de tobillo. Si no cicatriza con buen entrenamiento propioceptivo, genera inestabilidad mecánica crónica con microtraumatismos repetitivos.", "clinicalCase": "Esguince de tobillo grado II en básquetbol: cajón anterior de tobillo positivo con bostezo ligamentoso palpable sobre el surco anterolateral del maléolo externo.", "keyDetails": [{"label": "Mecanismo lesional típico", "value": "Inversión forzada + Flexión plantar súbita"}, {"label": "Prueba clínica diagnóstica", "value": "Test del Cajón Anterior de Tobillo (traslación astragalina)"}, {"label": "Signo visible", "value": "Edema en 'huevo de paloma' sobre el maléolo peroneo"}, {"label": "Tiempo de cicatrización", "value": "Grado I: 1-2 semanas / Grado II: 4-6 semanas con carga precoz protegida"}], "svgType": "lpaa", "isFeatured": false}, {"id": "cintilla-iliotibial", "name": "Cintilla Iliotibial (Síndrome del Limpiaparabrisas)", "termino": "Cintilla Iliotibial (Síndrome del Limpiaparabrisas)", "pronunciation": "/cin-ti-lla i-lio-ti-bial/", "fonetica": "cin-ti-lla i-lio-ti-bial", "etymology": "Fascia lata reforzada desde la cresta ilíaca hasta la tibia anterior.", "category": "huesos_tendones", "categoryLabel": "Fascias & Tendones", "categoryClass": "bg-cat-bones/15 text-cat-bones", "region": "rodilla", "regionLabel": "Muslo Lateral & Rodilla", "level": "Intermedio", "readingTime": "3 min", "technicalDef": "Tracto aponeurótico longitudinal denso y fibroso que engloba las inserciones distales del tensor de la fascia lata y el glúteo mayor. Desciende a lo largo de la cara lateral del muslo hasta fijarse en el tubérculo de Gerdy en la cara anterolateral de la tibia proximal.", "defTecnica": "Tracto aponeurótico longitudinal denso y fibroso que engloba las inserciones distales del tensor de la fascia lata y el glúteo mayor. Desciende a lo largo de la cara lateral del muslo hasta fijarse en el tubérculo de Gerdy en la cara anterolateral de la tibia proximal.", "simpleExplanation": "Una tira fibrosa muy tensa como una correa de cuero en la cara de afuera de tu muslo, que roza contra el hueso de la rodilla cada vez que la doblas repetidamente.", "explicacionSencilla": "Una tira fibrosa muy tensa como una correa de cuero en la cara de afuera de tu muslo, que roza contra el hueso de la rodilla cada vez que la doblas repetidamente.", "everydayTitle": "El dolor punzante en bajada de los corredores", "everydayExample": "Comenzar a trotar sin molestias, pero al llegar al kilómetro 6 sentir un ardor insoportable en la cara externa de la rodilla como si te clavaran un clavo caliente que empeora al bajar pendientes.", "analogia": "Comenzar a trotar sin molestias, pero al llegar al kilómetro 6 sentir un ardor insoportable en la cara externa de la rodilla como si te clavaran un clavo caliente que empeora al bajar pendientes.", "clinicalTitle": "La 'Rodilla del Corredor' (Fricción a 30° de flexión)", "clinicalRelevance": "A los 30° de flexión de rodilla, la cintilla pasa justo por encima del cóndilo femoral externo. Si la cintilla está rígida o el glúteo medio no estabiliza la pelvis, el roce constante inflama la bursa subyacente.", "clinicalCase": "Maratonista con dolor agudo lateral en rodilla derecha: Test de Noble y Test de Renne positivos con crepitación palpable en cóndilo femoral externo a 30° de flexión.", "keyDetails": [{"label": "Inserción ósea distal", "value": "Tubérculo de Gerdy (Tibia anterolateral)"}, {"label": "Ángulo de máximo roce", "value": "30° de flexión de rodilla (zona de conflicto biomecánico)"}, {"label": "Prueba clínica", "value": "Test de compresión de Noble y Maniobra de Ober (retracción de fascia lata)"}, {"label": "Causa raíz habitual", "value": "Debilidad del glúteo medio que aumenta el valgo dinámico de rodilla"}], "svgType": "cintilla_iliotibial", "isFeatured": false}, {"id": "pata-de-ganso", "name": "Pata de Ganso (Pes Anserinus)", "termino": "Pata de Ganso (Pes Anserinus)", "pronunciation": "/pa-ta de gan-so / pes an-se-ri-nus/", "fonetica": "pa-ta de gan-so / pes an-se-ri-nus", "etymology": "Del latín pes anserinus ('pie o pata de ganso'), por la similitud con las patas palmeadas de las aves.", "category": "huesos_tendones", "categoryLabel": "Inserciones Tendinosas", "categoryClass": "bg-cat-bones/15 text-cat-bones", "region": "rodilla", "regionLabel": "Cara Medial de la Rodilla", "level": "Intermedio", "readingTime": "3 min", "technicalDef": "Confluencia anatómica y tendinosa formada por la inserción distal común de tres tendones en la cara anteromedial de la tibia proximal: Sartorio (nervio femoral), Grácil (nervio obturador) y Semitendinoso (nervio ciático). Debajo de ellos se ubica la bursa anserina.", "defTecnica": "Confluencia anatómica y tendinosa formada por la inserción distal común de tres tendones en la cara anteromedial de la tibia proximal: Sartorio (nervio femoral), Grácil (nervio obturador) y Semitendinoso (nervio ciático). Debajo de ellos se ubica la bursa anserina.", "simpleExplanation": "Tres tendones de diferentes músculos que se unen en un mismo punto de la espinilla interna, formando una huella idéntica a la pata de un pato o ganso.", "explicacionSencilla": "Tres tendones de diferentes músculos que se unen en un mismo punto de la espinilla interna, formando una huella idéntica a la pata de un pato o ganso.", "everydayTitle": "Cruzar la pierna o levantarte de la cama", "everydayExample": "Sentir un dolorcito quemante en la cara interior de la rodilla (un par de centímetros abajo de la articulación) al frotar una rodilla contra la otra al dormir de lado.", "analogia": "Sentir un dolorcito quemante en la cara interior de la rodilla (un par de centímetros abajo de la articulación) al frotar una rodilla contra la otra al dormir de lado.", "clinicalTitle": "La regla mnemotécnica del 'Sargento'", "clinicalRelevance": "Cada uno de los tres músculos proviene de una región distinta y está inervado por un nervio diferente. Su inflamación (bursitis anserina) es muy frecuente en mujeres con sobrepeso, artrosis medial o valgo de rodilla.", "clinicalCase": "Ciclista aficionado con sillín demasiado bajo: dolor a la presión digital a 4 cm por debajo de la interlínea articular medial de la tibia sin derrame intrarticular.", "keyDetails": [{"label": "Músculos (S-A-R-G-E-N-T-O)", "value": "Sartorio, Grácil (Recto Interno) y Semitendinoso"}, {"label": "3 nervios distintos", "value": "Femoral (Sartorio), Obturador (Grácil), Ciático (Semitendinoso)"}, {"label": "Ubicación", "value": "Cara anteromedial de la extremidad proximal de la tibia"}, {"label": "Función común", "value": "Flexión de rodilla y rotación interna de la tibia"}], "svgType": "pata_ganso", "isFeatured": false}, {"id": "bursa-subacromial", "name": "Bursa Subacromial & Pinzamiento (Impingement)", "termino": "Bursa Subacromial & Pinzamiento (Impingement)", "pronunciation": "/bur-sa su-bac-ro-mial/", "fonetica": "bur-sa su-bac-ro-mial", "etymology": "Del latín bursa ('bolsa'). Cojinete seroso situado bajo el acromion escapular.", "category": "articulaciones", "categoryLabel": "Complejo Glenohumeral", "categoryClass": "bg-cat-joints/15 text-cat-joints", "region": "hombro", "regionLabel": "Cintura Escapular", "level": "Básico - Intermedio", "readingTime": "3 min", "technicalDef": "Bolsa serosa de deslizamiento ubicada entre el arco acromiocoracoideo (por arriba) y el tendón del supraespinoso con la tuberosidad mayor del húmero (por abajo). Su inflamación reduce el espacio subacromial causando el síndrome de pinzamiento de Neer.", "defTecnica": "Bolsa serosa de deslizamiento ubicada entre el arco acromiocoracoideo (por arriba) y el tendón del supraespinoso con la tuberosidad mayor del húmero (por abajo). Su inflamación reduce el espacio subacromial causando el síndrome de pinzamiento de Neer.", "simpleExplanation": "Un cojín de agua lubricante que evita que el hueso del techo de tu hombro machaque y deshilache los tendones cada vez que levantas el brazo.", "explicacionSencilla": "Un cojín de agua lubricante que evita que el hueso del techo de tu hombro machaque y deshilache los tendones cada vez que levantas el brazo.", "everydayTitle": "Colgar ropa en el tendedero alto", "everydayExample": "Levantar el brazo hacia arriba para alcanzar una lámpara o meter el brazo en la manga de un abrigo y sentir un pellizco punzante en la parte alta del hombro.", "analogia": "Levantar el brazo hacia arriba para alcanzar una lámpara o meter el brazo en la manga de un abrigo y sentir un pellizco punzante en la parte alta del hombro.", "clinicalTitle": "El 'Arco Doloroso' entre 60° y 120°", "clinicalRelevance": "Al levantar el brazo lateralmente, el húmero rota y comprime la bursa contra el acromion. El dolor aparece típicamente entre los 60° y 120° de abducción, desapareciendo por encima de los 120°.", "clinicalCase": "Pintor de brocha gorda con dolor al trabajar techos: signo de Hawkins-Kennedy positivo (rotación interna pasiva con hombro a 90° de flexión atrapa la bursa y reproduce dolor exquisito).", "keyDetails": [{"label": "Espacio crítico subacromial", "value": "Altura normal entre 9 y 10 mm en radiografía"}, {"label": "El 'Arco Doloroso'", "value": "Dolor marcado entre 60° y 120° de abducción"}, {"label": "Pruebas ortopédicas", "value": "Test de Neer, Maniobra de Hawkins-Kennedy, Test de Yocum"}, {"label": "Estructura más atrapada", "value": "Tendón del supraespinoso junto a la bursa subacromial"}], "svgType": "bursa_subacromial", "isFeatured": false}, {"id": "bomba-muscular-retorno", "name": "Bomba Muscular de la Pantorrilla (Retorno Venoso)", "termino": "Bomba Muscular de la Pantorrilla (Retorno Venoso)", "pronunciation": "/bom-ba mus-cu-lar/", "fonetica": "bom-ba mus-cu-lar", "etymology": "Mecanismo hemodinámico de eyección venosa descrito por John Hunter.", "category": "movimientos", "categoryLabel": "Fisiología Biomecánica", "categoryClass": "bg-amber-quiz/15 text-amber-quiz", "region": "tobillo", "regionLabel": "Pantorrilla, Pierna & Circulación", "level": "Básico", "readingTime": "3 min", "technicalDef": "Mecanismo activo biomecánico y hemodinámico donde la contracción periódica de los músculos sóleo y gastrocnemios dentro de sus compartimentos aponeuróticos comprime las venas profundas de la pierna, propulsando la columna de sangre hacia el corazón asistida por válvulas venosas.", "defTecnica": "Mecanismo activo biomecánico y hemodinámico donde la contracción periódica de los músculos sóleo y gastrocnemios dentro de sus compartimentos aponeuróticos comprime las venas profundas de la pierna, propulsando la columna de sangre hacia el corazón asistida por válvulas venosas.", "simpleExplanation": "El 'segundo corazón' de tu cuerpo: está en tus pantorrillas y bombea la sangre de regreso hacia arriba cada vez que das un paso o te paras de puntas.", "explicacionSencilla": "El 'segundo corazón' de tu cuerpo: está en tus pantorrillas y bombea la sangre de regreso hacia arriba cada vez que das un paso o te paras de puntas.", "everydayTitle": "Piernas pesadas tras un vuelo de 6 horas", "everydayExample": "Estar 8 horas de pie quieto atendiendo un mostrador o sentado en un viaje largo en autobús y notar que los tobillos se hinchan y los zapatos aprietan porque la sangre se queda estancada abajo.", "analogia": "Estar 8 horas de pie quieto atendiendo un mostrador o sentado en un viaje largo en autobús y notar que los tobillos se hinchan y los zapatos aprietan porque la sangre se queda estancada abajo.", "clinicalTitle": "Prevención de trombosis venosa profunda (TVP)", "clinicalRelevance": "En pacientes encamados o post-quirúrgicos de cadera/rodilla, el desuso de la bomba muscular multiplica el riesgo de trombosis venosa profunda. Los ejercicios activos de bombeo de tobillo son obligatorios.", "clinicalCase": "Paciente en reposo postoperatorio de reemplazo articular: prescripción kinésica de ejercicios de bombeo tibiotarsiano (flexión dorsal y plantar rítmica 20 repeticiones cada hora).", "keyDetails": [{"label": "Músculos motores", "value": "Sóleo (grandes senos venosos profundos) y Gemelos"}, {"label": "Componente valvular", "value": "Válvulas venosas semilunares que impiden el reflujo hacia el pie"}, {"label": "Presión eyectada", "value": "La contracción puede generar presiones superiores a 150 mmHg en las venas"}, {"label": "Terapia kinésica", "value": "Marcha activa, elevación de talones, presoterapia y medias compresivas"}], "svgType": "bomba_muscular", "isFeatured": false}];

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

  // --- NAVEGACIÓN Y ENRUTAMIENTO (HASH ROUTER) ---
  function initRouter() {
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
  }

  function handleHashChange() {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    const parts = rawHash.split('/');
    const route = parts[0] || 'explorador';

    if (route === 'terminos' || route === 'termino') {
      state.route = 'termino';
      if (parts[1]) {
        state.selectedTermId = parts[1];
      }
    } else if (route === 'favoritos' || route === 'flashcards' || route === 'mis-favoritos-flashcards') {
      state.route = 'favoritos';
    } else if (route === 'quizzes' || route === 'evaluacion' || route === 'quizzes-de-autoevaluacion') {
      state.route = 'quizzes';
    } else {
      state.route = 'explorador';
    }

    renderCurrentRoute();
    updateNavActiveStates();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateTo(hash) {
    window.location.hash = hash;
  }

  function updateNavActiveStates() {
    const navLinks = document.querySelectorAll('[data-route-nav]');
    navLinks.forEach(link => {
      const targetRoute = link.getAttribute('data-route-nav');
      const isActive = targetRoute === state.route;
      if (isActive) {
        link.classList.remove('text-on-surface-variant', 'hover:bg-surface-container-high');
        link.classList.add('bg-primary-container', 'text-on-primary-container', 'font-semibold', 'shadow-sm');
      } else {
        link.classList.add('text-on-surface-variant', 'hover:bg-surface-container-high');
        link.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-semibold', 'shadow-sm');
      }
    });

    const mobileLinks = document.querySelectorAll('[data-route-mobile]');
    mobileLinks.forEach(link => {
      const targetRoute = link.getAttribute('data-route-mobile');
      const isActive = targetRoute === state.route;
      if (isActive) {
        link.classList.remove('text-slate-muted');
        link.classList.add('text-primary', 'font-bold');
      } else {
        link.classList.add('text-slate-muted');
        link.classList.remove('text-primary', 'font-bold');
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
    hideLoader();
    const mainContainer = document.getElementById('app-main-content');
    if (!mainContainer) return;

    try {
      if (state.route === 'termino') {
        mainContainer.innerHTML = renderTerminoView();
        bindTerminoEvents();
      } else if (state.route === 'favoritos') {
        mainContainer.innerHTML = renderFavoritosView();
        bindFavoritosEvents();
      } else if (state.route === 'quizzes') {
        mainContainer.innerHTML = renderQuizzesView();
        bindQuizzesEvents();
      } else {
        mainContainer.innerHTML = renderExploradorView();
        bindExploradorEvents();
      }
    } catch (err) {
      console.error('Error renderizando vista en FisioPedia:', err);
      try {
        mainContainer.innerHTML = renderExploradorView();
        bindExploradorEvents();
      } catch (e) {
        console.error('Fallback error:', e);
      }
    } finally {
      hideLoader();
    }

    updateFavoritesBadges();
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
                  Cuestionarios de Práctica (${FISIOPEDIA_QUIZZES.length} Preguntas)
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

  function bindExploradorEvents() {
    try {
      const searchInput = document.getElementById('search-input') || document.getElementById('main-search-input');
      const clearBtn = document.getElementById('clear-search-btn');
      const desktopSearch = document.getElementById('desktop-header-search');

      function handleSearchInput(e) {
        try {
          state.searchTerm = e.target.value;
          if (desktopSearch && desktopSearch.value !== state.searchTerm) {
            desktopSearch.value = state.searchTerm;
          }
          if (searchInput && searchInput.value !== state.searchTerm) {
            searchInput.value = state.searchTerm;
          }
          updateExploradorResultsOnly();
        } catch (err) {
          console.error('Error en búsqueda:', err);
        }
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
  function getActiveDeck() {
    try {
      const all = getTerms();
      let deck = all.filter(t => state.favorites.has(t.id));
      if (deck.length === 0) deck = all;
      if (state.flashcardCategory && state.flashcardCategory !== 'todas') {
        const filtered = deck.filter(t => t.category === state.flashcardCategory);
        if (filtered.length > 0) deck = filtered;
      }
      return (deck && deck.length > 0) ? deck : all;
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
              <span class="font-display text-display text-primary leading-none font-bold">${FISIOPEDIA_TERMS.length}</span>
              <span class="font-label-md text-label-md text-primary font-bold">términos</span>
            </div>
            <div class="w-36 h-2 bg-surface-container-high rounded-full overflow-hidden mt-3">
              <div class="bg-primary h-full rounded-full" style="width: ${Math.round((favCount / FISIOPEDIA_TERMS.length) * 100)}%"></div>
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
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-quiz animate-pulse"></span>
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Modo Activo de Repaso</span>
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
    } catch (err) {
      console.error('Error en bindFavoritosEvents:', err);
    }
  }

  // ==========================================
  // VISTA 4: CUESTIONARIOS DE AUTOEVALUACIÓN
  // ==========================================
  function renderQuizzesView() {
    const totalQuestions = FISIOPEDIA_QUIZZES.length;

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

    const quiz = FISIOPEDIA_QUIZZES[state.quizIndex % totalQuestions];
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
          <article class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden border border-slate-border/50">
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

  function bindQuizzesEvents() {}

  // --- MÉTODOS PÚBLICOS GLOBALES ---
  window.fisiopediaApp = {
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
      renderCurrentRoute();
    },
    submitQuizAnswer: () => {
      const optionId = state.quizUserAnswers[state.quizIndex];
      if (!optionId) return;
      state.quizSubmitted[state.quizIndex] = true;
      const quiz = FISIOPEDIA_QUIZZES[state.quizIndex % FISIOPEDIA_QUIZZES.length];
      const opt = quiz.options.find(o => o.id === optionId);
      if (opt && opt.isCorrect) {
        state.quizScore++;
        showToast('¡Respuesta correcta! +100 XP', 'verified');
      } else {
        showToast('Respuesta incorrecta. Revisa la justificación.', 'error');
      }
      renderCurrentRoute();
    },
    nextQuizQuestion: () => {
      if (state.quizIndex + 1 < FISIOPEDIA_QUIZZES.length) {
        state.quizIndex++;
        renderCurrentRoute();
      } else {
        // Cuestionario finalizado
        state.quizCompleted = true;
        if (typeof FisioStorage !== 'undefined') {
          FisioStorage.saveQuizStats({
            totalAttempted: FISIOPEDIA_QUIZZES.length,
            totalCorrect: state.quizScore,
            lastScore: Math.round((state.quizScore / FISIOPEDIA_QUIZZES.length) * 100),
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
    }
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
  }

  function onReady() {
    try {
      startApp();
      renderTerms(window.FISIOPEDIA_TERMS);
    } catch (err) {
      console.error('Error al iniciar FisioPedia:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

})();
