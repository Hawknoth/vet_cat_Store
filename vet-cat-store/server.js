// server.js
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Vistas y estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Home (lista + filtros)
app.get('/', (req, res) => {
  db.all("SELECT * FROM products", (err, products) => {
    if (err) return res.status(500).send("Error de base de datos");
    res.render('index', { products });
  });
});

// Detalle
app.get('/product/:id', (req, res) => {
  db.get("SELECT * FROM products WHERE id = ?", [req.params.id], (err, product) => {
    if (err) return res.status(500).send("Error de base de datos");
    if (!product) return res.status(404).send("Producto no encontrado");
    res.render('product', { product });
  });
});

// Carrito simulado
app.get('/cart', (req, res) => {
  res.render('cart');
});

// Error genérico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Vaya! Algo salió mal.');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

