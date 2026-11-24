// ====== EDITA AQUÍ ======
// Cada lectura: id, book (obra), author, sub (subtítulo), text (párrafos separados por línea en blanco) y 5 preguntas.
// Pregunta: q, o = 4 opciones, a = índice de la clave (0=A, 1=B, 2=C, 3=D).
// Cada día se muestra la siguiente lectura de la lista, en orden y en ciclo.
const READINGS = [
 {
  "id": "LIB01-C01",
  "book": "El lobo estepario",
  "author": "Hermann Hesse",
  "sub": "La identidad como prisión conceptual",
  "text": "Harry Haller ha organizado su existencia alrededor de una oposición que juzga irreconciliable. Se considera, por un lado, un individuo sensible a la música y a las ideas; por otro, una criatura que desconfía de las convenciones sociales y anhela retirarse del trato humano. Esta división le permite explicar su malestar, pero también lo exime de examinar la variedad de impulsos que lo componen. Cuando un encuentro agradable contradice su imagen de solitario, lo interpreta como una excepción; cuando vuelve a sentirse aislado, considera que su teoría ha quedado demostrada.\n\nEl problema no reside solamente en la tensión entre cultura e instinto. Reside en la autoridad que Harry concede a su propio diagnóstico: al nombrarse de una única manera, transforma una interpretación provisional en un destino. La posibilidad de cambiar le resulta entonces sospechosa, casi una traición a su supuesta esencia. Sin embargo, sus contradicciones sugieren que la identidad puede ser menos una sustancia fija que un conjunto de relaciones, hábitos y decisiones todavía abiertas. Reconocer esa multiplicidad no elimina el sufrimiento, pero impide convertirlo en la única definición posible de sí mismo.",
  "qs": [
   {
    "q": "¿Cuál es la tesis central del texto sobre el conflicto de Harry?",
    "o": [
     "La sociedad determina por completo su carácter y sus decisiones.",
     "Su sufrimiento se agrava cuando convierte una interpretación de sí mismo en una identidad rígida.",
     "Sus inclinaciones culturales son falsas y únicamente el instinto es auténtico.",
     "La única solución consiste en renunciar a toda relación interpersonal."
    ],
    "a": 1
   },
   {
    "q": "¿Qué función cumple el ejemplo del encuentro agradable?",
    "o": [
     "Demostrar que Harry ha superado definitivamente su aislamiento.",
     "Probar que los vínculos sociales carecen de importancia en su vida.",
     "Exhibir cómo selecciona los hechos para conservar intacta su autoimagen.",
     "Sugerir que su malestar depende exclusivamente de factores económicos."
    ],
    "a": 2
   },
   {
    "q": "En este contexto, «diagnóstico» se utiliza principalmente para aludir a…",
    "o": [
     "una explicación personal que Harry trata como verdad definitiva.",
     "una evaluación médica confirmada por especialistas.",
     "una norma social impuesta por sus amistades.",
     "una narración sin relación con su conducta."
    ],
    "a": 0
   },
   {
    "q": "¿Qué presuposición cuestiona el último párrafo?",
    "o": [
     "Que la cultura y el instinto existen como ámbitos distinguibles.",
     "Que las decisiones puedan tener consecuencias emocionales.",
     "Que el sufrimiento pueda afectar la percepción individual.",
     "Que toda persona posea una esencia única e inmodificable."
    ],
    "a": 3
   },
   {
    "q": "¿Cuál de las siguientes decisiones sería más coherente con la conclusión del texto?",
    "o": [
     "Interpretar cada recaída como prueba de que nada puede variar.",
     "Explorar experiencias nuevas sin exigir que encajen en una identidad predeterminada.",
     "Eliminar sus intereses intelectuales para volverse sociable.",
     "Evitar las relaciones que contradigan su imagen de sí mismo."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "LIB01-C02",
  "book": "El lobo estepario",
  "author": "Hermann Hesse",
  "sub": "Aprender a vivir sin despreciar lo cotidiano",
  "text": "La aparición de Herminia altera el modo en que Harry distribuye prestigio entre las experiencias. Durante años ha considerado que la reflexión filosófica y el arte elevado justificaban su existencia, mientras que el baile, las conversaciones ligeras y el placer compartido pertenecían a una esfera inferior. Esa jerarquía le permitía sentirse distinto de los demás, aunque también estrechaba sus posibilidades de encuentro. Herminia no discute con él mediante una teoría alternativa: lo enfrenta a situaciones en las que debe escuchar, equivocarse y aceptar la presencia de otros sin convertirla de inmediato en objeto de juicio.\n\nLa resistencia de Harry revela una contradicción. Critica a la sociedad por imponer reglas, pero él mismo ha levantado un sistema de prohibiciones que gobierna su conducta. Su aparente independencia depende, en realidad, de evitar cualquier experiencia que pueda desestabilizar su superioridad intelectual. Aprender un paso de baile no resuelve por sí solo su crisis; funciona como una práctica humilde de descentramiento. La transformación sugerida por la experiencia no consiste en reemplazar el pensamiento por la diversión, sino en admitir que comprender la vida exige participar en dimensiones que el pensamiento, aislado, no puede agotar.",
  "qs": [
   {
    "q": "¿Qué oposición organiza principalmente la microlectura?",
    "o": [
     "Entre la obligación laboral y el tiempo libre.",
     "Entre la vida urbana y el ambiente rural.",
     "Entre la reflexión prestigiosa para Harry y las experiencias cotidianas que desprecia.",
     "Entre la juventud de Herminia y la vejez de Harry."
    ],
    "a": 2
   },
   {
    "q": "¿Por qué se afirma que la independencia de Harry es «aparente»?",
    "o": [
     "Porque sus elecciones están limitadas por prohibiciones que él mismo se impone.",
     "Porque Herminia decide por él en todas las situaciones.",
     "Porque la sociedad le prohíbe expresarse intelectualmente.",
     "Porque depende económicamente de las personas que critica."
    ],
    "a": 0
   },
   {
    "q": "¿Qué papel adquiere el aprendizaje del baile en el argumento?",
    "o": [
     "Es una solución instantánea y definitiva al conflicto interior.",
     "Constituye una prueba de que la filosofía carece de valor.",
     "Representa una manera de ganarse la aceptación de una élite.",
     "Opera como experiencia concreta que relativiza su autosuficiencia."
    ],
    "a": 3
   },
   {
    "q": "¿Cuál es la inferencia más sólida sobre el método de Herminia?",
    "o": [
     "Busca humillar intelectualmente a Harry ante desconocidos.",
     "Favorece el aprendizaje mediante experiencias antes que mediante una refutación puramente abstracta.",
     "Pretende que Harry renuncie permanentemente a leer y escribir.",
     "Considera que todas las costumbres sociales deben obedecerse."
    ],
    "a": 1
   },
   {
    "q": "¿Qué postura evitaría la falsa dicotomía cuestionada al final?",
    "o": [
     "Sostener que solo el arte elevado produce conocimiento.",
     "Aceptar que el placer sustituye cualquier reflexión crítica.",
     "Reconocer que la reflexión y la participación pueden complementarse.",
     "Afirmar que toda experiencia cotidiana conduce necesariamente a la sabiduría."
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "LIB01-C03",
  "book": "El lobo estepario",
  "author": "Hermann Hesse",
  "sub": "El teatro de las múltiples posibilidades",
  "text": "La imagen del teatro mágico puede leerse como una impugnación de la idea de que existe un yo transparente, estable y totalmente gobernable. En ese espacio, Harry encuentra versiones contradictorias de sus deseos: algunas lo atraen; otras le producen vergüenza o temor. Lo decisivo no es determinar cuál es la versión verdadera, sino comprender que ninguna escena aislada puede representar la totalidad de una persona. El teatro vuelve visible aquello que su discurso habitual ordenaba y ocultaba bajo categorías demasiado simples.\n\nSin embargo, el acceso a nuevas posibilidades no equivale automáticamente a la madurez. Harry continúa interpretando ciertas experiencias con una solemnidad que transforma el error en condena y la contradicción en fracaso. La risa aparece como una capacidad aún difícil: no para negar la responsabilidad, sino para impedir que la propia imagen adquiera la rigidez de un ídolo. En este sentido, el humor no es una evasión trivial de los problemas; introduce distancia frente al orgullo y permite revisar los juicios. La libertad que el texto sugiere es menos la ausencia de conflicto que la disposición a no quedar definitivamente encerrado en la primera versión de uno mismo.",
  "qs": [
   {
    "q": "¿Cuál es la función simbólica principal del teatro mágico?",
    "o": [
     "Confirmar que una personalidad auténtica carece de contradicciones.",
     "Mostrar la pluralidad de deseos y perspectivas que desborda las etiquetas de Harry.",
     "Demostrar que los sueños deben entenderse siempre de forma literal.",
     "Sustituir la experiencia moral por un espectáculo sin consecuencias."
    ],
    "a": 1
   },
   {
    "q": "¿Por qué el texto distingue «acceso a posibilidades» y «madurez»?",
    "o": [
     "Porque conocer alternativas no garantiza saber interpretarlas o asumir sus consecuencias.",
     "Porque la madurez depende exclusivamente de la edad biológica.",
     "Porque toda posibilidad nueva carece de valor ético.",
     "Porque Harry nunca llega a experimentar un cambio de perspectiva."
    ],
    "a": 0
   },
   {
    "q": "¿Qué sentido adquiere la risa en el segundo párrafo?",
    "o": [
     "Una burla hacia quienes atraviesan crisis personales.",
     "Una forma de ignorar las consecuencias de los actos.",
     "Un mecanismo para recuperar prestigio frente a los demás.",
     "Una actitud autocrítica que reduce la solemnidad y la rigidez del yo."
    ],
    "a": 3
   },
   {
    "q": "¿Qué afirmación es incompatible con la lectura propuesta?",
    "o": [
     "Un episodio aislado no agota la complejidad de una persona.",
     "La autocrítica puede coexistir con el sentido de responsabilidad.",
     "Reconocer contradicciones exige abandonar toda evaluación moral.",
     "El orgullo puede impedir interpretar experiencias nuevas."
    ],
    "a": 2
   },
   {
    "q": "¿Qué concepción de libertad se desprende del cierre?",
    "o": [
     "Eliminar definitivamente cualquier sentimiento contradictorio.",
     "Mantener abierta la revisión de la propia identidad pese al conflicto.",
     "Cumplir espontáneamente todos los deseos sin examinarlos.",
     "Encontrar una etiqueta única que explique cada decisión."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "LIB02-C01",
  "book": "Conversación en La Catedral",
  "author": "Mario Vargas Llosa",
  "sub": "Una conversación y muchas versiones del pasado",
  "text": "Santiago Zavala se encuentra con Ambrosio y la charla en el bar La Catedral comienza como un intercambio entre personas que compartieron, desde lugares distintos, una historia familiar. Pronto, sin embargo, los recuerdos personales abren preguntas que exceden la intimidad: quién sabía qué, por qué ciertas decisiones parecían inevitables y de qué manera las relaciones de dependencia interferían en la posibilidad de decir la verdad. La conversación no funciona como un interrogatorio que avance limpiamente hacia una confesión. Cada dato ilumina un fragmento y, al mismo tiempo, obliga a reconsiderar lo que se creía seguro.\n\nLa distancia social entre ambos interlocutores también afecta lo que cada uno puede recordar sin riesgo. Santiago tiene acceso al lenguaje de la crítica y al privilegio de formular preguntas; Ambrosio carga con una experiencia de subordinación que vuelve problemática cualquier respuesta. Así, la verdad de una época no aparece depositada en una sola voz, sino distribuida entre testimonios incompletos, silencios y justificaciones. La estructura fragmentaria del relato expresa una dificultad histórica: reconstruir el pasado cuando los vínculos de poder han condicionado tanto los acontecimientos como las maneras de narrarlos.",
  "qs": [
   {
    "q": "¿Qué función cumple el diálogo en el bar dentro de esta interpretación?",
    "o": [
     "Organiza una investigación del pasado que incorpora voces y relaciones de poder desiguales.",
     "Permite obtener una confesión definitiva sin contradicciones.",
     "Desplaza por completo la dimensión política de la historia.",
     "Presenta a Santiago y Ambrosio como observadores socialmente equivalentes."
    ],
    "a": 0
   },
   {
    "q": "¿Por qué las respuestas de Ambrosio pueden resultar problemáticas?",
    "o": [
     "Porque ha olvidado por completo los acontecimientos.",
     "Porque la relación de subordinación influye en lo que puede expresar.",
     "Porque desconoce cualquier aspecto de la vida de Santiago.",
     "Porque considera que ninguna pregunta merece ser respondida."
    ],
    "a": 1
   },
   {
    "q": "¿Qué efecto narrativo se atribuye a la fragmentación?",
    "o": [
     "Eliminar la necesidad de interpretar las versiones disponibles.",
     "Presentar los hechos históricos en un orden causal único.",
     "Convertir toda información parcial en una falsedad deliberada.",
     "Representar la dificultad de recomponer una historia condicionada por el poder."
    ],
    "a": 3
   },
   {
    "q": "¿Qué idea del conocimiento histórico sostiene el texto?",
    "o": [
     "Solo las personas privilegiadas pueden recordar con precisión.",
     "Los silencios carecen de valor para investigar una época.",
     "La comprensión exige comparar testimonios situados e incompletos.",
     "Una memoria individual resulta suficiente para reconstruir el conjunto."
    ],
    "a": 2
   },
   {
    "q": "¿Cuál es el significado más pertinente de «privilegio de formular preguntas»?",
    "o": [
     "Santiago puede indagar desde una posición social menos vulnerable.",
     "Santiago posee autorización judicial para interrogar a Ambrosio.",
     "Ambrosio está obligado jurídicamente a responder cualquier pregunta.",
     "Los dos personajes disponen del mismo margen para hablar."
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "LIB02-C02",
  "book": "Conversación en La Catedral",
  "author": "Mario Vargas Llosa",
  "sub": "El poder fuera de los despachos oficiales",
  "text": "En el universo narrativo de la novela, la autoridad política no se limita a decretos, oficinas y discursos públicos. Se prolonga en favores, negocios, lealtades exigidas y amenazas que rara vez necesitan formularse abiertamente. Un empresario puede presentarse como un ciudadano ajeno a la violencia del régimen mientras se beneficia de decisiones tomadas por funcionarios que actúan sin controles efectivos. Un trabajador, por su parte, puede conocer hechos decisivos y aun así carecer de condiciones materiales para denunciarlos. La desigualdad no opera solo como diferencia de ingresos: también determina quién puede reclamar y quién debe callar.\n\nEste entramado vuelve insuficiente la oposición entre culpables evidentes e inocentes absolutos. Existen grados distintos de participación, desde el mandato directo hasta la conveniencia de no preguntar. Reconocer esas diferencias no significa equiparar responsabilidades, sino advertir que un orden autoritario puede sostenerse gracias a la cooperación de personas que se consideran externas a la política. El efecto más corrosivo surge cuando la subordinación se vuelve costumbre y la ventaja privada se presenta como simple capacidad para «saber moverse». Entonces la corrupción deja de parecer un acontecimiento excepcional y empieza a confundirse con el funcionamiento ordinario de la sociedad.",
  "qs": [
   {
    "q": "¿Cuál es la principal ampliación del concepto de poder que propone el texto?",
    "o": [
     "El poder se reduce a la fuerza ejercida por militares.",
     "El poder actúa exclusivamente a través de documentos legales.",
     "El poder circula también mediante redes privadas, beneficios y silencios.",
     "El poder desaparece cuando un individuo se declara apolítico."
    ],
    "a": 2
   },
   {
    "q": "¿Qué diferencia establece entre conocer un abuso y denunciarlo?",
    "o": [
     "La posibilidad de denuncia depende, entre otras cosas, de condiciones materiales y jerarquías sociales.",
     "Todo testigo dispone siempre del mismo margen de acción.",
     "Conocer un abuso convierte automáticamente a una persona en cómplice directo.",
     "Las denuncias carecen de sentido en cualquier régimen."
    ],
    "a": 0
   },
   {
    "q": "¿Por qué se rechaza la división simple entre «culpables» e «inocentes»?",
    "o": [
     "Porque se afirma que nadie tiene responsabilidad por sus actos.",
     "Porque conviene distinguir modalidades y grados de participación sin equipararlos.",
     "Porque las decisiones privadas son irrelevantes para los sistemas políticos.",
     "Porque los actos del régimen se explican únicamente por azar."
    ],
    "a": 1
   },
   {
    "q": "¿Qué significa que la corrupción se confunda con «el funcionamiento ordinario»?",
    "o": [
     "Que todas las actividades sociales son ilícitas por definición.",
     "Que el régimen ha eliminado los intercambios económicos.",
     "Que los favores pierden cualquier efecto sobre las instituciones.",
     "Que las prácticas abusivas llegan a normalizarse como parte de la rutina."
    ],
    "a": 3
   },
   {
    "q": "¿Cuál sería el ejemplo más acorde con el mecanismo descrito?",
    "o": [
     "Un funcionario publica información que permite controlar su gestión.",
     "Un empleado denuncia libremente una irregularidad sin sufrir presiones.",
     "Una empresa obtiene ventajas políticas y define el beneficio como mera habilidad comercial.",
     "Una organización renuncia a un favor obtenido mediante una amenaza."
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "LIB02-C03",
  "book": "Conversación en La Catedral",
  "author": "Mario Vargas Llosa",
  "sub": "La pregunta por un país deteriorado",
  "text": "La inquietud de Santiago acerca del deterioro del Perú puede interpretarse menos como una solicitud de fecha exacta que como una dificultad para explicar una experiencia colectiva. La pregunta condensa frustraciones personales, promesas políticas incumplidas y la impresión de que ciertas formas de injusticia han sobrevivido a los cambios de autoridades. Buscar un instante inaugural de la decadencia ofrece la comodidad de un origen identificable, pero también puede ocultar procesos largos, decisiones acumuladas y responsabilidades compartidas de manera desigual.\n\nLa novela incomoda precisamente porque las trayectorias individuales no se separan de ese panorama. La desilusión de Santiago está atravesada por su origen familiar, sus posibilidades de elegir y la distancia entre las convicciones que proclama y los vínculos de los que no logra desprenderse. La pregunta nacional se vuelve entonces una interrogación ética dirigida al sujeto que pregunta. No basta con atribuir la degradación a un gobernante o a un episodio aislado: es necesario examinar los mecanismos por los cuales la arbitrariedad penetra la vida cotidiana. En vez de ofrecer una respuesta tranquilizadora, el relato muestra por qué la búsqueda de una explicación única puede ser, ella misma, parte del problema.",
  "qs": [
   {
    "q": "¿Qué interpretación de la pregunta sobre el deterioro nacional privilegia la microlectura?",
    "o": [
     "La búsqueda de una fecha indiscutible de inicio de todos los problemas.",
     "Una interrogación histórica y ética que no admite una causa única simple.",
     "Una demostración de que las decisiones individuales carecen de importancia.",
     "Un recurso humorístico sin relación con la experiencia colectiva."
    ],
    "a": 1
   },
   {
    "q": "¿Cuál es el riesgo de fijar un único «instante inaugural»?",
    "o": [
     "Hacer imposible cualquier comparación entre gobiernos.",
     "Reconocer que existen desigualdades entre responsabilidades.",
     "Ocultar procesos acumulativos y mecanismos persistentes.",
     "Atribuir mayor peso al contexto que a la cronología."
    ],
    "a": 2
   },
   {
    "q": "¿Por qué la pregunta política se transforma en una pregunta ética?",
    "o": [
     "Porque también obliga a examinar la posición y las contradicciones de Santiago.",
     "Porque la ética se reduce a evaluar los sentimientos privados.",
     "Porque la historia del país puede explicarse solo con decisiones familiares.",
     "Porque toda crítica pública debe quedar suspendida."
    ],
    "a": 0
   },
   {
    "q": "¿Qué relación se establece entre las trayectorias personales y el contexto nacional?",
    "o": [
     "Son ámbitos completamente independientes.",
     "La experiencia individual demuestra que el régimen es irrelevante.",
     "Los problemas colectivos aparecen exclusivamente como metáforas privadas.",
     "Las biografías muestran cómo el orden político atraviesa elecciones y relaciones."
    ],
    "a": 3
   },
   {
    "q": "¿Cuál sería la conclusión menos compatible con la lectura?",
    "o": [
     "Un régimen puede dejar prácticas persistentes en la vida social.",
     "La crisis del país se explica plenamente por un solo responsable y un solo día.",
     "Las convicciones y los privilegios pueden entrar en tensión.",
     "Una novela puede plantear preguntas sin cerrarlas de forma definitiva."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "LIB03-C01",
  "book": "No soy tu cholo",
  "author": "Marco Avilés",
  "sub": "La discriminación en los gestos ordinarios",
  "text": "El racismo no necesita anunciarse mediante un insulto explícito para ordenar las relaciones sociales. Puede manifestarse cuando un vigilante sigue con la mirada a una persona dentro de una tienda, cuando una entrevista de trabajo se convierte en evaluación del acento o cuando alguien recibe elogios porque «no parece» pertenecer al grupo del que proviene. Cada episodio, tomado por separado, admite excusas: precaución, exigencias de presentación, una broma sin intención. Pero la repetición de esas excusas construye un patrón reconocible en el que ciertos cuerpos deben demostrar continuamente que merecen la confianza concedida de entrada a otros.\n\nUna lectura crítica cercana a las preocupaciones de Marco Avilés no se conformaría con investigar si cada participante «quería ofender». Examinaría también las consecuencias y la distribución desigual de la sospecha. La buena intención declarada no borra el efecto de una práctica, del mismo modo que una persona perjudicada no está obligada a producir una escena espectacular para que su experiencia sea válida. Nombrar el patrón permite desplazar la discusión de la sensibilidad individual hacia las reglas tácitas que jerarquizan a las personas. Así, el problema deja de ser una suma de incidentes aislados y aparece como una forma de organización cotidiana.",
  "qs": [
   {
    "q": "¿Qué sostiene el texto sobre el racismo cotidiano?",
    "o": [
     "Solo existe cuando una persona reconoce públicamente su intención de discriminar.",
     "Opera exclusivamente a través de leyes explícitamente excluyentes.",
     "Puede reproducirse mediante gestos rutinarios y criterios de sospecha desiguales.",
     "Se reduce a malentendidos que desaparecen con una disculpa."
    ],
    "a": 2
   },
   {
    "q": "¿Qué efecto argumentativo tiene la enumeración de la tienda, la entrevista y el elogio?",
    "o": [
     "Presentar escenarios distintos que revelan un patrón común de jerarquización.",
     "Establecer que todos los empleadores y vigilantes actúan del mismo modo.",
     "Proponer una clasificación jurídica exhaustiva de delitos.",
     "Desviar la atención hacia conflictos exclusivamente individuales."
    ],
    "a": 0
   },
   {
    "q": "¿Por qué se considera insuficiente preguntar si alguien «quería ofender»?",
    "o": [
     "Porque las intenciones de las personas nunca pueden investigarse.",
     "Porque la intención no agota los efectos ni las desigualdades que una práctica reproduce.",
     "Porque todo comentario social implica automáticamente un delito.",
     "Porque solo importa la reacción emocional de quien observa."
    ],
    "a": 1
   },
   {
    "q": "¿Qué se infiere de la expresión «merecen la confianza concedida de entrada a otros»?",
    "o": [
     "Todos reciben idéntico trato hasta demostrar lo contrario.",
     "La confianza depende únicamente de la experiencia profesional.",
     "Las jerarquías descritas son aleatorias y se corrigen solas.",
     "Existen ventajas iniciales que se distribuyen de manera socialmente desigual."
    ],
    "a": 3
   },
   {
    "q": "¿Cuál sería una respuesta institucional coherente con el análisis?",
    "o": [
     "Evaluar únicamente si los empleados se consideran buenas personas.",
     "Prohibir que se mencionen experiencias de trato diferenciado.",
     "Revisar criterios y prácticas que generan sospechas repetidas sobre determinados grupos.",
     "Resolver cada queja como una excepción sin comparar casos."
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "LIB03-C02",
  "book": "No soy tu cholo",
  "author": "Marco Avilés",
  "sub": "La palabra que cambia según quién la pronuncia",
  "text": "Una expresión puede circular como apodo amistoso en un grupo y convertirse en humillación cuando se utiliza desde una posición de superioridad. La palabra «cholo» concentra esa ambivalencia: ha sido empleada para marcar distancia y desprecio, pero también ha sido asumida por algunas personas como afirmación de pertenencia. Concluir que su significado es siempre ofensivo o siempre celebratorio borraría el papel del contexto, la relación entre hablantes y la historia de desigualdades que acompaña al término.\n\nCuando alguien rechaza que otro lo nombre de ese modo, no necesariamente rechaza sus raíces. Puede estar cuestionando el derecho que se atribuye un interlocutor a definirlo sin consentimiento. Inversamente, reivindicar una identidad no elimina por arte de magia las condiciones que la vuelven vulnerable al estigma. La disputa sobre el lenguaje es, por eso, una disputa sobre quién tiene autoridad para describir a quién y con qué efectos. Una reflexión inspirada en *No soy tu cholo* invita a distinguir la autoidentificación del etiquetado impuesto: las mismas sílabas pueden expresar orgullo, cercanía o dominación, según la situación en la que adquieren sentido.",
  "qs": [
   {
    "q": "¿Qué tesis sostiene la microlectura acerca del término «cholo»?",
    "o": [
     "Tiene un único significado independiente del hablante.",
     "Su sentido depende del contexto, las relaciones de poder y la autoidentificación.",
     "Su apropiación positiva elimina cualquier historia de discriminación.",
     "Solo puede interpretarse mediante su origen etimológico."
    ],
    "a": 1
   },
   {
    "q": "¿Qué diferencia central establece entre autoidentificación y etiquetado?",
    "o": [
     "La primera se refiere a la cultura y el segundo solo a la nacionalidad.",
     "La autoidentificación es siempre pública y el etiquetado es siempre privado.",
     "La primera implica nombrarse; el segundo puede implicar una definición impuesta desde fuera.",
     "Ambas prácticas son equivalentes cuando emplean la misma palabra."
    ],
    "a": 2
   },
   {
    "q": "¿Por qué rechazar una denominación no equivale necesariamente a negar las raíces?",
    "o": [
     "Porque el rechazo puede dirigirse a la imposición y no a la pertenencia.",
     "Porque las raíces carecen de relación con cualquier término social.",
     "Porque solo quienes desconocen su origen rechazan los apodos.",
     "Porque toda palabra identitaria tiene un significado neutral."
    ],
    "a": 0
   },
   {
    "q": "¿Cuál es la función del contraste entre orgullo y estigma?",
    "o": [
     "Probar que ambas experiencias siempre se anulan entre sí.",
     "Sostener que el lenguaje no influye en las relaciones sociales.",
     "Afirmar que la identidad se decide únicamente por consenso institucional.",
     "Mostrar que una resignificación simbólica no elimina automáticamente desigualdades materiales."
    ],
    "a": 3
   },
   {
    "q": "¿Qué pregunta sería más pertinente para analizar un uso concreto del término?",
    "o": [
     "¿Cuántas letras contiene exactamente la palabra?",
     "¿Quién la pronuncia, ante quién y dentro de qué relación social?",
     "¿Es una expresión frecuente en los medios de comunicación?",
     "¿Se emplea también en otros países de habla hispana?"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "LIB03-C03",
  "book": "No soy tu cholo",
  "author": "Marco Avilés",
  "sub": "La meritocracia ante condiciones desiguales",
  "text": "Dos estudiantes obtienen la misma calificación de ingreso a una universidad. Uno ha contado con clases particulares, conectividad estable y tiempo exclusivo para estudiar; el otro ha alternado su preparación con jornadas de trabajo y traslados extensos. El resultado compartido no borra las diferencias de sus trayectorias, así como reconocer esas diferencias no permite predecir cuál de los dos tendrá mejor desempeño futuro. Lo que se pone en cuestión es una interpretación apresurada: considerar que una cifra idéntica demuestra oportunidades equivalentes.\n\nLa crítica al racismo estructural puede extenderse a las narraciones que presentan cada logro como consecuencia exclusiva del esfuerzo individual. El mérito importa, pero se produce en escenarios donde el acceso a recursos, redes y expectativas sociales está distribuido de manera desigual. Además, las instituciones pueden valorar como señales de capacidad ciertas formas de hablar o comportarse asociadas a grupos privilegiados. Cuando estos criterios se ocultan bajo la apariencia de neutralidad, una ventaja heredada corre el riesgo de confundirse con superioridad personal. No se trata de negar la responsabilidad de cada estudiante, sino de evitar que el reconocimiento del esfuerzo sirva para volver invisibles los obstáculos que otros debieron superar.",
  "qs": [
   {
    "q": "¿Qué afirmación cuestiona principalmente el ejemplo inicial?",
    "o": [
     "Dos personas con la misma nota necesariamente aprendieron lo mismo.",
     "Quien trabaja mientras estudia carece de capacidad académica.",
     "Una evaluación de ingreso nunca aporta información útil.",
     "Un resultado equivalente demuestra automáticamente condiciones iniciales equivalentes."
    ],
    "a": 3
   },
   {
    "q": "¿Cuál es la posición del texto respecto al mérito individual?",
    "o": [
     "Lo considera relevante, pero insuficiente para explicar por sí solo los resultados.",
     "Lo descarta como una idea sin ningún valor educativo.",
     "Lo identifica exclusivamente con la posición económica familiar.",
     "Lo considera una prueba definitiva de igualdad social."
    ],
    "a": 0
   },
   {
    "q": "¿Qué problema plantea el uso institucional de ciertos modos de hablar como indicadores de capacidad?",
    "o": [
     "Que toda competencia comunicativa sea irrelevante.",
     "Que las instituciones deban suprimir cualquier evaluación.",
     "Que puedan naturalizar preferencias asociadas a grupos socialmente privilegiados.",
     "Que los resultados académicos se vuelvan matemáticamente imposibles de comparar."
    ],
    "a": 2
   },
   {
    "q": "¿Qué inferencia se sigue del contraste de trayectorias?",
    "o": [
     "El estudiante con más recursos necesariamente tendrá menor compromiso.",
     "Para evaluar la equidad, importa considerar procesos además de resultados.",
     "Todo desempeño alto resulta explicable por una única causa.",
     "La trayectoria de cada persona impide discutir políticas generales."
    ],
    "a": 1
   },
   {
    "q": "¿Cuál sería una aplicación coherente con el cierre del texto?",
    "o": [
     "Premiar únicamente la familiaridad con códigos de sectores privilegiados.",
     "Desconocer por completo el esfuerzo de quienes obtienen buenas notas.",
     "Suponer que toda diferencia de rendimiento prueba discriminación intencional.",
     "Reconocer logros individuales y revisar las barreras que condicionan las oportunidades."
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "LIB04-C01",
  "book": "El hombre invisible",
  "author": "H. G. Wells",
  "sub": "Un descubrimiento sin responsabilidad",
  "text": "Griffin ha logrado alterar las condiciones físicas que permiten que su cuerpo sea percibido por los demás. Desde el punto de vista técnico, su experimento constituye una conquista extraordinaria; desde el punto de vista práctico, descubre que la invisibilidad no resuelve necesidades elementales. La ropa lo delata, el frío lo afecta y el contacto con objetos produce indicios de su presencia. Su éxito científico no lo ha liberado de la materia ni de la convivencia, aunque él lo interprete como una promesa de dominio sin límites.\n\nLa tensión central aparece cuando transforma esa capacidad en un permiso imaginario para actuar sin rendir cuentas. Confunde no ser visto con no estar sujeto a consecuencias. Sin embargo, la ausencia de una mirada vigilante no elimina el daño producido ni la responsabilidad de quien lo causa. La innovación, en lugar de ampliar sus posibilidades de cooperación, intensifica su aislamiento y su disposición a utilizar a otros como instrumentos. La lectura plantea así un problema ético que excede el caso fantástico: una herramienta puede aumentar enormemente el poder de una persona sin aumentar, en la misma proporción, su capacidad de juzgar cómo debería emplearlo.",
  "qs": [
   {
    "q": "¿Qué contradicción revela la experiencia de Griffin?",
    "o": [
     "La invisibilidad le garantiza absoluta independencia de sus necesidades físicas.",
     "Una innovación extraordinaria puede coexistir con limitaciones prácticas y éticas.",
     "El descubrimiento científico resulta imposible de comprobar.",
     "El experimento lo vuelve automáticamente más empático."
    ],
    "a": 1
   },
   {
    "q": "¿Cuál es el error moral que el texto atribuye a Griffin?",
    "o": [
     "Confundir la falta de observación con la ausencia de responsabilidad.",
     "Reconocer que toda acción tiene consecuencias para terceros.",
     "Dudar de la utilidad técnica de su descubrimiento.",
     "Pedir que sus experimentos sean evaluados públicamente."
    ],
    "a": 0
   },
   {
    "q": "¿Qué función cumple mencionar la ropa, el frío y los objetos?",
    "o": [
     "Negar que el experimento haya producido cualquier efecto real.",
     "Insinuar que Griffin siempre fue visible para todos.",
     "Probar que las ciencias físicas no pueden transformar el mundo.",
     "Mostrar que su aparente poder conserva restricciones materiales."
    ],
    "a": 3
   },
   {
    "q": "¿Qué relación se propone entre capacidad técnica y juicio ético?",
    "o": [
     "Siempre aumentan al mismo ritmo.",
     "El juicio ético se vuelve innecesario cuando existe un avance tecnológico.",
     "El incremento de poder no garantiza una mejora del discernimiento moral.",
     "Ambos dependen exclusivamente de la aprobación social."
    ],
    "a": 2
   },
   {
    "q": "¿Qué ejemplo contemporáneo sería más análogo al conflicto descrito?",
    "o": [
     "Una persona que renuncia a una herramienta por sus costos.",
     "Alguien que aprovecha el anonimato digital para perjudicar sin asumir consecuencias.",
     "Un investigador que solicita evaluación ética antes de publicar.",
     "Un usuario que reconoce las limitaciones de la privacidad en línea."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "LIB04-C02",
  "book": "El hombre invisible",
  "author": "H. G. Wells",
  "sub": "La invisibilidad y la ruptura del vínculo social",
  "text": "Para vivir entre otros no basta con circular físicamente por los mismos espacios: se requiere participar en un sistema de reconocimientos mutuos. Un saludo, una mirada o una conversación confirman que las personas son capaces de advertir la presencia y la vulnerabilidad ajenas. Griffin, al volverse invisible, pierde esas formas ordinarias de intercambio. Pero el problema se agrava porque comienza a leer toda reacción de temor como una ofensa personal y toda resistencia como una amenaza que merece castigo.\n\nSe forma entonces un círculo que él no sabe interrumpir. Cuanto más recurre a la intimidación para obtener ayuda, más desconfianza genera; cuanto más desconfían de él, más se convence de que solo la fuerza puede protegerlo. La invisibilidad física funciona como metáfora de un aislamiento moral que no fue causado únicamente por el experimento. Su capacidad singular podría haber exigido nuevas reglas de cooperación, pero Griffin opta por sustituir la reciprocidad por la obediencia. El texto no sugiere que ser diferente conduzca inevitablemente a la violencia; muestra, más bien, cómo una interpretación persecutoria del rechazo puede transformar la diferencia en justificación para dominar.",
  "qs": [
   {
    "q": "¿Cuál es el «círculo» que describe el segundo párrafo?",
    "o": [
     "La confianza produce aislamiento y luego reconciliación.",
     "La invisibilidad se transmite a quienes conviven con Griffin.",
     "La intimidación genera desconfianza y esta refuerza su recurso a la fuerza.",
     "La sociedad acepta gradualmente todas sus exigencias."
    ],
    "a": 2
   },
   {
    "q": "¿Qué distinción introduce el texto sobre las causas del aislamiento?",
    "o": [
     "Diferencia la invisibilidad física de decisiones morales que profundizan la ruptura.",
     "Atribuye la conducta de Griffin exclusivamente al azar.",
     "Sostiene que el experimento no tiene ninguna consecuencia social.",
     "Afirma que toda persona diferente reacciona violentamente."
    ],
    "a": 0
   },
   {
    "q": "¿Qué significa «reciprocidad» en este contexto?",
    "o": [
     "La obligación de admirar cualquier invento científico.",
     "La alternancia mecánica entre amenazas y disculpas.",
     "El intercambio de información sin compromiso interpersonal.",
     "Una relación en que las partes se reconocen y consideran mutuamente."
    ],
    "a": 3
   },
   {
    "q": "¿Qué inferencia está mejor sustentada?",
    "o": [
     "El miedo de los demás legitima automáticamente cualquier respuesta de Griffin.",
     "La diferencia física no determina por sí misma una conducta autoritaria.",
     "La convivencia depende únicamente de poder ver el cuerpo de otro.",
     "La obediencia forzada crea confianza duradera."
    ],
    "a": 1
   },
   {
    "q": "¿Qué postura critica principalmente la última oración?",
    "o": [
     "Que la cooperación necesita acuerdos.",
     "Que el reconocimiento mutuo influye en la convivencia.",
     "Que una condición diferente vuelve inevitable el comportamiento violento.",
     "Que los actos de Griffin tienen consecuencias colectivas."
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "LIB04-C03",
  "book": "El hombre invisible",
  "author": "H. G. Wells",
  "sub": "Cuando la ciencia se convierte en soberanía privada",
  "text": "Griffin no se conforma con aprovechar su descubrimiento para sobrevivir. Llega a imaginar que una capacidad excepcional lo autoriza a imponer sus decisiones sobre los demás. En esa lógica, la fuerza sustituye a la legitimidad: quien puede causar daño sin ser reconocido se cree facultado para dictar reglas. El proyecto revela una paradoja. El individuo que aspiraba a escapar de toda limitación termina necesitando que otros lo obedezcan, lo provean de recursos y sostengan el orden que él mismo pretende desestabilizar.\n\nLa novela permite distinguir entre poder y autoridad. El primero puede consistir en la aptitud de producir efectos; la segunda requiere alguna forma de reconocimiento o justificación ante quienes quedan afectados. Griffin dispone de una ventaja técnica, pero no construye un fundamento legítimo para ejercerla. Por ello, su promesa de libertad se convierte en un programa de coerción. La crítica no recae sobre la investigación científica como tal, sino sobre la pretensión de que un descubrimiento excepcional coloca a su poseedor fuera de los límites compartidos. El verdadero problema comienza cuando el conocimiento se presenta como título suficiente para gobernar la vida ajena.",
  "qs": [
   {
    "q": "¿Qué distinción conceptual sostiene el argumento?",
    "o": [
     "La fuerza física siempre produce legitimidad moral.",
     "Poder es capacidad de actuar; autoridad exige justificación o reconocimiento.",
     "Conocimiento y coerción son términos idénticos.",
     "La autoridad depende exclusivamente del secreto."
    ],
    "a": 1
   },
   {
    "q": "¿Por qué se califica de paradójico el proyecto de Griffin?",
    "o": [
     "Porque descubre que todas las personas pueden volverse invisibles.",
     "Porque renuncia voluntariamente a cualquier ventaja científica.",
     "Porque necesita cooperación u obediencia ajenas mientras proclama independencia absoluta.",
     "Porque sus experimentos le impiden obtener conocimiento."
    ],
    "a": 2
   },
   {
    "q": "¿Cuál es la crítica central formulada al final?",
    "o": [
     "Que la ciencia no debería ocuparse de problemas materiales.",
     "Que ningún conocimiento puede generar beneficios sociales.",
     "Que cualquier innovación debe quedar en manos privadas.",
     "Que un logro técnico no otorga por sí solo derecho a dominar a otras personas."
    ],
    "a": 3
   },
   {
    "q": "¿Qué equivalencia rechaza el razonamiento del texto?",
    "o": [
     "Superioridad técnica equivale automáticamente a legitimidad política o moral.",
     "La libertad individual exige límites que protejan a terceros.",
     "El abuso puede producir dependencia y resistencia.",
     "Una sociedad necesita criterios para justificar el ejercicio de autoridad."
    ],
    "a": 0
   },
   {
    "q": "¿Qué medida respondería mejor al riesgo descrito?",
    "o": [
     "Permitir que quien inventa una tecnología determine unilateralmente sus usos sociales.",
     "Exigir responsabilidad y deliberación sobre los efectos públicos de capacidades extraordinarias.",
     "Suprimir toda investigación cuyo resultado sea difícil de comprender.",
     "Premiar el uso de la intimidación para acelerar la obediencia."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "LIB05-C01",
  "book": "Colmillo blanco",
  "author": "Jack London",
  "sub": "Sobrevivir no es lo mismo que elegir",
  "text": "En el mundo de Colmillo Blanco, aprender significa reconocer rápidamente qué acciones aumentan las posibilidades de seguir con vida. El hambre no es una metáfora abstracta: obliga a explorar, arriesgarse y competir. La amenaza de otros animales enseña cautela, mientras que la escasez vuelve costoso cualquier error. Desde fuera, algunas conductas podrían parecer expresiones de crueldad; observadas en su contexto, revelan estrategias formadas bajo presión. Esto no significa que toda agresión sea inevitable, sino que juzgar un comportamiento sin considerar sus condiciones de origen produce interpretaciones superficiales.\n\nEl animal tampoco es un mecanismo que simplemente responde a estímulos. Aprende de experiencias diferentes, distingue situaciones y modifica sus expectativas. Sin embargo, sus posibilidades no son ilimitadas: la memoria del peligro inclina sus reacciones futuras incluso cuando el escenario ha cambiado. La narración permite discutir la tensión entre instinto, experiencia y entorno sin reducirla a una sola causa. Si el miedo se aprendió en circunstancias extremas, una transformación posterior exigirá algo más que la ausencia momentánea de amenazas: necesitará señales repetidas de seguridad capaces de disputar el peso de lo vivido.",
  "qs": [
   {
    "q": "¿Qué criterio propone el texto para comprender la agresividad del animal?",
    "o": [
     "Atribuirla a una inclinación moral al mal.",
     "Explicarla exclusivamente por una herencia inalterable.",
     "Interpretarla a partir del aprendizaje y las condiciones de supervivencia.",
     "Suponer que toda conducta violenta es voluntaria y consciente."
    ],
    "a": 2
   },
   {
    "q": "¿Qué función cumple la referencia a la escasez?",
    "o": [
     "Mostrar que los errores tienen consecuencias importantes en ese entorno.",
     "Sugerir que el hambre carece de impacto en el comportamiento.",
     "Probar que no existen relaciones de cooperación entre animales.",
     "Describir un paisaje sin consecuencias sobre las decisiones."
    ],
    "a": 0
   },
   {
    "q": "¿Por qué el texto rechaza la imagen del animal como «mecanismo»?",
    "o": [
     "Porque considera que los estímulos nunca afectan su conducta.",
     "Porque atribuye a Colmillo Blanco razonamientos humanos complejos.",
     "Porque supone que la memoria de los peligros desaparece enseguida.",
     "Porque reconoce aprendizaje, discriminación de situaciones y ajuste de expectativas."
    ],
    "a": 3
   },
   {
    "q": "¿Qué inferencia se deriva del peso de la memoria?",
    "o": [
     "Un cambio de escenario borra automáticamente los hábitos previos.",
     "La seguridad sostenida puede ser necesaria para modificar reacciones formadas por el peligro.",
     "La experiencia individual no tiene importancia frente al instinto.",
     "Los animales no pueden adquirir nuevas conductas después de una amenaza."
    ],
    "a": 1
   },
   {
    "q": "¿Qué afirmación evita mejor el determinismo?",
    "o": [
     "La hostilidad del entorno define para siempre cualquier comportamiento posterior.",
     "Ninguna experiencia puede influir en el instinto.",
     "El pasado condiciona las respuestas, pero no impide necesariamente su transformación.",
     "El comportamiento depende solo de la decisión de un entrenador."
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "LIB05-C02",
  "book": "Colmillo blanco",
  "author": "Jack London",
  "sub": "La violencia como aprendizaje impuesto",
  "text": "En manos de Beauty Smith, Colmillo Blanco deja de enfrentar solamente amenazas propias del medio natural. Ahora se convierte en objeto de un espectáculo en el que el sufrimiento produce beneficios para un tercero. La violencia que antes servía, en parte, para sobrevivir se intensifica mediante castigos, encierro y enfrentamientos organizados. Su ferocidad, vista por los espectadores como una característica esencial, es también el resultado de un sistema que la provoca y la recompensa. Quien observa únicamente el ataque final omite las condiciones que lo hicieron más probable.\n\nHay una diferencia ética decisiva entre el conflicto de un animal por alimento y la explotación deliberada de ese conflicto para entretener. En el segundo caso, un agente con mayor capacidad de decisión transforma la vulnerabilidad ajena en instrumento de lucro. La relación entre amo y animal no expresa protección, sino apropiación del cuerpo y de la conducta. La microlectura no absuelve de manera automática todos los daños que puede causar un ser acostumbrado a combatir; obliga, más bien, a distribuir correctamente las responsabilidades. Comprender el origen de una respuesta agresiva es distinto de celebrarla y distinto, también, de considerarla incorregible.",
  "qs": [
   {
    "q": "¿Qué cambio fundamental se describe en la situación de Colmillo Blanco?",
    "o": [
     "De la violencia vinculada a sobrevivir a una violencia intensificada como espectáculo lucrativo.",
     "De la domesticación cuidadosa a una vida plenamente libre.",
     "De la lucha por alimento a una convivencia sin coerción.",
     "De la desconfianza hacia humanos al rechazo de cualquier animal."
    ],
    "a": 0
   },
   {
    "q": "¿Por qué la ferocidad no debe entenderse como esencia inmutable?",
    "o": [
     "Porque el texto afirma que nunca ataca a otros animales.",
     "Porque es moldeada y reforzada por prácticas de explotación.",
     "Porque todas sus reacciones dependen del azar.",
     "Porque su comportamiento está completamente separado de la experiencia."
    ],
    "a": 1
   },
   {
    "q": "¿Cuál es la distinción ética central del segundo párrafo?",
    "o": [
     "Toda agresión animal demuestra una intención humana oculta.",
     "La necesidad de supervivencia y el entretenimiento son objetivos equivalentes.",
     "La violencia resulta aceptable cuando es observada por muchos.",
     "No equivale luchar por necesidad a inducir sufrimiento ajeno con fines de lucro."
    ],
    "a": 3
   },
   {
    "q": "¿Qué significa «distribuir correctamente las responsabilidades»?",
    "o": [
     "Atribuir toda la culpa al animal por su respuesta final.",
     "Negar que los humanos puedan modificar el comportamiento animal.",
     "Incluir en el juicio la actuación de quien creó las condiciones de violencia.",
     "Considerar que el espectador tiene siempre idéntico poder que el explotador."
    ],
    "a": 2
   },
   {
    "q": "¿Cuál de estas interpretaciones es la más matizada?",
    "o": [
     "Entender la agresión desde sus causas sin justificar la explotación ni asumir que el cambio es imposible.",
     "Defender que los resultados violentos son positivos si generan ganancias.",
     "Afirmar que el animal actúa fuera de cualquier influencia del entorno.",
     "Sostener que explicar una conducta significa necesariamente aprobarla."
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "LIB05-C03",
  "book": "Colmillo blanco",
  "author": "Jack London",
  "sub": "La confianza como proceso, no como orden",
  "text": "La relación con Weedon Scott introduce para Colmillo Blanco una experiencia distinta de la dominación. El cuidado no aparece como un sentimiento que el animal comprende de inmediato; primero se presenta como una regularidad desconcertante. Una mano se aproxima sin golpear, la comida llega sin exigir una pelea y los movimientos humanos dejan de anunciar siempre un castigo. El cambio comienza en el terreno de las expectativas: acciones que antes predecían dolor pueden adquirir, lentamente, otro significado.\n\nSería erróneo presentar esta transformación como una victoria instantánea de la bondad sobre la naturaleza salvaje. La confianza requiere tiempo porque compite con aprendizajes anteriores, inscritos en la memoria del animal. También exige una asimetría bien administrada: Scott dispone de mayor control sobre el entorno y, precisamente por ello, debe renunciar a utilizar ese poder para imponer obediencia mediante el miedo. La novela permite pensar la domesticación como una cuestión de responsabilidad del más fuerte y no como simple sometimiento del más débil. La lealtad que emerge de esta relación importa porque no se obtiene únicamente por coerción; crece allí donde la previsibilidad y el cuidado vuelven posible una respuesta distinta.",
  "qs": [
   {
    "q": "¿Qué desencadena el cambio inicial en las expectativas de Colmillo Blanco?",
    "o": [
     "Una demostración excepcional de fuerza de Scott.",
     "Una serie reiterada de experiencias en las que los gestos humanos dejan de anunciar daño.",
     "La desaparición completa de sus recuerdos anteriores.",
     "Una orden verbal que comprende perfectamente desde el primer día."
    ],
    "a": 1
   },
   {
    "q": "¿Por qué se rechaza la idea de una transformación instantánea?",
    "o": [
     "Porque el cuidado carece de efectos sobre cualquier ser vivo.",
     "Porque Scott repite las mismas formas de intimidación de Beauty Smith.",
     "Porque los hábitos aprendidos bajo violencia requieren experiencias sostenidas para modificarse.",
     "Porque la novela sostiene que la lealtad nunca puede desarrollarse."
    ],
    "a": 2
   },
   {
    "q": "¿Qué responsabilidad se atribuye a Scott por su mayor poder?",
    "o": [
     "Ejercer control sin convertir la vulnerabilidad del animal en ocasión para intimidarlo.",
     "Conservar la violencia para asegurar obediencia permanente.",
     "Evitar cualquier interacción hasta que el animal cambie espontáneamente.",
     "Delegar la crianza en quienes lucraban con las peleas."
    ],
    "a": 0
   },
   {
    "q": "¿Cuál es el contraste central entre coerción y confianza?",
    "o": [
     "La primera genera afecto espontáneo y la segunda únicamente temor.",
     "Ambas dependen exclusivamente de la alimentación.",
     "La coerción elimina cualquier desigualdad de poder.",
     "La confianza se construye con cuidado y previsibilidad, no solo con imposición."
    ],
    "a": 3
   },
   {
    "q": "¿Qué principio más amplio admite la interpretación propuesta?",
    "o": [
     "Quien dispone de poder está legitimado para usarlo sin restricciones.",
     "La calidad de una relación depende también de cómo el más fuerte administra su ventaja.",
     "La memoria del daño determina resultados idénticos en toda circunstancia.",
     "Obedecer y confiar son experiencias completamente indistinguibles."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "LIB06-C01",
  "book": "El héroe discreto",
  "author": "Mario Vargas Llosa",
  "sub": "La negativa de Felícito",
  "text": "Felícito Yanaqué ha construido su empresa mediante trabajo sostenido y disciplina. Cuando recibe amenazas destinadas a obligarlo a pagar una extorsión, su decisión de resistir parece, a primera vista, una apuesta desproporcionada: el dinero exigido podría costarle menos que el peligro de negarse. Sin embargo, ese cálculo deja fuera un elemento que para él resulta decisivo. Ceder no representaría únicamente una pérdida económica; significaría aceptar que la violencia puede fijar las reglas de su actividad y de su vida.\n\nLa firmeza de Felícito no garantiza que sus actos sean fáciles ni que siempre calcule correctamente cada riesgo. Su elección confronta dos maneras de comprender la prudencia. Según una, actuar racionalmente equivale a reducir el daño inmediato. Según otra, es necesario considerar también el costo de normalizar la amenaza, incluso cuando defender un límite trae consecuencias inciertas. La heroicidad sugerida por esta historia es discreta porque no depende del reconocimiento público ni de gestos grandilocuentes. Surge en la vida cotidiana cuando una persona decide no convertir la intimidación en una norma aceptable. El conflicto adquiere así un sentido colectivo: la extorsión prospera no solo por la fuerza de quien amenaza, sino también por el miedo que obliga a otros a acomodarse.",
  "qs": [
   {
    "q": "¿Qué dimensión excede el costo económico de la extorsión para Felícito?",
    "o": [
     "La conveniencia de ganar prestigio en redes sociales.",
     "La posibilidad de abandonar cualquier responsabilidad empresarial.",
     "La aceptación de que la violencia establezca las reglas de su vida.",
     "El deseo de aumentar sus beneficios mediante un conflicto."
    ],
    "a": 2
   },
   {
    "q": "¿Qué tensión entre concepciones de prudencia plantea el texto?",
    "o": [
     "Evitar daños inmediatos frente a defender principios con consecuencias de largo plazo.",
     "Trabajar de manera independiente frente a tener empleados.",
     "Vivir en Piura frente a trasladarse a Lima.",
     "Conservar los ingresos frente a realizar obras de caridad."
    ],
    "a": 0
   },
   {
    "q": "¿Por qué se considera «discreta» la heroicidad?",
    "o": [
     "Porque depende de mantener oculta cualquier decisión.",
     "Porque carece de consecuencias fuera de la esfera familiar.",
     "Porque consiste en obtener una recompensa de las autoridades.",
     "Porque se manifiesta en una resistencia cotidiana sin búsqueda necesaria de fama."
    ],
    "a": 3
   },
   {
    "q": "¿Qué afirmación es compatible con la interpretación?",
    "o": [
     "Resistirse prueba que Felícito conoce con exactitud todos los riesgos.",
     "Una decisión puede tener valor moral aunque no asegure éxito ni seguridad.",
     "Toda amenaza debería resolverse exclusivamente con negociación privada.",
     "El miedo nunca influye en la continuidad de una extorsión."
    ],
    "a": 1
   },
   {
    "q": "¿Qué implica la dimensión colectiva del conflicto?",
    "o": [
     "La conducta de un empresario no tiene relación con su entorno.",
     "Las amenazas se sostienen únicamente por el carácter de la víctima.",
     "La normalización social del miedo puede favorecer la persistencia del abuso.",
     "Una extorsión pierde importancia si el monto exigido es pequeño."
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "LIB06-C02",
  "book": "El héroe discreto",
  "author": "Mario Vargas Llosa",
  "sub": "Ismael Carrera y las lealtades interesadas",
  "text": "Ismael Carrera, un empresario de posición acomodada, descubre que su patrimonio condiciona el modo en que algunos familiares lo tratan. La deferencia exterior no garantiza afecto: puede encubrir impaciencia por una herencia o la expectativa de controlar decisiones que todavía le corresponden. Cuando Ismael decide intervenir sobre su propia vida, el conflicto revela que los vínculos familiares pueden convertirse en espacios de disputa económica, aun cuando se presenten bajo el lenguaje de la preocupación y el deber.\n\nLa riqueza introduce una ambigüedad que no puede resolverse con la fórmula «quien tiene dinero tiene libertad». Los recursos le permiten tomar decisiones que otras personas quizá no podrían considerar, pero también lo convierten en objeto de cálculos ajenos. De allí que su resistencia no reproduzca exactamente el problema de Felícito, quien enfrenta amenazas directas. Ambos se oponen a formas distintas de apropiación de su voluntad: la intimidación abierta y la presión interesada de quienes invocan cercanía afectiva. El texto propone una comparación que preserva las diferencias sociales entre los personajes. No todos corren los mismos riesgos, pero la dignidad de cada uno depende, en parte, de que los demás reconozcan el derecho a orientar su propia existencia.",
  "qs": [
   {
    "q": "¿Qué ambigüedad introduce la riqueza en la experiencia de Ismael?",
    "o": [
     "Le ofrece margen de decisión, pero también puede atraer relaciones basadas en intereses patrimoniales.",
     "Lo priva necesariamente de toda capacidad de decisión.",
     "Garantiza que sus familiares actúen siempre con afecto.",
     "Elimina por completo los conflictos en su entorno cercano."
    ],
    "a": 0
   },
   {
    "q": "¿Cuál es el contraste entre las presiones sufridas por Felícito e Ismael?",
    "o": [
     "Uno sufre una presión religiosa y el otro una presión académica.",
     "En ambos casos se describen amenazas idénticas y directas.",
     "Felícito afronta intimidación explícita e Ismael, intereses familiares vinculados a su patrimonio.",
     "Ismael enfrenta únicamente conflictos laborales sin dimensión familiar."
    ],
    "a": 2
   },
   {
    "q": "¿Por qué no basta con interpretar las atenciones familiares como prueba de afecto?",
    "o": [
     "Porque el texto sostiene que la familia carece de valor social.",
     "Porque una conducta deferente puede ocultar expectativas de beneficio.",
     "Porque el parentesco supone siempre una conducta delictiva.",
     "Porque Ismael no posee ningún recurso que pueda interesar a otros."
    ],
    "a": 1
   },
   {
    "q": "¿Qué elemento une las historias pese a sus diferencias?",
    "o": [
     "El propósito de abandonar sus actividades económicas.",
     "La búsqueda deliberada de notoriedad pública.",
     "La pertenencia de ambos al mismo sector social.",
     "La defensa de la autonomía frente a intentos de controlar sus decisiones."
    ],
    "a": 3
   },
   {
    "q": "¿Qué lectura respeta mejor los matices sociales del pasaje?",
    "o": [
     "Las dos situaciones comparten un problema de autonomía, sin borrar la desigualdad de riesgos y recursos.",
     "La riqueza de Ismael vuelve su experiencia idéntica a la de Felícito.",
     "La extorsión y la manipulación familiar son fenómenos sin ningún punto de contacto.",
     "El conflicto patrimonial demuestra que las decisiones personales son siempre libres."
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "LIB06-C03",
  "book": "El héroe discreto",
  "author": "Mario Vargas Llosa",
  "sub": "La ética de quien no busca ser héroe",
  "text": "Las trayectorias de Felícito e Ismael invitan a reconsiderar una imagen espectacular de la virtud. Ninguno necesita presentarse como salvador colectivo para que sus decisiones tengan relevancia moral. La resistencia, en ambos casos, surge de conflictos privados: un negocio sometido a amenazas y una vida familiar atravesada por intereses. Sin embargo, el carácter privado de esos escenarios no los vuelve ajenos a problemas públicos. Allí se discute qué valor conceden las personas a la palabra dada, al respeto por la autonomía y a los límites del poder.\n\nLa novela también deja abierta una incomodidad: actuar con firmeza puede expresar convicción, pero la convicción no garantiza infalibilidad. Existe una diferencia entre sostener un principio y convertir el orgullo personal en excusa para ignorar cualquier consecuencia. Un lector crítico puede valorar la negativa a someterse sin dejar de preguntar quién asume los riesgos que esa negativa produce. Precisamente por ello, la figura del héroe discreto no tendría que entenderse como un modelo de obediencia ciega a reglas inmutables. Su interés reside en mostrar que la integridad se prueba dentro de circunstancias ambiguas, cuando defender la propia dignidad obliga a ponderar deberes que a veces entran en tensión.",
  "qs": [
   {
    "q": "¿Qué rasgo de la heroicidad se cuestiona al comienzo?",
    "o": [
     "Que pueda expresarse mediante acciones cotidianas.",
     "Que deba depender de gestos públicos extraordinarios y del reconocimiento.",
     "Que tenga implicaciones éticas en el entorno familiar.",
     "Que requiera valorar la autonomía de las personas."
    ],
    "a": 1
   },
   {
    "q": "¿Por qué los conflictos privados tienen una dimensión pública?",
    "o": [
     "Porque todos los desacuerdos familiares requieren intervención estatal.",
     "Porque los asuntos económicos carecen de consecuencias sociales.",
     "Porque ponen en juego principios sobre poder, palabra y autonomía que trascienden cada caso.",
     "Porque los protagonistas buscan ocupar cargos políticos."
    ],
    "a": 2
   },
   {
    "q": "¿Qué reserva crítica introduce el segundo párrafo?",
    "o": [
     "Una convicción valiosa no exime de considerar daños ni responsabilidades.",
     "Toda resistencia a la presión debe juzgarse como orgullo injustificado.",
     "La integridad depende de no modificar jamás una decisión.",
     "La dignidad personal solo puede defenderse mediante confrontación."
    ],
    "a": 0
   },
   {
    "q": "¿Qué distingue un principio del orgullo ciego según el texto?",
    "o": [
     "El principio se basa siempre en preferencias económicas.",
     "El orgullo constituye una evidencia superior a cualquier argumento.",
     "Ninguno requiere considerar las consecuencias de los actos.",
     "La defensa razonada de un valor admite examinar tensiones y efectos sobre otros."
    ],
    "a": 3
   },
   {
    "q": "¿Cuál sería una conclusión apropiada?",
    "o": [
     "La virtud individual resuelve por completo todos los problemas colectivos.",
     "La integridad adquiere sentido en decisiones difíciles, no en una supuesta ausencia de conflictos.",
     "La ética carece de relevancia cuando las decisiones son privadas.",
     "La coherencia obliga a negar la posibilidad de equivocarse."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "LIB07-C01",
  "book": "Cartas a un joven novelista",
  "author": "Mario Vargas Llosa",
  "sub": "La vocación no sustituye al oficio",
  "text": "La aspiración de escribir una novela suele presentarse como el resultado de una inspiración excepcional. Sin embargo, una reflexión en diálogo con las ideas de Vargas Llosa exige distinguir el impulso inicial del trabajo que permite convertirlo en una obra. La intensidad con que alguien desea contar una historia no resuelve la elección del narrador, el orden de los episodios ni el problema de mantener la atención del lector. Tampoco garantiza que la primera versión encuentre la forma más convincente para sus materiales.\n\nLa vocación puede entenderse como una necesidad persistente de imaginar y narrar, pero su persistencia no equivale a eficacia estética. Para construir un mundo ficticio, el escritor ensaya decisiones, reconoce fallas y reescribe. La técnica, desde esta perspectiva, no es una receta capaz de producir novelas valiosas de manera automática; es un conjunto de recursos cuyo sentido depende del proyecto particular. Una modificación aparentemente pequeña, como trasladar una revelación del inicio al final, puede transformar el significado de los hechos anteriores. Por eso la disciplina no se opone necesariamente a la creatividad. Le proporciona ocasiones de descubrir posibilidades que la primera intuición todavía no contenía.",
  "qs": [
   {
    "q": "¿Qué distinción organiza el texto?",
    "o": [
     "Entre el impulso de narrar y el trabajo formal necesario para construir una novela.",
     "Entre la literatura nacional y la literatura extranjera.",
     "Entre los escritores jóvenes y los autores de edad avanzada.",
     "Entre la lectura académica y el entretenimiento."
    ],
    "a": 0
   },
   {
    "q": "¿Por qué la vocación no garantiza eficacia estética?",
    "o": [
     "Porque las buenas novelas no requieren un impulso personal.",
     "Porque la disciplina elimina toda imaginación.",
     "Porque querer narrar no resuelve automáticamente problemas de forma y estructura.",
     "Porque todas las historias dependen del mismo narrador."
    ],
    "a": 2
   },
   {
    "q": "¿Qué demuestra el ejemplo de trasladar una revelación al final?",
    "o": [
     "Que el orden de los acontecimientos es irrelevante.",
     "Que una decisión técnica puede modificar la interpretación del conjunto.",
     "Que el desenlace debe esconder siempre toda la información.",
     "Que escribir consiste únicamente en alterar cronologías."
    ],
    "a": 1
   },
   {
    "q": "¿Qué concepción de técnica defiende la microlectura?",
    "o": [
     "Un procedimiento universal que evita la revisión.",
     "Una serie de reglas que determinan el tema de cualquier obra.",
     "Un mecanismo independiente de las necesidades de cada relato.",
     "Un repertorio de recursos que adquiere sentido según el proyecto narrativo."
    ],
    "a": 3
   },
   {
    "q": "¿Qué afirmación sintetiza mejor el cierre?",
    "o": [
     "Reescribir demuestra que la idea inicial carecía de valor.",
     "La inspiración y la práctica son necesariamente incompatibles.",
     "El trabajo disciplinado puede ampliar la creatividad en lugar de sofocarla.",
     "Las decisiones formales deberían quedar al azar para preservar la originalidad."
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "LIB07-C02",
  "book": "Cartas a un joven novelista",
  "author": "Mario Vargas Llosa",
  "sub": "Quién cuenta, desde dónde y cuándo",
  "text": "Imaginemos una historia sobre una carta desaparecida. Si la cuenta quien la ocultó, el relato puede estar atravesado por excusas y omisiones. Si la narra alguien que desconoce la maniobra, la intriga depende de pistas que esa persona interpreta parcialmente. Si una voz externa revela desde el principio dónde está la carta, el interés ya no consiste tanto en descubrir al responsable como en comprender por qué los demás se equivocan. Los acontecimientos básicos pueden permanecer intactos; cambia, sin embargo, la experiencia de lectura.\n\nEsta diferencia permite comprender por qué el narrador no debe confundirse de manera automática con el autor real. Es una construcción del texto, situada en una relación particular con los hechos. También el tiempo narrativo implica decisiones: una historia puede comenzar por el desenlace, retroceder a sus causas o avanzar de forma fragmentaria. La organización no es un envase neutro colocado alrededor de un contenido ya completo. Contribuye a producir incertidumbre, ironía, empatía y juicios sobre los personajes. En la creación literaria, elegir quién cuenta y en qué orden no es solamente administrar información; es decidir qué clase de verdad provisional podrá construir el lector.",
  "qs": [
   {
    "q": "¿Qué demuestra la variación de narradores en el ejemplo de la carta?",
    "o": [
     "Cambiar de voz obliga necesariamente a modificar todos los acontecimientos.",
     "Una misma secuencia de hechos puede producir experiencias de lectura diferentes.",
     "Toda historia necesita un narrador que conozca el desenlace.",
     "La intriga depende exclusivamente de ocultar la identidad de los personajes."
    ],
    "a": 1
   },
   {
    "q": "¿Por qué no conviene identificar automáticamente al narrador con el autor?",
    "o": [
     "Porque la voz narrativa es una construcción interna con información y posición específicas.",
     "Porque el autor no toma decisiones sobre el relato.",
     "Porque toda narración está contada por un personaje secundario.",
     "Porque la ficción prohíbe cualquier relación con experiencias reales."
    ],
    "a": 0
   },
   {
    "q": "¿Qué efecto produce revelar desde el comienzo el paradero de la carta?",
    "o": [
     "Elimina necesariamente cualquier interés por seguir leyendo.",
     "Convierte todos los personajes en narradores omniscientes.",
     "Impide que el lector compare versiones de los hechos.",
     "Desplaza el interés del descubrimiento hacia la interpretación de errores y motivos."
    ],
    "a": 3
   },
   {
    "q": "¿Qué concepto de tiempo narrativo aparece en el texto?",
    "o": [
     "La obligación de contar los hechos en orden cronológico.",
     "La duración exacta de la lectura medida en minutos.",
     "La posibilidad de reorganizar la secuencia de presentación de los sucesos.",
     "La época histórica en que el libro fue publicado."
    ],
    "a": 2
   },
   {
    "q": "¿Cuál es la tesis acerca de la forma narrativa?",
    "o": [
     "Funciona como un contenedor sin influencia en el sentido.",
     "Contribuye activamente a construir expectativas, interpretaciones y efectos.",
     "Solo interesa a los editores profesionales.",
     "Debe permanecer invisible porque no admite decisiones conscientes."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "LIB07-C03",
  "book": "Cartas a un joven novelista",
  "author": "Mario Vargas Llosa",
  "sub": "El dato escondido y la participación del lector",
  "text": "En una escena, dos personajes interrumpen su conversación cuando aparece una tercera persona. El narrador no explica la causa del silencio, pero registra que uno de ellos guarda rápidamente un papel. Varias páginas después, el lector descubre que el documento contenía información capaz de alterar la relación entre los tres. El silencio inicial adquiere entonces un nuevo significado. La narración no mintió necesariamente: distribuyó los datos para que la comprensión fuera progresiva y para que el lector participara formulando hipótesis.\n\nUna estrategia como el dato escondido puede intensificar la persuasión narrativa, pero su eficacia depende de la coherencia del mundo ficticio. Si la revelación final contradice arbitrariamente todo lo mostrado y no deja indicios que puedan reinterpretarse, la sorpresa corre el riesgo de parecer un truco. En cambio, cuando los detalles anteriores admiten una lectura nueva, el desenlace produce algo más que asombro: transforma retrospectivamente la experiencia del relato. La tarea del escritor consiste en administrar tanto lo que dice como lo que reserva. De esa distribución surge una relación activa con el lector, quien no recibe simplemente una conclusión, sino que reconstruye conexiones y examina sus propias inferencias.",
  "qs": [
   {
    "q": "¿Qué función cumple el papel guardado durante la conversación?",
    "o": [
     "Introducir una información cuya importancia solo se comprende plenamente más adelante.",
     "Probar desde el inicio que todos los personajes conocen lo mismo.",
     "Permitir que el narrador explique de inmediato la causa del conflicto.",
     "Cerrar la historia sin necesidad de interpretaciones posteriores."
    ],
    "a": 0
   },
   {
    "q": "¿Qué diferencia establece entre una sorpresa eficaz y un truco arbitrario?",
    "o": [
     "La sorpresa eficaz elimina las pistas previas para proteger el secreto.",
     "El truco arbitrario siempre aparece al final de una novela extensa.",
     "La revelación eficaz permite reinterpretar indicios anteriores sin destruir la coherencia.",
     "Toda sorpresa equivale a una contradicción de lo ya narrado."
    ],
    "a": 2
   },
   {
    "q": "¿Cuál es el papel atribuido al lector?",
    "o": [
     "Aceptar pasivamente la interpretación entregada al principio.",
     "Formular hipótesis y revisar conexiones a partir de los datos disponibles.",
     "Ignorar cualquier detalle cuyo significado sea provisional.",
     "Conocer necesariamente la información que desconocen los personajes."
    ],
    "a": 1
   },
   {
    "q": "¿Qué expresa la idea de una transformación «retrospectiva»?",
    "o": [
     "Un cambio en el género literario anunciado por la portada.",
     "La desaparición material de los capítulos anteriores.",
     "La obligación de contar el relato en primera persona.",
     "Una revelación tardía modifica el significado de escenas ya leídas."
    ],
    "a": 3
   },
   {
    "q": "¿Qué principio de escritura se infiere del cierre?",
    "o": [
     "Seleccionar y dosificar la información es parte esencial de la construcción narrativa.",
     "Cuanto menos se diga, mayor será siempre la calidad de la novela.",
     "El lector debe quedar excluido de toda elaboración del sentido.",
     "La estructura deja de importar una vez elegido el tema."
    ],
    "a": 0
   }
  ]
 }
];
const XP_PER_CORRECT = 20, BONUS_PERFECT = 20, MAX_LIVES = 3;
const MEDALS = [
 {id:"cachimbo",n:"Cachimbo",i:"🧭",c:50},
 {id:"fuentes",n:"Cazador de Fuentes",i:"🔍",c:150},
 {id:"cubiculos",n:"Navegante de Cubículos",i:"🛡️",c:300},
 {id:"erudito",n:"Erudito UPN",i:"🎓",c:500}
];
// ========================
