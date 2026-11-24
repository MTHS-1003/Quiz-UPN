// ====== EDITA AQUÍ ======
// Banco de preguntas (a = índice de la respuesta correcta, empieza en 0)
const BANK = [
 {q:"¿Está permitido ingresar con comida de la cafetería a la zona de libros?",o:["Sí, si está empaquetada","No, está prohibido","Solo con bebidas"],a:1,e:"Los alimentos dañan el material y atraen plagas."},
 {q:"¿Qué debes hacer antes de citar una fuente en tu trabajo?",o:["Copiarla sin cambios","Verificar que sea confiable","Usar solo la primera de Google"],a:1,e:"Evalúa autor, fecha y editorial."},
 {q:"En la biblioteca, ¿qué ayuda a ubicar un libro en el estante?",o:["El código de clasificación","El color de la portada","El número de páginas"],a:0,e:"El código de clasificación indica el lugar exacto."},
 {q:"¿Qué es el plagio?",o:["Parafrasear y citar","Presentar ideas ajenas como propias","Usar normas APA"],a:1,e:"Siempre da crédito al autor original."},
 {q:"¿Cómo se comportan los usuarios en los cubículos de estudio?",o:["Con silencio y respeto","Con música alta","Con llamadas en voz alta"],a:0,e:"Es un espacio de concentración compartido."},
 {q:"¿Qué es una base de datos académica?",o:["Una red social","Un repositorio de artículos y revistas","Un chat de clase"],a:1,e:"Ahí encuentras investigación revisada por pares."},
 {q:"¿Qué haces si un libro prestado se retrasa?",o:["Nada, no pasa nada","Renovarlo o devolverlo a tiempo","Esconderlo"],a:1,e:"Los retrasos pueden generar sanciones."},
 {q:"¿Para qué sirve el carné universitario en biblioteca?",o:["Para prestar material","Solo para entrar al campus","Para nada"],a:0,e:"Te identifica como usuario del servicio."},
 {q:"Una buena palabra clave de búsqueda es…",o:["Muy general y vaga","Específica del tema","Una oración larga entera"],a:1,e:"Usa términos concretos y sinónimos."}
];
const XP_PER_CORRECT = 20, BONUS_PERFECT = 20, MAX_LIVES = 3;
const MEDALS = [
 {id:"cachimbo",n:"Cachimbo",i:"🧭",c:50},
 {id:"fuentes",n:"Cazador de Fuentes",i:"🔍",c:150},
 {id:"cubiculos",n:"Navegante de Cubículos",i:"🛡️",c:300},
 {id:"erudito",n:"Erudito UPN",i:"🎓",c:500}
];
// ========================
