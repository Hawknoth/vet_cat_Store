// server.js
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Motor de vistas y carpeta estática
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal con buscador de productos
app.get('/', (req, res) => {
  db.all("SELECT * FROM products", (err, products) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error de base de datos");
    }
    res.render('index', { products });
  });
});

// Detalle de producto
app.get('/product/:id', (req, res) => {
  db.get("SELECT * FROM products WHERE id = ?", [req.params.id], (err, product) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error de base de datos");
    }
    if (!product) return res.status(404).send("Producto no encontrado");
    res.render('product', { product });
  });
});

// Página de carrito (simulada)
app.get('/cart', (req, res) => {
  res.render('cart');
});

// Error handler genérico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Vaya! Algo salió mal.');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
