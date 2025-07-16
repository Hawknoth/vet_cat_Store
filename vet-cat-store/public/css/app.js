// app.js
const cartKey = "vetCatCart";
const cart = JSON.parse(localStorage.getItem(cartKey) || "[]");

// Actualiza el contador de carrito
function updateCartCount() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById("cartCount").textContent = count;
}

// Añade producto al carrito
function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, qty: 1 });
  localStorage.setItem(cartKey, JSON.stringify(cart));
  updateCartCount();
}

// Dibuja los productos en la página de carrito
function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;
  container.innerHTML = "";
  cart.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.textContent = `Producto ID ${item.id} — Cantidad: ${item.qty}`;
    container.append(card);
  });
}

// Buscador en la página principal
function setupSearch() {
  const searchInput = document.getElementById("search");
  if (!searchInput) return;
  searchInput.addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".product-card").forEach(card => {
      const name = card.dataset.name;
      card.style.display = name.includes(term) ? "" : "none";
    });
  });
}

// Vincula botones “Añadir al carrito”
function setupCartButtons() {
  document.querySelectorAll(".add-cart, #addCart").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
  });
}

// Inicialización global
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  setupSearch();
  setupCartButtons();
  renderCart();
});
