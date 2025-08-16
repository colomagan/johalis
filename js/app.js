// ======================================================
// Archivo: services.js (completo)
// Mejora: cada servicio trae sus propias imágenes, descripciones y features
// SIN cambiar tus líneas de makeService(...) en data.
// Solo se añadió el objeto perServiceContent y se actualizó makeService para fusionar.
// ======================================================

// --- Contenidos específicos por servicio (rutas de ejemplo, cámbialas por las reales) ---
const perServiceContent = {
  // Ácido Hialurónico
  "relleno-ojeras": {
    mainImage: "/assets/services/ojeras/main.jpg",
    gallery: [
      "/assets/services/ojeras/1.jpg",
      "/assets/services/ojeras/2.jpg",
      "/assets/services/ojeras/3.jpg",
    ],
    description: [
      "Mejora el hundimiento y la sombra en el área periocular reduciendo el aspecto cansado.",
      "Técnica segura con enfoque personalizado para resultados naturales e inmediatos.",
    ],
    features: [
      "Duración: 9–12 meses",
      "Procedimiento: 30–45 min",
      "Downtime mínimo",
      "Revisión a los 7–15 días",
    ],
  },
  "relleno-labios": {
    mainImage: "/assets/services/labios/main.jpg",
    gallery: [
      "/assets/services/labios/1.jpg",
      "/assets/services/labios/2.jpg",
    ],
    description: [
      "Perfilado, hidratación y volumen armónico sin efecto sobrecorregido.",
      "Definición de arco de cupido y comisuras con técnicas avanzadas.",
    ],
    features: [
      "Duración: 9–12 meses",
      "Anestesia tópica incluida",
      "Plan de retoque opcional",
      "Evaluación fotográfica previa",
    ],
  },
  "rinomodelacion": {
    mainImage: "/assets/services/rino/main.jpg",
    gallery: [
      "/assets/services/rino/1.jpg",
      "/assets/services/rino/2.jpg",
      "/assets/services/rino/3.jpg",
    ],
    description: [
      "Corrección de dorso, punta y proyección sin cirugía con resultados inmediatos.",
      "Armonización del perfil manteniendo proporciones faciales.",
    ],
    features: [
      "Duración: 12–18 meses",
      "No requiere quirófano",
      "Evaluación de perfil",
      "Seguimiento post-procedimiento",
    ],
  },
  "relleno-pomulos": {
    mainImage: "/assets/services/pomulos/main.jpg",
    gallery: [
      "/assets/services/pomulos/1.jpg",
      "/assets/services/pomulos/2.jpg",
    ],
    description: [
      "Reposición de volumen malar para efecto ‘lifting’ sin cirugía.",
      "Mejora la proyección del tercio medio facial.",
    ],
    features: [
      "Duración: 12–18 meses",
      "Resultados naturales",
      "Plan por etapas disponible",
      "Baja inflamación",
    ],
  },
  "contorno-mandibular": {
    mainImage: "/assets/services/mandibular/main.jpg",
    gallery: [
      "/assets/services/mandibular/1.jpg",
      "/assets/services/mandibular/2.jpg",
    ],
    description: [
      "Definición de la línea mandibular para un aspecto firme y estilizado.",
      "Armoniza el contorno del tercio inferior.",
    ],
    features: [
      "Duración: 12–18 meses",
      "Moldeado preciso",
      "Análisis de perfil 2D/3D",
      "Recuperación rápida",
    ],
  },
  "proyeccion-menton": {
    mainImage: "/assets/services/menton/main.jpg",
    gallery: [
      "/assets/services/menton/1.jpg",
      "/assets/services/menton/2.jpg",
    ],
    description: [
      "Mejora la armonía facial corrigiendo retrognatia leve.",
      "Aporta definición y equilibrio al perfil.",
    ],
    features: [
      "Duración: 12–18 meses",
      "Resultados inmediatos",
      "Control a los 15 días",
      "Plan de mantenimiento",
    ],
  },

  // Bioestimuladores de Colágeno
  "sculptra": {
    mainImage: "/assets/services/sculptra/main.jpg",
    gallery: [
      "/assets/services/sculptra/1.jpg",
      "/assets/services/sculptra/2.jpg",
    ],
    description: [
      "Estimula la producción de colágeno para una mejora progresiva de firmeza y calidad de piel.",
      "Ideal para flacidez leve a moderada en rostro y cuerpo.",
    ],
    features: [
      "Efecto gradual (6–12 semanas)",
      "2–3 sesiones recomendadas",
      "Resultados 18–24 meses",
      "Apto para varias zonas",
    ],
  },
  "radiesse": {
    mainImage: "/assets/services/radiesse/main.jpg",
    gallery: [
      "/assets/services/radiesse/1.jpg",
    ],
    description: [
      "Hidroxiapatita cálcica con efecto tensor inmediato y bioestimulación sostenida.",
      "Indicado para rostro, cuello y manos.",
    ],
    features: [
      "Duración: 12–18 meses",
      "Definición y tensado",
      "Se puede diluir para skin-boosting",
      "Recuperación rápida",
    ],
  },
  "harmonyca": {
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
  "hiperhidrosis": {
    mainImage: "/assets/services/hiperhidrosis/main.jpg",
    gallery: [
      "/assets/services/hiperhidrosis/1.jpg",
      "/assets/services/hiperhidrosis/2.jpg",
    ],
    description: [
      "Bloqueo temporal de glándulas sudoríparas para reducir la sudoración excesiva.",
      "Aplicable en axilas, manos y pies.",
    ],
    features: [
      "Efecto 6–9 meses",
      "Resultado a 3–7 días",
      "Anestesia tópica",
      "Rápida reincorporación",
    ],
  },
  "bruxismo": {
    mainImage: "/assets/services/bruxismo/main.jpg",
    gallery: [
      "/assets/services/bruxismo/1.jpg",
    ],
    description: [
      "Relaja el músculo masetero para disminuir tensión, dolor y desgaste dental.",
      "Puede estilizar el tercio inferior del rostro.",
    ],
    features: [
      "Efecto 3–6 meses",
      "Mejora cefaleas tensionales",
      "Aplicación precisa",
      "Sin baja laboral",
    ],
  },
  "tercio-superior": {
    mainImage: "/assets/services/tercio-superior/main.jpg",
    gallery: [
      "/assets/services/tercio-superior/1.jpg",
      "/assets/services/tercio-superior/2.jpg",
    ],
    description: [
      "Suaviza líneas de expresión en frente, entrecejo y patas de gallo.",
      "Mantiene movilidad natural con aspecto descansado.",
    ],
    features: [
      "Efecto a 3–5 días",
      "Duración 3–4 meses",
      "Retoque opcional",
      "Apto para primera vez",
    ],
  },

  // Aparatología
  "ultraformer-iii": {
    mainImage: "/assets/services/ultraformer/main.jpg",
    gallery: [
      "/assets/services/ultraformer/1.jpg",
      "/assets/services/ultraformer/2.jpg",
    ],
    description: [
      "Ultrasonido micro y macro focalizado para lifting facial y contorno corporal.",
      "Tensado progresivo sin cirugía ni fotosensibilidad.",
    ],
    features: [
      "Efecto 8–12 semanas",
      "1–2 sesiones/año",
      "Protocolos por zona",
      "Sin downtime relevante",
    ],
  },
  "lumenis-stellar-m22": {
    mainImage: "/assets/services/m22/main.jpg",
    gallery: [
      "/assets/services/m22/1.jpg",
      "/assets/services/m22/2.jpg",
      "/assets/services/m22/3.jpg",
    ],
    description: [
      "Plataforma láser multifunción para manchas, rojeces y textura.",
      "Combina tecnologías IPL y ResurFX para resultados visibles.",
    ],
    features: [
      "Mejora tono y poro",
      "Plan 3–4 sesiones",
      "Resultados desde 1ª sesión",
      "Protocolos combinados",
    ],
  },
}

// Datos
const data = { 
  categories: [
    {
      id: "facial",
      name: "Ácido Hialurónico",
      services: [
        makeService("relleno-facial", "Rellenos faciales (Ácido Hialuronico )", "Facial procedures", 150.0, 4.7),
        makeService("rinomodelacion", "Rinomodelación", "Facial procedures", 170.0, 4.9),
        makeService("relleno-labios", "Relleno de labios", "Facial procedures", 160.0, 4.8),
        makeService("relleno-ojeras", "Correccion de ojeras", "Facial procedures", 150.0, 4.7),
        makeService("relleno-pomulos", "Relleno de pómulos", "Facial procedures", 155.0, 4.6),
        makeService("proyeccion-menton", "Proyección de mentón", "Facial procedures", 175.0, 4.7),
        makeService("contorno-mandibular", "Armonización facial ( Full Face)", "Facial procedures", 165.0, 4.5),
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
        makeService("radiesse", "Facetem", "Body procedures", 280.0, 4.7),
        makeService("harmonyca", "HarmonyCa", "Body procedures", 290.0, 4.7),
      ],
    },
    {
      id: "new",
      name: "Skimboosters",
      services: [
        makeService("NCTF", "NCTF HA 35 de Filorga", "Body procedures", 300.0, 4.8),
        makeService("Skinvive", "Skinvive  by Juvederm", "Body procedures", 280.0, 4.7),
        makeService("Restyline", "Restyline", "Body procedures", 280.0, 4.7),
      ],
    },
    {
      id: "skin",
      name: "Tecnología Medica",
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
    mainImage: "/assets/main-hero.png",
    gallery: ["/assets/gallery-1.png", "/assets/gallery-2.png", "/assets/gallery-3.png"],
    description: [
      "Descripción pendiente de cargar.",
      "Agrega contenido único para este servicio en perServiceContent.",
    ],
    features: [
      "Beneficio 1",
      "Beneficio 2",
      "Beneficio 3",
      "Beneficio 4",
    ],
  }

  // Fusionar con contenidos específicos si existen
  const specific = perServiceContent[id] || {}
  return {
    id,
    name,
    category,
    price,
    rating,
    mainImage: specific.mainImage || defaults.mainImage,
    gallery: Array.isArray(specific.gallery) && specific.gallery.length ? specific.gallery : defaults.gallery,
    description: Array.isArray(specific.description) && specific.description.length ? specific.description : defaults.description,
    features: Array.isArray(specific.features) && specific.features.length ? specific.features : defaults.features,
  }
}

// Estado
let selected = data.categories[0].services[1] // "Mini facelift" por defecto

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
  return `
    <div class="detail-header">
      <div class="detail-meta">
        <span class="category-text">${svc.category}</span>
        <h1 class="detail-title">${svc.name}</h1>
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
      <img src="${svc.mainImage}" alt="${svc.name} image" width="900" height="560">
    </div>

    <div class="prose">
      ${svc.description.map((p) => `<p>${p}</p>`).join("")}
    </div>

    <div class="gallery">
      ${svc.gallery
        .slice(0, 3)
        .map(
          (g, i) => `
        <div class="gitem"><img src="${g}" alt="Galería ${i + 1}" width="500" height="330"></div>
      `,
        )
        .join("")}
    </div>

    <div class="features">
      <ul>
        ${svc.features.map((f) => featureLi(f)).join("")}
      </ul>
      <ul>
        ${svc.features.map((f) => featureLi(f)).join("")}
      </ul>
    </div>

    <p class="prose" style="margin-top:20px">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos
      minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
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

function showToast(msg) {
  const t = $("#toast")
  t.textContent = msg
  t.hidden = false
  clearTimeout(showToast._timer)
  showToast._timer = setTimeout(() => {
    t.hidden = true
  }, 3000)
}
