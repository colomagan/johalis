// Datos
const data = {
  categories: [
    {
      id: "facial",
      name: "Facial Procedures",
      services: [
        makeService("facelift", "Facelift", "Facial procedures", 189.5, 4.5),
        makeService("mini-facelift", "Mini facelift", "Facial procedures", 159.5, 4.8),
        makeService("eyelid-lift", "Eyelid lift", "Facial procedures", 139.0, 4.6),
        makeService("brow-lift", "Brow lift", "Facial procedures", 129.0, 4.2),
        makeService("rhinoplasty", "Rhinoplasty", "Facial procedures", 299.0, 4.9),
        makeService("chin-implants", "Chin implants", "Facial procedures", 219.0, 4.4),
        makeService("facial-fillers", "Facial fillers", "Facial procedures", 119.0, 4.3),
      ],
    },
    {
      id: "body",
      name: "Body Procedures",
      services: [makeService("lipo", "Liposuction", "Body procedures", 399.0, 4.7)],
    },
    {
      id: "breast",
      name: "Breast procedures",
      services: [makeService("augmentation", "Breast augmentation", "Breast procedures", 499.0, 4.6)],
    },
    {
      id: "buttocks",
      name: "Buttocks",
      services: [makeService("buttocks-lift", "Buttocks lift", "Buttocks", 349.0, 4.1)],
    },
    {
      id: "skin",
      name: "Skin care",
      services: [makeService("peel", "Chemical peel", "Skin care", 89.0, 4.0)],
    },
  ],
}

function makeService(id, name, category, price, rating) {
  return {
    id,
    name,
    category,
    price,
    rating,
    mainImage: "assets/main-hero.jpg",
    gallery: ["assets/gallery-1.jpg", "assets/gallery-2.jpg", "assets/gallery-3.jpg"],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis magnam aliquid. Cupiditate!",
      "Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid.",
    ],
    features: [
      "Routine and medical care",
      "Excellence in Healthcare every",
      "Building a healthy environment",
      "cumsan lacus vel facilisis.",
    ],
  }
}

// Estado
let selected = data.categories[0].services[1] // "Mini facelift" por defecto

// Utilidades
const $ = (sel, root = document) => root.querySelector(sel)
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel))
const formatPrice = n => n.toLocaleString("en-US", { style: "currency", currency: "USD" })

// Render inicial
document.addEventListener("DOMContentLoaded", () => {
  renderAccordion()
  renderServiceSelect()
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
    header.addEventListener("click", () => {
      // Cerrar otros
      $$(".accordion-item", container).forEach(el => {
        if (el !== item) {
          el.dataset.open = "false"
          $(".acc-header", el).setAttribute("aria-expanded", "false")
          $(".acc-body", el).hidden = true
        }
      })
      // Toggle actual
      const open = item.dataset.open === "true"
      item.dataset.open = open ? "false" : "true"
      header.setAttribute("aria-expanded", open ? "false" : "true")
      body.hidden = open
    })

    // Body
    const body = document.createElement("div")
    body.className = "acc-body"
    body.hidden = idx !== 0

    const ul = document.createElement("ul")
    ul.className = "service-list"
    cat.services.forEach(svc => {
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

    item.appendChild(header)
    item.appendChild(body)
    container.appendChild(item)
  })
}

function selectService(svc) {
  selected = svc
  // Resaltar en lista
  $$(".service-btn").forEach(b => b.classList.toggle("active", b.textContent === svc.name))
  // Sincronizar select del formulario
  const select = $("#service-select")
  if (select) select.value = svc.id
  // Render detalle
  renderDetail(svc)
}

function renderServiceSelect() {
  const select = $("#service-select")
  select.innerHTML = `<option value="" disabled>Type of service</option>`
  data.categories.flatMap(c => c.services).forEach(s => {
    const opt = document.createElement("option")
    opt.value = s.id
    opt.textContent = s.name
    select.appendChild(opt)
  })
  // Valor inicial
  select.value = selected.id
  select.addEventListener("change", e => {
    const id = e.target.value
    const svc = data.categories.flatMap(c => c.services).find(s => s.id === id)
    if (svc) selectService(svc)
  })
}

function renderDetail(svc) {
  const root = $("#detail")
  root.innerHTML = `
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
      ${svc.description.map(p => `<p>${p}</p>`).join("")}
    </div>

    <div class="gallery">
      ${svc.gallery.slice(0,3).map((g,i)=>`
        <div class="gitem"><img src="${g}" alt="Galería ${i+1}" width="500" height="330"></div>
      `).join("")}
    </div>

    <div class="features">
      <ul>
        ${svc.features.map(f => featureLi(f)).join("")}
      </ul>
      <ul>
        ${svc.features.map(f => featureLi(f)).join("")}
      </ul>
    </div>

    <p class="prose" style="margin-top:20px">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos
      minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  `
}

function renderStars(rating){
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  return Array.from({length:5}, (_,i)=>{
    const filled = i < full || (i===full && half)
    return `
      <svg class="star ${filled?"filled":""}" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" ${filled?'fill="currentColor"':''}/>
      </svg>
    `
  }).join("")
}

function featureLi(text){
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

function bindForm(){
  const form = $("#appointment-form")
  form.addEventListener("submit", e=>{
    e.preventDefault()
    const name = $("#name").value.trim()
    const email = $("#email").value.trim()
    const date = $("#date").value
    const svcId = $("#service-select").value

    if(!name || !email || !date || !svcId){
      showToast("Completá todos los campos para reservar.")
      return
    }
    const svc = data.categories.flatMap(c=>c.services).find(s=>s.id===svcId)
    showToast(`Turno solicitado: ${name} — ${svc?.name || "Servicio"} — ${date}`)
    form.reset()
    // Mantener el servicio seleccionado en el select
    $("#service-select").value = selected.id
  })
}

function showToast(msg){
  const t = $("#toast")
  t.textContent = msg
  t.hidden = false
  clearTimeout(showToast._timer)
  showToast._timer = setTimeout(()=>{ t.hidden = true }, 3000)
}