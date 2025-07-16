// app.js
const CART_KEY = "vetCatCart";
const cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

// Actualiza contador
function updateCartCount() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById("cartCount").textContent = count;
}

// Añade al carrito
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
  alert("✅ Añadido al carrito");
}

// Renderiza carrito
function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;
  container.innerHTML = "";
  if (!cart.length) {
    container.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }
  cart.forEach(i => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.textContent = `Producto ID ${i.id} — Cantidad: ${i.qty}`;
    container.append(div);
  });
}

// Filtrado por categoría
function setupCategoryFilters() {
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      document.querySelectorAll(".product-card").forEach(card => {
        card.style.display =
          cat === "All" || card.dataset.category === cat
            ? ""
            : "none";
      });
    });
  });
}

// Buscador por nombre
function setupSearch() {
  const inp = document.getElementById("search");
  if (!inp) return;
  inp.addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".product-card").forEach(card => {
      const name = card.dataset.name;
      card.style.display = name.includes(term) ? "" : "none";
    });
  });
}

// Botones carrito
function setupCartButtons() {
  document.querySelectorAll(".add-cart, #addCart").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  setupCategoryFilters();
  setupSearch();
  setupCartButtons();
  renderCart();
});
