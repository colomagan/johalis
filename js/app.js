// ======================================================
// Archivo: app.js (completo)
// Mejora: títulos independientes (detailTitle) + NUEVAS SECCIONES OPCIONALES por servicio:
// - bulletsTop (lista justo después de la intro)
// - descNote (párrafo corto intermedio)
// - bulletsMeta (ítems con 📌)
// - benefits (bloque “Beneficios ✨”)
// - infoItems (bloque “Información importante / Educativa”)
// Si un campo está vacío/ausente, no se renderiza.
// ======================================================

// --- Contenidos específicos por servicio (rutas de ejemplo, cámbialas por las reales) ---
const perServiceContent = {
  // Ácido Hialurónico
  // app.js -> perServiceContent -> reemplazar SOLO este objeto:
// app.js -> perServiceContent -> reemplazar SOLO este objeto:
"relleno-ojeras": {
  detailTitle: "Corrección de Ojeras con Ácido Hialurónico – Mirada Descansada y Rejuvenecida",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "./assets/img/servicios/ojeras/1.jpg",

  // Galería (por defecto se muestran hasta 3)
  gallery: [
    "./assets/img/servicios/ojeras/2.jpg",
    "./assets/img/servicios/ojeras/5.jpg",
    "./assets/img/servicios/ojeras/4.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "La corrección de ojeras con ácido hialurónico es un procedimiento mínimamente invasivo que mejora el aspecto de la zona debajo de los ojos, devolviendo frescura y luminosidad a la mirada.",
    "Se utiliza ácido hialurónico premium importado para:",
  ],

  // Lista inmediatamente debajo de la intro
  bulletsTop: [
    "Atenuar hundimientos o surcos bajo los ojos",
    "Mejorar la transición entre el párpado inferior y la mejilla",
    "Aportar hidratación y suavidad a la piel fina de la zona",
  ],

  // Nota intermedia
  descNote:
    "Es ideal para quienes presentan mirada cansada, pérdida de volumen o envejecimiento en el área periocular.",

  // Ítems con 📌 (metadatos)
  bulletsMeta: [
    "📌 Duración del procedimiento: 10 a 15 minutos",
    "📌 Resultados: Inmediatos, con una duración aproximada de 12 a 18 meses",
    "📌 Molestias: Mínimas, con aplicación previa de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Reduce el aspecto de cansancio",
    "✨ Mejora la luminosidad de la mirada",
    "✨ Suaviza surcos y transiciones marcadas",
    "✨ Hidratación profunda de la zona",
    "✨ Procedimiento rápido y ambulatorio",
    "✨ Resultados inmediatos y reversibles",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "El ácido hialurónico es biocompatible y reabsorbible, lo que garantiza seguridad en el tratamiento.",
    "Procedimiento personalizado según la anatomía y necesidades del paciente.",
    "Se aplica anestesia tópica para máxima comodidad.",
    "No requiere reposo: se pueden retomar las actividades diarias de inmediato.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Duración: 12–18 meses",
    "Procedimiento: 10–15 min",
    "Anestesia tópica incluida",
    "Sin reposo",
  ],
},


 // app.js -> perServiceContent -> reemplazar SOLO este objeto:
// app.js -> perServiceContent -> reemplazar SOLO este objeto:
"diseño-labios": {
  detailTitle: "Diseño de Labios con Ácido Hialurónico – Volumen y Definición Natural",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "./assets/img/servicios/labios/2.jpg",

  // Galería (se muestran hasta 3 por defecto)
  gallery: [
    "./assets/img/servicios/labios/3.jpg",
    "./assets/img/servicios/labios/5.jpg",
    "./assets/img/servicios/labios/7.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "El diseño de labios con ácido hialurónico es un procedimiento mínimamente invasivo que permite mejorar el volumen, la forma y la hidratación de los labios manteniendo un acabado natural y armónico.",
    "Se utiliza ácido hialurónico premium importado para:",
  ],

  // Lista justo debajo de la intro
  bulletsTop: [
    "Aumentar volumen de forma equilibrada",
    "Definir y realzar el contorno",
    "Mejorar la simetría",
    "Aportar hidratación profunda",
  ],

  // Nota intermedia
  descNote:
    "Es un tratamiento rápido, seguro y con resultados inmediatos, ideal para quienes buscan embellecer tus labios sin perder naturalidad.",

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 10 a 15 minutos",
    "📌 Resultados: Inmediatos, con una duración aproximada de 8 a 12 meses",
    "📌 Molestias: Mínimas, gracias a la aplicación previa de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Aumenta el volumen de forma natural",
    "✨ Define el contorno labial",
    "✨ Hidrata y rejuvenece la piel de los labios",
    "✨ Mejora la simetría",
    "✨ Procedimiento rápido y ambulatorio",
    "✨ Resultados inmediatos y reversibles",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "El ácido hialurónico es biocompatible y reabsorbible, lo que significa que el cuerpo lo asimila de forma segura con el tiempo.",
    "El tratamiento es personalizado según la forma y proporciones faciales de cada paciente.",
    "El procedimiento es prácticamente indoloro gracias a la anestesia tópica.",
    "No requiere reposo: podés retomar tus actividades inmediatamente.",
    "Se recomienda evitar bebidas calientes, exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Duración estimada: 8–12 meses",
    "Anestesia tópica incluida",
    "Evaluación fotográfica previa",
    "Plan de retoque opcional",
  ],
},



  // >>> RINOMODELACIÓN (con nuevas secciones según tu pedido)
 // app.js -> perServiceContent -> reemplazar SOLO este objeto:
// app.js -> perServiceContent -> reemplazar SOLO este objeto:
"rinomodelacion": {
  detailTitle: "Rinomodelación con Ácido Hialurónico – Resultados Naturales sin Cirugía",

  // 2️⃣ Imagen destacada (antes/después o portada)
  mainImage: "./assets/img/servicios/rinomodelacion/1.jpg",

  // 4️⃣ Imagen secundaria (y una extra opcional)
  gallery: [
    "./assets/img/servicios/rinomodelacion/5.jpg",         // destacada
    "./assets/img/servicios/rinomodelacion/3.jpg",// secundaria (artística/ilustrativa)
    "./assets/img/servicios/rinomodelacion/4.jpg"           // extra
  ],

  // 3️⃣ Descripción (intro en dos párrafos)
  description: [
    "La rinomodelación es un procedimiento mínimamente invasivo que permite mejorar la forma y armonía de la nariz sin necesidad de cirugía.",
    "Se realiza con ácido hialurónico premium importado para:",
  ],

  // Lista inmediata debajo de la intro
  bulletsTop: [
    "Corregir pequeñas imperfecciones",
    "Levantar la punta",
    "Suavizar la giba o huesito del dorso nasal",
  ],

  // Nota intermedia
  descNote:
    "Es un tratamiento rápido, seguro y con resultados inmediatos, ideal para quienes buscan un cambio sutil pero notorio.",

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 10 a 15 minutos",
    "📌 Resultados: Inmediatos, duran aprox. 12 a 18 meses",
    "📌 Molestias: Mínimas, con aplicación previa de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // 5️⃣ Beneficios
  benefits: [
    "✨ Corrige imperfecciones sin cirugía",
    "✨ Levanta y perfila la punta de la nariz",
    "✨ Suaviza la giba o huesito",
    "✨ Procedimiento rápido y ambulatorio",
    "✨ No requiere reposo",
    "✨ Resultados naturales y reversibles",
  ],

  // 6️⃣ Información importante / Educativa
  infoTitle: "Información importante / Educativa (Bloque para generar confianza)",
  infoItems: [
    "El ácido hialurónico es biocompatible y reabsorbible, por lo que el cuerpo lo asimila de forma segura.",
    "Tratamiento personalizado según la anatomía facial de cada paciente.",
    "Procedimiento prácticamente indoloro gracias a la anestesia tópica.",
    "Resultados reversibles, para mayor seguridad en pacientes nuevos.",
    "Evitar sol, maquillaje y ejercicio intenso durante 24 hs posteriores.",
  ],

  // (Opcional) Features técnicas
  features: [
    "Duración: 12–18 meses",
    "No requiere quirófano",
    "Evaluación de perfil",
    "Seguimiento post-procedimiento",
  ],
},



 // app.js -> perServiceContent -> reemplazar SOLO este objeto:
"relleno-pomulos": {
  detailTitle: "Relleno de Pómulos con Ácido Hialurónico – Efecto Lifting y Definición",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "/assets/services/pomulos/portada.jpg",

  // Galería (por defecto se muestran hasta 3)
  gallery: [
    "/assets/services/pomulos/portada.jpg",
    "/assets/services/pomulos/antes-despues-1.jpg",
    "/assets/services/pomulos/artistica-o-procedimiento.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "El relleno de pómulos con ácido hialurónico es un procedimiento mínimamente invasivo que repone el volumen malar, genera un efecto lifting sin cirugía y mejora la proyección del tercio medio facial.",
    "Se utiliza ácido hialurónico premium importado para:",
  ],

  // Lista inmediatamente debajo de la intro
  bulletsTop: [
    "Recuperar y proyectar el volumen malar",
    "Elevar y definir el tercio medio (efecto lifting)",
    "Suavizar el surco nasogeniano y transiciones marcadas",
    "Mejorar la simetría y el contorno del arco cigomático",
  ],

  // Nota intermedia
  descNote:
    "Ideal para pérdida de volumen, flacidez leve a moderada y rostros que buscan definición en pómulos con resultados naturales.",

  // Ítems con 📌 (metadatos)
  bulletsMeta: [
    "📌 Duración del procedimiento: 15 a 30 minutos",
    "📌 Resultados: Inmediatos, con una duración aproximada de 12 a 18 meses",
    "📌 Molestias: Mínimas, gracias a la aplicación previa de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Efecto lifting sin cirugía",
    "✨ Mejora la proyección del tercio medio",
    "✨ Suaviza el surco nasogeniano",
    "✨ Define y armoniza los pómulos",
    "✨ Procedimiento rápido y ambulatorio",
    "✨ Resultados naturales y reversibles",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "El ácido hialurónico es biocompatible y reabsorbible, seguro para el organismo.",
    "Tratamiento personalizado según la anatomía y proporciones faciales.",
    "Procedimiento prácticamente indoloro gracias a la anestesia tópica.",
    "No requiere reposo: podés retomar actividades de inmediato.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas. Puede presentarse leve inflamación o pequeños hematomas transitorios.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Duración: 12–18 meses",
    "Resultados naturales",
    "Plan por etapas disponible",
    "Baja inflamación",
  ],
},

// app.js -> perServiceContent -> reemplazar SOLO este objeto:
"contorno-mandibular": {
  detailTitle: "Contorno Mandibular con Ácido Hialurónico – Definición y Armonía Facial",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "./assets/img/servicios/contorno_mandibular/1.jpg",

  // Galería (por defecto se muestran hasta 3)
  gallery: [
    "./assets/img/servicios/contorno_mandibular/2.jpg",
    "./assets/img/servicios/contorno_mandibular/3.jpg",
    "./assets/img/servicios/contorno_mandibular/4.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "El contorno mandibular con ácido hialurónico es un procedimiento mínimamente invasivo que permite definir y realzar la línea mandibular, aportando un aspecto más armónico y estilizado al rostro.",
    "Se utiliza ácido hialurónico premium importado para:",
  ],

  // Lista inmediatamente debajo de la intro
  bulletsTop: [
    "Marcar y definir el ángulo mandibular",
    "Mejorar la simetría facial",
    "Aportar estructura y soporte en la zona inferior del rostro",
  ],

  // Nota intermedia (consideraciones de jeringas y costos)
  descNote:
    "Para lograr resultados óptimos, el tratamiento requiere mínimo de 6 a 8 jeringas en la mayoría de los casos, mientras que en hombres puede necesitarse hasta 12 jeringas debido a la estructura ósea y al resultado buscado. Por este motivo, el costo final se determina tras la evaluación médica, en función de la cantidad de producto necesaria y los objetivos del paciente.",

  // Ítems con 📌 (metadatos)
  bulletsMeta: [
    "📌 Duración del procedimiento: 45 minutos",
    "📌 Resultados: Inmediatos, con una duración aproximada de 12 a 18 meses",
    "📌 Molestias: Mínimas, con aplicación previa de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Define y realza la línea mandibular",
    "✨ Mejora la simetría y armonía del rostro",
    "✨ Aporta un aspecto más estilizado",
    "✨ Procedimiento rápido y ambulatorio",
    "✨ No requiere reposo",
    "✨ Resultados inmediatos y reversibles",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "El ácido hialurónico es biocompatible y reabsorbible, seguro para el organismo.",
    "El tratamiento es personalizado según la estructura y proporciones faciales de cada paciente.",
    "Procedimiento prácticamente indoloro gracias a la anestesia tópica.",
    "No requiere reposo: se pueden retomar actividades de inmediato.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas.",
  ],

  // Features técnicas (opcional)
  features: [
    "Duración: 12–18 meses",
    "Procedimiento: 45 min",
    "Anestesia tópica incluida",
    "Seguimiento post-procedimiento",
  ],
},



  // app.js -> perServiceContent -> reemplazar SOLO este objeto:
// app.js -> perServiceContent -> reemplazar SOLO este objeto:
"proyeccion-menton": {
  detailTitle: "Proyección de Mentón con Ácido Hialurónico – Perfil Armónico y Definido",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "./assets/img/servicios/proyeccion_de_menton/1.jpg",

  // Galería (por defecto se muestran hasta 3)
  gallery: [
    "./assets/img/servicios/proyeccion_de_menton/3.jpg",
    "./assets/img/servicios/proyeccion_de_menton/2.jpg",
    "./assets/img/servicios/proyeccion_de_menton/4.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "La proyección de mentón con ácido hialurónico es un procedimiento mínimamente invasivo que permite mejorar el equilibrio y la armonía del perfil facial sin necesidad de cirugía.",
    "Se utiliza ácido hialurónico premium importado para:",
  ],

  // Lista inmediatamente debajo de la intro
  bulletsTop: [
    "Aumentar la proyección del mentón",
    "Mejorar el equilibrio entre frente, nariz y barbilla",
    "Definir el contorno mandibular en la zona anterior",
  ],

  // Nota intermedia
  descNote:
    "Es ideal para quienes buscan perfiles más definidos, corregir retroceso del mentón o suavizar desproporciones faciales.",

  // Ítems con 📌 (metadatos)
  bulletsMeta: [
    "📌 Los costos dependerán de la evaluación ya que mínimamente se requieren 2 jeringas de ácido hialurónico.",
    "📌 Duración del procedimiento: 10 a 15 minutos",
    "📌 Resultados: Inmediatos, con una duración aproximada de 12 a 18 meses",
    "📌 Molestias: Mínimas, gracias a la aplicación previa de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Mejora la proyección del mentón",
    "✨ Equilibra las proporciones faciales",
    "✨ Define el contorno mandibular",
    "✨ Procedimiento rápido y ambulatorio",
    "✨ No requiere reposo",
    "✨ Resultados inmediatos y reversibles",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "El ácido hialurónico es biocompatible y reabsorbible, seguro para el organismo.",
    "Tratamiento personalizado según la estructura y proporciones faciales.",
    "Procedimiento prácticamente indoloro gracias a la anestesia tópica.",
    "No requiere reposo: se pueden retomar actividades de inmediato.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Duración: 12–18 meses",
    "Procedimiento: 10–15 min",
    "Anestesia tópica incluida",
    "Control a los 15 días",
  ],

  // (Opcional) CTA: se muestra sólo si implementaste el render de CTA
  // cta: { label: "Quiero un perfil más armónico", href: "https://wa.me/XXXXXXXXXXX?text=Hola%20quiero%20mi%20evaluaci%C3%B3n%20para%20proyecci%C3%B3n%20de%20ment%C3%B3n" },
},

// app.js -> perServiceContent -> NUEVO OBJETO
"armonizacion-facial": {
  detailTitle: "Armonización Facial (Full Face) – Equilibrio y Belleza en Todo el Rostro",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "./assets/img/servicios/armonizacion_facial_o_full_fase/1.jpg",

  // Galería (se muestran hasta 3 por defecto)
  gallery: [
    "./assets/img/servicios/armonizacion_facial_o_full_fase/2.jpg",
    "./assets/img/servicios/armonizacion_facial_o_full_fase/3.jpg",
    "./assets/img/servicios/armonizacion_facial_o_full_fase/4.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "La armonización facial, también conocida como Full Face, es un tratamiento integral y personalizado que busca equilibrar las proporciones y realzar la belleza natural del rostro mediante la combinación estratégica de técnicas y productos.",
    "Se utiliza ácido hialurónico premium importado y, según el caso, también bioestimuladores de colágeno y/o toxina botulínica, para:",
  ],

  // Lista inmediatamente debajo de la intro
  bulletsTop: [
    "Proyectar y definir mentón",
    "Marcar contorno mandibular",
    "Realzar pómulos",
    "Corregir ojeras",
    "Mejorar perfil nasal (rinomodelación)",
    "Suavizar arrugas dinámicas",
  ],

  // Nota intermedia (incluye el párrafo de enfoque global + el bloque de 'Cantidad de producto y costo')
  descNote:
    "Este procedimiento aborda el rostro de manera global, respetando las proporciones y características únicas de cada paciente para lograr un resultado armónico, natural y rejuvenecido.\n\nCantidad de producto y costo: El tratamiento requiere mínimo 8 jeringas de ácido hialurónico, y en hombres o casos de mayor estructura facial, puede necesitarse hasta 12 o más jeringas. La cantidad de producto también puede variar si el plan incluye bioestimuladores de colágeno y/o toxina botulínica, por lo que el costo final se determina tras la evaluación médica, considerando todas las zonas a tratar y los materiales necesarios para lograr el resultado buscado.",

  // Ítems con 📌 (metadatos)
  bulletsMeta: [
    "📌 Duración del procedimiento: 60 a 90 minutos",
    "📌 Resultados: Inmediatos, con duración aproximada de 12 a 18 meses (según zonas tratadas y productos utilizados)",
    "📌 Molestias: Mínimas, gracias a la aplicación previa de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Rejuvenecimiento integral del rostro",
    "✨ Equilibrio y proporción en todas las facciones",
    "✨ Realce de puntos clave de belleza",
    "✨ Procedimiento personalizado",
    "✨ Resultados inmediatos y reversibles",
    "✨ No requiere reposo",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "El ácido hialurónico es biocompatible y reabsorbible, lo que garantiza seguridad.",
    "Procedimiento personalizado y planificado tras evaluación médica.",
    "Posible combinación con bioestimuladores y toxina botulínica para optimizar resultados.",
    "Procedimiento prácticamente indoloro gracias a anestesia tópica.",
    "Se recomienda evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Duración: 12–18 meses",
    "Procedimiento: 60–90 min",
    "Combinable con bioestimuladores y toxina",
    "Sin reposo",
  ],

  // (Opcional) CTA si ya implementaste el render de CTA
  // cta: {
  //   label: "Quiero mi evaluación para Armonización Facial",
  //   href: "https://wa.me/XXXXXXXXXXX?text=Hola%20quiero%20mi%20evaluaci%C3%B3n%20Full%20Face",
  // },
},
  // app.js -> perServiceContent -> reemplazar 
  "harmonyca": {
    detailTitle: "HarmonyCa – Soporte + Bioestimulación en un Solo Paso",
    mainImage: "/assets/services/harmonyca/main.jpg",
    gallery: [
      "/assets/services/harmonyca/1.jpg",
      "/assets/services/harmonyca/2.jpg",
    ],
    description: [
      "Relleno híbrido: soporte estructural + bioestimulación simultánea.",
      "Mejora textura y contorno con enfoque balanceado.",
    ],
    features: [
      "Resultados equilibrados",
      "Revisión a 4–6 semanas",
      "Plan por zonas",
      "Mínimo downtime",
    ],
  },

  // Toxina Botulínica
 // app.js -> perServiceContent -> reemplazar SOLO este objeto:
"hiperhidrosis": {
  detailTitle: "Toxina Botulínica para Hiperhidrosis Axilar – Control del Exceso de Sudoración",

  // Imagen principal (portada / antes-después / artística)
   // Imagen principal (portada / antes-después / artística)
   mainImage: "./assets/img/servicios/bruxismo_hiperhidrosis/2.jpg",

   // Galería (se muestran hasta 3 por defecto)
   gallery: [
     "./assets/img/servicios/bruxismo_hiperhidrosis/1.jpg",
     "./assets/img/servicios/bruxismo_hiperhidrosis/4.jpg",
     "./assets/img/servicios/bruxismo_hiperhidrosis/3.jpg",
   ],

  // Intro (dos párrafos)
  description: [
    "La aplicación de toxina botulínica en las axilas es un tratamiento altamente efectivo para reducir la sudoración excesiva (hiperhidrosis), bloqueando temporalmente la actividad de las glándulas sudoríparas responsables del exceso de transpiración.",
    "Este procedimiento brinda comodidad y seguridad a quienes sufren de sudoración abundante, mejorando la calidad de vida y evitando la incomodidad social y personal.",
  ],

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 15 a 20 minutos",
    "📌 Resultados: Se aprecian entre los 3 y 7 días posteriores",
    "📌 Duración del efecto: Aproximadamente 6 a 9 meses",
    "📌 Molestias: Mínimas, pudiendo aplicarse anestesia tópica para mayor confort",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Reduce la sudoración excesiva en axilas",
    "✨ Mejora la seguridad y confianza personal",
    "✨ Evita manchas de sudor en la ropa",
    "✨ Procedimiento rápido y ambulatorio",
    "✨ Resultados duraderos y naturales",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "Tratamiento personalizado según el grado de hiperhidrosis.",
    "La toxina botulínica es un medicamento seguro y aprobado por las autoridades sanitarias.",
    "Se recomienda evitar exposición solar intensa, ejercicio físico y uso de desodorantes con alcohol durante las primeras 24 horas posteriores.",
    "El efecto es temporal y reversible, pudiendo repetirse para mantener resultados óptimos.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Duración: 6–9 meses",
    "Procedimiento: 15–20 min",
    "Anestesia tópica opcional",
    "Sin reposo",
  ],

  // (Opcional) CTA si ya implementaste el render de CTA
  // cta: {
  //   label: "Quiero tratar mi hiperhidrosis",
  //   href: "https://wa.me/XXXXXXXXXXX?text=Hola%20quiero%20tratar%20mi%20hiperhidrosis%20axilar",
  // },
},

  
  // app.js -> perServiceContent -> reemplazar SOLO este objeto:
"tercio-superior": {
  detailTitle: "Toxina Botulínica – Tercio Superior del Rostro",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "/assets/services/tercio-superior/portada.jpg",

  // Galería (se muestran hasta 3 por defecto)
  gallery: [
    "/assets/services/tercio-superior/portada.jpg",
    "/assets/services/tercio-superior/antes-despues-1.jpg",
    "/assets/services/tercio-superior/artistica-o-procedimiento.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "La aplicación de toxina botulínica en el tercio superior del rostro es un procedimiento seguro y eficaz para suavizar las arrugas dinámicas que aparecen con la gesticulación, logrando una apariencia más descansada y rejuvenecida.",
    "Este tratamiento actúa relajando de forma temporal los músculos responsables de la formación de líneas de expresión, sin alterar la naturalidad del rostro.",
  ],

  // Zonas tratadas (lista inmediatamente debajo de la intro)
  bulletsTop: [
    "Frente",
    "Entrecejo",
    "Patas de gallo",
  ],

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 10 a 15 minutos",
    "📌 Resultados: Se aprecian a partir de las 48–72 horas, con efecto máximo a los 15 días",
    "📌 Duración del efecto: Aproximadamente 4 a 6 meses",
    "📌 Molestias: Mínimas, sin necesidad de anestesia en la mayoría de los casos",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Suaviza las arrugas de expresión",
    "✨ Previene la formación de nuevas líneas",
    "✨ Aspecto descansado y rejuvenecido",
    "✨ Procedimiento rápido y ambulatorio",
    "✨ Resultados naturales",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "Procedimiento personalizado según la fuerza y movilidad de los músculos faciales.",
    "La toxina botulínica es un medicamento seguro y aprobado por las autoridades sanitarias.",
    "Se recomienda evitar exposición solar intensa, ejercicio físico y masajes faciales durante las primeras 24 horas posteriores.",
    "El efecto es temporal y reversible, por lo que se puede ajustar la dosis en futuras aplicaciones para mantener resultados naturales.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Efecto máximo a los 15 días",
    "Duración: 4–6 meses",
    "Sin reposo",
    "Ajuste de dosis en controles",
  ],
},

// app.js -> perServiceContent -> reemplazar SOLO este objeto:
"bruxismo": {
  detailTitle: "Toxina Botulínica para Bruxismo – Alivio de Tensión y Dolor Mandibular",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "./assets/img/servicios/bruxismo_hiperhidrosis/2.jpg",

  // Galería (se muestran hasta 3 por defecto)
  gallery: [
    "./assets/img/servicios/bruxismo_hiperhidrosis/1.jpg",
    "./assets/img/servicios/bruxismo_hiperhidrosis/4.jpg",
    "./assets/img/servicios/bruxismo_hiperhidrosis/3.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "El tratamiento con toxina botulínica para bruxismo consiste en relajar los músculos maseteros, responsables del apretamiento o rechinamiento involuntario de los dientes, especialmente durante la noche.",
    "Este procedimiento ayuda a disminuir el dolor mandibular, reducir la tensión en la zona y prevenir el desgaste dental, mejorando tanto la función como la estética facial.",
  ],

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 10 a 15 minutos",
    "📌 Resultados: Se comienzan a notar a los 4–7 días, con efecto máximo a las 2 semanas",
    "📌 Duración del efecto: Aproximadamente 4 a 6 meses",
    "📌 Molestias: Mínimas, sin necesidad de anestesia en la mayoría de los casos",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Disminuye el dolor y la tensión mandibular",
    "✨ Reduce el desgaste dental causado por el bruxismo",
    "✨ Mejora la forma y armonía del tercio inferior del rostro",
    "✨ Procedimiento rápido y ambulatorio",
    "✨ Resultados naturales y progresivos",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "Procedimiento personalizado según la fuerza muscular y el grado de bruxismo.",
    "La toxina botulínica es segura y aprobada por autoridades sanitarias para uso estético y terapéutico.",
    "Se recomienda evitar exposición solar intensa, ejercicio físico y masajes en la zona durante las primeras 24 horas posteriores.",
    "El efecto es temporal y reversible, pudiendo repetirse periódicamente para mantener resultados y prevenir recaídas.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Efecto máximo a las 2 semanas",
    "Duración: 4–6 meses",
    "Sin reposo",
    "Aplicación precisa en maseteros",
  ],
},

// app.js -> perServiceContent -> reemplazar SOLO este objeto:
"sculptra": {
  detailTitle: "Sculptra® – Bioestimulación de Colágeno para Rejuvenecimiento Natural",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "./assets/img/servicios/sculptra/1.jpg",

  // Galería (se muestran hasta 3 por defecto)
  gallery: [
    "/assets/services/sculptra/portada.jpg",
    "/assets/services/sculptra/antes-despues-1.jpg",
    "/assets/services/sculptra/artistica-o-procedimiento.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "Sculptra® es un bioestimulador de colágeno a base de ácido poli-L-láctico, diseñado para estimular la producción natural de colágeno en la piel y mejorar progresivamente su firmeza, elasticidad y densidad.",
    "A diferencia de los rellenos, Sculptra® no aporta volumen inmediato, sino que actúa desde el interior, regenerando la estructura de la piel y ofreciendo resultados duraderos y naturales.",
  ],

  // Zonas de aplicación (lista inmediatamente debajo de la intro)
  bulletsTop: [
    "Rostro (mejillas, línea mandibular, sienes)",
    "Cuello y escote",
    "Brazos",
    "Glúteos",
    "Abdomen",
    "Muslos",
    "Manos",
  ],

  // Nota intermedia (indicaciones/para qué es ideal)
  descNote:
    "Es ideal para tratar flacidez facial y corporal, la pérdida de volumen por envejecimiento y la mejora de la calidad y textura de la piel en distintas áreas.",

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 20 a 30 minutos",
    "📌 Resultados: Progresivos, visibles a partir de las 6–8 semanas",
    "📌 Duración del efecto: Hasta 2 años",
    "📌 Molestias: Mínimas, con posible uso de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefitsTitle: "Beneficios",
  benefits: [
    "✨ Estimula la producción natural de colágeno",
    "✨ Rejuvenecimiento progresivo y natural",
    "✨ Mejora la firmeza y elasticidad de la piel",
    "✨ Versatilidad para tratar múltiples zonas",
    "✨ Resultados de larga duración",
    "✨ Procedimiento rápido y ambulatorio",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "Sculptra® es biocompatible y biodegradable, seguro para el organismo.",
    "Tratamiento personalizado según la zona y el grado de flacidez o pérdida de volumen.",
    "Se recomienda un protocolo de 2 a 3 sesiones, espaciadas cada 30–45 días.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas posteriores a la aplicación.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Efecto visible 6–8 semanas",
    "Duración: hasta 24 meses",
    "2–3 sesiones (30–45 días)",
    "Sin reposo",
  ],

  // (Opcional) CTA si ya implementaste el render de CTA
  // cta: {
  //   label: "Quiero mi evaluación para Sculptra®",
  //   href: "https://wa.me/XXXXXXXXXXX?text=Hola%20quiero%20mi%20evaluaci%C3%B3n%20para%20Sculptra",
  // },
},

// app.js -> perServiceContent -> reemplazar SOLO este objeto:
"radiesse": {
  detailTitle: "Radiesse® – Bioestimulación y Efecto Lifting Inmediato",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "/assets/services/radiesse/portada.jpg",

  // Galería (se muestran hasta 3 por defecto)
  gallery: [
    "/assets/services/radiesse/portada.jpg",
    "/assets/services/radiesse/antes-despues-1.jpg",
    "/assets/services/radiesse/artistica-o-procedimiento.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "Radiesse® es un bioestimulador de colágeno a base de hidroxiapatita de calcio, que no solo estimula la producción natural de colágeno, sino que también proporciona un efecto lifting inmediato gracias a su capacidad de aportar soporte y estructura a los tejidos.",
    "Es ideal para pacientes que buscan mejorar la firmeza, redefinir contornos y rejuvenecer la piel de manera progresiva y duradera.",
  ],

  // Zonas de aplicación (lista inmediatamente debajo de la intro)
  bulletsTop: [
    "Rostro (pómulos, contorno mandibular, mentón)",
    "Cuello y escote",
    "Manos",
    "Brazos",
    "Abdomen",
    "Glúteos",
  ],

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 20 a 30 minutos",
    "📌 Resultados: Efecto inmediato de soporte + bioestimulación progresiva visible a las 4–6 semanas",
    "📌 Duración del efecto: Hasta 18–24 meses",
    "📌 Molestias: Mínimas, con posible uso de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Efecto lifting inmediato",
    "✨ Estimula la producción natural de colágeno",
    "✨ Mejora la firmeza y calidad de la piel",
    "✨ Restaura volumen y redefine contornos",
    "✨ Resultados duraderos",
    "✨ Procedimiento rápido y ambulatorio",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "Radiesse® es biocompatible y reabsorbible, seguro para el organismo.",
    "Tratamiento personalizado según zona y necesidades del paciente.",
    "Puede aplicarse diluido para mejorar la calidad de la piel o sin diluir para aportar soporte y volumen.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas posteriores a la aplicación.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Efecto inmediato + bioestimulación",
    "Duración: 18–24 meses",
    "Dilución opcional (skin quality)",
    "Sin reposo",
  ],
},

// app.js -> perServiceContent -> NUEVO / REEMPLAZO:
"facetem": {
  detailTitle: "Facetem® – Bioestimulación y Redefinición del Contorno Facial",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "/assets/services/facetem/portada.jpg",

  // Galería (se muestran hasta 3 por defecto)
  gallery: [
    "/assets/services/facetem/portada.jpg",
    "/assets/services/facetem/antes-despues-1.jpg",
    "/assets/services/facetem/artistica-o-procedimiento.jpg",
  ],

  // Intro (dos párrafos)
  description: [
    "Facetem® es un tratamiento de bioestimulación a base de hidroxiapatita de calcio formulado especialmente para redefinir el contorno facial y estimular la producción natural de colágeno, logrando un efecto tensor y rejuvenecedor de manera progresiva.",
    "Combina el efecto lifting inmediato que aporta soporte a los tejidos con la mejora gradual de la firmeza y calidad de la piel gracias a la bioestimulación.",
  ],

  // Zonas de aplicación (lista inmediatamente debajo de la intro)
  bulletsTop: [
    "Línea mandibular",
    "Mentón",
    "Pómulos",
    "Cuello",
  ],

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 20 a 30 minutos",
    "📌 Resultados: Efecto inmediato de soporte + bioestimulación progresiva visible a las 4–6 semanas",
    "📌 Duración del efecto: Hasta 18–24 meses",
    "📌 Molestias: Mínimas, con posible uso de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Redefine el contorno mandibular",
    "✨ Estimula la producción de colágeno",
    "✨ Mejora la firmeza y elasticidad de la piel",
    "✨ Efecto tensor inmediato y progresivo",
    "✨ Resultados duraderos",
    "✨ Procedimiento rápido y ambulatorio",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "Facetem® es biocompatible y reabsorbible, seguro para el organismo.",
    "Tratamiento personalizado según la anatomía y objetivos del paciente.",
    "Se puede combinar con otros procedimientos de armonización facial para potenciar resultados.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas posteriores.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Efecto inmediato + bioestimulación",
    "Duración: 18–24 meses",
    "Versátil (contorno/mentón/pómulos/cuello)",
    "Sin reposo",
  ],

  // (Opcional) CTA si ya implementaste render de CTA
  // cta: {
  //   label: "Quiero redefinir mi contorno facial",
  //   href: "https://wa.me/XXXXXXXXXXX?text=Hola%20quiero%20redefinir%20mi%20contorno%20facial%20con%20Facetem",
  // },
},

// app.js -> perServiceContent -> reemplazar SOLO este objeto:
"harmonyca": {
  detailTitle: "HarmonyCa® – Lifting Inmediato y Mejora de la Calidad de la Piel",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "/assets/services/harmonyca/portada.jpg",

  // Galería (se muestran hasta 3 por defecto)
  gallery: [
    "/assets/services/harmonyca/portada.jpg",
    "/assets/services/harmonyca/antes-despues-1.jpg",
    "/assets/services/harmonyca/artistica-o-procedimiento.jpg",
  ],

  // Intro (párrafos)
  description: [
    "HarmonyCa® es un innovador bioestimulador híbrido que combina hidroxiapatita de calcio con ácido hialurónico, logrando un doble efecto:",
    "Efecto lifting inmediato gracias al soporte estructural del ácido hialurónico.",
    "Bioestimulación progresiva de colágeno a largo plazo gracias a la hidroxiapatita de calcio.",
    "Este tratamiento está diseñado para quienes buscan rejuvenecer, redefinir y mejorar la calidad de la piel en una sola sesión.",
  ],

  // Zonas de aplicación (lista inmediatamente debajo de la intro)
  bulletsTop: [
    "Contorno mandibular",
    "Mentón",
    "Pómulos",
    "Mejillas",
    "Áreas de flacidez facial moderada",
  ],

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 20 a 30 minutos",
    "📌 Resultados: Efecto tensor inmediato + bioestimulación progresiva visible a las 4–6 semanas",
    "📌 Duración del efecto: Hasta 18–24 meses",
    "📌 Molestias: Mínimas, con posible uso de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Combina ácido hialurónico y bioestimulación en un solo tratamiento",
    "✨ Efecto lifting inmediato y duradero",
    "✨ Estimula la producción natural de colágeno",
    "✨ Mejora la firmeza y la calidad de la piel",
    "✨ Procedimiento rápido y ambulatorio",
    "✨ Resultados naturales y progresivos",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "HarmonyCa® es biocompatible y reabsorbible, seguro para el organismo.",
    "Tratamiento personalizado según la estructura facial y objetivos del paciente.",
    "Ideal para flacidez leve a moderada y pérdida de definición en contornos.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas posteriores.",
  ],

  // (Opcional) Features técnicas para la grilla final
  features: [
    "Híbrido CaHA + AH",
    "Efecto inmediato + bioestimulación",
    "Duración: 18–24 meses",
    "Sin reposo",
  ],
},
// app.js -> perServiceContent -> NUEVO OBJETO:
"skimboosters": {
  detailTitle: "Skinboosters – Hidratación Profunda, Luminosidad y Revitalización de la Piel",

  // Imagen principal
  mainImage: "./assets/img/servicios/skimbooster/1.jpg",

  // Galería
  gallery: [
    "./assets/img/servicios/skimbooster/2.jpg",
    "./assets/img/servicios/skimbooster/3.jpg",
    "./assets/img/servicios/skimbooster/4.jpg",
  ],

  // Descripción (párrafos)
  description: [
    "Los Skinboosters son tratamientos inyectables a base de ácido hialurónico de baja reticulación y complejos nutritivos, diseñados para hidratar profundamente, mejorar la textura y devolver la luminosidad natural a la piel.",
    "A diferencia de los rellenos, los Skinboosters no buscan aportar volumen, sino regenerar y revitalizar la piel desde el interior, estimulando también la producción natural de colágeno y elastina.",
    "Son ideales para pacientes que desean una piel más sana, luminosa y rejuvenecida sin cambios drásticos en sus rasgos.",
  ],

  // Nota intermedia (tipos disponibles)
  descNote:
    "Tipos de Skinboosters disponibles — Restylane® Skinboosters: hidratación profunda y mejora de la elasticidad (ideal para rostro, cuello, escote y manos) con resultados progresivos y duraderos. SkinVive™: ácido hialurónico ultrapuro que suaviza textura y aporta luminosidad, con mejora visible desde la primera sesión (perfecto para rostro y mejillas). NCTF® (Filorga): complejo revitalizante con ácido hialurónico y más de 50 ingredientes activos (vitaminas, minerales, aminoácidos y antioxidantes) que estimula la regeneración celular y mejora la densidad cutánea (indicado para rostro, cuello, escote y manos).",

  // Zonas de aplicación (lista justo debajo de la intro)
  bulletsTop: [
    "Rostro completo",
    "Cuello",
    "Escote",
    "Manos",
  ],

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 20 a 30 minutos",
    "📌 Resultados: Progresivos, visibles desde la primera sesión",
    "📌 Duración del efecto: 6 a 9 meses (según producto y protocolo)",
    "📌 Molestias: Mínimas, con posible uso de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Hidratación profunda y prolongada",
    "✨ Piel más luminosa, suave y elástica",
    "✨ Estimulación del colágeno y elastina",
    "✨ Reducción de líneas finas",
    "✨ Tratamiento versátil para múltiples zonas",
    "✨ Procedimiento rápido, seguro y ambulatorio",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "La elección del Skinbooster se realiza tras evaluación médica, considerando el tipo y estado de la piel.",
    "Se recomienda un protocolo inicial de 2 a 3 sesiones, espaciadas 30 días entre sí, seguido de mantenimiento.",
    "Uso obligatorio de protector solar tras el procedimiento.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas posteriores.",
  ],

  // Indicaciones principales (aparecen como lista final con checks)
  features: [
    "Piel deshidratada y apagada",
    "Textura irregular y falta de luminosidad",
    "Arrugas finas",
    "Pérdida de elasticidad",
    "Envejecimiento cutáneo temprano",
  ],
},
  // Aparatología
 // app.js -> perServiceContent -> reemplazar SOLO este objeto:
"ultraformer-iii": {
  detailTitle: "Ultraformer III – Lifting, Tensado y Reducción de Grasa Localizada sin Cirugía",

  // Imagen principal (portada / antes-después / artística)
  mainImage: "./assets/img/servicios/ultraformer/1.jpg",

  // Galería (se muestran hasta 3 por defecto)
  gallery: [
    "./assets/img/servicios/ultraformer/4.jpg",
    "./assets/img/servicios/ultraformer/2.jpg",
    "./assets/img/servicios/ultraformer/3.jpg",
  ],

  // Intro
  description: [
    "Ultraformer III es un tratamiento de ultrasonido micro y macro focalizado (HIFU) diseñado para tensar la piel, estimular la producción de colágeno y reducir grasa localizada en rostro y cuerpo, sin necesidad de cirugía ni tiempo de recuperación.",
    "Su tecnología permite trabajar en diferentes profundidades:",
  ],

  // Micro/Macro + Zonas (facial y corporal)
  bulletsTop: [
    "Microfocalizado: actúa en capas superficiales y medias para mejorar firmeza y elasticidad.",
    "Macrofocalizado: llega a capas profundas, ayuda a reducir grasa localizada y remodelar el contorno.",
    // Zonas de aplicación facial
    "Lifting de cejas y párpados",
    "Mejillas y línea mandibular",
    "Cuello y papada (reduce grasa submentoniana)",
    "Perfilado y definición de contornos faciales",
    // Zonas de aplicación corporal
    "Abdomen (reducción de grasa y tensado)",
    "Brazos (flacidez y grasa localizada)",
    "Muslos internos y externos",
    "Glúteos (efecto lifting y firmeza)",
    "Flancos y espalda baja",
  ],

  // Nota intermedia
  descNote:
    "Este abordaje integral lo convierte en una opción ideal para pacientes que desean rejuvenecimiento, definición de contornos y reducción de flacidez y adiposidad localizada de forma segura y progresiva.",

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 30 a 60 minutos (según zonas tratadas)",
    "📌 Resultados: Progresivos, visibles desde las primeras semanas y máximos a los 90 días",
    "📌 Duración del efecto: 12 a 18 meses (según cuidados, edad y estilo de vida)",
    "📌 Molestias: Mínimas, sin necesidad de anestesia en la mayoría de los casos",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Lifting y tensado sin cirugía",
    "✨ Reducción de grasa localizada en rostro y cuerpo",
    "✨ Estimula la producción natural de colágeno y elastina",
    "✨ Mejora la firmeza y la textura de la piel",
    "✨ Redefine el óvalo facial y los contornos corporales",
    "✨ Procedimiento ambulatorio y seguro",
    "✨ Resultados naturales y progresivos",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "Ultraformer III es un tratamiento no invasivo aprobado por autoridades sanitarias.",
    "Puede combinarse con otros procedimientos estéticos para potenciar resultados (bioestimuladores, ácido hialurónico, toxina botulínica).",
    "Recomendado 1 sesión anual para mantenimiento o más según indicación médica.",
    "Evitar exposición solar directa, saunas y ejercicio intenso durante las primeras 24 horas.",
  ],

  // Indicaciones principales (en la grilla final de features)
  features: [
    "Flacidez leve a moderada en rostro y cuerpo",
    "Papada o grasa submentoniana",
    "Contorno mandibular poco definido",
    "Arrugas y líneas finas",
    "Grasa localizada en abdomen, brazos, muslos o flancos",
    "Mejora de la elasticidad y textura de la piel",
  ],
},
  // app.js -> perServiceContent -> reemplazar SOLO este objeto:
"lumenis-stellar-m22": {
  detailTitle: "Stellar M22 IPL – Luz Pulsada Intensa para Manchas, Rojeces y Rejuvenecimiento de la Piel",

  // Imagen principal (portada / antes-después / equipo)
  mainImage: "./assets/img/servicios/stellar/1.jpg",

  // Galería (se muestran hasta 3 por defecto)
  gallery: [
    "/assets/services/m22/portada.jpg",
    "/assets/services/m22/antes-despues-1.jpg",
    "/assets/services/m22/equipo-o-procedimiento.jpg",
  ],

  // Intro (párrafos)
  description: [
    "Stellar M22 IPL es un tratamiento de luz pulsada intensa diseñado para corregir manchas, unificar el tono y mejorar la textura de la piel, además de estimular la producción natural de colágeno para un aspecto más luminoso y rejuvenecido.",
    "Funciona emitiendo pulsos de luz que penetran de forma controlada en la piel, actuando sobre pigmentos y vasos sanguíneos superficiales, sin dañar el tejido circundante.",
  ],

  // Zonas de aplicación (lista inmediatamente debajo de la intro)
  bulletsTop: [
    "Rostro",
    "Cuello",
    "Escote",
    "Manos",
    "Otras áreas expuestas al sol",
  ],

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración de la sesión: 20 a 40 minutos (dependiendo de la zona)",
    "📌 Resultados: Progresivos, visibles desde la primera sesión",
    "📌 Duración del efecto: Variable según cuidados y número de sesiones",
    "📌 Molestias: Mínimas, con posible enrojecimiento temporal",
    "📌 Tiempo de recuperación: No requiere reposo",
  ],

  // Beneficios
  benefits: [
    "✨ Reduce manchas y pigmentación irregular",
    "✨ Disminuye rojeces y pequeñas venitas",
    "✨ Unifica el tono y mejora la luminosidad",
    "✨ Estimula colágeno para una piel más firme",
    "✨ Tratamiento rápido, seguro y ambulatorio",
  ],

  // Información importante / Educativa
  infoTitle: "Información importante",
  infoItems: [
    "IPL es seguro para diferentes fototipos de piel (previa evaluación médica).",
    "Generalmente se recomienda un protocolo de 3 a 5 sesiones, espaciadas cada 3–4 semanas.",
    "Uso obligatorio de protector solar de amplio espectro después del tratamiento.",
    "Evitar exposición solar directa y calor extremo durante las 48 horas posteriores.",
  ],

  // Indicaciones principales (aparecen en la grilla final)
  features: [
    "Manchas solares y léntigos",
    "Rojeces y vasos sanguíneos finos",
    "Fotoenvejecimiento",
    "Tono desigual de la piel",
    "Piel opaca o apagada",
  ],
},
// app.js -> perServiceContent -> NUEVO OBJETO
"mesoterapia-lipolitica": {
  detailTitle: "Mesoterapia Lipolítica – Reducción de Grasa Localizada y Moldeo Corporal",

  // Imagen principal
  mainImage: "/assets/services/mesoterapia-lipolitica/portada.jpg",

  // Galería (hasta 3)
  gallery: [
    "/assets/services/mesoterapia-lipolitica/portada.jpg",
    "/assets/services/mesoterapia-lipolitica/antes-despues-1.jpg",
    "/assets/services/mesoterapia-lipolitica/artistica-o-procedimiento.jpg",
  ],

  // Intro (párrafos)
  description: [
    "La mesoterapia lipolítica es un tratamiento no quirúrgico que consiste en la aplicación de microinyecciones con principios activos que ayudan a disolver la grasa localizada y mejorar la apariencia de la piel en zonas específicas del cuerpo y rostro.",
    "Estos principios activos actúan rompiendo los depósitos de grasa para que el organismo los elimine de forma natural a través del sistema linfático y metabólico.",
  ],

  // Zonas de aplicación (corporal + facial)
  bulletsTop: [
    // Corporal
    "Abdomen",
    "Cintura y flancos (“rollitos”)",
    "Muslos (cara interna y externa)",
    "Brazos",
    "Glúteos",
    "Rodillas",
    // Facial
    "Papada",
    "Mejillas (bolas de Bichat no quirúrgicas)",
  ],

  // Nota intermedia (ideal + protocolo)
  descNote:
    "Es ideal para pacientes que desean reducir volumen en áreas difíciles de trabajar solo con dieta y ejercicio, y mejorar la definición corporal.\n\nProtocolo de sesiones — Inicial: 4 a 6 sesiones, espaciadas cada 15 días. Mantenimiento: según necesidad y evaluación médica.",

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 20 a 30 minutos",
    "📌 Resultados: Progresivos, visibles a partir de la segunda o tercera sesión",
    "📌 Duración del efecto: Variable según hábitos y estilo de vida",
    "📌 Molestias: Leve ardor o hinchazón temporal en la zona tratada",
    "📌 Tiempo de recuperación: No requiere reposo (posible inflamación y sensibilidad por 24–48 horas)",
  ],

  // Beneficios
  benefits: [
    "✨ Reduce grasa localizada sin cirugía",
    "✨ Mejora la definición corporal y facial",
    "✨ Ayuda a tratar celulitis y flacidez leve",
    "✨ Procedimiento rápido y seguro",
    "✨ No interfiere con la rutina diaria",
  ],

  // Información importante
  infoTitle: "Información importante",
  infoItems: [
    "Requiere evaluación médica previa para determinar el número de sesiones y el producto más adecuado.",
    "Se recomienda acompañar con alimentación saludable y ejercicio para prolongar resultados.",
    "Evitar exposición solar, baños calientes y ejercicio intenso las primeras 24 horas.",
  ],

  // Indicaciones principales (grilla final)
  features: [
    "Grasa localizada resistente a dieta y ejercicio",
    "Reducción de papada",
    "Contorno corporal no invasivo",
    "Celulitis y piel de naranja leve a moderada",
  ],

  // (Opcional) CTA si ya lo renderizás:
  // cta: {
  //   label: "Quiero reducir grasa localizada con Mesoterapia Lipolítica",
  //   href: "https://wa.me/XXXXXXXXXXX?text=Hola%20quiero%20mesoterapia%20lipol%C3%ADtica",
  // },
},

// app.js -> perServiceContent -> NUEVO OBJETO
"enzimas-recombinantes": {
  detailTitle: "Enzimas Recombinantes – Reducción de Grasa Localizada y Fibrosis",

  // Imagen principal
  mainImage: "./assets/img/servicios/enzimas_recombinantes/1.jpg",

  // Galería (hasta 3)
  gallery: [
    "./assets/img/servicios/enzimas_recombinantes/2.jpg",
    "./assets/img/servicios/enzimas_recombinantes/3.jpg",
    "./assets/img/servicios/enzimas_recombinantes/4.jpg",
  ],

  // Intro (párrafos)
  description: [
    "Las enzimas recombinantes son un tratamiento no quirúrgico que utiliza enzimas altamente purificadas y producidas mediante biotecnología, diseñadas para degradar y disolver depósitos de grasa localizada, tratar fibrosis y mejorar la calidad de la piel.",
    "Actúan de forma específica rompiendo las estructuras que retienen grasa o tejido fibroso, permitiendo que el cuerpo las elimine de forma natural.",
  ],

  // Zonas de aplicación (corporal + facial)
  bulletsTop: [
    // Corporal
    "Abdomen",
    "Cintura y flancos",
    "Muslos",
    "Brazos",
    "Glúteos",
    "Espalda baja",
    // Facial
    "Papada",
    "Bolsas de grasa en mejillas",
    "Contorno mandibular",
  ],

  // Nota intermedia (alternativa + protocolo)
  descNote:
    "Son una alternativa segura y eficaz para quienes buscan moldear el contorno facial o corporal sin pasar por el quirófano.\n\nProtocolo de sesiones — Inicial: 3 a 5 sesiones, espaciadas cada 21 a 30 días. Mantenimiento: según necesidad y evaluación médica.",

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 20 a 30 minutos",
    "📌 Resultados: Progresivos, visibles a partir de la segunda o tercera sesión",
    "📌 Duración del efecto: Variable según hábitos y mantenimiento",
    "📌 Molestias: Hinchazón, enrojecimiento o sensibilidad temporal",
    "📌 Tiempo de recuperación: No requiere reposo (posible inflamación por 48–72 horas)",
  ],

  // Beneficios
  benefits: [
    "✨ Reduce grasa localizada de forma no invasiva",
    "✨ Mejora el contorno facial y corporal",
    "✨ Trata fibrosis y cicatrices internas",
    "✨ Favorece el drenaje linfático",
    "✨ Procedimiento ambulatorio y seguro",
  ],

  // Información importante
  infoTitle: "Información importante",
  infoItems: [
    "La selección de zonas y número de sesiones se define tras evaluación médica.",
    "Puede combinarse con otros tratamientos para potenciar resultados (ej. Ultraformer III, mesoterapia lipolítica).",
    "Evitar exposición solar, baños calientes y ejercicio intenso las primeras 48 horas posteriores.",
  ],

  // Indicaciones principales (grilla final)
  features: [
    "Grasa localizada resistente a dieta y ejercicio",
    "Papada y contorno facial desdibujado",
    "Celulitis y fibrosis",
    "Fibrosis post-liposucción",
  ],

  // (Opcional) CTA si lo renderizás:
  // cta: {
  //   label: "Quiero mejorar mi contorno con Enzimas Recombinantes",
  //   href: "https://wa.me/XXXXXXXXXXX?text=Hola%20quiero%20info%20sobre%20enzimas%20recombinantes",
  // },
},

// app.js -> perServiceContent -> NUEVO OBJETO
"pdrn": {
  detailTitle: "PDRN – Terapia con “Esperma de Salmón” para Regeneración y Rejuvenecimiento",

  // Imagen principal
  mainImage: "./assets/img/servicios/pdrn/1.jpg",

  // Galería (hasta 3)
  gallery: [
    "/assets/services/pdrn/portada.jpg",
    "/assets/services/pdrn/antes-despues-1.jpg",
    "/assets/services/pdrn/artistica-o-procedimiento.jpg",
  ],

  // Intro (párrafos)
  description: [
    "El PDRN (PoliDeoxiRiboNucleótidos), conocido popularmente como “esperma de salmón”, es un tratamiento de medicina regenerativa que utiliza ADN purificado extraído de las células reproductoras del salmón para estimular la regeneración celular, mejorar la calidad de la piel y combatir el envejecimiento.",
    "Es un procedimiento seguro, respaldado por estudios científicos, que acelera la reparación de tejidos y potencia la producción natural de colágeno y elastina, logrando una piel más firme, luminosa y saludable.",
  ],

  // Zonas de aplicación
  bulletsTop: [
    "Rostro",
    "Cuello",
    "Escote",
    "Manos",
    "Cicatrices o zonas con daño cutáneo",
  ],

  // Nota intermedia (aclaración + protocolo)
  descNote:
    "El PDRN y el llamado “esperma de salmón” son el mismo tratamiento (término coloquial). Protocolo sugerido: 3 a 4 sesiones, cada 2 a 4 semanas; luego mantenimiento según evaluación.",

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 20 a 30 minutos",
    "📌 Resultados: Progresivos, visibles desde las primeras semanas",
    "📌 Duración del efecto: 6 a 12 meses (según protocolo y cuidados)",
    "📌 Molestias: Mínimas, con posible uso de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo (puede haber leve enrojecimiento temporal)",
  ],

  // Beneficios
  benefits: [
    "✨ Estimula la regeneración celular profunda",
    "✨ Mejora la firmeza y elasticidad",
    "✨ Hidratación prolongada y luminosidad",
    "✨ Favorece la reparación de cicatrices",
    "✨ Potencia otros tratamientos estéticos",
    "✨ Seguro y biocompatible",
  ],

  // Información importante
  infoTitle: "Información importante",
  infoItems: [
    "El plan se define tras evaluación médica (zonas, número de sesiones y posibles combinaciones).",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas.",
  ],

  // Indicaciones principales (grilla final)
  features: [
    "Piel envejecida o dañada",
    "Arrugas finas y pérdida de firmeza",
    "Piel deshidratada y apagada",
    "Cicatrices de acné o quirúrgicas",
    "Piel sensible o con tendencia a inflamación",
  ],

  // (Opcional) CTA si lo renderizás:
  // cta: {
  //   label: "Quiero regenerar mi piel con PDRN",
  //   href: "https://wa.me/XXXXXXXXXXX?text=Hola%20quiero%20regenerar%20mi%20piel%20con%20PDRN",
  // },
},
// app.js -> perServiceContent -> NUEVO OBJETO
"exosomas": {
  detailTitle: "Exosomas – Terapia Avanzada de Regeneración y Rejuvenecimiento Celular",

  // Imagen principal
  mainImage: "./assets/img/servicios/exosomas/1.jpg",

  // Galería (hasta 3)
  gallery: [
    "/assets/services/exosomas/portada.jpg",
    "/assets/services/exosomas/antes-despues-1.jpg",
    "/assets/services/exosomas/artistica-o-procedimiento.jpg",
  ],

  // Intro (párrafos)
  description: [
    "Los exosomas son nanopartículas liberadas de forma natural por las células, que contienen proteínas, lípidos y material genético con la capacidad de comunicar y reparar células dañadas.",
    "En medicina estética, se utilizan exosomas de grado médico, altamente purificados, para estimular la regeneración celular, la producción de colágeno y elastina, y mejorar visiblemente la calidad de la piel.",
    "Es un tratamiento de última generación, indicado para quienes buscan rejuvenecimiento profundo, reparación del daño cutáneo y prevención del envejecimiento.",
  ],

  // Zonas de aplicación
  bulletsTop: [
    "Rostro",
    "Cuello",
    "Escote",
    "Manos",
    "Cuero cabelludo (estímulo capilar)",
  ],

  // Protocolo (nota intermedia)
  descNote:
    "Protocolo sugerido: 3 a 4 sesiones iniciales cada 2 a 4 semanas. En casos avanzados (cicatrices severas, caída capilar intensa), hasta 6 sesiones iniciales. Mantenimiento: 1 sesión cada 4 a 6 meses para prolongar resultados.",

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 20 a 30 minutos",
    "📌 Resultados: Progresivos, visibles desde las primeras semanas",
    "📌 Duración del efecto: 6 a 12 meses (según protocolo)",
    "📌 Molestias: Mínimas, con posible uso de anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo (puede haber enrojecimiento temporal)",
  ],

  // Beneficios
  benefits: [
    "✨ Regeneración celular profunda",
    "✨ Estimula colágeno y elastina",
    "✨ Mejora textura, luminosidad y firmeza",
    "✨ Reduce signos visibles de envejecimiento",
    "✨ Acelera la recuperación de la piel",
    "✨ Potencia resultados de otros tratamientos estéticos",
  ],

  // Información importante
  infoTitle: "Información importante",
  infoItems: [
    "Los exosomas utilizados en estética son seguros, estandarizados y libres de células, lo que reduce el riesgo de rechazo o reacciones adversas.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas posteriores.",
  ],

  // Indicaciones principales (grilla final)
  features: [
    "Piel envejecida o dañada",
    "Arrugas finas y pérdida de elasticidad",
    "Manchas y tono desigual",
    "Cicatrices o marcas",
    "Caída o debilitamiento capilar",
    "Recuperación post láser/microagujas/peeling",
  ],

  // (Opcional) CTA si lo usás:
  // cta: {
  //   label: "Quiero rejuvenecer mi piel con Exosomas",
  //   href: "https://wa.me/XXXXXXXXXXX?text=Hola%20quiero%20rejuvenecer%20mi%20piel%20con%20Exosomas",
  // },
},
// app.js -> perServiceContent -> NUEVO OBJETO
"plasma": {
  detailTitle: "Plasma Rico en Plaquetas (PRP) – Regeneración Celular y Rejuvenecimiento Natural",

  // Imagen principal
  mainImage: "./assets/img/servicios/plasma/1.jpg",

  // Galería (hasta 3)
  gallery: [
    "/assets/services/prp/portada.jpg",
    "/assets/services/prp/antes-despues-1.jpg",
    "/assets/services/prp/artistica-o-procedimiento.jpg",
  ],

  // Intro (párrafos)
  description: [
    "El Plasma Rico en Plaquetas (PRP) es un tratamiento regenerativo y biocompatible, elaborado a partir de la propia sangre del paciente, que concentra factores de crecimiento para estimular la regeneración celular, la producción de colágeno y la reparación de tejidos.",
    "Es una opción segura y natural para rejuvenecer la piel, mejorar su calidad y favorecer su recuperación tras otros procedimientos estéticos.",
  ],

  // Zonas de aplicación
  bulletsTop: [
    "Rostro",
    "Cuello",
    "Escote",
    "Manos",
    "Cuero cabelludo (estimulación capilar)",
  ],

  // 📌 Datos del procedimiento
  bulletsMeta: [
    "📌 Duración del procedimiento: 30 a 45 minutos",
    "📌 Resultados: Progresivos, visibles a partir de la segunda semana",
    "📌 Duración del efecto: 6 a 12 meses (según cuidados y protocolo)",
    "📌 Molestias: Mínimas, ya que se utiliza anestesia tópica",
    "📌 Tiempo de recuperación: No requiere reposo (puede presentarse leve enrojecimiento temporal)",
  ],

  // Beneficios
  benefits: [
    "✨ Tratamiento 100% natural y seguro",
    "✨ Estimula la producción de colágeno y elastina",
    "✨ Mejora la textura y luminosidad de la piel",
    "✨ Favorece la regeneración celular",
    "✨ Potencia resultados de otros tratamientos estéticos",
    "✨ Puede utilizarse también en terapia capilar",
  ],

  // Información importante
  infoTitle: "Información importante",
  infoItems: [
    "Al ser un tratamiento autólogo (del propio paciente), no genera rechazo ni alergias.",
    "Se recomienda un protocolo inicial de 3 sesiones, espaciadas 30 días entre sí, seguido de mantenimiento.",
    "Evitar exposición solar, maquillaje y ejercicio intenso durante las primeras 24 horas posteriores.",
  ],

  // Indicaciones principales (grilla final)
  features: [
    "Piel opaca y deshidratada",
    "Pérdida de elasticidad y firmeza",
    "Arrugas finas y líneas de expresión",
    "Cicatrices de acné o marcas",
    "Caída o debilitamiento capilar",
  ],

  // (Opcional) CTA
  // cta: {
  //   label: "Quiero rejuvenecer mi piel con PRP",
  //   href: "https://wa.me/XXXXXXXXXXX?text=Hola%20quiero%20rejuvenecer%20mi%20piel%20con%20PRP",
  // },
},




  // (Ejemplos de Skimboosters: ids de muestra; si quieres títulos distintos, añade aquí)
  "NCTF": { detailTitle: "NCTF HA 35 de Filorga – Revitalización Cutánea" },
  "Skinvive": { detailTitle: "Skinvive by Juvederm – Hidratación Profunda" },
  "Restyline": { detailTitle: "Restylane Skinboosters – Piel Luminosa" },
}

// Datos
const data = { 
  categories: [
    {
      id: "facial",
      name: "Rellenos faciales (Ácido Hialuronico )",
      services: [
        makeService("rinomodelacion", "Rinomodelación", "Facial procedures", 170.0, 4.9),
        makeService("diseño-labios", "Diseño de labios", "Facial procedures", 160.0, 4.8),
        makeService("relleno-ojeras", "Correccion de ojeras", "Facial procedures", 150.0, 4.7),
        makeService("contorno-mandibular", "Contorno mandibular", "Facial procedures", 155.0, 4.6),
        makeService("proyeccion-menton", "Proyección de mentón", "Facial procedures", 175.0, 4.7),
        makeService("armonizacion-facial", "Armonización facial (Full Face)", "Facial procedures", 0.0, 4.9), // ← nuevo
      ],
    },
    {
      id: "breast",
      name: "Toxina Botulínica (BOTOX)",
      services: [
        makeService("tercio-superior", "Arrugas del tercio superior (frente, entrecejos y periocular)", "Botox procedures", 190.0, 4.9),
        makeService("bruxismo", "Bruxismo (tensión y dolor mandibular)", "Botox procedures", 180.0, 4.7),
        makeService("hiperhidrosis", "Hiperhidrosis axilar", "Botox procedures", 200.0, 4.8),
      ],
    },
    {
      id: "body",
      name: "Bioestimuladores de Colágeno",
      services: [
        makeService("sculptra", "Sculptra", "Body procedures", 300.0, 4.8),
        makeService("radiesse", "Radiesse", "Body procedures", 280.0, 4.7),
        makeService("facetem", "Facetem", "Body procedures", 280.0, 4.7), // id duplicado según tu lista (puedes cambiarlo luego)
        makeService("harmonyca", "HarmonyCa", "Body procedures", 290.0, 4.7),
      ],
    },
    {
      id: "new",
      name: "Skimboosters",
      services: [
        makeService("skimboosters", "Skimboosters", "Body procedures", 280.0, 4.7),
      ],
    },
    {
      id: "lipoliticos",
      name: "Lipoliticos",
      services: [
        makeService("mesoterapia-lipolitica", "Mesoterapia lipolítica", "Body procedures", 280.0, 4.7),
        makeService("enzimas-recombinantes", "Enzimas recombinantes", "Body procedures", 280.0, 4.7),
      ],
    },
    {
      id: "terapia-regenerativa",
      name: "Terapia regenerativa",
      services: [
        makeService("pdrn", "PDRN", "Body procedures", 280.0, 4.7),
        makeService("exosomas", "Exosomas", "Body procedures", 280.0, 4.7),
        makeService("plasma", "Plasma", "Body procedures", 280.0, 4.7),
      ],
    },
    {
      id: "skin",
      name: "Tecnología Medica",
      services: [
        makeService("ultraformer-iii", "Ultraformer III – Ultrasonido micro y macro focalizado para lifting facial, contorno corporal y reducción de grasa localizada", "Skin care", 350.0, 4.9),
        makeService("lumenis-stellar-m22", "Lumenis Stellar M22 – Plataforma láser multifunción para manchas, rejuvenecimiento y mejora de la textura de la piel", "Skin care", 320.0, 4.8),
      ],
    },
  ],
}

function makeService(id, name, category, price, rating) {
  // Defaults por si falta algún campo
  const defaults = {
    detailTitle: null, // título largo opcional
    mainImage: "/assets/main-hero.png",
    gallery: ["/assets/gallery-1.png", "/assets/gallery-2.png", "/assets/gallery-3.png"],
    description: [
      "Descripción pendiente de cargar.",
      "Agrega contenido único para este servicio en perServiceContent.",
    ],
    features: ["Beneficio 1", "Beneficio 2", "Beneficio 3", "Beneficio 4"],

    // Nuevos campos opcionales (si no existen, no se muestran)
    bulletsTop: [],
    descNote: null,
    bulletsMeta: [],
    benefits: [],
    infoItems: [],
    benefitsTitle: "Beneficios",
    infoTitle: "Información importante / Educativa (Bloque para generar confianza)",
  }

  // Fusionar con contenidos específicos si existen
  const specific = perServiceContent[id] || {}
  return {
    id,
    name,       // nombre corto para la subcategoría/lista y el <option>
    category,
    price,
    rating,

    // Campos combinados
    detailTitle: specific.detailTitle ?? defaults.detailTitle ?? name,
    mainImage: specific.mainImage || defaults.mainImage,
    gallery: Array.isArray(specific.gallery) && specific.gallery.length ? specific.gallery : defaults.gallery,
    description: Array.isArray(specific.description) && specific.description.length ? specific.description : defaults.description,
    features: Array.isArray(specific.features) && specific.features.length ? specific.features : defaults.features,

    // Nuevos campos
    bulletsTop: Array.isArray(specific.bulletsTop) ? specific.bulletsTop : defaults.bulletsTop,
    descNote: typeof specific.descNote === "string" ? specific.descNote : defaults.descNote,
    bulletsMeta: Array.isArray(specific.bulletsMeta) ? specific.bulletsMeta : defaults.bulletsMeta,
    benefits: Array.isArray(specific.benefits) ? specific.benefits : defaults.benefits,
    infoItems: Array.isArray(specific.infoItems) ? specific.infoItems : defaults.infoItems,
    benefitsTitle: specific.benefitsTitle || defaults.benefitsTitle,
    infoTitle: specific.infoTitle || defaults.infoTitle,
  }
}

// Estado
let selected = data.categories[0].services[1] // por defecto el segundo de la primera categoría

// Utilidades
const $ = (sel, root = document) => root.querySelector(sel)
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel))
const formatPrice = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD" })
const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
const EASING = "cubic-bezier(0.22, 1, 0.36, 1)"
const DURATION = 280

// Render inicial
document.addEventListener("DOMContentLoaded", () => {
  renderAccordion()
  renderServiceSelect()
  // Inicial sin animación
  renderDetail(selected)
  bindForm()
})

function renderAccordion() {
  const container = $("#accordion")
  container.innerHTML = ""

  data.categories.forEach((cat, idx) => {
    const item = document.createElement("div")
    item.className = "accordion-item"
    item.dataset.open = idx === 0 ? "true" : "false"

    // Header
    const header = document.createElement("button")
    header.type = "button"
    header.className = "acc-header"
    header.setAttribute("aria-expanded", idx === 0 ? "true" : "false")
    header.innerHTML = `
      <span>${cat.name}</span>
      <span class="acc-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    `

    // Body
    const body = document.createElement("div")
    body.className = "acc-body"

    const ul = document.createElement("ul")
    ul.className = "service-list"
    cat.services.forEach((svc) => {
      const li = document.createElement("li")
      const btn = document.createElement("button")
      btn.type = "button"
      btn.className = "service-btn" + (svc.id === selected.id ? " active" : "")
      btn.textContent = svc.name
      btn.addEventListener("click", () => selectService(svc))
      li.appendChild(btn)
      ul.appendChild(li)
    })
    body.appendChild(ul)

    // Divider para la primera categoría (como en la captura)
    if (idx === 0) {
      const div = document.createElement("div")
      div.className = "divider"
      body.appendChild(div)
    }

    // Click header: animar apertura/cierre con slide
    header.addEventListener("click", () => {
      $$(".accordion-item", container).forEach((el) => {
        const b = $(".acc-body", el)
        if (el !== item && el.dataset.open === "true") {
          el.dataset.open = "false"
          $(".acc-header", el).setAttribute("aria-expanded", "false")
          slideHeight(b, false)
        }
      })

      const open = item.dataset.open === "true"
      item.dataset.open = open ? "false" : "true"
      header.setAttribute("aria-expanded", open ? "false" : "true")
      slideHeight(body, !open)
    })

    item.appendChild(header)
    item.appendChild(body)
    container.appendChild(item)

    // Estado inicial con altura calculada
    requestAnimationFrame(() => {
      if (item.dataset.open === "true") {
        setOpenHeight(body)
        body.style.opacity = "1"
      } else {
        body.style.height = "0px"
        body.style.opacity = "0"
      }
    })
  })
}

// Transición de altura "slide"
function slideHeight(el, open) {
  if (prefersReduced) {
    // Sin animación
    if (open) {
      setOpenHeight(el)
      el.style.opacity = "1"
    } else {
      el.style.height = "0px"
      el.style.opacity = "0"
    }
    return
  }

  const startHeight = el.getBoundingClientRect().height
  const endHeight = open ? getAutoHeight(el) : 0

  el.style.overflow = "hidden"
  el.style.transition = `height ${DURATION}ms ${EASING}, opacity 160ms linear`
  el.style.height = `${startHeight}px`
  el.style.opacity = open ? "1" : "0"

  // Forzar reflow
  void el.offsetHeight

  el.style.height = `${endHeight}px`

  const clean = () => {
    el.style.transition = ""
    el.style.overflow = ""
    if (open) {
      setOpenHeight(el)
    } else {
      el.style.height = "0px"
    }
    el.removeEventListener("transitionend", clean)
  }
  el.addEventListener("transitionend", clean)
}

// Altura "auto" calculada
function getAutoHeight(el) {
  const prev = el.style.height
  el.style.height = "auto"
  const h = el.getBoundingClientRect().height
  el.style.height = prev
  return h
}
function setOpenHeight(el) {
  el.style.height = "auto"
}

function selectService(svc) {
  selected = svc
  // Resaltar en lista con animación
  $$(".service-btn").forEach((b) => b.classList.toggle("active", b.textContent === svc.name))
  // Sincronizar select del formulario
  const select = $("#service-select")
  if (select) select.value = svc.id
  // Transición de detalle
  swapDetail(svc)
}

function renderServiceSelect() {
  const select = $("#service-select")
  select.innerHTML = `<option value="" disabled>Type of service</option>`
  data.categories
    .flatMap((c) => c.services)
    .forEach((s) => {
      const opt = document.createElement("option")
      opt.value = s.id
      opt.textContent = s.name
      select.appendChild(opt)
    })
  // Valor inicial
  select.value = selected.id
  select.addEventListener("change", (e) => {
    const id = e.target.value
    const svc = data.categories.flatMap((c) => c.services).find((s) => s.id === id)
    if (svc) selectService(svc)
  })
}

// Render inicial sin animación
function renderDetail(svc) {
  const root = $("#detail")
  root.innerHTML = `<div class="detail-card in">${getDetailMarkup(svc)}</div>`
}

// Swap con animación (crossfade + shared-axis)
function swapDetail(svc) {
  const root = $("#detail")
  const current = root.querySelector(".detail-card")

  const next = document.createElement("div")
  next.className = "detail-card"
  next.innerHTML = getDetailMarkup(svc)
  root.appendChild(next)

  if (prefersReduced) {
    // Reemplazo instantáneo si reduce motion
    if (current) root.removeChild(current)
    next.classList.add("in")
    return
  }

  // Inicio de animación
  requestAnimationFrame(() => {
    // salir el actual
    if (current) {
      current.classList.add("leaving")
      current.addEventListener(
        "transitionend",
        () => {
          current?.parentElement?.removeChild(current)
        },
        { once: true },
      )
    }
    // entrar el nuevo
    next.classList.add("in")
  })
}

function getDetailMarkup(svc) {
  const title = svc.detailTitle || svc.name

  const hasGallery = Array.isArray(svc.gallery) && svc.gallery.length > 0
  const hasFeatures = Array.isArray(svc.features) && svc.features.length > 0

  // Features en 2 columnas
  const mid = hasFeatures ? Math.ceil(svc.features.length / 2) : 0
  const colA = hasFeatures ? svc.features.slice(0, mid) : []
  const colB = hasFeatures ? svc.features.slice(mid) : []

  // Secciones nuevas (condicionales)
  const introHtml = Array.isArray(svc.description) && svc.description.length
    ? `<div class="prose">${svc.description.map((p) => `<p>${p}</p>`).join("")}</div>`
    : ""

  const bulletsTopHtml = Array.isArray(svc.bulletsTop) && svc.bulletsTop.length
    ? `<ul class="bullet-list">${svc.bulletsTop.map((i) => `<li>${i}</li>`).join("")}</ul>`
    : ""

  const descNoteHtml = typeof svc.descNote === "string" && svc.descNote.trim()
    ? `<p class="note">${svc.descNote}</p>`
    : ""

  const bulletsMetaHtml = Array.isArray(svc.bulletsMeta) && svc.bulletsMeta.length
    ? `<ul class="bullet-list">${svc.bulletsMeta.map((i) => `<li>${i}</li>`).join("")}</ul>`
    : ""

  const galleryHtml = hasGallery
    ? `
   <div class="gallery">
  ${svc.gallery.slice(0, 3).map((g, i) => `
    <div class="gitem"><img class="zoomable" src="${g}" alt="${title} – imagen ${i + 1}"></div>
  `).join("")}
</div>


    `
    : ""

  const benefitsHtml = Array.isArray(svc.benefits) && svc.benefits.length
    ? `
      <h3 class="subheading">${svc.benefitsTitle || "Beneficios"}</h3>
      <ul class="bullet-list">${svc.benefits.map((b) => `<li>${b}</li>`).join("")}</ul>
    `
    : ""

  const infoHtml = Array.isArray(svc.infoItems) && svc.infoItems.length
    ? `
      <h3 class="subheading">${svc.infoTitle || "Información importante / Educativa (Bloque para generar confianza)"}</h3>
      <ul class="bullet-list">${svc.infoItems.map((b) => `<li>${b}</li>`).join("")}</ul>
    `
    : ""

  const featuresHtml = hasFeatures
    ? `
      <div class="features">
        <ul>${colA.map((f) => featureLi(f)).join("")}</ul>
        <ul>${colB.map((f) => featureLi(f)).join("")}</ul>
      </div>
    `
    : ""

  return `
    <div class="detail-header">
      <div class="detail-meta">
        <span class="category-text">${svc.category}</span>
        <h1 class="detail-title">${title}</h1>
      </div>
      <div class="detail-right">
        <div class="stars-wrapper">
          <div class="stars" aria-label="Rating ${svc.rating} de 5">
            ${renderStars(svc.rating)}
          </div>
        </div>
        <div class="price">${formatPrice(svc.price)}</div>
      </div>
    </div>

 <div class="main-image">
  <img class="zoomable" src="${svc.mainImage}" alt="${title}">
</div>



    ${introHtml}
    ${bulletsTopHtml}
    ${descNoteHtml}
    ${bulletsMetaHtml}
    ${galleryHtml}
    ${benefitsHtml}
    ${infoHtml}
    ${featuresHtml}
  `
}

function renderStars(rating) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  return Array.from({ length: 5 }, (_, i) => {
    const filled = i < full || (i === full && half)
    return `
      <svg class="star ${filled ? "filled" : ""}" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" ${filled ? 'fill="currentColor"' : ""}/>
      </svg>
    `
  }).join("")
}

function featureLi(text) {
  return `
    <li>
      <span class="check" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </span>
      <span>${text}</span>
    </li>
  `
}

function bindForm() {
  const form = $("#appointment-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = $("#name").value.trim()
    const email = $("#email").value.trim()
    const date = $("#date").value
    const svcId = $("#service-select").value

    if (!name || !email || !date || !svcId) {
      showToast("Completá todos los campos para reservar.")
      return
    }
    const svc = data.categories.flatMap((c) => c.services).find((s) => s.id === svcId)
    showToast(`Turno solicitado: ${name} — ${svc?.name || "Servicio"} — ${date}`)
    form.reset()
    // Mantener el servicio seleccionado en el select
    $("#service-select").value = selected.id
  })
}

// ====== Lightbox de imagen con navegación (main + gallery) ======
(function initImageLightbox() {
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('img-modal-img');
  const btnPrev = document.getElementById('img-modal-prev');
  const btnNext = document.getElementById('img-modal-next');
  const btnClose = document.getElementById('img-modal-close');

  if (!modal || !modalImg || !btnClose) return;

  const state = { list: [], index: 0 };

  // Obtiene la lista de imágenes del detalle actual: primero main, luego gallery
  const computeList = () => {
    const scope = document.getElementById('detail');
    if (!scope) return [];
    const nodes = scope.querySelectorAll('.main-image img, .gallery img');
    // Quitar duplicados por src manteniendo el orden
    const map = new Map();
    nodes.forEach((n) => {
      const src = n.currentSrc || n.src;
      if (!src) return;
      if (!map.has(src)) map.set(src, { src, alt: n.alt || '' });
    });
    return Array.from(map.values());
  };

  const toggleArrows = () => {
    const hasPrev = state.index > 0;
    const hasNext = state.index < state.list.length - 1;
    if (btnPrev) btnPrev.hidden = !hasPrev;
    if (btnNext) btnNext.hidden = !hasNext;
  };

  const render = () => {
    const item = state.list[state.index];
    if (!item) return close();
    modalImg.src = item.src;
    modalImg.alt = item.alt;
    toggleArrows();
  };

  const openFromIndex = (idx) => {
    state.list = computeList();
    if (!state.list.length) return;
    state.index = Math.max(0, Math.min(idx, state.list.length - 1));
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    render();
  };

  const openFromImg = (imgEl) => {
    const src = imgEl.currentSrc || imgEl.src;
    const list = computeList();
    if (!list.length) return;
    const idx = list.findIndex((i) => i.src === src);
    state.list = list;
    state.index = idx === -1 ? 0 : idx;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    render();
  };

  const close = () => {
    modal.setAttribute('hidden', '');
    modalImg.src = '';
    document.body.style.overflow = '';
  };

  // Eventos UI
  btnClose.addEventListener('click', close);

  // Cerrar al clicar fuera de la imagen
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  if (btnPrev) btnPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.index > 0) {
      state.index -= 1;
      render();
    }
  });

  if (btnNext) btnNext.addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.index < state.list.length - 1) {
      state.index += 1;
      render();
    }
  });

  // Teclado: Esc, ←, →
  document.addEventListener('keydown', (e) => {
    if (modal.hasAttribute('hidden')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft' && state.index > 0) {
      state.index -= 1; render();
    }
    if (e.key === 'ArrowRight' && state.index < state.list.length - 1) {
      state.index += 1; render();
    }
  });

  // Delegación: abrir desde cualquier <img.zoomable> renderizado en el detalle
  document.addEventListener('click', (e) => {
    const img = e.target.closest('img.zoomable');
    if (!img) return;
    e.preventDefault();
    openFromImg(img);
  }, { passive: true });

  // (Opcional) Si alguna vez quisieras abrir el modal en la primera imagen por código:
  // openFromIndex(0)
})();



function showToast(msg) {
  const t = $("#toast")
  t.textContent = msg
  t.hidden = false
  clearTimeout(showToast._timer)
  showToast._timer = setTimeout(() => {
    t.hidden = true
  }, 3000)
}
